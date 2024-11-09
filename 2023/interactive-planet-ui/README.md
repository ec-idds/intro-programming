# ***A Interactive Planet UI***
## Created by the B-Team
### Elijah Baron barone@emmanuel.edu
### Victoria Branch branchv@emmanuel.edu

# Description of Game
>For our project we decided to create a Planet Interactive UI.
In this program we created a control panel that allows the user to customize their planet, for example we have a planet name and description feature. 
We even have a color picker that allows the user to customize what colors they want their island and water to look like on their planet. 
Using sliders, the user can rotate the planet as well as change the size of the planet. 
Clouds are toggleable! 


# Instructions

>1.Name your planet
>>Using the Planet Name input box

>2.Describe
>>The User can describe the outcome of their planet

>3.Size
>>Using the Planet Size slider you can change the size of your planet

>4. Rotation
>> Using the slider, the user can either manually rotate the planet or use the rotate on/off buttons

>5.Customization
>> The color selection tools allow the user to pick their planets water and island color

>6. Clouds
>> You can toggle clouds on or off 

# Coding Process
>At the start of this process the goal was to have a 3D solar system that rotates and spins. As well as being able to customize planets and click and drag on the individual planets.
We were excited thinking we could pull it off, it would be hard, but we thought we had a chance. We had a solar system in 2D form all mapped out, the only thing we needed to figure out was 3D.
Our dream would shortly become a reality once we added WEBGL into codio, the odds were definitely not in our favor when the code did not look so good. 
Shortly after we decided to stick with just one planet and scrap the solar system idea. 

>Again, we started to work on a plan we had an ellipse with a control panel and what was left was to add the 3D and artistic features, again we realized doing 3D was not going to work for us this time and we settled for doing what we wanted to do just without 3D.
 We began by playing with the outline of our control panel and what we wanted the user to be able to do, after deciding we started to map out where on the canvas that was going to go. 

>Things we found challenging and managed to get through and work on and execute would be the automatic rotation of the planet and clouds as well as creating the islands themselves and using color pickers to help customize the entire planet.  
>>Starting with the automatic rotation of the planet we had to think back to past assignments that used the same features to get things to move on their own and edit them to work with our program.
Thinking back to falling rock and how we set the rock to fall on its own was used to get the planet to move on its own as well by using functions we created called rotate-Ground and it changed depending on where the island started as well as for the cloud images.
When creating the islands, we first thought we would have to make them from ellipses and other shapes.
Afterwards finding out thought using curve vertices and begin and end shape which connects the points, it made creating our other islands easier.

>Overall the coding for this project was challenging at time and it took many tries to figure out what would work efficiently enough to allow us to add any other ideas we had like the automatic rotation feature,
in order to try and figure that out we had to have started with the rotation slider.



## Elijah's Code Highlights (Lines 108 through 135)
>When approaching the challenge of making a toggleable cloud function within our program.
I found it exciting that this task felt easy, and I was able to work through a problem that 4 months ago I never thought I could do. 
Also, it was exciting to see that some of the assignments we did in class and for homework are useful and in this case are the key components of the cloud function.
I was able to combine knowledge acquired during the semester with something my partner and I wanted to create and make a final product I can feel proud of.




```Code Starts Below
clouds: function() {
    if(cloudButton === false){
    push();
    beginClip();
    ellipse(this.x, this.y, planetValue);
    endClip();
    tint(255,255,255, 170);
    cloudRotateSpeed1 = cloudRotateSpeed1 + 1;
    cloudRotateSpeed2 = cloudRotateSpeed2 + 1;
    image(cloudImage, cloudRotateSpeed1, 150, 400, 300);
    image(cloudImage, cloudRotateSpeed2 + 150, 375, 400, 300);
    }
    cloudButtonOff.mousePressed(() => {
    cloudButton = true;
    });
    cloudButtonOn.mousePressed(() => {
    cloudButton = false;
    });
    if(cloudRotateSpeed1 > 500){
      cloudRotateSpeed1 = -300;
      cloudRotateSpeed1 = cloudRotateSpeed1 + random(0.3,1);
    }
    if(cloudRotateSpeed2 > 350){
      cloudRotateSpeed2 = -450;
      cloudRotateSpeed2 = cloudRotateSpeed2 + random(0.4,1);
    }
    pop();
  },
  ```

 
  ## Victoria's Code Highlights(Lines 55 through 80)
  >When signing up for this class I knew it was not going to be a walk in the park. I had no coding experience except for the tiny robot games they make you play with in elementary school. 
  However when thinking of adding text to code you assume that it is simple and it was once I figured out the basics of coding until I got to the function needed for it.
  Afterwards I was showed an easier way which would have lessened my suffering I was still proud that I got the basics to work. 
  When I got the cloud buttons to work and put them to use it was nice to see how faster coding gets the more you do it and familiarize yourself with the steps.

  ``` Code Starts Below
  //allows user to name planet
  planetNameInput = createInput();
  planetNameInput.size(320, 30);
  planetNameInput.position(648, 83);
  planetNameInput.style('background-color:rgb(211, 202, 147, 200)');
  // allows user to describe planet
  planetDescriptionInput = createInput();
  planetDescriptionInput.size(320, 30);
  planetDescriptionInput.position(648, 157);
  planetDescriptionInput.style('background-color:rgb(211, 202, 147, 200)');
  //base water color picker
  waterColorPicker = createColorPicker('blue');
  waterColorPicker.position(772, 352);
  //island color picker
  islandColorPicker = createColorPicker('green');
  islandColorPicker.position(882, 352);
  //Cloud on/off button
  cloudButtonOn = createButton('ON');
  cloudButtonOn.position(800, 390);
  cloudButtonOff = createButton('OFF');
  cloudButtonOff.position(900, 390);
  //Rotate Button
  rotateButtonOn = createButton('ON');
  rotateButtonOn.position(865, 425);
  rotateButtonOff = createButton('OFF');
  rotateButtonOff.position(915, 425);
}
```
