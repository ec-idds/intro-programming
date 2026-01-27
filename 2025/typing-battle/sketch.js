/*******************************************
 * A0: Assignment
 * Mark Sherman <shermanm@emmanuel.edu>
 * 26 January 2024
 ******************************************/

//Game Assets 
let surfaceImg;
let userSprites = {};
let enemySprites = {};
let pixelFont;
let heartImg;

//Sprite Setup
let spriteIdle = [];
let spriteNumber = 0;
let spriteDelay = 12;
let spriteTimer = spriteDelay; // advance the spriteNumber every x frames
//let bg;

const EASY_WORDS = [
  "cat", "dog", "sun", "hat", "run", "map", "box", "tree", "frog", "fish", "red", "blue", "jump", "fast", "ball", "milk", "book", "star", "snow", "bird"
];

const BOSS_WORDS = [
  "window", "planet", "castle", "forest", "button", "travel", "rocket", "circle", "summer", "animal",
  "silver", "magic", "puzzle", "desert", "holder", "writer", "branch", "yellow", "update", "dragon"
];

//Sprites 
const USER_TYPES = ["Panda"];
const ENEMY_TYPES = ["Lancer", "Lizard", "Minotaur", "Shaman"];
const ANIMATION_FRAMES = 4; //these are the frames for the idle/attack animations 

//Game Variables 
let currentTargetWord; //string of the player input
let currentInput = ""; //what the player has currently typed for WPM
let currentEnemyType; //the enemy character currently on screen
let currentUserType = "Panda"; // panda
let hearts = 3;
let gameOver = false;
let gameStarted = false;
let score = 0;

//Animation 
let userIsAttacking = false;
let attackTimer = 0;
const ATTACK_DURATION = 30; //30 frames for attack animation 
let spriteScale = 1; //Scale for the Sprites 

//core function 
function preload() {
  pixelFont = loadFont('Pixel.ttf');
  surfaceImg = loadImage('map.png');
  loadSpriteSet(USER_TYPES, userSprites);
  loadSpriteSet(ENEMY_TYPES, enemySprites);
  heartImg = loadImage('heart.png');
}

function setup() {
  createCanvas(1184, 672);
  frameRate(60);
  textAlign(CENTER, TOP);
}

function draw() { //1. Draw Background
  if(!gameStarted) {
    drawTitleScreen();
    return;
  }
  if(gameOver) {
    drawGameOver();
    return;
  }
  image(surfaceImg, 0, 0);

  //2. Draw Sprite and Handle Attack 
  drawSprites();

  //3. Draw Word and Input 
  drawTypingUI();

  //4. Update Attack Timer 
  if(userIsAttacking) {
    attackTimer--;
    if(attackTimer <= 0) {
      // Attack animation is finished, reset and spawn next enemy 
      userIsAttacking = false;
      newEncounter();
    }
  }

}

function keyTyped() {
  if(userIsAttacking || gameOver) {
    return;
  }

  //checking if they typed key matches th enext required character
  let requiredChar = currentTargetWord.charAt(currentInput.length);

  if(key === requiredChar) {
    currentInput += key;

    if(currentInput.length === currentTargetWord.length) {
      userIsAttacking = true;
      attackTimer = ATTACK_DURATION;
      score++;
    }
  } else {
    hearts--;
    if(hearts <= 0) {
      gameOver = true;
    }
  }
}

function newEncounter() {
  // reset input
  currentInput = "";

  //selecting new sprite 
  // currentUserType = random(USER_TYPES);
  currentEnemyType = random(ENEMY_TYPES);

  //select word based on the enemy type 
  let wordListToUse = EASY_WORDS;

  if(currentEnemyType === "Minotaur") {
    wordListToUse = BOSS_WORDS;
  }
  // selecting the random word 
  currentTargetWord = random(wordListToUse);
}

function loadSpriteSet(types, storage) {
  for(let type of types) {
    let idleFrames = [];
    let attackFrames = [];
    let attackFrameCount = 4;
    let idleFrameCount = 4;
    if(type === "Panda") {
      attackFrameCount = 13;
      idleFrameCount = 4;
    }

    for(let i = 0; i < idleFrameCount; i++) {
      let frameName = nf(i, 2) + '.png';
      //Idle Animations
      let idleFolderName = (type === "Minotaur") ? "Minotaur_Idle" : `${type}_Idle`;
      idleFrames[i] = loadImage(`${idleFolderName}/${frameName}`);
    }
    //Attack Animations
    for(let i = 0; i < attackFrameCount; i++) {
      let frameName = nf(i, 2) + '.png';
      let attackFolderName = (type === "Warrior") ? "Warrior_Attack" : `${type}_Attack`;
      attackFrames[i] = loadImage(`${attackFolderName}/${frameName}`);
    }
    //Storing the Frames
    storage[type] = {
      idle: idleFrames,
      attack: attackFrames
    };
  }

}

//Trying to figure out how to have seperate sets for idle and attack frames

