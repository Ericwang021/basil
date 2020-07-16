webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CommentForm/CommentForm.js":
/*!***********************************************!*\
  !*** ./components/CommentForm/CommentForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentForm.module.scss */ \"./components/CommentForm/CommentForm.module.scss\");\n/* harmony import */ var _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/buttons.module.scss */ \"./styles/components/buttons.module.scss\");\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Send */ \"./node_modules/@material-ui/icons/Send.js\");\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context */ \"./components/context.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\nvar CommentForm = function CommentForm() {\n  _s();\n\n  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  var handelCommentSubmit = contextValue.handelCommentSubmit;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      replyValue = _useState[0],\n      setReplyValue = _useState[1];\n\n  var handleChange = function handleChange(e) {\n    setReplyValue(e.target.value);\n  };\n\n  console.log(setReplyValue, \"setReplyValue\");\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    var value = \"test\";\n    var content = value;\n    var name = \"Jh\";\n    var date = new Date();\n    var reply = [];\n    console.log(content, \"record\");\n    handelCommentSubmit({\n      record: {\n        content: content,\n        date: date,\n        name: name,\n        reply: reply\n      }\n    });\n  };\n\n  return __jsx(\"form\", {\n    onSubmit: function onSubmit(e) {\n      return handleSubmit(e);\n    }\n  }, __jsx(\"div\", {\n    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.addMessage\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatarMl\n  }, \"E\"), __jsx(\"div\", {\n    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.textAreaBox\n  }, __jsx(\"textarea\", {\n    value: replyValue,\n    onChange: handleChange,\n    placeholder: \"\\u65B0\\u589E\\u56DE\\u8986\"\n  })), __jsx(\"button\", {\n    className: _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.iconButtonSm\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"IconButton\"], null, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    fontSize: \"small\"\n  })))));\n};\n\n_s(CommentForm, \"8j9xBbn0NSaIRQvrXqwWCsOvybM=\");\n\n_c = CommentForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtL0NvbW1lbnRGb3JtLmpzP2E4MjQiXSwibmFtZXMiOlsiQ29tbWVudEZvcm0iLCJjb250ZXh0VmFsdWUiLCJ1c2VDb250ZXh0IiwiY29udGV4dCIsImhhbmRlbENvbW1lbnRTdWJtaXQiLCJ1c2VTdGF0ZSIsInJlcGx5VmFsdWUiLCJzZXRSZXBseVZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29udGVudCIsIm5hbWUiLCJkYXRlIiwiRGF0ZSIsInJlcGx5IiwicmVjb3JkIiwic3R5bGVzIiwiYWRkTWVzc2FnZSIsImF2YXRhclN0eWxlIiwiYXZhdGFyTWwiLCJ0ZXh0QXJlYUJveCIsImJ1dHRvblN0eWxlIiwiaWNvbkJ1dHRvblNtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN6QixNQUFNQyxZQUFZLEdBQUdDLHdEQUFVLENBQUNDLGdEQUFELENBQS9CO0FBRHlCLE1BRWpCQyxtQkFGaUIsR0FFT0gsWUFGUCxDQUVqQkcsbUJBRmlCOztBQUFBLGtCQUdXQyxzREFBUSxDQUFDLEVBQUQsQ0FIbkI7QUFBQSxNQUdsQkMsVUFIa0I7QUFBQSxNQUdOQyxhQUhNOztBQUt6QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDM0JGLGlCQUFhLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDQSxHQUZEOztBQUdBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sYUFBWixFQUEyQixlQUEzQjs7QUFDQSxNQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTCxDQUFELEVBQU87QUFDM0JBLEtBQUMsQ0FBQ00sY0FBRjtBQUNBLFFBQU1KLEtBQUssR0FBRyxNQUFkO0FBQ0EsUUFBTUssT0FBTyxHQUFHTCxLQUFoQjtBQUNBLFFBQU1NLElBQUksR0FBRyxJQUFiO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosRUFBYjtBQUNBLFFBQU1DLEtBQUssR0FBRyxFQUFkO0FBQ0FSLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRyxPQUFaLEVBQXFCLFFBQXJCO0FBQ0FaLHVCQUFtQixDQUFDO0FBQUVpQixZQUFNLEVBQUU7QUFBRUwsZUFBTyxFQUFQQSxPQUFGO0FBQVdFLFlBQUksRUFBSkEsSUFBWDtBQUFpQkQsWUFBSSxFQUFKQSxJQUFqQjtBQUF1QkcsYUFBSyxFQUFMQTtBQUF2QjtBQUFWLEtBQUQsQ0FBbkI7QUFDQSxHQVREOztBQVVBLFNBQ0M7QUFBTSxZQUFRLEVBQUUsa0JBQUNYLENBQUQ7QUFBQSxhQUFPSyxZQUFZLENBQUNMLENBQUQsQ0FBbkI7QUFBQTtBQUFoQixLQUNDO0FBQUssYUFBUyxFQUFFYSwrREFBTSxDQUFDQztBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFQyw0RUFBVyxDQUFDQztBQUE1QixTQURELEVBRUM7QUFBSyxhQUFTLEVBQUVILCtEQUFNLENBQUNJO0FBQXZCLEtBQ0M7QUFDQyxTQUFLLEVBQUVwQixVQURSO0FBRUMsWUFBUSxFQUFFRSxZQUZYO0FBR0MsZUFBVyxFQUFDO0FBSGIsSUFERCxDQUZELEVBU0M7QUFBUSxhQUFTLEVBQUVtQiw2RUFBVyxDQUFDQztBQUEvQixLQUNDLE1BQUMsNERBQUQsUUFDQyxNQUFDLDhEQUFEO0FBQVUsWUFBUSxFQUFDO0FBQW5CLElBREQsQ0FERCxDQVRELENBREQsQ0FERDtBQW1CQSxDQXRDRDs7R0FBTTVCLFc7O0tBQUFBLFc7QUF3Q1NBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21tZW50Rm9ybS9Db21tZW50Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29tbWVudEZvcm0ubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBhdmF0YXJTdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvYXZhdGFyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYnV0dG9uU3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9jb21wb25lbnRzL2J1dHRvbnMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbmRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZFwiO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IGNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuY29uc3QgQ29tbWVudEZvcm0gPSAoKSA9PiB7XG5cdGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoY29udGV4dCk7XG5cdGNvbnN0IHsgaGFuZGVsQ29tbWVudFN1Ym1pdCB9ID0gY29udGV4dFZhbHVlO1xuXHRjb25zdCBbcmVwbHlWYWx1ZSwgc2V0UmVwbHlWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuXHRcdHNldFJlcGx5VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuXHR9O1xuXHRjb25zb2xlLmxvZyhzZXRSZXBseVZhbHVlLCBcInNldFJlcGx5VmFsdWVcIik7XG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IHZhbHVlID0gXCJ0ZXN0XCI7XG5cdFx0Y29uc3QgY29udGVudCA9IHZhbHVlO1xuXHRcdGNvbnN0IG5hbWUgPSBcIkpoXCI7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgcmVwbHkgPSBbXTtcblx0XHRjb25zb2xlLmxvZyhjb250ZW50LCBcInJlY29yZFwiKTtcblx0XHRoYW5kZWxDb21tZW50U3VibWl0KHsgcmVjb3JkOiB7IGNvbnRlbnQsIGRhdGUsIG5hbWUsIHJlcGx5IH0gfSk7XG5cdH07XG5cdHJldHVybiAoXG5cdFx0PGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRNZXNzYWdlfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2F2YXRhclN0eWxlLmF2YXRhck1sfT5FPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEFyZWFCb3h9PlxuXHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0dmFsdWU9e3JlcGx5VmFsdWV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLmlrDlop7lm57opoZcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uU3R5bGUuaWNvbkJ1dHRvblNtfT5cblx0XHRcdFx0XHQ8SWNvbkJ1dHRvbj5cblx0XHRcdFx0XHRcdDxTZW5kSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cblx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb3JtPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentForm/CommentForm.js\n");

/***/ })

})