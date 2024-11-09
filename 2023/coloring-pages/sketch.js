/*******************************************************************************
 * Coloring Pages
 * Introduction to Programming Final Project
 * Created By:
 * - Jacob Proulx <proulxj@emmanuel.edu>
 * - Nikholas Srnka <srnkan@emmanuel.edu>
 * December 15th, 2023
 ******************************************************************************/

let display = 0;
let tool = "";
let toolColor = "";
let slider = 0;
let colorMemory = [];

function setup() {
  createCanvas(500, 500);
  slider = createSlider(5, 30); // Controls tool size.

  for(let i = 0; i < colorMemory.length; i++) { // Initializes user's stroke memory.
    colorMemory[i] = {
      x: 0,
      y: 0,
      color: "",
      selectedTool: "",
      size: 0,
    };
  }
}

function drawHouse() {
  noFill();
  strokeWeight(3);
  rect(10, 50, 235, 440);
  translate(10, 20);
  //house frame
  rect(35, 255, 165, 155);
  //chimney
  line(180, 191, 180, 140);
  line(150, 165, 150, 140);
  rect(140, 125, 50, 15);
  line(150, 150, 180, 150);
  line(180, 160, 150, 160);
  line(180, 170, 154, 170);
  line(180, 180, 165, 180);
  line(160, 140, 160, 150);
  line(165, 150, 165, 160);
  line(170, 160, 170, 170);
  line(165, 170, 165, 180);
  //smoke
  arc(150, 105, 20, 40, PI / 2, 3 * PI / 2);
  arc(165, 70, 50, 40, 3 * PI / 4, 3 * PI / 2);
  arc(180, 105, 20, 40, 3 * PI / 2, PI / 2);
  arc(200, 85, 40, 20, 0, PI);
  arc(185, 50, 40, 20, PI, 0);
  arc(210, 70, 40, 40, 4 * PI / 3, PI / 3);
  //roof
  line(5, 240, 115, 135);
  line(115, 135, 230, 240);
  line(25, 240, 115, 155);
  line(115, 155, 210, 240);
  line(5, 240, 230, 240);
  //glass window on roof
  line(95, 210, 95, 240);
  line(135, 210, 135, 240);
  arc(115, 210, 40, 40, PI, 0);
  line(105, 220, 105, 240);
  line(125, 220, 125, 240);
  arc(115, 220, 20, 20, PI, 0);
  line(95, 220, 105, 220);
  line(125, 220, 135, 220);
  line(115, 210, 115, 190);
  //under roof and under house
  rect(20, 240, 195, 15);
  rect(20, 410, 195, 15);
  //door
  rect(140, 300, 45, 110);
  rect(135, 290, 55, 10);
  //door knob
  ellipse(147, 360, 5, 5);
  //window
  rect(47.5, 317.5, 75, 57.5);
  rect(55, 325, 60, 50);
  line(75, 325, 75, 363);
  line(95, 325, 95, 363);
  line(55, 350, 115, 350);
  //bushes in front of window
  for(let i = 0; i < 4; i++) {
    arc(63 + i * 15, 375, 15, 25, PI, 0);
  }
  //window sill
  rect(45, 375, 80, 10);
  //grass
  line(0, 425, 235, 425);
  //walkway
  arc(130, 425, 20, 20, 0, PI / 2);
  arc(150, 425, 70, 70, 0, PI / 2);
  line(130, 435, 70, 435);
  line(150, 460, 95, 460);
  arc(95, 470, 20, 20, PI + 0.1, 3 * PI / 2);
  arc(70, 465, 60, 60, PI, 3 * PI / 2);
  line(40, 460, 40, 470);
  ellipse(148, 435, 20, 20);
  ellipse(161, 448, 15, 15);
  ellipse(133, 450, 20, 20);
  ellipse(116, 444, 15, 15);
  ellipse(96, 445, 20, 20);
  ellipse(66, 458, 20, 20);
  ellipse(48, 462, 14, 14);
  ellipse(80, 464, 10, 10);
  ellipse(82, 454, 11, 11);
  ellipse(80, 442, 10, 10);
  ellipse(68, 442, 12, 12);
  ellipse(51, 450, 11, 11);
  ellipse(58, 444, 7, 7);
  ellipse(90, 457, 5, 5);
  ellipse(57, 467, 5, 5);
  ellipse(108, 454, 10, 10);
  ellipse(98, 457, 5, 5);
  ellipse(118, 455, 8, 8);
  ellipse(107, 438, 5, 5);
  ellipse(125, 438, 6, 6);
  ellipse(134, 437, 6.5, 6.5);
  ellipse(148.5, 453, 12.5, 12.5);
  ellipse(148.5, 453, 12.5, 12.5);
  ellipse(166, 433, 14, 14);
  ellipse(178, 432, 10, 10);
  ellipse(175, 442, 9, 9);
  ellipse(171, 449, 5, 5);
  //horizon
  line(0, 220, 25, 220);
  line(210, 220, 235, 220);
  //mountains
  line(0, 180, 8, 162);
  line(8, 162, 15, 157);
  line(5, 147, 15, 157);
  line(15, 157, 30, 150);
  line(20, 130, 57, 187);
  line(0, 150, 20, 130);
  line(39, 115, 55, 127);
  line(55, 127, 71, 118);
  line(71, 118, 93, 127);
  line(89, 99, 105, 109);
  line(105, 109, 124, 99);
  line(40, 160, 53, 150);
  line(53, 150, 50, 140);
  line(50, 140, 55, 126);
  line(69, 86, 39, 114);
  line(39, 114, 36, 129);
  line(36, 129, 26, 139);
  line(69, 86, 94, 127);
  line(190, 125, 213, 166);
  line(213, 166, 204, 184);
  line(204, 184, 235, 207);
  line(77, 120, 70, 135);
  line(70, 135, 86, 144);
  line(86, 144, 92, 156);
  line(76, 137, 93, 128);
  line(93, 128, 105, 109);
  line(124, 99, 139, 106);
  line(196, 134, 226, 147);
  line(92, 90, 84, 111);
  line(92, 90, 110, 70);
  line(110, 70, 130, 110);
  line(130, 110, 142, 117);
  line(142, 117, 140, 125);
  line(115, 80, 130, 80);
  line(130, 80, 141, 96);
  line(140, 158, 150, 140);
  line(190, 95, 235, 160);
  //sun
  angleMode(DEGREES);
  translate(35, 65);
  for(let i = 0; i < 18; i++) {
    beginShape();
    vertex(20, -5);
    vertex(30, 0);
    vertex(20, 5);
    vertex(20, -5);
    endShape();
    rotate(20);
  }
  angleMode(RADIANS);
  translate(-35, -65);
  translate(-10, -20);
}

