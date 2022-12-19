# Christmas Tree Decorator
Elizabeth Schweyer schweyere@emmanuel.edu
Alex Oliver olivera@emmanuel.edu 

## Brief Description of the Project
This project is all about the drag and drop aspect the class has learned to do in Codio. It is a seasonal game where the user is meant to decorate the Christmas tree. There are several ornaments, lights, and other decoration that the user is supposed to place on the tree wherever they see fit.

## Our Process
The first challenged faced throughout the duration of this project was the way we uploaded our images. It was very chaotic and disorganized. We uploaded the images directly in the preload function which was at the top of our code, however, we realized we needed to do more in order for the game to work properly. In order to correct this, we used the let function which allowed for us to create new variables such as the background, the music, and the tree itself. Staying on the topic of the uploaded images, the last challenge we faced throughout this project was the music. We were having trouble uploading the music because we never got to do anything like it in class, but professor Sherman was also able to walk us through this. We were able to achieve the music by creating the variable song and then putting `song = loadSound();` in the preload function. We also wanted this song to play on loop so we did just that by putting `song.loop();` in the function setup.


 ## Code we are proud of
A part of the code I am proud of (Alex) 
```JavaScript
   decorations.push(new Decoration(loadImage('christmaslights1.png'), 100, 400, 80, 100));
   decorations.push(new Decoration(loadImage('christmaslights1.png'), 100, 330, 110, 100));
   decorations.push(new Decoration(loadImage('christmaslights1.png'), 100, 190, 150, 100));
   decorations.push(new Decoration(loadImage('christmaslights1.png'), 100, 270, 50, 50));
   decorations.push(new Decoration(loadImage('star.png'), 220, 50, 45, 55));
   decorations.push(new Decoration(loadImage('green ornament2.png'), 500, 325, 30, 40));
   decorations.push(new Decoration(loadImage('redornament1.png'), 50, 150, 25, 25));
   decorations.push(new Decoration(loadImage('silver ornament1.png'), 50, 50, 25, 25));
   decorations.push(new Decoration(loadImage('gold ornament111.png'), 200, 150, 25, 25));
   decorations.push(new Decoration(loadImage('blue ornament11.png'), 620, 325, 25, 25));
   decorations.push(new Decoration(loadImage('goldgarland.png'), 200, 300, 150, 100));
   decorations.push(new Decoration(loadImage('goldgarland.png'), 400, 400, 100, 100));
   decorations.push(new Decoration(loadImage('goldgarland.png'), 600, 200, 70, 80));
```
This chunk of code is what we are most proud of because it was not in our original plans, but professor Sherman helped with this and it allowed us to keep our uploaded images organized. This line of code allows easy placement and adjustment of each individual decoration which made it easier to design the project.
 
 
A part of the code I am proud of (Elizabeth)
```JavaScript
class Decoration {
 constructor(image, x, y, width, height) {
```
I am very happy to have realized the organization and ease of using the class construction setup. It allows the code to be a lot easier to manipulate because you are creating objects. This was especially helpful since we were using so many different images. 
 
## Credit

Credit: IGMBIN https://imgbin.com/ (images) 

Credit - p5.js https://p5js.org/reference/#/p5/class (reference)
