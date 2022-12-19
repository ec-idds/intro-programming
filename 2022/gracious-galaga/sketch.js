
let enemies = [];
let shots = [];
let enemyImage;
let bulletImage;
let flag = false;
let count = 0;
let timerValue = 20;
let gameIsRunning = true;

class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.visible = true;
  }
  draw() {
    if(this.x <= width && this.y <= height-200 && this.x >= 0 && this.y >= 0 && gameIsRunning) {
      this.x += random(-5, 5);
      this.y += random(-5, 5);
    } else {
      this.x = random(0, width);
      this.y = random(300, height);
    }
    if(this.visible) {
      image(enemyImage, this.x, this.y, 25, 25);
    }
  }
  hit() {
    this.visible = false;
  }
}

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    if(this.y > 0) {
      this.y -= 20;
      image(bulletImage, this.x, this.y, 10, 10);

      // check if I've hit any enemies
      for(let enemy of enemies) {
        let hit = collideRectRect(this.x, this.y, 10, 10, enemy.x, enemy.y, 10, 10);
        if(hit && enemy.visible && gameIsRunning) {
          enemy.hit();
          count += 1000;
        }
      }
    }
  }
}

let backDrop = {
  x: 0,
  y: 0,
  image: {},
  draw: function() {
    image(this.image, 0, 0);
  }
};

let galaga = {
  x: 0,
  y: 0,
  image: {},
  collision: false,
  draw: function() {
    image(this.image, this.x, this.y, 50, 50);
  }
};


function setup() {

  createCanvas(500, 600);
  backDrop.y = height;
  backDrop.x = width;
  galaga.y = height - 50;
  galaga.x = (width / 2) - 25;

  setInterval(timeIt, 1000);

  for(let i = 0; i < 25; i++) {
    enemies[i] = new Enemy(50 + (i * 15), 100);
  }
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}

function preload() {
  backDrop.image = loadImage('finalbackground1.jpeg');
  galaga.image = loadImage('ship.png');
  bulletImage = loadImage('bullet.png');
  enemyImage = loadImage('enemy.png');
  fontRegular = loadFont('ARCADECLASSIC.TTF');
}

function draw() {
  backDrop.draw();
  galaga.draw();

  //Shooting "When you use the new keyword, it creates a new object from the class template."
  if(keyIsPressed && keyIsDown(32) && flag && gameIsRunning) {
  for(let i = 0; i < 1; i++) {
    shots[i] = new Bullet(galaga.x + 20, galaga.y + 10);
  }
  shots.push(new Bullet(galaga.x + 20, galaga.y + 10));
  flag = false;
}

if(keyIsDown(32) === false) {
  flag = true;
}

for(let shot of shots) {
  shot.draw();
}

for(let enemy of enemies) {
  enemy.draw();
}

  //Galaga Move Left and Right Arrow
  if(keyIsPressed && gameIsRunning) {
    if(keyIsDown(LEFT_ARROW) && galaga.x > 0) {
      galaga.x = galaga.x - 4;
    }

    if(keyIsDown(RIGHT_ARROW) && galaga.x < width - 45) {
      galaga.x = galaga.x + 4;
    }
  }

  //Winner
  if(count === 25000){
    textSize(100);
    fill('cyan');
    text(`Winner`, 410, 100);
  }


  //Score
  fill('white');
  textSize(25);
  textAlign(RIGHT, TOP);
  textFont(fontRegular);
  text(`Score ${count}`, 425, 10);

  //Time & Game Over
  if (timerValue <= 20) {
    text(`Time ${timerValue}`, 425, 50);
  }

  if (timerValue === 0 && count != 25000) {
    textSize(100);
    fill('red');
    text(`Game Over`, 475, 100);
    gameIsRunning = false;
  }
}
