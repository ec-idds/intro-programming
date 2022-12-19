let running = false;
let score = 0;
let catX = 200;
let catY = 200;
const startingMoveTime = 3 * 1000;
let moveTime = startingMoveTime;
let timeLastMoved = 0;
let startTime = 0;
let gameTime = 30 * 1000;
let success;
let click;
let purr;

function preload() {
  success = loadSound("success.mp3");
  click = loadSound("click.mp3");
  purr = loadSound("purr.mp3");
}

function setup() {
  createCanvas(400, 400);
}

function drawCat() {
  push();
  translate(catX - 80, catY - 40);
  fill("orange");
  stroke("orange");
  strokeWeight(8);
  line(110, 115, 130, 90);
  strokeWeight(1);
  ellipse(100, 100, 35, 50);
  ellipse(100, 65, 30);
  triangle(85, 65, 85, 45, 100, 55);
  triangle(115, 65, 115, 45, 100, 55);
  pop();
}

function startGame() {
  print("Starting game");
  moveTime = startingMoveTime;
  startTime = millis();
  score = 0;
  running = true;
  moveCat();
}

function stopGame() {
  print("Stopping game");
  running = false;
  success.play();
  purr.play();
}

function moveCat() {
  catX = random(0, width - 55);
  catY = random(0, height - 85);
  timeLastMoved = millis();
}

function mousePressed() {
  if (running === false) {
    startGame();
  }
  if (mouseX >= catX && mouseX <= catX + 55 &&
    mouseY >= catY && mouseY <= catY + 85 &&
    running === true) {
    score++;
    moveCat();
    moveTime *= 0.9;
    print("Setting move time to " + moveTime);
    click.play();
  }
}

function draw() {
  background(220);

  let timeElapsed = millis() - startTime;
  let timeString = "Time left: ";

  if (running === false && startTime == 0) {
    textSize(30);
    fill("navy");
    text("Welcome to Pet the Cat!", 50, 130);
    text("Click to begin", 110, 160);
  }

  if (running === false && startTime > 0) {
    textSize(30);
    text("Click to play again", 90, 130);
  }

  if (running === true) {
    timeString = timeString + (round(gameTime - timeElapsed) / 1000);
  } else {
    timeString = timeString + '0';
  }
  textSize(20);
  text(timeString, 30, 40);
  text("Score: " + score, 30, 60);

  if (running === true) {
    if (gameTime - timeElapsed <= 0) {
      stopGame();
    }
    if (millis() - timeLastMoved >= moveTime) {
      moveCat();
    }
  }
  drawCat();
}