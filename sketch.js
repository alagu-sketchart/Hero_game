const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
}

function setup() {
  createCanvas(1000, 700);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

   ground = new Ground(200, 400, 800, 10);
   hero = new Hero(40,5,100,100);
   attach = new Sling(hero.body,{x:100, y:465});
   block1 = new Block(260,310,40,40);
   block2 = new Block(260,350,40,40);
   block3 = new Block(260,390,40,40);
   block4 = new Block(380,310,40,40);
   block5 = new Block(380,350,40,40);
   block6 = new Block(380,390,40,40);
   block7 = new Block(500,310,40,40);
   block8 = new Block(500,350,40,40);
   block9 = new Block(500,390,40,40);
   block10 = new Block(580,310,40,40);
   block11 = new Block(580,350,40,40);
   block12 = new Block(580,390,40,40);
   monster = new Monster(700,300,100,100);

   Engine.run(engine);
}

function draw(){
  rectMode(CENTER);
  background("lightblue");

  hero.display();
  ground.display();
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  monster.display();
  attach.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  attach.fly();
}