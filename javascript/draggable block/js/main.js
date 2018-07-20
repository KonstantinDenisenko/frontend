var allArea = document.querySelector(".main");
var allAreaCoordinates = allArea.getBoundingClientRect();
var moveObject = document.querySelector(".moveObject");
var active = false;
var layerX;
var layerY;
var html = document.querySelector("html");


html.addEventListener("mousemove", function(event) {
	var x = event.clientX;
	var y = event.clientY;
	
	if(active == true) {
		if( x > (allArea.offsetWidth - moveObject.offsetWidth + layerX + allAreaCoordinates.left) ) {
			x = allArea.offsetWidth - moveObject.offsetWidth + layerX + allAreaCoordinates.left;
		}
		if( y > (allArea.offsetHeight - moveObject.offsetHeight + layerY + allAreaCoordinates.left) ) {
			y = allArea.offsetHeight - moveObject.offsetHeight + layerY + allAreaCoordinates.left;
		}
		if(x < layerX + allAreaCoordinates.left) {
			x = layerX + allAreaCoordinates.left;
		}
		if(y < layerY + allAreaCoordinates.left) {
			y = layerY + allAreaCoordinates.left;
		}
		moveObject.style.left = (x - layerX - allAreaCoordinates.left) + 'px';
		moveObject.style.top = (y - layerY - allAreaCoordinates.left) + 'px';
	}
});

moveObject.addEventListener("mousedown", function(event) {
	layerX = event.layerX;
	layerY = event.layerY;
	active = true;
});

html.addEventListener("mouseup", function(event) {
	active = false;
});

















































































