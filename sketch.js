//creating variables 
var destroyedShipImg, GameLoadImg, LargePointShipImg, playerImg, returnImg, rulesImg, alienImg1, alienImg2, alienImg3, laserImg;
var gameState;
var game;
var player;
var laser1, alien;
var alienGroup;
var laserGroup;
var score = 0;

//preload img
function preload() {
	destroyedShipImg = loadImage("images/Destroyed_Ship.png");
	GameLoadImg = loadImage("images/GameLoad.png");
	LargePointShipImg = loadImage("images/LargePointShip.png");
	playerImg = loadImage("images/Player.png");
	returnImg = loadImage("images/Return.png");
	rulesImg = loadImage("images/Rules.png");
	alienImg1 = loadImage("images/saucer1b.png");
	alienImg2 = loadImage("images/saucer2b.png");
	alienImg3 = loadImage("images/saucer3b.png");
	laserImg = loadImage("images/laser.png")
}

function setup() {
  //create groups
  alienGroup = new Group();
  laserGroup = new Group();
  //set gamestate
  gameState = 1;
  //create player
  player = createSprite(displayWidth / 2, displayHeight - 200);
	
	//gamestate 1
	if (gameState === 1) {
		this.title = createSprite(displayWidth / 2, displayHeight / 2 - 200);
		this.title.addImage(GameLoadImg);
		this.button = createButton("Play");
    this.button.position(displayWidth / 2, displayHeight / 2 + 100);
    player.visible = false

		this.button.mousePressed(() => {
      gameState = 2;
		});
	}
}
 
function draw() {
	createCanvas(displayWidth - 20, displayHeight-150);
  background(0)
  

//gamestate 2
	if (gameState === 2) {
    this.title.remove();
		this.button.hide();
    player.visible = true
    player.addImage(playerImg);
    textSize(28);
    fill("#39ff14");
    text("Score: " + score, displayWidth - 150, 50);
		
		
    //createAliens
    var rand3 = Math.round(random(40, 60));
    if (frameCount % rand3 === 0) {
      alien = createSprite(null,null, 40, 40);
      alien.x = Math.round(random(0, 1850));
      alien.addImage(alienImg1);
      alien.setVelocity(0, 6);
      alienGroup.add(alien);
    }
    

    

    //createLaser
    if(keyWentDown("space")) {
      laser1 = createSprite(player.x, player.y, 20, 40);
      laser1.visible = true;
      laser1.x = player.x;
      laser1.y = laser1.y;
      laser1.shapeColor = " #39ff14"
      laser1.setVelocity(0, - 6)
      laserGroup.add(laser1);
    }
    
    //destroy if laser or alien goes off screen
    if(laserGroup.y <= 0){
      laserGroup.destroy();
    }
    if(alienGroup.y >= displayHeight){
      alien.destroy();
    }

    //player movement
		if (keyDown(LEFT_ARROW)) {
			player.x = player.x - 13;
		} else if (keyDown(RIGHT_ARROW)) {
      player.x = player.x + 13;
    }

    
    if (laserGroup.isTouching(alienGroup)) {
      alienGroup.destroyEach();
      score += 10;
    }
  }
  


	if (gameState === 3) {}
	drawSprites()
}

function createAliens() {
  
}

function createLaser() {
	i
}