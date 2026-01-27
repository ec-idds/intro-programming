# Report
Project by: Gabrielle O’Connor <oconnorg2@emmanuel.edu> and Shaymaa Salim <salims@emmanuel.edu>

Aaron the astronaut has been traveling through space for quite some time. He got stuck in an asteroid belt and his ship broke down. Aaron must collect the money to fix his ship while avoiding the asteroids. He can move around freely with his high-tech suit. He needs as many coins as possible if he is going to get home!

# How to play: 
In this game, you use the arrow keys to control the movement of the astronaut character. Your goal is to collect the coins while avoiding the asteroids. If an asteroid is hit, it is game over and you must restart. If a coin is collected, your score goes up by 1. Be careful! Some asteroids are faster than others. Collect as many coins as possible before getting hit!

# The Creation Process
We wanted to make an interactive game where the character was controlled by the arrow keys and could be freely moved around the screen by the player. We decided on a space game because the backgrounds are cool and public domain. It also makes realistic sense for the character to move all around the screen in space due to no gravity. We knew we wanted a series of different obstacles, and we settled on one positive and one negative. In the theme of space, this ended up being coins and asteroids. We wanted an astronaut as our character in space, and we found a cool sprite that appeared to be running and moving. Although it is not likely an astronaut runs in space, this sprite makes the game more fun and interactive. The artist is credited below.
One challenged we faced was the creation of the obstacles. It was difficult to create these in the way we wanted due to the number of arrays and different functions we had to create. It was not that difficult, it was just a process we had to think through. We had to upload the images we wanted, scaled down to size, and push them into an array. We had this array that stored the images as values and an array that stored the images as they were drawn. We also had a function that created the obstacles at random locations and speeds and variables that tracked the locations and speeds. Another challenge we faced was having the end page appear when the asteroids were hit. We had to use a lot of variables to tell the game what to do at different times based on what occurred during play. Another victory was learning about the splice feature. We had to figure out how to make the coins disappear smoothly when they were deleted. It seemed difficult to have them removed from the array each time with pop. The splice feature from the p5js reference was a great tool that allowed us to easily remove each coin as it was hit and all the other obstacles when they moved off the screen. 


Gabrielle:
I am particularly proud of the following piece of code:

    draw: function() {
    if(frameCount % 60 === 0) {
      createObstacle();
    }

    for(let i = obstacles.length - 1; i >= 0; i--) {
      let o = obstacles[i];
      o.x -= o.speed;
      image(o.img, o.x, o.y);

      if(o.x < -5) {
        obstacles.splice(i, 1);
      }
    }
  
This chunk of code creates the obstacles, the asteroids and coins, that randomly appear. Every sixty frames an obstacle is created. The speed, createObstacles function, and the assignment of the images are created and defined in other parts. However, I am especially proud of the part where I use a for loop combined with an object to push the images, either a 0 or 1, into the program to move across the screen. I also learned how to use “splice” to delete the obstacles when they fly off the right of the screen in order to keep the program running smoothly. 

Shaymaa:
I am proud of this section of the code:

    if(gameEnded) {
    pauseButton.hide();
    fill("white");
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(45);
    text("GAME OVER", width / 2, height / 2 - 50);
    text(`Score: ${score}`, width / 2, height / 2 + 10);
    if(score > highScore) {
      highScore = score;
    }
    text(`High Score: ${highScore}`, width / 2, height / 2 + 60);

    startButton.show();


    return;
    }
    if(!gameEnded){
      score++;
    }
  
In this piece of code, we allow for a display of current score and highest score once you hit a asteroid, the "GAME OVER" will pop up with the counting score. This code is a function that runs continuously,It stops the game when it is over, and if the game is running it keeps track of the score. 
# Credits:

Background:
-Public domain picture. 

Astronaut character:
-https://www.deviantart.com/gogoat1/art/spaceX-Astronaut-spritesheet-954691698
-Astronaut sprite by Gogoat1
-Creative Commons Attribution-NonCommercial-ShareAlike 3.0 License.

Coin:
-https://freepngimg.com/icon/66672-coin-transparent-gold-icon-free-photo-png
-Coin by freepngimg.com
-Free to share and use.


Asteroid:
-https://freepngimg.com/png/33623-asteroid-photos
-Asteroid by freepngimg.com
-Creative Commons (CC BY-NC 4.0)
-Free to share and use.

