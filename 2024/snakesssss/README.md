# Snakesssss 
By: Helina Tadesse (tadesseh@emmanuel.edu), Katie Bartash (bartashk@emmanuel.edu) December 6th , 2024
# Getting Started
This game is a cool take on the google snake game along with other variations, as the snake eats apples it will continue to grow  (you can track your score in the top right corner),like the other snake games out there, these are the enemy snakes. You DO NOT want your snake head to collide with them or you will die!

# Description        

How to play:

The player must hit enter to start the game, once the game has started the object of the game is to collect as many apples without hitting the enemy snakes. 
If an enemy snake is hit the game will automatically end.
# Favorite Code and Challeneges


Katie:

The hardest part of the code was figuring out how to track the x and y coordinates of each part of the enemy snake FOR each snake. We had ideas to create an array of an array to keep a similar movement style to the player snake and ended up doing that towards the end.
```
function snakeMovement() {
  snakeBodyX[0] += directionX * speed;
  snakeBodyY[0] += directionY * speed;
  snakeBodyX[0] = snakeBodyX[0] % width;
  if(snakeBodyX[0] <= 0) {
    snakeBodyX[0] = width;
  }
  snakeBodyY[0] = snakeBodyY[0] % height;
  if(snakeBodyY[0] <= 0) {
    snakeBodyY[0] = height;
  }
  for(let i = howMany - 1; i > 0; i--) {
    snakeBodyX[i] = snakeBodyX[i - 1];
    snakeBodyY[i] = snakeBodyY[i - 1];
  }
}
```
The code I am most proud of is the movements of the snake, which includes the body following the previous position of the head. I ended up having to slow the frame rate to get the snake to look right while also being at a playable speed, but I think that it still looks really smooth.
```
function setup() {
  createCanvas(400, 400);
  frameRate(30);
  for(let i = 0; i < howMany; i++) {
    snakeBodyX.push(width / 2);
    snakeBodyY.push(height / 2);
  }
```

Helina: 

The code I am most proud of is, the color scheme/ background. I just threw in a for loop that created a grid so it had more of a more analog game (pac man), and once the sounds started working it all tied together.
```
if(keyCode === ENTER) {
    gameStart = true;
    gameEnd = false;
  }
  if(gameStart === true) {
    background('MidnightBlue');
    stroke(0);
    fill('red');
    text(ScoreBoard, 350, 50);
    for(let y = 15; y <= height - 10; y += 12) { //adds grid like background
      for(let x = 15; x <= width - 10; x += 12) {
        ellipse(x, y, 3, 3);
        fill('green');
      }
    }
```
The hardest part of our code for me, was getting the sound to work. I had a lot of stupid mistakes like not using the correct quotation marks 
so it was not calling anything. Once I figured out that I had the audio playing, I placed it in draw so it was running 60 times per second 
which DID NOT sound good.  
```         
function preload() {
  soundFormats("mp3"); //helps format the audio file
  audio = loadSound("game-music-loop-2-144037.mp3");
}
```
# Credits
Shoutout to [XtremeFreddy](https://pixabay.com/users/xtremefreddy-32332307/) for the background music. His only requirement for using his song was for people to attach a link to his work.

p5.js Reference
https://p5js.org/reference/

JS Tutorial - w3schools
https://www.w3schools.com/js/default.asp


