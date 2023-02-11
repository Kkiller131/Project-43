var playerImage;
var heartImage;
var backgroundImage;
var backgroundImage2;
var backgroundImage3;
var bulletImage;
var turretImage;
var heartbrokenImage;
var player;
var turret;
var heart;
var bullet;
var brokenHeart;
var rotationValue;
var play;
var gameState = play;

function preload() {
  playerImage = loadImage("player.png");
  heartImage = loadImage("Heart(full).png");
  backgroundImage = loadImage("pixil-frame-0 (5).png");
  backgroundImage2 = loadImage("pixil-frame-0 (6).png");
  backgroundImage3 = loadImage("pixil-frame-0 (7).png");
  bulletImage = loadImage("bullet.png");
  turretImage = loadImage("turret.png");
  heartbrokenImage = loadImage("Heart(broken).png");
}

function setup(){

createCanvas(600,600);

bullet= createSprite(300,300);
bullet.scale = 0.25;

 turret = createSprite(300,200);
 turret.scale = 0.35 

 heart  = createSprite(200,200);


 brokenHeart= createSprite(500,400);

 player = createSprite(300,300);
 player.scale = 0.55;


player.addImage("player",playerImage);
heart.addImage("heart",heartImage);
bullet.addImage("bullet",bulletImage);
brokenHeart.addImage("brokenheart",heartbrokenImage);
brokenHeart.addImage("heart",heartImage);
turret.addImage("turret",turretImage);


}

function draw(){
  background(backgroundImage);

  playermovement()
  filledHearts()
  
  drawSprites()

}

function playermovement(){
  if (keyDown("d") || keyDown("D")) {
    player.x += 5;
}
if (keyDown("a") || keyDown("A")) {
  player.x -= 5;
}
if (keyDown("w")|| keyDown("W")) {
  player.y -= 5;
}
if (keyDown("s")|| keyDown("S")) {
  player.y += 5;
}
if (keyDown("e")|| keyDown("E")) {
  player.rotation += 5;
  rotationValue = player.rotation += 5;
}
if (keyDown("q")|| keyDown("Q")) {
  player.rotation -= 5;
  rotationValue = player.rotation -= 5;
}
if(keyDown("space")|| keyDown("SPACE")){
  turret.velocity.x= rotationValue
  turret.velocity.y= rotationValue
  turret.rotation = rotationValue
}else{
  turret.x = player.x;
  turret.y = player.y;
}
if(keyDown("space")|| keyDown("SPACE")){
  bullet.velocity.x = 5
  bullet.rotation = turret.rotation
}else{
  bullet.x = turret.x;
  bullet.y = turret.y;
}

}
function filledHearts(){
  if(bullet.isTouching(brokenHeart)){
    brokenHeart.changeAnimation(heartImage)
  }
}



