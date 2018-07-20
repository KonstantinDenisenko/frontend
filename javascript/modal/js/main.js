(function () {
	var background = document.querySelector(".background");
	var btn = document.querySelectorAll("a");
	
	for(var a = 0; a < btn.length; a++) {
			
		(function (a) { 
			
			var href = btn[a].getAttribute("href");
			var modal = document.querySelector(href);
			var locked = modal.querySelector("button");
			
			btn[a].addEventListener('click', function(event) {
				event.preventDefault();
				turnOff(true);
			});
			
			background.addEventListener('click', function(event) {
				turnOff(false);
			});
			
			locked.addEventListener('click', function(event) {
				turnOff(false);
				
			});
			
			function turnOff(offOn) {
				modal.classList.toggle("active", offOn);
				background.classList.toggle("active", offOn);
			}
		})(a);
	}
})();










