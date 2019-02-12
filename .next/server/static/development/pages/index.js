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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/Header/Header.js":
/*!********************************************!*\
  !*** ./components/common/Header/Header.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, "NEXT PRODUCT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav mr-auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item active"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Home ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "(current)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Link")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item dropdown"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "navbarDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "Dropdown"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdown"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Another action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-divider"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Something else here"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link disabled",
    href: "#",
    tabIndex: "-1",
    "aria-disabled": "true"
  }, "Disabled"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-inline my-2 my-lg-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control mr-sm-2",
    type: "search",
    placeholder: "Search",
    "aria-label": "Search"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-outline-success my-2 my-sm-0",
    type: "submit"
  }, "Search")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/common/Header/index.js":
/*!*******************************************!*\
  !*** ./components/common/Header/index.js ***!
  \*******************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/common/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: DefaultLayout, ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./components/layout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayout", function() { return _layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayout"]; });

/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ "./components/products/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return _products__WEBPACK_IMPORTED_MODULE_1__["ProductsComponent"]; });




/***/ }),

/***/ "./components/layout/Default.js":
/*!**************************************!*\
  !*** ./components/layout/Default.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Header */ "./components/common/Header/index.js");



var Default = function Default(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Header__WEBPACK_IMPORTED_MODULE_1__["Header"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row my-5 mx-4"
  }, children))));
};

/* harmony default export */ __webpack_exports__["default"] = (Default);

/***/ }),

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: DefaultLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Default */ "./components/layout/Default.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayout", function() { return _Default__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/products/Products.js":
/*!*****************************************!*\
  !*** ./components/products/Products.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderers */ "./components/products/renderers/index.js");


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Products = function Products(props) {
  var id = props.id,
      isNew = props.isNew,
      isEdit = props.isEdit,
      rest = _objectWithoutProperties(props, ["id", "isNew", "isEdit"]);

  var content = rest.content,
      handlers = _objectWithoutProperties(rest, ["content"]);

  if (isNew) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_renderers__WEBPACK_IMPORTED_MODULE_1__["itemRenderer"], handlers);
  if (isEdit) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_renderers__WEBPACK_IMPORTED_MODULE_1__["itemRenderer"], props);
  if (id) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_renderers__WEBPACK_IMPORTED_MODULE_1__["detailRenderer"], props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_renderers__WEBPACK_IMPORTED_MODULE_1__["listRenderer"], props);
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./components/products/index.js":
/*!**************************************!*\
  !*** ./components/products/index.js ***!
  \**************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products */ "./components/products/Products.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return _Products__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/products/renderers/detail.js":
/*!*************************************************!*\
  !*** ./components/products/renderers/detail.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var detail = function detail(_ref) {
  var id = _ref.id,
      content = _ref.content,
      handler = _objectWithoutProperties(_ref, ["id", "content"]);

  if (!content) return null;
  var productImage = content.productImage,
      name = content.name,
      price = content.price,
      sizes = content.sizes,
      colors = content.colors,
      description = content.description;
  var onDeleteProduct = handler.onDeleteProduct;
  return productImage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "offset-6 col-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-secondary mr-3",
    onClick: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["utilProductsEditItem"])(id)
  }, "Edit this item"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn text-danger",
    onClick: onDeleteProduct(id)
  }, "Delete this item"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "float-right btn",
    onClick: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["utilProductsGetBack"])(id)
  }, "Go to listing")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/".concat(productImage),
    alt: "...",
    className: "img-fluid w-100"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "border border-left-0 border-right-0"
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
    className: "mt-4"
  }, "Sizes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, sizes.map(function (size, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-center border d-inline-block p-2 mr-2",
      key: "size-".concat(i)
    }, size);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
    className: "mt-4"
  }, "Colors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
    className: "text-white"
  }, colors.map(function (color, i) {
    // need to refactor this :) I don't like switches :P
    var colorClass;

    switch (color.toLowerCase()) {
      case 'red':
        colorClass = 'bg-danger';
        break;

      case 'green':
        colorClass = 'bg-success';
        break;

      case 'blue':
        colorClass = 'bg-primary';
        break;

      case 'black':
        colorClass = 'bg-primary';
        break;

      default:
        break;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "".concat(colorClass, " text-center d-inline-block p-2 mr-2"),
      key: "color-".concat(i)
    }, color);
  }))))); // need to check if id doesn't match with the server product id, then show error page
  // it would just be okay to set state error to true
  // then render error page
};

/* harmony default export */ __webpack_exports__["default"] = (detail);

