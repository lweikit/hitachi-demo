webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/sections/styles/SectionFive.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/sections/styles/SectionFive.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* COLORS */\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\\n.SectionFive_section-five__3llgY {\\n  color: #1e3998;\\n}\\n@media screen and (min-width: 992px) {\\n  .SectionFive_section-five__3llgY img {\\n    width: 200px;\\n  }\\n}\\n@media screen and (max-width: 992px) {\\n  .SectionFive_section-five__3llgY img {\\n    width: 100px;\\n  }\\n}\\n\\n.SectionFive_container__3s-0- {\\n  position: relative;\\n  padding-bottom: 100%;\\n  padding-top: 30px;\\n  height: 0;\\n}\\n\\n.SectionFive_image__2G_Dv {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  width: 50%;\\n  height: 50%;\\n  -webkit-transform: translate(-50%, -50%);\\n     -moz-transform: translate(-50%, -50%);\\n          transform: translate(-50%, -50%);\\n  opacity: 1;\\n  background-color: #dbdef8;\\n  color: #1e3998;\\n  font-size: 10rem;\\n  font-weight: 300;\\n  -moz-transition: 0.5s ease-out;\\n  transition: 0.5s ease-out;\\n}\\n\\n.SectionFive_overlay__HHm0i {\\n  position: absolute;\\n  bottom: 5%;\\n  left: 5%;\\n  opacity: 0;\\n  -moz-transition: 0.5s ease-out;\\n  transition: 0.5s ease-out;\\n  color: #f2f2f2;\\n  text-align: start;\\n}\\n\\n.SectionFive_container__3s-0-:hover .SectionFive_image__2G_Dv {\\n  opacity: 0.3;\\n  color: #f2f2f2;\\n}\\n\\n.SectionFive_container__3s-0-:hover .SectionFive_overlay__HHm0i {\\n  opacity: 1;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../../styles/utils.scss\",\"webpack://SectionFive.module.scss\"],\"names\":[],\"mappings\":\"AAYA,WAAA;AAWA;;;;;CAAA;ACrBA;EACE,cDaY;ACPd;ADRE;ECGA;IACqB,YAAA;EAQrB;AACF;ADPE;ECHA;IAEoB,YAAA;EAYpB;AACF;;AAVA;EACE,kBAAA;EACD,oBAAA;EACA,iBAAA;EACC,SAAA;AAaF;;AAXA;EACE,kBAAA;EACD,QAAA;EACA,SAAA;EACA,UAAA;EACC,WAAA;EACA,wCAAA;KAAA,qCAAA;UAAA,gCAAA;EACA,UAAA;EACA,yBAAA;EACA,cDRY;ECSZ,gBAAA;EACA,gBAAA;EACA,8BAAA;EAAA,yBAAA;AAcF;;AAZA;EACE,kBAAA;EACA,UAAA;EACA,QAAA;EACA,UAAA;EACA,8BAAA;EAAA,yBAAA;EACA,cDfQ;ECgBR,iBAAA;AAeF;;AAZA;EACE,YAAA;EACA,cDrBQ;ACoCV;;AAZA;EACE,UAAA;AAeF\",\"sourcesContent\":[\"@mixin desktop {\\n  @media screen and (min-width: 992px) {\\n    @content;\\n  }\\n}\\n\\n@mixin mobile {\\n  @media screen and (max-width: 992px) {\\n    @content;\\n  }\\n}\\n\\n/* COLORS */\\n$scroll_bar: 15px;\\n$c_light_blue: rgb(125,214,246);\\n$c_medium_blue: rgb(27, 167, 236);\\n$c_dark_blue: rgb(30, 57, 152);\\n$c_teal: rgb(88, 222, 222);\\n$c_grey: rgb(215, 216, 214);\\n$c_purple: rgb(121, 126, 246);\\n$c_white: rgb(242, 242, 242);\\n$c_black: rgb(0, 0, 0);\\n\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\",\"@import \\\"../../../styles/utils.scss\\\";\\n\\n.section-five {\\n  color: $c_dark_blue;\\n  img {\\n    @include desktop { width: 200px; }\\n    @include mobile { width: 100px; }\\n  }\\n}\\n.container {\\n  position: relative;\\n\\tpadding-bottom:100%;\\n\\tpadding-top:30px;\\n  height:0;\\n}\\n.image {\\n  position:absolute;\\n\\ttop:50%;\\n\\tleft:50%;\\n\\twidth:50%;\\n  height:50%;\\n  transform: translate(-50%, -50%);\\n  opacity: 1;\\n  background-color: rgb(219, 222, 248);\\n  color: $c_dark_blue;\\n  font-size: 10rem;\\n  font-weight: 300;\\n  transition: 0.5s ease-out;\\n}\\n.overlay {\\n  position: absolute;\\n  bottom: 5%;\\n  left: 5%;\\n  opacity: 0;\\n  transition: 0.5s ease-out;\\n  color: $c_white;\\n  text-align: start;\\n}\\n\\n.container:hover .image {\\n  opacity: 0.3;\\n  color: $c_white;\\n}\\n\\n.container:hover .overlay {\\n  opacity: 1;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"section-five\": \"SectionFive_section-five__3llgY\",\n\t\"container\": \"SectionFive_container__3s-0-\",\n\t\"image\": \"SectionFive_image__2G_Dv\",\n\t\"overlay\": \"SectionFive_overlay__HHm0i\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VjdGlvbnMvc3R5bGVzL1NlY3Rpb25GaXZlLm1vZHVsZS5zY3NzPzAzZGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHVHQUF1RyxtQkFBbUIsR0FBRyx3Q0FBd0MsMENBQTBDLG1CQUFtQixLQUFLLEdBQUcsd0NBQXdDLDBDQUEwQyxtQkFBbUIsS0FBSyxHQUFHLG1DQUFtQyx1QkFBdUIseUJBQXlCLHNCQUFzQixjQUFjLEdBQUcsK0JBQStCLHVCQUF1QixhQUFhLGNBQWMsZUFBZSxnQkFBZ0IsNkNBQTZDLDZDQUE2Qyw2Q0FBNkMsZUFBZSw4QkFBOEIsbUJBQW1CLHFCQUFxQixxQkFBcUIsbUNBQW1DLDhCQUE4QixHQUFHLGlDQUFpQyx1QkFBdUIsZUFBZSxhQUFhLGVBQWUsbUNBQW1DLDhCQUE4QixtQkFBbUIsc0JBQXNCLEdBQUcsbUVBQW1FLGlCQUFpQixtQkFBbUIsR0FBRyxxRUFBcUUsZUFBZSxHQUFHLE9BQU8sb0lBQW9JLFNBQVMsS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLHlDQUF5QywwQ0FBMEMsZUFBZSxLQUFLLEdBQUcsbUJBQW1CLDBDQUEwQyxlQUFlLEtBQUssR0FBRyxvQ0FBb0Msa0NBQWtDLG9DQUFvQyxpQ0FBaUMsNkJBQTZCLDhCQUE4QixnQ0FBZ0MsK0JBQStCLHlCQUF5QixnR0FBZ0csbUJBQW1CLHdCQUF3QixTQUFTLHdCQUF3QixjQUFjLEVBQUUsdUJBQXVCLGNBQWMsRUFBRSxLQUFLLEdBQUcsY0FBYyx1QkFBdUIsd0JBQXdCLHFCQUFxQixhQUFhLEdBQUcsVUFBVSxzQkFBc0IsWUFBWSxhQUFhLGNBQWMsZUFBZSxxQ0FBcUMsZUFBZSx5Q0FBeUMsd0JBQXdCLHFCQUFxQixxQkFBcUIsOEJBQThCLEdBQUcsWUFBWSx1QkFBdUIsZUFBZSxhQUFhLGVBQWUsOEJBQThCLG9CQUFvQixzQkFBc0IsR0FBRyw2QkFBNkIsaUJBQWlCLG9CQUFvQixHQUFHLCtCQUErQixlQUFlLEdBQUcsbUJBQW1CO0FBQzl1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vcGFnZXMvc2VjdGlvbnMvc3R5bGVzL1NlY3Rpb25GaXZlLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ09MT1JTICovXFxuLypcXG5QT1NJVElPTklOR1xcbkJPWCBNT0RFTFxcblRZUE9HUkFQSFlcXG5WSVNVQUxcXG4qL1xcbi5TZWN0aW9uRml2ZV9zZWN0aW9uLWZpdmVfXzNsbGdZIHtcXG4gIGNvbG9yOiAjMWUzOTk4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLlNlY3Rpb25GaXZlX3NlY3Rpb24tZml2ZV9fM2xsZ1kgaW1nIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgLlNlY3Rpb25GaXZlX3NlY3Rpb24tZml2ZV9fM2xsZ1kgaW1nIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgfVxcbn1cXG5cXG4uU2VjdGlvbkZpdmVfY29udGFpbmVyX18zcy0wLSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uU2VjdGlvbkZpdmVfaW1hZ2VfXzJHX0R2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRlZjg7XFxuICBjb2xvcjogIzFlMzk5ODtcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXG59XFxuXFxuLlNlY3Rpb25GaXZlX292ZXJsYXlfX0hIbTBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNSU7XFxuICBsZWZ0OiA1JTtcXG4gIG9wYWNpdHk6IDA7XFxuICAtbW96LXRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLlNlY3Rpb25GaXZlX2NvbnRhaW5lcl9fM3MtMC06aG92ZXIgLlNlY3Rpb25GaXZlX2ltYWdlX18yR19EdiB7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBjb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuLlNlY3Rpb25GaXZlX2NvbnRhaW5lcl9fM3MtMC06aG92ZXIgLlNlY3Rpb25GaXZlX292ZXJsYXlfX0hIbTBpIHtcXG4gIG9wYWNpdHk6IDE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi8uLi9zdHlsZXMvdXRpbHMuc2Nzc1wiLFwid2VicGFjazovL1NlY3Rpb25GaXZlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVlBLFdBQUE7QUFXQTs7Ozs7Q0FBQTtBQ3JCQTtFQUNFLGNEYVk7QUNQZDtBRFJFO0VDR0E7SUFDcUIsWUFBQTtFQVFyQjtBQUNGO0FEUEU7RUNIQTtJQUVvQixZQUFBO0VBWXBCO0FBQ0Y7O0FBVkE7RUFDRSxrQkFBQTtFQUNELG9CQUFBO0VBQ0EsaUJBQUE7RUFDQyxTQUFBO0FBYUY7O0FBWEE7RUFDRSxrQkFBQTtFQUNELFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNDLFdBQUE7RUFDQSx3Q0FBQTtLQUFBLHFDQUFBO1VBQUEsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxjRFJZO0VDU1osZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQUEseUJBQUE7QUFjRjs7QUFaQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFBQSx5QkFBQTtFQUNBLGNEZlE7RUNnQlIsaUJBQUE7QUFlRjs7QUFaQTtFQUNFLFlBQUE7RUFDQSxjRHJCUTtBQ29DVjs7QUFaQTtFQUNFLFVBQUE7QUFlRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gZGVza3RvcCB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIG1vYmlsZSB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuLyogQ09MT1JTICovXFxuJHNjcm9sbF9iYXI6IDE1cHg7XFxuJGNfbGlnaHRfYmx1ZTogcmdiKDEyNSwyMTQsMjQ2KTtcXG4kY19tZWRpdW1fYmx1ZTogcmdiKDI3LCAxNjcsIDIzNik7XFxuJGNfZGFya19ibHVlOiByZ2IoMzAsIDU3LCAxNTIpO1xcbiRjX3RlYWw6IHJnYig4OCwgMjIyLCAyMjIpO1xcbiRjX2dyZXk6IHJnYigyMTUsIDIxNiwgMjE0KTtcXG4kY19wdXJwbGU6IHJnYigxMjEsIDEyNiwgMjQ2KTtcXG4kY193aGl0ZTogcmdiKDI0MiwgMjQyLCAyNDIpO1xcbiRjX2JsYWNrOiByZ2IoMCwgMCwgMCk7XFxuXFxuLypcXG5QT1NJVElPTklOR1xcbkJPWCBNT0RFTFxcblRZUE9HUkFQSFlcXG5WSVNVQUxcXG4qL1wiLFwiQGltcG9ydCBcXFwiLi4vLi4vLi4vc3R5bGVzL3V0aWxzLnNjc3NcXFwiO1xcblxcbi5zZWN0aW9uLWZpdmUge1xcbiAgY29sb3I6ICRjX2RhcmtfYmx1ZTtcXG4gIGltZyB7XFxuICAgIEBpbmNsdWRlIGRlc2t0b3AgeyB3aWR0aDogMjAwcHg7IH1cXG4gICAgQGluY2x1ZGUgbW9iaWxlIHsgd2lkdGg6IDEwMHB4OyB9XFxuICB9XFxufVxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHBhZGRpbmctYm90dG9tOjEwMCU7XFxuXFx0cGFkZGluZy10b3A6MzBweDtcXG4gIGhlaWdodDowO1xcbn1cXG4uaW1hZ2Uge1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuXFx0dG9wOjUwJTtcXG5cXHRsZWZ0OjUwJTtcXG5cXHR3aWR0aDo1MCU7XFxuICBoZWlnaHQ6NTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjIyLCAyNDgpO1xcbiAgY29sb3I6ICRjX2RhcmtfYmx1ZTtcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXG59XFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1JTtcXG4gIGxlZnQ6IDUlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XFxuICBjb2xvcjogJGNfd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLmNvbnRhaW5lcjpob3ZlciAuaW1hZ2Uge1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgY29sb3I6ICRjX3doaXRlO1xcbn1cXG5cXG4uY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcXG4gIG9wYWNpdHk6IDE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNlY3Rpb24tZml2ZVwiOiBcIlNlY3Rpb25GaXZlX3NlY3Rpb24tZml2ZV9fM2xsZ1lcIixcblx0XCJjb250YWluZXJcIjogXCJTZWN0aW9uRml2ZV9jb250YWluZXJfXzNzLTAtXCIsXG5cdFwiaW1hZ2VcIjogXCJTZWN0aW9uRml2ZV9pbWFnZV9fMkdfRHZcIixcblx0XCJvdmVybGF5XCI6IFwiU2VjdGlvbkZpdmVfb3ZlcmxheV9fSEhtMGlcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/sections/styles/SectionFive.module.scss\n");

/***/ })

})