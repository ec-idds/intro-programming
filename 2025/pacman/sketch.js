/*******************************************
 * A0: Assignment
 * Loden Broe <broel@emmanuel.edu>
 * 8 December 2025
 ******************************************/

// variables for the game that needed to be defined
let powerMode = false;        // if the ghosts can be eaten or not
let powerTimer = 0;           // timer for power pelet duration
const POWER_DURATION = 600;   // 10 seconds at 60 FPS giving a fair time for power up to be used

let score = 0;                // score for player
const DOT_SCORE = 10;         // what each dots poit value is

let gameOver = false;         // to know when the games over

// game and map setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// array for the map
// 0 = empty, 1 = wall, 2 = dot, 3 = power pellet
let map = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,2,2,2,2,2,1,2,2,2,2,3,1], // Pac-Man starts on empty tile
  [1,2,1,1,1,2,2,1,2,2,1,1,2,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,1,1,1,2,1,1,1,2,1,1,2,1],
  [1,2,2,2,2,2,2,1,2,2,2,2,2,1],
  [1,2,1,1,2,1,2,2,2,1,2,1,2,1],
  [1,2,2,1,2,2,2,1,2,2,2,1,2,1],
  [1,1,2,2,2,1,2,2,2,1,2,2,2,1],
  [1,2,2,1,2,2,2,1,2,2,2,1,2,1],
  [1,2,1,1,2,1,2,2,2,1,2,1,2,1],
  [1,2,2,2,2,2,2,1,2,2,2,2,2,1],
  [1,2,1,1,1,2,2,1,2,2,1,1,2,1],
  [1,3,2,2,2,2,2,1,2,2,2,2,3,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

// constants to make the game run smoothly
const tileSize = 32;
const pacSpeed = 2;
const ghostSpeed = 2;

// making the object pac man
let pacman = {
  x: 1 * tileSize,
  y: 1 * tileSize,
  dx: 0,
  dy: 0,
  nextDx: 0,
  nextDy: 0,
  mouthOpen: 0,
  mouthDir: 1
};

// making the ghosts
let ghosts = [
  { x: 8*tileSize,  y: 7*tileSize,  color: "red",    dx: ghostSpeed,  dy: 0 },
  { x: 10*tileSize, y: 7*tileSize,  color: "pink",   dx:-ghostSpeed, dy: 0 },
  { x: 7*tileSize,  y:10*tileSize,  color: "cyan",   dx: 0, dy: ghostSpeed },
  { x:10*tileSize,  y:10*tileSize,  color: "orange", dx: 0, dy:-ghostSpeed }
];

// user directional inputs
document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp")    { pacman.nextDx = 0; pacman.nextDy = -1; }
  if (e.key === "ArrowDown")  { pacman.nextDx = 0; pacman.nextDy = 1; }
  if (e.key === "ArrowLeft")  { pacman.nextDx = -1; pacman.nextDy = 0; }
  if (e.key === "ArrowRight") { pacman.nextDx = 1; pacman.nextDy = 0; }
});

// helpers to make collisions sharper
function isWallAtPixel(px, py) {
  const tileX = Math.floor(px / tileSize);
  const tileY = Math.floor(py / tileSize);

  if (tileX < 0 || tileX >= map[0].length || tileY < 0 || tileY >= map.length) return true;
  return map[tileY][tileX] === 1;
}

function collidesWithWall(cx, cy, size = 28) {
  const h = size / 2;
  return (
    isWallAtPixel(cx - h, cy - h) ||
    isWallAtPixel(cx + h, cy - h) ||
    isWallAtPixel(cx - h, cy + h) ||
    isWallAtPixel(cx + h, cy + h)
  );
}

// updates pacman for any changes that happen to him
function updatePacman() {
  // try changing direction
  const tryX = pacman.x + pacman.nextDx * pacSpeed;
  const tryY = pacman.y + pacman.nextDy * pacSpeed;
  if (!collidesWithWall(tryX + 16, tryY + 16)) {
    pacman.dx = pacman.nextDx;
    pacman.dy = pacman.nextDy;
  }

  // move forward if path clear
  const newX = pacman.x + pacman.dx * pacSpeed;
  const newY = pacman.y + pacman.dy * pacSpeed;
  if (!collidesWithWall(newX + 16, newY + 16)) {
    pacman.x = newX;
    pacman.y = newY;
  }

  // eat dots and power pellets
  const gridX = Math.floor((pacman.x + 16) / tileSize);
  const gridY = Math.floor((pacman.y + 16) / tileSize);

  if (map[gridY][gridX] === 2) {
    map[gridY][gridX] = 0;
    score += DOT_SCORE;
  }

  if (map[gridY][gridX] === 3) {
    map[gridY][gridX] = 0;
    powerMode = true;
    powerTimer = POWER_DURATION;
    score += 50;
  }

  // mouth animation
  pacman.mouthOpen += 0.1 * pacman.mouthDir;
  if (pacman.mouthOpen > 1) pacman.mouthDir = -1;
  if (pacman.mouthOpen < 0) pacman.mouthDir = 1;
}


