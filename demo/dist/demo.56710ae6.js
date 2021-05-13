// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__spreadArray = __spreadArray;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__createBinding = exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};

exports.__createBinding = __createBinding;

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
/** @deprecated */


function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
/** @deprecated */


function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

function __spreadArray(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}
},{}],"../src/store.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseStore = exports.StateRecorder = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StateRecorder = /*#__PURE__*/function () {
  function StateRecorder() {
    _classCallCheck(this, StateRecorder);
  }

  _createClass(StateRecorder, null, [{
    key: "start",
    value: function start() {
      this._log = new Map();
    }
  }, {
    key: "recordRead",
    value: function recordRead(stateObj, key) {
      if (this._log === null) return;
      var keys = this._log.get(stateObj) || new Set();
      keys.add(key);

      this._log.set(stateObj, keys);
    }
  }, {
    key: "finish",
    value: function finish() {
      var stateVars = this._log;
      this._log = null;
      return stateVars;
    }
  }]);

  return StateRecorder;
}();

exports.StateRecorder = StateRecorder;
StateRecorder._log = null;

var BaseStore = /*#__PURE__*/function () {
  function BaseStore() {
    _classCallCheck(this, BaseStore);

    this.__observers = new Map();
    this.__subscribs = new Map();
    this.__values = new Map();
  }

  _createClass(BaseStore, [{
    key: "on",
    value: function on(prop, func) {
      if (!this.__subscribs.has(prop)) {
        this.__subscribs.set(prop, []);
      }

      var sub = this.__subscribs.get(prop);

      sub.push(func);
    }
  }, {
    key: "off",
    value: function off(prop, func) {
      var sub = this.__subscribs.get(prop);

      if (sub) {
        this.__subscribs.set(prop, sub.filter(function (f) {
          return f !== func;
        }));
      }
    }
  }, {
    key: "__addComponent",
    value: function __addComponent(component, keys) {
      this.__observers.set(component, keys);
    }
  }, {
    key: "__removeComponent",
    value: function __removeComponent(component) {
      this.__observers.delete(component);
    }
  }, {
    key: "initState",
    value: function initState() {
      if (this.data) {
        var data = this.data;
        this.data = {};

        for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          this.__initStateVar(key);

          this.data[key] = value;
        }
      }
    }
  }, {
    key: "__initStateVar",
    value: function __initStateVar(key) {
      if (this.hasOwnProperty(key)) {
        // Property already defined, so don't re-define.
        return;
      }

      var self = this;
      var values = this.__values; //.set(key, null);

      Object.defineProperty(this.data, key, {
        get: function get() {
          StateRecorder.recordRead(self, key);
          return values.get(key);
        },
        set: function set(v) {
          if (values.get(key) !== v) {
            values.set(key, v);

            self.__notifyChange(key);
          }
        },
        configurable: true,
        enumerable: true
      });
    }
  }, {
    key: "__notifyChange",
    value: function __notifyChange(key) {
      var _iterator = _createForOfIteratorHelper(this.__observers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              component = _step$value[0],
              keys = _step$value[1];

          if (keys.has(key)) {
            component.requestUpdate();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ;

      if (this.__subscribs.has(key)) {
        var _iterator2 = _createForOfIteratorHelper(this.__subscribs.get(key)),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var f = _step2.value;
            f(this.__values.get(key));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }]);

  return BaseStore;
}();

exports.BaseStore = BaseStore;
},{}],"stores.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lvlMonitorState = exports.lvlMonitorStore = exports.rootState = exports.rootStore = void 0;

var _store = require("../src/store");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RootStore = /*#__PURE__*/function (_BaseStore) {
  _inherits(RootStore, _BaseStore);

  var _super = _createSuper(RootStore);

  function RootStore() {
    var _this;

    _classCallCheck(this, RootStore);

    _this = _super.call(this);
    _this.data = {
      lvl: 1,
      isHidden: false,
      userName: "Captain America"
    };

    _this.initState();

    return _this;
  }

  _createClass(RootStore, [{
    key: "increment",
    value: function increment() {
      this.data.lvl++;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.data.isHidden = !this.data.isHidden;
    }
  }]);

  return RootStore;
}(_store.BaseStore);

;

var LVLMonitor = /*#__PURE__*/function (_BaseStore2) {
  _inherits(LVLMonitor, _BaseStore2);

  var _super2 = _createSuper(LVLMonitor);

  function LVLMonitor(root) {
    var _this2;

    _classCallCheck(this, LVLMonitor);

    _this2 = _super2.call(this);
    _this2.data = {
      lvlStatus: ""
    };

    _this2.initState();

    _this2.updateLvlStatus(root.data.lvl);

    root.on("lvl", function (lvl) {
      _this2.updateLvlStatus(lvl);
    });
    return _this2;
  }

  _createClass(LVLMonitor, [{
    key: "updateLvlStatus",
    value: function updateLvlStatus(lvl) {
      this.data.lvlStatus = "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0440\u0430\u0432\u0435\u043D: ".concat(lvl);
    }
  }]);

  return LVLMonitor;
}(_store.BaseStore);

;
var rootStore = new RootStore();
exports.rootStore = rootStore;
var rootState = rootStore.data;
exports.rootState = rootState;
var lvlMonitorStore = new LVLMonitor(rootStore);
exports.lvlMonitorStore = lvlMonitorStore;
var lvlMonitorState = lvlMonitorStore.data;
exports.lvlMonitorState = lvlMonitorState;
},{"../src/store":"../src/store.ts"}],"../src/lit-store.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeLitElement = void 0;

