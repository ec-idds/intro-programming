# Bunny Adventures!
Kealy Concepcion Santos (concepcionsantosk@emmanuel.edu)
Sophia Novoa (novoas@emmanuel.edu)
## Game Description
Bunny Adventures is an exciting and fast-paced game where you play as a bunny on a mission to collect carrots. You have just 30 seconds to gather as many carrots as possible, but as the game goes on, the time it takes to disappear becomes quicker, adding to the challenge. In this fun, engaging game, race against the clock and test your reflexes!

## Game Instructions

Utilize the WASD or arrow keys to maneuver your bunny across the screen. Every carrot you touch adds to your score, and you'll know you’ve scored when you hear a "pop" sound! Keep an eye on the top left corner for your current score and the timer counting down.

You have 30 seconds to collect as many carrots as possible before time runs out. Can you beat your record? A “Game Over” screen will reveal your final score at the end of the timer, showcasing your bunny-catching prowess!

Feeling competitive? Simply refresh the tab to start a new game and improve your score!

Join the fun now and see how many points you can rack up in Bunny Adventures! Happy hopping!


# Story
"Bunny Adventures" originated from a lecture on game assets. While exploring various resources, we discovered a game asset called "Sprouts Land" on itch.io, which instantly inspired us to incorporate it into our project. Initially, we considered developing a maze game or a Farmville-style game. However, our concept evolved when we envisioned a gameplay mechanic similar to whack-a-mole, inspired by an adorable image on the asset page that showcased a patch of dirt filled with vibrant vegetables. We focused on our charming cunny character to create a playful narrative. After brainstorming multiple names, we ultimately settled on "Bunny Adventures" due to its simplicity and appeal. While initially considering using various vegetables as objectives, we focused on the delightful carrot as the primary goal, enhancing the game's overall charm. This creative blend and spontaneity transformed our initial idea into a lovely player experience.

Creating "Bunny Adventures" was a rewarding journey filled with challenges and triumphs. A significant hurdle was programming the random spawning of carrots to appear only on the dirt patches. At first, the carrots appeared unpredictably across the screen, often outside the intended parameters, leading to a chaotic and unplayable scenario. This required thorough debugging, refining our approach, and testing coordinate limits to ensure proper carrot placements. Another challenge arose when we aimed to increase the carrots' spawn rate as the game progressed. Finding the right balance in difficulty without overwhelming players was time-consuming, as we adjusted the timing functions to create a challenging yet fair gameplay experience.

The Bunny character also presented its own set of obstacles. Initially, its movements felt awkward, and collisions with the carrots often went unregistered. After several iterations, we successfully fine-tuned the character's controls, allowing players to maneuver the Bunny smoothly using the WASD or arrow keys. Additionally, we programmed the Bunny’s interactions with the carrots. When the player guided the Bunny near a carrot, the game recognized the collision and initiated a pleasing animation change—shifting the Bunny from the "High" position (holding its hoe above) to the "Hit" position (striking the carrot). This mechanic added a sense of realism and enhanced the gameplay experience. Coordinating the animation frames with collision detection proved challenging, but witnessing its seamless operation was a significant breakthrough.

Throughout these challenges, we celebrated numerous meaningful victories. Successfully implementing the random carrot spawning mechanism was a pivotal milestone, as it brought the game closer to our vision of an exciting and engaging experience. Adjusting the Bunny’s animations to respond fluidly to player actions and carrot collisions was another proud accomplishment, elevating the game from merely functional to genuinely delightful. We also achieved a balanced difficulty progression, ensuring players remained engaged while retaining the fun factor. The most fulfilling victory was watching the game develop from a vague concept into a fully playable and polished project; seeing the Bunny move effortlessly across the screen, react to carrots with adorable animations, and hear friends respond positively made all our efforts worthwhile. Each obstacle we overcame reinforced our understanding of game design and enhanced our collaborative creativity, cementing "Bunny Adventures" as a testament to our perseverance and ingenuity.


# Favorite Code
#### Kealy's Favorite Code

One piece of code I’m incredibly proud of is the loop that controls when vegetables appear and respawn during gameplay. This loop is central to the mechanic, facilitating vegetables' dynamic appearance and disappearance, which keeps the game engaging and challenging. I take pride in this code because it combines several fundamental aspects of the game: timing, randomness, and efficient resource management. It ensures vegetables vanish after being visible for a predetermined duration, thus avoiding screen clutter. At the same time, it employs randomness to decide when hidden vegetables reappear, making gameplay unpredictable and exciting. I value how concise yet compelling this code is—it handles various tasks, such as visibility, respawning, and rendering, all within one loop. Furthermore, this code segment reflects my skill in using logical conditions and randomization to enhance the player experience. I find this code particularly fulfilling because it presented one of the most challenging mechanics to implement, but once functioning flawlessly, it became a vital part of the game.

```   //Loop through all vegetables, vegetables are drawn if visible 
  for(let i = 0; i < vegetables.length; i++) {
    let veg = vegetables[i];
    // If the vegetable is visible for too long it will be hidden
    if(veg.visible) {
      if(frameCount - veg.lastVisibleTime > vegetableVisibleTime) {
        veg.visible = false; // Sets vegetable to hiden

      } else {
        image(veggieImage, veg.x, veg.y, vegetableSize, vegetableSize); // Draws the vegetable image
      }
    } else {
      //if the vegetbale is not visible for a random amount of time, respawn it 
      if(frameCount - veg.lastVisibleTime > int(random(60, 180))) {
        respawnVegetable(veg); // Call function to respawn the vegetable
      }
    }
  }
```

#### Sophia's Favorite Code
One piece of code I'm super proud of is the section that controls the background music. 
```Runs once the game starts, plays background music and volume is set to 40%
function setup() {
  createCanvas(600, 600); // Creates 600x600 canvas

  song.play(); // Plays the background music

  song.loop(); // Loops the background music

  song.setVolume(0.4); // Sets the volume background music to 40%
}
```

# Credits
##### Carrot Image
Hana Caraka, https://otterisk.itch.io/hana-caraka-crops-pack, License free to user

#### Game Asset ( Background Image and Player Model)
Cup Nooble, https://cupnooble.itch.io/sprout-lands-asset-pack, License free to user

#### Music 
###### Background Music
Cartoon Game Theme Loop.wav by Mrthenoronha -- https://freesound.org/s/369920/ -- License: Attribution NonCommercial 4.0

###### Sound Effect
VS Pop_3.mp3 by Vilkas_Sound -- https://freesound.org/s/463389/ -- License: Attribution 4.0

