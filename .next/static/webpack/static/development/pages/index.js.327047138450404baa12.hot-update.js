webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CommentForm/CommentForm.js":
/*!***********************************************!*\
  !*** ./components/CommentForm/CommentForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentForm.module.scss */ \"./components/CommentForm/CommentForm.module.scss\");\n/* harmony import */ var _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/buttons.module.scss */ \"./styles/components/buttons.module.scss\");\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Send */ \"./node_modules/@material-ui/icons/Send.js\");\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context */ \"./components/context.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\nvar CommentForm = function CommentForm() {\n  _s();\n\n  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  var handelCommentSubmit = contextValue.handelCommentSubmit;\n  var textValue = useRef(null);\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    var content = ref.content.value;\n    handelCommentSubmit({\n      content: content\n    });\n  };\n\n  return __jsx(\"form\", {\n    onSubmit: function onSubmit(e) {\n      return handleSubmit(e);\n    }\n  }, __jsx(\"div\", {\n    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.addMessage\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatarMl\n  }, \"E\"), __jsx(\"div\", {\n    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.textAreaBox\n  }, __jsx(\"textarea\", {\n    ref: textValue,\n    placeholder: \"\\u65B0\\u589E\\u56DE\\u8986\"\n  })), __jsx(\"button\", {\n    className: _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.iconButtonSm\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"IconButton\"], null, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    fontSize: \"small\"\n  })))));\n};\n\n_s(CommentForm, \"U4Bpez7Vh7jl774Bw8UiZi0ODvo=\");\n\n_c = CommentForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtL0NvbW1lbnRGb3JtLmpzP2E4MjQiXSwibmFtZXMiOlsiQ29tbWVudEZvcm0iLCJjb250ZXh0VmFsdWUiLCJ1c2VDb250ZXh0IiwiY29udGV4dCIsImhhbmRlbENvbW1lbnRTdWJtaXQiLCJ0ZXh0VmFsdWUiLCJ1c2VSZWYiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250ZW50IiwicmVmIiwidmFsdWUiLCJzdHlsZXMiLCJhZGRNZXNzYWdlIiwiYXZhdGFyU3R5bGUiLCJhdmF0YXJNbCIsInRleHRBcmVhQm94IiwiYnV0dG9uU3R5bGUiLCJpY29uQnV0dG9uU20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLFlBQVksR0FBR0Msd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FBL0I7QUFEeUIsTUFFakJDLG1CQUZpQixHQUVPSCxZQUZQLENBRWpCRyxtQkFGaUI7QUFHekIsTUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUMsSUFBRCxDQUF4Qjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDM0JBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUlDLE9BQU8sR0FBR0MsR0FBRyxDQUFDRCxPQUFKLENBQVlFLEtBQTFCO0FBQ0FSLHVCQUFtQixDQUFDO0FBQUVNLGFBQU8sRUFBUEE7QUFBRixLQUFELENBQW5CO0FBQ0EsR0FKRDs7QUFLQSxTQUNDO0FBQU0sWUFBUSxFQUFFLGtCQUFDRixDQUFEO0FBQUEsYUFBT0QsWUFBWSxDQUFDQyxDQUFELENBQW5CO0FBQUE7QUFBaEIsS0FDQztBQUFLLGFBQVMsRUFBRUssK0RBQU0sQ0FBQ0M7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRUMsNEVBQVcsQ0FBQ0M7QUFBNUIsU0FERCxFQUVDO0FBQUssYUFBUyxFQUFFSCwrREFBTSxDQUFDSTtBQUF2QixLQUNDO0FBQVUsT0FBRyxFQUFFWixTQUFmO0FBQTBCLGVBQVcsRUFBQztBQUF0QyxJQURELENBRkQsRUFLQztBQUFRLGFBQVMsRUFBRWEsNkVBQVcsQ0FBQ0M7QUFBL0IsS0FDQyxNQUFDLDREQUFELFFBQ0MsTUFBQyw4REFBRDtBQUFVLFlBQVEsRUFBQztBQUFuQixJQURELENBREQsQ0FMRCxDQURELENBREQ7QUFlQSxDQXhCRDs7R0FBTW5CLFc7O0tBQUFBLFc7QUEwQlNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21tZW50Rm9ybS9Db21tZW50Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29tbWVudEZvcm0ubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBhdmF0YXJTdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvYXZhdGFyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYnV0dG9uU3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9jb21wb25lbnRzL2J1dHRvbnMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VuZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZW5kXCI7XG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgY29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCBDb21tZW50Rm9ybSA9ICgpID0+IHtcblx0Y29uc3QgY29udGV4dFZhbHVlID0gdXNlQ29udGV4dChjb250ZXh0KTtcblx0Y29uc3QgeyBoYW5kZWxDb21tZW50U3VibWl0IH0gPSBjb250ZXh0VmFsdWU7XG5cdGNvbnN0IHRleHRWYWx1ZSA9IHVzZVJlZihudWxsKTtcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0IGNvbnRlbnQgPSByZWYuY29udGVudC52YWx1ZTtcblx0XHRoYW5kZWxDb21tZW50U3VibWl0KHsgY29udGVudCB9KTtcblx0fTtcblx0cmV0dXJuIChcblx0XHQ8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZE1lc3NhZ2V9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YXZhdGFyU3R5bGUuYXZhdGFyTWx9PkU8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0QXJlYUJveH0+XG5cdFx0XHRcdFx0PHRleHRhcmVhIHJlZj17dGV4dFZhbHVlfSBwbGFjZWhvbGRlcj1cIuaWsOWinuWbnuimhlwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uU3R5bGUuaWNvbkJ1dHRvblNtfT5cblx0XHRcdFx0XHQ8SWNvbkJ1dHRvbj5cblx0XHRcdFx0XHRcdDxTZW5kSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cblx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb3JtPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentForm/CommentForm.js\n");

/***/ })

})