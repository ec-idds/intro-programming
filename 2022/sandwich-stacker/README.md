# Sandwich Stacker
Jason Fletcher & Valaree Villegas

fletcherj@emmanuel.edu

villegasv@emmanuel.edu


## How to Play
The goal of this game is to create a sandwich by following the recipe that presents on the screen. You may move the plate at the bottom of the screen to collect the desired ingredients by using the left and right arrow keys or A and D. Be sure to avoid the moldy, bad ingredients! Once you have created the desired sandwich, you will have won the game.

## Our Process
We first created our ingredients as individual objects. This worked for majority of the process but once we had to figure out how to get the ingredients to stack on top of one another, we decided to use a class instead. Instead of having an object for each individual ingredient, we were able to make one class for all ingredients. This made our code a lot more organized and cohesive because we were able to incorporate good and bad ingredients into the class. We struggled with finding a way to get ingredients to continuously fall. Instead of getting new ingredients to spawn, we used the same technique that we used in Lunar Lander, where the same ingredient looped from the bottom of the canvas back to the top of the screen. Our biggest issue was that we had a leaky code. When the initial bread was caught, three breads were pushed to the console. This was happening because it was detecting the collision three times in one frame. We ended up fixing this bug by using ingredients.caught to debounce the collision logic. Our final project met our original idea for the game we had in mind—we were able to incorporate a goal recipe and did not give up on any elements that we wanted.

Jason-

The code I am proud of incorporating was the function that checked if the arrays matched. One of the biggest problems we had was creating a successful win situation. This function first checks to see if the arrays are of equal length, and then runs through each index of the array to see if they are matching. If the lengths are the same, and the elements are the same at each index, it returns true. This allows us to put the function inside draw with the two arrays (recipe and stack) as parameters, and if they match; it will trigger the gameWin variable.
```javascript
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

if(arrayMatch(recipe, stack)) {
    gameWin = true;
  } else if(stack.length > recipe.length) {
    gameLose = true;
  }
```

Valaree-

I am proud of writing the Ingredients class. This step was crucial in making our code more organized and more easily editable. Within the class we were able to establish the height, width, speed, name, and image. The Ingredients class allowed us to randomize the speed and where the ingredients spawned from. Ingredients were randomized to spawn from -1000 to 0 so that the ingredients would appear from the top of the screen at varying intervals. We also randomized the speed of ingredients so that ingredients of the same type were not all going the same speed. We incorporated ingredients.caught in the class, which allowed us to stack ingredients. This chunk of code made it so that when an ingredient was caught, the ingredient would stick to the plate and thus continue to move left/right with the plate.
```javascript
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
```


