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

gridItem.style.width='31.25px';
gridItem.style.height='31.25px';
gridContainer.style.gridTemplateColumns="repeat(16, 1fr)";
for (i = 0; i < 256; i++) {
  gridContainer.appendChild(gridItem.cloneNode(true))   
}

gridContainer.addEventListener('mouseover', getColor);
function getColor(event) {
  event.target.style.background="pink";
}


sizeButton.addEventListener('click', getSize) 

 function getSize() {
   gridContainer.innerHTML='';
   let sizeChoice = (document.getElementById("setSize").value);
   gridItem.style.width=`${Math.sqrt(250000/(sizeChoice**2))}px`;
   gridItem.style.height=`${Math.sqrt(250000/(sizeChoice**2))}px`;
   gridContainer.style.gridTemplateColumns=`repeat(${sizeChoice}, 1fr)`;
   for (i = 0; i < sizeChoice*sizeChoice; i++) {
    gridContainer.appendChild(gridItem.cloneNode(true))  
   }
 }

//  width: 31.25px;
//  height: 31.25px;

//  grid-template-columns: repeat(16, 1fr);