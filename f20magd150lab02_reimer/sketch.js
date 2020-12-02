function setup() {
	createCanvas(500,500);
	background(0);
}
//Work in here
function draw() {
let a = color(60,230,220);//Color for Blue Planet
fill(a);
ellipse(80,80,70,70);//Blue Planet
let b = color('green');
fill(b);
ellipse(200,400,30,30);//Green Planet
let c = color('#8b0000');
fill(c);
ellipse(400,300,45,45);//Red Planet
let d = color('yellow');
fill(d);
ellipse(250,250,75,75);//Sun or Yellow circle
push();
let e = color('white');//Color for stars
fill(e);
noStroke();
triangle(150,50,170,50,160,70);
triangle(150,65,170,65,160,45);
triangle(250,400,270,400,260,420);
triangle(250,415,270,415,260,395);
pop();
fill('grey');
beginShape();//Asteroid
vertex(100,200);
vertex(85,220);
vertex(82,235);
vertex(100,240);
vertex(110,235);
vertex(110,220);
endShape(CLOSE);
push();
noFill();
stroke('white');
arc(120,180,100,100,1,HALF_PI);
arc(120,170,100,100,1,HALF_PI);
arc(120,160,100,100,1,HALF_PI);
pop();
}