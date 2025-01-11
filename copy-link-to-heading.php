<?php
/**
 * Plugin Name: Copy Link to Heading
 * Description: Adds a copy link icon next to section headings.
 * Version: 1.0
 * Author: Jose Varghese
 * Requires at least: 5.0
 * Requires PHP: 7.0
 * Domain Path: /languages
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */
 
 if (!defined('ABSPATH')) {
     exit; // Exit if accessed directly
 }
 
 // Enqueue CSS and JS
 function clth_enqueue_assets() {
     if (!clth_should_load()) {
         return;
     }
 
     $version = clth_get_plugin_version();
     $plugin_url = plugin_dir_url(__FILE__);
 
     // Register CSS
     wp_register_style('clth-style', $plugin_url . 'css/clth-style.css', [], $version);
     wp_enqueue_style('clth-style');
 
     // Register JS
     wp_register_script('clth-script', $plugin_url . 'js/clth-script.js', [], $version, true);
     wp_enqueue_script('clth-script');
 
     // Pass data to JS
     wp_localize_script('clth-script', 'clthData', [
         'iconUrl' => $plugin_url . 'images/link-icon.png',
         'headings' => get_option('clth_heading_levels', ['h2', 'h3', 'h4', 'h5', 'h6']),
     ]);
 }
 add_action('wp_enqueue_scripts', 'clth_enqueue_assets');
 
 // Check whether to load the plugin on the current page
 function clth_should_load() {
     $current_post_type = get_post_type();
     $excluded_ids = get_option('clth_excluded_ids', []);
     $enabled_cpts = get_option('clth_enable_for_cpt', []);
     $show_for_posts = get_option('clth_enable_for_posts', true);
     $show_for_pages = get_option('clth_enable_for_pages', true);
 
     if (!is_array($excluded_ids)) {
         $excluded_ids = [];
     }
     if (!is_array($enabled_cpts)) {
         $enabled_cpts = [];
     }
 
     if (empty($current_post_type)) {
         return false;
     }
 
     // Check exclusion by ID
     if (in_array(get_the_ID(), $excluded_ids)) {
         return false;
     }
 
     // Check for specific content type
     if (
         (is_single() && $show_for_posts && $current_post_type === 'post') ||
         (is_page() && $show_for_pages && $current_post_type === 'page') ||
         (is_singular() && in_array($current_post_type, $enabled_cpts))
     ) {
         return true;
     }
 
     return false;
 }
 
 // Add settings page
 function clth_add_settings_page() {
     add_options_page(
         esc_html__('Copy Link to Heading Settings', 'copy-link-to-heading'),
         esc_html__('Copy Link to Heading', 'copy-link-to-heading'),
         'manage_options',
         'clth-settings',
         'clth_render_settings_page'
     );
 }
 add_action('admin_menu', 'clth_add_settings_page');
 
 // Render settings page
 function clth_render_settings_page() {
     ?>
     <div class="wrap">
         <h1><?php esc_html_e('Copy Link to Heading Settings', 'copy-link-to-heading'); ?></h1>
         <form method="post" action="options.php">
             <?php
             settings_fields('clth_options_group');
             do_settings_sections('clth-settings');
             ?>
             <table class="form-table">
                 <tr valign="top">
                     <th scope="row"><?php esc_html_e('Select heading levels to show link icon:', 'copy-link-to-heading'); ?></th>
                     <td>
                         <p class="description"><?php esc_html_e('By default, no icon is shown for H1 as it is typically used for the title of the page or post.', 'copy-link-to-heading'); ?></p>
                         <?php
                         $headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
                         $selected_headings = get_option('clth_heading_levels', ['h2', 'h3', 'h4', 'h5', 'h6']);
                         if (!is_array($selected_headings)) {
                             $selected_headings = [];
                         }
 
                         foreach ($headings as $heading) {
                             ?>
                             <label>
                                 <input type="checkbox" name="clth_heading_levels[]" value="<?php echo esc_attr($heading); ?>" <?php checked(in_array($heading, $selected_headings)); ?> />
                                 <?php echo esc_html(strtoupper($heading)); ?>
                             </label><br>
                             <?php
                         }
                         ?>
                     </td>
                 </tr>
                 <tr valign="top">
                     <th scope="row"><?php esc_html_e('Show link icons on the following content types:', 'copy-link-to-heading'); ?></th>
                     <td>
                         <input type="checkbox" name="clth_enable_for_posts" value="1" <?php checked(get_option('clth_enable_for_posts', true), 1); ?> /> <?php esc_html_e('Posts', 'copy-link-to-heading'); ?><br />
                         <input type="checkbox" name="clth_enable_for_pages" value="1" <?php checked(get_option('clth_enable_for_pages', true), 1); ?> /> <?php esc_html_e('Pages', 'copy-link-to-heading'); ?><br />
                         <?php
                         $args = ['public' => true, '_builtin' => false];
                         $post_types = get_post_types($args, 'objects');
                         $selected_cpts = get_option('clth_enable_for_cpt', []);
                         if (!is_array($selected_cpts)) {
                             $selected_cpts = [];
                         }
 
                         foreach ($post_types as $post_type) {
                             ?>
                             <label>
                                 <input type="checkbox" name="clth_enable_for_cpt[]" value="<?php echo esc_attr($post_type->name); ?>" <?php checked(in_array($post_type->name, $selected_cpts)); ?> />
                                 <?php echo esc_html($post_type->labels->singular_name); ?>
                             </label><br>
                             <?php
                         }
                         ?>
                     </td>
                 </tr>
                 <tr valign="top">
                     <th scope="row"><?php esc_html_e('Exclude Pages (IDs):', 'copy-link-to-heading'); ?></th>
                     <td>
                         <textarea name="clth_excluded_ids" rows="3" class="large-text"><?php echo esc_textarea(implode(',', get_option('clth_excluded_ids', []))); ?></textarea>
                         <p class="description"><?php esc_html_e('Enter the IDs of pages to exclude, separated by commas. Example: 12, 34, 56', 'copy-link-to-heading'); ?></p>
                     </td>
                 </tr>
             </table>
             <?php submit_button(); ?>
         </form>
     </div>
     <?php
 }
 
 // Add settings link on plugins page
 function clth_add_plugin_action_links($links) {
     $settings_link = '<a href="options-general.php?page=clth-settings">' . esc_html__('Settings', 'copy-link-to-heading') . '</a>';
     array_unshift($links, $settings_link);
     return $links;
 }
 add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'clth_add_plugin_action_links');
 
 // Register settings
 function clth_register_settings() {
     register_setting('clth_options_group', 'clth_heading_levels', ['sanitize_callback' => 'clth_sanitize_headings', 'default' => ['h2', 'h3', 'h4', 'h5', 'h6']]);
     register_setting('clth_options_group', 'clth_enable_for_posts', ['sanitize_callback' => 'clth_sanitize_checkbox', 'default' => true]);
     register_setting('clth_options_group', 'clth_enable_for_pages', ['sanitize_callback' => 'clth_sanitize_checkbox', 'default' => true]);
     register_setting('clth_options_group', 'clth_enable_for_cpt', ['sanitize_callback' => 'clth_sanitize_array', 'default' => []]);
     register_setting('clth_options_group', 'clth_excluded_ids', ['sanitize_callback' => 'clth_sanitize_ids', 'default' => []]);
 }
 add_action('admin_init', 'clth_register_settings');
 
 // Sanitization callbacks
 function clth_sanitize_headings($input) {
     return array_filter((array)$input, function ($value) {
         return in_array($value, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
     });
 }
 
 function clth_sanitize_checkbox($input) {
     return filter_var($input, FILTER_VALIDATE_BOOLEAN);
 }
 
 function clth_sanitize_array($input) {
     if (!is_array($input)) {
         return [];
     }
     return array_map('sanitize_key', $input);
 }
 
 function clth_sanitize_ids($input) {
     if (is_string($input)) {
         $input = explode(',', $input);
     }
     return array_filter(array_map('absint', (array)$input));
 }
 
 // Get plugin version
 function clth_get_plugin_version() {
     $plugin_data = get_file_data(__FILE__, ['Version' => 'Version']);
     return $plugin_data['Version'];
 }
 
 // Uninstall cleanup
 register_uninstall_hook(__FILE__, 'clth_uninstall_cleanup');
 function clth_uninstall_cleanup() {
     delete_option('clth_heading_levels');
     delete_option('clth_enable_for_posts');
     delete_option('clth_enable_for_pages');
     delete_option('clth_enable_for_cpt');
     delete_option('clth_excluded_ids');
 } 