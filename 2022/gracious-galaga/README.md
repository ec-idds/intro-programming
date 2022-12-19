# Gracious Galaga
This `README.md` file is for our IDDS 1101 final project, 'Gracious Galaga'.

Friday, December 16th, 2022

# Creators
Camila Moreno-Bo
      email: morenoboc@emmanuel.edu
Adom Oshagan
      email: oshagana@emmanuel.edu

# Project Description

Goal: To make our own rendition of Galaga using Javascript and p5.js. 
The Galaga rocket ship is controlled by the user;
The ship can move side to side and shoots bullets when the spacebar is pressed;
If the bullet hits the enemy ship then the enemy ship disappears, adding a 1000 points to the scoreboard;
The enemy ship will move at random throughout the screen;
If the user is able to shoot all of the enemy ships, the screen freezes and a "WINNER" text is displayed;
If the user is not able to shoot all of the ships within the allotted time (20 seconds), then the screen freezes and a "GAME OVER" text is displayed.


# How it happened
1. We choose to do our own spin on a classic arcade game to challenge our code and creative ability. 
2. The first code we made sure to get done was the background, galaga, and enemy ships.
3. The `keyIsPressed` allowed for the galaga to be moved from left to right and the space bar to be called to `Shoot`. We also had to "debounce" when the arrow key is held at the same time as the space bar using `keyIsDown`.
4. To account for each `collision` with `Enemy` and `Bullet` we first tried to call an object, but Dr. Sherman introduced us to the `Class` function. 
5. To challenge the user, we wanted to make the `Enemy` move, so we added the `random` function (similar to the Assignment Jitterbug).
6. We made a score for each `collision` to count as 1000 points. 
7. GAME OVER was called with a count down of 20 seconds to `hit` all the enemy ships. 
8. If you hit all the `Enemy` ships in 20 seconds, you are a WINNER!


# Proud Code
Camila's Code...

Classes in JavaScript are really used for encapsulating logical functions and properties into one type/ entity.
A Class is used to hold both data variables and member functions. It enables you to create user define objects. Class provides a way to organize information about data.
When you use the new keyword, it creates a new object from the class template.

Allowed:
1. Individual Random Movement of Enemy 
2. To call each individual `hit` to each enemy with bullet
3. Condense code

```JavaScript
class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.visible = true;
  }
  draw() {
    if(this.x <= width && this.y <= height-200 && this.x >= 0 && this.y >= 0 && gameIsRunning) {
      this.x += random(-5, 5);
      this.y += random(-5, 5);
    } else {
      this.x = random(0, width);
      this.y = random(300, height);
    }
    if(this.visible) {
      image(enemyImage, this.x, this.y, 25, 25);
    }
  }
  hit() {
    this.visible = false;
  }
}
```

Adom's Code:

Firstly, in this code, there are a ton of conditionals that need to be true in order to enter the `if` statement.
None of the conditionals are particularly difficult to understand but it took some thinking to make it as efficient as possible.
For the meat of the statement, the part I am most proud about is when the new bullets are made every time the space bar is pressed.
This for me was a great achievement because arrays have been difficult for me to grasp and I know how powerful they can be and with this chunk, I was able to understand it and give the user a glimpse of its power.
The for each loops are also something I am proud of because they are quite arbitrary and require you to think in "coding language" to write.

```JavaScript
if(keyIsPressed && keyIsDown(32) && flag && gameIsRunning) {
    for(let i = 0; i < 1; i++) {
      shots[i] = new Bullet(galaga.x + 20, galaga.y + 10);
    }
    shots.push(new Bullet(galaga.x + 20, galaga.y + 10));
    flag = false;
  }

  if(keyIsDown(32) === false) {
    flag = true;
  }

  for(let shot of shots) {
    shot.draw();
  }

  for(let enemy of enemies) {
    enemy.draw();
  }
```
