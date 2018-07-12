var Blur = require("./blur");
var EventEmitter = require("eventemitter3");

class Ui extends EventEmitter {
	constructor() {
		super();
		this.blur = new Blur(document.querySelector("#background"), 150);
		this.main = document.querySelector("#main");
		this.mainText = document.querySelector("#main-text");
		this.mainButtons = document.querySelector("#main-buttons");
		window.onload = this.blur.update.bind(this.blur);
		window.onresize = this.blur.update.bind(this.blur);
		this.blur.update();
	}
	setMain(text, buttons) {
		this.mainText.innerHTML = text;
		this.mainButtons.innerHTML = "";
		buttons.forEach((button, i) => {
			var element = document.createElement("div");
			element.classList.add("main-button");
			element.innerText = button;
			element.onclick = (i) => {
				this.emit("mainClick", i);
			}.bind(this, i);
			this.mainButtons.appendChild(element);
		});
		this.blur.update();
	}
}

module.exports = Ui;