var _store = require("./store");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var observeLitElement = function observeLitElement(LitElement) {
  return /*#__PURE__*/function (_LitElement) {
    _inherits(_class, _LitElement);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.apply(this, arguments);
      _this._usedStores = new Set();
      return _this;
    }

    _createClass(_class, [{
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(_class.prototype), "disconnectedCallback", this).call(this);

        this._clearObservers();
      }
    }, {
      key: "update",
      value: function update(changedProperties) {
        _store.StateRecorder.start(); //@ts-ignore


        _get(_getPrototypeOf(_class.prototype), "update", this).call(this, changedProperties);

        this._initStateObservers();
      }
    }, {
      key: "_initStateObservers",
      value: function _initStateObservers() {
        this._clearObservers();

        if (!this.isConnected) return;

        this._addObservers(_store.StateRecorder.finish());
      }
    }, {
      key: "_addObservers",
      value: function _addObservers(usedStores) {
        var _iterator = _createForOfIteratorHelper(usedStores),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                store = _step$value[0],
                keys = _step$value[1];

            store.__addComponent(this, keys);

            this._usedStores.add(store);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "_clearObservers",
      value: function _clearObservers() {
        var _iterator2 = _createForOfIteratorHelper(this._usedStores),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var store = _step2.value;

            store.__removeComponent(this);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        this._usedStores.clear();
      }
    }]);

    return _class;
  }(LitElement);
};

exports.observeLitElement = observeLitElement;
},{"./store":"../src/store.ts"}],"../src/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BaseStore", {
  enumerable: true,
  get: function () {
    return _store.BaseStore;
  }
});
Object.defineProperty(exports, "observeLitElement", {
  enumerable: true,
  get: function () {
    return _litStore.observeLitElement;
  }
});

var _store = require("./store");

var _litStore = require("./lit-store");
},{"./store":"../src/store.ts","./lit-store":"../src/lit-store.ts"}],"../node_modules/@lit/reactive-element/css-tag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeCSS = exports.supportsAdoptingStyleSheets = exports.getCompatibleStyle = exports.css = exports.adoptStyles = exports.CSSResult = void 0;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
      e = Symbol();
exports.supportsAdoptingStyleSheets = t;

class s {
  constructor(t, s) {
    if (s !== e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t;
  }

  get styleSheet() {
    return t && void 0 === this.t && (this.t = new CSSStyleSheet(), this.t.replaceSync(this.cssText)), this.t;
  }

  toString() {
    return this.cssText;
  }

}

exports.CSSResult = s;

const n = new Map(),
      o = t => {
  let o = n.get(t);
  return void 0 === o && n.set(t, o = new s(t, e)), o;
},
      r = t => o("string" == typeof t ? t : t + ""),
      i = (t, ...e) => {
  const n = 1 === t.length ? t[0] : e.reduce((e, n, o) => e + (t => {
    if (t instanceof s) return t.cssText;
    if ("number" == typeof t) return t;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[o + 1], t[0]);
  return o(n);
},
      S = (e, s) => {
  t ? e.adoptedStyleSheets = s.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : s.forEach(t => {
    const s = document.createElement("style");
    s.textContent = t.cssText, e.appendChild(s);
  });
},
      u = t ? t => t : t => t instanceof CSSStyleSheet ? (t => {
  let e = "";

  for (const s of t.cssRules) e += s.cssText;

  return r(e);
})(t) : t;

exports.getCompatibleStyle = u;
exports.adoptStyles = S;
exports.css = i;
exports.unsafeCSS = r;
},{}],"../node_modules/@lit/reactive-element/reactive-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CSSResult", {
  enumerable: true,
  get: function () {
    return _cssTag.CSSResult;
  }
});
Object.defineProperty(exports, "adoptStyles", {
  enumerable: true,
  get: function () {
    return _cssTag.adoptStyles;
  }
});
Object.defineProperty(exports, "css", {
  enumerable: true,
  get: function () {
    return _cssTag.css;
  }
});
Object.defineProperty(exports, "getCompatibleStyle", {
  enumerable: true,
  get: function () {
    return _cssTag.getCompatibleStyle;
  }
});
Object.defineProperty(exports, "supportsAdoptingStyleSheets", {
  enumerable: true,
  get: function () {
    return _cssTag.supportsAdoptingStyleSheets;
  }
});
Object.defineProperty(exports, "unsafeCSS", {
  enumerable: true,
  get: function () {
    return _cssTag.unsafeCSS;
  }
});
exports.notEqual = exports.defaultConverter = exports.ReactiveElement = void 0;

