webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ClassTitleWrapper/ClassTitleWrapper.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/ClassTitleWrapper/ClassTitleWrapper.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".ClassTitleWrapper_classTitleWrapper__1jLMf {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  width: 100%; }\\n  .ClassTitleWrapper_classTitleWrapper__1jLMf .ClassTitleWrapper_title__2QZNr {\\n    font-size: 32px;\\n    font-weight: 500;\\n    color: #fafafa; }\\n  .ClassTitleWrapper_classTitleWrapper__1jLMf > ul {\\n    display: flex;\\n    align-items: center; }\\n    .ClassTitleWrapper_classTitleWrapper__1jLMf > ul > li {\\n      margin-right: 15px;\\n      padding-right: 15px;\\n      border-right: 1px solid #fafafa;\\n      color: #fafafa; }\\n      .ClassTitleWrapper_classTitleWrapper__1jLMf > ul > li:last-child {\\n        margin-right: 0;\\n        padding-right: 0; }\\n\", \"\",{\"version\":3,\"sources\":[\"/Users/ericwang/Documents/workspace/basil/components/ClassTitleWrapper/ClassTitleWrapper.module.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/typeFont.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/_variable.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/_color.scss\"],\"names\":[],\"mappings\":\"AAIA;EACC,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW,EAAA;EAJZ;IAME,eCLa;IDMb,gBEMoB;IFLpB,cGHc,EAAA;EHLhB;IAWE,aAAa;IACb,mBAAmB,EAAA;IAZrB;MAcG,kBAAkB;MAClB,mBAAmB;MACnB,+BGXa;MHYb,cGZa,EAAA;MHLhB;QAmBI,eAAe;QACf,gBAAgB,EAAA\",\"file\":\"ClassTitleWrapper.module.scss\",\"sourcesContent\":[\"@import \\\"../../styles/global/color\\\";\\n@import \\\"../../styles/global/typeFont.scss\\\";\\n@import \\\"../../styles/global/variable\\\";\\n\\n.classTitleWrapper {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: space-between;\\n\\twidth: 100%;\\n\\t.title {\\n\\t\\tfont-size: map-get($desktopFont, $h1-size);\\n\\t\\tfont-weight: $font-weight-bold;\\n\\t\\tcolor: $gray03;\\n\\t}\\n\\t> ul {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\t> li {\\n\\t\\t\\tmargin-right: 15px;\\n\\t\\t\\tpadding-right: 15px;\\n\\t\\t\\tborder-right: 1px solid $gray03;\\n\\t\\t\\tcolor: $gray03;\\n\\t\\t\\t&:last-child {\\n\\t\\t\\t\\tmargin-right: 0;\\n\\t\\t\\t\\tpadding-right: 0;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\",\"@import \\\"./variable\\\";\\n\\n$desktopFont: (\\n\\t$h00-size: 48px,\\n\\t$h0-size: 40px,\\n\\t$h1-size: 32px,\\n\\t$h2-size: 24px,\\n\\t$h3-size: 20px,\\n\\t$h4-size: 16px,\\n\\t$h5-size: 14px,\\n\\t$h6-size: 12px,\\n);\\n\\n$mobileFont: (\\n\\t$h00-size-mobile: 40px,\\n\\t$h0-size-mobile: 32px,\\n\\t$h2-size-mobile: 22px,\\n\\t$h3-size-mobile: 18px,\\n);\\n\",\"// -------- desktop-font-size* --------\\n$h00-size: 48px;\\n$h0-size: 40px;\\n$h1-size: 32px;\\n$h2-size: 24px;\\n$h3-size: 20px;\\n$h4-size: 16px;\\n$h5-size: 14px;\\n$h6-size: 12px;\\n\\n// -------- mobile-font-size* --------\\n$h00-size-mobile: 40px;\\n$h0-size-mobile: 32px;\\n$h2-size-mobile: 22px;\\n$h3-size-mobile: 18px;\\n\\n// -------- font-weight* --------\\n$font-weight-bold: 500;\\n$font-weight-light: 300;\\n\\n// -------- box-shadow --------\\n$box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);\\n$box-shadow-medium: 1px 1px 5px rgba(27, 31, 35, 0.15);\\n\",\"// -------- Green --------\\n$green01: #dbe9db;\\n$green02: #a9c0b1;\\n$green03: #26d07c;\\n$green04: #1fff8f;\\n\\n// -------- Grays --------\\n$gray01: #fafbfc;\\n$gray02: #f6f8fa;\\n$gray03: #fafafa;\\n$gray04: #e1e4e8;\\n$gray05: #d1d5da;\\n$gray06: #959da5;\\n$gray07: #6a737d;\\n$gray08: #212121;\\n\\n// -------- Blue --------\\n$blue01: #f1f8ff;\\n$blue02: #dbedff;\\n$blue03: #c8e1ff;\\n$blue04: #79b8ff;\\n$blue05: #2188ff;\\n$blue06: #0366d6;\\n$blue10: #272c34;\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"classTitleWrapper\": \"ClassTitleWrapper_classTitleWrapper__1jLMf\",\n\t\"title\": \"ClassTitleWrapper_title__2QZNr\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsYXNzVGl0bGVXcmFwcGVyL0NsYXNzVGl0bGVXcmFwcGVyLm1vZHVsZS5zY3NzPzk3MjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxnREFBZ0Qsa0JBQWtCLHdCQUF3QixtQ0FBbUMsZ0JBQWdCLEVBQUUsaUZBQWlGLHNCQUFzQix1QkFBdUIscUJBQXFCLEVBQUUsc0RBQXNELG9CQUFvQiwwQkFBMEIsRUFBRSw2REFBNkQsMkJBQTJCLDRCQUE0Qix3Q0FBd0MsdUJBQXVCLEVBQUUsMEVBQTBFLDBCQUEwQiwyQkFBMkIsRUFBRSxTQUFTLGtYQUFrWCxVQUFVLFlBQVksYUFBYSxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksZ0JBQWdCLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxZQUFZLGFBQWEsWUFBWSxlQUFlLE1BQU0sV0FBVyxrSEFBa0gsZ0RBQWdELDJDQUEyQyx3QkFBd0Isa0JBQWtCLHdCQUF3QixtQ0FBbUMsZ0JBQWdCLFlBQVksaURBQWlELHFDQUFxQyxxQkFBcUIsS0FBSyxVQUFVLG9CQUFvQiwwQkFBMEIsWUFBWSwyQkFBMkIsNEJBQTRCLHdDQUF3Qyx1QkFBdUIsc0JBQXNCLDBCQUEwQiwyQkFBMkIsU0FBUyxPQUFPLEtBQUssR0FBRyw0QkFBNEIsZ0xBQWdMLCtIQUErSCw4REFBOEQsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLG1FQUFtRSx3QkFBd0Isd0JBQXdCLHdCQUF3Qiw4REFBOEQsMEJBQTBCLGtGQUFrRix5REFBeUQsbURBQW1ELG9CQUFvQixvQkFBb0Isb0JBQW9CLGlEQUFpRCxtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsZ0RBQWdELG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLEtBQUs7QUFDanpHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vY29tcG9uZW50cy9DbGFzc1RpdGxlV3JhcHBlci9DbGFzc1RpdGxlV3JhcHBlci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5DbGFzc1RpdGxlV3JhcHBlcl9jbGFzc1RpdGxlV3JhcHBlcl9fMWpMTWYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLkNsYXNzVGl0bGVXcmFwcGVyX2NsYXNzVGl0bGVXcmFwcGVyX18xakxNZiAuQ2xhc3NUaXRsZVdyYXBwZXJfdGl0bGVfXzJRWk5yIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogI2ZhZmFmYTsgfVxcbiAgLkNsYXNzVGl0bGVXcmFwcGVyX2NsYXNzVGl0bGVXcmFwcGVyX18xakxNZiA+IHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAuQ2xhc3NUaXRsZVdyYXBwZXJfY2xhc3NUaXRsZVdyYXBwZXJfXzFqTE1mID4gdWwgPiBsaSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZhZmFmYTtcXG4gICAgICBjb2xvcjogI2ZhZmFmYTsgfVxcbiAgICAgIC5DbGFzc1RpdGxlV3JhcHBlcl9jbGFzc1RpdGxlV3JhcHBlcl9fMWpMTWYgPiB1bCA+IGxpOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9lcmljd2FuZy9Eb2N1bWVudHMvd29ya3NwYWNlL2Jhc2lsL2NvbXBvbmVudHMvQ2xhc3NUaXRsZVdyYXBwZXIvQ2xhc3NUaXRsZVdyYXBwZXIubW9kdWxlLnNjc3NcIixcIi9Vc2Vycy9lcmljd2FuZy9Eb2N1bWVudHMvd29ya3NwYWNlL2Jhc2lsL3N0eWxlcy9nbG9iYWwvdHlwZUZvbnQuc2Nzc1wiLFwiL1VzZXJzL2VyaWN3YW5nL0RvY3VtZW50cy93b3Jrc3BhY2UvYmFzaWwvc3R5bGVzL2dsb2JhbC9fdmFyaWFibGUuc2Nzc1wiLFwiL1VzZXJzL2VyaWN3YW5nL0RvY3VtZW50cy93b3Jrc3BhY2UvYmFzaWwvc3R5bGVzL2dsb2JhbC9fY29sb3Iuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFdBQVcsRUFBQTtFQUpaO0lBTUUsZUNMYTtJRE1iLGdCRU1vQjtJRkxwQixjR0hjLEVBQUE7RUhMaEI7SUFXRSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7SUFackI7TUFjRyxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLCtCR1hhO01IWWIsY0daYSxFQUFBO01ITGhCO1FBbUJJLGVBQWU7UUFDZixnQkFBZ0IsRUFBQVwiLFwiZmlsZVwiOlwiQ2xhc3NUaXRsZVdyYXBwZXIubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vc3R5bGVzL2dsb2JhbC9jb2xvclxcXCI7XFxuQGltcG9ydCBcXFwiLi4vLi4vc3R5bGVzL2dsb2JhbC90eXBlRm9udC5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvZ2xvYmFsL3ZhcmlhYmxlXFxcIjtcXG5cXG4uY2xhc3NUaXRsZVdyYXBwZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0LnRpdGxlIHtcXG5cXHRcXHRmb250LXNpemU6IG1hcC1nZXQoJGRlc2t0b3BGb250LCAkaDEtc2l6ZSk7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkO1xcblxcdFxcdGNvbG9yOiAkZ3JheTAzO1xcblxcdH1cXG5cXHQ+IHVsIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0PiBsaSB7XFxuXFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xcblxcdFxcdFxcdHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuXFx0XFx0XFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGdyYXkwMztcXG5cXHRcXHRcXHRjb2xvcjogJGdyYXkwMztcXG5cXHRcXHRcXHQmOmxhc3QtY2hpbGQge1xcblxcdFxcdFxcdFxcdG1hcmdpbi1yaWdodDogMDtcXG5cXHRcXHRcXHRcXHRwYWRkaW5nLXJpZ2h0OiAwO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkBpbXBvcnQgXFxcIi4vdmFyaWFibGVcXFwiO1xcblxcbiRkZXNrdG9wRm9udDogKFxcblxcdCRoMDAtc2l6ZTogNDhweCxcXG5cXHQkaDAtc2l6ZTogNDBweCxcXG5cXHQkaDEtc2l6ZTogMzJweCxcXG5cXHQkaDItc2l6ZTogMjRweCxcXG5cXHQkaDMtc2l6ZTogMjBweCxcXG5cXHQkaDQtc2l6ZTogMTZweCxcXG5cXHQkaDUtc2l6ZTogMTRweCxcXG5cXHQkaDYtc2l6ZTogMTJweCxcXG4pO1xcblxcbiRtb2JpbGVGb250OiAoXFxuXFx0JGgwMC1zaXplLW1vYmlsZTogNDBweCxcXG5cXHQkaDAtc2l6ZS1tb2JpbGU6IDMycHgsXFxuXFx0JGgyLXNpemUtbW9iaWxlOiAyMnB4LFxcblxcdCRoMy1zaXplLW1vYmlsZTogMThweCxcXG4pO1xcblwiLFwiLy8gLS0tLS0tLS0gZGVza3RvcC1mb250LXNpemUqIC0tLS0tLS0tXFxuJGgwMC1zaXplOiA0OHB4O1xcbiRoMC1zaXplOiA0MHB4O1xcbiRoMS1zaXplOiAzMnB4O1xcbiRoMi1zaXplOiAyNHB4O1xcbiRoMy1zaXplOiAyMHB4O1xcbiRoNC1zaXplOiAxNnB4O1xcbiRoNS1zaXplOiAxNHB4O1xcbiRoNi1zaXplOiAxMnB4O1xcblxcbi8vIC0tLS0tLS0tIG1vYmlsZS1mb250LXNpemUqIC0tLS0tLS0tXFxuJGgwMC1zaXplLW1vYmlsZTogNDBweDtcXG4kaDAtc2l6ZS1tb2JpbGU6IDMycHg7XFxuJGgyLXNpemUtbW9iaWxlOiAyMnB4O1xcbiRoMy1zaXplLW1vYmlsZTogMThweDtcXG5cXG4vLyAtLS0tLS0tLSBmb250LXdlaWdodCogLS0tLS0tLS1cXG4kZm9udC13ZWlnaHQtYm9sZDogNTAwO1xcbiRmb250LXdlaWdodC1saWdodDogMzAwO1xcblxcbi8vIC0tLS0tLS0tIGJveC1zaGFkb3cgLS0tLS0tLS1cXG4kYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4kYm94LXNoYWRvdy1tZWRpdW06IDFweCAxcHggNXB4IHJnYmEoMjcsIDMxLCAzNSwgMC4xNSk7XFxuXCIsXCIvLyAtLS0tLS0tLSBHcmVlbiAtLS0tLS0tLVxcbiRncmVlbjAxOiAjZGJlOWRiO1xcbiRncmVlbjAyOiAjYTljMGIxO1xcbiRncmVlbjAzOiAjMjZkMDdjO1xcbiRncmVlbjA0OiAjMWZmZjhmO1xcblxcbi8vIC0tLS0tLS0tIEdyYXlzIC0tLS0tLS0tXFxuJGdyYXkwMTogI2ZhZmJmYztcXG4kZ3JheTAyOiAjZjZmOGZhO1xcbiRncmF5MDM6ICNmYWZhZmE7XFxuJGdyYXkwNDogI2UxZTRlODtcXG4kZ3JheTA1OiAjZDFkNWRhO1xcbiRncmF5MDY6ICM5NTlkYTU7XFxuJGdyYXkwNzogIzZhNzM3ZDtcXG4kZ3JheTA4OiAjMjEyMTIxO1xcblxcbi8vIC0tLS0tLS0tIEJsdWUgLS0tLS0tLS1cXG4kYmx1ZTAxOiAjZjFmOGZmO1xcbiRibHVlMDI6ICNkYmVkZmY7XFxuJGJsdWUwMzogI2M4ZTFmZjtcXG4kYmx1ZTA0OiAjNzliOGZmO1xcbiRibHVlMDU6ICMyMTg4ZmY7XFxuJGJsdWUwNjogIzAzNjZkNjtcXG4kYmx1ZTEwOiAjMjcyYzM0O1xcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNsYXNzVGl0bGVXcmFwcGVyXCI6IFwiQ2xhc3NUaXRsZVdyYXBwZXJfY2xhc3NUaXRsZVdyYXBwZXJfXzFqTE1mXCIsXG5cdFwidGl0bGVcIjogXCJDbGFzc1RpdGxlV3JhcHBlcl90aXRsZV9fMlFaTnJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ClassTitleWrapper/ClassTitleWrapper.module.scss\n");

/***/ })

})