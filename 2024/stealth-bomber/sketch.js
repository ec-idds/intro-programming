/*******************************************
 * A0: Assignment
 * Sanzio DiGesualdo <digesualdos@emmanuel.edu>
 * 26 January 2024
 ******************************************/

let bomber;
let bombs = [];
let blueTargets = [];
let redTargets = [];
let blueHits = 0;
const objective = 10;
let gameOver = false;
let youWin = false;

function setup() {
  createCanvas(800, 600);
  bomber = new Bomber(width / 2, height / 2);
  spawnTargets();
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  if(gameOver) {
    displayMessage("Game Over! Press R to Restart");
    return;
  }

  if(youWin) {
    displayMessage("You Win! Press R to Restart");
    return;
  }

  bomber.update();
  bomber.display();

  for(let bomb of bombs) {
    bomb.update();
    bomb.display();
  }

  for(let target of blueTargets) {
    target.update();
    target.display();
  }

  for(let target of redTargets) {
    target.update();
    target.display();
  }

  checkCollisions();
  displayScore();
}

function keyPressed() {
  if(key === 'R' || key === 'r') {
    resetGame();
  }
  if(key === 'b' || key === 'B') {
    print('launching bomb');
    bombs.push(new Bomb(bomber.x, bomber.y + 25));
  }
}

function spawnTargets() {
  for(let i = 0; i < 10; i++) {
    blueTargets.push(new Target(random(width), random(height), 'blue'));
    redTargets.push(new Target(random(width), random(height), 'red'));
  }
}

function checkCollisions() {
  for(let i = blueTargets.length - 1; i >= 0; i--) {
    for(let j = bombs.length - 1; j >= 0; j--) {
      if(bombs[j].hits(blueTargets[i])) {
        blueTargets.splice(i, 1);
        bombs.splice(j, 1);
        blueHits++;
        if(blueHits >= objective) {
          youWin = true;
        }
        break;
      }
    }
  }

  for(let i = redTargets.length - 1; i >= 0; i--) {
    for(let j = bombs.length - 1; j >= 0; j--) {
      if(bombs[j].hits(redTargets[i])) {
        gameOver = true;
        return;
      }
    }
  }

  for(let i = redTargets.length - 1; i >= 0; i--) {
    if(bomber.hits(redTargets[i])) {
      gameOver = true;
      return;
    }
  }
}

function resetGame() {
  blueTargets = [];
  redTargets = [];
  blueHits = 0;
  gameOver = false;
  youWin = false;
  bomber.reset();
  spawnTargets();
}

function displayScore() {
  fill('white');
  textSize(14);
  text(`Blue Hits: ${blueHits} / 10`, width / 2, 20);
}

function displayMessage(message) {
  fill('white');
  textSize(32);
  text(message, width / 2, height / 2);
}

class Bomber {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
  }

  update() {
    if(keyIsDown(UP_ARROW) && this.y > 0) this.y -= 4;
    if(keyIsDown(DOWN_ARROW) && this.y < height) this.y += 4;
    if(keyIsDown(LEFT_ARROW) && this.x > 0) this.x -= 4;
    if(keyIsDown(RIGHT_ARROW) && this.x < width) this.x += 4;
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(200, 200, 255);
    noStroke();
    ellipse(0, 0, 60, 30);
    fill(150, 150, 255);
    triangle(-30, -15, 30, -15, 0, -40);
    triangle(-30, 15, 30, 15, 0, 40);
    fill(150, 150, 255);
    triangle(30, -10, 50, -20, 50, 20);
    fill(255, 100, 100);
    ellipse(30, 0, 20, 20);
    pop();
  }

  hits(target) {
    return dist(this.x + this.size / 2, this.y + this.size / 2, target.x, target.y) < this.size / 2 + target.size / 2;
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
  }
}

class Bomb {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 10;
    this.speed = 5;
  }

  update() {
    this.y += this.speed;
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(128, 128, 128);
    rect(-5, -15, 10, 30);
    fill(255, 0, 0);
    triangle(-5, -15, 5, -15, 0, -25);
    pop();
  }

  hits(target) {
    return dist(this.x, this.y, target.x, target.y) < this.size / 2 + target.size / 2;
  }
}

class Target {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.color = color;
    this.xSpeed = random(1, 3);
    this.ySpeed = random(1, 3);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if(this.x < 0 || this.x > width) this.xSpeed *= -1;
    if(this.y < 0 || this.y > height) this.ySpeed *= -1;
  }

  display() {
    if(this.color === 'blue') {
      fill('blue');
      noStroke();
      ellipse(this.x, this.y, this.size, this.size);
    } else if(this.color === 'red') {
      fill('red');
      noStroke();
      rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    }
  }
}