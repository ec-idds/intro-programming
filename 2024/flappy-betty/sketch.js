/*******************************************
 * Final Project
 * Grace LePain <lepaing@emmanuel.edu>
 * 5 December 2024
 ******************************************/

let birdImage;
let bird;
let barriers = [];
let clouds = [];
let gameSpeed = 2;
let gravity = 0.5;
let isGameOver = false;
let gameStarted = false;
let score = 0;
let flapSound, scoreSound;

class Bird {
  constructor() {
    this.x = 50;
    this.y = height / 2;
    this.size = 60;
    this.hitDia = 40;
    this.velocity = 0;
  }

  update() {
    this.velocity += gravity;
    this.y += this.velocity;

    if(this.y > height - this.size / 2) {
      this.y = height - this.size / 2;
      this.velocity = 0;
    } else if(this.y < this.size / 2) {
      this.y = this.size / 2;
      this.velocity = 0;
    }
  }

  show() {
    image(birdImage, this.x, this.y, this.size, this.size);
  }

  jump() {
    this.velocity = -6.5;
    flapSound.play();
  }
}

class Barrier {
  constructor() {
    this.width = random(20, 60);
    this.minGap = 170;
    this.gapSize = random(this.minGap, 220);
    this.heightTop = random(50, height - this.gapSize - 50);
    this.heightBottom = height - this.heightTop - this.gapSize;
    this.x = width;
    this.color = color(random(100, 255), random(150, 255), random(100, 255));
  }

  move() {
    this.x -= gameSpeed;
  }

  show() {
    fill(this.color);
    rect(this.x, 0, this.width, this.heightTop);
    rect(this.x, height - this.heightBottom, this.width, this.heightBottom);
  }

  offscreen() {
    return this.x < -this.width;
  }

  hits(bird) {
    return collideRectCircle(
        this.x, 0, this.width, this.heightTop, bird.x + bird.size / 2, bird.y + bird.size / 2, bird.hitDia) ||
      collideRectCircle(this.x, height - this.heightBottom, this.width, this.heightBottom, bird.x + bird.size / 2, bird.y + bird.size / 2, bird.hitDia);
  }
}

class Cloud {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
  }

  move() {
    if(!isGameOver) {
      this.x -= this.speed;
      if(this.x < -this.size) {
        this.x = width + this.size;
      }
    }
  }

  show() {
    fill(255, 255, 255, 200);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size / 1.5);
    ellipse(this.x + this.size / 2, this.y, this.size / 1.5, this.size / 2);
    ellipse(this.x - this.size / 2, this.y, this.size / 1.5, this.size / 2);
  }
}

function preload() {
  birdImage = loadImage("Betty.png");
  flapSound = loadSound('sfx_wing.wav');
  scoreSound = loadSound('sfx_point.wav');
}

function setup() {
  createCanvas(400, 600);
  bird = new Bird();

  for(let i = 0; i < 5; i++) {
    let cloud = new Cloud(random(width), random(50, 200), random(40, 80), random(1, 3));
    clouds.push(cloud);
  }
}

function draw() {
  background(212, 242, 252);

  for(let cloud of clouds) {
    cloud.move();
    cloud.show();
  }

  fill("green");
  noStroke();
  rect(0, 550, 400, 100);

  if(!isGameOver) {
    if(gameStarted) {
      bird.update();
      bird.show();

      if(bird.y + bird.size / 2 >= height) {
        isGameOver = true;
      }

      if(frameCount % floor(90 - (gameSpeed * 2)) === 0) {
        barriers.push(new Barrier());
        gameSpeed += 0.1;
        gameSpeed = Math.min(gameSpeed, 200);
      }

      for(let i = barriers.length - 1; i >= 0; i--) {
        barriers[i].move();
        barriers[i].show();

        if(barriers[i].hits(bird)) {
          isGameOver = true;
        }
        if(!barriers[i].passed && bird.x + bird.size / 2 > barriers[i].x + barriers[i].width) {
          barriers[i].passed = true;
          score++;
          scoreSound.play();
        }

        if(barriers[i].offscreen()) {
          barriers.splice(i, 1);
        }
      }

      fill(0);
      textSize(20);
      textAlign(300, 20);
      text("Score: " + score, width - 50, 20);
    } else {
      bird.show();
      fill(0);
      textSize(24);
      textAlign(CENTER, CENTER);
      text("Press any key to start", width / 2, height / 2);
    }
  } else {
    fill(148, 10, 10);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Game Over Fool!", width / 2, height / 2);
    textSize(24);
    text("Score: " + score, width / 2, height / 2 + 50);
  }
}

function keyPressed() {
  if(!gameStarted) {
    gameStarted = true;
  }
  if(!isGameOver) {
    bird.jump();
  }
}