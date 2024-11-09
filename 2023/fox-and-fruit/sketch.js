/*******************************************
 * Final Code: Fox and Fruit!              *
 * Elise Ferguson <fergusone@emmanuel.edu> *
 * December 15th, 2023                     *
 *******************************************/

let jumpSpeed = 0;
let woodSpeed = 5;
let points = 0;
let pointsText;
let newFont;

let bg = {
  image: {},
  draw: function() {
    image(this.image, 0, 0);
  }
};

let fox = {
  x: 10,
  y: 130,
  size: 80,
  move: function() {
    fox.y -= jumpSpeed; // Fox jumps
    jumpSpeed -= 2; // Gravity pulls fox down
    if(fox.y > 130) { // Lands fox on ground after jump
      fox.y = 130;
    }
  },
  image: {},
  draw: function() {
    image(this.image, this.x, this.y, this.size, this.size);
  }
};

let wood = {
  x: 500,
  y: 175,
  size: 40,
  active: true,
  move: function() {
    wood.x = wood.x - woodSpeed;
    if(wood.x < -35) {
      wood.x = 500;
      wood.active = false;
      strawb.active = true;
    }
  },
  image: {},
  draw: function() {
    image(this.image, this.x, this.y, this.size, this.size);
  }
};

let strawb = {
  x: 500,
  y: 175,
  size: 40,
  active: false,
  move: function() {
    strawb.x = strawb.x - woodSpeed;
    if(strawb.x < -35) {
      strawb.x = 500;
      strawb.active = false;
      wood.active = true;
    }
  },
  image: {},
  draw: function() {
    image(this.image, this.x, this.y, this.size, this.size);
  }
};

function collision() {
  // Log Collision
  if((wood.x === fox.x + 45) && (wood.y - 45 === fox.y)) {
    noLoop();

    fill('tan'); // Game Over screen when collision is detected
    rect(0, 0, 500, 500);

    push();
    textSize(50);
    fill('royalBlue');
    noStroke();
    text('GAME OVER :(', 28, 160);
    pop();

    push();
    textSize(50);
    fill('white');
    noStroke();
    text('GAME OVER :(', 25, 157);
    pop();

    push();
    fill('royalBlue');
    noStroke();
    rect(0, 190, 500, 50);
    fill('white');
    textSize(25);
    pointsText = text(`POINTS: ${points}`, 125, 227);
    pop();
  }

  // Strawberry Collision
  if((strawb.x === fox.x + 10) && (strawb.y - 45 === fox.y)) {
    strawb.x = 500;
    strawb.active = false;
    wood.active = true;
    points = points + 500;
  }
}

function gameTitle() {
  fill(124, 185, 232);
  stroke('white');
  rect(315, 0, 185, 35);

  push();
  textFont(newFont);
  textSize(20);
  fill('white');
  noStroke();
  text('Fox & Fruit!', 320, 25);
  pop();
}

function preload() {
  bg.image = loadImage('newSummer1.png');
  fox.image = loadImage('fox.png');
  wood.image = loadImage('wood.png');
  strawb.image = loadImage('strawb.png');
  newFont = loadFont('dogicapixel.ttf');
}

function setup() {
  createCanvas(500, 281);
}

function keyPressed() { // Spacebar pressed -> fox jumps at set speed
  if(key == ' ') {
    jumpSpeed = 25;
  }
}

function draw() {
  bg.draw();

  if(strawb.active){
    strawb.move();
    strawb.draw();
  }
  if(wood.active){
    wood.move();
    wood.draw();
  }
   
  fox.draw();
  gameTitle();
  fox.move();

  fill('black'); // Points Counter
  textFont(newFont);
  pointsText = text(`POINTS: ${points}`, 320, 50);
  points = points + 1;

  collision();
}