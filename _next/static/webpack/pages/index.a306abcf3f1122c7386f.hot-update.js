webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/sections/NavBar.tsx":
/*!***********************************!*\
  !*** ./pages/sections/NavBar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/NavBar.module.scss */ \"./pages/sections/styles/NavBar.module.scss\");\n/* harmony import */ var _styles_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/weikit/Desktop/code/hitachi/pages/sections/NavBar.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction NavBar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var toggle = function toggle() {\n    return setIsOpen(!isOpen);\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isScrolling = _useState2[0],\n      setIsScrolling = _useState2[1];\n\n  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  navRef.current = isScrolling;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var handleScroll = function handleScroll() {\n      var show = window.scrollY > 700;\n\n      if (navRef.current !== show) {\n        setIsScrolling(show);\n      }\n    };\n\n    document.addEventListener('scroll', handleScroll);\n    return function () {\n      document.removeEventListener('scroll', handleScroll);\n    };\n  }, []);\n  return (// <Navbar dark fixed=\"top\" expand=\"lg\" style={{backgroundColor: isScrolling ? '#1E3998' : 'transparent', transition: '.5s ease-out'}}>\n    __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"], {\n      dark: true,\n      fixed: \"top\",\n      expand: \"lg\",\n      style: {\n        backgroundColor: '#1E3998'\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 5\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavbarToggler\"], {\n      onClick: toggle,\n      className: \"mx-auto\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 7\n      }\n    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Collapse\"], {\n      isOpen: isOpen,\n      navbar: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"], {\n      navbar: true,\n      className: \"mx-auto\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n      className: _styles_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['quick-link'],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      tag: react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],\n      to: \"section-one\",\n      spy: true,\n      smooth: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 15\n      }\n    }, \"S\\u1EA3n xu\\u1EA5t c\\u1EE7a khu v\\u1EF1c\"), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 15\n      }\n    }, \"ASEAN\"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n      className: _styles_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['quick-link'],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      tag: react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],\n      to: \"section-two\",\n      spy: true,\n      smooth: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 15\n      }\n    }, \"Chuy\\u1EC3n \\u0111\\u1ED5i\"), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 15\n      }\n    }, \"c\\u1EA5p thi\\u1EBFt\"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n      className: _styles_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['quick-link'],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      tag: react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],\n      to: \"section-three\",\n      spy: true,\n      smooth: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 15\n      }\n    }, \"Nh\\u1EEFng th\\xE1ch th\\u1EE9c c\\u1EE7a n\\u1EC1n C\\xF4ng\"), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 15\n      }\n    }, \"C\\xF4ng nghi\\u1EC7p 4.0\"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n      className: _styles_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['quick-link'],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      tag: react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],\n      to: \"section-four\",\n      spy: true,\n      smooth: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 15\n      }\n    }, \"N\\u1EC1n t\\u1EA3ng Lumada\"), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 15\n      }\n    }, \"c\\u1EE7a Hitachi\"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n      className: _styles_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['quick-link'],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 11\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      tag: react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],\n      to: \"section-five\",\n      spy: true,\n      smooth: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 15\n      }\n    }, \"S\\u1EA3n xu\\u1EA5t\"), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 15\n      }\n    }, \"th\\xF4ng minh\"))))))\n  );\n}\n\n_s(NavBar, \"otHtyYSrKW2evHp+jYroRgXlhWQ=\");\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VjdGlvbnMvTmF2QmFyLnRzeD84NTU5Il0sIm5hbWVzIjpbIk5hdkJhciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwiaXNTY3JvbGxpbmciLCJzZXRJc1Njcm9sbGluZyIsIm5hdlJlZiIsInVzZVJlZiIsImN1cnJlbnQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTY3JvbGwiLCJzaG93Iiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHlsZXMiLCJMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEtBQUQsQ0FETDtBQUFBLE1BQ3hCQyxNQUR3QjtBQUFBLE1BQ2hCQyxTQURnQjs7QUFFL0IsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNRCxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsR0FBZjs7QUFGK0IsbUJBSU9ELHNEQUFRLENBQUMsS0FBRCxDQUpmO0FBQUEsTUFJeEJJLFdBSndCO0FBQUEsTUFJWEMsY0FKVzs7QUFLL0IsTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFDQUQsUUFBTSxDQUFDRSxPQUFQLEdBQWlCSixXQUFqQjtBQUNBSyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFVBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLEdBQTlCOztBQUNBLFVBQUlQLE1BQU0sQ0FBQ0UsT0FBUCxLQUFtQkcsSUFBdkIsRUFBNkI7QUFDM0JOLHNCQUFjLENBQUNNLElBQUQsQ0FBZDtBQUNEO0FBQ0YsS0FMRDs7QUFNQUcsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQ0wsWUFBcEM7QUFDQSxXQUFPLFlBQU07QUFDWEksY0FBUSxDQUFDRSxtQkFBVCxDQUE2QixRQUE3QixFQUF1Q04sWUFBdkM7QUFDRCxLQUZEO0FBR0QsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWNBLFNBQ0U7QUFDQSxVQUFDLGlEQUFEO0FBQVEsVUFBSSxNQUFaO0FBQWEsV0FBSyxFQUFDLEtBQW5CO0FBQXlCLFlBQU0sRUFBQyxJQUFoQztBQUFxQyxXQUFLLEVBQUU7QUFBQ08sdUJBQWUsRUFBRTtBQUFsQixPQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx3REFBRDtBQUFlLGFBQU8sRUFBRWQsTUFBeEI7QUFBZ0MsZUFBUyxFQUFDLFNBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsbURBQUQ7QUFBVSxZQUFNLEVBQUVGLE1BQWxCO0FBQTBCLFlBQU0sTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOENBQUQ7QUFBSyxZQUFNLE1BQVg7QUFBWSxlQUFTLEVBQUMsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsa0RBQUQ7QUFBUyxlQUFTLEVBQUVpQixpRUFBTSxDQUFDLFlBQUQsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsa0RBQUQ7QUFBUyxTQUFHLEVBQUVDLGlEQUFkO0FBQW9CLFFBQUUsRUFBQyxhQUF2QjtBQUFxQyxTQUFHLEVBQUUsSUFBMUM7QUFBZ0QsWUFBTSxFQUFFLElBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLENBREYsQ0FERixFQU9FLE1BQUMsa0RBQUQ7QUFBUyxlQUFTLEVBQUVELGlFQUFNLENBQUMsWUFBRCxDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrREFBRDtBQUFTLFNBQUcsRUFBRUMsaURBQWQ7QUFBb0IsUUFBRSxFQUFDLGFBQXZCO0FBQXFDLFNBQUcsRUFBRSxJQUExQztBQUFnRCxZQUFNLEVBQUUsSUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGLENBREYsQ0FQRixFQWFFLE1BQUMsa0RBQUQ7QUFBUyxlQUFTLEVBQUVELGlFQUFNLENBQUMsWUFBRCxDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrREFBRDtBQUFTLFNBQUcsRUFBRUMsaURBQWQ7QUFBb0IsUUFBRSxFQUFDLGVBQXZCO0FBQXVDLFNBQUcsRUFBRSxJQUE1QztBQUFrRCxZQUFNLEVBQUUsSUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUZGLENBREYsQ0FiRixFQW1CRSxNQUFDLGtEQUFEO0FBQVMsZUFBUyxFQUFFRCxpRUFBTSxDQUFDLFlBQUQsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsa0RBQUQ7QUFBUyxTQUFHLEVBQUVDLGlEQUFkO0FBQW9CLFFBQUUsRUFBQyxjQUF2QjtBQUFzQyxTQUFHLEVBQUUsSUFBM0M7QUFBaUQsWUFBTSxFQUFFLElBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRixDQURGLENBbkJGLEVBeUJFLE1BQUMsa0RBQUQ7QUFBUyxlQUFTLEVBQUVELGlFQUFNLENBQUMsWUFBRCxDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrREFBRDtBQUFTLFNBQUcsRUFBRUMsaURBQWQ7QUFBb0IsUUFBRSxFQUFDLGNBQXZCO0FBQXNDLFNBQUcsRUFBRSxJQUEzQztBQUFpRCxZQUFNLEVBQUUsSUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLENBREYsQ0F6QkYsQ0FERixDQUZGO0FBRkY7QUF3Q0Q7O0dBN0R1QnBCLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9wYWdlcy9zZWN0aW9ucy9OYXZCYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb2xsYXBzZSwgTmF2LCBOYXZiYXIsIE5hdmJhckJyYW5kLCBOYXZiYXJUb2dnbGVyLCBOYXZJdGVtLCBOYXZMaW5rIH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvTmF2QmFyLm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pXG4gIFxuICBjb25zdCBbaXNTY3JvbGxpbmcsIHNldElzU2Nyb2xsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBuYXZSZWYgPSB1c2VSZWYobnVsbClcbiAgbmF2UmVmLmN1cnJlbnQgPSBpc1Njcm9sbGluZ1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNob3cgPSB3aW5kb3cuc2Nyb2xsWSA+IDcwMFxuICAgICAgaWYgKG5hdlJlZi5jdXJyZW50ICE9PSBzaG93KSB7XG4gICAgICAgIHNldElzU2Nyb2xsaW5nKHNob3cpXG4gICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxuICAgIH1cbiAgfSwgW10pXG5cblxuICByZXR1cm4gKFxuICAgIC8vIDxOYXZiYXIgZGFyayBmaXhlZD1cInRvcFwiIGV4cGFuZD1cImxnXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGlzU2Nyb2xsaW5nID8gJyMxRTM5OTgnIDogJ3RyYW5zcGFyZW50JywgdHJhbnNpdGlvbjogJy41cyBlYXNlLW91dCd9fT5cbiAgICA8TmF2YmFyIGRhcmsgZml4ZWQ9XCJ0b3BcIiBleHBhbmQ9XCJsZ1wiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzFFMzk5OCd9fT5cbiAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gY2xhc3NOYW1lPVwibXgtYXV0b1wiLz5cbiAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxuICAgICAgICA8TmF2IG5hdmJhciBjbGFzc05hbWU9XCJteC1hdXRvXCI+XG4gICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXNbJ3F1aWNrLWxpbmsnXX0+XG4gICAgICAgICAgICA8TmF2TGluayB0YWc9e0xpbmt9IHRvPVwic2VjdGlvbi1vbmVcIiBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0+XG4gICAgICAgICAgICAgIDxkaXY+U+G6o24geHXhuqV0IGPhu6dhIGtodSB24buxYzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PkFTRUFOPC9kaXY+XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT17c3R5bGVzWydxdWljay1saW5rJ119PlxuICAgICAgICAgICAgPE5hdkxpbmsgdGFnPXtMaW5rfSB0bz1cInNlY3Rpb24tdHdvXCIgc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9PlxuICAgICAgICAgICAgICA8ZGl2PkNodXnhu4NuIMSR4buVaTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PmPhuqVwIHRoaeG6v3Q8L2Rpdj5cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXNbJ3F1aWNrLWxpbmsnXX0+XG4gICAgICAgICAgICA8TmF2TGluayB0YWc9e0xpbmt9IHRvPVwic2VjdGlvbi10aHJlZVwiIHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfT5cbiAgICAgICAgICAgICAgPGRpdj5OaOG7r25nIHRow6FjaCB0aOG7qWMgY+G7p2EgbuG7gW4gQ8O0bmc8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5Dw7RuZyBuZ2hp4buHcCA0LjA8L2Rpdj5cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXNbJ3F1aWNrLWxpbmsnXX0+XG4gICAgICAgICAgICA8TmF2TGluayB0YWc9e0xpbmt9IHRvPVwic2VjdGlvbi1mb3VyXCIgc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9PlxuICAgICAgICAgICAgICA8ZGl2Pk7hu4FuIHThuqNuZyBMdW1hZGE8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5j4bunYSBIaXRhY2hpPC9kaXY+XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT17c3R5bGVzWydxdWljay1saW5rJ119PlxuICAgICAgICAgICAgPE5hdkxpbmsgdGFnPXtMaW5rfSB0bz1cInNlY3Rpb24tZml2ZVwiIHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfT5cbiAgICAgICAgICAgICAgPGRpdj5T4bqjbiB4deG6pXQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj50aMO0bmcgbWluaDwvZGl2PlxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgPC9OYXY+XG4gICAgICA8L0NvbGxhcHNlPlxuICAgIDwvTmF2YmFyPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sections/NavBar.tsx\n");

/***/ })

})