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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.module.scss */ \"./Layout/Layout.module.scss\");\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header/Header */ \"./Layout/Header/Header.js\");\n/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer/Footer */ \"./Layout/Footer/Footer.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst Layout = props => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, null), __jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), __jsx(\"div\", {\n    className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container\n  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    maxWidth: \"lg\",\n    className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.containerBackground\n  }, __jsx(\"main\", null, props.children))), __jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXQvTGF5b3V0LmpzPzEyZTQiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJjb250YWluZXJCYWNrZ3JvdW5kIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsSUFBVztBQUN6QixTQUNDLE1BQUMsOENBQUQsUUFDQyxNQUFDLG9FQUFELE9BREQsRUFFQyxNQUFDLHNEQUFELE9BRkQsRUFHQztBQUFLLGFBQVMsRUFBRUMsMERBQU0sQ0FBQ0M7QUFBdkIsS0FDQyxNQUFDLGtFQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBRUQsMERBQU0sQ0FBQ0U7QUFBM0MsS0FDQyxvQkFBT0gsS0FBSyxDQUFDSSxRQUFiLENBREQsQ0FERCxDQUhELEVBUUMsTUFBQyxzREFBRCxPQVJELENBREQ7QUFZQSxDQWJEOztBQWVlTCxxRUFBZiIsImZpbGUiOiIuL0xheW91dC9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTGF5b3V0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyL0Zvb3RlclwiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxDc3NCYXNlbGluZSAvPlxuXHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdFx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJCYWNrZ3JvdW5kfT5cblx0XHRcdFx0XHQ8bWFpbj57cHJvcHMuY2hpbGRyZW59PC9tYWluPlxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Layout/Layout.js\n");

/***/ }),

/***/ "./Layout/Layout.module.scss":
/*!***********************************!*\
  !*** ./Layout/Layout.module.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Layout_container__prs1d\",\n\t\"containerBackground\": \"Layout_containerBackground__3eUxg\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXQvTGF5b3V0Lm1vZHVsZS5zY3NzPzQwNmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL0xheW91dC9MYXlvdXQubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMYXlvdXRfY29udGFpbmVyX19wcnMxZFwiLFxuXHRcImNvbnRhaW5lckJhY2tncm91bmRcIjogXCJMYXlvdXRfY29udGFpbmVyQmFja2dyb3VuZF9fM2VVeGdcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Layout/Layout.module.scss\n");

/***/ }),

