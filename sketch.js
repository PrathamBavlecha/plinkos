var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions = []
var gameState = "play";
var count = 5;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) {
     plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
     plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,375));
    }
}
 

function draw() {
  background("black");
  push ()
  textSize(20)
  noStroke()
  text("Score : "+score,20,30);
  text("500",20,600)
  text("500",100,600)
  text("500",180,600)
  text("500",260,600)
  text("100",340,600)
  text("100",420,600)
  text("100",500,600)
  text("200",580,600)
  text("200",660,600)
  text("200",740,600)
  pop ()
  Engine.update(engine);
 
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if(particles!=null){
    particles.display();
    if (particles.body.position.y>760){
      if (particles.body.position.x<300){
        score = score + 500 
        particles = null;
      }else
      
      if(particles.body.position.x>301&&particles.body.position.x<600){
        score = score +100
        particles = null
      }else
      if(particles.body.position.x>601&&particles.body.position.x<900){
        score = score + 200
        particles = null;
      }
     }
   }    
    
   if(count===0) gameState = "end"
   if(gameState==="end"){
     textSize(100)
     fill ("red")
     textFont ("fantasy")
     text("Game Over",200,400)
   }
  

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
}
function mousePressed(){
  if (gameState!== "end"&&count>0){
    particles = new Particle(mouseX,10,10) 
    count = count - 1
  }
}