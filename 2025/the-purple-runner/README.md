
# Final Project – The Purple Runner

## Contributors
- **Daniel R** – rodriguezd4@emmanuel.edu  
- **Isaiah Etienne** – etiennei@emmanuel.edu  

---

## Description

This project is based on the Google Chrome dinosaur. This game is about a car running in 2D format. This car can jump to survive and get a greater score. In this game you cannot win, but you are able to get the highest score to win in a score contest like the Chrome dinosaur. This game is played by pressing the up arrow to go up and the down arrow to go down, and if you hit the purple triangle, you lose, and when you lose, there will be a purple screen popping up that will let you know you lost, your score, and the instructions to play again.

---

## Instructions (How to Play)

To be able to play, you must hit the load button, then quickly press the up arrow to jump and skip the triangle, which over time will run faster. If it helps, you could use the down arrow to fall to the ground faster for a more challenging and fun experience. When you lose, it will pop up a screen emphasizing your score and the next instructions to play again. Keep in mind the game will speed up every 50 points to add difficulty.

**Controls**
- **UP ARROW** – Jump  
- **DOWN ARROW** – Fall faster while in the air  

---

## Story and Challenges

This project starts by looking at 2D games that are famous and really known, but why create something already made? The answer is to upgrade what already exists, and everything could be better if we put some effort into it. We start thinking, *“How could we upgrade the dinosaur game? What if we could change the dinosaur for a car?”* and from there the ideas start to come up.

For us, the biggest challenges were pictures, as we changed a lot of our background and cars. Not only did we have to look for the right licenses, but also for the definition and colors. The biggest conflict we had with coding was to put the score, because it went too fast or too slow. We find a solution to count every loop the triangle makes, and based on that, every loop gets a score of 10. It was difficult because it wasn’t a simple solution and was very different from what we have done previously, and it took so much effort to make it work. By far the biggest challenge we had.

Another challenge was getting the car’s vertical position and gravity to behave the way we wanted it to. At first the issue was making the car start on the ground instead of falling from the sky. Even changing the starting `playerY` value in `setup()` we had the same issue. It took some time before we realized that the `draw()` function was constantly applying gravity every frame and forcing the car downward. Ultimately, the starting value was overridden. We reminded ourselves that `setup()` runs once and `draw()` runs every frame, which helped us fix this issue and better understand how game loops work.

---

## Code Block We’re Proud Of 

Isaiah -
This block took some trial and error, but when it worked the movement felt way smoother. Instead of changing the car’s position directly, we used the velocityY variable and applied gravity inside the draw( ) loop to make it more realistic. Additionally, we added that this can only happen by checking isJumping. It was fun to work on this section because small changes to the gravity multiplier changed entirely how the game felt, and it was fun to find the healthy medium where the gravity felt responsive without being uncontrollable.  

```javascript
if (isJumping && keyIsDown(DOWN_ARROW)) {
  velocityY += gravity * 3; // fall faster while DOWN is pressed
} else {
  velocityY += gravity; // normal gravity
}

```

Daniel –  
This code is one of the biggest and most difficult pieces we created. It required combining color choices, researching p5.js functions, and revisiting older projects—especially the Moon project—to understand how to structure the logic properly. I struggled a lot with this section and had to retry it multiple times while time was running out, which made it feel messy at first. Because of that, it became my favorite piece of code. Finishing it felt rewarding, and it taught me how important persistence and organization are when working on more complex visual logic.

```javascript
// Game Over Screen
if (gameOver) {
  background(200, 0, 255); // purple game-over screen

  fill("black");
  textSize(48);
  textAlign(CENTER, CENTER);
  text("YOU LOSE!", width / 2, height / 2 - 20);

  fill(255);
  textSize(24);
  text("Final Score: " + score, width / 2, height / 2 + 20);

  textSize(16);
  text("[Refresh page to restart]", width / 2, height / 2 + 50);
}

```

## Credits & Licensing

### Images / Assets

- **Broken City**
  - **Creator:** TestSubject06
  - **Source / Link:** [Broken City on DeviantArt](https://www.deviantart.com/testsubject06/art/Broken-City-299224099)
  - **License:** NonCommercial 3.0 License
  - **Use:** Used as the main city background in the game


- **Car Image**
  - **Creator:** Unknown (OpenClipart contributor)  
  - **Source / Link:** https://www.shutterstock.com/es/video/clip-3450876573-classic-car-animation--green-screen-background?dd_referrer=https%3A%2F%2Fwww.google.com%2F 
  - **License:** Public Domain (CC0)  
  - **Use:** Used as the player car sprite in the game

