webpackHotUpdate(5,{

/***/ "./components/BasicLayout.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("../node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header__ = __webpack_require__("./components/Header.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Sider__ = __webpack_require__("./components/Sider.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Footer__ = __webpack_require__("./components/Footer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__BasicLayout_scss__ = __webpack_require__("./components/BasicLayout.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__BasicLayout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__BasicLayout_scss__);
var _jsxFileName = "/Users/sf/Desktop/ReactMobx/next/components/BasicLayout.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// 基础框架引用

 // import ajax from '@/utils/ajax';
// 底层ui组件引用


 // import { Launcher } from '@/components/common/Launcher';
// 业务组件引用
// import router from '../router';



 // 样式引用


var Content = __WEBPACK_IMPORTED_MODULE_2_antd__["b" /* Layout */].Content; // @inject('baseStore')
// @observer

var BasicLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BasicLayout, _React$Component);

  function BasicLayout() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, BasicLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = BasicLayout.__proto__ || Object.getPrototypeOf(BasicLayout)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        collapsed: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onCollapse", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(collapsed) {
        _this.setState({
          collapsed: collapsed
        });
      }
    }), _temp));
  }

  _createClass(BasicLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {// console.log(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          router = _props.router;
      console.log(router);
      var collapsed = this.state.collapsed;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["b" /* Layout */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header__["a" /* default */], {
        collapsed: collapsed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["b" /* Layout */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Sider__["a" /* default */], {
        collapsed: collapsed,
        onCollapse: this.onCollapse,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["b" /* Layout */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, {
        className: __WEBPACK_IMPORTED_MODULE_7__BasicLayout_scss___default.a.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }))));
    }
  }]);

  return BasicLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_next_router__["withRouter"])(BasicLayout));

/***/ })

})
//# sourceMappingURL=5.623df9db4b854e0c6fd5.hot-update.js.map