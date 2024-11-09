let playerCar; // Player's car
let trackWidth = 400; // Width of the track
let carSpeed = 3; // Speed of the cars
let trackCenter; // Center of the track
let leftEdge, rightEdge; // Edges of the track
let trees = []; // Array to hold trees
let barrierHeight = 1; // Height of the barrier
let forwardSpeed = 6; // Speed when moving forward
let obstacleFrequency = 60; // Frequency of obstacle cars creation
let obstacleWidth = 30; // Width of obstacle cars
let obstacleHeight = 40; // Height of obstacle cars
let isGameOver = false; // Game over flag
let lineLength = 20; // Length of each segment of the dotted line
let gap = 20; // Gap between each segment
let linePosition = 0;
let lineSpeed = -0.15;
let startTime;
let elapsedTime;
let maxCars =8;
let activeCars = [];


function setup() {
  createCanvas(600, 400);
  trackCenter = width / 2;
  leftEdge = trackCenter - trackWidth / 2;
  rightEdge = trackCenter + trackWidth / 2;

  // Create the player's car
  playerCar = new Car(width / 2, height - 50, 20, 30, color(255, 200, 0));

  

  // Creating obstacle cars
  for (let i = 0; i < 5; i++) {
    createObstacleCar();
  }

  let numberOfTrees = 10;
  let treeSpacing = trackWidth / (numberOfTrees + 2); // +2 to ensure trees only appear on the outside edges

  for (let i = 1; i <= numberOfTrees; i++) {
    trees.push(new Tree(leftEdge - i * treeSpacing, random(height - 50, height), 20, 60)); // Adjusted size of trees
    trees.push(new Tree(rightEdge + i * treeSpacing, random(height - 50, height), 20, 60)); // Adjusted size of trees
  }

  startTime = millis();

}

function createObstacleCar() {
  if (activeCars.length < maxCars) {
    let overlapping = true;
    let newObstacle;
    while (overlapping) {
      let randomX = random(leftEdge, rightEdge - obstacleWidth);
      let randomY = random(-height * 2, -height); // Start above the canvas
      newObstacle = new Car(randomX, randomY, obstacleWidth, obstacleHeight, color(0, 255, 0), false);
      overlapping = false;
      for (let car of activeCars) {
        if (newObstacle.collides(car)) {
          overlapping = true;
          break;
        }
      }
    }
    activeCars.push(newObstacle);
  }
}

function draw() {
  background(220);
  if (!isGameOver) {
    // Draw track
    fill(100);
    rect(leftEdge, 0, trackWidth, height);

    fill(255, 255, 0); // Yellow color
    for (let i = linePosition; i < height; i += lineLength + gap) {
      rect(trackCenter - 2, i, 4, lineLength); // Adjust x-coordinate for the center of the road
    }

    // Move the line downwards to simulate motion
    linePosition += lineSpeed * forwardSpeed; // Adjust based on your game's speed variable

    if (linePosition > lineLength + gap) {
      linePosition = 0; // Reset line to the top once it goes past the canvas
    }

    // Draw barrier
    noFill();
    rect(leftEdge, height - barrierHeight, trackWidth, barrierHeight);

    // Update and draw player's car
    playerCar.display();
    playerCar.update();
    playerCar.checkBarrierCollision(height - barrierHeight);

    // Move player's car based on arrow keys
    if (keyIsDown(LEFT_ARROW) && playerCar.x > leftEdge + carSpeed / 2) {
      playerCar.x -= carSpeed;
    }
    if (keyIsDown(RIGHT_ARROW) && playerCar.x < rightEdge - playerCar.width - carSpeed / 2) {
      playerCar.x += carSpeed;
    }
    if (keyIsDown(UP_ARROW) && playerCar.y > 0 + forwardSpeed / 2) {
      playerCar.y -= forwardSpeed;
    }
    if (keyIsDown(DOWN_ARROW) && playerCar.y < height - playerCar.height - barrierHeight - forwardSpeed / 2) {
      playerCar.y += forwardSpeed;
    }

    // Move trees with the road
    for (let i = 0; i < trees.length; i++) {
      trees[i].moveWithRoad();
      trees[i].display();
    }

    // Create new obstacle cars during the game
    if (frameCount % obstacleFrequency === 0) {
      createObstacleCar();
    }

    for (let i = activeCars.length - 1; i >= 0; i--) {
    activeCars[i].display();
    activeCars[i].update();

    if (playerCar.collides(activeCars[i])) {
      // Handle collision
      isGameOver = true;
    }
  }
}
  if (!isGameOver) {
    elapsedTime = millis() - startTime;
  } else {
    // Game over screen
    textAlign(CENTER);
    textSize(40);
    fill(255, 0, 0);
    text("Game Over", width / 2, height / 2);

    // Calculate elapsed time
    elapsedTime = millis() - startTime;
    let seconds = Math.floor(elapsedTime / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    // Display elapsed time
    textAlign(CENTER);
    textSize(20);
    fill(0);
    text(`Time: ${nf(minutes, 2)}:${nf(seconds, 2)}`, width / 2, height / 2 + 50); // Display time when game ends

    noLoop();
  }
}

class Car {
  constructor(x, y, w, h, col) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = col;
    this.speed = carSpeed;
  }

  display() {
    // Car body
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);

    // Window at the front side
    fill(150); // Color for the window
    beginShape();
    vertex(this.x + this.width / 4, this.y); // Top-left point
    vertex(this.x + (3 * this.width) / 4, this.y); // Top-right point
    vertex(this.x + this.width, this.y + this.height / 4); // Bottom-right point
    vertex(this.x, this.y + this.height / 4); // Bottom-left point
    endShape(CLOSE);

    let wheelSize = this.width / 6;
    fill(50);
    ellipse(this.x - wheelSize / 2, this.y + this.height, wheelSize, wheelSize);
    ellipse(this.x - wheelSize / 2, this.y + (this.height * 1) / 6, wheelSize, wheelSize);

    // Wheels on the right side
    ellipse(this.x + this.width + wheelSize / 2, this.y + this.height, wheelSize, wheelSize);
    ellipse(this.x + this.width + wheelSize / 2, this.y + (this.height * 1) / 6, wheelSize, wheelSize);
  }

  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-height * 2, -height);
      this.x = random(leftEdge, rightEdge - this.width);
    }
  }

  collides(otherCar) {
    return (
      this.x < otherCar.x + otherCar.width &&
      this.x + this.width > otherCar.x &&
      this.y < otherCar.y + otherCar.height &&
      this.y + this.height > otherCar.y
    );
  }

  checkBarrierCollision(barrierY) {
    if (this.y + this.height > barrierY) {
      this.y = barrierY - this.height;
    }
  }
}

class Tree {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.speed = carSpeed; // Trees move with the road at the same speed as cars
  }

  display() {
    fill(50, 150, 50);
    rect(this.x + this.width / 4, this.y + this.height / 2, this.width / 2, this.height / 2);

    // Tree foliage (increased size)
    fill(0, 100, 0); // Dark green for foliage
    ellipse(this.x + this.width / 2, this.y + this.height / 3, this.width * 2, this.height / 1.5);
    ellipse(this.x + this.width / 2, this.y + this.height / 6, this.width * 1.6, this.height / 1.5);
    ellipse(this.x + this.width / 2, this.y, this.width * 1.2, this.height / 1.5);
  }

  moveWithRoad() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-height * 2, -height);
    }
  }
}