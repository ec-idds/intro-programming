/* globals loadImage createCanvas background keyIsPressed key width fill rect triangle image print collidePointEllipse ellipse */
var syringe;
var hit = false;
var playerX = 200;
var playerY = 650;
var target1X = 200;
var target2X = 200;
var target3X = 200;
var target4X = 200;
var target1Hit = false;
var target2Hit = false;
var target3Hit = false;
var target4Hit = false;
var hitCountA = 1;
var hitCountB = 1;
var hitCountC = 1;
var hitCountD = 1;
let projectilesX = [];
let projectilesY = [];
var i;


//Sprite assets are preloaded for later use
function preload () {
  syringe = loadImage('Syringe2.png');
  corona1 = loadImage('Viron2.png');
  corona2 = loadImage('Viron3.png');
  corona3 = loadImage('Viron4.png');
  corona4 = loadImage('Viron5.png');
  playermodel = loadImage('PlayerMediRobot.png')
  backdrop1 = loadImage('Background.png')
}

function setup () {
  createCanvas(400, 700);
}
//  Shooting controls, which add new data to the projectile coordinate arrays through mouse events
function mousePressed () {
  projectilesX.unshift(playerX);
  projectilesY.unshift(playerY);
}

function draw () {
  background(65);
  // Hit detection flags targets as destroyed
  image(backdrop1,0,0);
  // Player movement controls and player entity are handled in this section
  if (keyIsPressed) {
    if (key === 'ArrowLeft') {
      playerX = playerX - 2;
    }
    if (key === 'ArrowRight') {
      playerX = playerX + 2;
    }
  }
  if (playerX > width) {
    playerX = 0;
  }
  if (playerX < 0) {
    playerX = width;
  }

  // This for loop contains projectile spawning, movement, and hit detection tools from the collide2d library. Projectiles which leave the canvas are automatically deleted to save system resources.

  for (var i = 0; i < projectilesX.length; i++) {
    ellipse(projectilesX[i]+15, projectilesY[i],5,5);
    image(syringe, projectilesX[i]-85, projectilesY[i]-75);
    projectilesY[i] -= 7;
    if (projectilesY[i] <= 0) {
      projectilesX.pop();
      projectilesY.pop();
      print(projectilesY.length);
    }
    target1Hit = collidePointEllipse(projectilesX[i], projectilesY[i], target1X - 20, 50, 60, 60);
    print('colliding? ' + target1Hit);
    target2Hit = collidePointEllipse(projectilesX[i], projectilesY[i], target2X - 20, 150, 60, 60);
    print('colliding? ' + target2Hit);
    target3Hit = collidePointEllipse(projectilesX[i], projectilesY[i], target3X - 20, 250, 60, 60);
    print('colliding? ' + target3Hit);
    target4Hit = collidePointEllipse(projectilesX[i], projectilesY[i], target4X - 20, 350, 60, 60);
    print('colliding? ' + target4Hit);

    if (target1Hit === true) {
      hitCountA = hitCountA + 1;
    }
    if (target2Hit === true) {
      hitCountB = hitCountB + 1;
    }
    if (target3Hit === true) {
      hitCountC = hitCountC + 1;
    }
    if (target4Hit === true) {
      hitCountD = hitCountD + 1;
    }
  }
  // Moving targets. Hitcount variables are used to track which targets have been destroyed
  if (hitCountA < 2) {
    ellipse(target1X, 50, 40, 40);
    image(corona1, target1X-40, 15);
    if (target1X > width) {
      target1X = 0;
    }
    target1X = target1X + 5;
  }

  if (hitCountB < 2) {
    ellipse(target2X, 150, 40, 35);
    image(corona2,target2X-45,115)
    if (target2X > width) {
      target2X = 0;
    }
    target2X = target2X + 4;
  }

  if (hitCountC < 2) {
    ellipse(target3X, 250, 40, 40);
    image(corona3, target3X-40, 215);
    if (target3X > width) {
      target3X = 3;
    }
    target3X = target3X + 3;
  }
  if (hitCountD < 2) {
    ellipse(target4X, 350, 40, 40);
    image(corona4,target4X-40,315)
    if (target4X > width) {
      target4X = 3;
    }
    target4X = target4X + 2;
  }
  image(playermodel, playerX-25, playerY-50);
}
