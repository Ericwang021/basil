webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/CardVideo/CardVideo.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/CardVideo/CardVideo.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".CardVideo_CardVideo__9NM1e {\\n  display: grid;\\n  grid-template-columns: 10% auto;\\n  grid-column-gap: 15px;\\n  -moz-column-gap: 15px;\\n       column-gap: 15px;\\n  margin-top: 25px; }\\n\\n.CardVideo_progress__2F8US {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 70px;\\n  height: 70px;\\n  border-radius: 50%;\\n  border: 3px solid #fafafa;\\n  padding: 20px; }\\n  .CardVideo_progress__2F8US .CardVideo_progressText__EzK0E {\\n    font-size: 20px;\\n    font-weight: 600;\\n    color: #fafafa; }\\n\\n.CardVideo_cardContent__8T01H .CardVideo_title__3fFBi {\\n  font-size: 20px;\\n  color: #fafafa;\\n  font-weight: 600; }\\n\\n.CardVideo_cardContent__8T01H .CardVideo_cardVideoList__2wBR_ {\\n  display: grid;\\n  grid-template-columns: 10% auto 10%;\\n  margin-top: 15px; }\\n\", \"\",{\"version\":3,\"sources\":[\"/Users/ericwang/Documents/workspace/basil/components/CardVideo/CardVideo.module.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/_color.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/typeFont.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/_variable.scss\"],\"names\":[],\"mappings\":\"AAGA;EACC,aAAa;EACb,+BAA+B;EAC/B,qBAAgB;EAAhB,qBAAgB;OAAhB,gBAAgB;EAChB,gBAAgB,EAAA;;AAEjB;EACC,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBCRe;EDSf,aAAa,EAAA;EATd;IAWE,eEba;IFcb,gBGJoB;IHKpB,cCbc,EAAA;;ADgBhB;EAEE,eEpBa;EFqBb,cCnBc;EDoBd,gBGZoB,EAAA;;AHQtB;EAOE,aAAa;EACb,mCAAmC;EACnC,gBAAgB,EAAA\",\"file\":\"CardVideo.module.scss\",\"sourcesContent\":[\"@import \\\"../../styles/global/_color.scss\\\";\\n@import \\\"../../styles/global/typeFont.scss\\\";\\n\\n.CardVideo {\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 10% auto;\\n\\tcolumn-gap: 15px;\\n\\tmargin-top: 25px;\\n}\\n.progress {\\n\\tposition: relative;\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\twidth: 70px;\\n\\theight: 70px;\\n\\tborder-radius: 50%;\\n\\tborder: 3px solid $gray03;\\n\\tpadding: 20px;\\n\\t.progressText {\\n\\t\\tfont-size: map-get($desktopFont, $h3-size);\\n\\t\\tfont-weight: $font-weight-bold;\\n\\t\\tcolor: $gray03;\\n\\t}\\n}\\n.cardContent {\\n\\t.title {\\n\\t\\tfont-size: map-get($desktopFont, $h3-size);\\n\\t\\tcolor: $gray03;\\n\\t\\tfont-weight: $font-weight-bold;\\n\\t}\\n\\t.cardVideoList {\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: 10% auto 10%;\\n\\t\\tmargin-top: 15px;\\n\\t}\\n}\\n\",\"// -------- Green --------\\n$green01: #dbe9db;\\n$green02: #a9c0b1;\\n$green03: #26d07c;\\n$green04: #1fff8f;\\n\\n// -------- Grays --------\\n$gray01: #fafbfc;\\n$gray02: #f6f8fa;\\n$gray03: #fafafa;\\n$gray04: #e1e4e8;\\n$gray05: #d1d5da;\\n$gray06: #959da5;\\n$gray07: #6a737d;\\n$gray08: #212121;\\n\\n// -------- Blue --------\\n$blue01: #f1f8ff;\\n$blue02: #dbedff;\\n$blue03: #c8e1ff;\\n$blue04: #79b8ff;\\n$blue05: #2188ff;\\n$blue06: #0366d6;\\n$blue10: #272c34;\\n\",\"@import \\\"./variable\\\";\\n\\n$desktopFont: (\\n\\t$h00-size: 48px,\\n\\t$h0-size: 40px,\\n\\t$h1-size: 32px,\\n\\t$h2-size: 24px,\\n\\t$h3-size: 20px,\\n\\t$h4-size: 16px,\\n\\t$h5-size: 14px,\\n\\t$h6-size: 12px,\\n);\\n\\n$mobileFont: (\\n\\t$h00-size-mobile: 40px,\\n\\t$h0-size-mobile: 32px,\\n\\t$h2-size-mobile: 22px,\\n\\t$h3-size-mobile: 18px,\\n);\\n\",\"// -------- desktop-font-size* --------\\n$h00-size: 48px;\\n$h0-size: 40px;\\n$h1-size: 32px;\\n$h2-size: 24px;\\n$h3-size: 20px;\\n$h4-size: 16px;\\n$h5-size: 14px;\\n$h6-size: 12px;\\n\\n// -------- mobile-font-size* --------\\n$h00-size-mobile: 40px;\\n$h0-size-mobile: 32px;\\n$h2-size-mobile: 22px;\\n$h3-size-mobile: 18px;\\n\\n// -------- font-weight* --------\\n$font-weight-bold: 600;\\n$font-weight-light: 300;\\n\\n// -------- box-shadow --------\\n$box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);\\n$box-shadow-medium: 1px 1px 5px rgba(27, 31, 35, 0.15);\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"CardVideo\": \"CardVideo_CardVideo__9NM1e\",\n\t\"progress\": \"CardVideo_progress__2F8US\",\n\t\"progressText\": \"CardVideo_progressText__EzK0E\",\n\t\"cardContent\": \"CardVideo_cardContent__8T01H\",\n\t\"title\": \"CardVideo_title__3fFBi\",\n\t\"cardVideoList\": \"CardVideo_cardVideoList__2wBR_\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRWaWRlby9DYXJkVmlkZW8ubW9kdWxlLnNjc3M/ZjAxMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGdDQUFnQyxrQkFBa0Isb0NBQW9DLDBCQUEwQiwwQkFBMEIsMEJBQTBCLHFCQUFxQixFQUFFLGdDQUFnQyx1QkFBdUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsOEJBQThCLGtCQUFrQixFQUFFLCtEQUErRCxzQkFBc0IsdUJBQXVCLHFCQUFxQixFQUFFLDJEQUEyRCxvQkFBb0IsbUJBQW1CLHFCQUFxQixFQUFFLG1FQUFtRSxrQkFBa0Isd0NBQXdDLHFCQUFxQixFQUFFLFNBQVMsa1dBQWtXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFlBQVksZUFBZSxLQUFLLFVBQVUsWUFBWSxpQkFBaUIsT0FBTyxXQUFXLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxZQUFZLGlIQUFpSCxnREFBZ0QsZ0JBQWdCLGtCQUFrQixvQ0FBb0MscUJBQXFCLHFCQUFxQixHQUFHLGFBQWEsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLGdCQUFnQixpQkFBaUIsdUJBQXVCLDhCQUE4QixrQkFBa0IsbUJBQW1CLGlEQUFpRCxxQ0FBcUMscUJBQXFCLEtBQUssR0FBRyxnQkFBZ0IsWUFBWSxpREFBaUQscUJBQXFCLHFDQUFxQyxLQUFLLG9CQUFvQixvQkFBb0IsMENBQTBDLHVCQUF1QixLQUFLLEdBQUcsbURBQW1ELG9CQUFvQixvQkFBb0Isb0JBQW9CLGlEQUFpRCxtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsZ0RBQWdELG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLDRCQUE0QixnTEFBZ0wsK0hBQStILDhEQUE4RCxpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsbUVBQW1FLHdCQUF3Qix3QkFBd0Isd0JBQXdCLDhEQUE4RCwwQkFBMEIsa0ZBQWtGLHlEQUF5RCxLQUFLO0FBQ2xwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vY29tcG9uZW50cy9DYXJkVmlkZW8vQ2FyZFZpZGVvLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkNhcmRWaWRlb19DYXJkVmlkZW9fXzlOTTFlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSBhdXRvO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxNXB4O1xcbiAgLW1vei1jb2x1bW4tZ2FwOiAxNXB4O1xcbiAgICAgICBjb2x1bW4tZ2FwOiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogMjVweDsgfVxcblxcbi5DYXJkVmlkZW9fcHJvZ3Jlc3NfXzJGOFVTIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNzBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmYWZhZmE7XFxuICBwYWRkaW5nOiAyMHB4OyB9XFxuICAuQ2FyZFZpZGVvX3Byb2dyZXNzX18yRjhVUyAuQ2FyZFZpZGVvX3Byb2dyZXNzVGV4dF9fRXpLMEUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjZmFmYWZhOyB9XFxuXFxuLkNhcmRWaWRlb19jYXJkQ29udGVudF9fOFQwMUggLkNhcmRWaWRlb190aXRsZV9fM2ZGQmkge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNmYWZhZmE7XFxuICBmb250LXdlaWdodDogNjAwOyB9XFxuXFxuLkNhcmRWaWRlb19jYXJkQ29udGVudF9fOFQwMUggLkNhcmRWaWRlb19jYXJkVmlkZW9MaXN0X18yd0JSXyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgYXV0byAxMCU7XFxuICBtYXJnaW4tdG9wOiAxNXB4OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2VyaWN3YW5nL0RvY3VtZW50cy93b3Jrc3BhY2UvYmFzaWwvY29tcG9uZW50cy9DYXJkVmlkZW8vQ2FyZFZpZGVvLm1vZHVsZS5zY3NzXCIsXCIvVXNlcnMvZXJpY3dhbmcvRG9jdW1lbnRzL3dvcmtzcGFjZS9iYXNpbC9zdHlsZXMvZ2xvYmFsL19jb2xvci5zY3NzXCIsXCIvVXNlcnMvZXJpY3dhbmcvRG9jdW1lbnRzL3dvcmtzcGFjZS9iYXNpbC9zdHlsZXMvZ2xvYmFsL3R5cGVGb250LnNjc3NcIixcIi9Vc2Vycy9lcmljd2FuZy9Eb2N1bWVudHMvd29ya3NwYWNlL2Jhc2lsL3N0eWxlcy9nbG9iYWwvX3ZhcmlhYmxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDQyxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLHFCQUFnQjtFQUFoQixxQkFBZ0I7T0FBaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVqQjtFQUNDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkNSZTtFRFNmLGFBQWEsRUFBQTtFQVRkO0lBV0UsZUViYTtJRmNiLGdCR0pvQjtJSEtwQixjQ2JjLEVBQUE7O0FEZ0JoQjtFQUVFLGVFcEJhO0VGcUJiLGNDbkJjO0VEb0JkLGdCR1pvQixFQUFBOztBSFF0QjtFQU9FLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsZ0JBQWdCLEVBQUFcIixcImZpbGVcIjpcIkNhcmRWaWRlby5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvZ2xvYmFsL19jb2xvci5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvZ2xvYmFsL3R5cGVGb250LnNjc3NcXFwiO1xcblxcbi5DYXJkVmlkZW8ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgYXV0bztcXG5cXHRjb2x1bW4tZ2FwOiAxNXB4O1xcblxcdG1hcmdpbi10b3A6IDI1cHg7XFxufVxcbi5wcm9ncmVzcyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR3aWR0aDogNzBweDtcXG5cXHRoZWlnaHQ6IDcwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlcjogM3B4IHNvbGlkICRncmF5MDM7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHQucHJvZ3Jlc3NUZXh0IHtcXG5cXHRcXHRmb250LXNpemU6IG1hcC1nZXQoJGRlc2t0b3BGb250LCAkaDMtc2l6ZSk7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkO1xcblxcdFxcdGNvbG9yOiAkZ3JheTAzO1xcblxcdH1cXG59XFxuLmNhcmRDb250ZW50IHtcXG5cXHQudGl0bGUge1xcblxcdFxcdGZvbnQtc2l6ZTogbWFwLWdldCgkZGVza3RvcEZvbnQsICRoMy1zaXplKTtcXG5cXHRcXHRjb2xvcjogJGdyYXkwMztcXG5cXHRcXHRmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJvbGQ7XFxuXFx0fVxcblxcdC5jYXJkVmlkZW9MaXN0IHtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIGF1dG8gMTAlO1xcblxcdFxcdG1hcmdpbi10b3A6IDE1cHg7XFxuXFx0fVxcbn1cXG5cIixcIi8vIC0tLS0tLS0tIEdyZWVuIC0tLS0tLS0tXFxuJGdyZWVuMDE6ICNkYmU5ZGI7XFxuJGdyZWVuMDI6ICNhOWMwYjE7XFxuJGdyZWVuMDM6ICMyNmQwN2M7XFxuJGdyZWVuMDQ6ICMxZmZmOGY7XFxuXFxuLy8gLS0tLS0tLS0gR3JheXMgLS0tLS0tLS1cXG4kZ3JheTAxOiAjZmFmYmZjO1xcbiRncmF5MDI6ICNmNmY4ZmE7XFxuJGdyYXkwMzogI2ZhZmFmYTtcXG4kZ3JheTA0OiAjZTFlNGU4O1xcbiRncmF5MDU6ICNkMWQ1ZGE7XFxuJGdyYXkwNjogIzk1OWRhNTtcXG4kZ3JheTA3OiAjNmE3MzdkO1xcbiRncmF5MDg6ICMyMTIxMjE7XFxuXFxuLy8gLS0tLS0tLS0gQmx1ZSAtLS0tLS0tLVxcbiRibHVlMDE6ICNmMWY4ZmY7XFxuJGJsdWUwMjogI2RiZWRmZjtcXG4kYmx1ZTAzOiAjYzhlMWZmO1xcbiRibHVlMDQ6ICM3OWI4ZmY7XFxuJGJsdWUwNTogIzIxODhmZjtcXG4kYmx1ZTA2OiAjMDM2NmQ2O1xcbiRibHVlMTA6ICMyNzJjMzQ7XFxuXCIsXCJAaW1wb3J0IFxcXCIuL3ZhcmlhYmxlXFxcIjtcXG5cXG4kZGVza3RvcEZvbnQ6IChcXG5cXHQkaDAwLXNpemU6IDQ4cHgsXFxuXFx0JGgwLXNpemU6IDQwcHgsXFxuXFx0JGgxLXNpemU6IDMycHgsXFxuXFx0JGgyLXNpemU6IDI0cHgsXFxuXFx0JGgzLXNpemU6IDIwcHgsXFxuXFx0JGg0LXNpemU6IDE2cHgsXFxuXFx0JGg1LXNpemU6IDE0cHgsXFxuXFx0JGg2LXNpemU6IDEycHgsXFxuKTtcXG5cXG4kbW9iaWxlRm9udDogKFxcblxcdCRoMDAtc2l6ZS1tb2JpbGU6IDQwcHgsXFxuXFx0JGgwLXNpemUtbW9iaWxlOiAzMnB4LFxcblxcdCRoMi1zaXplLW1vYmlsZTogMjJweCxcXG5cXHQkaDMtc2l6ZS1tb2JpbGU6IDE4cHgsXFxuKTtcXG5cIixcIi8vIC0tLS0tLS0tIGRlc2t0b3AtZm9udC1zaXplKiAtLS0tLS0tLVxcbiRoMDAtc2l6ZTogNDhweDtcXG4kaDAtc2l6ZTogNDBweDtcXG4kaDEtc2l6ZTogMzJweDtcXG4kaDItc2l6ZTogMjRweDtcXG4kaDMtc2l6ZTogMjBweDtcXG4kaDQtc2l6ZTogMTZweDtcXG4kaDUtc2l6ZTogMTRweDtcXG4kaDYtc2l6ZTogMTJweDtcXG5cXG4vLyAtLS0tLS0tLSBtb2JpbGUtZm9udC1zaXplKiAtLS0tLS0tLVxcbiRoMDAtc2l6ZS1tb2JpbGU6IDQwcHg7XFxuJGgwLXNpemUtbW9iaWxlOiAzMnB4O1xcbiRoMi1zaXplLW1vYmlsZTogMjJweDtcXG4kaDMtc2l6ZS1tb2JpbGU6IDE4cHg7XFxuXFxuLy8gLS0tLS0tLS0gZm9udC13ZWlnaHQqIC0tLS0tLS0tXFxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDYwMDtcXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcXG5cXG4vLyAtLS0tLS0tLSBib3gtc2hhZG93IC0tLS0tLS0tXFxuJGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuJGJveC1zaGFkb3ctbWVkaXVtOiAxcHggMXB4IDVweCByZ2JhKDI3LCAzMSwgMzUsIDAuMTUpO1xcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIkNhcmRWaWRlb1wiOiBcIkNhcmRWaWRlb19DYXJkVmlkZW9fXzlOTTFlXCIsXG5cdFwicHJvZ3Jlc3NcIjogXCJDYXJkVmlkZW9fcHJvZ3Jlc3NfXzJGOFVTXCIsXG5cdFwicHJvZ3Jlc3NUZXh0XCI6IFwiQ2FyZFZpZGVvX3Byb2dyZXNzVGV4dF9fRXpLMEVcIixcblx0XCJjYXJkQ29udGVudFwiOiBcIkNhcmRWaWRlb19jYXJkQ29udGVudF9fOFQwMUhcIixcblx0XCJ0aXRsZVwiOiBcIkNhcmRWaWRlb190aXRsZV9fM2ZGQmlcIixcblx0XCJjYXJkVmlkZW9MaXN0XCI6IFwiQ2FyZFZpZGVvX2NhcmRWaWRlb0xpc3RfXzJ3QlJfXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/CardVideo/CardVideo.module.scss\n");

/***/ })

})