var _cssTag = require("./css-tag.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s, e, h, r;

const o = {
  toAttribute(t, i) {
    switch (i) {
      case Boolean:
        t = t ? "" : null;
        break;

      case Object:
      case Array:
        t = null == t ? t : JSON.stringify(t);
    }

    return t;
  },

  fromAttribute(t, i) {
    let s = t;

    switch (i) {
      case Boolean:
        s = null !== t;
        break;

      case Number:
        s = null === t ? null : Number(t);
        break;

      case Object:
      case Array:
        try {
          s = JSON.parse(t);
        } catch (t) {
          s = null;
        }

    }

    return s;
  }

},
      n = (t, i) => i !== t && (i == i || t == t),
      l = {
  attribute: !0,
  type: String,
  converter: o,
  reflect: !1,
  hasChanged: n
};

exports.notEqual = n;
exports.defaultConverter = o;

class a extends HTMLElement {
  constructor() {
    super(), this.Πi = new Map(), this.Πo = void 0, this.Πl = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this.Πh = null, this.u();
  }

  static addInitializer(t) {
    var i;
    null !== (i = this.v) && void 0 !== i || (this.v = []), this.v.push(t);
  }

  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((i, s) => {
      const e = this.Πp(s, i);
      void 0 !== e && (this.Πm.set(e, s), t.push(e));
    }), t;
  }

  static createProperty(t, i = l) {
    if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const s = "symbol" == typeof t ? Symbol() : "__" + t,
            e = this.getPropertyDescriptor(t, s, i);
      void 0 !== e && Object.defineProperty(this.prototype, t, e);
    }
  }

  static getPropertyDescriptor(t, i, s) {
    return {
      get() {
        return this[i];
      },

      set(e) {
        const h = this[t];
        this[i] = e, this.requestUpdate(t, h, s);
      },

      configurable: !0,
      enumerable: !0
    };
  }

  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || l;
  }

  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);

    if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this.Πm = new Map(), this.hasOwnProperty("properties")) {
      const t = this.properties,
            i = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];

      for (const s of i) this.createProperty(s, t[s]);
    }

    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }

  static finalizeStyles(i) {
    const s = [];

    if (Array.isArray(i)) {
      const e = new Set(i.flat(1 / 0).reverse());

      for (const i of e) s.unshift((0, _cssTag.getCompatibleStyle)(i));
    } else void 0 !== i && s.push((0, _cssTag.getCompatibleStyle)(i));

    return s;
  }

  static Πp(t, i) {
    const s = i.attribute;
    return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
  }

  u() {
    var t;
    this.Πg = new Promise(t => this.enableUpdating = t), this.L = new Map(), this.Π_(), this.requestUpdate(), null === (t = this.constructor.v) || void 0 === t || t.forEach(t => t(this));
  }

  addController(t) {
    var i, s;
    (null !== (i = this.ΠU) && void 0 !== i ? i : this.ΠU = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
  }

  removeController(t) {
    var i;
    null === (i = this.ΠU) || void 0 === i || i.splice(this.ΠU.indexOf(t) >>> 0, 1);
  }

  Π_() {
    this.constructor.elementProperties.forEach((t, i) => {
      this.hasOwnProperty(i) && (this.Πi.set(i, this[i]), delete this[i]);
    });
  }

  createRenderRoot() {
    var t;
    const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return (0, _cssTag.adoptStyles)(s, this.constructor.elementStyles), s;
  }

  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this.ΠU) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
    }), this.Πl && (this.Πl(), this.Πo = this.Πl = void 0);
  }

  enableUpdating(t) {}

  disconnectedCallback() {
    var t;
    null === (t = this.ΠU) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
    }), this.Πo = new Promise(t => this.Πl = t);
  }

  attributeChangedCallback(t, i, s) {
    this.K(t, s);
  }

  Πj(t, i, s = l) {
    var e, h;
    const r = this.constructor.Πp(t, s);

    if (void 0 !== r && !0 === s.reflect) {
      const n = (null !== (h = null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) && void 0 !== h ? h : o.toAttribute)(i, s.type);
      this.Πh = t, null == n ? this.removeAttribute(r) : this.setAttribute(r, n), this.Πh = null;
    }
  }

  K(t, i) {
    var s, e, h;
    const r = this.constructor,
          n = r.Πm.get(t);

    if (void 0 !== n && this.Πh !== n) {
      const t = r.getPropertyOptions(n),
            l = t.converter,
            a = null !== (h = null !== (e = null === (s = l) || void 0 === s ? void 0 : s.fromAttribute) && void 0 !== e ? e : "function" == typeof l ? l : null) && void 0 !== h ? h : o.fromAttribute;
      this.Πh = n, this[n] = a(i, t.type), this.Πh = null;
    }
  }

  requestUpdate(t, i, s) {
    let e = !0;
    void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || n)(this[t], i) ? (this.L.has(t) || this.L.set(t, i), !0 === s.reflect && this.Πh !== t && (void 0 === this.Πk && (this.Πk = new Map()), this.Πk.set(t, s))) : e = !1), !this.isUpdatePending && e && (this.Πg = this.Πq());
  }

  async Πq() {
    this.isUpdatePending = !0;

    try {
      for (await this.Πg; this.Πo;) await this.Πo;
    } catch (t) {
      Promise.reject(t);
    }

    const t = this.performUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }

  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this.Πi && (this.Πi.forEach((t, i) => this[i] = t), this.Πi = void 0);
    let i = !1;
    const s = this.L;

    try {
      i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this.ΠU) || void 0 === t || t.forEach(t => {
        var i;
        return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
      }), this.update(s)) : this.Π$();
    } catch (t) {
      throw i = !1, this.Π$(), t;
    }

    i && this.E(s);
  }

  willUpdate(t) {}

  E(t) {
    var i;
    null === (i = this.ΠU) || void 0 === i || i.forEach(t => {
      var i;
      return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }

  Π$() {
    this.L = new Map(), this.isUpdatePending = !1;
  }

  get updateComplete() {
    return this.getUpdateComplete();
  }

  getUpdateComplete() {
    return this.Πg;
  }

  shouldUpdate(t) {
    return !0;
  }

  update(t) {
    void 0 !== this.Πk && (this.Πk.forEach((t, i) => this.Πj(i, this[i], t)), this.Πk = void 0), this.Π$();
  }

  updated(t) {}

  firstUpdated(t) {}

}

exports.ReactiveElement = a;
a.finalized = !0, a.elementProperties = new Map(), a.elementStyles = [], a.shadowRootOptions = {
  mode: "open"
}, null === (e = (s = globalThis).reactiveElementPlatformSupport) || void 0 === e || e.call(s, {
  ReactiveElement: a
}), (null !== (h = (r = globalThis).reactiveElementVersions) && void 0 !== h ? h : r.reactiveElementVersions = []).push("1.0.0-rc.2");
},{"./css-tag.js":"../node_modules/@lit/reactive-element/css-tag.js"}],"../node_modules/lit/node_modules/lit-html/lit-html.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svg = exports.render = exports.nothing = exports.noChange = exports.html = exports._Σ = void 0;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t, i, s, e;

