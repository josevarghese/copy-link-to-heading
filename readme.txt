=== Copy Link to Heading ===
Contributors: josevarghese
Tags: headings, copy link, content navigation, deep linking, anchor links
Requires at least: 5.0
Tested up to: 6.7.1
Requires PHP: 7.0
Stable tag: 1.1
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Adds a copy link icon to headings for easy copying, bookmarking, sharing, and navigation within the content.

== Description ==

Have you ever wanted to quickly copy a link to a specific heading section of content for bookmarking, sharing with friends or colleagues, or jumping straight to a heading without scrolling through the entire page? "Copy Link to Heading" makes it effortless!

This plugin automatically adds a small, unobtrusive link icon next to the headings in your posts, pages, or custom post types. With just one click, users can copy a direct link to the section for:

- Bookmarking the heading so they can continue reading later without scrolling.
- Sharing specific sections of content with friends, colleagues, or on social media.
- Quickly navigating to a specific part of a long article or documentation.
- Enhancing accessibility by enabling deep linking to specific sections.

The plugin is designed to be lightweight and user-friendly. It is perfect for blogs, documentation sites, WooCommerce stores, and any site with long-form content.

**Key Features:**

- Add a link icon next to the selected heading levels (H2, H3, etc.).
- Supports posts, pages, and custom post types.
- Customizable heading levels to display the link icon.
- Compatible with WooCommerce product pages and other custom post types.
- Generates anchor links, section links, and deep links for improved navigation.
- Simple settings page for quick configuration.
- Lightweight and optimized for performance.
- Option to always show the copy link to the heading icon for mobile devices

== How Links are Generated ==

- The plugin automatically generates anchor links for headings on the frontend when the page loads. No changes are required in the WordPress editor or post content.
- If a heading already has an anchor link, the plugin uses the existing anchor link URL for the "copy link" functionality.
Even if the heading text is modified later, the plugin dynamically regenerates the anchor link based on the updated heading text on the front end. This ensures that any changes made in the editor will not cause issues with link functionality.  
- This seamless approach ensures the plugin adapts to changes in content while maintaining reliable and accurate linking.

**Use Cases:**

- **Copy links to specific headings** using a heading URL generator to share with others or reference in emails or social media.
- **Bookmark sections of long articles or documentation** for easy navigation later.
- **Enable deep linking** to improve user experience on content-heavy websites.
- Help readers and collaborators quickly access key sections of your content with a bookmark link generator.

Whether you're managing a blog, a technical documentation site, or a WooCommerce store, this plugin ensures your audience can easily navigate and share content.

== Installation ==

1. Download and install the plugin from the WordPress Plugin Directory or upload the `copy-link-to-heading` folder to your `/wp-content/plugins/` directory.
2. Activate the plugin through the "Plugins" menu in WordPress.
3. Go to "Settings" -> "Copy Link to Heading" to configure the plugin.
4. Select the heading levels and content types where you want the link icon to appear.
5. Save your settings and enjoy enhanced content navigation!

== Frequently Asked Questions ==

= How do I enable the link icons for specific content types? =

Visit "Settings" -> "Copy Link to Heading" in your WordPress dashboard. You can select which heading levels and content types (e.g., posts, pages, custom post types) will display the link icon.

= Can I customize the heading levels that display the icon? =

Yes! You can choose which heading levels (H1 to H6) to include from the settings page. By default, the plugin excludes H1, usually reserved for the main title. The page title won’t be shown with a link as the link is same as the page.

= Does the plugin support custom post types, such as WooCommerce products? =

Absolutely! The plugin is compatible with any public custom post type, including WooCommerce product pages.

= Will the link icons affect my website’s performance? =

No, the plugin is lightweight and optimized for performance. It enqueues only the necessary scripts and styles on pages where it's needed.

= I want some features and would like to contribute to this plugin? =
We welcome contributions! Feel free to create a pull request or submit a feature request on your mind. For bug reports and feature requests, please visit the issues section.

= How can I contribute to this awesome plugin? =
You can contribute to this Web Share plugin via our [GitHub repository](https://github.com/josevarghese/copy-link-to-heading/)

= How do I report bugs and new feature suggestions? =
You can report the bugs and request new features you need to see at our [GitHub repository page](https://github.com/josevarghese/copy-link-to-heading/issues) 

== Screenshots ==

1. **Settings Page:** Configure which heading levels and content types should display the link icon.
2. **Frontend Example:** A link icon is displayed next to a heading.
3. **Copy and Share:** Easily copy the link to the clipboard and share it.

== Changelog ==

= 1.1 =
** New Feature:** 
- A new option was added to the settings page to control the visibility of the copy link icon on mobile devices.
- When enabled (default), the icon is always visible on mobile for better usability on touchscreens.
- When disabled, the icon behaves like on desktops, appearing only on hover.

= 1.0 =
* Initial release: Adds link icons next to headings for easy sharing and navigation.
* Added: Ability to customize heading levels to display the link icon.
* Added: Compatibility with WooCommerce and other custom post types.