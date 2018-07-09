var StackBlur = require("./stackblur");

class Blur {
	constructor(image, radius) {
		this.image = image;
		this.imageWidth = this.image.width;
		this.imageHeight = this.image.height;
		this.radius = radius;
	}
	update() {
		var elements = document.querySelectorAll(".blur");
		elements.forEach((element) => {
			var rect = element.getBoundingClientRect();
			var width = rect.width;
			var height = rect.height;
			var top = rect.top;
			var left = rect.left;
			var windowRatio = window.innerWidth / window.innerHeight;
			var imageRatio = this.image.width / this.image.height;
			var scale = 1;
			if (windowRatio >= imageRatio) {
				this.image.style.width = window.innerWidth + "px";
				this.image.style.height = "auto";
				scale = window.innerWidth / this.imageWidth;
			} else {
				this.image.style.width = "auto";
				this.image.style.height = window.innerHeight + "px";
				scale = window.innerHeight / this.imageHeight;
			}
			var offsetLeft = window.innerWidth / 2 - this.image.offsetWidth / 2;
			var offsetTop = window.innerHeight / 2 - this.image.offsetHeight / 2;
			this.image.style.left = offsetLeft + "px";
			this.image.style.top = offsetTop + "px";
			var canvas = element.querySelector("canvas");
			if (canvas == null) {
				canvas = document.createElement("canvas");
				canvas.classList.add("blur-canvas");
				element.appendChild(canvas);
			}
			var context = canvas.getContext("2d");
			canvas.width = width;
			canvas.height = height;
			context.drawImage(this.image, (left - offsetLeft) / scale, (top - offsetTop) / scale, width / scale, height / scale, 0, 0, width, height);
			StackBlur.canvasRGB(canvas, 0, 0, Math.floor(width), Math.floor(height), this.radius);
		});
	}
}

module.exports = Blur;
