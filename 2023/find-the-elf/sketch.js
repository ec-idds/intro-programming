/*******************************************
 * A0: Assignment
 * Olyvia Frongillo <frongilloo@emmanuel.edu@emmanuel.edu>
 * 19 November 2023
 ******************************************/

let image1;
let mySound;
let startButton = {
  x: 260,
  y: 165,
  text: function() {
    text("start!", 290, 180, 85, 40);
    fill(0);
  },
  shape: function() {
    rect(startButton.x, startButton.y, 85, 40);
    fill(161, 198, 150);
  }};

let instructions = {
  x: 55,
  y: 125,
  text: function() { //insert instructions here! 
    text(" Instructions: Press Start to begin... Then locate the elf, click once located", 55, 125, 150, 125);
    //fill(0);
  },
  shape: function() {
    rect(instructions.x, instructions.y, 150, 125); 
  }
};

function preload() {
  mySound = loadSound("jingle-family-174542.mp3");
  image1 = loadImage('ProgrammingFinal IntroOutro.gif');
}

function setup() {
  createCanvas(400, 400);
  textFont('Serif');
  //mySound.play();
}

function draw() {
  image(image1, 0, 0, 400, 400);
  startButton.shape();
  instructions.shape();
  startButton.text();
  instructions.text();

}