function setup() {
  createCanvas(480, 480);
  }
  function draw() {
  if (mouseIsPressed) {
  fill(200, 60, 80);
  } else {
  fill(120, 35, 40);
  }
  ellipse(mouseX, mouseY, 80, 80);
  }