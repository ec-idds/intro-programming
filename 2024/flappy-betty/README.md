# Flappy Betty

## Instructions
#### Objective:

The objective of the game is to control an icon (my dog, Betty) and navigate it through a series of obstacles (barriers) without hitting them. The player earns points every time they successfully pass through a set of barriers.

How to Start:

When you open the game, you will see a prompt that says, "Press any key to start." To start the game, click inside the viewer then press any key on your keyboard.

#### Game Controls:

Jump the Icon:
- Press the space bar (or any key) to make the icon jump.
- The icon will move upward each time you click or press the key, and gravity will bring it back down.
- The more you click, the higher the icon goes.

#### Game Play Mechanics:

Moving Obstacles:
- The game will display moving barriers (obstacles) that the icon must navigate through.
- These barriers are vertical, with gaps in the middle for the icon to fly through. The gaps will vary in size.
- As the game progresses, the spacing between the barriers will slightly change, making it more challenging as the game speeds up.
- As the icon progresses, the barriers will move from right to left across the screen.

Scoring:
- Each time the icon successfully passes through a set of barriers, the player scores 1 point.
- The score is displayed in the top-right corner of the screen.
- When the score increases, a sound effect plays to indicate a successful passage.

Speeding Up:
- The game becomes progressively more difficult as the barriers move faster with each passing second.
As the score increases, the game speed increases.

Game Over: The game ends if... 
- The icon hits one of the barriers (either the top or bottom part of a barrier).
The icon falls to the ground.
Once the game is over, a "Game Over" screen will appear, showing your final score.

Summary of Actions:
- Press any key to start the game.
- Press the space bar to make the icon jump.
- Try to avoid hitting the barriers.
- Earn points by passing through the gaps in the barriers.
- The game speeds up as you progress and the spacing between the barriers varies.
- The game ends when the icon hits a barrier or falls.

Enjoy playing and see how high you can score!

# Background

Author: Grace LePain - lepaing@emmanuel.edu
 This project is a Flappy Bird-inspired game that I developed to revisit a simpler version I created when I was younger. At the time, I was just beginning to explore programming, and the original version was quite basic. Now, with the new skills I've acquired and the knowledge I've gained, I wanted to see how far I could take the game, refining both the mechanics and the user experience. In this updated version, players control an icon (my dog in her Halloween costume) that must navigate through a series of moving barriers by clicking the pressing a key to make the icon jump. The spacing between the barriers varies as the game speeds up, increasing the difficulty and adding an extra layer of challenge. Players earn points each time the icon successfully passes through a gap in the barriers, and the game becomes progressively more intense as the speed increase. I also added dynamic clouds that move across the screen and wrap around when they go off-screen, creating an immersive environment. Sound effects play when the icon jumps and when the score increases, enhancing the overall experience. The game ends if the icon collides with a barrier or falls off the screen. This project has been a great way for me to apply what I’ve learned and see how my programming skills have evolved since my earlier attempts at game development.

During this project, I encountered several challenges that required problem-solving and adapting my previous knowledge of programming. One of the most significant challenges was finalizing the hit box detection, which was crucial for determining when the icon collided with a barrier and the game should end. Initially, the collision detection was inaccurate, causing the icon to pass through barriers or register collisions incorrectly. After multiple attempts to adjust the collision logic using basic shape intersections, I realized the need for a more reliable and precise solution.
To resolve this, I decided to download the collide2D library, which is specifically designed to handle collisions in 2D games. Integrating this library allowed me to accurately check for collisions between the icon and the barriers, ensuring that the game would end only when the icon truly collided with the top or bottom part of a barrier. This solution not only improved the collision detection but also simplified the process, as I no longer had to manually code  intersection logic.
Another challenge was integrating sound effects seamlessly into the game. I wanted to ensure that the jump sound played when the player clicked or pressed a key, and the score sound played after the icon passed a barrier. Initially, the score sound would play too early, before the icon actually passed the barrier. To fix this, I tracked when the icon passed the barrier and only played the score sound at that moment, making the timing feel more natural.
I also encountered issues with the cloud animation, as I wanted the clouds to move continuously and loop seamlessly without interfering with the rest of the game. Initially, the clouds would either stop or not move correctly when the game was over. I resolved this by controlling the cloud movement with a separate set of conditions that stopped the clouds only after the game ended, while still allowing them to wrap around during gameplay.
Lastly, as the game became more complex, I had to optimize the game's performance, especially as the speed increased. I used efficient object handling techniques, such as removing barriers that were no longer on the screen, to keep the game running smoothly even as the difficulty level rose.
Overall, this project challenged me to think critically about game design, refine my programming skills, and use the knowledge I’ve gained to create a more polished and engaging experience.


### The Code I'm Proud of: The Clouds
Even though we have worked on similar coding concepts in previous class assignments, I’m particularly proud of the cloud animation because it shows my ability to apply the skills I’ve learned in a more complex and interactive way. In past projects, I might have used basic animations, but integrating the cloud movement, with wrapping behavior when the clouds go off-screen, required additional logic to make it seamless. I found it satisfying to create something visually dynamic that interacts with other elements in the game, like the barriers, without interrupting gameplay. This project felt like a step forward in my ability to build more engaging, polished experiences.
```
let clouds = [];

class Cloud {
  constructor() {
    this.x = random(width, width + 200); // Start off-screen
    this.y = random(50, 150); // Random vertical position
    this.size = random(50, 100); // Random cloud size
    this.speed = random(0.5, 1.5); // Random cloud speed
  }

  move() {
    this.x -= this.speed;
    if (this.x < -this.size) { // If the cloud goes off-screen, reset its position
      this.x = width + this.size;
    }
  }

  show() {
    fill(255, 255, 255, 200); // White with some transparency
    noStroke();
    ellipse(this.x, this.y, this.size, this.size / 1.5); // Draw cloud shape
  }
}

function setup() {
  createCanvas(400, 600);
  for (let i = 0; i < 5; i++) { // Create 5 clouds
    clouds.push(new Cloud());
  }
}

function draw() {
  background(135, 206, 250); // Sky blue
  for (let cloud of clouds) {
    cloud.move();
    cloud.show();
  }
}
```

#### Licensing:
The image of the dog is my own and the sound used did not require licensing or any credit.
