/*******************************************
 * Final Assignment
 * Ada Smith <smitha7@emmanuel.edu>
 * 14 December 2023
 ******************************************/

let button;
let gameState = 'initial';
let bird = {
  image: {},
  x: 90,
  y: 270,
  draw: function() {
    image(this.image, this.x, this.y);
  }
};
let pillars = [];
let score = 0;

function preload() {
  bird.image = loadImage('bird.png');
}

function setup() {
  createCanvas(650, 650);
  button = createButton('Start');
  button.position(width / 2 - 50, height / 2);
  button.mousePressed(startButtonPressed);

}

function startButtonPressed() {
  gameState = 'playing';
  button.hide();
}

function createPillar() {
  let randomHeight = random(100, height - 170);
  let pillar = {
    x: width,
    topHeight: randomHeight,
    bottomHeight: height - randomHeight - 170,
    width: 43
  };
  pillars.push(pillar);
}

function draw() {
  background('skyblue');
  if(gameState === 'playing') {
    bird.draw();
    bird.y = bird.y + 3;

    if(keyIsPressed && key === 'ArrowUp') {
      bird.y = bird.y - 6;
    }
    for(let i = 0; i < pillars.length; i++) {
      fill('green');
      rect(pillars[i].x, 0, pillars[i].width, pillars[i].topHeight);
      rect(pillars[i].x, height - pillars[i].bottomHeight, pillars[i].width, pillars[i].bottomHeight);
      pillars[i].x = pillars[i].x - 2;
      if(bird.x + bird.image.width > pillars[i].x &&
        bird.x < pillars[i].x + pillars[i].width &&
        (bird.y + 4 < pillars[i].topHeight || bird.y + bird.image.height - 9 > height - pillars[i].bottomHeight)) {
        gameState = 'gameOver';
        noLoop();
      }
      if(bird.x > pillars[i].x + pillars[i].width && !pillars[i].counted) {
        score = score + 1;
        pillars[i].counted = true;
      }
    }
    if(frameCount % 170 === 0) {
      createPillar();
    } else if(gameState === 'gameOver') {
      textSize(32);
      fill('red');
      text('Game Over!', width / 2 - 100, height / 2);
    }
    bird.y = constrain(bird.y + 0, 0, height - bird.image.height);

    textSize(24);
    fill('black');
    text('Score: ' + score, 10, 30);
  }
}