let runAni = [];
let backLay1;
let backLay2;
let backLay3;
let backLay4;
let x = 0;
let y = 285;
let gameStarted = false;
let startButton;
let restartButton;
let frame = 0;
let monster;
let monsterx = 500;
let didMonsterLeave = false;
let jumpSpeed = 0;
let isJumping = false;
let monstery = 295;
let hit = 20;
let isHit = false;
let amoog;
let scoreCounter = 0;
let markS;
//let startPlayMusic;
let score = false;

function preload() {
  for(let i = 0; i < 9; i++) {
    runAni[i] = loadImage(`animFolder/tile00${i}.png`);
  }
  backLay1 = loadImage("Background/background1.png");
  backLay2 = loadImage("Background/background2.png");
  backLay3 = loadImage("Background/background3.png");
  backLay4 = loadImage("Background/background4.png");

  monster = loadImage("animFolder/monster1.png");

  amoog = loadImage("Background/amoog.jpeg");

  markS = loadImage("Background/mark.jpg")

  //startPlayMusic = loadSound("sounds/backMusic.wav");
}

function setup() {
  createCanvas(500, 500);
  startButton = createButton('Start Your Adventure');
  startButton.position(160, 250);
  startButton.mousePressed(startGame);

  restartButton = createButton('Restart');
  restartButton.position(210, 300);
  restartButton.hide();
  restartButton.mousePressed(restartGame);

  //startPlayMusic.setLoop(true);
  //startPlayMusic.setVolume(0.5);
  //startPlayMusic.play();

}

function startGame() {
  gameStarted = true;
  startButton.hide();

}

function restartGame() {
  gameStarted = false;
  restartButton.hide();
  startButton.show();
  x = 0;
  y = 285;
  monsterx = 500;
  didMonsterLeave = false;
  isHit = false;

}

function drawBackLay() {
  for(q = 0; q < 8; q++) {
    image(backLay4, q * 70, 325);
  }
}

function drawMonster() {
  if(didMonsterLeave === true) {
    image(monster, monsterx, monstery);
    monsterx -= 5;
  }
  if(scoreCounter === 10) {
    monsterx -= 10;
  }
  if(scoreCounter === 30) {
    monsterx -= 10;
  }
  if(scoreCounter === 60) {
    monsterx -= 10;
  }

  if(monsterx < -monster.width) {
    didMonsterLeave = false;
    monsterx = 500;
    score = true;
  } else {
    didMonsterLeave = true;
    score = false;
  }
  if(score === true) {
    scoreCounter += 1;
  }

}

function drawGameOver() {
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Game Over Budddd", width / 2, height / 2);
  restartButton.show();
  image(amoog, 150, 10, 200, 200);
  image(markS, 300, 300, 25, 25);
  scoreCounter = 0;
}

function draw() {
  if(!gameStarted) {
    background(220);
    textSize(32);
    text("Press Start", 150, 200);
    return;
  }
  background(225);
  image(backLay1, 0, 50, 500, 300);
  image(backLay2, 0, 50, 500, 300);
  image(backLay3, 0, 50, 500, 300);
  drawBackLay();

  if(keyIsDown(65)) { // A
    image(runAni[frame], x, y);
    frame = (frame + 1) % runAni.length;
    x -= 3;
  } else if(keyIsDown(68)) { // D
    image(runAni[frame], x, y);
    frame = (frame + 1) % runAni.length;
    x += 3;
  } else {
    frame = 0;
    image(runAni[frame], x, y);
  }
  drawMonster();

  if(keyIsDown(32) && !isJumping) {
    jumpSpeed -= 10;
    isJumping = true;
  }
  jumpSpeed += 0.5;
  y += jumpSpeed;

  if(y > 285) {
    y = 285;
    jumpSpeed = 0;
    isJumping = false;
  }
  if(abs(monstery - y) < hit && abs(monsterx - x) < hit) {
    didMonsterLeave = true;
    isHit = true;
  } else {
    didMonsterLeave = false;
  }
  drawMonster();

  if(isHit) {
    drawGameOver();
    return;
  }

  fill("white");
  textSize(25);
  text("score = " + scoreCounter, 160, 95);

}