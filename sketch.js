var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600, 400);
  bullet = createSprite(50, 200, 60, 20);
  bullet.shapecolor = color(0, 225, 0);
  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapecolor = color(80, 80, 80);

  speed = random(10, 20);
  weight = random(30, 52);
  thickness = random(22, 83);
}

function draw() {
  background(0, 0, 0);
  bullet.velocityX = speed;

  if (wall.x - bullet.x < bullet.width + wall.width / 2) {
    bullet.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) / 22509;
    if (deformation > 180) {
      bullet.shapeColor = "green";
      wall.shapeColor = "green";
    }
    if (deformation < 180 && deformation > 100) {
      bullet.shapeColor = "green";
      wall.shapeColor = "green";
    }
    if (deformation < 100) {
      bullet.shapeColor = "green";
      wall.shapeColor = "green";
    }
  }
  hascollided(bullet, wall);
  drawSprites();
}
function hascollided(bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;
  if (hascollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage =
      (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    if (damage > 1000) {
      wall.shapeColor = "green";
    }
    if (damage < 1000) {
      wall.shapeColor = "green";
    }
  }
}
