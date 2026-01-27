/*******************************************
 * A0: Assignment
 * Daniel R <rodriguezd4@emmanuel.edu>
 * Isaiah E <etiennei@emmanuel.edu>
 * 1 December 2025.
 ******************************************/

// --- Global Variables 
let playerX; // Car's X position
let playerY; // Car's Y position
let playerSize = 50; // Size of the car image

let obstacleX; // Triangle's X position
const obstacleWidth = 25;
const obstacleHeight = 25;

let baseSpeed = 5.2; // Normal game speed
let currentSpeed = baseSpeed; // The speed currently used in the game

// Jumping variables
let velocityY = 0; // How fast the car moves up or down
let gravity = 0.8; // How fast the car accelerates downward
let isJumping = false; // Tracks if the car is currently in the air

// Image variables
let bkg;
let BMW;

let score = 0; // Player's current score
let gameOver = false; // Tracks if the game has ended

function preload() {
  BMW = loadImage('BMW.png'); // Load the car image 
  bkg = loadImage('Bkg1.png'); // Load the background image
}

function setup() {
  createCanvas(400, 200);
  imageMode(CENTER); // Tells p5.js to draw images from their center point

  playerX = 70; // Starting X position for the car
  playerY = height - playerSize / 2;  // Starting Y position (on the ground)

  obstacleX = width + 50; // Place the obstacle off-screen to the right
}

function draw() {
  background("Purple"); // Clear the screen with a light gray color

  let triangleGroundY = height - 45; // Y position for the triangle base

  if(!gameOver) {

    // apply gravity
    if(isJumping && keyIsDown(DOWN_ARROW)) {
      velocityY += gravity * 3; // fall faster while DOWN is pressed
    } else {
      velocityY += gravity; // normal gravity
    }

    // move player vertically based on velocity
    playerY += velocityY;

    // ground position calculation
    let groundY = height - playerSize / 2 - 44;

    // Check if player has landed
    if(playerY > groundY) {
      playerY = groundY; // Keep car touching the ground line
      velocityY = 0; // Stop movement when on ground
      isJumping = false; // Player is no longer jumping
    }

    // draw background
    image(bkg, width / 2, height / 2, width, height);

    // move triangle to the left
    obstacleX -= currentSpeed;

    // Check if the triangle went off screen
    if(obstacleX < -obstacleWidth / 2) {
      obstacleX = width + 50; // Reset obstacle position to the right
      score += 10; // Add 10 points

      // speed increase logic every 50 points
      let speedIncrease = floor(score / 50);
      currentSpeed = baseSpeed + speedIncrease;
    }

    push();
    fill(200, 0, 255); // bright neon purple fill
    stroke(255); // white outline
    strokeWeight(3); // thickness of outline
    triangle(
      obstacleX, triangleGroundY,
      obstacleX + obstacleWidth, triangleGroundY,
      obstacleX + (obstacleWidth) / 2, triangleGroundY - obstacleHeight
    );
    pop();

    // draw car image
    image(BMW, playerX, playerY, playerSize * 1.6, playerSize);
  }

  let playerCenterY = playerY;
  let obstacleCenterY = triangleGroundY - obstacleHeight / 2;

  // Check the distance between car center and triangle center
  if(dist(
      playerX, playerCenterY,
      obstacleX + obstacleWidth / 2, obstacleCenterY
    ) < 40 + playerSize / 4) {
    gameOver = true; // If close enough, set game over to true
  }

  //Game Over Screen
  if(gameOver) {

    background(200, 0, 255); // faded screen overlay

    fill("Black"); // Red text
    textSize(48);
    textAlign(CENTER, CENTER); // Center text
    text("YOU LOSE!", width / 2, height / 2 - 20);

    fill(255);
    textSize(24);
    text("Final Score: " + score, width / 2, height / 2 + 20);

    textSize(16);
    text("[Refresh page to restart]", width / 2, height / 2 + 50);
  }

  // score display (always shows the score)
  fill(255);
  textSize(16);
  textAlign(LEFT, TOP); // Position from top left corner
  text("Score: " + score, 10, 10);
}

function keyPressed() {
  if(!gameOver && keyCode === UP_ARROW && !isJumping) {
    velocityY = -13; // Give car upward velocity
    isJumping = true; // Mark as jumping
  }
}