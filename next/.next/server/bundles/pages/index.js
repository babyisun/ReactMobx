module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/router.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 全局路由配置
 *
 * name - 导航展示名称
 * path - 页面 url路由，区分大小写，与你的文件夹命名大小写保持一致
 * folder - 文件目录，区分大小写，与你的文件夹命名大小写保持一致
 * file - 页面文件所在路径，
 * store - 页面对应的store文件，可接收多个，数组形式，同文件夹直接写名称，不同文件夹请写src下的全路径
 * icon - 图标名
 * code - 权限码
 *
 * children - 配置项递归同上
 */
const router = [{
  name: '导航一',
  path: '/One',
  icon: 'appstore',
  code: 400001,
  children: [{
    name: '列表一',
    path: '/One/TwoA',
    folder: '/One/TwoA', // 所在文件夹
    file: 'Index', // 有file属性的会加入路由
    store: ['store'], // 有store属性的会注入store实例到props，与path在同一目录直接写文件名即可
    icon: 'appstore-o',
    code: 400002,
    children: [{
      name: '详情1',
      path: '/One/TwoA/Detail/:id',
      folder: '/One/TwoA',
      file: 'Detail',
      code: 400002,
    }],
  }, {
    name: '列表二',
    path: '/One/TwoB',
    folder: '/One/TwoB',
    file: 'Index',
    store: ['store', 'components/AdressModal/store'], // 注入多个store，不在同一文件夹要写全路径
    icon: 'appstore-o',
    code: 400002,
  }],
},
{
  name: '导航二',
  path: '/Demo',
  folder: '/Demo',
  file: 'Index',
  icon: 'bank',
  code: 400003,
},
];

/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),

/***/ "../src/utils/ajax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs__ = __webpack_require__("qs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);





const redirect = (url) => {
  const redirectUrl = url.replace('%2FPLACEHOLDER%2F',
    encodeURIComponent(`${window.location.origin}/crmanage`));
  return window.location.replace(redirectUrl);
};
const handleRedirect = {
  // 110003: data => {
  //     redirect(data.url); //未登录跳转
  // },
  // 110006: data => {
  //     message.error('您的账号被禁用，请重新登录！', () => redirect(data.url));
  // },
  // 110008: () => {
  //     window.location.replace(`${window.location.origin}/crmanage`);
  // },
  310001: () => {
    // message.error('无权限进行此操作');
    window.location.hash = 'NoPower'; // redirect(data.url));
  },
  310002: (data) => {
    __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('您的账号被禁用，请重新登录！', () => redirect(data.url));
  },
  310003: (data) => {
    redirect(data.url); // 未登录跳转
  },
  310004: (data) => {
    __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('您的账号在审核中，请稍后登录！', () => redirect(data.url));
  },
};

const ajax = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  baseURL: '/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
  transformRequest: [data => __WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify(data)],
});

ajax.interceptors.response.use((response) => {
  const {
    errno,
    errmsg,
    data,
    servertime,
  } = response.data;
    // 接口正常，返回 { errno, errmsg, data }
  if (response.status >= 200 && response.status < 300) {
    // 接口错误，404、500 等，返回错误
    if (errno === 0) {
      return {
        success: true,
        data,
        servertime,
      };
    }
    if (handleRedirect[errno]) {
      return handleRedirect[errno](data);
    }
    return __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error(errmsg || '接口错误');
  } return null;
}, (err) => {
  // console.log(err.response);
  if (err.response) {
    const code = err.response.status;
    if (code >= 500) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('服务器打盹了~');
    }
  }
  return {
    error: err,
  };
});

/* harmony default export */ __webpack_exports__["a"] = (ajax);


/***/ }),

/***/ "./components/BasicLayout.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
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


var Content = __WEBPACK_IMPORTED_MODULE_2_antd__["Layout"].Content; // @inject('baseStore')
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
      var collapsed = this.state.collapsed;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Layout"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header__["a" /* default */], {
        collapsed: collapsed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Layout"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Sider__["a" /* default */], {
        collapsed: collapsed,
        onCollapse: this.onCollapse,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Layout"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, {
        className: __WEBPACK_IMPORTED_MODULE_7__BasicLayout_scss___default.a.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }))));
    }
  }]);

  return BasicLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_next_router__["withRouter"])(BasicLayout));

