var ellipseYpos = 400;

function setup() {
  createCanvas(500, 400);
  c1 = color(255, 204, 153);
  c2 = color(255, 230, 153);
  setGradient(c1, c2);
}

function draw() {
  background (255, 204, 153, frameCount);
  noStroke();
  ellipseMode(CENTER);
  ellipse(250, ellipseYpos, 150);
  fill("orange")
  if (ellipseYpos > 150)
    ellipseYpos--;

  fill(153, 230, 255)
  rect(0, 350, 500, 75);
  fill("orange")
 
}
function setGradient(c1, c2) {
  noFill();
  for (var i = 0; i < height; i++) {
    var inter = map(i, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, i, width, i);
  }
}

