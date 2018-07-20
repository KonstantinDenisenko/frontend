gallerys = document.querySelectorAll(".gallery");

function Gallery(gallery) {
	this.gallery = gallery;
	this.timerId;
	this.numberActiveImg;
	this.timeInterval = 2000;
	this.mouseEvent = 'click';
	this.initSelectors = function(){
		this.buttonPrev = this.gallery.querySelector(".arrowleft");
		this.buttonNext = this.gallery.querySelector(".arrowright");
		this.buttonPlay = this.gallery.querySelector(".play");
		this.buttonStop = this.gallery.querySelector(".stop");
		this.list = this.gallery.querySelectorAll(".list");
		this.imgs = this.gallery.querySelectorAll("img");
	};
	
	this.currentImg = function() {
		for(var d = 0; d < this.imgs.length; d++){
			if (this.imgs[d].classList.contains("active") == true) {
				this.numberActiveImg = d;
			}
		}
	}
	this.addEvents = function(){
		for(var c = 0; c < this.list.length; c++) {
			(function(c){
				this.list[c].addEventListener(this.mouseEvent, function() {
					if (this.timerId != undefined) {
						this.stopSlider();
					}
					
					this.numberActiveImg = c;
					this.showSlide(this.numberActiveImg);
				}.bind(this));
			}.bind(this))(c);
		}
		
		this.buttonNext.addEventListener('click', function() {
			if (this.timerId != undefined) {
				this.stopSlider();
			}
			this.numberActiveImg++;
			
			if (this.numberActiveImg >= this.imgs.length) {
				this.numberActiveImg = 0;
			}
			
			this.showSlide(this.numberActiveImg);
		}.bind(this));
		
		this.buttonPrev.addEventListener('click', function() {
			if (this.timerId != undefined) {
				this.stopSlider();
			}
			
			this.numberActiveImg--;
			
			if (this.numberActiveImg < 0) {
				this.numberActiveImg = this.imgs.length - 1;
			}
			
			this.showSlide(this.numberActiveImg);
		}.bind(this));
		
		this.buttonPlay.addEventListener('click', function() {
			this.buttonPlay.classList.remove("activeBtn");
			this.buttonStop.classList.add("activeBtn");
			this.playInterval();
		}.bind(this));
		
		this.buttonStop.addEventListener('click', function() {
			this.stopSlider();
		}.bind(this));
	};
	
	this.playInterval = function() {
		this.timerId = setInterval(function() {
			this.numberActiveImg++;
			
			if (this.numberActiveImg >= this.imgs.length) {
				this.numberActiveImg = 0;
			}
			
			this.showSlide(this.numberActiveImg);
		}.bind(this), this.timeInterval);
	};
	
	this.stopSlider = function() {
		this.buttonPlay.classList.add("activeBtn");
		this.buttonStop.classList.remove("activeBtn");
		clearInterval(this.timerId);
		this.timerId = undefined;
	};
	
	this.showSlide = function(activeImg) {
		for(var c = 0; c < this.imgs.length; c++) {
			this.imgs[c].classList.remove("active");
			this.list[c].classList.remove("bold");
		}
		this.imgs[activeImg].classList.add("active");
		this.list[activeImg].classList.add("bold");
	};
};

var firstGallery = new Gallery(gallerys[0]);

firstGallery.initSelectors();
firstGallery.currentImg();
firstGallery.addEvents();

var secondGallery = new Gallery(gallerys[1]);

secondGallery.mouseEvent = 'dblclick';
secondGallery.timeInterval = 1000;
secondGallery.initSelectors();
secondGallery.currentImg();
secondGallery.addEvents();







































