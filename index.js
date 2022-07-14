// allows square delay
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
sizeOutput.innerHTML = `${slideSize.value}x${slideSize.value}`; // set grid to default size
const redBackgroundLabel = document.getElementById("backgroundRedLabel")
redBackgroundLabel.innerHTML = slideBackgroundRedColor.value;
const greenBackgroundLabel = document.getElementById("backgroundGreenLabel")
greenBackgroundLabel.innerHTML = slideBackgroundGreenColor.value;
const blueBackgroundLabel = document.getElementById("backgroundBlueLabel")
blueBackgroundLabel.innerHTML = slideBackgroundBlueColor.value;
main.appendChild(settings);
main.appendChild(gridContainer);
settings.appendChild(slideContainer)


// default grid size
gridItem.style.width='28px'; 
gridItem.style.height='28px';
gridContainer.style.gridTemplateColumns="repeat(15, 1fr)";
for (i = 0; i < 225; i++) {
  gridContainer.appendChild(gridItem.cloneNode(true))   
  gridItem.id = `square${i}`
}

// allow user to set grid size
slideSize.oninput = function() {
  let sizeChoice = this.value;
  sizeOutput.innerHTML = sizeChoice;
  gridContainer.innerHTML='';
  gridItem.style.width=`${Math.sqrt(176400/(sizeChoice**2))}px`;
  gridItem.style.height=`${Math.sqrt(176400/(sizeChoice**2))}px`;
  gridContainer.style.gridTemplateColumns=`repeat(${sizeChoice}, 1fr)`;
    for (i = 0; i < sizeChoice*sizeChoice; i++) {
      gridContainer.appendChild(gridItem.cloneNode(true)) 
  }
}

// allows user to set background color (RGB)
slideBackgroundRedColor.oninput = function() {
  gridContainer.style.transition="none";
  valRedBackground = document.getElementById("slideBackgroundRedColor").value;
  valGreenBackground = document.getElementById("slideBackgroundGreenColor").value;
  valBlueBackground = document.getElementById("slideBackgroundBlueColor").value;
  let redBackgroundChoice = this.value;
  redBackgroundLabel.innerHTML = redBackgroundChoice;
  gridContainer.style.background= `rgb(${valRedBackground}, ${valGreenBackground}, ${valBlueBackground})`
}
slideBackgroundGreenColor.oninput = function() {
  gridContainer.style.transition="none";
  valRedBackground = document.getElementById("slideBackgroundRedColor").value;
  valGreenBackground = document.getElementById("slideBackgroundGreenColor").value;
  valBlueBackground = document.getElementById("slideBackgroundBlueColor").value;
  let greenBackgroundChoice = this.value;
  greenBackgroundLabel.innerHTML = greenBackgroundChoice;
  gridContainer.style.background= `rgb(${valRedBackground}, ${valGreenBackground}, ${valBlueBackground})`
}
slideBackgroundBlueColor.oninput = function() {
  gridContainer.style.transition="none";
  valRedBackground = document.getElementById("slideBackgroundRedColor").value;
  valGreenBackground = document.getElementById("slideBackgroundGreenColor").value;
  valBlueBackground = document.getElementById("slideBackgroundBlueColor").value;
  let blueBackgroundChoice = this.value;
  blueBackgroundLabel.innerHTML = blueBackgroundChoice;
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


// random color generator
function generateColor(square) {
  let redRandom = Math.floor(Math.random()*255);
  let greenRandom = Math.floor(Math.random()*255);
  let blueRandom = Math.floor(Math.random()*255);
  let randomColor = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`
  return randomColor;
}

 // at startup, spell ETCH
const square1 = document.getElementById('square1')
async function greetSquares() {
  async function paint(square) {
    square.style.background = generateColor(square);
  }
   
  // E
  await sleep(80);
  paint(square76); await sleep(80);
  paint(square75); await sleep(80);
  paint(square74); await sleep(80);
  paint(square89); await sleep(80);
  paint(square104); await sleep(80);
  paint(square119); await sleep(80);
  paint(square134); await sleep(80);
  paint(square135); await sleep(80);
  paint(square136); await sleep(80);
  paint(square105); await sleep(80);
  paint(square106); await sleep(80);
  // T
  paint(square78); await sleep(80);
  paint(square79); await sleep(80);
  paint(square80); await sleep(80);
  paint(square94); await sleep(80);
  paint(square109); await sleep(80);
  paint(square124); await sleep(80);
  paint(square139); await sleep(80);
  // C
  paint(square84); await sleep(80);
  paint(square83); await sleep(80);
  paint(square82); await sleep(80);
  paint(square97); await sleep(80);
  paint(square112); await sleep(80);
  paint(square127); await sleep(80);
  paint(square142); await sleep(80);
  paint(square143); await sleep(80);
  paint(square144); await sleep(80);
  // H
  paint(square86); await sleep(80);
  paint(square101); await sleep(80);
  paint(square116); await sleep(80);
  paint(square131); await sleep(80);
  paint(square146); await sleep(80);
  paint(square117); await sleep(80);
  paint(square88); await sleep(80);
  paint(square103); await sleep(80);
  paint(square118); await sleep(80);
  paint(square133); await sleep(80);
  paint(square148); await sleep(80);
  gridContainer.style.transition="3s";
  gridContainer.style.background="white";
}
greetSquares();