
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, dustbin, paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


    dustbin = new DustBin(600, 590)
	paper = new Paper(100, 550, 10)
	ground = Bodies.rectangle(width / 2, 600, width,5,
    {
     isStatic: true
	});
    World.add(world, ground)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  rect(ground.position.x,ground.position.y,width,5)
  paper.display();
  dustbin.display();
  

  
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {
x: 12,
y: -11
		})
	}
}



