const surface = {
  image: {},
  draw: function () {
    image(this.image, 0, 0);
  }
};// draw surface
const surface1 = {
  image: {},
  draw: function () {
    image(this.image, 150, 50);
  }
};
const surface2 = {
  image: {},
  draw: function () {
    image(this.image, 250, 300);
  }
};
const surface3 = {
  image: {},
  draw: function () {
    image(this.image, 0, 300);
  }
};
const spider5 = {
  x: 0,
  y: 0,
  image: {},
  hit: false,
  draw: function () {
    image(this.image, this.x, this.y);
  },
  checkForHit: function () {
    if (spider5.x >= frog.x - 20 && spider5.x <= frog.x + 20 && spider5.y >= frog.y - 25 && spider5.y <= frog.y + 25) {
      spider5.hit = true;
    } else {
      return false;
    }
  }
};
const spider3 = {
  x: 0,
  y: 0,
  image: {},
  hit: false,
  draw: function () {
    image(this.image, this.x, this.y);
  },
  checkForHit: function () {
    if (spider3.x >= frog.x - 20 && spider3.x <= frog.x + 20 && spider3.y >= frog.y - 25 && spider3.y <= frog.y + 25) {
      spider3.hit = true;
    } else {
      return false;
    }
  }
};
const spider2 = {
  x: 0,
  y: 0,
  image: {},
  hit: false,
  draw: function () {
    image(this.image, this.x, this.y);
  },
  checkForHit: function () {
    if (spider2.x >= frog.x - 20 && spider2.x <= frog.x + 20 && spider2.y >= frog.y - 25 && spider2.y <= frog.y + 25) {
      spider2.hit = true;
    } else {
      return false;
    }
  }
};
const spider1 = {
  x: 0,
  y: 0,
  image: {},
  hit: false,
  draw: function () {
    image(this.image, this.x, this.y);
  },
  checkForHit: function () {
    if (spider1.x >= frog.x - 20 && spider1.x <= frog.x + 20 && spider1.y >= frog.y - 25 && spider1.y <= frog.y + 25) {
      spider.hit = true;
    } else {
      return false;
    }
  }
};
const spider = {
  x: 0,
  y: 0,
  image: {},
  hit: false,
  draw: function () {
    image(this.image, this.x, this.y);
  },
  checkForHit: function () {
    if (spider.x >= frog.x - 20 && spider.x <= frog.x + 20 && spider.y >= frog.y - 25 && spider.y <= frog.y + 25) {
      spider.hit = true;
    } else {
      return false;
    }
  }
};
const spider4 = {
  x: 0,
  y: 0,
  image: {},
  hit: false,
  draw: function () {
    image(this.image, this.x, this.y);
  },
  checkForHit: function () {
    if (spider4.x >= frog.x - 20 && spider4.x <= frog.x + 20 && spider4.y >= frog.y - 25 && spider4.y <= frog.y + 25) {
      spider4.hit = true;
    } else {
      return false;
    }
  }
};
const frog = {
  x: 0,
  y: 0,
  image: {},
  log: {},
  hit: false,
  sound: {},
  draw: function () {
    image(this.log, this.x + 10, this.y + 60);
    image(this.image, this.x, this.y);
  }
};

function preload () {
  surface.image = loadImage('swamp.png');
  surface1.image = loadImage('winnnn.png');
  surface2.image = loadImage('win1.png');
  surface3.image = loadImage('winn.png');
  spider5.image = loadImage('spider.png');
  spider4.image = loadImage('spider.png');
  spider3.image = loadImage('spider.png');
  spider2.image = loadImage('spider.png');
  spider1.image = loadImage('spider.png');
  spider.image = loadImage('spider.png');
  frog.image = loadImage('frog.png');
  frog.log = loadImage('log.png');
  blip = loadSound('Heroic Demise 45kbps.mp3');
}
let score = 0;
const gridSize = 50;
let squareSize;
const colorSet = ['red', 'blue', 'green'];
let i;
let j;
let blip;
let f1 = 50;
let up1 = true;

