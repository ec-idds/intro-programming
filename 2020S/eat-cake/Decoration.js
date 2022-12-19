class Decoration { // template of decorations
  constructor (imageName, x, y, width, height) { // setup
    this.image = imageName;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hold = false; // is the mouse holding the decoration?
    this.offsetX = 0;
    this.offsetY = 0;
  }

  show () { // display the decorations on the canvas
    image(this.image, this.x, this.y, this.width, this.height);
  }

  click () { // am I clicking & holding the decoration?
    if (mouseX > this.x && mouseX < this.x + this.width && mouseY >
      this.y && mouseY < this.y + this.height) {
      this.hold = true;
    } else {
      this.hold = false;
    }
    this.offsetX = this.x - mouseX;
    this.offsetY = this.y - mouseY;
  }

  drag () { // move the decoration with the mouse
    if (this.hold) {
      // this accounts for the difference between where you click & the edge of the decoration
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }
}
