
/*******************************************
 * Final Project: Pong 2.8 HD REMASTERED
 * Kyle Phillips <phillipsk@emmanuel.edu>
 * Dec 10 2024
 ******************************************/
//bonk sound credit
//StereoBonkVerb.wav by NoiseCollector -- https://freesound.org/s/9630/ -- License: Attribution 3.0

//hip hop beat credit
//Hip Hop beat & sound DEMO.MP3 by phantastonia -- https://freesound.org/s/345392/ -- License: Attribution 4.0

let startScreenMusic; // store screen music
let bonkSound; //This stores the sound

function preload() {
  startScreenMusic = loadSound("hiphopbeat.mp3"); //Load start Screen music
  bonkSound = loadSound("Bonk.mp3"); // load soundfile
}

let gameState = "start"; // States: start, play, end

// Ball properties
let ball = {
  x: 200,
  y: 200,
  radius: 10,
  xSpeed: 3,
  ySpeed: 3
};

// Paddle properties
let paddleLeft, paddleRight;
let paddleWidth = 10,
  paddleHeight = 70;
let paddleSpacing = 10; // Space between main and extra paddle

// Scores
let scoreLeft = 0,
  scoreRight = 0;

// Winner's Mode paddles
let extraPaddleLeft, extraPaddleRight;

function setup() {
  createCanvas(400, 400);

  // Ensure audio playback is allowed after user interaction, when I reload the code and without clicking on the screen
  userStartAudio();

  // Start paddles
  paddleLeft = {
    x: 20,
    y: height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight
  };
  paddleRight = {
    x: width - 30,
    y: height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight
  };

  // Extra paddles for Winner's Mode
  extraPaddleLeft = {
    x: paddleLeft.x,
    y: -100,
    width: paddleWidth,
    height: paddleHeight
  }; // Initially off-screen
  extraPaddleRight = {
    x: paddleRight.x,
    y: -100,
    width: paddleWidth,
    height: paddleHeight
  }; // Initially off-screen
}

function draw() {
  background(0, 200, 400); //blue game play creen

  // Manage game states
  if(gameState === "start") {
    background(220); //Grey color for game
    drawStartScreen();
  } else if(gameState === "play") {
    playGame();
  } else if(gameState === "end") {
    background(150); // DARK grey color for end screen
    drawEndScreen();
  }
}

function drawStartScreen() {
  // Play music if not already playing
  if(!startScreenMusic.isPlaying()) {
    startScreenMusic.loop(); // Play start screen music in a loop
  }

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  text("Pong 2.8 HD REMASTERED", width / 2, height / 2 - 30); //text for start screen
  textSize(14);
  text("Press ENTER to Start", width / 2, height / 2);

  if(keyIsPressed && keyCode === ENTER) {
    gameState = "play";
    startScreenMusic.stop(); // Stop start screen music when the game starts
  }
} // press "Enter" to play

function playGame() { //runs the game
  drawPaddles();
  drawBall();
  drawScores();
  handleCollisions();
  moveBall();
  movePaddles();

  // Winner's Mode activation (extra paddles appear only if a player has >= 5 score)
  if(scoreLeft >= 5) {
    drawExtraPaddle(extraPaddleLeft);
    followMainPaddle(extraPaddleLeft, paddleLeft);
  } else {
    // Hide extra paddle if score drops below 5
    extraPaddleLeft.y = -100; // Move it off-screen
  }

  if(scoreRight >= 5) {
    drawExtraPaddle(extraPaddleRight);
    followMainPaddle(extraPaddleRight, paddleRight);
  } else {
    // Hide extra paddle if score drops below 5
    extraPaddleRight.y = -100; // Move it off-screen
  }
}

function drawEndScreen() {
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  let winner = scoreLeft > scoreRight ? "Player 1 Wins!" : "Player 2 Wins!";
  text(winner, width / 2, height / 2 - 20);
  textSize(14);
  text("Press R to Restart", width / 2, height / 2 + 20);

  if(keyIsPressed && keyCode === 82) resetGame(); // Restart game with 'R' key
}

