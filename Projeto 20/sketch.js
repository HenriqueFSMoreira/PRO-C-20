var engine, world, block1, block2, plane, block3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var plane_options = {
	isStatic: true
}

plane = Bodies.rectangle(600, 580, 1200, 2, plane_options);
World.add(world, plane);
var block1_options = {
	restitution: 0.1,
	frictionAir: 0.01,
	friction: 0.7
}
var block2_options = {
	restitution: 0.5,
	frictionAir: 0.02,
	friction: 0.5
}
var block3_options = {
	restitution: 0.95,
	frictionAir: 0.03,
	friction: 1
}
block1 = Bodies.circle(220, 10, 10, block1_options);
World.add(world, block1);
block2 = Bodies.rectangle(110, 50, 15, 15, block2_options);
World.add(world, block2);
block3 = Bodies.rectangle(330, 70, 30, 15, block3_options);
World.add(world, block3);
rectMode(CENTER);
ellipseMode(RADIUS);
}


function draw() {
  background("yellow");
  fill("purple");

 Engine.update(engine);
rect(plane.position.x, plane.position.y, 1200);
ellipse(block1.position.x, block1.position.y, 30);
rect(block2.position.x, block2.position.y, 30, 30);
rect(block3.position.x, block3.position.y, 30, 15);
}



