/* INSTRUCTIONS BECAUSE MY README FILE IS DELETED.
Click the prompt for a fortune, and music will play
Magic Numbers buttons causes magic numbers to pop up, and play music
The fortune part cycles through on a hair trigger almost like a wheel of Fortune
Refresh to play music again. The Cursor will change if you hover over the correct place to click now!
*/

const fortunes = [
  'Eat the Yellow Snow',
  'A Hotdog is a sandwich',
  "There's a bug on your shoulder",
  'Ask the magic 8 ball instead',
  'Go away or I shall taunt you a second time',
  'You are now aware of your tongue in your mouth',
  "I'm on break",
  'Figure it out yourself',
  "Whatever you're thinking, the answer is 'probably'",
  "I know what you're thinking and that's disgusting",
  'What even is a magic number?',
  'MMMmmmmm, Ham',
  'Yes.',
  'I bet you wish I was a cookie',
  'Give me 5 dollars',
  'this ball does not even work, its just text on a canvas'
];

let choice = 0;
let displayFortune;
const magicNumbers = [];
let picture;
let button;
let mySound;
let mySound2;

function preload () {
  picture = loadImage('psychics-1026092_640.jpg');
  soundFormats('wav');
  mySound = loadSound('bells.wav');
  mySound2 = loadSound('choir.wav');
}

function setup () {
  createCanvas(600, 500);
  mySound.setVolume(0.1);
  mySound2.setVolume(0.05);
  mySound2.play();
  button = createButton('Magic Numbers?');
  button.mousePressed(getNumbers);
}

function draw () {
  image(picture, 0, 0);
  textAlign(CENTER);
  fill('green');
  textSize(14);
  text('Your answer:', 275, 150);
  text('Click Here for a Fortune!:', 275, 225);
  text('Click Again for a new Fortune!', 275, 350);
  if (mouseIsPressed && mouseX > 200 && mouseX < 350) {
    fortuneGen();
    displayFortune = fortuneGen();
    mySound.play();
  }
  text(displayFortune, 275, 250);
  textAlign(CENTER);
  fill('blue');
  text(magicNumbers, 275, 275);
  if (mouseX > 200 && mouseX < 350 && mouseY > 200 && mouseY < 250) {
    cursor('Grab');
  } else {
    cursor('default');
  }
}

function fortuneGen () {
  choice = floor(random(0, fortunes.length));
  return fortunes[choice];
}

function getNumbers () {
  for (let i = 0; i < 4; i++) {
    magicNumbers[i] = round(random(0, 100));
  }

  mySound.play();
}