function drawTeddy() {
  noFill();
  strokeWeight(3);
  rect(255, 50, 235, 440);
  push();
  translate(255 + 235 / 2, 320);
  //belly
  ellipse(0, 10, 100, 130);
  //body
  ellipse(0, 0, 150, 200);
  translate(88, -70);
  //right hand
  ellipse(0, 0, 50, 85);
  ellipse(0, 0, 30, 50);
  ellipse(0, -33, 6);
  ellipse(-10, -30, 6);
  ellipse(10, -30, 6);
  translate(-176, 0);
  //left hand
  ellipse(0, 0, 50, 85);
  ellipse(0, 0, 30, 50);
  ellipse(0, -33, 6);
  ellipse(-10, -30, 6);
  ellipse(10, -30, 6);
  translate(0, 140);
  //left foot
  ellipse(0, 0, 50, 85);
  ellipse(0, 0, 30, 50);
  ellipse(0, -33, 6);
  ellipse(-10, -30, 6);
  ellipse(10, -30, 6);
  translate(176, 0);
  //right foot
  ellipse(0, 0, 50, 85);
  ellipse(0, 0, 30, 50);
  ellipse(0, -33, 6);
  ellipse(-10, -30, 6);
  ellipse(10, -30, 6);
  translate(-88, -220);
  //face
  translate(-15, -8);
  ellipse(0, 0, 15, 15);
  ellipse(0, 0, 5, 5);
  translate(30, 0);
  ellipse(0, 0, 15, 15);
  ellipse(0, 0, 5, 5);
  translate(0, 35);
  ellipse(0, -5, 30, 30);
  translate(-30, 0);
  ellipse(0, -5, 30, 30);
  translate(15, -25);
  ellipse(0, 0, 20, 10);
  arc(0, 36, 20, 10, -1 * PI / 10, 11 * PI / 10);
  arc(0, 30, 20, 10, 1 * PI / 8, 7 * PI / 8);
  //right ear
  translate(65, -52);
  push();
  rotate(PI / 4);
  ellipse(0, 0, 50, 40);
  ellipse(0, 0, 30, 20);
  pop();
  line(-7, 26, 4, 23);
  //left ear
  translate(-129, -2);
  rotate(-PI / 4);
  ellipse(0, 0, 50, 40);
  ellipse(0, 0, 30, 20);
  line(-20, 13, -15, 23);
  pop();
  //arms
  line(275, 290, 298, 305);
  line(295, 210, 328, 240);
  line(450, 210, 419, 240);
  line(470, 290, 446, 305);
  line(290, 432, 330, 404);
  line(298, 340, 283, 347);
  line(413, 404, 453, 431);
  line(461, 347, 446, 343);
  push();
  translate(372, 240);
  //bowtie
  ellipse(0, 8, 20, 20);
  beginShape();
  vertex(10, 8);
  vertex(30, -5);
  vertex(30, 25);
  vertex(10, 8);
  endShape();
  beginShape();
  vertex(-10, 8);
  vertex(-30, 25);
  vertex(-30, -5);
  vertex(-10, 9);
  endShape();
  translate(-20, -45);
  //hair follicules
  line(0, 0, 1, 0);
  translate(10, 0);
  line(0, 0, 1, 0);
  translate(-5, 5);
  line(0, 0, 1, 0);
  pop();
  push();
  translate(392, 195);
  line(0, 0, 1, 0);
  translate(-10, 0);
  line(0, 0, 1, 0);
  translate(5, 5);
  line(0, 0, 1, 0);
  //neck
  translate(-45, 13);
  line(0, 0, 0, 15);
  translate(62, 0);
  line(0, 0, 0, 15);
  pop();
  //top hat
  arc(372, 120, 80, 50, -1 * PI / 6, 7 * PI / 6);
  arc(372, 120, 55, 30, 0, PI);
  line(344, 120, 344, 90);
  line(400, 120, 400, 90);
  arc(372, 110, 55, 30, 0, PI);
  ellipse(372, 90, 55, 30);
  //head
  arc(372, 163, 120, 110, -1 * PI / 4, 5 * PI / 4);
  //horizon
  line(255, 320, 295, 320);
  line(450, 320, 488, 320);
  //rug
  arc(372.5, 403, 230, 170, -1 * PI / 30, 31 * PI / 30);
  line(370, 423, 370, 475);
  line(337, 409, 299, 451);
  line(405, 411, 446, 451);
  arc(372.5, 405, 170, 100, 1 * PI / 10, 9 * PI / 10);
  arc(372.5, 397, 120, 70, 1 * PI / 10, 10 * PI / 11);
  arc(372.5, 401, 205, 150, 1 * PI / 10, 9 * PI / 10);
}

