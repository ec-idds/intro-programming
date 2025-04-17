# Final Code Report
###### *Estella Del Moro, Dana Dinmukhametova, and Maya Galindo*
###### delmoroe@emmanuel.edu, dinmukhametovad@emmanuel.edu, galindom@emmanuel.edu

## Project Description
Have you ever wanted to play music that matches your mood without the added pressure of picking the right song? This program allows individuals to choose from 4 distinct moods, depending on how they feel. We created this project because we believe that music has a profound impact on emotions, and allowing people to tailor their music listening experience can help make music listening a more positive experience for everyone. 
The songs are randomly generated from playlists curated by project members. Randomly generating mood-matching songs offers personalization while still maintaining an elements of surprise. And through this, we may be able to introduce users to new music they may not normally listen to, effectively broadening their taste and creating an appreciation for different genres or artists. 

User Instructions
------
**Step 1**: Decided how you are feeling or what kind of music you want to listen to
**Step 2**: Click on the corresponding cassette tape
**Step 3**: Press play on the music player and enjoy!

Story Behind the Project
------
Our first struggle when planning this project was designing the program in a way that was challenging enough to accurately represent an accumulation of all the work we have done this semester. Initially, we wanted to simply present a playlist after clicking on an emotion. But, after some slight restructuring we decided to randomly play 1 song from a playlist. This introduced that challenge of finding a way to embed copyrighted songs into the program. We started by first trying a Spotify player that embeds the sound through unique song URIs. Ultimately this didn’t work because the player we used stopped working unexpectedly. So, we implemented an Apple Music player instead and generated links to the songs on Apple Music and replaced the URIs in the arrays. This ended up working and the rest of the project, including the overall usability of the program, came shortly after. 

Favorite Code Chunks By Member
------
**Maya:** I really enjoyed the site design aspect of this project. I had a really fun time making each individual cassette deck and then choosing a color scheme. I also uploaded a display font for the site header. Figuring out how to implement them into the code was a lot easier than I realized, especially since the button functions were already done and all I needed to do was preload the files and add them using createImg(). 
  ```javascript
   happyButton = createImg('happyButton.png');
   happyButton.position(150, -40);
   happyButton.size(buttonWidth, buttonHeight);
   happyButton.mousePressed(function() {
     selectMood('Happy');
```
**Dana:**
I enjoyed working out the code for our buttons and the main function using the concepts we learned in class. I love how Maya incorporated images for the buttons which are far more appealing than traditional buttons. I liked how the selectMood function works for different moods and picks a random song for each one. It makes the program feel more personal and interactive for the user. And overall I like how we chose and implemented the concept of randomness. Using the random function to pick songs adds a fun surprise and keeps things interesting for users every time they choose a mood.

```focusedButton = createImg('focusedButton.png');
   focusedButton.position(-30, 100);
   focusedButton.size(buttonWidth, buttonHeight);
   focusedButton.mousePressed(function() {
     selectMood('Focused');

  function selectMood(mood) {
   let choice = '';
   if(mood === 'Sad') {
     choice = random(sadSongs);
   }
   if(mood === 'Happy') {
     choice = random(happySongs);
   }
   if(mood === 'Focused') {
     choice = random(focusedSongs);
   }
   if(mood === 'Chill') {
     choice = random(chillSongs);
   }
   player.set(choice);
   player.show();
 }
 ```

**Estella:**
Beyond the obvious fun of collaborating on playlists, I loved discovering all the modes of embedding music players into Javascript, getting a taste of working in HTML, and compiling their embed identifier codes into playlist arrays for easy reference. The "chill" playlist is my personal favorite; lots of good picks in there. It was exciting to experience and (somewhat) understand the developer side of Apple Music by using Apple Music Marketing Tools rather than just being a consumer of their product. 
```HTML
<iframe height="175" width="100%" title="Media player" src="https://embed.music.apple.com/us/album/prom/1239976329?i=1239976606&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1239976606&amp;theme=auto" id="embedPlayer" style="border: 0px; border-radius: 12px; width: 100%; height: 175px; max-width: 660px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write"></iframe>
```
```javascript
const chillSongs = [
   "https://embed.music.apple.com/us/album/john-redcorn/1710287981?i=1710288313&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1710288313&amp;theme=auto",
   "https://embed.music.apple.com/us/album/on-melancholy-hill/859841880?i=859844939&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=859844939&amp;theme=auto",
   "https://embed.music.apple.com/us/album/east-liberty/1662166098?i=1662166099&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1662166099&amp;theme=auto",
   "https://embed.music.apple.com/us/album/yosemite/1421241217?i=1421243212&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1421243212&amp;theme=auto",
   "https://embed.music.apple.com/us/album/strawberry-fields-forever/1441163490?i=1441163771&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1441163771&amp;theme=auto",
   "https://embed.music.apple.com/us/album/for-emma/947059824?i=947059838&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=947059838&amp;theme=auto",
   "https://embed.music.apple.com/us/album/dodger-blue-feat-wallie-the-sensei-siete7x-roddy-ricch/1781270319?i=1781270543&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1781270543&amp;theme=auto",
   "https://embed.music.apple.com/us/album/headhigh/1739234520?i=1739235771&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1739235771&amp;theme=auto",
   "https://embed.music.apple.com/us/album/bag-lady/1440755899?i=1440756610&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1440756610&amp;theme=auto",
   "https://embed.music.apple.com/us/album/massive/1630230040?i=1630230657&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1630230657&amp;theme=auto",
   "https://embed.music.apple.com/us/album/the-adults-are-talking/1498121188?i=1498121711&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1498121711&amp;theme=auto" ,
   "https://embed.music.apple.com/us/album/heaven-or-las-vegas/258198881?i=258200075&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=258200075&amp;theme=auto" ,
   "https://embed.music.apple.com/us/album/cherry-coloured-funk/258198881?i=258198956&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=258198956&amp;theme=auto" ,
   "https://embed.music.apple.com/us/album/summers-over/1716760713?i=1716760714&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1716760714&amp;theme=auto" ,
   "https://embed.music.apple.com/us/album/champagne-coast/445411199?i=445411367&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=445411367&amp;theme=auto" ,
   "https://embed.music.apple.com/us/album/shes-always-a-woman/158815463?i=158816065&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=158816065&amp;theme=auto" ,
   "https://embed.music.apple.com/us/album/alien-blues-acoustic/1638363480?i=1638363489&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1638363489&amp;theme=auto" ,
   "https://embed.music.apple.com/us/album/cause-im-a-man/1440838039?i=1440838697&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1440838697&amp;theme=auto" ,
   "https://embed.music.apple.com/us/album/like-a-tattoo/158796559?i=158796590&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=158796590&amp;theme=auto" ,
   "https://embed.music.apple.com/us/album/harvest-moon/135132797?i=135132767&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=135132767&amp;theme=auto" ,
   "https://embed.music.apple.com/us/album/dead-of-night/1446363542?i=1446363543&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1446363543&amp;theme=auto",
 ];
```