=== Copy Link to Heading ===
Contributors: josevarghese
Tags: headings, copy link, content navigation, deep linking, anchor links
Requires at least: 5.0
Tested up to: 6.7.2
Requires PHP: 7.0
Stable tag: 1.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Adds a copy link icon to headings for easy copying anchor links, that helps to bookmarking, sharing, and navigation within the content.

== Description ==

Have you ever wanted to quickly copy a link to a specific heading section of your content for bookmarking, sharing with friends or colleagues, or jumping straight to a heading without scrolling through the entire page? Then, “Copy Link to Heading” plugin makes it effortless!

The Copy Link to Heading plugin automatically adds a small, unobtrusive link icon next to the headings in your posts, pages, or custom post types. With just one click, users can copy a direct anchor link to the heading section for:

- Bookmarking the heading so they can continue reading later without scrolling.
- Having anchor links will helps in your SEO.
- You can easily share specific heading content sections with friends and colleagues or on social media.
- Navigate quickly to a specific part of a long article or documentation.
- Enhancing accessibility by enabling deep linking to specific sections.

The plugin is designed to be lightweight and user-friendly. It is perfect for blogs, documentation sites, WooCommerce stores, and any site with long-form content.

**Key Features of Copy Link to Heading:**
- Copy Link to Heading plugin, adds a link icon next to the selected heading levels (H2, H3, etc.) based on your preferences selected within the settings page.
- We support posts, pages, and custom content post types.
- Easily customizable heading levels to display the link icon.
- Compatible with WooCommerce product pages and other custom post types.
- Generates anchor links, section links, and deep links for improved navigation with your pages.
- Very simple settings page for quick configuration.
- Lightweight and optimized for performance.
- Option to always show the copy link to the heading icon for mobile devices.
- Option to add a tooltip for the link icon or to choose the browser alert for copying the link of the heading.

== How does the anchor links are generated? ==
- When the page loads, the plugin automatically generates anchor links for headings on the frontend. No changes are required in the WordPress editor or post content.
- If a heading already has an anchor link, the plugin uses the existing anchor link URL for the “copy link” functionality.
- Even if the heading text is modified later, the plugin dynamically generates the anchor link when the page is loaded on the front end based on the heading text. That means any changes made in the editor will not cause issues with link functionality.
- This seamless approach ensures the plugin adapts to changes in content while maintaining reliable and accurate linking.
- So, install the “Copy Link to Heading” plugin on your WordPress website and configure the settings based on your preference to decide which content types and heading levels you want to show the copy link to the heading icon for.
- Our plugin will do everything on the front end out of the box without any hassle.

**Use Cases with the Page Jumps?:**
- The **copy links to specific headings** using a heading URL generator created by us, which makes it easy to share with others or reference in emails or social media. And when clicked via the link, the page will jump to the specific heading.
- You can **bookmark the heading sections of long articles or documentation for easy navigation**. Once you click the link, the heading will open using the anchor links.
- **Enable deep linking to improve user experience** on content-heavy websites.
- **Help readers and collaborators** quickly access key sections of your content with a bookmark link generator.

Whether managing a blog, a technical documentation site, or a WooCommerce store, this plugin ensures your audience can easily navigate and share content.

== Installation ==
1. Download and install the plugin from the WordPress Plugin Directory or upload the `copy-link-to-heading` folder to your `/wp-content/plugins/` directory.
2. Activate the plugin through the "Plugins" menu in WordPress.
3. Go to "Settings" -> "Copy Link to Heading" to configure the plugin.
4. Select the heading levels and content types where you want the link icon to appear.
5. Select other settings based on your preference.
6. Save your settings and enjoy enhanced content anchor link navigation!

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

= The plugin is not working on my website, what will I do? =

First, ensure that your website has SSL (https://) and you have cleared the cachings. If the issue persists when checking via an iconginto window after clearing the cache, perform a conflict check. If the problem still remains, [please open a new topic clearly explaining the issue and how we can improve it](https://wordpress.org/support/plugin/copy-link-to-heading/#new-post).
As this is a small plugin, your active contributions in reporting bugs and suggesting features are essential to make it better.

= How can I contribute to this awesome plugin? =

You can contribute to this Web Share plugin via our [GitHub repository](https://github.com/josevarghese/copy-link-to-heading/)

= How do I report bugs and new feature suggestions? =

You can report the bugs and request new features you need to see at our [GitHub repository page](https://github.com/josevarghese/copy-link-to-heading/issues) 

== Screenshots ==

1. **Frontend Example:** A link icon is displayed next to a heading.
2. **Settings Page:** Configure which heading levels and content types should display the link icon.

== Changelog ==

= 1.4 =
Released on 28 February 2025
Enhancements:
- Improved slug sanitization to prevent trailing hyphens in anchor links when the alphanumeric characters are there in the heading
- Removed admin notices from the plugin settings page to avoid interference from other plugins.

= 1.3 =
Released on 26 January 2025
New features:
- AAdded settings to customize the tooltip text based on your preferences.
- ABy default, the copy link feature is now enabled for posts, while pages are unselected. You can enable it for pages based on your preference.
- AEnhanced the settings page for a better user experience.

= 1.2 =
Released on 22 January 2025
New features:
- Added a new option in the Settings page to show the tooltip for the icon to copy and switch to the browser alert option.
By default, the browser alert is replaced with a tooltip to help users understand the feature more effectively. However, you can switch this off on the settings page.

= 1.1 =
New features:
- A new option was added to the settings page to control the visibility of the copy link icon on mobile devices.
- When enabled (default), the icon is always visible on mobile for better usability on touchscreens.
- When disabled, the icon behaves like on desktops, appearing only on hover.
- Improvements to the settings page

= 1.0 =
* Initial release: Adds link icons next to headings for easy sharing and navigation.
* Added: Ability to customize heading levels to display the link icon.
* Added: Compatibility with WooCommerce and other custom post types.