# Emoji Builder
This Codio project is created by Charlotte Jordan and Leah Crowell. 
(jordanc@emmanuel.edu, crowelll@emmanuel.edu)

# Project Description
>In this game, you will be able to build your own emoji. This is a fun and creative game that allows users to create their dream emoji that is not offered on their device! This allows for user creativity to customize their emoji's facial expressions, with options to choose for eyes, mouth, and accessories. By scrolling through the sidebar, the user can access different options in the menu to add features to their emoji. By clicking the reset button in the top right corner, they can reset their emoji face to blank. 

# Instructions for Use
- Click on any of the options in the left sidebar menus to add a feature to the emoji face. 
- Once the user clicks on the desired option, it will add the feature to the face.
- The user can scroll through the left sidebars to access a variety of eye, mouth, and accessory variations. 
- The user can add as many features as desired to the emoji's face.
- To reset the emoji face, click the reset button in the top right corner. 


# Project Story: Challenges and Victories
>While creating this project, we faced many challenges that led to victories in programming. We began by searching the internet for features to add to our menu. After spending a significant amount of time on this, and not finding anything that would be perfect for the project we had in mind, we decided to draw each of the features ourselves on a iPad, download them to our computers, and upload them into Codio. This allowed us to create unique features that we desired to provide as an option for the user. We then added one of these options to the menu as a tester, and named its properties to define where it would be located on the screen. After setting up our emoji base, options label, and option, we used the mousePressed feature to allow the user to simply click on the eye option to add it to the screen. We used "if" loops to check if the mouse was in a certain range, and the applyFeature function to make the feature appear on the emoji base. A main challenge in our code was working to perfect the placement of the features on the canvas. Adding "push" and "pop" was critical as they allowed parts of the emoji to be drawn relative to the other elements on the screen. One of the biggest victories in the creation of this project was creating a sidebar that scrolled through all of the options. We added a scroll variable to track the movement across the screen, and adjusted the sidebar's y position as we scrolled. We used mouseWheel to update the scroll, which was a new challenge as we had never used this feature before. We faced time-consuming challenges when the features no longer worked after the scroll was implemented, so we had to adjust the scroll by using a constrain function so the options would not disappear. The reset button was also a success, as we used mousePressed and an if loop to detect when the user clicked the button, and then reset all the features to "null". This was effective and worked even as we added new features in after its creation. Lastly, we came to an ultimate victory by adding in the remainder of the features. Using arrays was most important to organize and easily add new mouth options, eye options, and accessories. Then, our beautiful emoji builder came together to create a user friendly, easily accessible way to create a new emoji that is customizable to your style!  

Colons can be used to align columns. 


# Charlotte: Favorite Chunk of Code
```javascript
function mouseWheel(event) {
  if(mouseX >= eyeMenuX && mouseX < eyeMenuX + menuW) {
    eyeScroll -= event.delta;
  } else if(mouseX >= mouthMenuX && mouseX < mouthMenuX + menuW) {
    mouthScroll -= event.delta;
  } else if(mouseX >= accessoryMenuX && mouseX < accessoryMenuX + menuW) {
    accessoryScroll -= event.delta;
  }
  return false;
```
> This chunk of code is my favorite part of the project. I was challenged to create a scrollable sidebar for each menu, which took me some time. I had never managed this type of task before, and was intimidated by creating a for loop that scrolled without moving any of the options out of place, and still allowing them to be pressed and added to the emoji base. Learning to use mouseWheel() was new territory for me, but it allowed me to capture scroll input. Once I understood how "of" works, it was able to help me create the scroll much easier. Getting the scroll feature to work was greatly challenging. There were times where I thought that I broke the code completely, as the clickable areas kept moving out of position, and they no longer could be pressed. I figured out that I needed to add "option.y + scroll" to detect the clicks and update the y variable. By adding the constrain variable, I was able to stop the menu from scrolling too far to the point where all options disappeared. This was also a challenge, because I was unfamiliar with the "constrain" variable. I feel like this represents my growth, problem solving skills, and patience, as I dug through the p5.js to uncover new tools to allow my code to work effectively. I want to highlight this achievement, as it seems like something so simple to the game, yet took time, effort, and composure. 

# Leah : Favorite Chunk of Code
```javascript
> function checkMenuClick(options, scroll) {
  for(let opt of options) {
    let y = opt.y + scroll;

    if(mouseX > opt.x && mouseX < opt.x + opt.w && mouseY > y && mouseY < y + opt.h) 
    {
      if(opt.type === "accessory") {
        let index = features.accessory.indexOf(opt.value);
        if(index === -1) {
          features.accessory.push(opt.value);
        }else{
          features.accessory.splice(index, 1);
        }
      }
     else {
       if (features[opt.type] === opt.value){
        features[opt.type] = null;
       }else{
        features[opt.type] = opt.value;
       }
       }
       }
      }
    }
```
> This chunk of code is my favorite part of the project. This section allows for the user to select certain elements, deselect them, and utilize multiple accessories at once. It is especially interesting because it brings together multiple layers of interaction into one flexible system. This function uses a loop to handle every menu option dynamically, instead of having separate click logic for eyes, mouths, and accessories. This part of the code adds some extra convenience for the user. Coding this function required a deeper understanding of arrays, conditional logic, and user interaction. All of the elements involved made this chunk a bit tedious to complete, but I am very proud of how it turned out and what it adds to the overall project.
# Credits
> We actually did not use any outside images or features! All tools came from the p5.js text and images hand drawn by us! 