// draw map code
function drawMap() {
  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[r].length; c++) {
      if (map[r][c] === 1) {
        ctx.fillStyle = "purple";
        ctx.fillRect(c*tileSize, r*tileSize, tileSize, tileSize);
      } else if (map[r][c] === 2) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(c*tileSize + 16, r*tileSize + 16, 4, 0, Math.PI*2);
        ctx.fill();
      } else if (map[r][c] === 3) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(c*tileSize + 16, r*tileSize + 16, 8, 0, Math.PI*2);
        ctx.fill();
      }
    }
  }
}

function drawPacman() {
  const angle = pacman.mouthOpen * 0.35 * Math.PI;
  const dirAngle =
    pacman.dx === 1 ? 0 :
    pacman.dx === -1 ? Math.PI :
    pacman.dy === -1 ? 1.5*Math.PI :
    0.5*Math.PI;

  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(pacman.x+16, pacman.y+16, 16, dirAngle+angle, dirAngle-angle);
  ctx.lineTo(pacman.x+16, pacman.y+16);
  ctx.fill();
}

function drawGhost(g) {
  const x = g.x + 16;
  const y = g.y + 16;

  // ghost body
  ctx.fillStyle = powerMode ? "blue" : g.color;
  ctx.beginPath();
  ctx.arc(x, y, 16, Math.PI, 0);
  ctx.lineTo(x+16, y+16);
  ctx.lineTo(x-16, y+16);
  ctx.closePath();
  ctx.fill();

  // eyes
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.ellipse(x-6, y-2, 6, 8, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(x+6, y-2, 6, 8, 0, 0, Math.PI*2);
  ctx.fill();

  // pupils
  const dirX = Math.sign(g.dx);
  const dirY = Math.sign(g.dy) || 1;
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc((x-6)+dirX*2, (y-2)+dirY*2, 3, 0, Math.PI*2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc((x+6)+dirX*2, (y-2)+dirY*2, 3, 0, Math.PI*2);
  ctx.fill();
}

// updates ghost if any changes are made to them
function updateGhosts() {
  for (let g of ghosts) {
    const nx = g.x + g.dx;
    const ny = g.y + g.dy;

    if (!collidesWithWall(nx+16, ny+16)) {
      g.x = nx;
      g.y = ny;
    } else {
      const dirs = [
        {dx: ghostSpeed, dy:0},
        {dx:-ghostSpeed, dy:0},
        {dx:0, dy:ghostSpeed},
        {dx:0, dy:-ghostSpeed}
      ];
      const d = dirs[Math.floor(Math.random()*dirs.length)];
      g.dx = d.dx;
      g.dy = d.dy;
    }

    // collision with pac man
    if (Math.abs(g.x - pacman.x) < 20 && Math.abs(g.y - pacman.y) < 20) {
      if (powerMode) {
        score += 200;
        g.x = 7*tileSize; g.y = 7*tileSize;
      } else {
        gameOver = true;
      }
    }
  }
}

// checks if the player wins
function checkWin() {
  for (let row of map) if (row.includes(2)) return false;
  return true;
}

// main loop of the game that helps amke the game lok animated and run smoother
let loopID;
function gameLoop() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawMap();
  drawScore();
  updatePacman();
  if (powerMode) { powerTimer--; if (powerTimer <= 0) powerMode=false; }
  drawPacman();

  updateGhosts();
  ghosts.forEach(drawGhost);

  if (gameOver) {
    ctx.fillStyle = "red";
    ctx.font = "40px Arial";
    ctx.fillText("GAME OVER", 120, 240);
    return;
  }

  if (checkWin()) {
    ctx.fillStyle = "yellow";
    ctx.font = "40px Arial";
    ctx.fillText("YOU WIN!", 150, 240);
    ctx.font = "24px Arial";
    ctx.fillText("Final Score: " + score, 150, 280);
    return;
  }

  loopID = requestAnimationFrame(gameLoop);
}

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 20);
}

// when game starts
gameLoop();