function drawControls() {
  textSize(15);
  fill("black");
  stroke("black");
  textFont("Georgia");
  strokeWeight(0.5);
  text("Choose a Color!", 73, 70);
  // red button
  fill("red");
  strokeWeight(1.5);
  rect(30, 85, 40, 40);
  // orange button
  fill("orange");
  rect(80, 85, 40, 40);
  // yellow button
  fill("yellow");
  rect(130, 85, 40, 40);
  // green button
  fill("green");
  rect(180, 85, 40, 40);
  // blue button
  fill("blue");
  rect(60, 135, 40, 40);
  // purple button
  fill("purple");
  rect(110, 135, 40, 40);
  // pink button
  fill("pink");
  rect(160, 135, 40, 40);
  // black button
  fill("black");
  rect(30, 185, 40, 40);
  // brown button
  fill("brown");
  rect(80, 185, 40, 40);
  // tan button
  fill("tan");
  rect(130, 185, 40, 40);
  // grey button
  fill("grey");
  rect(180, 185, 40, 40);
  fill(240);
  textSize(15);
  fill("black");
  textFont("Georgia");
  strokeWeight(0.5);
  text("Choose a Tool Size!", 60, 270);
  // slider sizes
  fill("white");
  strokeWeight(1.5);
  ellipse(42, 290, 5);
  ellipse(217, 290, 30);
  textSize(15);
  fill("black");
  textFont("Georgia");
  strokeWeight(0.5);
  text("Choose a Tool!", 80, 335);
  fill(240);
  rect(20, 350, 60, 60);
  rect(100, 350, 60, 60);
  rect(180, 350, 60, 60);
  // paint brush button
  strokeWeight(1.5);
  push();
  translate(55, 385);
  fill("brown");
  rotate(PI / 4);
  ellipse(0, 0, 30, 10);
  pop();
  push();
  translate(45, 375);
  fill("tan");
  ellipse(0, 0, 15, 15);
  fill(toolColor);
  beginShape();
  vertex(-8, 0);
  vertex(-8, -9);
  vertex(0, -8);
  vertex(-8, 0);
  endShape();
  pop();
  // pencil button
  push();
  translate(125, 365);
  fill(toolColor);
  rotate(PI / 4);
  rect(0, 0, 35, 15);
  pop();
  fill("tan");
  push();
  translate(124, 375);
  beginShape();
  vertex(-10, 0);
  vertex(-10, -10);
  vertex(0, -10);
  vertex(-10, 0);
  endShape();
  fill(toolColor);
  beginShape();
  vertex(-10, -5);
  vertex(-10, -10);
  vertex(-5, -10);
  vertex(-10, -5);
  endShape();
  pop();
  // eraser button
  push();
  translate(193, 373);
  fill("pink");
  rect(0, 0, 40, 20);
  beginShape();
  vertex(0, 0);
  vertex(-5, -5);
  vertex(-5, 15);
  vertex(0, 20);
  vertex(0, 0);
  endShape();
  beginShape();
  vertex(-5, -5);
  vertex(35, -5);
  vertex(40, 0);
  vertex(0, 0);
  vertex(-5, -5);
  endShape();
  pop();
}

