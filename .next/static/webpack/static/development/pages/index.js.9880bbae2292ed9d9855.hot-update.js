webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/InformationBox/InformationBox.js":
/*!*****************************************************!*\
  !*** ./components/InformationBox/InformationBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformationBox.module.scss */ \"./components/InformationBox/InformationBox.module.scss\");\n/* harmony import */ var _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/components/buttons.module.scss */ \"./styles/components/buttons.module.scss\");\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon/Icon */ \"./components/Icon/Icon.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar InformationBox = function InformationBox() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isShow = _useState[0],\n      setIsShow = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isComment = _useState2[0],\n      setIsComment = _useState2[1]; // const [count, setCount] = useState(0);\n\n\n  var handleClick = function handleClick() {\n    setIsShow(!isShow);\n  };\n\n  var handleComment = function handleComment() {\n    setIsComment(!isComment);\n  };\n\n  return __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.infoWrapper\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.infoWrapperInner\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapperTitleBox\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title\n  }, __jsx(\"span\", null, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconFeedBack\"], null)), \"\\u554F\\u984C\\u548C\\u8A0E\\u8AD6\"), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchBox\n  }, isShow ? __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"\\u641C\\u5C0B\\u8A0E\\u8AD6\"\n  }) : null, !isShow ? __jsx(\"span\", {\n    onClick: function onClick() {\n      return handleClick();\n    }\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconSearch\"], null)) : null, isShow ? __jsx(\"span\", {\n    onClick: function onClick() {\n      return handleClick();\n    }\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconClose\"], null)) : null)), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.addNew\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.addNewBox\n  }, __jsx(\"span\", null, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconAdd\"], null)), __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n    onClick: function onClick() {\n      return handleComment();\n    }\n  }, \"\\u65B0\\u589E\\u8A0E\\u8AD6\")), isComment ? __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.addMessage\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatarMl\n  }, \"E\"), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.textAreaBox\n  }, __jsx(\"textarea\", {\n    placeholder: \"\\u65B0\\u589E\\u56DE\\u8986\"\n  })), __jsx(\"button\", {\n    className: _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.iconButtonSm || _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.button\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconSend\"], null))) : null), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comment\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.totalComment\n  }, \"3\\u500B\\u8A0E\\u8AD6\"), __jsx(\"ul\", null, __jsx(\"li\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatarMl || _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar\n  }, \"E\"), __jsx(\"li\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentWrapper\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentBox\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nameText\n  }, __jsx(\"div\", null, \"Eric wang\"), __jsx(\"div\", null, \"\\u5F35\\u8CBC \\u2022 12 \\u500B\\u6708\\u524D\")), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconBox\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconCheckCircle\"], null)), __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text\n  }, \"\\u5DF2\\u89E3\\u6C7A\"))), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentBox\n  }, __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentContent\n  }, \"goooood!\"), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lattice\n  }, \"+1\"), __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.number\n  }, \"0\"))), \"div.\"), __jsx(\"li\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatarSm || _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar\n  }, \"E\")))));\n};\n\n_s(InformationBox, \"3p3gQtF2AaXAP5UBR6UiKbz/o0g=\");\n\n_c = InformationBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InformationBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"InformationBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZm9ybWF0aW9uQm94L0luZm9ybWF0aW9uQm94LmpzP2YyNGQiXSwibmFtZXMiOlsiSW5mb3JtYXRpb25Cb3giLCJ1c2VTdGF0ZSIsImlzU2hvdyIsInNldElzU2hvdyIsImlzQ29tbWVudCIsInNldElzQ29tbWVudCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlQ29tbWVudCIsInN0eWxlcyIsImluZm9XcmFwcGVyIiwiaW5mb1dyYXBwZXJJbm5lciIsIndyYXBwZXJUaXRsZUJveCIsInRpdGxlIiwic2VhcmNoQm94IiwiYWRkTmV3IiwiYWRkTmV3Qm94IiwidGV4dCIsImFkZE1lc3NhZ2UiLCJhdmF0YXJTdHlsZSIsImF2YXRhck1sIiwidGV4dEFyZWFCb3giLCJidXR0b25TdHlsZSIsImljb25CdXR0b25TbSIsImJ1dHRvbiIsImNvbW1lbnQiLCJ0b3RhbENvbW1lbnQiLCJhdmF0YXIiLCJjb21tZW50V3JhcHBlciIsImNvbW1lbnRCb3giLCJuYW1lVGV4dCIsInJpZ2h0Q29udGVudCIsImljb25Cb3giLCJjb21tZW50Q29udGVudCIsImxhdHRpY2UiLCJudW1iZXIiLCJhdmF0YXJTbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsS0FBRCxDQURSO0FBQUEsTUFDckJDLE1BRHFCO0FBQUEsTUFDYkMsU0FEYTs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQyxLQUFELENBRmQ7QUFBQSxNQUVyQkcsU0FGcUI7QUFBQSxNQUVWQyxZQUZVLGtCQUc1Qjs7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6QkgsYUFBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtBQUNBLEdBRkQ7O0FBR0EsTUFBTUssYUFBYSxHQUFHLFNBQWhCQSxh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QUFFaEIsNEVBQVcsQ0FBQ2lCLFFBQVosSUFBd0IzQixrRUFBTSxDQUFDa0I7QUFBOUMsU0F4QkQsQ0FGRCxDQTNDRCxDQURELENBREQ7QUE2RUEsQ0F4RkQ7O0dBQU0xQixjOztLQUFBQSxjO0FBMEZTQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW5mb3JtYXRpb25Cb3gvSW5mb3JtYXRpb25Cb3guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSW5mb3JtYXRpb25Cb3gubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBhdmF0YXJTdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvYXZhdGFyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYnV0dG9uU3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9jb21wb25lbnRzL2J1dHRvbnMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7XG5cdEljb25GZWVkQmFjayxcblx0SWNvblNlYXJjaCxcblx0SWNvbkNsb3NlLFxuXHRJY29uTGFuLFxuXHRJY29uU2VuZCxcblx0SWNvbkFkZCxcblx0SWNvbkNoZWNrQ2lyY2xlLFxufSBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5cbmNvbnN0IEluZm9ybWF0aW9uQm94ID0gKCkgPT4ge1xuXHRjb25zdCBbaXNTaG93LCBzZXRJc1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbaXNDb21tZW50LCBzZXRJc0NvbW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHQvLyBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcblx0XHRzZXRJc1Nob3coIWlzU2hvdyk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUNvbW1lbnQgPSAoKSA9PiB7XG5cdFx0c2V0SXNDb21tZW50KCFpc0NvbW1lbnQpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvV3JhcHBlcn0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9XcmFwcGVySW5uZXJ9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJUaXRsZUJveH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0PEljb25GZWVkQmFjayAvPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx05ZWP6aGM5ZKM6KiO6KuWXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCb3h9PlxuXHRcdFx0XHRcdFx0e2lzU2hvdyA/IDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi5pCc5bCL6KiO6KuWXCIgLz4gOiBudWxsfVxuXHRcdFx0XHRcdFx0eyFpc1Nob3cgPyAoXG5cdFx0XHRcdFx0XHRcdDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9PlxuXHRcdFx0XHRcdFx0XHRcdDxJY29uU2VhcmNoIC8+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0e2lzU2hvdyA/IChcblx0XHRcdFx0XHRcdFx0PHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soKX0+XG5cdFx0XHRcdFx0XHRcdFx0PEljb25DbG9zZSAvPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTmV3fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZE5ld0JveH0+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0PEljb25BZGQgLz5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbW1lbnQoKX0+XG5cdFx0XHRcdFx0XHRcdOaWsOWinuiojuirllxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtpc0NvbW1lbnQgPyAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZE1lc3NhZ2V9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YXZhdGFyU3R5bGUuYXZhdGFyTWx9PkU8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0QXJlYUJveH0+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHBsYWNlaG9sZGVyPVwi5paw5aKe5Zue6KaGXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtidXR0b25TdHlsZS5pY29uQnV0dG9uU20gfHwgc3R5bGVzLmJ1dHRvbn0+XG5cdFx0XHRcdFx0XHRcdFx0PEljb25TZW5kIC8+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnR9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG90YWxDb21tZW50fT4z5YCL6KiO6KuWPC9kaXY+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YXZhdGFyU3R5bGUuYXZhdGFyTWwgfHwgc3R5bGVzLmF2YXRhcn0+RTwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudFdyYXBwZXJ9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRCb3h9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZVRleHR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5FcmljIHdhbmc8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+5by16LK8IOKAoiAxMiDlgIvmnIjliY08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0Q29udGVudH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQm94fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEljb25DaGVja0NpcmNsZSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+5bey6Kej5rG6PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Qm94fT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Q29udGVudH0+Z29vb29vZCE8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodENvbnRlbnR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGF0dGljZX0+KzE8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9PjA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRkaXYuXG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YXZhdGFyU3R5bGUuYXZhdGFyU20gfHwgc3R5bGVzLmF2YXRhcn0+RTwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9ybWF0aW9uQm94O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/InformationBox/InformationBox.js\n");

/***/ })

})