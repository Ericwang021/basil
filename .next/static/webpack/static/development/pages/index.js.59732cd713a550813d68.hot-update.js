webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CommentForm/CommentForm.js":
/*!***********************************************!*\
  !*** ./components/CommentForm/CommentForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/components/buttons.module.scss */ \"./styles/components/buttons.module.scss\");\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentForm.module.scss */ \"./components/CommentForm/CommentForm.module.scss\");\n/* harmony import */ var _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./components/context.js\");\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Send */ \"./node_modules/@material-ui/icons/Send.js\");\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar CommentForm = function CommentForm(_ref) {\n  _s();\n\n  var setShowComment = _ref.setShowComment;\n  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  var discussionList = contextValue.discussionList,\n      setDiscussionList = contextValue.setDiscussionList;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      comment = _useState[0],\n      setComment = _useState[1];\n\n  var commentSubmit = function commentSubmit(event) {\n    event.preventDefault();\n    var commentItem = {\n      record: {\n        name: \"Eric\",\n        date: \"new Date()\",\n        content: comment,\n        goodCount: 0,\n        reply: []\n      }\n    };\n    setDiscussionList([commentItem].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(discussionList)));\n    setShowComment(false);\n  };\n\n  var changeComment = function changeComment(event) {\n    setComment(event.target.value);\n  };\n\n  return __jsx(\"form\", {\n    onSubmit: commentSubmit\n  }, __jsx(\"div\", {\n    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.addMessage\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatarMl\n  }, \"E\"), __jsx(\"div\", {\n    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.textAreaBox\n  }, __jsx(\"textarea\", {\n    placeholder: \"\\u65B0\\u589E\\u56DE\\u8986\",\n    onChange: changeComment\n  })), __jsx(\"button\", {\n    className: _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.iconButtonSm\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], null, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    fontSize: \"small\"\n  })))));\n};\n\n_s(CommentForm, \"/hcFpSSFbzuH79gpTBNyHAcdUZI=\");\n\n_c = CommentForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtL0NvbW1lbnRGb3JtLmpzP2E4MjQiXSwibmFtZXMiOlsiQ29tbWVudEZvcm0iLCJzZXRTaG93Q29tbWVudCIsImNvbnRleHRWYWx1ZSIsInVzZUNvbnRleHQiLCJjb250ZXh0IiwiZGlzY3Vzc2lvbkxpc3QiLCJzZXREaXNjdXNzaW9uTGlzdCIsInVzZVN0YXRlIiwiY29tbWVudCIsInNldENvbW1lbnQiLCJjb21tZW50U3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbW1lbnRJdGVtIiwicmVjb3JkIiwibmFtZSIsImRhdGUiLCJjb250ZW50IiwiZ29vZENvdW50IiwicmVwbHkiLCJjaGFuZ2VDb21tZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZXMiLCJhZGRNZXNzYWdlIiwiYXZhdGFyU3R5bGUiLCJhdmF0YXJNbCIsInRleHRBcmVhQm94IiwiYnV0dG9uU3R5bGUiLCJpY29uQnV0dG9uU20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUF3QjtBQUFBOztBQUFBLE1BQXJCQyxjQUFxQixRQUFyQkEsY0FBcUI7QUFDM0MsTUFBTUMsWUFBWSxHQUFHQyx3REFBVSxDQUFDQyxnREFBRCxDQUEvQjtBQUQyQyxNQUVuQ0MsY0FGbUMsR0FFR0gsWUFGSCxDQUVuQ0csY0FGbUM7QUFBQSxNQUVuQkMsaUJBRm1CLEdBRUdKLFlBRkgsQ0FFbkJJLGlCQUZtQjs7QUFBQSxrQkFHYkMsc0RBQVEsQ0FBQyxFQUFELENBSEs7QUFBQSxNQUdwQ0MsT0FIb0M7QUFBQSxNQUczQkMsVUFIMkI7O0FBSzNDLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2hDQSxTQUFLLENBQUNDLGNBQU47QUFDQSxRQUFNQyxXQUFXLEdBQUc7QUFDbkJDLFlBQU0sRUFBRTtBQUNQQyxZQUFJLEVBQUUsTUFEQztBQUVQQyxZQUFJLEVBQUUsWUFGQztBQUdQQyxlQUFPLEVBQUVULE9BSEY7QUFJUFUsaUJBQVMsRUFBRSxDQUpKO0FBS1BDLGFBQUssRUFBRTtBQUxBO0FBRFcsS0FBcEI7QUFTQWIscUJBQWlCLEVBQUVPLFdBQUYsc0dBQWtCUixjQUFsQixHQUFqQjtBQUNBSixrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNBLEdBYkQ7O0FBY0EsTUFBTW1CLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ1QsS0FBRCxFQUFXO0FBQ2hDRixjQUFVLENBQUNFLEtBQUssQ0FBQ1UsTUFBTixDQUFhQyxLQUFkLENBQVY7QUFDQSxHQUZEOztBQUdBLFNBQ0M7QUFBTSxZQUFRLEVBQUVaO0FBQWhCLEtBQ0M7QUFBSyxhQUFTLEVBQUVhLCtEQUFNLENBQUNDO0FBQXZCLEtBQ0M7QUFBSyxhQUFTLEVBQUVDLDRFQUFXLENBQUNDO0FBQTVCLFNBREQsRUFFQztBQUFLLGFBQVMsRUFBRUgsK0RBQU0sQ0FBQ0k7QUFBdkIsS0FDQztBQUFVLGVBQVcsRUFBQywwQkFBdEI7QUFBNkIsWUFBUSxFQUFFUDtBQUF2QyxJQURELENBRkQsRUFLQztBQUFRLGFBQVMsRUFBRVEsNkVBQVcsQ0FBQ0M7QUFBL0IsS0FDQyxNQUFDLDREQUFELFFBQ0MsTUFBQyw4REFBRDtBQUFVLFlBQVEsRUFBQztBQUFuQixJQURELENBREQsQ0FMRCxDQURELENBREQ7QUFlQSxDQXJDRDs7R0FBTTdCLFc7O0tBQUFBLFc7QUF1Q1NBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21tZW50Rm9ybS9Db21tZW50Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF2YXRhclN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBidXR0b25TdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvYnV0dG9ucy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Db21tZW50Rm9ybS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCBTZW5kSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlbmRcIjtcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuY29uc3QgQ29tbWVudEZvcm0gPSAoeyBzZXRTaG93Q29tbWVudCB9KSA9PiB7XG5cdGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoY29udGV4dCk7XG5cdGNvbnN0IHsgZGlzY3Vzc2lvbkxpc3QsIHNldERpc2N1c3Npb25MaXN0IH0gPSBjb250ZXh0VmFsdWU7XG5cdGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cdGNvbnN0IGNvbW1lbnRTdWJtaXQgPSAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGNvbW1lbnRJdGVtID0ge1xuXHRcdFx0cmVjb3JkOiB7XG5cdFx0XHRcdG5hbWU6IFwiRXJpY1wiLFxuXHRcdFx0XHRkYXRlOiBcIm5ldyBEYXRlKClcIixcblx0XHRcdFx0Y29udGVudDogY29tbWVudCxcblx0XHRcdFx0Z29vZENvdW50OiAwLFxuXHRcdFx0XHRyZXBseTogW10sXG5cdFx0XHR9LFxuXHRcdH07XG5cdFx0c2V0RGlzY3Vzc2lvbkxpc3QoW2NvbW1lbnRJdGVtLCAuLi5kaXNjdXNzaW9uTGlzdF0pO1xuXHRcdHNldFNob3dDb21tZW50KGZhbHNlKTtcblx0fTtcblx0Y29uc3QgY2hhbmdlQ29tbWVudCA9IChldmVudCkgPT4ge1xuXHRcdHNldENvbW1lbnQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0fTtcblx0cmV0dXJuIChcblx0XHQ8Zm9ybSBvblN1Ym1pdD17Y29tbWVudFN1Ym1pdH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZE1lc3NhZ2V9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YXZhdGFyU3R5bGUuYXZhdGFyTWx9PkU8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0QXJlYUJveH0+XG5cdFx0XHRcdFx0PHRleHRhcmVhIHBsYWNlaG9sZGVyPVwi5paw5aKe5Zue6KaGXCIgb25DaGFuZ2U9e2NoYW5nZUNvbW1lbnR9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uU3R5bGUuaWNvbkJ1dHRvblNtfT5cblx0XHRcdFx0XHQ8SWNvbkJ1dHRvbj5cblx0XHRcdFx0XHRcdDxTZW5kSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cblx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb3JtPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentForm/CommentForm.js\n");

/***/ })

})