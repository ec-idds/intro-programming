# Welcome to Mark Mania!!!!!

### Instructions
- Help Mark navigate the treacherous land of teaching.
- Mark is a professor who is trying to get to the finish line of the semester but the evil plants and rocks attempt to stop him on the way.
- Guide him through the land avoiding all the obstacles in his path.

### How To Play
- Use the arrow keys to make Mark move in any directions.
- You can also use the shift key to make him move forward two spaces instead of one.
- You will have to go forward about 10 spaces before you hit any obstacles.
- If you touch any of the obstacles or any of the sides YOU LOSE.

### How To Win
- Complete 100 levels without hitting any obstacles or going off the screen to win.
- You will see a finish line when you get to the winning level.
- If you cross the finish line, you will see a "You Win!" screen indicating that you won. 

### If You Lose
- Refresh the page and try again.
- When the page refreshes you will start back at level 0.


Colette Brochu (brochuc@emmanuel.edu)

Erica Hinkle (hinklee@emmanuel.edu)

### Our Experience
Our process was overall extremely fun but had some downfalls to it. First, we couldn't figure out how to do arrays but we needed it for the very basis of our project. 
It took us two hours in Mark's office just to understand them. But once we created the matrix of arrays we put together the rest of the project in no time. Completing the array portion of the project
was definitely our biggest victory. It helped us realize that this big project was actually possible.
We had to make Mark move based on the arrays and not on x, y coordinates, meaning that we had to use multiplication in the position of our images. Then, to make the game work, we had to make the matrix shift in a new array or pop out an old array whenever mark moved. This game it the real game effect of having moving parts that you can play with yourself. Lastly we had to make object randomly appear on each level, and create flags for when mark went off the screen or hit an object. This was definitely very difficult but it was essentially the last thing we needed to do before the project came together.
We had to make sure that more objects were added the higher you went but that created the bigger problem of making sure there weren't too many obstacles that the game became impossible. Because of this, we ended up having to make it so that there are not any obstacles for the first 10 squares. This is a bug that we could never figure out so we had to put it into the game instructions so player aren't confused.
Our biggest bug in the code that doesn't have an easy solution is that sometimes Mark gets stuck on a certain line and has no way to get out. This means that he has to automatically lose. This is probably our biggest defeat. Overall, the victories heavily outweighted the loses like when we figured out the arrays or the `winnerWinnerChickenDinner` function in the code. The game runs amazing now and is very fun to mindlessly play while avoiding life problems.

#### Colette's Opinion
For me the hardest part was first of all understanding the matrix of arrays. This made absolutly no sense for the longest time, and i still don't think i fully understand it but here we are. 
The other hardest thing for we working on the `checkForHit` and `checkForWin` functions. 
```JavaScript
 if(mark.space >= numSpaces || mark.space < 0 || mark.row >= numRows) {
    gameOver = true;
  } else {
    mark.checkForWin();
    if(win === true) {
      winnerWinnerChickenDinner();
    } else {
      mark.checkForHit();
    }
  }
  if(gameOver === true) {
    gameEnded();
  }
}
```
I know this dosen't look that hard, and looking at it now that the project is over it really isn't that hard. But anyway, when Mark moved off the screen or hit an object I needed to make the game over screen  appear and the game stop. So the `mark.checkForHit` function checks marks current location in the array, and if it is the same as a tree, bush or rock, `gameOver` is set to true. If `gameOver` is equal to true it will run the `gameEnded` function, which clears the screen and stops the game. BUT before the game can `checkForHit`, it must `checkForWin`. When `checkForWin` is called the game will check if marks current location in the screen array is equal to a finish line block or not. If marks location is equal to the finish line, win will be set to true, and the function `winnerWinnerChickenDinner` will be called. This function clears the screen to blue and the winner screen is shown. If marks location is not equal to a finish line block, win is equal to false and mark will keep going BUT before the game can `checkForHit`, it must check for win. If marks current location is greater than the length of the rows array(horizontal) or if it is greater than the screen array (vertical) then `gameOver` would be set to True and the `gameEnded` function would be run. 
So anyway i guess i liked this project. I mean the low point for me at least was when we sat down to work on our project a couple days before the milestone update and we kind of just stared at the screen and at each other no knowing what to do. 
But do i think this project turned out good enough? yes. And if I had more time and no other finals would I keep adding to it? fo sho. And if I had to do this project again I probably wouldn't do the same game but it was still fun.  

#### Erica's Opinion
The hardest part of code for me to do
```JavaScript
for(let i = 0; i < numRows; i++) {
    for(let j = 0; j < numSpaces; j++) {
      if(screen[i][j] === freeSpace) {
        image(grassImage, j * 50, i * 50, 50, 50);
      } else if(screen[i][j] === blocked) {
        image(grassImage, j * 50, i * 50, 50, 50);
        image(treeImage, j * 50, i * 50, 50, 50);
      } else if(screen[i][j] === rocked) {
        image(grassImage, j * 50, i * 50, 50, 50);
        image(rockImage, j * 50, i * 50, 50, 50);
      } else if(screen[i][j] === bushed) {
        image(grassImage, j * 50, i * 50, 50, 50);
        image(bushImage, j * 50, i * 50, 50, 50);
      }  else if(screen[i][j] === finishLine) {
        image(finishLineImg, j * 50, i * 50, 50, 50);
      }
    }
  }
```
This is how we made the array for our project. Then within that array we had to put images in and ensure that they were the same size as the individual array boxes. This was by far the most difficult part of the project that I had to figure out because I was struggling a lot to figure out how the array worked and how to have to insert an image only in the alloted space. The nested loop was just super hard for me to wrap my head around and it became difficult for me to think like a computer. Within this nested loop we went through a lot of images to determine which ones we wanted to put in making sure that they were transparent and worked well with the background.
On top of all that it was extremely important that we make a variable for each image on top of declaring the image itself globally so it took me a while to be able to process what I needed to declare in order for it to work right. Even though all the images have the same format, I couldn't understand how to use the `else if` and how to make it look good. Finally, the finish line was very difficult as it required me to figure out how to not only insert another image after a certain time but make it mean you win. We ended up having to change the image we used many times to make it look good and on multiple occasions the function to dictate a win would break, meaning that the finish line wouldn't work and didn't show a "You Win!" screen. All the chaos and struggle just made figuring it out all the more rewarding. This was for sure the hardest part but when we figured it out I felt like I was on top of the world. I also felt like this small chunk of code taught me so much, which is why I have it so high up on my list!
The challenges only made us work harder and realize our true potential.