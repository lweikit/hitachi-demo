webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/sections/styles/SectionFive.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/sections/styles/SectionFive.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* COLORS */\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\\n.SectionFive_section-five__3llgY {\\n  color: #1e3998;\\n}\\n\\n.SectionFive_container__3s-0- {\\n  position: relative;\\n  padding-bottom: 100%;\\n  height: 0;\\n  overflow: hidden;\\n}\\n\\n.SectionFive_image__2G_Dv {\\n  position: absolute;\\n  top: 0%;\\n  left: 0%;\\n  width: 100%;\\n  height: 100%;\\n  opacity: 1;\\n  background-color: #dbdef8;\\n  -moz-transition: 0.5s ease-out;\\n  transition: 0.5s ease-out;\\n  text-align: center;\\n  -webkit-justify-content: center;\\n     -moz-box-pack: center;\\n          justify-content: center;\\n}\\n\\n.SectionFive_cover__1ghMC {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  -webkit-transform: translate(-50%, -50%);\\n     -moz-transform: translate(-50%, -50%);\\n          transform: translate(-50%, -50%);\\n  color: #1e3998;\\n  font-size: 10rem;\\n  font-weight: 100;\\n  letter-spacing: 0.1rem;\\n}\\n\\n.SectionFive_overlay__HHm0i {\\n  position: absolute;\\n  bottom: 5%;\\n  left: 5%;\\n  opacity: 0;\\n  -moz-transition: 0.5s ease-out;\\n  transition: 0.5s ease-out;\\n  color: #f2f2f2;\\n  text-align: start;\\n}\\n\\n.SectionFive_container__3s-0-:hover .SectionFive_image__2G_Dv {\\n  opacity: 0.3;\\n  color: #f2f2f2;\\n}\\n\\n.SectionFive_container__3s-0-:hover .SectionFive_overlay__HHm0i {\\n  opacity: 1;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../../styles/utils.scss\",\"webpack://SectionFive.module.scss\"],\"names\":[],\"mappings\":\"AAYA,WAAA;AAWA;;;;;CAAA;ACrBA;EACE,cDaY;ACPd;;AAJA;EACE,kBAAA;EACD,oBAAA;EACC,SAAA;EACA,gBAAA;AAOF;;AALA;EACE,kBAAA;EACD,OAAA;EACA,QAAA;EACA,WAAA;EACC,YAAA;EACA,UAAA;EACA,yBAAA;EACA,8BAAA;EAAA,yBAAA;EACA,kBAAA;EACA,+BAAA;KAAA,qBAAA;UAAA,uBAAA;AAQF;;AANA;EACE,kBAAA;EACD,QAAA;EACC,SAAA;EACA,wCAAA;KAAA,qCAAA;UAAA,gCAAA;EACA,cDZY;ECaZ,gBAAA;EACA,gBAAA;EACA,sBAAA;AASF;;AAPA;EACE,kBAAA;EACA,UAAA;EACA,QAAA;EACA,UAAA;EACA,8BAAA;EAAA,yBAAA;EACA,cDnBQ;ECoBR,iBAAA;AAUF;;AAPA;EACE,YAAA;EACA,cDzBQ;ACmCV;;AAPA;EACE,UAAA;AAUF\",\"sourcesContent\":[\"@mixin desktop {\\n  @media screen and (min-width: 992px) {\\n    @content;\\n  }\\n}\\n\\n@mixin mobile {\\n  @media screen and (max-width: 992px) {\\n    @content;\\n  }\\n}\\n\\n/* COLORS */\\n$scroll_bar: 15px;\\n$c_light_blue: rgb(125,214,246);\\n$c_medium_blue: rgb(27, 167, 236);\\n$c_dark_blue: rgb(30, 57, 152);\\n$c_teal: rgb(88, 222, 222);\\n$c_grey: rgb(215, 216, 214);\\n$c_purple: rgb(121, 126, 246);\\n$c_white: rgb(242, 242, 242);\\n$c_black: rgb(0, 0, 0);\\n\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\",\"@import \\\"../../../styles/utils.scss\\\";\\n\\n.section-five {\\n  color: $c_dark_blue;\\n}\\n.container {\\n  position: relative;\\n\\tpadding-bottom:100%;\\n  height:0;\\n  overflow:hidden;\\n}\\n.image {\\n  position:absolute;\\n\\ttop:0%;\\n\\tleft:0%;\\n\\twidth:100%;\\n  height:100%;\\n  opacity: 1;\\n  background-color: rgb(219, 222, 248);\\n  transition: 0.5s ease-out;\\n  text-align: center;\\n  justify-content: center;\\n}\\n.cover{\\n  position:absolute;\\n\\ttop:50%;\\n  left:50%;\\n  transform: translate(-50%, -50%);\\n  color: $c_dark_blue;\\n  font-size: 10rem;\\n  font-weight: 100;\\n  letter-spacing: 0.1rem;\\n}\\n.overlay {\\n  position: absolute;\\n  bottom: 5%;\\n  left: 5%;\\n  opacity: 0;\\n  transition: 0.5s ease-out;\\n  color: $c_white;\\n  text-align: start;\\n}\\n\\n.container:hover .image {\\n  opacity: 0.3;\\n  color: $c_white;\\n}\\n\\n.container:hover .overlay {\\n  opacity: 1;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"section-five\": \"SectionFive_section-five__3llgY\",\n\t\"container\": \"SectionFive_container__3s-0-\",\n\t\"image\": \"SectionFive_image__2G_Dv\",\n\t\"cover\": \"SectionFive_cover__1ghMC\",\n\t\"overlay\": \"SectionFive_overlay__HHm0i\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VjdGlvbnMvc3R5bGVzL1NlY3Rpb25GaXZlLm1vZHVsZS5zY3NzPzAzZGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHVHQUF1RyxtQkFBbUIsR0FBRyxtQ0FBbUMsdUJBQXVCLHlCQUF5QixjQUFjLHFCQUFxQixHQUFHLCtCQUErQix1QkFBdUIsWUFBWSxhQUFhLGdCQUFnQixpQkFBaUIsZUFBZSw4QkFBOEIsbUNBQW1DLDhCQUE4Qix1QkFBdUIsb0NBQW9DLDZCQUE2QixvQ0FBb0MsR0FBRywrQkFBK0IsdUJBQXVCLGFBQWEsY0FBYyw2Q0FBNkMsNkNBQTZDLDZDQUE2QyxtQkFBbUIscUJBQXFCLHFCQUFxQiwyQkFBMkIsR0FBRyxpQ0FBaUMsdUJBQXVCLGVBQWUsYUFBYSxlQUFlLG1DQUFtQyw4QkFBOEIsbUJBQW1CLHNCQUFzQixHQUFHLG1FQUFtRSxpQkFBaUIsbUJBQW1CLEdBQUcscUVBQXFFLGVBQWUsR0FBRyxPQUFPLG9JQUFvSSxTQUFTLEtBQUssTUFBTSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSx5Q0FBeUMsMENBQTBDLGVBQWUsS0FBSyxHQUFHLG1CQUFtQiwwQ0FBMEMsZUFBZSxLQUFLLEdBQUcsb0NBQW9DLGtDQUFrQyxvQ0FBb0MsaUNBQWlDLDZCQUE2Qiw4QkFBOEIsZ0NBQWdDLCtCQUErQix5QkFBeUIsZ0dBQWdHLG1CQUFtQix3QkFBd0IsR0FBRyxjQUFjLHVCQUF1Qix3QkFBd0IsYUFBYSxvQkFBb0IsR0FBRyxVQUFVLHNCQUFzQixXQUFXLFlBQVksZUFBZSxnQkFBZ0IsZUFBZSx5Q0FBeUMsOEJBQThCLHVCQUF1Qiw0QkFBNEIsR0FBRyxTQUFTLHNCQUFzQixZQUFZLGFBQWEscUNBQXFDLHdCQUF3QixxQkFBcUIscUJBQXFCLDJCQUEyQixHQUFHLFlBQVksdUJBQXVCLGVBQWUsYUFBYSxlQUFlLDhCQUE4QixvQkFBb0Isc0JBQXNCLEdBQUcsNkJBQTZCLGlCQUFpQixvQkFBb0IsR0FBRywrQkFBK0IsZUFBZSxHQUFHLG1CQUFtQjtBQUMzMEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vcGFnZXMvc2VjdGlvbnMvc3R5bGVzL1NlY3Rpb25GaXZlLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ09MT1JTICovXFxuLypcXG5QT1NJVElPTklOR1xcbkJPWCBNT0RFTFxcblRZUE9HUkFQSFlcXG5WSVNVQUxcXG4qL1xcbi5TZWN0aW9uRml2ZV9zZWN0aW9uLWZpdmVfXzNsbGdZIHtcXG4gIGNvbG9yOiAjMWUzOTk4O1xcbn1cXG5cXG4uU2VjdGlvbkZpdmVfY29udGFpbmVyX18zcy0wLSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXG4gIGhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5TZWN0aW9uRml2ZV9pbWFnZV9fMkdfRHYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwJTtcXG4gIGxlZnQ6IDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGVmODtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLlNlY3Rpb25GaXZlX2NvdmVyX18xZ2hNQyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGNvbG9yOiAjMWUzOTk4O1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbn1cXG5cXG4uU2VjdGlvbkZpdmVfb3ZlcmxheV9fSEhtMGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1JTtcXG4gIGxlZnQ6IDUlO1xcbiAgb3BhY2l0eTogMDtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XFxuICBjb2xvcjogI2YyZjJmMjtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uU2VjdGlvbkZpdmVfY29udGFpbmVyX18zcy0wLTpob3ZlciAuU2VjdGlvbkZpdmVfaW1hZ2VfXzJHX0R2IHtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbn1cXG5cXG4uU2VjdGlvbkZpdmVfY29udGFpbmVyX18zcy0wLTpob3ZlciAuU2VjdGlvbkZpdmVfb3ZlcmxheV9fSEhtMGkge1xcbiAgb3BhY2l0eTogMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uLy4uL3N0eWxlcy91dGlscy5zY3NzXCIsXCJ3ZWJwYWNrOi8vU2VjdGlvbkZpdmUubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBWUEsV0FBQTtBQVdBOzs7OztDQUFBO0FDckJBO0VBQ0UsY0RhWTtBQ1BkOztBQUpBO0VBQ0Usa0JBQUE7RUFDRCxvQkFBQTtFQUNDLFNBQUE7RUFDQSxnQkFBQTtBQU9GOztBQUxBO0VBQ0Usa0JBQUE7RUFDRCxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQyxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFBQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7S0FBQSxxQkFBQTtVQUFBLHVCQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtFQUNELFFBQUE7RUFDQyxTQUFBO0VBQ0Esd0NBQUE7S0FBQSxxQ0FBQTtVQUFBLGdDQUFBO0VBQ0EsY0RaWTtFQ2FaLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQVNGOztBQVBBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUFBLHlCQUFBO0VBQ0EsY0RuQlE7RUNvQlIsaUJBQUE7QUFVRjs7QUFQQTtFQUNFLFlBQUE7RUFDQSxjRHpCUTtBQ21DVjs7QUFQQTtFQUNFLFVBQUE7QUFVRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gZGVza3RvcCB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIG1vYmlsZSB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuLyogQ09MT1JTICovXFxuJHNjcm9sbF9iYXI6IDE1cHg7XFxuJGNfbGlnaHRfYmx1ZTogcmdiKDEyNSwyMTQsMjQ2KTtcXG4kY19tZWRpdW1fYmx1ZTogcmdiKDI3LCAxNjcsIDIzNik7XFxuJGNfZGFya19ibHVlOiByZ2IoMzAsIDU3LCAxNTIpO1xcbiRjX3RlYWw6IHJnYig4OCwgMjIyLCAyMjIpO1xcbiRjX2dyZXk6IHJnYigyMTUsIDIxNiwgMjE0KTtcXG4kY19wdXJwbGU6IHJnYigxMjEsIDEyNiwgMjQ2KTtcXG4kY193aGl0ZTogcmdiKDI0MiwgMjQyLCAyNDIpO1xcbiRjX2JsYWNrOiByZ2IoMCwgMCwgMCk7XFxuXFxuLypcXG5QT1NJVElPTklOR1xcbkJPWCBNT0RFTFxcblRZUE9HUkFQSFlcXG5WSVNVQUxcXG4qL1wiLFwiQGltcG9ydCBcXFwiLi4vLi4vLi4vc3R5bGVzL3V0aWxzLnNjc3NcXFwiO1xcblxcbi5zZWN0aW9uLWZpdmUge1xcbiAgY29sb3I6ICRjX2RhcmtfYmx1ZTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0cGFkZGluZy1ib3R0b206MTAwJTtcXG4gIGhlaWdodDowO1xcbiAgb3ZlcmZsb3c6aGlkZGVuO1xcbn1cXG4uaW1hZ2Uge1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuXFx0dG9wOjAlO1xcblxcdGxlZnQ6MCU7XFxuXFx0d2lkdGg6MTAwJTtcXG4gIGhlaWdodDoxMDAlO1xcbiAgb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIyMiwgMjQ4KTtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNvdmVye1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuXFx0dG9wOjUwJTtcXG4gIGxlZnQ6NTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBjb2xvcjogJGNfZGFya19ibHVlO1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbn1cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDUlO1xcbiAgbGVmdDogNSU7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXG4gIGNvbG9yOiAkY193aGl0ZTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uY29udGFpbmVyOmhvdmVyIC5pbWFnZSB7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBjb2xvcjogJGNfd2hpdGU7XFxufVxcblxcbi5jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xcbiAgb3BhY2l0eTogMTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic2VjdGlvbi1maXZlXCI6IFwiU2VjdGlvbkZpdmVfc2VjdGlvbi1maXZlX18zbGxnWVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIlNlY3Rpb25GaXZlX2NvbnRhaW5lcl9fM3MtMC1cIixcblx0XCJpbWFnZVwiOiBcIlNlY3Rpb25GaXZlX2ltYWdlX18yR19EdlwiLFxuXHRcImNvdmVyXCI6IFwiU2VjdGlvbkZpdmVfY292ZXJfXzFnaE1DXCIsXG5cdFwib3ZlcmxheVwiOiBcIlNlY3Rpb25GaXZlX292ZXJsYXlfX0hIbTBpXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/sections/styles/SectionFive.module.scss\n");

/***/ })

})