 /* Final Project
  * Estella Del Moro, Dana Dinmukhametova, Maya Galindo
  * 3 December 2024
  ******************************************/

 let sadButton;
 let happyButton;
 let chillButton;
 let focusedButton;
 let displayFont;
 let backgroundPaper;
 let player = {
   player: {},
   showStyle: '', // hold the original style data for the player for when we want it to appear
   hideStyle: "position: absolute; width:0; height:0; border:0;",
   show: function() {
     this.player.style = this.showStyle;
   },
   hide: function() {
     this.player.style = this.hideStyle;
   },
   init: function() {
     this.player = select('iframe').elt;
     this.showStyle = this.player.style;
     this.player.style = this.hideStyle;
   },
   set: function(url) {
     this.player.src = url;
   }
 };

 const happySongs = [
   "https://embed.music.apple.com/us/album/miami/206201734?i=206201782&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=206201782&amp;theme=auto",
   "https://embed.music.apple.com/us/album/candle-flame-feat-erick-the-architect/1676151993?i=1676152309&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1676152309&amp;theme=auto",
   "https://embed.music.apple.com/us/album/youre-the-one-feat-syd/1092026376?i=1092027162&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1092027162&amp;theme=auto",
   "https://embed.music.apple.com/us/album/animal/1440754651?i=1440754846&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1440754846&amp;theme=auto",
   "https://embed.music.apple.com/us/album/santeria/1440838803?i=1440839501&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1440839501&amp;theme=auto",
   "https://embed.music.apple.com/us/album/homemade-dynamite-remix-feat-khalid-post-malone-sza/1444276097?i=1444276102&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1444276102&amp;theme=auto",
   "https://embed.music.apple.com/us/album/ribs/1440818584?i=1440818666&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1440818666&amp;theme=auto",
   "https://embed.music.apple.com/us/album/america-has-a-problem-feat-kendrick-lamar/1688801938?i=1688801942&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1688801942&amp;theme=auto",
   "https://embed.music.apple.com/us/album/diva/296016891?i=296016901&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=296016901&amp;theme=auto",
   "https://embed.music.apple.com/us/album/partition/939783754?i=939783789&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=939783789&amp;theme=auto",
   "https://embed.music.apple.com/us/album/photo-id-single/1554593910?itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1554593910&amp;theme=auto",
   "https://embed.music.apple.com/us/album/stolen-dance/1440823766?i=1440824347&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1440824347&amp;theme=auto",
   "https://embed.music.apple.com/us/album/new-light/1568819304?i=1568819309&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1568819309&amp;theme=auto",
   "https://embed.music.apple.com/us/album/double-life-from-despicable-me-4/1750124157?i=1750124164&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1750124164&amp;theme=auto",
   "https://embed.music.apple.com/us/album/freaking-out-the-neighborhood/561048714?i=561048720&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=561048720&amp;theme=auto",
   "https://embed.music.apple.com/us/album/witchy-feat-childish-gambino/1747039538?i=1747040108&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1747040108&amp;theme=auto"
 ];

 const focusedSongs = [
   "https://embed.music.apple.com/us/album/oblivion/499874506?i=499875050&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=499875050&amp;theme=auto",
   "https://embed.music.apple.com/us/album/veridis-quo/697194953?i=697196125&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=697196125&amp;theme=auto",
   "https://embed.music.apple.com/us/album/somebody-else/1440832181?i=1440832196&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1440832196&amp;theme=auto",
   "https://embed.music.apple.com/us/album/work-song/900672435?i=900672691&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=900672691&amp;theme=auto",
   "https://embed.music.apple.com/us/album/yes-im-changing/1440838039?i=1440838293&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1440838293&amp;theme=auto",
   "https://embed.music.apple.com/us/album/eventually/1440838039?i=1440838298&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1440838298&amp;theme=auto",
   "https://embed.music.apple.com/us/album/let-it-happen/1440838039?i=1440838060&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1440838060&amp;theme=auto",
   "https://embed.music.apple.com/us/album/other-people/509665145?i=509665361&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=509665361&amp;theme=auto",
   "https://embed.music.apple.com/us/album/beige/1573372877?i=1573372885&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1573372885&amp;theme=auto",
   "https://embed.music.apple.com/us/album/heartbeat/1771713810?i=1771714372&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1771714372&amp;theme=auto",
   "https://embed.music.apple.com/us/album/kingston/1452886606?i=1452886612&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1452886612&amp;theme=auto",
   "https://embed.music.apple.com/us/album/love-demons/1509500810?i=1509501518&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1509501518&amp;theme=auto",
   "https://embed.music.apple.com/us/album/call-it-fate-call-it-karma/601140186?i=601140646&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=601140646&amp;theme=auto",
   "https://embed.music.apple.com/us/album/space-song/997913392?i=997914096&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=997914096&amp;theme=auto",
   "https://embed.music.apple.com/us/album/dark-red/1207820151?i=1207820258&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1207820258&amp;theme=auto",
   "https://embed.music.apple.com/us/album/time-moves-slow/1608122086?i=1608122095&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1608122095&amp;theme=auto",
   "https://embed.music.apple.com/us/album/chateau-feel-alright/1476578353?i=1476578719&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1476578719&amp;theme=auto"
 ];

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
   "https://embed.music.apple.com/us/album/the-adults-are-talking/1498121188?i=1498121711&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1498121711&amp;theme=auto",
   "https://embed.music.apple.com/us/album/heaven-or-las-vegas/258198881?i=258200075&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=258200075&amp;theme=auto",
   "https://embed.music.apple.com/us/album/cherry-coloured-funk/258198881?i=258198956&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=258198956&amp;theme=auto",
   "https://embed.music.apple.com/us/album/summers-over/1716760713?i=1716760714&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1716760714&amp;theme=auto",
   "https://embed.music.apple.com/us/album/champagne-coast/445411199?i=445411367&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=445411367&amp;theme=auto",
   "https://embed.music.apple.com/us/album/shes-always-a-woman/158815463?i=158816065&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=158816065&amp;theme=auto",
   "https://embed.music.apple.com/us/album/alien-blues-acoustic/1638363480?i=1638363489&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1638363489&amp;theme=auto",
   "https://embed.music.apple.com/us/album/cause-im-a-man/1440838039?i=1440838697&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1440838697&amp;theme=auto",
   "https://embed.music.apple.com/us/album/like-a-tattoo/158796559?i=158796590&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=158796590&amp;theme=auto",
   "https://embed.music.apple.com/us/album/harvest-moon/135132797?i=135132767&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=135132767&amp;theme=auto",
   "https://embed.music.apple.com/us/album/dead-of-night/1446363542?i=1446363543&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1446363543&amp;theme=auto",
   "https://embed.music.apple.com/us/album/ill-call-u-back/1440843344?i=1440843480&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1440843480&amp;theme=auto",
   "https://embed.music.apple.com/us/album/flea-market/1388073103?i=1388074096&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1388074096&amp;theme=auto"
 ];

 const sadSongs = [
   "https://embed.music.apple.com/us/album/august-underground/1619405400?i=1619405942&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1619405942&amp;theme=auto",
   "https://embed.music.apple.com/us/album/spectre/1113546075?i=1113546470&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1113546470&amp;theme=auto",
   "https://embed.music.apple.com/us/album/forget-her/1046187510?i=1046187601&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1046187601&amp;theme=auto",
   "https://embed.music.apple.com/us/album/close-to-you/1440933547?i=1440933727&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1440933727&amp;theme=auto",
   "https://embed.music.apple.com/us/album/white-ferrari/1146195596?i=1146195725&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1146195725&amp;theme=auto",
   "https://embed.music.apple.com/us/album/dear-april-side-a-acoustic/1506122308?i=1506122309&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1506122309&amp;theme=auto",
   "https://embed.music.apple.com/us/album/bad-religion/1440765580?i=1440766937&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1440766937&amp;theme=auto",
   "https://embed.music.apple.com/us/album/misuse-oh/1478829676?i=1478829681&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1478829681&amp;theme=auto",
   "https://embed.music.apple.com/us/album/im-your-man/1697335341?i=1697335883&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1697335883&amp;theme=auto",
   "https://embed.music.apple.com/us/album/sandcastles/1460430561?i=1460430746&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1460430746&amp;theme=auto",
   "https://embed.music.apple.com/us/album/pluto-projector/1480410681?i=1480410853&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1480410853&amp;theme=auto",
   "https://embed.music.apple.com/us/album/doomsday/1604657567?i=1604657578&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1604657578&amp;theme=auto",
   "https://embed.music.apple.com/us/album/all-i-need/1109714933?i=1109715293&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1109715293&amp;theme=auto",
   "https://embed.music.apple.com/us/album/i-know-the-end/1504699857?i=1504700020&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1504700020&amp;theme=auto",
   "https://embed.music.apple.com/us/album/please-please-please-let-me-get-what-i-want/802231063?i=802231085&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=802231085&amp;theme=auto",
   "https://embed.music.apple.com/us/album/tommys-party/1404025195?i=1404025546&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1404025546&amp;theme=auto",
   "https://embed.music.apple.com/us/album/alone-again-naturally/1716093460?i=1716094421&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1716094421&amp;theme=auto",
   "https://embed.music.apple.com/us/album/here-there-and-everywhere/1441164670?i=1441164817&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1441164817&amp;theme=auto",
   "https://embed.music.apple.com/us/album/angeles/313302066?i=313302077&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=313302077&amp;theme=auto"
 ];

 //interface images
 function preload() {
   sadButton = loadImage('sadButton.png');
   happyButton = loadImage('happyButton.png');
   chillButton = loadImage('chillButton.png');
   focusedButton = loadImage('focusedButton.png');
   displayFont = loadFont('displayFont.otf');
   backgroundPaper = loadImage('backgroundPaper.jpg');
 }

 function setup() {
   createCanvas(1450, 550);
   player.init();
   image(backgroundPaper, 0, 0, width, height);

   //title 
   textFont(displayFont);
   textSize(30);
   textAlign(CENTER, CENTER);
   fill(255, 95, 6);
   text('Choose Your Vibe Today', width / 2, 50);
   fill(220);

   //creating buttons
   let buttonWidth = 150;
   let buttonHeight = 100;

   sadButton = createImg('sadButton.png');
   sadButton.position((width / 3), (height * 0.75));
   sadButton.size(buttonWidth, buttonHeight);
   sadButton.mousePressed(function() {
     selectMood('Sad');
   });

   happyButton = createImg('happyButton.png');
   happyButton.position((width / 1.75), (height * 0.75));
   happyButton.size(buttonWidth, buttonHeight);
   happyButton.mousePressed(function() {
     selectMood('Happy');
   });

   focusedButton = createImg('focusedButton.png');
   focusedButton.position((width / 3), (height * 0.25));
   focusedButton.size(buttonWidth, buttonHeight);
   focusedButton.mousePressed(function() {
     selectMood('Focused');
   });

   chillButton = createImg('chillButton.png');
   chillButton.position((width / 1.75), (height * 0.25));
   chillButton.size(buttonWidth, buttonHeight);
   chillButton.mousePressed(function() {
     selectMood('Chill');
   });
 }

 //mood selection and player initiation
 function selectMood(mood) {
   print("Mood:", mood);
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