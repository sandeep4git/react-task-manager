webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Task.js":
/*!****************************!*\
  !*** ./components/Task.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_TaskListContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/TaskListContext */ \"./context/TaskListContext.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _lib_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/fontawesome */ \"./lib/fontawesome.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/sandeeptc/git/react/Next-practice/components/Task.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Task = function Task(_ref) {\n  _s();\n\n  var task = _ref.task;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_TaskListContext__WEBPACK_IMPORTED_MODULE_1__[\"TaskListContext\"]),\n      removeTask = _useContext.removeTask,\n      findItem = _useContext.findItem;\n\n  console.log('Task');\n  console.log(tasks);\n  return __jsx(\"div\", {\n    \"data-test\": \"TaskComponent\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"li\", {\n    className: \"list-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }, task.title), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, __jsx(\"span\", {\n    className: \"btn-delete\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faTrash\"],\n    onClick: function onClick() {\n      return removeTask(task.id);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 25\n    }\n  })), __jsx(\"span\", {\n    className: \"btn-edit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faPenAlt\"],\n    onClick: function onClick() {\n      return findItem(task.id);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 48\n    }\n  })))), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(Task, \"3OVWIJ1YDG0sfxHjhkIlSCHDUt4=\");\n\n_c = Task;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n\nvar _c;\n\n$RefreshReg$(_c, \"Task\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2suanM/Y2VmZSJdLCJuYW1lcyI6WyJUYXNrIiwidGFzayIsInVzZUNvbnRleHQiLCJUYXNrTGlzdENvbnRleHQiLCJyZW1vdmVUYXNrIiwiZmluZEl0ZW0iLCJjb25zb2xlIiwibG9nIiwidGFza3MiLCJ0aXRsZSIsImZhVHJhc2giLCJpZCIsImZhUGVuQWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsb0JBQ1VDLHdEQUFVLENBQUNDLHdFQUFELENBRHBCO0FBQUEsTUFDZkMsVUFEZSxlQUNmQSxVQURlO0FBQUEsTUFDSEMsUUFERyxlQUNIQSxRQURHOztBQUV2QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWjtBQUNBLFNBQ0k7QUFBSyxpQkFBVSxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9QLElBQUksQ0FBQ1EsS0FBWixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhFQUFEO0FBQ0ksUUFBSSxFQUFFQyx5RUFEVjtBQUVJLFdBQU8sRUFBRTtBQUFBLGFBQU1OLFVBQVUsQ0FBQ0gsSUFBSSxDQUFDVSxFQUFOLENBQWhCO0FBQUEsS0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQU9JO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkIsTUFBQyw4RUFBRDtBQUN2QixRQUFJLEVBQUVDLDBFQURpQjtBQUV2QixXQUFPLEVBQUU7QUFBQSxhQUFNUCxRQUFRLENBQUNKLElBQUksQ0FBQ1UsRUFBTixDQUFkO0FBQUEsS0FGYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTNCLENBUEosQ0FGSixDQURKLEVBaUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkosQ0FESjtBQXFCSCxDQXpCRDs7R0FBTVgsSTs7S0FBQUEsSTtBQTJCU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rhc2suanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRhc2tMaXN0Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvVGFza0xpc3RDb250ZXh0J1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgZmFIb21lLCBmYVRyYXNoLCBmYUVkaXQsIGZhUGVuQWx0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0ICcuLi9saWIvZm9udGF3ZXNvbWUnO1xuXG5jb25zdCBUYXNrID0gKHsgdGFzayB9KSA9PiB7XG4gICAgY29uc3QgeyByZW1vdmVUYXNrLCBmaW5kSXRlbSB9ID0gdXNlQ29udGV4dChUYXNrTGlzdENvbnRleHQpO1xuICAgIGNvbnNvbGUubG9nKCdUYXNrJyk7XG4gICAgY29uc29sZS5sb2codGFza3MpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgZGF0YS10ZXN0PSdUYXNrQ29tcG9uZW50Jz5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xpc3QtaXRlbSc+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3Rhc2sudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J0bi1kZWxldGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ZhVHJhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlVGFzayh0YXNrLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdidG4tZWRpdCc+PEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFQZW5BbHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaW5kSXRlbSh0YXNrLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Task.js\n");

/***/ })

})