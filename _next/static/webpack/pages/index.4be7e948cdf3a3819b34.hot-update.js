webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/sections/styles/SectionFive.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/sections/styles/SectionFive.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* COLORS */\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\\n.SectionFive_section-five__3llgY {\\n  color: #1e3998;\\n}\\n@media screen and (min-width: 992px) {\\n  .SectionFive_section-five__3llgY img {\\n    width: 200px;\\n  }\\n}\\n@media screen and (max-width: 992px) {\\n  .SectionFive_section-five__3llgY img {\\n    width: 100px;\\n  }\\n}\\n\\n.SectionFive_container__3s-0- {\\n  position: relative;\\n  padding-bottom: 100%;\\n  padding-top: 30px;\\n  height: 0;\\n}\\n\\n.SectionFive_image__2G_Dv {\\n  position: absolute;\\n  top: 0;\\n  left: 0%;\\n  width: 100%;\\n  height: 100%;\\n  opacity: 1;\\n  background-color: #dbdef8;\\n  color: #1e3998;\\n  font-size: 10rem;\\n  font-weight: 300;\\n  -moz-transition: 0.5s ease-out;\\n  transition: 0.5s ease-out;\\n}\\n\\n.SectionFive_overlay__HHm0i {\\n  position: absolute;\\n  bottom: 5%;\\n  left: 5%;\\n  opacity: 0;\\n  -moz-transition: 0.5s ease-out;\\n  transition: 0.5s ease-out;\\n  color: #f2f2f2;\\n  text-align: start;\\n}\\n\\n.SectionFive_container__3s-0-:hover .SectionFive_image__2G_Dv {\\n  opacity: 0.3;\\n  color: #f2f2f2;\\n}\\n\\n.SectionFive_container__3s-0-:hover .SectionFive_overlay__HHm0i {\\n  opacity: 1;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../../styles/utils.scss\",\"webpack://SectionFive.module.scss\"],\"names\":[],\"mappings\":\"AAYA,WAAA;AAWA;;;;;CAAA;ACrBA;EACE,cDaY;ACPd;ADRE;ECGA;IACqB,YAAA;EAQrB;AACF;ADPE;ECHA;IAEoB,YAAA;EAYpB;AACF;;AAVA;EACE,kBAAA;EACD,oBAAA;EACA,iBAAA;EACC,SAAA;AAaF;;AAXA;EACE,kBAAA;EACD,MAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACC,UAAA;EACA,yBAAA;EACA,cDPY;ECQZ,gBAAA;EACA,gBAAA;EACA,8BAAA;EAAA,yBAAA;AAcF;;AAZA;EACE,kBAAA;EACA,UAAA;EACA,QAAA;EACA,UAAA;EACA,8BAAA;EAAA,yBAAA;EACA,cDdQ;ECeR,iBAAA;AAeF;;AAZA;EACE,YAAA;EACA,cDpBQ;ACmCV;;AAZA;EACE,UAAA;AAeF\",\"sourcesContent\":[\"@mixin desktop {\\n  @media screen and (min-width: 992px) {\\n    @content;\\n  }\\n}\\n\\n@mixin mobile {\\n  @media screen and (max-width: 992px) {\\n    @content;\\n  }\\n}\\n\\n/* COLORS */\\n$scroll_bar: 15px;\\n$c_light_blue: rgb(125,214,246);\\n$c_medium_blue: rgb(27, 167, 236);\\n$c_dark_blue: rgb(30, 57, 152);\\n$c_teal: rgb(88, 222, 222);\\n$c_grey: rgb(215, 216, 214);\\n$c_purple: rgb(121, 126, 246);\\n$c_white: rgb(242, 242, 242);\\n$c_black: rgb(0, 0, 0);\\n\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\",\"@import \\\"../../../styles/utils.scss\\\";\\n\\n.section-five {\\n  color: $c_dark_blue;\\n  img {\\n    @include desktop { width: 200px; }\\n    @include mobile { width: 100px; }\\n  }\\n}\\n.container {\\n  position: relative;\\n\\tpadding-bottom:100%;\\n\\tpadding-top:30px;\\n  height:0;\\n}\\n.image {\\n  position:absolute;\\n\\ttop:0;\\n\\tleft:0%;\\n\\twidth:100%;\\n\\theight:100%;\\n  opacity: 1;\\n  background-color: rgb(219, 222, 248);\\n  color: $c_dark_blue;\\n  font-size: 10rem;\\n  font-weight: 300;\\n  transition: 0.5s ease-out;\\n}\\n.overlay {\\n  position: absolute;\\n  bottom: 5%;\\n  left: 5%;\\n  opacity: 0;\\n  transition: 0.5s ease-out;\\n  color: $c_white;\\n  text-align: start;\\n}\\n\\n.container:hover .image {\\n  opacity: 0.3;\\n  color: $c_white;\\n}\\n\\n.container:hover .overlay {\\n  opacity: 1;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"section-five\": \"SectionFive_section-five__3llgY\",\n\t\"container\": \"SectionFive_container__3s-0-\",\n\t\"image\": \"SectionFive_image__2G_Dv\",\n\t\"overlay\": \"SectionFive_overlay__HHm0i\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VjdGlvbnMvc3R5bGVzL1NlY3Rpb25GaXZlLm1vZHVsZS5zY3NzPzAzZGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHVHQUF1RyxtQkFBbUIsR0FBRyx3Q0FBd0MsMENBQTBDLG1CQUFtQixLQUFLLEdBQUcsd0NBQXdDLDBDQUEwQyxtQkFBbUIsS0FBSyxHQUFHLG1DQUFtQyx1QkFBdUIseUJBQXlCLHNCQUFzQixjQUFjLEdBQUcsK0JBQStCLHVCQUF1QixXQUFXLGFBQWEsZ0JBQWdCLGlCQUFpQixlQUFlLDhCQUE4QixtQkFBbUIscUJBQXFCLHFCQUFxQixtQ0FBbUMsOEJBQThCLEdBQUcsaUNBQWlDLHVCQUF1QixlQUFlLGFBQWEsZUFBZSxtQ0FBbUMsOEJBQThCLG1CQUFtQixzQkFBc0IsR0FBRyxtRUFBbUUsaUJBQWlCLG1CQUFtQixHQUFHLHFFQUFxRSxlQUFlLEdBQUcsT0FBTyxvSUFBb0ksU0FBUyxLQUFLLE1BQU0sVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFVBQVUseUNBQXlDLDBDQUEwQyxlQUFlLEtBQUssR0FBRyxtQkFBbUIsMENBQTBDLGVBQWUsS0FBSyxHQUFHLG9DQUFvQyxrQ0FBa0Msb0NBQW9DLGlDQUFpQyw2QkFBNkIsOEJBQThCLGdDQUFnQywrQkFBK0IseUJBQXlCLGdHQUFnRyxtQkFBbUIsd0JBQXdCLFNBQVMsd0JBQXdCLGNBQWMsRUFBRSx1QkFBdUIsY0FBYyxFQUFFLEtBQUssR0FBRyxjQUFjLHVCQUF1Qix3QkFBd0IscUJBQXFCLGFBQWEsR0FBRyxVQUFVLHNCQUFzQixVQUFVLFlBQVksZUFBZSxnQkFBZ0IsZUFBZSx5Q0FBeUMsd0JBQXdCLHFCQUFxQixxQkFBcUIsOEJBQThCLEdBQUcsWUFBWSx1QkFBdUIsZUFBZSxhQUFhLGVBQWUsOEJBQThCLG9CQUFvQixzQkFBc0IsR0FBRyw2QkFBNkIsaUJBQWlCLG9CQUFvQixHQUFHLCtCQUErQixlQUFlLEdBQUcsbUJBQW1CO0FBQzloRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vcGFnZXMvc2VjdGlvbnMvc3R5bGVzL1NlY3Rpb25GaXZlLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ09MT1JTICovXFxuLypcXG5QT1NJVElPTklOR1xcbkJPWCBNT0RFTFxcblRZUE9HUkFQSFlcXG5WSVNVQUxcXG4qL1xcbi5TZWN0aW9uRml2ZV9zZWN0aW9uLWZpdmVfXzNsbGdZIHtcXG4gIGNvbG9yOiAjMWUzOTk4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLlNlY3Rpb25GaXZlX3NlY3Rpb24tZml2ZV9fM2xsZ1kgaW1nIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgLlNlY3Rpb25GaXZlX3NlY3Rpb24tZml2ZV9fM2xsZ1kgaW1nIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgfVxcbn1cXG5cXG4uU2VjdGlvbkZpdmVfY29udGFpbmVyX18zcy0wLSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uU2VjdGlvbkZpdmVfaW1hZ2VfXzJHX0R2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGVmODtcXG4gIGNvbG9yOiAjMWUzOTk4O1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAtbW96LXRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xcbn1cXG5cXG4uU2VjdGlvbkZpdmVfb3ZlcmxheV9fSEhtMGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1JTtcXG4gIGxlZnQ6IDUlO1xcbiAgb3BhY2l0eTogMDtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XFxuICBjb2xvcjogI2YyZjJmMjtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uU2VjdGlvbkZpdmVfY29udGFpbmVyX18zcy0wLTpob3ZlciAuU2VjdGlvbkZpdmVfaW1hZ2VfXzJHX0R2IHtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbn1cXG5cXG4uU2VjdGlvbkZpdmVfY29udGFpbmVyX18zcy0wLTpob3ZlciAuU2VjdGlvbkZpdmVfb3ZlcmxheV9fSEhtMGkge1xcbiAgb3BhY2l0eTogMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uLy4uL3N0eWxlcy91dGlscy5zY3NzXCIsXCJ3ZWJwYWNrOi8vU2VjdGlvbkZpdmUubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBWUEsV0FBQTtBQVdBOzs7OztDQUFBO0FDckJBO0VBQ0UsY0RhWTtBQ1BkO0FEUkU7RUNHQTtJQUNxQixZQUFBO0VBUXJCO0FBQ0Y7QURQRTtFQ0hBO0lBRW9CLFlBQUE7RUFZcEI7QUFDRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0Qsb0JBQUE7RUFDQSxpQkFBQTtFQUNDLFNBQUE7QUFhRjs7QUFYQTtFQUNFLGtCQUFBO0VBQ0QsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNDLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGNEUFk7RUNRWixnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFBQSx5QkFBQTtBQWNGOztBQVpBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUFBLHlCQUFBO0VBQ0EsY0RkUTtFQ2VSLGlCQUFBO0FBZUY7O0FBWkE7RUFDRSxZQUFBO0VBQ0EsY0RwQlE7QUNtQ1Y7O0FBWkE7RUFDRSxVQUFBO0FBZUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIGRlc2t0b3Age1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBtb2JpbGUge1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbi8qIENPTE9SUyAqL1xcbiRzY3JvbGxfYmFyOiAxNXB4O1xcbiRjX2xpZ2h0X2JsdWU6IHJnYigxMjUsMjE0LDI0Nik7XFxuJGNfbWVkaXVtX2JsdWU6IHJnYigyNywgMTY3LCAyMzYpO1xcbiRjX2RhcmtfYmx1ZTogcmdiKDMwLCA1NywgMTUyKTtcXG4kY190ZWFsOiByZ2IoODgsIDIyMiwgMjIyKTtcXG4kY19ncmV5OiByZ2IoMjE1LCAyMTYsIDIxNCk7XFxuJGNfcHVycGxlOiByZ2IoMTIxLCAxMjYsIDI0Nik7XFxuJGNfd2hpdGU6IHJnYigyNDIsIDI0MiwgMjQyKTtcXG4kY19ibGFjazogcmdiKDAsIDAsIDApO1xcblxcbi8qXFxuUE9TSVRJT05JTkdcXG5CT1ggTU9ERUxcXG5UWVBPR1JBUEhZXFxuVklTVUFMXFxuKi9cIixcIkBpbXBvcnQgXFxcIi4uLy4uLy4uL3N0eWxlcy91dGlscy5zY3NzXFxcIjtcXG5cXG4uc2VjdGlvbi1maXZlIHtcXG4gIGNvbG9yOiAkY19kYXJrX2JsdWU7XFxuICBpbWcge1xcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHsgd2lkdGg6IDIwMHB4OyB9XFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7IHdpZHRoOiAxMDBweDsgfVxcbiAgfVxcbn1cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRwYWRkaW5nLWJvdHRvbToxMDAlO1xcblxcdHBhZGRpbmctdG9wOjMwcHg7XFxuICBoZWlnaHQ6MDtcXG59XFxuLmltYWdlIHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcblxcdHRvcDowO1xcblxcdGxlZnQ6MCU7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHRoZWlnaHQ6MTAwJTtcXG4gIG9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMjIsIDI0OCk7XFxuICBjb2xvcjogJGNfZGFya19ibHVlO1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xcbn1cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDUlO1xcbiAgbGVmdDogNSU7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXG4gIGNvbG9yOiAkY193aGl0ZTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uY29udGFpbmVyOmhvdmVyIC5pbWFnZSB7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBjb2xvcjogJGNfd2hpdGU7XFxufVxcblxcbi5jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xcbiAgb3BhY2l0eTogMTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic2VjdGlvbi1maXZlXCI6IFwiU2VjdGlvbkZpdmVfc2VjdGlvbi1maXZlX18zbGxnWVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIlNlY3Rpb25GaXZlX2NvbnRhaW5lcl9fM3MtMC1cIixcblx0XCJpbWFnZVwiOiBcIlNlY3Rpb25GaXZlX2ltYWdlX18yR19EdlwiLFxuXHRcIm92ZXJsYXlcIjogXCJTZWN0aW9uRml2ZV9vdmVybGF5X19ISG0waVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/sections/styles/SectionFive.module.scss\n");

/***/ })

})