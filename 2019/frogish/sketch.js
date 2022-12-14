
/* globals createCanvas keyIsPressed rect background fill key noLoop text textSize */
var radius = 30;
var a = 200;
var b = 200;
var speed = 2;
var direction = 1;
var obstacles = [];
var characterX = 5;
var characterY = 5;
var numberOfObstacles = 7;

var win = false;

// true means collision, otherwise false
function checkCollisions () {
  for (var i = 0; i < obstacles.length; i++) {
    var obst = obstacles[i];
    var c = collideRectCircle(obst.x, obst.y, obst.width, obst.height, characterX, characterY, radius);
    if (c === true) return true;
  }
  return false;
}

function setup () {
  createCanvas(400, 400);
  for (var i = 0; i < numberOfObstacles; i++) {
    obstacles.push({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      color: 'green',
      update: function (x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;

        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
      }
    });
  }
}

function didYouWin () {
  if (characterX >= 330 && characterX <= 400 && characterY >= 330 && characterY <= 400) {
    return true;
  } else {
    return false;
  }
}

function draw () {

  background(0);
  fill('red');
  rect(310, 340, 60, 60);

  // Move the Character
  ellipse(characterX, characterY, radius, radius);

  if (keyIsPressed && key === 'ArrowLeft') {
    characterX -= 2;
  }
  if (keyIsPressed && key === 'ArrowRight') {
    characterX += 2;
  }
  if (keyIsPressed && key === 'ArrowUp') {
    characterY -= 2;
  }
  if (keyIsPressed && key === 'ArrowDown') {
    characterY += 2;
  }

  fill('green');
  a += speed * direction;
  obstacles[0].update(a, 50, 100, 20);
  obstacles[1].update(a + 300, 50, 100, 20);
  obstacles[2].update(a + 100, 180, 100, 20);
  obstacles[3].update(a + 300, 180, 100, 20);
  obstacles[4].update(a + 350, 300, 100, 20);

  if (a == 400) {
    a = -a;
  }

  b += speed * -direction;
  obstacles[5].update(b, 230, 100, 20);
  obstacles[6].update(b + 100, 120, 100, 20);

  if (b == -100) {
    b = 400;
  }

  // Winning the Game
  win = didYouWin();
  if (win) {
    noLoop();
    textSize(30);
    text('You Made It!', 100, 400);
  }

  if (checkCollisions()) {
    textSize(30);
    text('whoops!', 50, 50);
    characterX = 5;
    characterY = 5;
    ellipse(characterX, characterY, radius, radius);
  }
}
