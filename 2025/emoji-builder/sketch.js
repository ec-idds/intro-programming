/*******************************************
 * A0: Custom Emoji Builder 
 * Leah Crowell <crowelll@emmanuel.edu>
 * Charlotte Jordan <jordanc@emmanuel.edu)
 * 15 December 2025
 ******************************************/

let eyeMenuX = 0; //Menu settings
let mouthMenuX = 110;
let accessoryMenuX = 220;
let menuW = 100;

let resetX = 600; //Variables for reset button
let resetY = 10;
let resetW = 60;
let resetH = 30;

let downloadX = 520; //Variables for download
let downloadY = 10;
let downloadW = 70;
let downloadH = 30;

let eyeScroll = 0; //SCtoll
let mouthScroll = 0;
let accessoryScroll = 0;
let scrollH = 300;

let faceColor = "#f7d44c"; //Base color

let features = { //Custom features
  eyes: null,
  mouth: null,
  accessory: []
};

let eyeOptions = []; //Elements for menu 
let mouthOptions = [];
let accessoryOptions = [];

let eyeImages = {};
let mouthImages = {};
let accessoryImages = {};

let accessoryLayout = { //Specific positioning of accessories
  //top of head
  cowboyhat: {
    x: -100,
    y: -140,
    w: 200,
    h: 120
  },
  santahat: {
    x: -75,
    y: -140,
    w: 200,
    h: 120
  },
  partyhat: {
    x: -150,
    y: -140,
    w: 200,
    h: 120
  },
  witchhat: {
    x: -90,
    y: -160,
    w: 200,
    h: 120
  },
  halo: {
    x: -100,
    y: -155,
    w: 200,
    h: 120
  },
  horns: {
    x: -100,
    y: -140,
    w: 200,
    h: 120
  },
  sleep: {
    x: -20,
    y: -120,
    w: 160,
    h: 80
  },
  //over eyes
  sunglasses: {
    x: -100,
    y: -60,
    w: 200,
    h: 70
  },
  hpglasses: {
    x: -85,
    y: -55,
    w: 180,
    h: 70
  },
  //cheeks
  blush: {
    x: -80,
    y: -25,
    w: 160,
    h: 80
  },
  freckles: {
    x: -80,
    y: -25,
    w: 160,
    h: 70
  },
  //neck
  scarf: {
    x: -80,
    y: 50,
    w: 200,
    h: 80
  },
}

function preload() {
  let eyes = [
    "normal", "angry", "crazy", "downturn", "happytears", "heart", "squint", "star", "swirl", "tears", "upturn", "wide"
  ];

  let mouths = [
    "frown", "grin", "kiss", "open", "openfrown", "opensmile", "openstraight", "silly", "smile", "smirk", "straight", "tongue"
  ];

  let accessories = [
    "blush", "cowboyhat", "freckles", "halo", "horns", "hpglasses", "partyhat", "santahat", "scarf", "sleep", "sunglasses", "witchhat"
  ];

  for(let e of eyes)
    eyeImages[e] = loadImage(`emojiFeatures/eyes_${e}.png`);
  for(let m of mouths)
    mouthImages[m] = loadImage(`emojiFeatures/mouth_${m}.png`);
  for(let a of accessories)
    accessoryImages[a] = loadImage(`emojiFeatures/acc_${a}.png`);
}

function setup() {
  createCanvas(700, 400);

  let y = 70;

  for(let key in eyeImages) { //Add options to menu
    eyeOptions.push(
      makeOption(key, eyeImages[key], eyeMenuX + 5, y, "eyes")
    );
    y += 50
  }

  y = 70;
  for(let key in mouthImages) {
    mouthOptions.push(
      makeOption(key, mouthImages[key], mouthMenuX + 5, y, "mouth")
    );
    y += 50
  }

  y = 70;
  for(let key in accessoryImages) {
    accessoryOptions.push(
      makeOption(key, accessoryImages[key], accessoryMenuX + 5, y, "accessory")
    );
    y += 50
  }
}

function draw() {
  background(200);

  drawResetButton();
  drawDownloadButton();
  drawEyeMenu();
  drawMouthMenu();
  drawAccessoryMenu();
  drawEmojiBase();
}

function drawResetButton() {
  fill(255);
  rect(resetX, resetY, resetW, resetH, 8);
  fill(0);
  textSize(14);
  text("Reset", resetX + 15, resetY + 20);
}

