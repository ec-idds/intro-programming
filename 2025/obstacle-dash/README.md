# Introduction
For my final project for Intro to Programming I worked alone to create an interactive game similar to geometry dash, using p5.js that focuses on player movement, timing, and basic game mechanics. The goal of the project was to apply the programming concepts I learned throughout the semester, including variables, conditionals, functions, loops, and much more in a complete and working program. While the game itself is not very complex, it required lots of problem solving and time to make sure all of the concepts worked together the right way. 

Throughout the process of putting this game together, I played around with many different techniques and ideas before I was able to put together the final piece of the game. Some of the challenges I experienced throughout the process of the game were small details such as misplaced semicolons or brackets that would crash the code, as well as difficulty with putting the sound and image to complete the game. The background music was something I struggled with the most during this game so I decided to not use  at all and not have to worry about licensing along the way as well. Overall, this project reflects both challenges and progress I experienced while learning key concepts of programming this semester. 

# Objective
The objective of this game is to control the player and reach as high of a score as possible, while avoiding obstacles. The player must move and time their jumps correctly in order to keep playing. If the player hits one of the obstacles, the game resets and allows the player to start again. It is a simple game, but the goal is for the score to encourage the player to reach for a higher score. 

# Game Controls
The player is controlled using the keyboard, either with the space bar or the up arrow. If either of the keys are pressed, the player will jump and avoid obstacles, as the player automatically runs on its own. The controls are simple to make the game easy to understand and play. The game can then be restarted after a loss by hitting the r key on the keyboard. 

# Code I Am Proud Of
I am proud of this section of code because it controls how obstacles are generated and makes the game more challenging as the player's score increases. The function choses what types of obstacles appear and how often they spawn based on the score. This made the game feel less repetitive and it also helped me better my understanding of how these types of games run. 

```function spawnObstacle() {
  let allowSpikes = score > 300;
  let spawnSpike = allowSpikes && random() < 0.55;

  let chain = score > 800 ? int(random(2, 4)) : 1;
  for(let i = 0; i < chain; i++) {
    let spawnX = width + i * 28;
    if(spawnSpike) {
      obstacles.push(makeSpike(spawnX, 28));
    } else {
      let h = 22;
      if(score > 800) h = 30;
      if(score > 1400) h = 40;
      obstacles.push(makeBlock(spawnX, h));
    }
  }
}
```
# Licensing:
Background image is a png created by: kaleoof.


