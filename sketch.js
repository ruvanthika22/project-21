var wall, bullet;
var thickness, speed, weight;

function setup(){
  createCanvas(1600,400);
 speed = random(55,90);
 thickness = random(232,321);
 weight = random(30,52);

 bullet = createSprite(50,200,50,30);
 wall=createSprite(1500,200,thickness,height/2);

 bullet.velocityX = 5;
}

function draw(){
  background("black");

  if(hascollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
  {
    wall.shapeColor=color(255,0,0);//red
    }
  
   if(damage<10){
      wall.shapeColor=color(0,255,0);//green
    }
  }
    drawSprites();

    hascollided(wall,bullet)
}

function hascollided(lbullet,lwall){
  bulletrightEdge=lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
    return false; 
}
