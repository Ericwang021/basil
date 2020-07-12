module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Layout/Footer/Footer.js":
/*!*********************************!*\
  !*** ./Layout/Footer/Footer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Footer = () => {\n  return __jsx(\"footer\", null, __jsx(\"div\", {\n    className: \"footer-inner\"\n  }, __jsx(\"ul\", null, __jsx(\"li\", null, __jsx(\"a\", {\n    href: \"/\"\n  }, \"\\u95DC\\u65BCAcademy\")), __jsx(\"li\", null, __jsx(\"a\", {\n    href: \"/\"\n  }, \"\\u652F\\u63F4\\u4E2D\\u5FC3\")), __jsx(\"li\", null, __jsx(\"a\", {\n    href: \"/\"\n  }, \"\\u4F7F\\u7528\\u689D\\u6B3E\")), __jsx(\"li\", null, __jsx(\"a\", {\n    href: \"/\"\n  }, \"\\u96B1\\u79C1\\u653F\\u7B56\")), __jsx(\"li\", null, __jsx(\"a\", {\n    href: \"/\"\n  }, \"\\u6578\\u64DA\\u6536\\u96C6\")), __jsx(\"li\", null, \"v1.0.0\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXQvRm9vdGVyL0Zvb3Rlci5qcz9hNWNlIl0sIm5hbWVzIjpbIkZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ3BCLFNBQ0Msc0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDLGtCQUNDLGtCQUNDO0FBQUcsUUFBSSxFQUFDO0FBQVIsMkJBREQsQ0FERCxFQUlDLGtCQUNDO0FBQUcsUUFBSSxFQUFDO0FBQVIsZ0NBREQsQ0FKRCxFQU9DLGtCQUNDO0FBQUcsUUFBSSxFQUFDO0FBQVIsZ0NBREQsQ0FQRCxFQVVDLGtCQUNDO0FBQUcsUUFBSSxFQUFDO0FBQVIsZ0NBREQsQ0FWRCxFQWFDLGtCQUNDO0FBQUcsUUFBSSxFQUFDO0FBQVIsZ0NBREQsQ0FiRCxFQWdCQywyQkFoQkQsQ0FERCxDQURELENBREQ7QUF3QkEsQ0F6QkQ7O0FBMkJlQSxxRUFBZiIsImZpbGUiOiIuL0xheW91dC9Gb290ZXIvRm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGZvb3Rlcj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWlubmVyXCI+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiL1wiPumXnOaWvEFjYWRlbXk8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiL1wiPuaUr+aPtOS4reW/gzwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCIvXCI+5L2/55So5qKd5qy+PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cIi9cIj7pmrHnp4HmlL/nrZY8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiL1wiPuaVuOaTmuaUtumbhjwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaT52MS4wLjA8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb290ZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Layout/Footer/Footer.js\n");

/***/ }),

/***/ "./Layout/Header/Header.js":
/*!*********************************!*\
  !*** ./Layout/Header/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Icon/Icon */ \"./components/Icon/Icon.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Header = () => {\n  return __jsx(\"header\", {\n    className: \"header\"\n  }, __jsx(\"div\", {\n    className: \"header-inner\"\n  }, __jsx(\"a\", {\n    className: \"logo\",\n    href: \"/\"\n  }, __jsx(\"img\", {\n    src: \"../../static/academy-logo.svg\",\n    alt: \"\"\n  }), __jsx(\"div\", {\n    className: \"logo-text\"\n  }, \"Academy\")), __jsx(\"nav\", null, __jsx(\"ul\", null, __jsx(\"li\", null, __jsx(\"a\", {\n    href: \"/\"\n  }, \"\\u63A2\\u7D22\")))), __jsx(\"div\", {\n    className: \"person-box\"\n  }, __jsx(\"div\", {\n    className: \"language\",\n    style: {\n      color: \"#fff\"\n    }\n  }, __jsx(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__[\"IconLan\"], null)), __jsx(\"div\", {\n    className: \"avatar\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXQvSGVhZGVyL0hlYWRlci5qcz82MmMxIl0sIm5hbWVzIjpbIkhlYWRlciIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDcEIsU0FDQztBQUFRLGFBQVMsRUFBQztBQUFsQixLQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQztBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQW9CLFFBQUksRUFBQztBQUF6QixLQUNDO0FBQUssT0FBRyxFQUFDLCtCQUFUO0FBQXlDLE9BQUcsRUFBQztBQUE3QyxJQURELEVBRUM7QUFBSyxhQUFTLEVBQUM7QUFBZixlQUZELENBREQsRUFLQyxtQkFDQyxrQkFDQyxrQkFDQztBQUFHLFFBQUksRUFBQztBQUFSLG9CQURELENBREQsQ0FERCxDQUxELEVBWUM7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBMEIsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFUO0FBQWpDLEtBQ0MsTUFBQyw2REFBRCxPQURELENBREQsRUFJQztBQUFLLGFBQVMsRUFBQztBQUFmLElBSkQsQ0FaRCxDQURELENBREQ7QUF1QkEsQ0F4QkQ7O0FBMEJlRCxxRUFBZiIsImZpbGUiOiIuL0xheW91dC9IZWFkZXIvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSWNvbkxhbiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ljb24vSWNvblwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCI+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cImxvZ29cIiBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiLi4vLi4vc3RhdGljL2FjYWRlbXktbG9nby5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9nby10ZXh0XCI+QWNhZGVteTwvZGl2PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxuYXY+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiL1wiPuaOoue0ojwvYT5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGVyc29uLWJveFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2VcIiBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0+XG5cdFx0XHRcdFx0XHQ8SWNvbkxhbiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Layout/Header/Header.js\n");

