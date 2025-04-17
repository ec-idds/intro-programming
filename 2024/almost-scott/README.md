# Almost Scott
  ### Made by Scott Pilgrim lovers:
  **Leyla Rodriguez** (rodriguezl2@emmanuel.edu)
  **Safa Walid** (walids@emmanuel.edu)

# Description of Game
  >For our project, we decided to keep the initial library that Mark installed and also added collide2d for actual interactions. This game was inspired by Scott Pilgrim vs. The World the MOVIE, not the show. This is also shown in the title of our game because again it was ALMOST Scott. Unfortunately we couldn't find images with multiple exes. Our player sprite was also selected because he kinda looks like Michael Cera in SPvTW.

# How to Play
 ### Player Movement

  **Left Arrow**: Move player to the left
  **Right Arrow**: Move player to the right
  **Up Arrow**: Make player jump
  **Space Bar**: Make player attack

  ### Ex Movement
  **A**: Move ex to the left
  **D**: Move ex to the right
  **W**: Make ex jump
  **T**: Make ex attack

 # Coding Process
  > At the start of this process, we really didn't know how we would execute this project. We spent a lot of time looking for assets that were lore accurate to the movie but then realized it really doesn't matter that much.
  We started by getting the background in and finding the right scenery for the fight. When we got our sprite asset in, we were able to start working on moving the sprite and building in movement in necessary directions. After doing that, we realized it was getting hard to keep track of everything so we talked to Mark and made our sprite go from an object, to a class.
  Once we were able to get our sprite as a class, it made the process so much easier. We were ableto get a working continue button on the bottom and then were able to have two separate pages to have different backgrounds and vibes. 
  After solidifying the movement of the sprites, we were able to use animations and collide2d to add a greater experience for the user.
  First we added a movement animation to the sprite so there was an idle animation and a walking anmimation. Then we added the attack animation so when a key is pressed the player would attack.
  Having these animations in made it easier for us to use collideRectRect detection. After realizing this we were able to program it so that the Ex and the Player loses a life every hit. Once we got the attack down, we realized that even if you pressed the attack key once, it would remove all the lives so we had to reach out to Mark to help debounce the attacks so it only registered one attack per press.

  >The main challenges we faced was the code breaking when trying to make the ex walk and also getting the ex attack to register. Unfortunately, the ex attack still doesn't work but the walking animation does work and we were able to make the ex and player jump within a specific boundary. We also fixed the movement limitation for each sprite as they were able to continue across past the border and into the abyss.

# Leyla's Code Highlights (lines 172 through 237)
 > My favorite chunk of code was the movement and debugging all of the errors that kept popping up. I thought this was fun because even though there were many errors that kept popping up, I was able to push through each error like peeling back layers of difficulty. After getting the player to move left and right it finally came time to get the player to actually jump and not fly across the screen. It was so fun seeing the errors that kept popping up and seeing where I could change things to make the player jump.
  My favorite part from the jumping section was when I had the false and true statements reversed and I made the player fly away, like actually. It was really rewarding to finally get the player to jump and not inversely jump. There were similar issues when I was trying to do this for the ex, but then realized it's probably easier to just make them have their own jumping variables and not try to combine them both.

