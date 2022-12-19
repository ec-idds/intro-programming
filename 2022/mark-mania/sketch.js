let gameScreen = []; //this is the vertical array (push/pop to move canvas up and down)
const blocked = 0;
const rocked = 1;
const bushed = 2;
const freeSpace = 36;
const finishLine = 47;
const numSpaces = 12;
const numRows = 12;
let lastShiftTime = 0; //record time last shifted
let gameOver = false;
let bushImage;
let treeImage;
let rockImage;
let grassImage;
let finishLineImg;
let level = 0;
let win = false;

let mark = {
  row: 5, //y cord
  space: 5, //x cord
  image: {},
  hit: false,
  draw: function() {
    image(this.image, this.space * 50, this.row * 50, 50, 50);
  },
  checkForHit: function() {
    let thisSpace = gameScreen[this.row][this.space];
    if(thisSpace === blocked || thisSpace === rocked || thisSpace === bushed) {
      gameOver = true;
    }
  },
  checkForWin: function() {
    let thisSpace = gameScreen[this.row][this.space];
    if(thisSpace === finishLine) {
      win = true;
    }
  },
};

function preload() {
  grassImage = loadImage('grassImage-2.jpeg');
  treeImage = loadImage('MadTree-2.png');
  rockImage = loadImage('Mad-Rock-2.png');
  bushImage = loadImage('BushFace-2.png');
  mark.image = loadImage('MarkShermanFace.png');
  finishLineImg = loadImage('Checkerboard3.png');
}

function makeRow() {
  let newRow = [];
  let obstacle = [rocked, blocked, bushed];
  for(let j = 0; j < numSpaces; j++) {
    newRow[j] = freeSpace;
  }

  let levelCount = level / 10;
  if(levelCount > 4) {
    levelCount = 4;
  }
  for(let i = 1; i <= levelCount; i++) {
    let pos = floor(random(0, numSpaces));
    newRow[pos] = random(obstacle);
  }
  return newRow;
}

function shiftGameScreen() {
  if(level >= 100) {
    let finishRow = [];
    for(let i = 0; i < numSpaces; i++) {
      finishRow[i] = finishLine;
    }
    gameScreen.unshift(finishRow);
  } else {
    gameScreen.unshift(makeRow());
  }
  gameScreen.pop();
  lastShiftTime = millis();
}

function setup() {
  createCanvas(600, 600);

  for(let i = 0; i < numRows; i++) {
    gameScreen[i] = makeRow();
  }

  mark.row = 5;
  mark.gameScreen = 5;
}

function keyPressed() {
  if(gameOver) {
    return;
  }
  if(keyCode === UP_ARROW) {
    shiftGameScreen();
    level = level + 1;
  }
  if(keyCode === DOWN_ARROW) {
    mark.row += 1;
    level = level - 1;
  }
  if(keyCode === LEFT_ARROW) {
    mark.space -= 1;
  }
  if(keyCode === RIGHT_ARROW) {
    mark.space += 1;
  }
  if(keyCode === SHIFT) {
    mark.row -= 2;
    level = level + 2;
  }
}

function gameEnded() {
  background(0);
  textSize(100);
  noStroke();
  fill('red');
  text('Game Over', 40, height / 2);
  textSize(30);
  text('Loser :(', 240, 400);
}

function winnerWinnerChickenDinner() {
  background('DodgerBlue');
  textSize(100);
  noStroke();
  fill('255');
  text('You Win!!!', 40, height / 2);
  textSize(30);
  text('happy birthday :)', 190, 400);
}

function draw() { // call millis and subtract shift time
  background(0);

  if(lastShiftTime > (millis / 5000)) {
    shiftGameScreen();
  }

  for(let i = 0; i < numRows; i++) {
    for(let j = 0; j < numSpaces; j++) {
      if(gameScreen[i][j] === freeSpace) {
        image(grassImage, j * 50, i * 50, 50, 50);
      } else if(gameScreen[i][j] === blocked) {
        image(grassImage, j * 50, i * 50, 50, 50);
        image(treeImage, j * 50, i * 50, 50, 50);
      } else if(gameScreen[i][j] === rocked) {
        image(grassImage, j * 50, i * 50, 50, 50);
        image(rockImage, j * 50, i * 50, 50, 50);
      } else if(gameScreen[i][j] === bushed) {
        image(grassImage, j * 50, i * 50, 50, 50);
        image(bushImage, j * 50, i * 50, 50, 50);
      } else if(gameScreen[i][j] === finishLine) {
        image(finishLineImg, j * 50, i * 50, 50, 50);
      }
    }
  }

  fill(255);
  rect(460, 20, 450, 72);

  //print(lastShiftTime);
  fill(0);
  textSize(20);
  text('TIMER: ', 465, 50);
  text(round(millis() / 1000), 535, 50),
    text('LEVEL: ', 465, 80);
  text(level, 535, 80); //level counter

  mark.draw();

  if(mark.space >= numSpaces || mark.space < 0 || mark.row >= numRows) {
    gameOver = true;
  } else {
    mark.checkForWin();
    if(win === true) {
      winnerWinnerChickenDinner();
    } else {
      mark.checkForHit();
    }
  }
  if(gameOver === true) {
    gameEnded();
  }
}
//let rows = []; //this is each individual row as its own array