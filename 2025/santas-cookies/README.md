# 🎄 Santa's Cookie Decorator! 🎄
### By: Olyvia Frongillo - frongilloo@emmanuel.edu

---

## Project Description
**Santa's Cookie Decorator** is a festive cookie-decorating simulator 
where the user assists Santa in decorating the gingerbread man on screen 
and receives a randomized rating upon completing their design. The 
project includes holiday-themed decoration items, background music, 
and cheerful visuals.

A drag-and-drop system allows users to freely move decorative items 
around the canvas. Each decoration is stored as a *Clothing* object
within an array, with each object containing its image, position (`x`,
`y`), and dimensions (`height`, `width`). The project also features a 
playful rating system: clicking a button produces a randomized rating 
selected from an array, adding a lighthearted game-like element.

---

## Instructions
- Use the decorations on the left side of the screen to decorate
the gingerbread cookie on the right.
- Click and drag any item to move it wherever you want on the canvas.
- When you're satisfied with your cookie design, press the **"rate my** 
**cookie!"** button at the bottom of the screen.
- Your rating will appear above the cookie.

---

## Creation Process
he creation process began with assembling all visual and audio assets
needed for the project. A background image was selected first, followed 
by the decorative item asset pack from *Truly Malicious*, and finally 
the background music that plays once the user interacts. 

After gathering assets, an array was created to store all *Clothing*
objects, each containing its image, position, and size. These items were 
organized neatly on-screen, accompanied by instructional text and a 
button that would later function as the rating trigger.

The drag-and-drop system was implemented using several mouse interaction 
functions. The `isMouseInside()` method detects whether the user's 
cursor is within a decoration. A loop within the `mousePressed()` 
function checks each item starting from the top-most item to determine if
the user clicked it. Once clicked, the selected becomes the current
`draggingItem`. The `mouseDragged()` function then updates the items
`x` and`y` coordinates as the user drags it, and `mouseReleased()`
resets the active item when the mouse is released.

To fix an early issue with decorations 'jumping' when clicked, an 
**offset** variable was added. This accounts for the difference between 
the mouse position and the decorations top-left corner, resulting in
smoother movement.

The rating system was created by adding an array of possible ratings and
detecting whether the user clicks within the rating buttons boundaries.
When pressed, a random rating is selected and displayed on screen.

---

## Project Highlight

```js
for(let i = clothing2.length - 1; i >= 0; i--) {
  if(clothing2[i].isMouseInside()) { //is the mouse over item?
    draggingItem = clothing2[i];  //this is the item being dragged
    offsetX = mouseX - draggingItem.x;
    offsetY = mouseY - draggingItem.y;

    clothing2.push(clothing2.splice(i,1)[0]);
    //moves clicked item to the front of the array(top layer)

    break;
  }
}
```

This section of the code is a highlight of the project. The use of
`splice()` ensures that the most recently dragged item is moved to the 
front of the array, allowing it to appear on top of other decorations. 
The addition of the offset variables helped eliminate jumpy or unnatural 
movement when items were clicked. Together, these improvements made 
the drag-and-drop interaction much smoother and visually appealing.

--- 

## Credits
- **Background Music:**
  [Frosty Winter Holiday Theme - OpenGameArt](https://opengameart.org/content/frosty-winter-holiday-comfy-storybook-theme-music-full-moon-over-yuletide-eve)
- **Decoration Asset Pack:**
  [Christmas Set 1 - Truly Malicious](https://trulymalicious.itch.io/christmas-set-1-free)
- **Font Download**
  [Pixel Letters Font - Geelyn Edits - FONTSPACE](https://www.fontspace.com/pixelletters-font-f22954)

---