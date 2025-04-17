/*******************************************
 * A0: Assignment
 * Willson Lin, Pasquale Gallo <linw@emmanuel.edu gallop@emmanuel.edu>
 * 26 January 2024
 ******************************************/

let canvasX = 700;
let canvasY = 500;
let backLay1;
let backLay2;
let gunAni = [];
let zombAni = [];
let frame = 1;
let isShooting = false;
let frameZ = 1;
let mag = 10;
let shoot = false;
let startButton;
let restartButton;
let gameStarted = false;
let zombieX = 215;
let zombieY = 255;
let zombieX2 = 250;
let zombieY2 = 290;
let zombieX3 = 185;
let zombieY3 = 310;
let zombieX4 = 310;
let zombieY4 = 330;
let zombieFrameRate = 10;
let zombieWidth = 50; 
let zombieHeight = 50; 
let zombieWidth2 = 50; 
let zombieHeight2 = 50; 
let zombieWidth3 = 50; 
let zombieHeight3 = 50; 
let zombieWidth4 = 50; 
let zombieHeight4 = 50; 
let zombieAlive = true;    
let zombieAlive2 = true;
let zombieAlive3 = true;
let zombieAlive4 = true;
let zombiesLive = 4;
let elapsedTime = 0;
let timeOn = true;




function preload() {
  backLay1 = loadImage("Background/back.png");
  backLay2 = loadImage("Background/foreground-empty.png");
  for(let i = 1; i <= 5; i++) {
    gunAni[i] = loadImage(`gunSprites/gun${i}.png`);
  }
  for(let j = 1; j <= 7; j++) {
    zombAni[j] = loadImage(`zombies/zomb${j}.png`);
  }
  startPlayMusic1 = loadSound("Sound/gunShot.wav");
  startPlayMusic2 = loadSound("Sound/reload.mp3");
}

function setup() {
  createCanvas(canvasX, canvasY);

  startButton = createButton('Slay the ZOMBIEZ');
  startButton.position(260, 220);
  startButton.mousePressed(startGame);

  restartButton = createButton('Restart');
  restartButton.position(210, 300);
  restartButton.hide();
  restartButton.mousePressed(restartGame);



}



function restartGame() {
  gameStarted = false;
  restartButton.hide();
  startButton.show();

}



function startGame() {
  gameStarted = true;
  startButton.hide();
   noCursor();

}

function endGame() {
  cursor();
  timeOn = false;
  createCanvas(canvasX, canvasY);
    background(0);
    fill('palegreen');
    textSize(32);
    text("Game Over", 250, 200);
    fill('palegreen');
    textSize(28);
    text("Your time Was = " + elapsedTime + "s", 220, 400);

}




function fire(){
  if(mouseIsPressed &&  mag <= 10 && mag > 0 && !shoot) {
    isShooting = true;
    mag -= 1;
    shoot = true;
    startPlayMusic1.setVolume(0.5);
    startPlayMusic1.play();
  }
  if(!mouseIsPressed){
  shoot = false;
}
}


function reload(){
  if(keyIsPressed && key === 'r'){
    mag = 10;
    startPlayMusic2.setVolume(0.5);
    startPlayMusic2.play();
  }
}



function drawZombie(){

  if(zombieAlive){
  image(zombAni[frameZ], zombieX, zombieY, zombieWidth,zombieHeight);
  
  if(frameCount % zombieFrameRate === 0){
    frameZ += 1;
    if(frameZ > 7){
      frameZ = 1;
    }
  }
  
}
  if(zombieAlive2){
  image(zombAni[frameZ], zombieX2, zombieY2, zombieWidth2,zombieHeight2);
 
  
  if(frameCount % zombieFrameRate === 0){
    frameZ += 1;
    if(frameZ > 7){
      frameZ = 1;
    }
  }
  
}
  if(zombieAlive3){
  image(zombAni[frameZ], zombieX3, zombieY3, zombieWidth3,zombieHeight3);
  
  
  if(frameCount % zombieFrameRate === 0){
    frameZ += 1;
    if(frameZ > 7){
      frameZ = 1;
    }
  }
  
}
if(zombieAlive4){
  image(zombAni[frameZ], zombieX4, zombieY4, zombieWidth4,zombieHeight4);
  
  if(frameCount % zombieFrameRate === 0){
    frameZ += 1;
    if(frameZ > 7){
      frameZ = 1;
    }
  }
  
}
}

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
   if(
    zombieAlive2 &&
    mouseX > zombieX2 &&
    mouseX < zombieX2 + zombieWidth2 &&
    mouseY > zombieY2 &&
    mouseY < zombieY2 + zombieHeight2
  ){
    zombieAlive2 = false;
    zombiesLive -= 1;
  }
  if(
    zombieAlive3 &&
    mouseX > zombieX3 &&
    mouseX < zombieX3 + zombieWidth3 &&
    mouseY > zombieY3 &&
    mouseY < zombieY3 + zombieHeight3
  ){
    zombieAlive3 = false;
    zombiesLive -= 1;
  }
  if(
    zombieAlive4 &&
    mouseX > zombieX4 &&
    mouseX < zombieX4 + zombieWidth4 &&
    mouseY > zombieY4 &&
    mouseY < zombieY4 + zombieHeight4
  ){
    zombieAlive4 = false;
    zombiesLive -= 1;
  }
}


function draw() {
  if(!gameStarted) {
    background(0);
    textSize(32);
    fill('palegreen');
    text("Speedy Kill", 250, 200);
    
    textSize(25);
    fill('palegreen');
    text("Kill all 4 zombies as fast as you can", 150, 400);

    return;
  }

  if (frameCount % 60 === 0 && timeOn === true) { 
    elapsedTime += 1; // Increment time every 60 frames
  }
  background(0);
  image(backLay1, 0, 50, 700, 400);
  image(backLay2, 0, 50, 700, 400);
  fill("white");
  textSize(20);
  text('ammo = ' + mag, 200, 90);
  text('ZL = ' + zombiesLive, 300, 90);
  fill("white");
  textSize(20);
  text('Time: ' + elapsedTime + 's', 200, 150);
  

  fire();
  reload();


  drawZombie(100,100);

  
  ellipse(mouseX, mouseY, 5,5);



  if(isShooting === true) {
    frame = frame + 1;
    if(frame > 5) {
      isShooting = false;
      frame = 1;
    }
    image(gunAni[frame], 350, 300, 200, 200);

  }

  if(zombiesLive === 0){
    endGame();
  }


}