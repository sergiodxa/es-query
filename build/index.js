(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _methodsAddClassJs = require('./methods/add-class.js');

var _methodsAddClassJs2 = _interopRequireDefault(_methodsAddClassJs);

var _methodsAfterJs = require('./methods/after.js');

var _methodsAfterJs2 = _interopRequireDefault(_methodsAfterJs);

var _methodsAppendJs = require('./methods/append.js');

var _methodsAppendJs2 = _interopRequireDefault(_methodsAppendJs);

var _methodsAttrJs = require('./methods/attr.js');

var _methodsAttrJs2 = _interopRequireDefault(_methodsAttrJs);

var _methodsBeforeJs = require('./methods/before.js');

var _methodsBeforeJs2 = _interopRequireDefault(_methodsBeforeJs);

var _methodsChildrenJs = require('./methods/children.js');

var _methodsChildrenJs2 = _interopRequireDefault(_methodsChildrenJs);

var _methodsCloneJs = require('./methods/clone.js');

var _methodsCloneJs2 = _interopRequireDefault(_methodsCloneJs);

var _methodsContainsJs = require('./methods/contains.js');

var _methodsContainsJs2 = _interopRequireDefault(_methodsContainsJs);

var _methodsEachJs = require('./methods/each.js');

var _methodsEachJs2 = _interopRequireDefault(_methodsEachJs);

var _methodsEmptyJs = require('./methods/empty.js');

var _methodsEmptyJs2 = _interopRequireDefault(_methodsEmptyJs);

var _methodsFilterJs = require('./methods/filter.js');

var _methodsFilterJs2 = _interopRequireDefault(_methodsFilterJs);

var _methodsFindJs = require('./methods/find.js');

var _methodsFindJs2 = _interopRequireDefault(_methodsFindJs);

var _methodsHasClassJs = require('./methods/has-class.js');

var _methodsHasClassJs2 = _interopRequireDefault(_methodsHasClassJs);

var _methodsHtmlJs = require('./methods/html.js');

var _methodsHtmlJs2 = _interopRequireDefault(_methodsHtmlJs);

var _methodsIsJs = require('./methods/is.js');

var _methodsIsJs2 = _interopRequireDefault(_methodsIsJs);

var _methodsNextJs = require('./methods/next.js');

var _methodsNextJs2 = _interopRequireDefault(_methodsNextJs);

var _methodsOffJs = require('./methods/off.js');

var _methodsOffJs2 = _interopRequireDefault(_methodsOffJs);

var _methodsOnJs = require('./methods/on.js');

var _methodsOnJs2 = _interopRequireDefault(_methodsOnJs);

var _methodsParentJs = require('./methods/parent.js');

var _methodsParentJs2 = _interopRequireDefault(_methodsParentJs);

var _methodsPrependJs = require('./methods/prepend.js');

var _methodsPrependJs2 = _interopRequireDefault(_methodsPrependJs);

var _methodsPrevJs = require('./methods/prev.js');

var _methodsPrevJs2 = _interopRequireDefault(_methodsPrevJs);

var _methodsRemoveJs = require('./methods/remove.js');

var _methodsRemoveJs2 = _interopRequireDefault(_methodsRemoveJs);

var _methodsRemoveClassJs = require('./methods/remove-class.js');

var _methodsRemoveClassJs2 = _interopRequireDefault(_methodsRemoveClassJs);

var _methodsTextJs = require('./methods/text.js');

var _methodsTextJs2 = _interopRequireDefault(_methodsTextJs);

var _methodsToggleClassJs = require('./methods/toggle-class.js');

var _methodsToggleClassJs2 = _interopRequireDefault(_methodsToggleClassJs);

var _methodsTriggerJs = require('./methods/trigger.js');

var _methodsTriggerJs2 = _interopRequireDefault(_methodsTriggerJs);

exports['default'] = {
  addClass: _methodsAddClassJs2['default'],
  after: _methodsAfterJs2['default'],
  append: _methodsAppendJs2['default'],
  attr: _methodsAttrJs2['default'],
  before: _methodsBeforeJs2['default'],
  children: _methodsChildrenJs2['default'],
  clone: _methodsCloneJs2['default'],
  contains: _methodsContainsJs2['default'],
  each: _methodsEachJs2['default'],
  empty: _methodsEmptyJs2['default'],
  filter: _methodsFilterJs2['default'],
  find: _methodsFindJs2['default'],
  hasClass: _methodsHasClassJs2['default'],
  html: _methodsHtmlJs2['default'],
  is: _methodsIsJs2['default'],
  next: _methodsNextJs2['default'],
  off: _methodsOffJs2['default'],
  on: _methodsOnJs2['default'],
  parent: _methodsParentJs2['default'],
  prepend: _methodsPrependJs2['default'],
  prev: _methodsPrevJs2['default'],
  remove: _methodsRemoveJs2['default'],
  removeClass: _methodsRemoveClassJs2['default'],
  text: _methodsTextJs2['default'],
  toggleClass: _methodsToggleClassJs2['default'],
  trigger: _methodsTriggerJs2['default']
};
module.exports = exports['default'];

},{"./methods/add-class.js":2,"./methods/after.js":3,"./methods/append.js":4,"./methods/attr.js":5,"./methods/before.js":6,"./methods/children.js":7,"./methods/clone.js":8,"./methods/contains.js":9,"./methods/each.js":10,"./methods/empty.js":11,"./methods/filter.js":12,"./methods/find.js":13,"./methods/has-class.js":14,"./methods/html.js":15,"./methods/is.js":16,"./methods/next.js":17,"./methods/off.js":18,"./methods/on.js":19,"./methods/parent.js":20,"./methods/prepend.js":21,"./methods/prev.js":22,"./methods/remove-class.js":23,"./methods/remove.js":24,"./methods/text.js":25,"./methods/toggle-class.js":26,"./methods/trigger.js":27,"babel-runtime/helpers/interop-require-default":28}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function addClass(className) {
  if (this.classList) {
    this.classList.add(className);
  } else {
    this.className += ' ' + className;
  }

  return this;
}

