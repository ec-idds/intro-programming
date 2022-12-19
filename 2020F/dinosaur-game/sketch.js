/* Final Project: Desert Dino Dash
 * by Simran Padgett <padgetts@emmanuel.edu>
 * December 9th, 2020
 */

let score = 0;

const cactus = {
  x: 400,
  y: 330,
  size: 50,
  speed: 1,
  draw: function () {
    image(this.image, this.x, this.y, this.size, this.size);
  },
  crash: false,
  scored: false
};

const dino = {
  x: 100,
  y: 320,
  canJump: false,
  draw: function () {
    image(this.image, this.x, this.y, 70, 70);
  }
};

const landscape = {
  x: 0,
  y: -155,
  draw: function () {
    image(this.image, this.x, this.y, 605, 700);
  }
};

function preload () {
  dino.image = loadImage('dog-green.png');
  cactus.image = loadImage('cacti.1.png');
  landscape.image = loadImage('utah-landscape.png');
}

function setup () {
  createCanvas(400, 400);
}

function draw () {
  background(220);
  landscape.draw();
  // Update cactus position
  cactus.x -= cactus.speed;
  cactus.speed += 0.005;
  // Reset the Cactus
  if (cactus.x <= -100) {
    cactus.x = 450;
    cactus.y = 330;
    cactus.scored = false;
  }
  // Detect Jump Key Press
  if (keyIsPressed && keyCode === 32) {
    if (dino.canJump === true) {
      dino.y -= 4;
    } else {
      dino.y += 1;
    }
  } else {
    dino.y = 320;
  }
  if (dino.y <= 240) {
    dino.canJump = false;
  }
  if (dino.y >= 320) {
    dino.canJump = true;
  }
  // Check for collision
  const d = dist(cactus.x, cactus.y, dino.x, dino.y);
  if (d < 50) {
    cactus.crash = true;
    cactus.speed = 0;
    dino.y = 320;
    textFont('Helvetica');
    text('GAME OVER!', 40, 250);
  }
  // Detect if Jump happened
  if (cactus.x < dino.x - 50 && cactus.scored === false) { // has the cactus passed the dino?
    if (cactus.crash === false) {
      score += 1;
    }
    cactus.scored = true;
  }
  cactus.draw();
  dino.draw();
  textSize(50);
  text(score, 340, 50);
}
