webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Comment/Comment.js":
/*!***************************************!*\
  !*** ./components/Comment/Comment.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment.module.scss */ \"./components/Comment/Comment.module.scss\");\n/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Comment_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon/Icon */ \"./components/Icon/Icon.js\");\n/* harmony import */ var _CommentForm_CommentForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./components/CommentForm/CommentForm.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Comment = function Comment(_ref) {\n  _s();\n\n  var discussionData = _ref.discussionData;\n  var _discussionData$recor = discussionData.record,\n      content = _discussionData$recor.content,\n      date = _discussionData$recor.date,\n      name = _discussionData$recor.name,\n      reply = _discussionData$recor.reply;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      feedBack = _useState[0],\n      setFeedBack = _useState[1];\n\n  var handleFeedback = function handleFeedback() {\n    setFeedBack(!feedBack);\n  };\n\n  return __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.comment\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatarMl\n  }, name.substring(0, 1)), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentWrapper\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentBox\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.nameText\n  }, __jsx(\"div\", null, name), __jsx(\"div\", null, date)), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.iconBox\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__[\"IconCheckCircle\"], null)), __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.text\n  }, \"\\u5DF2\\u89E3\\u6C7A\"))), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentBox\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentContent\n  }, content), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.lattice\n  }, \"+1\"), __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.number\n  }, \"0\"))), reply.map(function (item, i) {\n    console.log(item);\n\n    __jsx(\"div\", {\n      className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.feedback\n    }, __jsx(\"div\", {\n      className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.feedbackEvent\n    }, __jsx(\"div\", {\n      className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatarSm\n    }, \"E\"), __jsx(\"div\", {\n      className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.feedbackText,\n      onClick: function onClick() {\n        return handleFeedback();\n      }\n    }, \"\\u56DE\\u8986\")), feedBack ? __jsx(_CommentForm_CommentForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null) : null);\n  })));\n};\n\n_s(Comment, \"Gi8rF4E7u7p+bzY2qb87OgPCuWc=\");\n\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5qcz83MzJlIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJkaXNjdXNzaW9uRGF0YSIsInJlY29yZCIsImNvbnRlbnQiLCJkYXRlIiwibmFtZSIsInJlcGx5IiwidXNlU3RhdGUiLCJmZWVkQmFjayIsInNldEZlZWRCYWNrIiwiaGFuZGxlRmVlZGJhY2siLCJzdHlsZXMiLCJjb21tZW50IiwiYXZhdGFyU3R5bGUiLCJhdmF0YXJNbCIsInN1YnN0cmluZyIsImNvbW1lbnRXcmFwcGVyIiwiY29tbWVudEJveCIsIm5hbWVUZXh0IiwicmlnaHRDb250ZW50IiwiaWNvbkJveCIsInRleHQiLCJjb21tZW50Q29udGVudCIsImxhdHRpY2UiLCJudW1iZXIiLCJtYXAiLCJpdGVtIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJmZWVkYmFjayIsImZlZWRiYWNrRXZlbnQiLCJhdmF0YXJTbSIsImZlZWRiYWNrVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUF3QjtBQUFBOztBQUFBLE1BQXJCQyxjQUFxQixRQUFyQkEsY0FBcUI7QUFBQSw4QkFDQUEsY0FBYyxDQUFDQyxNQURmO0FBQUEsTUFDL0JDLE9BRCtCLHlCQUMvQkEsT0FEK0I7QUFBQSxNQUN0QkMsSUFEc0IseUJBQ3RCQSxJQURzQjtBQUFBLE1BQ2hCQyxJQURnQix5QkFDaEJBLElBRGdCO0FBQUEsTUFDVkMsS0FEVSx5QkFDVkEsS0FEVTs7QUFBQSxrQkFFUEMsc0RBQVEsQ0FBQyxLQUFELENBRkQ7QUFBQSxNQUVoQ0MsUUFGZ0M7QUFBQSxNQUV0QkMsV0FGc0I7O0FBR3ZDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUM1QkQsZUFBVyxDQUFDLENBQUNELFFBQUYsQ0FBWDtBQUNBLEdBRkQ7O0FBSUEsU0FDQztBQUFLLGFBQVMsRUFBRUcsMkRBQU0sQ0FBQ0M7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRUMsNEVBQVcsQ0FBQ0M7QUFBNUIsS0FBdUNULElBQUksQ0FBQ1UsU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBdkMsQ0FERCxFQUVDO0FBQUssYUFBUyxFQUFFSiwyREFBTSxDQUFDSztBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFTCwyREFBTSxDQUFDTTtBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFTiwyREFBTSxDQUFDTztBQUF2QixLQUNDLG1CQUFNYixJQUFOLENBREQsRUFFQyxtQkFBTUQsSUFBTixDQUZELENBREQsRUFLQztBQUFLLGFBQVMsRUFBRU8sMkRBQU0sQ0FBQ1E7QUFBdkIsS0FDQztBQUFNLGFBQVMsRUFBRVIsMkRBQU0sQ0FBQ1M7QUFBeEIsS0FDQyxNQUFDLDBEQUFELE9BREQsQ0FERCxFQUlDO0FBQU0sYUFBUyxFQUFFVCwyREFBTSxDQUFDVTtBQUF4QiwwQkFKRCxDQUxELENBREQsRUFhQztBQUFLLGFBQVMsRUFBRVYsMkRBQU0sQ0FBQ007QUFBdkIsS0FDQztBQUFNLGFBQVMsRUFBRU4sMkRBQU0sQ0FBQ1c7QUFBeEIsS0FBeUNuQixPQUF6QyxDQURELEVBRUM7QUFBSyxhQUFTLEVBQUVRLDJEQUFNLENBQUNRO0FBQXZCLEtBQ0M7QUFBTSxhQUFTLEVBQUVSLDJEQUFNLENBQUNZO0FBQXhCLFVBREQsRUFFQztBQUFNLGFBQVMsRUFBRVosMkRBQU0sQ0FBQ2E7QUFBeEIsU0FGRCxDQUZELENBYkQsRUFvQkVsQixLQUFLLENBQUNtQixHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDdkJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaOztBQUNBO0FBQUssZUFBUyxFQUFFZiwyREFBTSxDQUFDbUI7QUFBdkIsT0FDQztBQUFLLGVBQVMsRUFBRW5CLDJEQUFNLENBQUNvQjtBQUF2QixPQUNDO0FBQUssZUFBUyxFQUFFbEIsNEVBQVcsQ0FBQ21CO0FBQTVCLFdBREQsRUFFQztBQUNDLGVBQVMsRUFBRXJCLDJEQUFNLENBQUNzQixZQURuQjtBQUVDLGFBQU8sRUFBRTtBQUFBLGVBQU12QixjQUFjLEVBQXBCO0FBQUE7QUFGVixzQkFGRCxDQURELEVBVUVGLFFBQVEsR0FBRyxNQUFDLGdFQUFELE9BQUgsR0FBcUIsSUFWL0I7QUFZQSxHQWRBLENBcEJGLENBRkQsQ0FERDtBQXlDQSxDQWhERDs7R0FBTVIsTzs7S0FBQUEsTztBQWtEU0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29tbWVudC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGF2YXRhclN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSWNvbkNoZWNrQ2lyY2xlIH0gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gXCIuLi9Db21tZW50Rm9ybS9Db21tZW50Rm9ybVwiO1xuXG5jb25zdCBDb21tZW50ID0gKHsgZGlzY3Vzc2lvbkRhdGEgfSkgPT4ge1xuXHRjb25zdCB7IGNvbnRlbnQsIGRhdGUsIG5hbWUsIHJlcGx5IH0gPSBkaXNjdXNzaW9uRGF0YS5yZWNvcmQ7XG5cdGNvbnN0IFtmZWVkQmFjaywgc2V0RmVlZEJhY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBoYW5kbGVGZWVkYmFjayA9ICgpID0+IHtcblx0XHRzZXRGZWVkQmFjayghZmVlZEJhY2spO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50fT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXthdmF0YXJTdHlsZS5hdmF0YXJNbH0+e25hbWUuc3Vic3RyaW5nKDAsIDEpfTwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50V3JhcHBlcn0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudEJveH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lVGV4dH0+XG5cdFx0XHRcdFx0XHQ8ZGl2PntuYW1lfTwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdj57ZGF0ZX08L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0Q29udGVudH0+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQm94fT5cblx0XHRcdFx0XHRcdFx0PEljb25DaGVja0NpcmNsZSAvPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+5bey6Kej5rG6PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Qm94fT5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Q29udGVudH0+e2NvbnRlbnR9PC9zcGFuPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRDb250ZW50fT5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhdHRpY2V9PisxPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT4wPC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e3JlcGx5Lm1hcCgoaXRlbSwgaSkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGl0ZW0pO1xuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVlZGJhY2t9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWVkYmFja0V2ZW50fT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2F2YXRhclN0eWxlLmF2YXRhclNtfT5FPC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5mZWVkYmFja1RleHR9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlRmVlZGJhY2soKX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdOWbnuimhlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e2ZlZWRCYWNrID8gPENvbW1lbnRGb3JtIC8+IDogbnVsbH1cblx0XHRcdFx0XHQ8L2Rpdj47XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Comment/Comment.js\n");

/***/ })

})