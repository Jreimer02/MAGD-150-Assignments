var posX=50;
var posY=50;
var r=0.99;

function setup() {
	createCanvas(1000,900);
}

function draw() {
	background(0);
	push();
		noFill();
		stroke('blue');
		strokeWeight(10);
		rect(400,350,200,200);
		rect(5,5,990,890);
		rect(100,100,40,200);
		rect(100,400,40,400);
		rect(220,100,200,40);
		rect(140,210,280,40);
		rect(490,0,40,250);
		rect(250,350,40,450);
		rect(290,640,400,40);
		rect(400,770,40,130);
		rect(510,770,300,40);
		rect(880,510,40,300);
		rect(780,638,100,40);
		rect(610,100,300,40);
		rect(530,210,280,40);
		rect(870,140,40,280);
		rect(700,330,40,220);
	pop();
	//Everything above is making the blue boxes throughout the canvas
	push();
		scale(r);
		fill('red');
		translate(5,5);//I didn't really find a use for this in my code, so I just used it here.
		rotate(PI / 4.0);//I also didn't really know where to fit this as well. 
//I am sure that I will find a use for both of those in a later lab, just it didn't really fit into this one.
		ellipse(180,100,40,40);//This is supposed to be a red ghost
	pop();
	update();
	r += 0.01;
	if(r>1) {
		r=0.99
	}
}
//The last little bit of code if what I used to do the scale on my red ellipse.
function update() {
	fill('yellow');
	ellipse(posX,posY,50,50);//This is supposed to be PacMan
	if(keyIsDown(RIGHT_ARROW)) {
		right();
	} else if(keyIsDown(LEFT_ARROW)) {
		left();
	} else if(keyIsDown(UP_ARROW)) {
		up();
	}else if(keyIsDown(DOWN_ARROW)) {
		down();
	}}
//All the code in the above function runs the movement
//of my circle(AKA PacMan).

function right() {
	posX=posX + 2;
}

function left() {
	posX=posX - 2;
}

function up() {
	posY=posY - 2;
}

function down() {
	posY=posY + 2;
}
