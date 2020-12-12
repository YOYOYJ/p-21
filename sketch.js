const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bullet,wall,speed,weight;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;
	speed=random(550,900);
	weight=random(20,30);
	bullet=createSprite(50,200,50,50);
    wall=createSprite(1500,600,20,hieght/2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bullet.velocityX=speed;

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
	  bullet.velocityX=0;
	  var damage=0.5 * weight * speed * speed/2509;
	  if (damage>180){
		  bullet.shapeColor("red");
	  }
	  if (damage<180 && damage>100){
		  bullet.shapeColor("yellow");
	  }
	  if (damage<100){
		  bullet.shapeColor("green")
	  }
  }
  
  drawSprites();

 
}



