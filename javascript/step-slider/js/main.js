var html = document.querySelector("html");

var line = document.querySelector(".line");
var lineCoordinates = line.getBoundingClientRect();

var slider = document.querySelector(".slider");
var sliderCoordinates = slider.getBoundingClientRect();

var allow = false;
var stepValue = 50;

html.addEventListener("mousemove", function(event) {
	var x = event.clientX - lineCoordinates.left;
	var stepClick = Math.round(x / stepValue);
	
	if(allow == true) {
		if (stepClick <= 0) {
			slider.style.left = 0 + "px";
		} else if (stepClick >= lineCoordinates.width / stepValue) {
			slider.style.left = (lineCoordinates.width - sliderCoordinates.width)  + "px";
		} else {
			slider.style.left = (stepClick * stepValue) - sliderCoordinates.width / 2 + "px";
		}
	}
});

html.addEventListener("mousedown", function(event) {
	var x = event.clientX - lineCoordinates.left;
	var stepClick = Math.round(x / stepValue);
	
	if(allow == true) {
		if (stepClick <= 0) {
			slider.style.left = 0 + "px";
		} else if (stepClick >= lineCoordinates.width / stepValue) {
			slider.style.left = (lineCoordinates.width - sliderCoordinates.width)  + "px";
		} else {
			slider.style.left = (stepClick * stepValue) - sliderCoordinates.width / 2 + "px";
		}
	}
});

line.addEventListener("mousedown", function(event) {
	slider.classList.add("active");
	allow = true;
});

slider.addEventListener("mousedown", function(event) {
	event.stopPropagation();
	slider.classList.add("active");
	allow = true;
});

html.addEventListener("mouseup", function(event) {
	slider.classList.remove("active");
	allow = false;
});