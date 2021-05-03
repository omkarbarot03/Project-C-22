var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800,600);

	fairyVoice.play();

	fairy = createSprite(300,490);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
	Engine.update(engine)

  background(bgImg);
  star.velocityY=5;
  fairy.velocityX=3;
  fairy.velocityY=0;

drawSprites();

}

function KeyPressed(){
	if(keydown(RIGHT_ARROW)){
		fairy.velocityX=6;
	}else if (KeyDown(LEFT_ARROW)){
  fairy.velocityX=5
  fairy.velocityY=0;
  
	}else if(KeyDown(DOWN_ARROW)){
		star.velocityX=5
		Matter.Body.setStatic(packageBody,false);
	}  
   
	 if(starBody.position.y>470){
		  star.velocityY=0;
	 }
  
}
