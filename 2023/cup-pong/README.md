# CUP PONG

### DREAM TEAM: IT TEAM 
  AJ Godios (godiosa@emmanuel.edu)
  Michaela Mailea (maileam@emmanuel.edu)
  Gabby Serra (serrag@emmanuel.edu)

#### Description: 
  This game is a single-player spin-off of the iPhone application GamePigeon's Cup Pong game,
  with a few special twists! At the start of the game, players can choose between Regular Pong
  and Crazy Pong! Regular Pong offers the traditional game setup with the goal of getting the ball
  in each of the cups. There are options to rerack to a Diamond or Triangle orientation when 
  players get down to 4 cups. The cups don't automatically rerack like in the iPhone game.

### Instructions to play: 
##### Regular Pong
  1. Use the horizontal slider to control the direction of the ball and the vertical slider
  to control the strength of the shot.
  2. After shooting, press reset ball to return the ball to its original position.
  3. When 4 cups remain, the diamond or triangle rerack buttons can be used to adjust the cups.

#### Our Process:
  Our final product didn't change significantly from our initial plan of developing a game
  similar to the classic GamePigeon Cup Pong. The goal of using a slider to direct the aim
  of the ball worked successfully after adjusting the order of the code to keep it from redrawing the
  pong ball every time it moved. We originally planned to use pngs of red cups but then drew them all using 
  functions and entirely vertex graphics. The biggest challenge of the process was getting the crash
  detection to work and as a result make only the target cup disappear. A final challenge at the end was none
  of our code showing at the end and then trying to navigate through our mass of code narrowing down what
  was broken and then a good portion of it had to be completely rewritten because the crash detection wasn't working.
  Ultimately with how long and complicated the code got, our second goal of having a "Crazy Pong!" game
  with randomized cup placements was cut from the final product. The code for crazy pong is left in and doesn't run
  but if left in, the entire code breaks, so it had to be hidden from the page0.

#### Highlights from each member: 
AJ: This code uses if-else statements for crash detection and if true it sets the cup to invisible. This was one of the
biggest time consumers of the project and barrier to getting it done, so it was very exciting to finally get that working.

```
if(cup2C.contains(pongBall)) {
       pongBall.reset();
       cup2C.setVisible(false);
     } else {
       cup2C.display();
     }
```

Another of my favorite parts was getting the crash detection to work and not having the cups be drawn in the background
as a workaround. The code below here is the start of cup classes, which draws each cup separately and has a different class
for reach cup, including the cups in the rerack positions. The cup classes uses the arrays to draw the cup and to set the
visibility to be used in the crash detection. I regretted how I named the classes of cups because it was confusing
and kept breaking the code later. It was frustrating but it was very rewarding. Not mentioned here, drawing the cups using
vertex graphics was really rewarding one of the biggest lessons learned was when in doubt, redraw background (to hide the cups).
I like this aspect of the code because it was challenging and rewarding to see the final vision come together.

```
     class Cup1 {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
       cupA(cupB[0].x, cupB[0].y);
     }
   }
   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
 }
 ```
 
Gabby: My favorite part of the code was creating and using the buttons. While getting them to work was frustrating,
it was really rewarding when I finally got the buttons being pressed to output the desired function, specifically
getting the rerackTriangle and rerackDiamond and buttons to call upon their respective pages. The code I included 
here shows the setup of 4 main buttons, their positioning on the screen, and what page to make appear when the button
is pressed. It was a very tedious process with different layers to each page bringing different obstacles in button making.
It was fun to learn how to show and hide the buttons on all of the different pages too and how all the different functions
we made built up each page. The rerack buttonswere a fun challenge that I was proud to finally figure out and see in action.
And the infinite loops of buttons I created during the process had as a result gave us a lot of good laughs and it's fun to annoy AJ.

```
   function setup() {
   createCanvas(500, 700);
   regularPong = createButton('Regular Pong'); //create regular pong mode button (pg 1)
   regularPong.position(150, 350); //button position on the canvas
   regularPong.mousePressed(page1Setup);

   crazyPong = createButton('Crazy Pong!'); //create crazy pong mode button (pg 2)
   crazyPong.position(250, 350); //button position on the canvas
   crazyPong.mousePressed(page2Setup);
   
   rerackDiamond = createButton('Diamond Rerack'); // reg mode for users to rerack at 4 cups 
   rerackDiamond.mousePressed(page3Setup);

   rerackTriangle = createButton ('Triangle Rerack'); // reg mode for users to rerack at 3 cups 
   rerackTriangle.mousePressed(page4Setup); 

```

Michaela: Making the pong table using the shape functions was fun because it brought back the very early days of Intro
to Programming with the time spent on trial and error and it was super satisfying to see the end result looking just like
the table in the original game inspiration. Working on page 1 was interesting, one of the first wins in seeing the project come together,
and foundational in making the rest of the the pages. The pages were also integral in setting up the entire game play and
it was something I didn't realize would be so important even though it seems obvious in hindsight. The code below for page1 
shows all the buttons and components together to form the starting view of Regular Pong. It hides the buttons used to select
Regular Pong and displays the rerack buttons. Most importantly, it draws the cups and includes the two sliders important for playing the game.
```
function page1Setup(){ //reg mode
  page = 1; //to make reg mode
  regularPong.hide();
  crazyPong.hide();
  rerackDiamond.show();
  rerackTriangle.show();
  sliderX.show();
  strength.show();
  resetBall.show();
   cups = [
   {x: 145, y: 200},
   {x: 215, y: 200},
   {x: 285, y: 200},
   {x: 355, y: 200},
   {x: 180, y: 240},
   {x: 250, y: 240},
   {x: 320, y: 240},
   {x: 210, y: 280},
   {x: 280, y: 280},
   {x: 245, y: 320}];
 }
 ```

#### Credits/Inspiration:
Zlotskii, V. (2023) GamePigeon: Cup Pong (2.2.5)
