var boy, girl;
var boyback, girlback, playButton, contButton;
var gender;
var obj;
var boyImg, girlImage, boyBackImg, girlBackImg, friendImg, arrowImg, doorImg, ghostImg, grassImg, contImg;
var gameState="start";
function preload(){
  boyImg = loadImage("boy.jpg")
  girlImg = loadImage("girl.jpg")
  boyBackImg = loadImage("boy's back.png")
  girlBackImg= loadImage("girl's back1.png")

  grassImg = loadImage("grass.jpg")
  doorImg = loadImage("door.png")
  playImg = loadImage("play.png")
  wallImg = loadImage("wall.jpg")
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  grass=createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  grass.addImage(grassImg)
  grass.visible=false;
  grass.scale=4;

  boy=createSprite(400, 300, 50, 50);
  boy.addImage(boyImg)
  boy.scale=0.74

  girl=createSprite(1000, 300, 50, 50);
  girl.addImage(girlImg)
  girl.scale=0.25

  girlback=createSprite(700, 500, 10, 10)
  girlback.addImage(girlBackImg)
  girlback.scale=0.3
  girlback.visible=false

  boyback=createSprite(700, 500, 10, 10)
  boyback.addImage(boyBackImg)
  boyback.scale=0.7
  boyback.visible=false

  wall = createSprite(700, -235, 10000, 300)
  wall.addImage(wallImg)
  wall.scale = 1.5
  wall.visible=false

  door = createSprite(700, 120, 50, 50)
  door.addImage(doorImg)
  door.scale=1
  door.visible=false

  playButton = createSprite(700, 100, 50, 50)
  playButton.addImage(playImg)
  playButton.scale=0.15
  playButton.visible=false
}

function draw() {
  background(0);  
  drawSprites();
  if(gameState==="start"){
    boy.visible=true
    girl.visible=true

    textSize(20)
    fill(255)
    text("Click on the character which you want to be and press play button to start the game.", 300, 100)
    if(mousePressedOver(boy)){
      gender="boy"
      gameState="play"
    }
    if(mousePressedOver(girl)){
      gender="girl"
      gameState="play"
    }
  }
  if(gameState==="play"){
    girl.visible=false
    boy.visible=false
    if(gender==="boy"){
      Game(boyback)
    }
    if(gender==="girl"){
      Game(girlback)
    }
  }

  if(gameState=="note"){
    background("yellow")

    textStyle(BOLD)
    textSize(50)
    text("NOTE", 500, 100)
    textSize(20)
    textStyle(ITALIC)
    fill("grey")
    text("I am stuck inside the castle for a long time.", 400, 200)
    text("I feel really scared.", 400, 300)
    text("Help me get out.", 400, 400)
    text("MARKUS", 400, 500)
    text("press space to continue", 400, 600)

    if(keyDown("space")){
      gameState="end"
    }
  }

  if(gameState==="end"){
    door.visible=false;
    wall.visible=false;
    playButton.visible=false;

    if(gender==="boy"){
      endState(boyback)
    }
    if(gender==="girl"){
      endState(girlback)
    }

  }

}
function Game(obj){
  grass.visible=true;
  obj.visible=true;
  door.visible=true;
  wall.visible=true;

  if(obj.isTouching(door)){
     playButton.visible=true
  }
  if(keyDown(UP_ARROW)){
    obj.y=obj.y-3
  }

  if(mousePressedOver(playButton)){
    gameState="note"
  }

}

function endState(obj){
  obj.visible=true;


  grass.visible=true;

  
}