/***/ "./components/ClassInfoBox/ClassInfoBox.js":
/*!*************************************************!*\
  !*** ./components/ClassInfoBox/ClassInfoBox.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ClassInfoBox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClassInfoBox.module.scss */ \"./components/ClassInfoBox/ClassInfoBox.module.scss\");\n/* harmony import */ var _ClassInfoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ClassInfoBox_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon/Icon */ \"./components/Icon/Icon.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst ClassInfoBox = () => {\n  return __jsx(\"div\", {\n    className: _ClassInfoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.classBoxWrapper\n  }, __jsx(\"div\", {\n    className: _ClassInfoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.classBoxWrapperInner\n  }, __jsx(\"div\", {\n    className: _ClassInfoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconBox\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__[\"IconBook\"], null)), __jsx(\"div\", {\n    className: _ClassInfoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapperTitle\n  }, __jsx(\"ul\", null, __jsx(\"li\", null, \"\\u8AB2\\u7A0B . Learn with Academy - Academy Tutorial\"), __jsx(\"li\", null, \" \", __jsx(\"span\", null, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__[\"IconViewList\"], null)), \" \", \"\\u5728\\u9019\\u500B\\u8AB2\\u7A0B\\u4E2D\\u6709 2 \\u500B\\u7AE0\\u7BC0\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClassInfoBox);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsYXNzSW5mb0JveC9DbGFzc0luZm9Cb3guanM/YjFmYyJdLCJuYW1lcyI6WyJDbGFzc0luZm9Cb3giLCJzdHlsZXMiLCJjbGFzc0JveFdyYXBwZXIiLCJjbGFzc0JveFdyYXBwZXJJbm5lciIsImljb25Cb3giLCJ3cmFwcGVyVGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLE1BQU07QUFDMUIsU0FDQztBQUFLLGFBQVMsRUFBRUMsZ0VBQU0sQ0FBQ0M7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRUQsZ0VBQU0sQ0FBQ0U7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRUYsZ0VBQU0sQ0FBQ0c7QUFBdkIsS0FDQyxNQUFDLG1EQUFELE9BREQsQ0FERCxFQUlDO0FBQUssYUFBUyxFQUFFSCxnRUFBTSxDQUFDSTtBQUF2QixLQUNDLGtCQUNDLHlFQURELEVBRUMsa0JBQ0UsR0FERixFQUVDLG9CQUNDLE1BQUMsdURBQUQsT0FERCxDQUZELEVBSVMsR0FKVCxvRUFGRCxDQURELENBSkQsQ0FERCxDQUREO0FBcUJBLENBdEJEOztBQXdCZUwsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NsYXNzSW5mb0JveC9DbGFzc0luZm9Cb3guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NsYXNzSW5mb0JveC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgSWNvbkJvb2ssIEljb25WaWV3TGlzdCB9IGZyb20gXCIuLi9JY29uL0ljb25cIjtcblxuY29uc3QgQ2xhc3NJbmZvQm94ID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xhc3NCb3hXcmFwcGVyfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xhc3NCb3hXcmFwcGVySW5uZXJ9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25Cb3h9PlxuXHRcdFx0XHRcdDxJY29uQm9vayAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyVGl0bGV9PlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdDxsaT7oqrLnqIsgLiBMZWFybiB3aXRoIEFjYWRlbXkgLSBBY2FkZW15IFR1dG9yaWFsPC9saT5cblx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0e1wiIFwifVxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8SWNvblZpZXdMaXN0IC8+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj57XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdOWcqOmAmeWAi+iqsueoi+S4reaciSAyIOWAi+eroOevgFxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xhc3NJbmZvQm94O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ClassInfoBox/ClassInfoBox.js\n");

/***/ }),

/***/ "./components/ClassInfoBox/ClassInfoBox.module.scss":
/*!**********************************************************!*\
  !*** ./components/ClassInfoBox/ClassInfoBox.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"classBoxWrapper\": \"ClassInfoBox_classBoxWrapper__zELCn\",\n\t\"classBoxWrapperInner\": \"ClassInfoBox_classBoxWrapperInner__1fPb8\",\n\t\"iconBox\": \"ClassInfoBox_iconBox__wVPnS\",\n\t\"wrapperTitle\": \"ClassInfoBox_wrapperTitle__2kROL\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsYXNzSW5mb0JveC9DbGFzc0luZm9Cb3gubW9kdWxlLnNjc3M/ODJmMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2xhc3NJbmZvQm94L0NsYXNzSW5mb0JveC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNsYXNzQm94V3JhcHBlclwiOiBcIkNsYXNzSW5mb0JveF9jbGFzc0JveFdyYXBwZXJfX3pFTENuXCIsXG5cdFwiY2xhc3NCb3hXcmFwcGVySW5uZXJcIjogXCJDbGFzc0luZm9Cb3hfY2xhc3NCb3hXcmFwcGVySW5uZXJfXzFmUGI4XCIsXG5cdFwiaWNvbkJveFwiOiBcIkNsYXNzSW5mb0JveF9pY29uQm94X193VlBuU1wiLFxuXHRcIndyYXBwZXJUaXRsZVwiOiBcIkNsYXNzSW5mb0JveF93cmFwcGVyVGl0bGVfXzJrUk9MXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ClassInfoBox/ClassInfoBox.module.scss\n");

/***/ }),

