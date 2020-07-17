webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Comment/Comment.js":
/*!***************************************!*\
  !*** ./components/Comment/Comment.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment.module.scss */ \"./components/Comment/Comment.module.scss\");\n/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Comment_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CommentReply_CommentReply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommentReply/CommentReply */ \"./components/CommentReply/CommentReply.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./components/context.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Comment = function Comment(_ref) {\n  var discussion = _ref.discussion;\n  console.log(discussion, \"discussion\");\n  var record = discussion.record;\n  var name = record.name,\n      content = record.content,\n      date = record.date,\n      reply = record.reply;\n  return __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comment\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.avatarMl\n  }, name.substring(0, 1)), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentWrapper\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentBox\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nameText\n  }, __jsx(\"div\", null, name), __jsx(\"div\", null, date))), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentBox\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentContent\n  }, content), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lattice\n  }, \"+1\"), __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.number\n  }, \"0\"))), __jsx(_CommentReply_CommentReply__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    key: \"reply\".concat(index),\n    replyItem: replyItem,\n    index: index\n  })));\n};\n\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5qcz83MzJlIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJkaXNjdXNzaW9uIiwiY29uc29sZSIsImxvZyIsInJlY29yZCIsIm5hbWUiLCJjb250ZW50IiwiZGF0ZSIsInJlcGx5Iiwic3R5bGVzIiwiY29tbWVudCIsImF2YXRhclN0eWxlIiwiYXZhdGFyTWwiLCJzdWJzdHJpbmciLCJjb21tZW50V3JhcHBlciIsImNvbW1lbnRCb3giLCJuYW1lVGV4dCIsImNvbW1lbnRDb250ZW50IiwicmlnaHRDb250ZW50IiwibGF0dGljZSIsIm51bWJlciIsImluZGV4IiwicmVwbHlJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDbkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFaLEVBQXdCLFlBQXhCO0FBRG1DLE1BRTNCRyxNQUYyQixHQUVoQkgsVUFGZ0IsQ0FFM0JHLE1BRjJCO0FBQUEsTUFHM0JDLElBSDJCLEdBR0lELE1BSEosQ0FHM0JDLElBSDJCO0FBQUEsTUFHckJDLE9BSHFCLEdBR0lGLE1BSEosQ0FHckJFLE9BSHFCO0FBQUEsTUFHWkMsSUFIWSxHQUdJSCxNQUhKLENBR1pHLElBSFk7QUFBQSxNQUdOQyxLQUhNLEdBR0lKLE1BSEosQ0FHTkksS0FITTtBQUtuQyxTQUNDO0FBQUssYUFBUyxFQUFFQywyREFBTSxDQUFDQztBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFQyw0RUFBVyxDQUFDQztBQUE1QixLQUF1Q1AsSUFBSSxDQUFDUSxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixDQUF2QyxDQURELEVBRUM7QUFBSyxhQUFTLEVBQUVKLDJEQUFNLENBQUNLO0FBQXZCLEtBQ0M7QUFBSyxhQUFTLEVBQUVMLDJEQUFNLENBQUNNO0FBQXZCLEtBQ0M7QUFBSyxhQUFTLEVBQUVOLDJEQUFNLENBQUNPO0FBQXZCLEtBQ0MsbUJBQU1YLElBQU4sQ0FERCxFQUVDLG1CQUFNRSxJQUFOLENBRkQsQ0FERCxDQURELEVBT0M7QUFBSyxhQUFTLEVBQUVFLDJEQUFNLENBQUNNO0FBQXZCLEtBQ0M7QUFBTSxhQUFTLEVBQUVOLDJEQUFNLENBQUNRO0FBQXhCLEtBQXlDWCxPQUF6QyxDQURELEVBRUM7QUFBSyxhQUFTLEVBQUVHLDJEQUFNLENBQUNTO0FBQXZCLEtBQ0M7QUFBTSxhQUFTLEVBQUVULDJEQUFNLENBQUNVO0FBQXhCLFVBREQsRUFFQztBQUFNLGFBQVMsRUFBRVYsMkRBQU0sQ0FBQ1c7QUFBeEIsU0FGRCxDQUZELENBUEQsRUFjQyxNQUFDLGtFQUFEO0FBQ0MsT0FBRyxpQkFBVUMsS0FBVixDQURKO0FBRUMsYUFBUyxFQUFFQyxTQUZaO0FBR0MsU0FBSyxFQUFFRDtBQUhSLElBZEQsQ0FGRCxDQUREO0FBeUJBLENBOUJEOztLQUFNckIsTztBQWdDU0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdmF0YXJTdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvYXZhdGFyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbW1lbnQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbW1lbnRSZXBseSBmcm9tIFwiLi4vQ29tbWVudFJlcGx5L0NvbW1lbnRSZXBseVwiO1xuaW1wb3J0IGNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuY29uc3QgQ29tbWVudCA9ICh7IGRpc2N1c3Npb24gfSkgPT4ge1xuXHRjb25zb2xlLmxvZyhkaXNjdXNzaW9uLCBcImRpc2N1c3Npb25cIik7XG5cdGNvbnN0IHsgcmVjb3JkIH0gPSBkaXNjdXNzaW9uO1xuXHRjb25zdCB7IG5hbWUsIGNvbnRlbnQsIGRhdGUsIHJlcGx5IH0gPSByZWNvcmQ7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnR9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2F2YXRhclN0eWxlLmF2YXRhck1sfT57bmFtZS5zdWJzdHJpbmcoMCwgMSl9PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRXcmFwcGVyfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Qm94fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWVUZXh0fT5cblx0XHRcdFx0XHRcdDxkaXY+e25hbWV9PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2PntkYXRlfTwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Qm94fT5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Q29udGVudH0+e2NvbnRlbnR9PC9zcGFuPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRDb250ZW50fT5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhdHRpY2V9PisxPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT4wPC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PENvbW1lbnRSZXBseVxuXHRcdFx0XHRcdGtleT17YHJlcGx5JHtpbmRleH1gfVxuXHRcdFx0XHRcdHJlcGx5SXRlbT17cmVwbHlJdGVtfVxuXHRcdFx0XHRcdGluZGV4PXtpbmRleH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Comment/Comment.js\n");

/***/ })

})