const main = document.getElementById('main') 

const gridContainer = document.createElement('div'); 
gridContainer.setAttribute('id', 'gridContainer');

const gridItem = document.createElement('div'); 
gridItem.classList.add('grid-item');

const settings = document.createElement('div'); 
settings.setAttribute('id', 'settings')

const setColor = document.createElement('input');
setColor.setAttribute('id', 'setColor');

const slideContainer = document.getElementById("slideContainer")
const sizeSlider = document.getElementById("sizeSlider");
const output = document.getElementById("sizeLabel")
output.innerHTML = slideSize.value;

main.appendChild(settings);
main.appendChild(gridContainer);
settings.appendChild(slideContainer)
settings.appendChild(setColor);



// default grid size
gridItem.style.width='31.25px'; 
gridItem.style.height='31.25px';
gridContainer.style.gridTemplateColumns="repeat(16, 1fr)";
for (i = 0; i < 256; i++) {
  gridContainer.appendChild(gridItem.cloneNode(true))   
}

// allow user to set grid size
slideSize.oninput = function() {
  let sizeChoice = this.value;
  output.innerHTML = sizeChoice;
  gridContainer.innerHTML='';
  gridItem.style.width=`${Math.sqrt(250000/(sizeChoice**2))}px`;
  gridItem.style.height=`${Math.sqrt(250000/(sizeChoice**2))}px`;
  gridContainer.style.gridTemplateColumns=`repeat(${sizeChoice}, 1fr)`;
    for (i = 0; i < sizeChoice*sizeChoice; i++) {
      gridContainer.appendChild(gridItem.cloneNode(true)) 
  }
}

// allow user to set grid color
gridContainer.addEventListener('mouseover', getDefaultColor); 
function getDefaultColor(event) {
  color = document.getElementById("setColor").value;
  event.target.style.background = color;
}
