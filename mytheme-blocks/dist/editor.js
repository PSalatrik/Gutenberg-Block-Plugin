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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/firstblock/index.js":
/*!****************************************!*\
  !*** ./src/blocks/firstblock/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar __ = wp.i18n.__;\nvar el = wp.element.createElement;\nregisterBlockType('mytheme-blocks/firstblock', {\n  //prefix with unique prefix\n  title: __('First Block', 'mytheme-blocks'),\n  // use translation functions just like in PHP **internationalization module wp.i18n.__;(name, domain)\n  description: __('Our First Block', 'mytheme-blocks'),\n  category: 'layout',\n  icon: {\n    background: '#8E998F',\n    foreground: '#fff',\n    src: 'admin-site-alt'\n  },\n  keywords: [__('photo', 'mytheme-blocks'), __('world', 'mytheme-blocks')],\n  edit: function edit() {\n    return el('p', null, 'Editor');\n  },\n  save: function save() {\n    return el('p', null, 'Saved');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ZpcnN0YmxvY2svaW5kZXguanM/MTBjMyJdLCJuYW1lcyI6WyJyZWdpc3RlckJsb2NrVHlwZSIsIndwIiwiYmxvY2tzIiwiX18iLCJpMThuIiwiZWwiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImljb24iLCJiYWNrZ3JvdW5kIiwiZm9yZWdyb3VuZCIsInNyYyIsImtleXdvcmRzIiwiZWRpdCIsInNhdmUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLGlCQUFpQixHQUFHQyxFQUFFLENBQUNDLE1BQUgsQ0FBVUYsaUJBQWxDO0FBQ0EsSUFBSUcsRUFBRSxHQUFHRixFQUFFLENBQUNHLElBQUgsQ0FBUUQsRUFBakI7QUFDQSxJQUFJRSxFQUFFLEdBQUdKLEVBQUUsQ0FBQ0ssT0FBSCxDQUFXQyxhQUFwQjtBQUVBUCxpQkFBaUIsQ0FBQywyQkFBRCxFQUE4QjtBQUFFO0FBQ2hEUSxPQUFLLEVBQUVMLEVBQUUsQ0FBQyxhQUFELEVBQWdCLGdCQUFoQixDQURxQztBQUNGO0FBQzVDTSxhQUFXLEVBQUVOLEVBQUUsQ0FBQyxpQkFBRCxFQUFvQixnQkFBcEIsQ0FGK0I7QUFHOUNPLFVBQVEsRUFBRSxRQUhvQztBQUk5Q0MsTUFBSSxFQUFFO0FBQ0xDLGNBQVUsRUFBRSxTQURQO0FBRUxDLGNBQVUsRUFBRSxNQUZQO0FBR0xDLE9BQUcsRUFBRTtBQUhBLEdBSndDO0FBUzlDQyxVQUFRLEVBQUUsQ0FBQ1osRUFBRSxDQUFDLE9BQUQsRUFBVSxnQkFBVixDQUFILEVBQWlDQSxFQUFFLENBQUMsT0FBRCxFQUFVLGdCQUFWLENBQW5DLENBVG9DO0FBVTlDYSxNQUFJLEVBQUUsZ0JBQVU7QUFDZixXQUFPWCxFQUFFLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxRQUFaLENBQVQ7QUFDQSxHQVo2QztBQWE5Q1ksTUFBSSxFQUFFLGdCQUFXO0FBQ2hCLFdBQU9aLEVBQUUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLE9BQVosQ0FBVDtBQUNBO0FBZjZDLENBQTlCLENBQWpCIiwiZmlsZSI6Ii4vc3JjL2Jsb2Nrcy9maXJzdGJsb2NrL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xyXG52YXIgX18gPSB3cC5pMThuLl9fO1xyXG52YXIgZWwgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQ7XHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSgnbXl0aGVtZS1ibG9ja3MvZmlyc3RibG9jaycsIHsgLy9wcmVmaXggd2l0aCB1bmlxdWUgcHJlZml4XHJcblx0dGl0bGU6IF9fKCdGaXJzdCBCbG9jaycsICdteXRoZW1lLWJsb2NrcycpLCAvLyB1c2UgdHJhbnNsYXRpb24gZnVuY3Rpb25zIGp1c3QgbGlrZSBpbiBQSFAgKippbnRlcm5hdGlvbmFsaXphdGlvbiBtb2R1bGUgd3AuaTE4bi5fXzsobmFtZSwgZG9tYWluKVxyXG5cdGRlc2NyaXB0aW9uOiBfXygnT3VyIEZpcnN0IEJsb2NrJywgJ215dGhlbWUtYmxvY2tzJyksXHJcblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLFxyXG5cdGljb246IHtcclxuXHRcdGJhY2tncm91bmQ6ICcjOEU5OThGJyxcclxuXHRcdGZvcmVncm91bmQ6ICcjZmZmJyxcclxuXHRcdHNyYzogJ2FkbWluLXNpdGUtYWx0J1xyXG5cdH0sXHJcblx0a2V5d29yZHM6IFtfXygncGhvdG8nLCAnbXl0aGVtZS1ibG9ja3MnICksIF9fKCd3b3JsZCcsICdteXRoZW1lLWJsb2NrcycgKV0sXHJcblx0ZWRpdDogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiBlbCgncCcsIG51bGwsICdFZGl0b3InKTsgXHJcblx0fSxcclxuXHRzYXZlOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBlbCgncCcsIG51bGwsICdTYXZlZCcpOyBcclxuXHR9XHRcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/firstblock/index.js\n");

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_firstblock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/firstblock */ \"./src/blocks/firstblock/index.js\");\n/* harmony import */ var _blocks_firstblock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_firstblock__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yLmpzPzhlZjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL2VkaXRvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9ibG9ja3MvZmlyc3RibG9jayc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/editor.js\n");

/***/ })

/******/ });