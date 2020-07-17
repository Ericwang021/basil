webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CommentReply/CommentReply.js":
/*!*************************************************!*\
  !*** ./components/CommentReply/CommentReply.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CommentReply_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentReply.module.scss */ \"./components/CommentReply/CommentReply.module.scss\");\n/* harmony import */ var _CommentReply_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CommentReply_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CommentReplyForm_CommentReplyForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommentReplyForm/CommentReplyForm */ \"./components/CommentReplyForm/CommentReplyForm.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./components/context.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar CommentReply = function CommentReply(_ref) {\n  _s();\n\n  var replyItem = _ref.replyItem;\n  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  var replyDiscussion = contextValue.replyDiscussion;\n  console.log(contextValue);\n  var _ref2 = \"\",\n      content = _ref2.content,\n      date = _ref2.date,\n      name = _ref2.name;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      feedBack = _useState[0],\n      setFeedBack = _useState[1];\n\n  var handleFeedback = function handleFeedback() {\n    setFeedBack(!feedBack);\n  };\n\n  return __jsx(\"div\", {\n    className: _CommentReply_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.feedback\n  }, __jsx(\"div\", {\n    className: _CommentReply_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.feedbackEvent\n  }, name ? __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.avatarSm\n  }, name.substring(0, 1)) : null, __jsx(\"div\", null, __jsx(\"div\", {\n    className: _CommentReply_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nameText\n  }, name ? __jsx(\"div\", null, name) : null, date ? __jsx(\"div\", null, date) : null), content ? __jsx(\"div\", {\n    className: _CommentReply_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.replyContent\n  }, content) : null, __jsx(\"div\", {\n    className: _CommentReply_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.feedbackText,\n    onClick: function onClick() {\n      return handleFeedback();\n    }\n  }, \"\\u56DE\\u8986\"))), feedBack ? __jsx(_CommentReplyForm_CommentReplyForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null) : null);\n};\n\n_s(CommentReply, \"+YksO1YM4RywUeotVlpsGBycehY=\");\n\n_c = CommentReply;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentReply);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentReply\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRSZXBseS9Db21tZW50UmVwbHkuanM/OGQwMiJdLCJuYW1lcyI6WyJDb21tZW50UmVwbHkiLCJyZXBseUl0ZW0iLCJjb250ZXh0VmFsdWUiLCJ1c2VDb250ZXh0IiwiY29udGV4dCIsInJlcGx5RGlzY3Vzc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50IiwiZGF0ZSIsIm5hbWUiLCJ1c2VTdGF0ZSIsImZlZWRCYWNrIiwic2V0RmVlZEJhY2siLCJoYW5kbGVGZWVkYmFjayIsInN0eWxlcyIsImZlZWRiYWNrIiwiZmVlZGJhY2tFdmVudCIsImF2YXRhclN0eWxlIiwiYXZhdGFyU20iLCJzdWJzdHJpbmciLCJuYW1lVGV4dCIsInJlcGx5Q29udGVudCIsImZlZWRiYWNrVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDdkMsTUFBTUMsWUFBWSxHQUFHQyx3REFBVSxDQUFDQyxnREFBRCxDQUEvQjtBQUR1QyxNQUUvQkMsZUFGK0IsR0FFWEgsWUFGVyxDQUUvQkcsZUFGK0I7QUFHdkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxZQUFaO0FBSHVDLGNBSVAsRUFKTztBQUFBLE1BSS9CTSxPQUorQixTQUkvQkEsT0FKK0I7QUFBQSxNQUl0QkMsSUFKc0IsU0FJdEJBLElBSnNCO0FBQUEsTUFJaEJDLElBSmdCLFNBSWhCQSxJQUpnQjs7QUFBQSxrQkFLUEMsc0RBQVEsQ0FBQyxLQUFELENBTEQ7QUFBQSxNQUtoQ0MsUUFMZ0M7QUFBQSxNQUt0QkMsV0FMc0I7O0FBTXZDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUM1QkQsZUFBVyxDQUFDLENBQUNELFFBQUYsQ0FBWDtBQUNBLEdBRkQ7O0FBSUEsU0FDQztBQUFLLGFBQVMsRUFBRUcsZ0VBQU0sQ0FBQ0M7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRUQsZ0VBQU0sQ0FBQ0U7QUFBdkIsS0FDRVAsSUFBSSxHQUNKO0FBQUssYUFBUyxFQUFFUSw0RUFBVyxDQUFDQztBQUE1QixLQUF1Q1QsSUFBSSxDQUFDVSxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixDQUF2QyxDQURJLEdBRUQsSUFITCxFQUlDLG1CQUNDO0FBQUssYUFBUyxFQUFFTCxnRUFBTSxDQUFDTTtBQUF2QixLQUNFWCxJQUFJLEdBQUcsbUJBQU1BLElBQU4sQ0FBSCxHQUF1QixJQUQ3QixFQUVFRCxJQUFJLEdBQUcsbUJBQU1BLElBQU4sQ0FBSCxHQUF1QixJQUY3QixDQURELEVBS0VELE9BQU8sR0FDUDtBQUFLLGFBQVMsRUFBRU8sZ0VBQU0sQ0FBQ087QUFBdkIsS0FBc0NkLE9BQXRDLENBRE8sR0FFSixJQVBMLEVBUUM7QUFBSyxhQUFTLEVBQUVPLGdFQUFNLENBQUNRLFlBQXZCO0FBQXFDLFdBQU8sRUFBRTtBQUFBLGFBQU1ULGNBQWMsRUFBcEI7QUFBQTtBQUE5QyxvQkFSRCxDQUpELENBREQsRUFrQkVGLFFBQVEsR0FBRyxNQUFDLDBFQUFELE9BQUgsR0FBMEIsSUFsQnBDLENBREQ7QUFzQkEsQ0FoQ0Q7O0dBQU1aLFk7O0tBQUFBLFk7QUFrQ1NBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF2YXRhclN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29tbWVudFJlcGx5Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb21tZW50UmVwbHlGb3JtIGZyb20gXCIuLi9Db21tZW50UmVwbHlGb3JtL0NvbW1lbnRSZXBseUZvcm1cIjtcbmltcG9ydCBjb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmNvbnN0IENvbW1lbnRSZXBseSA9ICh7IHJlcGx5SXRlbSB9KSA9PiB7XG5cdGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoY29udGV4dCk7XG5cdGNvbnN0IHsgcmVwbHlEaXNjdXNzaW9uIH0gPSBjb250ZXh0VmFsdWU7XG5cdGNvbnNvbGUubG9nKGNvbnRleHRWYWx1ZSk7XG5cdGNvbnN0IHsgY29udGVudCwgZGF0ZSwgbmFtZSB9ID0gXCJcIjtcblx0Y29uc3QgW2ZlZWRCYWNrLCBzZXRGZWVkQmFja10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IGhhbmRsZUZlZWRiYWNrID0gKCkgPT4ge1xuXHRcdHNldEZlZWRCYWNrKCFmZWVkQmFjayk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlZWRiYWNrfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVlZGJhY2tFdmVudH0+XG5cdFx0XHRcdHtuYW1lID8gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXthdmF0YXJTdHlsZS5hdmF0YXJTbX0+e25hbWUuc3Vic3RyaW5nKDAsIDEpfTwvZGl2PlxuXHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWVUZXh0fT5cblx0XHRcdFx0XHRcdHtuYW1lID8gPGRpdj57bmFtZX08L2Rpdj4gOiBudWxsfVxuXHRcdFx0XHRcdFx0e2RhdGUgPyA8ZGl2PntkYXRlfTwvZGl2PiA6IG51bGx9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e2NvbnRlbnQgPyAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlcGx5Q29udGVudH0+e2NvbnRlbnR9PC9kaXY+XG5cdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWVkYmFja1RleHR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUZlZWRiYWNrKCl9PlxuXHRcdFx0XHRcdFx05Zue6KaGXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7ZmVlZEJhY2sgPyA8Q29tbWVudFJlcGx5Rm9ybSAvPiA6IG51bGx9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50UmVwbHk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentReply/CommentReply.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
false

})