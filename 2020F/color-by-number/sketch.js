// Camryn Hatstat & Alyssa Hogan FINAL PROJECT//
// hatstatc@emmanuel.edu | hogana@emmanuel.edu//
// December 9th, 2020 //
const shapes = [];
const paintbrush = {
  x: 0,
  y: 0,
  image: {},
  draw: function () {
    image(this.image, mouseX, mouseY - 50, 50, 50);
  }
}; // this is the paintbrush object - mouseX mouseY allows for it to follow.
const paintbucket1 = {
  x: 10,
  y: 10,
  w: 30,
  h: 30,
  color: 'purple'
};
const paintbucket2 = {
  x: 10,
  y: 40,
  w: 30,
  h: 30,
  color: 'yellow'
}; // painbucket ojects (1-14) |x position, w position, width, height, color.
const paintbucket3 = {
  x: 10,
  y: 70,
  w: 30,
  h: 30,
  color: 'blue'
};
const paintbucket4 = {
  x: 10,
  y: 100,
  w: 30,
  h: 30,
  color: 'green'
};
const paintbucket5 = {
  x: 10,
  y: 130,
  w: 30,
  h: 30,
  color: 'pink'
};
const paintbucket6 = {
  x: 10,
  y: 160,
  w: 30,
  h: 30,
  color: 'red'
};
const paintbucket7 = {
  x: 80,
  y: 10,
  w: 30,
  h: 30,
  color: 'brown'
};
const paintbucket8 = {
  x: 80,
  y: 40,
  w: 30,
  h: 30,
  color: 'orange'
};
const paintbucket9 = {
  x: 80,
  y: 70,
  w: 30,
  h: 30,
  color: 'black'
};
const paintbucket10 = {
  x: 80,
  y: 100,
  w: 30,
  h: 30,
  color: 'teal'
};
const paintbucket11 = {
  x: 80,
  y: 130,
  w: 30,
  h: 30,
  color: 'lavender'
};
const paintbucket12 = {
  x: 80,
  y: 160,
  w: 30,
  h: 30,
  color: 'maroon'
};
const paintbucket13 = {
  x: 100,
  y: 190,
  w: 30,
  h: 30,
  color: 'grey'
};
const paintbucket14 = {
  x: 10,
  y: 190,
  w: 30,
  h: 30,
  color: 'chartreuse'
};
const paintBuckets = [paintbucket1, paintbucket2, paintbucket3, paintbucket4, paintbucket5, paintbucket6, paintbucket7, paintbucket8, paintbucket9, paintbucket10, paintbucket11, paintbucket12, paintbucket13, paintbucket14]; // then turns into an array - easily accessed.

function preload () {
  paintbrush.image = loadImage('paintbrush.png'); // preloads the clipart of the paintbrush
}
// Shape Maker written by Mark Sherman to make this project less absurdly hard

function makeShape (shape, number, x, y, w, h) {
  let collider; // collider checking if what is clicked on is colliding with the shape
  let shapeName; // allows to recognize what shape it is; whether ellispe or rect
  if (shape === rect) {
    collider = collidePointRect;
    shapeName = 'rect';
  } else if (shape === ellipse) {
    collider = collidePointEllipse;
    shapeName = 'ellipse';
  }
  const o = { // object of all the shapes.
    shapeName: shapeName, // rect or ellipse.
    number: number.toString(), // allows us to add numbers.
    color: 'white', // starts off as white
    draw: function () {
      let xoff = 0;
      let yoff = 0;
      fill(this.color);
      shape(x, y, w, h);
      fill('black');
      if (shape === rect) {
        xoff = w / 2;
        yoff = h / 2;
      }
      text(this.number, x + xoff, y + yoff);
    },
    collide: function (mx, my) {
      return collider(mx, my, x, y, w, h);
    }
  };
  shapes.push(o);
}

