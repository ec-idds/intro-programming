# Final Project Report
Anna Da Costa, and Teresa Fleming 

dacostaa@emmanuel.edu, flemingt@emmanuel.edu

## Project Description
Are you curious to know what type of song matches your vibe? This programs allows the user to answer three simple questions and have the program choose a song for them. We decided to make this project because we both love music and we believe the type of music you would like could be related to your answers to these questions. We tried to pick songs from all different genres some that a lot of people will know and some that they never have heard. Our hope is also that they can learn some new music.

## User Instructions
**Step 1:** Answer questions 1, 2, and 3 by clicking the corresponding button. **Step 2:** Click the "GET PERSONALIZED SONG" button. **Step 3:** Click the link at the bottom of the page which takes you to the website with your song on it.

## Story Behind the Project

We wanted to incorporate our love for music in this project by making an interactive project that users could get a fun personalized song from! We had so many challenges throughout the making of this project. One of first issues we encountered was how to make buttons to represent each option and making them clickable. We knew we wanted each combination of options to generate a song. It seemed too hard at first so we wanted to change and make it spit out just any random song but then we ended figuring out how it would work and did it the first way. Another big challenge was the HTML coding. We knew the basics but we had to research a lot more to be able to run most of our program on it. We also originally wanted to embed the song into the program, similar to how the "Mood Music" did theirs. But we ended up just inserting the link to the personalized song at the bottom.
Our biggest victory was definitely just getting the code to work. Being able to answer the three questions and get out a song.

## Favorite Code Chunks by Member

