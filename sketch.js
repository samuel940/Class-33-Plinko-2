var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

var plinkos = [];
var divisions = [];
var particle, turn, gameState, a;

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  turn = 0;
  a = 0;
  gameState = "play"
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
  textSize(20);
  text("Score : "+score,20,30);
  textSize(30)
  text('500',15,600);
  text('500',95,600);
  text('500',175,600);
  text('500',255,600);
  text('100',335,600);
  text('100',415,600);
  text('100',495,600);
  text('200',575,600);
  text('200',655,600);
  text('200',735,600);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   //  score++;
  // }
  if ( a === 1) {
    
    particle.display();
    if (particle.body.position.y >= 600) {
      a = 0;
      if (particle.body.position.x < 300) {
        score = score + 500;
      }
      if (particle.body.position.x > 300 && particle.body.position.x < 600 ) {
        score = score + 100;
      }
      if (particle.body.position.x > 600 && particle.body.position.x < 900 ) {
        score = score + 200;
      }
      gameState = "play";
      particle=null;
      if (turn === 5) {
        gameState = "game over";
      }
    }
    //console.log(mouseY);
  }
  //if (particle) {}
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if (turn === 5 && gameState === "game over") {
     textSize(50)
     text("Game Over",400,400);
   }
}

function mousePressed() {
if (gameState!=="end" && gameState!=="game over") {
  turn++;
  particle = new Particle(mouseX,10,10);
  a = 1;
  gameState = "end";
}
}