/***/ }),

/***/ "./components/products/renderers/index.js":
/*!************************************************!*\
  !*** ./components/products/renderers/index.js ***!
  \************************************************/
/*! exports provided: listRenderer, itemRenderer, detailRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./components/products/renderers/list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listRenderer", function() { return _list__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./components/products/renderers/item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "itemRenderer", function() { return _item__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail */ "./components/products/renderers/detail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detailRenderer", function() { return _detail__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./components/products/renderers/item.js":
/*!***********************************************!*\
  !*** ./components/products/renderers/item.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");



var item = function item(props) {
  var id = props.id,
      onChangeProducts = props.onChangeProducts,
      onAddProduct = props.onAddProduct,
      onSaveAndNew = props.onSaveAndNew,
      getStoreProduct = props.getStoreProduct;
  var productImage = getStoreProduct.productImage,
      name = getStoreProduct.name,
      price = getStoreProduct.price,
      sizes = getStoreProduct.sizes,
      colors = getStoreProduct.colors,
      description = getStoreProduct.description;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "col-5 mx-auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group clearfix"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "float-right btn p-0",
    onClick: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["utilProductsGetBack"])()
  }, "Go to listing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "d-block p-2 bg-danger text-white"
  }, "ALL FIELDS ARE REQUIRED."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "No validation is added and thus no error will throw. So, please fill all the fields for now.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "inputProductImageName"
  }, "Product image:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "inputProductImageName",
    "aria-describedby": "inputProductImageName",
    placeholder: "Input product image name...",
    name: "productImage",
    onChange: onChangeProducts(),
    value: productImage
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "col text-success"
  }, "Upload is not availble for now. You can enter product image with extension. For eg. \"canvas.jpg\" will select images from static directory."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "inputProductName"
  }, "Product name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "inputProductName",
    "aria-describedby": "inputProductName",
    placeholder: "Input product name...",
    name: "name",
    onChange: onChangeProducts(),
    value: name
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "inputProductPrice"
  }, "Product price:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "inputProductPrice",
    "aria-describedby": "inputProductPrice",
    placeholder: "Input product price...",
    name: "price",
    onChange: onChangeProducts(),
    value: price
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "selectProductSizes"
  }, "Available product sizes:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    multiple: true,
    className: "form-control",
    id: "selectProductSizes",
    name: "sizes",
    onChange: onChangeProducts(),
    value: sizes
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "S"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "M"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "L"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "XL"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "selectProductColors"
  }, "Available product colors:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    multiple: true,
    className: "form-control",
    id: "selectProductColors",
    name: "colors",
    onChange: onChangeProducts(),
    value: colors
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Red"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Green"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Blue"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Black"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "inputProductDescription"
  }, "Product description:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    className: "form-control",
    id: "inputProductDescription",
    rows: "3",
    placeholder: "What is your product about?\nPlease describe your product to get it more attention on users...",
    name: "description",
    onChange: onChangeProducts(),
    value: description
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group float-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn mr-3",
    onClick: onSaveAndNew(id)
  }, "Save & add another product"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: onAddProduct(id)
  }, "Save this product")));
};

/* harmony default export */ __webpack_exports__["default"] = (item);

/***/ }),

/***/ "./components/products/renderers/list.js":
/*!***********************************************!*\
  !*** ./components/products/renderers/list.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _listItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listItems */ "./components/products/renderers/listItems.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination */ "./components/products/renderers/pagination.js");


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var list = function list(_ref) {
  var contents = _ref.content,
      rest = _objectWithoutProperties(_ref, ["content"]);

  if (!contents.length) return null;
  var onAddNewAction = rest.onAddNewAction;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "float-right btn btn-secondary",
    onClick: onAddNewAction
  }, "Add new item")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 table-responsive"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-bordered table-hover mt-3 table-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col",
    className: "w-25"
  }, "Image"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col",
    className: "w-75"
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Available sizes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Available colors"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, Object(_listItems__WEBPACK_IMPORTED_MODULE_1__["listItems"])(contents)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, Object(_pagination__WEBPACK_IMPORTED_MODULE_2__["pagination"])(rest)));
};