const o = globalThis.trustedTypes,
      l = o ? o.createPolicy("lit-html", {
  createHTML: t => t
}) : void 0,
      n = `lit$${(Math.random() + "").slice(9)}$`,
      h = "?" + n,
      r = `<${h}>`,
      u = document,
      c = (t = "") => u.createComment(t),
      d = t => null === t || "object" != typeof t && "function" != typeof t,
      v = Array.isArray,
      a = t => {
  var i;
  return v(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]);
},
      f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      _ = /-->/g,
      m = />/g,
      p = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      $ = /'/g,
      g = /"/g,
      y = /^(?:script|style|textarea)$/i,
      b = t => (i, ...s) => ({
  _$litType$: t,
  strings: i,
  values: s
}),
      T = b(1),
      x = b(2),
      w = Symbol.for("lit-noChange"),
      A = Symbol.for("lit-nothing"),
      P = new WeakMap(),
      V = (t, i, s) => {
  var e, o;
  const l = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  let n = l._$litPart$;

  if (void 0 === n) {
    const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
    l._$litPart$ = n = new C(i.insertBefore(c(), t), t, void 0, s);
  }

  return n.I(t), n;
},
      E = u.createTreeWalker(u, 129, null, !1),
      M = (t, i) => {
  const s = t.length - 1,
        e = [];
  let o,
      h = 2 === i ? "<svg>" : "",
      u = f;

  for (let i = 0; i < s; i++) {
    const s = t[i];
    let l,
        c,
        d = -1,
        v = 0;

    for (; v < s.length && (u.lastIndex = v, c = u.exec(s), null !== c);) v = u.lastIndex, u === f ? "!--" === c[1] ? u = _ : void 0 !== c[1] ? u = m : void 0 !== c[2] ? (y.test(c[2]) && (o = RegExp("</" + c[2], "g")), u = p) : void 0 !== c[3] && (u = p) : u === p ? ">" === c[0] ? (u = null != o ? o : f, d = -1) : void 0 === c[1] ? d = -2 : (d = u.lastIndex - c[2].length, l = c[1], u = void 0 === c[3] ? p : '"' === c[3] ? g : $) : u === g || u === $ ? u = p : u === _ || u === m ? u = f : (u = p, o = void 0);

    const a = u === p && t[i + 1].startsWith("/>") ? " " : "";
    h += u === f ? s + r : d >= 0 ? (e.push(l), s.slice(0, d) + "$lit$" + s.slice(d) + n + a) : s + n + (-2 === d ? (e.push(void 0), i) : a);
  }

  const c = h + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
  return [void 0 !== l ? l.createHTML(c) : c, e];
};

exports.render = V;
exports.nothing = A;
exports.noChange = w;
exports.svg = x;
exports.html = T;

