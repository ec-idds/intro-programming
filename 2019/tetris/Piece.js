
/* globals fill rect width */

var tetrisO0 = {
  color: [255, 200, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
    rect(x + 25, y + 25, this.size, this.size);
  }
};
var tetrisI0 = {
  color: [0, 255, 255],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x, y - 25, this.size, this.size);
    rect(x, y - 50, this.size, this.size);
  }
};
var tetrisT0 = {
  color: [160, 0, 255],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
    rect(x - 25, y, this.size, this.size);
  }
};
var tetrisL0 = {
  color: [0, 0, 255],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x, y - 25, this.size, this.size);
    rect(x + 25, y + 25, this.size, this.size);
  }
};
var tetrisJ0 = {
  color: [230, 130, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x, y - 25, this.size, this.size);
    rect(x - 25, y + 25, this.size, this.size);
  }
};
var tetrisS0 = {
  color: [0, 200, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
    rect(x - 25, y + 25, this.size, this.size);
  }
};
var tetrisZ0 = {
  color: [255, 0, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x - 25, y, this.size, this.size);
    rect(x + 25, y + 25, this.size, this.size);
  }
};

var tetrominos0 = [tetrisO0, tetrisI0, tetrisT0, tetrisL0, tetrisJ0, tetrisS0, tetrisZ0];

//roation for 90 degrees clockwise or 270 degrees counterclockwise
var tetrisO1 = {
  color: [255, 200, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
    rect(x + 25, y + 25, this.size, this.size);
  }
};
var tetrisI1 = {
  color: [0, 255, 255],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x + 25, y , this.size, this.size);
    rect(x - 25, y , this.size, this.size);
    rect(x - 50, y , this.size, this.size);
  }
};
var tetrisT1 = {
  color: [160, 0, 255],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x , y - 25, this.size, this.size);
    rect(x - 25, y, this.size, this.size);
  }
};
var tetrisL1 = {
  color: [0, 0, 255],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
    rect(x - 25, y, this.size, this.size);
    rect(x - 25, y + 25, this.size, this.size);
  }
};
var tetrisJ1 = {
  color: [230, 130, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
    rect(x - 25, y, this.size, this.size);
    rect(x - 25, y - 25, this.size, this.size);
  }
};
var tetrisS1 = {
  color: [0, 200, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x - 25, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x - 25, y - 25, this.size, this.size);
  }
};
var tetrisZ1 = {
  color: [255, 0, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x - 25, y, this.size, this.size);
    rect(x - 25, y + 25, this.size, this.size);
    rect(x, y - 25, this.size, this.size);
  }
};

var tetrominos1 = [tetrisO1, tetrisI1, tetrisT1, tetrisL1, tetrisJ1, tetrisS1, tetrisZ1];

//rotation for 180 degrees
var tetrisO2 = {
  color: [255, 200, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
    rect(x + 25, y + 25, this.size, this.size);
  }
};
var tetrisI2 = {
  color: [0, 255, 255],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x, y - 25, this.size, this.size);
    rect(x, y - 50, this.size, this.size);
  }
};
var tetrisT2 = {
  color: [160, 0, 255],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y - 25, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
    rect(x - 25, y, this.size, this.size);
  }
};
var tetrisL2 = {
  color: [0, 0, 255],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x, y - 25, this.size, this.size);
    rect(x - 25, y - 25, this.size, this.size);
  }
};
var tetrisJ2 = {
  color: [230, 130, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x, y - 25, this.size, this.size);
    rect(x + 25, y - 25, this.size, this.size);
  }
};
var tetrisS2 = {
  color: [0, 200, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
    rect(x - 25, y + 25, this.size, this.size);
  }
};
var tetrisZ2 = {
  color: [255, 0, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x - 25, y, this.size, this.size);
    rect(x + 25, y + 25, this.size, this.size);
  }
};

var tetrominos2 = [tetrisO2, tetrisI2, tetrisT2, tetrisL2, tetrisJ2, tetrisS2, tetrisZ2];

//rotation for 270 degrees clockwise or 90 degrees counterclockwise
var tetrisO3 = {
  color: [255, 200, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
    rect(x + 25, y + 25, this.size, this.size);
  }
};
var tetrisI3 = {
  color: [0, 255, 255],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x + 25, y , this.size, this.size);
    rect(x - 25, y , this.size, this.size);
    rect(x - 50, y , this.size, this.size);
  }
};
var tetrisT3 = {
  color: [160, 0, 255],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x, y - 25, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
  }
};
var tetrisL3 = {
  color: [0, 0, 255],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
    rect(x - 25, y, this.size, this.size);
    rect(x + 25, y - 25, this.size, this.size);
  }
};
var tetrisJ3 = {
  color: [230, 130, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
    rect(x - 25, y, this.size, this.size);
    rect(x + 25, y + 25, this.size, this.size);
  }
};
var tetrisS3 = {
  color: [0, 200, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x - 25, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x - 25, y - 25, this.size, this.size);
  }
};
var tetrisZ3 = {
  color: [255, 0, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x - 25, y, this.size, this.size);
    rect(x - 25, y + 25, this.size, this.size);
    rect(x, y - 25, this.size, this.size);
  }
};

var tetrominos3 = [tetrisO3, tetrisI3, tetrisT3, tetrisL3, tetrisJ3, tetrisS3, tetrisZ3];

var tetrominos = [tetrominos0, tetrominos1, tetrominos2, tetrominos3,];

var i = 0

class Piece {
  // shape should be a number 0-7
  constructor (shapeNumber) {
    this.x = (width / 2);
    this.y = 0;
    this.shapeNumber = shapeNumber;
    this.template = tetrominos[i][shapeNumber];
    this.draw = function () {
      console.log('starting draw for shape ' + shapeNumber);
      this.template.shape(this.x, this.y);
    };
    this.shiftLeft = function () { this.x -= 25; };
    this.shiftRight = function () { this.x += 25; };
    this.shiftDown = function () { this.y += 1; };
    this.stop = function () { this.y += 0; };
    this.boundary = function () { this.x += 0; };
  }
}

class inactivePiece {
  // shape should be a number 0-7
  constructor (shapeNumber) {
    this.x = activePiece.x;
    this.y = activePiece.y;
    this.shapeNumber = shapeNumber;
    this.template = tetrominos[i][shapeNumber];
    this.draw = function () {
      console.log('starting draw for shape ' + shapeNumber);
      this.template.shape(this.x, this.y);
    };
  }
}
