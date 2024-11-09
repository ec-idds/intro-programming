/*******************************************
 * F0: Assignment
 * Elijah Baron, Victoria Branch
 * <barone@emmanuel.edu, branchv@emmanuel.edu>
 * 10 December 2023
 ******************************************/

let cloudRotateSpeed1 = 1;
let cloudRotateSpeed2 = 1;
let rotateGroundSpeed1 = 0.1;
let rotateGroundSpeed2 = 0.1;
let rotateGroundSpeed3 = 0.1;
let rotateGroundSpeed4 = 0.1;
let rotatePlanetSlider;
let picture;
let cloudImage;
let planetSize;
let planetValue;
let planetNameInput;
let planetDescriptionInput;
let waterColorPicker;
let islandColorPicker;
let cloudButtonOn;
let cloudButtonOff;
let cloudButton = true;
let rotateButtonOn;
let rotateButtonOff;
let rotateButton = false;

function preload() {
  picture = loadImage("Image/background.jpg");
  cloudImage = loadImage("Image/clouds.png");
}

// col: a color returned from colorPicker.color()
// alpha: a new alpha value to set, 0-255
function changeAlpha(col, alpha) {
  return color([red(col), green(col), blue(col), alpha]);
}

function setup() {
  createCanvas(1000, 800);
  textFont('TimesNewRoman');
  //for all resizeable shapes on the planet including the circle itself use "planetValue" for size of shape
  planetSize = createSlider(250, 450, 450, 50);
  planetSize.position(650, 240);
  planetSize.style('width', '320px');
  // planetSize.style('background-color:rgb(255,0,0)');

  //rotates planet
  rotatePlanetSlider = createSlider(-325, 875, 250, 75);
  rotatePlanetSlider.position(650, 315);
  rotatePlanetSlider.style('width', '320px');

  //allows user to name planet
  planetNameInput = createInput();
  planetNameInput.size(320, 30);
  planetNameInput.position(648, 83);
  planetNameInput.style('background-color:rgb(211, 202, 147, 200)');
  // allows user to describe planet
  planetDescriptionInput = createInput();
  planetDescriptionInput.size(320, 30);
  planetDescriptionInput.position(648, 157);
  planetDescriptionInput.style('background-color:rgb(211, 202, 147, 200)');
  //base water color picker
  waterColorPicker = createColorPicker('blue');
  waterColorPicker.position(772, 352);
  //island color picker
  islandColorPicker = createColorPicker('green');
  islandColorPicker.position(882, 352);
  //Cloud on/off button
  cloudButtonOn = createButton('ON');
  cloudButtonOn.position(800, 390);
  cloudButtonOff = createButton('OFF');
  cloudButtonOff.position(900, 390);
  //Rotate Button
  rotateButtonOn = createButton('ON');
  rotateButtonOn.position(865, 425);
  rotateButtonOff = createButton('OFF');
  rotateButtonOff.position(915, 425);
}

