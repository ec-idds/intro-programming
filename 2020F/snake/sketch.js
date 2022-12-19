let isRunning = false;
const snake = {
  tail: [{
    x: 200,
    y: 200
  }],
  length: 1,
  w: 20,
  h: 20,
  speed: 20,
  updateDelay: 10,
  direction: 'north',
  draw: function () {
    strokeWeight(3);
    stroke('black');
    fill(255, 94, 245);
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, this.w, this.h);
    }
  },
  update: function () {
    if (frameCount % this.updateDelay !== 0) {
      return;
    }
    if (!isRunning) {
      return;
    }
    const o = {
      x: this.tail[0].x,
      y: this.tail[0].y
    };
    if (snake.direction === 'north') {
      o.y = this.tail[0].y - this.speed;
    }
    if (this.direction === 'south') {
      o.y = this.tail[0].y + this.speed;
    }
    if (this.direction === 'east') {
      o.x = this.tail[0].x + this.speed;
    }
    if (this.direction === 'west') {
      o.x = this.tail[0].x - this.speed;
    }
    this.tail.unshift(o);
    if (this.tail.length > this.length) {
      this.tail.pop();
    }
  }
};
const fruit = {
  x: 200,
  y: 150,
  w: 20,
  h: 20,
  draw: function () {
    strokeWeight(2);
    stroke('black');
    fill('red');
    text('🍒', this.x - 5, this.y + 5);
    //     point(this.x, this.y); // to test where the fruit is measured from
  }
};

function setup () {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw () {
  background(153, 204, 255);
  if (keyIsPressed && keyCode === DOWN_ARROW) {
    snake.direction = 'south';
    isRunning = true;
  }
  if (keyIsPressed && keyCode === UP_ARROW) {
    snake.direction = 'north';
    isRunning = true;
  }
  if (keyIsPressed && keyCode === RIGHT_ARROW) {
    snake.direction = 'east';
    isRunning = true;
  }
  if (keyIsPressed && keyCode === LEFT_ARROW) {
    snake.direction = 'west';
    isRunning = true;
  }
  if (dist(fruit.x, fruit.y, snake.tail[0].x, snake.tail[0].y) < 18) {
    fruit.x = random(0, width);
    fruit.y = random(0, height);
    snake.length++;
  }
  if (snake.tail[0].x === 0 || snake.tail[0].y === 0) {
    snake.speed = 0;
    fill('pink');
    textSize(50);
    text('Game Over!', width / 6, height / 2);
  }
  if (snake.tail[0].x === width || snake.tail[0].y === height) {
    snake.speed = 0;
    fill('pink');
    textSize(50);
    text('Game Over!', width / 6, height / 2);
  }
  for (let i = 1; i < snake.tail.length; i++) {
    if (snake.tail[0].x === snake.tail[i].x && snake.tail[0].y === snake.tail[i].y) {
      snake.speed = 0;
      isRunning = false;
      fill('pink');
      textSize(50);
      text('Game Over!', width / 6, height / 2);
    }
  }
  if (snake.tail[0].x === 0 || snake.tail[0].y === 0) {
    snake.speed = 0;
    fill('pink');
    textSize(50);
    text('Game Over!', width / 6, height / 2);
  }
  snake.update();
  fruit.draw();
  snake.draw();
  print(snake.tail.length);
}
