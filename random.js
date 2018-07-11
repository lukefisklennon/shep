var chance = require("./chance");
var male = require("./male.json");

class Random {
	male() {
		return chance(male);
	}
}

module.exports = new Random();
