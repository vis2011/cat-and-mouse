var cat,cImage;
var mouse,mImage;

function preload(){
 mImage=loadImage("mouse1.png");
 cImage=loadAnimation("cat2.png","cat3.png");
}

function setup() {
  createCanvas(800,400);
  cat=createSprite(400, 200, 50, 50);
  cat.addAnimation(cImage,"cat_running");

  mouse=createSprite(200 ,400 ,80 ,50);
  mouse.addImage(mImage);
}

function draw() {
  background("black");  

  drawSprites();
}