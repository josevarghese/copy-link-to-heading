document.addEventListener('DOMContentLoaded', function () {
    const headings = clthData.headings;
    const iconUrl = clthData.iconUrl;
    const showIconOnMobile = clthData.showIconOnMobile;
    const showIconOnDesktop = clthData.showIconOnDesktop;
    const enableTooltip = clthData.enableTooltip; 
    const copyText = clthData.copyText || 'Copy Link to Heading';
    const copiedText = clthData.copiedText || 'Copied';
    const iconPosition = clthData.iconPosition || 'after';
    const contentSelector = '.entry-content, .post-content, .page-content';

    // Add or remove class on the body based on mobile and desktop settings
    if (showIconOnMobile) {
        document.body.classList.add('clth-show-icon-mobile');
    } else {
        document.body.classList.remove('clth-show-icon-mobile');
    }
    if (showIconOnDesktop) {
        document.body.classList.add('clth-show-icon-desktop');
    } else {
        document.body.classList.remove('clth-show-icon-desktop');
    }

    const contentElements = document.querySelectorAll(contentSelector);

    function sanitizeSlug(text) {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9 ]+/g, '')
            .trim()
            .replace(/\s+/g, '-');
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
                        const tooltip = document.createElement('span');
                        tooltip.classList.add('clth-tooltip');
                        tooltip.textContent = copyText;
                        icon.appendChild(tooltip);
                    }

                    if (iconPosition === 'before') {
                        // Insert icon before the heading's first child and add a small right margin
                        heading.insertBefore(icon, heading.firstChild);
                        icon.style.marginRight = '8px';
                        // Force icon to display by default
                        icon.style.display = 'inline-block';
                    } else {
                        // Default: insert icon after the heading content
                        heading.appendChild(icon);
                        // For 'after' position, if desktop option is enabled then force display
                        if (showIconOnDesktop) {
                            icon.style.display = 'inline-block';
                        }
                    }

                    icon.addEventListener('click', function () {
                        const baseUrl = window.location.href.split('#')[0];
                        const url = `${baseUrl}#${heading.id}`;
                        navigator.clipboard.writeText(url).then(() => {
                            if (enableTooltip) {
                                const tooltip = icon.querySelector('.clth-tooltip');
                                tooltip.textContent = copiedText;
                                setTimeout(() => {
                                    tooltip.textContent = copyText;
                                }, 2000);
                            } else {
                                alert(`${copiedText}: ${url}`);
                            }
                        });
                    });
                }
            });
        });
    });
});