 /*🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉
  🎉Final Project: CUP PONG										    🎉
  🎉AJ Godios <godiosa@emmanuel.edu>,							🎉
  🎉Gabby Serra <serrag@emmanuel.edu>,						🎉
  🎉Michaela Mailea <maileam@emmanuel.edu>	      🎉
  🎉December 15th, 2023											      🎉
  🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉*/

 let x, y, w, h;
 let empty;
 let page = 0; // to create pages 
 let regularPong; //for regular pong button
 let crazyPong; // for crazy pong button
 let rerackDiamond; //for rereack in regular pong mode - diamond shape 
 let rerackTriangle; //for rerack in regular pong mode - triangle shape
 let sliderX; //ball slider 
 let cup1;
 let cup2;
 let cup3;
 let cup4;
 let cup5;
 let cup6;
 let cup7;
 let cup8;
 let cup9;
 let cup10;
 let strength;
 let resetBall;
 let mark;
 let pongBall;
 let cupB = [];
 let cupBtriangle = [];
 let cupBdiamond =[];
 let cup1B, cup2B, cup3B, cup4B;
 let cup1C, cup2C, cup3C;

 function preload() {
   mark = loadImage('sherman.png');
 }

 function pongTable() {
   fill('MediumSeaGreen');
   strokeWeight(4);
   stroke('white');
   quad(5, 690, 85, 200, 415, 200, 495, 690);
   strokeWeight(4);
   line(245, 690, 250, 200);
 }

 function ballStart() {
  pongBall.x = 300;
  pongBall.y = 675;
  pongBall.display();
 }

 function cupA(x, y) {
   let cup1x = 145;
   let cup1y = 200;
   w = 50;
   h = w / 3;
   empty = cup1y * 1.4;

   push();
   translate(x - cup1x, y - cup1y);
   strokeWeight(4);
   stroke('GhostWhite');
   fill('Red');
   beginShape();
   vertex(cup1x - w / 2, empty - 70)
   vertex(cup1x - w * 1.35 / 2 + 1, cup1y - 70);
   vertex(cup1x + w * 1.35 / 2 - 1, cup1y - 70);
   vertex(cup1x + w / 2, empty - 70);
   endShape();
   arc(cup1x, empty - 70, w, h, 0, PI, OPEN);
   fill('black');
   ellipse(cup1x, cup1y - 70, w * 1.35, h * 1.35);
   pop();
 }

 function setup() {
   createCanvas(500, 700);
   regularPong = createButton('Regular Pong'); //create regular pong mode button (pg 1)
   regularPong.position(200, 350); //button position on the canvas
   regularPong.mousePressed(page1Setup);

   crazyPong = createButton('Crazy Pong!'); //create crazy pong mode button (pg 2)
   crazyPong.position(200, 350); //button position on the canvas
   crazyPong.mousePressed(page2Setup);  //this is still here because if it is not the code will break???

   rerackDiamond = createButton('Diamond Rerack'); // reg mode for users to rerack at 4 cups 
   rerackDiamond.mousePressed(page3Setup);

   rerackTriangle = createButton('Triangle Rerack'); // reg mode for users to rerack at 3 cups 
   rerackTriangle.mousePressed(page4Setup);

   sliderX = createSlider(22, 478); //slider for ball position across the table 
   sliderX.position(75, 600);
   sliderX.size(80);

   strength = createSlider(100, 350); //slider for ball strength - how far it will go 
   strength.position(375, 600);
   strength.size(80);
   strength.style("transform", "rotate(-90deg)");

   resetBall = createButton('Reset Ball');
   resetBall.position(50, 50);
   resetBall.mousePressed(ballStart);

   pongBall = new PongBall(300, 675, 30, color('GhostWhite'));

   cup1 = new Cup1 (145, 200, 50, color(255, 0, 0));
   cup2 = new Cup2 (215, 200, 50, color(255, 0, 0));
   cup3 = new Cup3 (285, 200, 50, color(255, 0, 0));
   cup4 = new Cup4 (355, 200, 50, color(255, 0, 0));
   cup5 = new Cup5 (180, 240, 50, color(255, 0, 0));
   cup6 = new Cup6 (250, 240, 50, color(255, 0, 0));
   cup7 = new Cup7 (320, 240, 50, color(255, 0, 0));
   cup8 = new Cup8 (210, 280, 50, color(255, 0, 0));
   cup9 = new Cup9 (280, 280, 50, color(255, 0, 0));
   cup10 = new Cup10 (245, 320, 50, color(255, 0, 0));
   cup1B = new Cup1B (250, 200, 50, color(255, 0,0));
   cup2B = new Cup2B (215, 240, 50, color(255, 0, 0));
   cup3B = new Cup3B (285, 240, 50, color(255, 0, 0));
   cup4B = new Cup4B (250, 280, 50, color(255, 0, 0));
   cup1C = new Cup1C (215, 200, 50, color(255, 0, 0));
   cup2C = new Cup2C (285, 200, 50, color(255, 0, 0));
   cup3C = new Cup3C (250, 240, 50, color(255, 0, 0));

 }

 function page0() {
   background('RebeccaPurple');
   rerackDiamond.hide();
   rerackTriangle.hide();
   sliderX.hide();
   strength.hide();
   resetBall.hide();
   crazyPong.hide();
 }

 function page1Setup() { //reg mode
   page = 1;// to make reg mode
   regularPong.hide();
   crazyPong.hide();
   rerackDiamond.show();
   rerackTriangle.show();
   sliderX.show();
   strength.show();
   resetBall.show();
   cupB = [
     {x: 145,y: 200},
     {x: 215,y: 200},
     {x: 285,y: 200},
     {x: 355,y: 200},
     {x: 180,y: 240},
     {x: 250,y: 240},
     {x: 320,y: 240},
     {x: 210,y: 280},
     {x: 280,y: 280},
     {x: 245,y: 320}
   ];
 }


 function page2Setup() { //crazy mode  
   pongTable(); // to make crazy mode
   regularPong.hide();
   crazyPong.hide();
   rerackDiamond.hide();
   rerackTriangle.hide();
 }
