let hatColor = 'darkgrey';
let shirtColor = 'white';
let pantColor = 'black'
let shoeColor = 'grey';

let redButtonHat, greenButtonHat, blueButtonHat;

let redButtonShirt, greenButtonShirt, blueButtonShirt;

let redButtonPant, greenButtonPant, blueButtonPant;

let redButtonShoe, greenButtonShoe, blueButtonShoe;

let showShoe, showTopHat, showShirt, showPant;

function setup() {
  createCanvas(400, 700);

  createHatButtons();

  createShirtButtons();

  createPantButtons();

  createShoeButtons();

  showShoe = false;
  showTopHat = false;
  showShirt = false;
  showPant = false;
}

function draw() {
  noStroke();
  background(210, 180, 140);

  // body of figure  
  fill(160, 82, 45); // color
  ellipse(200, 150, 75, 100); // head 
  rect(186, 160, 30, 50); // neck
  rect(170, 209, 60, 175, 20) // torso 
  rect(165, 360, 30, 140, 20); // left leg
  rect(205, 360, 30, 140, 20); // right leg
  rect(200, 240, 130, 27, 20); // right arm
  rect(80, 240, 130, 27, 20); // left arm

  if(showShoe){ // controls when the shoes are on screen or not
    fill(shoeColor);
    rect(127, 470, 70, 30);
    rect(204, 470, 70, 30);
  }
  if(showTopHat) { // controls when the tophat is on screen or not
    fill(hatColor);
    rect(150, 70, 100, 80, 10);
    rect(130, 120, 140, 20, 10);
  }
  if(showShirt) { // controls when the shirt is on screen or not 
    fill(shirtColor);
    rect(170, 210, 60, 175, 20);
  }
  if(showPant){ // controls when the pants are on screen or not
    fill(pantColor);
    rect(160, 360, 35, 120); // left pant leg
    rect(205, 360, 35, 120); // right pant leg  
    rect(160, 360, 70, 30); // top of pant
    }

  fill('red');
  rect(20, 40, 60, 30); // red hat button
  fill('green')
  rect(20, 70, 60, 30); // green hat button 
  fill('blue');
  rect(20, 100, 60, 30); // blue hat button 

  fill('red');
  rect(width - 80, 40, 60, 30); // shirt red button
  fill('green')
  rect(width - 80, 70, 60, 30); // shirt green button
  fill('blue');
  rect(width - 80, 100, 60, 30); // shirt blue button

  fill('red');
  rect(20, 500, 60, 30); // red pant button
  fill('green')
  rect(20, 530, 60, 30); // green pant button 
  fill('blue');
  rect(20, 560, 60, 30); // blue pant button 

  fill('red');
  rect(width - 80, 500, 60, 30); // shoe red button
  fill('green')
  rect(width - 80, 530, 60, 30); // shoe green button
  fill('blue');
  rect(width - 80, 560, 60, 30); // shoe blue button

}

function createShoeButtons(){ 
  redButtonShoe = createButton('red');
  redButtonShoe.position(332, 505);
  redButtonShoe.mousePressed(() => changeShoeColor('red'));

  greenButtonShoe = createButton('green');
  greenButtonShoe.position(325, 534);
  greenButtonShoe.mousePressed(() => changeShoeColor('green'));

  blueButtonShoe = createButton('blue');
  blueButtonShoe.position(330, 564);
  blueButtonShoe.mousePressed(() => changeShoeColor('blue'));

  let shoeButton = createButton('shoe');
  shoeButton.position(327, 480);
  shoeButton.mousePressed(toggleShoe);
}

function createPantButtons(){
  redButtonPant = createButton('red');
  redButtonPant.position(33, 505);
  redButtonPant.mousePressed(() => changePantColor('red'));

  greenButtonPant = createButton('green');
  greenButtonPant.position(25, 533);
  greenButtonPant.mousePressed(() => changePantColor('green'));

  blueButtonPant = createButton('blue');
  blueButtonPant.position(29, 564);
  blueButtonPant.mousePressed(() => changePantColor('blue'));

  let pantButton = createButton('pant');
  pantButton.position(30, 480);
  pantButton.mousePressed(togglePant);
}

function createHatButtons() {
  redButtonHat = createButton('red');
  redButtonHat.position(33, 44);
  redButtonHat.mousePressed(() => changeHatColor('red'));

  greenButtonHat = createButton('green');
  greenButtonHat.position(25, 74);
  greenButtonHat.mousePressed(() => changeHatColor('green'));

  blueButtonHat = createButton('blue');
  blueButtonHat.position(29, 104);
  blueButtonHat.mousePressed(() => changeHatColor('blue'));

  let hatButton = createButton('hat');
  hatButton.position(33, 20);
  hatButton.mousePressed(toggleTopHat);
}

function createShirtButtons() {
  redButtonShirt = createButton('red');
  redButtonShirt.position(width - 67, 45);
  redButtonShirt.mousePressed(() => changeShirtColor('red'));

  greenButtonShirt = createButton('green');
  greenButtonShirt.position(width - 75, 75);
  greenButtonShirt.mousePressed(() => changeShirtColor('green'));

  blueButtonShirt = createButton('blue');
  blueButtonShirt.position(width - 71, 104);
  blueButtonShirt.mousePressed(() => changeShirtColor('blue'));

  let shirtButton = createButton('shirt');
  shirtButton.position(width - 70, 20);
  shirtButton.mousePressed(toggleShirt);
}

function toggleShoe(){
  showShoe = !showShoe;
}

function toggleTopHat() {
  showTopHat = !showTopHat;
}

function toggleShirt() {
  showShirt = !showShirt;
}

function togglePant(){
  showPant = !showPant ;
}

function changeShoeColor(newColor){
  shoeColor = newColor;
}

function changeHatColor(newColor) {
  hatColor = newColor;
}

function changeShirtColor(newColor) {
  shirtColor = newColor;
}

function changePantColor(newColor){
  pantColor = newColor;
}