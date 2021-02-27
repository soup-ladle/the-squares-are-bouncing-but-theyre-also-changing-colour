var object1, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "Blue";
  fixedRect.velocityX = 2
  movingRect = createSprite(400,200,100,100);
  movingRect.shapeColor = "Blue";
  movingRect.velocityX = -3
  theOtherRect = createSprite(600,200,100,100)
  theOtherRect.shapeColor = "Orange";
  theOtherRect.velocityX = -2
  notTheFinalRect = createSprite(500,300,100,100);
  notTheFinalRect.shapeColor = "Blue";
  thisIsTheActualFinalRect = createSprite(300,300,100,100);
  thisIsTheActualFinalRect.shapeColor = "Blue";
}

function draw() {
  background(255,255,255);
  console.log(movingRect.x - fixedRect.x)
  if (isTouching(fixedRect,theOtherRect)) {
    fixedRect.shapeColor = "Pink";
    theOtherRect.shapeColor = "Green";
  }
  else {
    fixedRect.shapeColor = "Blue";
    theOtherRect.shapeColor = "Blue";
  }
bounceOff (fixedRect, theOtherRect)
  //if (fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
  //  fixedRect.velocityX = fixedRect.velocityX * (-1)
  //  movingRect.velocityX = movingRect.velocityX * (-1)
  //  
  //}
  //else {
  //  fixedRect.shapeColor = "Blue";
 //   movingRect.shapeColor = "Blue";
 // }
  drawSprites();
}