function setup () {
  noCursor();
  createCanvas(900, 600);
  paintbrush.x = mouseX;
  paintbrush.y = mouseY;
  const button = createButton('reset');
  button.mousePressed(resetCode);
  // Sets up all the paint bucket buttons
  for (let i = 0; i < paintBuckets.length; i++) { // i = amount of paint buckets
    paintBuckets[i].button = createButton(paintBuckets[i].color);
    paintBuckets[i].button.position(paintBuckets[i].x, paintBuckets[i].y);
    paintBuckets[i].button.style('background-color', paintBuckets[i].color);
    paintBuckets[i].button.style('border-color', paintBuckets[i].color);
    paintBuckets[i].button.mousePressed(function () {
      paintColor = paintBuckets[i].color;
    });
  }
  makeShape(rect, 5, 0, 580, 900, 30); // left ground
  makeShape(ellipse, 15, 700, 90, 130, 130); // sun
  makeShape(rect, 16, 80, 280, 100, 300);
  makeShape(rect, 17, 105, 525, 55, 55);
  makeShape(rect, 18, 250, 20, 230, 560); // house
  makeShape(rect, 19, 270, 390, 55, 55); // window
  makeShape(rect, 20, 410, 390, 55, 55); // window
  makeShape(rect, 19, 270, 320, 55, 55); // window
  makeShape(rect, 20, 410, 320, 55, 55); // window
  makeShape(rect, 19, 270, 250, 55, 55); // window
  makeShape(rect, 20, 410, 250, 55, 55); // window
  makeShape(rect, 19, 270, 180, 55, 55); // window
  makeShape(rect, 19, 340, 320, 55, 55); // window
  makeShape(rect, 19, 340, 115, 55, 55); // window
  makeShape(rect, 19, 340, 250, 55, 55); // window
  makeShape(rect, 20, 410, 180, 55, 55); // window
  makeShape(rect, 19, 270, 115, 55, 55); // window
  makeShape(rect, 20, 410, 115, 55, 55); // window
  makeShape(rect, 19, 270, 390, 55, 55); // window
  makeShape(rect, 19, 340, 390, 55, 55); // window
  makeShape(rect, 20, 340, 180, 55, 55); // window
  makeShape(rect, 20, 340, 50, 55, 55); // window
  makeShape(rect, 20, 410, 50, 55, 55); // window
  makeShape(rect, 20, 270, 50, 55, 55); // window
  makeShape(rect, 21, 310, 480, 55, 100); // door
  makeShape(rect, 21, 365, 480, 55, 100); // door
  makeShape(ellipse, 22, 370, 530, 4, 4); // doorknob
  makeShape(ellipse, 22, 360, 530, 4, 4); // doorknob
  makeShape(rect, 23, 205, 500, 20, 80);
  makeShape(ellipse, 20, 215, 500, 55, 55);
  makeShape(rect, 24, 520, 500, 20, 80);
  makeShape(ellipse, 24, 530, 480, 55, 55);
  makeShape(rect, 26, 600, 500, 150, 60);
  makeShape(ellipse, 26, 630, 570, 30, 30);
  makeShape(ellipse, 26, 720, 570, 30, 30);
  makeShape(rect, 26, 615, 510, 30, 30);
  makeShape(rect, 26, 680, 510, 20, 20);
  makeShape(rect, 26, 720, 510, 20, 20);
  makeShape(rect, 27, 790, 380, 40, 200);
  makeShape(rect, 0, 760, 340, 100, 100);
}

function draw () {
  background(128, 212, 255);
  textSize(1);
  for (let i = 0; i < shapes.length; i++) { // allows shapes to be drawn
    shapes[i].draw();
  }
  paintbrush.draw();
  textSize(30);
  text('CITGO', 765, 400, 55, 55);
  textSize(60);
  text('🔺', 778, 350, 500);
  textSize(80);
  text('☁️', 45, 56, 254);
  text('☁️', 560, 10, 254);
  text('☁️', 500, 100, 254);
  text('☁️', 760, 140, 254);
  text('☁️', 850, 10, 254);
  text('☁️', 170, 130, 254);
  text('☁️', 165, 0, 254);
  text('☁️', 560, 200, 254);
  text('☁️', 45, 200, 254);
  text('☁️', 45, 56, 254);
  text('☁️', 690, 270, 254);
  text('☁️', 45, 56, 254);
  text('☁️', 530, 300, 254);
}

