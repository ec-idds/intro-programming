/*******************************************
 * Final Project
 * Izabela Xhalia <xhaliai@emmanuel.edu>
 * 1 December, 2025
 ******************************************/
let bgImg;

let player = {
  x: 80,
  y: 0,
  size: 30,
  ySpeed: 0,
  onGround: false
};
//game settings
let gravity = 0.85;
let jumpStrength = -11;
let groundY = 300;
let gameSpeed = 6;

//obstacles & difficulty
let obstacles = [];
let obstacleTimer = 0;
let obstacleGap = 50; //frames 

let score = 0;
let gameOver = false;

function preload() {
  bgImg = loadImage("background.png");
}
// setup
function setup() {
  createCanvas(600, 400);
  // place player on the ground
  player.y = groundY - player.size;
  obstacles.push(makeBlock(width + 200, 24));

  // music.setLoop(true);
}

function draw() {
  image(bgImg, 0, 0, width, height);

  drawGround();
  if(!gameOver) {
    updatePlayer();
    updateObstacles();
    checkCollisions();
    score++;
  }
  drawPlayer();
  drawObstacles();
  drawUI();
}

// player
function updatePlayer() {
  // gravity
  player.ySpeed += gravity;
  player.y += player.ySpeed;
  // ground collision
  if(player.y + player.size >= groundY) {
    player.y = groundY - player.size;
    player.ySpeed = 0;
    player.onGround = true;
  } else {
    player.onGround = false;
  }
}

function drawPlayer() {
  noStroke();
  fill(0, 200, 255);
  rect(player.x, player.y, player.size, player.size);
}
// rectangle
function makeBlock(x, size) {
  return {
    type: "block",
    x: x,
    y: groundY - size,
    w: size,
    h: size
  };
}

function makeSpike(x, size) {
  return {
    type: "spike",
    x: x,
    y: groundY - 4,
    w: size,
    h: size
  };
}

function spawnObstacle() {
  let allowSpikes = score > 300;
  let spawnSpike = allowSpikes && random() < 0.55;
  let chain = score > 1200 ? int(random(2, 4)) : 1; // After score 1200, spwn 2-3 obstacles in a row, otherwise just spawn 1

  for(let i = 0; i < chain; i++) {
    let spawnX = width + i * 28;
    if(spawnSpike) {
      obstacles.push(makeSpike(spawnX, 28));
    } else {
      let h = 22;
      if(score > 800) h = 30;
      if(score > 1400) h = 40;
      obstacles.push(makeBlock(spawnX, h));
    }
  }
}

function updateObstacles() {
  obstacleTimer++;

  if(obstacleTimer >= obstacleGap) {
    spawnObstacle();
    obstacleTimer = 0;
  }
  //move obstacles left
  for(let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].x -= gameSpeed;

    if(obstacles[i].x + obstacles[i].w < 0) {
      obstacles.splice(i, 1);
    }
  }
  //slowly increase difficulty every 400 frames, speeds up and reduces frames
  if(score % 400 === 0) {
    gameSpeed += 0.4;
    obstacleGap = max(95, obstacleGap - 8);
  }
}

function drawObstacles() {
  for(let obs of obstacles) {
    if(obs.type === "block") {
      fill(255, 150, 50);
      rect(obs.x, obs.y, obs.w, obs.h);
    } else {
      // spike
      fill(255, 60, 60);
      triangle(
        obs.x, obs.y,
        obs.x + obs.w / 2, obs.y - obs.h,
        obs.x + obs.w, obs.y
      );
    }
  }
}

function checkCollisions() {
  for(let obs of obstacles) {
    let hit = false;
    if(obs.type === "block") {
      hit =
        player.x < obs.x + obs.w &&
        player.x + player.size > obs.x &&
        player.y < obs.y + obs.h &&
        player.y + player.size > obs.y;
    } else {
      hit =
        player.x < obs.x + obs.w &&
        player.x + player.size > obs.x &&
        player.y < obs.y &&
        player.y + player.size > obs.y - obs.h;
    }

    if(hit) {
      gameOver = true;
      return;
    }
  }
}

function keyPressed() {

  if((keyCode === UP_ARROW || key === ' ') && player.onGround && !gameOver) {
    player.ySpeed = jumpStrength;
    player.onGround = false;
  }
  // restart
  if((key === 'r' || key === 'R') && gameOver) {
    resetGame();
  }
}

function drawGround() {
  stroke(200);
  strokeWeight(2);
  line(0, groundY, width, groundY);
}

function drawUI() {
  fill(255);
  noStroke();
  textSize(16);
  text("Score: " + score, 10, 20);
  text("UP / SPACE to jump", 10, 40);

  if(gameOver) {
    textSize(40);
    fill(255, 80, 80);
    text("GAME OVER", 180, 180);
    textSize(16);
    text("Press r to Restart", 220, 210);
  }
}

function resetGame() {
  obstacles = [];
  obstacleTimer = 0;
  obstacleGap = 150;
  score = 0;
  gameSpeed = 5;

  gameOver = false;

  player.y = groundY - player.size;
  player.ySpeed = 0;
  player.onGround = true;

  obstacles.push(makeBlock(width + 200, 24));
}