function setup () {
  createCanvas(600, 600);
  frog.x = 300;
  frog.y = 500;
  spider.x = 20;
  spider.y = 0;
  spider1.x = 300;
  spider1.y = 20;
  spider2.x = 400;
  spider2.y = 50;
  spider3.x = 200;
  spider3.y = 0;
  spider4.x = 100;
  spider4.y = 0;
  spider5.x = 500;
  spider5.y = 0;
  blip.play();
  squareSize = width / gridSize;
}

function draw () {
  spider.checkForHit();
  spider1.checkForHit();
  spider2.checkForHit();
  spider3.checkForHit();
  spider4.checkForHit();
  spider5.checkForHit();
  if (frog.x < 0) { // allows frog to loop around screen.
    frog.x = width;
  } else if (frog.x >= width) {
    frog.x = 0;
  }
  if (spider5.y >= height) { // when spider is greater than hieght it goes to -50 so it can drop back down
    spider5.y = -50;
  }
  if (spider3.y >= height) { // when spider is greater than hieght it goes to -50 so it can drop back down
    spider3.y = -50;
  }
  if (spider4.y >= height) { // when spider is greater than hieght it goes to -50 so it can drop back down
    spider4.y = -50;
  }
  if (spider2.y >= height) { // when spider is greater than hieght it goes to -50 so it can drop back down
    spider2.y = -50;
  }
  if (spider1.y >= height) { // when spider is greater than hieght it goes to -50 so it can drop back down
    spider1.y = -50;
  }
  if (spider.y >= height) { // when spider is greater than hieght it goes to -50 so it can drop back down
    spider.y = -50;
  }
  if (keyIsPressed && keyCode === LEFT_ARROW) { // moves the frog left when left arrow key is pressed
    frog.x += -3;
  }
  if (keyIsPressed && keyCode === RIGHT_ARROW) { // moves the frog right when right arrow key is pressed
    frog.x += 3;
  }
  if (spider.y === -50) { // increases score when spider has made it past frog
    score += 5;
  }
  if (spider1.y === -50) { // increases score when spider has made it past frog
    score += 5;
  }
  if (spider2.y === -50) { // increases score when spider has made it past frog
    score += 2;
  }
  if (spider3.y === -50) { // increases score when spider has made it past frog
    score += 2;
  }
  if (spider4.y === -50) { // increases score when spider has made it past frog
    score += 2;
  }
  if (spider5.y === -50) { // increases score when spider has made it past frog
    score += 2;
  }
  if (spider.hit === true) {
    blip.stop();
    background('black');
    for (j = 0; j < gridSize; j++) {
      for (i = 0; i < gridSize; i++) {
        if (i % 2 === j % 2) {
          fill(random(colorSet));
          rect(i * squareSize, j * squareSize, squareSize, squareSize);
          fill('yellow');
        }
      }
    }
    if (up1 === true) {
      f1 = f1 + 3;
    } else {
      f1 = f1 - 3;
    }
    if (f1 >= height) {
      up1 = false;
    }
    if (f1 <= 25) {
      up1 = true;
    }
    textSize(30);
    text('Gameover!', 100, f1);
    text('Final Score', 300, f1);
    text(score, 500, f1);
  } // what happens if frog hits spider
  if (spider1.hit === true) {
    blip.stop();
    background('black');
    for (j = 0; j < gridSize; j++) {
      for (i = 0; i < gridSize; i++) {
        if (i % 2 === j % 2) {
          fill(random(colorSet));
          rect(i * squareSize, j * squareSize, squareSize, squareSize);
          fill('yellow');
        }
      }
    }
    if (up1 === true) {
      f1 = f1 + 3;
    } else {
      f1 = f1 - 3;
    }
    if (f1 >= height) {
      up1 = false;
    }
    if (f1 <= 25) {
      up1 = true;
    }
    textSize(30);
    text('Gameover!', 100, f1);
    text('Final Score', 300, f1);
    text(score, 500, f1);
  } // what happens if frog hits spider1
  if (spider4.hit === true) {
    blip.stop();
    background('black');
    for (j = 0; j < gridSize; j++) {
      for (i = 0; i < gridSize; i++) {
        if (i % 2 === j % 2) {
          fill(random(colorSet));
          rect(i * squareSize, j * squareSize, squareSize, squareSize);
          fill('yellow');
        }
      }
    }
    if (up1 === true) {
      f1 = f1 + 3;
    } else {
      f1 = f1 - 3;
    }
    if (f1 >= height) {
      up1 = false;
    }
    if (f1 <= 25) {
      up1 = true;
    }
    textSize(30);
    text('Gameover!', 100, f1);
    text('Final Score', 300, f1);
    text(score, 500, f1);
  }// what happens if frog hits spider4
  if (spider2.hit === true) {
    blip.stop();
    background('black');
    for (j = 0; j < gridSize; j++) {
      for (i = 0; i < gridSize; i++) {
        if (i % 2 === j % 2) {
          fill(random(colorSet));
          rect(i * squareSize, j * squareSize, squareSize, squareSize);
          fill('yellow');
        }
      }
    }
    if (up1 === true) {
      f1 = f1 + 3;
    } else {
      f1 = f1 - 3;
    }
    if (f1 >= height) {
      up1 = false;
    }
    if (f1 <= 25) {
      up1 = true;
    }
    textSize(30);
    text('Gameover!', 100, f1);
    text('Final Score', 300, f1);
    text(score, 500, f1);
  } // what happens if frog hits spider2
  if (spider3.hit === true) {
    blip.stop();
    background('black');
    for (j = 0; j < gridSize; j++) {
      for (i = 0; i < gridSize; i++) {
        if (i % 2 === j % 2) {
          fill(random(colorSet));
          rect(i * squareSize, j * squareSize, squareSize, squareSize);
          fill('yellow');
        }
      }
    }
    if (up1 === true) {
      f1 = f1 + 3;
    } else {
      f1 = f1 - 3;
    }
    if (f1 >= height) {
      up1 = false;
    }
    if (f1 <= 25) {
      up1 = true;
    }
    textSize(30);
    text('Gameover!', 100, f1);
    text('Final Score', 300, f1);
    text(score, 500, f1);
  } // what happens if frog hits spider3
  if (spider5.hit === true) {
    blip.stop();
    background('black');
    for (j = 0; j < gridSize; j++) {
      for (i = 0; i < gridSize; i++) {
        if (i % 2 === j % 2) {
          fill(random(colorSet));
          rect(i * squareSize, j * squareSize, squareSize, squareSize);
          fill('yellow');
        }
      }
    }
    if (up1 === true) {
      f1 = f1 + 3;
    } else {
      f1 = f1 - 3;
    }
    if (f1 >= height) {
      up1 = false;
    }
    if (f1 <= 25) {
      up1 = true;
    }
    textSize(30);
    text('Gameover!', 100, f1);
    text('Final Score', 300, f1);
    text(score, 500, f1);
  } //  what happens if frog hits spider5
  if (score <= 50 && spider.hit === false && spider1.hit === false && spider2.hit === false && spider3.hit === false) {
    spider.checkForHit();
    spider1.checkForHit();
    spider2.checkForHit();
    spider3.checkForHit();
    spider4.checkForHit();
    spider5.checkForHit();
    background('blue');
    for (let y = 30; y <= height; y += 40) { // dot background
      for (let x = 30; x <= width; x += 40) {
        fill(random(colorSet));
        ellipse(x, y, 7, 7);
      }
    }
    surface.draw();
    spider1.draw();
    spider.draw();
    spider2.draw();
    frog.draw();
    spider3.draw();
    spider.x = random(20, 25);
    spider1.x = random(300, 305);
    spider2.x = random(400, 405);
    spider3.x = random(200, 205);
    spider3.y += 3;
    spider.y += 2;
    spider1.y += 4;
    spider2.y += 3;
    fill('brown');
    rect(500, 0, 400, 100);
    fill('blue');
    text('level 1', 500, 30);
    fill('red');
    textSize(25);
    text('Score', 500, 70);
    text(score, 500, 100);
  }// controls what happens durring level 1
  if (score >= 50 && score <= 100 && spider.hit === false && spider1.hit === false && spider2.hit === false && spider3.hit === false) {
    spider.checkForHit();
    spider1.checkForHit();
    spider2.checkForHit();
    spider3.checkForHit();
    spider4.checkForHit();
    spider5.checkForHit();
    background('red');
    for (let y = 30; y <= height; y += 40) { // dot background
      for (let x = 30; x <= width; x += 40) {
        fill(random(colorSet));
        ellipse(x, y, 7, 7);
      }
    }
    surface.draw();
    spider1.draw();
    spider2.draw();
    spider.draw();
    spider3.draw();
    frog.draw();
    spider.x = random(20, 25);
    spider1.x = random(300, 305);
    spider2.x = random(400, 405);
    spider3.x = random(200, 205);
    fill('brown');
    rect(500, 0, 400, 100);
    fill('blue');
    text('level 2', 500, 30);
    spider.y += 3.5;
    spider1.y += 3;
    spider2.y += 4;
    spider3.y += 3;
    fill('red');
    textSize(25);
    text('Score', 500, 70);
    text(score, 500, 100);
  } // controls what happens durring level 2
  if (score >= 100 && score <= 150 && spider.hit === false && spider1.hit === false && spider2.hit === false && spider3.hit === false) {
    spider.checkForHit();
    spider1.checkForHit();
    spider2.checkForHit();
    spider3.checkForHit();
    spider4.checkForHit();
    spider5.checkForHit();
    background('green');
    for (let y = 30; y <= height; y += 40) { // dot background
      for (let x = 30; x <= width; x += 40) {
        fill(random(colorSet));
        ellipse(x, y, 7, 7);
      }
    }
    surface.draw();
    spider3.draw();
    spider1.draw();
    spider2.draw();
    spider.draw();
    frog.draw();
    spider.x = random(20, 25);
    spider1.x = random(300, 305);
    spider2.x = random(400, 405);
    spider3.x = random(200, 205);
    spider.y += 3;
    spider1.y += 4;
    spider2.y += 3.5;
    spider3.y += 5;
    fill('brown');
    rect(500, 0, 400, 100);
    fill('blue');
    text('level 3', 500, 30);
    fill('red');
    textSize(25);
    text('Score', 500, 70);
    text(score, 500, 100);
  } // controls what happens durring level 3
  if (score >= 150 && score <= 200 && spider.hit === false && spider1.hit === false && spider2.hit === false && spider3.hit === false) {
    spider.checkForHit();
    spider1.checkForHit();
    spider2.checkForHit();
    spider3.checkForHit();
    spider4.checkForHit();
    spider5.checkForHit();
    background('yellow');
    for (let y = 30; y <= height; y += 40) { // dot background
      for (let x = 30; x <= width; x += 40) {
        fill(random(colorSet));
        ellipse(x, y, 7, 7);
      }
    }
    surface.draw();
    spider3.draw();
    spider1.draw();
    spider2.draw();
    spider.draw();
    frog.draw();
    spider.x = random(20, 25);
    spider1.x = random(300, 305);
    spider2.x = random(400, 405);
    spider3.x = random(200, 205);
    spider.y += 5;
    spider1.y += 7;
    spider2.y += 5;
    spider3.y += 6;
    fill('brown');
    rect(500, 0, 400, 100);
    fill('blue');
    text('level 4', 500, 30);
    fill('red');
    textSize(25);
    text('Score', 500, 70);
    text(score, 500, 100);
  } // controls what happens durring level 4
  if (score >= 200 && score <= 250 && spider.hit === false && spider1.hit === false && spider2.hit === false && spider3.hit === false) {
    spider.checkForHit();
    spider1.checkForHit();
    spider2.checkForHit();
    spider3.checkForHit();
    spider4.checkForHit();
    spider5.checkForHit();
    background('purple');
    for (let y = 30; y <= height; y += 40) { // dot background
      for (let x = 30; x <= width; x += 40) {
        fill(random(colorSet));
        ellipse(x, y, 7, 7);
      }
    }
    surface.draw();
    spider3.draw();
    spider1.draw();
    spider2.draw();
    spider.draw();
    frog.draw();
    spider.x = random(20, 25);
    spider1.x = random(300, 305);
    spider2.x = random(400, 405);
    spider3.x = random(200, 205);
    spider.y += 5;
    spider1.y += 7;
    spider2.y += 6;
    spider3.y += 8;
    fill('brown');
    rect(500, 0, 400, 100);
    fill('blue');
    text('level 5', 500, 30);
    fill('red');
    textSize(25);
    text('Score', 500, 70);
    text(score, 500, 100);
  } // controls what happens durring level 5
  if (score >= 250 && score <= 300 && spider.hit === false && spider1.hit === false && spider2.hit === false && spider3.hit === false) {
    spider.checkForHit();
    spider1.checkForHit();
    spider2.checkForHit();
    spider3.checkForHit();
    spider4.checkForHit();
    spider5.checkForHit();
    background('black');
    for (let y = 30; y <= height; y += 40) { // dot background
      for (let x = 30; x <= width; x += 40) {
        fill(random(colorSet));
        ellipse(x, y, 7, 7);
      }
    }
    surface.draw();
    spider3.draw();
    spider1.draw();
    spider2.draw();
    spider.draw();
    frog.draw();
    spider.x = random(20, 25);
    spider1.x = random(300, 305);
    spider2.x = random(400, 405);
    spider3.x = random(200, 205);
    spider.y += 6;
    spider1.y += 7;
    spider2.y += 4;
    spider3.y += 5;
    fill('brown');
    rect(500, 0, 400, 100);
    fill('blue');
    text('level 6', 500, 30);
    fill('red');
    textSize(25);
    text('Score', 500, 70);
    text(score, 500, 100);
  } // controls what happens durring level 6
  if (score >= 300 && score <= 350 && spider.hit === false && spider1.hit === false && spider2.hit === false && spider3.hit === false && spider4.hit === false) {
    spider.checkForHit();
    spider1.checkForHit();
    spider2.checkForHit();
    spider3.checkForHit();
    spider4.checkForHit();
    spider5.checkForHit();
    background('pink');
    for (let y = 30; y <= height; y += 40) { // dot background
      for (let x = 30; x <= width; x += 40) {
        fill(random(colorSet));
        ellipse(x, y, 7, 7);
      }
    }
    surface.draw();
    spider3.draw();
    spider4.draw();
    spider1.draw();
    spider2.draw();
    spider.draw();
    frog.draw();
    spider.x = random(20, 25);
    spider1.x = random(300, 305);
    spider2.x = random(400, 405);
    spider3.x = random(200, 205);
    spider4.x = random(100, 105);
    spider.y += 6;
    spider1.y += 7;
    spider2.y += 4;
    spider3.y += 5;
    spider4.y += 5;
    fill('brown');
    rect(500, 0, 400, 100);
    fill('blue');
    text('level 7', 500, 30);
    fill('red');
    textSize(25);
    text('Score', 500, 70);
    text(score, 500, 100);
  }
  if (score >= 350 && score <= 425 && spider.hit === false && spider1.hit === false && spider2.hit === false && spider3.hit === false && spider4.hit === false && spider5.hit === false) {
    spider.checkForHit();
    spider1.checkForHit();
    spider2.checkForHit();
    spider3.checkForHit();
    spider4.checkForHit();
    spider5.checkForHit();
    background('#3f8cc0');
    for (let y = 30; y <= height; y += 40) { // dot background
      for (let x = 30; x <= width; x += 40) {
        fill(random(colorSet));
        ellipse(x, y, 7, 7);
      }
    }
    surface.draw();
    spider3.draw();
    spider4.draw();
    spider1.draw();
    spider5.draw();
    spider2.draw();
    spider.draw();
    frog.draw();
    spider.x = random(20, 25);
    spider1.x = random(300, 305);
    spider2.x = random(400, 405);
    spider3.x = random(200, 205);
    spider4.x = random(100, 105);
    spider5.x = random(500, 505);
    spider.y += 6;
    spider1.y += 7;
    spider2.y += 4;
    spider3.y += 5;
    spider4.y += 5;
    spider5.y += 3;
    fill('brown');
    rect(500, 0, 400, 100);
    fill('blue');
    text('level 8', 500, 30);
    fill('red');
    textSize(25);
    text('Score', 500, 70);
    text(score, 500, 100);
  }
  if (score >= 425) { // wins the game
    background('black');
    for (j = 0; j < gridSize; j++) {
      for (i = 0; i < gridSize; i++) {
        if (i % 2 === j % 2) {
          fill(random(colorSet));
          rect(i * squareSize, j * squareSize, squareSize, squareSize);
        }
      }
    }
    surface1.draw();
    surface2.draw();
    surface3.draw();
  } // wins the game
}