function mouseClicked () {
  // check for collisions in our shapes
  let hit = false;
  let i;
  for (i = shapes.length - 1; i >= 0 && !hit; i--) { // clicked 2 it would 1, so that's why we had to do -1 instead of incrementing by 1.
    print('trying shape', i);
    hit = shapes[i].collide(mouseX, mouseY);
  }
  i++;
  print('i is', i);
  if (hit) {
    const clickedShape = shapes[i];
    print('Hit shape number', i, 'in the shapes array, a', clickedShape.shapeName, 'numbered', clickedShape.number); // allows us to see when shape is being pressed/recognized
    clickedShape.color = paintColor; // paint color that is pressed from color box and BOOM change color
  }
}

function resetCode () {
  makeShape(rect, 5, 0, 580, 900, 30); // left ground
  makeShape(ellipse, 15, 700, 90, 130, 130); // sun
  makeShape(rect, 16, 80, 280, 100, 300);
  makeShape(rect, 17, 105, 525, 55, 55);
  makeShape(rect, 18, 250, 20, 230, 560); // house
  makeShape(rect, 19, 270, 390, 55, 55); //  window
  makeShape(rect, 20, 410, 390, 55, 55); // window
  makeShape(rect, 19, 270, 320, 55, 55); // window
  makeShape(rect, 20, 410, 320, 55, 55); // window
  makeShape(rect, 19, 270, 250, 55, 55); // window
  makeShape(rect, 20, 410, 250, 55, 55); // window
  makeShape(rect, 19, 270, 180, 55, 55); // window
  makeShape(rect, 19, 340, 320, 55, 55); // window
  makeShape(rect, 19, 340, 115, 55, 55); // window
  makeShape(rect, 19, 340, 250, 55, 55); // window
  makeShape(rect, 20, 410, 180, 55, 55); // window
  makeShape(rect, 19, 270, 115, 55, 55); // window
  makeShape(rect, 20, 410, 115, 55, 55); // window
  makeShape(rect, 19, 270, 390, 55, 55); // window
  makeShape(rect, 19, 340, 390, 55, 55); // window
  makeShape(rect, 20, 340, 180, 55, 55); // window
  makeShape(rect, 20, 340, 50, 55, 55); // window
  makeShape(rect, 20, 410, 50, 55, 55); // window
  makeShape(rect, 20, 270, 50, 55, 55); // window
  makeShape(rect, 21, 310, 480, 55, 100); // door
  makeShape(rect, 21, 365, 480, 55, 100); // door
  makeShape(ellipse, 22, 370, 530, 4, 4); // doorknob
  makeShape(ellipse, 22, 360, 530, 4, 4); // doorknob
  makeShape(rect, 23, 205, 500, 20, 80);
  makeShape(ellipse, 20, 215, 500, 55, 55);
  makeShape(rect, 24, 520, 500, 20, 80);
  makeShape(ellipse, 24, 530, 480, 55, 55);
  makeShape(rect, 26, 600, 500, 150, 60);
  makeShape(ellipse, 26, 630, 570, 30, 30);
  makeShape(ellipse, 26, 720, 570, 30, 30);
  makeShape(rect, 26, 615, 510, 30, 30);
  makeShape(rect, 26, 680, 510, 20, 20);
  makeShape(rect, 26, 720, 510, 20, 20);
  makeShape(rect, 27, 790, 380, 40, 200);
  makeShape(rect, 0, 760, 340, 100, 100);
}
