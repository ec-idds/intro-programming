/* Final Project: Space Invaders
 * by Conor Coleman <colemanc2@emmanuel.edu>
 * May 9, 2020
 */
 var player;
 var enemy;
 var surface;
 var win = false;
 var laserSpeed = 4;
 var laserSize = 10;
 let lasers = [];
 var playerx;
 var playery;
 var enemies = [];
 var r = 10;

 function preload () {
   surface = loadImage('spaceinvaders.jpg');
   player = loadImage('player.png');
   enemy = loadImage('enemy4.png');
 }

 function setup () {
   createCanvas(400, 400);
   playerx = 200;
   playery = 337;

   for (let i = 0; i <= width; i = i + 80) {
     for (let j = 0; j <= 120; j = j + 50) {
       enemies.push(makeFlyingObject(i, j));
     }
   }
   print(enemies);
 }

 function draw () {
   background(surface);

   for (let i = 0; i < enemies.length; i++) { // Enemies
     const currentEnemey = enemies[i];
     if (currentEnemey.show === true) {
       image(enemy, currentEnemey.x, currentEnemey.y);
     }
   }

   if (keyIsPressed) {
     if (key === 'ArrowLeft') { // Player Movement
       playerx -= 2;
     }
     if (key === 'ArrowRight') {
       playerx += 2;
     }
   }
   playerx = constrain(playerx, -2, 320);

   noStroke();
   image(player, playerx, playery);

   // lasers
   stroke('red');
   strokeWeight(4);
   for (let i = 0; i < lasers.length; i++) {
     const laser = lasers[i];
    line(laser.x, laser.y -= laserSpeed, laser.x, (laser.y + laserSize) - laserSpeed);
//if (laser.y<0) { remove lasers once they leave canvas
// lasers.{shift};
     }
   }
// }

 function keyPressed () {
   if (keyCode === 32) {
     lasers.push(makeFlyingObject(playerx + 41, playery)); //center of the ship
   }
 }
/*  let d = dist(laser.x, laser.y, currentEnemy.x, currentEnemy.y);
if (d <= r) {
currentEnemy===false;
}
if (enemies.length == 0) {
  win = true;
*/
 // if (win) {
 //   fill('white');
 //   textSize(35);
 //   text('You Win!', 60, 60);
 // }

 function makeFlyingObject (x, y) {
   return { x: x, y: y, show: true };
 }
