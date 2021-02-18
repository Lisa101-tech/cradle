
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
     

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,280,370,20)
	
	ball1 = new Ball (400,550,)
	ball2 = new Ball (480,550,)
	ball2 = new Ball (480,550,)
	ball3 = new Ball (320,550,)
	ball4 = new Ball (560,550,)
	ball5 = new Ball (240,550,)


	chain1 = new Chain(ball1.body,roof.body,{x:-0,y:10})
	chain2 = new Chain(ball2.body,roof.body,{x:81,y:10})
	chain3 = new Chain(ball3.body,roof.body,{x:-81,y:10})
	chain4 = new Chain(ball4.body,roof.body,{x:162,y:10})
	chain5 = new Chain(ball5.body,roof.body,{x:-162,y:10})



    
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  drawSprites();

  roof.display();
 
  ball1.display();
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()

  

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
}

function keyPressed(){
   if (keyCode===UP_ARROW ){
     Matter.Body.applyForce(ball4.body,ball4.body.position,{x:60, y:60});
   }
}