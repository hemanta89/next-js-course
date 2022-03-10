webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\ract\\next-js-news\\pages\\index.js";





var DUMMY_MEETUP = [{
  id: "m1",
  title: "A first meet up",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
  address: "Assam guwahati 781028",
  description: "our first meet up"
}, {
  id: "m2",
  title: "A first meet up",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
  address: "Assam guwahati 781028",
  description: "our second meet up"
}];

function HomePage(props) {
  // const [loadedMeetup, setLoadedMeetup]=useState([]);
  // useEffect(()=>{
  //   setLoadedMeetup(DUMMY_MEETUP);
  // }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetup"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 10
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "React Meetup details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 10
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
} //  export async function getServerSideProps(context){
//    const req=context.req;
//    const res=context.res;
//   return {
//         props:{
//           meetups:DUMMY_MEETUP
//         }, 
//       }
//  }


_c = HomePage;
;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQSxJQUFNQSxZQUFZLEdBQUcsQ0FDbkI7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLE9BQUssRUFDSCxnRkFKSjtBQUtFQyxTQUFPLEVBQUUsdUJBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FEbUIsRUFTbkI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLE9BQUssRUFDSCxnRkFKSjtBQUtFQyxTQUFPLEVBQUUsdUJBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FUbUIsQ0FBckI7O0FBa0JBLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRyxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREgsZUFLRSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRCxDLENBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7S0EzQlNGLFE7QUFtRFI7O0FBQ2NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJkYmZmNTAwOTMwYzA0MmY3ZmQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUCA9IFtcclxuICB7XHJcbiAgICBpZDogXCJtMVwiLFxyXG4gICAgdGl0bGU6IFwiQSBmaXJzdCBtZWV0IHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiQXNzYW0gZ3V3YWhhdGkgNzgxMDI4XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJvdXIgZmlyc3QgbWVldCB1cFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTJcIixcclxuICAgIHRpdGxlOiBcIkEgZmlyc3QgbWVldCB1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIkFzc2FtIGd1d2FoYXRpIDc4MTAyOFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwib3VyIHNlY29uZCBtZWV0IHVwXCIsXHJcbiAgfSxcclxuXTtcclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICAvLyBjb25zdCBbbG9hZGVkTWVldHVwLCBzZXRMb2FkZWRNZWV0dXBdPXVzZVN0YXRlKFtdKTtcclxuICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAvLyAgIHNldExvYWRlZE1lZXR1cChEVU1NWV9NRUVUVVApO1xyXG4gIC8vIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICAgPEhlYWQ+XHJcbiAgICAgICAgIDx0aXRsZT5SZWFjdCBNZWV0dXA8L3RpdGxlPlxyXG4gICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiUmVhY3QgTWVldHVwIGRldGFpbHNcIj48L21ldGE+XHJcbiAgICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9PjwvTWVldHVwTGlzdD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgXHJcbiAgXHJcbiAgKTtcclxufVxyXG4vLyAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcclxuLy8gICAgY29uc3QgcmVxPWNvbnRleHQucmVxO1xyXG4vLyAgICBjb25zdCByZXM9Y29udGV4dC5yZXM7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBwcm9wczp7XHJcbi8vICAgICAgICAgICBtZWV0dXBzOkRVTU1ZX01FRVRVUFxyXG4vLyAgICAgICAgIH0sIFxyXG4gICAgICAgXHJcbi8vICAgICAgIH1cclxuXHJcbi8vICB9XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vZmV0Y2ggZGF0YSBmcm9tIGJhY2tlZCBlbmRcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL2hlbWFudGE6TDdDTEZNdlkzRTJzMnhCSUBjbHVzdGVyMC54dWFlZi5tb25nb2RiLm5ldC9tZWV0dXA/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgbWVldHVwQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBcIik7XHJcbiAgY29uc3QgbWVldHVwcz0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczp7XHJcbiAgICAgIG1lZXR1cHM6bWVldHVwcy5tYXAobWVldHVwPT4oe1xyXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgaW1hZ2U6bWVldHVwLmltYWdlLFxyXG4gICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3NcclxuICAgIFxyXG4gICAgICB9KSlcclxuICAgIH0sIFxyXG4gICAgcmV2YWxpZGF0ZToxXHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==