//When making this, I used your examples as guides 
//help me. I tried to do what I could without the
//help.
var x = 110;
var y = 660;
var w = 50;
var h = 50;
var cx = 870;
var cy = 685;
var th = 650;
var tw = 850; 
let lh;
function setup() {
	createCanvas(1000,900);
	lh = th
}

function draw() {
	background('pink');//Wall Color
	rect(150,150,700,500);//TV
		push();//Everything in this function is for the
		noStroke();//table that the TV is on
		fill('#964B00');
		rect(100,650,800,70);
		rect(150,700,50,200);
		rect(800,700,50,200);
		rect(150,800,700,70);
		pop();
	push();
	fill(255);
	rect(x,y,w,h);//Square Button
	ellipse(cx,cy,50,50);//Circle Button
	pop();
	push();
	fill(0);
	text("Off",125,690);
	text("On",863,690);
	pop();
	if(mouseIsPressed){
  if(mouseX>x && mouseX <x+w && mouseY>y && mouseY <y+h){
		fill(0);
	}
}
//Code for Square button ^
if(mouseIsPressed){
 if (sqrt(sq(cx - mouseX) + sq(cy - mouseY)) < 50/2 ){
fill(75);
 }
}
//Code for circle button ^
push();
stroke('blue');
line(150,lh, tw,lh)
lh = lh - .5;
if (lh < 150){
	lh = th
}
pop();
//I wasn't sure how to make the TV start at Off 
//Everytime I tried it would mess it up
}