/***/ }),

/***/ "./components/BasicLayout.scss":
/***/ (function(module, exports) {

module.exports = {
	"content": "content___1f8g2"
};

/***/ }),

/***/ "./components/Footer.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsxFileName = "/Users/sf/Desktop/ReactMobx/next/components/Footer.jsx";

 // import style from './Footer.scss';
// const { Footer } = Layout;

var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Layout"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "\xA9 2018 ReactMobx. Created by North.");
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
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






var Item = __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item;

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
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"], {
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Layout"].Header, {
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/",
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Popover"], {
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
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Popover"], {
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

/***/ }),

/***/ "./components/Header.scss":
/***/ (function(module, exports) {

module.exports = {
	"header": "header___3FY0w",
	"logo": "logo___H5LpO",
	"light": "light___zV9r4",
	"dark": "dark___MQOwX",
	"dark-small": "dark-small___3L1dO",
	"info": "info___-BQs0",
	"tip": "tip___2uN_N",
	"qrCode": "qrCode___1GcQ6",
	"download": "download___3Y4ji",
	"downloadDot": "downloadDot___3gOLK",
	"avatar": "avatar___1Vwq0",
	"avatar-image": "avatar-image___WlWmQ",
	"store-element": "store-element___10eky",
	"exportLog": "exportLog___3Aeqi"
};

/***/ }),

/***/ "./components/Sider.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_router__ = __webpack_require__("../src/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Sider_scss__ = __webpack_require__("./components/Sider.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Sider_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Sider_scss__);
var _jsxFileName = "/Users/sf/Desktop/ReactMobx/next/components/Sider.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SubMenu = __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].SubMenu,
    Item = __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item;

var Sider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sider, _React$Component);

  function Sider() {
    _classCallCheck(this, Sider);

    return _possibleConstructorReturn(this, (Sider.__proto__ || Object.getPrototypeOf(Sider)).apply(this, arguments));
  }

  _createClass(Sider, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          collapsed = _props.collapsed,
          onCollapse = _props.onCollapse,
          pathname = _props.router.pathname;
      var path = pathname.split('/');
      var defaultOpen = path.length > 1 ? path[1] : '';
      console.log(defaultOpen);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Layout"].Sider, {
        className: __WEBPACK_IMPORTED_MODULE_5__Sider_scss___default.a.sider,
        width: 260,
        collapsible: true,
        collapsed: collapsed,
        onCollapse: onCollapse,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"], {
        theme: "dark",
        mode: "inline",
        defaultOpenKeys: ["/".concat(defaultOpen)],
        defaultSelectedKeys: [pathname],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_4__src_router__["a" /* default */].map(function (item) {
        return !item.children ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Item, {
          key: item.path,
          className: item.path.slice(1),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
          prefetch: true,
          href: item.path,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
          type: item.icon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, item.name)))))) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SubMenu, {
          key: item.path,
          className: item.path.slice(1),
          title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
            type: item.icon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }, item.name)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, item.children.map(function (e) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Item, {
            key: e.path,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
            prefetch: true,
            href: item.path,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }, e.name));
        }));
      })));
    }
  }]);

  return Sider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_next_router__["withRouter"])(Sider));

/***/ }),

/***/ "./components/Sider.scss":
/***/ (function(module, exports) {

module.exports = {
	"sider": "sider___3UfXV",
	"remind": "remind___3JbuN"
};

/***/ }),

/***/ "./pages/Home.scss":
/***/ (function(module, exports) {

module.exports = {
	"home": "home___3-BBX",
	"welcome": "welcome___2ecK7",
	"img": "img___22_Ei"
};

/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home_scss__ = __webpack_require__("./pages/Home.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Home_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_BasicLayout__ = __webpack_require__("./components/BasicLayout.jsx");
var _jsxFileName = "/Users/sf/Desktop/ReactMobx/next/pages/index.jsx";




var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_BasicLayout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__Home_scss___default.a.home,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__Home_scss___default.a.welcome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    key: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "\u8FD9\u662F\u4E00\u4E2A\u4E3B\u9875"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    key: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "\u4E3B\u9875\u662F\u4E00\u4E2A\u65E0\u72B6\u6001\u7EC4\u4EF6")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "../static/welcome.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


/***/ }),

/***/ "antd":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "mobx-react":
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "qs":
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map