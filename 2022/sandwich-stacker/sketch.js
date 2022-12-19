/******************************************************************************
 * Final Project
 * Jason Fletcher <fletcherj@emmanuel.edu> &
 * Valaree Villegas <villegasv@emmanuel.edu>
 * 7 November 2022
 *****************************************************************************/

class Ingredients {
  constructor(image, width, height, speed, name) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.name = name;
    this.caught = false;
    this.randomize();
    this.bread = false;
    if(this.name === 'bread') {
      this.bread = true;
    }
  }
  draw() {
    if(this.caught) {
      this.x = player.x;
    } else {
      this.y += this.speed;
    }
    image(this.image, this.x, this.y, this.width, this.height);
  }
  randomize() {
    this.y = random(-1000, 0);
    this.x = random(50, 550);
    this.speed = random(2, 3);
  }
}

let ingredients = [];
let badIngredients = [];
let gameLose = false;
let gameWin = false;
let ingredientsCaught = 0;
let toppings = [];
let recipe = [];
let stack = [];

let bg;

let player = {
  x: 250,
  y: 550,
  image: {},
  draw: function() {
    image(this.image, this.x, this.y, 100, 100);
  },
  move: function() {
    if(keyIsPressed) {
      switch(key) {
        case 'ArrowRight':
          player.x += 4;
          break;
        case 'd':
          player.x += 4;
          break;
        case 'ArrowLeft':
          player.x -= 4;
          break;
        case 'a':
          player.x -= 4;
          break;
        default:
      }
      this.x = constrain(this.x, 0, width);
    }
  }
};

function preload() {
  bg = loadImage('images/diner.png');
  player.image = loadImage('images/plate.png');

  ingredients = [];
  for(let i = 0; i < 3; i++) {
    ingredients.push(new Ingredients(loadImage('images/tomato.png'), 90, 90, 2, 'tomato'));
    ingredients.push(new Ingredients(loadImage('images/bread.png'), 90, 90, 1.5, 'bread'));
    ingredients.push(new Ingredients(loadImage('images/bread.png'), 90, 90, 3, 'bread'));
    ingredients.push(new Ingredients(loadImage('images/lettuce.png'), 90, 90, 2.5, 'lettuce'));
    ingredients.push(new Ingredients(loadImage('images/meat.png'), 90, 90, 1, 'meat'));
  }

  toppings = [];
  toppings.push(new Ingredients(loadImage('images/tomato.png'), 90, 90, 2, 'tomato'));
  toppings.push(new Ingredients(loadImage('images/lettuce.png'), 90, 90, 2.5, 'lettuce'));
  toppings.push(new Ingredients(loadImage('images/meat.png'), 90, 90, 1, 'meat'));

  badIngredients = [];
  for(let i = 0; i < 2; i++) {
    badIngredients.push(new Ingredients(loadImage('images/moldyCheese.png'), 90, 90, 2));
    badIngredients.push(new Ingredients(loadImage('images/moldySauce.png'), 90, 90, 1.5));
    badIngredients.push(new Ingredients(loadImage('images/fish.png'), 90, 90, 3));
  }

  recipe = [];
  recipe.push(new Ingredients(loadImage('images/bread.png'), 90, 90, 1.5, 'bread'));
  recipe.push(new Ingredients(loadImage('images/bread.png'), 90, 90, 1.5, 'bread'));

}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  textSize(16);
  textAlign(CENTER);
  for(let i = 0; i < toppings.length; i++) {
    recipe.splice(1, 0, random(toppings));
  }
  print(recipe);
}

function draw() {
  image(bg, width / 2, height / 2, width, height);

  for(let i = 0; i < recipe.length; i++) {
    image(recipe[i].image, 30, 30 + i * 20, 50, 50);
    text(i + 1, 60, 30 + i * 20);
  }
  text('recipe:', 30, 20);

  player.draw();
  player.move();

  for(let ingredient of ingredients) {
    ingredient.draw();
    if(ingredient.y >= height) {
      ingredient.randomize();
    }
  }

  for(let bad of badIngredients) {
    bad.draw();
    if(bad.y >= height) {
      bad.randomize();
    }
  }

  for(let ingredient of ingredients) {
    if(dist(ingredient.x, ingredient.y, player.x, player.y) < 20 && ingredient.bread === true && ingredient.caught === false) {
      ingredientsCaught++;
      ingredient.caught = true;
      ingredient.x = player.x;
      ingredient.y = player.y - (7 * ingredientsCaught);
      stack.push(ingredient);
      print(stack);
    }
  }

  for(let ingredient of ingredients) {
    for(let i = 0; i < stack.length; i++) {
      if(dist(ingredient.x, ingredient.y, player.x, player.y) < 20 && stack[0].bread && ingredient.bread === false && ingredient.caught === false) {
        ingredientsCaught++;
        ingredient.caught = true;
        stack.push(ingredient);
        ingredient.x = player.x;
        ingredient.y = player.y - (7 * ingredientsCaught);
      }
    }
  }

  for(let bad of badIngredients) {
    if(dist(bad.x, bad.y, player.x, player.y) < 20) {
      gameLose = true;
    }
  }

  if(arrayMatch(recipe, stack)) {
    gameWin = true;
  } else if(stack.length > recipe.length){
    gameLose = true;
  }

  if(gameLose === true) {
    background(0);
    textAlign(CENTER);
    noFill();
    stroke('orange');
    textSize(50);
    text("You Lose", width / 2, height / 2);
    noLoop();
  }

  if(gameWin === true) {
    background(0);
    textAlign(CENTER);
    noFill();
    stroke('orange');
    textSize(50);
    text("You Win!", width / 2, height / 2);
    noLoop();
  }
}

function arrayMatch(arr1, arr2) {
  if(arr1.length != arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i].name != arr2[i].name) {
      return false;
    }
  }
  return true;
}