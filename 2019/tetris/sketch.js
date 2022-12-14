/* globals key keyPressed rotate createCanvas CENTER angleMode rectMode DEGREES random background int height Piece */

var activePiece = {}; // the piece that is falling
var inactivePieces = []; // all the pieces on the screen that are done falling

// calls a random piece in the array
function newActivePiece () {
  activePiece = new Piece(int(random(0, 7)));
}

function setup () {
  createCanvas(250, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  newActivePiece();
}

/* returns a random tetromino type
function randomBlock () {
  var tetromino = int(random(0, 7));
   print(tetromino);
} */

function draw () {
  background(0);
  activePiece.draw();

  if (activePiece.y < (height - 36)) {
    activePiece.shiftDown();
  } else {
    activePiece.stop();
  }
  if (activePiece.y >= (height - 36)) {
    inactivePieces.push(activePiece);
    console.log(inactivePieces.length);
    inactivePiece.draw();
    return newActivePiece();
  }
}
//  setting the left and right limit
function keyPressed () {
  if (activePiece.x <= 25 && key === 'ArrowLeft') {
    activePiece.boundary();
  }
  if (activePiece.x > 25 && key === 'ArrowLeft') {
    activePiece.shiftLeft();
  }
  if (activePiece.x >= 225 && key === 'ArrowRight') {
    activePiece.boundary();
  }
  if (activePiece.x < 225 && key === 'ArrowRight') {
    activePiece.shiftRight();
  }
  if (key === 'ArrowUp') {
    i++
  }
  if (i > 3)  {
    i = 0
  }
  console.log(i + " " + key)
}
