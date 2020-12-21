const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "PLAY";

var particles;
var plinkos = [];
var divisions = [];
var divisionsHeight=300;

var ground;
var boundary1,boundary2,boundary3,boundary4;
var score = 0;
var count = 0;

function setup() {
  createCanvas(750,800);
  
	engine = Engine.create();
  world = engine.world;
  
  boundary1 = new Ground(2,375,5,750);
  boundary2 = new Ground(748,375,5,750);
  boundary3 = new Ground(375,798,750,5);
  boundary4 = new Ground(375,2,750,5);
  ground = new Ground(375,790,750,10);
  
  for(var k=0;k<=width;k=k+75){
    divisions.push(new Divisions(k,height-divisionsHeight/2,10,divisionsHeight))
  }

  for(var j=55;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var j=30;j<=width-10;j=j+40){
    plinkos.push(new Plinko(j,175));
  }  
  for(var j=55;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275))
  }
  for(var j=30;j<=width-10;j=j+40){
    plinkos.push(new Plinko(j,375));
  }  
}

function draw() {
  background(0);
  Engine.update(engine);

  fill("brown");
  boundary1.display();
  boundary2.display();
  boundary3.display();
  boundary4.display();
  fill("white");
  ground.display();

  textSize(20)
  fill("white")
  text("Score:"+ score,10,40);

  textSize(20)
  fill("cyan")
  text("500",20,550);

  textSize(20)
  fill("cyan")
  text("500",95,550);

  textSize(20)
  fill("cyan")
  text("500",170,550);

  textSize(20)
  fill("cyan")
  text("500",245,550);

  textSize(20)
  fill("cyan")
  text("100",320,550);

  textSize(20)
  fill("cyan")
  text("100",395,550);

  textSize(20)
  fill("cyan")
  text("100",470,550);

  textSize(20)
  fill("cyan")
  text("200",545,550);

  textSize(20)
  fill("cyan")
  text("200",620,550);

  textSize(20)
  fill("cyan")
  text("200",695,550);

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  if(particles!=null){ 
    particles.display(); 
    if (particles.body.position.y>760){ 
      if (particles.body.position.x < 300) { 
        score=score+500; 
        particles=null; 
        if ( count>= 6) gameState ="end"; 
      } 
      else if (particles.body.position.x < 500 && particles.body.position.x > 301 ) { 
        score = score + 100; 
        particles=null; 
        if ( count>= 6) gameState ="end"; 
      } 
      else if (particles.body.position.x < 750 && particles.body.position.x > 501 ) { 
        score = score + 200; 
        particles=null; 
        if ( count>= 6) gameState ="end"; 
      } 
    } 
  }

  if(count>=6){
    textSize(50);
    fill("yellow");
    text("GAME OVER!",210,250);
    gameState="END";
  }
  
}

function mousePressed(){
  if(gameState!=="END"){
    count++
    particles=new Particles(mouseX,10,10,10)
  }
}