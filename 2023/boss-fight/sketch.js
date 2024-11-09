/*******************************************
 * Final Project
 * James Fink <finkj@emmanuel.edu>
 * 13 December 2023
 ******************************************/
//Sprite Declarations
let tilesGroup;
let player;
let floor;
let boss;
let playerHitBox1;
let playerHitBox2;
let joint1;
let joint2;

//Range checker function
const between = (x, min, max) => {
  return x >= min && x <= max;
};

//Level Texture variables
let floorTexture;
let backgroundTexture1;
let backgroundTexture2;
let backgroundTexture3;
let backgroundTexture4;

//Player Logic Declarations
let playerHealth = 500;
let playerHealthBarBaseX;
let playerHealthBarBaseY;
let playerHealthBarBaseWidth;
let playerHealthBarBaseHeight;
let playerHealthBarWidth;
let playerDead = false;
let canTakeDamage = true;

//Boss Logic Declarations
let movingStage = true;
let phase = 1;
let bossHitBox1;
let bossHitBox2;
let bossHitBox3;
let bossHitBox4;
let randomAttack = 0;
let needsAttack = false;
let bossHealth = 1000;
let bossHealthBarBaseX;
let bossHealthBarBaseY;
let bossHealthBarBaseWidth;
let bossHealthBarBaseHeight;
let bossHealthBarWidth;
let flag = true;
let damage = 0;
let dead = false;
let maxBossHealth = 1000;
let transform = false;
let bossJoint1;
let bossJoint2;
let bossJoint3;
let bossJoint4;
let isAttacking;
let deathFlag;
let attackDirection = "right";

//Player Animation Variable Declaration
let playerFallAni;
let playerIdleAni;
let playerRunAni;
let playerJumpAni;
let playerHitAni;
let playerRollAni;
let playerJumpFallAni;
let playerDeathAni;
let playerAttack1Ani;
let playerAttack2Ani;
let playerAttackComboAni;


//Boss Animation Variable Declaration (Phase 1)
let bossIdleAni;
let bossRunAni;
let bossJumpAni;
let bossFallAni;
let bossAttack1Ani;
let bossAttackCombo1Ani;
let bossAttackCombo2Ani;
let bossSpecialAttackAni;

//Boss Animation Variable Declaration (Phase 2)
let bossTransformAni;
let bossDeathAni;
let bossp2IdleAni;
let bossp2RunAni;
let bossp2Attack1Ani;
let bossp2Attack2Ani;
let bossp2Attack3Ani;
let bossp2Attack4Ani;
let bossBackToHumanAni;


