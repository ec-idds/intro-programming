

var ballX = Math.floor(Math.random() * 300) + 50;
var ballY = 50;
var speedX = (4, 14);
var speedY = (-14, -4);
var score = 0;
var infinity = 1000000000000000000000000000000000;

function setup() {
  createCanvas(700, 400);
}

function draw() {

  background('green');
  fill('gray')
  rect(350, -10, 1, 1000)
  fill('white')
  rect(250, -10, 10, 1000)
  fill('white')
  rect(-100, 200, 350, 10)
  fill('white')
  rect(450, -10, 10, 1000)
  fill('white')
  rect(460, 200, 350, 10)
  fill('turquoise');
  rect(30, mouseY, 15, 75);
  ellipse(37, mouseY - 40, 50, 90)
  travel();
  ball();
  hit();
  collision();
  fill('yellow')
  textSize(30);
  text("Score: " + score, 295, 25);
}
function travel() {
  ballX += speedX;
  ballY += speedY;
}

function hit() {
  if (ballY < 10) {
    speedY *= -1;
  }
  if (ballY > 400) {
    speedY *= -1;
  }
  if (ballX > 700) {
    speedX *= -1;
  }
  if (ballX < 0) {
    speedY = infinity;
    speedX = infinity;
    score = score += 0;
    fill('red')
    textSize(100);
    text("GAME OVER", 50, 150);
  }
}

function ball() {
  fill('yellow')
  ellipse(ballX, ballY, 25, 25);
}

function collision() {
   if ((ballY > mouseY &&ballY < mouseY + 90 || ballY>mouseY-75 && ballY<mouseY+10) && (ballX <=45 )) {
    
    speedX *= -1;
    speedY *= -1;
    score += 15;
  }

}
