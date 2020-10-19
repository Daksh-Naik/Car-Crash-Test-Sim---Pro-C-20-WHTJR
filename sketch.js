//Car test simulator BETA
//If the car (white object) turns green, the accident is fine, yellow means average, red means too lethal.
//This may contain some bugs.

var wall;
var seperatedParams, param1, param2, param3;
var car;
var blocks, block1, block2, block3, block4, block5, block6, block7, block8, block9;

var speed, weight;

function setup() {
  createCanvas(1600,400);

  block1 = createSprite(140, 200, 130, 190);
  block1.shapeColor="black";
  block2 = createSprite(270, 200, 130, 190);
  block2.shapeColor="yellow";
  block3 = createSprite(400, 200, 130, 190);
  block3.shapeColor="black";
  block4 = createSprite(530, 200, 130, 190);
  block4.shapeColor="yellow";
  block5 = createSprite(660, 200, 130, 190);
  block5.shapeColor="black";
  block6 = createSprite(790, 200, 130, 190);
  block6.shapeColor="yellow";
  block7 = createSprite(920, 200, 130, 190);
  block7.shapeColor="black";
  block8 = createSprite(1050, 200, 130, 190);
  block8.shapeColor="yellow";
  block9 = createSprite(1180, 200, 130, 190);
  block9.shapeColor="black";
  block10 = createSprite(1310, 200, 130, 190);
  block10.shapeColor="yellow";
  block11 = createSprite(1440, 200, 130, 190);
  block11.shapeColor="black";

  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor=(80, 80, 80);
  param1 = createSprite(815, 120, 1350, 5);
  param2 = createSprite(815, 280, 1350, 5);

  speed=random(55, 90);
  weight=random(400, 1500);

  car = createSprite(250, 200, 50, 40);
  car.shapeColor="white";

  //zenia = createSprite(250, 100, 15, 15);
  //zenia.shapeColor="white";

  //tourus = createSprite(250, 200, 15, 15);
  //tourus.shapeColor="white";

  //cyclap = createSprite(250, 300, 15, 15);
  //cyclap.shapeColor="white";
  
}

function draw() {
  background(50, 50, 50);
  
  fill(300);
  text("Press SPACE to start", 600, 50);
 
  if (keyDown("SPACE")) {    
    car.velocityX=speed;
    fill(300);
    text("Starting... .. ..   Started", 600, 80);

  }

  if (wall.x-car.x < (car.width + wall.width)/2){
    car.velocityX=0;
    fill(300);
    text("Car Tested, press F5 to restart", 1100, 80);
    var deformation=0.5 * weight * speed* speed/25509;
    if (deformation > 180) {
      car.shapeColor=color(0, 255, 0);
    }

    if (deformation < 180 && deformation > 100) {
      car.shapeColor=color(230, 230, 0);
    }

    if (deformation < 100) {
      car.shapeColor=color(255, 0, 0);
    }

  }

  drawSprites();
 
}