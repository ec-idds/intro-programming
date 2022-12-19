/*****************************************************************************************
 * Final Project
 * by Jarod Gambino <gambinoj@emmanuel.edu> and Francesca Clausson <claussonf@emmanuel.edu>
 * 29 November 2022
 *
 * 
 *
 ****************************************************************************************/

let page;
let background1;
let background2;
let button1;
let button2;
let button3;
//pictures
let knightPic;
let rangerPic;
let wizardPic;
//endings
let knight;
let ranger;
let wizard;
let teamwork;
//conditions
let metRanger = false;


function preload() {
  background1 = loadImage('Mountains.jpg');
  background2 = loadImage('shop example.png');
  knightPic = loadImage('knight.png');
  rangerPic = loadImage('ranger.png');
  wizardPic = loadImage('wizard.png');
}

function setup() {
  createCanvas(500, 600);
  page = 0;
  knight = 0;
  ranger = 0;
  wizard = 0;
  teamwork = 0;
  // image from 0-300, text from 315-400, buttons from  400-500
  textSize(16);
  textFont('Verdana');
  textAlign(LEFT);
  //button 1
  button1 = createButton('Next');
  button1.position(width / 2 - 50, 500);
  button1.size(100, 76);
  button1.mouseClicked(Button1);
  //button2
  button2 = createButton('Yes');
  button2.position(width / 4 - 50, 500);
  button2.size(100, 75);
  button2.mouseClicked(Button2);
  if(page === 0) {
    button2.hide();
  }
  //button 3
  button3 = createButton(Button3);
  button3.position(width / 4 * 3 - 50, 500);
  button3.size(100, 75);
  if(page === 0) {
    button3.hide();
  }
  button3.mouseClicked(Button3);
}

