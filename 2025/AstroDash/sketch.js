/*******************************************
 * Final Project: AstroDash
 * Gabrielle O'Connor and Shaymaa Salim 
 * <oconnorg2@emmanuel.edu> <salims@emmanuel.edu>
 * 15 December 2025
 ******************************************/

let spaceImg;
let startButton;
let pauseButton;
let gameStarted = false;
let gameEnded = false;
let paused = false;
let spriteIdle = [];
let spriteNumber = 1;
let spriteDelay = 8;
let spriteTimer = spriteDelay;
let score;
let highScore = 0;

let obstacleImgs = [];
let obstacles = [];

let astronaut = {
  draw: function() {
    image(spriteIdle[spriteNumber], this.x, this.y);

    spriteTimer--;
    if(spriteTimer < 0) {
      spriteTimer = spriteDelay;
      spriteNumber++;
    }

    if(spriteNumber >= spriteIdle.length) {
      spriteNumber = 1;
    }
  },

  move: function() {
    if(keyIsPressed) {
      if(keyCode === DOWN_ARROW) {
        astronaut.y += 2;
      }
      if(keyCode === UP_ARROW) {
        astronaut.y -= 2;
      }
      if(keyCode === RIGHT_ARROW) {
        astronaut.x += 2;
      }
      if(keyCode === LEFT_ARROW) {
        astronaut.x += -2;
      }
    }

    if(astronaut.x < 5) {
      astronaut.x = 5;
    }
    if(astronaut.x > 639) {
      astronaut.x = 639;
    }
    if(astronaut.y < 5) {
      astronaut.y = 5;
    }
    if(astronaut.y > 335) {
      astronaut.y = 335;
    }
  },
};

let obstacle = {
  draw: function() {
    if(frameCount % 60 === 0) {
      createObstacle();
    }

    for(let i = obstacles.length - 1; i >= 0; i--) {
      let o = obstacles[i];
      o.x -= o.speed;
      image(o.img, o.x, o.y);

      if(o.x < -50) {
        obstacles.splice(i, 1);
      }
    }
  }
};

function preload() {
  spaceImg = loadImage("space.png");

  for(let i = 1; i <= 5; i++) {
    spriteIdle[i] = loadImage("astronaut/astronaut.0" + i.toString() + ".png");
  }

  obstacleImgs[0] = loadImage("coin.png");
  obstacleImgs[1] = loadImage("asteroid.png");

}

function setup() {
  createCanvas(700, 394);

  startButton = createButton(' PLAY ');
  startButton.position(300, 370);
  startButton.size(100, 50);

  startButton.style('background-color', 'black');
  startButton.style('color', 'white');
  startButton.style('font-size', '20px');
  startButton.style('border', 'none');
  startButton.style('border-radius', '10px');
  startButton.style('cursor', 'pointer');

  startButton.mousePressed(startGame);

  pauseButton = createButton(' PAUSE ');
  pauseButton.position(600, 100);
  pauseButton.size(90, 50);

  pauseButton.style('background-color', 'yellow');
  pauseButton.style('color', 'red');
  pauseButton.style('font-size', '20px');
  pauseButton.style('border', 'none');
  pauseButton.style('border-radius', '10px');
  pauseButton.style('cursor', 'pointer');

  pauseButton.mousePressed(togglePause);
  pauseButton.hide(); //Hides until the game starts

}

function draw() {
  image(spaceImg, 0, 0);

  if(gameStarted && !paused) {
    astronaut.draw();
    astronaut.move();
    obstacle.draw();

    for(let i = obstacles.length - 1; i >= 0; i--) {
      let o = obstacles[i];
      let d = dist(astronaut.x, astronaut.y, o.x, o.y);

      if(d < 40) {
        if(o.img === obstacleImgs[0]) {
          score++;
          obstacles.splice(i, 1);
        } else if(o.img === obstacleImgs[1]) {
          gameStarted = false;
          gameEnded = true;
        }
      }
    }

    fill("white");
    noStroke();
    textSize(20);
    text(`Score: ${score}`, 50, 30);

    return;
  }
  if(paused) {
    fill("yellow");
    textAlign(CENTER, CENTER);
    textSize(20);
    text("PAUSED", width / 2, height / 2);
    return;
  }

  if(gameEnded) {
    pauseButton.hide();
    fill("white");
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(45);
    text("GAME OVER", width / 2, height / 2 - 50);
    text(`Score: ${score}`, width / 2, height / 2 + 10);
    if(score > highScore) {
      highScore = score;
    }
    text(`High Score: ${highScore}`, width / 2, height / 2 + 60);

    startButton.show();

    return;
  }
  if(!gameEnded) {
    score++;
  }
}

function createObstacle() {
  let obst = random(obstacleImgs);

  obstacles.push({
    img: obst,
    x: width,
    y: random(height - obst.height),
    speed: random(3, 6)
  });
}

function startGame() {
  gameStarted = true;
  gameEnded = false;
  obstacles = [];
  score = 0;
  astronaut.x = 10;
  astronaut.y = 150;

  startButton.hide();
  pauseButton.show();
}

function togglePause() {
  paused = !paused;
  if(paused) {
    pauseButton.html(' RESUME ');
  } else {
    pauseButton.html(' PAUSE ');
  }
}