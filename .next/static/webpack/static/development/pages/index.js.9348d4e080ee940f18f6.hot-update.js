webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Comment/Comment.js":
/*!***************************************!*\
  !*** ./components/Comment/Comment.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ \"./node_modules/@babel/runtime/helpers/esm/toArray.js\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment.module.scss */ \"./components/Comment/Comment.module.scss\");\n/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Comment_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CommentReply_CommentReply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CommentReply/CommentReply */ \"./components/CommentReply/CommentReply.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\nvar Comment = function Comment(_ref) {\n  var discussionData = _ref.discussionData,\n      discussionListData = _ref.discussionListData;\n  var _discussionData$recor = discussionData.record,\n      record = _discussionData$recor === void 0 ? {} : _discussionData$recor;\n\n  var _record$name = record.name,\n      name = _record$name === void 0 ? \"\" : _record$name,\n      _record$content = record.content,\n      content = _record$content === void 0 ? \"\" : _record$content,\n      _record$date = record.date,\n      date = _record$date === void 0 ? \"\" : _record$date,\n      _record$reply = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(record.reply);\n\n  return __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment\n  }, name ? __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatarMl\n  }, name.substring(0, 1)) : null, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.commentWrapper\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.commentBox\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nameText\n  }, name ? __jsx(\"div\", null, name) : null, date ? __jsx(\"div\", null, date) : null)), content ? __jsx(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.commentBox\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.commentContent\n  }, content), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.lattice\n  }, \"+1\"), __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.number\n  }, \"0\"))), reply.map, __jsx(_CommentReply_CommentReply__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)) : null));\n};\n\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5qcz83MzJlIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJkaXNjdXNzaW9uRGF0YSIsImRpc2N1c3Npb25MaXN0RGF0YSIsInJlY29yZCIsIm5hbWUiLCJjb250ZW50IiwiZGF0ZSIsInJlcGx5Iiwic3R5bGVzIiwiY29tbWVudCIsImF2YXRhclN0eWxlIiwiYXZhdGFyTWwiLCJzdWJzdHJpbmciLCJjb21tZW50V3JhcHBlciIsImNvbW1lbnRCb3giLCJuYW1lVGV4dCIsImNvbW1lbnRDb250ZW50IiwicmlnaHRDb250ZW50IiwibGF0dGljZSIsIm51bWJlciIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUE0QztBQUFBLE1BQXpDQyxjQUF5QyxRQUF6Q0EsY0FBeUM7QUFBQSxNQUF6QkMsa0JBQXlCLFFBQXpCQSxrQkFBeUI7QUFBQSw4QkFDbkNELGNBRG1DLENBQ25ERSxNQURtRDtBQUFBLE1BQ25EQSxNQURtRCxzQ0FDMUMsRUFEMEM7O0FBQUEscUJBT3ZEQSxNQVB1RCxDQUcxREMsSUFIMEQ7QUFBQSxNQUcxREEsSUFIMEQsNkJBR25ELEVBSG1EO0FBQUEsd0JBT3ZERCxNQVB1RCxDQUkxREUsT0FKMEQ7QUFBQSxNQUkxREEsT0FKMEQsZ0NBSWhELEVBSmdEO0FBQUEscUJBT3ZERixNQVB1RCxDQUsxREcsSUFMMEQ7QUFBQSxNQUsxREEsSUFMMEQsNkJBS25ELEVBTG1EO0FBQUEseUdBT3ZESCxNQVB1RCxDQU0xREksS0FOMEQ7O0FBUzNELFNBQ0M7QUFBSyxhQUFTLEVBQUVDLDJEQUFNLENBQUNDO0FBQXZCLEtBQ0VMLElBQUksR0FDSjtBQUFLLGFBQVMsRUFBRU0sNEVBQVcsQ0FBQ0M7QUFBNUIsS0FBdUNQLElBQUksQ0FBQ1EsU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBdkMsQ0FESSxHQUVELElBSEwsRUFJQztBQUFLLGFBQVMsRUFBRUosMkRBQU0sQ0FBQ0s7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRUwsMkRBQU0sQ0FBQ007QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRU4sMkRBQU0sQ0FBQ087QUFBdkIsS0FDRVgsSUFBSSxHQUFHLG1CQUFNQSxJQUFOLENBQUgsR0FBdUIsSUFEN0IsRUFFRUUsSUFBSSxHQUFHLG1CQUFNQSxJQUFOLENBQUgsR0FBdUIsSUFGN0IsQ0FERCxDQURELEVBT0VELE9BQU8sR0FDUCxNQUFDLDhDQUFELFFBQ0M7QUFBSyxhQUFTLEVBQUVHLDJEQUFNLENBQUNNO0FBQXZCLEtBQ0M7QUFBTSxhQUFTLEVBQUVOLDJEQUFNLENBQUNRO0FBQXhCLEtBQXlDWCxPQUF6QyxDQURELEVBRUM7QUFBSyxhQUFTLEVBQUVHLDJEQUFNLENBQUNTO0FBQXZCLEtBQ0M7QUFBTSxhQUFTLEVBQUVULDJEQUFNLENBQUNVO0FBQXhCLFVBREQsRUFFQztBQUFNLGFBQVMsRUFBRVYsMkRBQU0sQ0FBQ1c7QUFBeEIsU0FGRCxDQUZELENBREQsRUFRRVosS0FBSyxDQUFDYSxHQVJSLEVBU0MsTUFBQyxrRUFBRCxPQVRELENBRE8sR0FZSixJQW5CTCxDQUpELENBREQ7QUE0QkEsQ0FyQ0Q7O0tBQU1wQixPO0FBdUNTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF2YXRhclN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29tbWVudC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29tbWVudFJlcGx5IGZyb20gXCIuLi9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5XCI7XG5cbmNvbnN0IENvbW1lbnQgPSAoeyBkaXNjdXNzaW9uRGF0YSwgZGlzY3Vzc2lvbkxpc3REYXRhIH0pID0+IHtcblx0Y29uc3QgeyByZWNvcmQgPSB7fSB9ID0gZGlzY3Vzc2lvbkRhdGE7XG5cdGNvbnN0IHtcblx0XHRuYW1lID0gXCJcIixcblx0XHRjb250ZW50ID0gXCJcIixcblx0XHRkYXRlID0gXCJcIixcblx0XHRyZXBseTogW10sXG5cdH0gPSByZWNvcmQ7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnR9PlxuXHRcdFx0e25hbWUgPyAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXthdmF0YXJTdHlsZS5hdmF0YXJNbH0+e25hbWUuc3Vic3RyaW5nKDAsIDEpfTwvZGl2PlxuXHRcdFx0KSA6IG51bGx9XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRXcmFwcGVyfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Qm94fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWVUZXh0fT5cblx0XHRcdFx0XHRcdHtuYW1lID8gPGRpdj57bmFtZX08L2Rpdj4gOiBudWxsfVxuXHRcdFx0XHRcdFx0e2RhdGUgPyA8ZGl2PntkYXRlfTwvZGl2PiA6IG51bGx9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7Y29udGVudCA/IChcblx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRCb3h9PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Q29udGVudH0+e2NvbnRlbnR9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0Q29udGVudH0+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGF0dGljZX0+KzE8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT4wPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e3JlcGx5Lm1hcH1cblx0XHRcdFx0XHRcdDxDb21tZW50UmVwbHkgLz5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Comment/Comment.js\n");

/***/ })

})