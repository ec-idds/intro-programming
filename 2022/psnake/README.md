# PSnake
This is`README.md` file yea yea

email: siva@emmanuel.edu

# Description

1. Open `sketch.js` from the left panel. That's where you'll start the game ;]

What inspired me to create this game is that I wanted to combine my two favorite games that I like to play when I am bored on my laptop which are Pacman and Snake. This game starts off with Pacman in the center of the screen, a cherry placed randomly on the screen and teal killer borders. In the game Snake, when the Snake eats the apple or the red dot, it grows longer which is supposed to create the challenge for the user playing the game. What I did to create this challenge is that when Pacman eats the cherry a ghost appears every time it eats the cherry. If Pacman touches the ghost, he dies. I also included another challenge just like the Snake game, when the user touches the walls with the character, they also lose the game. 

# Contribution
I worked on this project by myself. I was able to accomplish most of my goals, my ideas have changed from the beginning of the project but now I was able to finish the parts I was worried about. Originally I wanted a ghost to appear after every 5 cherries are eaten but because of how Snake makes the challenge after every apple is eaten I decided to have the challenge be after every cherry is eaten.

# The code chunk I am proud of

```JavaScript
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
```

I feel proud for this code chunk because I had a difficult time wondering how I should create loops for the ghosts or how to make the ghosts work with each function I thought of. With the help from Professor Sherman, he helped me through the process of how to create a Class for Ghosts. Originally, I made ghost as an object and I had no problem before but my code was a bit messy and too much to deal with, that’s when I asked Professor Sherman for help and he helped me through my code so I thank him for that. I really like this code because it makes my life easier when trying to code for the intervals and loops of ghosts.

# References
Mainly Used W3schools and P5js as references.