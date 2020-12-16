webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/IndustryChallenges.tsx":
/*!*************************************************!*\
  !*** ./pages/components/IndustryChallenges.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndustryChallenges; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/IndustryChallenges.module.scss */ \"./pages/components/styles/IndustryChallenges.module.scss\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/weikit/Desktop/code/hitachi/pages/components/IndustryChallenges.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction IndustryChallenges() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      activeIndex = _useState[0],\n      setActiveIndex = _useState[1];\n\n  var marks = {\n    0: 'Data living in silos',\n    1: 'Lack of skilled managers',\n    2: 'Cybersecurity threats'\n  };\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, activeIndex == 0 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['svg'],\n    type: \"image/svg+xml\",\n    data: \"svg/data-living-in-silos.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 29\n    }\n  }), activeIndex == 1 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['svg'],\n    type: \"image/svg+xml\",\n    data: \"svg/lack-of-skilled-managers.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 29\n    }\n  }), activeIndex == 2 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['svg'],\n    type: \"image/svg+xml\",\n    data: \"svg/cybersecurity-threats.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 29\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    xs: {\n      size: 10,\n      offset: 1\n    },\n    lg: {\n      size: 8,\n      offset: 2\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(rc_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['slider'],\n    min: 0,\n    max: 2,\n    marks: marks,\n    included: false,\n    value: activeIndex,\n    onChange: setActiveIndex,\n    railStyle: {\n      backgroundColor: '#1CA7EC'\n    },\n    dotStyle: {\n      borderColor: '#1CA7EC',\n      backgroundColor: '#1CA7EC',\n      height: 30,\n      width: 30,\n      marginLeft: -15\n    },\n    handleStyle: {\n      borderColor: '#1E3998',\n      backgroundColor: '#1E3998',\n      height: 30,\n      width: 30\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }))), activeIndex == 0 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, \"According to a IDC study, manufacturing data is rarely housed in a common data lake or system, but typically in siloed systems.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"Operators and engineers must manually piece together information from these siloed systems in a tedious and time-consuming process - which naturally hampers innovation and discourages collaboration in a company.\")), activeIndex == 1 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, \"A McKinsey study has revealed that ASEAN companies suffer from a lack of managers who understand new technologies and innovation to properly implement a transformational strategy, and an insufficient grasp of how all these new solutions can best optimise work processes.\")), activeIndex == 2 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, \"Risks to manufacturers have existed as long as production has been mechanised. Industry 4.0 however, heralds the greatest leaps in cyber risk to date, as highlighted in a Deloitte paper.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, \"Advanced malware, armed with zero-day exploits, that automously targets vulnerable devices and spreads with little human intervention is likely to overpower an already challenged IT/OT security staff. This disturbing trend highlights the need for IoT devices manufacturers to product security-hardened devices.\")));\n}\n\n_s(IndustryChallenges, \"rd+5N/MkYjuYD0I+B+MlySxQysU=\");\n\n_c = IndustryChallenges;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndustryChallenges\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9JbmR1c3RyeUNoYWxsZW5nZXMudHN4P2E2NGYiXSwibmFtZXMiOlsiSW5kdXN0cnlDaGFsbGVuZ2VzIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwibWFya3MiLCJzdHlsZXMiLCJzaXplIiwib2Zmc2V0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLGtCQUFULEdBQThCO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsQ0FBRCxDQURIO0FBQUEsTUFDcENDLFdBRG9DO0FBQUEsTUFDdkJDLGNBRHVCOztBQUUzQyxNQUFNQyxLQUFLLEdBQUc7QUFDWixPQUFHLHNCQURTO0FBRVosT0FBRywwQkFGUztBQUdaLE9BQUc7QUFIUyxHQUFkO0FBS0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlGLFdBQVcsSUFBSSxDQUFmLElBQW9CO0FBQVEsYUFBUyxFQUFFRyw2RUFBTSxDQUFDLEtBQUQsQ0FBekI7QUFBa0MsUUFBSSxFQUFDLGVBQXZDO0FBQXVELFFBQUksRUFBQyw4QkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZ4QixFQUtJSCxXQUFXLElBQUksQ0FBZixJQUFvQjtBQUFRLGFBQVMsRUFBRUcsNkVBQU0sQ0FBQyxLQUFELENBQXpCO0FBQWtDLFFBQUksRUFBQyxlQUF2QztBQUF1RCxRQUFJLEVBQUMsa0NBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMeEIsRUFRSUgsV0FBVyxJQUFJLENBQWYsSUFBb0I7QUFBUSxhQUFTLEVBQUVHLDZFQUFNLENBQUMsS0FBRCxDQUF6QjtBQUFrQyxRQUFJLEVBQUMsZUFBdkM7QUFBdUQsUUFBSSxFQUFDLCtCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUnhCLEVBVUUsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBRTtBQUFFQyxVQUFJLEVBQUUsRUFBUjtBQUFZQyxZQUFNLEVBQUU7QUFBcEIsS0FBVDtBQUFrQyxNQUFFLEVBQUU7QUFBQ0QsVUFBSSxFQUFFLENBQVA7QUFBVUMsWUFBTSxFQUFFO0FBQWxCLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQ0UsYUFBUyxFQUFFRiw2RUFBTSxDQUFDLFFBQUQsQ0FEbkI7QUFFRSxPQUFHLEVBQUUsQ0FGUDtBQUdFLE9BQUcsRUFBRSxDQUhQO0FBSUUsU0FBSyxFQUFFRCxLQUpUO0FBS0UsWUFBUSxFQUFFLEtBTFo7QUFNRSxTQUFLLEVBQUVGLFdBTlQ7QUFPRSxZQUFRLEVBQUVDLGNBUFo7QUFRRSxhQUFTLEVBQUU7QUFBQ0sscUJBQWUsRUFBRTtBQUFsQixLQVJiO0FBU0UsWUFBUSxFQUFFO0FBQUNDLGlCQUFXLEVBQUUsU0FBZDtBQUF5QkQscUJBQWUsRUFBRSxTQUExQztBQUFxREUsWUFBTSxFQUFFLEVBQTdEO0FBQWlFQyxXQUFLLEVBQUUsRUFBeEU7QUFBNEVDLGdCQUFVLEVBQUUsQ0FBQztBQUF6RixLQVRaO0FBVUUsZUFBVyxFQUFFO0FBQUNILGlCQUFXLEVBQUUsU0FBZDtBQUF5QkQscUJBQWUsRUFBRSxTQUExQztBQUFxREUsWUFBTSxFQUFFLEVBQTdEO0FBQWlFQyxXQUFLLEVBQUU7QUFBeEUsS0FWZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQVZGLEVBMkJJVCxXQUFXLElBQUksQ0FBZixJQUNFO0FBQUssYUFBUyxFQUFFRyw2RUFBTSxDQUFDLGFBQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUlBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJOQUpGLENBNUJOLEVBdUNJSCxXQUFXLElBQUksQ0FBZixJQUNFO0FBQUssYUFBUyxFQUFFRyw2RUFBTSxDQUFDLGFBQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc1JBREYsQ0F4Q04sRUFnRElILFdBQVcsSUFBSSxDQUFmLElBQ0U7QUFBSyxhQUFTLEVBQUVHLDZFQUFNLENBQUMsYUFBRCxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrTUFERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOFRBSkYsQ0FqRE4sQ0FERjtBQThERDs7R0FyRXVCTCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0luZHVzdHJ5Q2hhbGxlbmdlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IFNsaWRlciBmcm9tICdyYy1zbGlkZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvSW5kdXN0cnlDaGFsbGVuZ2VzLm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmR1c3RyeUNoYWxsZW5nZXMoKSB7XG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgbWFya3MgPSB7XG4gICAgMDogJ0RhdGEgbGl2aW5nIGluIHNpbG9zJyxcbiAgICAxOiAnTGFjayBvZiBza2lsbGVkIG1hbmFnZXJzJyxcbiAgICAyOiAnQ3liZXJzZWN1cml0eSB0aHJlYXRzJyxcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID09IDAgJiYgPG9iamVjdCBjbGFzc05hbWU9e3N0eWxlc1snc3ZnJ119IHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgZGF0YT1cInN2Zy9kYXRhLWxpdmluZy1pbi1zaWxvcy5zdmdcIi8+XG4gICAgICB9IFxuICAgICAgeyAgXG4gICAgICAgIGFjdGl2ZUluZGV4ID09IDEgJiYgPG9iamVjdCBjbGFzc05hbWU9e3N0eWxlc1snc3ZnJ119IHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgZGF0YT1cInN2Zy9sYWNrLW9mLXNraWxsZWQtbWFuYWdlcnMuc3ZnXCIvPlxuICAgICAgfSBcbiAgICAgIHsgXG4gICAgICAgIGFjdGl2ZUluZGV4ID09IDIgJiYgPG9iamVjdCBjbGFzc05hbWU9e3N0eWxlc1snc3ZnJ119IHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgZGF0YT1cInN2Zy9jeWJlcnNlY3VyaXR5LXRocmVhdHMuc3ZnXCIvPlxuICAgICAgfVxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCB4cz17eyBzaXplOiAxMCwgb2Zmc2V0OiAxIH19IGxnPXt7c2l6ZTogOCwgb2Zmc2V0OiAyIH19PlxuICAgICAgICAgIDxTbGlkZXIgXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snc2xpZGVyJ119XG4gICAgICAgICAgICBtaW49ezB9IFxuICAgICAgICAgICAgbWF4PXsyfSBcbiAgICAgICAgICAgIG1hcmtzPXttYXJrc30gXG4gICAgICAgICAgICBpbmNsdWRlZD17ZmFsc2V9IFxuICAgICAgICAgICAgdmFsdWU9e2FjdGl2ZUluZGV4fSBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRBY3RpdmVJbmRleH1cbiAgICAgICAgICAgIHJhaWxTdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMxQ0E3RUMnfX1cbiAgICAgICAgICAgIGRvdFN0eWxlPXt7Ym9yZGVyQ29sb3I6ICcjMUNBN0VDJywgYmFja2dyb3VuZENvbG9yOiAnIzFDQTdFQycsIGhlaWdodDogMzAsIHdpZHRoOiAzMCwgbWFyZ2luTGVmdDogLTE1fX1cbiAgICAgICAgICAgIGhhbmRsZVN0eWxlPXt7Ym9yZGVyQ29sb3I6ICcjMUUzOTk4JywgYmFja2dyb3VuZENvbG9yOiAnIzFFMzk5OCcsIGhlaWdodDogMzAsIHdpZHRoOiAzMH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPT0gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZGVzY3JpcHRpb24nXX0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQWNjb3JkaW5nIHRvIGEgSURDIHN0dWR5LCBtYW51ZmFjdHVyaW5nIGRhdGEgaXMgcmFyZWx5IGhvdXNlZCBpbiBhIGNvbW1vbiBkYXRhIGxha2Ugb3Igc3lzdGVtLCBidXQgdHlwaWNhbGx5IGluIHNpbG9lZCBzeXN0ZW1zLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE9wZXJhdG9ycyBhbmQgZW5naW5lZXJzIG11c3QgbWFudWFsbHkgcGllY2UgdG9nZXRoZXIgaW5mb3JtYXRpb24gZnJvbSB0aGVzZSBzaWxvZWQgc3lzdGVtcyBpbiBhIHRlZGlvdXMgYW5kIHRpbWUtY29uc3VtaW5nIHByb2Nlc3MgLSB3aGljaCBuYXR1cmFsbHkgaGFtcGVycyBpbm5vdmF0aW9uIGFuZCBkaXNjb3VyYWdlcyBjb2xsYWJvcmF0aW9uIGluIGEgY29tcGFueS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSBcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPT0gMSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZGVzY3JpcHRpb24nXX0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQSBNY0tpbnNleSBzdHVkeSBoYXMgcmV2ZWFsZWQgdGhhdCBBU0VBTiBjb21wYW5pZXMgc3VmZmVyIGZyb20gYSBsYWNrIG9mIG1hbmFnZXJzIHdobyB1bmRlcnN0YW5kIG5ldyB0ZWNobm9sb2dpZXMgYW5kIGlubm92YXRpb24gdG8gcHJvcGVybHkgaW1wbGVtZW50IGEgdHJhbnNmb3JtYXRpb25hbCBzdHJhdGVneSwgYW5kIGFuIGluc3VmZmljaWVudCBncmFzcCBvZiBob3cgYWxsIHRoZXNlIG5ldyBzb2x1dGlvbnMgY2FuIGJlc3Qgb3B0aW1pc2Ugd29yayBwcm9jZXNzZXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHsgXG4gICAgICAgIGFjdGl2ZUluZGV4ID09IDIgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rlc2NyaXB0aW9uJ119PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFJpc2tzIHRvIG1hbnVmYWN0dXJlcnMgaGF2ZSBleGlzdGVkIGFzIGxvbmcgYXMgcHJvZHVjdGlvbiBoYXMgYmVlbiBtZWNoYW5pc2VkLiBJbmR1c3RyeSA0LjAgaG93ZXZlciwgaGVyYWxkcyB0aGUgZ3JlYXRlc3QgbGVhcHMgaW4gY3liZXIgcmlzayB0byBkYXRlLCBhcyBoaWdobGlnaHRlZCBpbiBhIERlbG9pdHRlIHBhcGVyLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEFkdmFuY2VkIG1hbHdhcmUsIGFybWVkIHdpdGggemVyby1kYXkgZXhwbG9pdHMsIHRoYXQgYXV0b21vdXNseSB0YXJnZXRzIHZ1bG5lcmFibGUgZGV2aWNlcyBhbmQgc3ByZWFkcyB3aXRoIGxpdHRsZSBodW1hbiBpbnRlcnZlbnRpb24gaXMgbGlrZWx5IHRvIG92ZXJwb3dlciBhbiBhbHJlYWR5IGNoYWxsZW5nZWQgSVQvT1Qgc2VjdXJpdHkgc3RhZmYuIFRoaXMgZGlzdHVyYmluZyB0cmVuZCBoaWdobGlnaHRzIHRoZSBuZWVkIGZvciBJb1QgZGV2aWNlcyBtYW51ZmFjdHVyZXJzIHRvIHByb2R1Y3Qgc2VjdXJpdHktaGFyZGVuZWQgZGV2aWNlcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/IndustryChallenges.tsx\n");

/***/ })

})