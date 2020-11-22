

function setup() {
    createCanvas(480, 480);
    textSize (20);
  
    fill(129, 215, 242);
    rect(0, 0, 480, 400);
    fill(0, 255, 0);
    rect(0, 400, 480, 80);
    fill(255, 250, 64);
    ellipse(40, 40, 80);
    fill(230,236,55)
    ellipse (240,320,40)
    noStroke();
    strokeWeight(3);
    stroke (117, 180, 0);
    line(240,340,240, 400);
  
  }
  let s = 'Draw the petals on the flower.';
  
  function draw(){
  fill (50);
  text(s, 200, 10, 100, 80);}
  function mouseDragged() 
  { 
  strokeWeight(6);
  fill(117, 180, 0)
  line(mouseX, mouseY, pmouseX, pmouseY);
  }
  