``` Code Starts Below
  if(keyIsPressed) {
    if(keyCode === LEFT_ARROW) {
      player.x -= 2;
      if(player.x < 0) {
        player.x = 0;
      }
      player.setAnimation(player.moveAnimation);
    }
    if(keyCode === RIGHT_ARROW) {
      player.x += 2;
      if(player.x > 460) {
        player.x = 460;
      }
      player.setAnimation(player.moveAnimation);
    }
  } else {
    player.setAnimation(player.idleAnimation);
  }
  if(jumping) {
    player.y += jumpSpeed * jumpDirection;
  }
  if(player.y <= jump) {
    jumpDirection = 1;
  } else if(player.y >= 220) {
    player.y = 220;
    jumping = false;
    jumpDirection = -1;
  }
  if(keyIsPressed) {
    //Move the ex to the left
    if(keyCode === 65) {
      ex.x -= 2;
      // ex can't go past x = 0
      if(ex.x < 0) {
        ex.x = 0;
      }
      ex.setAnimation(ex.moveAnimation);
    }
    // Move ex to the right
    if(keyCode === 68) {
      ex.x += 2;
      // ec can't go past x = 460
      if(ex.x > 460) {
        ex.x = 460;
      }
      ex.setAnimation(ex.moveAnimation);
    }
  } else {
    // make the ex stop the moving animation if not in motion
    ex.setAnimation(ex.idleAnimation);
  }
  // Jumping
  if(exJumping) {
    ex.y += exJumpSpeed * exJumpDirection;
  }
  if(ex.y <= exJump) {
    //Reverse direction to start falling
    exJumpDirection = 1;
  } else if(ex.y >= 170) {
    //Reset to ground position
    ex.y = 170;
    //Stop jumping
    exJumping = false;
    //Reset direction for next jump
    exJumpDirection = -1;
  }
  ```

  
  # Safa's Code Highlight 
  >  This code was the most challenging yet part of the code as I was having difficulty getting the the heart lives to deplete by 1 with each attack instead of all at once by 1 attack move. 
     After fixing the code it was rewarding to see our initial vision from the brainstorming and planning stage come to reality; I'm so proud of us!  
     It was also very interesting to see how the computer reads and processes these mechanics (thanks mark).
 
 Code below...

  function draw() {
  // Background and UI
  if(page === 0) {
    image(bg, 0, 0, width, height); // Display the first background
    // fill('rgb(234, 221, 202)');
    // rect(0, height - 40, width, 80); // Text box at the bottom
    // fill(0);
    // text("hey guys", width / 2, height - 200);
  } else if(page === 1) {
    image(bg2, 0, 0, width, height); // Display the second background
    // fill('rgb(234, 221, 202)');
    // rect(0, height - 20, width, 80); // Text box at the bottom
    // fill(0);
    // text("", width / 2, height - 50);
  }
  if(page === 1) {
    // Player lives
    for(let i = 0; i < playerLives; i++) {
      image(heart, i * 35, 0);
    }
    // Ex lives
    for(let i = 0; i < exLives; i++) {
      image(heart, 400 + i * 35, 0);
    }
  }

  // Player Attack Hit Detection
  let hit = collideRectRect(player.x, player.y, playerWidth, playerHeight, ex.x + 80, ex.y + 40, 50, 56);
  if(hit === true && debounceExHit === false && player.animation === player.attackAnimation) {
    debounceExHit = true;
    if(exLives > 0) {
      exLives = exLives - 1;
      print('ex was hit');
    }
  }
  if(hit === false) {
    debounceExHit = false;
  }
  print("hit is ", debounceExHit);

  if(playerLives === 0) {
    player.animation = player.deathAnimation;
  }
  if(exLives === 0) {
    ex.setAnimation(ex.deathAnimation);
  }

  image(ex.animation.frame(), ex.x, ex.y);
  image(player.animation.frame(), player.x, player.y);

  // Sprite animation timer
  spriteTimer--;
  if(spriteTimer < 0) {
    spriteTimer = spriteDelay;
    player.next();
    ex.next();
  }
...

 # Credits to the great creators and artists
 *Background 1*:
  - Thanks to CraftPix.net 2D Game Assets on OpenGameArt
  >>- https://opengameart.org/content/simple-natural-landscape-pixel-art-background 
  > - OGA-BY 3.0
  
 *Background 2*:
  - Thanks to CraftPix.net 2D Game Assets on OpenGameArt
  >>- https://opengameart.org/content/moon-and-sea-pixel-art-background
  > - OGA-BY 3.0

 *Ex*:
  - Thanks to Clembod on itchi.io
  >> - https://clembod.itch.io/bringer-of-death-free
  > Personal Use

 *Player Character*:
  - Thanks to 	Game Endeavor on itch.io
 >> - https://game-endeavor.itch.io/mystic-woods
 > - Personal Use

 *Heart Image*:
  - Thanks to Die Gartenliebe on pngitem.com
  >> - https://www.pngitem.com/middle/iRmxoRT_8-bit-heart-gif-8-bit-heart-png/ 
  > - Personal use
