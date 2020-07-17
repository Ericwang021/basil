webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Comment/Comment.js":
/*!***************************************!*\
  !*** ./components/Comment/Comment.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment.module.scss */ \"./components/Comment/Comment.module.scss\");\n/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Comment_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CommentReply_CommentReply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommentReply/CommentReply */ \"./components/CommentReply/CommentReply.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./components/context.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Comment = function Comment(_ref) {\n  _s();\n\n  var index = _ref.index;\n  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  console.log(contextValue);\n  var discussionList = contextValue.discussionList;\n  var _discussionList$recor = discussionList.record[index],\n      name = _discussionList$recor.name,\n      content = _discussionList$recor.content,\n      date = _discussionList$recor.date;\n  return __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comment\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.avatarMl\n  }, name.substring(0, 1)), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentWrapper\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentBox\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nameText\n  }, __jsx(\"div\", null, name), __jsx(\"div\", null, date))), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentBox\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentContent\n  }, content), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lattice\n  }, \"+1\"), __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.number\n  }, \"0\")))));\n};\n\n_s(Comment, \"LIxFXvZbUdXE/TWxKLLXMjM3Mig=\");\n\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5qcz83MzJlIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJpbmRleCIsImNvbnRleHRWYWx1ZSIsInVzZUNvbnRleHQiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsImRpc2N1c3Npb25MaXN0IiwicmVjb3JkIiwibmFtZSIsImNvbnRlbnQiLCJkYXRlIiwic3R5bGVzIiwiY29tbWVudCIsImF2YXRhclN0eWxlIiwiYXZhdGFyTWwiLCJzdWJzdHJpbmciLCJjb21tZW50V3JhcHBlciIsImNvbW1lbnRCb3giLCJuYW1lVGV4dCIsImNvbW1lbnRDb250ZW50IiwicmlnaHRDb250ZW50IiwibGF0dGljZSIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQzlCLE1BQU1DLFlBQVksR0FBR0Msd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FBL0I7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFlBQVo7QUFGOEIsTUFHdEJLLGNBSHNCLEdBR0hMLFlBSEcsQ0FHdEJLLGNBSHNCO0FBQUEsOEJBSUVBLGNBQWMsQ0FBQ0MsTUFBZixDQUFzQlAsS0FBdEIsQ0FKRjtBQUFBLE1BSXRCUSxJQUpzQix5QkFJdEJBLElBSnNCO0FBQUEsTUFJaEJDLE9BSmdCLHlCQUloQkEsT0FKZ0I7QUFBQSxNQUlQQyxJQUpPLHlCQUlQQSxJQUpPO0FBTTlCLFNBQ0M7QUFBSyxhQUFTLEVBQUVDLDJEQUFNLENBQUNDO0FBQXZCLEtBQ0M7QUFBSyxhQUFTLEVBQUVDLDRFQUFXLENBQUNDO0FBQTVCLEtBQXVDTixJQUFJLENBQUNPLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQXZDLENBREQsRUFFQztBQUFLLGFBQVMsRUFBRUosMkRBQU0sQ0FBQ0s7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRUwsMkRBQU0sQ0FBQ007QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRU4sMkRBQU0sQ0FBQ087QUFBdkIsS0FDQyxtQkFBTVYsSUFBTixDQURELEVBRUMsbUJBQU1FLElBQU4sQ0FGRCxDQURELENBREQsRUFPQztBQUFLLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ007QUFBdkIsS0FDQztBQUFNLGFBQVMsRUFBRU4sMkRBQU0sQ0FBQ1E7QUFBeEIsS0FBeUNWLE9BQXpDLENBREQsRUFFQztBQUFLLGFBQVMsRUFBRUUsMkRBQU0sQ0FBQ1M7QUFBdkIsS0FDQztBQUFNLGFBQVMsRUFBRVQsMkRBQU0sQ0FBQ1U7QUFBeEIsVUFERCxFQUVDO0FBQU0sYUFBUyxFQUFFViwyREFBTSxDQUFDVztBQUF4QixTQUZELENBRkQsQ0FQRCxDQUZELENBREQ7QUF5QkEsQ0EvQkQ7O0dBQU12QixPOztLQUFBQSxPO0FBaUNTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF2YXRhclN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29tbWVudC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29tbWVudFJlcGx5IGZyb20gXCIuLi9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5XCI7XG5pbXBvcnQgY29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCBDb21tZW50ID0gKHsgaW5kZXggfSkgPT4ge1xuXHRjb25zdCBjb250ZXh0VmFsdWUgPSB1c2VDb250ZXh0KGNvbnRleHQpO1xuXHRjb25zb2xlLmxvZyhjb250ZXh0VmFsdWUpO1xuXHRjb25zdCB7IGRpc2N1c3Npb25MaXN0IH0gPSBjb250ZXh0VmFsdWU7XG5cdGNvbnN0IHsgbmFtZSwgY29udGVudCwgZGF0ZSB9ID0gZGlzY3Vzc2lvbkxpc3QucmVjb3JkW2luZGV4XTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YXZhdGFyU3R5bGUuYXZhdGFyTWx9PntuYW1lLnN1YnN0cmluZygwLCAxKX08L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudFdyYXBwZXJ9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRCb3h9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZVRleHR9PlxuXHRcdFx0XHRcdFx0PGRpdj57bmFtZX08L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXY+e2RhdGV9PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRCb3h9PlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRDb250ZW50fT57Y29udGVudH08L3NwYW4+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodENvbnRlbnR9PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGF0dGljZX0+KzE8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9PjA8L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7LyogPENvbW1lbnRSZXBseVxuXHRcdFx0XHRcdGtleT17YHJlcGx5JHtpbmRleH1gfVxuXHRcdFx0XHRcdHJlcGx5SXRlbT17cmVwbHlJdGVtfVxuXHRcdFx0XHRcdGluZGV4PXtpbmRleH1cblx0XHRcdFx0Lz4gKi99XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Comment/Comment.js\n");

/***/ })

})