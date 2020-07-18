webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CommentBox_CommentBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CommentBox/CommentBox */ \"./components/CommentBox/CommentBox.js\");\n/* harmony import */ var _components_ClassTitleWrapper_ClassTitleWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ClassTitleWrapper/ClassTitleWrapper */ \"./components/ClassTitleWrapper/ClassTitleWrapper.js\");\n/* harmony import */ var _components_ShareWrapper_ShareWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ShareWrapper/ShareWrapper */ \"./components/ShareWrapper/ShareWrapper.js\");\n/* harmony import */ var _components_VideoBox_VideoBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/VideoBox/VideoBox */ \"./components/VideoBox/VideoBox.js\");\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/context */ \"./components/context.js\");\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_components_context__WEBPACK_IMPORTED_MODULE_6__[\"defaultDiscussionList\"])),\n      discussionList = _useState[0],\n      setDiscussionList = _useState[1];\n\n  var commentContext = {\n    discussionList: discussionList,\n    setDiscussionList: setDiscussionList\n  };\n  return __jsx(_components_context__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    value: commentContext\n  }, __jsx(\"div\", {\n    className: \"index\"\n  }, __jsx(\"section\", {\n    className: \"video-box-wrapper\"\n  }, __jsx(_components_VideoBox_VideoBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), __jsx(_components_CommentBox_CommentBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), __jsx(_components_ClassTitleWrapper_ClassTitleWrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), __jsx(_components_ShareWrapper_ShareWrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n};\n\n_s(Index, \"r72VoYw3wyoD51+n99JUsiuEbYU=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJkZWZhdWx0RGlzY3Vzc2lvbkxpc3QiLCJkaXNjdXNzaW9uTGlzdCIsInNldERpc2N1c3Npb25MaXN0IiwiY29tbWVudENvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDeUJDLHNEQUFRLENBQUMsNkZBQ2pEQyx5RUFEZ0QsRUFEakM7QUFBQSxNQUNaQyxjQURZO0FBQUEsTUFDSUMsaUJBREo7O0FBSW5CLE1BQU1DLGNBQWMsR0FBRztBQUN0QkYsa0JBQWMsRUFBZEEsY0FEc0I7QUFFdEJDLHFCQUFpQixFQUFqQkE7QUFGc0IsR0FBdkI7QUFJQSxTQUNDLE1BQUMsNERBQUQ7QUFBVSxTQUFLLEVBQUVDO0FBQWpCLEtBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQVMsYUFBUyxFQUFDO0FBQW5CLEtBQ0MsTUFBQyxxRUFBRCxPQURELEVBRUMsTUFBQyx5RUFBRCxPQUZELENBREQsRUFNQyxNQUFDLHVGQUFELE9BTkQsRUFPQyxNQUFDLDZFQUFELE9BUEQsQ0FERCxDQUREO0FBYUEsQ0FyQkQ7O0dBQU1MLEs7O0tBQUFBLEs7QUF1QlNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb21tZW50Qm94IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1lbnRCb3gvQ29tbWVudEJveFwiO1xuaW1wb3J0IENsYXNzVGl0bGVXcmFwcGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NsYXNzVGl0bGVXcmFwcGVyL0NsYXNzVGl0bGVXcmFwcGVyXCI7XG5pbXBvcnQgU2hhcmVXcmFwcGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NoYXJlV3JhcHBlci9TaGFyZVdyYXBwZXJcIjtcbmltcG9ydCBWaWRlb0JveCBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWRlb0JveC9WaWRlb0JveFwiO1xuaW1wb3J0IHsgZGVmYXVsdERpc2N1c3Npb25MaXN0LCBQcm92aWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHRcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG5cdGNvbnN0IFtkaXNjdXNzaW9uTGlzdCwgc2V0RGlzY3Vzc2lvbkxpc3RdID0gdXNlU3RhdGUoW1xuXHRcdC4uLmRlZmF1bHREaXNjdXNzaW9uTGlzdCxcblx0XSk7XG5cdGNvbnN0IGNvbW1lbnRDb250ZXh0ID0ge1xuXHRcdGRpc2N1c3Npb25MaXN0LFxuXHRcdHNldERpc2N1c3Npb25MaXN0LFxuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxQcm92aWRlciB2YWx1ZT17Y29tbWVudENvbnRleHR9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbmRleFwiPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJ2aWRlby1ib3gtd3JhcHBlclwiPlxuXHRcdFx0XHRcdDxWaWRlb0JveCAvPlxuXHRcdFx0XHRcdDxDb21tZW50Qm94IC8+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblxuXHRcdFx0XHQ8Q2xhc3NUaXRsZVdyYXBwZXIgLz5cblx0XHRcdFx0PFNoYXJlV3JhcHBlciAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9Qcm92aWRlcj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})