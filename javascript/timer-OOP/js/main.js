var timers = document.querySelectorAll(".timer");

function Timers(timer){
	this.sec = 0;
	this.timer = timer;
	this.initSelectors = function(){
		this.start = this.timer.querySelector("#start");
		this.stop = this.timer.querySelector("#stop");
		this.resetTime = this.timer.querySelector("#reset");
		this.number = this.timer.querySelector(".number");
	}
	
	this.addEvents = function(){
		this.start.addEventListener('click', function() {
			this.starting();
		}.bind(this));
		
		this.stop.addEventListener('click', function() {
			this.pause();
		}.bind(this));
		
		this.resetTime.addEventListener('click', function() {
			this.clear();
		}.bind(this));
	}
	
	this.starting = function() {
		this.sec++;
		this.number.innerHTML = this.sec;
		this.timerId = setTimeout(this.starting.bind(this), 1000);
	}

	this.pause = function() {
		clearTimeout(this.timerId);
	}
	
	this.clear = function() {
		clearTimeout(this.timerId);
		this.number.innerHTML = 0;
		this.sec = 0;
	}
}

Timers.prototype.initSelector = function(){
	this.disable = this.timer.querySelector("#disable");
}

Timers.prototype.addEvent = function(){
	this.disable.addEventListener('click', function() {
		this.disableBtn();
	}.bind(this));
}

Timers.prototype.disableBtn = function() {
	this.start.disabled = true;
	this.stop.disabled = true;
	this.resetTime.disabled = true;
}

var timersArray = [];

for(var a = 0; a < timers.length; a++) {
	timersArray.push(new Timers(timers[a]));
}

var timer1 = timersArray[0];

timer1.initSelectors();
timer1.initSelector();
timer1.addEvents();
timer1.addEvent();

var timer2 = timersArray[1];

timer2.starting = function() {
	this.sec = this.sec + 2;
	this.number.innerHTML = this.sec;
	this.timerId = setTimeout(this.starting.bind(this), 1000);
}
timer2.initSelectors();
timer2.initSelector();
timer2.addEvents();
timer2.addEvent();


