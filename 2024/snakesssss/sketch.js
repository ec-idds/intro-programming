/*******************************************
 * A0: Final Code
 * Helina Tadesse <tadesseh@emmanuel.edu>
 * Katie Bartash  <bartashk@emmanuel.edu>
 * 3 December 2024
 ******************************************/
let snakeBodyX = [];
let snakeBodyY = [];
let speed = 8;
let bodySize = 15;
let howMany = 5;
let directionX = 1;
let directionY = 0;
let foodX = 0;
let foodY = 0;
let enemySnakes = [];
let scoreBoard = 0;
let gameStart = false;
let audio;
let collision = false;
let gameEnd = false;


function preload() {
  soundFormats("mp3"); //Helps format the audio file
  audio = loadSound("game-music-loop-2-144037.mp3");

}

function foodMovement() {
  foodX = random(10, width - 10);
  foodY = random(10, height - 10);
}

function addEnemySnake() {
  let newEnemySnake = {
    bodyX: [],
    bodyY: [],
    length: 5,
  };
  for(let i = 0; i < newEnemySnake.length; i++) {
    newEnemySnake.bodyX.push(random(10, width - 10));
    newEnemySnake.bodyY.push(random(10, height - 10));
  }

  enemySnakes.push(newEnemySnake);
}

function enemySnakeMovement() {
  for(let enemy of enemySnakes) {
    enemy.bodyX[0] += random(-10, 10);
    enemy.bodyY[0] += random(-10, 10);

    if(enemy.bodyX[0] <= 0) {
      enemy.bodyX[0] += 10;
    }
    if(enemy.bodyX[0] >= width) {
      enemy.bodyX[0] += -10;
    }
    if(enemy.bodyY[0] <= 0) {
      enemy.bodyY[0] += 10;
    }
    if(enemy.bodyY[0] >= height) {
      enemy.bodyY[0] += -10;
    }
    for(let i = enemy.length - 1; i > 0; i--) {
      enemy.bodyX[i] = enemy.bodyX[i - 1];
      enemy.bodyY[i] = enemy.bodyY[i - 1];
    }
  }
}

function snakeMovement() {
  snakeBodyX[0] += directionX * speed;
  snakeBodyY[0] += directionY * speed;
  snakeBodyX[0] = snakeBodyX[0] % width;
  if(snakeBodyX[0] <= 0) {
    snakeBodyX[0] = width;
  }
  snakeBodyY[0] = snakeBodyY[0] % height;
  if(snakeBodyY[0] <= 0) {
    snakeBodyY[0] = height;
  }

  for(let i = howMany - 1; i > 0; i--) {
    snakeBodyX[i] = snakeBodyX[i - 1];
    snakeBodyY[i] = snakeBodyY[i - 1];
  }
}

function setup() {
  createCanvas(400, 400);
  frameRate(30);
  for(let i = 0; i < howMany; i++) {
    snakeBodyX.push(width / 2);
    snakeBodyY.push(height / 2);
  }
  foodMovement();
  addEnemySnake();
	audio.play(); //starts the background muisc
	audio.loop(); //allows for the music to repeat
}

let button = { //Creating the title fucntion
  x: 145,
  y: 200,
  color: 'white',
  draw: function() {
    noFill();
    fill('RebeccaPurple');
    stroke('black');
    textSize(12);
    text("PRESS ENTER TO START", 120, 210);

  }
};

function draw() {
  background('CadetBlue');
  fill('RebeccaPurple');
  stroke('black');
  textSize(55);
  text("Snakesss", 90, 170);

  button.draw(); //Draws the title on canavas

  //start the game by hitting enter
  if(keyCode === ENTER) {
    gameStart = true;
    gameEnd = false;
    scoreBoard = 0;
  }
  if(gameStart === true) {
    background('MidnightBlue');
    stroke(0);
    fill('red');
    text(scoreBoard, 350, 50);

    for(let y = 15; y <= height - 10; y += 12) { //Adds grid like bacground 
      for(let x = 15; x <= width - 10; x += 12) {
        ellipse(x, y, 3, 3);
        fill('green');
      }
    }

    // Allows snake to move with keys
    if(keyIsPressed) {
      if(keyCode === LEFT_ARROW && directionX === 0) {
        directionX = -1;
        directionY = 0;
      }
      if(keyCode === RIGHT_ARROW && directionX === 0) {
        directionX = 1;
        directionY = 0;
      }
      if(keyCode === UP_ARROW && directionY === 0) {
        directionX = 0;
        directionY = -1;
      }
      if(keyCode === DOWN_ARROW && directionY === 0) {
        directionX = 0;
        directionY = 1;
      }

    }

    snakeMovement();
    enemySnakeMovement();

    // Draw apple
    textSize(15);
    text("🍎", foodX, foodY);

    // Draw player snake
    for(let i = 0; i < howMany; i++) { //is the body of snake
      fill('chartreuse');
      circle(snakeBodyX[i], snakeBodyY[i], bodySize);
    }

    circle(snakeBodyX[0], snakeBodyY[0], bodySize * 1.2);

    // Draw enemy snakes
    for(let enemy of enemySnakes) {
      for(let i = 0; i < enemy.length; i++) {
        fill('red');
        circle(enemy.bodyX[i], enemy.bodyY[i], bodySize);
      }
    }

    if(dist(snakeBodyX[0], snakeBodyY[0], foodX, foodY) < bodySize + 4) {
      foodMovement();
      howMany += 2;
      scoreBoard += 100;
      snakeBodyX.push(snakeBodyX[howMany - 2]);
      snakeBodyY.push(snakeBodyY[howMany - 2]);
      addEnemySnake();
    }

    for(let enemy of enemySnakes) {
      for(let i = 0; i < enemy.bodyX.length; i++) {
        if(dist(snakeBodyX[0], snakeBodyY[0], enemy.bodyX[i], enemy.bodyY[i]) < bodySize) {
          collision = true;
          return;
        }
      }
    }

    if(collision === true) { //Detects if any collison occus
      gameStart = false;
      gameEnd = true;
    }
  }

  if(gameEnd === true) {
    collision = false;
    // Resets player snake position and size for next play
    howMany = 5;
    snakeBodyX = [width / 2];
    snakeBodyY = [height / 2];
    directionX = 1;
    directionY = 0;

    // Resets number of enemySnakes for next play
    enemySnakes = [];
    addEnemySnake();

    // Game over screen
    background('DarkSlateGray');
    fill('brown');
    stroke(2);
    textSize(55);
    text("GAMEOVER", 48, 180);
    textSize(15);
    text("SCORE: " + scoreBoard, width / 2 - 25, 215);
    text("PRESS ENTER TO RESTART", 110, 250);
  }
}
	//Allows for music to begin at game start
function keyPressed() {
	userStartAudio();
 }