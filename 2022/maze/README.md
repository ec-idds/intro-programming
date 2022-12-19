Molly Hans hansm@emmanuel.edu &
Evan Fuller fullere@emmanuel.edu

# Maze Game

This maze game consists of three levels through which the player must navigate the “buddy” using the arrow keys. When the end of level 3 is reached, a new screen with the words “You Win!” will appear along with celebratory music. The three mazes and the ending screen are loaded into an array called 'mazes’, and the variable ‘currentMaze’ is increased by 1 each time the ‘end’ of the current maze is within a specified number of pixels from the 'buddy’. This allows for each new maze to be loaded when the previous maze is completed. Further, when ‘buddy’ and ‘end’ come within the specified distance from each other, the size and Y-coordinate of ‘buddy’ are adjusted to fit within the smaller-sized lanes of the next maze. The `loadPixels()` function is called to distinguish the maze boundaries so ‘buddy’ cannot go through them. The function reads every individual pixel of each maze when the maze is first loaded and assigns it an RGBA value. Once the RGBA values of each pixel are determined, the X and Y coordinates of ‘buddy’ are restricted from increasing when ‘buddy’ encounters the blue maze boundaries (`RBGA: 0,0,128,255`).

We started off working out how to create and insert maze photos for our project. This was an easy beginning for our project which would prove to be much harder than expected as we worked. We initially wanted to add a timer and score at the top right and left but as soon as we encountered the pixels array we decided that we had reached a working limit for our project. As we worked through creating the ‘buddy’ and 'end’, we did not really put much worry into how the maze would switch and not let the ‘buddy’ roam through the walls. The first problem we encountered was switching the maze every time the ‘end’ was reached. We were unable to do this until the new variable, 'currentMaze’, was created. With the new variable set to 1, we were able to increase ‘currentMaze’ within the `mazes[]` array. We made a for loop that increases ‘currentMaze’ when the end point is reached so each new maze would be loaded when the previous was completed. The second bump in the road was loading the pixels. We initially had to get help from Mark to figure out where to start. We found the `loadPixels()` function and a website that explained in detail how to utilize that. After taking it back and fiddling around with it, little progress was made. It wasn’t until the in-class lab that we were able to seriously make a change. Once the unnecessary code was removed and the correct RGBA value was set, the maze walls were up and running. The final big problem we encountered was getting the ‘buddy’ to not bounce off the maze walls. This problem was probably the most difficult to solve because occasionally the code would work, but upon reload it would be bouncing again. The ultimate solution to this was to set the ‘pastX/Y’ to `+= 0`. This was not the case before, when the ‘buddy’ would touch the walls, its direction would be reversed to remove it off of them. After setting it to not increase, the last of our problems would be laid to rest and the Maze would be fully functional. This was a huge victory coming from little to no Javascript experience and we are both very proud of this accomplishment.

Molly Hans
```JavaScript
image(mazes[currentMaze], 0, 0);
buddy.draw(); 
end.draw();
let pastX = buddy.x; 
let pastY = buddy.y;
```

My favorite part of the code for this project is the first 5 lines under the `draw()` function (lines 48-52). This is the code that generates ‘buddy’ in his assigned position on maze 1, as well as specifies the end point of each maze. The end point is largely important because the following maze is loaded when ‘buddy’ comes within a certain distance from 'end’. The first line of code under `draw()` is the line that calls for each new maze to be loaded when the end of the previous is reached. This is also significant because the subsequent mazes would not be loaded without this line and there would be no levels to the game. This line incorporates the `mazes[]` array and the ‘currentMazes’ variable in order to make this work. Finally, this is where the ‘pastX’ and ‘pastY’ variables are defined, which are used to reset the X and Y coordinates of ‘buddy’ when it comes in contact with a blue boundary. Without these variables, the buddy would come to a halt when encountering the boundaries and the game would be ended without completion.

Evan Fuller
```JavaScript
let px = mazes[currentMaze].pixels;
let index = (buddy.x + buddy.y * width) * 4;
if(px[index + 0] === 0 &&
px[index + 1] === 0 &&
px[index + 2] === 128 &&
px[index + 3] === 255) {
buddy.x = pastX; 
buddy.y = pastY; 
} 
```
My favorite part of the code for the maze is the indication of what pixels can be touched and what can’t (lines 96-104). Using `px[index]` the RGBA values are accessed. Setting them to equal `(0,0,128,255)` indicates the specific color of blue that the maze walls are. After that is done, the ‘buddy’ actions when those colors are touched can be set. In the code, ‘pastX’ and ‘pastY’ equal ‘buddy.x/y’ `+=` or `-= 0` (based on the ‘arrowKey’ being pressed). This causes the ‘buddy’ to stop moving once he encounters a maze wall. I liked doing this part since it appeared very complicated to me at first, and as I worked with it I gathered what else I needed to do to ensure that the code functioned properly.

References:
- JavaScript Key Code, https://www.toptal.com/developers/keycode/for/Space, TopTal.
- P5.js Reference, https://p5js.org/reference/, p5.js.
- Image Processing in p5.js, https://idmnyu.github.io/p5.js-image/, Crystal Chen and Paolla Bruno Dutra.
- RGBA Value Finder, https://imagecolorpicker.com/en, Image Color Picker.
- Maze Designer, https://theedkins.co.uk/jo/maze/design/index.htm, Jo Edkins.
- Maze Ending Screen, https://3dwarehouse.sketchup.com/model/4464b44e-db2f-4282-a21d-9181c59d49e6/Spooky-Pictures?hl=cs, Zobrazit v AR.
- Ending Sound, https://www.youtube.com/watch?v=0Ax1pqOqFZQ&ab_channel=Gm3m, Gm3m.