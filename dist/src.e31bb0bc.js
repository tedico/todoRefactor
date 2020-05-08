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
})({"App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function app(initModel, updateState, view, node) {
  var model = initModel; // will hold my app state

  var currentView = view(dispatch, model);
  node.appendChild(currentView); // hoisted. closure. in scope when I import it.

  function dispatch(msg) {
    // when there's a UI interaction this will update my model/state then my view to reflect current state
    model = updateState(msg, model);
    var updatedView = view(dispatch, model);
    node.replaceChild(updatedView, currentView);
    currentView = updatedView;
  }
}

var _default = app;
exports.default = _default;
},{}],"UpdateState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MSGS = {
  ADD_TODO: 'ADD_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  REMOVE_ALL_TODOS: 'REMOVE_ALL_TODOS'
}; // notice that each of the parameters taken is a property from my model
// export function addTodoMsg(text) {
//   return {
//     type: MSGS.ADD_TODO,
//     text,
//   }
// }
// export function completeTodoMsg(id) {
//   return {
//     type: MSGS.COMPLETE_TODO,
//     done: !done
//   }
// }
// export function removeTodoMsg(id) {
//   return {
//     type: MSGS.REMOVE_TODO,
//     id,
//   }
// }
// export function removeAllTodoMsg(???) {
//   return {
//     type: MSGS.REMOVE_ALL_TODOS,
//     // I just empty out the entire array
//   }
// }

function updateState(msg, model) {
  switch (msg.type) {
    case MSGS.SHOW_FORM:
      {
        var showForm = msg.showForm;
        return _objectSpread(_objectSpread({}, model), {}, {
          showForm: showForm,
          description: '',
          calories: 0
        });
      }

    case MSGS.CALORIES_INPUT:
      {
        var calories = R.pipe(parseInt, R.defaultTo(0))(msg.calories);
        return _objectSpread(_objectSpread({}, model), {}, {
          calories: calories
        });
      }

    case MSGS.MEAL_INPUT:
      {
        var description = msg.description;
        return _objectSpread(_objectSpread({}, model), {}, {
          description: description
        });
      }

    case MSGS.SAVE_MEAL:
      {
        var editId = model.editId;
        var updatedModel = editId !== null ? edit(msg, model) : add(msg, model);
        return updatedModel;
      }

    case MSGS.DELETE_MEAL:
      {
        var id = msg.id;
        var meals = R.filter(function (meal) {
          return meal.id !== id;
        }, model.meals);
        return _objectSpread(_objectSpread({}, model), {}, {
          meals: meals
        });
      }

    case MSGS.EDIT_MEAL:
      {
        var _editId = msg.editId;
        var meal = R.find(function (meal) {
          return meal.id === _editId;
        }, model.meals);
        var _description = meal.description,
            _calories = meal.calories;
        return _objectSpread(_objectSpread({}, model), {}, {
          // spreads the existing model
          editId: _editId,
          // I now override this prop...
          description: _description,
          // and this prop...
          calories: _calories,
          // and this prop...
          showForm: true // and this prop

        });
      }

    default:
      return model;
  }
}

function add(msg, model) {
  var nextId = model.nextId,
      description = model.description,
      calories = model.calories;
  var meal = {
    id: nextId,
    description: description,
    calories: calories
  };
  var meals = [].concat(_toConsumableArray(model.meals), [meal]);
  return _objectSpread(_objectSpread({}, model), {}, {
    meals: meals,
    nextId: nextId + 1,
    description: '',
    calories: 0,
    showForm: false
  });
}

function edit(msg, model) {
  var description = model.description,
      calories = model.calories,
      editId = model.editId;
  var meals = R.map(function (meal) {
    if (meal.id === editId) {
      return _objectSpread(_objectSpread({}, meal), {}, {
        description: description,
        calories: calories
      });
    } else {
      return meal;
    }
  }, model.meals);
  return _objectSpread(_objectSpread({}, model), {}, {
    meals: meals,
    description: '',
    calories: 0,
    showForm: false,
    editId: null
  });
}

var _default = updateState;
exports.default = _default;
},{}],"Model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// this is my apps initial state or everytime I add a todo item this is what I'm adding to the array
// const initModel = {
//   id: 0,
//   text: '',
//   done: false,
// }
//  let todos = JSON.parse(localStorage.getItem('todos')) || [];
var initModel = JSON.parse(localStorage.getItem('todos')) || [];
var _default = initModel;
exports.default = _default;
},{}],"View.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// import { p } from './views'
// div.wrapper
// h2 i.farfa-tasks
// ul#todos
// todo li's
// end todos
// form#form-todos
// input type=text
// input type=submit
// input type=submit
// end form
// end wrapper
function p() {
  var p = document.createElement('p');
  p.textContent = "🏄🏄🏄";
  return p;
}

function h2() {
  var h2 = document.createElement('h2');
  h2.textContent = "Todo App";
  return h2;
}

function ul() {
  var ul = document.createElement('ul');
  ul.className = "todos";
  ul.id = "todos";
  return ul;
}

function i() {
  var i = document.createElement('i');
  i.className = "far fa-tasks";
  return i;
}

function input(type, name) {
  var input = document.createElement('input');
  input.type = "text";
  input.name = "item";
  input.placeholder = "Add Your Todo Item...";
  input.required = true;
  return input;
}

function formSet() {
  var form = document.createElement('form');
  form.className = "form-todos";
  form.id = "form-todos";
  document.addEventListener('submit', dispatch(msg));
  return form;
}

function view(dispatch, model) {
  var wrapper = document.createElement('div');
  wrapper.className = "wrapper";
  wrapper.appendChild(p());
  return wrapper;
}

var _default = view;
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _App = _interopRequireDefault(require("./App"));

var _UpdateState = _interopRequireDefault(require("./UpdateState"));

var _Model = _interopRequireDefault(require("./Model"));

var _View = _interopRequireDefault(require("./View"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("yew 🏄🏄🏄 from index.js");
var rootNode = document.getElementById('root');
(0, _App.default)(_Model.default, _UpdateState.default, _View.default, rootNode);
},{"./App":"App.js","./UpdateState":"UpdateState.js","./Model":"Model.js","./View":"View.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57630" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map