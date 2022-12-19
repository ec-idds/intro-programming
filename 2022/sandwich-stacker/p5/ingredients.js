class Ingredient {
  constructor(name, x, y, speed, image){
    this.name = name;
    this.x = x;
    this.y = y;
    this.image = image;
    this.speed = speed;
  }
  drawIng(){
    image(this.image, this.x, this.y, 90, 90);
    this.y += this.speed;
  }
}