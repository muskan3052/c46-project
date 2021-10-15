const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var bg, bgImage;
var engine, world;


function preload() {
    //load the images here
   bgImage=loadImage("images/space.jpg")
}

function setup(){
    createCanvas(1000, 800);
    engine=Engine.create();
    world=engine.world;
    bg = createSprite(width/2, height/2);
    bg.addImage("bg", bgImage);
    bg.scale=1

    planet = new Earth ()
    asteroid = new Asteroid ();
    plane = new Plane();
    dinosaur = new Dinosaur(600,525)

}

function draw() {

    background("black");

    Engine.update(engine);
    
    drawSprites();
    planet.display();
    asteroid.display();
    plane.display();
    dinosaur.display();
    plane.handlePlaneMovement();
}


