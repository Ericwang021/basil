webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CommentBox/CommentBox.js":
/*!*********************************************!*\
  !*** ./components/CommentBox/CommentBox.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _CommentBox_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentBox.module.scss */ \"./components/CommentBox/CommentBox.module.scss\");\n/* harmony import */ var _CommentBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_CommentBox_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CommentList_CommentList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CommentList/CommentList */ \"./components/CommentList/CommentList.js\");\n/* harmony import */ var _CommentForm_CommentForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./components/CommentForm/CommentForm.js\");\n/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon/Icon */ \"./components/Icon/Icon.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./components/context.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar InformationBox = function InformationBox() {\n  _s();\n\n  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  var discussionList = contextValue.discussionList;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      comment = _useState2[0],\n      setComment = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(discussionList),\n      discussionListData = _useState3[0],\n      setDiscussionListData = _useState3[1];\n\n  var handleClick = function handleClick() {\n    setShow(!show);\n  };\n\n  var addComment = function addComment() {\n    setComment(!comment);\n  };\n\n  var handelCommentSubmit = function handelCommentSubmit(comment) {\n    setDiscussionListData([comment]);\n  };\n\n  return __jsx(\"div\", {\n    className: _CommentBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.infoWrapper\n  }, __jsx(\"div\", {\n    className: _CommentBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.infoWrapperInner\n  }, __jsx(\"div\", {\n    className: _CommentBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.wrapperTitleBox\n  }, __jsx(\"div\", {\n    className: _CommentBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.title\n  }, __jsx(\"span\", null, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconFeedBack\"], null)), \"\\u554F\\u984C\\u548C\\u8A0E\\u8AD6\"), __jsx(\"div\", {\n    className: _CommentBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.searchBox\n  }, show ? __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"\\u641C\\u5C0B\\u8A0E\\u8AD6\"\n  }) : null, show ? __jsx(\"span\", {\n    onClick: function onClick() {\n      return handleClick();\n    }\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconClose\"], null)) : __jsx(\"span\", {\n    onClick: function onClick() {\n      return handleClick();\n    }\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconSearch\"], null)))), __jsx(\"div\", {\n    className: _CommentBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.addNew\n  }, __jsx(\"div\", {\n    className: _CommentBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.addNewBox\n  }, __jsx(\"span\", null, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconAdd\"], null)), __jsx(\"span\", {\n    className: _CommentBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.text,\n    onClick: addComment\n  }, \"\\u65B0\\u589E\\u8A0E\\u8AD6\")), comment ? __jsx(_CommentForm_CommentForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null) : null), __jsx(\"div\", {\n    className: _CommentBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentList\n  }, __jsx(\"div\", {\n    className: _CommentBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.totalComment\n  }, \"3\\u500B\\u8A0E\\u8AD6\"), __jsx(_CommentList_CommentList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))));\n};\n\n_s(InformationBox, \"dJn2Zl1c+IsLcKCYcZiZiFIb4y8=\");\n\n_c = InformationBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InformationBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"InformationBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRCb3gvQ29tbWVudEJveC5qcz85ZjJlIl0sIm5hbWVzIjpbIkluZm9ybWF0aW9uQm94IiwiY29udGV4dFZhbHVlIiwidXNlQ29udGV4dCIsImNvbnRleHQiLCJkaXNjdXNzaW9uTGlzdCIsInVzZVN0YXRlIiwic2hvdyIsInNldFNob3ciLCJjb21tZW50Iiwic2V0Q29tbWVudCIsImRpc2N1c3Npb25MaXN0RGF0YSIsInNldERpc2N1c3Npb25MaXN0RGF0YSIsImhhbmRsZUNsaWNrIiwiYWRkQ29tbWVudCIsImhhbmRlbENvbW1lbnRTdWJtaXQiLCJzdHlsZXMiLCJpbmZvV3JhcHBlciIsImluZm9XcmFwcGVySW5uZXIiLCJ3cmFwcGVyVGl0bGVCb3giLCJ0aXRsZSIsInNlYXJjaEJveCIsImFkZE5ldyIsImFkZE5ld0JveCIsInRleHQiLCJjb21tZW50TGlzdCIsInRvdGFsQ29tbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUM1QixNQUFNQyxZQUFZLEdBQUdDLHdEQUFVLENBQUNDLGdEQUFELENBQS9CO0FBRDRCLE1BRXBCQyxjQUZvQixHQUVESCxZQUZDLENBRXBCRyxjQUZvQjs7QUFBQSxrQkFHSkMsc0RBQVEsQ0FBQyxLQUFELENBSEo7QUFBQSxNQUdyQkMsSUFIcUI7QUFBQSxNQUdmQyxPQUhlOztBQUFBLG1CQUlFRixzREFBUSxDQUFDLEtBQUQsQ0FKVjtBQUFBLE1BSXJCRyxPQUpxQjtBQUFBLE1BSVpDLFVBSlk7O0FBQUEsbUJBS3dCSixzREFBUSxDQUFDRCxjQUFELENBTGhDO0FBQUEsTUFLckJNLGtCQUxxQjtBQUFBLE1BS0RDLHFCQUxDOztBQU81QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCTCxXQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQO0FBQ0EsR0FGRDs7QUFHQSxNQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCSixjQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFWO0FBQ0EsR0FGRDs7QUFJQSxNQUFNTSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNOLE9BQUQsRUFBYTtBQUN4Q0cseUJBQXFCLENBQUMsQ0FBQ0gsT0FBRCxDQUFELENBQXJCO0FBQ0EsR0FGRDs7QUFHQSxTQUNDO0FBQUssYUFBUyxFQUFFTyw4REFBTSxDQUFDQztBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFRCw4REFBTSxDQUFDRTtBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFRiw4REFBTSxDQUFDRztBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFSCw4REFBTSxDQUFDSTtBQUF2QixLQUNDLG9CQUNDLE1BQUMsdURBQUQsT0FERCxDQURELG1DQURELEVBT0M7QUFBSyxhQUFTLEVBQUVKLDhEQUFNLENBQUNLO0FBQXZCLEtBQ0VkLElBQUksR0FBRztBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGVBQVcsRUFBQztBQUEvQixJQUFILEdBQThDLElBRHBELEVBRUVBLElBQUksR0FDSjtBQUFNLFdBQU8sRUFBRTtBQUFBLGFBQU1NLFdBQVcsRUFBakI7QUFBQTtBQUFmLEtBQ0MsTUFBQyxvREFBRCxPQURELENBREksR0FLSjtBQUFNLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFdBQVcsRUFBakI7QUFBQTtBQUFmLEtBQ0MsTUFBQyxxREFBRCxPQURELENBUEYsQ0FQRCxDQURELEVBcUJDO0FBQUssYUFBUyxFQUFFRyw4REFBTSxDQUFDTTtBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFTiw4REFBTSxDQUFDTztBQUF2QixLQUNDLG9CQUNDLE1BQUMsa0RBQUQsT0FERCxDQURELEVBSUM7QUFBTSxhQUFTLEVBQUVQLDhEQUFNLENBQUNRLElBQXhCO0FBQThCLFdBQU8sRUFBRVY7QUFBdkMsZ0NBSkQsQ0FERCxFQVNFTCxPQUFPLEdBQUcsTUFBQyxnRUFBRCxPQUFILEdBQXFCLElBVDlCLENBckJELEVBZ0NDO0FBQUssYUFBUyxFQUFFTyw4REFBTSxDQUFDUztBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFVCw4REFBTSxDQUFDVTtBQUF2QiwyQkFERCxFQUVDLE1BQUMsZ0VBQUQsT0FGRCxDQWhDRCxDQURELENBREQ7QUF5Q0EsQ0ExREQ7O0dBQU16QixjOztLQUFBQSxjO0FBNERTQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbWVudEJveC9Db21tZW50Qm94LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Db21tZW50Qm94Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb21tZW50TGlzdCBmcm9tIFwiLi4vQ29tbWVudExpc3QvQ29tbWVudExpc3RcIjtcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tIFwiLi4vQ29tbWVudEZvcm0vQ29tbWVudEZvcm1cIjtcbmltcG9ydCB7IEljb25GZWVkQmFjaywgSWNvblNlYXJjaCwgSWNvbkNsb3NlLCBJY29uQWRkIH0gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IGNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuY29uc3QgSW5mb3JtYXRpb25Cb3ggPSAoKSA9PiB7XG5cdGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoY29udGV4dCk7XG5cdGNvbnN0IHsgZGlzY3Vzc2lvbkxpc3QgfSA9IGNvbnRleHRWYWx1ZTtcblx0Y29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtkaXNjdXNzaW9uTGlzdERhdGEsIHNldERpc2N1c3Npb25MaXN0RGF0YV0gPSB1c2VTdGF0ZShkaXNjdXNzaW9uTGlzdCk7XG5cblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG5cdFx0c2V0U2hvdyghc2hvdyk7XG5cdH07XG5cdGNvbnN0IGFkZENvbW1lbnQgPSAoKSA9PiB7XG5cdFx0c2V0Q29tbWVudCghY29tbWVudCk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGVsQ29tbWVudFN1Ym1pdCA9IChjb21tZW50KSA9PiB7XG5cdFx0c2V0RGlzY3Vzc2lvbkxpc3REYXRhKFtjb21tZW50XSk7XG5cdH07XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvV3JhcHBlcn0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9XcmFwcGVySW5uZXJ9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJUaXRsZUJveH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0PEljb25GZWVkQmFjayAvPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx05ZWP6aGM5ZKM6KiO6KuWXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCb3h9PlxuXHRcdFx0XHRcdFx0e3Nob3cgPyA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuaQnOWwi+iojuirllwiIC8+IDogbnVsbH1cblx0XHRcdFx0XHRcdHtzaG93ID8gKFxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygpfT5cblx0XHRcdFx0XHRcdFx0XHQ8SWNvbkNsb3NlIC8+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9PlxuXHRcdFx0XHRcdFx0XHRcdDxJY29uU2VhcmNoIC8+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZE5ld30+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGROZXdCb3h9PlxuXHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdDxJY29uQWRkIC8+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fSBvbkNsaWNrPXthZGRDb21tZW50fT5cblx0XHRcdFx0XHRcdFx05paw5aKe6KiO6KuWXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e2NvbW1lbnQgPyA8Q29tbWVudEZvcm0gLz4gOiBudWxsfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50TGlzdH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3RhbENvbW1lbnR9PjPlgIvoqI7oq5Y8L2Rpdj5cblx0XHRcdFx0XHQ8Q29tbWVudExpc3QgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9ybWF0aW9uQm94O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CommentBox/CommentBox.js\n");

/***/ })

})