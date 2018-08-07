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
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "list",
      "attr": {},
      "events": {
        "scrollbottom": function (evt) {this.renderMoreListItem(evt)}
      },
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": function () {return this.images},
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "booklist"
              },
              "classList": [
                "listitemwrap"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.$item.cartoonUrl}
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "block",
          "attr": {},
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "guide"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "guide-wrap"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "read-btn-wrap"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "read-menu"
                          ],
                          "events": {
                            "click": function (evt) {this.goCatelist(evt)}
                          },
                          "children": [
                            {
                              "type": "image",
                              "attr": {
                                "src": "../Common/img/cate.png"
                              }
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "目录"
                              },
                              "classList": [
                                "read-txt"
                              ]
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "read-next"
                          ],
                          "events": {
                            "click": function (evt) {this.nextPage(evt)}
                          },
                          "children": [
                            {
                              "type": "image",
                              "attr": {
                                "src": "../Common/img/next.png"
                              }
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "下一页"
                              },
                              "classList": [
                                "read-txt"
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "goindex"
                      ],
                      "events": {
                        "click": function (evt) {this.goIndex(evt)}
                      },
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "首页"
                          }
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
  ]
}

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

module.exports = {
  ".content-wrap": {
    "flexDirection": "column"
  },
  ".content-wrap image": {
    "width": "750px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content-wrap"
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
  ".demo-page": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".listitemwrap image": {
    "width": "750px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "listitemwrap"
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
  ".title": {
    "fontSize": "40px",
    "textAlign": "center"
  },
  ".guide-wrap": {
    "flexDirection": "column"
  },
  ".read-btn-wrap": {
    "flexDirection": "row",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#dddddd",
    "borderRightColor": "#dddddd",
    "borderBottomColor": "#dddddd",
    "borderLeftColor": "#dddddd",
    "height": "100px",
    "alignSelf": "center"
  },
  ".read-btn-wrap image": {
    "marginTop": "30px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "120px",
    "width": "40px",
    "height": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "read-btn-wrap"
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
  ".read-menu": {
    "flexDirection": "row",
    "width": "373px",
    "borderStyle": "solid",
    "borderRightWidth": "1px",
    "borderRightColor": "#dddddd",
    "textAlign": "center"
  },
  ".read-next": {
    "flexDirection": "row",
    "width": "374px",
    "textAlign": "center"
  },
  ".read-txt": {
    "width": "100px"
  },
  ".goindex": {
    "height": "100px",
    "borderStyle": "solid",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#dddddd",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "marginBottom": "10px"
  }
}

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.prompt');

var _system4 = _interopRequireDefault(_system3);

var _system5 = $app_require$('@app-module/system.storage');

var _system6 = _interopRequireDefault(_system5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var memList = [];
exports.default = {
  data: {
    id: '',
    contentid: '',
    allpage: '',
    npage: '',
    images: [],
    size: 5,
    isLoadingData: false
  },
  onInit: function onInit() {
    this.onSetTitle('读书页');
    var that = this;
    _system6.default.get({
      key: 'allpage',
      success: function success(data) {
        that.allpage = data;
      },
      fail: function fail(data, code) {
        console.log('handling fail, code = ' + code);
      }
    });
    that.isLoadingData = true;
    that.getReads(that.id, that.contentid);
  },
  goCatelist: function goCatelist() {
    _system2.default.push({
      uri: '/Book',
      params: {
        id: this.id
      }
    });
  },
  goIndex: function goIndex() {
    _system2.default.push({
      uri: '/'
    });
  },
  nextPage: function nextPage() {
    this.npage = parseInt(this.contentid) + 1;
    if (this.npage <= parseInt(this.allpage)) {
      _system2.default.push({
        uri: '/Read',
        params: {
          id: this.id,
          contentid: this.npage
        }
      });
    } else {
      _system4.default.showDialog({
        title: '提示',
        message: '该章节暂不可看，搜索《真人漫画》，下载app，看未解锁部分',
        buttons: [{
          text: '确定',
          color: '#33dd44'
        }],
        success: function success(data) {
          console.log('handling callback');
        },
        cancel: function cancel() {
          console.log('handling cancel');
        },
        fail: function fail(data, code) {
          console.log('handling fail, code = ' + code);
        }
      });
    }
  },
  getReads: function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(id, contentid) {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _index2.default.getRead(id, contentid);

            case 3:
              data = _context.sent;

              this.isLoadingData = false;
              this.onSetTitle(data.title);

              memList = memList.concat(data.content);
              if (memList) {
                this._renderList();
              }
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](0);

              console.log('错了');

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 10]]);
    }));

    function getReads(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return getReads;
  }(),
  lazyload: function lazyload() {},
  _renderList: function _renderList() {
    if (memList.length > 0) {
      var list = memList.splice(0, this.size);
      this.images = this.images.concat(list);
    }
  },
  renderMoreListItem: function renderMoreListItem() {
    if (!this.isLoadingData) {
      this._renderList();
    }
  },
  onMenuPress: function onMenuPress() {
    this.$app.$def.showMenu();
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

/***/ }),

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

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(100)
var $app_style$ = __webpack_require__(101)
var $app_script$ = __webpack_require__(102)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


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