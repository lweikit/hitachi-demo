webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/sections/styles/SectionTwo.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/sections/styles/SectionTwo.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* COLORS */\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\\n.SectionTwo_section-two__22-m8 {\\n  position: relative;\\n  color: #f2f2f2;\\n}\\n\\n.SectionTwo_bg__3FNJ3 {\\n  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), color-stop(10%, black), color-stop(90%, black), to(rgba(0, 0, 0, 0)));\\n  -webkit-mask-image: linear-gradient(rgba(0, 0, 0, 0), black 10%, black 90%, rgba(0, 0, 0, 0));\\n          mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), color-stop(10%, black), color-stop(90%, black), to(rgba(0, 0, 0, 0)));\\n          mask-image: linear-gradient(rgba(0, 0, 0, 0), black 10%, black 90%, rgba(0, 0, 0, 0));\\n  left: -55%;\\n}\\n@media screen and (max-width: 992px) {\\n  .SectionTwo_bg__3FNJ3 {\\n    left: -15%;\\n  }\\n}\\n\\n.SectionTwo_hidden__3xI-G {\\n  opacity: 0;\\n  visibility: hidden;\\n}\\n\\n.SectionTwo_seq1-bg__3ND_f {\\n  -webkit-animation: SectionTwo_fade-in__zMq47 2s forwards, SectionTwo_blend-in__gJUtE 2s forwards 2s;\\n          animation: SectionTwo_fade-in__zMq47 2s forwards, SectionTwo_blend-in__gJUtE 2s forwards 2s;\\n}\\n\\n.SectionTwo_seq2-video__3gUUi {\\n  -webkit-animation: SectionTwo_fade-in__zMq47 1s forwards 4s;\\n          animation: SectionTwo_fade-in__zMq47 1s forwards 4s;\\n}\\n\\n.SectionTwo_seq3-p__2HGpW {\\n  -webkit-animation: SectionTwo_fade-in__zMq47 1s forwards 5s;\\n          animation: SectionTwo_fade-in__zMq47 1s forwards 5s;\\n}\\n\\n.SectionTwo_seq4-sbs__2A1HW {\\n  -webkit-animation: SectionTwo_fade-in__zMq47 1s forwards 6s;\\n          animation: SectionTwo_fade-in__zMq47 1s forwards 6s;\\n}\\n\\n@-webkit-keyframes SectionTwo_fade-in__zMq47 {\\n  to {\\n    opacity: 1;\\n    visibility: visible;\\n  }\\n}\\n\\n@keyframes SectionTwo_fade-in__zMq47 {\\n  to {\\n    opacity: 1;\\n    visibility: visible;\\n  }\\n}\\n@-webkit-keyframes SectionTwo_blend-in__gJUtE {\\n  to {\\n    opacity: 0.1;\\n  }\\n}\\n@keyframes SectionTwo_blend-in__gJUtE {\\n  to {\\n    opacity: 0.1;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../../styles/utils.scss\",\"webpack://SectionTwo.module.scss\"],\"names\":[],\"mappings\":\"AAYA,WAAA;AAWA;;;;;CAAA;ACrBA;EACE,kBAAA;EACA,cDgBQ;ACVV;;AAJA;EACE,iKAAA;EAAA,6FAAA;UAAA,yJAAA;UAAA,qFAAA;EAMA,UAAA;AAEF;ADRE;ECDF;IAQoB,UAAA;EAKlB;AACF;;AAJA;EAAS,UAAA;EAAY,kBAAA;AASrB;;AARA;EAAU,mGAAA;UAAA,2FAAA;AAYV;;AAXA;EAAa,2DAAA;UAAA,mDAAA;AAeb;;AAdA;EAAS,2DAAA;UAAA,mDAAA;AAkBT;;AAjBA;EAAW,2DAAA;UAAA,mDAAA;AAqBX;;AApBA;EAAoB;IAAI,UAAA;IAAY,mBAAA;EA0BlC;AACF;;AA3BA;EAAoB;IAAI,UAAA;IAAY,mBAAA;EA0BlC;AACF;AA1BA;EAAqB;IAAI,YAAA;EA8BvB;AACF;AA/BA;EAAqB;IAAI,YAAA;EA8BvB;AACF\",\"sourcesContent\":[\"@mixin desktop {\\n  @media screen and (min-width: 992px) {\\n    @content;\\n  }\\n}\\n\\n@mixin mobile {\\n  @media screen and (max-width: 992px) {\\n    @content;\\n  }\\n}\\n\\n/* COLORS */\\n$scroll_bar: 15px;\\n$c_light_blue: rgb(125,214,246);\\n$c_medium_blue: rgb(27, 167, 236);\\n$c_dark_blue: rgb(30, 57, 152);\\n$c_teal: rgb(88, 222, 222);\\n$c_grey: rgb(215, 216, 214);\\n$c_purple: rgb(121, 126, 246);\\n$c_white: rgb(242, 242, 242);\\n$c_black: rgb(0, 0, 0);\\n\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\",\"@import \\\"../../../styles/utils.scss\\\";\\n\\n.section-two {\\n  position: relative;\\n  color: $c_white;\\n}\\n.bg {\\n  mask-image: linear-gradient(\\n    rgba(0,0,0,0.0),\\n    rgba(0,0,0,1) 10%,\\n    rgba(0,0,0,1) 90%,\\n    rgba(0,0,0,0.0)\\n  );\\n  left: -55%;\\n  @include mobile { left: -15% }\\n}\\n.hidden {opacity: 0; visibility: hidden;}\\n.seq1-bg {animation: fade-in 2s forwards, blend-in 2s forwards 2s;}\\n.seq2-video {animation: fade-in 1s forwards 4s;}\\n.seq3-p {animation: fade-in 1s forwards 5s;}\\n.seq4-sbs {animation: fade-in 1s forwards 6s}\\n@keyframes fade-in {to {opacity: 1; visibility: visible;}}\\n@keyframes blend-in {to {opacity: 0.1;}}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"section-two\": \"SectionTwo_section-two__22-m8\",\n\t\"bg\": \"SectionTwo_bg__3FNJ3\",\n\t\"hidden\": \"SectionTwo_hidden__3xI-G\",\n\t\"seq1-bg\": \"SectionTwo_seq1-bg__3ND_f\",\n\t\"fade-in\": \"SectionTwo_fade-in__zMq47\",\n\t\"blend-in\": \"SectionTwo_blend-in__gJUtE\",\n\t\"seq2-video\": \"SectionTwo_seq2-video__3gUUi\",\n\t\"seq3-p\": \"SectionTwo_seq3-p__2HGpW\",\n\t\"seq4-sbs\": \"SectionTwo_seq4-sbs__2A1HW\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VjdGlvbnMvc3R5bGVzL1NlY3Rpb25Ud28ubW9kdWxlLnNjc3M/NjA5NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMscUdBQXFHLHVCQUF1QixtQkFBbUIsR0FBRywyQkFBMkIsc0tBQXNLLGtHQUFrRyxzS0FBc0ssa0dBQWtHLGVBQWUsR0FBRyx3Q0FBd0MsMkJBQTJCLGlCQUFpQixLQUFLLEdBQUcsK0JBQStCLGVBQWUsdUJBQXVCLEdBQUcsZ0NBQWdDLHdHQUF3Ryx3R0FBd0csR0FBRyxtQ0FBbUMsZ0VBQWdFLGdFQUFnRSxHQUFHLCtCQUErQixnRUFBZ0UsZ0VBQWdFLEdBQUcsaUNBQWlDLGdFQUFnRSxnRUFBZ0UsR0FBRyxrREFBa0QsUUFBUSxpQkFBaUIsMEJBQTBCLEtBQUssR0FBRywwQ0FBMEMsUUFBUSxpQkFBaUIsMEJBQTBCLEtBQUssR0FBRyxpREFBaUQsUUFBUSxtQkFBbUIsS0FBSyxHQUFHLHlDQUF5QyxRQUFRLG1CQUFtQixLQUFLLEdBQUcsT0FBTyxtSUFBbUksU0FBUyxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxLQUFLLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxPQUFPLHlDQUF5QywwQ0FBMEMsZUFBZSxLQUFLLEdBQUcsbUJBQW1CLDBDQUEwQyxlQUFlLEtBQUssR0FBRyxvQ0FBb0Msa0NBQWtDLG9DQUFvQyxpQ0FBaUMsNkJBQTZCLDhCQUE4QixnQ0FBZ0MsK0JBQStCLHlCQUF5QixnR0FBZ0csa0JBQWtCLHVCQUF1QixvQkFBb0IsR0FBRyxPQUFPLGlJQUFpSSxlQUFlLHFCQUFxQixhQUFhLEdBQUcsV0FBVyxXQUFXLHFCQUFxQixZQUFZLHlEQUF5RCxlQUFlLG1DQUFtQyxXQUFXLG1DQUFtQyxhQUFhLGtDQUFrQyxzQkFBc0IsSUFBSSxXQUFXLHVCQUF1Qix1QkFBdUIsSUFBSSxlQUFlLG1CQUFtQjtBQUN4dkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9wYWdlcy9zZWN0aW9ucy9zdHlsZXMvU2VjdGlvblR3by5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIENPTE9SUyAqL1xcbi8qXFxuUE9TSVRJT05JTkdcXG5CT1ggTU9ERUxcXG5UWVBPR1JBUEhZXFxuVklTVUFMXFxuKi9cXG4uU2VjdGlvblR3b19zZWN0aW9uLXR3b19fMjItbTgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbi5TZWN0aW9uVHdvX2JnX18zRk5KMyB7XFxuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20ocmdiYSgwLCAwLCAwLCAwKSksIGNvbG9yLXN0b3AoMTAlLCBibGFjayksIGNvbG9yLXN0b3AoOTAlLCBibGFjayksIHRvKHJnYmEoMCwgMCwgMCwgMCkpKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMCksIGJsYWNrIDEwJSwgYmxhY2sgOTAlLCByZ2JhKDAsIDAsIDAsIDApKTtcXG4gICAgICAgICAgbWFzay1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbShyZ2JhKDAsIDAsIDAsIDApKSwgY29sb3Itc3RvcCgxMCUsIGJsYWNrKSwgY29sb3Itc3RvcCg5MCUsIGJsYWNrKSwgdG8ocmdiYSgwLCAwLCAwLCAwKSkpO1xcbiAgICAgICAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwKSwgYmxhY2sgMTAlLCBibGFjayA5MCUsIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgbGVmdDogLTU1JTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIC5TZWN0aW9uVHdvX2JnX18zRk5KMyB7XFxuICAgIGxlZnQ6IC0xNSU7XFxuICB9XFxufVxcblxcbi5TZWN0aW9uVHdvX2hpZGRlbl9fM3hJLUcge1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLlNlY3Rpb25Ud29fc2VxMS1iZ19fM05EX2Yge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IFNlY3Rpb25Ud29fZmFkZS1pbl9fek1xNDcgMnMgZm9yd2FyZHMsIFNlY3Rpb25Ud29fYmxlbmQtaW5fX2dKVXRFIDJzIGZvcndhcmRzIDJzO1xcbiAgICAgICAgICBhbmltYXRpb246IFNlY3Rpb25Ud29fZmFkZS1pbl9fek1xNDcgMnMgZm9yd2FyZHMsIFNlY3Rpb25Ud29fYmxlbmQtaW5fX2dKVXRFIDJzIGZvcndhcmRzIDJzO1xcbn1cXG5cXG4uU2VjdGlvblR3b19zZXEyLXZpZGVvX18zZ1VVaSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogU2VjdGlvblR3b19mYWRlLWluX196TXE0NyAxcyBmb3J3YXJkcyA0cztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBTZWN0aW9uVHdvX2ZhZGUtaW5fX3pNcTQ3IDFzIGZvcndhcmRzIDRzO1xcbn1cXG5cXG4uU2VjdGlvblR3b19zZXEzLXBfXzJIR3BXIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBTZWN0aW9uVHdvX2ZhZGUtaW5fX3pNcTQ3IDFzIGZvcndhcmRzIDVzO1xcbiAgICAgICAgICBhbmltYXRpb246IFNlY3Rpb25Ud29fZmFkZS1pbl9fek1xNDcgMXMgZm9yd2FyZHMgNXM7XFxufVxcblxcbi5TZWN0aW9uVHdvX3NlcTQtc2JzX18yQTFIVyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogU2VjdGlvblR3b19mYWRlLWluX196TXE0NyAxcyBmb3J3YXJkcyA2cztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBTZWN0aW9uVHdvX2ZhZGUtaW5fX3pNcTQ3IDFzIGZvcndhcmRzIDZzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgU2VjdGlvblR3b19mYWRlLWluX196TXE0NyB7XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgU2VjdGlvblR3b19mYWRlLWluX196TXE0NyB7XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBTZWN0aW9uVHdvX2JsZW5kLWluX19nSlV0RSB7XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDAuMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBTZWN0aW9uVHdvX2JsZW5kLWluX19nSlV0RSB7XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDAuMTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uLy4uL3N0eWxlcy91dGlscy5zY3NzXCIsXCJ3ZWJwYWNrOi8vU2VjdGlvblR3by5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFZQSxXQUFBO0FBV0E7Ozs7O0NBQUE7QUNyQkE7RUFDRSxrQkFBQTtFQUNBLGNEZ0JRO0FDVlY7O0FBSkE7RUFDRSxpS0FBQTtFQUFBLDZGQUFBO1VBQUEseUpBQUE7VUFBQSxxRkFBQTtFQU1BLFVBQUE7QUFFRjtBRFJFO0VDREY7SUFRb0IsVUFBQTtFQUtsQjtBQUNGOztBQUpBO0VBQVMsVUFBQTtFQUFZLGtCQUFBO0FBU3JCOztBQVJBO0VBQVUsbUdBQUE7VUFBQSwyRkFBQTtBQVlWOztBQVhBO0VBQWEsMkRBQUE7VUFBQSxtREFBQTtBQWViOztBQWRBO0VBQVMsMkRBQUE7VUFBQSxtREFBQTtBQWtCVDs7QUFqQkE7RUFBVywyREFBQTtVQUFBLG1EQUFBO0FBcUJYOztBQXBCQTtFQUFvQjtJQUFJLFVBQUE7SUFBWSxtQkFBQTtFQTBCbEM7QUFDRjs7QUEzQkE7RUFBb0I7SUFBSSxVQUFBO0lBQVksbUJBQUE7RUEwQmxDO0FBQ0Y7QUExQkE7RUFBcUI7SUFBSSxZQUFBO0VBOEJ2QjtBQUNGO0FBL0JBO0VBQXFCO0lBQUksWUFBQTtFQThCdkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gZGVza3RvcCB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIG1vYmlsZSB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuLyogQ09MT1JTICovXFxuJHNjcm9sbF9iYXI6IDE1cHg7XFxuJGNfbGlnaHRfYmx1ZTogcmdiKDEyNSwyMTQsMjQ2KTtcXG4kY19tZWRpdW1fYmx1ZTogcmdiKDI3LCAxNjcsIDIzNik7XFxuJGNfZGFya19ibHVlOiByZ2IoMzAsIDU3LCAxNTIpO1xcbiRjX3RlYWw6IHJnYig4OCwgMjIyLCAyMjIpO1xcbiRjX2dyZXk6IHJnYigyMTUsIDIxNiwgMjE0KTtcXG4kY19wdXJwbGU6IHJnYigxMjEsIDEyNiwgMjQ2KTtcXG4kY193aGl0ZTogcmdiKDI0MiwgMjQyLCAyNDIpO1xcbiRjX2JsYWNrOiByZ2IoMCwgMCwgMCk7XFxuXFxuLypcXG5QT1NJVElPTklOR1xcbkJPWCBNT0RFTFxcblRZUE9HUkFQSFlcXG5WSVNVQUxcXG4qL1wiLFwiQGltcG9ydCBcXFwiLi4vLi4vLi4vc3R5bGVzL3V0aWxzLnNjc3NcXFwiO1xcblxcbi5zZWN0aW9uLXR3byB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogJGNfd2hpdGU7XFxufVxcbi5iZyB7XFxuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHJnYmEoMCwwLDAsMC4wKSxcXG4gICAgcmdiYSgwLDAsMCwxKSAxMCUsXFxuICAgIHJnYmEoMCwwLDAsMSkgOTAlLFxcbiAgICByZ2JhKDAsMCwwLDAuMClcXG4gICk7XFxuICBsZWZ0OiAtNTUlO1xcbiAgQGluY2x1ZGUgbW9iaWxlIHsgbGVmdDogLTE1JSB9XFxufVxcbi5oaWRkZW4ge29wYWNpdHk6IDA7IHZpc2liaWxpdHk6IGhpZGRlbjt9XFxuLnNlcTEtYmcge2FuaW1hdGlvbjogZmFkZS1pbiAycyBmb3J3YXJkcywgYmxlbmQtaW4gMnMgZm9yd2FyZHMgMnM7fVxcbi5zZXEyLXZpZGVvIHthbmltYXRpb246IGZhZGUtaW4gMXMgZm9yd2FyZHMgNHM7fVxcbi5zZXEzLXAge2FuaW1hdGlvbjogZmFkZS1pbiAxcyBmb3J3YXJkcyA1czt9XFxuLnNlcTQtc2JzIHthbmltYXRpb246IGZhZGUtaW4gMXMgZm9yd2FyZHMgNnN9XFxuQGtleWZyYW1lcyBmYWRlLWluIHt0byB7b3BhY2l0eTogMTsgdmlzaWJpbGl0eTogdmlzaWJsZTt9fVxcbkBrZXlmcmFtZXMgYmxlbmQtaW4ge3RvIHtvcGFjaXR5OiAwLjE7fX1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzZWN0aW9uLXR3b1wiOiBcIlNlY3Rpb25Ud29fc2VjdGlvbi10d29fXzIyLW04XCIsXG5cdFwiYmdcIjogXCJTZWN0aW9uVHdvX2JnX18zRk5KM1wiLFxuXHRcImhpZGRlblwiOiBcIlNlY3Rpb25Ud29faGlkZGVuX18zeEktR1wiLFxuXHRcInNlcTEtYmdcIjogXCJTZWN0aW9uVHdvX3NlcTEtYmdfXzNORF9mXCIsXG5cdFwiZmFkZS1pblwiOiBcIlNlY3Rpb25Ud29fZmFkZS1pbl9fek1xNDdcIixcblx0XCJibGVuZC1pblwiOiBcIlNlY3Rpb25Ud29fYmxlbmQtaW5fX2dKVXRFXCIsXG5cdFwic2VxMi12aWRlb1wiOiBcIlNlY3Rpb25Ud29fc2VxMi12aWRlb19fM2dVVWlcIixcblx0XCJzZXEzLXBcIjogXCJTZWN0aW9uVHdvX3NlcTMtcF9fMkhHcFdcIixcblx0XCJzZXE0LXNic1wiOiBcIlNlY3Rpb25Ud29fc2VxNC1zYnNfXzJBMUhXXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/sections/styles/SectionTwo.module.scss\n");

/***/ })

})