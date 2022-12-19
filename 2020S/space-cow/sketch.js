var speed = 5;
var jumping = false;
var running = true;
var score = 0;
var cow;
var moon;
var sky;

function preload () {
  cow = loadImage('cow_50x50.png');
  moon = loadImage('Moon_50x50.png');
  sky = loadImage('skybackground.jpg');
}

function setup () {
  createCanvas(400, 400);
}

let y = 300;
let x = 500;

function keyPressed () {
  if (key === ' ' && running === true) {
    y -= 100;
    // detect if moon is in specific range
    if (x > 80 && x < 200) {
      score++;
    }
  }
}

function update () {
  // enables cow to jump and enforces gravity so cow falls
  if (jumping === false) {
    y++;
  }

  if (y >= 350) {
    y = 350;
  }

  if (y <= 250) {
    y = 250;
  }
  // allows moon to wrap around screen repeatedly
  x += speed;
  if (x > width + 10) {
    x = -10;
  }
}
// draws scoreboard in top left corner
function drawScore () {
  fill(254, 220, 86);
  textSize(30);
  text('Score: ' + score, 8, 20);
}

function draw () {
  // collision detector
  if (collideRectRect(250, y, 50, 50, x, 350, 50, 50)) {
    running = false;
  }

  if (running === true) {
    update();
  }

  image(sky, 0, 0);
  image(cow, 250, y);
  image(moon, x, 350);

  if (running === false) {
    fill(254, 220, 86);
    textSize(45);
    text('Game Over', 75, 225);
  }
  drawScore();
}