class N {
  constructor({
    strings: t,
    _$litType$: i
  }, s) {
    let e;
    this.parts = [];
    let l = 0,
        r = 0;
    const u = t.length - 1,
          d = this.parts,
          [v, a] = M(t, i);

    if (this.el = N.createElement(v, s), E.currentNode = this.el.content, 2 === i) {
      const t = this.el.content,
            i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }

    for (; null !== (e = E.nextNode()) && d.length < u;) {
      if (1 === e.nodeType) {
        if (e.hasAttributes()) {
          const t = [];

          for (const i of e.getAttributeNames()) if (i.endsWith("$lit$") || i.startsWith(n)) {
            const s = a[r++];

            if (t.push(i), void 0 !== s) {
              const t = e.getAttribute(s.toLowerCase() + "$lit$").split(n),
                    i = /([.?@])?(.*)/.exec(s);
              d.push({
                type: 1,
                index: l,
                name: i[2],
                strings: t,
                ctor: "." === i[1] ? I : "?" === i[1] ? L : "@" === i[1] ? R : H
              });
            } else d.push({
              type: 6,
              index: l
            });
          }

          for (const i of t) e.removeAttribute(i);
        }

        if (y.test(e.tagName)) {
          const t = e.textContent.split(n),
                i = t.length - 1;

          if (i > 0) {
            e.textContent = o ? o.emptyScript : "";

            for (let s = 0; s < i; s++) e.append(t[s], c()), E.nextNode(), d.push({
              type: 2,
              index: ++l
            });

            e.append(t[i], c());
          }
        }
      } else if (8 === e.nodeType) if (e.data === h) d.push({
        type: 2,
        index: l
      });else {
        let t = -1;

        for (; -1 !== (t = e.data.indexOf(n, t + 1));) d.push({
          type: 7,
          index: l
        }), t += n.length - 1;
      }

      l++;
    }
  }

  static createElement(t, i) {
    const s = u.createElement("template");
    return s.innerHTML = t, s;
  }

}

function S(t, i, s = t, e) {
  var o, l, n, h;
  if (i === w) return i;
  let r = void 0 !== e ? null === (o = s.Σi) || void 0 === o ? void 0 : o[e] : s.Σo;
  const u = d(i) ? void 0 : i._$litDirective$;
  return (null == r ? void 0 : r.constructor) !== u && (null === (l = null == r ? void 0 : r.O) || void 0 === l || l.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r.T(t, s, e)), void 0 !== e ? (null !== (n = (h = s).Σi) && void 0 !== n ? n : h.Σi = [])[e] = r : s.Σo = r), void 0 !== r && (i = S(t, r.S(t, i.values), r, e)), i;
}

class k {
  constructor(t, i) {
    this.l = [], this.N = void 0, this.D = t, this.M = i;
  }

  u(t) {
    var i;
    const {
      el: {
        content: s
      },
      parts: e
    } = this.D,
          o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : u).importNode(s, !0);
    E.currentNode = o;
    let l = E.nextNode(),
        n = 0,
        h = 0,
        r = e[0];

    for (; void 0 !== r;) {
      if (n === r.index) {
        let i;
        2 === r.type ? i = new C(l, l.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(l, r.name, r.strings, this, t) : 6 === r.type && (i = new z(l, this, t)), this.l.push(i), r = e[++h];
      }

      n !== (null == r ? void 0 : r.index) && (l = E.nextNode(), n++);
    }

    return o;
  }

  v(t) {
    let i = 0;

    for (const s of this.l) void 0 !== s && (void 0 !== s.strings ? (s.I(t, s, i), i += s.strings.length - 2) : s.I(t[i])), i++;
  }

}

class C {
  constructor(t, i, s, e) {
    this.type = 2, this.N = void 0, this.A = t, this.B = i, this.M = s, this.options = e;
  }

  setConnected(t) {
    var i;
    null === (i = this.P) || void 0 === i || i.call(this, t);
  }

  get parentNode() {
    return this.A.parentNode;
  }

  get startNode() {
    return this.A;
  }

  get endNode() {
    return this.B;
  }

  I(t, i = this) {
    t = S(this, t, i), d(t) ? t === A || null == t || "" === t ? (this.H !== A && this.R(), this.H = A) : t !== this.H && t !== w && this.m(t) : void 0 !== t._$litType$ ? this._(t) : void 0 !== t.nodeType ? this.$(t) : a(t) ? this.g(t) : this.m(t);
  }

  k(t, i = this.B) {
    return this.A.parentNode.insertBefore(t, i);
  }

  $(t) {
    this.H !== t && (this.R(), this.H = this.k(t));
  }

  m(t) {
    const i = this.A.nextSibling;
    null !== i && 3 === i.nodeType && (null === this.B ? null === i.nextSibling : i === this.B.previousSibling) ? i.data = t : this.$(u.createTextNode(t)), this.H = t;
  }

  _(t) {
    var i;
    const {
      values: s,
      _$litType$: e
    } = t,
          o = "number" == typeof e ? this.C(t) : (void 0 === e.el && (e.el = N.createElement(e.h, this.options)), e);
    if ((null === (i = this.H) || void 0 === i ? void 0 : i.D) === o) this.H.v(s);else {
      const t = new k(o, this),
            i = t.u(this.options);
      t.v(s), this.$(i), this.H = t;
    }
  }