//this is still here because if it is not then the code will super break???
 function page3Setup() { //diamond rerack
   page = 3; // to make diamond rerack
   background('RebeccaPurple');
   regularPong.hide();
   crazyPong.hide();
   rerackDiamond.hide();
   rerackTriangle.hide();
   cupBdiamond = [
   {x: 250, y: 200},
   {x: 215, y: 240},
   {x: 285, y: 240},
   {x: 250, y: 280}];
 }


 function page4Setup() { //triangle rerack
   page = 4; // to make triangle rerack
   background('RebeccaPurple');
   regularPong.hide();
   crazyPong.hide();
   rerackDiamond.hide();
   rerackTriangle.hide();
   cupBtriangle = [
   {x: 215, y: 200},
   {x: 285, y: 200},
   {x: 250, y: 240}];
 }

 function page5Setup(){
  page = 5; //Game over 
  background('sherman.png');
  textSize(32);
  text('GAME OVER', 250, 350);
 }


 function draw() {
   
   if(page === 0) {
     page0();
   }

   if(page === 1) {
     background('RebeccaPurple');
     pongTable();
     sliderX.show();
     strength.show();
     rerackTriangle.show();
     rerackDiamond.show();

     if(cup1.contains(pongBall)) { //crash detection for the cups, each one has its own if else statement
       pongBall.reset();
       cup1.setVisible(false);
     } else {
       cup1.display();
     }
     if(cup2.contains(pongBall)) {
       pongBall.reset();
       cup2.setVisible(false);
     } else {
       cup2.display();
     }
     if(cup3.contains(pongBall)) {
       pongBall.reset();
       cup3.setVisible(false);
     } else {
       cup3.display();
     }
      if(cup4.contains(pongBall)) {
        pongBall.reset();
        cup4.setVisible(false);
     } else {
        cup4.display();
      }
      if(cup5.contains(pongBall)) {
        pongBall.reset();
        cup5.setVisible(false);
      } else {
        cup5.display();
      }
      if(cup6.contains(pongBall)) {
        pongBall.reset();
        cup6.setVisible(false);
      } else {
        cup6.display();
      }
      if(cup7.contains(pongBall)) {
       pongBall.reset();
        cup7.setVisible(false);
      } else {
        cup7.display();
      }
      if(cup8.contains(pongBall)) {
        pongBall.reset();
        cup8.setVisible(false);
      } else {
        cup8.display();
      }
      if(cup9.contains(pongBall)) {
        pongBall.reset();
       cup9.setVisible(false);
     } else {
       cup9.display();
     }
     if(cup10.contains(pongBall)) {
       pongBall.reset();
       cup10.setVisible(false);
     } else {
       cup10.display();
     }
     pongBall.update();
     pongBall.display();

    
    if(pongBall.x < 3 || pongBall.x > 697 || pongBall.y < 75){
      pongBall.reset();
    }
   }
   if(page === 3){
    background('RebeccaPurple');
    pongTable();
     if(cup1B.contains(pongBall)) { //crash detection for the cups in the diamon rerack
       pongBall.reset();
       cup1B.setVisible(false);
     } else {
       cup1B.display();
     }
   
    if(cup2B.contains(pongBall)) {
       pongBall.reset();
       cup2B.setVisible(false);
     } else {
       cup2B.display();
     }
      if(cup3B.contains(pongBall)) {
       pongBall.reset();
       cup3B.setVisible(false);
     } else {
       cup3B.display();
     }
      if(cup4B.contains(pongBall)) {
       pongBall.reset();
       cup4B.setVisible(false);
     } else {
       cup4B.display();
     }
     pongBall.update();
     pongBall.display();
   }

   if(page === 4){
     background('RebeccaPurple');
     pongTable();
     if(cup1C.contains(pongBall)) { //crash detection for the cups in the triangle rerack
       pongBall.reset(); 
       cup1C.setVisible(false);
     } else {
       cup1C.display();
     }
   
    if(cup2C.contains(pongBall)) {
       pongBall.reset();
       cup2C.setVisible(false);
     } else {
       cup2C.display();
     }
      if(cup3C.contains(pongBall)) {
       pongBall.reset();
       cup3C.setVisible(false);
     } else {
       cup3C.display();
     }
     pongBall.update();
     pongBall.display();
   }

   if(page === 5){ //Game over page 
    page5Setup(); 
   }

 }
 class Cup1 { //class to create the cup and have functional crash detection, each cup has its own class
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
       cupA(cupB[0].x, cupB[0].y); //pulls x and y from cupB array to draw the cups
     }
   }
   contains(pongBall) { //crash detection for the cup, has adjusted y so that it only detects at the top of the cup
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
 }

 class Cup2 {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
         cupA(cupB[1].x, cupB[1].y);
       }

     }
   
   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
 }
 class Cup3 {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
         cupA(cupB[2].x, cupB[2].y);
       }
   }

   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
 }

 class Cup4 {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
         cupA(cupB[3].x, cupB[3].y);
       }

     }
   

   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
 }

 class Cup5 {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
         cupA(cupB[4].x, cupB[4].y);

     }
   }

   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
 }

 class Cup6 {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
         cupA(cupB[5].x, cupB[5].y);
     }
   }

   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
 }

 class Cup7 {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
         cupA(cupB[6].x, cupB[6].y);
     }
   }

   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
 }

 class Cup8 {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
         cupA(cupB[7].x, cupB[7].y);
       }
     }

   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
 }

 class Cup9 {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
         cupA(cupB[8].x, cupB[8].y);
     }
     }
   

   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
 }
  class Cup10 {
    constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.visible = true;
    
  }

    display() {
     if (this.visible) {
        cupA(cupB[9].x, cupB[9].y);
      }


    }

 
  contains(pongBall) {
    let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
    return this.visible && d < this.size / 2;
  }
  setVisible(isVisible) {
    this.visible = isVisible;
  }
}

