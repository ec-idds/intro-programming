/*******************************************
 * A0: Assignment
 * Gus, Josh, Mahari <fallaha@emmanuel.edu, santiagoj@emmanuel.edu, guerrierm@emmanuel.edu>
 * December 10th, 2024
 ******************************************/

let ball,
    hoop,
    score,
	  timer,
	  shotClock;
		bgImage;
    highScore;
    gamePaused;
		hoopImage; 
    buzzer;
    winSound;


  
		function preload() {
		bgImage = loadImage('basketball.jpg');
		hoopImage = loadImage('new hoop for program.png');
    scoreSound = loadSound('sound.mp3');
    buzzer = loadSound('buzzer.wav');
    winSound = loadSound('YOU WIN.wav');
		}





function setup() {
  createCanvas(400, 400);


// Ball
ball = {
x: width / 2,
y: height - 30, 
size: 40,
isDragging: false
};

//Hoop
hoop = {
x: width / 2 - 44,
y: 85,
width: 90,
height: 80
};

// Score and Timer
score = 0;
timer = 30; // 30 seconds
shotClock = frameCount;

// High Score
highScore = 0;

// Game Paused State
gamePaused = false;
}

function draw () {

	image(bgImage, 0, 0, width, height);

	
let timeElapsed = int((frameCount - shotClock) / 60);
timer = 30 - timeElapsed;


// End game when timer reaches 0 
if (score >= 50 && !gamePaused){
  gamePaused = true; // pause the game
  highScore = max(highScore, score); // Update high score if needed
displayEndScreen("YOU WIN!");
if (!winSound.isPlaying()) {
winSound.play();
}
noLoop();
return;
}


if (timer <= 0 && !gamePaused) {
displayEndScreen("YOU LOSE!!!");
noLoop();
return;
}


image(hoopImage, hoop.x, hoop.y, hoop.width, hoop.height);

// Display hoop 


// Display Ball
textSize(ball.size); // Orange Ball
textAlign(CENTER, CENTER);
text('🏀', ball.x, ball.y);


// Ball being dragged; follows mouse 
if (ball.isDragging) {
ball.x = mouseX;
ball.y = mouseY;
}


// Score changes as ball enters hoop
if (ball.y < hoop.y + hoop.height && ball.y >  hoop.y && ball.x > hoop.x && ball.x < hoop.x + hoop.width)
{ 
	score += 2; // increases by 2
	resetBall(); 
  scoreSound.play();


}


function displayEndScreen(message) {
background(0);
fill(255);
textSize(40);
textAlign(CENTER, CENTER);
text(message, width / 2, height / 2);

if (message === "YOU LOSE!!!" && !buzzer.isPlaying()){
  buzzer.play();
}
}
// Draw Scoreboard 
drawscoreboard();


// Display Message
displayMessage();
}


function drawscoreboard() {
fill(0, 0, 0, 150); 
rect(width - 350, 10, 300, 80, 10);

// Draw Score on Scoreboard
fill(255, 255, 255); 
textSize(18);
textAlign(CENTER, CENTER);
text("YOU", width - 300, 20);
text(score, width - 300, 60);

// Timer
textSize(18);
text("TIME", width - 100, 20);
text(timer, width - 100, 60);
}

// Message on the Screen to reach goal
function displayMessage() {
color('yellow'); 
textSize(13);
textAlign(LEFT, TOP);
text("SCORE 50 POINTS!", 5, 110);
}


// Reset ball to starting position
function resetBall() {
// Reset ball to original position
ball.x = width / 2;
ball.y = height - 90;
ball.isDragging = false;
}



// Drag and Release Ball 
function mousePressed() {
if (dist(mouseX, mouseY, ball.x, ball.y) < ball.size / 2) {
ball.isDragging = true;

if (!gameStarted) {
    gameStarted = true;  // Start the game
    shotClock = frameCount;
}
}
}
function mouseReleased() {
ball.isDragging = false;
}

// Resume game when ENTER is pressed after winning
function keyPressed() {
  if (gamePaused && keyCode === ENTER) {
    gamePaused = false;
    shotClock = frameCount - (30 - timer) * 60; // Adjust clock to continue timer
    loop(); // Restart the draw loop
  }
}