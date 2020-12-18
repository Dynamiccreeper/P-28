
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyImg;
var ground;
var tree,treeImg
var stone,stoneString;
function preload()
{
	boyImg=loadImage( "Plucking mangoes/boy.png");
	treeImg=loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
boy = createSprite(200,430,5,5)
boy.addImage(boyImg);
boy.scale = 0.1;

ground = createSprite(400,500,800,5)

tree=createSprite(700,200,5,5)
tree.addImage(treeImg);
tree.scale = 0.5;

stoneString = new Stone(stone.body,{x:200, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  boy.display();
detectColiision(Stone,Mango);
  drawSprites();
 
}

function detectColiision(Lstone,Lmago){
mangoBodyPosition=Lmago.body.position;
stoneBodyPosition=Lstone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=Lmago.r+Lstone.r){
Matter.Body.setStatic(Lmag.body,false);


}

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    stoneString.fly();
}

function keyPressed(){

    if(keyCode === 32){

        stoneString.attach(stone.body);

    }
}