function preload() {
  //Level Textures Preload
  floorTexture = loadImage("p5/levelAssets/floorTexture.png");
  backgroundTexture1 = loadImage("p5/levelAssets/backgroundLayer1.png");
  backgroundTexture2 = loadImage("p5/levelAssets/backgroundLayer2.png");
  backgroundTexture3 = loadImage("p5/levelAssets/backgroundLayer3.png");
  backgroundTexture4 = loadImage("p5/levelAssets/backgroundLayer4.png");

  //Player Animation Preloads and scailing
  playerFallAni = loadAnimation("p5/playerAssets/playerFall.png", {frames: 3});
  playerFallAni.scale = 2;
  playerIdleAni = loadAnimation("p5/playerAssets/idle.png", {frames: 10});
  playerIdleAni.scale = 2;
  playerRunAni = loadAnimation("p5/playerAssets/run.png", {frames: 10});
  playerRunAni.scale = 2;
  playerJumpAni = loadAnimation("p5/playerAssets/jump.png", {frames: 3});
  playerJumpAni.scale = 2;
  playerHitAni = loadAnimation("p5/playerAssets/hit.png", {frames: 1});
  playerHitAni.scale = 2;
  playerRollAni = loadAnimation("p5/playerAssets/roll.png", {frames: 12});
  playerRollAni.scale = 2;
  playerJumpFallAni = loadAnimation("p5/playerAssets/jumpFallInbetween.png", {frames: 2});
  playerJumpFallAni.scale = 2;
  playerAttack1Ani = loadAnimation("p5/playerAssets/attack1.png", {frames: 4});
  playerAttack1Ani.scale = 2;
  playerAttack2Ani = loadAnimation("p5/playerAssets/attack2.png", {frames: 6});
  playerAttack2Ani.scale = 2;
  playerAttackComboAni = loadAnimation("p5/playerAssets/attackCombo.png", {frames: 10});
  playerAttackComboAni.scale = 2;
  playerDeathAni = loadAnimation("p5/playerAssets/death.png", {frames: 10});
  playerDeathAni.scale = 2;

  //Boss animation preloads and scailing (Phase 1)
  bossIdleAni = loadAnimation("p5/bossAssets/idle.png", {frames: 8});
  bossIdleAni.scale = 2;
  bossRunAni = loadAnimation("p5/bossAssets/run.png", {frames: 8});
  bossRunAni.scale = 2;
  bossAttack1Ani = loadAnimation("p5/bossAssets/attack1.png", {frames: 11});
  bossAttack1Ani.scale = 2;
  bossAttackCombo1Ani = loadAnimation("p5/bossAssets/attackCombo1.png", {frames: 19});
  bossAttackCombo1Ani.scale = 2;
  bossAttackCombo2Ani = loadAnimation("p5/bossAssets/attackCombo2.png", {frames: 28});
  bossAttackCombo2Ani.scale = 2;
  bossSpecialAttackAni = loadAnimation("p5/bossAssets/spAttack2.png", {frames: 18});
  bossSpecialAttackAni.scale = 2;
  bossJumpAni = loadAnimation("p5/bossAssets/jump.png", {frames: 6});
  bossJumpAni.scale = 2;
  bossFallAni = loadAnimation("p5/bossAssets/fall.png", {frames: 6});
  bossFallAni.scale = 2;

  //Boss animation preloads and scailing (Phase 2)
  bossDeathAni = loadAnimation("p5/bossAssets/death.png", {frames: 13});
  bossDeathAni.scale = 2;
  bossTransformAni = loadAnimation("p5/bossAssets/transform.png", {frames: 24});
  bossTransformAni.scale = 2.5;
  bossp2IdleAni = loadAnimation("p5/bossAssets/p2Idle.png", {frames: 8});
  bossp2IdleAni.scale = 2.5;
  bossp2RunAni = loadAnimation("p5/bossAssets/p2Run.png", {frames: 8});
  bossp2RunAni.scale = 2.5;
  bossp2Attack1Ani = loadAnimation("p5/bossAssets/p2Attack1.png", {frames: 9});
  bossp2Attack1Ani.scale = 2.5;
  bossp2Attack2Ani = loadAnimation("p5/bossAssets/p2Attack2.png", {frames: 14});
  bossp2Attack2Ani.scale = 2.5;
  bossp2Attack3Ani = loadAnimation("p5/bossAssets/p2Attack3.png", {frames: 24});
  bossp2Attack3Ani.scale = 2.5;
  bossp2Attack4Ani = loadAnimation("p5/bossAssets/p2Attack4.png", {frames: 16});
  bossp2Attack4Ani.scale = 2.5;
  bossBackToHumanAni = loadAnimation("p5/bossAssets/backToHuman.png", {frames: 17});
  bossBackToHumanAni.scale = 2;
}

