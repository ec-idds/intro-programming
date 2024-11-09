# Final Portion

  James Fink (finkj@emmanuel.edu)

#Description

  This program is a two phase boss fight. The player falls from the center of the screen as the boss charges them from the left. The player is able to fight back, roll to dodge
  jump to dodge and run across the screen to fight. The boss will relentlessly chase the player until within attacking range where a random attack will be selected and a hitbox
  generated. At half health or lower the boss will transform to his elemental form with a new moveset, faster movements, attack speed, and a bigger damaging hitbox per attack.
  If the player is below 0 health, the player is dead and the game is lost, if the player manages to kill the boss, the game is won. rolling disables attack damage temporarily
  against the player.

# How To:

  Fight the boss!

  Controls:
  - "A" or "Left Arrow Key" moves left
  - "D" or "Right Arrow Key" moves right
  - "R" while moving to roll dodge
  - "SPACE" to jump
  - "Left Click" to attack 

  ** NOTE: rolling will only happen when the player is on the ground and moving either right or left **

  ** NOTE: Attack Direction is based on the position of the mouse pointer NOT player direction (i.e. if the character is facing right and the mouse pointer is to the left of the 
  player, the player will attack to the left) **
  
  Attack the boss while dodging his attacks! dodge by either jumping over the boss or rolling through his attacks. attack using left click

  Your health bar is in the top left while the boss' is behind the main arena

# Story: 

  This project was initially made in p5 with over 200 lines of code just to render a non textured stage and entities. The day before the project I had planned to take the code
  I had already written and add only the animations and images from the "p5Play" library and very basic logic for the boss, this ended up not being the case. After playing around
  with the library I realized it would be best to write all of the code in p5Play, so I rewrote everything and added all of the missing features. This gave me a strict time limit
  (given I only checked out p5Play at 2pm the night before) but I pushed through. The main challenges of programming in the p5Play library was its lack of "timing based" functions
  leading to the use of multiple flags for core functions. I solved the issue using a condition and two flags, one that would be changed by the next action, one that would be changed
  by animation changes (the first flag made sure the program didn't start another "function" (just a series of if statements, given more time they would have been functions) and the
  second flag checks for the end of the "change.Ani() function shifting from the first animation to the second). The timing would run off of the "idle" and "idle2" animations where
  every attack animation would end with "idle" or "idle2" (depending on the phase). "idle2" was also used for the transformation animation timing and "death" was used for a similar
  purpose for the boss' death. Another issue was with the "overlaps" function in the library during the second phase. This function is apparently based only on the y axis, so moving
  the y axis toward the animated sword during the size change made the hitboxes near useless unless the player jumped. This was solved by maintaining the y axis of the hitbox of
  phase 1. Another large issue earlier on was detecting the boss.x value within a certain range of the player.x to determine attacking range. This was solved using a global function
  that checks the variable against a min and max and returns a boolean if true (thank you stack overflow).

  ** Quick Note:  I saw that javascript has a function.then() statement but did not have the time to learn more about it. If I had more time it would have been based around this
  feature if it does what i think (timing one function after the other) **

# Most Proud Code:

if(boss.ani.name === "death") {
    dead = true;
    textSize(100);
    text("You Win!", width / 3, height / 3);
    bossHitBox1.width = 0;
    bossHitBox1.height = 0;
    bossHitBox2.width = 0;
    bossHitBox2.height = 0;
    bossHitBox3.width = 0;
    bossHitBox3.height = 0;
    bossHitBox4.width = 0;
    bossHitBox4.height = 0;
  }

if (boss.ani.name === "idle" || boss.ani.name === "idle2") {
    movingStage = true;
    flag = true;
    transform = true;
    bossHitBox1.width = 0;
    bossHitBox1.height = 0;
    bossHitBox2.width = 0;
    bossHitBox2.height = 0;
    bossHitBox3.width = 0;
    bossHitBox3.height = 0;
    bossHitBox4.width = 0;
    bossHitBox4.height = 0;
    isAttacking = false;
  }

  This is the beating heart of the program. This is the debounce and primary flag handler that resets flags based on the boss' actions. I initially had this as apart of the
  boss movement handler, however it kept malfunctioning after the first attack, making the attack animation play in an infinite loop when in attack range spasming the attack
  hitbox on and off and never dealing damage to the player. This also resets all hitboxes ensuring no non attack damage is dealt. The hitboxes are managed using invisible
  sprites with no width or height until the boss attack where the boxes are given a width and height and, upon overlapping with the player, deals whatever the value of the 
  damage variable is to the player. 

# Resources

  all resources were from Itch.io. The player is creative commons however, the background and boss animations were purchased for professional use

  Asset: Player Model
  Name: Free Knight (aamatniekss)
  Link: https://aamatniekss.itch.io/fantasy-knight-free-pixelart-animated-character

  Asset: Background (Pro License)
  Name: Pixel Fantasy Caves (szadiart)
  Link: https://szadiart.itch.io/pixel-fantasy-caves

  Asset: Boss (Pro License)
  Name: Fire Knight (chierit)
  Link: https://chierit.itch.io/elementals-fire-knight

## View Project with Console
To see the errors and messages from your code, open the project viewer in a new browser window. This can be done by the pulldown menu attached to `▶️ Project Index (static)` in the top bar OR by opening the viewer and clicking the arrow button ↗️ to open in a new tab.

In that new window or tab, you can then open the browser's JavaScript Console, which is part of the developer tools included in every browser.

## 2-Column Layout
Go to the `View` menu, then `Layouts`, and select `2 Columns`. Then you can move the viewer to  one side and your code editor to the other and see them at the same time!

updated 4 October 2021
