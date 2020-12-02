var pdf;
var font;
var lines;
var img;
var img1;
var index = 0;
var x;
var font1;
scroll = ["Better...","Watch...","Out!"];
//Above code sets all my variables I will use in sketch
function preload () {
	font = loadFont('ELEPHANT.ttf');
	font1 = loadFont('COOPER.ttf');
	lines = loadStrings('text.txt');
	img = loadImage('bread.jpg');
	img1 = loadImage('pasta.jpg');
}
//The above function loads my pictures, fonts and strings
function setup () {
	createCanvas(700,900);
	pdf = createPDF();
	pdf.beginRecord();
	textSize(20);
	x = width;
	img.filter(GRAY);
}

function draw () {
	background('lightblue');
	textFont(font1);
	textAlign(CENTER);
	textSize(34);
	text('Attack Of The Carbs!', width/2,50);
	textFont(font);
	textSize(20);
	text(scroll[index],x,100);
	x = x - 3;
	let w = textWidth(scroll[index]);
	if(x < -w) {
		x = width;
		index = (index + 1) % scroll.length;
//The above code does the scroll for my text. I used
//the example to help me make this work.
	}
	image(img,100,200,200,200);
	text(lines,120,450,500,100);
	push();
	tint('orange');
	image(img1,400,600,200,200);
	pop();
}
//The last bit of code is the main body of my poster.
//It has the 2 pictures and the little bit of text.
function mousePressed() {
	pdf.save();
}
//Above function makes it save as a PDF when clicked

/*
**ENDNOTE**
I really tried to make the best poster I could but I didn't know
what theme to go for. I went for uniqeness. I know it looks
pretty bad but I believe I got everything I needed into it.
This was probably the most challenging one yet for me.
*/