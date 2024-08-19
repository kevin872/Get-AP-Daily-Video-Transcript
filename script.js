// Function to click a button if found
function clickButton(selector, textContent = '') {
    const button = Array.from(document.querySelectorAll(selector))
        .find(btn => btn.textContent.includes(textContent));
    if (button) {
        console.log(button);
        button.click();
    } else {
        console.log(`${textContent ? textContent + ' ' : ''}button not found.`);
    }
}

// Play button
const playButton = document.querySelector('.w-big-play-button.w-css-reset-button-important');
if (playButton) {
    console.log(playButton);
    playButton.click();
} else {
    console.log('Play button not found.');
}

// Bottom bar left container
const container = document.querySelector('.w-bottom-bar-left');
if (container) {
    const innerDiv = container.querySelector('.w-bottom-bar-left-inner');
    if (innerDiv) {
        container.style.pointerEvents = 'auto';
        innerDiv.click();
        container.style.pointerEvents = 'none';
    } else {
        console.log('Inner div not found.');
    }
} else {
    console.log('Container not found.');
}

// Captions button
const captionsButton = document.querySelector('[data-handle="captionsButton"] button');
if (captionsButton) {
    captionsButton.click();
} else {
    console.log('Captions button not found.');
}

// Search Video button
clickButton('.w-captions-menu .w-css-reset-button-important', 'Search Video');

// Chrome element adjustment
const chromeElement = document.querySelector('.w-chrome.notranslate');
if (chromeElement) {
    chromeElement.style.height = '15000px';
}

// Grid row printing
function printGridRows() {
    const grid = document.querySelector('[role="grid"]');
    if (grid) {
        const rows = grid.querySelectorAll('[role="row"]');
        rows.forEach(row => console.log(row.textContent.trim()));
    } else {
        console.log('Grid not found.');
    }
}

// Initial grid print
printGridRows();

// Re-run grid print after adjustment
setTimeout(printGridRows, 1000); // Adjust timeout if needed
