
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var mango2;
var mango3;
var mango4;
var stone;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	  mango1=new mango(1100,100,30);
    mango2=new mango(1000,100,30);
    mango3=new mango(1000,200,30);
    mango4=new mango(1100,230,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  stoneObj=new Stone(300,100,80);
  
  var options={
    length:10,
    stiffness:0.02,
    bodyA:stoneObj.body,
    pointB:{x:200,y:420}


}
  constraint1=Matter.Constraint.create(options);
  World.add (world,constraint1);

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stoneObj.display();
  line(stoneObj.body.position.x,stoneObj.body.position.y,200,420);
  groundObject.display();


  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
}


function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
  function mouseReleased(){
}

function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
  
var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r)
  {
  	Matter.Body.setStatic(lmango.body,false);
  }

}
