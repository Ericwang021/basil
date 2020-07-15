webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/VideoBox/VideoBox.js":
/*!*****************************************!*\
  !*** ./components/VideoBox/VideoBox.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoBox.module.scss */ \"./components/VideoBox/VideoBox.module.scss\");\n/* harmony import */ var _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_player_lazy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player/lazy */ \"./node_modules/react-player/lazy/index.js\");\n/* harmony import */ var react_player_lazy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player_lazy__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/PlayArrow */ \"./node_modules/@material-ui/icons/PlayArrow.js\");\n/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/VolumeDown */ \"./node_modules/@material-ui/icons/VolumeDown.js\");\n/* harmony import */ var _material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/VolumeUp */ \"./node_modules/@material-ui/icons/VolumeUp.js\");\n/* harmony import */ var _material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_ClosedCaption__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ClosedCaption */ \"./node_modules/@material-ui/icons/ClosedCaption.js\");\n/* harmony import */ var _material_ui_icons_ClosedCaption__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ClosedCaption__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_CropFree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/CropFree */ \"./node_modules/@material-ui/icons/CropFree.js\");\n/* harmony import */ var _material_ui_icons_CropFree__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CropFree__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n // import Slider from \"@material-ui/core/Slider\";\n\n\n\n\n\n\nvar VideoBox = function VideoBox() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(30),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      value = _React$useState2[0],\n      setValue = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      unFold = _React$useState4[0],\n      setUnfold = _React$useState4[1];\n\n  var handleChange = function handleChange(event, newValue) {\n    setValue(newValue);\n  };\n\n  var handleOnMouseOver = function handleOnMouseOver() {\n    setUnfold(!unFold);\n  };\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n    container: true,\n    spacing: 2,\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.videoWrapper\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n    xs: 12,\n    className: \"videoPlayBox\"\n  }, __jsx(react_player_lazy__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    url: \"https://youtu.be/xjadNS2HBpM\",\n    className: \"player\",\n    width: \"100%\",\n    height: 500,\n    autoPlay: false,\n    controls: true,\n    volume: 1,\n    muted: false\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n    container: true,\n    spacing: 2,\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.playController\n  }, __jsx(\"div\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.playAndVolume\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n    item: true,\n    xs: true\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"IconButton\"], {\n    style: {\n      color: \"#fff\"\n    }\n  }, __jsx(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_5__[\"PlayArrowIcon\"], {\n    fontSize: \"large\",\n    style: {\n      color: \"#fff\"\n    }\n  }))), __jsx(_material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.volume,\n    style: {\n      color: \"#fff\"\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Slider\"], {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.volumeMiddle,\n    value: value,\n    onChange: handleChange,\n    style: {\n      color: \"#fff\"\n    }\n  }), __jsx(_material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.volume,\n    style: {\n      color: \"#fff\"\n    }\n  })), __jsx(\"div\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rightController\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"IconButton\"], {\n    style: {\n      color: \"#fff\"\n    }\n  }, __jsx(_material_ui_icons_ClosedCaption__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    fontSize: \"large\",\n    style: {\n      color: \"#fff\"\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"IconButton\"], {\n    style: {\n      color: \"#fff\"\n    }\n  }, __jsx(_material_ui_icons_CropFree__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    fontSize: \"large\",\n    style: {\n      color: \"#fff\"\n    }\n  })))), __jsx(\"div\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.videoMarker\n  }, __jsx(\"ul\", {\n    onMouseOver: handleOnMouseOver\n  }, __jsx(\"li\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.signup\n  }), __jsx(\"li\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.explore\n  }), __jsx(\"li\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.preview\n  }), __jsx(\"li\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.video\n  })), unFold ? __jsx(\"ul\", {\n    onMouseOut: function onMouseOut() {\n      return setUnfold(false);\n    },\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hidden\n  }, __jsx(\"li\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.signup\n  }, \"Signup\"), __jsx(\"li\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.explore\n  }, \"Explore\"), __jsx(\"li\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.preview\n  }, \"Course Preview\"), __jsx(\"li\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.video\n  }, \"Video & Markers\")) : null));\n};\n\n_s(VideoBox, \"xxggFfvWXyxH5F7khDfy3Vxi8Fs=\");\n\n_c = VideoBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"VideoBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvQm94L1ZpZGVvQm94LmpzP2E0N2MiXSwibmFtZXMiOlsiVmlkZW9Cb3giLCJSZWFjdCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVuRm9sZCIsInNldFVuZm9sZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJoYW5kbGVPbk1vdXNlT3ZlciIsInN0eWxlcyIsInZpZGVvV3JhcHBlciIsInBsYXlDb250cm9sbGVyIiwicGxheUFuZFZvbHVtZSIsImNvbG9yIiwidm9sdW1lIiwidm9sdW1lTWlkZGxlIiwicmlnaHRDb250cm9sbGVyIiwidmlkZW9NYXJrZXIiLCJzaWdudXAiLCJleHBsb3JlIiwicHJldmlldyIsInZpZGVvIiwiaGlkZGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSx3QkFDSUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FESjtBQUFBO0FBQUEsTUFDZkMsS0FEZTtBQUFBLE1BQ1JDLFFBRFE7O0FBQUEseUJBRU1ILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRk47QUFBQTtBQUFBLE1BRWZHLE1BRmU7QUFBQSxNQUVQQyxTQUZPOztBQUd0QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDekNMLFlBQVEsQ0FBQ0ssUUFBRCxDQUFSO0FBQ0EsR0FGRDs7QUFHQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDL0JKLGFBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDQSxHQUZEOztBQUdBLFNBQ0MsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFP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QUFJLGFBQVMsRUFBRVgsNERBQU0sQ0FBQ1k7QUFBdEIsdUJBSkQsQ0FETSxHQU9ILElBZEwsQ0F0Q0QsQ0FERDtBQXlEQSxDQWxFRDs7R0FBTXZCLFE7O0tBQUFBLFE7QUFvRVNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9WaWRlb0JveC9WaWRlb0JveC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVmlkZW9Cb3gubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tIFwicmVhY3QtcGxheWVyL2xhenlcIjtcbmltcG9ydCB7IEljb25CdXR0b24sIEdyaWQsIFNsaWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbXBvcnQgeyBQbGF5QXJyb3dJY29uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5QXJyb3dcIjtcbi8vIGltcG9ydCBTbGlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlclwiO1xuaW1wb3J0IFZvbHVtZURvd24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Wb2x1bWVEb3duXCI7XG5pbXBvcnQgVm9sdW1lVXAgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Wb2x1bWVVcFwiO1xuaW1wb3J0IENsb3NlZENhcHRpb25JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VkQ2FwdGlvblwiO1xuaW1wb3J0IENyb3BGcmVlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nyb3BGcmVlXCI7XG5cbmNvbnN0IFZpZGVvQm94ID0gKCkgPT4ge1xuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDMwKTtcblx0Y29uc3QgW3VuRm9sZCwgc2V0VW5mb2xkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuXHRcdHNldFZhbHVlKG5ld1ZhbHVlKTtcblx0fTtcblx0Y29uc3QgaGFuZGxlT25Nb3VzZU92ZXIgPSAoKSA9PiB7XG5cdFx0c2V0VW5mb2xkKCF1bkZvbGQpO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBjbGFzc05hbWU9e3N0eWxlcy52aWRlb1dyYXBwZXJ9PlxuXHRcdFx0PEdyaWQgeHM9ezEyfSBjbGFzc05hbWU9XCJ2aWRlb1BsYXlCb3hcIj5cblx0XHRcdFx0PFJlYWN0UGxheWVyXG5cdFx0XHRcdFx0dXJsPVwiaHR0cHM6Ly95b3V0dS5iZS94amFkTlMySEJwTVwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicGxheWVyXCJcblx0XHRcdFx0XHR3aWR0aD17XCIxMDAlXCJ9XG5cdFx0XHRcdFx0aGVpZ2h0PXs1MDB9XG5cdFx0XHRcdFx0YXV0b1BsYXk9e2ZhbHNlfVxuXHRcdFx0XHRcdGNvbnRyb2xzPXt0cnVlfVxuXHRcdFx0XHRcdHZvbHVtZT17MX1cblx0XHRcdFx0XHRtdXRlZD17ZmFsc2V9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0dyaWQ+XG5cdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gY2xhc3NOYW1lPXtzdHlsZXMucGxheUNvbnRyb2xsZXJ9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXlBbmRWb2x1bWV9PlxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM+XG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0+XG5cdFx0XHRcdFx0XHRcdDxQbGF5QXJyb3dJY29uIGZvbnRTaXplPVwibGFyZ2VcIiBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0gLz5cblx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0PFZvbHVtZURvd24gY2xhc3NOYW1lPXtzdHlsZXMudm9sdW1lfSBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0gLz5cblx0XHRcdFx0XHQ8U2xpZGVyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy52b2x1bWVNaWRkbGV9XG5cdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiIH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Vm9sdW1lVXAgY2xhc3NOYW1lPXtzdHlsZXMudm9sdW1lfSBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRDb250cm9sbGVyfT5cblx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0+XG5cdFx0XHRcdFx0XHQ8Q2xvc2VkQ2FwdGlvbkljb24gZm9udFNpemU9XCJsYXJnZVwiIHN0eWxlPXt7IGNvbG9yOiBcIiNmZmZcIiB9fSAvPlxuXHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0+XG5cdFx0XHRcdFx0XHQ8Q3JvcEZyZWVJY29uIGZvbnRTaXplPVwibGFyZ2VcIiBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0gLz5cblx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9HcmlkPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb01hcmtlcn0+XG5cdFx0XHRcdDx1bCBvbk1vdXNlT3Zlcj17aGFuZGxlT25Nb3VzZU92ZXJ9PlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e3N0eWxlcy5zaWdudXB9PjwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17c3R5bGVzLmV4cGxvcmV9PjwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17c3R5bGVzLnByZXZpZXd9PjwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvfT48L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHR7dW5Gb2xkID8gKFxuXHRcdFx0XHRcdDx1bCBvbk1vdXNlT3V0PXsoKSA9PiBzZXRVbmZvbGQoZmFsc2UpfSBjbGFzc05hbWU9e3N0eWxlcy5oaWRkZW59PlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17c3R5bGVzLnNpZ251cH0+U2lnbnVwPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e3N0eWxlcy5leHBsb3JlfT5FeHBsb3JlPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e3N0eWxlcy5wcmV2aWV3fT5Db3Vyc2UgUHJldmlldzwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW99PlZpZGVvICYgTWFya2VyczwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0dyaWQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlb0JveDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/VideoBox/VideoBox.js\n");

/***/ })

})