/***/ "./components/Icon/Icon.js":
/*!*********************************!*\
  !*** ./components/Icon/Icon.js ***!
  \*********************************/
/*! exports provided: IconLan, IconViewList, IconBook, IconFeedBack, IconSearch, IconClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconLan\", function() { return IconLan; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconViewList\", function() { return IconViewList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconBook\", function() { return IconBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconFeedBack\", function() { return IconFeedBack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconSearch\", function() { return IconSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconClose\", function() { return IconClose; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons-kit */ \"react-icons-kit\");\n/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_kit_md_ic_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit/md/ic_language */ \"react-icons-kit/md/ic_language\");\n/* harmony import */ var react_icons_kit_md_ic_language__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_language__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_kit_md_ic_view_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/md/ic_view_list */ \"react-icons-kit/md/ic_view_list\");\n/* harmony import */ var react_icons_kit_md_ic_view_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_view_list__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_kit_icomoon_book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/icomoon/book */ \"react-icons-kit/icomoon/book\");\n/* harmony import */ var react_icons_kit_icomoon_book__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_book__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_kit_md_ic_feedback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit/md/ic_feedback */ \"react-icons-kit/md/ic_feedback\");\n/* harmony import */ var react_icons_kit_md_ic_feedback__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_feedback__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_kit_md_ic_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons-kit/md/ic_search */ \"react-icons-kit/md/ic_search\");\n/* harmony import */ var react_icons_kit_md_ic_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_search__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_icons_kit_md_ic_close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons-kit/md/ic_close */ \"react-icons-kit/md/ic_close\");\n/* harmony import */ var react_icons_kit_md_ic_close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_close__WEBPACK_IMPORTED_MODULE_7__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst IconContainer = Object(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__[\"withBaseIcon\"])({\n  size: 24\n});\nconst IconLan = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_language__WEBPACK_IMPORTED_MODULE_2__[\"ic_language\"]\n});\nconst IconViewList = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_view_list__WEBPACK_IMPORTED_MODULE_3__[\"ic_view_list\"]\n});\nconst IconBook = () => __jsx(IconContainer, {\n  icon: react_icons_kit_icomoon_book__WEBPACK_IMPORTED_MODULE_4__[\"book\"]\n});\nconst IconFeedBack = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_feedback__WEBPACK_IMPORTED_MODULE_5__[\"ic_feedback\"]\n});\nconst IconSearch = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_search__WEBPACK_IMPORTED_MODULE_6__[\"ic_search\"]\n});\nconst IconClose = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_close__WEBPACK_IMPORTED_MODULE_7__[\"ic_close\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb24vSWNvbi5qcz9jNjM1Il0sIm5hbWVzIjpbIkljb25Db250YWluZXIiLCJ3aXRoQmFzZUljb24iLCJzaXplIiwiSWNvbkxhbiIsImljX2xhbmd1YWdlIiwiSWNvblZpZXdMaXN0IiwiaWNfdmlld19saXN0IiwiSWNvbkJvb2siLCJib29rIiwiSWNvbkZlZWRCYWNrIiwiaWNfZmVlZGJhY2siLCJJY29uU2VhcmNoIiwiaWNfc2VhcmNoIiwiSWNvbkNsb3NlIiwiaWNfY2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxhQUFhLEdBQUdDLG9FQUFZLENBQUM7QUFBRUMsTUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUFsQztBQUNPLE1BQU1DLE9BQU8sR0FBRyxNQUFNLE1BQUMsYUFBRDtBQUFlLE1BQUksRUFBRUMsMEVBQVdBO0FBQWhDLEVBQXRCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLE1BQU0sTUFBQyxhQUFEO0FBQWUsTUFBSSxFQUFFQyw0RUFBWUE7QUFBakMsRUFBM0I7QUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTSxNQUFDLGFBQUQ7QUFBZSxNQUFJLEVBQUVDLGlFQUFJQTtBQUF6QixFQUF2QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxNQUFNLE1BQUMsYUFBRDtBQUFlLE1BQUksRUFBRUMsMEVBQVdBO0FBQWhDLEVBQTNCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLE1BQU0sTUFBQyxhQUFEO0FBQWUsTUFBSSxFQUFFQyxzRUFBU0E7QUFBOUIsRUFBekI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsTUFBTSxNQUFDLGFBQUQ7QUFBZSxNQUFJLEVBQUVDLG9FQUFRQTtBQUE3QixFQUF4QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSWNvbi9JY29uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aEJhc2VJY29uIH0gZnJvbSBcInJlYWN0LWljb25zLWtpdFwiO1xuaW1wb3J0IHsgaWNfbGFuZ3VhZ2UgfSBmcm9tIFwicmVhY3QtaWNvbnMta2l0L21kL2ljX2xhbmd1YWdlXCI7XG5pbXBvcnQgeyBpY192aWV3X2xpc3QgfSBmcm9tIFwicmVhY3QtaWNvbnMta2l0L21kL2ljX3ZpZXdfbGlzdFwiO1xuaW1wb3J0IHsgYm9vayB9IGZyb20gXCJyZWFjdC1pY29ucy1raXQvaWNvbW9vbi9ib29rXCI7XG5pbXBvcnQgeyBpY19mZWVkYmFjayB9IGZyb20gXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfZmVlZGJhY2tcIjtcbmltcG9ydCB7IGljX3NlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfc2VhcmNoXCI7XG5pbXBvcnQgeyBpY19jbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfY2xvc2VcIjtcblxuY29uc3QgSWNvbkNvbnRhaW5lciA9IHdpdGhCYXNlSWNvbih7IHNpemU6IDI0IH0pO1xuZXhwb3J0IGNvbnN0IEljb25MYW4gPSAoKSA9PiA8SWNvbkNvbnRhaW5lciBpY29uPXtpY19sYW5ndWFnZX0gLz47XG5leHBvcnQgY29uc3QgSWNvblZpZXdMaXN0ID0gKCkgPT4gPEljb25Db250YWluZXIgaWNvbj17aWNfdmlld19saXN0fSAvPjtcbmV4cG9ydCBjb25zdCBJY29uQm9vayA9ICgpID0+IDxJY29uQ29udGFpbmVyIGljb249e2Jvb2t9IC8+O1xuZXhwb3J0IGNvbnN0IEljb25GZWVkQmFjayA9ICgpID0+IDxJY29uQ29udGFpbmVyIGljb249e2ljX2ZlZWRiYWNrfSAvPjtcbmV4cG9ydCBjb25zdCBJY29uU2VhcmNoID0gKCkgPT4gPEljb25Db250YWluZXIgaWNvbj17aWNfc2VhcmNofSAvPjtcbmV4cG9ydCBjb25zdCBJY29uQ2xvc2UgPSAoKSA9PiA8SWNvbkNvbnRhaW5lciBpY29uPXtpY19jbG9zZX0gLz47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Icon/Icon.js\n");

