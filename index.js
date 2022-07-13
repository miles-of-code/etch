// to do: make default grid size 15x15

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
sizeOutput.innerHTML = slideSize.value; // set grid to default size
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
gridItem.style.width='31.25px'; 
gridItem.style.height='31.25px';
gridContainer.style.gridTemplateColumns="repeat(16, 1fr)";
for (i = 0; i < 256; i++) {
  gridContainer.appendChild(gridItem.cloneNode(true))  
  gridItem.id = `square${i}` 
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
  let redBackgroundChoice = this.value;
  redBackgroundLabel.innerHTML = redBackgroundChoice;
  gridContainer.style.background= `rgb(${valRedBackground}, ${valGreenBackground}, ${valBlueBackground})`
}
slideBackgroundGreenColor.oninput = function() {
  valRedBackground = document.getElementById("slideBackgroundRedColor").value;
  valGreenBackground = document.getElementById("slideBackgroundGreenColor").value;
  valBlueBackground = document.getElementById("slideBackgroundBlueColor").value;
  let greenBackgroundChoice = this.value;
  greenBackgroundLabel.innerHTML = greenBackgroundChoice;
  gridContainer.style.background= `rgb(${valRedBackground}, ${valGreenBackground}, ${valBlueBackground})`
}
slideBackgroundBlueColor.oninput = function() {
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


 // at startup, spell 

const square1 = document.getElementById('square1')
async function greetSquares() {
  async function paint(square) {
    square.style.background="darkseagreen";
   }
   // E
   paint(square81);
   await sleep(80)
   paint(square80);
   await sleep(80)
   paint(square79);
   await sleep(80)
   paint(square95);
   await sleep(80)
   paint(square111);
   await sleep(80)
   paint(square127);
   await sleep(80)
   paint(square143);
   await sleep(80)
   paint(square144);
   await sleep(80)
   paint(square145);
   await sleep(80)
   paint(square112);
   await sleep(80)
   paint(square113);
   await sleep(80)
   // T
   paint(square83);
   await sleep(80)
   paint(square84);
   await sleep(80)
   paint(square85);
   await sleep(80)
   paint(square100);
   await sleep(80)
   paint(square116);
   await sleep(80)
   paint(square132);
   await sleep(80)
   paint(square148);
   // C
   await sleep(80)
   paint(square89);
   await sleep(80)
   paint(square88);
   await sleep(80)
   paint(square87);
   await sleep(80)
   paint(square103);
   await sleep(80)
   paint(square119);
   await sleep(80)
   paint(square135);
   await sleep(80)
   paint(square151);
   await sleep(80)
   paint(square152);
   await sleep(80)
   paint(square153);
   // H
   await sleep(80)
   paint(square91);
   await sleep(80)
   paint(square107);
   await sleep(80)
   paint(square123);
   await sleep(80)
   paint(square139);
   await sleep(80)
   paint(square155);
   await sleep(80)
   paint(square124);
   await sleep(80)
   paint(square125);
   await sleep(80)
   paint(square93);
   await sleep(80)
   paint(square109);
   await sleep(80)
   paint(square135);
   await sleep(80)
   paint(square151);
   await sleep(80)
   paint(square141);
   await sleep(80)
   paint(square157);


}
greetSquares()