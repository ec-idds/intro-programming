var winSong;
var loseSong;
var tieSong;


function preload() {
  winSong = new Audio('sounds/winner.m4a');
  loseSong = new Audio('sounds/lost.m4a');
  tieSong = new Audio('sounds/tie.m4a');
}


preload();

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
var userInput = prompt("Do you choose rock, paper or scissors?");
var programChoices = [0, 1, 2];
var programInput = programChoices[(Math.floor(Math.random() * programChoices.length))]
if (programInput == programChoices[0]) {
  programInput = "rock";
} else if (programInput == programChoices[1]) {
  programInput = "paper";
} else {
  programInput = "scissors";
}
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

document.write(('your choice' + '  ' + userInput));
document.write("<br>");
document.write(('the computers choice' + '  ' + programInput));
document.write("<br>");
compare(userInput, programInput);