/* harmony default export */ __webpack_exports__["default"] = (list);

/***/ }),

/***/ "./components/products/renderers/listItems.js":
/*!****************************************************!*\
  !*** ./components/products/renderers/listItems.js ***!
  \****************************************************/
/*! exports provided: listItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listItems", function() { return listItems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");


var listItems = function listItems(contents) {
  return Object.keys(contents).map(function (key) {
    var _contents$key = contents[key],
        id = _contents$key.id,
        productImage = _contents$key.productImage,
        name = _contents$key.name,
        price = _contents$key.price,
        sizes = _contents$key.sizes,
        colors = _contents$key.colors;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      onClick: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["utilProductsGetItemDetail"])(id),
      key: "product-items-".concat(key)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      scope: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/static/images/".concat(productImage),
      alt: "...",
      className: "img-thumbnail w-50"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, price), sizes && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, sizes.join()), colors && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, colors.join()));
  });
};

/***/ }),

/***/ "./components/products/renderers/pagination.js":
/*!*****************************************************!*\
  !*** ./components/products/renderers/pagination.js ***!
  \*****************************************************/
/*! exports provided: pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagination", function() { return pagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var pagination = function pagination(_ref) {
  var prev = _ref.prev,
      next = _ref.next,
      beforeFirstBound = _ref.beforeFirstBound,
      afterLastBound = _ref.afterLastBound,
      boundPages = _ref.boundPages,
      page = _ref.page,
      limit = _ref.limit,
      lastPage = _ref.lastPage;
  if (!boundPages.length) return null; // we may wish to generate error page or something...

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagination justify-content-center"
  }, prev === true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/?page=".concat(+page - 1, "&limit=").concat(limit)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "page-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    href: "#",
    "aria-label": "Previous"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "Prev")))), beforeFirstBound === true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/?page=1&limit=".concat(limit)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link"
  }, "1"))), beforeFirstBound === true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "page-item before-first-bound mx-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "...")), boundPages.map(function (boundPage) {
    var pageItemClass = boundPage === +page ? 'page-item active' : 'page-item';
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/?page=".concat(boundPage, "&limit=").concat(limit),
      key: "bound-page-".concat(boundPage)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: pageItemClass
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "page-link"
    }, boundPage)));
  }), afterLastBound === true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "page-item after-last-bound mx-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "...")), afterLastBound === true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/?page=".concat(lastPage, "&limit=").concat(limit)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link"
  }, lastPage))), next === true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/?page=".concat(+page + 1, "&limit=").concat(limit)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "page-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    href: "#",
    "aria-label": "Next"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "Next")))));
};

/***/ }),

/***/ "./containers/Products.js":
/*!********************************!*\
  !*** ./containers/Products.js ***!
  \********************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./services/index.js");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connector */ "./containers/connector/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./utils/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Products =
