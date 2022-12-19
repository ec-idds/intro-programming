// Ronnie and Steve's A-MAZE-ing Adventure
// by Jacquelyn Collas (collasj@emmanuel.edu) &&
// Luca DePalma (correal@emmanuel.edu)
const maze = {
  x: 0,
  y: 0,
  image: {},
  draw: function () {
    image(this.image, this.x, this.y);
  }
};
const goal = {
  x: 225,
  y: 225,
  image: {},
  draw: function () {
    image(this.image, this.x, this.y);
  }
};
// Doors
let blueDoor;
let greenDoor;
let goldDoor;
let redDoor;
// Mice
let mouseA;
let mouseB;
// Buttons
let blueButton;
let greenButton;
let goldButton;
let redButton;
let gameEnd = false;

function preload () {
  maze.image = loadImage('maze-transparent.png');
  goal.image = loadImage('trophy.png');
}

function setup () {
  maze.image.loadPixels();
  maze.imagePixels = [];
  for (let i = 0; i < maze.image.pixels.length; i += 4) {
    maze.imagePixels.push({
      r: maze.image.pixels[i],
      g: maze.image.pixels[i + 1],
      b: maze.image.pixels[i + 2],
      a: maze.image.pixels[i + 3]
    });
  }
  createCanvas(500, 500);
  rectMode(CENTER);
  angleMode(DEGREES);
  // Doors
  blueDoor = new Door(300, 448.5, 349, 448.5, 'blue');
  greenDoor = new Door(151, 201, 151, 250, 'green');
  goldDoor = new Door(349, 349.5, 398, 349.5, 'gold');
  redDoor = new Door(400, 101, 448, 101, 'red');
  // Mice
  mouseA = new Mouse(25, 25, 'red', 'w', 's', 'a', 'd');
  mouseB = new Mouse(475, 475, 'blue', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight');
  // Buttons
  blueButton = new Button(125, 75, 'blue');
  greenButton = new Button(425, 375, 'green');
  goldButton = new Button(25, 475, 'gold');
  redButton = new Button(475, 25, 'red');
}

function draw () {
  background(250);
  // Draw doors
  blueDoor.doors();
  greenDoor.doors();
  goldDoor.doors();
  redDoor.doors();
  maze.draw();
  // Draw buttons
  blueButton.button();
  greenButton.button();
  goldButton.button();
  redButton.button();
  goal.draw();
  // Draw characters
  mouseA.race();
  mouseA.move();
  mouseB.race();
  mouseB.move();
  openDoors();
  gameOver();
}

function getPixelAt (x, y) {
  return maze.imagePixels[x + (y * 500)];
}

function openDoors () {
  // Open blueDoor
  if (blueDoor.pct < 1.0) {
    if (mouseA.x >= blueButton.x - 10 &&
        mouseA.x <= blueButton.x + 10 &&
        mouseA.y >= blueButton.y - 10 &&
        mouseA.y <= blueButton.y + 10) {
      blueDoor.x2 = blueDoor.x2 +
        ((blueDoor.x1 - blueDoor.x2) *
         blueDoor.pct);
      blueDoor.pct += blueDoor.step;
      blueDoor.doorClosed = false;
    }
  }
  if (mouseB.y <= blueDoor.y1 + 15 &&
      (mouseB.x > blueDoor.x1 &&
       mouseB.x < blueDoor.x2)) {
    mouseB.y++;
  }
  // Open greenDoor
  if (greenDoor.pct < 1.0) {
    if (mouseB.x >= greenButton.x - 10 &&
        mouseB.x <= greenButton.x + 10 &&
        mouseB.y >= greenButton.y - 10 &&
        mouseB.y <= greenButton.y + 10) {
      greenDoor.y2 = greenDoor.y2 +
        ((greenDoor.y1 - greenDoor.y2) *
         greenDoor.pct);
      greenDoor.pct += greenDoor.step;
      greenDoor.doorClosed = false;
    }
  }
  if (mouseA.x >= greenDoor.x1 - 15 &&
      (mouseA.y > greenDoor.y1 &&
       mouseA.y < greenDoor.y2)) {
    mouseA.x--;
  }
  // Open goldDoor
  if (goldDoor.pct < 1.0) {
    if (mouseA.x >= goldButton.x - 10 &&
        mouseA.x <= goldButton.x + 10 &&
        mouseA.y >= goldButton.y - 10 &&
        mouseA.y <= goldButton.y + 10) {
      goldDoor.x2 = goldDoor.x2 +
        ((goldDoor.x1 - goldDoor.x2) *
         goldDoor.pct);
      goldDoor.pct += goldDoor.step;
      goldDoor.doorClosed = false;
    }
  }
  if (mouseB.y <= goldDoor.y1 + 15 &&
      (mouseB.x > goldDoor.x1 &&
       mouseB.x < goldDoor.x2)) {
    mouseB.y++;
  }
  // Open redDoor
  if (redDoor.pct < 1.0) {
    if (mouseB.x >= redButton.x - 10 &&
        mouseB.x <= redButton.x + 10 &&
        mouseB.y >= redButton.y - 10 &&
        mouseB.y <= redButton.y + 10) {
      redDoor.x2 = redDoor.x2 +
        ((redDoor.x1 - redDoor.x2) *
         redDoor.pct);
      redDoor.pct += redDoor.step;
      redDoor.doorClosed = false;
    }
  }
  if (mouseA.y >= redDoor.y1 - 15 &&
      (mouseA.x > redDoor.x1 &&
       mouseA.x < redDoor.x2)) {
    mouseA.y--;
  }
}

function gameOver () {
  const rgb = ['red', 'orange', 'gold',
    'lime', 'cyan', 'blue',
    'purple', 'violet', 'pink',
    'fuchsia'];
  const textColor = random(rgb);
  if (mouseA.finish === true &&
      mouseB.finish === true) {
    for (let i = 0; i < rgb.length; i++) {
      fill(textColor);
      textSize(35);
      text('Game Over',
        width / 2 - 45, height / 2);
      text('You Win!',
        width / 2 - 45, height / 2 - 50);
      gameEnd = true;
    }
  }
}

function Door (x1, y1, x2, y2, color) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.color = color;
  this.line = 3;
  this.step = 0.005;
  this.pct = 0.0;
  this.doorClosed = true;
  this.doors = function () {
    strokeWeight(this.line);
    stroke(this.color);
    line(this.x1, this.y1, this.x2, this.y2);
    noStroke();
    noFill();
  };
}