  C(t) {
    let i = P.get(t.strings);
    return void 0 === i && P.set(t.strings, i = new N(t)), i;
  }

  g(t) {
    v(this.H) || (this.H = [], this.R());
    const i = this.H;
    let s,
        e = 0;

    for (const o of t) e === i.length ? i.push(s = new C(this.k(c()), this.k(c()), this, this.options)) : s = i[e], s.I(o), e++;

    e < i.length && (this.R(s && s.B.nextSibling, e), i.length = e);
  }

  R(t = this.A.nextSibling, i) {
    var s;

    for (null === (s = this.P) || void 0 === s || s.call(this, !1, !0, i); t && t !== this.B;) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }

}

class H {
  constructor(t, i, s, e, o) {
    this.type = 1, this.H = A, this.N = void 0, this.V = void 0, this.element = t, this.name = i, this.M = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this.H = Array(s.length - 1).fill(A), this.strings = s) : this.H = A;
  }

  get tagName() {
    return this.element.tagName;
  }

  I(t, i = this, s, e) {
    const o = this.strings;
    let l = !1;
    if (void 0 === o) t = S(this, t, i, 0), l = !d(t) || t !== this.H && t !== w, l && (this.H = t);else {
      const e = t;
      let n, h;

      for (t = o[0], n = 0; n < o.length - 1; n++) h = S(this, e[s + n], i, n), h === w && (h = this.H[n]), l || (l = !d(h) || h !== this.H[n]), h === A ? t = A : t !== A && (t += (null != h ? h : "") + o[n + 1]), this.H[n] = h;
    }
    l && !e && this.W(t);
  }

  W(t) {
    t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
  }

}

class I extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }

  W(t) {
    this.element[this.name] = t === A ? void 0 : t;
  }

}

class L extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }

  W(t) {
    t && t !== A ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
  }

}

class R extends H {
  constructor() {
    super(...arguments), this.type = 5;
  }

  I(t, i = this) {
    var s;
    if ((t = null !== (s = S(this, t, i, 0)) && void 0 !== s ? s : A) === w) return;
    const e = this.H,
          o = t === A && e !== A || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
          l = t !== A && (e === A || o);
    o && this.element.removeEventListener(this.name, this, e), l && this.element.addEventListener(this.name, this, t), this.H = t;
  }

  handleEvent(t) {
    var i, s;
    "function" == typeof this.H ? this.H.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this.H.handleEvent(t);
  }

}

class z {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this.N = void 0, this.V = void 0, this.M = i, this.options = s;
  }

  I(t) {
    S(this, t);
  }

}

const Z = {
  Z: "$lit$",
  U: n,
  Y: h,
  q: 1,
  X: M,
  tt: k,
  it: a,
  st: S,
  et: C,
  ot: H,
  nt: L,
  rt: R,
  lt: I,
  ht: z
};
exports._Σ = Z;
null === (i = (t = globalThis).litHtmlPlatformSupport) || void 0 === i || i.call(t, N, C), (null !== (s = (e = globalThis).litHtmlVersions) && void 0 !== s ? s : e.litHtmlVersions = []).push("2.0.0-rc.3");
},{}],"../node_modules/lit/node_modules/lit-element/lit-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  LitElement: true,
  UpdatingElement: true,
  _Φ: true
};
exports._Φ = exports.UpdatingElement = exports.LitElement = void 0;

var _reactiveElement = require("@lit/reactive-element");

Object.keys(_reactiveElement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reactiveElement[key];
    }
  });
});

var _litHtml = require("lit-html");

Object.keys(_litHtml).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _litHtml[key];
    }
  });
});

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var i, l, o, s, n, a;
const c = _reactiveElement.ReactiveElement;
exports.UpdatingElement = c;
(null !== (i = (a = globalThis).litElementVersions) && void 0 !== i ? i : a.litElementVersions = []).push("3.0.0-rc.2");

class h extends _reactiveElement.ReactiveElement {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this.Φt = void 0;
  }

  createRenderRoot() {
    var t, e;
    const r = super.createRenderRoot();
    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = r.firstChild), r;
  }

  update(t) {
    const r = this.render();
    super.update(t), this.Φt = (0, _litHtml.render)(r, this.renderRoot, this.renderOptions);
  }

  connectedCallback() {
    var t;
    super.connectedCallback(), null === (t = this.Φt) || void 0 === t || t.setConnected(!0);
  }

  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), null === (t = this.Φt) || void 0 === t || t.setConnected(!1);
  }

  render() {
    return _litHtml.noChange;
  }

}

exports.LitElement = h;
h.finalized = !0, h._$litElement$ = !0, null === (o = (l = globalThis).litElementHydrateSupport) || void 0 === o || o.call(l, {
  LitElement: h
}), null === (n = (s = globalThis).litElementPlatformSupport) || void 0 === n || n.call(s, {
  LitElement: h
});
const u = {
  K: (t, e, r) => {
    t.K(e, r);
  },
  L: t => t.L
};
exports._Φ = u;
},{"@lit/reactive-element":"../node_modules/@lit/reactive-element/reactive-element.js","lit-html":"../node_modules/lit/node_modules/lit-html/lit-html.js"}],"../node_modules/lit/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("@lit/reactive-element");

