# Contributors:
Ada Smith, smitha7@emmanuel.edu

# How to play!

1. Press the "Start" button in the center of the screen

2. The game will begin. Use the "up arrow" key to move the bird up.

3. Avoid hitting pillars! When pillars are hit the game will end.

# Description:

My project is a knock-off version of the game Flappy Bird. When the "start' button is pressed the game begins. You want to avoid hitting the green pillars. If they are hit the game will end and you will have to start over. You control the birds movement by pressing the "up arrow" key. the bird is always falling at the speed of gravity. When the game begins, at the top left of the screen "score" will appear and keep track of how many pillars the bird has successfully gone through. When a pillar is hit a text saying "game over!" will appear on the screen.

# Process:

I began my code by creating a start button. I did this by creating a button and positioning it in the center of the screen. In order for this game to work I also had to create game stages. The starting screen where the start button appears only happens when the game is in its ‘initial’ state. I then created a function called ‘startButtonPressed’, the function would cause the game state to change from ‘initial’ to ‘playing’ if the button was pressed. After creating the initial page I moved on to inputting the image of the bird. This was a pretty easy process, I just needed to decide where I wanted to position it on the screen. I wrote the code that made the bird fall with gravity and move up when the up arrow was hit. My next course of action was to create pillars. The process of creating the pillars was not too difficult but the loop was slightly challenging. Creating the pillars to be exactly how I wanted them took a lot of trial and error of messing with the width of them, the speed at which they moved, the minimum height length to ensure the bird was always able to make it through and many other small details such as those. I felt very accomplished when that piece of the code was completed as it allowed me to have the basic structure of the game completed. After that I added in the score bar as well as the if statement that causes the game to end when the bird image hits a pillar.

# Code I'm most proud of

The code I am most proud of is lines 37-46 and 57-62. This is because as explained above, it took a lot of time to figure out all of the demensions of the pillars that would make the game run most successfully. For Example, if one pillar was super high up and the next one was really far down the bird wasn't able to make it to the hole in between the pillars so I had to set them to only go to a minimum of 100 pixles. The game would also end when the bird did't hit a pillar but was within a few pixles so I also had to fix that in the loop. 

## Code chunk:

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

for(let i = 0; i < pillars.length; i++) {
      fill('green');
      rect(pillars[i].x, 0, pillars[i].width, pillars[i].topHeight);
      rect(pillars[i].x, height - pillars[i].bottomHeight, pillars[i].width, pillars[i].bottomHeight);
      pillars[i].x = pillars[i].x - 2;

      for(let i = 0; i < pillars.length; i++) {
      fill('green');
      rect(pillars[i].x, 0, pillars[i].width, pillars[i].topHeight);
      rect(pillars[i].x, height - pillars[i].bottomHeight, pillars[i].width, pillars[i].bottomHeight);
      pillars[i].x = pillars[i].x - 2;

# Citations

Grumpy Flappy Bird Sprite Sheets, Bevouliin, https://opengameart.org/content/free-game-asset-grumpy-flappy-bird-sprite-sheets