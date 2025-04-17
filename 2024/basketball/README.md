# Final Project
This Codio project is your final project workspace and turn-in. 

This project is configured using "pair programming" mode for collaboration. 
Read more about how that works here: https://docs.codio.com/students/courses/pair-programming.html#id1

You will write the instructions to use your program, and your final report, in this README file, replacing its current contents. 
You will use [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) format to write this file.

# Code Requirements
- Be a complete and working program, ready to demo
- Instructions & Documentation (for someone else to run and use the program, written in **this README file**, in Markdown)
- It should pass the "Check Code" linter completely cleanly.

# Report Document
- In this README file (using Markdown formatting)
- fallaha@emmanuel.edu, santiagoj@emmanuel.edu, guerrierm@emmanuel.edu

- This project is a simple basketball-themed game where players 
aim to score 50 points within 30 seconds by dragging a ball into a hoop.
 The game includes animations, audio feedback for 
 winning and losing, and a graphical user interface.

- For new users you simply use the mouse or touch pad on your device to 
drag the basketball within the hoops coordinates to continuously
score yourself points, goal is to reach 50 points!

- The basketball game began with a simple idea: design an entertaining and dynamic game centered on shooting a basketball.
 We quickly progressed through the fundamental principles, such as controlling the ball with the mouse and configuring the hoop and scoring system.
  A key issue was getting the ball to behave properly when tossed, particularly when trying to create a "throw" game mechanic , which requires the ball to continue moving after the mouse is released.
	 This lead us to taking a different approach when creating our game. 
  One of our successes was the construction of the timer and score system, which were critical components in keeping the game current.
 The 30-second countdown and real-time feedback on the scoreboard helped us feel a feeling of urgency and progress.
 We also effectively integrated sound effects, such as a losing buzzer and a winning sound when the player gets a high score.
Another important achievement was developing a mechanism that pauses the game when the player achieves 56 points, resulting in a "You Win!" screen. 
The code's structure and teamwork enabled us to handle issues while keeping the project on track. Ultimately, the concept evolved into a playable, enjoyable game with a solid base. 
The most satisfying component was watching how the individual pieces, from ball movement to scoring system and game flow, came together to create a unified experience. 
Despite certain problems, the team's collaboration allowed us to overcome barriers and successfully complete the game.

- For each contributor, highlight a chunk of code you're particularly proud of, describe it, and explain why you like it so much (~1 paragraph each plus the code chunk).
	- pro tip: use [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code) to make your code blocks look good in the Readme
	

- Gus was satisfied of the audio integration, which makes the game come to life. He concentrated on acquiring and creating sound effects, such as the "swish" sound when the ball passes through the hoop and the buzzer sound when the timer runs out.
 These sounds provide an immersive experience and strengthen the player's "realistic" connection to the game. The win sound, which plays when the player reaches the target score, provides a sense of accomplishment.
  The attention to sounds tiny details ensures that each action feels satisfying, which contributes to the overall gameplay setting.
function preload() {
		 scoreSound = loadSound('sound.mp3');
    buzzer = loadSound('buzzer.wav');
    winSound = loadSound('YOU WIN.wav');
		}

- Josh is proud of his work on the game loops, particularly how the ball's interaction with the hoop influences the score.
 He constructed the loop so that every time the ball enters the hoop, the score is increased by two points and the ball is immediately reset to its starting position. 
 This continuous loop of scoring and ball repositioning makes the game feel immediate and satisfying. Josh also added the scoring sound, which reinforces the positive feedback whenever the player scores. 
 The constant change of these loops guarantees that the game plays smoothly.
if (ball.y < hoop.y + hoop.height && ball.y >  hoop.y && ball.x > hoop.x && ball.x < hoop.x + hoop.width)
{ 
	score += 2; // increases by 2
	resetBall(); }

- Mahari takes pride in the design of the scoreboard and timer.
 He created a visually appealing and useful display that shows both the score and the remaining time, ensuring that players always have a clear picture of their progress.
  The scoreboard has a translucent background to make the information stand out without crowding the screen. The interface is simple and easy to use, with the score and timer conveniently located.
	 Mahari's work guarantees that the player constantly understands how much time is remaining and how well they are performing, which improves the overall user experience and flow of the game.
	function drawscoreboard() {
fill(0, 0, 0, 150); 
rect(width - 350, 10, 300, 80, 10);

// Draw Score on Scoreboard
fill(255, 255, 255); 
textSize(18);
textAlign(CENTER, CENTER);
text("YOU", width - 300, 20);
text(score, width - 300, 60);

// Timer
textSize(18);
text("TIME", width - 100, 20);
text(timer, width - 100, 60);
}

Credits for any other resources you used.
https://www.soundboard.com/
https://mixkit.co/free-sound-effects/basketball/
	- Formatting is simple: if the license requires it, give the name, the link, and what license you're using it under.

# Submission
- Report: README.md
- All code in this Codio assignment (`sketch.js`, `index.html`, and any other files or assets)
- **To Submit:** mark this assignment as complete.

Once submitted, your project will be downloaded from Codio and put on the [Final Project Archive page](https://github.com/ec-idds/intro-programming) so that you can show your family and friends, and so future students can draw inspiration. If you do NOT want your project featured on the archive page, please tell the instructor.

