function setup() {
  createCanvas(1600,400);
  var car, wall;
  var speed, weight;
  var deformation;

  speed=random(55,90);
  weight=random(400,1500);

  deformation=((0.5*weight*speed*speed)/22500)

  
  

  car=createSprite(50, 200, 50, 50);
  car.velocityX= speed;

  wall= createSprite(1500,200,60,height/2);
  wall.shapeColor= (80,80,80);

}

function draw() {
  background(255,255,255);
  


  if(car.isTouching(wall){
  
    if(deformation < 100){
    car.shapeColor= (0,255,0);
  }

  if(100 < deformation < 180){
    car.shapeColor= (230,230,0);
  }

  if(deformation > 180){
    car.shapeColor= (255,0,0);
  }
  car.velocityX=0;
}

  drawSprites();
}