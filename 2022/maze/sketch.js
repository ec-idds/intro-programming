/******************************************************************************
 * Maze Game
 * Intro. to Programming Final, FA22
 * Molly Hans <hansm@emmanuel.edu>, Evan Fuller <fullere@emmanuel.edu>
 * 14 December, 2022
 *****************************************************************************/
let mazes = [];
let currentMaze = 1;
let endingMusic;
let buddySize = 10;
let button = false;

let buddy = {
  x: 0,
  y: 0,
  draw: function() {
    fill('red');
    ellipse(this.x, this.y, buddySize, buddySize);
  }
};

let end = {
  x: 511,
  y: 482,
  draw: function() {
    noStroke();
    noFill();
    ellipse(this.x, this.y, 20, 20);
  }
};

function preload() {
  endingMusic = loadSound('Music/endingMusic.mp3');
  for(let i = 1; i <= 4; i++) {
    mazes[i] = loadImage('mazes/maze' + i.toString() + '.png');
  }
}

function setup() {
  createCanvas(511, 512);
  buddy.x = 7;
  buddy.y = 28;
  for(let i = 1; i <= 3; i++) {
    mazes[i].loadPixels();
  }
}

function draw() {
  userStartAudio();
  image(mazes[currentMaze], 0, 0);
  buddy.draw();
  end.draw();
  let pastX = buddy.x;
  let pastY = buddy.y;

  if(keyIsPressed && keyCode === UP_ARROW) {
    buddy.y -= 3;
    pastY += 0;
  }
  if(keyIsPressed && keyCode === DOWN_ARROW) {
    buddy.y += 3;
    pastY -= 0;
  }
  if(keyIsPressed && keyCode === LEFT_ARROW) {
    buddy.x -= 3;
    pastX += 0;
  }
  if(keyIsPressed && keyCode === RIGHT_ARROW) {
    buddy.x += 3;
    pastX -= 0;
  }

  let d = dist(buddy.x, buddy.y, end.x, end.y);
  if(d < 12) {
    currentMaze++;
    buddy.x = 7;
    end.y = 485;
  }

  if(currentMaze === 2 && d < 12) {
    buddySize = 7;
    buddy.y = 25;
    end.y = 485;
  }

  if(currentMaze === 3 && d < 12) {
    buddy.y = 19;
    buddySize = 6;
    end.y = 493;
  }

  if(currentMaze === 4 && d < 12) {
    buddy.x = -10;
    buddy.y = -10;
    endingMusic.play();
  }

  if(currentMaze === 4) {
    textSize(30);
    fill('white');
    text('YOU WIN!!!!', 340, 505);
  }

  let px = mazes[currentMaze].pixels;
  let index = (buddy.x + buddy.y * width) * 4;
  if(px[index + 0] === 0 &&
    px[index + 1] === 0 &&
    px[index + 2] === 128 &&
    px[index + 3] === 255) {
    buddy.x = pastX;
    buddy.y = pastY;
  }
}