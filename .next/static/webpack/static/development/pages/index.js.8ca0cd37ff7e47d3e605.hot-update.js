webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CommentList/Comment/Comment.js":
/*!***************************************************!*\
  !*** ./components/CommentList/Comment/Comment.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment.module.scss */ \"./components/CommentList/Comment/Comment.module.scss\");\n/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Comment_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ReplyRecord_ReplyRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ReplyRecord/ReplyRecord */ \"./components/CommentList/ReplyRecord/ReplyRecord.js\");\n/* harmony import */ var _ReplyRecordForm_ReplyRecordForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ReplyRecordForm/ReplyRecordForm */ \"./components/CommentList/ReplyRecordForm/ReplyRecordForm.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Comment = function Comment(_ref) {\n  _s();\n\n  var discussion = _ref.discussion;\n  console.log(discussion, \"discussion\");\n  var record = discussion.record;\n  var name = record.name,\n      content = record.content,\n      date = record.date,\n      goodCount = record.goodCount,\n      reply = record.reply;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      replyComment = _useState[0],\n      setReplyComment = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      clickedAddOne = _useState2[0],\n      setClickedAddOne = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(goodCount),\n      clickedGoodCount = _useState3[0],\n      setClickedGoodCount = _useState3[1];\n\n  var clickedLattice = function clickedLattice() {\n    clickedAddOne ? setClickedGoodCount(clickedGoodCount - 1) : setClickedGoodCount(clickedGoodCount + 1);\n    setClickedAddOne(!clickedAddOne);\n  };\n\n  return __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comment\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.avatarMl\n  }, name.substring(0, 1)), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentWrapper\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentBox\n  }, __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nameText\n  }, __jsx(\"div\", null, name), __jsx(\"div\", null, date))), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentBox\n  }, __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentContent\n  }, content), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: clickedAddOne ? _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lattice : _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.clicked,\n    onClick: clickedLattice\n  }, \"+1\"), __jsx(\"span\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.number\n  }, clickedGoodCount))), reply.map(function (reply, index) {\n    return __jsx(_ReplyRecord_ReplyRecord__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: \"reply\".concat(index),\n      reply: reply,\n      index: index\n    });\n  }), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.replyCommentBox\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.avatarSm\n  }, name.substring(0, 1)), __jsx(\"div\", {\n    className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.feedbackText,\n    onClick: function onClick() {\n      return setReplyComment(!replyComment);\n    }\n  }, \"\\u56DE\\u8986\")), replyComment ? __jsx(_ReplyRecordForm_ReplyRecordForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    setReplyComment: setReplyComment\n  }) : null));\n};\n\n_s(Comment, \"r7NWmHtleXikGI2/anf2Ve4GGto=\");\n\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRMaXN0L0NvbW1lbnQvQ29tbWVudC5qcz83N2Q1Il0sIm5hbWVzIjpbIkNvbW1lbnQiLCJkaXNjdXNzaW9uIiwiY29uc29sZSIsImxvZyIsInJlY29yZCIsIm5hbWUiLCJjb250ZW50IiwiZGF0ZSIsImdvb2RDb3VudCIsInJlcGx5IiwidXNlU3RhdGUiLCJyZXBseUNvbW1lbnQiLCJzZXRSZXBseUNvbW1lbnQiLCJjbGlja2VkQWRkT25lIiwic2V0Q2xpY2tlZEFkZE9uZSIsImNsaWNrZWRHb29kQ291bnQiLCJzZXRDbGlja2VkR29vZENvdW50IiwiY2xpY2tlZExhdHRpY2UiLCJzdHlsZXMiLCJjb21tZW50IiwiYXZhdGFyU3R5bGUiLCJhdmF0YXJNbCIsInN1YnN0cmluZyIsImNvbW1lbnRXcmFwcGVyIiwiY29tbWVudEJveCIsIm5hbWVUZXh0IiwiY29tbWVudENvbnRlbnQiLCJyaWdodENvbnRlbnQiLCJsYXR0aWNlIiwiY2xpY2tlZCIsIm51bWJlciIsIm1hcCIsImluZGV4IiwicmVwbHlDb21tZW50Qm94IiwiYXZhdGFyU20iLCJmZWVkYmFja1RleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQ25DQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWixFQUF3QixZQUF4QjtBQURtQyxNQUUzQkcsTUFGMkIsR0FFaEJILFVBRmdCLENBRTNCRyxNQUYyQjtBQUFBLE1BRzNCQyxJQUgyQixHQUdlRCxNQUhmLENBRzNCQyxJQUgyQjtBQUFBLE1BR3JCQyxPQUhxQixHQUdlRixNQUhmLENBR3JCRSxPQUhxQjtBQUFBLE1BR1pDLElBSFksR0FHZUgsTUFIZixDQUdaRyxJQUhZO0FBQUEsTUFHTkMsU0FITSxHQUdlSixNQUhmLENBR05JLFNBSE07QUFBQSxNQUdLQyxLQUhMLEdBR2VMLE1BSGYsQ0FHS0ssS0FITDs7QUFBQSxrQkFJS0Msc0RBQVEsQ0FBQyxLQUFELENBSmI7QUFBQSxNQUk1QkMsWUFKNEI7QUFBQSxNQUlkQyxlQUpjOztBQUFBLG1CQUtPRixzREFBUSxDQUFDLEtBQUQsQ0FMZjtBQUFBLE1BSzVCRyxhQUw0QjtBQUFBLE1BS2JDLGdCQUxhOztBQUFBLG1CQU1hSixzREFBUSxDQUFDRixTQUFELENBTnJCO0FBQUEsTUFNNUJPLGdCQU40QjtBQUFBLE1BTVZDLG1CQU5VOztBQVFuQyxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDNUJKLGlCQUFhLEdBQ1ZHLG1CQUFtQixDQUFDRCxnQkFBZ0IsR0FBRyxDQUFwQixDQURULEdBRVZDLG1CQUFtQixDQUFDRCxnQkFBZ0IsR0FBRyxDQUFwQixDQUZ0QjtBQUdBRCxvQkFBZ0IsQ0FBQyxDQUFDRCxhQUFGLENBQWhCO0FBQ0EsR0FMRDs7QUFNQSxTQUNDO0FBQUssYUFBUyxFQUFFSywyREFBTSxDQUFDQztBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFQyw0RUFBVyxDQUFDQztBQUE1QixLQUF1Q2hCLElBQUksQ0FBQ2lCLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQXZDLENBREQsRUFFQztBQUFLLGFBQVMsRUFBRUosMkRBQU0sQ0FBQ0s7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRUwsMkRBQU0sQ0FBQ007QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRU4sMkRBQU0sQ0FBQ087QUFBdkIsS0FDQyxtQkFBTXBCLElBQU4sQ0FERCxFQUVDLG1CQUFNRSxJQUFOLENBRkQsQ0FERCxDQURELEVBT0M7QUFBSyxhQUFTLEVBQUVXLDJEQUFNLENBQUNNO0FBQXZCLEtBQ0M7QUFBTSxhQUFTLEVBQUVOLDJEQUFNLENBQUNRO0FBQXhCLEtBQXlDcEIsT0FBekMsQ0FERCxFQUVDO0FBQUssYUFBUyxFQUFFWSwyREFBTSxDQUFDUztBQUF2QixLQUNDO0FBQ0MsYUFBUyxFQUFFZCxhQUFhLEdBQUdLLDJEQUFNLENBQUNVLE9BQVYsR0FBb0JWLDJEQUFNLENBQUNXLE9BRHBEO0FBRUMsV0FBTyxFQUFFWjtBQUZWLFVBREQsRUFPQztBQUFNLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ1k7QUFBeEIsS0FBaUNmLGdCQUFqQyxDQVBELENBRkQsQ0FQRCxFQW1CRU4sS0FBSyxDQUFDc0IsR0FBTixDQUFVLFVBQUN0QixLQUFELEVBQVF1QixLQUFSLEVBQWtCO0FBQzVCLFdBQ0MsTUFBQyxnRUFBRDtBQUFhLFNBQUcsaUJBQVVBLEtBQVYsQ0FBaEI7QUFBbUMsV0FBSyxFQUFFdkIsS0FBMUM7QUFBaUQsV0FBSyxFQUFFdUI7QUFBeEQsTUFERDtBQUdBLEdBSkEsQ0FuQkYsRUF3QkM7QUFBSyxhQUFTLEVBQUVkLDJEQUFNLENBQUNlO0FBQXZCLEtBQ0M7QUFBSyxhQUFTLEVBQUViLDRFQUFXLENBQUNjO0FBQTVCLEtBQXVDN0IsSUFBSSxDQUFDaUIsU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBdkMsQ0FERCxFQUVDO0FBQ0MsYUFBUyxFQUFFSiwyREFBTSxDQUFDaUIsWUFEbkI7QUFFQyxXQUFPLEVBQUU7QUFBQSxhQUFNdkIsZUFBZSxDQUFDLENBQUNELFlBQUYsQ0FBckI7QUFBQTtBQUZWLG9CQUZELENBeEJELEVBa0NFQSxZQUFZLEdBQ1osTUFBQyx3RUFBRDtBQUFpQixtQkFBZSxFQUFFQztBQUFsQyxJQURZLEdBRVQsSUFwQ0wsQ0FGRCxDQUREO0FBMkNBLENBekREOztHQUFNWixPOztLQUFBQSxPO0FBMkRTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbWVudExpc3QvQ29tbWVudC9Db21tZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF2YXRhclN0eWxlIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29tbWVudC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVwbHlSZWNvcmQgZnJvbSBcIi4uL1JlcGx5UmVjb3JkL1JlcGx5UmVjb3JkXCI7XG5pbXBvcnQgUmVwbHlSZWNvcmRGb3JtIGZyb20gXCIuLi9SZXBseVJlY29yZEZvcm0vUmVwbHlSZWNvcmRGb3JtXCI7XG5cbmNvbnN0IENvbW1lbnQgPSAoeyBkaXNjdXNzaW9uIH0pID0+IHtcblx0Y29uc29sZS5sb2coZGlzY3Vzc2lvbiwgXCJkaXNjdXNzaW9uXCIpO1xuXHRjb25zdCB7IHJlY29yZCB9ID0gZGlzY3Vzc2lvbjtcblx0Y29uc3QgeyBuYW1lLCBjb250ZW50LCBkYXRlLCBnb29kQ291bnQsIHJlcGx5IH0gPSByZWNvcmQ7XG5cdGNvbnN0IFtyZXBseUNvbW1lbnQsIHNldFJlcGx5Q29tbWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtjbGlja2VkQWRkT25lLCBzZXRDbGlja2VkQWRkT25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2NsaWNrZWRHb29kQ291bnQsIHNldENsaWNrZWRHb29kQ291bnRdID0gdXNlU3RhdGUoZ29vZENvdW50KTtcblxuXHRjb25zdCBjbGlja2VkTGF0dGljZSA9ICgpID0+IHtcblx0XHRjbGlja2VkQWRkT25lXG5cdFx0XHQ/IHNldENsaWNrZWRHb29kQ291bnQoY2xpY2tlZEdvb2RDb3VudCAtIDEpXG5cdFx0XHQ6IHNldENsaWNrZWRHb29kQ291bnQoY2xpY2tlZEdvb2RDb3VudCArIDEpO1xuXHRcdHNldENsaWNrZWRBZGRPbmUoIWNsaWNrZWRBZGRPbmUpO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YXZhdGFyU3R5bGUuYXZhdGFyTWx9PntuYW1lLnN1YnN0cmluZygwLCAxKX08L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudFdyYXBwZXJ9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRCb3h9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZVRleHR9PlxuXHRcdFx0XHRcdFx0PGRpdj57bmFtZX08L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXY+e2RhdGV9PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRCb3h9PlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRDb250ZW50fT57Y29udGVudH08L3NwYW4+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodENvbnRlbnR9PlxuXHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGlja2VkQWRkT25lID8gc3R5bGVzLmxhdHRpY2UgOiBzdHlsZXMuY2xpY2tlZH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17Y2xpY2tlZExhdHRpY2V9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdCsxXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9PntjbGlja2VkR29vZENvdW50fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtyZXBseS5tYXAoKHJlcGx5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8UmVwbHlSZWNvcmQga2V5PXtgcmVwbHkke2luZGV4fWB9IHJlcGx5PXtyZXBseX0gaW5kZXg9e2luZGV4fSAvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlcGx5Q29tbWVudEJveH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2F2YXRhclN0eWxlLmF2YXRhclNtfT57bmFtZS5zdWJzdHJpbmcoMCwgMSl9PC9kaXY+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZmVlZGJhY2tUZXh0fVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0UmVwbHlDb21tZW50KCFyZXBseUNvbW1lbnQpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdOWbnuimhlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHR7cmVwbHlDb21tZW50ID8gKFxuXHRcdFx0XHRcdDxSZXBseVJlY29yZEZvcm0gc2V0UmVwbHlDb21tZW50PXtzZXRSZXBseUNvbW1lbnR9IC8+XG5cdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CommentList/Comment/Comment.js\n");

/***/ })

})