/*******************************************
 * Final Project
 * Kim Kelley <kelleki@emmanuel.edu> & Emely Rodriguez <rodrigueze4@emmanuel.edu> 
 * 12 December 2024
 ******************************************/
let colors = [
  '#cc0000', '#ff6600', '#ff9900', '#F1C40F', '#ffff00',
  '#99ff33', '#33cc33', '#4dffd2', '#66ffff', '#0099ff',
  '#0000cc', '#6600cc', '#9B59B6', '#cc33ff', '#ff33cc',
  '#ff0066', '#cc0066', '#800000'
]; // Array of colors (hex codes)

let labels = [
  'Muddy River', 'MIDA', 'sweetgreen', 'Time Out Market', 'CAVA',
  'CupNoodles', 'Saloniki', 'Yard House', 'Blaze Pizza', 'Chipotle',
  'The Greek Gyro', 'Tasty Burger', 'Pokeworks', 'Bon Me',
  'Clover Food Labs', 'Star Market', 'Dining Hall', 'Sweet Cheeks'
]; // Array of labels

let links = [
  'https://emmanuel.cafebonappetit.com/cafe/muddy-river-cafe/',
  'https://midarestaurant.com/mida-fenway', 'https://www.sweetgreen.com/',
  'https://www.timeout.com/time-out-market', 'https://cava.com/menu',
  'https://www.cupnoodle.jp/', 'https://www.salonikigreek.com/',
  'https://www.yardhouse.com/locations/ma/boston/boston-fenway-fenway-triangle/8336',
  'https://www.blazepizza.com/', 'https://www.chipotle.com/#menu',
  'https://thegreekgyro.com/', 'https://www.tastyburger.com/',
  'https://pokeworks.com/', 'https://www.bonmetruck.com/',
  'https://www.cloverfoodlab.com/', 'https://www.starmarket.com/',
  'https://emmanuel.cafebonappetit.com/cafe/mdh/', 'https://www.sweetcheeksq.com/'
]; //Array of links 

let totalSections = 18;
let sectSize;
let rotation = 0;
let spinSpeed = 0;
let holdTime = 0;
let selector;
let link;
let click;
let chomp;
let tada;
let selected;
let hasStopped = false; // tracks if wheel has stopped
let started = false; // tracks if the wheel has been spun at least once
let currentSection = -1; // Tracks the section currently aligned with the selector

function preload() {
  click = loadSound("click.wav")
  chomp = loadSound('chomp.mp3')
  tada = loadSound('tada.mp3')

}

function setup() {
  createCanvas(800, 800);
  sectSize = TWO_PI / totalSections; //calculates the angle for each section
  selector = PI / 2; // Position the selector at the bottom

  //Creates link to the selected place
  link = createA('', 'Selected Place');
  link.attribute('target', '_new');
  link.position(360, 750);
  link.hide();

}

function draw() {
  background('skyblue');

  //Title
  fill('black');
  textSize(28);
  textAlign(CENTER, CENTER);
  text(`I'm hungry, what do I want to eat?`, 400, 30);

  // Draw the wheel
  translate(width / 2, height / 2); //sets 0, 0 to center
  rotate(rotation);

  for(let i = 0; i < totalSections; i++) {
    fill(colors[i]);
    stroke(0);
    strokeWeight(1);
    arc(0, 0, 600, 600, i * sectSize, (i + 1) * sectSize, PIE);

    // Text for labels
    push();
    fill("white");
    textAlign(CENTER, CENTER);
    textSize(12);
    let angle = (i + 0.5) * sectSize; //angle for label
    rotate(angle);
    translate(240, 0); // Position text
    rotate(-angle - rotation); //allows text to rotate with spin
    text(labels[i], 0, 0);
    pop();
  }

  // Reset rotation 
  rotate(-rotation);

  // Draw selector
  fill(220);
  stroke(4);
  triangle(10, 310, -10, 310, 0, 290);

  // Update rotation based on spin speed
  rotation += spinSpeed;
  spinSpeed *= 0.98; // slows wheel down

  // Determine the current section aligned with the selector
  let adjustedRotation = (selector - rotation + TWO_PI) % TWO_PI;
  let alignedSection = (floor(adjustedRotation / sectSize) + totalSections) % totalSections;

  // Play click sound if the section changes
  if(alignedSection !== currentSection && started) {
    currentSection = alignedSection; // Update to new section
    click.play(); // Play click sound
  }

  //Wheel stop info
  if(abs(spinSpeed) < 0.001 && !hasStopped && started) {
    spinSpeed = 0; // Stop the wheel
    hasStopped = true;
    selected = currentSection; // Final selected section
    tada.play(); // Play tada sound

    // Display the selected label
    link.html(`Visit ${labels[selected]}`);
    link.attribute('href', links[selected]);
    link.show();
  } else if(spinSpeed > 0) {
    hasStopped = false; // Reset flag when spinning
  }

  // Label Debugging 
  //console.log("Selected Index:", selected);
  // console.log("Selected Label:", labels[selected]);

  //Pop up text
  if(hasStopped) {
    fill(0);
    textSize(28);
    textAlign(CENTER, CENTER);
    text(`You want ${labels[selected]}`, 0, -330);
  }

  //center button
  fill('black');
  ellipse(PI, PI, 100, 100);
  fill('white');
  textSize(14);
  textAlign(CENTER, CENTER);
  text(`Click to Spin`, PI, PI);

}

function mousePressed() {
  holdTime = millis(); // Record the time when the mouse is pressed
}

function mouseReleased() {
  let distanceFromCenter = dist(mouseX, mouseY, width / 2, height / 2); // Check if mouse is within the center of the canvas
  if(distanceFromCenter <= 50) { //Circle Radius
    let elapsed = millis() - holdTime; // Calculate how long the mouse was held
    spinSpeed = constrain(elapsed / 1000, 0.15, 5); // Translate time held into spin speed
    chomp.play(); //play chomp sound

    started = true; // tracks that the wheel has been spun

    //Hides link while spinner is spinning
    link.hide();
  }
}