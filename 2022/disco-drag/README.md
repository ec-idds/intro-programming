# Disco Drag
In this game, you are able to customize a drag queen with many different outfits, wigs, and even facial features! There are lips, lashes, eyebrows, and many other features to customize your own drag queen!

When your drag queen is done being customized, press the spacebar to see the club lights turn on and see her werk!

Project by Samuel Zdon (zdons@emmanuel.edu) and Patience Kassini (Kassinip@emmanuel.edu)
# Getting Started

1. Open `sketch.js` from the left panel. That's where you'll see the code

2. To view, press the button on the top bar `▶️ Project Index (static)`

3. Drag with mouse on any garment to add it to the drag queen 

4. Once drag queen is fully customized press and hold space bar to see the lights turn on and watch her dance!

# Story of the Process 

In the beginning of our process, we wanted to have a customizable drag queen and have her do a death drop at the end. It was very difficult to try to have images be attached to the drag queen body, then have that move all together. We quickly found out how difficult this was, and thought if the drag queens arms only moved, this would be much easier to code.
We started with the body base, legs, and head, while also uploading all the png images. The body, legs, and head were relatively easy to program, while the png images had some difficulties loading in. Some of the png images were too large, making the program load slowly, and some of the images were not cropped, resulting in overlapping images. Once these were cropped, and re-uploaded, the png images were each in their own spot without any overlap.
The next part of our programming was to get each garment to move when the mouse pressed on it. While this was very difficult to think about, with  some help, we were able to figure out that we needed an array for all the images, and use that array to have these images be dragged and dropped.
We thought adding in moving arms would be very easy; however, when it came time to make the arms, one would rotate from the other no matter what we did. We quickly improvised with only one arm moving, and the other arm staying in an upright position. 
Overall, both of our understandings of programming increased significantly with this final project. Being able to better understand functions, call to functions, and especially arrays, was  very beneficial.


## Code Highlight - Sam
```javascript
mousePressed() {
    if(mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.active = true;
      this.offsetX = mouseX - this.x; //offset so this will select the image where pressed without shifting
      this.offsetY = mouseY - this.y;
      return false;
    }
    return true;
  }
  mouseDragged() {
    if(this.active) {
      this.x = mouseX - this.offsetX;
      this.y = mouseY - this.offsetY;
    }
  }
```
I like this code because when one would press a png image, it would shift the whole png  to where the top left corner is. This code allows it so that way the code subtracts from where the mouse clicked from the top left corner, so that way the png does not shift down and make it look choppy. The code makes sense, where the offset will be subtracted, ensuring that there is no unexpected jump or shift.
## Code Highlight - Patience
```javascript
let angle = 0.0;
let angleDirection = 1;
let speed = 0.040;

strokeWeight(1);
stroke('black');
//left arm
stroke('tan');
strokeWeight(10);
line(170, 163, 100, 120);

//right arm
function rightArm() {
  translate(240, 175); // Move to start position rotate(angle);
  stroke('tan');
  strokeWeight(12);
  translate(0, 0);
  if (keyIsPressed === true) {
    if (keyCode === 32)
      rotate(angle * 0.5);
  }
  strokeWeight(10);
  line(0, 0, 40, 0);
  stroke('tan');
  translate(40, 0); // Move to next joint
  if (keyIsPressed === true) {
    if (keyCode === 32)
      rotate(angle * 4.5);
  }
  strokeWeight(10);
  line(0, 0, -30, 0);
  stroke('tan');
  angle += speed * angleDirection;
  if ((angle > QUARTER_PI) || (angle < 0)) {
    angleDirection *= -1;
  }
}
rightArm(0, 0);
```
I like this code because when the space bar is pressed, the arm starts moving back and forth as though she is voguing. This code makes sense because of the angel direction that the antebrachial is moving and the speed makes it look more fluid.

## Citation

Arm Movement Inspiration - Getting Started with p5.js: Making Interactive Graphics in JavaScript and Processing (Make: Technology on Your Time), Chapter 6, pg. 95, "articulating arm".

PNG Photos from PNGtree.com or PNGwing.com