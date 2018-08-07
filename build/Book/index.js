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
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
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

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(84)
var $app_style$ = __webpack_require__(85)
var $app_script$ = __webpack_require__(86)

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

/***/ 84:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "book-content"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "book-top"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.booklist.imgurl}
          },
          "classList": [
            "book-cover"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.booklist.title}
          },
          "classList": [
            "book-des"
          ]
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return '共' + (this.booklength) + '话'}
      },
      "classList": [
        "list-all"
      ]
    },
    {
      "type": "list",
      "attr": {},
      "classList": [
        "book-detail-list"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": function () {return this.booklist.content},
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "booklist"
              },
              "classList": [
                "book-list-wrap"
              ],
              "events": {
                "click": function (evt) {this.goRead(this.$item.lock,this.booklist.bookid,this.$item.contentid,evt)}
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.$item.imgurl}
                  },
                  "classList": [
                    "book-img"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "book-list"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "book-list-top"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item.title}
                          }
                        },
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.$item.lockimg}
                          }
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.intime}
                      },
                      "classList": [
                        "time"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

module.exports = {
  ".book-content": {
    "flexDirection": "column"
  },
  ".book-top": {
    "flexDirection": "row",
    "backgroundColor": "#5D9EA0",
    "justifyContent": "space-between",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".book-cover": {
    "marginTop": "30px",
    "marginRight": "30px",
    "marginBottom": "30px",
    "marginLeft": "30px",
    "width": "200px"
  },
  ".book-des": {
    "lines": 5,
    "textOverflow": "ellipsis",
    "width": "450px",
    "marginRight": "30px",
    "color": "#fefefe"
  },
  ".list-all": {
    "marginTop": "20px",
    "marginRight": "20px",
    "marginBottom": "20px",
    "marginLeft": "20px"
  },
  ".book-detail-list": {
    "flexDirection": "column"
  },
  ".book-list-wrap": {
    "flexDirection": "row",
    "marginTop": "22px",
    "marginRight": "16px",
    "marginBottom": "22px",
    "marginLeft": "16px"
  },
  ".book-img": {
    "flexDirection": "row",
    "width": "200px",
    "height": "120px"
  },
  ".book-list": {
    "flexDirection": "column",
    "width": "500px",
    "marginLeft": "30px"
  },
  ".book-list-top": {
    "flexDirection": "row"
  },
  ".book-list-top image": {
    "width": "36px",
    "height": "36px",
    "marginLeft": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-list-top"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".book-list-top text": {
    "fontSize": "32px",
    "marginBottom": "50px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-list-top"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".time": {
    "flexDirection": "column",
    "fontSize": "24px"
  }
}

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.fetch');

var _system4 = _interopRequireDefault(_system3);

var _system5 = $app_require$('@app-module/system.storage');

var _system6 = _interopRequireDefault(_system5);

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
    data: {
        id: '',
        booklist: [],
        booklength: 0
    },
    onInit: function onInit() {
        this.getBookitem(this.id);
        this.onSetTitle('读书页');
    },
    getBookitem: function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(bookid) {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _index2.default.getBookitem(bookid);

                        case 3:
                            data = _context.sent;

                            this.differLock(data.content);
                            this.booklist = data;
                            this.getbooklen(this.booklist.content);
                            this.onSetTitle(this.booklist.bookname);
                            _context.next = 13;
                            break;

                        case 10:
                            _context.prev = 10;
                            _context.t0 = _context['catch'](0);

                            console.log(_context.t0);

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 10]]);
        }));

        function getBookitem(_x) {
            return _ref.apply(this, arguments);
        }

        return getBookitem;
    }(),
    getbooklen: function getbooklen(content) {
        this.booklength = content.length;
        var allpage = 0;
        content.forEach(function (value) {
            if (!value.lock) {
                allpage += 1;
            }
        });
        _system6.default.set({
            key: 'allpage',
            value: allpage,
            success: function success(data) {
                console.log('handling success');
            },
            fail: function fail(data, code) {
                console.log('handling fail, code = ' + code);
            }
        });
    },
    goRead: function goRead(lock, bookid, contentid) {
        if (lock) {
            this.$app.$def.alertLock();
        } else {
            _system2.default.push({
                uri: '/Read',
                params: {
                    id: bookid,
                    contentid: contentid
                }
            });
        }
    },
    differLock: function differLock(booklist) {
        var img = "../Common/img/lock.png";
        booklist.forEach(function (value) {
            if (value.lock) {
                value.lockimg = img;
            } else {
                value.lockimg = null;
            }
        });
    },
    onSetTitle: function onSetTitle(txt) {
        this.$page.setTitleBar({ text: txt, menu: true });
    }
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