webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ClassTitleWrapper/ClassTitleWrapper.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/ClassTitleWrapper/ClassTitleWrapper.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".ClassTitleWrapper_classTitleWrapper__1jLMf {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  width: 100%; }\\n  .ClassTitleWrapper_classTitleWrapper__1jLMf .ClassTitleWrapper_title__2QZNr {\\n    font-size: 32px;\\n    font-weight: 600;\\n    color: #fafafa; }\\n  .ClassTitleWrapper_classTitleWrapper__1jLMf > ul {\\n    display: flex;\\n    align-items: center; }\\n    .ClassTitleWrapper_classTitleWrapper__1jLMf > ul > li {\\n      margin-right: 15px;\\n      padding-right: 15px;\\n      border-right: 1px solid #fafafa;\\n      color: #fafafa;\\n      font-size: 14px; }\\n      .ClassTitleWrapper_classTitleWrapper__1jLMf > ul > li:last-child {\\n        margin-right: 0;\\n        padding-right: 0;\\n        border-right: none; }\\n\", \"\",{\"version\":3,\"sources\":[\"/Users/ericwang/Documents/workspace/basil/components/ClassTitleWrapper/ClassTitleWrapper.module.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/typeFont.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/_variable.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/_color.scss\"],\"names\":[],\"mappings\":\"AAIA;EACC,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW,EAAA;EAJZ;IAME,eCLa;IDMb,gBEMoB;IFLpB,cGHc,EAAA;EHLhB;IAWE,aAAa;IACb,mBAAmB,EAAA;IAZrB;MAcG,kBAAkB;MAClB,mBAAmB;MACnB,+BGXa;MHYb,cGZa;MHab,eCbY,EAAA;MDLf;QAoBI,eAAe;QACf,gBAAgB;QAChB,kBAAkB,EAAA\",\"file\":\"ClassTitleWrapper.module.scss\",\"sourcesContent\":[\"@import \\\"../../styles/global/color\\\";\\n@import \\\"../../styles/global/typeFont.scss\\\";\\n@import \\\"../../styles/global/variable\\\";\\n\\n.classTitleWrapper {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: space-between;\\n\\twidth: 100%;\\n\\t.title {\\n\\t\\tfont-size: map-get($desktopFont, $h1-size);\\n\\t\\tfont-weight: $font-weight-bold;\\n\\t\\tcolor: $gray03;\\n\\t}\\n\\t> ul {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\t> li {\\n\\t\\t\\tmargin-right: 15px;\\n\\t\\t\\tpadding-right: 15px;\\n\\t\\t\\tborder-right: 1px solid $gray03;\\n\\t\\t\\tcolor: $gray03;\\n\\t\\t\\tfont-size: map-get($desktopFont, $h5-size);\\n\\t\\t\\t&:last-child {\\n\\t\\t\\t\\tmargin-right: 0;\\n\\t\\t\\t\\tpadding-right: 0;\\n\\t\\t\\t\\tborder-right: none;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\",\"@import \\\"./variable\\\";\\n\\n$desktopFont: (\\n\\t$h00-size: 48px,\\n\\t$h0-size: 40px,\\n\\t$h1-size: 32px,\\n\\t$h2-size: 24px,\\n\\t$h3-size: 20px,\\n\\t$h4-size: 16px,\\n\\t$h5-size: 14px,\\n\\t$h6-size: 12px,\\n);\\n\\n$mobileFont: (\\n\\t$h00-size-mobile: 40px,\\n\\t$h0-size-mobile: 32px,\\n\\t$h2-size-mobile: 22px,\\n\\t$h3-size-mobile: 18px,\\n);\\n\",\"// -------- desktop-font-size* --------\\n$h00-size: 48px;\\n$h0-size: 40px;\\n$h1-size: 32px;\\n$h2-size: 24px;\\n$h3-size: 20px;\\n$h4-size: 16px;\\n$h5-size: 14px;\\n$h6-size: 12px;\\n\\n// -------- mobile-font-size* --------\\n$h00-size-mobile: 40px;\\n$h0-size-mobile: 32px;\\n$h2-size-mobile: 22px;\\n$h3-size-mobile: 18px;\\n\\n// -------- font-weight* --------\\n$font-weight-bold: 600;\\n$font-weight-light: 300;\\n\\n// -------- box-shadow --------\\n$box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);\\n$box-shadow-medium: 1px 1px 5px rgba(27, 31, 35, 0.15);\\n\",\"// -------- Green --------\\n$green01: #dbe9db;\\n$green02: #a9c0b1;\\n$green03: #26d07c;\\n$green04: #1fff8f;\\n\\n// -------- Grays --------\\n$gray01: #fafbfc;\\n$gray02: #f6f8fa;\\n$gray03: #fafafa;\\n$gray04: #e1e4e8;\\n$gray05: #d1d5da;\\n$gray06: #959da5;\\n$gray07: #6a737d;\\n$gray08: #212121;\\n\\n// -------- Blue --------\\n$blue01: #f1f8ff;\\n$blue02: #dbedff;\\n$blue03: #c8e1ff;\\n$blue04: #79b8ff;\\n$blue05: #2188ff;\\n$blue06: #0366d6;\\n$blue10: #272c34;\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"classTitleWrapper\": \"ClassTitleWrapper_classTitleWrapper__1jLMf\",\n\t\"title\": \"ClassTitleWrapper_title__2QZNr\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsYXNzVGl0bGVXcmFwcGVyL0NsYXNzVGl0bGVXcmFwcGVyLm1vZHVsZS5zY3NzPzk3MjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxnREFBZ0Qsa0JBQWtCLHdCQUF3QixtQ0FBbUMsZ0JBQWdCLEVBQUUsaUZBQWlGLHNCQUFzQix1QkFBdUIscUJBQXFCLEVBQUUsc0RBQXNELG9CQUFvQiwwQkFBMEIsRUFBRSw2REFBNkQsMkJBQTJCLDRCQUE0Qix3Q0FBd0MsdUJBQXVCLHdCQUF3QixFQUFFLDBFQUEwRSwwQkFBMEIsMkJBQTJCLDZCQUE2QixFQUFFLFNBQVMsa1hBQWtYLFVBQVUsWUFBWSxhQUFhLGdCQUFnQixLQUFLLFVBQVUsWUFBWSxnQkFBZ0IsTUFBTSxVQUFVLGlCQUFpQixNQUFNLFlBQVksYUFBYSxZQUFZLFVBQVUsZUFBZSxLQUFLLFdBQVcsWUFBWSxtSEFBbUgsZ0RBQWdELDJDQUEyQyx3QkFBd0Isa0JBQWtCLHdCQUF3QixtQ0FBbUMsZ0JBQWdCLFlBQVksaURBQWlELHFDQUFxQyxxQkFBcUIsS0FBSyxVQUFVLG9CQUFvQiwwQkFBMEIsWUFBWSwyQkFBMkIsNEJBQTRCLHdDQUF3Qyx1QkFBdUIsbURBQW1ELHNCQUFzQiwwQkFBMEIsMkJBQTJCLDZCQUE2QixTQUFTLE9BQU8sS0FBSyxHQUFHLDRCQUE0QixnTEFBZ0wsK0hBQStILDhEQUE4RCxpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsbUVBQW1FLHdCQUF3Qix3QkFBd0Isd0JBQXdCLDhEQUE4RCwwQkFBMEIsa0ZBQWtGLHlEQUF5RCxtREFBbUQsb0JBQW9CLG9CQUFvQixvQkFBb0IsaURBQWlELG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixnREFBZ0QsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsS0FBSztBQUM1OEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9jb21wb25lbnRzL0NsYXNzVGl0bGVXcmFwcGVyL0NsYXNzVGl0bGVXcmFwcGVyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkNsYXNzVGl0bGVXcmFwcGVyX2NsYXNzVGl0bGVXcmFwcGVyX18xakxNZiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICAuQ2xhc3NUaXRsZVdyYXBwZXJfY2xhc3NUaXRsZVdyYXBwZXJfXzFqTE1mIC5DbGFzc1RpdGxlV3JhcHBlcl90aXRsZV9fMlFaTnIge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjZmFmYWZhOyB9XFxuICAuQ2xhc3NUaXRsZVdyYXBwZXJfY2xhc3NUaXRsZVdyYXBwZXJfXzFqTE1mID4gdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgIC5DbGFzc1RpdGxlV3JhcHBlcl9jbGFzc1RpdGxlV3JhcHBlcl9fMWpMTWYgPiB1bCA+IGxpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmFmYWZhO1xcbiAgICAgIGNvbG9yOiAjZmFmYWZhO1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDsgfVxcbiAgICAgIC5DbGFzc1RpdGxlV3JhcHBlcl9jbGFzc1RpdGxlV3JhcHBlcl9fMWpMTWYgPiB1bCA+IGxpOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9lcmljd2FuZy9Eb2N1bWVudHMvd29ya3NwYWNlL2Jhc2lsL2NvbXBvbmVudHMvQ2xhc3NUaXRsZVdyYXBwZXIvQ2xhc3NUaXRsZVdyYXBwZXIubW9kdWxlLnNjc3NcIixcIi9Vc2Vycy9lcmljd2FuZy9Eb2N1bWVudHMvd29ya3NwYWNlL2Jhc2lsL3N0eWxlcy9nbG9iYWwvdHlwZUZvbnQuc2Nzc1wiLFwiL1VzZXJzL2VyaWN3YW5nL0RvY3VtZW50cy93b3Jrc3BhY2UvYmFzaWwvc3R5bGVzL2dsb2JhbC9fdmFyaWFibGUuc2Nzc1wiLFwiL1VzZXJzL2VyaWN3YW5nL0RvY3VtZW50cy93b3Jrc3BhY2UvYmFzaWwvc3R5bGVzL2dsb2JhbC9fY29sb3Iuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFdBQVcsRUFBQTtFQUpaO0lBTUUsZUNMYTtJRE1iLGdCRU1vQjtJRkxwQixjR0hjLEVBQUE7RUhMaEI7SUFXRSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7SUFackI7TUFjRyxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLCtCR1hhO01IWWIsY0daYTtNSGFiLGVDYlksRUFBQTtNRExmO1FBb0JJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsa0JBQWtCLEVBQUFcIixcImZpbGVcIjpcIkNsYXNzVGl0bGVXcmFwcGVyLm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uLy4uL3N0eWxlcy9nbG9iYWwvY29sb3JcXFwiO1xcbkBpbXBvcnQgXFxcIi4uLy4uL3N0eWxlcy9nbG9iYWwvdHlwZUZvbnQuc2Nzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi4vLi4vc3R5bGVzL2dsb2JhbC92YXJpYWJsZVxcXCI7XFxuXFxuLmNsYXNzVGl0bGVXcmFwcGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdC50aXRsZSB7XFxuXFx0XFx0Zm9udC1zaXplOiBtYXAtZ2V0KCRkZXNrdG9wRm9udCwgJGgxLXNpemUpO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYm9sZDtcXG5cXHRcXHRjb2xvcjogJGdyYXkwMztcXG5cXHR9XFxuXFx0PiB1bCB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdD4gbGkge1xcblxcdFxcdFxcdG1hcmdpbi1yaWdodDogMTVweDtcXG5cXHRcXHRcXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcblxcdFxcdFxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRncmF5MDM7XFxuXFx0XFx0XFx0Y29sb3I6ICRncmF5MDM7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiBtYXAtZ2V0KCRkZXNrdG9wRm9udCwgJGg1LXNpemUpO1xcblxcdFxcdFxcdCY6bGFzdC1jaGlsZCB7XFxuXFx0XFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAwO1xcblxcdFxcdFxcdFxcdHBhZGRpbmctcmlnaHQ6IDA7XFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkBpbXBvcnQgXFxcIi4vdmFyaWFibGVcXFwiO1xcblxcbiRkZXNrdG9wRm9udDogKFxcblxcdCRoMDAtc2l6ZTogNDhweCxcXG5cXHQkaDAtc2l6ZTogNDBweCxcXG5cXHQkaDEtc2l6ZTogMzJweCxcXG5cXHQkaDItc2l6ZTogMjRweCxcXG5cXHQkaDMtc2l6ZTogMjBweCxcXG5cXHQkaDQtc2l6ZTogMTZweCxcXG5cXHQkaDUtc2l6ZTogMTRweCxcXG5cXHQkaDYtc2l6ZTogMTJweCxcXG4pO1xcblxcbiRtb2JpbGVGb250OiAoXFxuXFx0JGgwMC1zaXplLW1vYmlsZTogNDBweCxcXG5cXHQkaDAtc2l6ZS1tb2JpbGU6IDMycHgsXFxuXFx0JGgyLXNpemUtbW9iaWxlOiAyMnB4LFxcblxcdCRoMy1zaXplLW1vYmlsZTogMThweCxcXG4pO1xcblwiLFwiLy8gLS0tLS0tLS0gZGVza3RvcC1mb250LXNpemUqIC0tLS0tLS0tXFxuJGgwMC1zaXplOiA0OHB4O1xcbiRoMC1zaXplOiA0MHB4O1xcbiRoMS1zaXplOiAzMnB4O1xcbiRoMi1zaXplOiAyNHB4O1xcbiRoMy1zaXplOiAyMHB4O1xcbiRoNC1zaXplOiAxNnB4O1xcbiRoNS1zaXplOiAxNHB4O1xcbiRoNi1zaXplOiAxMnB4O1xcblxcbi8vIC0tLS0tLS0tIG1vYmlsZS1mb250LXNpemUqIC0tLS0tLS0tXFxuJGgwMC1zaXplLW1vYmlsZTogNDBweDtcXG4kaDAtc2l6ZS1tb2JpbGU6IDMycHg7XFxuJGgyLXNpemUtbW9iaWxlOiAyMnB4O1xcbiRoMy1zaXplLW1vYmlsZTogMThweDtcXG5cXG4vLyAtLS0tLS0tLSBmb250LXdlaWdodCogLS0tLS0tLS1cXG4kZm9udC13ZWlnaHQtYm9sZDogNjAwO1xcbiRmb250LXdlaWdodC1saWdodDogMzAwO1xcblxcbi8vIC0tLS0tLS0tIGJveC1zaGFkb3cgLS0tLS0tLS1cXG4kYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4kYm94LXNoYWRvdy1tZWRpdW06IDFweCAxcHggNXB4IHJnYmEoMjcsIDMxLCAzNSwgMC4xNSk7XFxuXCIsXCIvLyAtLS0tLS0tLSBHcmVlbiAtLS0tLS0tLVxcbiRncmVlbjAxOiAjZGJlOWRiO1xcbiRncmVlbjAyOiAjYTljMGIxO1xcbiRncmVlbjAzOiAjMjZkMDdjO1xcbiRncmVlbjA0OiAjMWZmZjhmO1xcblxcbi8vIC0tLS0tLS0tIEdyYXlzIC0tLS0tLS0tXFxuJGdyYXkwMTogI2ZhZmJmYztcXG4kZ3JheTAyOiAjZjZmOGZhO1xcbiRncmF5MDM6ICNmYWZhZmE7XFxuJGdyYXkwNDogI2UxZTRlODtcXG4kZ3JheTA1OiAjZDFkNWRhO1xcbiRncmF5MDY6ICM5NTlkYTU7XFxuJGdyYXkwNzogIzZhNzM3ZDtcXG4kZ3JheTA4OiAjMjEyMTIxO1xcblxcbi8vIC0tLS0tLS0tIEJsdWUgLS0tLS0tLS1cXG4kYmx1ZTAxOiAjZjFmOGZmO1xcbiRibHVlMDI6ICNkYmVkZmY7XFxuJGJsdWUwMzogI2M4ZTFmZjtcXG4kYmx1ZTA0OiAjNzliOGZmO1xcbiRibHVlMDU6ICMyMTg4ZmY7XFxuJGJsdWUwNjogIzAzNjZkNjtcXG4kYmx1ZTEwOiAjMjcyYzM0O1xcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNsYXNzVGl0bGVXcmFwcGVyXCI6IFwiQ2xhc3NUaXRsZVdyYXBwZXJfY2xhc3NUaXRsZVdyYXBwZXJfXzFqTE1mXCIsXG5cdFwidGl0bGVcIjogXCJDbGFzc1RpdGxlV3JhcHBlcl90aXRsZV9fMlFaTnJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ClassTitleWrapper/ClassTitleWrapper.module.scss\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/components/avatar.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/components/avatar.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".avatar_avatarSm__479-1 {\\n  width: 20px;\\n  height: 20px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 12px;\\n  font-weight: 600;\\n  padding: 10px;\\n  border-radius: 50%;\\n  color: #fff;\\n  background-color: #719a9a; }\\n\\n.avatar_avatarMl__nQbe1 {\\n  width: 30px;\\n  height: 30px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 14px;\\n  font-weight: 600;\\n  padding: 10px;\\n  border-radius: 50%;\\n  color: #fff;\\n  background-color: #719a9a; }\\n\\n.avatar_avatarLg__1VryI {\\n  width: 40px;\\n  height: 40px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 14px;\\n  font-weight: 600;\\n  padding: 10px;\\n  border-radius: 50%;\\n  color: #fff;\\n  background-color: #719a9a; }\\n\", \"\",{\"version\":3,\"sources\":[\"/Users/ericwang/Documents/workspace/basil/styles/components/avatar.module.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/typeFont.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/_variable.scss\"],\"names\":[],\"mappings\":\"AAkBA;EAbC,WAcoB;EAbpB,YAa0B;EAZ1B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eCAc;EDCd,gBEMqB;EFLrB,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,yBAAyB,EAAA;;AAM1B;EAhBC,WAiBoB;EAhBpB,YAgB0B;EAf1B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eCDc;EDEd,gBEMqB;EFLrB,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,yBAAyB,EAAA;;AAS1B;EAnBC,WAoBoB;EAnBpB,YAmB0B;EAlB1B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eCDc;EDEd,gBEMqB;EFLrB,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,yBAAyB,EAAA\",\"file\":\"avatar.module.scss\",\"sourcesContent\":[\"@import \\\"../global/typeFont.scss\\\";\\n@import \\\"../global/variable\\\";\\n@import \\\"../global/_color.scss\\\";\\n\\n@mixin avatar($width, $height, $fontSize: map-get($desktopFont, $h5-size)) {\\n\\twidth: $width;\\n\\theight: $height;\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\tfont-size: $fontSize;\\n\\tfont-weight: $font-weight-bold;\\n\\tpadding: 10px;\\n\\tborder-radius: 50%;\\n\\tcolor: #fff;\\n\\tbackground-color: #719a9a;\\n}\\n\\n.avatarSm {\\n\\t@include avatar(20px, 20px, map-get($desktopFont, $h6-size));\\n}\\n.avatarMl {\\n\\t@include avatar(30px, 30px);\\n}\\n.avatarLg {\\n\\t@include avatar(40px, 40px);\\n}\\n\",\"@import \\\"./variable\\\";\\n\\n$desktopFont: (\\n\\t$h00-size: 48px,\\n\\t$h0-size: 40px,\\n\\t$h1-size: 32px,\\n\\t$h2-size: 24px,\\n\\t$h3-size: 20px,\\n\\t$h4-size: 16px,\\n\\t$h5-size: 14px,\\n\\t$h6-size: 12px,\\n);\\n\\n$mobileFont: (\\n\\t$h00-size-mobile: 40px,\\n\\t$h0-size-mobile: 32px,\\n\\t$h2-size-mobile: 22px,\\n\\t$h3-size-mobile: 18px,\\n);\\n\",\"// -------- desktop-font-size* --------\\n$h00-size: 48px;\\n$h0-size: 40px;\\n$h1-size: 32px;\\n$h2-size: 24px;\\n$h3-size: 20px;\\n$h4-size: 16px;\\n$h5-size: 14px;\\n$h6-size: 12px;\\n\\n// -------- mobile-font-size* --------\\n$h00-size-mobile: 40px;\\n$h0-size-mobile: 32px;\\n$h2-size-mobile: 22px;\\n$h3-size-mobile: 18px;\\n\\n// -------- font-weight* --------\\n$font-weight-bold: 600;\\n$font-weight-light: 300;\\n\\n// -------- box-shadow --------\\n$box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);\\n$box-shadow-medium: 1px 1px 5px rgba(27, 31, 35, 0.15);\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"avatarSm\": \"avatar_avatarSm__479-1\",\n\t\"avatarMl\": \"avatar_avatarMl__nQbe1\",\n\t\"avatarLg\": \"avatar_avatarLg__1VryI\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3M/NGI1NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDRCQUE0QixnQkFBZ0IsaUJBQWlCLGtCQUFrQix3QkFBd0IsNEJBQTRCLG9CQUFvQixxQkFBcUIsa0JBQWtCLHVCQUF1QixnQkFBZ0IsOEJBQThCLEVBQUUsNkJBQTZCLGdCQUFnQixpQkFBaUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsb0JBQW9CLHFCQUFxQixrQkFBa0IsdUJBQXVCLGdCQUFnQiw4QkFBOEIsRUFBRSw2QkFBNkIsZ0JBQWdCLGlCQUFpQixrQkFBa0Isd0JBQXdCLDRCQUE0QixvQkFBb0IscUJBQXFCLGtCQUFrQix1QkFBdUIsZ0JBQWdCLDhCQUE4QixFQUFFLFNBQVMsdVJBQXVSLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsa0JBQWtCLE1BQU0sYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxhQUFhLGNBQWMsWUFBWSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLHFHQUFxRyxpQ0FBaUMsb0NBQW9DLGdGQUFnRixrQkFBa0Isb0JBQW9CLGtCQUFrQix3QkFBd0IsNEJBQTRCLHlCQUF5QixtQ0FBbUMsa0JBQWtCLHVCQUF1QixnQkFBZ0IsOEJBQThCLEdBQUcsZUFBZSxpRUFBaUUsR0FBRyxhQUFhLGdDQUFnQyxHQUFHLGFBQWEsZ0NBQWdDLEdBQUcsNEJBQTRCLGdMQUFnTCwrSEFBK0gsOERBQThELGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixtRUFBbUUsd0JBQXdCLHdCQUF3Qix3QkFBd0IsOERBQThELDBCQUEwQixrRkFBa0YseURBQXlELEtBQUs7QUFDLy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXZhdGFyX2F2YXRhclNtX180NzktMSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxOWE5YTsgfVxcblxcbi5hdmF0YXJfYXZhdGFyTWxfX25RYmUxIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE5YTlhOyB9XFxuXFxuLmF2YXRhcl9hdmF0YXJMZ19fMVZyeUkge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTlhOWE7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZXJpY3dhbmcvRG9jdW1lbnRzL3dvcmtzcGFjZS9iYXNpbC9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3NcIixcIi9Vc2Vycy9lcmljd2FuZy9Eb2N1bWVudHMvd29ya3NwYWNlL2Jhc2lsL3N0eWxlcy9nbG9iYWwvdHlwZUZvbnQuc2Nzc1wiLFwiL1VzZXJzL2VyaWN3YW5nL0RvY3VtZW50cy93b3Jrc3BhY2UvYmFzaWwvc3R5bGVzL2dsb2JhbC9fdmFyaWFibGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFrQkE7RUFiQyxXQWNvQjtFQWJwQixZQWEwQjtFQVoxQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQ0FjO0VEQ2QsZ0JFTXFCO0VGTHJCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQU0xQjtFQWhCQyxXQWlCb0I7RUFoQnBCLFlBZ0IwQjtFQWYxQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQ0RjO0VERWQsZ0JFTXFCO0VGTHJCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQVMxQjtFQW5CQyxXQW9Cb0I7RUFuQnBCLFlBbUIwQjtFQWxCMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUNEYztFREVkLGdCRU1xQjtFRkxyQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQVwiLFwiZmlsZVwiOlwiYXZhdGFyLm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uL2dsb2JhbC90eXBlRm9udC5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuLi9nbG9iYWwvdmFyaWFibGVcXFwiO1xcbkBpbXBvcnQgXFxcIi4uL2dsb2JhbC9fY29sb3Iuc2Nzc1xcXCI7XFxuXFxuQG1peGluIGF2YXRhcigkd2lkdGgsICRoZWlnaHQsICRmb250U2l6ZTogbWFwLWdldCgkZGVza3RvcEZvbnQsICRoNS1zaXplKSkge1xcblxcdHdpZHRoOiAkd2lkdGg7XFxuXFx0aGVpZ2h0OiAkaGVpZ2h0O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6ICRmb250U2l6ZTtcXG5cXHRmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJvbGQ7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzcxOWE5YTtcXG59XFxuXFxuLmF2YXRhclNtIHtcXG5cXHRAaW5jbHVkZSBhdmF0YXIoMjBweCwgMjBweCwgbWFwLWdldCgkZGVza3RvcEZvbnQsICRoNi1zaXplKSk7XFxufVxcbi5hdmF0YXJNbCB7XFxuXFx0QGluY2x1ZGUgYXZhdGFyKDMwcHgsIDMwcHgpO1xcbn1cXG4uYXZhdGFyTGcge1xcblxcdEBpbmNsdWRlIGF2YXRhcig0MHB4LCA0MHB4KTtcXG59XFxuXCIsXCJAaW1wb3J0IFxcXCIuL3ZhcmlhYmxlXFxcIjtcXG5cXG4kZGVza3RvcEZvbnQ6IChcXG5cXHQkaDAwLXNpemU6IDQ4cHgsXFxuXFx0JGgwLXNpemU6IDQwcHgsXFxuXFx0JGgxLXNpemU6IDMycHgsXFxuXFx0JGgyLXNpemU6IDI0cHgsXFxuXFx0JGgzLXNpemU6IDIwcHgsXFxuXFx0JGg0LXNpemU6IDE2cHgsXFxuXFx0JGg1LXNpemU6IDE0cHgsXFxuXFx0JGg2LXNpemU6IDEycHgsXFxuKTtcXG5cXG4kbW9iaWxlRm9udDogKFxcblxcdCRoMDAtc2l6ZS1tb2JpbGU6IDQwcHgsXFxuXFx0JGgwLXNpemUtbW9iaWxlOiAzMnB4LFxcblxcdCRoMi1zaXplLW1vYmlsZTogMjJweCxcXG5cXHQkaDMtc2l6ZS1tb2JpbGU6IDE4cHgsXFxuKTtcXG5cIixcIi8vIC0tLS0tLS0tIGRlc2t0b3AtZm9udC1zaXplKiAtLS0tLS0tLVxcbiRoMDAtc2l6ZTogNDhweDtcXG4kaDAtc2l6ZTogNDBweDtcXG4kaDEtc2l6ZTogMzJweDtcXG4kaDItc2l6ZTogMjRweDtcXG4kaDMtc2l6ZTogMjBweDtcXG4kaDQtc2l6ZTogMTZweDtcXG4kaDUtc2l6ZTogMTRweDtcXG4kaDYtc2l6ZTogMTJweDtcXG5cXG4vLyAtLS0tLS0tLSBtb2JpbGUtZm9udC1zaXplKiAtLS0tLS0tLVxcbiRoMDAtc2l6ZS1tb2JpbGU6IDQwcHg7XFxuJGgwLXNpemUtbW9iaWxlOiAzMnB4O1xcbiRoMi1zaXplLW1vYmlsZTogMjJweDtcXG4kaDMtc2l6ZS1tb2JpbGU6IDE4cHg7XFxuXFxuLy8gLS0tLS0tLS0gZm9udC13ZWlnaHQqIC0tLS0tLS0tXFxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDYwMDtcXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcXG5cXG4vLyAtLS0tLS0tLSBib3gtc2hhZG93IC0tLS0tLS0tXFxuJGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuJGJveC1zaGFkb3ctbWVkaXVtOiAxcHggMXB4IDVweCByZ2JhKDI3LCAzMSwgMzUsIDAuMTUpO1xcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImF2YXRhclNtXCI6IFwiYXZhdGFyX2F2YXRhclNtX180NzktMVwiLFxuXHRcImF2YXRhck1sXCI6IFwiYXZhdGFyX2F2YXRhck1sX19uUWJlMVwiLFxuXHRcImF2YXRhckxnXCI6IFwiYXZhdGFyX2F2YXRhckxnX18xVnJ5SVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/components/avatar.module.scss\n");

/***/ })

})