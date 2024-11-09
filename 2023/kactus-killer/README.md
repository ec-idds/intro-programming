## Who Worked On the Project
Chris Viscio and Brett Nkabasele

## Description of Project
Kactus Killer is a gallery arcade shooter like you would see at the fair in real life. The idea is to shoot the cactuses🌵  moving on the screen📺 to gain points to and move through the levels. The cactuses🌵 speed up every level to increase the difficulty. Once you get to the last level, and 
complete the point total, you win! You just have to reset the game to play again.

## Controls
The cactuses🌵 run across the screen and you have to shoot them.
Use the mouse to aim and click to shoot.
You'll have to aim your shots carefully.

## Story of Our Project
We started off wanting to play a game where there is a single person in the middle of the screen
shooting cactuses🌵 coming at him from all sides. We realized that could be a little challenging
for our time constraint, so we decided to make a gallery shooter. We thought this was a simple and
fun idea. We eventually ran with it, making what you see here! Some of the challenges we faced were
when we wanted to change the screen and things were popping up before they were supposed to. We
figured out the issue and streamlined it with the game state variable. That was probably the
biggest victory, as it allowed us to actually work on the important part, the score count and hit detection
of the cactuses🌵 

## Favorite Code

Brett: The function preload is my favorite code. It allowed us to load images into our project.
Some of these images include like the level screens and the enemy sprite.   
This function made everything look better overall, which is why it's my favorite.

```function preload() {
  startScreen = loadImage('Kactus Killer.jpg');
  storyScreen = loadImage('Kactus Killer2.jpg');
  gameScreen = loadImage('desert.png');
  gameScreen2 = loadImage('desert2.png');
  gameScreen3 = loadImage('desert3.png');
  cactus = loadImage('Cactus_Sprite_Sheet.png');
}
```
Chris: The game state variable. This variable really allowed us to move our idea forward.
The game state holds the state of a game as a number and the other variable like START and STORY for
instance also hold a number. When the mouse is clicked the game state is changed to the variable and
it then switches the screen. I like it because it was giving us the most problems out of anything we
did. So once we figured it out the project felt a lot easier and we worked on stuff we wanted to.

```print(gameState);
  if(gameState == START) {
    gameState = STORY;
  } else if(gameState == STORY) {
    gameState = LEVEL1;
  } else if(gameState == LEVEL1 && hitCounter >= 15) {
    gameState = LEVEL2;
  } else if(gameState == LEVEL2 && hitCounter >= 35) {
    gameState = LEVEL3;
  } else if(gameState == LEVEL3 && hitCounter >= 60) {
    gameState = GAMEOVER;
  }
  ```
## Credits
Background used for level one, two, and three:
Desert.png, Desert2.png, and Desert3.png developed by v.rozenfeld
https://vrozenfeld.itch.io/desert-landscape-with-dunes-background

Cactus sprite used as target:
Cactus_Sprite_Sheet.png developed by otr91000010
https://otr91000010.itch.io/cactus-packa