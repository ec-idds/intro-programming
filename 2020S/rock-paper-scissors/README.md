# Final-Project
Rock, Paper, Scissors

# Instructions:  <h1>
Choose either rock, paper or scissors by typing in your answer. It is case sensitive so make sure you type in exactly how the prompt asks. If you want to play again hit the refresh button. 

# Credits:  <h1>
  Andrew Kotarski
  kotarskia@emmanuel.edu 


# Statement: <h1> 
In this project I set out to create a game of Rock, Paper, Scissors that involved audio and images. I choose to use Audio to make the game experience more enjoyable and also learn how audio and JavaScript work together. The images add a nice artistic take on the game and make the program more enjoyable then just looking at words. I took an Javascript/HTML approach for uploading images which helped me learn some of the basic intertwining of java script and HTML.

# Analysis: <h1> 
  I used the preload function which allowed me to upload my external audio files before any other functions were executed. I also used a document object which represents the HTML document that is displayed in the window. This allowed access to the modification of the document content because a Document object has properties that refer to other objects. I also used an array of values that the program would randomly select to give me the programs choice for the game. 
  
  # Preload:  <h1> 
  ```
function preload () {
  winSong = new Audio('sounds/winner.m4a');
  loseSong = new Audio('sounds/lost.m4a');
  tieSong = new Audio('sounds/tie.m4a');
}
```
  The preload function allowed me to upload my audio files before anything else in my program was executed. The preload function tells the browser to download these files and cache them. This is helpful because excessive calls to objects aren't the best for the browser and by caching them it stores the object inside a defined variable. We use that user defined variable instead of references to the object. In this snippet of code I use the constructor Audio() which creates a HTMLAUDIOELEMENT object. 

# Creating Images:  <h1> 
   ```
  function Tie() {
  document.write('we tied');
  var tie = document.createElement('img');
  tie.src = ('Images/tie.PNG');
  document.body.appendChild(tie);
}

function Rock() {
  var rock = document.createElement('img');
  rock.src = ('sounds/rock.jpg');
  document.body.appendChild(rock);
}

function Paper() {
  var paper = document.createElement('img');
  paper.src = ('Images/paper.jpg');
  document.body.appendChild(paper);
}

function Scissors() {
  var scissors = document.createElement('img');
  scissors.src = ('Images/scissors.jpg');
  document.body.appendChild(scissors);
}
```
  When these functions are called they display an image. The variable is initialized with the call to the createElement function using the image type specified by “img”. In HTML “img” is the designation of an image tag name in an image element. We designate a source file for the image by assigning the src the file name of the image. SRC is an image attribute in HTML. What these two lines of code do is the equivalent of creating a HTML code. The call to appendchild puts the image element inside the body element where it can be displayed. The body element is where all the content is displayed on an HTML page. 

# Random :  <h1> 
```
var programChoices = [0, 1, 2];
var programInput = programChoices[(Math.floor(Math.random() * programChoices.length))]
if (programInput == programChoices[0]) {
  programInput = "rock";
} else if (programInput == programChoices[1]) {
  programInput = "paper";
} else {
  programInput = "scissors";
}
```
In this snippet I create an array and using ``` programChoices[(Math.floor(Math.random() * programChoices.length))] ``` it randomly chooses a value in the array. Then based on what value it chooses I assigned it either rock, paper, or scissors. 

# Comparison:  <h1>
```
var compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    return tieSong.play() && Tie();
  }
  if (choice1 === "rock") {
    if (choice2 === "scissors") {
      document.write('Good Job, rock beats scissors');
      winSong.play();
      Rock();



    } else {
      document.write('computer wins, paper beats rock');
      loseSong.play();
      Paper();
    }
  }
  if (choice1 === "paper") {
    if (choice2 === "rock") {
      document.write('nice job, paper beats rock');
      winSong.play();
      Paper();

    } else {
      document.write(':( unfortunate, scissors beats paper');
      loseSong.play();
      Scissors();

    }
  }
  if (choice1 === "scissors") {
    if (choice2 === "rock") {
      document.write('dang, rock beats scissors');
      loseSong.play();
      Rock();

    } else {
      document.write('woo hoo scissors beats paper');
      winSong.play();
      Scissors();

    }
  }
};
```
In this snippet this where my function compare(), compares the user’s input to the program's random selection. Based on the two choices I invoke the audio using the play() method. I also call my Image functions so that it displays an image of the winner whether that be an image of a rock paper or scissor. 

# What I wanted to achieve but didn't: <h1>


In  my proposal I wanted to display an image and audio for both the program and the user but I ended up only displaying an image of the winner and an audio that either told the user they won or that they lost. I also would have liked to animate an image of the user choice and the program choice but I found that to be difficult. I spent a lot of time trying to figure out how to upload my own audio files because the loadSound did not work for me(I probably did something wrong). I spent a lot of time looking up different ways to have audio play in javascript and I finally got it to work by using the new Audio() constructor. Uploading Images also took a lot of time for me to figure out. I don’t know what I was doing wrong but the loadImage did not display an image on the webpage. I found my solution by once again spending a lot of time looking up different ways to display images in javascript, and through trial and error I found a solution. 

# Deployment:  <h1>
https://drewkotarski.github.io/Final-Project/
