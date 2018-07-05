var StackBlur = require("./stackblur");
require("./style.scss");

var $ = function(selector) {
	return document.querySelector(selector);
}

var gameElement = $("#game");
var storyElement = $("#story");
var backgroundElement = $("#background");
var blurElement = $("#blur");
var originalBackgroundElementWidth = backgroundElement.width;
var originalBackgroundElementHeight = backgroundElement.height;
var canvasContext = blurElement.getContext("2d");
var blurRadius = 150;

function resize() {
	var width = storyElement.offsetWidth;
	var height = storyElement.offsetHeight;
	var left = window.innerWidth / 2 - width / 2;
	var top = window.innerHeight - height - 15;
	storyElement.style.left = left;
	storyElement.style.top = top;
	var windowRatio = window.innerWidth / window.innerHeight;
	var backgroundRatio = backgroundElement.width / backgroundElement.height;
	var backgroundScale = 1;
	if (windowRatio >= backgroundRatio) {
		backgroundElement.style.width = window.innerWidth + "px";
		backgroundElement.style.height = "auto";
		scale = window.innerWidth / originalBackgroundElementWidth;
	} else {
		backgroundElement.style.width = "auto";
		backgroundElement.style.height = window.innerHeight + "px";
		scale = window.innerHeight / originalBackgroundElementHeight;
	}
	var offsetLeft = window.innerWidth / 2 - backgroundElement.offsetWidth / 2;
	var offsetTop = window.innerHeight / 2 - backgroundElement.offsetHeight / 2;
	backgroundElement.style.left = offsetLeft + "px";
	backgroundElement.style.top = offsetTop + "px";
	blurElement.width = width;
	blurElement.height = height;
	canvasContext.drawImage(backgroundElement, (left - offsetLeft) / scale, (top - offsetTop) / scale, width / scale, height / scale, 0, 0, width, height);
	StackBlur.canvasRGB(blurElement, 0, 0, width, height, blurRadius);
}
window.onresize = resize;
resize();