**Anna:** My favorite part of the code was formatting it. The choosing the buttons and using HTML to get them in the right place and tell them what to do.
``` plan1Button.mouseClicked(function() {
   planSelected = "0";
     select("#plan1").addClass("selected");
     select("#plan2").removeClass("selected");
     select("#plan3").removeClass("selected");
      });
      plan2Button.mouseClicked(function() {
        planSelected = "1";
        select("#plan2").addClass("selected");
        select("#plan1").removeClass("selected");
        select("#plan3").removeClass("selected");
      });
      plan3Button.mouseClicked(function() {
        planSelected = "2";
        select("#plan3").addClass("selected");
        select("#plan1").removeClass("selected");
        select("#plan2").removeClass("selected");
      });
      place1Button.mouseClicked(function() {
        placeSelected = "0";
        select("#place1").addClass("selected");
        select("#place2").removeClass("selected");
        select("#place3").removeClass("selected");
      });
      place2Button.mouseClicked(function() {
        placeSelected = "1";
        select("#place2").addClass("selected");
        select("#place1").removeClass("selected");
        select("#place3").removeClass("selected");
      });
      place3Button.mouseClicked(function() {
        placeSelected = "2";
        select("#place3").addClass("selected");
        select("#place1").removeClass("selected");
        select("#place2").removeClass("selected");
      });
      drink1Button.mouseClicked(function() {
        drinkSelected = "0";
        select("#drink1").addClass("selected");
        select("#drink2").removeClass("selected");
        select("#drink3").removeClass("selected");
      });
      drink2Button.mouseClicked(function() {
        drinkSelected = "1";
        select("#drink2").addClass("selected");
        select("#drink1").removeClass("selected");
        select("#drink3").removeClass("selected");
      });
      drink3Button.mouseClicked(function() {
        drinkSelected = "2";
        select("#drink3").addClass("selected");
        select("#drink1").removeClass("selected");
        select("#drink2").removeClass("selected");
      });
    }
```
**Teresa:** My favorite part of the project was making the combinations for the songs and linking the songs from Apple Music into the program. The idea was given to me by a friend, and it helped us so much. 
```var songChoice = {
      "0-0-0": {
        title: "Rhiannon",
        url: "https://music.apple.com/us/song/rhiannon/202271847"
      },
      "0-0-1": {
        title: "About You",
        url: "https://music.apple.com/us/song/about-you/1850019038"
      },
      "0-0-2": {
        title: "Let Alone The One You Love",
        url: "https://music.apple.com/us/song/let-alone-the-one-you-love/1817609508"
      },
      "0-1-0": {
        title: "Barcelona (Papasessions #2)",
        url: "https://music.apple.com/us/song/barcelona-papasessions-2/1843736309"
      },
      "0-1-1": {
        title: "La Gent Que Estimo",
        url: "https://music.apple.com/us/song/la-gent-que-estimo/1617063464"
      },
      "0-1-2": {
        title: "Gasolina",
        url: "https://music.apple.com/us/song/gasolina/1786000124"
      },
      "0-2-0": {
        title: "Mary Did You Know?",
        url: "https://music.apple.com/us/song/mary-did-you-know/1049043307"
      },
      "0-2-1": {
        title: "White Winter Hymnal",
        url: "https://music.apple.com/us/song/white-winter-hymnal/281086428"
      },
      "0-2-2": {
        title: "Rockin' Around the Christmas Tree",
        url: "https://music.apple.com/us/song/rockin-around-the-christmas-tree/1442732095"
      },
      "1-0-0": {
        title: "Von Dutch",
        url: "https://music.apple.com/us/song/von-dutch/1739080354"
      },
      "1-0-1": {
        title: "All I Ask",
        url: "https://music.apple.com/us/song/all-i-ask/1544494912"
      },
      "1-0-2": {
        title: "2s n 3s",
        url: "https://music.apple.com/us/song/2s-n-3s/1779801204"
      },
      "1-1-0": {
        title: "Pa' Que La Pases Bien",
        url: "https://music.apple.com/us/song/pa-que-la-pases-bien/1247228818"
      },
      "1-1-1": {
        title: "Young, Wild & Free",
        url: "https://music.apple.com/us/song/young-wild-free-feat-bruno-mars/480436634"
      },
      "1-1-2": {
        title: "DtMF",
        url: "https://music.apple.com/us/song/dtmf/1787023936"
      },
      "1-2-0": {
        title: "It Will Rain",
        url: "https://music.apple.com/us/song/it-will-rain/467980717"
      },
      "1-2-1": {
        title: "Stereo Love",
        url: "https://music.apple.com/us/song/stereo-love-radio-edit/1712039609"
      },
      "1-2-2": {
        title: "Escapism",
        url: "https://music.apple.com/us/song/escapism/1646318967"
      },
      "2-0-0": {
        title: "Constellations",
        url: "https://music.apple.com/us/song/constellations/1632493012"
      },
      "2-0-1": {
        title: "Heaven Knows I'm Miserable Now",
        url: "https://music.apple.com/us/song/heaven-knows-im-miserable-now/802231076"
      },
      "2-0-2": {
        title: "Mr. Fox In The Fields",
        url: "https://music.apple.com/us/song/mr-fox-in-the-fields/1467938685"
      },
      "2-1-0": {
        title: "How Can I Make It OK?",
        url: "https://music.apple.com/us/song/how-can-i-make-it-ok/1554144909"
      },
      "2-1-1": {
        title: "Back To Me",
        url: "https://music.apple.com/us/song/back-to-me/1803199508"
      },
      "2-1-2": {
        title: "On the Floor",
        url: "https://music.apple.com/us/song/on-the-floor-feat-pitbull/1440622264"
      },
      "2-2-0": {
        title: "The Christmas Song",
        url: "https://music.apple.com/us/song/the-christmas-song-merry-christmas-to-you/1435551062"
      },
      "2-2-1": {
        title: "fowards beckon rebound",
        url: "https://music.apple.com/us/song/forwards-beckon-rebound/1526437444"
      },
      "2-2-2": {
        title: "Merry Christmas, Please Don't Call",
        url: "https://music.apple.com/us/song/merry-christmas-please-dont-call/1775877096"
      },
    };
  ```
  ## Credit 
  We want to give thanks to Estella Del Moro, Dana Dinmukhametova, and Maya Galindo for inspiring this project! Also huge shout out to Mark Sherman and Jake Gonzalez for all their help and bright ideas for this project! The graphics that were used for the buttons came from Canva (free to use), so we also want to thank those awesome artists! 

We also want to recognize the external resources and tutorials that we used for help, so huge thank you to W3 Schools, Geeks for Geeks, Stackoverflow, p5.js, Mozilla, and Sitepoint! 
