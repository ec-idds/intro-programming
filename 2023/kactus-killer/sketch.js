/*******************************************
 * Kactus Killer
 * Brett Nkabasele and Christopher Viscio <nkabaseleb@emmanuel.edu, viscioc@emmanuel.edu>
 * 17 November 2023
 ******************************************/

let startScreen;
let storyScreen;
let gameScreen;
let gameScreen2;
let gameScreen3;

const START = 0;
const STORY = 1;
const LEVEL1 = 2;
const LEVEL2 = 3;
const LEVEL3 = 4;
const GAMEOVER = 5;

let gameState = START;

let cactus;
let cactusX = 0;
let cactusY = 300;
let hitCounter = 0;
let words = ['click here to start'];
let words2 = ['click again to play'];

function preload() {
  startScreen = loadImage('Kactus Killer.jpg');
  storyScreen = loadImage('Kactus Killer2.jpg');
  gameScreen = loadImage('desert.png');
  gameScreen2 = loadImage('desert2.png');
  gameScreen3 = loadImage('desert3.png');
  cactus = loadImage('Cactus_Sprite_Sheet.png');

}

function setup() {
  createCanvas(500, 500);
}

function draw() {

  //Start
  if(gameState == START) {
    background(startScreen);
    text(words, 90, 140);
  } else if(gameState == STORY) {
    background(storyScreen);
    text(words2, 90, 140);

    //Level 1
  } else if(gameState == LEVEL1) {
    background(gameScreen);

    //Score
    text('Level 1: Get 15 Points', 10, 35);
    textSize(30);
    text(hitCounter, 10, 70);
    textSize(30);

    //Enemies
    image(cactus, cactusX += 5, cactusY, 80, 80);

    if(cactusX > 800) {
      cactusX = 0;
    }

    //Gun
    noStroke();
    fill('red');
    ellipse(mouseX, mouseY, 20, 20);

    if(mouseIsPressed) {
      background('white');
    }

    //Level 2
  } else if(gameState == LEVEL2) {
    background(gameScreen2);

    //Score
    text('Level 2: Get 35 Points', 10, 35);
    textSize(30);
    text(hitCounter, 10, 70);
    textSize(30);

    //Enemies
    image(cactus, cactusX += 8, cactusY, 80, 80);

    if(cactusX > 800) {
      cactusX = 0;
    }

    //Gun
    noStroke();
    fill('red');
    ellipse(mouseX, mouseY, 20, 20);

    if(mouseIsPressed) {
      background('white');
    }

    //Level 3
  } else if(gameState == LEVEL3) {
    background(gameScreen3);

    //Score
    text('Level 3: Get 60 Points', 10, 35);
    textSize(30);
    text(hitCounter, 10, 70);
    textSize(30);

    //Enemies
    image(cactus, cactusX += 11, cactusY, 80, 80);

    if(cactusX > 800) {
      cactusX = 0;
    }

    //Gun
    noStroke();
    fill('red');
    ellipse(mouseX, mouseY, 20, 20);

    if(mouseIsPressed) {
      background('white');
    }

    //End
  } else if(gameState == GAMEOVER) {
    background('black');
    fill('white');
    text('You Win: Reset to play again', 55, 250);

  }

}

function mouseClicked() {
  print(gameState);
  if(gameState == START) {
    gameState = STORY;
  } else if(gameState == STORY) {
    gameState = LEVEL1;
  } else if(gameState == LEVEL1 && hitCounter >= 15) {
    gameState = LEVEL2;
  } else if(gameState == LEVEL2 && hitCounter >= 35) {
    gameState = LEVEL3;
  } else if(gameState == LEVEL3 && hitCounter >= 60) {
    gameState = GAMEOVER;
  }

  //hit detection
  if(gameState == LEVEL1 || gameState == LEVEL2 || gameState == LEVEL3) {
    if(mouseX >= cactusX && mouseX <= cactusX + 80 && mouseY >= cactusY && mouseY <= cactusY + 80) {
      hitCounter = hitCounter + 1;
    }
  }
}


