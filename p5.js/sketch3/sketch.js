let flower;

//preload
function preload() {
  flower = loadImage('flower.pgn.gif');

}
//close preload

function setup() {
  createCanvas(480, 480);

}


// Draw
function draw() {
  fill(51, 63, 220);
  rect(0, 0, 480, 400);
  fill(0, 255, 0);
  rect(0, 400, 480, 80);
  fill(65, 133, 28);
  fill(255, 250, 64);
  ellipse(40, 40, 80);
  noStroke();
  image(flower, 0, 0);
  if (mouseIsPressed == true) {
    ellipse(mouseX, mouseY, 9, 9);
  }
}