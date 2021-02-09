var canvas;
var music;
var Bbox;
var Ybox;
var Pbox;
var Gbox;
var box;
var b1,b2,b3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   Bbox = createSprite(90,590,200,20);
   Bbox.shapeColor="blue";
   
   Ybox = createSprite(300,590,200,20);
   Ybox.shapeColor="yellow";

   Pbox = createSprite(510,590,200,20);
   Pbox.shapeColor="pink";

   Gbox = createSprite(720,590,200,20);
   Gbox.shapeColor="green";

   b1 = createSprite(810,300,10,600);

   b2 = createSprite(0,300,4,600);

   b3 = createSprite(400,0,800,4);

    //create box sprite and give velocity
   box = createSprite(380,10,50,50);
   box.velocityX=3;
   box.velocityY=4;

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
    drawSprites();
    
    box.bounceOff(b1);
    box.bounceOff(b2);
    box.bounceOff(b3);

    //add condition to check if box touching surface and make it box
    if(Bbox.isTouching(box) && box.bounceOff(Bbox)){
        //change color here
        box.shapeColor="blue";
    }
    if(Ybox.isTouching(box) && box.bounceOff(Ybox)){
        //change color here
        box.shapeColor="yellow";
    }
    if(Pbox.isTouching(box) && box.bounceOff(Pbox)){
        //change color here
        box.shapeColor="pink";
    }
    if(Gbox.isTouching(box) && box.bounceOff(Gbox)){
        //change color here
        box.shapeColor="green";
    }
    if(Ybox.isTouching(box)){
        box.shapeColor="yellow";
        box.velocityX=0;
        box.velocityY=0;
    }
}
