
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Bob1,Bob2,Bob3,Bob4,Bob5;
var roof;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Bob1 = new Bob(200,200,10,10)
Bob2 = new Bob(210,200,10,10)
Bob3 = new Bob(220,200,10,10)
Bob4 = new Bob(190,200,10,10)
Bob5 = new Bob(180,200,10,10)
roof = new Roof(200,100,70,5)
Rope = new rope(Bob1.body,roof.body)

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
Bob1.display();
Bob2.display();
Bob3.display();
Bob4.display();
Bob5.display();
roof.display();
rope.display();

  drawSprites();
 
}



