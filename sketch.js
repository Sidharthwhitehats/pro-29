const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var ground;
var polygon,polygon_img;
var slingshot;

function preload(){
    polygon_img= loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    block1= new Block(600,380,30,40);
    block2= new Block(570,380,30,40);
    block3= new Block(540,380,30,40);
    block4= new Block(510,380,30,40);
    block5= new Block(630,380,30,40);
    block6= new Block(660,380,30,40);
    block7= new Block(690,380,30,40);
    block8= new Block(630,340,30,40);
    block9= new Block(600,340,30,40);
    block10= new Block(570,340,30,40);
    block11= new Block(540,340,30,40);
    block12= new Block(660,340,30,40);
    block13= new Block(630,300,30,40);
    block14= new Block(600,300,30,40);
    block15= new Block(570,300,30,40);
    block16= new Block(600,260,30,40);

    ground = new Ground(600,400,240,10);

    polygon= Bodies.circle(50,300,20);
    World.add(world,polygon);
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    slingshot = new SlingShot(this.polygon,{x:100, y:200});
}
function draw(){
    Engine.update(engine);
    strokeWeight(4);
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
   block13.display(); 

   block14.display(); 
   block15.display(); 
   block16.display(); 
   slingshot.display();

   ground.display(); 
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
