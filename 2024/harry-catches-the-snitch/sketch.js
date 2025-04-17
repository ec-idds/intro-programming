/*******************************************
 * A0: Assignment
 * Sam Marasca and Ashley Hennessey <marascas@emmanuel.edu hennesseya@emmanuel.edu>
 * December 3 2024
 ******************************************/
let quaffleImage;

let endScreen = {
  draw: function() {
    background('Maroon');
    textSize(80);
    fill('GoldenRod');
    text('YOU WON!', 40, 230);
  }
};

let pitch = {
  image: {},
  draw: function() {
    image(this.image, 0, 0, width, height);
  }
};

let snitch = {
  image: {},
  x: 250,
  y: 250,
  draw: function() {
    image(this.image, this.x, this.y, 40, 40);
  },

  move: function() {
    this.x += random(-30, 30);
    this.y += random(-30, 30);

    if(this.x > width) {
      this.x -= 30;
    }
    if(this.y > height) {
      this.y -= 30;
    }
    if(this.x < 0) {
      this.x += 30;
    }
    if(this.y < 0) {
      this.y += 30;
    }
  }

};

class Quaffle {
  constructor() {
    this.image = quaffleImage;
    this.x = 200;
    this.y = 200;
  }

  draw() {
    image(this.image, this.x, this.y, 40, 40);
  }

  move() {
    this.x += random(-8, 8);
    this.y += random(-8, 8);

    if(this.x > width) {
      this.x -= 30;
    }
    if(this.y > height) {
      this.y -= 30;
    }
    if(this.x < 0) {
      this.x += 30;
    }
    if(this.y < 0) {
      this.y += 30;
    }
  }
}

let harry = {
  image: {},
  x: 300,
  y: 300,
  draw: function() {
    image(this.image, this.x, this.y, 100, 100);
  },
  move: function() {
    if(keyIsPressed) {
      if(keyCode === LEFT_ARROW) {
        this.x -= 2;
      } else
      if(keyCode === RIGHT_ARROW) {
        this.x += 2;
      } else
      if(keyCode === UP_ARROW) {
        this.y -= 2;
      }
      if(keyCode === DOWN_ARROW) {
        this.y += 2;
      }
    }

  }
};

let quaffleArray = [];
let gameOver = false;

function preload() {
  pitch.image = loadImage('images/quidditch_pitch.png');
  snitch.image = loadImage('images/snitch.png');
  quaffleImage = loadImage('images/quaffle.png');
  harry.image = loadImage('images/harry_potter.png');
}

function setup() {
  createCanvas(500, 400);
  for(let i = 0; i < 12; i++) {
    quaffleArray.push(new Quaffle());
  }
}

function draw() {
  if(gameOver === false) {
    background(220);
    snitch.move();
    harry.move();

    pitch.draw();
    for(let quaffle of quaffleArray) {
      quaffle.move();
      quaffle.draw();
    }
    snitch.draw();
    harry.draw();
  } else { //end screen will show if game is over
    endScreen.draw();
  }

  //collision
  let snitchHit = collideRectRect(harry.x, harry.y, 100, 100, snitch.x, snitch.y, 40, 40);

  //if collision and a key is being pressed game is over
  if(snitchHit === true && keyIsPressed && keyCode === 87) {
    gameOver = true;
  }

}