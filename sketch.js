
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var BobObject1,BobObject2,BobObject3,BobObject4,BobObject5


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,300,190,10);
	BobObject1 = new Bob(340,500,30);
	BobObject2 = new Bob(370,500,30);
	BobObject3 = new Bob(400,500,30);
	BobObject4 = new Bob(430,500,30);
	BobObject5 = new Bob(460,500,30);

	rope1=new Rope(BobObject1.body,roof.body,-BobObject1.diameter*2,0);
	rope2=new Rope(BobObject2.body,roof.body,-BobObject2.diameter*1,0);
	rope3=new Rope(BobObject3.body,roof.body,-BobObject3.diameter*-0.1,0);
	rope4=new Rope(BobObject4.body,roof.body,-BobObject4.diameter*-1,0);
	rope5=new Rope(BobObject5.body,roof.body,-BobObject5.diameter*-2.08,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  

  
  drawSprites();

  roof.display();



  BobObject1.display();
  BobObject2.display();
  BobObject3.display();
  BobObject4.display();
  BobObject5.display();

  keyPressed();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(BobObject1.body,BobObject1.body.position,{x:-5,y:-15});
	}
}