/*******************************************
 * A0: Assignment
 * Leyla Rodriguez <rodriguezl2@emmanuel.edu>
 * Safa Walid <walids@emmanuel.edu>
 * 12 December 2024
 ******************************************/

let page;
let bg;
let heart;
let bg2;
let button1;
let spriteDelay = 10; // Set delay between sprite changes
let spriteTimer = spriteDelay;
let player;
let playerWidth = 48;
let playerHeight = 49;
let exWidth = 140;
let exHeight = 90;
let ex;
let jumping = false;
let exJumping = false;
let exJump = 150;
let exJumpSpeed = 3;
let exJumpDirection = -1;
let jump = 200;
let jumpSpeed = 3;
let jumpDirection = -1;
let playerLives = 3;
let exLives = 3;
let debounceExHit = false;
let debouncePlayerHit = false;

class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  setAnimation(a, returnToIdle) {
    this.animation = a;
    if(returnToIdle === true) {
      this.returnToIdle = true;
    }
  }
  next() {
    let done = this.animation.next();
    if(this.returnToIdle && done) {
      this.setAnimation(this.idleAnimation);
      this.returnToIdle = false;
    }
  }
}

class Animation {
  constructor(tilePrefix, startNum, endNum) {
    this.frames = [];
    this.curFrame = 0;

    for(let i = startNum; i <= endNum; i++) {
      let path = tilePrefix + i.toString() + '.png';
      print("loading", path);
      this.frames[i] = loadImage(path);
    }
  }
  frame() {
    return this.frames[this.curFrame];
  }
  next() {
    // returns true if the animation reached its end
    this.curFrame++;
    if(this.curFrame >= this.frames.length) {
      this.curFrame = 0;
      return true;
    } else {
      return false;
    }
  }
}

function preload() {
  // background 1
  bg = loadImage('normal_bg.png');
  // background 2
  bg2 = loadImage('Fight_Scene.png');
  // lives
  heart = loadImage('lives.png');
  // create characters
  player = new Character(60, 220);
  ex = new Character(240, 170);

  // load animations into character objects
  player.idleAnimation = new Animation('playerIdle/tile00', 0, 5);
  player.moveAnimation = new Animation('playerMove/tile00', 0, 5);
  player.deathAnimation = new Animation('playerDeath/tile00', 0, 2);
  player.attackAnimation = new Animation('playerAttack/tile04', 0, 3);
  ex.idleAnimation = new Animation('exIdle/tile00', 0, 7);
  ex.moveAnimation = new Animation('exMove/BringerofDeathMove0', 0, 7);
  ex.attackAnimation = new Animation('exAttack/BringerofDeathAttack0', 0, 9);
  ex.deathAnimation = new Animation('exDeath/BringerofDeathDeath0', 0, 9);
  player.setAnimation(player.idleAnimation);
  ex.setAnimation(ex.idleAnimation);
}

function setup() {
  createCanvas(500, 300);
  page = 0;

  // Button 1
  button1 = createButton('Continue...');
  button1.position(65, 400);
  button1.mousePressed(changePage); // Add click listener to button1
}

function draw() {
  // Background and UI
  if(page === 0) {
    image(bg, 0, 0, width, height); // Display the first background
  } else if(page === 1) {
    image(bg2, 0, 0, width, height); // Display the second background
  }
  if(page === 1) {
    // Player lives
    for(let i = 0; i < playerLives; i++) {
      image(heart, i * 35, 0);
    }
    // Ex lives
    for(let i = 0; i < exLives; i++) {
      image(heart, 400 + i * 35, 0);
    }
  }

  // Player Attack Hit Detection
  let hit = collideRectRect(player.x, player.y, playerWidth, playerHeight, ex.x + 80, ex.y + 40, 50, 56);
  if(hit === true && debounceExHit === false && player.animation === player.attackAnimation) {
    debounceExHit = true;
    if(exLives > 0) {
      exLives = exLives - 1;
      print('ex was hit');
    }
  }
  if(hit === false) {
    debounceExHit = false;
  }
  print("hit is ", debounceExHit);
  // Ex Attack Hit detection
  let exHit = collideRectRect(ex.x, ex.y, exWidth, exHeight, player.x, player.y, 50, 56);
  if(exHit === true && debouncePlayerHit === false && ex.animation === ex.attackAnimation) {
    debouncePlayerHit = true;
    if(playerLives > 0) {
      playerLives = playerLives - 1;
      print('player was hit');
    }
  }
  if(exHit === false) {
    debouncePlayerHit = false;
  }



  // player death
  if(playerLives === 0) {
    player.animation = player.deathAnimation;
  }
  // ex death
  if(exLives === 0) {
    ex.setAnimation(ex.deathAnimation);
  }

  image(ex.animation.frame(), ex.x, ex.y);
  image(player.animation.frame(), player.x, player.y);

  // Sprite animation timer
  spriteTimer--;
  if(spriteTimer < 0) {
    spriteTimer = spriteDelay;
    player.next();
    ex.next();
  }
  // Moving Player
  if(keyIsPressed) {
    if(keyCode === LEFT_ARROW) {
      // move player to the left
      player.x -= 2;
      if(player.x < 0) {
        player.x = 0;
      }
      player.setAnimation(player.moveAnimation);
    }
    if(keyCode === RIGHT_ARROW) {
      // move player to the right
      player.x += 2;
      if(player.x > 460) {
        player.x = 460;
      }
      player.setAnimation(player.moveAnimation);
    }
  } else {
    player.setAnimation(player.idleAnimation);
  }
  if(jumping) {
    // make player jump
    player.y += jumpSpeed * jumpDirection;
  }
  if(player.y <= jump) {
    jumpDirection = 1;
  } else if(player.y >= 220) {
    // return the player back to the inital y
    player.y = 220;
    jumping = false;
    jumpDirection = -1;
  }
  if(keyIsPressed) {
    //Move the ex to the left
    if(keyCode === 65) {
      ex.x -= 2;
      // ex can't go past x = 0
      if(ex.x < 0) {
        ex.x = 0;
      }
      ex.setAnimation(ex.moveAnimation);
    }
    // Move ex to the right
    if(keyCode === 68) {
      ex.x += 2;
      // ex can't go past x = 460
      if(ex.x > 460) {
        ex.x = 460;
      }
      ex.setAnimation(ex.moveAnimation);
    }
  } else {
    // make the ex stop the moving animation if not in motion
    ex.setAnimation(ex.idleAnimation);
  }
  // Jumping
  if(exJumping) {
    ex.y += exJumpSpeed * exJumpDirection;
  }
  if(ex.y <= exJump) {
    //Reverse direction to start falling
    exJumpDirection = 1;
  } else if(ex.y >= 170) {
    // Bring back to the inital y position
    ex.y = 170;
    exJumping = false;
    exJumpDirection = -1;
  }
}

function keyPressed() {
  // keyCode 32 is space bar
  if(keyCode === 32) {
    player.setAnimation(player.attackAnimation, true);
  }
  if(keyCode === 84){
    ex.setAnimation(ex.attackAnimation, true);
  }
  // buleon for jumping for the player
  if(keyCode === UP_ARROW && !jumping) {
    jumping = true;
  }
  // buleon for jumping for ex keyCode 87 is W
  if(keyCode === 87 && !exJumping) {
    exJumping = true;
  }
}

// Change the page from bg1 to bg2
function changePage() {
  // Change to the second page
  page = 1; 
  // Hide the button once the scene changes
  button1.hide();
}

function mousePressed() {
  // Track specific points easily
  print(mouseX, mouseY);
}