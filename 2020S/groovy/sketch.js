/* 
Final Assignment
Faith Brennan & Jaclyn Kennedy
*/

//background
var y = 100;
var x = 100;
var m = -1;
var n = -1;

//sunflower
var a = 0;
var b = 200;
var speedA = 3;
var speedB = 4;
var angle = 0;

//sound
var mySound;

//image
let img;

function preload() {
  soundFormats('mp3');
  mySound = loadSound('stayinalive.mp3');
  img = loadImage('sunflower.png');
}

function setup() {
  mySound.play();
  createCanvas(windowWidth, windowHeight);
  stroke('orange');
  strokeWeight(25);
  frameRate(150);
}

function draw() {
  userStartAudio();
  background('lightblue');

  y = y + (3 * m);
  if (y < 0) {
    m = m * (-1);
  }
  if (y > height) {
    m = m * (-1);
  }
  fill('lightYellow');
  ellipse(0, y, width / 2);
  ellipse(width, y, width / 2);

  ellipse(0, y, width / 2);
  ellipse(width, y, width / 2);

  ellipse(0, y, width / 2);
  ellipse(width, y, width / 2);

  x = x + (3 * n);
  if (x < 0) {
    n = n * (-1);
  }
  if (x > width) {
    n = n * (-1);
  }
  ellipse(0, height / 2, x);
  ellipse(0, height / 2, x);

  ellipse(width / 2, height / 2, x);
  ellipse(width / 2, height / 2, x);

  ellipse(width, height / 2, x);
  ellipse(width, height / 2, x);

  image(img, a, b, 120, 120);
  a += speedA;
  b += speedB;

  if (a > width || a < 0) {
    speedA *= -1;
  }
  if (b > height || b < 0) {
    speedB *= -1;
  }
}