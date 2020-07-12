webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/InformationBox/InformationBox.js":
/*!*****************************************************!*\
  !*** ./components/InformationBox/InformationBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformationBox.module.scss */ \"./components/InformationBox/InformationBox.module.scss\");\n/* harmony import */ var _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/components/buttons.module.scss */ \"./styles/components/buttons.module.scss\");\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon/Icon */ \"./components/Icon/Icon.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar InformationBox = function InformationBox() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isShow = _useState[0],\n      setIsShow = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isComment = _useState2[0],\n      setIsComment = _useState2[1]; // const [count, setCount] = useState(0);\n\n\n  var handleClick = function handleClick() {\n    setIsShow(!isShow);\n  };\n\n  var handleComment = function handleComment() {\n    setIsComment(!isComment);\n  };\n\n  return __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.infoWrapper\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.infoWrapperInner\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapperTitleBox\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title\n  }, __jsx(\"span\", null, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconFeedBack\"], null)), \"\\u554F\\u984C\\u548C\\u8A0E\\u8AD6\"), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchBox\n  }, isShow ? __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"\\u641C\\u5C0B\\u8A0E\\u8AD6\"\n  }) : null, !isShow ? __jsx(\"span\", {\n    onClick: function onClick() {\n      return handleClick();\n    }\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconSearch\"], null)) : null, isShow ? __jsx(\"span\", {\n    onClick: function onClick() {\n      return handleClick();\n    }\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconClose\"], null)) : null)), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.addNew\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.addNewBox\n  }, __jsx(\"span\", null, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconAdd\"], null)), __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n    onClick: function onClick() {\n      return handleComment();\n    }\n  }, \"\\u65B0\\u589E\\u8A0E\\u8AD6\")), isComment ? __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.addMessage\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatarMl\n  }, \"E\"), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.textAreaBox\n  }, __jsx(\"textarea\", {\n    placeholder: \"\\u65B0\\u589E\\u56DE\\u8986\"\n  })), __jsx(\"button\", {\n    className: _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.iconButtonSm || _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.button\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconSend\"], null))) : null), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comment\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.totalComment\n  }, \"3\\u500B\\u8A0E\\u8AD6\"), __jsx(\"ul\", null, __jsx(\"li\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatarMl || _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar\n  }, \"E\"), __jsx(\"li\", null, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentBox\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nameText\n  }, __jsx(\"div\", null, \"Eric wang\"), __jsx(\"div\", null, \"\\u5F35\\u8CBC \\u2022 12 \\u500B\\u6708\\u524D\")), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconBox\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconCheckCircle\"], null)), __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text\n  }, \"\\u5DF2\\u89E3\\u6C7A\"))), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentBox\n  }, __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentContent\n  }, \"goooood!\"), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lattice\n  }, \"+1\"), __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.number\n  }, \"0\"))))))));\n};\n\n_s(InformationBox, \"3p3gQtF2AaXAP5UBR6UiKbz/o0g=\");\n\n_c = InformationBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InformationBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"InformationBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZm9ybWF0aW9uQm94L0luZm9ybWF0aW9uQm94LmpzP2YyNGQiXSwibmFtZXMiOlsiSW5mb3JtYXRpb25Cb3giLCJ1c2VTdGF0ZSIsImlzU2hvdyIsInNldElzU2hvdyIsImlzQ29tbWVudCIsInNldElzQ29tbWVudCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlQ29tbWVudCIsInN0eWxlcyIsImluZm9XcmFwcGVyIiwiaW5mb1dyYXBwZXJJbm5lciIsIndyYXBwZXJUaXRsZUJveCIsInRpdGxlIiwic2VhcmNoQm94IiwiYWRkTmV3IiwiYWRkTmV3Qm94IiwidGV4dCIsImFkZE1lc3NhZ2UiLCJhdmF0YXJTdHlsZSIsImF2YXRhck1sIiwidGV4dEFyZWFCb3giLCJidXR0b25TdHlsZSIsImljb25CdXR0b25TbSIsImJ1dHRvbiIsImNvbW1lbnQiLCJ0b3RhbENvbW1lbnQiLCJhdmF0YXIiLCJjb21tZW50Qm94IiwibmFtZVRleHQiLCJyaWdodENvbnRlbnQiLCJpY29uQm94IiwiY29tbWVudENvbnRlbnQiLCJsYXR0aWNlIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFVQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxLQUFELENBRFI7QUFBQSxNQUNyQkMsTUFEcUI7QUFBQSxNQUNiQyxTQURhOztBQUFBLG1CQUVNRixzREFBUSxDQUFDLEtBQUQsQ0FGZDtBQUFBLE1BRXJCRyxTQUZxQjtBQUFBLE1BRVZDLFlBRlUsa0JBRzVCOzs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCSCxhQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFUO0FBQ0EsR0FGRDs7QUFHQSxNQUFNSyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDM0JGLGdCQUFZLENBQUMs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b25lbnRzL0luZm9ybWF0aW9uQm94L0luZm9ybWF0aW9uQm94LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0luZm9ybWF0aW9uQm94Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYXZhdGFyU3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9jb21wb25lbnRzL2F2YXRhci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGJ1dHRvblN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9idXR0b25zLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQge1xuXHRJY29uRmVlZEJhY2ssXG5cdEljb25TZWFyY2gsXG5cdEljb25DbG9zZSxcblx0SWNvbkxhbixcblx0SWNvblNlbmQsXG5cdEljb25BZGQsXG5cdEljb25DaGVja0NpcmNsZSxcbn0gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuXG5jb25zdCBJbmZvcm1hdGlvbkJveCA9ICgpID0+IHtcblx0Y29uc3QgW2lzU2hvdywgc2V0SXNTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2lzQ29tbWVudCwgc2V0SXNDb21tZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Ly8gY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG5cdFx0c2V0SXNTaG93KCFpc1Nob3cpO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVDb21tZW50ID0gKCkgPT4ge1xuXHRcdHNldElzQ29tbWVudCghaXNDb21tZW50KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1dyYXBwZXJ9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvV3JhcHBlcklubmVyfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyVGl0bGVCb3h9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuXHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdDxJY29uRmVlZEJhY2sgLz5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdOWVj+mhjOWSjOiojuirllxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQm94fT5cblx0XHRcdFx0XHRcdHtpc1Nob3cgPyA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuaQnOWwi+iojuirllwiIC8+IDogbnVsbH1cblx0XHRcdFx0XHRcdHshaXNTaG93ID8gKFxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygpfT5cblx0XHRcdFx0XHRcdFx0XHQ8SWNvblNlYXJjaCAvPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdHtpc1Nob3cgPyAoXG5cdFx0XHRcdFx0XHRcdDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9PlxuXHRcdFx0XHRcdFx0XHRcdDxJY29uQ2xvc2UgLz5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZE5ld30+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGROZXdCb3h9PlxuXHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdDxJY29uQWRkIC8+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb21tZW50KCl9PlxuXHRcdFx0XHRcdFx0XHTmlrDlop7oqI7oq5Zcblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7aXNDb21tZW50ID8gKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRNZXNzYWdlfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2F2YXRhclN0eWxlLmF2YXRhck1sfT5FPC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEFyZWFCb3h9PlxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIuaWsOWinuWbnuimhlwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uU3R5bGUuaWNvbkJ1dHRvblNtIHx8IHN0eWxlcy5idXR0b259PlxuXHRcdFx0XHRcdFx0XHRcdDxJY29uU2VuZCAvPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvdGFsQ29tbWVudH0+M+WAi+iojuirljwvZGl2PlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2F2YXRhclN0eWxlLmF2YXRhck1sIHx8IHN0eWxlcy5hdmF0YXJ9PkU8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRCb3h9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZVRleHR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5FcmljIHdhbmc8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+5by16LK8IOKAoiAxMiDlgIvmnIjliY08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0Q29udGVudH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQm94fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEljb25DaGVja0NpcmNsZSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+5bey6Kej5rG6PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Qm94fT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Q29udGVudH0+Z29vb29vZCE8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodENvbnRlbnR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGF0dGljZX0+KzE8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9PjA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mb3JtYXRpb25Cb3g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InformationBox/InformationBox.js\n");

/***/ })

})