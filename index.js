const main = document.getElementById('main') // main 

const gridContainer = document.createElement('div'); // grid container 
gridContainer.setAttribute('id', 'gridContainer');

const settings = document.createElement('div'); // settings container 
settings.setAttribute('id', 'settings')

const setSize = document.createElement('input'); // size input
setSize.setAttribute('id', 'setSize');
const sizeButton = document.createElement('button');
sizeButton.classList.add('buttonChoice');
sizeButton.textContent = 'set size';

const setColor = document.createElement('input'); // color input
setColor.setAttribute('id', 'setColor')
const colorButton = document.createElement('button');
colorButton.classList.add('buttonChoice');
colorButton.textContent = 'set color';

const gridItem = document.createElement('div'); // individual squares
gridItem.classList.add('grid-item');

main.appendChild(settings);
main.appendChild(gridContainer);
settings.appendChild(sizeButton);
settings.appendChild(setSize);
settings.appendChild(setColor);
settings.appendChild(colorButton);

for (i = 0; i < 256; i++) {
    gridContainer.appendChild(gridItem.cloneNode(true))   
}

gridContainer.addEventListener('mouseover', getColor);
function getColor(event) {
    event.target.style.background="pink";
}

sizeButton.addEventListener('click', getSize)
function getSize() {
let sizeChoice = (document.getElementById("setSize").value);
}