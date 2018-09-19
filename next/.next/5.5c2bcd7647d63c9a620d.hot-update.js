webpackHotUpdate(5,{

/***/ "../node_modules/history/es/DOMUtils.js":
false,

/***/ "../node_modules/history/es/LocationUtils.js":
false,

/***/ "../node_modules/history/es/PathUtils.js":
false,

/***/ "../node_modules/history/es/createBrowserHistory.js":
false,

/***/ "../node_modules/history/es/createHashHistory.js":
false,

/***/ "../node_modules/history/es/createMemoryHistory.js":
false,

/***/ "../node_modules/history/es/createTransitionManager.js":
false,

/***/ "../node_modules/history/es/index.js":
false,

/***/ "../node_modules/history/node_modules/warning/browser.js":
false,

/***/ "../node_modules/invariant/browser.js":
false,

/***/ "../node_modules/next/node_modules/path-to-regexp/index.js":
false,

/***/ "../node_modules/react-router-dom/es/BrowserRouter.js":
false,

/***/ "../node_modules/react-router-dom/es/HashRouter.js":
false,

/***/ "../node_modules/react-router-dom/es/Link.js":
false,

/***/ "../node_modules/react-router-dom/es/MemoryRouter.js":
false,

/***/ "../node_modules/react-router-dom/es/NavLink.js":
false,

/***/ "../node_modules/react-router-dom/es/Prompt.js":
false,

/***/ "../node_modules/react-router-dom/es/Redirect.js":
false,

/***/ "../node_modules/react-router-dom/es/Route.js":
false,

/***/ "../node_modules/react-router-dom/es/Router.js":
false,

/***/ "../node_modules/react-router-dom/es/StaticRouter.js":
false,

/***/ "../node_modules/react-router-dom/es/Switch.js":
false,

/***/ "../node_modules/react-router-dom/es/generatePath.js":
false,

/***/ "../node_modules/react-router-dom/es/index.js":
false,

/***/ "../node_modules/react-router-dom/es/matchPath.js":
false,

/***/ "../node_modules/react-router-dom/es/withRouter.js":
false,

/***/ "../node_modules/react-router-dom/node_modules/warning/warning.js":
false,

/***/ "../node_modules/react-router/es/MemoryRouter.js":
false,

/***/ "../node_modules/react-router/es/Prompt.js":
false,

/***/ "../node_modules/react-router/es/Redirect.js":
false,

/***/ "../node_modules/react-router/es/Route.js":
false,

/***/ "../node_modules/react-router/es/Router.js":
false,

/***/ "../node_modules/react-router/es/StaticRouter.js":
false,

/***/ "../node_modules/react-router/es/Switch.js":
false,

/***/ "../node_modules/react-router/es/generatePath.js":
false,

/***/ "../node_modules/react-router/es/matchPath.js":
false,

/***/ "../node_modules/react-router/es/withRouter.js":
false,

/***/ "../node_modules/react-router/node_modules/warning/warning.js":
false,

/***/ "../node_modules/resolve-pathname/index.js":
false,

/***/ "../node_modules/value-equal/index.js":
false,

/***/ "./components/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("../node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("../node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_utils_ajax__ = __webpack_require__("../src/utils/ajax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_scss__ = __webpack_require__("./components/Header.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Header_scss__);
var _jsxFileName = "/Users/sf/Desktop/ReactMobx/next/components/Header.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Item = __WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Menu */].Item;

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        visible: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "getLogoClass", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(collapsed, _ref2) {
        var logo = _ref2.logo,
            dark = _ref2.dark,
            darkSmall = _ref2.darkSmall;
        return "".concat(logo, " ").concat(!collapsed ? dark : darkSmall);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleVisibleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(visible) {
        _this.setState({
          visible: visible
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "tebAccount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_3__src_utils_ajax__["a" /* default */].get('/account/logout').then(function (data) {
          // storage.clear();
          var loginUrl = data.data.url.replace('%2FPLACEHOLDER%2F', encodeURIComponent("".concat(window.location.origin, "/crmanage")));
          window.location.replace(loginUrl);
        });

        _this.setState({
          visible: false
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderUser", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Menu */], {
          onClick: _this.tebAccount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Item, {
          key: "logout",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, "\u9000\u51FA\u767B\u5F55"));
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var visible = this.state.visible;
      var collapsed = this.props.collapsed;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["b" /* Layout */].Header, {
        className: __WEBPACK_IMPORTED_MODULE_4__Header_scss___default.a.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: this.getLogoClass(collapsed, __WEBPACK_IMPORTED_MODULE_4__Header_scss___default.a),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavLink, {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "SaaS \u5546\u6237\u7AEF")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__Header_scss___default.a.storeElement,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "\u6B22\u8FCE\u60A8\uFF0CNorth"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__Header_scss___default.a.info,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["d" /* Popover */], {
        content: "\u8FD9\u91CC\u653E\u5185\u5BB9",
        overlayClassName: __WEBPACK_IMPORTED_MODULE_4__Header_scss___default.a.exportLog,
        trigger: "click",
        placement: "topLeft",
        arrowPointAtCenter: true,
        onVisibleChange: this.handleExportLog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__Header_scss___default.a.download,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: __WEBPACK_IMPORTED_MODULE_4__Header_scss___default.a.downloadDot,
        style: {
          display: 'inline-block'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["d" /* Popover */], {
        content: this.renderUser(),
        placement: "topLeft",
        trigger: "click",
        visible: visible,
        onVisibleChange: this.handleVisibleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__Header_scss___default.a.avatar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__Header_scss___default.a.avatarImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      })))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ })

})
//# sourceMappingURL=5.5c2bcd7647d63c9a620d.hot-update.js.map