/***/ }),

/***/ "./components/InformationBox/InformationBox.js":
/*!*****************************************************!*\
  !*** ./components/InformationBox/InformationBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformationBox.module.scss */ \"./components/InformationBox/InformationBox.module.scss\");\n/* harmony import */ var _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon/Icon */ \"./components/Icon/Icon.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst InformationBox = () => {\n  return __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.infoWrapper\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.infoWrapperInner\n  }, __jsx(\"div\", {\n    className: \"wrapperTitleBox\"\n  }, __jsx(\"div\", {\n    className: \"title\"\n  }, __jsx(\"span\", null, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__[\"IconFeedBack\"], null)), \"\\u554F\\u984C\\u8207\\u8A0E\\u8AD6\"), __jsx(\"div\", {\n    className: \"searchBox\"\n  }, __jsx(\"div\", {\n    className: \"inputSearch\"\n  }, __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"\\u641C\\u5C0B\\u8A0E\\u8AD6\"\n  })), __jsx(\"span\", null, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__[\"IconSearch\"], null), __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__[\"IconClose\"], null))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InformationBox);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZm9ybWF0aW9uQm94L0luZm9ybWF0aW9uQm94LmpzP2YyNGQiXSwibmFtZXMiOlsiSW5mb3JtYXRpb25Cb3giLCJzdHlsZXMiLCJpbmZvV3JhcHBlciIsImluZm9XcmFwcGVySW5uZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLE1BQU07QUFDNUIsU0FDQztBQUFLLGFBQVMsRUFBRUMsa0VBQU0sQ0FBQ0M7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRUQsa0VBQU0sQ0FBQ0U7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDLG9CQUNDLE1BQUMsdURBQUQsT0FERCxDQURELG1DQURELEVBT0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQztBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGVBQVcsRUFBQztBQUEvQixJQURELENBREQsRUFJQyxvQkFDQyxNQUFDLHFEQUFELE9BREQsRUFFQyxNQUFDLG9EQUFELE9BRkQsQ0FKRCxDQVBELENBREQsQ0FERCxDQUREO0FBdUJBLENBeEJEOztBQTBCZUgsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0luZm9ybWF0aW9uQm94L0luZm9ybWF0aW9uQm94LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9JbmZvcm1hdGlvbkJveC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgSWNvbkZlZWRCYWNrLCBJY29uU2VhcmNoLCBJY29uQ2xvc2UgfSBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5cbmNvbnN0IEluZm9ybWF0aW9uQm94ID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1dyYXBwZXJ9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvV3JhcHBlcklubmVyfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyVGl0bGVCb3hcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0PEljb25GZWVkQmFjayAvPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx05ZWP6aGM6IiH6KiO6KuWXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2hCb3hcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRTZWFyY2hcIj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLmkJzlsIvoqI7oq5ZcIiAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0PEljb25TZWFyY2ggLz5cblx0XHRcdFx0XHRcdFx0PEljb25DbG9zZSAvPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mb3JtYXRpb25Cb3g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InformationBox/InformationBox.js\n");

