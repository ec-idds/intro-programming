let cardNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
let cardSuites = ["Hearts", "Spades", "Clubs", "Diamonds"];
let deck = [];
let playerHand = [];
let dealerHand = [];
let cardWidth = 80;
let cardHeight = 120;
let gameResult = "";
let gameOver = false;
let dealerImage; // dealer image
let dealerTurn = false;

class Card {// object of the card and 
  constructor(cardNumbers, cardSuites) {
    this.number = cardNumbers;
    this.suite = cardSuites;
    this.image = null;
  }
  getCardName() {// how the values show up on the card
    return `${this.number}_of_${this.suite},`.toLowerCase();
  }
  display(x, y) {// displaying the cards (and values) on the screen
    fill(255);
    rect(x, y, cardWidth, cardHeight, 10);
    if(this.suite === "Hearts" || this.suite === "Diamonds") {
      fill(255, 0, 0);
    } else {
      fill(0);
    }
    textAlign(CENTER, CENTER);
    textSize(16);

    text(this.number, x + cardWidth / 2, y + 20); // top center of the card
    text(this.suite, x + cardWidth / 2, y + cardHeight - 20);

  }
}

function preload() {
  // Load card images 
  dealerImage = loadImage('marksherman.png');
}

function setup() {
  createCanvas(800, 600);
  setupDeck();
  shuffle(deck, true);

  playerHand.push(deck.pop());
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());
  dealerHand.push(deck.pop());/// shows the 4 original cards
  noLoop();
}

function setupDeck() {// how the deck is created 
  for(let suite of cardSuites) {
    for(let number of cardNumbers) {
      deck.push(new Card(number, suite));
    }
  }
}

function draw() {
  background(34, 139, 34);
  drawTable();
  drawHands();
  if(gameResult !== "") {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text(gameResult, width / 2, 325);// shows the determineWinner text
  }
  if(dealerTurn && gameOver === false) {
    dealerTurnLogic();
  }
}

function drawTable() {
  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(255);
  text("Markjack", width / 2, 30);

  fill(0);
  rect(50, 100, width - 100, height - 200, 20);

  if(dealerImage) {
    image(dealerImage, width / 2 - 50, 50, 160, 160);// draws the tables
  }
}

function drawHands() {// draws the cards 
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);

  for(let i = 0; i < dealerHand.length; i++) {
    dealerHand[i].display(200 + i * (cardWidth + 10), 160);
  }
  // calculates the display dealer's hand total
  let dealerTotal = calculateValue(dealerHand);
  fill(255);
  textSize(16);
  text(`Total: ${dealerTotal}`, 200 - 60, 160 + cardHeight / 2);

  // draw the players hand
  for(let i = 0; i < playerHand.length; i++) {
    playerHand[i].display(200 + i * (cardWidth + 10), height - cardHeight - 50);
  }
  let playerTotal = calculateValue(playerHand);
  fill(255);
  textSize(16);
  text(`Total: ${playerTotal}`, 200 - 60, height - cardHeight - 50 + cardHeight - 50 + cardHeight / 2);
}
// calculates the display dealer's hand total
function calculateValue(hand) {// how the value of the cards is created
  let value = 0;
  let aceCount = 0;
  hand.forEach(card => {
    if(card.number === 'Jack' || card.number === 'Queen' || card.number === 'King') {
      value += 10;// if the number is a face card, the value is 10
    } else if(card.number === 'Ace') {
      value += 11;/// makes the Ace 11
      aceCount++;// makes sure it keeps track of the Aces ( in case they need to change) 
    } else {
      value += parseInt(card.number, 10);
    }

  });
  while(value > 21 && aceCount > 0) {// if the value is less than 21 and the count is 0 
    value -= 10;// Ace is 1
    aceCount--;
  }
  return value;

}

function keyPressed() {// keys in order for the game to work
  if(gameOver) return;
  if(keyCode === 72) {
    hitPlayer();
  } else if(keyCode === 83) {
    standPlayer();
  } else if(keyCode === 32 && dealerTurn) {
    determineWinner();
  }

}

function hitPlayer() {// how the the player adds a card 
  if(gameOver) return;
  const newCard = deck.pop();
  playerHand.push(newCard);// adds a new card and value 
  let playerValue = calculateValue(playerHand);// playerValue added in order to determine Winner
  if(playerValue > 21) {
    gameResult = "Player has gone over 21! You smell! ";
    gameOver = true;// allows the game to end
  }
  redraw();
}

function standPlayer() {
  if(gameOver) return;
  gameResult = "Player Stands.... Marks Turn";
  dealerTurn = true;// allows the turn to go to the dealer
  loop();
}

function dealerTurnLogic() {
  let dealerValue = calculateValue(dealerHand);
  while(dealerValue < 17) {

    // dealer draws another card

    const newCard = deck.pop();
    dealerHand.push(newCard);
    dealerValue = calculateValue(dealerHand);

    // check if the dealer goes over 21

    if(dealerValue > 21) {
      gameResult = "Mark has gone over 21! You Win! Go gamble FR now!!!";
      gameOver = true;
      redraw(); // stops the game loop
      return;
    }

  }
  gameOver = true;
  determineWinner();
  redraw();
}
function determineWinner() {
  let playerValue = calculateValue(playerHand);// sets player Value of hand 
  let dealerValue = calculateValue(dealerHand);// sets dealer value of hand

  if(playerValue > 21) {// all of the if/ else functions that allow the game to end 
    gameResult = "Player has gone over 21!Mark Wins";

  } else if(dealerValue > 21) {
    gameResult = "Mark has gone over 21!Player Wins";

  } else if(playerValue > dealerValue) {
    gameResult = "Player Wins! Time to put it all on Red!";

  } else if(dealerValue > playerValue) {
    gameResult = "Dealer Wins! So Sad So Sorry";

  } else {
    gameResult = "Its a tie? Womp, Womp";

  }

  gameOver = true;// no matter what, the game ends
  redraw();
}