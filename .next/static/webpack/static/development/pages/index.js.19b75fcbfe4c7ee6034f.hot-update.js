webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Comment/Comment.js":
/*!***************************************!*\
  !*** ./components/Comment/Comment.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment.module.scss */ \"./components/Comment/Comment.module.scss\");\n/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Comment_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon/Icon */ \"./components/Icon/Icon.js\");\n/* harmony import */ var _CommentForm_CommentForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./components/CommentForm/CommentForm.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Comment = function Comment(_ref) {\n  _s();\n\n  var discussionData = _ref.discussionData;\n  var _discussionData$recor = discussionData.record,\n      content = _discussionData$recor.content,\n      date = _discussionData$recor.date,\n      name = _discussionData$recor.name,\n      reply = _discussionData$recor.reply;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      feedBack = _useState[0],\n      setFeedBack = _useState[1];\n\n  var handleFeedback = function handleFeedback() {\n    setFeedBack(!feedBack);\n  };\n\n  return __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.comment\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatarMl\n  }, name.split(\"0\")), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentWrapper\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentBox\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.nameText\n  }, __jsx(\"div\", null, name), __jsx(\"div\", null, date)), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.iconBox\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__[\"IconCheckCircle\"], null)), __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.text\n  }, \"\\u5DF2\\u89E3\\u6C7A\"))), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentBox\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentContent\n  }, content), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.lattice\n  }, \"+1\"), __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.number\n  }, \"0\"))), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.feedback\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.feedbackEvent\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatarSm\n  }, \"E\"), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.feedbackText,\n    onClick: function onClick() {\n      return handleFeedback();\n    }\n  }, \"\\u56DE\\u8986\")), feedBack ? __jsx(_CommentForm_CommentForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null) : null)));\n};\n\n_s(Comment, \"Gi8rF4E7u7p+bzY2qb87OgPCuWc=\");\n\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5qcz83MzJlIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJkaXNjdXNzaW9uRGF0YSIsInJlY29yZCIsImNvbnRlbnQiLCJkYXRlIiwibmFtZSIsInJlcGx5IiwidXNlU3RhdGUiLCJmZWVkQmFjayIsInNldEZlZWRCYWNrIiwiaGFuZGxlRmVlZGJhY2siLCJzdHlsZXMiLCJjb21tZW50IiwiYXZhdGFyU3R5bGUiLCJhdmF0YXJNbCIsInNwbGl0IiwiY29tbWVudFdyYXBwZXIiLCJjb21tZW50Qm94IiwibmFtZVRleHQiLCJyaWdodENvbnRlbnQiLCJpY29uQm94IiwidGV4dCIsImNvbW1lbnRDb250ZW50IiwibGF0dGljZSIsIm51bWJlciIsImZlZWRiYWNrIiwiZmVlZGJhY2tFdmVudCIsImF2YXRhclNtIiwiZmVlZGJhY2tUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLGNBQXFCLFFBQXJCQSxjQUFxQjtBQUFBLDhCQUNBQSxjQUFjLENBQUNDLE1BRGY7QUFBQSxNQUMvQkMsT0FEK0IseUJBQy9CQSxPQUQrQjtBQUFBLE1BQ3RCQyxJQURzQix5QkFDdEJBLElBRHNCO0FBQUEsTUFDaEJDLElBRGdCLHlCQUNoQkEsSUFEZ0I7QUFBQSxNQUNWQyxLQURVLHlCQUNWQSxLQURVOztBQUFBLGtCQUVQQyxzREFBUSxDQUFDLEtBQUQsQ0FGRDtBQUFBLE1BRWhDQyxRQUZnQztBQUFBLE1BRXRCQyxXQUZzQjs7QUFHdkMsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzVCRCxlQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0EsR0FGRDs7QUFJQSxTQUNDO0FBQUssYUFBUyxFQUFFRywyREFBTSxDQUFDQztBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFQyw0RUFBVyxDQUFDQztBQUE1QixLQUF1Q1QsSUFBSSxDQUFDVSxLQUFMLENBQVcsR0FBWCxDQUF2QyxDQURELEVBRUM7QUFBSyxhQUFTLEVBQUVKLDJEQUFNLENBQUNLO0FBQXZCLEtBQ0M7QUFBSyxhQUFTLEVBQUVMLDJEQUFNLENBQUNNO0FBQXZCLEtBQ0M7QUFBSyxhQUFTLEVBQUVOLDJEQUFNLENBQUNPO0FBQXZCLEtBQ0MsbUJBQU1iLElBQU4sQ0FERCxFQUVDLG1CQUFNRCxJQUFOLENBRkQsQ0FERCxFQUtDO0FBQUssYUFBUyxFQUFFTywyREFBTSxDQUFDUTtBQUF2QixLQUNDO0FBQU0sYUFBUyxFQUFFUiwyREFBTSxDQUFDUztBQUF4QixLQUNDLE1BQUMsMERBQUQsT0FERCxDQURELEVBSUM7QUFBTSxhQUFTLEVBQUVULDJEQUFNLENBQUNVO0FBQXhCLDBCQUpELENBTEQsQ0FERCxFQWFDO0FBQUssYUFBUyxFQUFFViwyREFBTSxDQUFDTTtBQUF2QixLQUNDO0FBQU0sYUFBUyxFQUFFTiwyREFBTSxDQUFDVztBQUF4QixLQUF5Q25CLE9BQXpDLENBREQsRUFFQztBQUFLLGFBQVMsRUFBRVEsMkRBQU0sQ0FBQ1E7QUFBdkIsS0FDQztBQUFNLGFBQVMsRUFBRVIsMkRBQU0sQ0FBQ1k7QUFBeEIsVUFERCxFQUVDO0FBQU0sYUFBUyxFQUFFWiwyREFBTSxDQUFDYTtBQUF4QixTQUZELENBRkQsQ0FiRCxFQW9CQztBQUFLLGFBQVMsRUFBRWIsMkRBQU0sQ0FBQ2M7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRWQsMkRBQU0sQ0FBQ2U7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRWIsNEVBQVcsQ0FBQ2M7QUFBNUIsU0FERCxFQUVDO0FBQ0MsYUFBUyxFQUFFaEIsMkRBQU0sQ0FBQ2lCLFlBRG5CO0FBRUMsV0FBTyxFQUFFO0FBQUEsYUFBTWxCLGNBQWMsRUFBcEI7QUFBQTtBQUZWLG9CQUZELENBREQsRUFVRUYsUUFBUSxHQUFHLE1BQUMsZ0VBQUQsT0FBSCxHQUFxQixJQVYvQixDQXBCRCxDQUZELENBREQ7QUFzQ0EsQ0E3Q0Q7O0dBQU1SLE87O0tBQUFBLE87QUErQ1NBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbW1lbnQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBhdmF0YXJTdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvYXZhdGFyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEljb25DaGVja0NpcmNsZSB9IGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tIFwiLi4vQ29tbWVudEZvcm0vQ29tbWVudEZvcm1cIjtcblxuY29uc3QgQ29tbWVudCA9ICh7IGRpc2N1c3Npb25EYXRhIH0pID0+IHtcblx0Y29uc3QgeyBjb250ZW50LCBkYXRlLCBuYW1lLCByZXBseSB9ID0gZGlzY3Vzc2lvbkRhdGEucmVjb3JkO1xuXHRjb25zdCBbZmVlZEJhY2ssIHNldEZlZWRCYWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgaGFuZGxlRmVlZGJhY2sgPSAoKSA9PiB7XG5cdFx0c2V0RmVlZEJhY2soIWZlZWRCYWNrKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YXZhdGFyU3R5bGUuYXZhdGFyTWx9PntuYW1lLnNwbGl0KFwiMFwiKX08L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudFdyYXBwZXJ9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRCb3h9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZVRleHR9PlxuXHRcdFx0XHRcdFx0PGRpdj57bmFtZX08L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXY+e2RhdGV9PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodENvbnRlbnR9PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJveH0+XG5cdFx0XHRcdFx0XHRcdDxJY29uQ2hlY2tDaXJjbGUgLz5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PuW3suino+axujwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudEJveH0+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudENvbnRlbnR9Pntjb250ZW50fTwvc3Bhbj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0Q29udGVudH0+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sYXR0aWNlfT4rMTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0+MDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVlZGJhY2t9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVlZGJhY2tFdmVudH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YXZhdGFyU3R5bGUuYXZhdGFyU219PkU8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZmVlZGJhY2tUZXh0fVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVGZWVkYmFjaygpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHTlm57opoZcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtmZWVkQmFjayA/IDxDb21tZW50Rm9ybSAvPiA6IG51bGx9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Comment/Comment.js\n");

/***/ })

})