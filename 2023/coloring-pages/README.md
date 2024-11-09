# Coloring Pages!

## Project Description
Welcome to Coloring Pages! 
This was created for a final project for Emmanuel College's Introduction to programming class.
It's an application which allows the user to color a selected image (House or Teddy Bear), using a paintbrush, pencil, eraser, and a variety of color options. 
There is also a slider that changes the size of the utensil tip for finer detail. Have fun coloring!

## Instructions for the User 
1. The user is first prompted to choose between two blank pictures of a mountain home and snazzy teddy bear. The user simply clicks on the picture they'd like to color in and the opposite image disappears and a control panel appears.
2. At the top of the control panel, the user can choose between eleven colors by clicking on the corresponding colored square button. Below the color choices, the user can choose between various stroke sizes by dragging a slider from left to right, and below that, the user can choose a tool to use. The paintbrush tool will draw fully opaque, the pencil will draw transparent, and the eraser tool will color white.   
3. Once the user has the desired tool, color, and size, the user clicks and drags where they'd like to color on the blank page, and the appropriate stroke will be drawn. 
4. The user can erase, color over previous strokes, or build upon other strokes to fill the page with color until they are complete. 
5. To restart, simply click the refresh button.   

## Story of the Process

The story all begins before Thanksgiving break, where Jacob came up with the idea to make a coloring application. He said he wanted people to be able to choose between two pictures, a variety of colors, and different coloring utensils. From there, the project production began. Jacob went ahead and created the different displays for the application, while also creating a rough draft of the teddy bear in Codio. During Thanksgiving break, Nik then went and made a rough draft for the house in Codio and Jacob finalized the control panel for the colors. From there, all the fine details were made. All the brick and cobblestone structures, mountains, the rug, the top hat; essentially all the accessories were created. After we were happy with how the images looked, the two of us took a break for the rest of break, with strong ambitions to tackle the final boss; making the application color.

Making the application color was definitely the hardest part. We started off by having the application just draw images at all times, by putting the white background of each image in setup, instead of draw. This then presented the challenge: how do we make the coloring utensil not draw all the time. We thought we could put the tool changer in setup, so the tool image is only "drawn" once. But since setup only runs once, this did not work. At this point we had just learned about arrays, so we thought this might help with the process. We tested the general idea in playground and we got something to work, so we moved this idea to the main program. After adjusting the tested program to work with the main program, we found our last problem, which dealt with the array's memory. The array only keep track of the ellipses' position, but not the color, so anytime the color was changed, every ellipse was changed to the color selected. So after some thinking, we figured out how to fix it and boom!, we had a functioning program. We were really happy it came out so well, and after some minor bug fixes, we completed our program.
 
## Favorite Code
**Jacob:** I'm particularly proud of the code that draws your tool icon and follows your mouse and changes with the user's choices. Once the user clicks on a tool button, the tool variable is set to the current selected tool. If that variable equals one of the the tools, there is a chunk of code that draws the corresponding icon with the user's other choices like color and size using an if then statement. I like this bit of code especially because it's very nostalgic of old games I used to play as a kid. I also love how personalized it is to the user's current selected choices and how the cursor holds the tools how a human hand would.  
**Nik:** My favorite piece of code is the array, which allows the user to color on the program. It was definitely that hardest thing to come up with, but I think it's so cool that we made it so the program always remembers where your mouse has been, the size of the circle drawn, which tool is being used, and what color you drew each circle with. The piece of code works by having 5 objects that track the properties mentioned before, and whenever the array is called, we run a for loop to have all the elements drawn with their tracked properties.

# Creators
Jacob Proulx (proulxj@emmanuel.edu)
Nikholas Srnka (srnkan@emmanuel.edu)

Last edited December 7th, 2023.
