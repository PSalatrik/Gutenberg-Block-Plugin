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
/******/ 	return __webpack_require__(__webpack_require__.s = "./editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/firstblock/index.js":
/*!************************************!*\
  !*** ./blocks/firstblock/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar __ = wp.i18n.__;\nvar el = wp.element.createElement;\nregisterBlockType('mytheme-blocks/firstblock', {\n  //prefix with unique prefix\n  title: __('First Block', 'mytheme-blocks'),\n  // use translation functions just like in PHP **internationalization module wp.i18n.__;(name, domain)\n  description: __('Our First Block', 'mytheme-blocks'),\n  category: 'layout',\n  icon: {\n    background: '#8E998F',\n    foreground: '#fff',\n    src: 'admin-site-alt'\n  },\n  keywords: [__('photo', 'mytheme-blocks'), __('world', 'mytheme-blocks')],\n  edit: function edit() {\n    return el('p', null, 'Editor');\n  },\n  save: function save() {\n    return el('p', null, 'Saved');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ibG9ja3MvZmlyc3RibG9jay9pbmRleC5qcz9iNzFmIl0sIm5hbWVzIjpbInJlZ2lzdGVyQmxvY2tUeXBlIiwid3AiLCJibG9ja3MiLCJfXyIsImkxOG4iLCJlbCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaWNvbiIsImJhY2tncm91bmQiLCJmb3JlZ3JvdW5kIiwic3JjIiwia2V5d29yZHMiLCJlZGl0Iiwic2F2ZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsaUJBQWlCLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVRixpQkFBbEM7QUFDQSxJQUFJRyxFQUFFLEdBQUdGLEVBQUUsQ0FBQ0csSUFBSCxDQUFRRCxFQUFqQjtBQUNBLElBQUlFLEVBQUUsR0FBR0osRUFBRSxDQUFDSyxPQUFILENBQVdDLGFBQXBCO0FBRUFQLGlCQUFpQixDQUFDLDJCQUFELEVBQThCO0FBQUU7QUFDaERRLE9BQUssRUFBRUwsRUFBRSxDQUFDLGFBQUQsRUFBZ0IsZ0JBQWhCLENBRHFDO0FBQ0Y7QUFDNUNNLGFBQVcsRUFBRU4sRUFBRSxDQUFDLGlCQUFELEVBQW9CLGdCQUFwQixDQUYrQjtBQUc5Q08sVUFBUSxFQUFFLFFBSG9DO0FBSTlDQyxNQUFJLEVBQUU7QUFDTEMsY0FBVSxFQUFFLFNBRFA7QUFFTEMsY0FBVSxFQUFFLE1BRlA7QUFHTEMsT0FBRyxFQUFFO0FBSEEsR0FKd0M7QUFTOUNDLFVBQVEsRUFBRSxDQUFDWixFQUFFLENBQUMsT0FBRCxFQUFVLGdCQUFWLENBQUgsRUFBaUNBLEVBQUUsQ0FBQyxPQUFELEVBQVUsZ0JBQVYsQ0FBbkMsQ0FUb0M7QUFVOUNhLE1BQUksRUFBRSxnQkFBVTtBQUNmLFdBQU9YLEVBQUUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLFFBQVosQ0FBVDtBQUNBLEdBWjZDO0FBYTlDWSxNQUFJLEVBQUUsZ0JBQVc7QUFDaEIsV0FBT1osRUFBRSxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksT0FBWixDQUFUO0FBQ0E7QUFmNkMsQ0FBOUIsQ0FBakIiLCJmaWxlIjoiLi9ibG9ja3MvZmlyc3RibG9jay9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcclxudmFyIF9fID0gd3AuaTE4bi5fXztcclxudmFyIGVsID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50O1xyXG5cclxucmVnaXN0ZXJCbG9ja1R5cGUoJ215dGhlbWUtYmxvY2tzL2ZpcnN0YmxvY2snLCB7IC8vcHJlZml4IHdpdGggdW5pcXVlIHByZWZpeFxyXG5cdHRpdGxlOiBfXygnRmlyc3QgQmxvY2snLCAnbXl0aGVtZS1ibG9ja3MnKSwgLy8gdXNlIHRyYW5zbGF0aW9uIGZ1bmN0aW9ucyBqdXN0IGxpa2UgaW4gUEhQICoqaW50ZXJuYXRpb25hbGl6YXRpb24gbW9kdWxlIHdwLmkxOG4uX187KG5hbWUsIGRvbWFpbilcclxuXHRkZXNjcmlwdGlvbjogX18oJ091ciBGaXJzdCBCbG9jaycsICdteXRoZW1lLWJsb2NrcycpLFxyXG5cdGNhdGVnb3J5OiAnbGF5b3V0JyxcclxuXHRpY29uOiB7XHJcblx0XHRiYWNrZ3JvdW5kOiAnIzhFOTk4RicsXHJcblx0XHRmb3JlZ3JvdW5kOiAnI2ZmZicsXHJcblx0XHRzcmM6ICdhZG1pbi1zaXRlLWFsdCdcclxuXHR9LFxyXG5cdGtleXdvcmRzOiBbX18oJ3Bob3RvJywgJ215dGhlbWUtYmxvY2tzJyApLCBfXygnd29ybGQnLCAnbXl0aGVtZS1ibG9ja3MnICldLFxyXG5cdGVkaXQ6IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gZWwoJ3AnLCBudWxsLCAnRWRpdG9yJyk7IFxyXG5cdH0sXHJcblx0c2F2ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gZWwoJ3AnLCBudWxsLCAnU2F2ZWQnKTsgXHJcblx0fVx0XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./blocks/firstblock/index.js\n");

/***/ }),

/***/ "./editor.js":
/*!*******************!*\
  !*** ./editor.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_firstblock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/firstblock */ \"./blocks/firstblock/index.js\");\n/* harmony import */ var _blocks_firstblock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_firstblock__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lZGl0b3IuanM/NWY1NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9lZGl0b3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYmxvY2tzL2ZpcnN0YmxvY2snO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./editor.js\n");

/***/ })

/******/ });