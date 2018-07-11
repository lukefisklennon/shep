function chance(input) {
	return input[Math.floor(Math.random() * input.length)];
}

module.exports = chance;