class Cup1B {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
         cupA(cupBdiamond[0].x, cupBdiamond[0].y);
       }
     }

   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
}

class Cup2B {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
         cupA(cupBdiamond[1].x, cupBdiamond[1].y);
       }
     }

   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
}

class Cup3B {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
         cupA(cupBdiamond[2].x, cupBdiamond[2].y);
       }
     }

   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
}

class Cup4B {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
         cupA(cupBdiamond[3].x, cupBdiamond[3].y);
       }
     }

   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
}

class Cup1C {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
         cupA(cupBtriangle[0].x, cupBtriangle[0].y);
       }
     }

   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
}

class Cup2C {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
         cupA(cupBtriangle[1].x, cupBtriangle[1].y);
       }
     }

   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
}

class Cup3C {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.visible = true;

   }

   display() {
     if(this.visible) {
         cupA(cupBtriangle[2].x, cupBtriangle[2].y);
       }
     }

   contains(pongBall) {
     let d = dist(sliderX.value(), pongBall.y, this.x, this.y - 100);
     return this.visible && d < this.size / 2;
   }
   setVisible(isVisible) {
     this.visible = isVisible;
   }
}

 class PongBall {
   constructor(x, y, size, color) {
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.speedX = 5;
     this.speedY = -5;
   }

   update() {
    if(keyIsPressed){ 
      if(keyCode === ENTER){//moves the ball continuously when enter is pressed
      pongBall.y = strength.value() - 75;
    }
    }
   }
   display() {
     fill(this.color);
     ellipse(sliderX.value(), this.y, this.size, this.size);
     image(mark, sliderX.value() - 15, this.y - 15, this.size, this.size);
   }
   reset() {
     this.x = 300;
     this.y = 675;
   }
 }
