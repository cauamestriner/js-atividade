let cor;
let circuloX; // horizontal
let circuloY; // vertical

function setup() {
  
  createCanvas(500, 500); //width x height
  background(color(0, 0, 200,));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  circuloX = [0, 0, 0];
  circuloY = [random(height), random(height), random(height)],
  posicaoVertical = random(height);
  posicaoVertical2 = random(height);
}


// circuloX = 0,0, 0
// circuloY = 300, 150, 50


function draw() {
  
  fill(cor);
 
  // console.log(circuloX.leght);
  for(let contador in circuloX) {
  console.log(contador);
  circle(circuloX[contador], circuloY[contador], 50);
  circuloX[contador] += random(0, 3);
  circuloY[contador] += random(-3, 3);
    
     if(circuloX[contador] >= width) {
       circuloX[contador] = 0;
       circuloY[contador] = random(height);
     }
  }
  

 
 

  
 
  if(mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255),
    random(0, 100));
  }
  
}