function drawPaddles() {
  fill(0);
  rect(paddleLeft.x, paddleLeft.y, paddleWidth, paddleHeight);
  rect(paddleRight.x, paddleRight.y, paddleWidth, paddleHeight);
}

function drawExtraPaddle(extraPaddle) {
  fill(0);
  rect(extraPaddle.x, extraPaddle.y, extraPaddle.width, extraPaddle.height);
}

function drawBall() {
  ellipse(ball.x, ball.y, ball.radius * 2);
}

function drawScores() {
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text(scoreLeft, width / 4, 20);
  text(scoreRight, (3 * width) / 4, 20);
}

function movePaddles() {
  // Player 1 (W/S keys)
  if(keyIsDown(87)) paddleLeft.y -= 5; // W key
  if(keyIsDown(83)) paddleLeft.y += 5; // S key

  // Player 2 (UP/DOWN keys)
  if(keyIsDown(UP_ARROW)) paddleRight.y -= 5;
  if(keyIsDown(DOWN_ARROW)) paddleRight.y += 5;

  // Keep paddles within canvas bounds
  paddleLeft.y = constrain(paddleLeft.y, 0, height - paddleHeight);
  paddleRight.y = constrain(paddleRight.y, 0, height - paddleHeight);
}

function followMainPaddle(extraPaddle, mainPaddle) {
  // Extra paddle follows main paddle with a fixed offset
  extraPaddle.y = mainPaddle.y + paddleHeight + paddleSpacing;
}

function moveBall() {
  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;

  // Ball bounces off top and bottom walls
  if(ball.y - ball.radius < 0 || ball.y + ball.radius > height) {
    ball.ySpeed *= -1;
    bonkSound.play(); // Play sound on wall collision
  }

  // Score handling
  if(ball.x - ball.radius < 0) {
    scoreRight++;
    resetBall();
  } else if(ball.x + ball.radius > width) {
    scoreLeft++;
    resetBall();
  }

  // End game condition
  if(scoreLeft === 7 || scoreRight === 7) gameState = "end";
}

function handleCollisions() {
  // Ball hits left paddle
  if(
    ball.x - ball.radius < paddleLeft.x + paddleWidth &&
    ball.y > paddleLeft.y &&
    ball.y < paddleLeft.y + paddleHeight
  ) {
    ball.xSpeed *= -1;
    ball.x = paddleLeft.x + paddleWidth + ball.radius; // Prevent clipping
    bonkSound.play(); //play bonk sound
  }

  // Ball hits right paddle
  if(
    ball.x + ball.radius > paddleRight.x &&
    ball.y > paddleRight.y &&
    ball.y < paddleRight.y + paddleHeight
  ) {
    ball.xSpeed *= -1;
    ball.x = paddleRight.x - ball.radius; // Prevent clipping
    bonkSound.play(); //play sound
  }

  // Ball hits extra left paddle (Winner's Mode)
  if(
    ball.x - ball.radius < extraPaddleLeft.x + extraPaddleLeft.width &&
    ball.y > extraPaddleLeft.y &&
    ball.y < extraPaddleLeft.y + extraPaddleLeft.height
  ) {
    ball.xSpeed *= -1;
    ball.x = extraPaddleLeft.x + extraPaddleLeft.width + ball.radius; // Prevent clipping
    bonkSound.play(); //play sound
  }

  // Ball hits extra right paddle (Winner's Mode)
  if(
    ball.x + ball.radius > extraPaddleRight.x &&
    ball.y > extraPaddleRight.y &&
    ball.y < extraPaddleRight.y + extraPaddleRight.height
  ) {
    ball.xSpeed *= -1;
    ball.x = extraPaddleRight.x - ball.radius; // Prevent clipping
    bonkSound.play(); //play sound
  }
}

function resetBall() {
  ball.x = width / 2;
  ball.y = height / 2;
  ball.xSpeed = random() > 0.5 ? 3 : -3; // Randomize initial direction
  ball.ySpeed = random([-2, 2]);
}

function resetGame() {
  gameState = "start";
  scoreLeft = 0;
  scoreRight = 0;
  resetBall();
}