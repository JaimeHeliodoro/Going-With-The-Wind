let particles = []
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	colorMode(HSB)
	for(var o=0;o<height;o+=10){
		for(var i=0;i<width;i+=10){
			 particles.push({
			 	x: i,
				 y: o,
				 clr: color(noise(i/50,o/50)*360,90,100)
			 })
		}
	}
}

function draw() {
	noStroke()
	noStroke()
	background(0,0.01)
	for(var i=0;i<particles.length;i++){
		let p = particles[i]
		fill(p.clr)
		ellipse(p.x,p.y,2)
		p.x +=( noise(p.x/200,p.y/200,1000)-0.5)*3
		p.y +=( noise(p.x/200,p.y/200,10000)-0.5)*3
	}
}