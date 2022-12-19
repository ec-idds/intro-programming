/* Final Project: Basketball Game
 * by Kevin Cullivan <cullivank@emmanuel.edu>
 * May 2nd, 2020
 */

function setup() {
  createCanvas(600, 400);

  x_start = 50;
  y_start = 315;

  mouseJustPressed = 0;
  shotMade = 0;
  score = 0;
  shots = 0;
  tries = 0;
  textDisplay = 0;
  hotStreak = 0;

  skyBall = 0;

  scoreCounted = 0;

  x = x_start;
  y = y_start;

  hoopX = 550
  hoopY = 150

  direction = 1;
  speedX = 0.3;

  speedY = -9;

  speed = sqrt(speedX * speedX + speedY * speedY);

  g = -0.4;

  shoot = 0;

  radius = 20;

}

function draw() {
  background(155);
  
    m = millis();
  
  if (m < 10000) {
    
    fill('aqua');
    rect(0, 0, width, height / 1.75);
    
  } else if (m < 20000) {
    
    fill('violet');
    rect(0, 0, width, height / 1.75);
    
  } else if (m > 20000) {
    
    fill('black');
    rect(0, 0, width, height / 1.75);
  }
  
  strokeWeight(5);
  line(475, 215, 475, height / 1.75); // first right support
  
  strokeWeight(5);
  line(120, 215, 120, height / 1.75); // first left support 
  
  strokeWeight(5);
  line(438, 150, 438, height / 1.75); // second right support
  
  strokeWeight(5);
  line(150, 150, 150, height / 1.75); // second left support
  
  strokeWeight(5);
  line(400, 110, 400, height / 1.75); // third right support
  
  strokeWeight(5);
  line(185, 110, 185, height / 1.75); // third left support
  
  strokeWeight(5);
  line(360, 110, 360, height / 1.75); // fourth right support
  
  strokeWeight(5);
  line(225, 110, 225, height / 1.75); // fourth left support
  
  stroke('white');
  strokeWeight(5);
  line(width / 3, height / 1.73, width / 3, height); // halfcourt
  
  noFill()
 ellipse(width / 3, height / 1.25, 100, 50); // halfcourt circle
  
  noFill()
 ellipse(width / 1.05, height / 1.25, 400, 150); // three point
  
  fill('blue')
  stroke('white')
 ellipse(width / 1.05, height / 1.25, 250, 75); // paint
  
  line(width / 1.22, 295, width / 1.22, 349); // free throw line

  strokeWeight(2);
  stroke('black')
  fill('grey');
  rect(100, 185, 400, 30);  // first bleacher

  stroke('black')
  fill('grey');
  rect(125, 145, 350, 30);  //second bleacher
  
  stroke('black')
  fill('grey');
  rect(150, 105, 300, 30); // third bleacher

  stroke('black')
  fill('grey');
  rect(175, 65, 250, 30); // fourth bleacher
  
  stroke('black')
  line(100, 185, 175, 65); // left railing
  
  stroke('black')
  line(500, 185, 425, 65); // right railing
  
  stroke('black')
  fill('grey');
  rect(190, 95, 45, 10); // top left step
  
  stroke('black')
  fill('grey');
  rect(175, 135, 55, 10); // middle left step
  
  stroke('black')
  fill('grey');
  rect(160, 175, 65, 10); // bottom left step
  
  stroke('black')
  fill('grey');
  rect(350, 95, 45, 10); // top right step
  
  stroke('black')
  fill('grey');
  rect(355, 135, 55, 10); // middle right step
  
  stroke('black')
  fill('grey');
  rect(360, 175, 65, 10); // bottom right step


  noFill()
  stroke(0);
  strokeWeight(4);
  stroke(255, 140, 0);
  ellipse(hoopX, hoopY, radius * 3, radius / 2)
  stroke('orange')
  fill(255, 255, 255)

  quad(hoopX + radius * 3 / 2 - radius / 5, hoopY - radius / 5,         hoopX + radius * 3 / 2 + radius * 0.75 - radius / 5, hoopY +       radius / 5, hoopX + radius * 3 / 2 + radius * 0.75 - radius       / 5, hoopY - radius * 3 + radius / 5, hoopX + radius * 3 / 2       - radius / 5, hoopY - radius * 3 - radius / 5) // backboard

  line(hoopX + radius * 3 / 2 + radius / 10, hoopY, hoopX + radius         * 3 / 2 + radius / 10, 325) // hoop pole

  rimX = hoopX - radius * 3 / 2; // net
  
  rimY = hoopY; // net

  boardX = hoopX + radius * 3 / 2; // net
  
  boardY = hoopY - radius * 3; // net

  if (shoot == 1) {
    speedY = speedY - g;

    x = x + direction * speedX

    y = y + speedY;

    if (y > y_start) {
      y = y_start;
      speedY = -speedY * 0.5;
    }

    if (x > 600 - radius) {
      x = 600 - radius;
      speedX = -speedX * 0.5;
    }

    if (x < 0 + radius) {
      x = radius;
      speedX = -speedX * 0.5;
    }

  }

  if ((rimX - x) * (rimX - x) + (rimY - y) * (rimY - y) <= radius     * radius) {
        speed = sqrt(speedX * speedX + speedY * speedY);
    
        speedX = -speed * (rimX - x) / radius;
    
        speedY = -speed * (rimY - y) / radius;
    
        rims += 1;
      }



  if (hoopY - radius * 3 - radius / 5 < y & y < hoopY + radius /         5) {
    
        if (x > hoopX + radius * 3 / 2 - radius / 5 - radius & x <             hoopX + radius * 3 / 2 + radius * 0.75 - radius / 5 &             speedX > 0) {
          
                x = hoopX + radius * 3 / 2 - radius / 5 - radius
          
                speedX = -speedX * 0.5;
          
                bricks += 1;
               }
    
    if (x > hoopX + radius * 3 / 2 + radius * 0.75 & x < hoopX +           radius * 3 / 2 + radius * 0.75 + radius - radius / 5 &             speedX < 0) {
      
              x = hoopX + radius * 3 / 2 + radius * 0.75 + radius                   - radius / 5
      
              speedX = -speedX * 0.5;
            }
    
  } else if ((boardX - x) * (boardX - x) + (boardY - y) * (boardY             - y) <= radius * radius) {
    
                  speed = sqrt(speedX * speedX + speedY * speedY);
    
                  speedX = -speed * (boardX - x) / radius;
    
                  speedY = -speed * (boardY - y) / radius;
    
                  bricks += 1;
                }

  if ((hoopX - x) * (hoopX - x) + (hoopY - y) * (hoopY - y) <=           (0.6 *   radius) * (0.6 * radius) & speedY > 0) {
    
    shotMade = 1;
    
    speedX = 0.4 * speedX;
  
  }

  if (y < -200) {
    skyBall = 1;
  }

  fill(230, 105, 0);
  stroke(0);
  strokeWeight(1);
  circle(x, y, radius * 2); // ball
  
  noFill()
  
  if (shotMade == 0 || 1) {

    stroke(255)
    
    strokeWeight(4);
    
    line(hoopX - radius * 3 / 2, hoopY, hoopX - radius, hoopY + 3         * radius)
    
    line(hoopX + radius, hoopY + 3 * radius, hoopX + radius * 3 /         2, hoopY)
    
    line(hoopX + radius * 3 / 2, hoopY, (hoopX - radius * 3 / 2 +         hoopX - radius) / 2, hoopY + radius * 3 / 2)
    
    line(hoopX - radius * 3 / 2, hoopY, (hoopX + radius * 3 / 2 +         hoopX + radius) / 2, hoopY + radius * 3 / 2)
    
    line((hoopX - radius * 3 / 2 + hoopX - radius) / 2, hoopY +           radius * 3 / 2, hoopX + radius, hoopY + 3 * radius)
    
    line((hoopX + radius * 3 / 2 + hoopX + radius) / 2, hoopY +           radius * 3 / 2, hoopX - radius, hoopY + 3 * radius)
  } 

  stroke(0);
  strokeWeight(4);
  stroke(255, 140, 0)
  arc(hoopX, hoopY, radius * 3, radius / 2, 2 * PI, PI, OPEN); // hoop
  
  stroke(0)
  strokeWeight(1)



  if (mouseIsPressed) {
    rims = 0
    
    shoot = 0;
    
    skyBall = 0;
    
    if (mouseJustPressed == 0) {
      
     if (shotMade == 1) {
        
        if (random(0, 1) > 0.75) {
          
          x = random(1.5 * radius, hoopX - 3 * radius / 2 - 2 *                 radius);
          
        } else {
          x = random(1.5 * radius, hoopX - 3 * radius / 2 - 4 *                 radius);
        }
        
      y = random(200, 400 - 2 * radius);
        
        mouseJustPressed = 1; 
        
        x_start = x
        
        y_start = y
        
        shotMade = 0
        
        tries = 0
        
      } else {
        mouseJustPressed = 1;
        x = x_start
        y = y_start
      }
    }

    line(x_start, y_start, mouseX, mouseY) // shot meter line
  }
} 


function mouseReleased() {
  if (mouseJustPressed == 1) {
    shoot = 1;
    speedX = -g * 5 * (mouseX - x_start) / 30;
    speedY = -g * 5 * (mouseY - y_start) / 30;
    mouseJustPressed = 0;
    shotMade = 0;
    shots += 1
    scoreCounted = 0
    tries += 1;
    rims = 0
    bricks = 0
  }
  
}
