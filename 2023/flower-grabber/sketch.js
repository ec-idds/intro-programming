/*******************************************
 * Final Project
 * Isabella Franzese <franzesei@emmanuel.edu>
 * Jocelyn Francisco <franciscoj@emmanuel.edu>
 * 21 November 2022
 ******************************************/

let flowerImages = [];
let backgroundImage;
let flowers = [];
let startTime = 0;
let period = 30 * 1000; //milliseconds on the timer
let flowerStart = 0;
let flowerPeriod = 1 * 1000; //milliseconds on the timer
let number = 0;
let font;
let bgmusic;
let basketImage;
let endPhoto;
let treeOverlay;

// creates a new "flower" object
function makeFlower() {
  let flower = {
    img: random(flowerImages),
    x: random(50, 550),
    y: 10,
    w: 38,
    h: 38,
    visible: true,
    draw: function() {
      // check for basket collision here instead. Set visible flag
      if(this.visible) {
        image(this.img, this.x, this.y, this.w, this.h);
      }
    }
  };
  flowers.push(flower);
}

//create basket as an object
let basket = {
  x: 200,
  y: 230,
  w: 75,
  h: 45,
  move: function() {
    // print("basket move", this.x, this.y);
    if(keyIsPressed && keyCode === RIGHT_ARROW) { //moves to the right with right arrow
      basket.x += 3;
    }
    if(keyIsPressed && keyCode === LEFT_ARROW) { //moves to the left with left arrow
      basket.x -= 3;
    }
    if(this.x > 600) { //wrap around
      this.x = 0;
    }
    if(this.x < 0) { //wrap around
      this.x = 600;
    }

    image(basketImage, this.x, this.y, this.w, this.h);

  }
};

function preload() {
  flowerImages[0] = loadImage('art/cherryblossom.png'); //upload flower image
  backgroundImage = loadImage("art/Field.png"); //background
  basketImage = loadImage('art/basket.png'); // basket
  endPhoto = loadImage('art/endphoto.jpeg'); //photo at the end   
  treeOverlay = loadImage('art/tree.png'); //tree on top
  font = loadFont('font/Melted Monster.ttf');
  bgmusic = loadSound('SYNTHMUSIC2.mp4', playMusic);
}

function playMusic() {
  bgmusic.playMode('restart');
  bgmusic.play();
}

function setup() {
  createCanvas(600, 300);
  background(225);
  startTime = millis();
}

function draw() {

  let timeRemaining = period - (millis() - startTime);
  let flowerTimeRemaining = flowerPeriod - (millis() - flowerStart);

  //background
  image(backgroundImage, 0, 0, width, height);

  for(let i = 0; i < flowers.length; i++) {
    flowers[i].y += 3;
    flowers[i].draw();
  }

  // basket movement
  basket.move();

  // tree overlay
  image(treeOverlay, 0, 0);

  // millis countdown, displayed in seconds
  fill(137, 192, 125);
  noStroke();
  rect(238, 2, 105, 45, 15);
  fill('white');
  text('Time Remaining: \n' + floor(timeRemaining / 1000), 245, 20);

  // flower fall
  if(flowerTimeRemaining <= 0) {
    flowerStart = millis();
    makeFlower();

  }
  //collision detector
  for(let i = 0; i < flowers.length; i++) {
    let f = flowers[i];
    let hit = collideLineRect(basket.x, basket.y, basket.x + basket.w, basket.y, f.x, f.y, f.w, f.h);
    if(hit && f.visible) {
      print("hit flower", i);
      flowers[i].visible = false;
      number = number + 1;
    }
  }

  // point counter
  fill(137, 192, 125);
  noStroke();
  rect(515, 2, 75, 45, 15);
  fill('White');
  textFont(font);
  text('Score:', 525, 20);
  text(number, 525, 35);

  if(timeRemaining <= 0) {
    image(endPhoto, 0, 0, width, height);
    fill('black');
    textSize(80);
    text('GAME OVER', 100, 270);
  }

}