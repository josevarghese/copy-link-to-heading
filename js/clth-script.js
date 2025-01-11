document.addEventListener('DOMContentLoaded', function () {
    const headings = clthData.headings; // Heading levels from the localized script data
    const iconUrl = clthData.iconUrl; // URL of the icon image

    // Limit the scope to headings inside the main content area
    const contentSelector = '.entry-content, .post-content, .page-content'; // Adjust based on your theme's structure
    const contentElements = document.querySelectorAll(contentSelector);

    contentElements.forEach(function (content) {
        headings.forEach(function (level) {
            const elements = content.querySelectorAll(level); // Select headings within the content area
            elements.forEach(function (heading) {
                if (!heading.id) {
                    // Generate a unique ID for the heading if it doesn't have one
                    const id = heading.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    heading.id = id;
                }

                if (!heading.querySelector('.clth-copy-icon')) {
                    // Create the copy link icon
                    const icon = document.createElement('span');
                    icon.classList.add('clth-copy-icon');
                    icon.style.backgroundImage = `url('${iconUrl}')`;

                    // Append the icon to the heading
                    heading.appendChild(icon);

                    // Add click event to copy the link
                    icon.addEventListener('click', function () {
                        const url = `${window.location.origin}${window.location.pathname}#${heading.id}`;
                        navigator.clipboard.writeText(url).then(() => {
                            alert(`Copied link: ${url}`);
                        });
                    });
                }
            });
        });
    });
});
