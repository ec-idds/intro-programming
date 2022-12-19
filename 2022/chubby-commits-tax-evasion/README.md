# Chubby Commits Tax Evasion!

Welcome to Chubby Commits Tax Evasion! The objective of this game is to avoid collecting taxes and instead eat cake. The program involves a simple jump mechanic for the player with a looping cake and tax object that the player must collect and avoid respectively. When the player collects 5 slices of cake, they win. 

Special Thank You to Jenn's dog, Mr. Chubbs, harbinger of chaos

# How To Play:

Press the up arrow key on your keyboard to jump over the tax obstacles. 

To collect cake, simply let Chubby run into the cake icons.

After collecting 5 pieces of cake with at least 1 life left, you will have successfully evaded taxes!

# Challenges and Victories

It was hard to develop a jump mechanic, but through an online example provided in the resources below, we were able to adjust the mechanic for our game making it more enjoyable for players. Another challenge was the collision detection as it would make the player have a frankly *aggressive* amount of negative lives, but we were able to use flags to solve the problem.

# Meet the Creators!
Angel Muthemba (muthembaa@emmanuel.edu) and Jennifer Dias (diasj@emmanuel.edu) worked on this project together.

## Angel's proud code moment:
```JavaScript
let clouda = 80;
let cloudb = 80;
let clouda1 = 185;
let cloudb1 = 170;

function makeClouds() {
  image(cloud1Img, clouda, cloudb);
  clouda += 0.1;
  if (clouda > width) {
    clouda = random(-40, -20);
  }
  image(cloud2Img, clouda1, cloudb1);
  clouda1 += 0.1;
  if(clouda1 > width) {
    clouda1 = random(-40, -20);
  }
}
```  
I'm proud of this piece of code because I was able to make the clouds in our game move. Originally, I hand drew the code using code and made them move. These clouds did not fit the 8-bit style we were going for, so Jenn decided to draw the clouds in a pixel art studio to fit the aesthetic. After this we uploaded the images to take place of the code drawn clouds! 



## Jenn's proud code moment:
```JavaScript
if(mouseFlag === true && mouseX > width / 2 && running === false) {
    image(bgImg, width / 2, height / 2);
    text('too bad.', width / 2, height / 2);
}
if(mouseFlag === true && mouseX <= width / 2 || mouseFlag === true && mouseX >= width / 2 && running === true){
    image(bgImg, width / 2, height / 2);
    running = true;
    //the rest of the program is in this one if statement
}
```
I was proud of this because while it's a simple mechanic, it initializes the game. It had a few bugs like if your mouse was on the right side of the screen during the game, it would show the opening screen but using the `||` and `=`, I was able to make it work perfectly!

# Resources:
Jump mechanic provided by examboy.dps: https://editor.p5js.org/examboy.dps/sketches/JWfMF7b5Q

Sound effect from mixkit.co collect sound "bonus earned in video game" & "oof" from pixabay.com

*Note: all art & background music was developed by the creators*