/*#__PURE__*/
function (_Component) {
  _inherits(Products, _Component);

  function Products() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Products);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Products)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      products: [],
      prev: false,
      next: false,
      beforeFirstBound: false,
      afterLastBound: false,
      boundPages: [],
      page: 1,
      limit: 3,
      skip: 3,
      lastPage: -1
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeProducts", function () {
      return function (e) {
        var _e$target = e.target,
            field = _e$target.name,
            value = _e$target.value,
            type = _e$target.type;

        if (type === 'select-multiple') {
          var selectedValues = _toConsumableArray(e.target.selectedOptions).map(function (sm) {
            return sm.value;
          });

          _this.props.onChangeStore(field, selectedValues);
        } else {
          _this.props.onChangeStore(field, value);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAddNewAction", function () {
      var initialProduct = {
        productImage: '',
        name: '',
        price: '',
        sizes: [],
        colors: [],
        description: ''
      };

      _this.props.onChangeBulkStore(initialProduct);

      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["utilProductsAddItem"])();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAddProduct", function (id) {
      return (
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Object(_services__WEBPACK_IMPORTED_MODULE_4__["serviceSaveProduct"])(id, _this.props.getStoreProduct);

                case 2:
                  return _context.abrupt("return", _context.sent);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))
      );
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSaveAndNew", function (id) {
      return function () {
        _this.onAddProduct(id);

        _this.onAddNewAction();
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDeleteProduct", function (id) {
      return (
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return Object(_services__WEBPACK_IMPORTED_MODULE_4__["serviceDeleteProduct"])(id);

                case 2:
                  return _context2.abrupt("return", _context2.sent);

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }))
      );
    });

    return _this;
  }

  _createClass(Products, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.router.asPath !== prevProps.router.asPath) {
        this.paginateProductsComponent();
      }
    }
  }, {
    key: "paginateProductsComponent",
    value: function () {
      var _paginateProductsComponent = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var page, limit, fetchTotal, total, bound, lastBound, lastPage, skip, prev, next, beforeFirstBound, afterLastBound, boundPages, boundPageCounter, boundPageFillLength, id, products, product;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                page = +this.props.router.query.page || 1;
                limit = +this.props.router.query.limit || 3;
                _context3.next = 4;
                return Object(_services__WEBPACK_IMPORTED_MODULE_4__["serviceCountProducts"])();

              case 4:
                _context3.next = 6;
                return _context3.sent.json();

              case 6:
                fetchTotal = _context3.sent;
                total = fetchTotal.count;
                bound = 5;
                lastBound = Math.ceil(page + (bound - 1) / 2);
                lastPage = Math.ceil(total / limit);
                skip = page * limit - limit;
                prev = page > 1;
                next = page < lastPage;
                beforeFirstBound = page >= bound && total / limit > bound + 1;
                afterLastBound = lastBound < lastPage - 1;
                boundPages = [];
                boundPageCounter = 1;
                boundPageFillLength = bound;

                if (page < bound) {
                  boundPageCounter = 1;
                } else if (page >= bound && page <= lastPage - (bound - 1)) {
                  boundPageCounter = page - Math.floor(bound / 2);
                } else {
                  boundPageCounter = lastPage - bound + 1;
                }

                boundPages = Array.from({
                  length: boundPageFillLength
                }, function (_, i) {
                  return i + boundPageCounter;
                });

                if (page > lastPage) {
                  prev = false;
                  next = false;
                  beforeFirstBound = false;
                  afterLastBound = false;
                  boundPages = [];
                }

                this.setState({
                  prev: prev,
                  next: next,
                  beforeFirstBound: beforeFirstBound,
                  afterLastBound: afterLastBound,
                  boundPages: boundPages,
                  page: page,
                  limit: limit,
                  lastPage: lastPage
                });
                id = this.props.id;
                _context3.next = 26;
                return Object(_services__WEBPACK_IMPORTED_MODULE_4__["serviceGetProducts"])(skip, limit);

              case 26:
                _context3.next = 28;
                return _context3.sent.json();

              case 28:
                products = _context3.sent;
                this.setState({
                  products: products
                });

                if (!id) {
                  _context3.next = 37;
                  break;
                }

                _context3.next = 33;
                return Object(_services__WEBPACK_IMPORTED_MODULE_4__["serviceGetProduct"])(id);

              case 33:
                _context3.next = 35;
                return _context3.sent.json();

              case 35:
                product = _context3.sent;
                this.props.onChangeBulkStore(product);

              case 37:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function paginateProductsComponent() {
        return _paginateProductsComponent.apply(this, arguments);
      }

      return paginateProductsComponent;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.paginateProductsComponent();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          product = _this$props.getStoreProduct;
      var _this$state = this.state,
          products = _this$state.products,
          prev = _this$state.prev,
          next = _this$state.next,
          beforeFirstBound = _this$state.beforeFirstBound,
          afterLastBound = _this$state.afterLastBound,
          boundPages = _this$state.boundPages,
          page = _this$state.page,
          limit = _this$state.limit,
          lastPage = _this$state.lastPage;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"], _extends({}, this.props, {
        content: id ? product : products,
        prev: prev,
        next: next,
        beforeFirstBound: beforeFirstBound,
        afterLastBound: afterLastBound,
        boundPages: boundPages,
        page: page,
        limit: limit,
        lastPage: lastPage,
        onChangeProducts: this.onChangeProducts,
        onAddProduct: this.onAddProduct,
        onDeleteProduct: this.onDeleteProduct,
        onAddNewAction: this.onAddNewAction,
        onSaveAndNew: this.onSaveAndNew
      }));
    }
  }]);

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(_connector__WEBPACK_IMPORTED_MODULE_5__["productsStateConnector"], _connector__WEBPACK_IMPORTED_MODULE_5__["productsDispatchConnector"])(Products)));

