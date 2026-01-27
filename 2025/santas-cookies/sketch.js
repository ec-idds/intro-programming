/*******************************************
 * A0: Assignment
 * Olyvia Frongillo <frongilloo@emmanuel.edu>
 *3 December 2025
 ******************************************/

let draggingItem = null;
//stores clothing item being dragged
//null = nothing being dragged currently
let offsetX = 0;
let offsetY = 0;
//added offset variables to get rid of jumpy 
//movement when clicked initially

let ratings = [
  "Needs Improvement...",
  "Good..",
  "Great!!",
  "Perfection!!!",
];
//array for possible rating scores
let givenRating = "";
//message to display after rating button is pressed

class Clothing { //these class variables will eventually be associated with the click and drag of mouse user//
  constructor(image, x, y, width, height) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    image(this.image, this.x, this.y, this.width, this.height);
  }

  //checks if the mouse is within the bounds of the item 
  //if yes, returns true to indicate the user clicked it
  isMouseInside() {
    return mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height;
  }
}

let backgroundImg;
let cookie;
let santa;
let clothing2 = [];
let titleFont;
let music;

function preload() {
  cookie = loadImage('gingerbread[1].png');
  backgroundImg = loadImage('backgroundimg.jpg');
  santa = loadImage('santa_icon[1].png');
  music = loadSound('Christmas.mp3');
  titleFont = loadFont('fun font.ttf');

  clothing2 = []; //creates array to store clothing/accesory images
  clothing2.push(new Clothing(loadImage('candy[1].png'), 5, 115, 50, 50));
  clothing2.push(new Clothing(loadImage('candy[1].png'), 45, 115, 50, 50));
  clothing2.push(new Clothing(loadImage('candy_cane[1].png'), 95, 115, 45, 65));
  clothing2.push(new Clothing(loadImage('christmas_stocking[1].png'), 120, 180, 60, 90));
  clothing2.push(new Clothing(loadImage('christmas_sweater[1].png'), 5, 260, 240, 110));
  clothing2.push(new Clothing(loadImage('santa_hat[1].png'), 5, 165, 105, 90));
  clothing2.push(new Clothing(loadImage('present_icon[1].png'), 140, 115, 60, 60));
  //clothing.push(new Clothing(loadImage()));
}

function setup() {
  createCanvas(400, 400);
  music.loop();
}

function mousePressed() { //user touch triggers music start(add in sound button?)
  userStartAudio();

  if(mouseX > 100 && mouseX < 210 && mouseY > 370 && mouseY < 405) {
    givenRating = random(ratings);
  }

  for(let i = clothing2.length - 1; i >= 0; i--) {
    if(clothing2[i].isMouseInside()) { //is mouse over item?
      draggingItem = clothing2[i]; //this is the item dragged
      offsetX = mouseX - draggingItem.x;
      offsetY = mouseY - draggingItem.y;

      clothing2.push(clothing2.splice(i, 1)[0]);
      //moves the clicked and dragged item to the front of the array

      break;
    }
  }
}

function mouseDragged() {
  if(draggingItem) {
    draggingItem.x = mouseX - offsetX;
    draggingItem.y = mouseY - offsetY;
  } //if dragging an item, position is updated to follow mouse
}

function mouseReleased() {
  draggingItem = null;
}

function draw() {
  background('backgroundImg.jpg');
  image(backgroundImg, 0, 0, width, height);
  image(santa, 15, 15, 50, 50);
  image(cookie, 200, 130, 240, 300);
  textSize(28);
  textFont(titleFont);
  fill('red');
  text('Santa needs help to decorate', 62, 36);
  text('the gingerbread man!!', 62, 54);

  fill('lightgreen');
  rect(100, 370, 110, 35);
  fill('green');
  textSize(20);
  text('rate my cookie!', 103, 390); //button

  for(let clothing of clothing2) {
    clothing.draw();
  }
  fill('red');
  textSize(30);
  text(givenRating, 205, 110); //displays the randomized rating 
}