/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// var StackBlur = require(\"./stackblur\");\n// console.log(require(\"./style.scss\"));\n//\n// var $ = function(selector) {\n// \treturn document.querySelector(selector);\n// }\n//\n// var gameElement = $(\"#game\");\n// var storyElement = $(\"#story\");\n// var backgroundElement = $(\"#background\");\n// var blurElement = $(\"#blur\");\n// var originalBackgroundElementWidth = backgroundElement.width;\n// var originalBackgroundElementHeight = backgroundElement.height;\n// var canvasContext = blurElement.getContext(\"2d\");\n// var blurRadius = 150;\n//\n// function resize() {\n// \tvar width = storyElement.offsetWidth;\n// \tvar height = storyElement.offsetHeight;\n// \tvar left = 0;//window.innerWidth / 2 - width / 2;\n// \tvar top = window.innerHeight - height - 15;\n// \tstoryElement.style.left = left;\n// \tstoryElement.style.top = top;\n// \tvar windowRatio = window.innerWidth / window.innerHeight;\n// \tvar backgroundRatio = backgroundElement.width / backgroundElement.height;\n// \tvar backgroundScale = 1;\n// \tif (windowRatio >= backgroundRatio) {\n// \t\tbackgroundElement.style.width = window.innerWidth + \"px\";\n// \t\tbackgroundElement.style.height = \"auto\";\n// \t\tscale = window.innerWidth / originalBackgroundElementWidth;\n// \t} else {\n// \t\tbackgroundElement.style.width = \"auto\";\n// \t\tbackgroundElement.style.height = window.innerHeight + \"px\";\n// \t\tscale = window.innerHeight / originalBackgroundElementHeight;\n// \t}\n// \tvar offsetLeft = window.innerWidth / 2 - backgroundElement.offsetWidth / 2;\n// \tvar offsetTop = window.innerHeight / 2 - backgroundElement.offsetHeight / 2;\n// \tbackgroundElement.style.left = offsetLeft + \"px\";\n// \tbackgroundElement.style.top = offsetTop + \"px\";\n// \tblurElement.width = width;\n// \tblurElement.height = height;\n// \tcanvasContext.drawImage(backgroundElement, (left - offsetLeft) / scale, (top - offsetTop) / scale, width / scale, height / scale, 0, 0, width, height);\n// \tStackBlur.canvasRGB(blurElement, 0, 0, width, height, blurRadius);\n// }\n// window.onresize = resize;\n// resize();\n//\n// console.log(\"Help\");\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });