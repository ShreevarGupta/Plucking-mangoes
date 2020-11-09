const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var tree
var stone;
var ground;
var launcher;


function preload() {
	
}


function setup() {

	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(750, 460, 50, 50);
	mango2 = new Mango(690, 450, 50, 50);
	mango3 = new Mango(790, 400, 56, 56);
	mango4 = new Mango(840, 370, 50, 50);
	mango5 = new Mango(700, 370, 51, 51);
	mango6 = new Mango(620, 420, 52, 52);
	mango7 = new Mango(775, 340, 50, 50);
	mango8 = new Mango(870, 430, 60, 60);

	ground = new Ground(500, 695, 1000, 10);
	tree = new Tree(750, 485, 400, 420);
	stone = new Stone(110, 486, 30, 30);
  boy = new Boy(200, 580, 300, 400);
  launcher = new Launcher(stone.body, {x:110, y:485})


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  Engine.update(engine);

  background("beige");
  
  ground.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  boy.display();

  stone.display();

  launcher.display();
  
  drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}


function keyPressed(){
  if(keyCode === 32){
      launcher.attach(stone.body);
  }
}

