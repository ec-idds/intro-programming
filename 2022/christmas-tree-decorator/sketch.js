/******************************************************************************
Christmas Tree Decorator 
 * Alex Oliver <olivera@emmanuel.edu> 
 * Elizabeth Schweyer<schweyere@emmanuel.edu>
 * 3 December 2022
 *****************************************************************************/

class Decoration {
  constructor(image, x, y, width, height) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.active = false; // active means being dragged

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

    }
  }
  drag() {
    // check if I'm active. If not, done.
    if(this.active === false) {
      return;
    }

    // if we made it here, that means this item is active and we need to
    // do the drag action
    this.x = mouseX - 40;
    this.y = mouseY - 40;
  }
  release() {
    this.active = false;
  }
}

let tree;
let decorations = [];
let bg;
let christmasmoose;
let song;

function preload() {
  bg = loadImage('bg.jpeg');
  tree = loadImage('christmastree1.png');
  christmasmooose = loadImage('christmasmoose.png');
  song = loadSound('o-christmas-tree.mp3');

  decorations = [];
  decorations.push(new Decoration(loadImage('christmaslights1.png'), 100, 400, 80, 100));
  decorations.push(new Decoration(loadImage('christmaslights1.png'), 100, 330, 110, 100));
  decorations.push(new Decoration(loadImage('christmaslights1.png'), 100, 190, 150, 100));
  decorations.push(new Decoration(loadImage('christmaslights1.png'), 100, 270, 50, 50));
  decorations.push(new Decoration(loadImage('star.png'), 220, 50, 45, 55));
  decorations.push(new Decoration(loadImage('green ornament2.png'), 500, 325, 30, 40));
  decorations.push(new Decoration(loadImage('redornament1.png'), 50, 150, 25, 25));
  decorations.push(new Decoration(loadImage('silver ornament1.png'), 50, 50, 25, 25));
  decorations.push(new Decoration(loadImage('gold ornament111.png'), 200, 150, 25, 25));
  decorations.push(new Decoration(loadImage('blue ornament11.png'), 620, 325, 25, 25));
  decorations.push(new Decoration(loadImage('goldgarland.png'), 200, 300, 150, 100));
  decorations.push(new Decoration(loadImage('goldgarland.png'), 400, 400, 100, 100));
  decorations.push(new Decoration(loadImage('goldgarland.png'), 600, 200, 70, 80));
}

function setup() {
  createCanvas(700, 500);
  song.loop();
}

function draw() {
  background('bg.png');
  image(bg, 0, 0, width, height);
  image(tree, 280, 110, 170, 330);
  image(christmasmooose, 470, 350, 150, 200);

  textSize(20);
  text('Help the Moose Decorate the Tree!', 200, 25);
  fill('white');

  for(let decoration of decorations) {
    decoration.draw();
  }
  text(`x: ${mouseX}, y: ${mouseY}`, 0, 500);
}

function mousePressed() {
  for(let i = 0; i < decorations.length; i++) {
    decorations[i].mousePressed();
  }
}

function mouseDragged() {
  for(let i = 0; i < decorations.length; i++) {
    decorations[i].drag();
  }
}

function mouseReleased() {
  for(let decoration of decorations) {
    decoration.release();
  }
}