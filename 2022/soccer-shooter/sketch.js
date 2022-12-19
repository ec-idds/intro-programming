let slider;
let img;

function preload(){
  img = loadImage('soccerfield.jpeg');
}

function setup() {
  createCanvas(360, 400);
  slider = createSlider(0, 320);
}
let side = true;
let ballY = 390;
let goalx = 0;
let goalGo = true;
let counter = 0;
let score = false;
let speed = 2;

function draw() {
  image(img, 0, 0);
  let val = slider.value();
  textSize(13);
  textStyle(BOLD);
  text(counter, 5, 10);
  if(side == true && goalx >= 0 && goalGo) {
    goalx = goalx - speed;

  } else {
    side = false;
  }
  if(side == false && goalx <= 260 && goalGo) {
    goalx = goalx + speed;
  } else {
    side = true;
  }
  if(mouseX > 313 && mouseX < 360 && mouseY > 0 && mouseY < 12 && score == false) {
    ballY = 390;
    counter = 0;
    goalGo = true;
    speed = 2;
  } else {
    ballY = ballY;
  }
  if(ballY < 85 && val > goalx && val < goalx + 62) {
    textSize(50);
    textStyle(BOLD);
    text('GOAL!', 105, 200);
    textSize(25);
    text('Press Space to Continue', 35, 250);
    score = true;
  } else {
    score = false;
  }
  if(score) {
    counter += 1;
    noLoop();
    redraw(1);
  }
  if(score == false && ballY == 62) {
    textSize(40);
    textStyle(BOLD);
    text("You Got Sherm'd", 15, 200);
    textSize(25);
    text('Press Restart to Play Again', 18, 250);
  }

  fill(0);
  textSize(10);
  //text(`mouseX: ${mouseX}    mouseY: ${mouseY}`, 230, 395);

  textSize(13);
  text('Restart', 313, 11);
  textSize(40);
  text('⚽️', val, ballY);
  textSize(100);
  text('🥅', goalx, 70);
}

function mouseReleased() {
  if(ballY <= 390) {
    ballY = ballY - 328;
    goalGo = false;
    score = true;
  } else {
    ballY = ballY;
  }
}

function keyPressed() {
  ballY = 390;
  goalGo = true;
  speed = speed + 1;
  loop();
}