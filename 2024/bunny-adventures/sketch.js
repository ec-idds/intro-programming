/*******************************************
 * Final Project
 * Kealy Concepcion Santos and Sophia Novoa <concepcionsantosk@emmanuel.edu> <novoas@emmanuel.edu>
 * 26 November 2024
 ******************************************/

let bgImage; // Background image

let veggieImage; // Vegetable carrot image

let vegetables = []; // Array that holds the vegetables

let vegetableCount = 13; // Number of vegetables to spawn

let vegetableSize = 55; // Size of vegetables

let score = 0; // Displays the player's score

let timer = 30; // Game timer, 30 seconds

let vegetableVisibleTime = 160; // Time that each vegetable stays visible

let minvegetableVisibleTime = 30; // Minimum visible time for each vegetables

let song; // Background music 

let pointSound; // Sound effect

// Different bunny position
let bunnyBackHigh, bunnyBackHit, bunnyFrontHigh, bunnyFrontHit;

let bunnyLeftHigh, bunnyLeftHit, bunnyRightHigh, bunnyRightHit;

let currentBunnySprite;

let bunnyX = 300; // The initial X axis position of the bunny

let bunnyY = 300; // The initial Y axis position of tthe bunny

let hitTime = 0; // This keeps track of the time when the bunny is in the "hit" position

function preload() {

  // Preloads all of the background music
  song = loadSound('Assets/Background/music.mp3'); // Background music

  pointSound = loadSound('Assets/Background/soundeffects.mp3'); // Sound effect

  bgImage = loadImage('Assets/Background/Artwork.png'); // Loads the backgound image

  veggieImage = loadImage('Assets/Background/Vegetable.png'); // Loads the vegetable image

  // Loads the different position of the bunny sprite (has the different actions)
  bunnyBackHigh = loadImage('Assets/Bunny/Back_high.png');

  bunnyBackHit = loadImage('Assets/Bunny/Back_hit.png');

  bunnyFrontHigh = loadImage('Assets/Bunny/Front_high.png');

  bunnyFrontHit = loadImage('Assets/Bunny/Front_hit.png');

  bunnyLeftHigh = loadImage('Assets/Bunny/Left_high.png');

  bunnyLeftHit = loadImage('Assets/Bunny/Left_hit.png');

  bunnyRightHigh = loadImage('Assets/Bunny/Right_high.png');

  bunnyRightHit = loadImage('Assets/Bunny/Right_hit.png');
}

//Runs once when game starts
function setup() {
  createCanvas(600, 600); // Creates 600x600 canvas

  song.play(); // Plays the background music

  song.loop(); // Loops the background music

  song.setVolume(0.4); // Sets the volume background music to 40%

  currentBunnySprite = bunnyFrontHigh; // Sets the initial position of the bunny to be front facing

  //Spawn vegetables at the start
  for(let i = 0; i < vegetableCount; i++) {
    spawnVegetable(); // Call function to spawn a vegetable 

  }
}

// Constinuously updates the game screen 
function draw() {

  //Draws the background image
  imageMode(CORNER); // Sets the image mode to the use top-let corne for placement 

  image(bgImage, 0, 0, width, height); // Draws the background image to cover the whole canvas

  imageMode(CENTER); // Sets the image mode to use the center for placement

  image(currentBunnySprite, bunnyX, bunnyY, 78, 78); // Draws the current position of the bunny

  imageMode(CENTER); // Sets the image mode to use the center for placement

  //Loop through all vegetables, vegetables are drawn if visible 
  for(let i = 0; i < vegetables.length; i++) {
    let veg = vegetables[i];
    // If the vegetable is visible for too long it will be hidden
    if(veg.visible) {
      if(frameCount - veg.lastVisibleTime > vegetableVisibleTime) {
        veg.visible = false; // Sets vegetable to hiden

      } else {
        image(veggieImage, veg.x, veg.y, vegetableSize, vegetableSize); // Draws the vegetable image
      }
    } else {
      //if the vegetbale is not visible for a random amount of time, respawn it 
      if(frameCount - veg.lastVisibleTime > int(random(60, 180))) {
        respawnVegetable(veg); // Call function to respawn the vegetable
      }
    }
  }

  // Displays the score and timer on screen
  textSize(18); // Text size

  fill(255); // Text color

  textAlign(CENTER, CENTER); // Aligns the text to the center

  text(`Time: ${timer}s`, 50, 19); // Displays the remaining time

  text(`Score:${score}`, 157, 19); // Displays the score

  // Countdown timer per second and speed up vegetable visible time

  if(frameCount % 60 == 0 && timer > 0) {
    timer--; // Decreases the timer by 1 second
    vegetableVisibleTime = max(minvegetableVisibleTime, vegetableVisibleTime - 3); // Speeds up how fast vegetables are hidden
  }

  // After time is done, "Game over" will be displayed
  if(timer <= 0) {

    textSize(100); // Text size for "Game Over"

    fill(255); // Color for text

    textAlign(CENTER, CENTER); // Aligns the text to the center

    text("Game Over!", width / 2, height / 2); // Displays "Game Over!" at the center of the screen

    textSize(30); // Text size for "Final Score"

    text("Final Score:" + score, width / 2, height / 2 + 50); // Displays "Final Score:" of the player under the "Game Over!" text

    noLoop(); // Stops the game 
  }

  // This resets the bunny position after every hit
  if(hitTime > 0 && frameCount - hitTime > 6) {
    currentBunnySprite = bunnyFrontHigh;
    hitTime = 0;
  }
}

