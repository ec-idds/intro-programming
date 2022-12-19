//Constructor function
//Sid the Snake

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1; //movement
  this.yspeed = 0;
  this.total = 0;
  this.tail = []; //array, keeps track of tail growth

  this.eat = function(position) {
    let distance = dist(this.x, this.y, position.x, position.y); //measures distance btwn Sid & apple
    if (distance < 1) { //check if its less than one pixel
      this.total++; //if it eats the food, total goes up by one
      print('YUMMY! :)');
      return true; //asks the question "did the snake reach the food", boolean 
    } else {
      return false;
    }
  };

  this.collapse = function(position) {
    let distance = dist(this.x, this.y, position.x, position.y); //measures distance btwn Sid & obstacle
    if (distance < 1) { //check if its less than one pixel
      this.total = 0; //if it eats the food, total goes up by one
      this.tail = [];
      print('POISON!!! U LOSE!');
      return true; //asks the question "did the snake reach the food", boolean 
    } else {
      return false;
    }
  };

  this.direction = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };

  this.lose = function() {
    for (let i = 0; i < this.tail.length; i++) { //loops through every unit in tail, head is NOT included in tail
      let position = this.tail[i];
      let distance = dist(this.x, this.y, position.x, position.y); //distance between the head and that unit of the tail
      if (distance < 1) { //if it is:
        print('LOSER... game restarting');
        this.total = 0; //nothing in the tail, meaning only shows the original head
        this.tail = [];
      }
    }
  };

  this.update = function() {
    for (let i = 0; i < this.tail.length - 1; i++) { //put current location in the last spot and shift everything down
      this.tail[i] = this.tail[i + 1]; //shifts everything over by 1
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y); //total length - 1 equals the new location of the snake
    }

    this.x = this.x + this.xspeed * grid;
    this.y = this.y + this.yspeed * grid;

    this.x = constrain(this.x, 0, width - grid); //p5 reference, constraining x position to the width of the canvas minus the actual shape itself
    this.y = constrain(this.y, 0, height - grid);
  };

  this.show = function() {
    fill('black');
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, grid, grid); //draws the tail
    }
    rect(this.x, this.y, grid, grid); // same scale as before
  };
}