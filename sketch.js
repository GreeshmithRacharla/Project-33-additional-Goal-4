var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var score = 0;
var particle;
var count = 0;
var gameState = Play;
var End;

var divisionHeight=300;

function setup() {
  createCanvas(600,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  noStroke();
  textSize(31)
  fill("white")
  text("Score: " + score,30, 50)
  text("500",5,500)
  text("500",65,500)
  text("500",125,500)
  text("500",185,500)
  text("100",245,500)
  text("100",305,500)
  text("100",365,500)
  text("200",425,500)
  text("200",485,500)
  text("200",545,500)
  text("Count: " + count,50, 50)

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
     particle.display();

     if(particle.body.position.y>760){

      if(particle.body.position.x<300){
        score = scorre+500;
        particle = null;
      }
     }
   }

   if(count === 5){
     gameState = End;
     text("GAME OVER",300,400);
   }
}

function mousePressed(){

  if (gameState!=="end") {
      particle = new particle(mouseX,10,10,10);    
  }  

}
