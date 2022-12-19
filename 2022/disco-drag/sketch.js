/******************************************************************************
 * Final 
 * Samuel Zdon <zdons@emmanuel.edu> and Patience Kassini <kassinip@emmanuel.edu>
 * 26 September 2022
 *****************************************************************************/


let garments = [];

class Garment { // Create a class
  constructor(image, x, y, w, h) { // Class constructor
    this.image = image;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.active = false;
  }
  draw() {
    image(this.image, this.x, this.y, this.w, this.h);
  }
  mousePressed() {
    if(mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.active = true;
      this.offsetX = mouseX - this.x; //offset so this will select the image where pressed without shifting
      this.offsetY = mouseY - this.y;
      return false;
    }
    return true;
  }
  mouseDragged() {
    if(this.active) {
      this.x = mouseX - this.offsetX;
      this.y = mouseY - this.offsetY;
    }
  }
  mouseReleased() {
    this.active = false;
  }
}

function preload() {
  garments.push(new Garment(loadImage("rightlash.png"), 420, 45, 25, 25));
  garments.push(new Garment(loadImage("leftlash.png"), 370, 45, 25, 25));
  garments.push(new Garment(loadImage("eyebrows1.png"), 350, 12, 60, 10));
  garments.push(new Garment(loadImage("eyebrows2.png"), 410, 10, 70, 20));
  garments.push(new Garment(loadImage("glossylips.png"), 386, 70, 40, 25));
  garments.push(new Garment(loadImage("redlips.png"), 380, 100, 50, 25));
  garments.push(new Garment(loadImage("leftlegboot.png"), 370, 135, 32, 140));
  garments.push(new Garment(loadImage("rightlegboot.png"), 410, 135, 32, 140));
  garments.push(new Garment(loadImage("whiteboot.png"), 420, 300, 45, 65));
  garments.push(new Garment(loadImage("whiteboot2.png"), 370, 300, 45, 65));
  garments.push(new Garment(loadImage("bodysuit.png"), 510, 130, 110, 140));
  garments.push(new Garment(loadImage("elegantgown.png"), 680, 350, 200, 250));
  garments.push(new Garment(loadImage("blackdress.png"), 500, 400, 200, 130));
  garments.push(new Garment(loadImage("braids.png"), 680, 10, 230, 300));
  garments.push(new Garment(loadImage("pinkwig.png"), 560, 10, 150, 100));
  garments.push(new Garment(loadImage("trixiewig.png"), 250, 400, 220, 200));
}
    let angle = 0.0;
      let angleDirection = 1;
      let speed = 0.040;

function setup() {
  createCanvas(900, 600);
}

function draw() {
  background('purple');
  if(keyIsPressed === true) {
    if(keyCode === 32)
      for(let x = 10; x < width; x += 20) {
        strokeWeight(0.1);
        stroke('white');
        for(let y = 10; y < height; y += 20) {
          line(x, y, width / 2, height / 2);
        }
        strokeWeight(0.1);
        stroke('white');
      }
  }

  strokeWeight(1);
  stroke('black');
  //neck
  fill('tan');
  rect(193, 140, 18, 30);

  // head
  fill('tan'); // skin tone
  circle(200, 100, 100); // head size
  fill('white');
  circle(180, 95, 15); // left eye
  fill('black');
  circle(180, 95, 5); // left pupil
  fill('white');
  circle(220, 95, 15); // right eye
  fill('black');
  circle(220, 95, 5); // right pupil

  // left leg
  fill('tan');
  rect(180, 250, 12, 100, 50);

  // right leg
  fill('tan');
  rect(212, 250, 12, 100, 50)

  // body
  fill('tan');
  rect(168, 160, 68, 100, 20);

  for(let garment of garments) {
    garment.draw();
  }

strokeWeight(1);
  stroke('black');
  //left arm
stroke ('tan');
  strokeWeight(10);
  line (170,163,100, 120);

  //right arm
  function rightArm () {
  translate(240, 175); // Move to start position rotate(angle);
        stroke('tan');
        strokeWeight(12);
        translate(0, 0);
         if(keyIsPressed === true) {
          if(keyCode === 32)
          rotate(angle * 0.5);
         } 
        strokeWeight(10);
        line(0, 0, 40, 0);
        stroke('tan');
        translate(40, 0); // Move to next joint
        if(keyIsPressed === true) {
          if(keyCode === 32)
          rotate(angle * 4.5);
         }
        strokeWeight(10);
        line(0, 0, -30, 0);
        stroke('tan');
       angle += speed * angleDirection;
       if((angle > QUARTER_PI) || (angle < 0)) {
         angleDirection *= -1;
       }
       }
       rightArm(0,0);
}
function mousePressed() {
  let keepGoing = true;
  for(let i = garments.length - 1; i >= 0 && keepGoing; i--) {
    keepGoing = garments[i].mousePressed();
  }
}

function mouseDragged() {
  for(let garment of garments) {
    garment.mouseDragged();
  }
}

function mouseReleased() {
  for(let garment of garments) {
    garment.mouseReleased();
  }
}