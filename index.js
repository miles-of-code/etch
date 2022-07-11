// initialize constants and append to DOM
const main = document.getElementById('main') 
const gridContainer = document.createElement('div'); 
gridContainer.setAttribute('id', 'gridContainer');
const gridItem = document.createElement('div'); 
gridItem.classList.add('gridItem');
const settings = document.createElement('div'); 
settings.setAttribute('id', 'settings')
const slideContainer = document.getElementById("slideContainer")
const sizeOutput = document.getElementById("sizeLabel")
sizeOutput.innerHTML = slideSize.value; // set grid to default size
main.appendChild(settings);
main.appendChild(gridContainer);
settings.appendChild(slideContainer)

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
  sizeOutput.innerHTML = sizeChoice;
  gridContainer.innerHTML='';
  gridItem.style.width=`${Math.sqrt(250000/(sizeChoice**2))}px`;
  gridItem.style.height=`${Math.sqrt(250000/(sizeChoice**2))}px`;
  gridContainer.style.gridTemplateColumns=`repeat(${sizeChoice}, 1fr)`;
    for (i = 0; i < sizeChoice*sizeChoice; i++) {
      gridContainer.appendChild(gridItem.cloneNode(true)) 
  }
}

// allows user to set background color (RGB)
slideBackgroundRedColor.oninput = function() {
  valRedBackground = document.getElementById("slideBackgroundRedColor").value;
  valGreenBackground = document.getElementById("slideBackgroundGreenColor").value;
  valBlueBackground = document.getElementById("slideBackgroundBlueColor").value;
  gridContainer.style.background= `rgb(${valRedBackground}, ${valGreenBackground}, ${valBlueBackground})`
}
slideBackgroundGreenColor.oninput = function() {
  valRedBackground = document.getElementById("slideBackgroundRedColor").value;
  valGreenBackground = document.getElementById("slideBackgroundGreenColor").value;
  valBlueBackground = document.getElementById("slideBackgroundBlueColor").value;
  gridContainer.style.background= `rgb(${valRedBackground}, ${valGreenBackground}, ${valBlueBackground})`
}
slideBackgroundBlueColor.oninput = function() {
  valRedBackground = document.getElementById("slideBackgroundRedColor").value;
  valGreenBackground = document.getElementById("slideBackgroundGreenColor").value;
  valBlueBackground = document.getElementById("slideBackgroundBlueColor").value;
  gridContainer.style.background= `rgb(${valRedBackground}, ${valGreenBackground}, ${valBlueBackground})`
}

// allow user to set gridItem color (RGB)
gridContainer.addEventListener('mouseover', getDefaultColor); 
  function getDefaultColor(event) {
  valRed = document.getElementById("slideRedColor").value;
  valGreen = document.getElementById("slideGreenColor").value;
  valBlue = document.getElementById("slideBlueColor").value;
  event.target.style.background = `rgb(${valRed}, ${valGreen}, ${valBlue})`
 }