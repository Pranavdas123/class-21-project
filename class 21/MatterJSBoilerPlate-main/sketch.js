var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
 createCanvas(1000, 430);

  var ball_options={
     isStatic:false, 
	 restitution:0.3,
	 friction:0,
	 density:1.2  
     }
	 
 engine = Engine.create();
 world = engine.world;

 //Create the Bodies Here.
 ball = Bodies.circle(200,100,30,ball_options)
 World.add(world,ball)

 ground = new Ground(500,400,1000,10);
 right  = new Ground(750,350,10,100);
 left   = new Ground(900,350,10,100);

 Engine.run(engine);
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0, y:0},{x:5, y:-7})
	   
	 }
	
  }

function draw() {
  rectMode(CENTER);
  background(0);

  ground.show()
  right.show()
  left.show()

  ellipse(ball.position.x,ball.position.y,30)
  
  drawSprites();
  keyPressed()
}



