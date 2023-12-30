function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);

  noFill();
  stroke(200, 200, 200);
  strokeWeight(2);

  orbitControl();
  rectMode(CENTER);
  rect(0, 0,400, 400);
}
