# Spa Game Final Project By Arlette Cabral
Intro to Programming 1101- 12/10/2020

# Instructions & Documentation

1. Open the Project Index to run the code.

2. Click and drag with the mouse the left cucumber on the left eye and the other cucumber on the right eye.

3. Click and drag the brush at the top left corner and cover the client's face and blemishes with the green face mask coming out of the brush.

4. Then proceed to remove each cucumber from the eyes.

5. Click and drag the towel over the client's face to wipe away the face mask. 

6. Enjoy your final results!


Every object has four main functions: `checkPickup()`, `draw()`, `dragged()`, and `released()`. They all help the objects like the brush, cucumbers, and towel to move around properly.

  -The `checkPickUp()` function checks if an object has been picked up by using the mouse coordinates to return true of false while the offsets allow for an object to be picked up from anywhere.

  -The `draw()` function draws the image uploaded for the object.

  -The `dragged()` function updates the coordinates to match the cursor and allow the dragging of objects.

  -The `released()` function releases an object from dragging with the mouse coordinates when the mouse is no longer pressed.

Within the cucumber objects, there are snap functions that place the cucmbers on each eye automatically when they are near the coordinates mentioned in the if-statement.

In the towel object there is the variable `toErase` that holds the function `findIndex()` which uses the array `brush.maskEllipses` to find the current value of the element in the array that passes/fails the `collideRectCircle()` function (This function returns true if the coordinates of the towel collide with the coordinates of any ellipse from the face mask).

This same concept is used to make the blemishes erase with the towel.

A for loop is used along with the `brush.maskEllipses` array to continuously produce ellipses for the face mask as the brush drags.

The functions `mousePressed()`, `mouseDragged()`, and `mouseReleased()`, use the functions defined in each object to make them work.

