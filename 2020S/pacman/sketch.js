var p = 8; // X coordinate for Pacman
var m = 42; // Y coordinate for Pacman
var b = 200; // X coordinate for Blue Ghost
var c = 360; // Y coordinate for Blue Ghost
var s = 100; // X coordinate for Red Ghost
var r = 122; // Y coordinate for Red Ghost
var forwards = true;
var pacman;
var blueGhost;
var redGhost;
var dots = [];
var score = 0;

// Images for Pacman, Blue Ghost, and Red Ghost
function preload () {
  pacman = loadImage('pacman.png');
  blueGhost = loadImage('blue.ghost.png');
  redGhost = loadImage('red.ghost.png');
}

function setup () {
  createCanvas(700, 400);
  for (let y = 60; y < 400; y += 80) {
    for (let x = 15; x < 525; x += 30) {
      dots.push([x, y]);
    }
  }
}

function draw () {
  background(0);

  // Title of game
  fill('yellow');
  textSize(30);
  text('PAC-MAN', 550, 100);

  // Create a barrier from the game and the score
  fill('blue');
  rect(528, 0, 10, 400);

  // Pacman's food
  for (let i = 0; i < dots.length; i++) {
    let dot = dots[i];

    if (dot !== undefined) {
      fill('yellow');
      ellipse(dot[0], dot[1], 10, 10);
    }
  }

  // Barriers to the maze
  for (let y = 0; y < 400; y += 80) {
    for (let x = 40; x < 200; x += 199) {
      fill('blue');
      rect(x, y, 199, 40);
    }
  }

  for (let y = 0; y < 400; y += 80) {
    for (let x = 280; x < 440; x += 199) {
      fill('blue');
      rect(x, y, 199, 40);
    }
  }

  image(pacman, p, m);
  image(blueGhost, b, c);
  image(redGhost, s, r);

  // How to make Pacman move without going through the barriers
  if (keyIsPressed) {
    if (key === 'ArrowRight' && ((m < 50 && m > 40) || (m < 128 && m > 120) || (m < 210 && m > 198) || (m < 290 && m > 278) || (m < 370 && m > 358)) && p > 0 && p < 491) {
      p += 1;
    }
    if (key === 'ArrowLeft' && ((m < 50 && m > 40) || (m < 128 && m > 120) || (m < 210 && m > 198) || (m < 290 && m > 278) || (m < 370 && m > 358)) && p > 1 && p < 492) {
      p -= 1;
    }
    if (key === 'ArrowUp' && ((p < 10 && m > 0) || (p < 250 && p > 240) || (p < 500 && p > 480)) && m > 1 && m < 367) {
      m -= 1;
    }
    if (key === 'ArrowDown' && ((p < 10 && m > 0) || (p < 250 && p > 240) || (p < 500 && p > 480)) && m > 0 && m < 366) {
      m += 1;
    }
  }

  // How to make the ghosts move continuously
  if (s >= 495 || b >= 495) {
    forwards = false;
  }

  if (s <= 0 || b <= 0) {
    forwards = true;
  }

  if (forwards) {
    s = s + 1;
    b = b + 1;
  } else {
    s = s - 1;
    b = b - 1;
  }

  // Detect a dot collision
  print(score);
  for (let i = 0; i < dots.length; i++) {
    let dot = dots[i];
    if (dot !== undefined) {
      let d = dist(p + 15, m + 15, dot[0], dot[1]);
      if (d < 10) {
        delete dots[i];
        score += 5;
      }
    }
  }

  // Detect a ghost collision which will end the game
  let blue = dist(p + 5, m + 10, b + 5, c + 10);
  let red = dist(p + 10, m + 10, s + 10, r + 10);
  if (blue < 30 || red < 15) {
    fill(255);
    textSize(100);
    text('GAME OVER', 75, 220);
    noLoop();
  }

  // Print the score on the canvas
  fill(255);
  textSize(20);
  text(score, 610, 215);
  text('SCORE', 580, 170);

  // If all the food is collected, then the game is won
  if (score === 425) {
    textSize(100);
    text('YOU WON', 120, 220);
    print('YOU WON');
    noLoop();
  }
}
