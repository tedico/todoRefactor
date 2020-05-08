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
exports.addTodoMsg = addTodoMsg;
exports.completeTodoMsg = completeTodoMsg;
exports.removeTodoMsg = removeTodoMsg;
exports.removeAllTodoMsg = removeAllTodoMsg;
exports.default = void 0;
var MSGS = {
  ADD_TODO: 'ADD_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  REMOVE_ALL_TODOS: 'REMOVE_ALL_TODOS'
};

function addTodoMsg(text) {
  return {
    type: MSGS.ADD_TODO,
    text: text
  };
}

function completeTodoMsg(id) {
  return {
    type: MSGS.COMPLETE_TODO,
    done: !done
  };
}

function removeTodoMsg(id) {
  return {
    type: MSGS.REMOVE_TODO,
    id: id
  };
}

function removeAllTodoMsg() {
  return {
    type: MSGS.REMOVE_ALL_TODOS // I just empty out the entire array

  };
}

function updateState(msg, model) {
  switch (msg.type) {
    case MSGS.ADD_TODO:
      {
        return;
      }

    case MSGS.COMPLETE_TODO:
      {
        return;
      }

    case SGS.REMOVE_TODO:
      {
        return;
      }

    case MSGS.REMOVE_ALL_TODOS:
      {
        return;
      }

    default:
      return model;
  }
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
},{}],"views/views.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.p = p;
exports.h2 = h2;
exports.ul = ul;
exports.li = li;
exports.label = label;
exports.span = span;
exports.i = i;
exports.input = input;
exports.formSet = formSet;

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
  ul.addEventListener('submit', function () {
    return dispatch(addTodoMsg(text));
  });
  return ul;
}

function li() {
  var li = document.createElement('li');
  return li;
}

function label() {
  var label = document.createElement('label');
  label.for = "test";
  return label;
}

function span() {
  var span = document.createElement("span");
  span.className = "".concat(todo.done ? "done" : '');
  return span;
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
  document.addEventListener('submit', function () {
    return dispatch(msg);
  });
  return form;
}
},{}],"View.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _views = require("./views/views");

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
function view(dispatch, model) {
  var wrapper = document.createElement('div');
  wrapper.className = "wrapper";
  wrapper.appendChild((0, _views.h2)());
  wrapper.appendChild((0, _views.ul)());
  wrapper.appendChild((0, _views.formSet)());
  return wrapper;
}

var _default = view;
exports.default = _default;
},{"./views/views":"views/views.js"}],"index.js":[function(require,module,exports) {
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