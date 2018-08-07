(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = "http://192.168.1.89/Web/book";
var ENTRY_URL = "http://kyy.sh928.com/interface/book.php";
exports.default = {
  getSwiper: function getSwiper() {
    return natives.fetch({
      url: API_URL + "/GetBookBanner",
      method: 'GET'
    }).then(function (res) {
      return res.data;
    });
  },
  getListWrap: function getListWrap() {
    return natives.fetch({
      url: API_URL + "/getFeaturedData",
      method: 'GET'
    }).then(function (res) {
      return res.data;
    });
  },
  getToplist: function getToplist(id) {
    return natives.fetch({
      url: API_URL + "/GetTopBooklist",
      method: 'GET',
      data: {
        typeid: id
      }
    }).then(function (res) {
      return res.data;
    });
  },
  getSwiperbook: function getSwiperbook() {
    return natives.fetch({
      url: ENTRY_URL + "?msg=bookbanner",
      method: 'GET'
    }).then(function (res) {
      return res.data;
    });
  },
  getBooklist: function getBooklist() {
    return natives.fetch({
      url: ENTRY_URL + "?msg=booklist",
      method: 'GET'
    }).then(function (res) {
      return res.data;
    });
  },
  getFreebook: function getFreebook() {
    return natives.fetch({
      url: ENTRY_URL + "?msg=freebook",
      method: 'GET'
    }).then(function (res) {
      return res.data;
    });
  },
  getRecentbook: function getRecentbook() {
    return natives.fetch({
      url: ENTRY_URL + "?msg=recentbook",
      method: 'GET'
    }).then(function (res) {
      return res.data;
    });
  },
  getBookitem: function getBookitem(bookid) {
    return natives.fetch({
      url: ENTRY_URL + "?msg=bookitem",
      method: 'GET',
      data: {
        id: bookid
      }
    }).then(function (res) {
      return res.data;
    });
  },
  getRead: function getRead(id, contentid) {
    return natives.fetch({
      url: ENTRY_URL + "?msg=bookcontent",
      method: 'GET',
      data: {
        id: id,
        contentid: contentid
      }
    }).then(function (res) {
      return res.data;
    });
  },
  getweiboInfo: function getweiboInfo(uid, access_token) {
    return natives.fetch({
      url: "https://api.weibo.com/2/eps/user/info.json",
      method: 'GET',
      data: {
        uid: uid,
        access_token: access_token
      }
    }).then(function (res) {
      return res.data;
    });
  }
};

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88)
var $app_template$ = __webpack_require__(92)
var $app_style$ = __webpack_require__(93)
var $app_script$ = __webpack_require__(94)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(89)
var $app_style$ = __webpack_require__(90)
var $app_script$ = __webpack_require__(91)

