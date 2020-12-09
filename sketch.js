const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygon,ground1,ground2,sling;

//var level1, level1Array = []; 

var block0,block1,block2,block3,block4,block5,block6;
var block7,block8,block9,block10;
var block11,block12,block13;
var block14,block15;

var block18,block19,block20,block21,block22,block23,block24,block25,block26;


function setup(){

    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world; 
    
    ground1 = new Ground(680, 560, 450, 10);
    ground2 = new Ground(1239, 350, 340, 10);
    polygon = new Polygon(200, 400, 50, 50);
    sling = new Chain(polygon, {x:200, y:400});
    /*for(i=485; i<=635; i=i+60){
        fill("purple");
        level1Array.push(level1 = new Blocks(i,490,60,70));
    }*/
    
    //ground1
    block0 = new Blocks(500, 520, 60, 70);
    block1 = new Blocks(560, 480, 60, 70);
    block2 = new Blocks(620, 480, 60, 70);
    block3 = new Blocks(680, 480, 60, 70);
    block4 = new Blocks(740, 480, 60 ,70);
    block5 = new Blocks(800, 480, 60, 70);
    block6 = new Blocks(860, 520, 60, 70);

    block7 = new Blocks(560, 445, 60, 70);
    block8 = new Blocks(620, 445, 60, 70);
    block9 = new Blocks(680, 445, 60, 70);
    block10 = new Blocks(740, 445, 60, 70);
    block11 = new Blocks(800, 445, 60, 70);

    block12 = new Blocks(620, 410, 60, 70);
    block13 = new Blocks(680, 410, 60, 70);
    block14 = new Blocks(740, 410, 60, 70);

    block15 = new Blocks(680, 375, 60, 70);
    

    //ground2
    block18 = new Blocks(1120, 300, 60, 70);
    block19 = new Blocks(1180, 300, 60, 70);
    block20 = new Blocks(1240, 300, 60, 70);
    block21 = new Blocks(1300, 300, 60, 70);
    block22 = new Blocks(1360, 300, 60, 70);

    block23 = new Blocks(1180, 265, 60, 70);
    block24 = new Blocks(1240, 265, 60, 70);
    block25 = new Blocks(1300, 265, 60, 70);

    block26 = new Blocks(1240, 230, 60, 70);


}

function draw(){
    background("black")

    Engine.update(engine);
    ground1.display();
    ground2.display();
    polygon.display();
    sling.display();

    fill("red");
    block0.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    fill("orange");
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();

    fill("yellow");
    block12.display();
    block13.display();
    block14.display();

    fill("lime");
    block15.display();
    
    fill("purple");
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();

    fill("blue");
    block23.display();
    block24.display();
    block25.display();

    fill("cyan");
    block26.display();    
    //level1.display();
}

function mouseDragged(){
    Matter.body.setPosition(polygon.body, {x : mouse.X, y : mouse.Y})
}

function mouseReleased(){
    Constraint.fly();
}