let planet = {
  x: 300,
  y: 400,
  water: function() {
    push();
    let c = waterColorPicker.color();
    c = changeAlpha(c, 255);
    fill(c);
    ellipse(this.x, this.y, planetValue);
    pop();
  },
  clouds: function() {
    if(cloudButton === false) {
      push();
      beginClip();
      ellipse(this.x, this.y, planetValue);
      endClip();
      if(planetSize.value() === 350) {
        cloudImage.resize(0, 200);
      }
      tint(255, 255, 255, 170);
      cloudRotateSpeed1 = cloudRotateSpeed1 - 1;
      cloudRotateSpeed2 = cloudRotateSpeed2 - 1;
      image(cloudImage, cloudRotateSpeed1, 150, 400, 300);
      image(cloudImage, cloudRotateSpeed2 + 150, 375, 400, 300);
    }
    cloudButtonOff.mousePressed(() => {
      cloudButton = true;
    });
    cloudButtonOn.mousePressed(() => {
      cloudButton = false;
    });
    if(cloudRotateSpeed1 < -291) {
      cloudRotateSpeed1 = 500;
      cloudRotateSpeed1 = cloudRotateSpeed1 - random(0.3, 1);
    }
    if(cloudRotateSpeed2 < -410) {
      cloudRotateSpeed2 = 350;
      cloudRotateSpeed2 = cloudRotateSpeed2 - random(0.4, 1);
    }
    pop();
  },
  ground_1: function() {
    noStroke();
    fill(islandColorPicker.color());
    push();
    beginClip(); //anything between here and endClip defines the clipping area
    ellipse(this.x, this.y, planetValue);
    endClip();
    if(rotatePlanetSlider.value() > 425) {
      //went off the right side, cycle to the left
      translate(-175 - planetValue, 0);
    }
    if(rotatePlanetSlider.value() < -200) {
      //went off the left side, cycle to the right      
      translate(570, 0);
    }

    translate(100 + rotatePlanetSlider.value(), 290);
    //Rotate Button Functions
    rotateButtonOff.mousePressed(() => {
      rotateButton = false;
      rotateGroundSpeed1 = rotateGroundSpeed1 - rotateGroundSpeed1;
    });
    rotateButtonOn.mousePressed(() => {
      translate(rotateGroundSpeed1 - rotateGroundSpeed1, 0);
      rotateButton = true;
    });
    if(rotateButton === true) {
      rotatePlanetSlider.value(275);
      rotateGroundSpeed1 = rotateGroundSpeed1 + 1;
      translate(0 + rotateGroundSpeed1, 0);
    }
    if(rotateGroundSpeed1 > 130) {
      rotateGroundSpeed1 = rotateGroundSpeed1 - rotateGroundSpeed1;
      rotateGroundSpeed1 = -500;
    }

    //island coords
    beginShape();
    curveVertex(77, 135);
    curveVertex(96, 139);
    curveVertex(111, 129);
    curveVertex(114, 110);
    curveVertex(137, 96);
    curveVertex(160, 97);
    curveVertex(161, 74);
    curveVertex(149, 59);
    curveVertex(138, 53);
    curveVertex(124, 38);
    curveVertex(105, 39);
    curveVertex(83, 48);
    curveVertex(50, 48);
    curveVertex(34, 42);
    curveVertex(20, 53);
    curveVertex(19, 74);
    curveVertex(25, 101);
    curveVertex(16, 119);
    curveVertex(27, 120);
    curveVertex(40, 112);
    curveVertex(54, 138);
    curveVertex(66, 133);
    endShape(CLOSE);
    pop();
  },

  ground_2: function() {
    noStroke();
    fill(islandColorPicker.color());
    push();
    beginClip(); //anything between here and endClip defines the clipping area
    ellipse(this.x, this.y, planetValue);
    endClip();
    if(rotatePlanetSlider.value() > 675) {
      translate(-165 - planetValue, -15);
    }
    if(rotatePlanetSlider.value() < 75) {
      translate(575, -15);
    }
    translate(-180 + rotatePlanetSlider.value(), 200);

    rotateButtonOff.mousePressed(() => {
      rotateButton = false;
      rotateGroundSpeed2 = rotateGroundSpeed2 - rotateGroundSpeed2;
    });
    rotateButtonOn.mousePressed(() => {
      rotateButton = true;
    });
    if(rotateButton === true) {
      translate(rotateGroundSpeed2 - rotateGroundSpeed2, 0);
      rotatePlanetSlider.value(275);
      rotateGroundSpeed2 = rotateGroundSpeed2 + 1;
      translate(0 + rotateGroundSpeed2, 0);
    }
    if(rotateGroundSpeed2 > 400) {
      rotateGroundSpeed2 = rotateGroundSpeed1 - 50;
    }

    beginShape();
    curveVertex(124, 159);
    curveVertex(103, 150);
    curveVertex(89, 136);
    curveVertex(60, 134);
    curveVertex(22, 124);
    curveVertex(17, 89);
    curveVertex(23, 55);
    curveVertex(33, 27);
    curveVertex(65, 9);
    curveVertex(93, 25);
    curveVertex(105, 56);
    curveVertex(129, 86);
    curveVertex(154, 88);
    curveVertex(184, 81);
    curveVertex(151, 169);
    endShape(CLOSE);
    pop();
  },

  ground_3: function() {

    noStroke();
    fill(islandColorPicker.color());
    push();
    beginClip(); //anything between here and endClip defines the clipping area
    ellipse(this.x, this.y, planetValue);
    endClip();
    if(rotatePlanetSlider.value() > 650) {
      translate(-625, 0);
    }
    if(rotatePlanetSlider.value() < -75) {
      translate(575, 0);
    }
    translate(-200 + rotatePlanetSlider.value(), 400);

    rotateButtonOff.mousePressed(() => {
      rotateButton = false;
      rotateGroundSpeed3 = rotateGroundSpeed3 - rotateGroundSpeed3;
    });
    rotateButtonOn.mousePressed(() => {
      rotateButton = true;
    });
    if(rotateButton === true) {
      translate(rotateGroundSpeed3 - rotateGroundSpeed3, 0);
      rotatePlanetSlider.value(275);
      rotateGroundSpeed3 = rotateGroundSpeed3 + 1;
      translate(0 + rotateGroundSpeed3, 0);
    }
    if(rotateGroundSpeed3 > 400) {
      rotateGroundSpeed3 = rotateGroundSpeed2 - 50;
    }

    beginShape();
    curveVertex(55, 242);
    curveVertex(75, 289);
    curveVertex(121, 291);
    curveVertex(164, 251);
    curveVertex(236, 235);
    curveVertex(278, 210);
    curveVertex(302, 183);
    curveVertex(290, 121);
    curveVertex(261, 75);
    curveVertex(208, 31);
    curveVertex(156, 38);
    curveVertex(114, 75);
    curveVertex(60, 69);
    curveVertex(26, 90);
    curveVertex(23, 138);
    curveVertex(67, 167);
    curveVertex(59, 213);
    endShape();
    pop();
  },

  ground_4: function() {
    noStroke();
    fill(islandColorPicker.color());
    push();
    beginClip(); //anything between here and endClip defines the clipping area
    ellipse(this.x, this.y, planetValue);
    endClip();
    if(rotatePlanetSlider.value() > 350) {
      translate(-630, 0);
    }
    if(rotatePlanetSlider.value() < -50) {
      translate(570, 0);
    }
    translate(68 + rotatePlanetSlider.value(), 125);

    rotateButtonOff.mousePressed(() => {
      rotateButton = false;
      rotateGroundSpeed4 = rotateGroundSpeed4 - rotateGroundSpeed4;
    });
    rotateButtonOn.mousePressed(() => {
      rotateButton = true;
    });
    if(rotateButton === true) {
      translate(rotateGroundSpeed4 - rotateGroundSpeed4, 0);
      rotatePlanetSlider.value(275);
      rotateGroundSpeed4 = rotateGroundSpeed4 + 1;
      translate(0 + rotateGroundSpeed4, 0);
    }
    if(rotateGroundSpeed4 > 200) {
      rotateGroundSpeed4 = rotateGroundSpeed1 - 100;
    }

    beginShape();
    curveVertex(45, 109);
    curveVertex(35, 100);
    curveVertex(26, 88);
    curveVertex(24, 75);
    curveVertex(28, 58);
    curveVertex(39, 48);
    curveVertex(54, 47);
    curveVertex(69, 50);
    curveVertex(74, 65);
    curveVertex(79, 80);
    curveVertex(87, 81);
    curveVertex(94, 78);
    curveVertex(100, 69);
    curveVertex(106, 58);
    curveVertex(114, 53);
    curveVertex(127, 56);
    curveVertex(130, 68);
    curveVertex(128, 78);
    curveVertex(121, 88);
    curveVertex(114, 100);
    curveVertex(108, 117);
    curveVertex(98, 128);
    curveVertex(85, 128);
    curveVertex(76, 122);
    curveVertex(69, 114);
    curveVertex(55, 112);
    endShape();
    pop();
  },
};

