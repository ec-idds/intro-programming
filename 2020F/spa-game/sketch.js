const spa = {
  image: {},
  draw: function () {
    image(this.image, 0, 0);
  }
};
const woman = {
  image: {},
  draw: function () {
    image(this.image, 55, 74);
  }
};
const brush = {
  x: 0,
  y: 0,
  offsetX: 0,
  offsetY: 0,
  image: {},
  pickUp: false,
  maskEllipses: [],
  // this function is located in every object to check if an object has been picked up
  checkPickup: function () {
    if (mouseX > this.x && mouseX < this.x + 50 &&
        mouseY > this.y && mouseY < this.y + 50) {
      this.pickUp = true;
      this.offsetX = mouseX - this.x;
      this.offsetY = mouseY - this.y;
    } else {
      this.pickUp = false;
    }
    return this.pickUp;
  },
  // this function is in every object to draw the image uploaded for it
  draw: function () {
    image(this.image, this.x, this.y);
  },
  // this function is in every object to update the coordinates to match the cursor and allow the dragging of objects
  dragged: function () {
    if (this.pickUp === true) {
      this.x = mouseX - this.offsetX;
      this.y = mouseY - this.offsetY;
      this.mask();
    }
  },
  // this function is in every object to release an object from dragging with mouse when not pressed
  released: function () {
    this.pickUp = false;
  },

  // This array has one element per line to draw the ellipses used in the face mask
  mask: function () {
    this.maskEllipses.push([this.x, this.y, 10]);
  }
};

// cucumber uses the same four functions in brush
const cucumber = {
  x: 70,
  y: 0,
  offsetX: 0,
  offsetY: 0,
  image: {},
  pickUp: false,
  checkPickup: function () {
    if (mouseX > this.x && mouseX < this.x + 50 &&
        mouseY > this.y && mouseY < this.y + 50) {
      this.pickUp = true;
      this.offsetX = mouseX - this.x;
      this.offsetY = mouseY - this.y;
    } else {
      this.pickUp = false;
    }
    return this.pickUp;
  },
  draw: function () {
    image(this.image, this.x, this.y);
  },
  dragged: function () {
    if (this.pickUp === true) {
      this.x = mouseX - this.offsetX;
      this.y = mouseY - this.offsetY;
    }
  },
  // these if-statements control the snap function that snaps cucmber in place on the left eye
  released: function () {
    if (this.pickUp && mouseX > 160 && mouseX < 220 && mouseY > 155 && mouseY < 215) {
      this.x = 165;
      this.y = 164;
    }
    if (this.pickUp && mouseX > 60 && mouseX < 130 && mouseY > 0 && mouseY < 70) {
      this.x = 70;
      this.y = 0;
    }
    this.pickUp = false;
  }
};

// cucumber2 has the same functions in cucumber
const cucumber2 = {
  x: 120,
  y: 0,
  offsetX: 0,
  offsetY: 0,
  image: {},
  pickUp: false,
  checkPickup: function () {
    if (mouseX > this.x && mouseX < this.x + 50 &&
       mouseY > this.y && mouseY < this.y + 50) {
      this.pickUp = true;
      this.offsetX = mouseX - this.x;
      this.offsetY = mouseY - this.y;
    } else {
      this.pickUp = false;
    }
    return this.pickUp;
  },
  draw: function () {
    image(this.image, this.x, this.y);
  },
  dragged: function () {
    if (this.pickUp === true) {
      this.x = mouseX - this.offsetX;
      this.y = mouseY - this.offsetY;
    }
  },
  // cucumber2 uses the snap function but has different coordinates to snap onto the right eye
  released: function () {
    if (this.pickUp && mouseX > 225 && mouseX < 285 && mouseY > 155 && mouseY < 215) { // what are these numbers?
      this.x = 227;
      this.y = 165;
    }
    if (this.pickUp && mouseX > 115 && mouseX < 190 && mouseY > 0 && mouseY < 70) {
      this.x = 120;
      this.y = 0;
    }
    this.pickUp = false;
  }
};

