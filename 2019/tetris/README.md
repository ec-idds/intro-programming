# Tetris #

_**Statement**_

Our project is a simplified version of Tetris coded with javaScript. It was interesting to see how complex it is to code a seemingly simple game and to learn how to use abstraction to make the code easier to read and easier to work with. It was also cool to use the collide.2D library in order to detect collisions between the tetrominos. The ability to take advantage of a useful tool someone else has already figured out is a great part of coding.

_**Instructions**_

To use our program, simply use the left and right arrow keys to shift the falling tetrominos left and right respectively.

_**Original Goal**_

The original goal of this project was to create a fully functional game of Tetris minus the ability to keep score. This entailed coding the game so that random tetrominos would slowly fall down the screen, could be moved left and right and rotated, and stop when they hit the bottom or another object. Once a piece stopped another one should fall and the process would be repeated. When a whole row fills up it should disappear and when the stack reaches the top of the screen the game should end. The game would also be fully colored and have sound effects.

_**Revised Goals**_

Soon after beginning this project, we realized our original goals were a little out of reach so we revised our goals to the following: A random tetromino should still fall, be able to move and rotate, and stop when it hits the bottom or another tetromino, but we decided not to have a row disappear once it is full. The pieces will instead stack up and the game will end when they reach the top of the screen. We also decided not to have sound effects since it does not really add to the overall effect of the game and time did not allow for it.

_**What We Accomplished and What We Learned**_

Unfortunately, we were not able to accomplish all of our revised goals. While working on components such as rotation, drawing all of the inactive pieces, and collison, we came to the realization that our original foundation of code was not set up in a way that made those tasks feasible within the time constraint. Since we were unable to get all of the inactive pieces to remain on the screen, it was impossible to test collidions. We learned an important lesson from this, that we assume all programmers eventually learn. The lesson being that it is very important to design the architecture of the program before jumping right into writing the code. If we had done this, we may have written the code for the tetrominos very differently.  We hope you see that we both put a lot of work into this code and that we learned a valuable lesson neither one of us will forget. 


We were able to design all 7 tetrominos, have a random one slowly fall, shift left and right when the correct arrow keys are pressed, and stop at the bottom. We were also able to have a new random piece fall once the previous one had landed. The left an right boundaries became difficult due to how the pieces were designed. They were all designed around a center block, so some pieces go off the edge slightly while others stop right at the edge. The rotation was also a difficult task since simply rotating 90 degrees would rotate each individual square and not change the shape. To fix this we wrote code for every orientation of each tetromino, but it was still difficult to implement. We like to think of our program as a low stress version of tetris that you can't lose (or win).


Note: if you remove lines 34 - 36 in the sketch.js file, you will see that new tetrominos appear after one hits the bottom. This can also be seen if you have the console open when running it because the shape number is being printed to the console.


_**Credits**_

Patrick created the original code for all of the tetrominos. These were originally functions that gave each tetromino their unique shape and color. Patrick also created 4 different versions of every tetromino in order to be able to rotate the shapres properly. He also figured out how to have a new tetromino automatically start falling once the previous one stopped.

Emma Refactored the code so that each tetromino was stored as an object within and array and each of these objects had methods that allowed the shapes to move and rotate. Note that this was once again refactored with a lot of help from Prof. Sherman to create a class for the tetrominos. She also determined how to get the pieces to stop at the bottom and created the left and right boundaries.

The rest isn't really discernable, we each spent a lot of time trying to figure out different pieces of the overall code.
