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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var NextProductApp =
/*#__PURE__*/
function (_App) {
  _inherits(NextProductApp, _App);

  function NextProductApp() {
    _classCallCheck(this, NextProductApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(NextProductApp).apply(this, arguments));
  }

  _createClass(NextProductApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_3__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, pageProps)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                pageProps = _context.t0;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return NextProductApp;
}(next_app__WEBPACK_IMPORTED_MODULE_3___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(_store__WEBPACK_IMPORTED_MODULE_5__["makeStore"])(NextProductApp));

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: makeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.js");


var makeStore = function makeStore(initialState, options) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["reducers"], initialState);
};

/***/ }),

/***/ "./store/initialState.js":
/*!*******************************!*\
  !*** ./store/initialState.js ***!
  \*******************************/
/*! exports provided: productsInitials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initials */ "./store/initials/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "productsInitials", function() { return _initials__WEBPACK_IMPORTED_MODULE_0__["productsInitials"]; });



/***/ }),

/***/ "./store/initials/index.js":
/*!*********************************!*\
  !*** ./store/initials/index.js ***!
  \*********************************/
/*! exports provided: productsInitials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./store/initials/products.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "productsInitials", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./store/initials/products.js":
/*!************************************!*\
  !*** ./store/initials/products.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  productImage: '',
  name: '',
  price: '',
  sizes: [],
  colors: [],
  description: '',
  // @TODO: FOR FUTURE FEATURE
  loading: false,
  error: null,
  data: null
});

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./store/reducers/products.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./store/reducers/products.js":
/*!************************************!*\
  !*** ./store/reducers/products.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../initialState */ "./store/initialState.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./store/types/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var products = function products() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState__WEBPACK_IMPORTED_MODULE_0__["productsInitials"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["PRODUCTS_CHANGE_PRODUCT_STORE"]:
      {
        var _action$payload = action.payload,
            field = _action$payload.field,
            value = _action$payload.value;
        return _objectSpread({}, state, _defineProperty({}, field, value));
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["PRODUCTS_CHANGE_BULK_PRODUCT_STORE"]:
      {
        var _action$payload2 = action.payload,
            productImage = _action$payload2.productImage,
            name = _action$payload2.name,
            price = _action$payload2.price,
            sizes = _action$payload2.sizes,
            colors = _action$payload2.colors,
            description = _action$payload2.description;
        return _objectSpread({}, state, {
          productImage: productImage,
          name: name,
          price: price,
          sizes: sizes,
          colors: colors,
          description: description
        });
      }
    // @TODO: FOR FUTURE FEATURE

    case _types__WEBPACK_IMPORTED_MODULE_1__["PRODUCTS_FETCH_PRODUCTS_REQUEST"]:
      {
        return _objectSpread({}, state, {
          loading: true
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["PRODUCTS_FETCH_PRODUCTS_FAILURE"]:
      {
        var error = action.error;
        return _objectSpread({}, state, {
          loading: false,
          error: error
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["PRODUCTS_FETCH_PRODUCTS_SUCCESS"]:
      {
        var data = action.data;
        return _objectSpread({}, state, {
          loading: false,
          data: data !== undefined ? data : null
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (products);

/***/ }),

/***/ "./store/types/index.js":
/*!******************************!*\
  !*** ./store/types/index.js ***!
  \******************************/
/*! exports provided: PRODUCTS_CHANGE_PRODUCT_STORE, PRODUCTS_CHANGE_BULK_PRODUCT_STORE, PRODUCTS_ADD_PRODUCT, PRODUCTS_UPDATE_PRODUCT, PRODUCTS_DELETE_PRODUCT, PRODUCTS_FETCH_PRODUCTS_REQUEST, PRODUCTS_FETCH_PRODUCTS_FAILURE, PRODUCTS_FETCH_PRODUCTS_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./store/types/products.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS_CHANGE_PRODUCT_STORE", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["CHANGE_PRODUCT_STORE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS_CHANGE_BULK_PRODUCT_STORE", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["CHANGE_BULK_PRODUCT_STORE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS_ADD_PRODUCT", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["ADD_PRODUCT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS_UPDATE_PRODUCT", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PRODUCT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS_DELETE_PRODUCT", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["DELETE_PRODUCT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS_FETCH_PRODUCTS_REQUEST", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS_REQUEST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS_FETCH_PRODUCTS_FAILURE", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS_FETCH_PRODUCTS_SUCCESS", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS_SUCCESS"]; });



/***/ }),

/***/ "./store/types/products.js":
/*!*********************************!*\
  !*** ./store/types/products.js ***!
  \*********************************/
/*! exports provided: CHANGE_PRODUCT_STORE, CHANGE_BULK_PRODUCT_STORE, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PRODUCT_STORE", function() { return CHANGE_PRODUCT_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_BULK_PRODUCT_STORE", function() { return CHANGE_BULK_PRODUCT_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT", function() { return ADD_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PRODUCT", function() { return UPDATE_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PRODUCT", function() { return DELETE_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_REQUEST", function() { return FETCH_PRODUCTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_FAILURE", function() { return FETCH_PRODUCTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_SUCCESS", function() { return FETCH_PRODUCTS_SUCCESS; });
var CHANGE_PRODUCT_STORE = 'products/CHANGE_PRODUCT_STORE';
var CHANGE_BULK_PRODUCT_STORE = 'products/CHANGE_BULK_PRODUCT_STORE'; // @TODO: FOR FUTURE FEATURE

var ADD_PRODUCT = 'products/ADD_PRODUCT';
var UPDATE_PRODUCT = 'products/UPDATE_PRODUCT';
var DELETE_PRODUCT = 'products/DELETE_PRODUCT';
var FETCH_PRODUCTS_REQUEST = 'products/FETCH_PRODUCTS_REQUEST';
var FETCH_PRODUCTS_FAILURE = 'products/FETCH_PRODUCTS_FAILURE';
var FETCH_PRODUCTS_SUCCESS = 'products/FETCH_PRODUCTS_SUCCESS';

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map