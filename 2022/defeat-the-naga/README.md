# Defeat The Naga Project Report
## Contributors

Jarrod Gambino (gambinoj@emmanuel.edu) and Francesca Clausson (claussonf@emmanuel.edu)

## Description of Project

Our project is a text-based choose-your-own adventure, in which you are a shopkeeper in a town under siege by a monster. You must help three heroes defeat the monstrous Naga in order to save your town. There are five possible endings. You can give victory to the knight, the wizard, the ranger. You can also have all three heroes conquer the Naga and reach victory. Or, the heroes can fail, and the Naga is triumphant. 

Your choices are what will lead the heroes to victory or death. 

## Project Process

Our project had a few ups and downs. Our project contains many elements that we did not discuss in class. As such, we had a few challenges when starting out, because we did not know there was an operation that would allow us to complete certain things.

An example of this would be the concept of buttons and the button functions, as well as creating pages. We did eventually learn though, and once we had the basic format done, the rest of the code fell into place. The biggest challenge after figuring out which operations to use was remembering what page we were currently working on. We often had issues where a page would be skipped, or a page would not be triggered when a button was clicked.

However, we overcame each issue that came up with the determination to get through the issue. As for the highs of the project, it felt great when we finally got a line of code to work the way we wanted, and even better when we found a new function or operation that would let us circumnavigate a bunch of work.

## Francesca's Favorite Code

My favorite code is from when we first getting started with creating buttons. We still did not know if we could create a good button that would let us move between story branches.

This line of code is from when we first successfully used the button functions to 
1) Show multiple buttons and 
2) Create a new story choice. Pressing button1 would send you to `page===3`

but choosing button2 would take you to `page===6`. I chose function `Button2()` because it was our first time actually moving between the story branches successfully.

Once we got this part done, we knew it was possible to form the rest of the story. 

I like this chunk of code the most because after we figured this line out, the rest of the code followed a similar pattern. It in some ways represents our last great hurdle within this project. 

  
```JavaScript
function Button2() {
  if(page === 3) {
    page = 6;
    button1.html('Next');
    button2.hide();
  } else if(page === 7) {
    button2.hide();
    button1.html('Next');
    ranger = 1;
    page = 8;
  } else if(page === 9){
    teamwork = 1;
    button2.hide();
    button1.html('Next');
    page = 10;
}
```

## Jarrod's Favorite Code

My favorite code also has to do with the buttons. The code that allowed us to create the button object saved us so much time and effort that it essentially made this project possible.

Like Francesca said, the buttons let us easily manage the different story branches, and keep certain story lines distinct. I chose function `Button1()`, because this was the first time we used to buttons in general, and so this was the first time we managed to get the buttons working at all. It was a painstaking process to figure out how to get the buttons to reappear and disappear how we wanted, but this chunk code shows our success.

```JavaScript
function Button1() {
  if(page === 0) {
    page = 1;
  } else if(page === 1) {
    button1.html('Open Shop');
    page = 2;
  } else if(page === 2) {
    button2.show();
    button2.html('Sword');
    button1.html('Armor');
    page = 3;
}
```

# Credits
## Knight
   
Pia_Sarcina

https://www.artstation.com/artwork/o2BVwk
## Ranger
L3monJuic3 
  
https://www.deviantart.com/l3monjuic3/art/Commission-Half-Elf-Ranger-843729874

## Wizard
Rémi Jacquot

https://www.artstation.com/artwork/wJ6KKL

## Shop
raqsonu
https://www.deviantart.com/raqsonu/art/Merchant-Shop-573280694 