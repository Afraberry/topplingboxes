//namespaceing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var myGround;

var box, box2;

function setup() {
  createCanvas(400, 400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  box = new Box(200, 200, 60, 85);
  box2 = new Box(230, 150, 60, 65);
  myGround = new Ground(200, 385, 400, 25);
}

function draw() {
  background(0);
  Engine.update(myEngine);

  box.display();
  box2.display();
  myGround.display();
}