/***/ }),

/***/ "./containers/connector/index.js":
/*!***************************************!*\
  !*** ./containers/connector/index.js ***!
  \***************************************/
/*! exports provided: productsStateConnector, productsDispatchConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./containers/connector/products.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "productsStateConnector", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["mapStateToProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "productsDispatchConnector", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["mapDispatchToProps"]; });



/***/ }),

/***/ "./containers/connector/products.js":
/*!******************************************!*\
  !*** ./containers/connector/products.js ***!
  \******************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/actions */ "./store/actions/index.js");

var mapStateToProps = function mapStateToProps(state) {
  var getStoreProduct = {
    productImage: state.productImage,
    name: state.name,
    price: state.price,
    sizes: state.sizes,
    colors: state.colors,
    description: state.description
  };
  return {
    getStoreProduct: getStoreProduct
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChangeStore: function onChangeStore(field, value) {
      dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_0__["actionChangeStore"])({
        field: field,
        value: value
      }));
    },
    onChangeBulkStore: function onChangeBulkStore(payload) {
      dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_0__["actionChangeBulkStore"])(payload));
    }
  };
};

/***/ }),

/***/ "./containers/index.js":
/*!*****************************!*\
  !*** ./containers/index.js ***!
  \*****************************/
/*! exports provided: ProductsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products */ "./containers/Products.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsContainer", function() { return _Products__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./pages/Products/Products.js":
/*!************************************!*\
  !*** ./pages/Products/Products.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./components/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers */ "./containers/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);





var Products = function Products(_ref) {
  var query = _ref.router.query;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["DefaultLayout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers__WEBPACK_IMPORTED_MODULE_2__["ProductsContainer"], query));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Products));

/***/ }),

/***/ "./pages/Products/index.js":
/*!*********************************!*\
  !*** ./pages/Products/index.js ***!
  \*********************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products */ "./pages/Products/Products.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return _Products__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products */ "./pages/Products/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Products__WEBPACK_IMPORTED_MODULE_0__["ProductsPage"]; });



/***/ }),

/***/ "./services/index.js":
/*!***************************!*\
  !*** ./services/index.js ***!
  \***************************/
/*! exports provided: serviceCountProducts, serviceGetProducts, serviceGetProduct, serviceSaveProduct, serviceDeleteProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./services/products/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serviceCountProducts", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["countProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serviceGetProducts", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["getProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serviceGetProduct", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["getProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serviceSaveProduct", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["saveProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serviceDeleteProduct", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["deleteProduct"]; });



/***/ }),

/***/ "./services/products/index.js":
/*!************************************!*\
  !*** ./services/products/index.js ***!
  \************************************/
/*! exports provided: countProducts, getProducts, getProduct, saveProduct, deleteProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./services/products/products.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countProducts", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["countProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["getProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["getProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveProduct", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["saveProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["deleteProduct"]; });



/***/ }),

/***/ "./services/products/products.js":
/*!***************************************!*\
  !*** ./services/products/products.js ***!
  \***************************************/
/*! exports provided: countProducts, getProducts, getProduct, saveProduct, deleteProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countProducts", function() { return countProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveProduct", function() { return saveProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cross-fetch */ "cross-fetch");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_2___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var API_URL = publicRuntimeConfig.API_URL; // @TODO: Use config for api url
// eg. PRODUCTS_API_URL=`${API_URL}/products`

