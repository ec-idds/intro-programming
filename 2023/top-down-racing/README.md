# Aiden Thornburg - Top-Down Racing Game
This program is designed to allow players to operate a car and weave in-between traffic. 

## Contributors
Aiden Thornburg

### What is this Program? 
This program is designed for a single player to use the arrow keys to control a yellow car. The objective of the game is to last as long as possible and get the highest time survived.

#### How to play/run the program
Simply press the run command at the top of Codio. This will intialize the game. Once the game has started running, click on the canvas one time and simply use the arrow keys to control the car. When a game over occurs, restart the game by refreshing the run command.

##### Game Inception and Creation
While creating this game, I ran into a few challenges. Two of my biggest challenges (and my favorite parts of the code) are when I created object collision detection for the cars and creating a barrier so that the players car would not fall off screen. These both required a lot of thought and time coding them as I understood what I wanted to do but could not figure out how to execute it.

###### Favorite part of the program
My favorite part was creating the barrier for the players car. It was one of the first major problems I ran into and in my mind I thought that I could create a line that would act as a stopping point for the car. However, I intially just restricted the canvas size and this resulted in a wonky-looking canvas. Once I had done some more thinking on it, I figured out that I could draw the original line i had thought of and position it in a way that makes it look invisible to the player. This is the actual code: checkBarrierCollision(barrierY) {
    if (this.y + this.height > barrierY) {
      this.y = barrierY - this.height;
    }

###### Sources
p5 Library
No other assets/outside resources were used