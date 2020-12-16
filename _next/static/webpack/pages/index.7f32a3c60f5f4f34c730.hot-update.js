webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/sections/NavBar.tsx":
/*!***********************************!*\
  !*** ./pages/sections/NavBar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/weikit/Desktop/code/hitachi/pages/sections/NavBar.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction NavBar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var toggle = function toggle() {\n    return setIsOpen(!isOpen);\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isScrolling = _useState2[0],\n      setIsScrolling = _useState2[1];\n\n  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  navRef.current = isScrolling;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var handleScroll = function handleScroll() {\n      var show = window.scrollY > 700;\n\n      if (navRef.current !== show) {\n        setIsScrolling(show);\n      }\n    };\n\n    document.addEventListener('scroll', handleScroll);\n    return function () {\n      document.removeEventListener('scroll', handleScroll);\n    };\n  }, []);\n  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"], {\n    dark: true,\n    fixed: \"top\",\n    expand: \"lg\",\n    style: {\n      backgroundColor: isScrolling ? '#1E3998' : 'transparent',\n      transition: '.5s ease-out'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Collapse\"], {\n    isOpen: isOpen,\n    navbar: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"], {\n    navbar: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    tag: react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],\n    to: \"section-one\",\n    spy: true,\n    smooth: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 15\n    }\n  }, \"ASEAN\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 15\n    }\n  }, \"Manufacturing\"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    tag: react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],\n    to: \"section-two\",\n    spy: true,\n    smooth: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 15\n    }\n  }, \"ASEAN\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 15\n    }\n  }, \"Manufacturing\"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    tag: react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],\n    to: \"section-three\",\n    spy: true,\n    smooth: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, \"Industry 4.0 \", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 90\n    }\n  }), \"Challenges\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    tag: react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],\n    to: \"section-four\",\n    spy: true,\n    smooth: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"Hitachi's \", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 86\n    }\n  }), \"Lumada\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    tag: react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],\n    to: \"section-five\",\n    spy: true,\n    smooth: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"Smart \", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 82\n    }\n  }), \"Manufacturing\")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavbarToggler\"], {\n    onClick: toggle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavbarBrand\"], {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"img/logo.svg\",\n    height: \"25px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 29\n    }\n  })));\n}\n\n_s(NavBar, \"otHtyYSrKW2evHp+jYroRgXlhWQ=\");\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VjdGlvbnMvTmF2QmFyLnRzeD84NTU5Il0sIm5hbWVzIjpbIk5hdkJhciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwiaXNTY3JvbGxpbmciLCJzZXRJc1Njcm9sbGluZyIsIm5hdlJlZiIsInVzZVJlZiIsImN1cnJlbnQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTY3JvbGwiLCJzaG93Iiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwiTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEtBQUQsQ0FETDtBQUFBLE1BQ3hCQyxNQUR3QjtBQUFBLE1BQ2hCQyxTQURnQjs7QUFFL0IsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNRCxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsR0FBZjs7QUFGK0IsbUJBSU9ELHNEQUFRLENBQUMsS0FBRCxDQUpmO0FBQUEsTUFJeEJJLFdBSndCO0FBQUEsTUFJWEMsY0FKVzs7QUFLL0IsTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFDQUQsUUFBTSxDQUFDRSxPQUFQLEdBQWlCSixXQUFqQjtBQUNBSyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFVBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLEdBQTlCOztBQUNBLFVBQUlQLE1BQU0sQ0FBQ0UsT0FBUCxLQUFtQkcsSUFBdkIsRUFBNkI7QUFDM0JOLHNCQUFjLENBQUNNLElBQUQsQ0FBZDtBQUNEO0FBQ0Ys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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFyRSxrQkFERixDQW5CRixDQURGLENBRkYsRUEyQkUsTUFBQyx3REFBRDtBQUFlLFdBQU8sRUFBRWhCLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkYsRUE0QkUsTUFBQyxzREFBRDtBQUFhLFFBQUksRUFBQyxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCO0FBQUssT0FBRyxFQUFDLGNBQVQ7QUFBd0IsVUFBTSxFQUFDLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBdEIsQ0E1QkYsQ0FERjtBQWdDRDs7R0FyRHVCSixNOztLQUFBQSxNIiwiZmlsZSI6Ii4vcGFnZXMvc2VjdGlvbnMvTmF2QmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29sbGFwc2UsIE5hdiwgTmF2YmFyLCBOYXZiYXJCcmFuZCwgTmF2YmFyVG9nZ2xlciwgTmF2SXRlbSwgTmF2TGluayB9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pXG4gIFxuICBjb25zdCBbaXNTY3JvbGxpbmcsIHNldElzU2Nyb2xsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBuYXZSZWYgPSB1c2VSZWYobnVsbClcbiAgbmF2UmVmLmN1cnJlbnQgPSBpc1Njcm9sbGluZ1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNob3cgPSB3aW5kb3cuc2Nyb2xsWSA+IDcwMFxuICAgICAgaWYgKG5hdlJlZi5jdXJyZW50ICE9PSBzaG93KSB7XG4gICAgICAgIHNldElzU2Nyb2xsaW5nKHNob3cpXG4gICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxuICAgIH1cbiAgfSwgW10pXG5cblxuICByZXR1cm4gKFxuICAgIDxOYXZiYXIgZGFyayBmaXhlZD1cInRvcFwiIGV4cGFuZD1cImxnXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGlzU2Nyb2xsaW5nID8gJyMxRTM5OTgnIDogJ3RyYW5zcGFyZW50JywgdHJhbnNpdGlvbjogJy41cyBlYXNlLW91dCd9fT5cbiAgICB7LyogPE5hdmJhciBkYXJrIGZpeGVkPVwidG9wXCIgZXhwYW5kPVwibGdcIj4gKi99XG4gICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cbiAgICAgICAgPE5hdiBuYXZiYXI+XG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2TGluayB0YWc9e0xpbmt9IHRvPVwic2VjdGlvbi1vbmVcIiBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0+XG4gICAgICAgICAgICAgIDxkaXY+QVNFQU48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5NYW51ZmFjdHVyaW5nPC9kaXY+XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkxpbmsgdGFnPXtMaW5rfSB0bz1cInNlY3Rpb24tdHdvXCIgc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9PlxuICAgICAgICAgICAgICA8ZGl2PkFTRUFOPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+TWFudWZhY3R1cmluZzwvZGl2PlxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRhZz17TGlua30gdG89XCJzZWN0aW9uLXRocmVlXCIgc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9PkluZHVzdHJ5IDQuMCA8YnIvPkNoYWxsZW5nZXM8L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkxpbmsgdGFnPXtMaW5rfSB0bz1cInNlY3Rpb24tZm91clwiIHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfT5IaXRhY2hpJ3MgPGJyLz5MdW1hZGE8L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkxpbmsgdGFnPXtMaW5rfSB0bz1cInNlY3Rpb24tZml2ZVwiIHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfT5TbWFydCA8YnIvPk1hbnVmYWN0dXJpbmc8L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICA8L05hdj5cbiAgICAgIDwvQ29sbGFwc2U+XG4gICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XG4gICAgICA8TmF2YmFyQnJhbmQgaHJlZj1cIi9cIj48aW1nIHNyYz1cImltZy9sb2dvLnN2Z1wiIGhlaWdodD1cIjI1cHhcIiAvPjwvTmF2YmFyQnJhbmQ+XG4gICAgPC9OYXZiYXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sections/NavBar.tsx\n");

/***/ })

})