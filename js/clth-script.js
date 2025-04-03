document.addEventListener('DOMContentLoaded', function () {
    const headings = clthData.headings;
    const iconUrl = clthData.iconUrl;
    const showIconOnMobile = clthData.showIconOnMobile;
    const enableTooltip = clthData.enableTooltip;
    const copyText = clthData.copyText || 'Copy Link to Heading';
    const copiedText = clthData.copiedText || 'Copied';
    const iconPosition = clthData.iconPosition || 'after'; // new
    const contentSelector = '.entry-content, .post-content, .page-content';
    const showIconAlwaysDesktop = clthData.showIconAlwaysDesktop;

    if (iconPosition === 'before') {
        icon.style.marginRight = '0.4em';
        heading.insertBefore(icon, heading.firstChild);
        icon.classList.add('clth-always-visible');
    } else {
        heading.appendChild(icon);
        if (showIconAlwaysDesktop) {
        icon.classList.add('clth-always-visible');
        }
    }

        // Add or remove class on the body based on the mobile icon setting

    if (showIconOnMobile) {
        document.body.classList.add('clth-show-icon-mobile');
    } else {
        document.body.classList.remove('clth-show-icon-mobile');
    }

    function sanitizeSlug(text) {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9 ]+/g, '') // Remove special chars except spaces
            .trim()
            .replace(/\s+/g, '-');       // Replace spaces with hyphens
    }

    const contentElements = document.querySelectorAll(contentSelector);

    contentElements.forEach(function (content) {
        headings.forEach(function (level) {
            const elements = content.querySelectorAll(level);
            elements.forEach(function (heading) {
                if (!heading.id) {
                    const id = sanitizeSlug(heading.innerText.trim());
                    heading.id = id;
                }

                if (!heading.querySelector('.clth-copy-icon')) {
                    const icon = document.createElement('span');
                    icon.classList.add('clth-copy-icon');
                    icon.style.backgroundImage = `url('${iconUrl}')`;

                    if (enableTooltip) {
                        // Create tooltip element
                        const tooltip = document.createElement('span');
                        tooltip.classList.add('clth-tooltip');
                        tooltip.textContent = copyText; // Keep spaces intact
                        // Append tooltip to the icon
                        icon.appendChild(tooltip);
                    }

                    // Insert icon before or after the heading content
                    if (iconPosition === 'before') {
                        heading.insertBefore(icon, heading.firstChild);
                    } else {
                        heading.appendChild(icon);
                    }

                    icon.addEventListener('click', function () {
                        const baseUrl = window.location.href.split('#')[0]; // Preserve full URL
                        const url = `${baseUrl}#${heading.id}`; // Append the heading ID

                        navigator.clipboard.writeText(url).then(() => {
                            if (enableTooltip) {
                                // Change tooltip text to "Copied"
                                const tooltip = icon.querySelector('.clth-tooltip');
                                tooltip.textContent = copiedText; // Keep spaces intact
                                // Revert back to the original text after 2 seconds
                                setTimeout(() => {
                                    tooltip.textContent = copyText;
                                }, 2000);
                            } else {
                                // Show alert if tooltip is disabled
                                alert(`${copiedText}: ${url}`);
                            }
                        });
                    });
                }
            });
        });
    });
});