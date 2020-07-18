webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CommentReplyForm/CommentReplyForm.js":
/*!*********************************************************!*\
  !*** ./components/CommentReplyForm/CommentReplyForm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _CommentReplyForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentReplyForm.module.scss */ \"./components/CommentReplyForm/CommentReplyForm.module.scss\");\n/* harmony import */ var _CommentReplyForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CommentReplyForm_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/components/buttons.module.scss */ \"./styles/components/buttons.module.scss\");\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Send */ \"./node_modules/@material-ui/icons/Send.js\");\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context */ \"./components/context.js\");\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\n\nvar CommentReplyForm = function CommentReplyForm(_ref) {\n  _s();\n\n  var setReplyComment = _ref.setReplyComment;\n  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n  var discussionList = contextValue.discussionList,\n      setDiscussionList = contextValue.setDiscussionList;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      replyCommentValue = _useState[0],\n      setReplyCommentValue = _useState[1];\n\n  var replyCommentSubmit = function replyCommentSubmit(event) {\n    event.preventDefault();\n    var replyCommentItem = {\n      replyRecord: {\n        name: \"REPLYName\",\n        date: \"2020/07/17\",\n        content: replyCommentValue,\n        goodCount: 0\n      }\n    };\n    setDiscussionList([replyCommentItem].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(discussionList)));\n    setReplyComment(false);\n  };\n\n  var changeReplyComment = function changeReplyComment(event) {\n    setReplyCommentValue(event.target.value);\n  };\n\n  return __jsx(\"form\", {\n    onSubmit: replyCommentSubmit\n  }, __jsx(\"div\", {\n    className: _CommentReplyForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.addMessage\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatarMl\n  }, \"E\"), __jsx(\"div\", {\n    className: _CommentReplyForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.textAreaBox\n  }, __jsx(\"textarea\", {\n    value: replyCommentValue,\n    onChange: changeReplyComment,\n    placeholder: \"\\u65B0\\u589E\\u56DE\\u8986\"\n  })), __jsx(\"button\", {\n    className: _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.iconButtonSm\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"IconButton\"], null, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    fontSize: \"small\"\n  })))));\n};\n\n_s(CommentReplyForm, \"+JqFpXUpv60Oro6PrmI/uHCQhqU=\");\n\n_c = CommentReplyForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentReplyForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentReplyForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRSZXBseUZvcm0vQ29tbWVudFJlcGx5Rm9ybS5qcz80ODcwIl0sIm5hbWVzIjpbIkNvbW1lbnRSZXBseUZvcm0iLCJzZXRSZXBseUNvbW1lbnQiLCJjb250ZXh0VmFsdWUiLCJ1c2VDb250ZXh0IiwiY29udGV4dCIsImRpc2N1c3Npb25MaXN0Iiwic2V0RGlzY3Vzc2lvbkxpc3QiLCJ1c2VTdGF0ZSIsInJlcGx5Q29tbWVudFZhbHVlIiwic2V0UmVwbHlDb21tZW50VmFsdWUiLCJyZXBseUNvbW1lbnRTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVwbHlDb21tZW50SXRlbSIsInJlcGx5UmVjb3JkIiwibmFtZSIsImRhdGUiLCJjb250ZW50IiwiZ29vZENvdW50IiwiY2hhbmdlUmVwbHlDb21tZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZXMiLCJhZGRNZXNzYWdlIiwiYXZhdGFyU3R5bGUiLCJhdmF0YXJNbCIsInRleHRBcmVhQm94IiwiYnV0dG9uU3R5bGUiLCJpY29uQnV0dG9uU20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLGVBQXNCLFFBQXRCQSxlQUFzQjtBQUNqRCxNQUFNQyxZQUFZLEdBQUdDLHdEQUFVLENBQUNDLGdEQUFELENBQS9CO0FBRGlELE1BRXpDQyxjQUZ5QyxHQUVISCxZQUZHLENBRXpDRyxjQUZ5QztBQUFBLE1BRXpCQyxpQkFGeUIsR0FFSEosWUFGRyxDQUV6QkksaUJBRnlCOztBQUFBLGtCQUdDQyxzREFBUSxDQUFDLEVBQUQsQ0FIVDtBQUFBLE1BRzFDQyxpQkFIMEM7QUFBQSxNQUd2QkMsb0JBSHVCOztBQUtqRCxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLEtBQUQsRUFBVztBQUNyQ0EsU0FBSyxDQUFDQyxjQUFOO0FBQ0EsUUFBTUMsZ0JBQWdCLEdBQUc7QUFDeEJDLGlCQUFXLEVBQUU7QUFDWkMsWUFBSSxFQUFFLFdBRE07QUFFWkMsWUFBSSxFQUFFLFlBRk07QUFHWkMsZUFBTyxFQUFFVCxpQkFIRztBQUlaVSxpQkFBUyxFQUFFO0FBSkM7QUFEVyxLQUF6QjtBQVFBWixxQkFBaUIsRUFBRU8sZ0JBQUYsc0dBQXVCUixjQUF2QixHQUFqQjtBQUNBSixtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNBLEdBWkQ7O0FBYUEsTUFBTWtCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ1IsS0FBRCxFQUFXO0FBQ3JDRix3QkFBb0IsQ0FBQ0UsS0FBSyxDQUFDUyxNQUFOLENBQWFDLEtBQWQsQ0FBcEI7QUFDQSxHQUZEOztBQUdBLFNBQ0M7QUFBTSxZQUFRLEVBQUVYO0FBQWhCLEtBQ0M7QUFBSyxhQUFTLEVBQUVZLG9FQUFNLENBQUNDO0FBQXZCLEtBQ0M7QUFBSyxhQUFTLEVBQUVDLDRFQUFXLENBQUNDO0FBQTVCLFNBREQsRUFFQztBQUFLLGFBQVMsRUFBRUgsb0VBQU0sQ0FBQ0k7QUFBdkIsS0FDQztBQUNDLFNBQUssRUFBRWxCLGlCQURSO0FBRUMsWUFBUSxFQUFFVyxrQkFGWDtBQUdDLGVBQVcsRUFBQztBQUhiLElBREQsQ0FGRCxFQVNDO0FBQVEsYUFBUyxFQUFFUSw2RUFBVyxDQUFDQztBQUEvQixLQUNDLE1BQUMsNERBQUQsUUFDQyxNQUFDLDhEQUFEO0FBQVUsWUFBUSxFQUFDO0FBQW5CLElBREQsQ0FERCxDQVRELENBREQsQ0FERDtBQW1CQSxDQXhDRDs7R0FBTTVCLGdCOztLQUFBQSxnQjtBQTBDU0EsK0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRSZXBseUZvcm0vQ29tbWVudFJlcGx5Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29tbWVudFJlcGx5Rm9ybS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGF2YXRhclN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBidXR0b25TdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvYnV0dG9ucy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VuZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZW5kXCI7XG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgY29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCBDb21tZW50UmVwbHlGb3JtID0gKHsgc2V0UmVwbHlDb21tZW50IH0pID0+IHtcblx0Y29uc3QgY29udGV4dFZhbHVlID0gdXNlQ29udGV4dChjb250ZXh0KTtcblx0Y29uc3QgeyBkaXNjdXNzaW9uTGlzdCwgc2V0RGlzY3Vzc2lvbkxpc3QgfSA9IGNvbnRleHRWYWx1ZTtcblx0Y29uc3QgW3JlcGx5Q29tbWVudFZhbHVlLCBzZXRSZXBseUNvbW1lbnRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHRjb25zdCByZXBseUNvbW1lbnRTdWJtaXQgPSAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IHJlcGx5Q29tbWVudEl0ZW0gPSB7XG5cdFx0XHRyZXBseVJlY29yZDoge1xuXHRcdFx0XHRuYW1lOiBcIlJFUExZTmFtZVwiLFxuXHRcdFx0XHRkYXRlOiBcIjIwMjAvMDcvMTdcIixcblx0XHRcdFx0Y29udGVudDogcmVwbHlDb21tZW50VmFsdWUsXG5cdFx0XHRcdGdvb2RDb3VudDogMCxcblx0XHRcdH0sXG5cdFx0fTtcblx0XHRzZXREaXNjdXNzaW9uTGlzdChbcmVwbHlDb21tZW50SXRlbSwgLi4uZGlzY3Vzc2lvbkxpc3RdKTtcblx0XHRzZXRSZXBseUNvbW1lbnQoZmFsc2UpO1xuXHR9O1xuXHRjb25zdCBjaGFuZ2VSZXBseUNvbW1lbnQgPSAoZXZlbnQpID0+IHtcblx0XHRzZXRSZXBseUNvbW1lbnRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxmb3JtIG9uU3VibWl0PXtyZXBseUNvbW1lbnRTdWJtaXR9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRNZXNzYWdlfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2F2YXRhclN0eWxlLmF2YXRhck1sfT5FPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEFyZWFCb3h9PlxuXHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0dmFsdWU9e3JlcGx5Q29tbWVudFZhbHVlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2NoYW5nZVJlcGx5Q29tbWVudH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi5paw5aKe5Zue6KaGXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvblN0eWxlLmljb25CdXR0b25TbX0+XG5cdFx0XHRcdFx0PEljb25CdXR0b24+XG5cdFx0XHRcdFx0XHQ8U2VuZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG5cdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZm9ybT5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRSZXBseUZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentReplyForm/CommentReplyForm.js\n");

/***/ })

})