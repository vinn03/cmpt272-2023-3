function init() {
    const toggleButton = document.getElementById('info-button');
    const moreInfo = document.getElementById('info');
    var isExpanded = false;

    toggleButton.addEventListener('click', () => {
        if (isExpanded) {
            moreInfo.style.display = 'none';
            toggleButton.textContent = 'More Info';
            isExpanded = false;
        } else {
            moreInfo.style.display = 'block';
            toggleButton.textContent = 'Less Info';
            isExpanded = true;
        }
    });
}

