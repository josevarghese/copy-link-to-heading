document.addEventListener('DOMContentLoaded', function () {
    const headings = clthData.headings;
    const iconUrl = clthData.iconUrl;
    const showIconOnMobile = clthData.showIconOnMobile;
    const enableTooltip = clthData.enableTooltip; 
    const copyText = clthData.copyText || 'Copy Link to Heading';
    const copiedText = clthData.copiedText || 'Copied';
    const contentSelector = '.entry-content, .post-content, .page-content';

    // Add or remove class on the body based on the mobile icon setting
    if (showIconOnMobile) {
        document.body.classList.add('clth-show-icon-mobile');
    } else {
        document.body.classList.remove('clth-show-icon-mobile');
    }

    const contentElements = document.querySelectorAll(contentSelector);

    function sanitizeSlug(text) {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9 ]+/g, '')  // Remove special characters but keep spaces
            .trim()
            .replace(/\s+/g, '-');       // Replace spaces with hyphens
    }

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

                    heading.appendChild(icon);

                    icon.addEventListener('click', function () {
                        const url = `${window.location.origin}${window.location.pathname}#${heading.id}`;
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