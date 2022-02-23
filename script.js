const container = document.querySelector('.gridContainer');
const startButton = document.querySelector('.gridCreator');
const clearButton = document.querySelector('.clear');

function createGrid (rows = 16, columns = 16) { // Creates  default grid of 16x16 on page load
    total = rows * columns;

    for (i = 0; i < total; i++) {
        cells = document.createElement('div');
        cells.classList.add('cell');
        cells.setAttribute('style', 'margin: 0; padding: 0; background-color: black; opacity: 0;')
        //cellsToBeShaded = document.querySelectorAll('.cell');
        container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(cells);
    }
    shadeCells();
}

createGrid();

function newGrid (layout) { // Prompts user for input between 2 and 100 to create new grid of a different size
    const cellCount = document.querySelectorAll('.cell');

    for (i = 0; i < cellCount.length; i++) {
        container.removeChild(cellCount[i]);
    }
    do {
        layout = parseInt(prompt('How many columns and rows would you like to play? Pick between 12 and 100!'));
        gridSize = layout * layout;
    } while ((layout < 2 && Number) || (layout > 100 && Number));
    createGrid(layout, layout);
}

function shadeCells () { // Shades grid cells on mouseover
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {cell.addEventListener('mouseover', () => {
            if (cell.style.opacity >= 0.1) {
                cell.style.opacity = Number(cell.style.opacity) + 0.1;
            } else {
                cell.style.opacity = 0.1;
            }
        })
    })
}

function clearGrid () { // Resets current grid color for user to start fresh
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.style.backgroundColor = 'black'
        cell.style.opacity = 0
    })
}

startButton.addEventListener('click', newGrid);
clearButton.addEventListener('click', clearGrid);