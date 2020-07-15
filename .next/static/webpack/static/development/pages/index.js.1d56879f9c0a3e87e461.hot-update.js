webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/InformationBox/InformationBox.js":
/*!*****************************************************!*\
  !*** ./components/InformationBox/InformationBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformationBox.module.scss */ \"./components/InformationBox/InformationBox.module.scss\");\n/* harmony import */ var _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/buttons.module.scss */ \"./styles/components/buttons.module.scss\");\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Send */ \"./node_modules/@material-ui/icons/Send.js\");\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon/Icon */ \"./components/Icon/Icon.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\nvar InformationBox = function InformationBox() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      comment = _useState2[0],\n      setComment = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isFeedBack = _useState3[0],\n      setIsFeedBack = _useState3[1];\n\n  var handleClick = function handleClick() {\n    setShow(!show);\n  };\n\n  var handleComment = function handleComment() {\n    setComment(!comment);\n  };\n\n  var handleFeedback = function handleFeedback() {\n    setIsFeedBack(!isFeedBack);\n  };\n\n  return __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.infoWrapper\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.infoWrapperInner\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.wrapperTitleBox\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.title\n  }, __jsx(\"span\", null, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__[\"IconFeedBack\"], null)), \"\\u554F\\u984C\\u548C\\u8A0E\\u8AD6\"), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.searchBox\n  }, show ? __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"\\u641C\\u5C0B\\u8A0E\\u8AD6\"\n  }) : null, show ? __jsx(\"span\", {\n    onClick: function onClick() {\n      return handleClick();\n    }\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__[\"IconClose\"], null)) : __jsx(\"span\", {\n    onClick: function onClick() {\n      return handleClick();\n    }\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__[\"IconSearch\"], null)))), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.addNew\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.addNewBox\n  }, __jsx(\"span\", null, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__[\"IconAdd\"], null)), __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.text,\n    onClick: function onClick() {\n      return handleComment();\n    }\n  }, \"\\u65B0\\u589E\\u8A0E\\u8AD6\")), comment ? __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.addMessage\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatarMl\n  }, \"E\"), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.textAreaBox\n  }, __jsx(\"textarea\", {\n    placeholder: \"\\u65B0\\u589E\\u56DE\\u8986\"\n  })), __jsx(\"button\", {\n    className: _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.iconButtonSm || _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.button\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"IconButton\"], null, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    fontSize: \"small\"\n  })))) : null), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.comment\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.totalComment\n  }, \"3\\u500B\\u8A0E\\u8AD6\"), __jsx(\"ul\", null, __jsx(\"li\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatarMl || _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.avatar\n  }, \"E\"), __jsx(\"li\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentWrapper\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentBox\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.nameText\n  }, __jsx(\"div\", null, \"Eric wang\"), __jsx(\"div\", null, \"\\u5F35\\u8CBC \\u2022 12 \\u500B\\u6708\\u524D\")), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.iconBox\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__[\"IconCheckCircle\"], null)), __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.text\n  }, \"\\u5DF2\\u89E3\\u6C7A\"))), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentBox\n  }, __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentContent\n  }, \"goooood!\"), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.lattice\n  }, \"+1\"), __jsx(\"span\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.number\n  }, \"0\"))), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.feedback\n  }, __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.feedbackEvent\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatarSm || _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.avatar\n  }, \"E\"), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.feedbackText,\n    onClick: function onClick() {\n      return handleFeedback();\n    }\n  }, \"\\u56DE\\u8986\")), isFeedBack ? __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.addMessage\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatarMl\n  }, \"A\"), __jsx(\"div\", {\n    className: _InformationBox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.textAreaBox\n  }, __jsx(\"textarea\", {\n    placeholder: \"\\u65B0\\u589E\\u56DE\\u8986\"\n  })), __jsx(\"div\", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"IconButton\"], null, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    fontSize: \"small\"\n  })))) : null))))));\n};\n\n_s(InformationBox, \"xxX5j4StfkFgCUuRmT/PCh3txXU=\");\n\n_c = InformationBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InformationBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"InformationBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZm9ybWF0aW9uQm94L0luZm9ybWF0aW9uQm94LmpzP2YyNGQiXSwibmFtZXMiOlsiSW5mb3JtYXRpb25Cb3giLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiY29tbWVudCIsInNldENvbW1lbnQiLCJpc0ZlZWRCYWNrIiwic2V0SXNGZWVkQmFjayIsImhhbmRsZUNsaWNrIiwiaGFuZGxlQ29tbWVudCIsImhhbmRsZUZlZWRiYWNrIiwic3R5bGVzIiwiaW5mb1dyYXBwZXIiLCJpbmZvV3JhcHBlcklubmVyIiwid3JhcHBlclRpdGxlQm94IiwidGl0bGUiLCJzZWFyY2hCb3giLCJhZGROZXciLCJhZGROZXdCb3giLCJ0ZXh0IiwiYWRkTWVzc2FnZSIsImF2YXRhclN0eWxlIiwiYXZhdGFyTWwiLCJ0ZXh0QXJlYUJveCIsImJ1dHRvblN0eWxlIiwiaWNvbkJ1dHRvblNtIiwiYnV0dG9uIiwidG90YWxDb21tZW50IiwiYXZhdGFyIiwiY29tbWVudFdyYXBwZXIiLCJjb21tZW50Qm94IiwibmFtZVRleHQiLCJyaWdodENvbnRlbnQiLCJpY29uQm94IiwiY29tbWVudENvbnRlbnQiLCJsYXR0aWNlIiwibnVtYmVyIiwiZmVlZGJhY2siLCJmZWVkYmFja0V2ZW50IiwiYXZhdGFyU20iLCJmZWVkYmFja1RleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFVQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxLQUFELENBREo7QUFBQSxNQUNyQkMsSUFEcUI7QUFBQSxNQUNmQyxPQURlOztBQUFBLG1CQUVFRixzREFBUSxDQUFDLEtBQUQsQ0FGVjtBQUFBLE1BRXJCRyxPQUZxQjtBQUFBLE1BRVpDLFVBRlk7O0FBQUEsbUJBR1FKLHNEQUFRLENBQUMsS0FBRCxDQUhoQjtB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LGtFQUFNLENBQUNtQjtBQUF2QixLQUNDO0FBQU0sYUFBUyxFQUFFbkIsa0VBQU0sQ0FBQ3VCO0FBQXhCLGdCQURELEVBRUM7QUFBSyxhQUFTLEVBQUV2QixrRUFBTSxDQUFDcUI7QUFBdkIsS0FDQztBQUFNLGFBQVMsRUFBRXJCLGtFQUFNLENBQUN3QjtBQUF4QixVQURELEVBRUM7QUFBTSxhQUFTLEVBQUV4QixrRUFBTSxDQUFDeUI7QUFBeEIsU0FGRCxDQUZELENBYkQsRUFvQkM7QUFBSyxhQUFTLEVBQUV6QixrRUFBTSxDQUFDMEI7QUFBdkIsS0FDQztBQUFLLGFBQVMsRUFBRTFCLGtFQUFNLENBQUMyQjtBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFakIsNEVBQVcsQ0FBQ2tCLFFBQVosSUFBd0I1QixrRUFBTSxDQUFDaUI7QUFBL0MsU0FERCxFQUVDO0FBQ0MsYUFBUyxFQUFFakIsa0VBQU0sQ0FBQzZCLFlBRG5CO0FBRUMsV0FBTyxFQUFFO0FBQUEsYUFBTTlCLGNBQWMsRUFBcEI7QUFBQTtBQUZWLG9CQUZELENBREQsRUFVRUosVUFBVSxHQUNWO0FBQUssYUFBUyxFQUFFSyxrRUFBTSxDQUFDUztBQUF2QixLQUNDO0FBQUssYUFBUyxFQUFFQyw0RUFBVyxDQUFDQztBQUE1QixTQURELEVBRUM7QUFBSyxhQUFTLEVBQUVYLGtFQUFNLENBQUNZO0FBQXZCLEtBQ0M7QUFBVSxlQUFXLEVBQUM7QUFBdEIsSUFERCxDQUZELEVBS0MsbUJBQ0MsTUFBQyw0REFBRCxRQUNDLE1BQUMsOERBQUQ7QUFBVSxZQUFRLEVBQUM7QUFBbkIsSUFERCxDQURELENBTEQsQ0FEVSxHQVlQLElBdEJMLENBcEJELENBRkQsQ0FGRCxDQTVDRCxDQURELENBREQ7QUFvR0EsQ0FsSEQ7O0dBQU12QixjOztLQUFBQSxjO0FBb0hTQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW5mb3JtYXRpb25Cb3gvSW5mb3JtYXRpb25Cb3guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0luZm9ybWF0aW9uQm94Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYXZhdGFyU3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9jb21wb25lbnRzL2F2YXRhci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGJ1dHRvblN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9idXR0b25zLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZW5kSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlbmRcIjtcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7XG5cdEljb25GZWVkQmFjayxcblx0SWNvblNlYXJjaCxcblx0SWNvbkNsb3NlLFxuXHRJY29uTGFuLFxuXHRJY29uU2VuZCxcblx0SWNvbkFkZCxcblx0SWNvbkNoZWNrQ2lyY2xlLFxufSBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5cbmNvbnN0IEluZm9ybWF0aW9uQm94ID0gKCkgPT4ge1xuXHRjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2lzRmVlZEJhY2ssIHNldElzRmVlZEJhY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcblx0XHRzZXRTaG93KCFzaG93KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlQ29tbWVudCA9ICgpID0+IHtcblx0XHRzZXRDb21tZW50KCFjb21tZW50KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlRmVlZGJhY2sgPSAoKSA9PiB7XG5cdFx0c2V0SXNGZWVkQmFjayghaXNGZWVkQmFjayk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9XcmFwcGVyfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1dyYXBwZXJJbm5lcn0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlclRpdGxlQm94fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cblx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHQ8SWNvbkZlZWRCYWNrIC8+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHTllY/poYzlkozoqI7oq5Zcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJveH0+XG5cdFx0XHRcdFx0XHR7c2hvdyA/IDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi5pCc5bCL6KiO6KuWXCIgLz4gOiBudWxsfVxuXHRcdFx0XHRcdFx0e3Nob3cgPyAoXG5cdFx0XHRcdFx0XHRcdDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9PlxuXHRcdFx0XHRcdFx0XHRcdDxJY29uQ2xvc2UgLz5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soKX0+XG5cdFx0XHRcdFx0XHRcdFx0PEljb25TZWFyY2ggLz5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTmV3fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZE5ld0JveH0+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0PEljb25BZGQgLz5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbW1lbnQoKX0+XG5cdFx0XHRcdFx0XHRcdOaWsOWinuiojuirllxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtjb21tZW50ID8gKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRNZXNzYWdlfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2F2YXRhclN0eWxlLmF2YXRhck1sfT5FPC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEFyZWFCb3h9PlxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIuaWsOWinuWbnuimhlwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uU3R5bGUuaWNvbkJ1dHRvblNtIHx8IHN0eWxlcy5idXR0b259PlxuXHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFNlbmRJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3RhbENvbW1lbnR9PjPlgIvoqI7oq5Y8L2Rpdj5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXthdmF0YXJTdHlsZS5hdmF0YXJNbCB8fCBzdHlsZXMuYXZhdGFyfT5FPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50V3JhcHBlcn0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudEJveH0+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lVGV4dH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PkVyaWMgd2FuZzwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj7lvLXosrwg4oCiIDEyIOWAi+aciOWJjTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRDb250ZW50fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmljb25Cb3h9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbkNoZWNrQ2lyY2xlIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT7lt7Lop6Pmsbo8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRCb3h9PlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRDb250ZW50fT5nb29vb29kITwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0Q29udGVudH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sYXR0aWNlfT4rMTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0+MDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVlZGJhY2t9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVlZGJhY2tFdmVudH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YXZhdGFyU3R5bGUuYXZhdGFyU20gfHwgc3R5bGVzLmF2YXRhcn0+RTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5mZWVkYmFja1RleHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUZlZWRiYWNrKCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdOWbnuimhlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0e2lzRmVlZEJhY2sgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZE1lc3NhZ2V9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YXZhdGFyU3R5bGUuYXZhdGFyTWx9PkE8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0QXJlYUJveH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHBsYWNlaG9sZGVyPVwi5paw5aKe5Zue6KaGXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2VuZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9ybWF0aW9uQm94O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/InformationBox/InformationBox.js\n");

/***/ })

})