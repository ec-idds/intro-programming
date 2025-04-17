
# Partners
Willson Lin (linw@emmanuel.edu), Pasquale Gallo (gallop@emmanuel.edu)

# Description Of Project
A shooter game where you have to shoot 4 zombies as fast as you can. There is a reload function (press 'r') as well as a timer. the timer is logged as soon as all 4 zombies are killed. 

# Instructions
Clicking the mouse will shoot the gun so make sure to aim well. You have 10 bullets in a magazine and to reload, press 'r'.

# Our Story
Getting the backgrounds and animations down were easy but we feel like the little things such as the magazine, arrays, and zombie positions were the most tedious part. Once the code started to work though, everything just felt better. 

# Willson's Favorite
Willson Lin = This is my personal favorite chunk of code that I worked on. It took me a really long time to figure out the hitmarker for the zombies. I then realized that using parameters for the entire zombie helped a lot. Using these parameters I made a mousePressed function that detects if the mouse was clicked inside of a zombie's hitbox.
```js
function mousePressed(){
  if(
    zombieAlive &&
    mouseX > zombieX &&
    mouseX < zombieX + zombieWidth &&
    mouseY > zombieY &&
    mouseY < zombieY + zombieHeight
  ){
    zombieAlive = false;
    zombiesLive -= 1;
  }
}
```

# Pasquale's Favorite
Pasquale Gallo = My favorite function has to be the reload function. Although it seems super simple we actually had to work hard on it especially because it goes hand and hand with the fire function. Choosing and adding the music was also a blast as well as hearing the final result.
```js
function reload(){
  if(keyIsPressed && key === 'r'){
    mag = 10;
    startPlayMusic2.setVolume(0.5);
    startPlayMusic2.play();
  }
} 
```