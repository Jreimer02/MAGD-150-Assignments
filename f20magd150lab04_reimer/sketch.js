var y = 0
var x = 0

function setup() {
	createCanvas(800,700);
}

function draw() {
	background('grey');//Background color
	for (var x = 0; x <= 600; x =  x+100) {
		fill('white');//Plate Color
		ellipse(400,350,x,x);//Plate
	}

	let c = constrain(y++,0,350);
	
	if (mouseIsPressed) {
		fill('brown');
	} else {
		fill(210,125,20);//Color for Pizza Crust
}
	ellipse(400,c,450,450);//Pizza Crust

	if (keyIsPressed) {
		fill('#DBA800');
		x = x + 1;
	} else {
		fill('yellow');
	}
	ellipse(400,350,400,400);//Cheese
	
	fill('maroon');//Color for Pepperoni
	if (mouseIsPressed) {
		rect(280,250,75,75);
		rect(480,250,55,55);
		rect(320,370,60,60);
		rect(430,420,65,65);
	} else {
		ellipse(300,280,100,100);//Pepperoni top left
		ellipse(500,280,80,80);//Pepperoni top right
		ellipse(340,400,85,85);//Pepperoni bottom left
		ellipse(450,450,90,90);//Pepperoni bottom right
	}
}