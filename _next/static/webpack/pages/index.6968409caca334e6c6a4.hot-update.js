webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/sections/styles/SectionFive.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/sections/styles/SectionFive.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* COLORS */\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\\n.SectionFive_section-five__3llgY {\\n  color: #1e3998;\\n}\\n\\n.SectionFive_container__3s-0- {\\n  position: relative;\\n  padding-bottom: 100%;\\n  height: 0;\\n  overflow: hidden;\\n  margin: 15px 0px;\\n}\\n\\n.SectionFive_image__2G_Dv {\\n  position: absolute;\\n  top: 0%;\\n  left: 0%;\\n  width: 100%;\\n  height: 100%;\\n  opacity: 1;\\n  background-color: #dbdef8;\\n  -moz-transition: 0.5s ease-out;\\n  transition: 0.5s ease-out;\\n}\\n\\n.SectionFive_cover__1ghMC {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  -webkit-transform: translate(-50%, -50%);\\n     -moz-transform: translate(-50%, -50%);\\n          transform: translate(-50%, -50%);\\n  color: #1e3998;\\n  font-size: 10rem;\\n  font-weight: 100;\\n  letter-spacing: 0.5rem;\\n  -moz-transition: 0.5s ease-out;\\n  transition: 0.5s ease-out;\\n}\\n\\n.SectionFive_overlay__HHm0i {\\n  position: absolute;\\n  bottom: 10%;\\n  left: 10%;\\n  width: 80%;\\n  opacity: 0;\\n  color: #f2f2f2;\\n  text-align: start;\\n  -moz-transition: 0.5s ease-out;\\n  transition: 0.5s ease-out;\\n}\\n\\n.SectionFive_description__1wEbA {\\n  font-weight: 700;\\n  margin: 10px 0px;\\n}\\n\\n.SectionFive_container__3s-0-:hover .SectionFive_image__2G_Dv {\\n  opacity: 0.3;\\n}\\n\\n.SectionFive_container__3s-0-:hover .SectionFive_cover__1ghMC {\\n  opacity: 0.3;\\n  color: #f2f2f2;\\n}\\n\\n.SectionFive_container__3s-0-:hover .SectionFive_overlay__HHm0i {\\n  opacity: 1;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../../styles/utils.scss\",\"webpack://SectionFive.module.scss\"],\"names\":[],\"mappings\":\"AAYA,WAAA;AAWA;;;;;CAAA;ACrBA;EACE,cDaY;ACPd;;AAJA;EACE,kBAAA;EACD,oBAAA;EACC,SAAA;EACA,gBAAA;EACA,gBAAA;AAOF;;AALA;EACE,kBAAA;EACD,OAAA;EACA,QAAA;EACA,WAAA;EACC,YAAA;EACA,UAAA;EACA,yBAAA;EACA,8BAAA;EAAA,yBAAA;AAQF;;AANA;EACE,kBAAA;EACD,QAAA;EACC,SAAA;EACA,wCAAA;KAAA,qCAAA;UAAA,gCAAA;EACA,cDXY;ECYZ,gBAAA;EACA,gBAAA;EACA,sBAAA;EACA,8BAAA;EAAA,yBAAA;AASF;;AAPA;EACE,kBAAA;EACA,WAAA;EACA,SAAA;EACD,UAAA;EACC,UAAA;EACA,cDnBQ;ECoBR,iBAAA;EACA,8BAAA;EAAA,yBAAA;AAUF;;AARA;EACE,gBAAA;EACA,gBAAA;AAWF;;AARA;EACE,YAAA;AAWF;;AATA;EACE,YAAA;EACA,cDjCQ;AC6CV;;AAVA;EACE,UAAA;AAaF\",\"sourcesContent\":[\"@mixin desktop {\\n  @media screen and (min-width: 992px) {\\n    @content;\\n  }\\n}\\n\\n@mixin mobile {\\n  @media screen and (max-width: 992px) {\\n    @content;\\n  }\\n}\\n\\n/* COLORS */\\n$scroll_bar: 15px;\\n$c_light_blue: rgb(125,214,246);\\n$c_medium_blue: rgb(27, 167, 236);\\n$c_dark_blue: rgb(30, 57, 152);\\n$c_teal: rgb(88, 222, 222);\\n$c_grey: rgb(215, 216, 214);\\n$c_purple: rgb(121, 126, 246);\\n$c_white: rgb(242, 242, 242);\\n$c_black: rgb(0, 0, 0);\\n\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\",\"@import \\\"../../../styles/utils.scss\\\";\\n\\n.section-five {\\n  color: $c_dark_blue;\\n}\\n.container {\\n  position: relative;\\n\\tpadding-bottom:100%;\\n  height:0;\\n  overflow:hidden;\\n  margin: 15px 0px;\\n}\\n.image {\\n  position:absolute;\\n\\ttop:0%;\\n\\tleft:0%;\\n\\twidth:100%;\\n  height:100%;\\n  opacity: 1;\\n  background-color: rgb(219, 222, 248);\\n  transition: 0.5s ease-out;\\n}\\n.cover {\\n  position:absolute;\\n\\ttop:50%;\\n  left:50%;\\n  transform: translate(-50%, -50%);\\n  color: $c_dark_blue;\\n  font-size: 10rem;\\n  font-weight: 100;\\n  letter-spacing: 0.5rem;\\n  transition: 0.5s ease-out;\\n}\\n.overlay {\\n  position: absolute;\\n  bottom: 10%;\\n  left: 10%;\\n\\twidth:80%;\\n  opacity: 0;\\n  color: $c_white;\\n  text-align: start;\\n  transition: 0.5s ease-out;\\n}\\n.description {\\n  font-weight: 700;\\n  margin: 10px 0px;\\n}\\n\\n.container:hover .image {\\n  opacity: 0.3;\\n}\\n.container:hover .cover {\\n  opacity: 0.3;\\n  color: $c_white;\\n}\\n.container:hover .overlay {\\n  opacity: 1;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"section-five\": \"SectionFive_section-five__3llgY\",\n\t\"container\": \"SectionFive_container__3s-0-\",\n\t\"image\": \"SectionFive_image__2G_Dv\",\n\t\"cover\": \"SectionFive_cover__1ghMC\",\n\t\"overlay\": \"SectionFive_overlay__HHm0i\",\n\t\"description\": \"SectionFive_description__1wEbA\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VjdGlvbnMvc3R5bGVzL1NlY3Rpb25GaXZlLm1vZHVsZS5zY3NzPzAzZGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHVHQUF1RyxtQkFBbUIsR0FBRyxtQ0FBbUMsdUJBQXVCLHlCQUF5QixjQUFjLHFCQUFxQixxQkFBcUIsR0FBRywrQkFBK0IsdUJBQXVCLFlBQVksYUFBYSxnQkFBZ0IsaUJBQWlCLGVBQWUsOEJBQThCLG1DQUFtQyw4QkFBOEIsR0FBRywrQkFBK0IsdUJBQXVCLGFBQWEsY0FBYyw2Q0FBNkMsNkNBQTZDLDZDQUE2QyxtQkFBbUIscUJBQXFCLHFCQUFxQiwyQkFBMkIsbUNBQW1DLDhCQUE4QixHQUFHLGlDQUFpQyx1QkFBdUIsZ0JBQWdCLGNBQWMsZUFBZSxlQUFlLG1CQUFtQixzQkFBc0IsbUNBQW1DLDhCQUE4QixHQUFHLHFDQUFxQyxxQkFBcUIscUJBQXFCLEdBQUcsbUVBQW1FLGlCQUFpQixHQUFHLG1FQUFtRSxpQkFBaUIsbUJBQW1CLEdBQUcscUVBQXFFLGVBQWUsR0FBRyxPQUFPLG9JQUFvSSxTQUFTLEtBQUssTUFBTSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLHlDQUF5QywwQ0FBMEMsZUFBZSxLQUFLLEdBQUcsbUJBQW1CLDBDQUEwQyxlQUFlLEtBQUssR0FBRyxvQ0FBb0Msa0NBQWtDLG9DQUFvQyxpQ0FBaUMsNkJBQTZCLDhCQUE4QixnQ0FBZ0MsK0JBQStCLHlCQUF5QixnR0FBZ0csbUJBQW1CLHdCQUF3QixHQUFHLGNBQWMsdUJBQXVCLHdCQUF3QixhQUFhLG9CQUFvQixxQkFBcUIsR0FBRyxVQUFVLHNCQUFzQixXQUFXLFlBQVksZUFBZSxnQkFBZ0IsZUFBZSx5Q0FBeUMsOEJBQThCLEdBQUcsVUFBVSxzQkFBc0IsWUFBWSxhQUFhLHFDQUFxQyx3QkFBd0IscUJBQXFCLHFCQUFxQiwyQkFBMkIsOEJBQThCLEdBQUcsWUFBWSx1QkFBdUIsZ0JBQWdCLGNBQWMsY0FBYyxlQUFlLG9CQUFvQixzQkFBc0IsOEJBQThCLEdBQUcsZ0JBQWdCLHFCQUFxQixxQkFBcUIsR0FBRyw2QkFBNkIsaUJBQWlCLEdBQUcsMkJBQTJCLGlCQUFpQixvQkFBb0IsR0FBRyw2QkFBNkIsZUFBZSxHQUFHLG1CQUFtQjtBQUMvb0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9wYWdlcy9zZWN0aW9ucy9zdHlsZXMvU2VjdGlvbkZpdmUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDT0xPUlMgKi9cXG4vKlxcblBPU0lUSU9OSU5HXFxuQk9YIE1PREVMXFxuVFlQT0dSQVBIWVxcblZJU1VBTFxcbiovXFxuLlNlY3Rpb25GaXZlX3NlY3Rpb24tZml2ZV9fM2xsZ1kge1xcbiAgY29sb3I6ICMxZTM5OTg7XFxufVxcblxcbi5TZWN0aW9uRml2ZV9jb250YWluZXJfXzNzLTAtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMTVweCAwcHg7XFxufVxcblxcbi5TZWN0aW9uRml2ZV9pbWFnZV9fMkdfRHYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwJTtcXG4gIGxlZnQ6IDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGVmODtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi5TZWN0aW9uRml2ZV9jb3Zlcl9fMWdoTUMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBjb2xvcjogIzFlMzk5ODtcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi5TZWN0aW9uRml2ZV9vdmVybGF5X19ISG0waSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEwJTtcXG4gIGxlZnQ6IDEwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi5TZWN0aW9uRml2ZV9kZXNjcmlwdGlvbl9fMXdFYkEge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxufVxcblxcbi5TZWN0aW9uRml2ZV9jb250YWluZXJfXzNzLTAtOmhvdmVyIC5TZWN0aW9uRml2ZV9pbWFnZV9fMkdfRHYge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4uU2VjdGlvbkZpdmVfY29udGFpbmVyX18zcy0wLTpob3ZlciAuU2VjdGlvbkZpdmVfY292ZXJfXzFnaE1DIHtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbn1cXG5cXG4uU2VjdGlvbkZpdmVfY29udGFpbmVyX18zcy0wLTpob3ZlciAuU2VjdGlvbkZpdmVfb3ZlcmxheV9fSEhtMGkge1xcbiAgb3BhY2l0eTogMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uLy4uL3N0eWxlcy91dGlscy5zY3NzXCIsXCJ3ZWJwYWNrOi8vU2VjdGlvbkZpdmUubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBWUEsV0FBQTtBQVdBOzs7OztDQUFBO0FDckJBO0VBQ0UsY0RhWTtBQ1BkOztBQUpBO0VBQ0Usa0JBQUE7RUFDRCxvQkFBQTtFQUNDLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxrQkFBQTtFQUNELE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNDLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUFBLHlCQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtFQUNELFFBQUE7RUFDQyxTQUFBO0VBQ0Esd0NBQUE7S0FBQSxxQ0FBQTtVQUFBLGdDQUFBO0VBQ0EsY0RYWTtFQ1laLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQUEseUJBQUE7QUFTRjs7QUFQQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDRCxVQUFBO0VBQ0MsVUFBQTtFQUNBLGNEbkJRO0VDb0JSLGlCQUFBO0VBQ0EsOEJBQUE7RUFBQSx5QkFBQTtBQVVGOztBQVJBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQVdGOztBQVJBO0VBQ0UsWUFBQTtBQVdGOztBQVRBO0VBQ0UsWUFBQTtFQUNBLGNEakNRO0FDNkNWOztBQVZBO0VBQ0UsVUFBQTtBQWFGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiBkZXNrdG9wIHtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gbW9iaWxlIHtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG4vKiBDT0xPUlMgKi9cXG4kc2Nyb2xsX2JhcjogMTVweDtcXG4kY19saWdodF9ibHVlOiByZ2IoMTI1LDIxNCwyNDYpO1xcbiRjX21lZGl1bV9ibHVlOiByZ2IoMjcsIDE2NywgMjM2KTtcXG4kY19kYXJrX2JsdWU6IHJnYigzMCwgNTcsIDE1Mik7XFxuJGNfdGVhbDogcmdiKDg4LCAyMjIsIDIyMik7XFxuJGNfZ3JleTogcmdiKDIxNSwgMjE2LCAyMTQpO1xcbiRjX3B1cnBsZTogcmdiKDEyMSwgMTI2LCAyNDYpO1xcbiRjX3doaXRlOiByZ2IoMjQyLCAyNDIsIDI0Mik7XFxuJGNfYmxhY2s6IHJnYigwLCAwLCAwKTtcXG5cXG4vKlxcblBPU0lUSU9OSU5HXFxuQk9YIE1PREVMXFxuVFlQT0dSQVBIWVxcblZJU1VBTFxcbiovXCIsXCJAaW1wb3J0IFxcXCIuLi8uLi8uLi9zdHlsZXMvdXRpbHMuc2Nzc1xcXCI7XFxuXFxuLnNlY3Rpb24tZml2ZSB7XFxuICBjb2xvcjogJGNfZGFya19ibHVlO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRwYWRkaW5nLWJvdHRvbToxMDAlO1xcbiAgaGVpZ2h0OjA7XFxuICBvdmVyZmxvdzpoaWRkZW47XFxuICBtYXJnaW46IDE1cHggMHB4O1xcbn1cXG4uaW1hZ2Uge1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuXFx0dG9wOjAlO1xcblxcdGxlZnQ6MCU7XFxuXFx0d2lkdGg6MTAwJTtcXG4gIGhlaWdodDoxMDAlO1xcbiAgb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIyMiwgMjQ4KTtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XFxufVxcbi5jb3ZlciB7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG5cXHR0b3A6NTAlO1xcbiAgbGVmdDo1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGNvbG9yOiAkY19kYXJrX2JsdWU7XFxuICBmb250LXNpemU6IDEwcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xcbn1cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEwJTtcXG4gIGxlZnQ6IDEwJTtcXG5cXHR3aWR0aDo4MCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgY29sb3I6ICRjX3doaXRlO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xcbn1cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxufVxcblxcbi5jb250YWluZXI6aG92ZXIgLmltYWdlIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLmNvbnRhaW5lcjpob3ZlciAuY292ZXIge1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgY29sb3I6ICRjX3doaXRlO1xcbn1cXG4uY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcXG4gIG9wYWNpdHk6IDE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNlY3Rpb24tZml2ZVwiOiBcIlNlY3Rpb25GaXZlX3NlY3Rpb24tZml2ZV9fM2xsZ1lcIixcblx0XCJjb250YWluZXJcIjogXCJTZWN0aW9uRml2ZV9jb250YWluZXJfXzNzLTAtXCIsXG5cdFwiaW1hZ2VcIjogXCJTZWN0aW9uRml2ZV9pbWFnZV9fMkdfRHZcIixcblx0XCJjb3ZlclwiOiBcIlNlY3Rpb25GaXZlX2NvdmVyX18xZ2hNQ1wiLFxuXHRcIm92ZXJsYXlcIjogXCJTZWN0aW9uRml2ZV9vdmVybGF5X19ISG0waVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiU2VjdGlvbkZpdmVfZGVzY3JpcHRpb25fXzF3RWJBXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/sections/styles/SectionFive.module.scss\n");

/***/ })

})