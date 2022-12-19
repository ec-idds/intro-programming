# Pacman
Programming Final Project: Pacman Re-creation

GitHub Page:  https://mcataldo5.github.io/Pacman/

**Marissa Cataldo**

**Introduction**

This project is intended to replicate the game "Pac-Man." As a child, I really enjoyed playing Pac-Man at the arcade. After studying p5.js in intro to computer programming, I wanted to replicate Pac-Man to a certain degree. I used many of the coding terms learned in both class and on my own to complete this program. I worked alone on this project, therefore I am responsible for the entire program.

**Instructions**

If you have played Pac-Man in the past, then you will already be familiar with the point of the game. The objective of the game is to collect all of the food (yellow dots) without touching the two ghosts. In order to move Pacman himself, you need to use the up, down, left, and right keys on the keyboard. Each key will move Pacman respectively. Pacman must stay in the path and cannot move through the blue barriers. He also cannot move out of the canvas. 

Each yellow dot is worth 5 points. Once Pacman 'eats' a yellow dot, it will disappear from the screen and increase the score of the game. In order to win the game, Pacman must eat all the yellow dots for a total score of 425 points. When the score reaches 425, then "YOU WON" will appear on the canvas. 

The red and blue ghosts are evil and need to be avoided from Pacman. If Pacman comes in contact with either of the ghosts, then the game will end and "GAME OVER" will appear on the screen. 

**What I was able to Finish**

In my initial project proposal, I intended to have certain goals completed for the finished code. I updated the goals at the milestone submission for my project. In the end, I was able to accoplish these goals: First, I was able to upload Pacman, the Blue Ghost, and the Red Ghost images from the internet. Second, I was able to create the blue barriers that Pacman cannot go through when navigating the maze. Third, I was able to create the rows of yellow dots and make then disappear when Pacman 'eats' them. The more Pacman eats, the higher the score. I changed the value of the points to be increments of 5, not 15. Fourth, I was able to make the two ghosts move continously as the program is running. Once Pacman and one of the ghosts come in contact, then the game ends. Fifth, I was able to get Pacman to move around the maze using the arrow keys. 

**What I did not Include**

After creating my program, I realized that I did not need to use certain functions that I intended to use in the proposal. I wanted to use the collide() function, but instead used the dist() function. The dist() function helped determine the distance from Pacman to the ghosts and Pacman to the yellow dots in order to end the game and score more points respectively. I also did not use HTML to display the score. I simply added it to the canvas. In additon to those, I also did not include sound. I was unsure of copyright issues and did not want to risk anything. 

**Credits**

Images were taken from these websites:

Pacman: https://www.cleanpng.com/png-professor-pac-man-arcade-game-single-player-video-613502/ 

Blue Ghost and Red Ghost: https://www.cleanpng.com/free/pacman.html
