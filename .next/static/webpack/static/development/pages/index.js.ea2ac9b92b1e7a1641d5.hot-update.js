webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ClassInfoBox/ClassInfoBox.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/ClassInfoBox/ClassInfoBox.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".ClassInfoBox_classBoxWrapper__zELCn {\\n  width: 100%;\\n  height: 100%;\\n  border-bottom: 2px solid rgba(250, 250, 250, 0.1);\\n  padding-bottom: 15px;\\n  margin-bottom: 20px; }\\n  .ClassInfoBox_classBoxWrapper__zELCn .ClassInfoBox_classBoxWrapperInner__1fPb8 {\\n    width: 100%;\\n    display: flex;\\n    align-items: center;\\n    padding: 0 24px; }\\n    .ClassInfoBox_classBoxWrapper__zELCn .ClassInfoBox_classBoxWrapperInner__1fPb8 .ClassInfoBox_wrapperTitle__2kROL > ul li {\\n      font-size: 24px;\\n      font-weight: 600;\\n      color: #fafafa;\\n      line-height: 1.6em; }\\n\", \"\",{\"version\":3,\"sources\":[\"/Users/ericwang/Documents/workspace/basil/components/ClassInfoBox/ClassInfoBox.module.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/typeFont.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/_variable.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/_color.scss\"],\"names\":[],\"mappings\":\"AAGA;EACC,WAAW;EACX,YAAY;EACZ,iDAAiD;EACjD,oBAAoB;EACpB,mBAAmB,EAAA;EALpB;IAOE,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,eAAe,EAAA;IAVjB;MAcK,eCXU;MDYV,gBEDiB;MFEjB,cGVW;MHWX,kBAAkB,EAAA\",\"file\":\"ClassInfoBox.module.scss\",\"sourcesContent\":[\"@import \\\"../../styles/global/color\\\";\\n@import \\\"../../styles/global/typeFont.scss\\\";\\n\\n.classBoxWrapper {\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tborder-bottom: 2px solid rgba(250, 250, 250, 0.1);\\n\\tpadding-bottom: 15px;\\n\\tmargin-bottom: 20px;\\n\\t.classBoxWrapperInner {\\n\\t\\twidth: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 0 24px;\\n\\t\\t.wrapperTitle {\\n\\t\\t\\t> ul {\\n\\t\\t\\t\\tli {\\n\\t\\t\\t\\t\\tfont-size: map-get($desktopFont, $h2-size);\\n\\t\\t\\t\\t\\tfont-weight: $font-weight-bold;\\n\\t\\t\\t\\t\\tcolor: $gray03;\\n\\t\\t\\t\\t\\tline-height: 1.6em;\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\",\"@import \\\"./variable\\\";\\n\\n$desktopFont: (\\n\\t$h00-size: 48px,\\n\\t$h0-size: 40px,\\n\\t$h1-size: 32px,\\n\\t$h2-size: 24px,\\n\\t$h3-size: 20px,\\n\\t$h4-size: 16px,\\n\\t$h5-size: 14px,\\n\\t$h6-size: 12px,\\n);\\n\\n$mobileFont: (\\n\\t$h00-size-mobile: 40px,\\n\\t$h0-size-mobile: 32px,\\n\\t$h2-size-mobile: 22px,\\n\\t$h3-size-mobile: 18px,\\n);\\n\",\"// -------- desktop-font-size* --------\\n$h00-size: 48px;\\n$h0-size: 40px;\\n$h1-size: 32px;\\n$h2-size: 24px;\\n$h3-size: 20px;\\n$h4-size: 16px;\\n$h5-size: 14px;\\n$h6-size: 12px;\\n\\n// -------- mobile-font-size* --------\\n$h00-size-mobile: 40px;\\n$h0-size-mobile: 32px;\\n$h2-size-mobile: 22px;\\n$h3-size-mobile: 18px;\\n\\n// -------- font-weight* --------\\n$font-weight-bold: 600;\\n$font-weight-light: 300;\\n\\n// -------- box-shadow --------\\n$box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);\\n$box-shadow-medium: 1px 1px 5px rgba(27, 31, 35, 0.15);\\n\",\"// -------- Green --------\\n$green01: #dbe9db;\\n$green02: #a9c0b1;\\n$green03: #26d07c;\\n$green04: #1fff8f;\\n\\n// -------- Grays --------\\n$gray01: #fafbfc;\\n$gray02: #f6f8fa;\\n$gray03: #fafafa;\\n$gray04: #e1e4e8;\\n$gray05: #d1d5da;\\n$gray06: #959da5;\\n$gray07: #6a737d;\\n$gray08: #212121;\\n\\n// -------- Blue --------\\n$blue01: #f1f8ff;\\n$blue02: #dbedff;\\n$blue03: #c8e1ff;\\n$blue04: #79b8ff;\\n$blue05: #2188ff;\\n$blue06: #0366d6;\\n$blue10: #272c34;\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"classBoxWrapper\": \"ClassInfoBox_classBoxWrapper__zELCn\",\n\t\"classBoxWrapperInner\": \"ClassInfoBox_classBoxWrapperInner__1fPb8\",\n\t\"wrapperTitle\": \"ClassInfoBox_wrapperTitle__2kROL\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsYXNzSW5mb0JveC9DbGFzc0luZm9Cb3gubW9kdWxlLnNjc3M/ZWU5MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLHlDQUF5QyxnQkFBZ0IsaUJBQWlCLHNEQUFzRCx5QkFBeUIsd0JBQXdCLEVBQUUsb0ZBQW9GLGtCQUFrQixvQkFBb0IsMEJBQTBCLHNCQUFzQixFQUFFLGdJQUFnSSx3QkFBd0IseUJBQXlCLHVCQUF1QiwyQkFBMkIsRUFBRSxTQUFTLHdXQUF3VyxVQUFVLFVBQVUsWUFBWSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLGdCQUFnQixNQUFNLFVBQVUsWUFBWSxXQUFXLDZHQUE2RyxnREFBZ0Qsc0JBQXNCLGdCQUFnQixpQkFBaUIsc0RBQXNELHlCQUF5Qix3QkFBd0IsMkJBQTJCLGtCQUFrQixvQkFBb0IsMEJBQTBCLHNCQUFzQixxQkFBcUIsY0FBYyxjQUFjLHVEQUF1RCwyQ0FBMkMsMkJBQTJCLCtCQUErQixXQUFXLFNBQVMsT0FBTyxLQUFLLEdBQUcsNEJBQTRCLGdMQUFnTCwrSEFBK0gsOERBQThELGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixtRUFBbUUsd0JBQXdCLHdCQUF3Qix3QkFBd0IsOERBQThELDBCQUEwQixrRkFBa0YseURBQXlELG1EQUFtRCxvQkFBb0Isb0JBQW9CLG9CQUFvQixpREFBaUQsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLGdEQUFnRCxtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixLQUFLO0FBQzlqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vY29tcG9uZW50cy9DbGFzc0luZm9Cb3gvQ2xhc3NJbmZvQm94Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkNsYXNzSW5mb0JveF9jbGFzc0JveFdyYXBwZXJfX3pFTENuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4xKTtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxcbiAgLkNsYXNzSW5mb0JveF9jbGFzc0JveFdyYXBwZXJfX3pFTENuIC5DbGFzc0luZm9Cb3hfY2xhc3NCb3hXcmFwcGVySW5uZXJfXzFmUGI4IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjRweDsgfVxcbiAgICAuQ2xhc3NJbmZvQm94X2NsYXNzQm94V3JhcHBlcl9fekVMQ24gLkNsYXNzSW5mb0JveF9jbGFzc0JveFdyYXBwZXJJbm5lcl9fMWZQYjggLkNsYXNzSW5mb0JveF93cmFwcGVyVGl0bGVfXzJrUk9MID4gdWwgbGkge1xcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgIGNvbG9yOiAjZmFmYWZhO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9lcmljd2FuZy9Eb2N1bWVudHMvd29ya3NwYWNlL2Jhc2lsL2NvbXBvbmVudHMvQ2xhc3NJbmZvQm94L0NsYXNzSW5mb0JveC5tb2R1bGUuc2Nzc1wiLFwiL1VzZXJzL2VyaWN3YW5nL0RvY3VtZW50cy93b3Jrc3BhY2UvYmFzaWwvc3R5bGVzL2dsb2JhbC90eXBlRm9udC5zY3NzXCIsXCIvVXNlcnMvZXJpY3dhbmcvRG9jdW1lbnRzL3dvcmtzcGFjZS9iYXNpbC9zdHlsZXMvZ2xvYmFsL192YXJpYWJsZS5zY3NzXCIsXCIvVXNlcnMvZXJpY3dhbmcvRG9jdW1lbnRzL3dvcmtzcGFjZS9iYXNpbC9zdHlsZXMvZ2xvYmFsL19jb2xvci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0MsV0FBVztFQUNYLFlBQVk7RUFDWixpREFBaUQ7RUFDakQsb0JBQW9CO0VBQ3BCLG1CQUFtQixFQUFBO0VBTHBCO0lBT0UsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZSxFQUFBO0lBVmpCO01BY0ssZUNYVTtNRFlWLGdCRURpQjtNRkVqQixjR1ZXO01IV1gsa0JBQWtCLEVBQUFcIixcImZpbGVcIjpcIkNsYXNzSW5mb0JveC5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvZ2xvYmFsL2NvbG9yXFxcIjtcXG5AaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvZ2xvYmFsL3R5cGVGb250LnNjc3NcXFwiO1xcblxcbi5jbGFzc0JveFdyYXBwZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjEpO1xcblxcdHBhZGRpbmctYm90dG9tOiAxNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFx0LmNsYXNzQm94V3JhcHBlcklubmVyIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0cGFkZGluZzogMCAyNHB4O1xcblxcdFxcdC53cmFwcGVyVGl0bGUge1xcblxcdFxcdFxcdD4gdWwge1xcblxcdFxcdFxcdFxcdGxpIHtcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IG1hcC1nZXQoJGRlc2t0b3BGb250LCAkaDItc2l6ZSk7XFxuXFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkO1xcblxcdFxcdFxcdFxcdFxcdGNvbG9yOiAkZ3JheTAzO1xcblxcdFxcdFxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAxLjZlbTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQGltcG9ydCBcXFwiLi92YXJpYWJsZVxcXCI7XFxuXFxuJGRlc2t0b3BGb250OiAoXFxuXFx0JGgwMC1zaXplOiA0OHB4LFxcblxcdCRoMC1zaXplOiA0MHB4LFxcblxcdCRoMS1zaXplOiAzMnB4LFxcblxcdCRoMi1zaXplOiAyNHB4LFxcblxcdCRoMy1zaXplOiAyMHB4LFxcblxcdCRoNC1zaXplOiAxNnB4LFxcblxcdCRoNS1zaXplOiAxNHB4LFxcblxcdCRoNi1zaXplOiAxMnB4LFxcbik7XFxuXFxuJG1vYmlsZUZvbnQ6IChcXG5cXHQkaDAwLXNpemUtbW9iaWxlOiA0MHB4LFxcblxcdCRoMC1zaXplLW1vYmlsZTogMzJweCxcXG5cXHQkaDItc2l6ZS1tb2JpbGU6IDIycHgsXFxuXFx0JGgzLXNpemUtbW9iaWxlOiAxOHB4LFxcbik7XFxuXCIsXCIvLyAtLS0tLS0tLSBkZXNrdG9wLWZvbnQtc2l6ZSogLS0tLS0tLS1cXG4kaDAwLXNpemU6IDQ4cHg7XFxuJGgwLXNpemU6IDQwcHg7XFxuJGgxLXNpemU6IDMycHg7XFxuJGgyLXNpemU6IDI0cHg7XFxuJGgzLXNpemU6IDIwcHg7XFxuJGg0LXNpemU6IDE2cHg7XFxuJGg1LXNpemU6IDE0cHg7XFxuJGg2LXNpemU6IDEycHg7XFxuXFxuLy8gLS0tLS0tLS0gbW9iaWxlLWZvbnQtc2l6ZSogLS0tLS0tLS1cXG4kaDAwLXNpemUtbW9iaWxlOiA0MHB4O1xcbiRoMC1zaXplLW1vYmlsZTogMzJweDtcXG4kaDItc2l6ZS1tb2JpbGU6IDIycHg7XFxuJGgzLXNpemUtbW9iaWxlOiAxOHB4O1xcblxcbi8vIC0tLS0tLS0tIGZvbnQtd2VpZ2h0KiAtLS0tLS0tLVxcbiRmb250LXdlaWdodC1ib2xkOiA2MDA7XFxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XFxuXFxuLy8gLS0tLS0tLS0gYm94LXNoYWRvdyAtLS0tLS0tLVxcbiRib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiRib3gtc2hhZG93LW1lZGl1bTogMXB4IDFweCA1cHggcmdiYSgyNywgMzEsIDM1LCAwLjE1KTtcXG5cIixcIi8vIC0tLS0tLS0tIEdyZWVuIC0tLS0tLS0tXFxuJGdyZWVuMDE6ICNkYmU5ZGI7XFxuJGdyZWVuMDI6ICNhOWMwYjE7XFxuJGdyZWVuMDM6ICMyNmQwN2M7XFxuJGdyZWVuMDQ6ICMxZmZmOGY7XFxuXFxuLy8gLS0tLS0tLS0gR3JheXMgLS0tLS0tLS1cXG4kZ3JheTAxOiAjZmFmYmZjO1xcbiRncmF5MDI6ICNmNmY4ZmE7XFxuJGdyYXkwMzogI2ZhZmFmYTtcXG4kZ3JheTA0OiAjZTFlNGU4O1xcbiRncmF5MDU6ICNkMWQ1ZGE7XFxuJGdyYXkwNjogIzk1OWRhNTtcXG4kZ3JheTA3OiAjNmE3MzdkO1xcbiRncmF5MDg6ICMyMTIxMjE7XFxuXFxuLy8gLS0tLS0tLS0gQmx1ZSAtLS0tLS0tLVxcbiRibHVlMDE6ICNmMWY4ZmY7XFxuJGJsdWUwMjogI2RiZWRmZjtcXG4kYmx1ZTAzOiAjYzhlMWZmO1xcbiRibHVlMDQ6ICM3OWI4ZmY7XFxuJGJsdWUwNTogIzIxODhmZjtcXG4kYmx1ZTA2OiAjMDM2NmQ2O1xcbiRibHVlMTA6ICMyNzJjMzQ7XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY2xhc3NCb3hXcmFwcGVyXCI6IFwiQ2xhc3NJbmZvQm94X2NsYXNzQm94V3JhcHBlcl9fekVMQ25cIixcblx0XCJjbGFzc0JveFdyYXBwZXJJbm5lclwiOiBcIkNsYXNzSW5mb0JveF9jbGFzc0JveFdyYXBwZXJJbm5lcl9fMWZQYjhcIixcblx0XCJ3cmFwcGVyVGl0bGVcIjogXCJDbGFzc0luZm9Cb3hfd3JhcHBlclRpdGxlX18ya1JPTFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ClassInfoBox/ClassInfoBox.module.scss\n");

/***/ })

})