/******************************************************************************
 * A0: Assignment
 * Mark Sherman <shermanm@emmanuel.edu>
 * 10 November 2021
 *****************************************************************************/

let pacman = {
  x: 0,
  y: 0,
  speed: 4,
  body: 'yellow',
  eye: 'black',
  move: function() {
    stroke("black");
    strokeWeight(2);
    fill(this.body);
    arc(this.x, this.y, 50, 50, 20, 350, PIE);
    fill(this.eye);
    circle(this.x + 8, this.y - 15, 10);
    borderkill();
  }
};

let cherry = {
  x: 0,
  y: 0,
  visible: true,
  body: 'red', //want a specific type of red, how to do that?
  stem: 'green',
  boop: function() {
    stroke(color(0, 102, 0));
    strokeWeight(4);
    fill(this.stem);
    line(this.x + 5, this.y - 40, this.x - 5, this.y);
    line(this.x, this.y - 50, this.x + 20, this.y);
    stroke(color(0));
    strokeWeight(2);
    fill(this.body);
    circle(this.x, this.y, 20);
    circle(this.x + 20, this.y, 20);
    //keeps the cherry on canvas
    this.x = constrain(this.x, 0, width - 40); // keeps the cherries within the canvas
    this.y = constrain(this.y, 0, height - 50);
  }
};

class Ghost {
  constructor(bodyColor, eyeColor) {
    this.x = random(0, width);
    this.y = random(0, height);
    this.body = bodyColor;
    this.eye = eyeColor;
    this.speed = 2;
  }
  draw() {
    // ghost moving on screen
    this.x += this.speed;
    this.y += this.speed;

    if(this.x > width || this.x < 0) {
      this.speed *= -1;
    }
    // if the ball hits the top or the bottom, change the direction of the ball 	
    if(this.y > height || this.y < 0) {
      this.speed *= -1;
    }

    //pacman and ghost collision
    let s = dist(pacman.x, pacman.y, this.x, this.y);
    if(s <= 45) {
      dead();
    }

    //the arms
    stroke(color(this.body));
    strokeWeight(10);
    line(this.x + 10, this.y + 20, this.x - 30, this.y - 10);
    line(this.x + 20, this.y, this.x + 30, this.y - 10);
    //the body
    noStroke(0);
    fill(this.body);
    ellipse(this.x, this.y, 45, 65);
    //the eyes
    noStroke(0);
    fill(this.eye);
    circle(this.x + 10, this.y - 13, 10);
    circle(this.x - 10, this.y - 13, 10);
    //the bottom
    fill(this.body);
    triangle(this.x, this.y + 40, this.x + 20, this.y + 10, this.x - 10, this.y + 10);
  }
}

let _

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
     interval = setInterval(scoreboard, 500);
     myColour = color(random(255), random(255), random(255));

  // set up borders
  borderlines = {
    wall: function() {
      stroke("rgb(0, 255, 255)"),
        strokeWeight(10),
        //bottom line
        line(width + 5, height - 0, 0, height); // why the yellow line?
      //left line
      line(width - width, 0, width - width, height);
      //top line
      line(0, height - height, width + width, height - height);
      //right line
      line(width, 0, width, height);
    }
  };

  //play again button
  playAgain = createButton('Play Again');
  playAgain.position(333, 365, CENTER);
  playAgain.mousePressed(reset);
  playAgain.hide();
  reset();
}

function border() {
  borderlines.wall();
}

function borderkill() {
  if(pacman.x > width - 30 || pacman.x < +30 || pacman.y > height - 30 || pacman.y < 30) {
    dead();
  }
}

//for scoreboard
let score = 0;

function scoreboard() {
  noStroke();
  textSize(20);
  fill(255);
  text("score:" + score, width - width + 50, height - height + 30);
}


//the ghosts spawning
function spawn (){
  if (score == 5^2) {
 ghosts.push(new Ghost(255, "blue" ));
  }
}

//Pacman and cherry collision
function eat() {
  score++;
  cherry.x = floor(random(500));
  cherry.y = floor(random(500));
  spawn();
}
//pacman and ghost collision function 

function dead() {
  gameOver = true;
  playAgain.show();
}

function reset() {
  //pacman always starts in the middle
  pacman.x = width / 2;
  pacman.y = height / 2;

  //makes the cherries move in different spots of canvas
  cherry.x = random(0, width);
  cherry.y = random(0, height);

  //the ghosts ooo spooky
  ghosts = [];
  playAgain.hide();
  gameOver = false;
  score = 0;
}

function draw() {
  if(gameOver){
    background('red');
    textAlign(CENTER);
    text("LOL LOSER", width / 2, height / 2);
    return;
  }
  background("rgb(0, 51, 102)");
  pacman.move();
  cherry.boop();
  for(let ghost of ghosts) {
    ghost.draw();
  }
  border();
  scoreboard();

  //moving pacman
  if(keyIsPressed) {
    if(keyCode === LEFT_ARROW) {
      pacman.x -= pacman.speed;
    } else if(keyCode === RIGHT_ARROW) {
      pacman.x += pacman.speed;
    }
    if(keyIsPressed) {
      if(keyCode === UP_ARROW) {
        pacman.y -= pacman.speed;
      } else if(keyCode === DOWN_ARROW) {
        pacman.y += pacman.speed;
      }
    }
  }

  //cherry and pacman collision
  let d = dist(pacman.x, pacman.y, cherry.x + 10, cherry.y - 10);
  if(d < 50) {
    eat();
  }

}