require("lit-html");

var _litElement = require("lit-element/lit-element.js");

Object.keys(_litElement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _litElement[key];
    }
  });
});
},{"@lit/reactive-element":"../node_modules/@lit/reactive-element/reactive-element.js","lit-html":"../node_modules/lit/node_modules/lit-html/lit-html.js","lit-element/lit-element.js":"../node_modules/lit/node_modules/lit-element/lit-element.js"}],"../node_modules/@lit/reactive-element/decorators/custom-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customElement = void 0;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n = n => e => "function" == typeof e ? ((n, e) => (window.customElements.define(n, e), e))(n, e) : ((n, e) => {
  const {
    kind: t,
    elements: i
  } = e;
  return {
    kind: t,
    elements: i,

    finisher(e) {
      window.customElements.define(n, e);
    }

  };
})(n, e);

exports.customElement = n;
},{}],"../node_modules/@lit/reactive-element/decorators/property.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.property = e;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i = (i, e) => "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? { ...e,

  finisher(n) {
    n.createProperty(e.key, i);
  }

} : {
  kind: "field",
  key: Symbol(),
  placement: "own",
  descriptor: {},
  originalKey: e.key,

  initializer() {
    "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
  },

  finisher(n) {
    n.createProperty(e.key, i);
  }

};

function e(e) {
  return (n, t) => void 0 !== t ? ((i, e, n) => {
    e.constructor.createProperty(n, i);
  })(e, n, t) : i(e, n);
}
},{}],"../node_modules/@lit/reactive-element/decorators/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = r;

var _property = require("./property.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r(r) {
  return (0, _property.property)({ ...r,
    state: !0,
    attribute: !1
  });
}
},{"./property.js":"../node_modules/@lit/reactive-element/decorators/property.js"}],"../node_modules/@lit/reactive-element/decorators/base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.standardPrototypeMethod = exports.legacyPrototypeMethod = exports.decorateProperty = void 0;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e = (e, t, o) => {
  Object.defineProperty(t, o, e);
},
      t = (e, t) => ({
  kind: "method",
  placement: "prototype",
  key: t.key,
  descriptor: e
}),
      o = ({
  finisher: e,
  descriptor: t
}) => (o, n) => {
  var r;

  if (void 0 === n) {
    const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key,
          i = null != t ? {
      kind: "method",
      placement: "prototype",
      key: n,
      descriptor: t(o.key)
    } : { ...o,
      key: n
    };
    return null != e && (i.finisher = function (t) {
      e(t, n);
    }), i;
  }

  {
    const r = o.constructor;
    void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r, n);
  }
};

exports.decorateProperty = o;
exports.standardPrototypeMethod = t;
exports.legacyPrototypeMethod = e;
},{}],"../node_modules/@lit/reactive-element/decorators/event-options.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventOptions = e;

var _base = require("./base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e) {
  return (0, _base.decorateProperty)({
    finisher: (r, t) => {
      Object.assign(r.prototype[t], e);
    }
  });
}
},{"./base.js":"../node_modules/@lit/reactive-element/decorators/base.js"}],"../node_modules/@lit/reactive-element/decorators/query.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = o;

var _base = require("./base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function o(o, r) {
  return (0, _base.decorateProperty)({
    descriptor: t => {
      const i = {
        get() {
          var t;
          return null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(o);
        },

        enumerable: !0,
        configurable: !0
      };

      if (r) {
        const r = "symbol" == typeof t ? Symbol() : "__" + t;

        i.get = function () {
          var t;
          return void 0 === this[r] && (this[r] = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(o)), this[r];
        };
      }

      return i;
    }
  });
}
},{"./base.js":"../node_modules/@lit/reactive-element/decorators/base.js"}],"../node_modules/@lit/reactive-element/decorators/query-all.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAll = e;

var _base = require("./base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e) {
  return (0, _base.decorateProperty)({
    descriptor: r => ({
      get() {
        var r;
        return null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e);
      },

      enumerable: !0,
      configurable: !0
    })
  });
}
},{"./base.js":"../node_modules/@lit/reactive-element/decorators/base.js"}],"../node_modules/@lit/reactive-element/decorators/query-async.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAsync = e;

var _base = require("./base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e) {
  return (0, _base.decorateProperty)({
    descriptor: r => ({
      async get() {
        var r;
        return await this.updateComplete, null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e);
      },

      enumerable: !0,
      configurable: !0
    })
  });
}
},{"./base.js":"../node_modules/@lit/reactive-element/decorators/base.js"}],"../node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAssignedNodes = o;

