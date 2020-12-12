
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var car,wall,speed,weight;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;
	speed=random(55,90);
	weight=random(400,1500);
	car=createSprite(50,200,50,50);
    wall=createSprite(1500,600,20,hieght/2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  car.velocityX=speed;
  //car.collide(wall);

  if(wall.x-car.x<(car.width+wall.width)/2){
	  car.velocityX=0;
	  var deformation=0.5 * weight * speed * speed/2509;
	  if (deformation>180){
		  car.shapeColor("green");
	  }
	  if (deformation<180 && deformation>100){
		  car.shapeColor("yellow");
	  }
	  if (deformation>180){
		  car.shapeColor("red")
	  }
  }
  
  drawSprites();

 
}




