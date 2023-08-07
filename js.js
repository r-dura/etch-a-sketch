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
    blk();
}

function blk() {
    
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        // and for each one we add a 'click' listener
        gridItem.addEventListener('mouseover', function (e) {
            gridItem.style.removeProperty("background-color");
            gridItem.classList.add('filledIn')
            console.log("click!")
        });
    });
}


function clearGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.classList.remove('filledIn');
        gridItem.style.removeProperty('background-color');
    });
}

function rain() {
    const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        // and for each one we add a 'click' listener
        gridItem.addEventListener('mouseover', function (e) {
            let rand = Math.floor(Math.random() * 50);
            gridItem.style['background-color'] = colorArray[rand];
            console.log("click!")
        });
    });
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', main);

const black = document.querySelector("#black");
black.addEventListener('click', blk);

const rainbow = document.querySelector("#rainbow");
rainbow.addEventListener('click', rain);

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearGrid)


