const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var pig1;
var pig2;
var tronco2;
var tronco1;
var box5;
var tronco3;
var tronco4;
var bird1;
var fondo;
var tronco5;
var montaña;
var chain;
function preload(){
fondo=loadImage("sprites/OIP.jpg")

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,300,70,70);
    box2 = new Box(800,300,70,70);
    ground = new Ground(600,height,1200,20)
    pig1=new pig (900,300);
   tronco1=new tronco (900,280,300,PI/2);
   box3 = new Box(1000,200,70,70);
   box4 = new Box(800,200,70,70);
   pig2=new pig (900,200);
   tronco2=new tronco (900,170,300,PI/2);
   box5 = new Box(950,90,70,70);
   tronco3=new tronco (850,90,130,PI/7);
   tronco4=new tronco (980,90,130,-PI/7);
   bird1=new bird(100,100);
   tronco5=new tronco (100,200,80,PI/2);
   montaña=new Ground (150,350,350,200);
   chain=new Chain (bird.body,tronco5.body);
}

function draw(){
    background(fondo);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    tronco1.display();
    box3.display();
    box4.display();
    tronco2.display();
    pig2.display();
    box5.display();
    tronco3.display();
    tronco4.display();
    bird1.display();
    tronco5.display();
    montaña.display();
    chain.display();
}