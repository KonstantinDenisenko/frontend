var push = document.querySelectorAll("a");

for(var a = 0; a < push.length; a++) {
	save(a);
}

function save(a) {
	push[a].addEventListener('click', function(event) {
		event.preventDefault();
		if (push[a].classList.contains("active") == false) {
			for(var b = 0; b < push.length; b++) {
				if (push[b].classList.contains("active") == true) {
					push[b].classList.remove("active");
				}
			}
			push[a].classList.add("active");
		}
				
		var href = push[a].getAttribute("href");
		var tab = document.querySelector(href);
		
		if (tab.classList.contains("offon") == false) {
			
			for(var c = 0; c < push.length; c++) {
				var hrefTest = push[c].getAttribute("href");
				var tabTest = document.querySelector(hrefTest);
				if (tabTest.classList.contains("offon") == true) {
					tabTest.classList.remove("offon");
				}
			}
			tab.classList.add("offon");
		}
	});
}