function draw() {
  if(display === 0) { // Start up display
    background(220);
    fill("white");
    strokeWeight(3);
    rect(10, 50, 235, 440);
    rect(255, 50, 235, 440);
    noStroke();
    textSize(25);
    fill("black");
    textFont("Georgia");
    text("Click On The Picture You'd Like To Paint!", 20, 35);
    fill("white");
    strokeWeight(3);
    stroke("black");
    drawTeddy();
    drawHouse();
    slider.position(1000, 1000);
  }
  if(display === 1) { // House drawing display
    background(220);
    fill(255);
    strokeWeight(3);
    rect(10, 50, 235, 440);
    noStroke();
    if(tool === "paintBrush" || tool === "pencil" || tool === "eraser") { // Stores user's stroke inputs...
      if(mouseIsPressed && mouseX > 25 && mouseX < 267 && mouseY > 68 && mouseY < 520) { // ... while mouse is pressed on top of blank drawing.
        colorMemory.push({
          x: mouseX,
          y: mouseY,
          color: toolColor,
          selectedTool: tool,
          size: slider.value(),
        });
      }
    }
    for(let i = 1; i < colorMemory.length; i++) { // Draws user's stored stroke inputs.
      let pos = colorMemory[i]; // Redefines array name to include [i].
      if(pos.selectedTool === "paintBrush") {
        fill(pos.color);
      }
      if(pos.selectedTool === "pencil") { // If a pencil is used, the stroke will have a lower alpha value.  
        if(pos.color === "red") {
          fill(254, 1, 0, 25);
        }
        if(pos.color === "orange") {
          fill(255, 165, 0, 25);
        }
        if(pos.color === "yellow") {
          fill(255, 255, 0, 25);
        }
        if(pos.color === "green") {
          fill(0, 128, 0, 25);
        }
        if(pos.color === "blue") {
          fill(0, 0, 254, 25);
        }
        if(pos.color === "purple") {
          fill(128, 0, 127, 25);
        }
        if(pos.color === "pink") {
          fill(255, 191, 203, 25);
        }
        if(pos.color === "black") {
          fill(0, 0, 0, 25);
        }
        if(pos.color === "brown") {
          fill(165, 41, 42, 25);
        }
        if(pos.color === "tan") {
          fill(210, 180, 140, 25);
        }
        if(pos.color === "grey") {
          fill(128, 128, 128, 25);
        }
      }
      if(pos.selectedTool === "pencil") {
        ellipse(pos.x - 10, pos.y - 10, pos.size); // Alterates position values to match mouse icon's placement.
      }
      if(pos.selectedTool === "paintBrush") {
        ellipse(pos.x - 17, pos.y - 18, pos.size);
      }
      if(pos.selectedTool === "eraser") {
        fill("white");
        ellipse(pos.x - 6, pos.y - 6, pos.size);
      }
    }
    stroke("black");
    strokeWeight(3);
    drawHouse(); // Draws house drawing on top of strokes to maintain design.
    noStroke();
    fill(220);
    rect(0, 0, 8.5, 500); // Draws left border so user cannot color off page.
    rect(0, 491.5, 255, 20); // Draws bottom border so user cannot color off page.
    rect(246.5, 40, 20, 470); // Draws right border so user cannot color off page.
    rect(0, 40, 250, 8.5); // Draws top border so user cannot color off page.
    strokeWeight(3);
    line(10, 50, 10, 490);
    line(10, 490, 245, 490);
    line(245, 490, 245, 50);
    line(10, 50, 245, 50);
    rect(0, 0, 500, 45);
    push();
    translate(240, 0);
    fill("black");
    strokeWeight(3);
    drawControls();
    slider.position(297, 280);
    pop();
    textSize(25);
    fill("black");
    textFont("Georgia");
    text("Enjoy Coloring!", 165, 35);
    textSize(10);
    textFont("Georgia");
    strokeWeight(2);
    fill("black");
    // Creator's citation
    text("Created by Jacob Proulx and", 305, 440);
    text("Nikholas Srnka as a", 327, 450);
    text("Final Project for Emmanuel", 308, 460);
    text("College's Introduction to", 315, 470);
    text("Programming class.", 325, 480);
  }
  if(display === 2) { // Teddy bear drawing display
    background(220);
    fill("white");
    strokeWeight(3);
    rect(255, 50, 235, 440);
    noStroke();
    if(tool === "paintBrush" || tool === "pencil" || tool === "eraser") { // Stores user's stroke inputs...
      if(mouseIsPressed && mouseX > 267 && mouseX < 515 && mouseY > 63 && mouseY < 520) { //... while mouse is pressed on top of blank drawing.
        colorMemory.push({
          x: mouseX,
          y: mouseY,
          color: toolColor,
          selectedTool: tool,
          size: slider.value(),
        });
      }
    }
    for(let i = 1; i < colorMemory.length; i++) {
      let pos = colorMemory[i]; // Redefines array name to include [i].
      if(pos.selectedTool === "paintBrush") {
        fill(pos.color);
      }
      if(pos.selectedTool === "pencil") { // If a pencil is used, the stroke will have a lower alpha value.  
        if(pos.color === "red") {
          fill(254, 1, 0, 25);
        }
        if(pos.color === "orange") {
          fill(255, 165, 0, 25);
        }
        if(pos.color === "yellow") {
          fill(255, 255, 0, 25);
        }
        if(pos.color === "green") {
          fill(0, 128, 0, 25);
        }
        if(pos.color === "blue") {
          fill(0, 0, 254, 25);
        }
        if(pos.color === "purple") {
          fill(128, 0, 127, 25);
        }
        if(pos.color === "pink") {
          fill(255, 191, 203, 25);
        }
        if(pos.color === "black") {
          fill(0, 0, 0, 25);
        }
        if(pos.color === "brown") {
          fill(165, 41, 42, 25);
        }
        if(pos.color === "tan") {
          fill(210, 180, 140, 25);
        }
        if(pos.color === "grey") {
          fill(128, 128, 128, 25);
        }
      }
      if(pos.selectedTool === "pencil") {
        ellipse(pos.x - 10, pos.y - 10, pos.size); // Alterates position values to match mouse icon's placement.
      }
      if(pos.selectedTool === "paintBrush") {
        ellipse(pos.x - 17, pos.y - 18, pos.size);
      }
      if(pos.selectedTool === "eraser") {
        fill("white");
        ellipse(pos.x - 6, pos.y - 6, pos.size);
      }
    }
    fill(220);
    rect(235, 40, 18.5, 460); // Draws left border so user cannot color off page.
    rect(235, 490.5, 270, 10); // Draws bottom border so user cannot color off page.
    rect(490, 0, 10, 500); // Draws right border so user cannot color off page.
    rect(235, 0, 270, 50); // Draws top border so user cannot color off page.
    fill("black");
    textSize(25);
    textFont("Georgia");
    text("Have Fun Coloring!", 140, 35);
    stroke(1);
    strokeWeight(3);
    drawTeddy(); // Draws teddy bear on top of strokes to maintain design.
    drawControls();
    slider.position(57, 280);
    textSize(10);
    fill("black");
    text("Georgia");
    // Creator's citation
    strokeWeight(0.15);
    text("Created by Jacob Proulx and", 65, 440);
    text("Nikholas Srnka as a", 87, 450);
    text("Final Project for Emmanuel", 68, 460);
    text("College's Introduction to", 75, 470);
    text("Programming class.", 85, 480);
  }
  if(display === 0) {
    if(mouseIsPressed) {
      if(mouseX > 10 && mouseX < 245 && mouseY > 50 && mouseY < 490) {
        display = 1; // Chooses house drawing when mouse it pressed on it.
      }
      if(mouseX > 255 && mouseX < 490 && mouseY > 50 && mouseY < 490) {
        display = 2; // Chooses teddy bear drawing when mouse it pressed on it.
      }
    }
  }
  if(display === 1) {
    if(mouseIsPressed) {
      if(mouseX > 260 && mouseX < 320 && mouseY > 350 && mouseY < 410) {
        tool = "paintBrush"; // Chooses paint brush tool when mouse is pressed on button.
      }
    }
    if(mouseIsPressed) {
      if(mouseX > 340 && mouseX < 400 && mouseY > 350 && mouseY < 410) {
        tool = "pencil"; // Chooses pencil tool when mouse is pressed on button.
      }
    }
    if(mouseIsPressed) {
      if(mouseX > 420 && mouseX < 480 && mouseY > 350 && mouseY < 410) {
        tool = "eraser"; // Chooses eraser tool when mouse is pressed on button.
      }
    }
  }
  if(display === 2) {
    if(mouseIsPressed) {
      if(mouseX > 20 && mouseX < 80 && mouseY > 350 && mouseY < 410) {
        tool = "paintBrush";
      }
    }
    if(mouseIsPressed) {
      if(mouseX > 100 && mouseX < 160 && mouseY > 350 && mouseY < 410) {
        tool = "pencil";
      }
    }
    if(mouseIsPressed) {
      if(mouseX > 180 && mouseX < 240 && mouseY > 350 && mouseY < 410) {
        tool = "eraser";
      }
    }
  }
  if(tool === "paintBrush") { // Draws paint brush icon over mouse.
    push();
    translate(mouseX, mouseY);
    if(toolColor === "") {
      strokeWeight(1.5);
    } else {
      noStroke();
    }
    fill(toolColor);
    ellipse(-17, -18, slider.value());
    stroke(1);
    strokeWeight(1.5);
    fill("brown");
    rotate(PI / 4);
    ellipse(0, 0, 30, 10);
    translate(-13, 0);
    rotate(-PI / 4);
    if(toolColor === "black") {
      stroke("white");
    }
    fill("tan");
    ellipse(0, 0, 15, 15);
    fill(toolColor);
    beginShape();
    vertex(-8, 0);
    vertex(-8, -9);
    vertex(0, -8);
    vertex(-8, 0);
    endShape();
    pop();
  }
  if(tool === "pencil") { // Draws pencil icon over mouse.
    push();
    strokeWeight(1.5);
    translate(mouseX, mouseY - 10);
    if(toolColor === "red") {
      fill(254, 1, 0, 25);
    }
    if(toolColor === "orange") {
      fill(255, 165, 0, 25);
    }
    if(toolColor === "yellow") {
      fill(255, 255, 0, 25);
    }
    if(toolColor === "green") {
      fill(0, 128, 0, 25);
    }
    if(toolColor === "blue") {
      fill(0, 0, 254, 25);
    }
    if(toolColor === "purple") {
      fill(128, 0, 127, 25);
    }
    if(toolColor === "pink") {
      fill(255, 191, 203, 25);
    }
    if(toolColor === "black") {
      fill(0, 0, 0, 25);
    }
    if(toolColor === "brown") {
      fill(165, 41, 42, 25);
    }
    if(toolColor === "tan") {
      fill(210, 180, 140, 25);
    }
    if(toolColor === "grey") {
      fill(128, 128, 128, 25);
    }
    if(toolColor === "") {
      fill("white");
    } else {
      noStroke();
    }
    ellipse(-11, -1, slider.value());
    stroke(1);
    strokeWeight(1.5);
    rotate(PI / 4);
    fill(toolColor);
    rect(0, 0, 35, 15);
    fill("tan");
    translate(6, 7);
    rotate(-PI / 4);
    beginShape();
    vertex(-10, 0);
    vertex(-10, -10);
    vertex(0, -10);
    vertex(-10, 0);
    endShape();
    fill(toolColor);
    beginShape();
    vertex(-10, -5);
    vertex(-10, -10);
    vertex(-5, -10);
    vertex(-10, -5);
    endShape();
    pop();
  }
  if(tool === "eraser") { // Draws eraser icon over mouse.
    push();
    translate(mouseX, mouseY);
    fill("white");
    noStroke();
    ellipse(-6, -6, slider.value());
    fill("pink");
    stroke(1);
    strokeWeight(1.5);
    rect(0, 0, 40, 20);
    beginShape();
    vertex(0, 0);
    vertex(-5, -5);
    vertex(-5, 15);
    vertex(0, 20);
    vertex(0, 0);
    endShape();
    beginShape();
    vertex(-5, -5);
    vertex(35, -5);
    vertex(40, 0);
    vertex(0, 0);
    vertex(-5, -5);
    endShape();
    pop();
  }
  if(display === 1) { // Controls color selection buttons for house drawing.
    if(mouseIsPressed) {
      if(mouseX > 270 && mouseX < 310 && mouseY > 85 && mouseY < 125) {
        toolColor = "red";
      }
      if(mouseX > 320 && mouseX < 360 && mouseY > 85 && mouseY < 125) {
        toolColor = "orange";
      }
      if(mouseX > 370 && mouseX < 410 && mouseY > 85 && mouseY < 125) {
        toolColor = "yellow";
      }
      if(mouseX > 420 && mouseX < 460 && mouseY > 85 && mouseY < 125) {
        toolColor = "green";
      }
      if(mouseX > 300 && mouseX < 350 && mouseY > 135 && mouseY < 175) {
        toolColor = "blue";
      }
      if(mouseX > 360 && mouseX < 400 && mouseY > 135 && mouseY < 175) {
        toolColor = "purple";
      }
      if(mouseX > 410 && mouseX < 450 && mouseY > 135 && mouseY < 175) {
        toolColor = "pink";
      }
      if(mouseX > 270 && mouseX < 310 && mouseY > 185 && mouseY < 225) {
        toolColor = "black";
      }
      if(mouseX > 320 && mouseX < 360 && mouseY > 185 && mouseY < 225) {
        toolColor = "brown";
      }
      if(mouseX > 370 && mouseX < 410 && mouseY > 185 && mouseY < 225) {
        toolColor = "tan";
      }
      if(mouseX > 420 && mouseX < 460 && mouseY > 185 && mouseY < 225) {
        toolColor = "grey";
      }
    }
  }
  if(display === 2) { // Controls color selection buttons for teddy bear drawing.
    if(mouseIsPressed) {
      if(mouseX > 30 && mouseX < 70 && mouseY > 85 && mouseY < 125) {
        toolColor = "red";
      }
      if(mouseX > 80 && mouseX < 120 && mouseY > 85 && mouseY < 125) {
        toolColor = "orange";
      }
      if(mouseX > 130 && mouseX < 170 && mouseY > 85 && mouseY < 125) {
        toolColor = "yellow";
      }
      if(mouseX > 180 && mouseX < 220 && mouseY > 85 && mouseY < 125) {
        toolColor = "green";
      }
      if(mouseX > 60 && mouseX < 100 && mouseY > 135 && mouseY < 175) {
        toolColor = "blue";
      }
      if(mouseX > 110 && mouseX < 150 && mouseY > 135 && mouseY < 175) {
        toolColor = "purple";
      }
      if(mouseX > 160 && mouseX < 200 && mouseY > 135 && mouseY < 175) {
        toolColor = "pink";
      }
      if(mouseX > 30 && mouseX < 70 && mouseY > 185 && mouseY < 225) {
        toolColor = "black";
      }
      if(mouseX > 80 && mouseX < 120 && mouseY > 185 && mouseY < 225) {
        toolColor = "brown";
      }
      if(mouseX > 130 && mouseX < 170 && mouseY > 185 && mouseY < 225) {
        toolColor = "tan";
      }
      if(mouseX > 180 && mouseX < 220 && mouseY > 185 && mouseY < 225) {
        toolColor = "grey";
      }
    }
  }
}