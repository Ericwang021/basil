webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/CardVideo/CardVideo.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/CardVideo/CardVideo.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".CardVideo_CardVideo__9NM1e {\\n  display: grid;\\n  grid-template-columns: 10% auto;\\n  grid-column-gap: 15px;\\n  -moz-column-gap: 15px;\\n       column-gap: 15px;\\n  margin-top: 25px; }\\n\\n.CardVideo_progress__2F8US {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 70px;\\n  height: 70px;\\n  border-radius: 50%;\\n  border: 3px solid #fafafa;\\n  padding: 20px; }\\n  .CardVideo_progress__2F8US .CardVideo_progressText__EzK0E {\\n    font-size: 20px;\\n    font-weight: 600;\\n    color: #fafafa; }\\n\\n.CardVideo_cardContent__8T01H .CardVideo_title__3fFBi {\\n  font-size: 20px;\\n  color: #fafafa;\\n  font-weight: 600; }\\n\\n.CardVideo_cardContent__8T01H .CardVideo_cardVideoList__2wBR_ {\\n  display: grid;\\n  align-items: center;\\n  grid-template-columns: 10% auto 10%;\\n  grid-column-gap: 10px;\\n  -moz-column-gap: 10px;\\n       column-gap: 10px;\\n  margin-top: 15px; }\\n  .CardVideo_cardContent__8T01H .CardVideo_cardVideoList__2wBR_ > li i {\\n    color: #fafafa; }\\n    .CardVideo_cardContent__8T01H .CardVideo_cardVideoList__2wBR_ > li i svg {\\n      width: 24px;\\n      height: 24px; }\\n\", \"\",{\"version\":3,\"sources\":[\"/Users/ericwang/Documents/workspace/basil/components/CardVideo/CardVideo.module.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/_color.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/typeFont.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/_variable.scss\"],\"names\":[],\"mappings\":\"AAGA;EACC,aAAa;EACb,+BAA+B;EAC/B,qBAAgB;EAAhB,qBAAgB;OAAhB,gBAAgB;EAChB,gBAAgB,EAAA;;AAEjB;EACC,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBCRe;EDSf,aAAa,EAAA;EATd;IAWE,eEba;IFcb,gBGJoB;IHKpB,cCbc,EAAA;;ADgBhB;EAEE,eEpBa;EFqBb,cCnBc;EDoBd,gBGZoB,EAAA;;AHQtB;EAOE,aAAa;EACb,mBAAmB;EACnB,mCAAmC;EACnC,qBAAgB;EAAhB,qBAAgB;OAAhB,gBAAgB;EAChB,gBAAgB,EAAA;EAXlB;IAcI,cC9BY,EAAA;IDgBhB;MAgBK,WAAW;MACX,YAAY,EAAA\",\"file\":\"CardVideo.module.scss\",\"sourcesContent\":[\"@import \\\"../../styles/global/_color.scss\\\";\\n@import \\\"../../styles/global/typeFont.scss\\\";\\n\\n.CardVideo {\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 10% auto;\\n\\tcolumn-gap: 15px;\\n\\tmargin-top: 25px;\\n}\\n.progress {\\n\\tposition: relative;\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\twidth: 70px;\\n\\theight: 70px;\\n\\tborder-radius: 50%;\\n\\tborder: 3px solid $gray03;\\n\\tpadding: 20px;\\n\\t.progressText {\\n\\t\\tfont-size: map-get($desktopFont, $h3-size);\\n\\t\\tfont-weight: $font-weight-bold;\\n\\t\\tcolor: $gray03;\\n\\t}\\n}\\n.cardContent {\\n\\t.title {\\n\\t\\tfont-size: map-get($desktopFont, $h3-size);\\n\\t\\tcolor: $gray03;\\n\\t\\tfont-weight: $font-weight-bold;\\n\\t}\\n\\t.cardVideoList {\\n\\t\\tdisplay: grid;\\n\\t\\talign-items: center;\\n\\t\\tgrid-template-columns: 10% auto 10%;\\n\\t\\tcolumn-gap: 10px;\\n\\t\\tmargin-top: 15px;\\n\\t\\t> li {\\n\\t\\t\\ti {\\n\\t\\t\\t\\tcolor: $gray03;\\n\\t\\t\\t\\tsvg {\\n\\t\\t\\t\\t\\twidth: 24px;\\n\\t\\t\\t\\t\\theight: 24px;\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\",\"// -------- Green --------\\n$green01: #dbe9db;\\n$green02: #a9c0b1;\\n$green03: #26d07c;\\n$green04: #1fff8f;\\n\\n// -------- Grays --------\\n$gray01: #fafbfc;\\n$gray02: #f6f8fa;\\n$gray03: #fafafa;\\n$gray04: #e1e4e8;\\n$gray05: #d1d5da;\\n$gray06: #959da5;\\n$gray07: #6a737d;\\n$gray08: #212121;\\n\\n// -------- Blue --------\\n$blue01: #f1f8ff;\\n$blue02: #dbedff;\\n$blue03: #c8e1ff;\\n$blue04: #79b8ff;\\n$blue05: #2188ff;\\n$blue06: #0366d6;\\n$blue10: #272c34;\\n\",\"@import \\\"./variable\\\";\\n\\n$desktopFont: (\\n\\t$h00-size: 48px,\\n\\t$h0-size: 40px,\\n\\t$h1-size: 32px,\\n\\t$h2-size: 24px,\\n\\t$h3-size: 20px,\\n\\t$h4-size: 16px,\\n\\t$h5-size: 14px,\\n\\t$h6-size: 12px,\\n);\\n\\n$mobileFont: (\\n\\t$h00-size-mobile: 40px,\\n\\t$h0-size-mobile: 32px,\\n\\t$h2-size-mobile: 22px,\\n\\t$h3-size-mobile: 18px,\\n);\\n\",\"// -------- desktop-font-size* --------\\n$h00-size: 48px;\\n$h0-size: 40px;\\n$h1-size: 32px;\\n$h2-size: 24px;\\n$h3-size: 20px;\\n$h4-size: 16px;\\n$h5-size: 14px;\\n$h6-size: 12px;\\n\\n// -------- mobile-font-size* --------\\n$h00-size-mobile: 40px;\\n$h0-size-mobile: 32px;\\n$h2-size-mobile: 22px;\\n$h3-size-mobile: 18px;\\n\\n// -------- font-weight* --------\\n$font-weight-bold: 600;\\n$font-weight-light: 300;\\n\\n// -------- box-shadow --------\\n$box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);\\n$box-shadow-medium: 1px 1px 5px rgba(27, 31, 35, 0.15);\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"CardVideo\": \"CardVideo_CardVideo__9NM1e\",\n\t\"progress\": \"CardVideo_progress__2F8US\",\n\t\"progressText\": \"CardVideo_progressText__EzK0E\",\n\t\"cardContent\": \"CardVideo_cardContent__8T01H\",\n\t\"title\": \"CardVideo_title__3fFBi\",\n\t\"cardVideoList\": \"CardVideo_cardVideoList__2wBR_\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRWaWRlby9DYXJkVmlkZW8ubW9kdWxlLnNjc3M/ZjAxMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGdDQUFnQyxrQkFBa0Isb0NBQW9DLDBCQUEwQiwwQkFBMEIsMEJBQTBCLHFCQUFxQixFQUFFLGdDQUFnQyx1QkFBdUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsOEJBQThCLGtCQUFrQixFQUFFLCtEQUErRCxzQkFBc0IsdUJBQXVCLHFCQUFxQixFQUFFLDJEQUEyRCxvQkFBb0IsbUJBQW1CLHFCQUFxQixFQUFFLG1FQUFtRSxrQkFBa0Isd0JBQXdCLHdDQUF3QywwQkFBMEIsMEJBQTBCLDBCQUEwQixxQkFBcUIsRUFBRSwwRUFBMEUscUJBQXFCLEVBQUUsZ0ZBQWdGLG9CQUFvQixxQkFBcUIsRUFBRSxTQUFTLGtXQUFrVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxZQUFZLGVBQWUsS0FBSyxVQUFVLFlBQVksaUJBQWlCLE9BQU8sV0FBVyxZQUFZLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGtCQUFrQixNQUFNLGdCQUFnQixPQUFPLFdBQVcsOEdBQThHLGdEQUFnRCxnQkFBZ0Isa0JBQWtCLG9DQUFvQyxxQkFBcUIscUJBQXFCLEdBQUcsYUFBYSx1QkFBdUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsOEJBQThCLGtCQUFrQixtQkFBbUIsaURBQWlELHFDQUFxQyxxQkFBcUIsS0FBSyxHQUFHLGdCQUFnQixZQUFZLGlEQUFpRCxxQkFBcUIscUNBQXFDLEtBQUssb0JBQW9CLG9CQUFvQiwwQkFBMEIsMENBQTBDLHVCQUF1Qix1QkFBdUIsWUFBWSxXQUFXLHlCQUF5QixlQUFlLHdCQUF3Qix5QkFBeUIsV0FBVyxTQUFTLE9BQU8sS0FBSyxHQUFHLG1EQUFtRCxvQkFBb0Isb0JBQW9CLG9CQUFvQixpREFBaUQsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLGdEQUFnRCxtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQiw0QkFBNEIsZ0xBQWdMLCtIQUErSCw4REFBOEQsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLG1FQUFtRSx3QkFBd0Isd0JBQXdCLHdCQUF3Qiw4REFBOEQsMEJBQTBCLGtGQUFrRix5REFBeUQsS0FBSztBQUMzdkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL2NvbXBvbmVudHMvQ2FyZFZpZGVvL0NhcmRWaWRlby5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5DYXJkVmlkZW9fQ2FyZFZpZGVvX185Tk0xZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgYXV0bztcXG4gIGdyaWQtY29sdW1uLWdhcDogMTVweDtcXG4gIC1tb3otY29sdW1uLWdhcDogMTVweDtcXG4gICAgICAgY29sdW1uLWdhcDogMTVweDtcXG4gIG1hcmdpbi10b3A6IDI1cHg7IH1cXG5cXG4uQ2FyZFZpZGVvX3Byb2dyZXNzX18yRjhVUyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDcwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjZmFmYWZhO1xcbiAgcGFkZGluZzogMjBweDsgfVxcbiAgLkNhcmRWaWRlb19wcm9ncmVzc19fMkY4VVMgLkNhcmRWaWRlb19wcm9ncmVzc1RleHRfX0V6SzBFIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogI2ZhZmFmYTsgfVxcblxcbi5DYXJkVmlkZW9fY2FyZENvbnRlbnRfXzhUMDFIIC5DYXJkVmlkZW9fdGl0bGVfXzNmRkJpIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjZmFmYWZhO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcblxcbi5DYXJkVmlkZW9fY2FyZENvbnRlbnRfXzhUMDFIIC5DYXJkVmlkZW9fY2FyZFZpZGVvTGlzdF9fMndCUl8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSBhdXRvIDEwJTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcXG4gIC1tb3otY29sdW1uLWdhcDogMTBweDtcXG4gICAgICAgY29sdW1uLWdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7IH1cXG4gIC5DYXJkVmlkZW9fY2FyZENvbnRlbnRfXzhUMDFIIC5DYXJkVmlkZW9fY2FyZFZpZGVvTGlzdF9fMndCUl8gPiBsaSBpIHtcXG4gICAgY29sb3I6ICNmYWZhZmE7IH1cXG4gICAgLkNhcmRWaWRlb19jYXJkQ29udGVudF9fOFQwMUggLkNhcmRWaWRlb19jYXJkVmlkZW9MaXN0X18yd0JSXyA+IGxpIGkgc3ZnIHtcXG4gICAgICB3aWR0aDogMjRweDtcXG4gICAgICBoZWlnaHQ6IDI0cHg7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZXJpY3dhbmcvRG9jdW1lbnRzL3dvcmtzcGFjZS9iYXNpbC9jb21wb25lbnRzL0NhcmRWaWRlby9DYXJkVmlkZW8ubW9kdWxlLnNjc3NcIixcIi9Vc2Vycy9lcmljd2FuZy9Eb2N1bWVudHMvd29ya3NwYWNlL2Jhc2lsL3N0eWxlcy9nbG9iYWwvX2NvbG9yLnNjc3NcIixcIi9Vc2Vycy9lcmljd2FuZy9Eb2N1bWVudHMvd29ya3NwYWNlL2Jhc2lsL3N0eWxlcy9nbG9iYWwvdHlwZUZvbnQuc2Nzc1wiLFwiL1VzZXJzL2VyaWN3YW5nL0RvY3VtZW50cy93b3Jrc3BhY2UvYmFzaWwvc3R5bGVzL2dsb2JhbC9fdmFyaWFibGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNDLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IscUJBQWdCO0VBQWhCLHFCQUFnQjtPQUFoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRWpCO0VBQ0Msa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQ1JlO0VEU2YsYUFBYSxFQUFBO0VBVGQ7SUFXRSxlRWJhO0lGY2IsZ0JHSm9CO0lIS3BCLGNDYmMsRUFBQTs7QURnQmhCO0VBRUUsZUVwQmE7RUZxQmIsY0NuQmM7RURvQmQsZ0JHWm9CLEVBQUE7O0FIUXRCO0VBT0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMscUJBQWdCO0VBQWhCLHFCQUFnQjtPQUFoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7RUFYbEI7SUFjSSxjQzlCWSxFQUFBO0lEZ0JoQjtNQWdCSyxXQUFXO01BQ1gsWUFBWSxFQUFBXCIsXCJmaWxlXCI6XCJDYXJkVmlkZW8ubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vc3R5bGVzL2dsb2JhbC9fY29sb3Iuc2Nzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi4vLi4vc3R5bGVzL2dsb2JhbC90eXBlRm9udC5zY3NzXFxcIjtcXG5cXG4uQ2FyZFZpZGVvIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIGF1dG87XFxuXFx0Y29sdW1uLWdhcDogMTVweDtcXG5cXHRtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG4ucHJvZ3Jlc3Mge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0d2lkdGg6IDcwcHg7XFxuXFx0aGVpZ2h0OiA3MHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCAkZ3JheTAzO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0LnByb2dyZXNzVGV4dCB7XFxuXFx0XFx0Zm9udC1zaXplOiBtYXAtZ2V0KCRkZXNrdG9wRm9udCwgJGgzLXNpemUpO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYm9sZDtcXG5cXHRcXHRjb2xvcjogJGdyYXkwMztcXG5cXHR9XFxufVxcbi5jYXJkQ29udGVudCB7XFxuXFx0LnRpdGxlIHtcXG5cXHRcXHRmb250LXNpemU6IG1hcC1nZXQoJGRlc2t0b3BGb250LCAkaDMtc2l6ZSk7XFxuXFx0XFx0Y29sb3I6ICRncmF5MDM7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkO1xcblxcdH1cXG5cXHQuY2FyZFZpZGVvTGlzdCB7XFxuXFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIGF1dG8gMTAlO1xcblxcdFxcdGNvbHVtbi1nYXA6IDEwcHg7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTVweDtcXG5cXHRcXHQ+IGxpIHtcXG5cXHRcXHRcXHRpIHtcXG5cXHRcXHRcXHRcXHRjb2xvcjogJGdyYXkwMztcXG5cXHRcXHRcXHRcXHRzdmcge1xcblxcdFxcdFxcdFxcdFxcdHdpZHRoOiAyNHB4O1xcblxcdFxcdFxcdFxcdFxcdGhlaWdodDogMjRweDtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiLy8gLS0tLS0tLS0gR3JlZW4gLS0tLS0tLS1cXG4kZ3JlZW4wMTogI2RiZTlkYjtcXG4kZ3JlZW4wMjogI2E5YzBiMTtcXG4kZ3JlZW4wMzogIzI2ZDA3YztcXG4kZ3JlZW4wNDogIzFmZmY4ZjtcXG5cXG4vLyAtLS0tLS0tLSBHcmF5cyAtLS0tLS0tLVxcbiRncmF5MDE6ICNmYWZiZmM7XFxuJGdyYXkwMjogI2Y2ZjhmYTtcXG4kZ3JheTAzOiAjZmFmYWZhO1xcbiRncmF5MDQ6ICNlMWU0ZTg7XFxuJGdyYXkwNTogI2QxZDVkYTtcXG4kZ3JheTA2OiAjOTU5ZGE1O1xcbiRncmF5MDc6ICM2YTczN2Q7XFxuJGdyYXkwODogIzIxMjEyMTtcXG5cXG4vLyAtLS0tLS0tLSBCbHVlIC0tLS0tLS0tXFxuJGJsdWUwMTogI2YxZjhmZjtcXG4kYmx1ZTAyOiAjZGJlZGZmO1xcbiRibHVlMDM6ICNjOGUxZmY7XFxuJGJsdWUwNDogIzc5YjhmZjtcXG4kYmx1ZTA1OiAjMjE4OGZmO1xcbiRibHVlMDY6ICMwMzY2ZDY7XFxuJGJsdWUxMDogIzI3MmMzNDtcXG5cIixcIkBpbXBvcnQgXFxcIi4vdmFyaWFibGVcXFwiO1xcblxcbiRkZXNrdG9wRm9udDogKFxcblxcdCRoMDAtc2l6ZTogNDhweCxcXG5cXHQkaDAtc2l6ZTogNDBweCxcXG5cXHQkaDEtc2l6ZTogMzJweCxcXG5cXHQkaDItc2l6ZTogMjRweCxcXG5cXHQkaDMtc2l6ZTogMjBweCxcXG5cXHQkaDQtc2l6ZTogMTZweCxcXG5cXHQkaDUtc2l6ZTogMTRweCxcXG5cXHQkaDYtc2l6ZTogMTJweCxcXG4pO1xcblxcbiRtb2JpbGVGb250OiAoXFxuXFx0JGgwMC1zaXplLW1vYmlsZTogNDBweCxcXG5cXHQkaDAtc2l6ZS1tb2JpbGU6IDMycHgsXFxuXFx0JGgyLXNpemUtbW9iaWxlOiAyMnB4LFxcblxcdCRoMy1zaXplLW1vYmlsZTogMThweCxcXG4pO1xcblwiLFwiLy8gLS0tLS0tLS0gZGVza3RvcC1mb250LXNpemUqIC0tLS0tLS0tXFxuJGgwMC1zaXplOiA0OHB4O1xcbiRoMC1zaXplOiA0MHB4O1xcbiRoMS1zaXplOiAzMnB4O1xcbiRoMi1zaXplOiAyNHB4O1xcbiRoMy1zaXplOiAyMHB4O1xcbiRoNC1zaXplOiAxNnB4O1xcbiRoNS1zaXplOiAxNHB4O1xcbiRoNi1zaXplOiAxMnB4O1xcblxcbi8vIC0tLS0tLS0tIG1vYmlsZS1mb250LXNpemUqIC0tLS0tLS0tXFxuJGgwMC1zaXplLW1vYmlsZTogNDBweDtcXG4kaDAtc2l6ZS1tb2JpbGU6IDMycHg7XFxuJGgyLXNpemUtbW9iaWxlOiAyMnB4O1xcbiRoMy1zaXplLW1vYmlsZTogMThweDtcXG5cXG4vLyAtLS0tLS0tLSBmb250LXdlaWdodCogLS0tLS0tLS1cXG4kZm9udC13ZWlnaHQtYm9sZDogNjAwO1xcbiRmb250LXdlaWdodC1saWdodDogMzAwO1xcblxcbi8vIC0tLS0tLS0tIGJveC1zaGFkb3cgLS0tLS0tLS1cXG4kYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4kYm94LXNoYWRvdy1tZWRpdW06IDFweCAxcHggNXB4IHJnYmEoMjcsIDMxLCAzNSwgMC4xNSk7XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiQ2FyZFZpZGVvXCI6IFwiQ2FyZFZpZGVvX0NhcmRWaWRlb19fOU5NMWVcIixcblx0XCJwcm9ncmVzc1wiOiBcIkNhcmRWaWRlb19wcm9ncmVzc19fMkY4VVNcIixcblx0XCJwcm9ncmVzc1RleHRcIjogXCJDYXJkVmlkZW9fcHJvZ3Jlc3NUZXh0X19FekswRVwiLFxuXHRcImNhcmRDb250ZW50XCI6IFwiQ2FyZFZpZGVvX2NhcmRDb250ZW50X184VDAxSFwiLFxuXHRcInRpdGxlXCI6IFwiQ2FyZFZpZGVvX3RpdGxlX18zZkZCaVwiLFxuXHRcImNhcmRWaWRlb0xpc3RcIjogXCJDYXJkVmlkZW9fY2FyZFZpZGVvTGlzdF9fMndCUl9cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/CardVideo/CardVideo.module.scss\n");

/***/ })

})