const container = document.querySelector('.grid-container');

function createGrid(num) {
    container.innerHTML = ''
    for (i = 0; i < num * num; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }
    container.style.gridTemplateColumns = "repeat(" + num +", 1fr)";
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.style.width = "16px";
        gridItem.style.height = "16px";
    });
}

function main() {
    const num = prompt("How long would you like one side of the square grid to be?");
    createGrid(num);
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        // and for each one we add a 'click' listener
        gridItem.addEventListener('mouseover', function (e) {
            gridItem.classList.add('filledIn')
            console.log("click!")
        });
    });
}


function clearGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.classList.remove('filledIn');
    });
}


const btn = document.querySelector('#btn');
btn.addEventListener('click', main);

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearGrid)


