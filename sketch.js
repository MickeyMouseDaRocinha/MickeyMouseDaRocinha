function setup() {
  createCanvas(900, 500);
  background("red")
}

function draw() {
  stroke("rgb(11,11,11)");
  fill("black");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 5, 5);
  }
}
