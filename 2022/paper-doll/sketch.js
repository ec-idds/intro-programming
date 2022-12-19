/******************************************************************************
 * A0: Assignment
 * Molly Lynch and Anh Le <shermanm@emmanuel.edu>
 * 10 November 2021
 *****************************************************************************/
class Clothing {
  constructor(image, x, y, width, height) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.active = false; // active means being dragged
    this.objectDefaultX = 40;
    this.objectDefaultY = 40;

  }
  draw() {
    image(this.image, this.x, this.y, this.width, this.height);
  }
  mousePressed() {
    // check if the mouse is over this item
    // if yes, set this.active to true
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
    // check if I'm active. If not, done.
    if(this.active === false) {
      return;
    }

    // if we made it here, that means this item is active and we need to
    // do the drag action
    this.x = mouseX - this.objectDefaultX;
    this.y = mouseY - this.objectDefaultY;
  }
  release() {
    this.active = false;
  }
}

let doll;
let clothing = [];
let bg;

function preload() {
  bg = loadImage('bg.png');
  doll = loadImage('doll.png');

  clothing = [];
  clothing.push(new Clothing(loadImage('purpleSkirt.png'), 50, 50, 49, 95));
  clothing.push(new Clothing(loadImage('greyShorts.png'), 220, 50, 45, 55));
  clothing.push(new Clothing(loadImage('pinkShirt.png'), 50, 150, 55, 65));
  clothing.push(new Clothing(loadImage('yellowDress.png'), 500, 200, 75, 95));
  clothing.push(new Clothing(loadImage('blueshirt.png'), 200, 150, 55, 65));
  clothing.push(new Clothing(loadImage('redHat.png'), 160, 250, 45, 35));
  clothing.push(new Clothing(loadImage('blackSocks.png'), 150, 350, 30, 90));
  clothing.push(new Clothing(loadImage('pinksocks.png'), 50, 345, 45, 110));
  clothing.push(new Clothing(loadImage('pinkDress.png'), 590, 200, 65, 95));
  clothing.push(new Clothing(loadImage('greenDress.png'), 450, 50, 75, 95));
  clothing.push(new Clothing(loadImage('dress.png'), 520, 40, 150, 150));
  clothing.push(new Clothing(loadImage('pinkTop.png'), 50, 250, 50, 45));
  clothing.push(new Clothing(loadImage('pinkBottom.png'), 170, 50, 50, 50));
  clothing.push(new Clothing(loadImage('blackBottom.png'), 280, 50, 40, 30));
  clothing.push(new Clothing(loadImage('blackTop.png'), 260, 150, 50, 50));
  clothing.push(new Clothing(loadImage('sailorMoonTop.png'), 120, 150, 70, 75));
  clothing.push(new Clothing(loadImage('sailorMoonBottom.png'), 100, 50, 70, 70));
  clothing.push(new Clothing(loadImage('blackHeels.png'), 50, 300, 35, 35));
  clothing.push(new Clothing(loadImage('pinkShoes.png'), 100, 300, 35, 35));
  clothing.push(new Clothing(loadImage('redDress.png'), 560, 310, 55, 140));
  clothing.push(new Clothing(loadImage('scarf.png'), 110, 250, 30, 40));
}

function setup() {
  createCanvas(700, 500);

}

function draw() {
  background('bg.png');
  image(bg, 0, 0, width, height);
  image(doll, 280, 110, 170, 330);

  textSize(20);
  text('Click and drag clothing to create an outfit!', 170, 450);

  for(let item of clothing) {
    item.draw();
  }

}

function mousePressed() {
  let keepGoing = true;
  for(let i = clothing.length - 1; i >= 0 && keepGoing; i--) {
    keepGoing = clothing[i].mousePressed();
  }
}

function mouseDragged() {
  for(let i = 0; i < clothing.length; i++) {
    clothing[i].drag();
  }
}

function mouseReleased() {
  for(let item of clothing) {
    item.release();
  }

}