exports['default'] = addClass;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function after(htmlString) {
  this.insertAdjacentHTML('afterend', htmlString);
  return this;
}

exports['default'] = after;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function append(el) {
  this.appendChild(el);
  return this;
}

exports["default"] = append;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function attr(name) {
  var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  if (!value) {
    return this.getAttribute(name);
  }
  this.setAttribute(name, value);
  return this;
}

exports["default"] = attr;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function before(htmlString) {
  this.insertAdjacentHTML('beforebegin', htmlString);
  return this;
}

exports['default'] = before;
module.exports = exports['default'];

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function children() {
  var childrenElements = [];

  for (var i = 0, len = this.children.length; i < len; i++) {
    if (this.children[i].nodeType !== 8) {
      childrenElements.unshift(this.children[i]);
    }
  }
  return childrenElements;
}

exports["default"] = children;
module.exports = exports["default"];

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function clone() {
  return this.cloneNode(true);
}

exports["default"] = clone;
module.exports = exports["default"];

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function contains(child) {
  return this !== child && this.contains(child);
}

exports["default"] = contains;
module.exports = exports["default"];

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function each(fn) {
  for (var i = 0, len = this.length; i < len; i++) {
    fn(this[i], i);
  }

  return this;
}

exports["default"] = each;
module.exports = exports["default"];

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function empty() {
  while (this.firstChild) {
    this.removeChild(this.firstChild);
  }

  return this;
}

exports["default"] = empty;
module.exports = exports["default"];

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function filter(fn) {
  var newElements = [];

  for (var i = 0, len = this.length; i < len; i++) {
    if (fn(this[i])) {
      newElements.unshift(this[i]);
    }
  }

  return newElements;
}

exports["default"] = filter;
module.exports = exports["default"];

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function find(selector) {
  return this.querySelectorAll(selector);
}

exports["default"] = find;
module.exports = exports["default"];

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function hasClass(className) {
  if (this.classList) {
    return this.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(this.className);
  }
}

exports['default'] = hasClass;
module.exports = exports['default'];

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function html() {
  var value = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

  if (!value) {
    return this.innerHTML;
  }

  this.innerHTML = value;

  return this;
}

exports["default"] = html;
module.exports = exports["default"];

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function is(el) {
  return this === el;
}

exports["default"] = is;
module.exports = exports["default"];

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function nextElementSibling(el) {
  var nextEl = el;

  do {
    nextEl = nextEl.nextSibling;
  } while (nextEl && nextEl.nodeType !== 1);

  return nextEl;
}

function next() {
  return this.nextElementSibling || nextElementSibling(this);
}

exports["default"] = next;
module.exports = exports["default"];

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function off(eventName, handler) {
  if (this.removeEventListener) {
    this.removeEventListener(eventName, handler);
  } else {
    this.detachEvent('on' + eventName, handler);
  }

  return this;
}

exports['default'] = off;
module.exports = exports['default'];

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function on(eventName, handler) {
  if (this.addEventListener) {
    this.addEventListener(eventName, handler);
  } else {
    this.attachEvent('on' + eventName, function () {
      handler.call(this);
    });
  }

  return this;
}

exports['default'] = on;
module.exports = exports['default'];

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function parent() {
  return this.parentNode;
}

exports["default"] = parent;
module.exports = exports["default"];

},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function prepend(el) {
  this.insertBefore(el, this.firstChild);
  return this;
}

exports["default"] = prepend;
module.exports = exports["default"];

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function previousElementSibling(el) {
  var prevEl = el;

  do {
    prevEl = prevEl.previousSibling;
  } while (prevEl && prevEl.nodeType !== 1);

  return prevEl;
}

function prev() {
  return this.previousElementSibling || previousElementSibling(this);
}

exports["default"] = prev;
module.exports = exports["default"];

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function removeClass(className) {
  if (this.classList) {
    this.classList.remove(className);
  } else {
    this.className = this.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }

  return this;
}

exports['default'] = removeClass;
module.exports = exports['default'];

},{}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function remove() {
  this.parentNode.removeChild(this);
}

exports["default"] = remove;
module.exports = exports["default"];

},{}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function text() {
  return this.textContent || this.innerText;
}

exports["default"] = text;
module.exports = exports["default"];

},{}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function toggleClass(className) {
  if (this.classList) {
    this.classList.toggle(className);
  } else {
    var classes = this.className.split(' ');
    var existingIndex = -1;

    for (var i = 0, len = classes.length; i < len; i++) {
      if (classes[i] === className) {
        existingIndex = i;
      }
    }

    if (existingIndex >= 0) {
      classes.splice(existingIndex, 1);
    } else {
      classes.push(className);
    }

    this.className = classes.join(' ');
  }

  return this;
}

exports['default'] = toggleClass;
module.exports = exports['default'];

},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function trigger(eventName) {
  if (document.createEvent) {
    var _event = document.createEvent('HTMLEvents');
    _event.initEvent(eventName.toLowerCase, true, false);
    this.dispatchEvent(_event);
  } else {
    this.fireEvent('on' + eventName.toLowerCase);
  }

  return this;
}

exports['default'] = trigger;
module.exports = exports['default'];

},{}],28:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}]},{},[1]);
