/*******************************************
 * Chubby Commits Tax Evasion
 * Jenn Dias & Angel Muthemba
 * 1 December 2022
 ******************************************/

let lives = 3;
let foodCounter = 0;
let clouda = 80;
let cloudb = 80;
let clouda1 = 185;
let cloudb1 = 170;
let d;
let d2;
let chubbyImg;
let cakeImg;
let taxImg;
let cloud1Img;
let cloud2Img;
let bgImg;
let openImg;
let winImg;
let loseImg;
let mouseFlag;
let running;
let song;
let collectAudio;
let winAudio;
let loseAudio;
let taxAudio;
running = false;

function preload() {
  bgImg = loadImage('backgroundchub.png');
  chubbyImg = loadImage('dog/chubbs0.png');
  cakeImg = loadImage('cake.png');
  taxImg = loadImage('taxes.png');
  cloud1Img = loadImage('cloud1.png');
  cloud2Img = loadImage('cloud2.png');
  winImg = loadImage('manicChub.jpg');
  openImg = loadImage('upsidedown.jpg');
  loseImg = loadImage('papers.jpeg');
  song = loadSound('chubaudio.mp3');
  collectAudio = loadSound('collectaudio.wav');
  winAudio = loadSound('da daa.mp3');
  loseAudio = loadSound('TUBAH.mp3');
  taxAudio = loadSound('oof.mp3');
}

let chubby = {
  x: 56,
  y: 370,
  radius: 27.5,
  velocity: 8,
  gravity: 0.3,
  restrict: -15,
  char: function() {
    image(chubbyImg, this.x, this.y);
  },
  jump: function() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if(this.y > 370) {
      this.velocity = 0;
      this.y = 370;
      if(keyIsDown(UP_ARROW)) {
        this.velocity += this.restrict;
      }
    }
  },
};

let food = {
  x: 400,
  y: 370,
  speed: -2,
  hit: false,
  char: function() {
    image(cakeImg, food.x, food.y);
  },
  run: function() {
    this.x += this.speed;
    if(this.x < 0) {
      this.x = random(500, 750);
      food.hit = false;
    }
  },
};

let taxes = {
  x: 400,
  y: 370,
  speed: -3,
  alreadyHit: false,
  char: function() {
    image(taxImg, taxes.x, taxes.y);
  },
  run: function() {
    this.x += this.speed;
    if(this.x < 0) {
      this.x = random(500, 750);
      taxes.alreadyHit = false;
    }
  },
};

function setup() {
  createCanvas(500, 400);
  imageMode(CENTER);
  song.loop();
}

function collision() {
  d = dist(chubby.x, chubby.y, taxes.x, taxes.y);
  if(d < chubby.radius && taxes.alreadyHit === false) {
    lives--;
    taxes.alreadyHit = true;
    taxAudio.play();
  }
}

function foodGrabber() {
  d2 = dist(chubby.x, chubby.y, food.x, food.y);
  if(d2 < chubby.radius && food.hit === false) {
    foodCounter++;
    food.hit = true;
    collectAudio.play();
  }
}

function mouseClicked(){
  mouseFlag = true;
  song.play();
}

function draw() {
  userStartAudio();
  image(bgImg, width / 2, height / 2);

  
  textAlign(CENTER);
  text('this is chubby.', width / 2, 70);
  openImg.resize(100, 120);
  image(openImg, width / 2, 140);
  text('chubby likes to commit tax evasion and eat cake. will you help him?', width / 2, height / 2 + 30);
  text('🍰 lets get this lil man \n some CAKE! 🍰', width / 2 - 100, height / 2 + 50);
  text('no he literally ate \n an entire sheet cake already wtf', width / 2 + 100, height / 2 + 50);

  if(mouseFlag === true && mouseX > width / 2 && running === false) {
    image(bgImg, width / 2, height / 2);
    text('too bad.', width / 2, height / 2);
    text('<----move your mouse over here to quit \n heheheheh', width / 2 + 100, height / 2 + 30);
  }

  if(mouseFlag === true && mouseX <= width / 2 || mouseFlag === true && mouseX >= width / 2 && running === true){
    image(bgImg, width / 2, height / 2);

    text('use the up arrow to jump!', width / 2, 50);

    running = true;
    
    chubby.char();
    chubby.jump();

    food.char();
    taxes.char();

    food.run();
    taxes.run();

    makeClouds();
    collision();
    foodGrabber();

    if(d < chubby.radius && lives <= 0) {
      image(bgImg, width / 2, height / 2);
      loseImg.resize(150, 220);
      image(loseImg, width / 2, height / 2);
      textAlign(CENTER);
      loseAudio.play();
      fill('brown');
      text('too many taxes!! game over :(', width / 2, height / 2);
      fill('black');
      song.stop();
      noLoop();
    }
    if(d2 < chubby.radius && foodCounter === 5) {
      image(bgImg, width / 2, height / 2);
      winImg.resize(150, 220);
      image(winImg, width / 2, height / 2);
      textAlign(CENTER);
      winAudio.play();
      fill('brown');
      text('congratulations you successfully evaded taxes!!', width / 2, height / 2);
      fill('black');
      song.stop();
      
      noLoop();

    }

    textAlign(LEFT);
    text("LIVES: " + lives, 10, 20);
    text("FOOD : " + foodCounter + "/5", 400, 20);
    textSize(16);
  }
}



function makeClouds() {
  image(cloud1Img, clouda, cloudb);

  clouda += 0.1;
  if(clouda > width) {
    clouda = random(-40, -20);
  }
  image(cloud2Img, clouda1, cloudb1);
  clouda1 += 0.1;
  if(clouda1 > width) {
    clouda1 = random(-40, -20);
  }
}