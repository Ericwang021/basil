webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Comment/Comment.js":
/*!***************************************!*\
  !*** ./components/Comment/Comment.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment.module.scss */ \"./components/Comment/Comment.module.scss\");\n/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Comment_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CommentReply_CommentReply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommentReply/CommentReply */ \"./components/CommentReply/CommentReply.js\");\n/* harmony import */ var _CommentReplyForm_CommentReplyForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CommentReplyForm/CommentReplyForm */ \"./components/CommentReplyForm/CommentReplyForm.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./components/context.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar Comment = function Comment(_ref) {\n  _s();\n\n  var discussion = _ref.discussion;\n  console.log(discussion, \"discussion\");\n  var record = discussion.record;\n  var name = record.name,\n      content = record.content,\n      date = record.date,\n      goodCount = record.goodCount,\n      reply = record.reply;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      replyComment = _useState[0],\n      setReplyComment = _useState[1];\n\n  return __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comment\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.avatarMl\n  }, name.substring(0, 1)), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentWrapper\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentBox\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nameText\n  }, __jsx(\"div\", null, name), __jsx(\"div\", null, date))), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentBox\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentContent\n  }, content), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lattice\n  }, \"+1\"), __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.number\n  }, goodCount))), reply.map(function (reply, index) {\n    return __jsx(_CommentReply_CommentReply__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: \"reply\".concat(index),\n      reply: reply,\n      index: index\n    });\n  }), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.replyCommentBox\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.avatarSm\n  }, name.substring(0, 1)), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.feedbackText,\n    onClick: function onClick() {\n      return setReplyComment(!replyComment);\n    }\n  }, \"\\u56DE\\u8986\")), replyComment ? __jsx(_CommentReplyForm_CommentReplyForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    setReplyComment: setReplyComment\n  }) : null));\n};\n\n_s(Comment, \"fifFE5VSlTj8p0OTtZQzza4LTjg=\");\n\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5qcz83MzJlIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJkaXNjdXNzaW9uIiwiY29uc29sZSIsImxvZyIsInJlY29yZCIsIm5hbWUiLCJjb250ZW50IiwiZGF0ZSIsImdvb2RDb3VudCIsInJlcGx5IiwidXNlU3RhdGUiLCJyZXBseUNvbW1lbnQiLCJzZXRSZXBseUNvbW1lbnQiLCJzdHlsZXMiLCJjb21tZW50IiwiYXZhdGFyU3R5bGUiLCJhdmF0YXJNbCIsInN1YnN0cmluZyIsImNvbW1lbnRXcmFwcGVyIiwiY29tbWVudEJveCIsIm5hbWVUZXh0IiwiY29tbWVudENvbnRlbnQiLCJyaWdodENvbnRlbnQiLCJsYXR0aWNlIiwibnVtYmVyIiwibWFwIiwiaW5kZXgiLCJyZXBseUNvbW1lbnRCb3giLCJhdmF0YXJTbSIsImZlZWRiYWNrVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDbkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFaLEVBQXdCLFlBQXhCO0FBRG1DLE1BRTNCRyxNQUYyQixHQUVoQkgsVUFGZ0IsQ0FFM0JHLE1BRjJCO0FBQUEsTUFHM0JDLElBSDJCLEdBR2VELE1BSGYsQ0FHM0JDLElBSDJCO0FBQUEsTUFHckJDLE9BSHFCLEdBR2VGLE1BSGYsQ0FHckJFLE9BSHFCO0FBQUEsTUFHWkMsSUFIWSxHQUdlSCxNQUhmLENBR1pHLElBSFk7QUFBQSxNQUdOQyxTQUhNLEdBR2VKLE1BSGYsQ0FHTkksU0FITTtBQUFBLE1BR0tDLEtBSEwsR0FHZUwsTUFIZixDQUdLSyxLQUhMOztBQUFBLGtCQUlLQyxzREFBUSxDQUFDLEtBQUQsQ0FKYjtBQUFBLE1BSTVCQyxZQUo0QjtBQUFBLE1BSWRDLGVBSmM7O0FBTW5DLFNBQ0M7QUFBSyxhQUFTLEVBQUVDLDJEQUFNLENBQUNDO0FBQXZCLEtBQ0M7QUFBSyxhQUFTLEVBQUVDLDRFQUFXLENBQUNDO0FBQTVCLEtBQXVDWCxJQUFJLENBQUNZLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQXZDLENBREQsRUFFQztBQUFLLGFBQVMsRUFBRUosMkRBQU0sQ0FBQ0s7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRUwsMkRBQU0sQ0FBQ007QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRU4sMkRBQU0sQ0FBQ087QUFBdkIsS0FDQyxtQkFBTWYsSUFBTixDQURELEVBRUMsbUJBQU1FLElBQU4sQ0FGRCxDQURELENBREQsRUFPQztBQUFLLGFBQVMsRUFBRU0sMkRBQU0sQ0FBQ007QUFBdkIsS0FDQztBQUFNLGFBQVMsRUFBRU4sMkRBQU0sQ0FBQ1E7QUFBeEIsS0FBeUNmLE9BQXpDLENBREQsRUFFQztBQUFLLGFBQVMsRUFBRU8sMkRBQU0sQ0FBQ1M7QUFBdkIsS0FDQztBQUFNLGFBQVMsRUFBRVQsMkRBQU0sQ0FBQ1U7QUFBeEIsVUFERCxFQUVDO0FBQU0sYUFBUyxFQUFFViwyREFBTSxDQUFDVztBQUF4QixLQUFpQ2hCLFNBQWpDLENBRkQsQ0FGRCxDQVBELEVBY0VDLEtBQUssQ0FBQ2dCLEdBQU4sQ0FBVSxVQUFDaEIsS0FBRCxFQUFRaUIsS0FBUixFQUFrQjtBQUM1QixXQUNDLE1BQUMsa0VBQUQ7QUFBYyxTQUFHLGlCQUFVQSxLQUFWLENBQWpCO0FBQW9DLFdBQUssRUFBRWpCLEtBQTNDO0FBQWtELFdBQUssRUFBRWlCO0FBQXpELE1BREQ7QUFHQSxHQUpBLENBZEYsRUFtQkM7QUFBSyxhQUFTLEVBQUViLDJEQUFNLENBQUNjO0FBQXZCLEtBQ0M7QUFBSyxhQUFTLEVBQUVaLDRFQUFXLENBQUNhO0FBQTVCLEtBQXVDdkIsSUFBSSxDQUFDWSxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixDQUF2QyxDQURELEVBRUM7QUFDQyxhQUFTLEVBQUVKLDJEQUFNLENBQUNnQixZQURuQjtBQUVDLFdBQU8sRUFBRTtBQUFBLGFBQU1qQixlQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFyQjtBQUFBO0FBRlYsb0JBRkQsQ0FuQkQsRUE2QkVBLFlBQVksR0FDWixNQUFDLDBFQUFEO0FBQWtCLG1CQUFlLEVBQUVDO0FBQW5DLElBRFksR0FFVCxJQS9CTCxDQUZELENBREQ7QUFzQ0EsQ0E1Q0Q7O0dBQU1aLE87O0tBQUFBLE87QUE4Q1NBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXZhdGFyU3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9jb21wb25lbnRzL2F2YXRhci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Db21tZW50Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb21tZW50UmVwbHkgZnJvbSBcIi4uL0NvbW1lbnRSZXBseS9Db21tZW50UmVwbHlcIjtcbmltcG9ydCBDb21tZW50UmVwbHlGb3JtIGZyb20gXCIuLi9Db21tZW50UmVwbHlGb3JtL0NvbW1lbnRSZXBseUZvcm1cIjtcbmltcG9ydCBjb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmNvbnN0IENvbW1lbnQgPSAoeyBkaXNjdXNzaW9uIH0pID0+IHtcblx0Y29uc29sZS5sb2coZGlzY3Vzc2lvbiwgXCJkaXNjdXNzaW9uXCIpO1xuXHRjb25zdCB7IHJlY29yZCB9ID0gZGlzY3Vzc2lvbjtcblx0Y29uc3QgeyBuYW1lLCBjb250ZW50LCBkYXRlLCBnb29kQ291bnQsIHJlcGx5IH0gPSByZWNvcmQ7XG5cdGNvbnN0IFtyZXBseUNvbW1lbnQsIHNldFJlcGx5Q29tbWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnR9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2F2YXRhclN0eWxlLmF2YXRhck1sfT57bmFtZS5zdWJzdHJpbmcoMCwgMSl9PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRXcmFwcGVyfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Qm94fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWVUZXh0fT5cblx0XHRcdFx0XHRcdDxkaXY+e25hbWV9PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2PntkYXRlfTwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Qm94fT5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Q29udGVudH0+e2NvbnRlbnR9PC9zcGFuPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRDb250ZW50fT5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhdHRpY2V9PisxPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT57Z29vZENvdW50fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtyZXBseS5tYXAoKHJlcGx5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8Q29tbWVudFJlcGx5IGtleT17YHJlcGx5JHtpbmRleH1gfSByZXBseT17cmVwbHl9IGluZGV4PXtpbmRleH0gLz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXBseUNvbW1lbnRCb3h9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXthdmF0YXJTdHlsZS5hdmF0YXJTbX0+e25hbWUuc3Vic3RyaW5nKDAsIDEpfTwvZGl2PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmZlZWRiYWNrVGV4dH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFJlcGx5Q29tbWVudCghcmVwbHlDb21tZW50KX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHTlm57opoZcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0e3JlcGx5Q29tbWVudCA/IChcblx0XHRcdFx0XHQ8Q29tbWVudFJlcGx5Rm9ybSBzZXRSZXBseUNvbW1lbnQ9e3NldFJlcGx5Q29tbWVudH0gLz5cblx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Comment/Comment.js\n");

/***/ })

})