function Mouse (x, y, color, up, down, left, right) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.size = 25;
  this.speed = 1;
  this.up = up;
  this.down = down;
  this.left = left;
  this.right = right;
  this.finish = false;
  this.race = function () {
    fill(this.color);
    rect(this.x, this.y, this.size);
    fill('white');
    ellipse(this.x - 6, this.y - 3, 4);
    ellipse(this.x + 6, this.y - 3, 4);
    noFill();
    strokeWeight(1);
    stroke(250);
    line(this.x - 6, this.y + 6,
      this.x + 6, this.y + 6);
    noStroke();
  };
  this.move = function () {
    const oldX = this.x;
    const oldY = this.y;
    if (keyIsPressed && gameEnd === false) {
      // mouse controls
      if (key === this.up) {
        this.y -= this.speed;
      }
      if (key === this.down) {
        this.y += this.speed;
      }
      if (key === this.left) {
        this.x -= this.speed;
      }
      if (key === this.right) {
        this.x += this.speed;
      }
      // mouse boundaries
      const mouseLeft = getPixelAt(this.x - 13, this.y);
      const mouseRight = getPixelAt(this.x + 13, this.y);
      const mouseUp = getPixelAt(this.x, this.y - 13);
      const mouseDown = getPixelAt(this.x, this.y + 13);
      if (mouseLeft.a !== 0 || mouseRight.a !== 0) {
        this.x = oldX;
      }
      if (mouseUp.a !== 0 || mouseDown.a !== 0) {
        this.y = oldY;
      }
    }
    // checks to see if the sprites are at the center
    if ((this.x >= goal.x) && (this.x <= goal.x + 50) &&
        (this.y >= goal.y) && (this.y <= goal.y + 50)) {
      this.finish = true;
    }
  };
}

function Button (x, y, color) {
  this.x = x;
  this.y = y;
  this.size = 25;
  this.color = color;
  this.button = function () {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  };
}
