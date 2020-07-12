webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/InformationBox/InformationBox.js":
/*!*****************************************************!*\
  !*** ./components/InformationBox/InformationBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformationBox.module.scss */ \"./components/InformationBox/InformationBox.module.scss\");\n/* harmony import */ var _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/components/buttons.module.scss */ \"./styles/components/buttons.module.scss\");\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon/Icon */ \"./components/Icon/Icon.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar InformationBox = function InformationBox() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isShow = _useState[0],\n      setIsShow = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isComment = _useState2[0],\n      setIsComment = _useState2[1];\n\n  var handleClick = function handleClick() {\n    setIsShow(!isShow);\n  };\n\n  var handleComment = function handleComment() {\n    setIsComment(!isComment);\n  };\n\n  return __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.infoWrapper\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.infoWrapperInner\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapperTitleBox\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title\n  }, __jsx(\"span\", null, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconFeedBack\"], null)), \"\\u554F\\u984C\\u548C\\u8A0E\\u8AD6\"), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchBox\n  }, isShow ? __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"\\u641C\\u5C0B\\u8A0E\\u8AD6\"\n  }) : null, !isShow ? __jsx(\"span\", {\n    onClick: function onClick() {\n      return handleClick();\n    }\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconSearch\"], null)) : null, isShow ? __jsx(\"span\", {\n    onClick: function onClick() {\n      return handleClick();\n    }\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconClose\"], null)) : null)), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.addNew\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.addNewBox\n  }, __jsx(\"span\", null, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconAdd\"], null)), __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n    onClick: function onClick() {\n      return handleComment();\n    }\n  }, \"\\u65B0\\u589E\\u8A0E\\u8AD6\")), isComment ? __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.addMessage\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatarMl\n  }, \"E\"), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.textAreaBox\n  }, __jsx(\"textarea\", {\n    placeholder: \"\\u65B0\\u589E\\u56DE\\u8986\"\n  })), __jsx(\"button\", {\n    className: _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.iconButtonSm || _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.button\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconSend\"], null))) : null), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comment\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.totalComment\n  }, \"3\\u500B\\u8A0E\\u8AD6\"), __jsx(\"ul\", null, __jsx(\"li\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatarMl\n  }, \"E\"), __jsx(\"li\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatarGrid\n  }, __jsx(\"div\", null, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nameText\n  }), __jsx(\"div\", null, \"Eric wang\"), __jsx(\"div\", null, \"\\u5F35\\u8CBC \\u2022 12 \\u500B\\u6708\\u524D\"), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.status\n  }, __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconBox\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"IconCheckCircle\"], null)), __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text\n  }, \"\\u5DF2\\u89E3\\u6C7A\"))), __jsx(\"div\", null, __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentContent\n  }, \"goooood!\"), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.latticeBox\n  }, __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lattice\n  }, \"+1\"), __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.number\n  }, \"0\"))))))));\n};\n\n_s(InformationBox, \"3p3gQtF2AaXAP5UBR6UiKbz/o0g=\");\n\n_c = InformationBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InformationBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"InformationBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZm9ybWF0aW9uQm94L0luZm9ybWF0aW9uQm94LmpzP2YyNGQiXSwibmFtZXMiOlsiSW5mb3JtYXRpb25Cb3giLCJ1c2VTdGF0ZSIsImlzU2hvdyIsInNldElzU2hvdyIsImlzQ29tbWVudCIsInNldElzQ29tbWVudCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlQ29tbWVudCIsInN0eWxlcyIsImluZm9XcmFwcGVyIiwiaW5mb1dyYXBwZXJJbm5lciIsIndyYXBwZXJUaXRsZUJveCIsInRpdGxlIiwic2VhcmNoQm94IiwiYWRkTmV3IiwiYWRkTmV3Qm94IiwidGV4dCIsImFkZE1lc3NhZ2UiLCJhdmF0YXJTdHlsZSIsImF2YXRhck1sIiwidGV4dEFyZWFCb3giLCJidXR0b25TdHlsZSIsImljb25CdXR0b25TbSIsImJ1dHRvbiIsImNvbW1lbnQiLCJ0b3RhbENvbW1lbnQiLCJhdmF0YXJHcmlkIiwibmFtZVRleHQiLCJzdGF0dXMiLCJpY29uQm94IiwiY29tbWVudENvbnRlbnQiLCJsYXR0aWNlQm94IiwibGF0dGljZSIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsS0FBRCxDQURSO0FBQUEsTUFDckJDLE1BRHFCO0FBQUEsTUFDYkMsU0FEYTs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQyxLQUFELENBRmQ7QUFBQSxNQUVyQkcsU0FGcUI7QUFBQSxNQUVWQyxZQUZVOztBQUk1QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCSCxhQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFUO0FBQ0EsR0FGRDs7QUFHQSxNQUFNSyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDM0JGLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0EsR0FGRDs7QUFJQSxTQUNDO0FBQUssYUFBUyxFQUFFSSxrRUFBTSxDQUFDQztBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFRCxrRUFBTSxDQUFDRTtBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFRixrRUFBTSxDQUFDRztBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFSCxrRUFBTSxDQUFDSTtBQUF2QixLQUNDLG9CQUNDLE1BQUMsdURBQUQsT0FERCxDQURELG1DQURELEVBT0M7QUFBSyxhQUFTLEVBQUVKLGtFQUFNLENBQUNLO0FBQXZCLEtBQ0VYLE1BQU0sR0FBRztBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGVBQVcsRUFBQztBQUEvQixJQUFILEdBQThDLElBRHRELEVBRUUsQ0FBQ0EsTUFBRCxHQUNBO0FBQU0sV0FBTyxFQUFFO0FBQUEsYUFBTUksV0FBVyxFQUFqQjtBQUFBO0FBQWYsS0FDQyxNQUFDLHFEQUFELE9BREQsQ0FEQSxHQUlHLElBTkwsRUFPRUosTUFBTSxHQUNOO0FBQU0sV0FBTyxFQUFFO0FBQUEsYUFBTUksV0FBVyxFQUFqQjtBQUFBO0FBQWYsS0FDQyxNQUFDLG9EQUFELE9BREQsQ0FETSxHQUlILElBWEwsQ0FQRCxDQURELEVBc0JDO0FBQUssYUFBUyxFQUFFRSxrRUFBTSxDQUFDTTtBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFTixrRUFBTSxDQUFDTztBQUF2QixLQUNDLG9CQUNDLE1BQUMsa0RBQUQsT0FERCxDQURELEVBSUM7QUFBTSxhQUFTLEVBQUVQLGtFQUFNLENBQUNRLElBQXhCO0FBQThCLFdBQU8sRUFBRTtBQUFBLGFBQU1ULGFBQWEsRUFBbkI7QUFBQTtBQUF2QyxnQ0FKRCxDQURELEVBU0VILFNBQVMsR0FDVDtBQUFLLGFBQVMsRUFBRUksa0VBQU0sQ0FBQ1M7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRUMsNEVBQVcsQ0FBQ0M7QUFBNUIsU0FERCxFQUVDO0FBQUssYUFBUyxFQUFFWCxrRUFBTSxDQUFDWTtBQUF2QixLQUNDO0FBQVUsZUFBVyxFQUFDO0FBQXRCLElBREQsQ0FGRCxFQUtDO0FBQVEsYUFBUyxFQUFFQyw2RUFBVyxDQUFDQyxZQUFaLElBQTRCZCxrRUFBTSxDQUFDZTtBQUF0RCxLQUNDLE1BQUMsbURBQUQsT0FERCxDQUxELENBRFMsR0FVTixJQW5CTCxDQXRCRCxFQTJDQztBQUFLLGFBQVMsRUFBRWYsa0VBQU0sQ0FBQ2dCO0FBQXZCLEtBQ0M7QUFBSyxhQUFTLEVBQUVoQixrRUFBTSxDQUFDaUI7QUFBdkIsMkJBREQsRUFFQyxrQkFDQztBQUFJLGFBQVMsRUFBRVAsNEVBQVcsQ0FBQ0M7QUFBM0IsU0FERCxFQUVDO0FBQUksYUFBUyxFQUFFWCxrRUFBTSxDQUFDa0I7QUFBdEIsS0FDQyxtQkFDQztBQUFLLGFBQVMsRUFBRWxCLGtFQUFNLENBQUNtQjtBQUF2QixJQURELEVBRUMsK0JBRkQsRUFHQywrREFIRCxFQUlDO0FBQUssYUFBUyxFQUFFbkIsa0VBQU0sQ0FBQ29CO0FBQXZCLEtBQ0M7QUFBTSxhQUFTLEVBQUVwQixrRUFBTSxDQUFDcUI7QUFBeEIsS0FDQyxNQUFDLDBEQUFELE9BREQsQ0FERCxFQUlDO0FBQU0sYUFBUyxFQUFFckIsa0VBQU0sQ0FBQ1E7QUFBeEIsMEJBSkQsQ0FKRCxDQURELEVBYUMsbUJBQ0M7QUFBTSxhQUFTLEVBQUVSLGtFQUFNLENBQUNzQjtBQUF4QixnQkFERCxFQUVDO0FBQUssYUFBUyxFQUFFdEIsa0VBQU0sQ0FBQ3VCO0FBQXZCLEtBQ0M7QUFBTSxhQUFTLEVBQUV2QixrRUFBTSxDQUFDd0I7QUFBeEIsVUFERCxFQUVDO0FBQU0sYUFBUyxFQUFFeEIsa0VBQU0sQ0FBQ3lCO0FBQXhCLFNBRkQsQ0FGRCxDQWJELENBRkQsQ0FGRCxDQTNDRCxDQURELENBREQ7QUEyRUEsQ0F0RkQ7O0dBQU1qQyxjOztLQUFBQSxjO0FBd0ZTQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW5mb3JtYXRpb25Cb3gvSW5mb3JtYXRpb25Cb3guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSW5mb3JtYXRpb25Cb3gubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBhdmF0YXJTdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvYXZhdGFyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYnV0dG9uU3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9jb21wb25lbnRzL2J1dHRvbnMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7XG5cdEljb25GZWVkQmFjayxcblx0SWNvblNlYXJjaCxcblx0SWNvbkNsb3NlLFxuXHRJY29uTGFuLFxuXHRJY29uU2VuZCxcblx0SWNvbkFkZCxcblx0SWNvbkNoZWNrQ2lyY2xlLFxufSBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5cbmNvbnN0IEluZm9ybWF0aW9uQm94ID0gKCkgPT4ge1xuXHRjb25zdCBbaXNTaG93LCBzZXRJc1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbaXNDb21tZW50LCBzZXRJc0NvbW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuXHRcdHNldElzU2hvdyghaXNTaG93KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlQ29tbWVudCA9ICgpID0+IHtcblx0XHRzZXRJc0NvbW1lbnQoIWlzQ29tbWVudCk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9XcmFwcGVyfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1dyYXBwZXJJbm5lcn0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlclRpdGxlQm94fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cblx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHQ8SWNvbkZlZWRCYWNrIC8+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHTllY/poYzlkozoqI7oq5Zcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJveH0+XG5cdFx0XHRcdFx0XHR7aXNTaG93ID8gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLmkJzlsIvoqI7oq5ZcIiAvPiA6IG51bGx9XG5cdFx0XHRcdFx0XHR7IWlzU2hvdyA/IChcblx0XHRcdFx0XHRcdFx0PHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soKX0+XG5cdFx0XHRcdFx0XHRcdFx0PEljb25TZWFyY2ggLz5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHR7aXNTaG93ID8gKFxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygpfT5cblx0XHRcdFx0XHRcdFx0XHQ8SWNvbkNsb3NlIC8+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGROZXd9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTmV3Qm94fT5cblx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHQ8SWNvbkFkZCAvPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0gb25DbGljaz17KCkgPT4gaGFuZGxlQ29tbWVudCgpfT5cblx0XHRcdFx0XHRcdFx05paw5aKe6KiO6KuWXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e2lzQ29tbWVudCA/IChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTWVzc2FnZX0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXthdmF0YXJTdHlsZS5hdmF0YXJNbH0+RTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRBcmVhQm94fT5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCLmlrDlop7lm57opoZcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvblN0eWxlLmljb25CdXR0b25TbSB8fCBzdHlsZXMuYnV0dG9ufT5cblx0XHRcdFx0XHRcdFx0XHQ8SWNvblNlbmQgLz5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3RhbENvbW1lbnR9PjPlgIvoqI7oq5Y8L2Rpdj5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXthdmF0YXJTdHlsZS5hdmF0YXJNbH0+RTwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyR3JpZH0+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lVGV4dH0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5FcmljIHdhbmc8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PuW8teiyvCDigKIgMTIg5YCL5pyI5YmNPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXN9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJveH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uQ2hlY2tDaXJjbGUgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PuW3suino+axujwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Q29udGVudH0+Z29vb29vZCE8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXR0aWNlQm94fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhdHRpY2V9PisxPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT4wPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9ybWF0aW9uQm94O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/InformationBox/InformationBox.js\n");

/***/ })

})