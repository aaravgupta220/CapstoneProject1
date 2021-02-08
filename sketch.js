var luke;
var ground;

function preload(){

}

function setup() {

  createCanvas(800,600);

  luke = createSprite(50, 560, 20, 40);

  ground = createSprite(400, 590, 800, 20);

}

function draw() {

  background(255,255,255);

  if(keyDown("UP_ARROW")){
    luke.velocityY = -10;
  }
  
  luke.velocityY = luke.velocityY + 0.8;

  if(keyDown("RIGHT_ARROW")){
    luke.x = luke.x + 5;
  }
  
  if(keyDown("LEFT_ARROW")){
    luke.x = luke.x - 5;
  }

  luke.collide(ground);

  drawSprites();

}