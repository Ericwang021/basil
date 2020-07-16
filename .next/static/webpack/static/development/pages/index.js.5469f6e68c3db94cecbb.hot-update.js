webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CommentForm/CommentForm.js":
/*!***********************************************!*\
  !*** ./components/CommentForm/CommentForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentForm.module.scss */ \"./components/CommentForm/CommentForm.module.scss\");\n/* harmony import */ var _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/components/buttons.module.scss */ \"./styles/components/buttons.module.scss\");\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Send */ \"./node_modules/@material-ui/icons/Send.js\");\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context */ \"./components/context.js\");\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\n\nvar CommentForm = function CommentForm() {\n  _s();\n\n  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n  var handelCommentSubmit = contextValue.handelCommentSubmit;\n\n  var _useState = useState(\"\"),\n      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      reply = _useState2[0],\n      setReply = _useState2[1];\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    var content = textValue.value;\n    console.log(content, \"content\");\n    handelCommentSubmit({\n      content: content\n    });\n  };\n\n  return __jsx(\"form\", {\n    onSubmit: function onSubmit(e) {\n      return handleSubmit(e);\n    }\n  }, __jsx(\"div\", {\n    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.addMessage\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatarMl\n  }, \"E\"), __jsx(\"div\", {\n    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.textAreaBox\n  }, __jsx(\"textarea\", {\n    value: reply,\n    onChange: function onChange(e) {\n      return setReply(e.reply);\n    },\n    placeholder: \"\\u65B0\\u589E\\u56DE\\u8986\"\n  })), __jsx(\"button\", {\n    className: _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.iconButtonSm\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"IconButton\"], null, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    fontSize: \"small\"\n  })))));\n};\n\n_s(CommentForm, \"jBEAcMkfk/Tx5ywoZsynxW2si/4=\");\n\n_c = CommentForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtL0NvbW1lbnRGb3JtLmpzP2E4MjQiXSwibmFtZXMiOlsiQ29tbWVudEZvcm0iLCJjb250ZXh0VmFsdWUiLCJ1c2VDb250ZXh0IiwiY29udGV4dCIsImhhbmRlbENvbW1lbnRTdWJtaXQiLCJ1c2VTdGF0ZSIsInJlcGx5Iiwic2V0UmVwbHkiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250ZW50IiwidGV4dFZhbHVlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiYWRkTWVzc2FnZSIsImF2YXRhclN0eWxlIiwiYXZhdGFyTWwiLCJ0ZXh0QXJlYUJveCIsImJ1dHRvblN0eWxlIiwiaWNvbkJ1dHRvblNtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN6QixNQUFNQyxZQUFZLEdBQUdDLHdEQUFVLENBQUNDLGdEQUFELENBQS9CO0FBRHlCLE1BRWpCQyxtQkFGaUIsR0FFT0gsWUFGUCxDQUVqQkcsbUJBRmlCOztBQUFBLGtCQUdDQyxRQUFRLENBQUMsRUFBRCxDQUhUO0FBQUE7QUFBQSxNQUdsQkMsS0FIa0I7QUFBQSxNQUdYQyxRQUhXOztBQUl6QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDM0JBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUlDLE9BQU8sR0FBR0MsU0FBUyxDQUFDQyxLQUF4QjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosT0FBWixFQUFxQixTQUFyQjtBQUNBUCx1QkFBbUIsQ0FBQztBQUFFTyxhQUFPLEVBQVBBO0FBQUYsS0FBRCxDQUFuQjtBQUNBLEdBTEQ7O0FBTUEsU0FDQztBQUFNLFlBQVEsRUFBRSxrQkFBQ0YsQ0FBRDtBQUFBLGFBQU9ELFlBQVksQ0FBQ0MsQ0FBRCxDQUFuQjtBQUFBO0FBQWhCLEtBQ0M7QUFBSyxhQUFTLEVBQUVPLCtEQUFNLENBQUNDO0FBQXZCLEtBQ0M7QUFBSyxhQUFTLEVBQUVDLDRFQUFXLENBQUNDO0FBQTVCLFNBREQsRUFFQztBQUFLLGFBQVMsRUFBRUgsK0RBQU0sQ0FBQ0k7QUFBdkIsS0FDQztBQUNDLFNBQUssRUFBRWQsS0FEUjtBQUVDLFlBQVEsRUFBRSxrQkFBQ0csQ0FBRDtBQUFBLGFBQU9GLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDSCxLQUFILENBQWY7QUFBQSxLQUZYO0FBR0MsZUFBVyxFQUFDO0FBSGIsSUFERCxDQUZELEVBU0M7QUFBUSxhQUFTLEVBQUVlLDZFQUFXLENBQUNDO0FBQS9CLEtBQ0MsTUFBQyw0REFBRCxRQUNDLE1BQUMsOERBQUQ7QUFBVSxZQUFRLEVBQUM7QUFBbkIsSUFERCxDQURELENBVEQsQ0FERCxDQUREO0FBbUJBLENBN0JEOztHQUFNdEIsVzs7S0FBQUEsVztBQStCU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtL0NvbW1lbnRGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Db21tZW50Rm9ybS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGF2YXRhclN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBidXR0b25TdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvYnV0dG9ucy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbmRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZFwiO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IGNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuY29uc3QgQ29tbWVudEZvcm0gPSAoKSA9PiB7XG5cdGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoY29udGV4dCk7XG5cdGNvbnN0IHsgaGFuZGVsQ29tbWVudFN1Ym1pdCB9ID0gY29udGV4dFZhbHVlO1xuXHRjb25zdCBbcmVwbHksIHNldFJlcGx5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgY29udGVudCA9IHRleHRWYWx1ZS52YWx1ZTtcblx0XHRjb25zb2xlLmxvZyhjb250ZW50LCBcImNvbnRlbnRcIik7XG5cdFx0aGFuZGVsQ29tbWVudFN1Ym1pdCh7IGNvbnRlbnQgfSk7XG5cdH07XG5cdHJldHVybiAoXG5cdFx0PGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRNZXNzYWdlfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2F2YXRhclN0eWxlLmF2YXRhck1sfT5FPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEFyZWFCb3h9PlxuXHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0dmFsdWU9e3JlcGx5fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRSZXBseShlLnJlcGx5KX1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi5paw5aKe5Zue6KaGXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvblN0eWxlLmljb25CdXR0b25TbX0+XG5cdFx0XHRcdFx0PEljb25CdXR0b24+XG5cdFx0XHRcdFx0XHQ8U2VuZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG5cdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZm9ybT5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CommentForm/CommentForm.js\n");

/***/ })

})