function setup() {
  new Canvas(1500, 800);

  world.gravity.y = 10;

  //Health Bar Bases

  fill("#A9A9A9");
  bossHealthBarBaseX = width / 7;
  bossHealthBarBaseY = height - 100;
  bossHealthBarBaseWidth = 1000;
  bossHealthBarBaseHeight = 25;
  bossHealthBarWidth = bossHealthBarBaseWidth;

  playerHealthBarBaseX = 0;
  playerHealthBarBaseY = 20;
  playerHealthBarBaseWidth = 500;
  playerHealthBarBaseHeight = 15;
  playerHealthBarWidth = playerHealthBarBaseWidth;


  player = new Sprite();
  player.width = 20;
  player.height = 50;
  player.y = 50;
  player.x = 750;
  player.drag = 0;
  player.rotationLock = true;
  player.bounciness = 0;
  player.addAni("fall", playerFallAni);
  player.addAni("run", playerRunAni);
  player.addAni("jump", playerJumpAni);
  player.addAni("idle", playerIdleAni);
  player.addAni("roll", playerRollAni);
  player.addAni("jumpFall", playerJumpFallAni);
  player.addAni("attack1", playerAttack1Ani);
  player.addAni("attack2", playerAttack2Ani);
  player.addAni("attackCombo", playerAttackComboAni);
  player.addAni("death", playerDeathAni);
  player.anis.offset.y = -28;

  playerHitBox1 = new Sprite();
  playerHitBox1.width = 0;
  playerHitBox1.height = 0;
  playerHitBox1.x = player.x + 70;
  playerHitBox1.y = player.y;
  playerHitBox1.rotationLock = true;
  playerHitBox1.bounciness = 0;
  playerHitBox1.drag = 0;
  playerHitBox1.collider = "none";
  playerHitBox1.visible = false;

  playerHitBox2 = new Sprite();
  playerHitBox2.width = 0;
  playerHitBox2.height = 0;
  playerHitBox2.x = player.x - 70;
  playerHitBox2.y = player.y;
  playerHitBox2.rotationLock = true;
  playerHitBox2.bounciness = 0;
  playerHitBox2.drag = 0;
  playerHitBox2.collider = "none";
  playerHitBox2.visible = false;
  
  joint1 = new GlueJoint(player, playerHitBox1);
  joint1.visible = false;
  joint2 = new GlueJoint(player, playerHitBox2);
  joint2.visible = false;

  boss = new Sprite();
  boss.width = 40;
  boss.height = 50;
  boss.y = height - 100;
  boss.x = 50;
  boss.drag = 0;
  boss.rotationLock = true;
  boss.bounciness = 0;
  boss.addAni("idle", bossIdleAni);
  boss.addAni("run", bossRunAni);
  boss.addAni("attack1", bossAttack1Ani);
  boss.addAni("attack2", bossAttackCombo1Ani);
  boss.addAni("attack3", bossAttackCombo2Ani);
  boss.addAni("attack4", bossSpecialAttackAni);
  boss.addAni("death", bossDeathAni);
  boss.addAni("transform", bossTransformAni);
  boss.addAni("idle2", bossp2IdleAni);
  boss.addAni("run2", bossp2RunAni);
  boss.addAni("p2Attack1", bossp2Attack1Ani);
  boss.addAni("p2Attack2", bossp2Attack2Ani);
  boss.addAni("p2Attack3", bossp2Attack3Ani);
  boss.addAni("p2Attack4", bossp2Attack4Ani);
  boss.addAni("backToHuman", bossBackToHumanAni);
  boss.anis.offset.y = -48;
  boss.anis.frameDelay = 7;

  bossHitBox1 = new Sprite();
  bossHitBox1.width = 0;
  bossHitBox1.height = 0;
  bossHitBox1.x = boss.x + 70;
  bossHitBox1.y = boss.y;
  bossHitBox1.rotationLock = true;
  bossHitBox1.bounciness = 0;
  bossHitBox1.drag = 0;
  bossHitBox1.collider = "none";
  bossHitBox1.visible = false;

  bossHitBox2 = new Sprite();
  bossHitBox2.width = 0;
  bossHitBox2.height = 0;
  bossHitBox2.x = boss.x - 70;
  bossHitBox2.y = boss.y;
  bossHitBox2.rotationLock = true;
  bossHitBox2.bounciness = 0;
  bossHitBox2.drag = 0;
  bossHitBox2.collider = "none";
  bossHitBox2.visible = false;

  bossHitBox3 = new Sprite();
  bossHitBox3.width = 0;
  bossHitBox3.height = 0;
  bossHitBox3.x = boss.x + 110;
  bossHitBox3.y = boss.y;
  bossHitBox3.rotationLock = true;
  bossHitBox3.bounciness = 0;
  bossHitBox3.drag = 0;
  bossHitBox3.collider = "none";
  bossHitBox3.visible = false;

  bossHitBox4 = new Sprite();
  bossHitBox4.width = 0;
  bossHitBox4.height = 0;
  bossHitBox4.x = boss.x - 110;
  bossHitBox4.y = boss.y;
  bossHitBox4.rotationLock = true;
  bossHitBox4.bounciness = 0;
  bossHitBox4.drag = 0;
  bossHitBox4.collider = "none";
  bossHitBox4.visible = false;

  bossJoint1 = new GlueJoint(boss, bossHitBox1);
  bossJoint1.visible = false;
  bossJoint2 = new GlueJoint(boss, bossHitBox2);
  bossJoint2.visible = false;
  bossJoint3 = new GlueJoint(boss, bossHitBox3);
  bossJoint3.visible = false;
  bossJoint4 = new GlueJoint(boss, bossHitBox4);
  bossJoint4.visible = false;

  floor = new Group();
	floor.w = 50;
	floor.h = 100;
	floor.tile = '=';
  floor.collider = "static";
  floor.img = floorTexture;
  floor.layer = 1;

  //Makes and Skins floor based on floor variable values
  tilesGroup = new Tiles(
    [
      "=================================="
    ],0,
    height,
    floor.w+0.001,
    floor.h+0.001
  );

}