$app_define$('@app-component/clist', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 89:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "book-list-content"
  ],
  "children": [
    {
      "type": "block",
      "attr": {},
      "repeat": function () {return this.booklists},
      "children": [
        {
          "type": "div",
          "attr": {
            "id": "booklist"
          },
          "classList": function () {return [this.booklistwidth]},
          "id": "booklist",
          "events": {
            "click": function (evt) {this.goBook(this.$item.bookid,evt)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.imgurl}
              },
              "classList": [
                "bookimg"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.bookname}
              },
              "classList": [
                "bookname"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.title}
              },
              "classList": [
                "secname"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports = {
  ".book-list-content": {
    "marginTop": "0px",
    "marginRight": "10px",
    "marginBottom": "0px",
    "marginLeft": "10px",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-between",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".book-list-li2": {
    "flexDirection": "column",
    "width": "360px",
    "marginBottom": "10px"
  },
  ".book-list-li3": {
    "flexDirection": "column",
    "width": "236px",
    "marginBottom": "10px"
  },
  ".bookimg": {
    "width": "360px",
    "height": "300px"
  },
  ".bookname": {
    "lines": 1,
    "textOverflow": "ellipsis",
    "lineHeight": "50px"
  },
  ".secname": {
    "lines": 1,
    "textOverflow": "ellipsis",
    "color": "#cccccc",
    "fontSize": "24px",
    "marginBottom": "15px"
  }
}

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var memList = [];
exports.default = {
    data: {
        booklists: [],
        allpage: '',
        toplist: [],
        booklistwidth: 'book-list-li2'
    },
    props: ['bookinfo'],
    onInit: function onInit() {
        switch (this.bookinfo) {
            case 1:
                this.getBooklists();
                break;
            case 2:
                this.getFreebook();
                break;
            default:
                this.getRecentbook();
                break;
        }
    },
    goBook: function goBook(id) {
        _system2.default.push({
            uri: '/Book',
            params: { id: id }
        });
    },
    getToplist: function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(id) {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _index2.default.getToplist(id);

                        case 3:
                            data = _context.sent;

                            this.toplist = data.data;
                            console.log(this.toplist);
                            _context.next = 11;
                            break;

                        case 8:
                            _context.prev = 8;
                            _context.t0 = _context['catch'](0);

                            console.log(_context.t0);

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 8]]);
        }));

        function getToplist(_x) {
            return _ref.apply(this, arguments);
        }

        return getToplist;
    }(),
    getBooklists: function () {
        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
            var data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _index2.default.getBooklist();

                        case 3:
                            data = _context2.sent;

                            this.booklists = data;
                            _context2.next = 10;
                            break;

                        case 7:
                            _context2.prev = 7;
                            _context2.t0 = _context2['catch'](0);

                            console.log("1");

                        case 10:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this, [[0, 7]]);
        }));

        function getBooklists() {
            return _ref2.apply(this, arguments);
        }

        return getBooklists;
    }(),
    getFreebook: function () {
        var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
            var data;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return _index2.default.getFreebook();

                        case 3:
                            data = _context3.sent;

                            setTimeout(function () {
                                this.booklists = data;
                            }.bind(this), 1000);
                            _context3.next = 10;
                            break;

                        case 7:
                            _context3.prev = 7;
                            _context3.t0 = _context3['catch'](0);

                            console.log(_context3.t0);

                        case 10:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this, [[0, 7]]);
        }));

        function getFreebook() {
            return _ref3.apply(this, arguments);
        }

        return getFreebook;
    }(),
    getRecentbook: function () {
        var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
            var data, that;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return _index2.default.getRecentbook();

                        case 3:
                            data = _context4.sent;
                            that = this;

                            setTimeout(function () {
                                that.booklists = data;
                                that.booklistwidth = 'book-list-li3';
                            }, 500);

                            _context4.next = 11;
                            break;

                        case 8:
                            _context4.prev = 8;
                            _context4.t0 = _context4['catch'](0);

                            console.log(_context4.t0);

                        case 11:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this, [[0, 8]]);
        }));

        function getRecentbook() {
            return _ref4.apply(this, arguments);
        }

        return getRecentbook;
    }()
};}

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "ind-wrap"
  ],
  "children": [
    {
      "type": "swiper",
      "attr": {
        "autoplay": "true"
      },
      "classList": [
        "swiper-wrap"
      ],
      "children": [
        {
          "type": "stack",
          "attr": {},
          "repeat": function () {return this.swipers},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.imgurl},
                "alt": "../Common/assets/img/default.png"
              },
              "classList": [
                "swiper-image"
              ],
              "events": {
                "click": function (evt) {this.routeDetail(this.$item.bookid,evt)}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "list-wrap"
      ],
      "repeat": function () {return this.listwrap},
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.$item.listtitle}
          },
          "classList": [
            "book-sec-title"
          ]
        },
        {
          "type": "clist",
          "attr": {
            "bookinfo": function () {return this.$item.secondid}
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports = {
  ".ind-wrap": {
    "flexDirection": "column",
    "marginTop": "0px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "paddingTop": "0px",
    "paddingRight": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px"
  },
  ".swiper-wrap": {
    "height": "480px"
  },
  ".list-wrap": {
    "fontSize": "40px",
    "flexDirection": "column"
  },
  ".book-sec-title": {
    "fontSize": "40px",
    "fontWeight": "bold",
    "marginTop": "30px",
    "marginRight": "0px",
    "marginBottom": "30px",
    "marginLeft": "20px"
  },
  ".swiper-image": {
    "width": "100%"
  },
  ".demo-page": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".title": {
    "fontSize": "40px",
    "textAlign": "center"
  },
  ".btn": {
    "width": "550px",
    "height": "86px",
    "marginTop": "75px",
    "borderRadius": "43px",
    "backgroundColor": "#09ba07",
    "fontSize": "30px",
    "color": "#ffffff"
  },
  ".popstyle": {
    "backgroundColor": "#000000",
    "width": "100%",
    "height": "100%"
  }
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$("@app-module/system.router");

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$("@app-module/system.fetch");

var _system4 = _interopRequireDefault(_system3);

var _system5 = $app_require$("@app-module/system.prompt");

var _system6 = _interopRequireDefault(_system5);

var _service = $app_require$("@app-module/service.wbaccount");

var _service2 = _interopRequireDefault(_service);

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  data: {
    images: [],
    swipers: [],
    listwrap: [{ listtitle: "小编推选", "secondid": 1 }, { listtitle: "最近更新", "secondid": 3 }, { listtitle: "限时免费", "secondid": 2 }]
  },
  onInit: function onInit() {
    this.getSwiperbook();
    this.loginwb(this.getweiboInfo);
  },
  loginwb: function loginwb(callback) {
    _service2.default.authorize({
      redirectUri: 'https://api.weibo.com/oauth2/default.html',
      scope: 'follow_app_official_microblog',
      success: function success(data) {
        console.log("handling success. ccc=" + data.uid + "token = " + data.accessToken);

        callback(data.uid, data.accessToken);
      },
      fail: function fail(data, code) {
        console.log("handling fail, result data=" + data + ", code=" + code);
      },
      cancel: function cancel() {
        console.log("handling cancelq");
      }
    });
  },
  routeDetail: function routeDetail(id) {
    _system2.default.push({
      uri: '/Book',
      params: {
        id: id
      }
    });
  },
  getweiboInfo: function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(uid, access_token) {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _index2.default.getweiboInfo(uid, access_token);

            case 3:
              data = _context.sent;

              console.log("测试请求" + data.follow);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              console.log("111");

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 7]]);
    }));

    function getweiboInfo(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return getweiboInfo;
  }(),
  getSwipers: function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
      var data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _index2.default.getSwiper();

            case 3:
              data = _context2.sent;

              this.images = data.data;
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);

              console.error(_context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 7]]);
    }));

    function getSwipers() {
      return _ref2.apply(this, arguments);
    }

    return getSwipers;
  }(),
  getSwiperbook: function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
      var data;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _index2.default.getSwiperbook();

            case 3:
              data = _context3.sent;

              this.swipers = data;

              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);

              console.log(_context3.t0);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 7]]);
    }));

    function getSwiperbook() {
      return _ref3.apply(this, arguments);
    }

    return getSwiperbook;
  }(),
  getListWrap: function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
      var data;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _index2.default.getListWrap();

            case 3:
              data = _context4.sent;

              this.listwrap = data.data;
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);

              console.log(_context4.t0);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 7]]);
    }));

    function getListWrap() {
      return _ref4.apply(this, arguments);
    }

    return getListWrap;
  }()
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map