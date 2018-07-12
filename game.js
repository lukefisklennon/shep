var clone = require("clone");
var encounters = require("./encounters");

class Game {
	constructor(ui) {
		this.ui = ui;
		this.encounter = new Encounter(encounters["jester"], this);
		ui.setMain(this.encounter.getText(), this.encounter.getButtons());
		this.ui.on("mainClick", function(i) {
			if (this.encounter.selectButton(i)) {
				this.encounter = new Encounter(encounters["jester"]);
			}
			ui.setMain(this.encounter.getText(), this.encounter.getButtons());
		}.bind(this));
	}
}

class Encounter {
	constructor(encounter, game) {
		Object.assign(this, clone(encounter));
		this.node = this.nodes[this.start];
		this.game = game;
	}
	getText() {
		return this.formatText(this.node.text);
	}
	getButtons() {
		var buttons = [];
		if (this.node.buttons) {
			this.node.buttons.forEach((button) => {
				buttons.push(button[0]);
			});
		} else {
			buttons.push("Continue");
		}
		return buttons;
	}
	selectButton(i) {
		if (this.node.buttons) {
			this.node = this.nodes[this.node.buttons[i][1]];
		} else {
			this.node = null;
		}
		return (this.node == null);
	}
	formatText(text) {
		for (var attribute in this.attributes) {
			if (typeof this.attributes[attribute] == "function") this.attributes[attribute] = this.attributes[attribute]();
			text = text.replace(new RegExp("{" + attribute + "}", "gi"), this.attributes[attribute]);
		}
		return text;
	}
}

module.exports = Game;