function draw() {
  //background stuff 
  background('brown');
  fill('tan');
  rect(0, height / 2, width, height / 2);
  fill(20);
  image(background2, 0, 0, width, 299);
  //pages start here
  if(page === 0) {
    text("Welcome to Gameland, a small village mostly disconnected from the rest of the civilized world. You recently inherited a shop from your father located here. Right when you finish setting things up you hear rumors of a massive serpentine creature that has moved in nearby, a Naga.",
      5, 315, 495);
    image(background1, 0, 0, width, 299);
  }
  if(page === 1) {
    text("Recently, this Naga has been ravishing the countryside outside your village and cutting off the village's access to trade routes. Three adventurers native to Gameland have come to slay the beast.",
      5, 315, 495);
  }
  if(page === 2) {
    text("Today, you have multiple items to sell in your General Goods store. You have only been in the village for a brief period of time, but the townsfolk know you to be a person of wisdom. Surely, the adventurers will come to you for advice and items.",
      5, 315, 495);
  }
  if(page === 3) {
    image(knightPic, 0, -20, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("A valiant knight enters your store. His armor is rusty and broken; worse still, his greatsword is also chipped and dulled. He looks at you with a bright smile. 'Good morning newcomer! I hope you are enjoying our small village. I hear this Naga has venom that can kill a full bull in seconds, so what say you, should I get better armor or a better sword, I only have the gold for one.'",
      5, 315, 495);
  }
  if(page === 4) {
    image(knightPic, 0, -20, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("His warm smile widens and he looks at you with a sudden familiarity. 'I didn't know about you at first, but you are clearly strong in mind and spirit. Of course, armor holds most importance, as I can't do much dead. Given your good sense, I'll let you in on my plan. I have been training this village for basic combat, and I think their best fighters could work together slay the beast if provided weaponry. Give that idea some thought.' With those final words, he picks up his new set of armor and leaves the shop whistling.",
      5, 315, 495);
  }
  if(page === 5) {
    image(rangerPic, 0, 50, 500, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    if (metRanger === true){
    text("The man looks dejected for a moment before perking up once again. 'Ah well. I am the lead hunter of Gameland and its former monster hunter. The knight took that title after the troll incident. It is nice to meet you, but I have to go back to scouting now.' And with that he scampers back outside",
      5, 315, 495);
    } else {
    text("A younger man rushes in with a bow slung to his back. He appears to be in a hurry. 'Hi! I am the hunter and former monster slayer of this village. I came to pick up some arrows, and now I much go back to hunting, goodbye!' And just as he came, he returned back to the forest.",
      5, 315, 495);
    }
  }
  if(page === 6) {
    image(knightPic, 0, -20, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("The knight's happy smile turns to a cold look. 'You would do good to remember that keeping people alive is more important than anything you slay. Perhaps you would be more useful to a hunter than a knight.' With a scowl set into his face, he takes the sword and makes his way out of the shop.",
      5, 315, 495);
  }
  if(page === 7) {
    image(rangerPic, 0, 50, 500, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("A few hours pass before the shop door opens again, a younger man runs in, obviously out of breath as he looks at you with an excited expression and a bow slung across his back. 'I heard from the knight that you might be excited to hear my idea. There is a fabled dungeon with a legendary snake-slaying scimitar said to be in the mountains nearby, would you be willing to fund an expedition to find it?!'",
      5, 315, 495);
  }
  if(page === 8) {
    image(rangerPic, 0, 50, 500, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("'Perfect, I will start making preparations right away, but I still need more manpower. Next time the knight comes in let him know about my plan and that you support it, that should get him on my side. Alright, there's much left to do, bye!' With an entusiastic grin on his face he rushes out of the shop.",
      5, 315, 495);
  }
  if(page === 9) {
    image(wizardPic, 0, 0, 500, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("Just as the hunter leaves, the door calmly swings open and a woman with fine robes and a large hat walks in. With a wave of her hand two goblets appear as if from thin air. She offers one to you and says, 'It seems I am the last for you to meet. I'd rather we skip the pleasantries for now. Tell me, after meeting the other two, do you think they would work well as a team against the beast?",
      5, 315, 495);
  }
  if(page === 10) {
    image(wizardPic, 0, 0, 500, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("How interesting, I did not expect that answer. Perhaps this threat is enough to bring us together, but first I willl need to show the knight that magic is to be trusted. Let me think on how to do that and then I will return.' Without another word she leaves the store.",
      5, 315, 495);
  }
  if(page === 11) {
    image(wizardPic, 0, 0, 500, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("Yes. That was the answer I suspected. If I am being honest, I would have chosen the same. Ah well. I will take some time to research the beast before coming to a solution, then I will be back.' Without another word she leaves the store.",
      5, 315, 495);
  }
  if(page === 13) {
    image(knightPic, 0, -20, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    if(knight === 1){
    text("After the mysterious witch left, the rest of the day is quiet. The next day, as the sun rises and you go to set up your shop, you once again find the knight already waiting there. 'So, have you considered my offer to arm the militia?'",
      5, 315, 495);
    } else {
    text("After the mysterious witch left, the rest of the day is quiet. The next day, as the sun rises and you go to set up your shop, you once again find the knight already waiting there. 'After a day of reflection, I must confess that perhaps you were right. In these troubling times sometimes a stronger sword is best. So what suggestions do you have?'",
      5, 315, 495);  
    }
  }
  if(page === 14) {
    image(knightPic, 0, -20, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("'Ah, I see! The Ranger's got his ideas in your head. I suppose the plan doesn't sound all that bad. In fact, it might actually work. Alright, I'll assist you both.'",
      5, 315, 495);
  }
  if (page === 15) {
    image(knightPic, 0, -20, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("'Bah! Perhaps I was wrong about you, your suggestion is rubbish. People these days are too quick to rely on unnatural magic. I will never be found working alongside... that witch.' In a rage, the knight storms away.",
      5, 315, 495);
  }
   if(page === 16) {
    image(knightPic, 0, -20, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("The knight puffs out his shoulders in pride. 'Lovely, you can use some of your leftover supplies to arm the villagers. Once they are armed, we'll have a small fighting force. I'll tell the villagers the good news.' The knight strolls out of the shop.",
      5, 315, 495);    
  }
  if (page === 17){
    image(knightPic, 0, -20, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("The Knight lets out a deep sigh, 'Alright, if that's what you think is best I will trust your wisdom. If I hear any news I will bring it straight to you.'",
      5, 315, 495);
  }
  if (page === 18) {
    image(wizardPic, 0, 0, 500, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("The wizard meanders into the shop. 'I have nearly finished the antivenom. Now I only need someone nimble enough to obtain a sample of the venom from the Naga. The bowman will suffice.'",
      5, 315, 495); 
  }   
  if (page === 19) {
  image(wizardPic, 0, 0, 500, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("The wizard enters the shop, pausing only to glance outside before closing the door and locking it. 'I have finally thought of a way to get the metalhead to trust me. The next time, he goes scouting  I will lure the Naga towards him, and then save his life using magic. After being saved by magic, he will have to trust it.'",
      5, 315, 495);  
  } 
  if (page === 20) {
    image(wizardPic, 0, 0, 500, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("'Alright good, I'll prepare the things we need. By tomorrow we will all be the closest of allies.' She flashes you a rare smile before she leaves the shop.",
      5, 315, 495);
  }
  if (page === 21) {
  image(rangerPic, 0, 50, 500, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("The next day begins with the hunter entering the shop surprisingly early. 'Alright I'm ready, what's the plan?'",
      5, 315, 495);  
  }
if (page === 22) {
  image(rangerPic, 0, 50, 500, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("The hunter's face lights up with astonishment. 'You got him to agree with MY plan? That's a first for the history books. I'm ready when you are!'",
      5, 315, 495);  
  }
  if (page === 24) {
  image(rangerPic, 0, 50, 500, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("'Ah, you went with the knight's plan, huh? Makes sense, of the three of us, he's the smartest. Don't tell the wizard I said that. Alright, I'll join the force then.'",
      5, 315, 495);  
  }
  if (page === 25) {
  image(rangerPic, 0, 50, 500, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("'Get venom from the Naga without getting hurt? Yeah, sounds right up my alley, I can do it no problem. I'll be back faster than you can say poison.'",
      5, 315, 495);  
  }
  if (page === 26) {
  image(knightPic, 0, -20, 500);
    push();
    fill('tan');
    rect(0, height / 2, width, height / 2);
    pop();
    text("The knight sheepishly enters the shop. 'Hey, while I was out scouting that wizard saved me with some of her spells. And, well, I just wanted to say sorry for blowing up at you earlier, you were right. We should work together.'",
      5, 315, 495);  
  }
  if (page === 27) {
  image(background1, 0, 0, width, 299);
    text("Thanks to the Ranger's deft exploring skills, the group finds the scimitar of serpent slaying. The naga is defeated by the same ranger weilding the blade. He is renowned for years to come as the Serpent Slayer. Thank you for playing",
      5, 315, 495);  
  }
  if (page === 28) {
  image(background1, 0, 0, width, 299);
    text("Under the knight's leadership, the villagers band together with supplies provided by you, and kill the serpent as a group with minimal causualties. This leads the knight to receiving the official recognition of commander of the village. He trained the villagers to keep the town safe for years to come. Thank you for playing.",
      5, 315, 495);  
  }
  if (page === 29) {
  image(background1, 0, 0, width, 299);
    text("With the venom acquired, the Wizard was able to craft an antivenom that made the Naga's attacks completely useless. By using both the antivenom and her own charm magic, the wizard tamed the Naga and they spent the next century guarding the village together. Thank you for playing",
      5, 315, 495);  
  }
  if (page === 30) {
  image(background1, 0, 0, width, 299);
    text("Upon realizing that the adventurers work better together than apart, the Naga slaying was just a stepping stone in what became a lifelong friendship among the three. Their adventuring exploits became known across the land. Thank you for playing",
      5, 315, 495);  
  }
  //game over screen
  if(page === 21 && ranger < 2 && knight < 2 && wizard < 2){
    clear();
    fill(0);
    rect(0, 0, width, height);
    fill('red');
    text("The Naga has won, Gameland is no more.", 0, height/2);
    button1.hide();
    button2.hide();
    button3.hide();
  }
  //page counter
  //fill(0);
  //text(page, 50, height - 50);
  //text(knight, 50, height - 20);
  //text(ranger, 50, height - 30);
  //text(wizard, 50, height - 40);
}

function Button1() {
  if(page === 0) {
    page = 1;
  } else if(page === 1) {
    button1.html('Open Shop');
    page = 2;
  } else if(page === 2) {
    button2.show();
    button2.html('Sword');
    button1.html('Armor');
    page = 3;
  } else if(page === 3) {
    button2.hide();
    button1.html('Next');
    knight += 1;
    page = 4;
  } else if(page === 4) {
    page = 5;
  } else if(page === 5) {
     button2.show();
    button2.html('Yes');
    button1.html('No');
    page = 9;
  } else if(page === 6){
    button2.show();
    button2.html('Approve');
    button1.html('Disapprove');
    metRanger = true;
    page = 7;
  }
    else if(page === 7) {
    button2.hide();
    button1.html('Next');
    page = 5;
  } else if(page === 8) {
    button2.show();
    button2.html('Yes');
    button1.html('No');
    page = 9;
  } else if(page === 9) {
    button2.hide();
    button1.html('Next');
    wizard = 1;
    page = 11;
  } else if(page === 10 || page === 11){
    if (knight === 1){
    button1.html('No');
    button2.show();
    button2.html('Yes');
  } else {
    button1.html('Keep working on your own for now');
if(ranger === 1){
 button2.show();
 button2.html('Have you heard about the dungeon...');          
}          
}
if(teamwork === 1){
  button3.show();
  button3.html('What about working with the wizard');
}    
  page = 13;
  }else if(page === 13) {
    button2.hide();
    button3.hide();
    button1.html('Next');
    page = 17;
  } else if(page === 14) {
    ranger += 1;
    if (ranger >= 2) {
      button1.html('The Knight knows and supports the excavation of the dungeon');
    } else {
      button1.hide();
    }
    if (knight >= 2) {
      button2.show();
      button2.html('The knight has prepared a militia force to take down the beast');
    } else{ 
      button2.hide();
    } 
    if (wizard >= 2){
      button3.show();
    button3.html('The wizard would like you to get a sample of the venom');
    } else {
      button3.hide();
    }
    //big check for endings
    page = 21;
  } else if(page === 15) {
    button3.hide();
    button1.hide();
    button2.show();
    button2.html('Next');
    page = 19;
    } else if(page === 16){
      knight += 1;
if (ranger >= 2) {
      button1.html('The Knight knows and supports the excavation of the dungeon');
    } else {
      button1.hide();
    }
    if (knight >= 2) {
      button2.show();
      button2.html('The knight has prepared a militia force to take down the beast');
    } else{ 
      button2.hide();
    } 
    if (wizard >= 2){
      button3.show();
    button3.html('The wizard would like you to get a sample of the venom');
    } else {
      button3.hide();
    }
   page = 21;
  } else if(page === 17) {
    button1.html('Yes'); 
    button2.show();
    button2.html('No');
    page = 18;
  } else if(page === 18) {
    wizard = 5;
    if (ranger >= 2) {
      button1.html('The Knight knows and supports the excavation of the dungeon');
    } else {
      button1.hide();
    }
    if (knight >= 2) {
      button2.show();
      button2.html('The knight has prepared a militia force to take down the beast');
    } else{ 
      button2.hide();
    } 
    if (wizard >= 2){
    button3.show();
    button3.html('The wizard would like you to get a sample of the venom');
    } else {
      button3.hide();
    }
    page = 21;
  } else if(page === 19) {
if (ranger >= 2) {
      button1.show();
      button1.html('The Knight knows and supports the excavation of the dungeon');
    } else {
      button1.hide();
    }
    if (knight >= 2) {
      button2.show();
      button2.html('The knight has prepared a militia force to take down the beast');
    } else{ 
      button2.hide();
    } 
    if (wizard >= 2){
      button3.show();
    button3.html('The wizard would like you to get a sample of the venom');
    } else {
      button3.hide();
    }
   page = 21;
  } else if(page === 20) {
page = 26;
  } else if(page === 21) {
page = 22;
  button2.hide();
  button3.hide();
  button1.html('Next');
  } else if(page === 22) {
page = 27;
button1.hide();
  } else if(page === 24) {
page = 28;
button1.hide();
  } else if(page === 25) {
page = 29;
button1.hide();
  } else if(page === 26) {
page = 30;
button1.hide();
  } 
}

function Button2() {
  if(page === 3) {
    page = 6;
    button1.html('Next');
    button2.hide();
  } else if(page === 7) {
    button2.hide();
    button1.html('Next');
    ranger = 1;
    page = 8;
  } else if(page === 9){
    teamwork = 1;
    button2.hide();
    button1.html('Next');
    page = 10;
  }
  else if(page === 10) {
    page = 12;
    button2.html('Next');
    button3.hide();
    button1.hide();
    knight = 1;
  } else if(page === 13) {
    button1.html('Next');
    button3.hide();
    button2.hide();
    if (knight === 1){
      page = 16;
      knight += 1;
    } else {
    page = 14;
    ranger += 1;
  }  
} else if(page === 18) {
if (ranger >= 1) {
      button1.html('The Knight knows and supports the excavation of the dungeon');
    } else {
      button1.hide();
    }
    if (knight >= 1) {
      button2.show();
      button2.html('The knight has prepared a militia force to take down the beast');
    } else{ 
      button2.hide();
    } 
    if (wizard >= 1){
    button3.html('The wizard would like you to get a sample of the venom');
    } else {
      button3.hide();
    }
   page = 21;
} else if(page === 19){
  button1.show();
  page=20;
  button1.html('Next');
  button2.hide();
} else if(page === 21){
  page = 24;
  button2.hide();
  button3.hide();
  button1.show('Next');
}
}
function Button3() {
  if (page === 13){
  button2.hide();
  button3.hide();
  button1.html('Next');
  page=15;            
} else if(page === 21){
  page = 25;
  button2.hide();
  button3.hide();
  button1.show('Next');
}
}

//Knight
//Pia_Sarcina
//https://www.artstation.com/artwork/o2BVwk
//Ranger
//L3monJuic3
//https://www.deviantart.com/l3monjuic3/art/Commission-Half-Elf-Ranger-843729874
//Wizard
//Rémi Jacquot
//https://www.artstation.com/artwork/wJ6KKL
//Shop
//raqsonu
//https://www.deviantart.com/raqsonu/art/Merchant-Shop-573280694