/***/ }),

/***/ "./components/InformationBox/InformationBox.module.scss":
/*!**************************************************************!*\
  !*** ./components/InformationBox/InformationBox.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"infoWrapper\": \"InformationBox_infoWrapper__1KPce\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZm9ybWF0aW9uQm94L0luZm9ybWF0aW9uQm94Lm1vZHVsZS5zY3NzPzU3YmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0luZm9ybWF0aW9uQm94L0luZm9ybWF0aW9uQm94Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5mb1dyYXBwZXJcIjogXCJJbmZvcm1hdGlvbkJveF9pbmZvV3JhcHBlcl9fMUtQY2VcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InformationBox/InformationBox.module.scss\n");

/***/ }),

/***/ "./components/VideoBox/VideoBox.js":
/*!*****************************************!*\
  !*** ./components/VideoBox/VideoBox.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoBox.module.scss */ \"./components/VideoBox/VideoBox.module.scss\");\n/* harmony import */ var _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player/youtube */ \"react-player/youtube\");\n/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_player_youtube__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst VideoBox = () => {\n  return __jsx(\"div\", {\n    className: \"videoWrapper\"\n  }, __jsx(\"div\", {\n    className: \"videoPlayBox\"\n  }, __jsx(react_player_youtube__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    url: \"https://youtu.be/5qap5aO4i9A\",\n    playing: false,\n    controls: true,\n    width: \"100%\"\n  })), __jsx(\"div\", {\n    className: \"playController\"\n  }, __jsx(\"div\", {\n    className: \"progressBar\"\n  }, __jsx(\"div\", {\n    className: \"bar\"\n  }), __jsx(\"div\", {\n    className: \"ball\"\n  }))), __jsx(\"ul\", null, __jsx(\"li\", null), __jsx(\"li\", null), __jsx(\"li\", null), __jsx(\"li\", null), __jsx(\"li\", null), __jsx(\"li\", null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoBox);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvQm94L1ZpZGVvQm94LmpzP2E0N2MiXSwibmFtZXMiOlsiVmlkZW9Cb3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQ3RCLFNBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQyxNQUFDLDJEQUFEO0FBQ0MsT0FBRyxFQUFDLDhCQURMO0FBRUMsV0FBTyxFQUFFLEtBRlY7QUFHQyxZQUFRLEVBQUUsSUFIWDtBQUlDLFNBQUssRUFBRTtBQUpSLElBREQsQ0FERCxFQVNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURELEVBRUM7QUFBSyxhQUFTLEVBQUM7QUFBZixJQUZELENBREQsQ0FURCxFQWVDLGtCQUNDLGlCQURELEVBRUMsaUJBRkQsRUFHQyxpQkFIRCxFQUlDLGlCQUpELEVBS0MsaUJBTEQsRUFNQyxpQkFORCxDQWZELENBREQ7QUEwQkEsQ0EzQkQ7O0FBNkJlQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVmlkZW9Cb3gvVmlkZW9Cb3guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1ZpZGVvQm94Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSBcInJlYWN0LXBsYXllci95b3V0dWJlXCI7XG5jb25zdCBWaWRlb0JveCA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpZGVvV3JhcHBlclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aWRlb1BsYXlCb3hcIj5cblx0XHRcdFx0PFJlYWN0UGxheWVyXG5cdFx0XHRcdFx0dXJsPVwiaHR0cHM6Ly95b3V0dS5iZS81cWFwNWFPNGk5QVwiXG5cdFx0XHRcdFx0cGxheWluZz17ZmFsc2V9XG5cdFx0XHRcdFx0Y29udHJvbHM9e3RydWV9XG5cdFx0XHRcdFx0d2lkdGg9e1wiMTAwJVwifVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBsYXlDb250cm9sbGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NCYXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhclwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFsbFwiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHVsPlxuXHRcdFx0XHQ8bGk+PC9saT5cblx0XHRcdFx0PGxpPjwvbGk+XG5cdFx0XHRcdDxsaT48L2xpPlxuXHRcdFx0XHQ8bGk+PC9saT5cblx0XHRcdFx0PGxpPjwvbGk+XG5cdFx0XHRcdDxsaT48L2xpPlxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvQm94O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/VideoBox/VideoBox.js\n");