let controlPanel = {
  x: 0,
  y: 0,
  name: function nameBox() {
    push();
    noStroke();
    fill(211, 202, 147, 200);
    rect(650, 50, 325, 30); // top box
    fill(0);
    textSize(24);
    text("PLANET NAME:", 650, 75);
    pop();
  },

  planetDetails: function planetDescription() {
    push();
    noStroke();
    fill(211, 202, 147, 200);
    rect(650, 125, 325, 30); //top box
    fill(0);
    textSize(24);
    text("PLANET DESCRIPTION:", 650, 150);
    pop();
  },
  planetSize: function sizePlanet() {
    push();
    noStroke();
    fill(211, 202, 147, 200);
    rect(650, 200, 325, 30);
    rect(650, 235, 325, 30);
    fill(0);
    textSize(24);
    text("PLANET SIZE:", 650, 225);
    pop();
  },
  planetRotate: function rotatePlanet() {
    push();
    noStroke();
    fill(211, 202, 147, 200);
    rect(650, 275, 325, 30);
    rect(650, 310, 325, 30);
    fill(0);
    textSize(24);
    text("ROTATE PLANET:", 650, 300);
    pop();
  },
  cloudMenu: function cloudPanel() {
    push();
    noStroke();
    fill(211, 202, 147, 200);
    rect(650, 385, 325, 30);
    fill(0);
    textSize(24);
    text("CLOUDS:", 650, 410);
    pop();
  },
  colorHeaderMenu: function colorMenuSection() {
    push();
    noStroke();
    fill(211, 202, 147, 200);
    rect(650, 350, 325, 30);
    fill(0);
    textSize(24);
    text("COLORS:", 650, 375);
    pop();
  },
  rotateOption: function rotateToggleButtons() {
    push();
    noStroke();
    fill(211, 202, 147, 200);
    rect(650, 420, 325, 30);
    fill(0);
    textSize(24);
    text("ROTATE TOGGLE:", 650, 444);
    pop();
  },
};

function draw() {
  background(picture);
  planet.water();
  planet.ground_1();
  planet.ground_2();
  planet.ground_3();
  planet.ground_4();
  planet.clouds();
  controlPanel.name();
  controlPanel.planetDetails();
  controlPanel.planetSize();
  planetValue = planetSize.value();
  controlPanel.planetRotate();
  controlPanel.colorHeaderMenu();
  controlPanel.cloudMenu();
  controlPanel.rotateOption();
  push();
  fill(255);
  textSize(30);
  //centers inputs for planet name to the top and planet description to the bottom of canvas
  textAlign(CENTER);
  text(planetNameInput.value(), planet.x, planet.y - 300);
  text(planetDescriptionInput.value(), planet.x, planet.y + 300);
  fill(0);
  //displays value of planet size and degree of rotation
  textSize(24);
  text(planetSize.value(), 830, 225);
  text(rotatePlanetSlider.value(), 870, 300);
  pop();
}