function keyPressed() {

  userStartAudio(); // Starts the audio (background music and sound effect)

  if(keyCode === LEFT_ARROW || key === 'a') {
    bunnyX -= 20; // Bunny moves to the left
    currentBunnySprite = bunnyLeftHigh; // This sets the bunny position to be left facing

  } else if(keyCode === RIGHT_ARROW || key === 'd') {
    bunnyX += 20; // Bunny moves to the right
    currentBunnySprite = bunnyRightHigh; // This sets the bunny position to be right facing

  } else if(keyCode === UP_ARROW || key === 'w') {
    bunnyY -= 20; // Bunny moves up
    currentBunnySprite = bunnyBackHigh; // This sets the bunny position to be back facing

  } else if(keyCode === DOWN_ARROW || key === 's') {
    bunnyY += 20; // Bunny moves down
    currentBunnySprite = bunnyFrontHigh; // This sets the bunny position to be front facing

  }

  checkCollisions(); // This checks if the bunny has collided with any of the vegetables
}

// Interacting with the veggies 
function checkCollisions() {

  for(let i = 0; i < vegetables.length; i++) {
    let veg = vegetables[i];
    //If vegetables are visible, if the bunny has collided ith the vegetables will be checked
    if(veg.visible) {
      let d = dist(bunnyX, bunnyY, veg.x, veg.y); // Calculates the distance between the bunny and vegetables
      if(d < vegetableSize / 2) { // If bunny touches the vegetable
        score++; // Score is increased by 1
        veg.visible = false; // Hide vegetables 
        veg.lastVisibleTime = frameCount; // Record the time that vegetables were last hidden

        // If the Bunny and the vegetables have collided, the positon of the bunny will be changed to the "hit" action
        if(currentBunnySprite == bunnyFrontHigh) {
          currentBunnySprite = bunnyFrontHit;
          
        } else if(currentBunnySprite === bunnyBackHigh) {
          currentBunnySprite = bunnyBackHit;

        } else if(currentBunnySprite === bunnyLeftHigh) {
          currentBunnySprite = bunnyLeftHit;

        } else if(currentBunnySprite === bunnyRightHigh) {
          currentBunnySprite = bunnyRightHit;

        }
        hitTime = frameCount; // Records the hit time

        pointSound.play(); // Plays the pointSound (sound effect) if the bunny and vegetables have collided

        break; // Stop the loop once one vegetable is collided with

      }
    }
  }
}

// Spwans new vegetables at a random spot
function spawnVegetable() {

  let veg = { // Object that represents one vegetable 
    x: random(150, 500), // Random X-axis position, within the dirt patch
    y: random(250, 410), // Random y-axis position, withing the dirt patch
    visible: true, // Makes vegetable visible when it spawns
    // Record the framecount when the vegetable was last visible, it then add a random delay to make the vegetable appearence more random
    lastVisibleTime: frameCount + int(random(0, 180))

  };

  vegetables.push(veg); // Add the new vegetables object to the vegetables array
}

function respawnVegetable(veg) {
  veg.x = random(150, 500); // Places vegetable in the x-axis with random coordinates within the ranges 150-500
  veg.y = random(250, 410); // Places vegetable in the y-axis with random coordinates withing the ranges 250-410
  veg.visible = true; // Makes vegetable visible
  veg.lastVisibleTime = frameCount; // Records the framecount in when vegetable became visible before dissapearing
}