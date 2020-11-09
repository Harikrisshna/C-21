var fixedRect, movingRect;
// var o1,o2,o3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY=-2;
  fixedRect.debug = true;
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY=2;
  movingRect.debug = true;
  // o1 = createSprite(100,100,50,50);
  // o1.shapeColor = "green";
  // o1.debug = true;
  // o2 = createSprite(200,100,50,50);
  // o2.shapeColor = "green";
  // o2.debug = true;
  // o3 = createSprite(300,100,50,50);
  // o3.shapeColor = "green";
  // o3.debug = true;
  
}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

  // if(isTouching(movingRect,o1)){
  //   movingRect.shapeColor = "red";
  //   o1.shapeColor = "red";
  // }
  // else{
  //   movingRect.shapeColor = "green";
  //   o1.shapeColor = "green";
  // }
  
  //isTouching();
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

