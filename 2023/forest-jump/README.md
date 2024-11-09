# Willson Lin's Forest Jump
Creaters: Willson Lin (linw@emmanuel.edu)
--
___
___
## Description
The game Forest Jump has been inspired by the Google Dino game. The game consists of monsters that come in from the right and the players has to jump over these monsters tallying up the score. Touching a monster will result in a trip straight to the game over screen. The game does include a start and end screen with buttons for start and restart. The player character has an animation array while the monster doesn't as it is floating.

---
## Process 
Being a beginner, this game definitely seems simple to a regular programmer. Spending so many hours just purely learning buttons, arrays, and the modulo to make the collision test. Starting with just the player character moving, it took me about 20 minutes to figure out that I had to click the screen before being able to use the controls. I was completely frozen when I tried literally everything and the player just refuses to move. The monster looping after one gets off the canvas was also a hard challenge. After learning that just a flag has to be used, I realized that it shoudln't have been that hard. Thinking back, I thought that start pages and game over pages were going to be a struggle but a simple P5.JS search on buttons solved everything. Most of the entire project was definitely hard for me but it was a huge learning experience. 


I'm most proud of the controls in my `draw` function. 
```
if(keyIsDown(65)) { // A
    image(runAni[frame], x, y);
    frame = (frame + 1) % runAni.length;
    x -= 3;
  } else if(keyIsDown(68)) { // D
    image(runAni[frame], x, y);
    frame = (frame + 1) % runAni.length;
    x += 3;
  } else {
    frame = 0;
    image(runAni[frame], x, y);
  }
  drawMonster();

  if(keyIsDown(32) && !isJumping) {
    jumpSpeed -= 10;
    isJumping = true;
  }
```
Learning to use the arrays to run through the animations smoother was really fun and when it finally worked, it felt really good. 

- A = move left
- D = move right
- Space = jump
## References
1. Player character animation and art by Zeggy Games= https://zegley.itch.io/2d-platformermetroidvania-asset-pack
2. Layered background and floor by Brullov = https://brullov.itch.io/oak-woods

