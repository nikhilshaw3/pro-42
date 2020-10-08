

function setup() {
  createCanvas(1024,624);

  hr = hour();
  mn = minute();
  sc = second();

}

function draw() {
  background(0);  

  text('current second: \n'+ s,5,50)


scAngle = map(sc,0,60,0,360);

  drawSprites();
}