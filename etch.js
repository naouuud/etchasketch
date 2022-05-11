const squares = document.querySelector(".squares");

function firstCanvas() {
    for (let i = 0; i < Math.pow(16, 2); i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        square.setAttribute('id', `sq${i}`);
        square.style.width = `${640 / 16}px`;
        square.style.height = `${640 / 16}px`;
        squares.appendChild(square);
    }
    activateGrid();
}

function newCanvas() {
    let canvasSize = prompt("Choose a grid size", "");
    if (canvasSize === null || canvasSize === "") return;
    canvasSize = parseInt(canvasSize);
    while(isNaN(canvasSize) || canvasSize <= 0 || canvasSize > 100) {
        canvasSize = prompt("Please enter a number between 1 and 100", "");
        if (canvasSize === null || canvasSize === "") return;
        canvasSize = parseInt(canvasSize);
    }
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach(square => squares.removeChild(square));
    for (let i = 0; i < Math.pow(canvasSize, 2); i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        square.setAttribute('id', `sq${i}`);
        square.style.width = `${640 / canvasSize}px`;
        square.style.height = `${640 / canvasSize}px`;
        squares.appendChild(square);
    }
    activateGrid();
}

function activateGrid() {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach(square => square.addEventListener('mouseover', () => square.classList.add('hover')));
}

const makeNewCanvas = document.querySelector('.newcanvas');
makeNewCanvas.addEventListener('click', newCanvas);

firstCanvas();