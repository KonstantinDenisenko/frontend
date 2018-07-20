var html = document.querySelector("html");

var line = document.querySelector(".line");
var lineCoordinates = line.getBoundingClientRect();

var slider = document.querySelector(".slider");
var sliderCoordinates = slider.getBoundingClientRect();

var sliderX;

var move = false;

html.addEventListener("mousemove", function(event) {
	var x = event.clientX;
	
	if(move == true) {
		if(x < 0 + lineCoordinates.x + sliderX) {
			x = lineCoordinates.x + sliderX;
		}
		if(x > lineCoordinates.width + lineCoordinates.x + sliderX - sliderCoordinates.width) {
			x = lineCoordinates.width + lineCoordinates.x + sliderX - sliderCoordinates.width;
		}
		slider.style.left = (x - lineCoordinates.x - sliderX) + "px";
	}
});

slider.addEventListener("mousedown", function() {
	slider.classList.add("active");
	sliderX = event.layerX;
	move = true;
});

html.addEventListener("mouseup", function() {
	slider.classList.remove("active");
	move = false;
});













