# Operation Stealth Strike

#Who worked on the project, with Emmanuel Emails
Sanzio DiGesualdo, digesualdos@emmanuel.edu, Josh Phillips, phillipsj@emmanuel.edu
# Brief description of the project (1 paragraph).
The purpose of this project was to simulate a tactical mission using a B2- Stealth Bomber to neutralize enemy threats while remaining undetected. To accomplish this the user has to hit the blue target, remain undetected, and evade detection by the enemy by not colliding with the red moving targets, and avoiding striking the red targets to simulate the precision and spatial awareness needed to fly a stealth bomber. The objective is simple, to hit 10 blue targets to win, while avoiding red targets and collisions.
# Instructions for the user (i.e. how to play)
The objective is to hit ten blue targets with the bombs to win, while avoiding getting hit by the red targets and also making sure your bombs don’t hit a red target, which results in the game ending. The game's controls consist of using the arrow keys to move, b to drop a bomb, and r to restart the game. Everytime you hit a blue target your score will increase by one until you get to ten, which then ends the game.
# Brief story of the process, including challenges and victories (less than 1 page).
At first we had a very ambitious and grand vision for what we wanted this project to look like but quickly realized we had to start from the ground up rather than starting at the ceiling. While we wanted to make the game feel complex and nuanced, we needed to detect when objects—bombs, targets, and the bomber—collide with each other first. It sounds simple in concept: "If two objects touch, do something." But when you’re working with multiple objects moving independently and fast, the implementation becomes a bit more challenging. That's why our progress only started once we broke down the problem:
Bomber and Red Targets: If the bomber collides with a red target, the game ends.
Bombs and Red Targets: If a bomb hits a red target, it gets destroyed, and the game is over.
Bombs and Blue Targets: If a bomb hits a blue target, the score increases by one.
Each of these cases involved different logic but relied on the same core idea: determining whether two objects are "touching." Used dist() function in p5.js, which calculates the distance between two points. If the distance was smaller than the combined sizes of the two objects, we knew they were colliding.

# For each contributor, highlight a chunk of code you're particularly proud of, describe it, and explain why you like it so much (~1 paragraph each plus the code chunk).

## Sanzio: 
```
class Target {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.color = color;
    this.xSpeed = random(1, 3);
    this.ySpeed = random(1, 3);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if(this.x < 0 || this.x > width) this.xSpeed *= -1;
    if(this.y < 0 || this.y > height) this.ySpeed *= -1;
  }

  display() {
    if(this.color === 'blue') {
      fill('blue');
      noStroke();
      ellipse(this.x, this.y, this.size, this.size);
    } else if(this.color === 'red') {
      fill('red');
      noStroke();
      rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    }
  }
}
```
This chunk of code is what creates both how the targets look and how they act. Each target is made so that it has a random initial speed and different color so that the player knows which ones are good and bad. There’s the update function which allows for the targets to bounce off the sides and stay inside of the canvas. There’s also the display function which allows for the blue targets to appear as circles, meanwhile the red ones are squares. This code really stands out to me because it shows how effective classes can be, how to create a sort of randomness that enhances the gameplay, and also bouncing. All of these things were crucial to making the game and I find them to be very fascinating. 

## Josh:
```
function checkCollisions() {
  for(let i = blueTargets.length - 1; i >= 0; i--) {
    for(let j = bombs.length - 1; j >= 0; j--) {
      if(bombs[j].hits(blueTargets[i])) {
        blueTargets.splice(i, 1);
        bombs.splice(j, 1);
        blueHits++;
        if(blueHits >= objective) {
          youWin = true;
        }
        break;
      }
    }
  }

  for(let i = redTargets.length - 1; i >= 0; i--) {
    for(let j = bombs.length - 1; j >= 0; j--) {
      if(bombs[j].hits(redTargets[i])) {
        gameOver = true;
        return;
      }
    }
  }
```
which determines whether the player wins or loses. It uses two main loops: one to check if any bombs hit blue targets and another to check if bombs hit red targets. If a bomb hits a blue target, the target and bomb are removed, and the player’s score increases; if the score reaches the objective (like hitting 10 blue targets), the player wins. On the other hand, if a bomb hits a red target, the game ends immediately. The loops carefully go through every bomb and target, ensuring all interactions are accounted for in real-time. This logic is at the core of the game, creating dynamic gameplay where the player must aim carefully and avoid mistakes to succeed.