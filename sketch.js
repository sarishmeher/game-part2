let ground;
let lander;
var lander_img;
var bg_sur1,bg;
var alien1

var Alien1
var alien3
var Alien3

var ufo2
var Ufo2

var home1
var Home1



var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_sur1 = loadImage("bg_sur1.png");
  alien1 = loadImage("alien1.png")
  alien3 = loadImage("alien3.png")
  ufo2 = loadImage("ufo2.png")
  home1 = loadImage("home1.png")
}

function setup() {
  createCanvas(windowWidth -100,windowHeight -100);
  frameRate(80);

  bg = createSprite(width/2,height -50,width,20)
  bg.addImage(bg_sur1)
  bg.y = bg.height/2

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  Alien1 = createSprite(250,480,20,20);
  Alien1.addImage(alien1);
  Alien1.scale = 0.3;
  

  Alien3 = createSprite(400,470,20,20);
  Alien3.addImage(alien3);
  Alien3.scale = 0.3;

Ufo2 = createSprite(450,150,40,40);
Ufo2.addImage(ufo2)
Ufo2.scale = 1

Home1 = createSprite()
Home1.addImage(home1);

  Alien1.visible = false
  Alien3.visible = false

 
  rectMode(CENTER);
 
  textSize(15);
}

function draw() 
{
  background(51);

bg.velocityY=-2

if(bg.y>windowHeight -100){
  bg.y = bg.heigth/2
}
  
 

 

  
 
  drawSprites();
}