function drawDownloadButton() {
  fill(255);
  rect(downloadX, downloadY, downloadW, downloadH, 8);
  fill(0);
  textSize(14);
  text("Save", downloadX + 20, downloadY + 20);
}
//Menus
function drawEyeMenu() {
  drawMenu(eyeMenuX, menuW, eyeOptions, eyeScroll, "Eyes");
}

function drawMouthMenu() {
  drawMenu(mouthMenuX, menuW, mouthOptions, mouthScroll, "Mouths");
}

function drawAccessoryMenu() {
  drawMenu(accessoryMenuX, menuW, accessoryOptions, accessoryScroll, "Accessories");
}

function drawMenu(x, w, options, scroll, title) {
  fill(220);
  rect(x, 0, w, height);
  fill(0);
  textSize(16);
  text(title, x + 10, 30);

  for(let opt of options) {
    let y = opt.y + scroll;
    fill(255);
    rect(opt.x, y, opt.w, opt.h, 8);
    image(opt.img, opt.x + 5, y + 5, opt.w - 10, opt.h - 10);
  }
}

//Emoji
function drawEmojiBase() {
  push()
  translate(accessoryMenuX + menuW + 120, height / 2);

  fill(faceColor);
  stroke(0);
  strokeWeight(2);
  ellipse(0, 0, 160, 160);

  if(features.eyes)
    image(eyeImages[features.eyes], -80, -45, 160, 80);
  if(features.mouth)
    image(mouthImages[features.mouth], -60, 10, 120, 60);
  for(let acc of features.accessory) {
    let img = accessoryImages[acc];
    let layout = accessoryLayout[acc];
    if(img && layout) {
      image(img, layout.x, layout.y, layout.w, layout.h);
    }
  }

  pop();
}

//Interaction
function mousePressed() {
  if(mouseX > resetX && mouseX < resetX + resetW && mouseY > resetY && mouseY < resetY + resetH) {
    features.eyes = null;
    features.mouth = null;
    features.accessory = [];
    return;
  }
  if (mouseX > downloadX && mouseX < downloadX + downloadW && mouseY > downloadY && mouseY < downloadY + downloadH) {
    saveEmoji();
    return;
  }
    

  checkMenuClick(eyeOptions, eyeScroll);
  checkMenuClick(mouthOptions, mouthScroll);
  checkMenuClick(accessoryOptions, accessoryScroll);
}

function mouseWheel(event) {
  if(mouseX >= eyeMenuX && mouseX < eyeMenuX + menuW) {
    eyeScroll -= event.delta;
  } else if(mouseX >= mouthMenuX && mouseX < mouthMenuX + menuW) {
    mouthScroll -= event.delta;
  } else if(mouseX >= accessoryMenuX && mouseX < accessoryMenuX + menuW) {
    accessoryScroll -= event.delta;
  }
  return false;
}

//Helpers
function makeOption(key, img, x, y, type) {
  return {
    label: key,
    img: img,
    x: x,
    y: y,
    w: 90,
    h: 35,
    type: type,
    value: key
  };
}

function checkMenuClick(options, scroll) {
  for(let opt of options) {
    let y = opt.y + scroll;

    if(mouseX > opt.x && mouseX < opt.x + opt.w && mouseY > y && mouseY < y + opt.h) 
    {
      if(opt.type === "accessory") {
        let index = features.accessory.indexOf(opt.value);
        if(index === -1) {
          features.accessory.push(opt.value);
        }else{
          features.accessory.splice(index, 1);
        }
      }
     else {
       if (features[opt.type] === opt.value){
        features[opt.type] = null;
       }else{
        features[opt.type] = opt.value;
       }
       }
       }
      }
    }

function saveEmoji(){
  let gfx = createGraphics(300,300);
  gfx.background(255);
  gfx.translate(150,150);

  gfx.fill(faceColor);
  gfx.stroke(0);
  gfx.strokeWeight(2);
  gfx.ellipse(0, 0, 160, 160);

  if (features.eyes){
    gfx.image(eyeImages[features.eyes], -80, -45, 160, 80);
  }

   if (features.mouth){
    gfx.image(mouthImages[features.mouth], -60, 10, 120, 60);
  }

  for (let acc of features.accessory) {
    let img = accessoryImages[acc];
    let layout = accessoryLayout[acc];
    if (img && layout){
      gfx.image(img, layout.x, layout.y, layout.w, layout.h);
    }
  }
  save(gfx, "my_emoji.png");
}