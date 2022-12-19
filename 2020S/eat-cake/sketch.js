/* globals Decoration loadImage background image createCanvas  */

var cake;
var decorations;

function preload () {
  table = loadImage('images/table.png');
  cake = loadImage('images/plainCake.png');
  gumRed = loadImage('images/redgumdrop.png');
  gumPink = loadImage('images/pinkgumdrop.png');
  gumOrange = loadImage('images/orangegumdrop.png');
  gumGreen = loadImage('images/greengumdrop.png');
  sprinkles = loadImage('images/sprinkles.png');
  blueberries = loadImage('images/blueberries.png');
  cherry = loadImage('images/cherry.png');
  chocoballs = loadImage('images/chocoballs.png');
  chocochip = loadImage('images/chocochip.png');
  greenmnm = loadImage('images/greenmnm.png');
  mnms = loadImage('images/mnms.png');
  orangemnm = loadImage('images/orangemnm.png');
  pretzel = loadImage('images/pinkpretzel.png');
  raspberry = loadImage('images/raspberry.png');
  strawberry = loadImage('images/strawberry.png');
  whipcream = loadImage('images/whipcream.png');
}

function setup () {
  createCanvas(800, 600);
  decorations = [];
  decorations.push(new Decoration(cherry, 50, 225, 35, 35));
  decorations.push(new Decoration(cherry, 100, 225, 35, 35));
  decorations.push(new Decoration(cherry, 150, 225, 35, 35));
  decorations.push(new Decoration(blueberries, 50, 185, 35, 35));
  decorations.push(new Decoration(blueberries, 100, 185, 35, 35));
  decorations.push(new Decoration(blueberries, 150, 185, 35, 35));
  decorations.push(new Decoration(strawberry, 150, 100, 35, 35));
  decorations.push(new Decoration(strawberry, 100, 100, 35, 35));
  decorations.push(new Decoration(strawberry, 50, 100, 35, 35));
  decorations.push(new Decoration(raspberry, 50, 140, 35, 35));
  decorations.push(new Decoration(raspberry, 100, 140, 35, 35));
  decorations.push(new Decoration(raspberry, 150, 140, 35, 35));
  decorations.push(new Decoration(gumRed, 200, 110, 20, 20));
  decorations.push(new Decoration(gumPink, 200, 130, 20, 20));
  decorations.push(new Decoration(gumOrange, 200, 150, 20, 20));
  decorations.push(new Decoration(gumGreen, 200, 172, 20, 20));
  decorations.push(new Decoration(gumGreen, 230, 172, 20, 20));
  decorations.push(new Decoration(gumGreen, 260, 172, 20, 20));
  decorations.push(new Decoration(gumGreen, 290, 172, 20, 20));
  decorations.push(new Decoration(gumOrange, 230, 150, 20, 20));
  decorations.push(new Decoration(gumOrange, 260, 150, 20, 20));
  decorations.push(new Decoration(gumOrange, 290, 150, 20, 20));
  decorations.push(new Decoration(gumRed, 230, 110, 20, 20));
  decorations.push(new Decoration(gumPink, 230, 130, 20, 20));
  decorations.push(new Decoration(gumRed, 260, 110, 20, 20));
  decorations.push(new Decoration(gumPink, 260, 130, 20, 20));
  decorations.push(new Decoration(gumRed, 290, 110, 20, 20));
  decorations.push(new Decoration(gumPink, 290, 130, 20, 20));
  decorations.push(new Decoration(sprinkles, 320, 90, 250, 80));
  decorations.push(new Decoration(mnms, 570, 95, 170, 70));
  decorations.push(new Decoration(whipcream, 570, 170, 35, 35));
  decorations.push(new Decoration(whipcream, 610, 170, 35, 35));
  decorations.push(new Decoration(whipcream, 650, 170, 35, 35));
  decorations.push(new Decoration(whipcream, 690, 170, 35, 35));
  decorations.push(new Decoration(chocoballs, 570, 210, 35, 35));
  decorations.push(new Decoration(chocoballs, 610, 210, 35, 35));
  decorations.push(new Decoration(chocoballs, 650, 210, 35, 35));
  decorations.push(new Decoration(chocoballs, 690, 210, 35, 35));
  decorations.push(new Decoration(chocochip, 320, 180, 125, 75));
  decorations.push(new Decoration(chocochip, 430, 180, 125, 75));
  decorations.push(new Decoration(greenmnm, 200, 194, 20, 20));
  decorations.push(new Decoration(greenmnm, 230, 194, 20, 20));
  decorations.push(new Decoration(greenmnm, 260, 194, 20, 20));
  decorations.push(new Decoration(greenmnm, 290, 194, 20, 20));
  decorations.push(new Decoration(orangemnm, 200, 216, 20, 20));
  decorations.push(new Decoration(orangemnm, 230, 216, 20, 20));
  decorations.push(new Decoration(orangemnm, 260, 216, 20, 20));
  decorations.push(new Decoration(orangemnm, 290, 216, 20, 20));
  decorations.push(new Decoration(pretzel, 200, 238, 22, 20));
  decorations.push(new Decoration(pretzel, 230, 238, 22, 22));
  decorations.push(new Decoration(pretzel, 260, 238, 22, 22));
  decorations.push(new Decoration(pretzel, 290, 238, 22, 22));
}

function draw () {
  background('#add8e6');
  image(table, 100, 500, 600, 330);
  image(cake, 200, 380, 400, 200);
  textSize(32);
  text('Click and drag toppings onto the cake to decorate it!', 25, 60);
  fill('#e75480');

  for (let i = 0; i < decorations.length; i++) {
    decorations[i].show();
  }
}
function mousePressed () {
  for (let i = 0; i < decorations.length; i++) {
    decorations[i].click();
  }
}
function mouseDragged () {
  for (let i = 0; i < decorations.length; i++) {
    decorations[i].drag();
  }
}
