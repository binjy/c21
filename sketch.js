var fixedRect, movingRect,box1,box2 ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
box1 = createSprite(350,200,50,50)
box1.shapeColor = "red"
box2 = createSprite(350,800,50,50)
box2.shapeColor = "red"
  box2.velocityY = -5;
  box1.velocityY = +5;
}

function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

bounceOff(box1,box2)

  drawSprites();
}

