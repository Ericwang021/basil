webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/CardVideo/CardVideo.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/CardVideo/CardVideo.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".CardVideo_CardVideo__9NM1e {\\n  display: grid;\\n  grid-template-columns: 10% auto;\\n  grid-column-gap: 15px;\\n  -moz-column-gap: 15px;\\n       column-gap: 15px;\\n  margin-top: 25px; }\\n\\n.CardVideo_progress__2F8US {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 70px;\\n  height: 70px;\\n  border-radius: 50%;\\n  border: 3px solid #fafafa;\\n  padding: 20px; }\\n  .CardVideo_progress__2F8US .CardVideo_progressText__EzK0E {\\n    font-size: 20px;\\n    font-weight: 600;\\n    color: #fafafa; }\\n\\n.CardVideo_cardContent__8T01H .CardVideo_title__3fFBi {\\n  font-size: 20px;\\n  color: #fafafa;\\n  font-weight: 600; }\\n\\n.CardVideo_cardContent__8T01H .CardVideo_cardVideoList__2wBR_ {\\n  display: grid;\\n  align-items: center;\\n  grid-template-columns: 5% 50% auto;\\n  grid-column-gap: 10px;\\n  -moz-column-gap: 10px;\\n       column-gap: 10px;\\n  margin-top: 15px; }\\n  .CardVideo_cardContent__8T01H .CardVideo_cardVideoList__2wBR_ > li i {\\n    color: #fafafa; }\\n    .CardVideo_cardContent__8T01H .CardVideo_cardVideoList__2wBR_ > li i svg {\\n      width: 24px;\\n      height: 24px; }\\n  .CardVideo_cardContent__8T01H .CardVideo_cardVideoList__2wBR_ > li.CardVideo_videoBox__1j6ie {\\n    position: relative; }\\n    .CardVideo_cardContent__8T01H .CardVideo_cardVideoList__2wBR_ > li.CardVideo_videoBox__1j6ie .CardVideo_lock__3AHZN {\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      width: 250px;\\n      height: 100%;\\n      background-color: rgba(0, 0, 0, 0.5); }\\n    .CardVideo_cardContent__8T01H .CardVideo_cardVideoList__2wBR_ > li.CardVideo_videoBox__1j6ie img {\\n      width: 250px; }\\n\", \"\",{\"version\":3,\"sources\":[\"/Users/ericwang/Documents/workspace/basil/components/CardVideo/CardVideo.module.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/_color.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/typeFont.scss\",\"/Users/ericwang/Documents/workspace/basil/styles/global/_variable.scss\"],\"names\":[],\"mappings\":\"AAGA;EACC,aAAa;EACb,+BAA+B;EAC/B,qBAAgB;EAAhB,qBAAgB;OAAhB,gBAAgB;EAChB,gBAAgB,EAAA;;AAEjB;EACC,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBCRe;EDSf,aAAa,EAAA;EATd;IAWE,eEba;IFcb,gBGJoB;IHKpB,cCbc,EAAA;;ADgBhB;EAEE,eEpBa;EFqBb,cCnBc;EDoBd,gBGZoB,EAAA;;AHQtB;EAOE,aAAa;EACb,mBAAmB;EACnB,kCAAkC;EAClC,qBAAgB;EAAhB,qBAAgB;OAAhB,gBAAgB;EAChB,gBAAgB,EAAA;EAXlB;IAcI,cC9BY,EAAA;IDgBhB;MAgBK,WAAW;MACX,YAAY,EAAA;EAjBjB;IAqBI,kBAAkB,EAAA;IArBtB;MAuBK,kBAAkB;MAClB,MAAM;MACN,OAAO;MACP,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,YAAY;MACZ,YAAY;MACZ,oCAAoC,EAAA;IA/BzC;MAkCK,YAAY,EAAA\",\"file\":\"CardVideo.module.scss\",\"sourcesContent\":[\"@import \\\"../../styles/global/_color.scss\\\";\\n@import \\\"../../styles/global/typeFont.scss\\\";\\n\\n.CardVideo {\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 10% auto;\\n\\tcolumn-gap: 15px;\\n\\tmargin-top: 25px;\\n}\\n.progress {\\n\\tposition: relative;\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\twidth: 70px;\\n\\theight: 70px;\\n\\tborder-radius: 50%;\\n\\tborder: 3px solid $gray03;\\n\\tpadding: 20px;\\n\\t.progressText {\\n\\t\\tfont-size: map-get($desktopFont, $h3-size);\\n\\t\\tfont-weight: $font-weight-bold;\\n\\t\\tcolor: $gray03;\\n\\t}\\n}\\n.cardContent {\\n\\t.title {\\n\\t\\tfont-size: map-get($desktopFont, $h3-size);\\n\\t\\tcolor: $gray03;\\n\\t\\tfont-weight: $font-weight-bold;\\n\\t}\\n\\t.cardVideoList {\\n\\t\\tdisplay: grid;\\n\\t\\talign-items: center;\\n\\t\\tgrid-template-columns: 5% 50% auto;\\n\\t\\tcolumn-gap: 10px;\\n\\t\\tmargin-top: 15px;\\n\\t\\t> li {\\n\\t\\t\\ti {\\n\\t\\t\\t\\tcolor: $gray03;\\n\\t\\t\\t\\tsvg {\\n\\t\\t\\t\\t\\twidth: 24px;\\n\\t\\t\\t\\t\\theight: 24px;\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t\\t&.videoBox {\\n\\t\\t\\t\\tposition: relative;\\n\\t\\t\\t\\t.lock {\\n\\t\\t\\t\\t\\tposition: absolute;\\n\\t\\t\\t\\t\\ttop: 0;\\n\\t\\t\\t\\t\\tleft: 0;\\n\\t\\t\\t\\t\\tdisplay: flex;\\n\\t\\t\\t\\t\\talign-items: center;\\n\\t\\t\\t\\t\\tjustify-content: center;\\n\\t\\t\\t\\t\\twidth: 250px;\\n\\t\\t\\t\\t\\theight: 100%;\\n\\t\\t\\t\\t\\tbackground-color: rgba(0, 0, 0, 0.5);\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\timg {\\n\\t\\t\\t\\t\\twidth: 250px;\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\",\"// -------- Green --------\\n$green01: #dbe9db;\\n$green02: #a9c0b1;\\n$green03: #26d07c;\\n$green04: #1fff8f;\\n\\n// -------- Grays --------\\n$gray01: #fafbfc;\\n$gray02: #f6f8fa;\\n$gray03: #fafafa;\\n$gray04: #e1e4e8;\\n$gray05: #d1d5da;\\n$gray06: #959da5;\\n$gray07: #6a737d;\\n$gray08: #212121;\\n\\n// -------- Blue --------\\n$blue01: #f1f8ff;\\n$blue02: #dbedff;\\n$blue03: #c8e1ff;\\n$blue04: #79b8ff;\\n$blue05: #2188ff;\\n$blue06: #0366d6;\\n$blue10: #272c34;\\n\",\"@import \\\"./variable\\\";\\n\\n$desktopFont: (\\n\\t$h00-size: 48px,\\n\\t$h0-size: 40px,\\n\\t$h1-size: 32px,\\n\\t$h2-size: 24px,\\n\\t$h3-size: 20px,\\n\\t$h4-size: 16px,\\n\\t$h5-size: 14px,\\n\\t$h6-size: 12px,\\n);\\n\\n$mobileFont: (\\n\\t$h00-size-mobile: 40px,\\n\\t$h0-size-mobile: 32px,\\n\\t$h2-size-mobile: 22px,\\n\\t$h3-size-mobile: 18px,\\n);\\n\",\"// -------- desktop-font-size* --------\\n$h00-size: 48px;\\n$h0-size: 40px;\\n$h1-size: 32px;\\n$h2-size: 24px;\\n$h3-size: 20px;\\n$h4-size: 16px;\\n$h5-size: 14px;\\n$h6-size: 12px;\\n\\n// -------- mobile-font-size* --------\\n$h00-size-mobile: 40px;\\n$h0-size-mobile: 32px;\\n$h2-size-mobile: 22px;\\n$h3-size-mobile: 18px;\\n\\n// -------- font-weight* --------\\n$font-weight-bold: 600;\\n$font-weight-light: 300;\\n\\n// -------- box-shadow --------\\n$box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);\\n$box-shadow-medium: 1px 1px 5px rgba(27, 31, 35, 0.15);\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"CardVideo\": \"CardVideo_CardVideo__9NM1e\",\n\t\"progress\": \"CardVideo_progress__2F8US\",\n\t\"progressText\": \"CardVideo_progressText__EzK0E\",\n\t\"cardContent\": \"CardVideo_cardContent__8T01H\",\n\t\"title\": \"CardVideo_title__3fFBi\",\n\t\"cardVideoList\": \"CardVideo_cardVideoList__2wBR_\",\n\t\"videoBox\": \"CardVideo_videoBox__1j6ie\",\n\t\"lock\": \"CardVideo_lock__3AHZN\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRWaWRlby9DYXJkVmlkZW8ubW9kdWxlLnNjc3M/ZjAxMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGdDQUFnQyxrQkFBa0Isb0NBQW9DLDBCQUEwQiwwQkFBMEIsMEJBQTBCLHFCQUFxQixFQUFFLGdDQUFnQyx1QkFBdUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsOEJBQThCLGtCQUFrQixFQUFFLCtEQUErRCxzQkFBc0IsdUJBQXVCLHFCQUFxQixFQUFFLDJEQUEyRCxvQkFBb0IsbUJBQW1CLHFCQUFxQixFQUFFLG1FQUFtRSxrQkFBa0Isd0JBQXdCLHVDQUF1QywwQkFBMEIsMEJBQTBCLDBCQUEwQixxQkFBcUIsRUFBRSwwRUFBMEUscUJBQXFCLEVBQUUsZ0ZBQWdGLG9CQUFvQixxQkFBcUIsRUFBRSxrR0FBa0cseUJBQXlCLEVBQUUsMkhBQTJILDJCQUEyQixlQUFlLGdCQUFnQixzQkFBc0IsNEJBQTRCLGdDQUFnQyxxQkFBcUIscUJBQXFCLDZDQUE2QyxFQUFFLHdHQUF3RyxxQkFBcUIsRUFBRSxTQUFTLGtXQUFrVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxZQUFZLGVBQWUsS0FBSyxVQUFVLFlBQVksaUJBQWlCLE9BQU8sV0FBVyxZQUFZLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGtCQUFrQixNQUFNLGdCQUFnQixPQUFPLFdBQVcsZUFBZSxPQUFPLGtCQUFrQixPQUFPLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxpQkFBaUIsT0FBTywrR0FBK0csZ0RBQWdELGdCQUFnQixrQkFBa0Isb0NBQW9DLHFCQUFxQixxQkFBcUIsR0FBRyxhQUFhLHVCQUF1QixrQkFBa0Isd0JBQXdCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsa0JBQWtCLG1CQUFtQixpREFBaUQscUNBQXFDLHFCQUFxQixLQUFLLEdBQUcsZ0JBQWdCLFlBQVksaURBQWlELHFCQUFxQixxQ0FBcUMsS0FBSyxvQkFBb0Isb0JBQW9CLDBCQUEwQix5Q0FBeUMsdUJBQXVCLHVCQUF1QixZQUFZLFdBQVcseUJBQXlCLGVBQWUsd0JBQXdCLHlCQUF5QixXQUFXLFNBQVMsb0JBQW9CLDZCQUE2QixpQkFBaUIsK0JBQStCLG1CQUFtQixvQkFBb0IsMEJBQTBCLGdDQUFnQyxvQ0FBb0MseUJBQXlCLHlCQUF5QixpREFBaUQsV0FBVyxlQUFlLHlCQUF5QixXQUFXLFNBQVMsT0FBTyxLQUFLLEdBQUcsbURBQW1ELG9CQUFvQixvQkFBb0Isb0JBQW9CLGlEQUFpRCxtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsZ0RBQWdELG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLDRCQUE0QixnTEFBZ0wsK0hBQStILDhEQUE4RCxpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsbUVBQW1FLHdCQUF3Qix3QkFBd0Isd0JBQXdCLDhEQUE4RCwwQkFBMEIsa0ZBQWtGLHlEQUF5RCxLQUFLO0FBQ3Y0SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL2NvbXBvbmVudHMvQ2FyZFZpZGVvL0NhcmRWaWRlby5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5DYXJkVmlkZW9fQ2FyZFZpZGVvX185Tk0xZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgYXV0bztcXG4gIGdyaWQtY29sdW1uLWdhcDogMTVweDtcXG4gIC1tb3otY29sdW1uLWdhcDogMTVweDtcXG4gICAgICAgY29sdW1uLWdhcDogMTVweDtcXG4gIG1hcmdpbi10b3A6IDI1cHg7IH1cXG5cXG4uQ2FyZFZpZGVvX3Byb2dyZXNzX18yRjhVUyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDcwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjZmFmYWZhO1xcbiAgcGFkZGluZzogMjBweDsgfVxcbiAgLkNhcmRWaWRlb19wcm9ncmVzc19fMkY4VVMgLkNhcmRWaWRlb19wcm9ncmVzc1RleHRfX0V6SzBFIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogI2ZhZmFmYTsgfVxcblxcbi5DYXJkVmlkZW9fY2FyZENvbnRlbnRfXzhUMDFIIC5DYXJkVmlkZW9fdGl0bGVfXzNmRkJpIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjZmFmYWZhO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcblxcbi5DYXJkVmlkZW9fY2FyZENvbnRlbnRfXzhUMDFIIC5DYXJkVmlkZW9fY2FyZFZpZGVvTGlzdF9fMndCUl8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIDUwJSBhdXRvO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xcbiAgLW1vei1jb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDsgfVxcbiAgLkNhcmRWaWRlb19jYXJkQ29udGVudF9fOFQwMUggLkNhcmRWaWRlb19jYXJkVmlkZW9MaXN0X18yd0JSXyA+IGxpIGkge1xcbiAgICBjb2xvcjogI2ZhZmFmYTsgfVxcbiAgICAuQ2FyZFZpZGVvX2NhcmRDb250ZW50X184VDAxSCAuQ2FyZFZpZGVvX2NhcmRWaWRlb0xpc3RfXzJ3QlJfID4gbGkgaSBzdmcge1xcbiAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgIGhlaWdodDogMjRweDsgfVxcbiAgLkNhcmRWaWRlb19jYXJkQ29udGVudF9fOFQwMUggLkNhcmRWaWRlb19jYXJkVmlkZW9MaXN0X18yd0JSXyA+IGxpLkNhcmRWaWRlb192aWRlb0JveF9fMWo2aWUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgLkNhcmRWaWRlb19jYXJkQ29udGVudF9fOFQwMUggLkNhcmRWaWRlb19jYXJkVmlkZW9MaXN0X18yd0JSXyA+IGxpLkNhcmRWaWRlb192aWRlb0JveF9fMWo2aWUgLkNhcmRWaWRlb19sb2NrX18zQUhaTiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxcbiAgICAuQ2FyZFZpZGVvX2NhcmRDb250ZW50X184VDAxSCAuQ2FyZFZpZGVvX2NhcmRWaWRlb0xpc3RfXzJ3QlJfID4gbGkuQ2FyZFZpZGVvX3ZpZGVvQm94X18xajZpZSBpbWcge1xcbiAgICAgIHdpZHRoOiAyNTBweDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9lcmljd2FuZy9Eb2N1bWVudHMvd29ya3NwYWNlL2Jhc2lsL2NvbXBvbmVudHMvQ2FyZFZpZGVvL0NhcmRWaWRlby5tb2R1bGUuc2Nzc1wiLFwiL1VzZXJzL2VyaWN3YW5nL0RvY3VtZW50cy93b3Jrc3BhY2UvYmFzaWwvc3R5bGVzL2dsb2JhbC9fY29sb3Iuc2Nzc1wiLFwiL1VzZXJzL2VyaWN3YW5nL0RvY3VtZW50cy93b3Jrc3BhY2UvYmFzaWwvc3R5bGVzL2dsb2JhbC90eXBlRm9udC5zY3NzXCIsXCIvVXNlcnMvZXJpY3dhbmcvRG9jdW1lbnRzL3dvcmtzcGFjZS9iYXNpbC9zdHlsZXMvZ2xvYmFsL192YXJpYWJsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0MsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixxQkFBZ0I7RUFBaEIscUJBQWdCO09BQWhCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFakI7RUFDQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJDUmU7RURTZixhQUFhLEVBQUE7RUFUZDtJQVdFLGVFYmE7SUZjYixnQkdKb0I7SUhLcEIsY0NiYyxFQUFBOztBRGdCaEI7RUFFRSxlRXBCYTtFRnFCYixjQ25CYztFRG9CZCxnQkdab0IsRUFBQTs7QUhRdEI7RUFPRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxxQkFBZ0I7RUFBaEIscUJBQWdCO09BQWhCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtFQVhsQjtJQWNJLGNDOUJZLEVBQUE7SURnQmhCO01BZ0JLLFdBQVc7TUFDWCxZQUFZLEVBQUE7RUFqQmpCO0lBcUJJLGtCQUFrQixFQUFBO0lBckJ0QjtNQXVCSyxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLE9BQU87TUFDUCxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osWUFBWTtNQUNaLG9DQUFvQyxFQUFBO0lBL0J6QztNQWtDSyxZQUFZLEVBQUFcIixcImZpbGVcIjpcIkNhcmRWaWRlby5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvZ2xvYmFsL19jb2xvci5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvZ2xvYmFsL3R5cGVGb250LnNjc3NcXFwiO1xcblxcbi5DYXJkVmlkZW8ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgYXV0bztcXG5cXHRjb2x1bW4tZ2FwOiAxNXB4O1xcblxcdG1hcmdpbi10b3A6IDI1cHg7XFxufVxcbi5wcm9ncmVzcyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR3aWR0aDogNzBweDtcXG5cXHRoZWlnaHQ6IDcwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlcjogM3B4IHNvbGlkICRncmF5MDM7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHQucHJvZ3Jlc3NUZXh0IHtcXG5cXHRcXHRmb250LXNpemU6IG1hcC1nZXQoJGRlc2t0b3BGb250LCAkaDMtc2l6ZSk7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkO1xcblxcdFxcdGNvbG9yOiAkZ3JheTAzO1xcblxcdH1cXG59XFxuLmNhcmRDb250ZW50IHtcXG5cXHQudGl0bGUge1xcblxcdFxcdGZvbnQtc2l6ZTogbWFwLWdldCgkZGVza3RvcEZvbnQsICRoMy1zaXplKTtcXG5cXHRcXHRjb2xvcjogJGdyYXkwMztcXG5cXHRcXHRmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJvbGQ7XFxuXFx0fVxcblxcdC5jYXJkVmlkZW9MaXN0IHtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1JSA1MCUgYXV0bztcXG5cXHRcXHRjb2x1bW4tZ2FwOiAxMHB4O1xcblxcdFxcdG1hcmdpbi10b3A6IDE1cHg7XFxuXFx0XFx0PiBsaSB7XFxuXFx0XFx0XFx0aSB7XFxuXFx0XFx0XFx0XFx0Y29sb3I6ICRncmF5MDM7XFxuXFx0XFx0XFx0XFx0c3ZnIHtcXG5cXHRcXHRcXHRcXHRcXHR3aWR0aDogMjRweDtcXG5cXHRcXHRcXHRcXHRcXHRoZWlnaHQ6IDI0cHg7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHQmLnZpZGVvQm94IHtcXG5cXHRcXHRcXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0XFx0XFx0LmxvY2sge1xcblxcdFxcdFxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRcXHRcXHRcXHR0b3A6IDA7XFxuXFx0XFx0XFx0XFx0XFx0bGVmdDogMDtcXG5cXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0XFx0XFx0XFx0d2lkdGg6IDI1MHB4O1xcblxcdFxcdFxcdFxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdGltZyB7XFxuXFx0XFx0XFx0XFx0XFx0d2lkdGg6IDI1MHB4O1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCIvLyAtLS0tLS0tLSBHcmVlbiAtLS0tLS0tLVxcbiRncmVlbjAxOiAjZGJlOWRiO1xcbiRncmVlbjAyOiAjYTljMGIxO1xcbiRncmVlbjAzOiAjMjZkMDdjO1xcbiRncmVlbjA0OiAjMWZmZjhmO1xcblxcbi8vIC0tLS0tLS0tIEdyYXlzIC0tLS0tLS0tXFxuJGdyYXkwMTogI2ZhZmJmYztcXG4kZ3JheTAyOiAjZjZmOGZhO1xcbiRncmF5MDM6ICNmYWZhZmE7XFxuJGdyYXkwNDogI2UxZTRlODtcXG4kZ3JheTA1OiAjZDFkNWRhO1xcbiRncmF5MDY6ICM5NTlkYTU7XFxuJGdyYXkwNzogIzZhNzM3ZDtcXG4kZ3JheTA4OiAjMjEyMTIxO1xcblxcbi8vIC0tLS0tLS0tIEJsdWUgLS0tLS0tLS1cXG4kYmx1ZTAxOiAjZjFmOGZmO1xcbiRibHVlMDI6ICNkYmVkZmY7XFxuJGJsdWUwMzogI2M4ZTFmZjtcXG4kYmx1ZTA0OiAjNzliOGZmO1xcbiRibHVlMDU6ICMyMTg4ZmY7XFxuJGJsdWUwNjogIzAzNjZkNjtcXG4kYmx1ZTEwOiAjMjcyYzM0O1xcblwiLFwiQGltcG9ydCBcXFwiLi92YXJpYWJsZVxcXCI7XFxuXFxuJGRlc2t0b3BGb250OiAoXFxuXFx0JGgwMC1zaXplOiA0OHB4LFxcblxcdCRoMC1zaXplOiA0MHB4LFxcblxcdCRoMS1zaXplOiAzMnB4LFxcblxcdCRoMi1zaXplOiAyNHB4LFxcblxcdCRoMy1zaXplOiAyMHB4LFxcblxcdCRoNC1zaXplOiAxNnB4LFxcblxcdCRoNS1zaXplOiAxNHB4LFxcblxcdCRoNi1zaXplOiAxMnB4LFxcbik7XFxuXFxuJG1vYmlsZUZvbnQ6IChcXG5cXHQkaDAwLXNpemUtbW9iaWxlOiA0MHB4LFxcblxcdCRoMC1zaXplLW1vYmlsZTogMzJweCxcXG5cXHQkaDItc2l6ZS1tb2JpbGU6IDIycHgsXFxuXFx0JGgzLXNpemUtbW9iaWxlOiAxOHB4LFxcbik7XFxuXCIsXCIvLyAtLS0tLS0tLSBkZXNrdG9wLWZvbnQtc2l6ZSogLS0tLS0tLS1cXG4kaDAwLXNpemU6IDQ4cHg7XFxuJGgwLXNpemU6IDQwcHg7XFxuJGgxLXNpemU6IDMycHg7XFxuJGgyLXNpemU6IDI0cHg7XFxuJGgzLXNpemU6IDIwcHg7XFxuJGg0LXNpemU6IDE2cHg7XFxuJGg1LXNpemU6IDE0cHg7XFxuJGg2LXNpemU6IDEycHg7XFxuXFxuLy8gLS0tLS0tLS0gbW9iaWxlLWZvbnQtc2l6ZSogLS0tLS0tLS1cXG4kaDAwLXNpemUtbW9iaWxlOiA0MHB4O1xcbiRoMC1zaXplLW1vYmlsZTogMzJweDtcXG4kaDItc2l6ZS1tb2JpbGU6IDIycHg7XFxuJGgzLXNpemUtbW9iaWxlOiAxOHB4O1xcblxcbi8vIC0tLS0tLS0tIGZvbnQtd2VpZ2h0KiAtLS0tLS0tLVxcbiRmb250LXdlaWdodC1ib2xkOiA2MDA7XFxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XFxuXFxuLy8gLS0tLS0tLS0gYm94LXNoYWRvdyAtLS0tLS0tLVxcbiRib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiRib3gtc2hhZG93LW1lZGl1bTogMXB4IDFweCA1cHggcmdiYSgyNywgMzEsIDM1LCAwLjE1KTtcXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJDYXJkVmlkZW9cIjogXCJDYXJkVmlkZW9fQ2FyZFZpZGVvX185Tk0xZVwiLFxuXHRcInByb2dyZXNzXCI6IFwiQ2FyZFZpZGVvX3Byb2dyZXNzX18yRjhVU1wiLFxuXHRcInByb2dyZXNzVGV4dFwiOiBcIkNhcmRWaWRlb19wcm9ncmVzc1RleHRfX0V6SzBFXCIsXG5cdFwiY2FyZENvbnRlbnRcIjogXCJDYXJkVmlkZW9fY2FyZENvbnRlbnRfXzhUMDFIXCIsXG5cdFwidGl0bGVcIjogXCJDYXJkVmlkZW9fdGl0bGVfXzNmRkJpXCIsXG5cdFwiY2FyZFZpZGVvTGlzdFwiOiBcIkNhcmRWaWRlb19jYXJkVmlkZW9MaXN0X18yd0JSX1wiLFxuXHRcInZpZGVvQm94XCI6IFwiQ2FyZFZpZGVvX3ZpZGVvQm94X18xajZpZVwiLFxuXHRcImxvY2tcIjogXCJDYXJkVmlkZW9fbG9ja19fM0FIWk5cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/CardVideo/CardVideo.module.scss\n");

/***/ })

})