/***/ }),

/***/ "./components/VideoBox/VideoBox.module.scss":
/*!**************************************************!*\
  !*** ./components/VideoBox/VideoBox.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvQm94L1ZpZGVvQm94Lm1vZHVsZS5zY3NzPzQ0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVmlkZW9Cb3gvVmlkZW9Cb3gubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/VideoBox/VideoBox.module.scss\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout/Layout */ \"./Layout/Layout.js\");\n/* harmony import */ var _components_ClassInfoBox_ClassInfoBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ClassInfoBox/ClassInfoBox */ \"./components/ClassInfoBox/ClassInfoBox.js\");\n/* harmony import */ var _components_VideoBox_VideoBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/VideoBox/VideoBox */ \"./components/VideoBox/VideoBox.js\");\n/* harmony import */ var _components_InformationBox_InformationBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InformationBox/InformationBox */ \"./components/InformationBox/InformationBox.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst Index = () => {\n  return __jsx(\"div\", {\n    className: \"index\"\n  }, __jsx(_components_ClassInfoBox_ClassInfoBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), __jsx(\"div\", {\n    className: \"videoBoxWrapper\"\n  }, __jsx(_components_VideoBox_VideoBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), __jsx(_components_InformationBox_InformationBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbkIsU0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0MsTUFBQyw2RUFBRCxPQURELEVBRUM7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDLE1BQUMscUVBQUQsT0FERCxFQUVDLE1BQUMsaUZBQUQsT0FGRCxDQUZELENBREQ7QUFTQSxDQVZEOztBQVllQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vTGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IENsYXNzSW5mb0JveCBmcm9tIFwiLi4vY29tcG9uZW50cy9DbGFzc0luZm9Cb3gvQ2xhc3NJbmZvQm94XCI7XG5pbXBvcnQgVmlkZW9Cb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvVmlkZW9Cb3gvVmlkZW9Cb3hcIjtcbmltcG9ydCBJbmZvcm1hdGlvbkJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmZvcm1hdGlvbkJveC9JbmZvcm1hdGlvbkJveFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5kZXhcIj5cblx0XHRcdDxDbGFzc0luZm9Cb3ggLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlkZW9Cb3hXcmFwcGVyXCI+XG5cdFx0XHRcdDxWaWRlb0JveCAvPlxuXHRcdFx0XHQ8SW5mb3JtYXRpb25Cb3ggLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ericwang/Documents/workspace/basil/pages/index.js */"./pages/index.js");


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

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Grid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI/ZjZmYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Grid\n");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Paper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiPzBlZjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Paper\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

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

