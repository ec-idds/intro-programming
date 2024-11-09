/*💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅 
 * Final Project: Autumn & Monina's Nail Salon
 * Monina Tosi <tosim@emmanuel.edu> & Autumn Cabral <cabrala8@emmanuel.edu>
 * 25 November 2023
 *💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅*/

// coordinates for nail polish rectangles set as global variables
let r1x1 = 50;
let r1y1 = 147;
let r1x2 = 27;
let r1y2 = 45;

let r2x1 = 88;
let r2y1 = 147;
let r2x2 = 27;
let r2y2 = 45;

let r3x1 = 125;
let r3y1 = 147;
let r3x2 = 27;
let r3y2 = 45;

let r4x1 = 167;
let r4y1 = 147;
let r4x2 = 27;
let r4y2 = 45;

let nailColor = 'oldlace';

//giving gems a class to have the same tempaltes
class Stickers {
  constructor(image, x, y, width, height) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.active = false;
    this.objectDefaultX = 0;
    this.objectDefaultY = 0;
  }
  draw() {
    image(this.image, this.x, this.y, this.width, this.height);
  }
  mousePressed() {
    if(mouseX > this.x && mouseX < this.x + this.width &&
      mouseY > this.y && mouseY < this.y + this.height) {
      this.active = true;
      this.objectDefaultX = mouseX - this.x;
      this.objectDefaultY = mouseY - this.y;
      return false;
    }
    return true;
  }
  drag() {
    if(this.active === false) {
      return;
    }
    this.x = mouseX - this.objectDefaultX; 
    this.y = mouseY - this.objectDefaultY;
  }
  release() {
    this.active = false;
  }
}

let nailsalon;
let gems = [];

function preload() { //loading pictures of gems
  nailsalon = loadImage("SalonBackground.jpg");

  gems = []; //creates array for gem images and positions them on canvas
  gems.push(new Stickers(loadImage("Stickers/1.png"), 375, 110, 20, 20));
  gems.push(new Stickers(loadImage("Stickers/2.png"), 350, 110, 20, 20));
  gems.push(new Stickers(loadImage("Stickers/3.png"), 325, 110, 20, 20));
  gems.push(new Stickers(loadImage("Stickers/4.png"), 340, 150, 20, 20));
  gems.push(new Stickers(loadImage("Stickers/5.png"), 310, 150, 20, 20));
  gems.push(new Stickers(loadImage("Stickers/6.png"), 280, 150, 20, 20));
  gems.push(new Stickers(loadImage("Stickers/7.png"), 415, 180, 20, 20));
  gems.push(new Stickers(loadImage("Stickers/8.png"), 390, 180, 20, 20));
  gems.push(new Stickers(loadImage("Stickers/9.png"), 365, 180, 20, 20));

}

function setup() {
  createCanvas(500, 400);
}

let x = 20;
let y = 130;

function paintbrush() { //makes paintbrush an object
  fill(0),
    //shifts coordinates so that mouse is at bottom of brush
    rect(0 - x, 0 - y, 40, 70),
    fill(250),
    rect(15 - x, 70 - y, 10, 40),
    fill(0),
    quad(25 - x, 110 - y, 15 - x, 110 - y, 10 - x, 130 - y, 30 - x, 130 - y);
}

function draw() {
  background(250);
  noCursor(); 
  image(nailsalon, 0, 0, 500, 400);

  noStroke();
  fill(nailColor);
  ellipse(194, 325, 15, 48); //thumb nail 
  ellipse(227.5, 243, 17, 45); //pointer
  ellipse(253, 222, 17, 45); //middle 
  ellipse(278, 255, 17, 43); //ring finger
  ellipse(303, 282, 14, 37); //pinky

  //nail polish rectangles
  fill('HotPink');
  rect(r1x1, r1y1, r1x2, r1y2); // pink bottle
  fill('DodgerBlue');
  rect(r2x1, r2y1, r2x2, r2y2); //blue bottle
  fill('RebeccaPurple');
  rect(r3x1, r3y1, r3x2, r3y2); //purple bottle
  fill('SeaGreen');
  rect(r4x1, r4y1, r4x2, r4y2); //green bottle

  //click to change colors
  if(mouseIsPressed && collidePointRect(mouseX, mouseY, r1x1, r1y1, 50, 50)) {
    nailColor = 'HotPink';
  }
  if(mouseIsPressed && collidePointRect(mouseX, mouseY, r2x1, r2y1, 50, 50)) {
    nailColor = 'DodgerBlue';
  }
  if(mouseIsPressed && collidePointRect(mouseX, mouseY, r3x1, r3y1, 50, 50)) {
    nailColor = 'RebeccaPurple';
  }
  if(mouseIsPressed && collidePointRect(mouseX, mouseY, r4x1, r4y1, 50, 50)) {
    nailColor = 'SeaGreen';
  }
  for(let i = 0; i < gems.length; i++) {
    gems[i].draw();
  }
//draws the paint brush where mouse is
  fill(0);
  translate(mouseX, mouseY); //makes the paint brush follow the mouse
  paintbrush();
}

//drag and drop funciton for gems 
function mousePressed() {
  for(let i = 0; i < gems.length; i++) {
    gems[i].mousePressed();
  }
}

function mouseDragged() {
  for(let i = 0; i < gems.length; i++) {
    gems[i].drag();
  }
}

function mouseReleased() {
  for(let gem of gems) {
    gem.release();
  }
}