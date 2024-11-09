# Contributors 
## Savanna Bouley
<bouleys@emmanuel.edu>

# Description of the project
This project uses one of the p5.js libraries. The specific library is called Mappa.js, it creates an interactive map when paired with a function like Leaflet. Then when using an overlay function you are able to draw ellipses on top of the interactive map and they adjust for zooming in and out. When an ellipse is click with a mouse a picture appears that corresponds to the location on the map. 

# How to play 
Click the red dots in any order you want to do a small tour of places I would like to go. To get the image to disappear click again where there are no dots. 

# Story of process
The process was complicated from the beginning, with the initial setting up of the map library. From there it became apparent that it would be a lot of code to write if I didn't use arrays. I used arrays for the picture files in order to correlate them to their latitude and longitude on the map. I also ran into a problem when I wanted the image to appear when the ellipse was clicked. For that problem I used a boolean variable to set up detection and for the image to appear. I had to use a fair amount of loops to connect the different pieces so they worked cohesively. I had a fun time picking out the pictures I wanted to use for each location. I felt like I was a medieval traveler because I had to find the latitude and longitudes of each location     

# Highlighted code
```js
function mouseClicked() {
  let clicked = false;
  for(let item of images) {
    let pos = myMap.latLngToPixel(item.point.lat, item.point.lng);
    const d = dist(mouseX, mouseY, pos.x, pos.y);
    if(d < 20) {
      currentImage = item;
      clicked = true;
      break;
    }
  }
```
First it initialization with a boolean variable. Then it creates a loop through the images. The loop goes through image array. Then the let pos = myMap.latLngToPixel(item.point.lat, item.point.lng) convert latitude/longitude to pixels coordinates on the canvas. The const d calculates the euclidean distance between the mouse and the image. If the distance is less than 20 pixels between mouse and image the item is set to current image, if clicked. Breaks out of the loop so its not infinite. I like this chunk of code because it simplified the detection of the ellipse and correlate it the location where the image appears. 

# Credits
### Mappa.js 
p5.js library 
<https://mappa.js.org/docs/introduction-to-web-maps.html>
License is free for user 
### Images 
<https://theconversation.com/aussie-rules-rules-thanks-to-the-eight-hour-working-day-27630>
<https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.gadventures.com%2Fmedia-server%2Fdynamic%2Fblogs%2Fposts%2FG-Adventures%2F2023%2F01%2FPataDina_HikingPatHeader.png&tbnid=P3M6F5emo4wwTM&vet=12ahUKEwjMhpPA9I2DAxUGDmIAHYPVDyIQMygDegQIARBZ..i&imgrefurl=https%3A%2F%2Fwww.gadventures.com%2Fblog%2Fpatagonia-hiking-hubs%2F&docid=gCLNhLzrzlM-HM&w=1600&h=900&q=patagonia%20argentina%20hiking&client=safari&ved=2ahUKEwjMhpPA9I2DAxUGDmIAHYPVDyIQMygDegQIARBZ>
<https://www.explore.com/1191948/why-you-should-add-hiking-rainbow-mountain-in-peru-to-your-bucket-list/>
<https://robhasawebsite.com/boston-rob-mariano-bio/>
<https://www.britannica.com/place/Mongolia>
<https://r.search.yahoo.com/_ylt=AwrijbDBV3pluXEJ2emWnIlQ;_ylu=c2VjA2ZwLWF0dHJpYgRzbGsDcnVybA--/RV=2/RE=1702545473/RO=11/RU=https%3a%2f%2fwallpapercave.com%2fmadagascar-wallpaper/RK=2/RS=YqzEletez_fuF5DObAVe8bSGeMs->
<https://r.search.yahoo.com/_ylt=AwrNPseaVnplUH0KbD.WnIlQ;_ylu=c2VjA2ZwLWF0dHJpYgRzbGsDcnVybA--/RV=2/RE=1702545178/RO=11/RU=https%3a%2f%2fwww.dailysabah.com%2ftravel%2f2018%2f03%2f24%2fcape-town-a-vibrant-city-with-unique-nature-on-the-edge-of-africa/RK=2/RS=UIl3yedEzr2r0gyd3.h65aauM2s->
<https://www.ou-et-quand.net/blog/crete-ou-grece/>
<https://theworldpursuit.com/morocco-blue-city-chefchaouen/>
<https://theculturetrip.com/europe/switzerland/articles/the-top-6-family-friendly-ski-resorts-in-the-swiss-alps>
<https://wallpapercave.com/mallorca-wallpapers>
<https://www.wallpapers-for-phone.com/android,reine-norway-norwegian-lofoten-mountains-village>
<https://alfonsogendreau.weebly.com/blog/15-best-things-to-do-in-horsham>
