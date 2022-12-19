var birdX = 50;
var birdY = 200;
var wallX = [];
var wallHeight = [];
var gameOver = false;
var speed = 2;
var score = 0;
var hit1 = false;
var hit2 = false;
var forest;

function preload() {
  forest = loadImage('forest.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  image(forest, 0, 0);             //background

  birdY += 2;                      //gravity

  if (gameOver == false) {         //flight
    if (keyIsPressed) {
      if (key == ' ') {
        birdY -= 8;
        fill(51, 102, 255);
        triangle(birdX, birdY, birdX, birdY - 12, birdX + 12, birdY);
        triangle(birdX + 6, birdY, birdX + 18, birdY, birdX + 6, birdY - 12);
      }
    }
  }

  fill(51, 102, 255);               //the bird
  rect(birdX, birdY, 25, 25);
  fill(230, 115, 0);
  triangle(birdX + 25, birdY + 11, birdX + 25, birdY + 19, birdX + 35, birdY + 15);
  fill('white');
  circle(birdX + 15, birdY + 10, 10);
  fill('black');
  circle(birdX + 15, birdY + 10, 5);

  if (gameOver == false) {           //creating new walls
    if (frameCount % 80 == 0) {
      wallHeight.push(random(100, 250));
      wallX.push(360);
    }
  }

  for (let i = 0; i < wallHeight.length; i++) {
    fill(102, 51, 0);                 //drawing walls
    rect(wallX[i], 0, 30, wallHeight[i]);
    rect(wallX[i], (wallHeight[i] + 105), 30, (height - 105 - wallHeight[i]));
    hit1 = hit1 || collideRectRect(birdX, birdY, 25, 25, wallX[i], 0, 30, wallHeight[i]);
    hit2 = hit2 || collideRectRect(birdX, birdY, 25, 25, wallX[i], wallHeight[i] + 105, 30, height - 105 - wallHeight[i]);
    if (wallX[i] == birdX) {          //keeping score
      score++;
    }
    wallX[i] -= speed;                //wall motion
  }

  if (score < 10) {                   //scoreboard
    fill('white');
    rect(160, 10, 85, 25);
  }
  if (score < 100 && score > 9) {
    fill('white');
    rect(160, 10, 97, 25);
  }
  if (score > 99) {
    fill('white');
    rect(160, 10, 109, 25);
  }
  textSize(20);
  fill('black');
  text('Score:', 165, 30);
  text(score, 230, 30);

  if (hit1 || hit2 || birdY < 0 || birdY > 400) {     //hitting a wall triggers game over
    gameOver = true;
  }

  if (gameOver == true) {              //game over screen
    speed = 0;
    fill('white');
    rect(105, 200, 195, 40);
    fill('black');
    textSize(30);
    text('GAME OVER', 110, 230);
  }
}