var _base = require("./base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = Element.prototype,
      n = t.msMatchesSelector || t.webkitMatchesSelector;

function o(t = "", o = !1, r = "") {
  return (0, _base.decorateProperty)({
    descriptor: e => ({
      get() {
        var e, l;
        const i = "slot" + (t ? `[name=${t}]` : ":not([name])");
        let a = null === (l = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(i)) || void 0 === l ? void 0 : l.assignedNodes({
          flatten: o
        });
        return a && r && (a = a.filter(e => e.nodeType === Node.ELEMENT_NODE && (e.matches ? e.matches(r) : n.call(e, r)))), a;
      },

      enumerable: !0,
      configurable: !0
    })
  });
}
},{"./base.js":"../node_modules/@lit/reactive-element/decorators/base.js"}],"../node_modules/lit/decorators.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _customElement = require("@lit/reactive-element/decorators/custom-element.js");

Object.keys(_customElement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _customElement[key];
    }
  });
});

var _property = require("@lit/reactive-element/decorators/property.js");

Object.keys(_property).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _property[key];
    }
  });
});

var _state = require("@lit/reactive-element/decorators/state.js");

Object.keys(_state).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _state[key];
    }
  });
});

var _eventOptions = require("@lit/reactive-element/decorators/event-options.js");

Object.keys(_eventOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eventOptions[key];
    }
  });
});

var _query = require("@lit/reactive-element/decorators/query.js");

Object.keys(_query).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _query[key];
    }
  });
});

var _queryAll = require("@lit/reactive-element/decorators/query-all.js");

Object.keys(_queryAll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _queryAll[key];
    }
  });
});

var _queryAsync = require("@lit/reactive-element/decorators/query-async.js");

Object.keys(_queryAsync).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _queryAsync[key];
    }
  });
});

var _queryAssignedNodes = require("@lit/reactive-element/decorators/query-assigned-nodes.js");

Object.keys(_queryAssignedNodes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _queryAssignedNodes[key];
    }
  });
});
},{"@lit/reactive-element/decorators/custom-element.js":"../node_modules/@lit/reactive-element/decorators/custom-element.js","@lit/reactive-element/decorators/property.js":"../node_modules/@lit/reactive-element/decorators/property.js","@lit/reactive-element/decorators/state.js":"../node_modules/@lit/reactive-element/decorators/state.js","@lit/reactive-element/decorators/event-options.js":"../node_modules/@lit/reactive-element/decorators/event-options.js","@lit/reactive-element/decorators/query.js":"../node_modules/@lit/reactive-element/decorators/query.js","@lit/reactive-element/decorators/query-all.js":"../node_modules/@lit/reactive-element/decorators/query-all.js","@lit/reactive-element/decorators/query-async.js":"../node_modules/@lit/reactive-element/decorators/query-async.js","@lit/reactive-element/decorators/query-assigned-nodes.js":"../node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js"}],"demo.ts":[function(require,module,exports) {
"use strict";

var _tslib = require("tslib");

var _stores = require("./stores");

var _src = require("../src");

var _lit = require("lit");

var _decorators = require("lit/decorators");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            <div>\n                <h2>", "</h2>\n                <h3>", "</h3>\n            </div>\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<button @click=", ">LVL UP</button>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            <div>\n                <button @click=", ">toggle</button>\n                ", "\n            </div>           \n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DemoComponent = /*#__PURE__*/function (_observeLitElement) {
  _inherits(DemoComponent, _observeLitElement);

  var _super = _createSuper(DemoComponent);

  function DemoComponent() {
    _classCallCheck(this, DemoComponent);

    return _super.apply(this, arguments);
  }

  _createClass(DemoComponent, [{
    key: "render",
    value: function render() {
      return (0, _lit.html)(_templateObject(), function () {
        return _stores.rootStore.toggle();
      }, _stores.rootState.isHidden ? "" : (0, _lit.html)(_templateObject2(), function () {
        return _stores.rootStore.increment();
      }));
    }
  }]);

  return DemoComponent;
}((0, _src.observeLitElement)(_lit.LitElement));

DemoComponent = (0, _tslib.__decorate)([(0, _decorators.customElement)("demo-comp")], DemoComponent);

var MyComponent = /*#__PURE__*/function (_observeLitElement2) {
  _inherits(MyComponent, _observeLitElement2);

  var _super2 = _createSuper(MyComponent);

  function MyComponent() {
    _classCallCheck(this, MyComponent);

    return _super2.apply(this, arguments);
  }

  _createClass(MyComponent, [{
    key: "render",
    value: function render() {
      return (0, _lit.html)(_templateObject3(), _stores.rootState.userName, _stores.lvlMonitorState.lvlStatus);
    }
  }]);

  return MyComponent;
}((0, _src.observeLitElement)(_lit.LitElement));

MyComponent = (0, _tslib.__decorate)([(0, _decorators.customElement)("user-component")], MyComponent);
},{"tslib":"../node_modules/tslib/tslib.es6.js","./stores":"stores.ts","../src":"../src/index.ts","lit":"../node_modules/lit/index.js","lit/decorators":"../node_modules/lit/decorators.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53162" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","demo.ts"], null)
//# sourceMappingURL=/demo.56710ae6.js.map