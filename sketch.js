var birdImg, backgroundImg

function preload() {
  backgroundImg = loadImage("sprites/background.jfif");
  birdImg = loadImage("sprites/bird.png");
 }

function setup() {
  createCanvas(windowWidth,windowHeight);
  bird = createSprite(windowWidth/2 - 200, windowHeight/2, 50, 50);
  bird.addImage(birdImg);
  bird.scale = 0.2;
}



function draw() {
  background(backgroundImg);  
  
  if(keyDown(RIGHT_ARROW)) {
    bird.x = bird.x+3;
  }

  if(keyDown(UP_ARROW)) {
    bird.y = bird.y-3;
  }

  if(keyDown(DOWN_ARROW)) {
    bird.y = bird.y+3;
  }

  if  (frameCount % 60 === 0) {
    var rand = Math.round(random(10,20));
    var pipe = createSprite(5,2,5,rand)
    
  }
  drawSprites();
}
