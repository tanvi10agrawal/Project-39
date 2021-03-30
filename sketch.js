var sponge, pine, ocean, end;
var spongebobImg, oceanImg;
//var pineG;
//var play = 1;
//var end = 1;
//var gamestate = play;

function preload() {
  spongebobImg = loadImage("spongebob.png");
  //  pineImg = loadImage("pineapple.png");
  oceanImg = loadImage("bg.jpg");
  // endImg = loadImage("end.png")
}

function setup() {
  createCanvas(1200, 600);

  ocean = createSprite(600, 280, 1200, 300);
  ocean.addImage(oceanImg);
  ocean.velocityX = -4;
  ocean.scale=0.25

  sponge = createSprite(100, 500);
  sponge.addImage(spongebobImg);
  sponge.scale=0.1

  //end = createSprite(400, 150);
  //end.addImage(endImg);
  // end.visible = false;

  //pineG = new Group();

}

function draw() {
  background(oceanImg);
  
//  ocean.velocityX = -5;
if(ocean.x<0){
   ocean.x=ocean.width/2;
}
  

  drawSprites();
}