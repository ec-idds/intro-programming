# Fox and Fruit!

In this kid-friendly game, the goal is to help your fox jump over the log with the spacebar. He wants fruit, so let him run into the strawberry to get lots of points! Careful, if you run into a log accidentally, the game will be over.

By: Elise Ferguson (fergusone@emmanuel.edu), 14 December 2023

# Getting Started

1. Open `sketch.js` from the left panel. That's where you'll see the game code.

1. To view, press the button on the top bar `▶️ Project Index (static)`.

1. Press the **spacebar** to make the fox jump.

# Description

The inspiration for this project comes from a simple game I love to play when I'm bored on my computer, the Chrome Dino game. I love the concept of this game because while it is easy in it's functionality, it is addicting and relaxing! While playing however, I always wished there were more aspects to the game. When I realized I could make my own version, I knew I wanted to add an additional function to make it more unique. The game begins with the fox at a set position on the screen. Soon after the game begins, objects -- either a log or a strawberry -- move horizontally across the screen. The goal is to make the fox jump over the log with the space bar, and to stay on the ground so the fox finds the fruit (strawberry) he was looking for!

## Favorite Code

``` 
let fox = {
  x: 10,
  y: 130,
  size: 80,
  move: function() {
    fox.y -= jumpSpeed; // Fox jumps
    jumpSpeed -= 2; // Gravity pulls fox down
    if(fox.y > 130) { // Lands fox on ground after jump
      fox.y = 130;
    }
  },
  image: {},
  draw: function() {
    image(this.image, this.x, this.y, this.size, this.size);
  }
};
```

I like this code because it is the focal point of my project. The fox object has a lot of components to it that I individually had to alter in order for each piece of the game to work such as jumping and collision. The move aspect of this object is my favorite part because of how crucial and challenging it was for me to get to work smoothly. The speed at which the fox moves upwards, along with the gravity parameters that bring the fox down to a certain stop point, were proud challenges I conquered throughout the project.

# Credits
p5.js Reference
https://p5js.org/reference/

JS Tutorial - w3schools
https://www.w3schools.com/js/default.asp

T-Rex Dinosaur Game - Chrome Dino Runner
https://chromedino.com/

Background - **Artist**: Free Game Assets
https://free-game-assets.itch.io/free-summer-pixel-art-backgrounds

Fox PNG - **Artist**: Elthen's Pixel Art Shop
https://elthen.itch.io/2d-pixel-art-fox-sprites

Log PNG - **Artist**: Kyrise
https://kyrise.itch.io/kyrises-free-16x16-rpg-icon-pack

Strawberry PNG - **Artist**: Henry Software
https://henrysoftware.itch.io/pixel-food

Dogica Font - **Author**: Roberto Mocci
https://www.dafont.com/dogica.font