webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/components/styles/AseanGDP.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/components/styles/AseanGDP.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".AseanGDP_isolate__2F0bG {\\n  isolation: isolate;\\n}\\n\\n.AseanGDP_h2__30T5_ {\\n  font-size: 0.35rem;\\n  font-weight: 600;\\n}\\n\\n.AseanGDP_h4__Famrg {\\n  font-size: 0.12rem;\\n  font-weight: 500;\\n}\\n\\n.AseanGDP_p__272Kh {\\n  font-size: 0.12rem;\\n}\\n\\n.AseanGDP_circle__1Viw- {\\n  fill: none;\\n  stroke-miterlimit: 10;\\n  stroke-width: 0.02rem;\\n  stroke: url(\\\"#asean-gdp-gradient\\\");\\n  stroke-dasharray: 70;\\n  stroke-dashoffset: 70;\\n  -webkit-animation: AseanGDP_draw-circle__1te5R 2.5s linear forwards;\\n          animation: AseanGDP_draw-circle__1te5R 2.5s linear forwards;\\n}\\n\\n.AseanGDP_line__RZd4K {\\n  fill: none;\\n  stroke-miterlimit: 10;\\n  stroke-width: 0.02rem;\\n  stroke: url(\\\"#asean-gdp-gradient-2\\\");\\n  stroke-dasharray: 86.5;\\n  stroke-dashoffset: 86.5;\\n  -webkit-animation: AseanGDP_draw-line__1WFNc 2.5s linear forwards 2.5s;\\n          animation: AseanGDP_draw-line__1WFNc 2.5s linear forwards 2.5s;\\n}\\n\\n.AseanGDP_dot__-xTDV {\\n  opacity: 0;\\n  visibility: hidden;\\n  -webkit-animation: AseanGDP_fade-dot__pEn2Y 1s linear forwards 5s;\\n          animation: AseanGDP_fade-dot__pEn2Y 1s linear forwards 5s;\\n}\\n\\n@-webkit-keyframes AseanGDP_draw-circle__1te5R {\\n  to {\\n    stroke-dashoffset: 140;\\n  }\\n}\\n\\n@keyframes AseanGDP_draw-circle__1te5R {\\n  to {\\n    stroke-dashoffset: 140;\\n  }\\n}\\n@-webkit-keyframes AseanGDP_draw-line__1WFNc {\\n  to {\\n    stroke-dashoffset: 0;\\n  }\\n}\\n@keyframes AseanGDP_draw-line__1WFNc {\\n  to {\\n    stroke-dashoffset: 0;\\n  }\\n}\\n@-webkit-keyframes AseanGDP_fade-dot__pEn2Y {\\n  to {\\n    opacity: 1;\\n    visibility: visible;\\n  }\\n}\\n@keyframes AseanGDP_fade-dot__pEn2Y {\\n  to {\\n    opacity: 1;\\n    visibility: visible;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://AseanGDP.module.scss\"],\"names\":[],\"mappings\":\"AACA;EAAU,kBAAA;AACV;;AAAA;EAAK,kBAAA;EAAoB,gBAAA;AAKzB;;AAJA;EAAK,kBAAA;EAAoB,gBAAA;AASzB;;AARA;EAAI,kBAAA;AAYJ;;AALA;EALE,UAAA;EACA,qBAAA;EACA,qBAAA;EACA,kCAAA;EAIA,oBAAA;EACA,qBAAA;EACA,mEAAA;UAAA,2DAAA;AAWF;;AATA;EAXE,UAAA;EACA,qBAAA;EACA,qBAAA;EACA,oCAAA;EAUA,sBAAA;EACA,uBAAA;EACA,sEAAA;UAAA,8DAAA;AAeF;;AAbA;EACE,UAAA;EAAY,kBAAA;EACZ,iEAAA;UAAA,yDAAA;AAiBF;;AAfA;EAAwB;IAAI,sBAAA;EAoB1B;AACF;;AArBA;EAAwB;IAAI,sBAAA;EAoB1B;AACF;AApBA;EAAsB;IAAI,oBAAA;EAwBxB;AACF;AAzBA;EAAsB;IAAI,oBAAA;EAwBxB;AACF;AAxBA;EAAqB;IAAI,UAAA;IAAY,mBAAA;EA6BnC;AACF;AA9BA;EAAqB;IAAI,UAAA;IAAY,mBAAA;EA6BnC;AACF\",\"sourcesContent\":[\"\\n.isolate {isolation:isolate;}\\n.h2 {font-size: 0.35rem; font-weight: 600;}\\n.h4 {font-size: 0.12rem; font-weight: 500;}\\n.p {font-size: 0.12rem;}\\n@mixin gradient-shape ($gradient-url) {\\n  fill: none;\\n  stroke-miterlimit: 10;\\n  stroke-width: 0.02rem;\\n  stroke: url($gradient-url);\\n}\\n.circle {\\n  @include gradient-shape('#asean-gdp-gradient');\\n  stroke-dasharray: 70;\\n  stroke-dashoffset: 70;\\n  animation: draw-circle 2.5s linear forwards;\\n}\\n.line {\\n  @include gradient-shape('#asean-gdp-gradient-2');\\n  stroke-dasharray: 86.5;\\n  stroke-dashoffset: 86.5;\\n  animation: draw-line 2.5s linear forwards 2.5s;\\n}\\n.dot {\\n  opacity: 0; visibility: hidden; \\n  animation: fade-dot 1s linear forwards 5s;\\n}\\n@keyframes draw-circle {to {stroke-dashoffset: 140;}}\\n@keyframes draw-line {to {stroke-dashoffset: 0;}}\\n@keyframes fade-dot {to {opacity: 1; visibility: visible;}}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"isolate\": \"AseanGDP_isolate__2F0bG\",\n\t\"h2\": \"AseanGDP_h2__30T5_\",\n\t\"h4\": \"AseanGDP_h4__Famrg\",\n\t\"p\": \"AseanGDP_p__272Kh\",\n\t\"circle\": \"AseanGDP_circle__1Viw-\",\n\t\"draw-circle\": \"AseanGDP_draw-circle__1te5R\",\n\t\"line\": \"AseanGDP_line__RZd4K\",\n\t\"draw-line\": \"AseanGDP_draw-line__1WFNc\",\n\t\"dot\": \"AseanGDP_dot__-xTDV\",\n\t\"fade-dot\": \"AseanGDP_fade-dot__pEn2Y\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9zdHlsZXMvQXNlYW5HRFAubW9kdWxlLnNjc3M/ZDE5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNkJBQTZCLHVCQUF1QixHQUFHLHlCQUF5Qix1QkFBdUIscUJBQXFCLEdBQUcseUJBQXlCLHVCQUF1QixxQkFBcUIsR0FBRyx3QkFBd0IsdUJBQXVCLEdBQUcsNkJBQTZCLGVBQWUsMEJBQTBCLDBCQUEwQix5Q0FBeUMseUJBQXlCLDBCQUEwQix3RUFBd0Usd0VBQXdFLEdBQUcsMkJBQTJCLGVBQWUsMEJBQTBCLDBCQUEwQiwyQ0FBMkMsMkJBQTJCLDRCQUE0QiwyRUFBMkUsMkVBQTJFLEdBQUcsMEJBQTBCLGVBQWUsdUJBQXVCLHNFQUFzRSxzRUFBc0UsR0FBRyxvREFBb0QsUUFBUSw2QkFBNkIsS0FBSyxHQUFHLDRDQUE0QyxRQUFRLDZCQUE2QixLQUFLLEdBQUcsZ0RBQWdELFFBQVEsMkJBQTJCLEtBQUssR0FBRyx3Q0FBd0MsUUFBUSwyQkFBMkIsS0FBSyxHQUFHLCtDQUErQyxRQUFRLGlCQUFpQiwwQkFBMEIsS0FBSyxHQUFHLHVDQUF1QyxRQUFRLGlCQUFpQiwwQkFBMEIsS0FBSyxHQUFHLE9BQU8scUZBQXFGLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssTUFBTSxXQUFXLE9BQU8sTUFBTSxNQUFNLE1BQU0sV0FBVyxPQUFPLEtBQUssTUFBTSxNQUFNLFdBQVcsT0FBTyxLQUFLLE1BQU0sTUFBTSxXQUFXLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8scUNBQXFDLG1CQUFtQixPQUFPLG1CQUFtQixtQkFBbUIsT0FBTyxtQkFBbUIsbUJBQW1CLE1BQU0sb0JBQW9CLHlDQUF5QyxlQUFlLDBCQUEwQiwwQkFBMEIsK0JBQStCLEdBQUcsV0FBVyxtREFBbUQseUJBQXlCLDBCQUEwQixnREFBZ0QsR0FBRyxTQUFTLHFEQUFxRCwyQkFBMkIsNEJBQTRCLG1EQUFtRCxHQUFHLFFBQVEsZUFBZSxvQkFBb0IsK0NBQStDLEdBQUcsMEJBQTBCLElBQUkseUJBQXlCLHdCQUF3QixJQUFJLHVCQUF1Qix1QkFBdUIsSUFBSSxXQUFXLHVCQUF1QixtQkFBbUI7QUFDaHhHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9wYWdlcy9jb21wb25lbnRzL3N0eWxlcy9Bc2VhbkdEUC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Bc2VhbkdEUF9pc29sYXRlX18yRjBiRyB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbi5Bc2VhbkdEUF9oMl9fMzBUNV8ge1xcbiAgZm9udC1zaXplOiAwLjM1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLkFzZWFuR0RQX2g0X19GYW1yZyB7XFxuICBmb250LXNpemU6IDAuMTJyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uQXNlYW5HRFBfcF9fMjcyS2gge1xcbiAgZm9udC1zaXplOiAwLjEycmVtO1xcbn1cXG5cXG4uQXNlYW5HRFBfY2lyY2xlX18xVml3LSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjAycmVtO1xcbiAgc3Ryb2tlOiB1cmwoXFxcIiNhc2Vhbi1nZHAtZ3JhZGllbnRcXFwiKTtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDcwO1xcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDcwO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IEFzZWFuR0RQX2RyYXctY2lyY2xlX18xdGU1UiAyLjVzIGxpbmVhciBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBBc2VhbkdEUF9kcmF3LWNpcmNsZV9fMXRlNVIgMi41cyBsaW5lYXIgZm9yd2FyZHM7XFxufVxcblxcbi5Bc2VhbkdEUF9saW5lX19SWmQ0SyB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjAycmVtO1xcbiAgc3Ryb2tlOiB1cmwoXFxcIiNhc2Vhbi1nZHAtZ3JhZGllbnQtMlxcXCIpO1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogODYuNTtcXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiA4Ni41O1xcbiAgLXdlYmtpdC1hbmltYXRpb246IEFzZWFuR0RQX2RyYXctbGluZV9fMVdGTmMgMi41cyBsaW5lYXIgZm9yd2FyZHMgMi41cztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBBc2VhbkdEUF9kcmF3LWxpbmVfXzFXRk5jIDIuNXMgbGluZWFyIGZvcndhcmRzIDIuNXM7XFxufVxcblxcbi5Bc2VhbkdEUF9kb3RfXy14VERWIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtd2Via2l0LWFuaW1hdGlvbjogQXNlYW5HRFBfZmFkZS1kb3RfX3BFbjJZIDFzIGxpbmVhciBmb3J3YXJkcyA1cztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBBc2VhbkdEUF9mYWRlLWRvdF9fcEVuMlkgMXMgbGluZWFyIGZvcndhcmRzIDVzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgQXNlYW5HRFBfZHJhdy1jaXJjbGVfXzF0ZTVSIHtcXG4gIHRvIHtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE0MDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBBc2VhbkdEUF9kcmF3LWNpcmNsZV9fMXRlNVIge1xcbiAgdG8ge1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTQwO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgQXNlYW5HRFBfZHJhdy1saW5lX18xV0ZOYyB7XFxuICB0byB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIEFzZWFuR0RQX2RyYXctbGluZV9fMVdGTmMge1xcbiAgdG8ge1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIEFzZWFuR0RQX2ZhZGUtZG90X19wRW4yWSB7XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgQXNlYW5HRFBfZmFkZS1kb3RfX3BFbjJZIHtcXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0FzZWFuR0RQLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQVUsa0JBQUE7QUFDVjs7QUFBQTtFQUFLLGtCQUFBO0VBQW9CLGdCQUFBO0FBS3pCOztBQUpBO0VBQUssa0JBQUE7RUFBb0IsZ0JBQUE7QUFTekI7O0FBUkE7RUFBSSxrQkFBQTtBQVlKOztBQUxBO0VBTEUsVUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtFQUlBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0FBV0Y7O0FBVEE7RUFYRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0VBVUEsc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNFQUFBO1VBQUEsOERBQUE7QUFlRjs7QUFiQTtFQUNFLFVBQUE7RUFBWSxrQkFBQTtFQUNaLGlFQUFBO1VBQUEseURBQUE7QUFpQkY7O0FBZkE7RUFBd0I7SUFBSSxzQkFBQTtFQW9CMUI7QUFDRjs7QUFyQkE7RUFBd0I7SUFBSSxzQkFBQTtFQW9CMUI7QUFDRjtBQXBCQTtFQUFzQjtJQUFJLG9CQUFBO0VBd0J4QjtBQUNGO0FBekJBO0VBQXNCO0lBQUksb0JBQUE7RUF3QnhCO0FBQ0Y7QUF4QkE7RUFBcUI7SUFBSSxVQUFBO0lBQVksbUJBQUE7RUE2Qm5DO0FBQ0Y7QUE5QkE7RUFBcUI7SUFBSSxVQUFBO0lBQVksbUJBQUE7RUE2Qm5DO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmlzb2xhdGUge2lzb2xhdGlvbjppc29sYXRlO31cXG4uaDIge2ZvbnQtc2l6ZTogMC4zNXJlbTsgZm9udC13ZWlnaHQ6IDYwMDt9XFxuLmg0IHtmb250LXNpemU6IDAuMTJyZW07IGZvbnQtd2VpZ2h0OiA1MDA7fVxcbi5wIHtmb250LXNpemU6IDAuMTJyZW07fVxcbkBtaXhpbiBncmFkaWVudC1zaGFwZSAoJGdyYWRpZW50LXVybCkge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcXG4gIHN0cm9rZS13aWR0aDogMC4wMnJlbTtcXG4gIHN0cm9rZTogdXJsKCRncmFkaWVudC11cmwpO1xcbn1cXG4uY2lyY2xlIHtcXG4gIEBpbmNsdWRlIGdyYWRpZW50LXNoYXBlKCcjYXNlYW4tZ2RwLWdyYWRpZW50Jyk7XFxuICBzdHJva2UtZGFzaGFycmF5OiA3MDtcXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiA3MDtcXG4gIGFuaW1hdGlvbjogZHJhdy1jaXJjbGUgMi41cyBsaW5lYXIgZm9yd2FyZHM7XFxufVxcbi5saW5lIHtcXG4gIEBpbmNsdWRlIGdyYWRpZW50LXNoYXBlKCcjYXNlYW4tZ2RwLWdyYWRpZW50LTInKTtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDg2LjU7XFxuICBzdHJva2UtZGFzaG9mZnNldDogODYuNTtcXG4gIGFuaW1hdGlvbjogZHJhdy1saW5lIDIuNXMgbGluZWFyIGZvcndhcmRzIDIuNXM7XFxufVxcbi5kb3Qge1xcbiAgb3BhY2l0eTogMDsgdmlzaWJpbGl0eTogaGlkZGVuOyBcXG4gIGFuaW1hdGlvbjogZmFkZS1kb3QgMXMgbGluZWFyIGZvcndhcmRzIDVzO1xcbn1cXG5Aa2V5ZnJhbWVzIGRyYXctY2lyY2xlIHt0byB7c3Ryb2tlLWRhc2hvZmZzZXQ6IDE0MDt9fVxcbkBrZXlmcmFtZXMgZHJhdy1saW5lIHt0byB7c3Ryb2tlLWRhc2hvZmZzZXQ6IDA7fX1cXG5Aa2V5ZnJhbWVzIGZhZGUtZG90IHt0byB7b3BhY2l0eTogMTsgdmlzaWJpbGl0eTogdmlzaWJsZTt9fVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImlzb2xhdGVcIjogXCJBc2VhbkdEUF9pc29sYXRlX18yRjBiR1wiLFxuXHRcImgyXCI6IFwiQXNlYW5HRFBfaDJfXzMwVDVfXCIsXG5cdFwiaDRcIjogXCJBc2VhbkdEUF9oNF9fRmFtcmdcIixcblx0XCJwXCI6IFwiQXNlYW5HRFBfcF9fMjcyS2hcIixcblx0XCJjaXJjbGVcIjogXCJBc2VhbkdEUF9jaXJjbGVfXzFWaXctXCIsXG5cdFwiZHJhdy1jaXJjbGVcIjogXCJBc2VhbkdEUF9kcmF3LWNpcmNsZV9fMXRlNVJcIixcblx0XCJsaW5lXCI6IFwiQXNlYW5HRFBfbGluZV9fUlpkNEtcIixcblx0XCJkcmF3LWxpbmVcIjogXCJBc2VhbkdEUF9kcmF3LWxpbmVfXzFXRk5jXCIsXG5cdFwiZG90XCI6IFwiQXNlYW5HRFBfZG90X18teFREVlwiLFxuXHRcImZhZGUtZG90XCI6IFwiQXNlYW5HRFBfZmFkZS1kb3RfX3BFbjJZXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/components/styles/AseanGDP.module.scss\n");

/***/ })

})