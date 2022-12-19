# Flapper


Flappy Bird-type Game by Joe D'Amico and Andrew Griffin

[Our Game](https://jdamico96.github.io/Flapper/)

## Introduction

Our final project was a basic version of the popular iPhone game *Flappy Bird*.  While there is no winning this game, the objective is to fly through as many walls as possible without touching one.  The score goes up every time you make it through a wall (our highest score was 78, FYI).  We used the p5.collide library to manage the interaction between the bird and the walls.  

## Instructions

The objective of this game is to make it through as many of the moving walls as possible.  Gravity will move the bird downwards, while the bird can flap (move upwards) when space bar is pressed.  If the bird comes into contact with one of the walls or goes off-screen by getting too high or too low, the game is over.  A final score is presented when the game is over.  To play again, simply refresh the page.

## Goals

* Our first goal was to create a playable game with automatically moving walls and a bird you could control.  We accomplished this goal, as we were able to complete the game.  We used the *keyIsPressed* method to move the bird upwards when the space bar is pressed.  The walls are created using a random number for the height each time.  We used arrays for the x-position and the height for each wall, and a *for* loop to move them.
* Our second goal was to have the game end any time the bird comes into contact with a wall.  We accomplished this by using the p5.collide library.  Any time the bird touches a wall or goes offscreen, the game ends.
* Our third goal was to have an accurate score kept for the game.  We created a variable called *score*, which increases each time a wall passes the bird's x-coordinate.  It only counts walls that the bird has made it through and is displayed at the top of the screen.
* Our fourth goal was to either figure out how to make the walls appear continuously or create a maximum score that ends the game.  We did not have to put in a maximum score because we made the walls by adding random numbers to an array, so it could go on forever and we would not need to create any individual walls.

## Credits

Unlike most group projects, this was actually a team effort.  Early on, we decided to work together when it came to this project.  Every time we worked on it, we FaceTimed and shared our screens.  Although that meant we could only work on one section at a time, it allowed us to brainstorm together, bounce ideas off of each other, etc.  For almost every part of this project, we collectively came up with how we wanted the program to work, and then did trial and error with all of our ideas until we were successful.  We do not have any real denomination of whose work is whose.  We just know that, together, we got it all done.  We did have some assistance implementing the p5.collide library from Mark, so s/o Mark.
