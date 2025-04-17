#  Introducing: MarkJack!
#### Created by:
- **Jayden Reyes**: reyesj@emmanuel.edu
- **Diego Serra**: serrad@emmanuel.edu
- **Jax Schegel**: shegelj@emmanuel.edu
#### Our creative spin on many peoples favorite game at the casino, Blackjack!
This project was built upon the game’s core logic. Players can interact with the game by pressing keyboard controls to “hit”, or draw another card, “stay”, or keep their hand, as well as provide real-time updates to the dealer’s and player’s actions and values. Furthermore, the program calculates hand values, handles Ace flexibility, and implements dealer behavior to mimic casino rules For instance, the dealer stands on 17 or higher. The game is very user-friendly and includes visual representations of cards, a central game message, and a result announcement for win, loss, or tie conditions. The project showcases programming techniques we learned in class like array manipulations and conditional rendering.The name was inspired by our amazing professor, Mark!
## How to Play MarkJack
This game has two players: Mark, the dealer, and the player.
 - The dealer and the player are each given two cards.
 -  You can hit or stay if the two cards don’t add up to 21. 
	- Hitting means you chose to add another card. 
	- Staying means you did not choose to add another card. 

**The goal of the game is to get your value close to 21 as possible.**
- Whoever can reach the closest to 21, without going over wins. 
- If the dealer or the player goes over 21, the opposing player wins. 
-  Refreshing the code allows you to start a new game. 
				- This also refreshes the cards. 
 ### Keyboard Controls
	 
	 - Press “H” to hit
	 	-  add another card to your current set  
	 - press “S” to stay
		- keep the number of cards that you currently have 
	* Hint:Look at the values to determine your next move 
### Our Story
We started off by creating our Blackjack table. That’s the green and black you see. We then proceeded to create the canvas for the cards themselves. We also labeled the game “Blackjack”, which we later named “Markjack”, to add our creative spin on it. At this point, we were thinking to ourselves “Hey, it’s better than nothing”. After getting something started, we thought it would be funny to make Mark the dealer. So, we proceeded to implement a picture of Mark next to the dealer cards. Jax was able to figure out the code for that. We were having fun with it. Then, we realized we actually have to get the game to work. The team brainstormed on what needed to be done. We discussed the game logic and the potential code we would need to get the game functioning. We all spent hours trying to figure out the code to make the game cohesive. First, Diego researched a library that could potentially be the engine for our game. Mark assisted us heavily with implementing the library, but his efforts were in vain. By the way, we deeply apologize for this Mark. It seemed practical at first, but we later realized using the library was harder than it looks. Jax tried taking a crack at using the library first. He worked on trying to get game functions to work with the library for hours, but he had no luck. Then, Jayden spent hours trying to figure out how to get the code to work with the library, and he also had no luck. Diego also attempted to use the library, but he had no success. At this point, we started to lose faith in the library, and we sent out an email to remove it. Once the library was removed, we were able to create a game that worked. Diego utilized keycode to create buttons for hitting, staying, showing the value of the cards, and allowing the dealer to go if the player chooses to stay. The team also implemented code to calculate the value of the cards. Finally, Jax spent hours adding some finishing touches to the project to make it more visually appealing. In the end, we were able to create a functioning game of Blackjack, which we named, Markjack!
### Chunk Highlights!
##### Jayden 
-  I am particularly proud of being able to start off the project by creating the Blackjack table. I also produced the canvas for the first few cards that appeared in the code. I created something out of nothing. My group was able to build off my work, and I am proud that I was able to do that. I also provided further creative insight in terms of visuals and worked a bit on getting the game to actually work. Some of my game logic/functionality code stayed in   [^1]  .
##### Diego 
- A  chuck of code that I am proud of is the dealerTurnLogic Function. I like this code because it allows for the game to work more like a game, rather than a machine. With this function, we am able to to make the dealer automatically add cards to the dealers hand, as long as his hand value is less than 17. I think that I like this code so much because originally, we had the dealerLogic set up to when you pressed space, then the dealer would add cards, almost like a second player. However, through a while function, we were able to get the cards to draw automatically, which definitely allows the game to feel more seamless.
##### Jax
- A part of the code that I am proud of implementing is the code that counts the cards and displays the value on the left hand side of the card incase you can't add up the values. This also made it easier to determine when the game ended when coding it to and made sure it was accurate as it treated the face cards as 10 and Aces initially as 11 so if the total exceeds 21 it adjusts the Aces' value from 11 to 1 until the total is 21 or less.
### Favorite Code:

```
//Jaydens Code
let cardNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
let cardSuites = ["Hearts", "Spades", "Clubs", "Diamonds"];
let deck = [];
let playerHand = [];
let dealerHand = [];
let cardWidth = 80;
let cardHeight = 120;
class Card {
 constructor(cardNumbers, cardSuites) {
   this.number = cardNumbers;
   this.suite = cardSuites;
   this.image = null;
 }
 getCardName() {
   return `${this.number}_of_${this.suite},`.toLowerCase();
 }
 display(x, y) {
   fill(255);
   rect(x, y, cardWidth, cardHeight, 10);
   fill(0);
   textAlign(CENTER, CENTER);
   textSize(10);
   text(`${this.number} of ${this.suite}`, x + cardWidth / 2, y + cardHeight / 2);


 }
}


// Diegos Code


function dealerTurnLogic() {
  let dealerValue = calculateValue(dealerHand);
  while(dealerValue < 17) {
    const newCard = deck.pop();
    dealerHand.push(newCard);
    dealerValue = calculateValue(dealerHand);
    if(dealerValue > 21) {
      gameResult = "Mark has gone over 21! You Win! Go gamble FR now!!!";
      gameOver = true;
      redraw(); // stops the game loop
      return;
    }
    gameOver = true;
  determineWinner();
  redraw();
}


// Jaxs Code


function calculateValue(hand) {
  let value = 0; // Total value of the hand
  let aceCount = 0; // Tracks the number of Aces in the hand

  // Loop through all cards in the hand
  hand.forEach(card => {
    if (card.number === 'Jack' || card.number === 'Queen' || card.number === 'King') {
      value += 10; // Face cards are worth 10
    } else if (card.number === 'Ace') {
      value += 11; // Aces are initially worth 11
      aceCount++;
    } else {
      value += parseInt(card.number, 10); // Number cards are added as their numeric value
    }
  });

  // Adjust value for Aces if the total exceeds 21
  while (value > 21 && aceCount > 0) {
    value -= 10; // Reduce Ace value from 11 to 1
    aceCount--; // Decrease the number of Aces to adjust
  }

  return value; // Return the total hand value
}
function preload() {
 // Load card images
function calculateValue(hand) {
 let value = 0;
 let aceCount = 0;
 hand.forEach(card => {
   if(card.number === 'Jack' || card.number === 'Queen' || card.number === 'King') {
     value += 10;
   } else if(card.number === 'Ace') {
     value += 11;