/***/ }),

/***/ "./Layout/Layout.js":
/*!**************************!*\
  !*** ./Layout/Layout.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.module.scss */ \"./Layout/Layout.module.scss\");\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header/Header */ \"./Layout/Header/Header.js\");\n/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer/Footer */ \"./Layout/Footer/Footer.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst Layout = props => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, null), __jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    maxWidth: \"false\",\n    className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.containerBackground\n  }, __jsx(\"main\", null, props.children)), __jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXQvTGF5b3V0LmpzPzEyZTQiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJzdHlsZXMiLCJjb250YWluZXJCYWNrZ3JvdW5kIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsSUFBVztBQUN6QixTQUNDLE1BQUMsOENBQUQsUUFDQyxNQUFDLG9FQUFELE9BREQsRUFFQyxNQUFDLHNEQUFELE9BRkQsRUFHQyxNQUFDLGtFQUFEO0FBQVcsWUFBUSxFQUFDLE9BQXBCO0FBQTRCLGFBQVMsRUFBRUMsMERBQU0sQ0FBQ0M7QUFBOUMsS0FDQyxvQkFBT0YsS0FBSyxDQUFDRyxRQUFiLENBREQsQ0FIRCxFQU1DLE1BQUMsc0RBQUQsT0FORCxDQUREO0FBVUEsQ0FYRDs7QUFhZUoscUVBQWYiLCJmaWxlIjoiLi9MYXlvdXQvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXIvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3Rlci9Gb290ZXJcIjtcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8Q3NzQmFzZWxpbmUgLz5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJmYWxzZVwiIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lckJhY2tncm91bmR9PlxuXHRcdFx0XHQ8bWFpbj57cHJvcHMuY2hpbGRyZW59PC9tYWluPlxuXHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Layout/Layout.js\n");

/***/ }),

/***/ "./Layout/Layout.module.scss":
/*!***********************************!*\
  !*** ./Layout/Layout.module.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"containerBackground\": \"Layout_containerBackground__3eUxg\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXQvTGF5b3V0Lm1vZHVsZS5zY3NzPzQwNmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9MYXlvdXQvTGF5b3V0Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyQmFja2dyb3VuZFwiOiBcIkxheW91dF9jb250YWluZXJCYWNrZ3JvdW5kX18zZVV4Z1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Layout/Layout.module.scss\n");

/***/ }),

/***/ "./components/Icon/Icon.js":
/*!*********************************!*\
  !*** ./components/Icon/Icon.js ***!
  \*********************************/
/*! exports provided: IconLan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconLan\", function() { return IconLan; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons-kit */ \"react-icons-kit\");\n/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_kit_md_ic_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit/md/ic_language */ \"react-icons-kit/md/ic_language\");\n/* harmony import */ var react_icons_kit_md_ic_language__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_language__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst IconContainer = Object(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__[\"withBaseIcon\"])({\n  size: 24\n});\nconst IconLan = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_language__WEBPACK_IMPORTED_MODULE_2__[\"ic_language\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb24vSWNvbi5qcz9jNjM1Il0sIm5hbWVzIjpbIkljb25Db250YWluZXIiLCJ3aXRoQmFzZUljb24iLCJzaXplIiwiSWNvbkxhbiIsImljX2xhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQSxNQUFNQSxhQUFhLEdBQUdDLG9FQUFZLENBQUM7QUFBRUMsTUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUFsQztBQUVPLE1BQU1DLE9BQU8sR0FBRyxNQUFNLE1BQUMsYUFBRDtBQUFlLE1BQUksRUFBRUMsMEVBQVdBO0FBQWhDLEVBQXRCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JY29uL0ljb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoQmFzZUljb24gfSBmcm9tIFwicmVhY3QtaWNvbnMta2l0XCI7XG5cbmltcG9ydCB7IGljX2xhbmd1YWdlIH0gZnJvbSBcInJlYWN0LWljb25zLWtpdC9tZC9pY19sYW5ndWFnZVwiO1xuXG5jb25zdCBJY29uQ29udGFpbmVyID0gd2l0aEJhc2VJY29uKHsgc2l6ZTogMjQgfSk7XG5cbmV4cG9ydCBjb25zdCBJY29uTGFuID0gKCkgPT4gPEljb25Db250YWluZXIgaWNvbj17aWNfbGFuZ3VhZ2V9IC8+O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Icon/Icon.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Layout */ \"./Layout/Layout.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  return __jsx(_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, __jsx(Component, pageProps));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDekMsU0FDQyxNQUFDLHNEQUFELFFBQ0MsTUFBQyxTQUFELEVBQWVBLFNBQWYsQ0FERCxDQUREO0FBS0EsQ0FORDs7QUFRZUYsa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9MYXlvdXQvTGF5b3V0XCI7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0PlxuXHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdDwvTGF5b3V0PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9zdHlsZXMuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/styles.scss\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Container\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIj8wODJmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Container\n");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CssBaseline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiP2U2N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/CssBaseline\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXRcIj9kYzk2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWljb25zLWtpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit\n");

/***/ }),

/***/ "react-icons-kit/md/ic_language":
/*!*************************************************!*\
  !*** external "react-icons-kit/md/ic_language" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_language\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfbGFuZ3VhZ2VcIj81MmIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWljb25zLWtpdC9tZC9pY19sYW5ndWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdC9tZC9pY19sYW5ndWFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_language\n");

/***/ })

/******/ });