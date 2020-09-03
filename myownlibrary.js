function hascollided(bullet,wall){
    bulletRightEdge = bullet.x +bullet.width;
    wallLeftEdge =  wall.x;
    if (bulletRightEdge>=wallLeftEdge) {
      return true
    }
    return false;
  if(hascollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness* thickness*thickness);
  if(damage>10){
    wall.shapecolor = color(255,0,0);
  }
  if(damage<10){
    wall.shapecolor = color(0,0,255);
  }
  }
  }