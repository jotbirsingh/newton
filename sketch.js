const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var bob1,bob2;
var roof;
var ground1;

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    bob1 = new Bob(240,100,50,50);
    rope1=new Rope(bob1.body,roof.body,-bodDiameter*2,0);
    bob2 = new Bob(200,100,50,50);
    rope2=new Rope(bob2.body,roof.body,-bodDiameter*2,0);
    bob3 = new Bob(180,100,50,50);
    rope3=new Rope(bob3.body,roof.body,-bodDiameter*2,0);
    bob4 = new Bob(160,100,50,50);
    rope4=new Rope(bob4.body,roof.body,-bodDiameter*2,0);
    bob5 = new Bob(160,100,50,50);
    rope5=new Rope(bob5.body,roof.body,-bodDiameter*2,0);
    ground1 = new Ground(200,490,600,20);
    //roof = new Ground(200,50,600,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    ground1.display();
   roof.display();
}