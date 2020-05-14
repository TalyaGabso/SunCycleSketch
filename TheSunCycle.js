function setup() {
    createCanvas(400, 400);
}
var x = 0;

function draw() {
    noStroke();
 //night time. 
    if( x== 0) {
    //the sky
        background('#0C0A04')
        fill('#b8b4a4')
    //the moon
        ellipse(200,100,150,150);
        stroke(255);
    //stars
        point(random(0,width),random(0,height));
        noStroke();
    //the sea
        fill ('#4684B0');
        rect(0,200,400,200);
    } 
 //sunrise 
    if(x == 1){
    //the sky
        background('#FBEA98');
        textSize(32);
        textAlign(CENTER);
        textFont("Palatino");
        fill(0,0,0)
        text("SUNRISE",200,50);
    //the sun and sun rays.
        drawRays("#D66304");
        fill('#F17106');
        ellipse(200,200,150,150); 
    //the sea
        fill('#65BDFC');
        rect(0,200,2400,200);
    }
//afternoon sun
    if(x == 2){
    //the sky
        background('#FFDB00');    
    //full sun and above it the text
        fill('#FD5E53');
        ellipse(200,100,150,150); 
        textSize(32);
          textAlign(CENTER);
        textFont("Palatino");
        fill(0,0,0)
        text("AFTERNOON",200,50);
    //the sea 
        fill('#60B4F0');
        rect(0,200,2400,200);
    }
//sunset  
    if(x == 3){
    //the sky
        background('#F17106');
    //the sun
        fill('#FFDB00');
        ellipse(200,200,150,150); 
        textSize(32);
        textAlign(CENTER);
        textFont("Palatino");
        fill(0,0,0)
        text("SUNSET",200,50);
    //the sea
        fill('#417AA4');
        rect(0,200,2400,200);
    }
 //a bird following the mouse
    stroke('#000');
    line(mouseX - 0 , mouseY - 20 , mouseX - 15 ,mouseY - 10);  
    line(mouseX - 30, mouseY - 20 , mouseX - 15 ,mouseY - 10);
 //the sea in order to hide the bird when the mouse is on the sea.
    noStroke();
    rect(0,200,2400,200);
    console.log(x);
}
//when clicked we will see three of the sun cycles.
function mouseClicked(){
   x = x + 1;
   if(x == 4){
     x = 0;
   }
 }
//the ray of sun in the sunrise.
function drawRays(color){
    fill(color);
    triangle(120,195,50,175,125,170);
    triangle(126,165,65,120,140,145);
    triangle(145,140,115,80,170,125);
    triangle(180,123,198,55,215,122);
    triangle(227,125,280,80,252,140);
    triangle(260,145,340,120,272,165);
    triangle(275,170,350,175,280,195);
}