var countProducts =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return cross_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(API_URL, "/products/count"));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function countProducts() {
    return _ref.apply(this, arguments);
  };
}();
var getProducts =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(skip, limit) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return cross_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(API_URL, "/products?filter[limit]=").concat(limit, "&filter[skip]=").concat(skip));

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getProducts(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getProduct =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return cross_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(API_URL, "/products/").concat(id));

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getProduct(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var saveProduct =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id, data) {
    var requestUrl, storeProduct;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            requestUrl = id ? "".concat(API_URL, "/products/").concat(id) : "".concat(API_URL, "/products");
            _context4.next = 3;
            return cross_fetch__WEBPACK_IMPORTED_MODULE_1___default()(requestUrl, {
              // @TODO: Use config for headers, etc.
              method: id ? 'PUT' : 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });

          case 3:
            storeProduct = _context4.sent;

            if (storeProduct.ok) {
              Object(_utils__WEBPACK_IMPORTED_MODULE_3__["utilProductsGetBack"])()();
            }

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function saveProduct(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteProduct =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
    var requestUrl, removeProduct;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            requestUrl = "".concat(API_URL, "/products/").concat(id);
            _context5.next = 3;
            return cross_fetch__WEBPACK_IMPORTED_MODULE_1___default()(requestUrl, {
              method: 'DELETE'
            });

          case 3:
            removeProduct = _context5.sent;

            if (removeProduct.ok) {
              Object(_utils__WEBPACK_IMPORTED_MODULE_3__["utilProductsGetBack"])()();
            }

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function deleteProduct(_x6) {
    return _ref5.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/*! exports provided: actionChangeStore, actionChangeBulkStore, actionAddProduct, actionUpdateProduct, actionDeleteProduct, actionRequest, actionFailure, actionSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./store/actions/products.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChangeStore", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["changeStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChangeBulkStore", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["changeBulkStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionAddProduct", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["addProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionUpdateProduct", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["updateProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionDeleteProduct", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["deleteProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionRequest", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["getRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionFailure", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["getFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionSuccess", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["getSuccess"]; });



/***/ }),

/***/ "./store/actions/products.js":
/*!***********************************!*\
  !*** ./store/actions/products.js ***!
  \***********************************/
/*! exports provided: changeStore, changeBulkStore, addProduct, updateProduct, deleteProduct, getRequest, getFailure, getSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeStore", function() { return changeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeBulkStore", function() { return changeBulkStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProduct", function() { return updateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequest", function() { return getRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFailure", function() { return getFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuccess", function() { return getSuccess; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types/index.js");

var changeStore = function changeStore(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCTS_CHANGE_PRODUCT_STORE"],
    payload: payload
  };
};
var changeBulkStore = function changeBulkStore(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCTS_CHANGE_BULK_PRODUCT_STORE"],
    payload: payload
  };
}; // @TODO: FOR FUTURE FEATURE

var addProduct = function addProduct(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCTS_ADD_PRODUCT"],
    payload: payload
  };
};
var updateProduct = function updateProduct(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCTS_UPDATE_PRODUCT"],
    payload: payload
  };
};
var deleteProduct = function deleteProduct(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCTS_DELETE_PRODUCT"],
    payload: payload
  };
};
var getRequest = function getRequest(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCTS_FETCH_PRODUCTS_REQUEST"],
    payload: payload
  };
};
var getFailure = function getFailure(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCTS_FETCH_PRODUCTS_FAILURE"],
    payload: payload
  };
};
var getSuccess = function getSuccess(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCTS_FETCH_PRODUCTS_SUCCESS"],
    payload: payload
  };
};

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

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: utilProductsGetBack, utilProductsEditItem, utilProductsAddItem, utilProductsGetItemDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./utils/products.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utilProductsGetBack", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["getBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utilProductsEditItem", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["editItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utilProductsAddItem", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["addItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utilProductsGetItemDetail", function() { return _products__WEBPACK_IMPORTED_MODULE_0__["getItemDetail"]; });



/***/ }),

/***/ "./utils/products.js":
/*!***************************!*\
  !*** ./utils/products.js ***!
  \***************************/
/*! exports provided: getBack, getItemDetail, editItem, addItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBack", function() { return getBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemDetail", function() { return getItemDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editItem", function() { return editItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

var getBack = function getBack(id) {
  return function () {
    if (window.history.length > 2 && id) {
      next_router__WEBPACK_IMPORTED_MODULE_0___default.a.back();
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push('/');
    }
  };
};
var getItemDetail = function getItemDetail(id) {
  return function () {
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push("/?id=".concat(id), "/".concat(id));
  };
};
var editItem = function editItem(id) {
  return function () {
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push("/?id=".concat(id, "&isEdit=true"), "/".concat(id, "/edit"));
  };
};
var addItem = function addItem() {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push('/?isNew=true', '/new');
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cross-fetch");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map