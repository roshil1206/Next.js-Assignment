module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Code\\React\\nextjs\\pages\\about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const about = () => {
  return __jsx("div", {
    className: "jsx-3338040099",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "center",
    className: "a1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    className: "a2",
    direction: "column",
    justify: "center",
    className: "a2",
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "a3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: "A4",
    variant: "h1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "One-to-one online tuitions from home"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "a5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: "a6",
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Keep your child\u2019s studies on track with interactive online tuition")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    direction: "column",
    justify: "center",
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    className: "a7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 10
    }
  }, __jsx("picture", {
    className: "jsx-3338040099",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }
  }, __jsx("source", {
    media: "(max-width: 480px )",
    srcset: "https://website-sepia-ten.now.sh/_next/static/images/lessonspace_hero_large_min81-500-901e42adc8db2a9b3277055f352c80e3.jpg",
    className: "jsx-3338040099",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }
  }), __jsx("source", {
    media: "(max-width: 576px )",
    srcset: "https://website-sepia-ten.now.sh/_next/static/images/lessonspace_hero_large_min81-600-5051ebcd159712bda4223472595a196d.jpg",
    className: "jsx-3338040099",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }
  }), __jsx("source", {
    media: "(max-width: 768px )",
    srcset: "https://website-sepia-ten.now.sh/_next/static/images/lessonspace_hero_large_min81-800-776006015d872c9f57ba7c4d91742169.jpg",
    className: "jsx-3338040099",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 12
    }
  }), __jsx("source", {
    media: "(max-width: 992px )",
    srcset: "https://website-sepia-ten.now.sh/_next/static/images/lessonspace_hero_large_min81-1200-d5af0a8ffe3df7dba9a3da2c5187a4ce.jpg",
    className: "jsx-3338040099",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 12
    }
  }), __jsx("img", {
    src: "https://website-sepia-ten.now.sh/_next/static/images/lessonspace_hero_large_min81-1200-d5af0a8ffe3df7dba9a3da2c5187a4ce.jpg",
    "max-width": "100%",
    width: "100%",
    "object-fit": "cover",
    className: "jsx-3338040099",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 12
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3338040099",
    __self: undefined
  }, ".a1{margin-top:0;margin-left:0;margin-rigth:0;}.a2{min-height:65vh;padding-left:48px;padding-right:8px;background-color:#181357;}.A4{color:#eb59ae;}.a5{margin-top:16px;}.a6{color:#FFFFFF;}.a7{min-height:65vh;background-color:#fafafa;}@media (max-width:575.95px){.a2{min-height:50vh;padding-left:16px;padding-right:16px;}}@media (min-width:0px){.a3{text-align:center;}.a5{text-align:center;}}@media (min-width:480px){.a3{text-align:center;}.a5{text-align:center;}}@media (min-width:576px){.a3{text-align:left;}.a5{text-align:left;}}@media (min-width:992px){.A4{font-size:4.125rem !important;font-weight:900 !important;line-height:4.75rem !important;}.a6{font-size:1.75rem !important;font-weight:500 !important;line-height:2.5rem !important;}}@media (max-width:991.95px) and (min-width:768px){.A4{font-size:3.5rem !important;font-weight:700 !important;line-height:3.5rem !important;}.a6{font-size:1.5rem;font-weight:700;line-height:1.75rem;}}@media (max-width:767.95px) and (min-width:576px){.A4{font-size:3.5rem !important;font-weight:700 !important;line-height:4.0rem !important;}.a6{font-size:1.5rem;font-weight:700;line-height:1.95rem;}}@media (max-width:575.95px) and (min-width:480px){.A4{font-size:3.125rem !important;font-weight:700 !important;line-height:2.95rem !important;}.a6{font-size:1.5rem;font-weight:500;line-height:1.625rem;}}@media (max-width:479.95px) and (min-width:0px){.A4{font-size:2.75rem !important;font-weight:700 !important;line-height:2.5rem !important;}.a6{font-size:1.35rem;font-weight:500;line-height:1.625rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxDb2RlXFxSZWFjdFxcbmV4dGpzXFxwYWdlc1xcYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0N3QixBQUdvQixBQUtHLEFBU0EsQUFLbEIsQUFHZ0IsQUFJRSxBQU9NLEFBT1EsQUFHQSxBQUtGLEFBR0EsQUFNQSxBQUdBLEFBU2dCLEFBS0gsQUFPRyxBQUtmLEFBUWEsQUFLYixBQVFlLEFBS2YsQUFTYyxBQUtiLGFBN0hoQixDQWNmLEFBUUEsRUFqQm1CLEFBYW5CLEFBUTBCLEFBT0QsQUF3QlosQUFHQSxDQTBCZ0IsQUFhQSxBQWFBLENBeEVsQixBQUdBLEFBS0UsQUFHQSxBQTJFRSxTQTdIQyxDQWdGNEIsQUFhRixDQXBCRixBQStDRSxDQXBEQSxBQXNDQSxHQXBCVCxBQWFBLEFBYUMsQ0EzR2YsQUE0Qk8sQUE2Rk4sT0FwR3BCLENBekJBLFVBSzBCLENBNEJ2QixBQXFETSxBQWFFLENBYU4sQ0FoQzBDLEFBYUYsQUFpQ2xDLENBckRnQyxBQStDRSxDQXBEQyxBQXNDQSxvQkFwRzlDLFFBMkVhLEFBYUYsQ0FwQkYsQUErQ0UsRUFwREEsQUFzQ0EiLCJmaWxlIjoiRDpcXENvZGVcXFJlYWN0XFxuZXh0anNcXHBhZ2VzXFxhYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQsIFBhcGVyLCBCb3gsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcblxyXG5jb25zdCBhYm91dCA9ICgpPT57XHJcbiAgICByZXR1cm4oPGRpdj5cclxuXHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcicgY2xhc3NOYW1lPVwiYTFcIj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBjbGFzc05hbWU9XCJhMlwiIGRpcmVjdGlvbj0nY29sdW1uJyBqdXN0aWZ5PSdjZW50ZXInIGNsYXNzTmFtZT1cImEyXCIgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9J2EzJz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPVwiQTRcIiB2YXJpYW50PVwiaDFcIiA+T25lLXRvLW9uZSBvbmxpbmUgdHVpdGlvbnMgZnJvbSBob21lPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPSdhNSc+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT0nYTYnIHZhcmlhbnQ9XCJib2R5MVwiID5LZWVwIHlvdXIgY2hpbGTigJlzIHN0dWRpZXMgb24gdHJhY2sgd2l0aCBpbnRlcmFjdGl2ZSBvbmxpbmUgdHVpdGlvbjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkICBjb250YWluZXIgaXRlbSAgZGlyZWN0aW9uPSdjb2x1bW4nIGp1c3RpZnk9J2NlbnRlcicgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezZ9IGNsYXNzTmFtZT0nYTcnPlxyXG4gICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICA8cGljdHVyZT5cclxuICAgICAgICAgICA8c291cmNlIG1lZGlhPVwiKG1heC13aWR0aDogNDgwcHggKVwiIHNyY3NldD1cImh0dHBzOi8vd2Vic2l0ZS1zZXBpYS10ZW4ubm93LnNoL19uZXh0L3N0YXRpYy9pbWFnZXMvbGVzc29uc3BhY2VfaGVyb19sYXJnZV9taW44MS01MDAtOTAxZTQyYWRjOGRiMmE5YjMyNzcwNTVmMzUyYzgwZTMuanBnXCIgLz5cclxuICAgICAgICAgICA8c291cmNlIG1lZGlhPVwiKG1heC13aWR0aDogNTc2cHggKVwiIHNyY3NldD1cImh0dHBzOi8vd2Vic2l0ZS1zZXBpYS10ZW4ubm93LnNoL19uZXh0L3N0YXRpYy9pbWFnZXMvbGVzc29uc3BhY2VfaGVyb19sYXJnZV9taW44MS02MDAtNTA1MWViY2QxNTk3MTJiZGE0MjIzNDcyNTk1YTE5NmQuanBnXCIgLz5cclxuICAgICAgICAgICA8c291cmNlIG1lZGlhPVwiKG1heC13aWR0aDogNzY4cHggKVwiIHNyY3NldD1cImh0dHBzOi8vd2Vic2l0ZS1zZXBpYS10ZW4ubm93LnNoL19uZXh0L3N0YXRpYy9pbWFnZXMvbGVzc29uc3BhY2VfaGVyb19sYXJnZV9taW44MS04MDAtNzc2MDA2MDE1ZDg3MmM5ZjU3YmE3YzRkOTE3NDIxNjkuanBnXCIgLz5cclxuICAgICAgICAgICA8c291cmNlIG1lZGlhPVwiKG1heC13aWR0aDogOTkycHggKVwiIHNyY3NldD1cImh0dHBzOi8vd2Vic2l0ZS1zZXBpYS10ZW4ubm93LnNoL19uZXh0L3N0YXRpYy9pbWFnZXMvbGVzc29uc3BhY2VfaGVyb19sYXJnZV9taW44MS0xMjAwLWQ1YWYwYThmZmUzZGY3ZGJhOWEzZGEyYzUxODdhNGNlLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3dlYnNpdGUtc2VwaWEtdGVuLm5vdy5zaC9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xlc3NvbnNwYWNlX2hlcm9fbGFyZ2VfbWluODEtMTIwMC1kNWFmMGE4ZmZlM2RmN2RiYTlhM2RhMmM1MTg3YTRjZS5qcGdcIiBtYXgtd2lkdGg9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgb2JqZWN0LWZpdD1cImNvdmVyXCIgLz5cclxuXHJcbiAgICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgIC5hMXtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIG1hcmdpbi1yaWd0aDogMDtcclxuICAgICB9XHJcbiAgICAgLmEye1xyXG4gICAgICBtaW4taGVpZ2h0OiA2NXZoO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDQ4cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTM1NztcclxuICAgICB9XHJcbiAgICAgLmEze1xyXG5cclxuICAgICB9XHJcbiAgICAgLkE0e1xyXG4gICAgICAgIGNvbG9yOiAjZWI1OWFlO1xyXG4gICAgIH1cclxuXHJcbiAgICAgLmE1e1xyXG4gICAgICAgbWFyZ2luLXRvcDoxNnB4XHJcbiAgICAgfVxyXG5cclxuICAgICAuYTZ7XHJcbiAgICAgICBjb2xvcjojRkZGRkZGO1xyXG4gICAgIH1cclxuXHJcbiAgICAgLmE3e1xyXG4gICAgICBtaW4taGVpZ2h0OiA2NXZoO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgIH1cclxuICAgIFxyXG4gICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOTVweClcclxuICAgICAge1xyXG4gICAgICAgIC5hMiB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgIEBtZWRpYSAobWluLXdpZHRoOiAwcHgpe1xyXG4gICAgICAgICAgICAgICAgLmEze1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYTV7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpe1xyXG4gICAgICAgICAgICAgIC5hMyB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYTUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICBcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XHJcbiAgICAgICAgICAgICAgLmEzIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5hNSB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5BNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0LjEyNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNC43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmE2IHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk1cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAuQTQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmE2e1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45NXB4KSBhbmQgKG1pbi13aWR0aDogNTc2cHgpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC5BNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQuMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmE2e1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOTVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45NXB4KSBhbmQgKG1pbi13aWR0aDogNDgwcHgpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC5BNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjEyNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi45NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmE2e1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjI1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ3OS45NXB4KSBhbmQgKG1pbi13aWR0aDogMHB4KVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAuQTQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYTZ7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS42MjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7Il19 */\n/*@ sourceURL=D:\\\\Code\\\\React\\\\nextjs\\\\pages\\\\about.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Code\React\nextjs\pages\about.js */"./pages/about.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJhYm91dCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUdBLE1BQU1BLEtBQUssR0FBRyxNQUFJO0FBQ2QsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSCxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFB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Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJpbXBvcnQgeyBHcmlkLCBQYXBlciwgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5cclxuY29uc3QgYWJvdXQgPSAoKT0+e1xyXG4gICAgcmV0dXJuKDxkaXY+XHJcblxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInIGNsYXNzTmFtZT1cImExXCI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gY2xhc3NOYW1lPVwiYTJcIiBkaXJlY3Rpb249J2NvbHVtbicganVzdGlmeT0nY2VudGVyJyBjbGFzc05hbWU9XCJhMlwiIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXs2fT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPSdhMyc+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT1cIkE0XCIgdmFyaWFudD1cImgxXCIgPk9uZS10by1vbmUgb25saW5lIHR1aXRpb25zIGZyb20gaG9tZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT0nYTUnPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9J2E2JyB2YXJpYW50PVwiYm9keTFcIiA+S2VlcCB5b3VyIGNoaWxk4oCZcyBzdHVkaWVzIG9uIHRyYWNrIHdpdGggaW50ZXJhY3RpdmUgb25saW5lIHR1aXRpb248L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCAgY29udGFpbmVyIGl0ZW0gIGRpcmVjdGlvbj0nY29sdW1uJyBqdXN0aWZ5PSdjZW50ZXInIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXs2fSBjbGFzc05hbWU9J2E3Jz5cclxuICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtYXgtd2lkdGg6IDQ4MHB4IClcIiBzcmNzZXQ9XCJodHRwczovL3dlYnNpdGUtc2VwaWEtdGVuLm5vdy5zaC9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xlc3NvbnNwYWNlX2hlcm9fbGFyZ2VfbWluODEtNTAwLTkwMWU0MmFkYzhkYjJhOWIzMjc3MDU1ZjM1MmM4MGUzLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtYXgtd2lkdGg6IDU3NnB4IClcIiBzcmNzZXQ9XCJodHRwczovL3dlYnNpdGUtc2VwaWEtdGVuLm5vdy5zaC9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xlc3NvbnNwYWNlX2hlcm9fbGFyZ2VfbWluODEtNjAwLTUwNTFlYmNkMTU5NzEyYmRhNDIyMzQ3MjU5NWExOTZkLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtYXgtd2lkdGg6IDc2OHB4IClcIiBzcmNzZXQ9XCJodHRwczovL3dlYnNpdGUtc2VwaWEtdGVuLm5vdy5zaC9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xlc3NvbnNwYWNlX2hlcm9fbGFyZ2VfbWluODEtODAwLTc3NjAwNjAxNWQ4NzJjOWY1N2JhN2M0ZDkxNzQyMTY5LmpwZ1wiIC8+XHJcbiAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtYXgtd2lkdGg6IDk5MnB4IClcIiBzcmNzZXQ9XCJodHRwczovL3dlYnNpdGUtc2VwaWEtdGVuLm5vdy5zaC9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xlc3NvbnNwYWNlX2hlcm9fbGFyZ2VfbWluODEtMTIwMC1kNWFmMGE4ZmZlM2RmN2RiYTlhM2RhMmM1MTg3YTRjZS5qcGdcIiAvPlxyXG4gICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93ZWJzaXRlLXNlcGlhLXRlbi5ub3cuc2gvX25leHQvc3RhdGljL2ltYWdlcy9sZXNzb25zcGFjZV9oZXJvX2xhcmdlX21pbjgxLTEyMDAtZDVhZjBhOGZmZTNkZjdkYmE5YTNkYTJjNTE4N2E0Y2UuanBnXCIgbWF4LXdpZHRoPVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIG9iamVjdC1maXQ9XCJjb3ZlclwiIC8+XHJcblxyXG4gICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAuYTF7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICBtYXJnaW4tcmlndGg6IDA7XHJcbiAgICAgfVxyXG4gICAgIC5hMntcclxuICAgICAgbWluLWhlaWdodDogNjV2aDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA0OHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODEzNTc7XHJcbiAgICAgfVxyXG4gICAgIC5hM3tcclxuXHJcbiAgICAgfVxyXG4gICAgIC5BNHtcclxuICAgICAgICBjb2xvcjogI2ViNTlhZTtcclxuICAgICB9XHJcblxyXG4gICAgIC5hNXtcclxuICAgICAgIG1hcmdpbi10b3A6MTZweFxyXG4gICAgIH1cclxuXHJcbiAgICAgLmE2e1xyXG4gICAgICAgY29sb3I6I0ZGRkZGRjtcclxuICAgICB9XHJcblxyXG4gICAgIC5hN3tcclxuICAgICAgbWluLWhlaWdodDogNjV2aDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICB9XHJcbiAgICBcclxuICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk1cHgpXHJcbiAgICAgIHtcclxuICAgICAgICAuYTIge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICBAbWVkaWEgKG1pbi13aWR0aDogMHB4KXtcclxuICAgICAgICAgICAgICAgIC5hM3tcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmE1e1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KXtcclxuICAgICAgICAgICAgICAuYTMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmE1IHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xyXG4gICAgICAgICAgICAgIC5hMyB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYTUge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuQTQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNC4xMjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQuNzVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hNiB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45NXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgLkE0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMy41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hNntcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOTVweCkgYW5kIChtaW4td2lkdGg6IDU3NnB4KVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAuQTQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0LjByZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hNntcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOTVweCkgYW5kIChtaW4td2lkdGg6IDQ4MHB4KVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAuQTQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy4xMjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuOTVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hNntcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjYyNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NzkuOTVweCkgYW5kIChtaW4td2lkdGg6IDBweClcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLkE0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNzVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmE2e1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==