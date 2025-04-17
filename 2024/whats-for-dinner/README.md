# Emmanuel What's for Dinner Wheel
**Kim Kelley** (<kelleki@emmanuel.edu>) & 
**Emely Rodriguez** (<rodrigueze4@emmanuel.edu>)

# Project Description
Our project is a "What's for Dinner Wheel".  It includes a spinner with various sections containing different local food and restaurant options.  The spinner is intended to help you decide what you want to eat.  When an option is selected, you will be provided with a link at the bottom of the screen that will redirect you to that restaurant's website so that you may explore menu options or order online. 

# Instructions
Click and release mouse in the center circle to spin the wheel.  The longer you hold down the mouse, the faster the wheel will spin.  The wheel will slow down until it comes to a complete stop.  The section of the wheel that lands on the selector triangle when the wheel stops is your selected winner.  A link to the winner will appear at the bottom of the page.  Click the link to visit the website. To spin again, simply click and release the mouse on the center circle. Repeat as many times as desired. 

# The Process
The first step in our project was to make the wheel itself.  We knew we would be using arrays and loops since there would be so many options but thought we may need to create each section individually similar to the pinwheel project.  However, P5js has built in features called PI and TWO_PI which were helpful in drawing the circle and separating it out into individual sections. We used arc() the array loop and PIE mode to draw the wheel.

Now we need to make it spin. We wanted it to spin faster the longer the mouse button was held before releasing.  We used mousePressed and millis() to record the hold time and then used the hold time to determine the spin speed.  We used constrain() to make sure the wheel spins with a short click and will not spin too fast with an extra-long hold of the mouse.  To make the wheel slow and come to a stop we used multiplied the spinspeed by .98 until it was < .001 and then the speed would be set to 0, stopping the wheel.

Using the fixed location of the selector (PI /2), rotation, section size (angle) and our number of sections, we can calculate which section was landing on the selector. We used a loop and our label array to label each section of the wheel.  We then coded the text that pops up to correspond with the array labels.   One of the challenges we ran into at this point was that after they first spin, the text of the selection kept showing as “undefined”. After a lot of testing and googling, we found the suggestion to use the console log to determine which array index was being selected.  The console showed that the selected index was showing negative numbers, and this is why the label kept showing as undefined.  Knowing this, we were able to adjust the code to make sure it was returning a positive number which fixed the issue

We then focused on the appearance of the text on the labels. At first, the text was spinning with the wheel in its fixed position, this would result in the text being sidesways or upside when the wheel stopped.  Adding an additional call to rotate in the text code allows the text to always appear upright and move with the wheel. 

We then moved on to adding links for the selections. Please see the **Highlights** section for details.

Our last step was adding sounds.  Adding the “chomp” sound was the easiest since it will only play once when the mouse is released.  The other sounds were more complicated and changed the code significantly as we needed to add additional variables.  The approach to the "click" sounds was to identify when each section of the wheel passed over the selector and to have the sound play each time.  Additional variables to identify the sections were added.  The “tada” sound was the trickiest as it just wanted to continue to play over and over since it was associated with the wheel stopping, which is it typical state when not spinning.  To correct this, we needed to add a Boolean variable to detect if the wheel had been spun and if it had stopped.  We also added a Boolean variable to detect if the wheel had been spun so that the sounds wouldn’t start automatically when the wheel loaded. These needed to be added throughout the code.

# Highlights


Emely-  The chunk of code I am most proud of is the use of code to add a link on the bottom of the screen that corresponds to the selected section.  The code uses an array of links that are in the same order of the labels array, which names each section.  Then I used the `createA` function to make th HTML element.  The `link.attribute` function is then used to open the link in a new tab.  Then the `link.position` just places its positioning on the canvas.  The `link.hide` hides the HTML and `link.show` shows it.  I used them to hide the HTML while the spinner spins and show once it stops, based on the spin speed.  The `link.html` is what updates the link based on the selection.  I liked the addition of the links because it makes the program interactive and actually functional.
In setup:
```
link = createA('', 'Selected Place');
  link.attribute('target', '_new');
  link.position(360, 750);
  link.hide();
```
In draw:
```
link.html(`Visit ${labels[selected]}`);
    link.attribute('href', links[selected]);
    link.show();
  } else if(spinSpeed > 0) {
    hasStopped = false; // Reset flag when spinning
  }
  ```
  In 'function mouseReleased':
  ```
  link.hide();
  ```

  Kim- The part of the code I am most proud of was the drawing of the wheel and the labels.  I think the reason I am proud of this code is that it took a lot of tweaking and testing to get it to look the way we wanted.  After setting the coordinates using `translate()` and `rotate()`, we made the wheel using the arrays and a for loop.  Then used the array in the `arc()` parameters: 
```
  for(let i = 0; i < totalSections; i++) {
    fill(colors[i]);
    stroke(0);
    strokeWeight(1);
    arc(0, 0, 600, 600, i * sectSize, (i + 1) * sectSize, PIE);
```

The label code took a bit of trial and error to get the current look.  Here is the current code for the label text:

```
    push();
    fill("white");
    textAlign(CENTER, CENTER);
    textSize(12);
    let angle = (i + 0.5) * sectSize; //angle for label
    rotate(angle);
    translate(240, 0); // Position text
    rotate(-angle - rotation);
    text(labels[i], 0, 0);
    pop();
  }
```
I think the text would have looked acceptable if we didn’t include the `rotate(-angle  – rotation);` but this inclusion allows the text to rotate and stay upright as the wheel spins.  I think this makes the wheel look a lot more dynamic and finished.  


# Credits
**Click Sound** 
*Mechanical Plastic Click 04 by SmallConfusion* 
-- https://freesound.org/s/751082/ 
-- License: Attribution 4.0

**Chomp Sound**
*Carrotnom by freesound_community via Pixabay*
https://pixabay.com/sound-effects/carrotnom-92106/
CC0 license

**Tada Sound**
*Tada by u_8g40a9z0la via Pixabay*
https://pixabay.com/users/u_8g40a9z0la-45586904/ 
CC0 license
