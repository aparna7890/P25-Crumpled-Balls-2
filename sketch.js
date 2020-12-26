
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground
var box1, box2, box3

function preload()
{
	dustbinImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(250, 350, 50)
	fill("magenta")

	groundsprite = createSprite(width/2,650,width,20)
	
	ground = Bodies.rectangle(width/2, 650, width, 20, {isStatic:true});

	b1 = createSprite(1200, 550, 200, 100)
	b1.addImage(dustbinImg)
	b1.scale = 0.6

	box1 = new Dustbin (1150, 600, 20, 100)
	box2 = new Dustbin(1200, 630, 150, 20)
	box3 = new Dustbin(1250, 600, 20, 100)

	World.add(world, ground)

	Engine.run(engine);  
}

function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("white");

  paper.display();

   box2.display();
   box1.display();
   box3.display();
   drawSprites();
   
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:45, y:-50})
	}
}


