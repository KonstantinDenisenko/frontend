//exercise 3/1
var main = document.querySelectorAll(".main");

for(var a = 0; a < main.length; a++) {
	var boxes = main[a].querySelectorAll(".box");
	
	for(var b = 0; b < boxes.length; b++) {
		var groups = boxes[b].querySelectorAll(".group");
		
		for(var c = 0; c < groups.length; c++) {
			var btn = groups[c].querySelector("a");
			save(groups[c], groups);
		}
	}
}

function save(group, groups) {
	btn.addEventListener('click', function() {
		if (group.classList.contains("active") == false) {
			for(var e = 0; e < groups.length; e++) {
					if (groups[e].classList.contains("active") == true) {
						groups[e].classList.remove("active");
					}
				}
			group.classList.add("active");
		}else {
			group.classList.remove("active");
		}
	})
}