function draw() {
  background(backgroundTexture1);
  image(backgroundTexture2, 0, 0, width, height, 0, 0, backgroundTexture2.width, backgroundTexture2.height, COVER);
  image(backgroundTexture3, 0, 0, width, height, 0, 0, backgroundTexture3.width, backgroundTexture3.height, COVER);
  image(backgroundTexture4, 0, 0, width, height, 0, 0, backgroundTexture4.width, backgroundTexture4.height, COVER);
  
  fill("#A9A9A9");
  rect(bossHealthBarBaseX, bossHealthBarBaseY, bossHealthBarBaseWidth, bossHealthBarBaseHeight);
  rect(playerHealthBarBaseX, playerHealthBarBaseY, playerHealthBarBaseWidth, playerHealthBarBaseHeight);

  fill("#FF0000");
  rect(bossHealthBarBaseX, bossHealthBarBaseY, bossHealthBarWidth, bossHealthBarBaseHeight);
  rect(playerHealthBarBaseX, playerHealthBarBaseY, playerHealthBarWidth, playerHealthBarBaseHeight);

  fill(255);
  textSize(25);
  text("Fire Knight", bossHealthBarBaseX + 25, bossHealthBarBaseY + 5);

  if (player.ani.name !== "roll") {
    player.collides(boss);
    canTakeDamage = true;
    if (kb.pressing("left")) {
      player.changeAni("run");
      player.mirror.x = true;
      player.vel.x = -5;
    }   else if (kb.pressing("right")) {
      player.vel.x = 5;
      player.mirror.x = false;
      player.changeAni("run");
    }
    if (kb.presses("space")) {
      player.vel.y = -10;
      
    }
  }

  if(playerHealth <= 0) {
    playerDead = true;
    print("player Dead");
    player.vel.x = 0;
    player.vel.y = 0;
    player.changeAni("death");
    textSize(100);
    text("You Lose!", width / 3, height / 3);
  }

  if (bossHealth <= 0 && !dead && !deathFlag) {
    boss.width = 40;
    boss.height = 50;
    boss.anis.offset.y = -48;
    boss.changeAni(['backToHuman', 'death']);
    deathFlag = true;
  }

  if (bossHealth < (maxBossHealth/2) && phase === 1 && boss.ani.name === "idle") {
    boss.width = 60;
    boss.height = 100;
    boss.anis.offset.y = -43;
    boss.changeAni(["transform", "idle2"]);
    phase = 2;
  }

  if (canTakeDamage && (((bossHitBox1.width > 2) && bossHitBox1.overlaps(player)) || ((bossHitBox2.width > 2) && bossHitBox2.overlaps(player))) || (((bossHitBox3.width > 2) && bossHitBox3.overlaps(player)) || ((bossHitBox4.width > 2) && bossHitBox4.overlaps(player)))) {
    playerHealth -= damage;
    if (playerHealthBarWidth >= 0) {
      playerHealthBarWidth -= damage;
    }
  }
  if (((playerHitBox1.width > 2) && playerHitBox1.overlaps(boss)) || ((playerHitBox2.width > 2) &&playerHitBox2.overlaps(boss))) {
    bossHealth -= 20;
    bossHealthBarWidth -= 20;
    if (bossHealthBarWidth < 0) {
      bossHealthBarWidth = 0;
    }
    
  }

  //General Animation Handling
  if (player.vel.y > 0) {
    player.changeAni("fall");
  } else if (player.vel.y < 0) {
    player.changeAni("jump");
  }
  if (player.vel.y === 0 && player.vel.x === 0 && !playerDead) {
    player.changeAni("idle");
  }

  //Attack Animation Handling
  if (mouse.pressing() && !playerDead) {
    if (mouse.x < player.x) {
      playerHitBox1.width = 0;
      playerHitBox1.height = 0;
      playerHitBox2.width = 80;
      playerHitBox2.height = 30;
    } else {
      playerHitBox2.width = 0;
      playerHitBox2.height = 0;
      playerHitBox1.width = 80;
      playerHitBox1.height = 30;
    }
    player.changeAni("attackCombo");
  } else {
    playerHitBox2.width = 0;
    playerHitBox2.height = 0;
    playerHitBox1.width = 0;
    playerHitBox1.height = 0;
  }

  //Player Roll Logic
  if (player.ani.name !== "jump" || player.ani.name !== "fall") {
    if (player.vel.x > 0 && kb.presses("r")) {
      canTakeDamage = false;
      player.overlaps(boss);
      player.vel.x = 10;
      player.changeAni(["roll", "idle"]);
    } 
    else if (player.vel.x < 0 && kb.presses("r")) {
      canTakeDamage = false;
      player.overlaps(boss);
      player.vel.x = -10;
      player.changeAni(["roll", "idle"]);
    }
  }

  //handles boss movement during moving stage

  if (bossHealth > 0) {
    print(isAttacking);
    if (isAttacking) {
        print("ran");
        if (phase === 1) {
          if (attackDirection === "left") {
            bossHitBox1.width = 0;
            bossHitBox1.height = 0;
            bossHitBox2.width = 60;
            bossHitBox2.height = 30;
          } else {
            bossHitBox2.width = 0;
            bossHitBox2.height = 0;
            bossHitBox1.width = 60;
            bossHitBox1.height = 30;
          }
        } else {
          if (attackDirection === "left") {
            bossHitBox3.width = 0;
            bossHitBox3.height = 0;
            bossHitBox4.width = 100;
            bossHitBox4.height = 100;
          } else {
            bossHitBox4.width = 0;
            bossHitBox4.height = 0;
            bossHitBox3.width = 100;
            bossHitBox3.height = 100;
          }
        }
      }
    if(boss.ani.name != "attack1" || boss.ani.name != "attack2" || boss.ani.name != "attack3" || boss.ani.name || "attack4" || boss.ani.name != "p2Attack1" || boss.ani.name != "p2Attack2" || boss.ani.name != "p2Attack3" || boss.ani.name || "p2Attack4") {
      if (player.x > boss.x && movingStage) {
        if (phase === 1) {
          boss.changeAni("run");
          boss.vel.x = 3;
        } else {
          boss.changeAni("run2");
          boss.vel.x = 4;
        }
        needsAttack = true;
      } else if (player.x < boss.x && movingStage) {
        if (phase === 1) {
          boss.changeAni("run");
          boss.vel.x = -3;
        } else {
          boss.changeAni("run2");
          boss.vel.x = -4;
        }
        needsAttack = true;
      }
      if (player.x < boss.x && !isAttacking) {
        boss.mirror.x = true;
        attackDirection = "left";
      } else if (boss.x < player.x && !isAttacking) {
        boss.mirror.x = false;
        attackDirection = "right";
      }
    } else {
      isAttacking = true;
    }

      //Attacking Logic
      if (between(boss.x, player.x - 100, player.x + 100) && flag) {
        flag = false;
        boss.vel.x = 0;
        isAttacking = true;
        movingStage = false;
        if (needsAttack) {
          randomAttack = Math.floor(random(0,3));
          needsAttack = false;
        }
        if (phase === 1){
          if (randomAttack === 0) {
            boss.changeAni(["attack1", "idle"]);
            damage = 10;
          } else if (randomAttack === 1) {
            boss.changeAni(["attack2", "idle"]);
            damage = 15;
          } else if (randomAttack === 2) {
            boss.changeAni(["attack3", "idle"]);
            damage = 20;
          } else if (randomAttack === 3) {
            boss.changeAni(["attack1", "idle"]);
            damage = 25;
          }
        } else {

          if (randomAttack === 0) {
            boss.changeAni(["p2Attack1", "idle2"]);
            damage = 20;
          } else if (randomAttack === 1) {
            boss.changeAni(["p2Attack2", "idle2"]);
            damage = 25;
          } else if (randomAttack === 2) {
            boss.changeAni(["p2Attack4", "idle2"]);
            damage = 30;
          } else if (randomAttack === 3) {
            boss.changeAni(["p2Attack3", "idle2"]);
            damage = 35;
          }
        }
    }
  }

  if(boss.ani.name === "death") {
    dead = true;
    textSize(100);
    text("You Win!", width / 3, height / 3);
    bossHitBox1.width = 0;
    bossHitBox1.height = 0;
    bossHitBox2.width = 0;
    bossHitBox2.height = 0;
    bossHitBox3.width = 0;
    bossHitBox3.height = 0;
    bossHitBox4.width = 0;
    bossHitBox4.height = 0;
  }

  if (boss.ani.name === "idle" || boss.ani.name === "idle2") {
      movingStage = true;
      flag = true;
      transform = true;
      bossHitBox1.width = 0;
      bossHitBox1.height = 0;
      bossHitBox2.width = 0;
      bossHitBox2.height = 0;
      bossHitBox3.width = 0;
      bossHitBox3.height = 0;
      bossHitBox4.width = 0;
      bossHitBox4.height = 0;
      isAttacking = false;
  }

  print(boss.ani.name);
  print(bossHealth);
}