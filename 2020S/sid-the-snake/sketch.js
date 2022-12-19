var sid;
var grid = 25; //snake is moving on a grid, not continuously
var apple; //food
var poisonA; //obstacle
var poisonB; //obstacle
var poisonC; //obstacle
var poisonD; //obstacle
var poisonE; //obstacle
var poisonF; //obstacle
var poisonG; //obstacle
var poisonH; //obstacle

function setup() {
  createCanvas(600, 400);
  sid = new Snake();
  frameRate(5); //makes it slower and more low-res like original
  chooseLocation(); //call function, sets location for food
  choosePoisonLocation(); //call function, sets location for obstacle
}

function chooseLocation() {
  let column = floor(width / grid);
  let row = floor(height / grid);
  apple = createVector(floor(random(column)), floor(random(row))); //vector stores both the x and the y, floor makes it a whole number
  apple.mult(grid); //scales it back to grid size
}

function choosePoisonLocation() {
  {
    let column = floor(width / grid);
    let row = floor(height / grid);
    poisonA = createVector(floor(random(column)), floor(random(row))); //vector stores both the x and the y, floor makes it a whole number
    poisonA.mult(grid); //scales it back to grid size
  } {
    let column = floor(width / grid);
    let row = floor(height / grid);
    poisonB = createVector(floor(random(column)), floor(random(row))); //vector stores both the x and the y, floor makes it a whole number
    poisonB.mult(grid); //scales it back to grid size
  } {
    let column = floor(width / grid);
    let row = floor(height / grid);
    poisonC = createVector(floor(random(column)), floor(random(row))); //vector stores both the x and the y, floor makes it a whole number
    poisonC.mult(grid); //scales it back to grid size
  } {
    let column = floor(width / grid);
    let row = floor(height / grid);
    poisonD = createVector(floor(random(column)), floor(random(row))); //vector stores both the x and the y, floor makes it a whole number
    poisonD.mult(grid); //scales it back to grid size
  } {
    let column = floor(width / grid);
    let row = floor(height / grid);
    poisonE = createVector(floor(random(column)), floor(random(row))); //vector stores both the x and the y, floor makes it a whole number
    poisonE.mult(grid); //scales it back to grid size
  } {
    let column = floor(width / grid);
    let row = floor(height / grid);
    poisonF = createVector(floor(random(column)), floor(random(row))); //vector stores both the x and the y, floor makes it a whole number
    poisonF.mult(grid); //scales it back to grid size
  } {
    let column = floor(width / grid);
    let row = floor(height / grid);
    poisonG = createVector(floor(random(column)), floor(random(row))); //vector stores both the x and the y, floor makes it a whole number
    poisonG.mult(grid); //scales it back to grid size
  } {
    let column = floor(width / grid);
    let row = floor(height / grid);
    poisonH = createVector(floor(random(column)), floor(random(row))); //vector stores both the x and the y, floor makes it a whole number
    poisonH.mult(grid); //scales it back to grid size
  }
}

function draw() {
  background(100, 200, 50);

  if (sid.eat(apple)) {
    chooseLocation(); // if the position has been reached, choose a new (random) location
    choosePoisonLocation(); // if the position has been reached, choose a new (random) location
  }

  if (sid.collapse(poisonA)) {
    choosePoisonLocation(); // if the position has been reached, choose a new (random) location
  }

  if (sid.collapse(poisonB)) {
    choosePoisonLocation(); // if the position has been reached, choose a new (random) location
  }

  if (sid.collapse(poisonC)) {
    choosePoisonLocation(); // if the position has been reached, choose a new (random) location
  }

  if (sid.collapse(poisonD)) {
    choosePoisonLocation(); // if the position has been reached, choose a new (random) location
  }
  if (sid.collapse(poisonE)) {
    choosePoisonLocation(); // if the position has been reached, choose a new (random) location
  }

  if (sid.collapse(poisonF)) {
    choosePoisonLocation(); // if the position has been reached, choose a new (random) location
  }

  if (sid.collapse(poisonG)) {
    choosePoisonLocation(); // if the position has been reached, choose a new (random) location
  }

  if (sid.collapse(poisonH)) {
    choosePoisonLocation(); // if the position has been reached, choose a new (random) location
  }


  sid.lose();
  sid.update(); //calling update function
  sid.show(); //calling show function


  fill('red');
  rect(apple.x, apple.y, grid, grid);

  fill('blue')
  rect(poisonA.x, poisonA.y, grid, grid);

  fill('blue')
  rect(poisonB.x, poisonB.y, grid, grid);

  fill('blue')
  rect(poisonC.x, poisonC.y, grid, grid);

  fill('blue')
  rect(poisonD.x, poisonD.y, grid, grid);

  fill('blue')
  rect(poisonE.x, poisonE.y, grid, grid);

  fill('blue')
  rect(poisonF.x, poisonF.y, grid, grid);

  fill('blue')
  rect(poisonG.x, poisonG.y, grid, grid);

  fill('blue')
  rect(poisonH.x, poisonH.y, grid, grid);
}

function keyPressed() { //global event, setting direction
  if (keyCode === UP_ARROW) {
    sid.direction(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    sid.direction(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    sid.direction(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    sid.direction(-1, 0);
  }
}