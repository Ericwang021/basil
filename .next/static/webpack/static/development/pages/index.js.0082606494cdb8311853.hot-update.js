webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Comment/Comment.js":
/*!***************************************!*\
  !*** ./components/Comment/Comment.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment.module.scss */ \"./components/Comment/Comment.module.scss\");\n/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Comment_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CommentReply_CommentReply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommentReply/CommentReply */ \"./components/CommentReply/CommentReply.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./components/context.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Comment = function Comment() {\n  _s();\n\n  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  console.log(contextValue);\n  var discussionList = contextValue.discussionList;\n  var _discussionList$recor = discussionList.record,\n      record = _discussionList$recor === void 0 ? {} : _discussionList$recor;\n  var _record$name = record.name,\n      name = _record$name === void 0 ? \"\" : _record$name,\n      _record$content = record.content,\n      content = _record$content === void 0 ? \"\" : _record$content,\n      _record$date = record.date,\n      date = _record$date === void 0 ? \"\" : _record$date;\n  console.log(record);\n  return __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comment\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.avatarMl\n  }, name.substring(0, 1)), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentWrapper\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentBox\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nameText\n  }, __jsx(\"div\", null, name), __jsx(\"div\", null, date))), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentBox\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentContent\n  }, content), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lattice\n  }, \"+1\"), __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.number\n  }, \"0\")))));\n};\n\n_s(Comment, \"LIxFXvZbUdXE/TWxKLLXMjM3Mig=\");\n\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5qcz83MzJlIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJjb250ZXh0VmFsdWUiLCJ1c2VDb250ZXh0IiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJkaXNjdXNzaW9uTGlzdCIsInJlY29yZCIsIm5hbWUiLCJjb250ZW50IiwiZGF0ZSIsInN0eWxlcyIsImNvbW1lbnQiLCJhdmF0YXJTdHlsZSIsImF2YXRhck1sIiwic3Vic3RyaW5nIiwiY29tbWVudFdyYXBwZXIiLCJjb21tZW50Qm94IiwibmFtZVRleHQiLCJjb21tZW50Q29udGVudCIsInJpZ2h0Q29udGVudCIsImxhdHRpY2UiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxZQUFZLEdBQUdDLHdEQUFVLENBQUNDLGdEQUFELENBQS9CO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixZQUFaO0FBRnFCLE1BR2JLLGNBSGEsR0FHTUwsWUFITixDQUdiSyxjQUhhO0FBQUEsOEJBSUdBLGNBSkgsQ0FJYkMsTUFKYTtBQUFBLE1BSWJBLE1BSmEsc0NBSUosRUFKSTtBQUFBLHFCQUswQkEsTUFMMUIsQ0FLYkMsSUFMYTtBQUFBLE1BS2JBLElBTGEsNkJBS04sRUFMTTtBQUFBLHdCQUswQkQsTUFMMUIsQ0FLRkUsT0FMRTtBQUFBLE1BS0ZBLE9BTEUsZ0NBS1EsRUFMUjtBQUFBLHFCQUswQkYsTUFMMUIsQ0FLWUcsSUFMWjtBQUFBLE1BS1lBLElBTFosNkJBS21CLEVBTG5CO0FBTXJCTixTQUFPLENBQUNDLEdBQVIsQ0FBWUUsTUFBWjtBQUNBLFNBQ0M7QUFBSyxhQUFTLEVBQUVJLDJEQUFNLENBQUNDO0FBQXZCLEtBQ0M7QUFBSyxhQUFTLEVBQUVDLDRFQUFXLENBQUNDO0FBQTVCLEtBQXVDTixJQUFJLENBQUNPLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQXZDLENBREQsRUFFQztBQUFLLGFBQVMsRUFBRUosMkRBQU0sQ0FBQ0s7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRUwsMkRBQU0sQ0FBQ007QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRU4sMkRBQU0sQ0FBQ087QUFBdkIsS0FDQyxtQkFBTVYsSUFBTixDQURELEVBRUMsbUJBQU1FLElBQU4sQ0FGRCxDQURELENBREQsRUFPQztBQUFLLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ007QUFBdkIsS0FDQztBQUFNLGFBQVMsRUFBRU4sMkRBQU0sQ0FBQ1E7QUFBeEIsS0FBeUNWLE9BQXpDLENBREQsRUFFQztBQUFLLGFBQVMsRUFBRUUsMkRBQU0sQ0FBQ1M7QUFBdkIsS0FDQztBQUFNLGFBQVMsRUFBRVQsMkRBQU0sQ0FBQ1U7QUFBeEIsVUFERCxFQUVDO0FBQU0sYUFBUyxFQUFFViwyREFBTSxDQUFDVztBQUF4QixTQUZELENBRkQsQ0FQRCxDQUZELENBREQ7QUF5QkEsQ0FoQ0Q7O0dBQU10QixPOztLQUFBQSxPO0FBa0NTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF2YXRhclN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29tbWVudC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29tbWVudFJlcGx5IGZyb20gXCIuLi9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5XCI7XG5pbXBvcnQgY29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCBDb21tZW50ID0gKCkgPT4ge1xuXHRjb25zdCBjb250ZXh0VmFsdWUgPSB1c2VDb250ZXh0KGNvbnRleHQpO1xuXHRjb25zb2xlLmxvZyhjb250ZXh0VmFsdWUpO1xuXHRjb25zdCB7IGRpc2N1c3Npb25MaXN0IH0gPSBjb250ZXh0VmFsdWU7XG5cdGNvbnN0IHsgcmVjb3JkID0ge30gfSA9IGRpc2N1c3Npb25MaXN0O1xuXHRjb25zdCB7IG5hbWUgPSBcIlwiLCBjb250ZW50ID0gXCJcIiwgZGF0ZSA9IFwiXCIgfSA9IHJlY29yZDtcblx0Y29uc29sZS5sb2cocmVjb3JkKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnR9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2F2YXRhclN0eWxlLmF2YXRhck1sfT57bmFtZS5zdWJzdHJpbmcoMCwgMSl9PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRXcmFwcGVyfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Qm94fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWVUZXh0fT5cblx0XHRcdFx0XHRcdDxkaXY+e25hbWV9PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2PntkYXRlfTwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Qm94fT5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Q29udGVudH0+e2NvbnRlbnR9PC9zcGFuPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRDb250ZW50fT5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhdHRpY2V9PisxPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT4wPC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0ey8qIDxDb21tZW50UmVwbHlcblx0XHRcdFx0XHRrZXk9e2ByZXBseSR7aW5kZXh9YH1cblx0XHRcdFx0XHRyZXBseUl0ZW09e3JlcGx5SXRlbX1cblx0XHRcdFx0XHRpbmRleD17aW5kZXh9XG5cdFx0XHRcdC8+ICovfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Comment/Comment.js\n");

/***/ })

})