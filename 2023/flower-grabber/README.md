# Creators

Isabella Franzese (franzesei@emmanuel.edu)
Jocelyn Francisco (franciscoj@emmanuel.edu)

# Description

Our final project is inspired by the Mario64 MiniGame. It consists of a player-controlled basket that moves left/right to collect flowers falling from the tree at random positions along the x-axis at the top of the screen. A new flower will drop every other second. There are 30 seconds to catch as many flowers as possible and the basket is able to wrap around to the opposite side of the screen. Catching a flower will award players with one point. Once the 30 second timer has reached 0, the game will end and an image will appear.

# How To Play

Use the left and right arrow keys to move the basket and collect as many flowers as you can in 30 seconds!

Each flower is worth one point.

# Process
  
We began by creating vector shapes that would later be replaced by drawn assets to initially figure out the movement and detection of each part. After the basket existed and was able to move with the corresponding left/right arrow keys and the flowers (which are made up of an array) were able to randomly appear along the x-axis at the top of the screen, we then set out to figure out the timer. We used the `millis()` function to accomplish this, with a working timer (displayed in seconds to be easily viewable) that counts down from 30 to 0. Getting the countdown to work at all was difficult, especially getting it to stop once it hit 0. After getting some help from Mark we then used the same method to create a separate (not displayed to player) flower timer that counts down from 1 to 0, dropping one flower each time the timer hits 0.

# Favorite Code

#### Jocelyn:

My favorite lines of code are from the collision detection of the flowers. In order to do this, I used ColideLineRect and defined variables of the basket object and flower array. I also used a for loop within the collsion detection. To get the flower to disappear after touching the basket I used a If Then statement. This process what very frustrating, however after talking it out it was very fulfilling to watch to results come to life.  

#### Isabella:

My favorite lines of code are from the timed flower drops. While they were simple in the end, figuring them out originally was incredibly relieving. Using the information we learned from Mark on how the `millis()` function worked in relation to counting how much time was left, I created new variable names for the period we wanted the flowers to drop from (originally 2 seconds/2000 milliseconds, though we decreased it to 1 second/1000 milliseconds to make the drops faster), the start time (0 for both the displayed timer and for the flower timer), and the time remaining for a flower to be dropped.

```let flowerTimeRemaining = flowerPeriod - (millis() - flowerStart);```

Additionally, the below `if()` statement allowed a new flower to be added to the array and get dropped each time the timer created above hit 0.

```
if(flowerTimeRemaining <= 0) {
    flowerStart = millis();
    makeFlower();

  }
```

# Credits

♡ Background image (Field.png): https://opengameart.org/content/summer-pixel-art-seamless-background 

♡ Basket, flower and tree overlay assets (basket.png + cherryblossom.png + tree.png) by  Isabella Franzese

♡ Text font (Melted Monster.ttf): https://www.dafont.com/dm-studio-dimas-prasetyo.d7283 

♡ Background Music (SYNTHMUSIC2.mp4) by Ian Jellinek

♡ Game Over Photo (endphoto.jpeg): Mark Sherman Baby Model