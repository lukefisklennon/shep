var encounters = require("./encounters");

class Game {
	constructor(ui) {
		this.ui = ui;
		this.encounter = new Encounter(encounters["questGuy"]);
		ui.setMain(this.encounter.getText(), this.encounter.getButtons());
		this.ui.on("mainClick", function(i) {
			if (this.encounter.act(i)) {
				this.encounter = new Encounter(encounters["questGuy"]);
			}
			ui.setMain(this.encounter.getText(), this.encounter.getButtons());
		}.bind(this));
	}
}

class Encounter {
	constructor(encounter) {
		Object.assign(this, encounter);
		this.node = this.nodes[this.start];
	}
	getText() {
		return this.node.text;
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
	act(i) {
		if (this.node.buttons) {
			this.node = this.nodes[this.node.buttons[i][1]];
		} else {
			this.node = null;
		}
		return (this.node == null);
	}
}

module.exports = Game;
