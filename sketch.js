let ground;
let lander;
var lander_img;
var bg_img;
var alien;
var PLAY = 1;
var END  = 3;
var gamestate = PLAY;



var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("alien.png");
  bg_img = loadImage("bg.png");
  moon_img = loadImage("moon.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  alien = createSprite(40,80,60,90)
  moon = createSprite(900,250,250,400);
  moon.addImage(moon_img);
  moon.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
  
  edges=createEdgeSprites();
  
  
}

function draw() 
{
  background(51);
  

  image(bg_img,0,0);
  push()
  fill(255);
  pop();

  //fall down
  drawSprites();

  if(gamestate === PLAY ){
    if(keyDown(LEFT_ARROW)){
      lander.velocityX=-3;
    }
    if(keyDown(RIGHT_ARROW)){
      lander.velocityX=4;
    }
    if(keyDown(UP_ARROW)){
      lander.velocityY=-5;
    }
    if(keyDown(DOWN_ARROW)){
      lander.velocityY=7;
    }
    if(lander.isTouching(moon)){
      gamestate=END;
    }
    lander.bounceOff(edges);



  }
  else if(gamestate === END){
    lander.velocityX=0
    lander.velocityY=0
    textSize(35);
    fill ("white");
    text("You Won!",500,350);
    text("Press Space To Restart The Game",400,400);
    if(keyDown("space")){
      restart();
    }

  }
  function restart(){
    gamestate=PLAY
    lander.x=50;
    lander.y=50;
  }
  

  
  
  
  
  

}