//now actually drawing the two sprites on the screen
function drawSprites() {
  let userX = width / 4;
  let enemyX = width * 2.75 / 4;
  let spriteY = height / 2;
  let animationSpeed = 10; //changes the frame every 10 draws
  let userAnimation = userIsAttacking ? userSprites[currentUserType].attack : userSprites[currentUserType].idle;
  let userFrameCount = userAnimation.length;
  let userFrameIndex = floor(frameCount / animationSpeed) % userFrameCount;
  //animation section

  //players sprite
  let userFrame = userAnimation[userFrameIndex];

  //now draws the image flipped so that the other sprite is facing the enemy
  push();
  translate(userX, spriteY);
  scale(spriteScale, spriteScale); //flipping portion of this code 
  image(userFrame, 0, 0, userFrame.width, userFrame.height);
  pop();

  //now drawing the enemy sprite 
  //when the user is typing it is attacking the enmy and it disapeers from screen when word is fully typed. 
  if(!userIsAttacking) {
    let enemyFrameCount = enemySprites[currentEnemyType].idle.length;
    let enemyFrameIndex = floor(frameCount / animationSpeed) % enemyFrameCount;

    let enemyAnimation = enemySprites[currentEnemyType].idle;
    let enemyFrame = enemyAnimation[enemyFrameIndex];

    push();
    translate(enemyX, spriteY);
    scale(-spriteScale, spriteScale); //not flipped
    image(enemyFrame, 0, 0, enemyFrame.width, enemyFrame.height);
    pop();
  }
}

function drawTypingUI() {
  //displays the word and players typing progress
  let enemyX = width * 3 / 4;
  let spriteY = height / 2;
  let textY = spriteY + 200;
  let textX = enemyX - 75;
  textFont(pixelFont);
  textSize(32);
  drawHearts();
  drawScore();
  //current typed progress in green 
  fill(0, 255, 0);
  let typedPart = currentTargetWord.substring(0, currentInput.length);
  let typedWidth = textWidth(typedPart);
  text(typedPart, textX - textWidth(currentTargetWord), textY);

  //untyped words that remain are in white 
  fill(255);
  let untypedPart = currentTargetWord.substring(currentInput.length);
  text(untypedPart, textX - textWidth(currentTargetWord) / 2, textY);
}

function drawHearts() {
  let heartSize = 40;
  let heartSpacing = 50;
  let startX = 30;
  let startY = 30;

  for(let i = 0; i < hearts; i++) {
    image(heartImg, startX + (i * heartSpacing), startY, heartSize, heartSize);
  }
}

function drawScore() {
  textFont(pixelFont);
  textSize(32);
  fill(255,215,0);
  textAlign(RIGHT,TOP);
  text("Score: " + score, width - 30,30);
  textAlign(CENTER,TOP);
}

function drawGameOver() {
  fill(0, 0, 0, 150);
  rect(0, 0, width, height);

  textFont(pixelFont);
  textSize(64);
  fill(255, 0, 0);
  text("GAME OVER", width / 2, height / 2 - 100);

  textSize(48);
  fill(255,215,0);
  text("Final Score: " +score,width / 2, height / 2 - 20);

  textSize(32);
  fill(255);
  text("Press R to Restart", width / 2, height / 2 + 50);
}

function keyPressed() {
  if(gameOver && (key === 'r' || key === 'R')) {
    hearts = 3;
    gameOver = false;
    gameStarted = false;
    currentInput = "";
    newEncounter();
    score = 0;
  }
}

function drawTitleScreen() {
  image(surfaceImg, 0, 0);

  fill(0, 0, 0, 180);
  rect(0, 0, width, height);

  textFont(pixelFont);
  textSize(72);
  fill(255, 215, 0);
  text("SUPER TYPING BROS", width / 2, height / 3);

  textSize(24);
  fill(255);
  text("Defeat enemies by typing words!", width / 2, height / 3 + 80);

  let buttonWidth = 300;
  let buttonHeight = 80;
  let buttonX = width / 2 - buttonWidth / 2;
  let buttonY = height / 2 + 50;

  let isHovering = mouseX > buttonX && mouseX < buttonX + buttonWidth &&
    mouseY > buttonY && mouseY < buttonY + buttonHeight;

  if(isHovering) {
    fill(100, 200, 100);
  } else {
    fill(50, 150, 50);
  }
  rect(buttonX, buttonY, buttonWidth, buttonHeight, 10);

  noFill();
  stroke(0);
  strokeWeight(3);
  rect(buttonX, buttonY, buttonWidth, buttonHeight, 10);

  fill(255);
  textSize(48);
  text("START", width / 2, buttonY + 15);
}

function mousePressed() {
  if(!gameStarted) {
    let buttonWidth = 300;
    let buttonHeight = 80;
    let buttonX = width / 2 - buttonWidth / 2;
    let buttonY = height / 2 + 50;

    if(mouseX > buttonX && mouseX < buttonX + buttonWidth &&
      mouseY > buttonY && mouseY < buttonY + buttonHeight) {
      gameStarted = true;
      newEncounter();
    }
  }
}