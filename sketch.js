const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var circles =[];
var division =[];
var ball =[];

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,800);

  //creating obstacle balls
  for(var i =30;i < 800; i = i +50 ){ 
    circles.push(new Circles(i,100,20)); 
    
  }

  for(var i =50;i < 800; i = i +55 ){ 
    circles.push(new Circles(i,150,20)); 
    
  }

  for(var i =30;i < 800; i = i +60 ){ 
    circles.push(new Circles(i,200,20)); 
    
  }

  for(var i =50;i < 800; i = i +50 ){ 
    circles.push(new Circles(i,250,20)); 
    
  }

  for(var i =30;i < 800; i = i +55 ){ 
    circles.push(new Circles(i,300,20)); 
    
  }

  for(var i =50;i < 800; i = i +60 ){ 
    circles.push(new Circles(i,350,20)); 
    
  }

  for(var i =30;i < 800; i = i +50 ){ 
    circles.push(new Circles(i,400,20)); 
    
  }

  //creating dividers
  for(var k =50;k < 800; k = k +70 ){ 
    division.push(new Division(k,700,20,200)); 
    
  }

  //creating falling balls
  if(World.frameRate=30){
    for(var v =50;v < 800; v = v +70 ){ 
      ball.push(new Ball(v,random(100, 600),15)); 
      //this.body.velocityY =3;
    }
  }
}

function draw() {
  background("black"); 

  for(var j =0;j < circles.length; j = j +1 ){ 
    circles[j].display(); 
    
  }

  for(var i =0;i < division.length; i = i +1 ){ 
    division[i].display(); 
    
  }

  for(var v =50;v < 800; v = v +70 ){ 
    ball[v].display();
    
  }

  drawSprites();
  Engine.update(engine);
}
