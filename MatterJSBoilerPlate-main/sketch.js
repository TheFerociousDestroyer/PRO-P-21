
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var radius = 70
var engine,world

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options =
{
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
groundObj = new Ground(width/2,695,width,20)

rightSide = new Ground(1150,626,20,120);

leftSide = new Ground(950,626,20,120);

ball = Bodies.circle(260,100,radius/2.6,ball_options);
World.add(world,ball);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display(); 
  leftSide.display();
  rightSide.display()
  
  Engine.update(engine);
ellipse(ball.position.x,ball.position.y,radius/1.5,radius/1.5)
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball,ball.position,{x:105,y:-185})
	}
}


