const container = document.querySelector('.gridContainer');
container.style.gridTemplateColumns = 'repeat(16, 1fr)';
container.style.gridTemplateRows = 'repeat(16, 1fr)';
const startButton = document.querySelector('.start');

for (i = 0; i < 256; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('style', 'margin: 0; padding: 0; border: solid black 1px;')

    container.appendChild(cell);
}

startButton.addEventListener('click', () => {
    const cellCount = document.querySelectorAll('.cell');

    for (i =0; i < cellCount.length; i++) {
        container.removeChild(cellCount[i]);
    }

    let layout;
    let gridSize;

    do {
        layout = parseInt(prompt('How many columns and rows would you like to play? Pick between 12 and 100!'));
        gridSize = layout * layout;
    } while ((layout < 2 && Number) || (layout > 100 && Number));

    container.style.gridTemplateColumns = `repeat(${layout}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${layout}, 1fr)`;

    for (i = 0; i < gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('style', 'margin: 0; padding: 0; border: solid black 1px;')

        container.appendChild(cell);
    }
});