/***/ "react-icons-kit/icomoon/book":
/*!***********************************************!*\
  !*** external "react-icons-kit/icomoon/book" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/icomoon/book\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvaWNvbW9vbi9ib29rXCI/YzU5NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pY29ucy1raXQvaWNvbW9vbi9ib29rLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMta2l0L2ljb21vb24vYm9va1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/icomoon/book\n");

/***/ }),

/***/ "react-icons-kit/md/ic_close":
/*!**********************************************!*\
  !*** external "react-icons-kit/md/ic_close" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_close\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfY2xvc2VcIj81MWJlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWljb25zLWtpdC9tZC9pY19jbG9zZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdC9tZC9pY19jbG9zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_close\n");

/***/ }),

/***/ "react-icons-kit/md/ic_feedback":
/*!*************************************************!*\
  !*** external "react-icons-kit/md/ic_feedback" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_feedback\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfZmVlZGJhY2tcIj81Y2IxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWljb25zLWtpdC9tZC9pY19mZWVkYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdC9tZC9pY19mZWVkYmFja1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_feedback\n");

/***/ }),

/***/ "react-icons-kit/md/ic_language":
/*!*************************************************!*\
  !*** external "react-icons-kit/md/ic_language" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_language\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfbGFuZ3VhZ2VcIj81MmIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWljb25zLWtpdC9tZC9pY19sYW5ndWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdC9tZC9pY19sYW5ndWFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_language\n");

/***/ }),

/***/ "react-icons-kit/md/ic_search":
/*!***********************************************!*\
  !*** external "react-icons-kit/md/ic_search" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_search\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfc2VhcmNoXCI/NWQ2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pY29ucy1raXQvbWQvaWNfc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMta2l0L21kL2ljX3NlYXJjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_search\n");

/***/ }),

/***/ "react-icons-kit/md/ic_view_list":
/*!**************************************************!*\
  !*** external "react-icons-kit/md/ic_view_list" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_view_list\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfdmlld19saXN0XCI/MTU4MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pY29ucy1raXQvbWQvaWNfdmlld19saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMta2l0L21kL2ljX3ZpZXdfbGlzdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_view_list\n");

/***/ }),

/***/ "react-player/youtube":
/*!***************************************!*\
  !*** external "react-player/youtube" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-player/youtube\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wbGF5ZXIveW91dHViZVwiP2Y2YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcGxheWVyL3lvdXR1YmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wbGF5ZXIveW91dHViZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-player/youtube\n");

/***/ })

/******/ });