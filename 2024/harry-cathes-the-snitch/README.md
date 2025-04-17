# Harry Catches the Snitch
#### Ashley Hennessey (hennesseya@emmanuel.edu)
#### Sam Marasca (marascas@emmanuel.edu)

# Description of our project
For our final project, we have created a fun game that features the well known and loved character, Harry Potter. Our game is a digital version of a twist on the wizard game of quidditch! The keys are used to fly harry around the screen while he dodges quaffles flying around at random. Harry's goal is to get to the snitch and catch it by clicking the w key. Once he catches it, there is an end screen that features Gryffindor house colors!


# Instructions (How to Play)
- To start the game, run the program. The balls will start to move and spread around the field
- Use the arrow keys to fly Harry around the field
- Use the arrow keys to dodge the quaffles (larger balls)
- Fly Harry to the snitch (small ball with wings)
- Catch the snitch by clicking the w key as Harry is over it
- You won the quidditch match!

# Our Story (Process, Highs, Lows)
 We chose to create a game inspired by the game of quidditch in the Harry Potter series. To begin, Sam found images of the pitch, quaffles, snitch, and Harry. The next step was incorporating the images into objects. This is where we encountered our first challenge; the images were downloaded into the project file, but were not appearing on the canvas. The solution to this was simple and easy to fix, as all we had to do was rename the folder that the images were moved to. The file was renamed to "images" and the code was edited to match. When the page was refreshed, the images were appearing correctly. 

The next step in creating the game was to write an array within a loop, which would create multiple quaffles. This is where we encountered our biggest challenge; every time we wrote an array it would break the code, and everything we tried to solve this issue did not work. The closest we got on our own was multiple quaffles on top of each other, but they never separated. After lots of trial and error, we learned that we needed to create an object class for the quaffles instead of just using one single object. With the class, we were able to create multiple quaffles that moved around the screen instead of staying on top of one another.

Once the quaffles and the snitch were moving around the screen the way we wanted, we had to write constraints to keep them within the canvas and stop them from disappearing. The only difficult aspect of this section of code was where to write it; after putting it in multiple functions, we realized it needed to be inside the objects themselves. We then made it so that Harry could be controlled using the up, down, left, and right arrow keys.  

The final step in our project was installing Collide2d. We made it so that when Harry collides with the snitch and the "w" key is pressed at the same time, the game is won. When that happens, an end screen appears and the game is over. 
# Code Highlights
#### Sam's Highlight
```
for(let i = 0; i < 12; i++) {
    quaffleArray.push(new Quaffle());
  }
```
I am most proud of our work on this array that gets all of our quaffles on to the screen. This array gave us a lot of trouble. We knew we wanted a bunch of quaffles flying around the screen to dodge, and we knew an array was the best way to do this. Unfortunately, at first we thought this was going to be very easy. Then we tried about 10 different ways to write this array. For a while we broke our code and just had a bunch of quaffles on top of each other. Then we found out we needed to use this array along with a class. This was awesome and made our code easy to read and also made our quaffles move just how we wanted!! I am proud of our persistence and also the ability it gave us to learn a new concept.




#### Ashley's Highlight
```
  move() {
    this.x += random(-8, 8);
    this.y += random(-8, 8);

    if(this.x > width) {
      this.x -= 30;
    }
    if(this.y > height) {
      this.y -= 30;
    }
    if(this.x < 0) {
      this.x += 30;
    }
    if(this.y < 0) {
      this.y += 30;
    }
  }
```
I am most proud of our work on the objects, specifically on how the quaffles and the snitch move around the canvas. We wanted to have multiple quaffles and one snitch moving around the screen, with the snitch moving much faster than the quaffles. Getting all of them to stay within the canvas and not disappear was challenging at first, but once we figured out how to write the code and where to place it, it was fun playing around with the numbers used. This code keeps all of the quaffles and the snitch within the width and height of the canvas. When they reach the width or height, they move toward the center by 30 pixels. This code made the game feel smoother and look better; it really tied the whole game together. 

##### Credits
- all images are pngs that are under creative commons licenses