// towel had the 4 functions in brush but includes more
const towel = {
  x: 400,
  y: 0,
  w: 70,
  h: 100,
  offsetX: 0,
  offsetY: 0,
  image: {},
  pickUp: false,
  pimple1: [200, 150, 5],
  pimple1Erase: false,
  pimple2: [250, 130, 3],
  pimple2Erase: false,
  pimple3: [230, 180, 3],
  pimple3Erase: false,
  pimple4: [260, 220, 2],
  pimple4Erase: false,
  checkPickup: function () {
    if (mouseX > this.x && mouseX < this.x + this.w &&
       mouseY > this.y && mouseY < this.y + this.h) {
      this.pickUp = true;
      this.offsetX = mouseX - this.x;
      this.offsetY = mouseY - this.y;
    } else {
      this.pickUp = false;
    }
    return this.pickUp;
  },
  draw: function () {
    image(this.image, this.x, this.y, this.w, this.h);
  },
  dragged: function () {
    if (this.pickUp === true) {
      this.x = mouseX - this.offsetX;
      this.y = mouseY - this.offsetY;
      // checking to see if towel coordinates collide with ellipse coordinates of face mask which are found using findIdex and brush.maskEllipses array
      const toErase = brush.maskEllipses.findIndex(function (currentValue) {
        return collideRectCircle(this.x, this.y, this.w, this.h, currentValue[0], currentValue[1], currentValue[2]);
      }, this);
      print(toErase);
      // uses the value from the the function above in toErase to trigger an if-statement that removes elements from brush.maksEllipses array
      if (toErase !== -1) {
        brush.maskEllipses.splice(toErase, 1);
      }
      // these 4 functions use their own variable that works the same way as toErase to check and run if-statements
      const pimple1Erase = collideRectCircle(this.x, this.y, this.w, this.y, this.pimple1[0], this.pimple1[1], this.pimple1[2], true);
      if (pimple1Erase === true) {
        this.pimple1.splice(pimple1Erase, 1);
      }
      const pimple2Erase = collideRectCircle(this.x, this.y, this.w, this.y, this.pimple2[0], this.pimple2[1], this.pimple2[2], true);
      if (pimple2Erase === true) {
        this.pimple2.splice(pimple2Erase, 1);
      }
      const pimple3Erase = collideRectCircle(this.x, this.y, this.w, this.y, this.pimple3[0], this.pimple3[1], this.pimple3[2], true);
      if (pimple3Erase === true) {
        this.pimple3.splice(pimple3Erase, 1);
      }
      const pimple4Erase = collideRectCircle(this.x, this.y, this.w, this.y, this.pimple4[0], this.pimple4[1], this.pimple4[2], true);
      if (pimple4Erase === true) {
        this.pimple4.splice(pimple4Erase, 1);
      }
    }
  },
  released: function () {
    this.pickUp = false;
  }
};
// loading all of my images for my sprites
function preload () {
  spa.image = loadImage('spa.jpg');
  woman.image = loadImage('woman.png');
  brush.image = loadImage('brush.png');
  cucumber.image = loadImage('cucumber.png');
  cucumber2.image = loadImage('cucumber2.png');
  towel.image = loadImage('towel.png');
}

function setup () {
  createCanvas(500, 380);
}

function draw () {
  // drawing the background
  spa.draw();
  woman.draw();
  // drawing the pimples/blemishes
  strokeWeight(5);
  stroke(233, 150, 122);
  ellipse(towel.pimple1[0], towel.pimple1[1], towel.pimple1[2]);
  ellipse(towel.pimple2[0], towel.pimple2[1], towel.pimple2[2]);
  ellipse(towel.pimple3[0], towel.pimple3[1], towel.pimple3[2]);
  ellipse(towel.pimple4[0], towel.pimple4[1], towel.pimple4[2]);
  // drawing the face mask
  strokeWeight(10);
  stroke('green');
  for (let i = 0; i < brush.maskEllipses.length; i++) {
    const curEllipse = brush.maskEllipses[i];
    ellipse(curEllipse[0], curEllipse[1], curEllipse[2]);
  }
  // drawing the image for my sprites
  towel.draw();
  cucumber.draw();
  cucumber2.draw();
  brush.draw();
  noStroke();
}
// checking to see if an object has been pressed on
function mousePressed () {
  const gotAny = brush.checkPickup() || cucumber.checkPickup() || cucumber2.checkPickup() || towel.checkPickup(); // neat trick here- if any of these return false, it won't run the subsequent ones!
  print('picked anything up: ', gotAny);
}
// dragging the objects
function mouseDragged () {
  brush.dragged();
  cucumber.dragged();
  cucumber2.dragged();
  towel.dragged();
}
// releasing the objects
function mouseReleased () {
  brush.released();
  cucumber.released();
  cucumber2.released();
  towel.released();
}
