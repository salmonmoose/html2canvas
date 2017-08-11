/*!
 * html2canvas 1.0.0-alpha.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2017 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["testrunner"] = factory();
	else
		root["testrunner"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .flag(object, key, [value])
 *
 * Get or set a flag value on an object. If a
 * value is provided it will be set, else it will
 * return the currently set value or `undefined` if
 * the value is not set.
 *
 *     utils.flag(this, 'foo', 'bar'); // setter
 *     utils.flag(this, 'foo'); // getter, returns `bar`
 *
 * @param {Object} object constructed Assertion
 * @param {String} key
 * @param {Mixed} value (optional)
 * @namespace Utils
 * @name flag
 * @api private
 */

module.exports = function flag(obj, key, value) {
  var flags = obj.__flags || (obj.__flags = Object.create(null));
  if (arguments.length === 3) {
    flags[key] = value;
  } else {
    return flags[key];
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var used = [];

/*!
 * Chai version
 */

exports.version = '4.1.1';

/*!
 * Assertion Error
 */

exports.AssertionError = __webpack_require__(8);

/*!
 * Utils for plugins (not exported)
 */

var util = __webpack_require__(18);

/**
 * # .use(function)
 *
 * Provides a way to extend the internals of Chai.
 *
 * @param {Function}
 * @returns {this} for chaining
 * @api public
 */

exports.use = function (fn) {
  if (!~used.indexOf(fn)) {
    fn(exports, util);
    used.push(fn);
  }

  return exports;
};

/*!
 * Utility Functions
 */

exports.util = util;

/*!
 * Configuration
 */

var config = __webpack_require__(2);
exports.config = config;

/*!
 * Primary `Assertion` prototype
 */

var assertion = __webpack_require__(36);
exports.use(assertion);

/*!
 * Core Assertions
 */

var core = __webpack_require__(37);
exports.use(core);

/*!
 * Expect interface
 */

var expect = __webpack_require__(38);
exports.use(expect);

/*!
 * Should interface
 */

var should = __webpack_require__(39);
exports.use(should);

/*!
 * Assert interface
 */

var assert = __webpack_require__(40);
exports.use(assert);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {

  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {Boolean}
   * @api public
   */

  includeStack: false,

  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {Boolean}
   * @api public
   */

  showDiff: true,

  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {Number}
   * @api public
   */

  truncateThreshold: 40,

  /**
   * ### config.useProxy
   *
   * User configurable property, defines if chai will use a Proxy to throw
   * an error when a non-existent property is read, which protects users
   * from typos when using property-based assertions.
   *
   * Set it to false if you want to disable this feature.
   *
   *     chai.config.useProxy = false;  // disable use of Proxy
   *
   * This feature is automatically disabled regardless of this config value
   * in environments that don't support proxies.
   *
   * @param {Boolean}
   * @api public
   */

  useProxy: true,

  /**
   * ### config.proxyExcludedKeys
   *
   * User configurable property, defines which properties should be ignored
   * instead of throwing an error if they do not exist on the assertion.
   * This is only applied if the environment Chai is running in supports proxies and
   * if the `useProxy` configuration setting is enabled.
   * By default, `then` and `inspect` will not throw an error if they do not exist on the
   * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
   * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
   *
   *     // By default these keys will not throw an error if they do not exist on the assertion object
   *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
   *
   * @param {Array}
   * @api public
   */

  proxyExcludedKeys: ['then', 'inspect', 'toJSON']
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .transferFlags(assertion, object, includeAll = true)
 *
 * Transfer all the flags for `assertion` to `object`. If
 * `includeAll` is set to `false`, then the base Chai
 * assertion flags (namely `object`, `ssfi`, `lockSsfi`,
 * and `message`) will not be transferred.
 *
 *
 *     var newAssertion = new Assertion();
 *     utils.transferFlags(assertion, newAssertion);
 *
 *     var anotherAsseriton = new Assertion(myObj);
 *     utils.transferFlags(assertion, anotherAssertion, false);
 *
 * @param {Assertion} assertion the assertion to transfer the flags from
 * @param {Object} object the object to transfer the flags to; usually a new assertion
 * @param {Boolean} includeAll
 * @namespace Utils
 * @name transferFlags
 * @api private
 */

module.exports = function transferFlags(assertion, object, includeAll) {
  var flags = assertion.__flags || (assertion.__flags = Object.create(null));

  if (!object.__flags) {
    object.__flags = Object.create(null);
  }

  includeAll = arguments.length === 3 ? includeAll : true;

  for (var flag in flags) {
    if (includeAll ||
        (flag !== 'object' && flag !== 'ssfi' && flag !== 'lockSsfi' && flag != 'message')) {
      object.__flags[flag] = flags[flag];
    }
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// This is (almost) directly from Node.js utils
// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

var getName = __webpack_require__(12);
var getProperties = __webpack_require__(13);
var getEnumerableProperties = __webpack_require__(23);
var config = __webpack_require__(2);

module.exports = inspect;

/**
 * ### .inspect(obj, [showHidden], [depth], [colors])
 *
 * Echoes the value of a value. Tries to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
 *    properties of objects. Default is false.
 * @param {Number} depth Depth in which to descend in object. Default is 2.
 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
 *    output. Default is false (no coloring).
 * @namespace Utils
 * @name inspect
 */
function inspect(obj, showHidden, depth, colors) {
  var ctx = {
    showHidden: showHidden,
    seen: [],
    stylize: function (str) { return str; }
  };
  return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
}

// Returns true if object is a DOM element.
var isDOMElement = function (object) {
  if (typeof HTMLElement === 'object') {
    return object instanceof HTMLElement;
  } else {
    return object &&
      typeof object === 'object' &&
      'nodeType' in object &&
      object.nodeType === 1 &&
      typeof object.nodeName === 'string';
  }
};

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (value && typeof value.inspect === 'function' &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (typeof ret !== 'string') {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // If this is a DOM element, try to get the outer HTML.
  if (isDOMElement(value)) {
    if ('outerHTML' in value) {
      return value.outerHTML;
      // This value does not have an outerHTML attribute,
      //   it could still be an XML element
    } else {
      // Attempt to serialize it
      try {
        if (document.xmlVersion) {
          var xmlSerializer = new XMLSerializer();
          return xmlSerializer.serializeToString(value);
        } else {
          // Firefox 11- do not support outerHTML
          //   It does, however, support innerHTML
          //   Use the following to render the element
          var ns = "http://www.w3.org/1999/xhtml";
          var container = document.createElementNS(ns, '_');

          container.appendChild(value.cloneNode(false));
          var html = container.innerHTML
            .replace('><', '>' + value.innerHTML + '<');
          container.innerHTML = '';
          return html;
        }
      } catch (err) {
        // This could be a non-native DOM implementation,
        //   continue with the normal flow:
        //   printing the element as if it is an object.
      }
    }
  }

  // Look up the keys of the object.
  var visibleKeys = getEnumerableProperties(value);
  var keys = ctx.showHidden ? getProperties(value) : visibleKeys;

  var name, nameSuffix;

  // Some type of object without properties can be shortcutted.
  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
  // a `stack` plus `description` property; ignore those for consistency.
  if (keys.length === 0 || (isError(value) && (
      (keys.length === 1 && keys[0] === 'stack') ||
      (keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')
     ))) {
    if (typeof value === 'function') {
      name = getName(value);
      nameSuffix = name ? ': ' + name : '';
      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = ''
    , array = false
    , typedArray = false
    , braces = ['{', '}'];

  if (isTypedArray(value)) {
    typedArray = true;
    braces = ['[', ']'];
  }

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (typeof value === 'function') {
    name = getName(value);
    nameSuffix = name ? ': ' + name : '';
    base = ' [Function' + nameSuffix + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    return formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else if (typedArray) {
    return formatTypedArray(value);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  switch (typeof value) {
    case 'undefined':
      return ctx.stylize('undefined', 'undefined');

    case 'string':
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                               .replace(/'/g, "\\'")
                                               .replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');

    case 'number':
      if (value === 0 && (1/value) === -Infinity) {
        return ctx.stylize('-0', 'number');
      }
      return ctx.stylize('' + value, 'number');

    case 'boolean':
      return ctx.stylize('' + value, 'boolean');

    case 'symbol':
      return ctx.stylize(value.toString(), 'symbol');
  }
  // For some reason typeof null is "object", so special case here.
  if (value === null) {
    return ctx.stylize('null', 'null');
  }
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}

function formatTypedArray(value) {
  var str = '[ ';

  for (var i = 0; i < value.length; ++i) {
    if (str.length >= config.truncateThreshold - 7) {
      str += '...';
      break;
    }
    str += value[i] + ', ';
  }
  str += ' ]';

  // Removing trailing `, ` if the array was not truncated
  if (str.indexOf(',  ]') !== -1) {
    str = str.replace(',  ]', ' ]');
  }

  return str;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name;
  var propDescriptor = Object.getOwnPropertyDescriptor(value, key);
  var str;

  if (propDescriptor) {
    if (propDescriptor.get) {
      if (propDescriptor.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (propDescriptor.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
  }
  if (visibleKeys.indexOf(key) < 0) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(value[key]) < 0) {
      if (recurseTimes === null) {
        str = formatValue(ctx, value[key], null);
      } else {
        str = formatValue(ctx, value[key], recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (typeof name === 'undefined') {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

function isTypedArray(ar) {
  // Unfortunately there's no way to check if an object is a TypedArray
  // We have to check if it's one of these types
  return (typeof ar === 'object' && /\w+Array]$/.test(objectToString(ar)));
}

function isArray(ar) {
  return Array.isArray(ar) ||
         (typeof ar === 'object' && objectToString(ar) === '[object Array]');
}

function isRegExp(re) {
  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
}

function isDate(d) {
  return typeof d === 'object' && objectToString(d) === '[object Date]';
}

function isError(e) {
  return typeof e === 'object' && objectToString(e) === '[object Error]';
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(2);

/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .isProxyEnabled()
 *
 * Helper function to check if Chai's proxy protection feature is enabled. If
 * proxies are unsupported or disabled via the user's Chai config, then return
 * false. Otherwise, return true.
 *
 * @namespace Utils
 * @name isProxyEnabled
 */

module.exports = function isProxyEnabled() {
  return config.useProxy && 
    typeof Proxy !== 'undefined' &&
    typeof Reflect !== 'undefined';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(2);

var fnLengthDesc = Object.getOwnPropertyDescriptor(function () {}, 'length');

/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .addLengthGuard(fn, assertionName, isChainable)
 *
 * Define `length` as a getter on the given uninvoked method assertion. The
 * getter acts as a guard against chaining `length` directly off of an uninvoked
 * method assertion, which is a problem because it references `function`'s
 * built-in `length` property instead of Chai's `length` assertion. When the
 * getter catches the user making this mistake, it throws an error with a
 * helpful message.
 *
 * There are two ways in which this mistake can be made. The first way is by
 * chaining the `length` assertion directly off of an uninvoked chainable
 * method. In this case, Chai suggests that the user use `lengthOf` instead. The
 * second way is by chaining the `length` assertion directly off of an uninvoked
 * non-chainable method. Non-chainable methods must be invoked prior to
 * chaining. In this case, Chai suggests that the user consult the docs for the
 * given assertion.
 *
 * If the `length` property of functions is unconfigurable, then return `fn`
 * without modification.
 *
 * Note that in ES6, the function's `length` property is configurable, so once
 * support for legacy environments is dropped, Chai's `length` property can
 * replace the built-in function's `length` property, and this length guard will
 * no longer be necessary. In the mean time, maintaining consistency across all
 * environments is the priority.
 *
 * @param {Function} fn
 * @param {String} assertionName
 * @param {Boolean} isChainable
 * @namespace Utils
 * @name addLengthGuard
 */

module.exports = function addLengthGuard (fn, assertionName, isChainable) {
  if (!fnLengthDesc.configurable) return fn;

  Object.defineProperty(fn, 'length', {
    get: function () {
      if (isChainable) {
        throw Error('Invalid Chai property: ' + assertionName + '.length. Due' +
          ' to a compatibility issue, "length" cannot directly follow "' +
          assertionName + '". Use "' + assertionName + '.lengthOf" instead.');
      }

      throw Error('Invalid Chai property: ' + assertionName + '.length. See' +
        ' docs for proper usage of "' + assertionName + '".');
    }
  });

  return fn;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(2);
var flag = __webpack_require__(0);
var getProperties = __webpack_require__(13);
var isProxyEnabled = __webpack_require__(5);

/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .proxify(object)
 *
 * Return a proxy of given object that throws an error when a non-existent
 * property is read. By default, the root cause is assumed to be a misspelled
 * property, and thus an attempt is made to offer a reasonable suggestion from
 * the list of existing properties. However, if a nonChainableMethodName is
 * provided, then the root cause is instead a failure to invoke a non-chainable
 * method prior to reading the non-existent property.
 * 
 * If proxies are unsupported or disabled via the user's Chai config, then
 * return object without modification.
 *
 * @param {Object} obj
 * @param {String} nonChainableMethodName
 * @namespace Utils
 * @name proxify
 */

var builtins = ['__flags', '__methods', '_obj', 'assert'];

module.exports = function proxify(obj, nonChainableMethodName) {
  if (!isProxyEnabled()) return obj;

  return new Proxy(obj, {
    get: function proxyGetter(target, property) {
      // This check is here because we should not throw errors on Symbol properties
      // such as `Symbol.toStringTag`.
      // The values for which an error should be thrown can be configured using
      // the `config.proxyExcludedKeys` setting.
      if (typeof property === 'string' &&
          config.proxyExcludedKeys.indexOf(property) === -1 &&
          !Reflect.has(target, property)) {
        // Special message for invalid property access of non-chainable methods.
        if (nonChainableMethodName) {
          throw Error('Invalid Chai property: ' + nonChainableMethodName + '.' +
            property + '. See docs for proper usage of "' +
            nonChainableMethodName + '".');
        }

        var orderedProperties = getProperties(target).filter(function(property) {
          return !Object.prototype.hasOwnProperty(property) &&
            builtins.indexOf(property) === -1;
        }).sort(function(a, b) {
          return stringDistance(property, a) - stringDistance(property, b);
        });

        if (orderedProperties.length &&
            stringDistance(orderedProperties[0], property) < 4) {
          // If the property is reasonably close to an existing Chai property,
          // suggest that property to the user.
          throw Error('Invalid Chai property: ' + property +
            '. Did you mean "' + orderedProperties[0] + '"?');
        } else {
          throw Error('Invalid Chai property: ' + property);
        }
      }

      // Use this proxy getter as the starting point for removing implementation
      // frames from the stack trace of a failed assertion. For property
      // assertions, this prevents the proxy getter from showing up in the stack
      // trace since it's invoked before the property getter. For method and
      // chainable method assertions, this flag will end up getting changed to
      // the method wrapper, which is good since this frame will no longer be in
      // the stack once the method is invoked. Note that Chai builtin assertion
      // properties such as `__flags` are skipped since this is only meant to
      // capture the starting point of an assertion. This step is also skipped
      // if the `lockSsfi` flag is set, thus indicating that this assertion is
      // being called from within another assertion. In that case, the `ssfi`
      // flag is already set to the outer assertion's starting point.
      if (builtins.indexOf(property) === -1 && !flag(target, 'lockSsfi')) {
        flag(target, 'ssfi', proxyGetter);
      }

      return Reflect.get(target, property);
    }
  });
};

/**
 * # stringDistance(strA, strB)
 * Return the Levenshtein distance between two strings.
 * @param {string} strA
 * @param {string} strB
 * @return {number} the string distance between strA and strB
 * @api private
 */

function stringDistance(strA, strB, memo) {
  if (!memo) {
    // `memo` is a two-dimensional array containing a cache of distances
    // memo[i][j] is the distance between strA.slice(0, i) and
    // strB.slice(0, j).
    memo = [];
    for (var i = 0; i <= strA.length; i++) {
      memo[i] = [];
    }
  }

  if (!memo[strA.length] || !memo[strA.length][strB.length]) {
    if (strA.length === 0 || strB.length === 0) {
      memo[strA.length][strB.length] = Math.max(strA.length, strB.length);
    } else {
      memo[strA.length][strB.length] = Math.min(
        stringDistance(strA.slice(0, -1), strB, memo) + 1,
        stringDistance(strA, strB.slice(0, -1), memo) + 1,
        stringDistance(strA.slice(0, -1), strB.slice(0, -1), memo) +
          (strA.slice(-1) === strB.slice(-1) ? 0 : 1)
      );
    }
  }

  return memo[strA.length][strB.length];
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */

/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */

function exclude () {
  var excludes = [].slice.call(arguments);

  function excludeProps (res, obj) {
    Object.keys(obj).forEach(function (key) {
      if (!~excludes.indexOf(key)) res[key] = obj[key];
    });
  }

  return function extendExclude () {
    var args = [].slice.call(arguments)
      , i = 0
      , res = {};

    for (; i < args.length; i++) {
      excludeProps(res, args[i]);
    }

    return res;
  };
};

/*!
 * Primary Exports
 */

module.exports = AssertionError;

/**
 * ### AssertionError
 *
 * An extension of the JavaScript `Error` constructor for
 * assertion and validation scenarios.
 *
 * @param {String} message
 * @param {Object} properties to include (optional)
 * @param {callee} start stack function (optional)
 */

function AssertionError (message, _props, ssf) {
  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON')
    , props = extend(_props || {});

  // default values
  this.message = message || 'Unspecified AssertionError';
  this.showDiff = false;

  // copy from properties
  for (var key in props) {
    this[key] = props[key];
  }

  // capture stack trace
  ssf = ssf || arguments.callee;
  if (ssf && Error.captureStackTrace) {
    Error.captureStackTrace(this, ssf);
  } else {
    try {
      throw new Error();
    } catch(e) {
      this.stack = e.stack;
    }
  }
}

/*!
 * Inherit from Error.prototype
 */

AssertionError.prototype = Object.create(Error.prototype);

/*!
 * Statically set name
 */

AssertionError.prototype.name = 'AssertionError';

/*!
 * Ensure correct constructor
 */

AssertionError.prototype.constructor = AssertionError;

/**
 * Allow errors to be converted to JSON for static transfer.
 *
 * @param {Boolean} include stack (default: `true`)
 * @return {Object} object that can be `JSON.stringify`
 */

AssertionError.prototype.toJSON = function (stack) {
  var extend = exclude('constructor', 'toJSON', 'stack')
    , props = extend({ name: this.name }, this);

  // include stack if exists and not turned off
  if (false !== stack && this.stack) {
    props.stack = this.stack;
  }

  return props;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/* !
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var promiseExists = typeof Promise === 'function';
var globalObject = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : self; // eslint-disable-line
var isDom = 'location' in globalObject && 'document' in globalObject;
var symbolExists = typeof Symbol !== 'undefined';
var mapExists = typeof Map !== 'undefined';
var setExists = typeof Set !== 'undefined';
var weakMapExists = typeof WeakMap !== 'undefined';
var weakSetExists = typeof WeakSet !== 'undefined';
var dataViewExists = typeof DataView !== 'undefined';
var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== 'undefined';
var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== 'undefined';
var setEntriesExists = setExists && typeof Set.prototype.entries === 'function';
var mapEntriesExists = mapExists && typeof Map.prototype.entries === 'function';
var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf(new Set().entries());
var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf(new Map().entries());
var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === 'function';
var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(''[Symbol.iterator]());
var toStringLeftSliceLength = 8;
var toStringRightSliceLength = -1;
/**
 * ### typeOf (obj)
 *
 * Uses `Object.prototype.toString` to determine the type of an object,
 * normalising behaviour across engine versions & well optimised.
 *
 * @param {Mixed} object
 * @return {String} object type
 * @api public
 */
module.exports = function typeDetect(obj) {
  /* ! Speed optimisation
   * Pre:
   *   string literal     x 3,039,035 ops/sec ±1.62% (78 runs sampled)
   *   boolean literal    x 1,424,138 ops/sec ±4.54% (75 runs sampled)
   *   number literal     x 1,653,153 ops/sec ±1.91% (82 runs sampled)
   *   undefined          x 9,978,660 ops/sec ±1.92% (75 runs sampled)
   *   function           x 2,556,769 ops/sec ±1.73% (77 runs sampled)
   * Post:
   *   string literal     x 38,564,796 ops/sec ±1.15% (79 runs sampled)
   *   boolean literal    x 31,148,940 ops/sec ±1.10% (79 runs sampled)
   *   number literal     x 32,679,330 ops/sec ±1.90% (78 runs sampled)
   *   undefined          x 32,363,368 ops/sec ±1.07% (82 runs sampled)
   *   function           x 31,296,870 ops/sec ±0.96% (83 runs sampled)
   */
  var typeofObj = typeof obj;
  if (typeofObj !== 'object') {
    return typeofObj;
  }

  /* ! Speed optimisation
   * Pre:
   *   null               x 28,645,765 ops/sec ±1.17% (82 runs sampled)
   * Post:
   *   null               x 36,428,962 ops/sec ±1.37% (84 runs sampled)
   */
  if (obj === null) {
    return 'null';
  }

  /* ! Spec Conformance
   * Test: `Object.prototype.toString.call(window)``
   *  - Node === "[object global]"
   *  - Chrome === "[object global]"
   *  - Firefox === "[object Window]"
   *  - PhantomJS === "[object Window]"
   *  - Safari === "[object Window]"
   *  - IE 11 === "[object Window]"
   *  - IE Edge === "[object Window]"
   * Test: `Object.prototype.toString.call(this)``
   *  - Chrome Worker === "[object global]"
   *  - Firefox Worker === "[object DedicatedWorkerGlobalScope]"
   *  - Safari Worker === "[object DedicatedWorkerGlobalScope]"
   *  - IE 11 Worker === "[object WorkerGlobalScope]"
   *  - IE Edge Worker === "[object WorkerGlobalScope]"
   */
  if (obj === globalObject) {
    return 'global';
  }

  /* ! Speed optimisation
   * Pre:
   *   array literal      x 2,888,352 ops/sec ±0.67% (82 runs sampled)
   * Post:
   *   array literal      x 22,479,650 ops/sec ±0.96% (81 runs sampled)
   */
  if (
    Array.isArray(obj) &&
    (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))
  ) {
    return 'Array';
  }

  if (isDom) {
    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/browsers.html#location)
     * WhatWG HTML$7.7.3 - The `Location` interface
     * Test: `Object.prototype.toString.call(window.location)``
     *  - IE <=11 === "[object Object]"
     *  - IE Edge <=13 === "[object Object]"
     */
    if (obj === globalObject.location) {
      return 'Location';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#document)
     * WhatWG HTML$3.1.1 - The `Document` object
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     *       WhatWG HTML states:
     *         > For historical reasons, Window objects must also have a
     *         > writable, configurable, non-enumerable property named
     *         > HTMLDocument whose value is the Document interface object.
     * Test: `Object.prototype.toString.call(document)``
     *  - Chrome === "[object HTMLDocument]"
     *  - Firefox === "[object HTMLDocument]"
     *  - Safari === "[object HTMLDocument]"
     *  - IE <=10 === "[object Document]"
     *  - IE 11 === "[object HTMLDocument]"
     *  - IE Edge <=13 === "[object HTMLDocument]"
     */
    if (obj === globalObject.document) {
      return 'Document';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#mimetypearray)
     * WhatWG HTML$8.6.1.5 - Plugins - Interface MimeTypeArray
     * Test: `Object.prototype.toString.call(navigator.mimeTypes)``
     *  - IE <=10 === "[object MSMimeTypesCollection]"
     */
    if (obj === (globalObject.navigator || {}).mimeTypes) {
      return 'MimeTypeArray';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
     * WhatWG HTML$8.6.1.5 - Plugins - Interface PluginArray
     * Test: `Object.prototype.toString.call(navigator.plugins)``
     *  - IE <=10 === "[object MSPluginsCollection]"
     */
    if (obj === (globalObject.navigator || {}).plugins) {
      return 'PluginArray';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
     * WhatWG HTML$4.4.4 - The `blockquote` element - Interface `HTMLQuoteElement`
     * Test: `Object.prototype.toString.call(document.createElement('blockquote'))``
     *  - IE <=10 === "[object HTMLBlockElement]"
     */
    if (obj instanceof HTMLElement && obj.tagName === 'BLOCKQUOTE') {
      return 'HTMLQuoteElement';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#htmltabledatacellelement)
     * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableDataCellElement`
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     * Test: Object.prototype.toString.call(document.createElement('td'))
     *  - Chrome === "[object HTMLTableCellElement]"
     *  - Firefox === "[object HTMLTableCellElement]"
     *  - Safari === "[object HTMLTableCellElement]"
     */
    if (obj instanceof HTMLElement && obj.tagName === 'TD') {
      return 'HTMLTableDataCellElement';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#htmltableheadercellelement)
     * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableHeaderCellElement`
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     * Test: Object.prototype.toString.call(document.createElement('th'))
     *  - Chrome === "[object HTMLTableCellElement]"
     *  - Firefox === "[object HTMLTableCellElement]"
     *  - Safari === "[object HTMLTableCellElement]"
     */
    if (obj instanceof HTMLElement && obj.tagName === 'TH') {
      return 'HTMLTableHeaderCellElement';
    }
  }

  /* ! Speed optimisation
  * Pre:
  *   Float64Array       x 625,644 ops/sec ±1.58% (80 runs sampled)
  *   Float32Array       x 1,279,852 ops/sec ±2.91% (77 runs sampled)
  *   Uint32Array        x 1,178,185 ops/sec ±1.95% (83 runs sampled)
  *   Uint16Array        x 1,008,380 ops/sec ±2.25% (80 runs sampled)
  *   Uint8Array         x 1,128,040 ops/sec ±2.11% (81 runs sampled)
  *   Int32Array         x 1,170,119 ops/sec ±2.88% (80 runs sampled)
  *   Int16Array         x 1,176,348 ops/sec ±5.79% (86 runs sampled)
  *   Int8Array          x 1,058,707 ops/sec ±4.94% (77 runs sampled)
  *   Uint8ClampedArray  x 1,110,633 ops/sec ±4.20% (80 runs sampled)
  * Post:
  *   Float64Array       x 7,105,671 ops/sec ±13.47% (64 runs sampled)
  *   Float32Array       x 5,887,912 ops/sec ±1.46% (82 runs sampled)
  *   Uint32Array        x 6,491,661 ops/sec ±1.76% (79 runs sampled)
  *   Uint16Array        x 6,559,795 ops/sec ±1.67% (82 runs sampled)
  *   Uint8Array         x 6,463,966 ops/sec ±1.43% (85 runs sampled)
  *   Int32Array         x 5,641,841 ops/sec ±3.49% (81 runs sampled)
  *   Int16Array         x 6,583,511 ops/sec ±1.98% (80 runs sampled)
  *   Int8Array          x 6,606,078 ops/sec ±1.74% (81 runs sampled)
  *   Uint8ClampedArray  x 6,602,224 ops/sec ±1.77% (83 runs sampled)
  */
  var stringTag = (symbolToStringTagExists && obj[Symbol.toStringTag]);
  if (typeof stringTag === 'string') {
    return stringTag;
  }

  var objPrototype = Object.getPrototypeOf(obj);
  /* ! Speed optimisation
  * Pre:
  *   regex literal      x 1,772,385 ops/sec ±1.85% (77 runs sampled)
  *   regex constructor  x 2,143,634 ops/sec ±2.46% (78 runs sampled)
  * Post:
  *   regex literal      x 3,928,009 ops/sec ±0.65% (78 runs sampled)
  *   regex constructor  x 3,931,108 ops/sec ±0.58% (84 runs sampled)
  */
  if (objPrototype === RegExp.prototype) {
    return 'RegExp';
  }

  /* ! Speed optimisation
  * Pre:
  *   date               x 2,130,074 ops/sec ±4.42% (68 runs sampled)
  * Post:
  *   date               x 3,953,779 ops/sec ±1.35% (77 runs sampled)
  */
  if (objPrototype === Date.prototype) {
    return 'Date';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-promise.prototype-@@tostringtag)
   * ES6$25.4.5.4 - Promise.prototype[@@toStringTag] should be "Promise":
   * Test: `Object.prototype.toString.call(Promise.resolve())``
   *  - Chrome <=47 === "[object Object]"
   *  - Edge <=20 === "[object Object]"
   *  - Firefox 29-Latest === "[object Promise]"
   *  - Safari 7.1-Latest === "[object Promise]"
   */
  if (promiseExists && objPrototype === Promise.prototype) {
    return 'Promise';
  }

  /* ! Speed optimisation
  * Pre:
  *   set                x 2,222,186 ops/sec ±1.31% (82 runs sampled)
  * Post:
  *   set                x 4,545,879 ops/sec ±1.13% (83 runs sampled)
  */
  if (setExists && objPrototype === Set.prototype) {
    return 'Set';
  }

  /* ! Speed optimisation
  * Pre:
  *   map                x 2,396,842 ops/sec ±1.59% (81 runs sampled)
  * Post:
  *   map                x 4,183,945 ops/sec ±6.59% (82 runs sampled)
  */
  if (mapExists && objPrototype === Map.prototype) {
    return 'Map';
  }

  /* ! Speed optimisation
  * Pre:
  *   weakset            x 1,323,220 ops/sec ±2.17% (76 runs sampled)
  * Post:
  *   weakset            x 4,237,510 ops/sec ±2.01% (77 runs sampled)
  */
  if (weakSetExists && objPrototype === WeakSet.prototype) {
    return 'WeakSet';
  }

  /* ! Speed optimisation
  * Pre:
  *   weakmap            x 1,500,260 ops/sec ±2.02% (78 runs sampled)
  * Post:
  *   weakmap            x 3,881,384 ops/sec ±1.45% (82 runs sampled)
  */
  if (weakMapExists && objPrototype === WeakMap.prototype) {
    return 'WeakMap';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-dataview.prototype-@@tostringtag)
   * ES6$24.2.4.21 - DataView.prototype[@@toStringTag] should be "DataView":
   * Test: `Object.prototype.toString.call(new DataView(new ArrayBuffer(1)))``
   *  - Edge <=13 === "[object Object]"
   */
  if (dataViewExists && objPrototype === DataView.prototype) {
    return 'DataView';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%mapiteratorprototype%-@@tostringtag)
   * ES6$23.1.5.2.2 - %MapIteratorPrototype%[@@toStringTag] should be "Map Iterator":
   * Test: `Object.prototype.toString.call(new Map().entries())``
   *  - Edge <=13 === "[object Object]"
   */
  if (mapExists && objPrototype === mapIteratorPrototype) {
    return 'Map Iterator';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%setiteratorprototype%-@@tostringtag)
   * ES6$23.2.5.2.2 - %SetIteratorPrototype%[@@toStringTag] should be "Set Iterator":
   * Test: `Object.prototype.toString.call(new Set().entries())``
   *  - Edge <=13 === "[object Object]"
   */
  if (setExists && objPrototype === setIteratorPrototype) {
    return 'Set Iterator';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%arrayiteratorprototype%-@@tostringtag)
   * ES6$22.1.5.2.2 - %ArrayIteratorPrototype%[@@toStringTag] should be "Array Iterator":
   * Test: `Object.prototype.toString.call([][Symbol.iterator]())``
   *  - Edge <=13 === "[object Object]"
   */
  if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
    return 'Array Iterator';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%stringiteratorprototype%-@@tostringtag)
   * ES6$21.1.5.2.2 - %StringIteratorPrototype%[@@toStringTag] should be "String Iterator":
   * Test: `Object.prototype.toString.call(''[Symbol.iterator]())``
   *  - Edge <=13 === "[object Object]"
   */
  if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
    return 'String Iterator';
  }

  /* ! Speed optimisation
  * Pre:
  *   object from null   x 2,424,320 ops/sec ±1.67% (76 runs sampled)
  * Post:
  *   object from null   x 5,838,000 ops/sec ±0.99% (84 runs sampled)
  */
  if (objPrototype === null) {
    return 'Object';
  }

  return Object
    .prototype
    .toString
    .call(obj)
    .slice(toStringLeftSliceLength, toStringRightSliceLength);
};

module.exports.typeDetect = module.exports;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getActual(object, [actual])
 *
 * Returns the `actual` value for an Assertion.
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name getActual
 */

module.exports = function getActual(obj, args) {
  return args.length > 4 ? args[4] : obj._obj;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* !
 * Chai - getFuncName utility
 * Copyright(c) 2012-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getFuncName(constructorFn)
 *
 * Returns the name of a function.
 * When a non-function instance is passed, returns `null`.
 * This also includes a polyfill function if `aFunc.name` is not defined.
 *
 * @name getFuncName
 * @param {Function} funct
 * @namespace Utils
 * @api public
 */

var toString = Function.prototype.toString;
var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
function getFuncName(aFunc) {
  if (typeof aFunc !== 'function') {
    return null;
  }

  var name = '';
  if (typeof Function.prototype.name === 'undefined' && typeof aFunc.name === 'undefined') {
    // Here we run a polyfill if Function does not support the `name` property and if aFunc.name is not defined
    var match = toString.call(aFunc).match(functionNameMatch);
    if (match) {
      name = match[1];
    }
  } else {
    // If we've got a `name` property we just use it
    name = aFunc.name;
  }

  return name;
}

module.exports = getFuncName;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getProperties(object)
 *
 * This allows the retrieval of property names of an object, enumerable or not,
 * inherited or not.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getProperties
 * @api public
 */

module.exports = function getProperties(object) {
  var result = Object.getOwnPropertyNames(object);

  function addProperty(property) {
    if (result.indexOf(property) === -1) {
      result.push(property);
    }
  }

  var proto = Object.getPrototypeOf(object);
  while (proto !== null) {
    Object.getOwnPropertyNames(proto).forEach(addProperty);
    proto = Object.getPrototypeOf(proto);
  }

  return result;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var inspect = __webpack_require__(4);
var config = __webpack_require__(2);

/**
 * ### .objDisplay(object)
 *
 * Determines if an object or an array matches
 * criteria to be inspected in-line for error
 * messages or should be truncated.
 *
 * @param {Mixed} javascript object to inspect
 * @name objDisplay
 * @namespace Utils
 * @api public
 */

module.exports = function objDisplay(obj) {
  var str = inspect(obj)
    , type = Object.prototype.toString.call(obj);

  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
    if (type === '[object Function]') {
      return !obj.name || obj.name === ''
        ? '[Function]'
        : '[Function: ' + obj.name + ']';
    } else if (type === '[object Array]') {
      return '[ Array(' + obj.length + ') ]';
    } else if (type === '[object Object]') {
      var keys = Object.keys(obj)
        , kstr = keys.length > 2
          ? keys.splice(0, 2).join(', ') + ', ...'
          : keys.join(', ');
      return '{ Object (' + kstr + ') }';
    } else {
      return str;
    }
  } else {
    return str;
  }
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getOwnEnumerablePropertySymbols(object)
 *
 * This allows the retrieval of directly-owned enumerable property symbols of an
 * object. This function is necessary because Object.getOwnPropertySymbols
 * returns both enumerable and non-enumerable property symbols.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getOwnEnumerablePropertySymbols
 * @api public
 */

module.exports = function getOwnEnumerablePropertySymbols(obj) {
  if (typeof Object.getOwnPropertySymbols !== 'function') return [];

  return Object.getOwnPropertySymbols(obj).filter(function (sym) {
    return Object.getOwnPropertyDescriptor(obj, sym).enumerable;
  });
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _chai = __webpack_require__(17);

var _parseReftest = __webpack_require__(41);

var _parseReftest2 = _interopRequireDefault(_parseReftest);

var _reftests = __webpack_require__(42);

var _reftests2 = _interopRequireDefault(_reftests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DOWNLOAD_REFTESTS = true;

var downloadResult = function downloadResult(filename, data) {
    var downloadUrl = URL.createObjectURL(new Blob([data], { type: 'text/plain' }));
    var a = document.createElement('a');
    a.href = downloadUrl;
    a.download = filename;

    setTimeout(function () {
        a.click();
        URL.revokeObjectURL(downloadUrl);
        document.body.removeChild(a);
    }, 100);

    document.body.appendChild(a);
};

var assertPath = function assertPath(result, expected, desc) {
    (0, _chai.expect)(result.length).to.equal(expected.length, desc + ' path length');

    expected.forEach(function (e, i) {
        var r = result[i];
        (0, _chai.expect)(r.type).to.equal(e.type, desc + ' type');
        if (Array.isArray(r)) {
            assertPath(r, e, desc);
        } else {
            switch (r.type) {
                case 'Circle':
                    (0, _chai.expect)(r.x).to.be.closeTo(e.x, 10, desc + ' Circle #' + (i + 1) + ' x');
                    (0, _chai.expect)(r.y).to.be.closeTo(e.y, 10, desc + ' Circle #' + (i + 1) + ' y');
                    (0, _chai.expect)(r.r).to.equal(e.r, desc + ' Circle #' + (i + 1) + ' r');
                    break;
                case 'Vector':
                    (0, _chai.expect)(r.x).to.be.closeTo(e.x, 10, desc + ' vector #' + (i + 1) + ' x');
                    (0, _chai.expect)(r.y).to.be.closeTo(e.y, 10, desc + ' vector #' + (i + 1) + ' y');
                    break;
                case 'BezierCurve':
                    (0, _chai.expect)(r.x0).to.be.closeTo(e.x0, 10, desc + ' beziercurve #' + (i + 1) + ' x0');
                    (0, _chai.expect)(r.y0).to.be.closeTo(e.y0, 10, desc + ' beziercurve #' + (i + 1) + ' y0');
                    (0, _chai.expect)(r.x1).to.be.closeTo(e.x1, 10, desc + ' beziercurve #' + (i + 1) + ' x1');
                    (0, _chai.expect)(r.y1).to.be.closeTo(e.y1, 10, desc + ' beziercurve #' + (i + 1) + ' y1');
                    (0, _chai.expect)(r.cx0).to.be.closeTo(e.cx0, 10, desc + ' beziercurve #' + (i + 1) + ' cx0');
                    (0, _chai.expect)(r.cy0).to.be.closeTo(e.cy0, 10, desc + ' beziercurve #' + (i + 1) + ' cy0');
                    (0, _chai.expect)(r.cx1).to.be.closeTo(e.cx1, 10, desc + ' beziercurve #' + (i + 1) + ' cx1');
                    (0, _chai.expect)(r.cy1).to.be.closeTo(e.cy1, 10, desc + ' beziercurve #' + (i + 1) + ' cy1');
                    break;
                default:
                    throw new Error('Unknown path type ' + r.type);
            }
        }
    });
};

(function () {
    var testRunnerUrl = location.href;
    var hasHistoryApi = typeof window.history !== 'undefined' && typeof window.history.replaceState !== 'undefined';

    if (typeof _reftests2.default === 'undefined') {
        it('Test harness prerequisite check', function () {
            throw new Error('No reftests list defined, run "npm run create-reftest-list" to create it');
        });
    } else {
        Object.keys(_reftests2.default).forEach(function (url) {
            describe(url, function () {
                this.timeout(30000);
                var windowWidth = 800;
                var windowHeight = 600;
                var testContainer = document.createElement('iframe');
                var REFTEST = _reftests2.default[url];
                testContainer.width = windowWidth;
                testContainer.height = windowHeight;
                testContainer.style.visibility = 'hidden';
                testContainer.style.position = 'fixed';
                testContainer.style.left = '10000px';

                before(function (done) {
                    testContainer.onload = function () {
                        return done();
                    };

                    testContainer.src = url + '?selenium&run=false&reftest&' + Math.random();
                    if (hasHistoryApi) {
                        // Chrome does not resolve relative background urls correctly inside of a nested iframe
                        history.replaceState(null, '', url);
                    }

                    document.body.appendChild(testContainer);
                });
                after(function () {
                    if (hasHistoryApi) {
                        history.replaceState(null, '', testRunnerUrl);
                    }
                    document.body.removeChild(testContainer);
                });
                it('Should render untainted canvas', function () {
                    return testContainer.contentWindow.html2canvas(testContainer.contentWindow.document.documentElement, {
                        removeContainer: true,
                        target: [new testContainer.contentWindow.html2canvas.CanvasRenderer(), new testContainer.contentWindow.RefTestRenderer()]
                    }).then(function (_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            canvas = _ref2[0],
                            result = _ref2[1];

                        try {
                            canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
                        } catch (e) {
                            return Promise.reject('Canvas is tainted');
                        }

                        var delta = 10;

                        if (REFTEST) {
                            var RESULTS = (0, _parseReftest2.default)(result);
                            REFTEST.forEach(function (_ref3, i) {
                                var action = _ref3.action,
                                    line = _ref3.line,
                                    args = _objectWithoutProperties(_ref3, ['action', 'line']);

                                var RESULT = RESULTS[i];
                                (0, _chai.expect)(RESULT.action).to.equal(action, 'Line ' + line);

                                var desc = 'Line ' + line + ' ' + action;

                                switch (action) {
                                    case 'Window':
                                        (0, _chai.expect)(RESULT.width).to.equal(args.width, desc + ' width');
                                        (0, _chai.expect)(RESULT.height).to.be.closeTo(args.height, delta, desc + ' height');
                                        break;

                                    case 'Rectangle':
                                        (0, _chai.expect)(RESULT.x).to.equal(args.x, desc + ' x');
                                        (0, _chai.expect)(RESULT.y).to.equal(args.y, desc + ' y');
                                        (0, _chai.expect)(RESULT.width).to.equal(args.width, desc + ' width');
                                        (0, _chai.expect)(RESULT.height).to.be.closeTo(args.height, delta, desc + ' height');
                                        break;

                                    case 'Fill':
                                        (0, _chai.expect)(RESULT.color).to.equal(args.color, desc + ' color');
                                        break;

                                    case 'Opacity':
                                        (0, _chai.expect)(RESULT.opacity).to.equal(args.opacity, desc + ' opacity');
                                        break;

                                    case 'Text':
                                        (0, _chai.expect)(RESULT.font).to.equal(args.font, desc + ' font');
                                        break;

                                    case 'T':
                                        (0, _chai.expect)(RESULT.x).to.be.closeTo(args.x, 10, desc + ' x');
                                        (0, _chai.expect)(RESULT.y).to.be.closeTo(args.y, 10, desc + ' y');
                                        (0, _chai.expect)(RESULT.text).to.equal(args.text, desc + ' text');
                                        break;

                                    case 'Transform':
                                        (0, _chai.expect)(RESULT.x).to.be.closeTo(args.x, 10, desc + ' x');
                                        (0, _chai.expect)(RESULT.y).to.be.closeTo(args.y, 10, desc + ' y');
                                        (0, _chai.expect)(RESULT.matrix).to.equal(args.matrix, desc + ' matrix');
                                        break;

                                    case 'Repeat':
                                        (0, _chai.expect)(RESULT.x).to.be.closeTo(args.x, 10, desc + ' x');
                                        (0, _chai.expect)(RESULT.y).to.be.closeTo(args.y, 10, desc + ' y');
                                        (0, _chai.expect)(RESULT.width).to.be.closeTo(args.width, 3, desc + ' width');
                                        (0, _chai.expect)(RESULT.height).to.be.closeTo(args.height, 3, desc + ' height');
                                        (0, _chai.expect)(RESULT.imageSrc).to.equal(args.imageSrc, desc + ' imageSrc');
                                        assertPath(RESULT.path, args.path, desc);
                                        break;

                                    case 'Gradient':
                                        (0, _chai.expect)(RESULT.x).to.be.closeTo(args.x, 10, desc + ' x');
                                        (0, _chai.expect)(RESULT.y).to.be.closeTo(args.y, 10, desc + ' y');
                                        (0, _chai.expect)(RESULT.x0).to.be.closeTo(args.x0, 5, desc + ' x0');
                                        (0, _chai.expect)(RESULT.y0).to.be.closeTo(args.y0, 5, desc + ' y0');
                                        (0, _chai.expect)(RESULT.x1).to.be.closeTo(args.x1, 5, desc + ' x1');
                                        (0, _chai.expect)(RESULT.y1).to.be.closeTo(args.y1, 5, desc + ' y1');
                                        (0, _chai.expect)(RESULT.stops).to.equal(args.stops, desc + ' stops');
                                        (0, _chai.expect)(RESULT.width).to.equal(args.width, desc + ' width');
                                        (0, _chai.expect)(RESULT.height).to.equal(args.height, desc + ' height');

                                        break;

                                    case 'Draw image':
                                        (0, _chai.expect)(RESULT.imageSrc).to.equal(args.imageSrc, desc + ' stops');
                                        (0, _chai.expect)(RESULT.sx).to.equal(args.sx, desc + ' sx');
                                        (0, _chai.expect)(RESULT.sy).to.equal(args.sy, desc + ' sy');
                                        (0, _chai.expect)(RESULT.dx).to.equal(args.dx, desc + ' dx');
                                        (0, _chai.expect)(RESULT.dy).to.equal(args.dy, desc + ' dy');
                                        (0, _chai.expect)(RESULT.sw).to.equal(args.sw, desc + ' sw');
                                        (0, _chai.expect)(RESULT.sh).to.equal(args.sh, desc + ' sh');
                                        (0, _chai.expect)(RESULT.dw).to.equal(args.dw, desc + ' dw');
                                        (0, _chai.expect)(RESULT.dh).to.equal(args.dh, desc + ' dh');
                                        break;

                                    case 'Clip':
                                        assertPath(RESULT.path, args.path, desc);
                                        break;

                                    case 'Shape':
                                        (0, _chai.expect)(RESULT.color).to.equal(args.color, desc + ' color');
                                        assertPath(RESULT.path, args.path, desc);
                                        break;

                                    default:
                                        console.log(RESULT);
                                        throw new Error('Unrecognized action ' + action);
                                }
                            });
                        } else if (DOWNLOAD_REFTESTS) {
                            downloadResult(url.slice(url.lastIndexOf('/') + 1).replace(/\.html$/i, '.txt'), result);
                        }
                    });
                });
            });
        });
    }
})();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Dependencies that are used for multiple exports are required here only once
 */

var pathval = __webpack_require__(19);

/*!
 * test utility
 */

exports.test = __webpack_require__(20);

/*!
 * type utility
 */

exports.type = __webpack_require__(9);

/*!
 * expectTypes utility
 */
exports.expectTypes = __webpack_require__(21);

/*!
 * message utility
 */

exports.getMessage = __webpack_require__(22);

/*!
 * actual utility
 */

exports.getActual = __webpack_require__(11);

/*!
 * Inspect util
 */

exports.inspect = __webpack_require__(4);

/*!
 * Object Display util
 */

exports.objDisplay = __webpack_require__(14);

/*!
 * Flag utility
 */

exports.flag = __webpack_require__(0);

/*!
 * Flag transferring utility
 */

exports.transferFlags = __webpack_require__(3);

/*!
 * Deep equal utility
 */

exports.eql = __webpack_require__(24);

/*!
 * Deep path info
 */

exports.getPathInfo = pathval.getPathInfo;

/*!
 * Check if a property exists
 */

exports.hasProperty = pathval.hasProperty;

/*!
 * Function name
 */

exports.getName = __webpack_require__(12);

/*!
 * add Property
 */

exports.addProperty = __webpack_require__(26);

/*!
 * add Method
 */

exports.addMethod = __webpack_require__(27);

/*!
 * overwrite Property
 */

exports.overwriteProperty = __webpack_require__(28);

/*!
 * overwrite Method
 */

exports.overwriteMethod = __webpack_require__(29);

/*!
 * Add a chainable method
 */

exports.addChainableMethod = __webpack_require__(30);

/*!
 * Overwrite chainable method
 */

exports.overwriteChainableMethod = __webpack_require__(31);

/*!
 * Compare by inspect method
 */

exports.compareByInspect = __webpack_require__(32);

/*!
 * Get own enumerable property symbols method
 */

exports.getOwnEnumerablePropertySymbols = __webpack_require__(15);

/*!
 * Get own enumerable properties method
 */

exports.getOwnEnumerableProperties = __webpack_require__(33);

/*!
 * Checks error against a given set of criteria
 */

exports.checkError = __webpack_require__(34);

/*!
 * Proxify util
 */

exports.proxify = __webpack_require__(7);

/*!
 * addLengthGuard util
 */

exports.addLengthGuard = __webpack_require__(6);

/*!
 * isProxyEnabled helper
 */

exports.isProxyEnabled = __webpack_require__(5);

/*!
 * isNaN method
 */

exports.isNaN = __webpack_require__(35);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* !
 * Chai - pathval utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * @see https://github.com/logicalparadox/filtr
 * MIT Licensed
 */

/**
 * ### .hasProperty(object, name)
 *
 * This allows checking whether an object has own
 * or inherited from prototype chain named property.
 *
 * Basically does the same thing as the `in`
 * operator but works properly with null/undefined values
 * and other primitives.
 *
 *     var obj = {
 *         arr: ['a', 'b', 'c']
 *       , str: 'Hello'
 *     }
 *
 * The following would be the results.
 *
 *     hasProperty(obj, 'str');  // true
 *     hasProperty(obj, 'constructor');  // true
 *     hasProperty(obj, 'bar');  // false
 *
 *     hasProperty(obj.str, 'length'); // true
 *     hasProperty(obj.str, 1);  // true
 *     hasProperty(obj.str, 5);  // false
 *
 *     hasProperty(obj.arr, 'length');  // true
 *     hasProperty(obj.arr, 2);  // true
 *     hasProperty(obj.arr, 3);  // false
 *
 * @param {Object} object
 * @param {String|Symbol} name
 * @returns {Boolean} whether it exists
 * @namespace Utils
 * @name hasProperty
 * @api public
 */

function hasProperty(obj, name) {
  if (typeof obj === 'undefined' || obj === null) {
    return false;
  }

  // The `in` operator does not work with primitives.
  return name in Object(obj);
}

/* !
 * ## parsePath(path)
 *
 * Helper function used to parse string object
 * paths. Use in conjunction with `internalGetPathValue`.
 *
 *      var parsed = parsePath('myobject.property.subprop');
 *
 * ### Paths:
 *
 * * Can be infinitely deep and nested.
 * * Arrays are also valid using the formal `myobject.document[3].property`.
 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
 *
 * @param {String} path
 * @returns {Object} parsed
 * @api private
 */

function parsePath(path) {
  var str = path.replace(/([^\\])\[/g, '$1.[');
  var parts = str.match(/(\\\.|[^.]+?)+/g);
  return parts.map(function mapMatches(value) {
    var regexp = /^\[(\d+)\]$/;
    var mArr = regexp.exec(value);
    var parsed = null;
    if (mArr) {
      parsed = { i: parseFloat(mArr[1]) };
    } else {
      parsed = { p: value.replace(/\\([.\[\]])/g, '$1') };
    }

    return parsed;
  });
}

/* !
 * ## internalGetPathValue(obj, parsed[, pathDepth])
 *
 * Helper companion function for `.parsePath` that returns
 * the value located at the parsed address.
 *
 *      var value = getPathValue(obj, parsed);
 *
 * @param {Object} object to search against
 * @param {Object} parsed definition from `parsePath`.
 * @param {Number} depth (nesting level) of the property we want to retrieve
 * @returns {Object|Undefined} value
 * @api private
 */

function internalGetPathValue(obj, parsed, pathDepth) {
  var temporaryValue = obj;
  var res = null;
  pathDepth = (typeof pathDepth === 'undefined' ? parsed.length : pathDepth);

  for (var i = 0; i < pathDepth; i++) {
    var part = parsed[i];
    if (temporaryValue) {
      if (typeof part.p === 'undefined') {
        temporaryValue = temporaryValue[part.i];
      } else {
        temporaryValue = temporaryValue[part.p];
      }

      if (i === (pathDepth - 1)) {
        res = temporaryValue;
      }
    }
  }

  return res;
}

/* !
 * ## internalSetPathValue(obj, value, parsed)
 *
 * Companion function for `parsePath` that sets
 * the value located at a parsed address.
 *
 *  internalSetPathValue(obj, 'value', parsed);
 *
 * @param {Object} object to search and define on
 * @param {*} value to use upon set
 * @param {Object} parsed definition from `parsePath`
 * @api private
 */

function internalSetPathValue(obj, val, parsed) {
  var tempObj = obj;
  var pathDepth = parsed.length;
  var part = null;
  // Here we iterate through every part of the path
  for (var i = 0; i < pathDepth; i++) {
    var propName = null;
    var propVal = null;
    part = parsed[i];

    // If it's the last part of the path, we set the 'propName' value with the property name
    if (i === (pathDepth - 1)) {
      propName = typeof part.p === 'undefined' ? part.i : part.p;
      // Now we set the property with the name held by 'propName' on object with the desired val
      tempObj[propName] = val;
    } else if (typeof part.p !== 'undefined' && tempObj[part.p]) {
      tempObj = tempObj[part.p];
    } else if (typeof part.i !== 'undefined' && tempObj[part.i]) {
      tempObj = tempObj[part.i];
    } else {
      // If the obj doesn't have the property we create one with that name to define it
      var next = parsed[i + 1];
      // Here we set the name of the property which will be defined
      propName = typeof part.p === 'undefined' ? part.i : part.p;
      // Here we decide if this property will be an array or a new object
      propVal = typeof next.p === 'undefined' ? [] : {};
      tempObj[propName] = propVal;
      tempObj = tempObj[propName];
    }
  }
}

/**
 * ### .getPathInfo(object, path)
 *
 * This allows the retrieval of property info in an
 * object given a string path.
 *
 * The path info consists of an object with the
 * following properties:
 *
 * * parent - The parent object of the property referenced by `path`
 * * name - The name of the final property, a number if it was an array indexer
 * * value - The value of the property, if it exists, otherwise `undefined`
 * * exists - Whether the property exists or not
 *
 * @param {Object} object
 * @param {String} path
 * @returns {Object} info
 * @namespace Utils
 * @name getPathInfo
 * @api public
 */

function getPathInfo(obj, path) {
  var parsed = parsePath(path);
  var last = parsed[parsed.length - 1];
  var info = {
    parent: parsed.length > 1 ? internalGetPathValue(obj, parsed, parsed.length - 1) : obj,
    name: last.p || last.i,
    value: internalGetPathValue(obj, parsed),
  };
  info.exists = hasProperty(info.parent, info.name);

  return info;
}

/**
 * ### .getPathValue(object, path)
 *
 * This allows the retrieval of values in an
 * object given a string path.
 *
 *     var obj = {
 *         prop1: {
 *             arr: ['a', 'b', 'c']
 *           , str: 'Hello'
 *         }
 *       , prop2: {
 *             arr: [ { nested: 'Universe' } ]
 *           , str: 'Hello again!'
 *         }
 *     }
 *
 * The following would be the results.
 *
 *     getPathValue(obj, 'prop1.str'); // Hello
 *     getPathValue(obj, 'prop1.att[2]'); // b
 *     getPathValue(obj, 'prop2.arr[0].nested'); // Universe
 *
 * @param {Object} object
 * @param {String} path
 * @returns {Object} value or `undefined`
 * @namespace Utils
 * @name getPathValue
 * @api public
 */

function getPathValue(obj, path) {
  var info = getPathInfo(obj, path);
  return info.value;
}

/**
 * ### .setPathValue(object, path, value)
 *
 * Define the value in an object at a given string path.
 *
 * ```js
 * var obj = {
 *     prop1: {
 *         arr: ['a', 'b', 'c']
 *       , str: 'Hello'
 *     }
 *   , prop2: {
 *         arr: [ { nested: 'Universe' } ]
 *       , str: 'Hello again!'
 *     }
 * };
 * ```
 *
 * The following would be acceptable.
 *
 * ```js
 * var properties = require('tea-properties');
 * properties.set(obj, 'prop1.str', 'Hello Universe!');
 * properties.set(obj, 'prop1.arr[2]', 'B');
 * properties.set(obj, 'prop2.arr[0].nested.value', { hello: 'universe' });
 * ```
 *
 * @param {Object} object
 * @param {String} path
 * @param {Mixed} value
 * @api private
 */

function setPathValue(obj, path, val) {
  var parsed = parsePath(path);
  internalSetPathValue(obj, val, parsed);
  return obj;
}

module.exports = {
  hasProperty: hasProperty,
  getPathInfo: getPathInfo,
  getPathValue: getPathValue,
  setPathValue: setPathValue,
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var flag = __webpack_require__(0);

/**
 * ### .test(object, expression)
 *
 * Test and object for expression.
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name test
 */

module.exports = function test(obj, args) {
  var negate = flag(obj, 'negate')
    , expr = args[0];
  return negate ? !expr : expr;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .expectTypes(obj, types)
 *
 * Ensures that the object being tested against is of a valid type.
 *
 *     utils.expectTypes(this, ['array', 'object', 'string']);
 *
 * @param {Mixed} obj constructed Assertion
 * @param {Array} type A list of allowed types for this assertion
 * @namespace Utils
 * @name expectTypes
 * @api public
 */

var AssertionError = __webpack_require__(8);
var flag = __webpack_require__(0);
var type = __webpack_require__(9);

module.exports = function expectTypes(obj, types) {
  var flagMsg = flag(obj, 'message');
  var ssfi = flag(obj, 'ssfi');

  flagMsg = flagMsg ? flagMsg + ': ' : '';

  obj = flag(obj, 'object');
  types = types.map(function (t) { return t.toLowerCase(); });
  types.sort();

  // Transforms ['lorem', 'ipsum'] into 'a lorem, or an ipsum'
  var str = types.map(function (t, index) {
    var art = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(t.charAt(0)) ? 'an' : 'a';
    var or = types.length > 1 && index === types.length - 1 ? 'or ' : '';
    return or + art + ' ' + t;
  }).join(', ');

  var objType = type(obj).toLowerCase();

  if (!types.some(function (expected) { return objType === expected; })) {
    throw new AssertionError(
      flagMsg + 'object tested must be ' + str + ', but ' + objType + ' given',
      undefined,
      ssfi
    );
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var flag = __webpack_require__(0)
  , getActual = __webpack_require__(11)
  , inspect = __webpack_require__(4)
  , objDisplay = __webpack_require__(14);

/**
 * ### .getMessage(object, message, negateMessage)
 *
 * Construct the error message based on flags
 * and template tags. Template tags will return
 * a stringified inspection of the object referenced.
 *
 * Message template tags:
 * - `#{this}` current asserted object
 * - `#{act}` actual value
 * - `#{exp}` expected value
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name getMessage
 * @api public
 */

module.exports = function getMessage(obj, args) {
  var negate = flag(obj, 'negate')
    , val = flag(obj, 'object')
    , expected = args[3]
    , actual = getActual(obj, args)
    , msg = negate ? args[2] : args[1]
    , flagMsg = flag(obj, 'message');

  if(typeof msg === "function") msg = msg();
  msg = msg || '';
  msg = msg
    .replace(/#\{this\}/g, function () { return objDisplay(val); })
    .replace(/#\{act\}/g, function () { return objDisplay(actual); })
    .replace(/#\{exp\}/g, function () { return objDisplay(expected); });

  return flagMsg ? flagMsg + ': ' + msg : msg;
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getEnumerableProperties(object)
 *
 * This allows the retrieval of enumerable property names of an object,
 * inherited or not.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getEnumerableProperties
 * @api public
 */

module.exports = function getEnumerableProperties(object) {
  var result = [];
  for (var name in object) {
    result.push(name);
  }
  return result;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* globals Symbol: true, Uint8Array: true, WeakMap: true */
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var type = __webpack_require__(25);
function FakeMap() {
  this.clear();
}
FakeMap.prototype = {
  clear: function clearMap() {
    this.keys = [];
    this.values = [];
    return this;
  },
  set: function setMap(key, value) {
    var index = this.keys.indexOf(key);
    if (index >= 0) {
      this.values[index] = value;
    } else {
      this.keys.push(key);
      this.values.push(value);
    }
    return this;
  },
  get: function getMap(key) {
    return this.values[this.keys.indexOf(key)];
  },
  delete: function deleteMap(key) {
    var index = this.keys.indexOf(key);
    if (index >= 0) {
      this.values = this.values.slice(0, index).concat(this.values.slice(index + 1));
      this.keys = this.keys.slice(0, index).concat(this.keys.slice(index + 1));
    }
    return this;
  },
};

var MemoizeMap = null;
if (typeof WeakMap === 'function') {
  MemoizeMap = WeakMap;
} else {
  MemoizeMap = FakeMap;
}

/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/
function memoizeCompare(leftHandOperand, rightHandOperand, memoizeMap) {
  // Technically, WeakMap keys can *only* be objects, not primitives.
  if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    return null;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    var result = leftHandMap.get(rightHandOperand);
    if (typeof result === 'boolean') {
      return result;
    }
  }
  return null;
}

/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/
function memoizeSet(leftHandOperand, rightHandOperand, memoizeMap, result) {
  // Technically, WeakMap keys can *only* be objects, not primitives.
  if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    return;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    leftHandMap.set(rightHandOperand, result);
  } else {
    leftHandMap = new MemoizeMap();
    leftHandMap.set(rightHandOperand, result);
    memoizeMap.set(leftHandOperand, leftHandMap);
  }
}

/*!
 * Primary Export
 */

module.exports = deepEqual;
module.exports.MemoizeMap = MemoizeMap;

/**
 * Assert deeply nested sameValue equality between two objects of any type.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
 */
function deepEqual(leftHandOperand, rightHandOperand, options) {
  // If we have a comparator, we can't assume anything; so bail to its check first.
  if (options && options.comparator) {
    return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
  }

  var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
  if (simpleResult !== null) {
    return simpleResult;
  }

  // Deeper comparisons are pushed through to a larger function
  return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
}

/**
 * Many comparisons can be canceled out early via simple equality or primitive checks.
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @return {Boolean|null} equal match
 */
function simpleEqual(leftHandOperand, rightHandOperand) {
  // Equal references (except for Numbers) can be returned early
  if (leftHandOperand === rightHandOperand) {
    // Handle +-0 cases
    return leftHandOperand !== 0 || 1 / leftHandOperand === 1 / rightHandOperand;
  }

  // handle NaN cases
  if (
    leftHandOperand !== leftHandOperand && // eslint-disable-line no-self-compare
    rightHandOperand !== rightHandOperand // eslint-disable-line no-self-compare
  ) {
    return true;
  }

  // Anything that is not an 'object', i.e. symbols, functions, booleans, numbers,
  // strings, and undefined, can be compared by reference.
  if (isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    // Easy out b/c it would have passed the first equality check
    return false;
  }
  return null;
}

/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/
function extensiveDeepEqual(leftHandOperand, rightHandOperand, options) {
  options = options || {};
  options.memoize = options.memoize === false ? false : options.memoize || new MemoizeMap();
  var comparator = options && options.comparator;

  // Check if a memoized result exists.
  var memoizeResultLeft = memoizeCompare(leftHandOperand, rightHandOperand, options.memoize);
  if (memoizeResultLeft !== null) {
    return memoizeResultLeft;
  }
  var memoizeResultRight = memoizeCompare(rightHandOperand, leftHandOperand, options.memoize);
  if (memoizeResultRight !== null) {
    return memoizeResultRight;
  }

  // If a comparator is present, use it.
  if (comparator) {
    var comparatorResult = comparator(leftHandOperand, rightHandOperand);
    // Comparators may return null, in which case we want to go back to default behavior.
    if (comparatorResult === false || comparatorResult === true) {
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, comparatorResult);
      return comparatorResult;
    }
    // To allow comparators to override *any* behavior, we ran them first. Since it didn't decide
    // what to do, we need to make sure to return the basic tests first before we move on.
    var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
    if (simpleResult !== null) {
      // Don't memoize this, it takes longer to set/retrieve than to just compare.
      return simpleResult;
    }
  }

  var leftHandType = type(leftHandOperand);
  if (leftHandType !== type(rightHandOperand)) {
    memoizeSet(leftHandOperand, rightHandOperand, options.memoize, false);
    return false;
  }

  // Temporarily set the operands in the memoize object to prevent blowing the stack
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, true);

  var result = extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options);
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, result);
  return result;
}

function extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options) {
  switch (leftHandType) {
    case 'String':
    case 'Number':
    case 'Boolean':
    case 'Date':
      // If these types are their instance types (e.g. `new Number`) then re-deepEqual against their values
      return deepEqual(leftHandOperand.valueOf(), rightHandOperand.valueOf());
    case 'Promise':
    case 'Symbol':
    case 'function':
    case 'WeakMap':
    case 'WeakSet':
    case 'Error':
      return leftHandOperand === rightHandOperand;
    case 'Arguments':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'Array':
      return iterableEqual(leftHandOperand, rightHandOperand, options);
    case 'RegExp':
      return regexpEqual(leftHandOperand, rightHandOperand);
    case 'Generator':
      return generatorEqual(leftHandOperand, rightHandOperand, options);
    case 'DataView':
      return iterableEqual(new Uint8Array(leftHandOperand.buffer), new Uint8Array(rightHandOperand.buffer), options);
    case 'ArrayBuffer':
      return iterableEqual(new Uint8Array(leftHandOperand), new Uint8Array(rightHandOperand), options);
    case 'Set':
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    case 'Map':
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    default:
      return objectEqual(leftHandOperand, rightHandOperand, options);
  }
}

/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */

function regexpEqual(leftHandOperand, rightHandOperand) {
  return leftHandOperand.toString() === rightHandOperand.toString();
}

/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function entriesEqual(leftHandOperand, rightHandOperand, options) {
  // IE11 doesn't support Set#entries or Set#@@iterator, so we need manually populate using Set#forEach
  if (leftHandOperand.size !== rightHandOperand.size) {
    return false;
  }
  if (leftHandOperand.size === 0) {
    return true;
  }
  var leftHandItems = [];
  var rightHandItems = [];
  leftHandOperand.forEach(function gatherEntries(key, value) {
    leftHandItems.push([ key, value ]);
  });
  rightHandOperand.forEach(function gatherEntries(key, value) {
    rightHandItems.push([ key, value ]);
  });
  return iterableEqual(leftHandItems.sort(), rightHandItems.sort(), options);
}

/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function iterableEqual(leftHandOperand, rightHandOperand, options) {
  var length = leftHandOperand.length;
  if (length !== rightHandOperand.length) {
    return false;
  }
  if (length === 0) {
    return true;
  }
  var index = -1;
  while (++index < length) {
    if (deepEqual(leftHandOperand[index], rightHandOperand[index], options) === false) {
      return false;
    }
  }
  return true;
}

/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function generatorEqual(leftHandOperand, rightHandOperand, options) {
  return iterableEqual(getGeneratorEntries(leftHandOperand), getGeneratorEntries(rightHandOperand), options);
}

/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */
function hasIteratorFunction(target) {
  return typeof Symbol !== 'undefined' &&
    typeof target === 'object' &&
    typeof Symbol.iterator !== 'undefined' &&
    typeof target[Symbol.iterator] === 'function';
}

/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function getIteratorEntries(target) {
  if (hasIteratorFunction(target)) {
    try {
      return getGeneratorEntries(target[Symbol.iterator]());
    } catch (iteratorError) {
      return [];
    }
  }
  return [];
}

/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */
function getGeneratorEntries(generator) {
  var generatorResult = generator.next();
  var accumulator = [ generatorResult.value ];
  while (generatorResult.done === false) {
    generatorResult = generator.next();
    accumulator.push(generatorResult.value);
  }
  return accumulator;
}

/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */
function getEnumerableKeys(target) {
  var keys = [];
  for (var key in target) {
    keys.push(key);
  }
  return keys;
}

/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function keysEqual(leftHandOperand, rightHandOperand, keys, options) {
  var length = keys.length;
  if (length === 0) {
    return true;
  }
  for (var i = 0; i < length; i += 1) {
    if (deepEqual(leftHandOperand[keys[i]], rightHandOperand[keys[i]], options) === false) {
      return false;
    }
  }
  return true;
}

/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function objectEqual(leftHandOperand, rightHandOperand, options) {
  var leftHandKeys = getEnumerableKeys(leftHandOperand);
  var rightHandKeys = getEnumerableKeys(rightHandOperand);
  if (leftHandKeys.length && leftHandKeys.length === rightHandKeys.length) {
    leftHandKeys.sort();
    rightHandKeys.sort();
    if (iterableEqual(leftHandKeys, rightHandKeys) === false) {
      return false;
    }
    return keysEqual(leftHandOperand, rightHandOperand, leftHandKeys, options);
  }

  var leftHandEntries = getIteratorEntries(leftHandOperand);
  var rightHandEntries = getIteratorEntries(rightHandOperand);
  if (leftHandEntries.length && leftHandEntries.length === rightHandEntries.length) {
    leftHandEntries.sort();
    rightHandEntries.sort();
    return iterableEqual(leftHandEntries, rightHandEntries, options);
  }

  if (leftHandKeys.length === 0 &&
      leftHandEntries.length === 0 &&
      rightHandKeys.length === 0 &&
      rightHandEntries.length === 0) {
    return true;
  }

  return false;
}

/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */
function isPrimitive(value) {
  return value === null || typeof value !== 'object';
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/* !
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var getPrototypeOfExists = typeof Object.getPrototypeOf === 'function';
var promiseExists = typeof Promise === 'function';
var globalObject = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : self; // eslint-disable-line
var isDom = 'location' in globalObject && 'document' in globalObject;
var htmlElementExists = typeof HTMLElement !== 'undefined';
var isArrayExists = typeof Array.isArray === 'function';
var symbolExists = typeof Symbol !== 'undefined';
var mapExists = typeof Map !== 'undefined';
var setExists = typeof Set !== 'undefined';
var weakMapExists = typeof WeakMap !== 'undefined';
var weakSetExists = typeof WeakSet !== 'undefined';
var dataViewExists = typeof DataView !== 'undefined';
var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== 'undefined';
var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== 'undefined';
var setEntriesExists = setExists && typeof Set.prototype.entries === 'function';
var mapEntriesExists = mapExists && typeof Map.prototype.entries === 'function';
var setIteratorPrototype = getPrototypeOfExists && setEntriesExists && Object.getPrototypeOf(new Set().entries());
var mapIteratorPrototype = getPrototypeOfExists && mapEntriesExists && Object.getPrototypeOf(new Map().entries());
var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
var stringIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(''[Symbol.iterator]());
var toStringLeftSliceLength = 8;
var toStringRightSliceLength = -1;
/**
 * ### typeOf (obj)
 *
 * Uses `Object.prototype.toString` to determine the type of an object,
 * normalising behaviour across engine versions & well optimised.
 *
 * @param {Mixed} object
 * @return {String} object type
 * @api public
 */
module.exports = function typeDetect(obj) {
  /* ! Speed optimisation
   * Pre:
   *   string literal     x 3,039,035 ops/sec ±1.62% (78 runs sampled)
   *   boolean literal    x 1,424,138 ops/sec ±4.54% (75 runs sampled)
   *   number literal     x 1,653,153 ops/sec ±1.91% (82 runs sampled)
   *   undefined          x 9,978,660 ops/sec ±1.92% (75 runs sampled)
   *   function           x 2,556,769 ops/sec ±1.73% (77 runs sampled)
   * Post:
   *   string literal     x 38,564,796 ops/sec ±1.15% (79 runs sampled)
   *   boolean literal    x 31,148,940 ops/sec ±1.10% (79 runs sampled)
   *   number literal     x 32,679,330 ops/sec ±1.90% (78 runs sampled)
   *   undefined          x 32,363,368 ops/sec ±1.07% (82 runs sampled)
   *   function           x 31,296,870 ops/sec ±0.96% (83 runs sampled)
   */
  var typeofObj = typeof obj;
  if (typeofObj !== 'object') {
    return typeofObj;
  }

  /* ! Speed optimisation
   * Pre:
   *   null               x 28,645,765 ops/sec ±1.17% (82 runs sampled)
   * Post:
   *   null               x 36,428,962 ops/sec ±1.37% (84 runs sampled)
   */
  if (obj === null) {
    return 'null';
  }

  /* ! Spec Conformance
   * Test: `Object.prototype.toString.call(window)``
   *  - Node === "[object global]"
   *  - Chrome === "[object global]"
   *  - Firefox === "[object Window]"
   *  - PhantomJS === "[object Window]"
   *  - Safari === "[object Window]"
   *  - IE 11 === "[object Window]"
   *  - IE Edge === "[object Window]"
   * Test: `Object.prototype.toString.call(this)``
   *  - Chrome Worker === "[object global]"
   *  - Firefox Worker === "[object DedicatedWorkerGlobalScope]"
   *  - Safari Worker === "[object DedicatedWorkerGlobalScope]"
   *  - IE 11 Worker === "[object WorkerGlobalScope]"
   *  - IE Edge Worker === "[object WorkerGlobalScope]"
   */
  if (obj === globalObject) {
    return 'global';
  }

  /* ! Speed optimisation
   * Pre:
   *   array literal      x 2,888,352 ops/sec ±0.67% (82 runs sampled)
   * Post:
   *   array literal      x 22,479,650 ops/sec ±0.96% (81 runs sampled)
   */
  if (isArrayExists && Array.isArray(obj)) {
    return 'Array';
  }

  if (isDom) {
    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/browsers.html#location)
     * WhatWG HTML$7.7.3 - The `Location` interface
     * Test: `Object.prototype.toString.call(window.location)``
     *  - IE <=11 === "[object Object]"
     *  - IE Edge <=13 === "[object Object]"
     */
    if (obj === globalObject.location) {
      return 'Location';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#document)
     * WhatWG HTML$3.1.1 - The `Document` object
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     *       WhatWG HTML states:
     *         > For historical reasons, Window objects must also have a
     *         > writable, configurable, non-enumerable property named
     *         > HTMLDocument whose value is the Document interface object.
     * Test: `Object.prototype.toString.call(document)``
     *  - Chrome === "[object HTMLDocument]"
     *  - Firefox === "[object HTMLDocument]"
     *  - Safari === "[object HTMLDocument]"
     *  - IE <=10 === "[object Document]"
     *  - IE 11 === "[object HTMLDocument]"
     *  - IE Edge <=13 === "[object HTMLDocument]"
     */
    if (obj === globalObject.document) {
      return 'Document';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#mimetypearray)
     * WhatWG HTML$8.6.1.5 - Plugins - Interface MimeTypeArray
     * Test: `Object.prototype.toString.call(navigator.mimeTypes)``
     *  - IE <=10 === "[object MSMimeTypesCollection]"
     */
    if (obj === (globalObject.navigator || {}).mimeTypes) {
      return 'MimeTypeArray';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
     * WhatWG HTML$8.6.1.5 - Plugins - Interface PluginArray
     * Test: `Object.prototype.toString.call(navigator.plugins)``
     *  - IE <=10 === "[object MSPluginsCollection]"
     */
    if (obj === (globalObject.navigator || {}).plugins) {
      return 'PluginArray';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
     * WhatWG HTML$4.4.4 - The `blockquote` element - Interface `HTMLQuoteElement`
     * Test: `Object.prototype.toString.call(document.createElement('blockquote'))``
     *  - IE <=10 === "[object HTMLBlockElement]"
     */
    if (htmlElementExists && obj instanceof HTMLElement && obj.tagName === 'BLOCKQUOTE') {
      return 'HTMLQuoteElement';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#htmltabledatacellelement)
     * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableDataCellElement`
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     * Test: Object.prototype.toString.call(document.createElement('td'))
     *  - Chrome === "[object HTMLTableCellElement]"
     *  - Firefox === "[object HTMLTableCellElement]"
     *  - Safari === "[object HTMLTableCellElement]"
     */
    if (htmlElementExists && obj instanceof HTMLElement && obj.tagName === 'TD') {
      return 'HTMLTableDataCellElement';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#htmltableheadercellelement)
     * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableHeaderCellElement`
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     * Test: Object.prototype.toString.call(document.createElement('th'))
     *  - Chrome === "[object HTMLTableCellElement]"
     *  - Firefox === "[object HTMLTableCellElement]"
     *  - Safari === "[object HTMLTableCellElement]"
     */
    if (htmlElementExists && obj instanceof HTMLElement && obj.tagName === 'TH') {
      return 'HTMLTableHeaderCellElement';
    }
  }

  /* ! Speed optimisation
  * Pre:
  *   Float64Array       x 625,644 ops/sec ±1.58% (80 runs sampled)
  *   Float32Array       x 1,279,852 ops/sec ±2.91% (77 runs sampled)
  *   Uint32Array        x 1,178,185 ops/sec ±1.95% (83 runs sampled)
  *   Uint16Array        x 1,008,380 ops/sec ±2.25% (80 runs sampled)
  *   Uint8Array         x 1,128,040 ops/sec ±2.11% (81 runs sampled)
  *   Int32Array         x 1,170,119 ops/sec ±2.88% (80 runs sampled)
  *   Int16Array         x 1,176,348 ops/sec ±5.79% (86 runs sampled)
  *   Int8Array          x 1,058,707 ops/sec ±4.94% (77 runs sampled)
  *   Uint8ClampedArray  x 1,110,633 ops/sec ±4.20% (80 runs sampled)
  * Post:
  *   Float64Array       x 7,105,671 ops/sec ±13.47% (64 runs sampled)
  *   Float32Array       x 5,887,912 ops/sec ±1.46% (82 runs sampled)
  *   Uint32Array        x 6,491,661 ops/sec ±1.76% (79 runs sampled)
  *   Uint16Array        x 6,559,795 ops/sec ±1.67% (82 runs sampled)
  *   Uint8Array         x 6,463,966 ops/sec ±1.43% (85 runs sampled)
  *   Int32Array         x 5,641,841 ops/sec ±3.49% (81 runs sampled)
  *   Int16Array         x 6,583,511 ops/sec ±1.98% (80 runs sampled)
  *   Int8Array          x 6,606,078 ops/sec ±1.74% (81 runs sampled)
  *   Uint8ClampedArray  x 6,602,224 ops/sec ±1.77% (83 runs sampled)
  */
  var stringTag = (symbolToStringTagExists && obj[Symbol.toStringTag]);
  if (typeof stringTag === 'string') {
    return stringTag;
  }

  if (getPrototypeOfExists) {
    var objPrototype = Object.getPrototypeOf(obj);
    /* ! Speed optimisation
    * Pre:
    *   regex literal      x 1,772,385 ops/sec ±1.85% (77 runs sampled)
    *   regex constructor  x 2,143,634 ops/sec ±2.46% (78 runs sampled)
    * Post:
    *   regex literal      x 3,928,009 ops/sec ±0.65% (78 runs sampled)
    *   regex constructor  x 3,931,108 ops/sec ±0.58% (84 runs sampled)
    */
    if (objPrototype === RegExp.prototype) {
      return 'RegExp';
    }

    /* ! Speed optimisation
    * Pre:
    *   date               x 2,130,074 ops/sec ±4.42% (68 runs sampled)
    * Post:
    *   date               x 3,953,779 ops/sec ±1.35% (77 runs sampled)
    */
    if (objPrototype === Date.prototype) {
      return 'Date';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-promise.prototype-@@tostringtag)
     * ES6$25.4.5.4 - Promise.prototype[@@toStringTag] should be "Promise":
     * Test: `Object.prototype.toString.call(Promise.resolve())``
     *  - Chrome <=47 === "[object Object]"
     *  - Edge <=20 === "[object Object]"
     *  - Firefox 29-Latest === "[object Promise]"
     *  - Safari 7.1-Latest === "[object Promise]"
     */
    if (promiseExists && objPrototype === Promise.prototype) {
      return 'Promise';
    }

    /* ! Speed optimisation
    * Pre:
    *   set                x 2,222,186 ops/sec ±1.31% (82 runs sampled)
    * Post:
    *   set                x 4,545,879 ops/sec ±1.13% (83 runs sampled)
    */
    if (setExists && objPrototype === Set.prototype) {
      return 'Set';
    }

    /* ! Speed optimisation
    * Pre:
    *   map                x 2,396,842 ops/sec ±1.59% (81 runs sampled)
    * Post:
    *   map                x 4,183,945 ops/sec ±6.59% (82 runs sampled)
    */
    if (mapExists && objPrototype === Map.prototype) {
      return 'Map';
    }

    /* ! Speed optimisation
    * Pre:
    *   weakset            x 1,323,220 ops/sec ±2.17% (76 runs sampled)
    * Post:
    *   weakset            x 4,237,510 ops/sec ±2.01% (77 runs sampled)
    */
    if (weakSetExists && objPrototype === WeakSet.prototype) {
      return 'WeakSet';
    }

    /* ! Speed optimisation
    * Pre:
    *   weakmap            x 1,500,260 ops/sec ±2.02% (78 runs sampled)
    * Post:
    *   weakmap            x 3,881,384 ops/sec ±1.45% (82 runs sampled)
    */
    if (weakMapExists && objPrototype === WeakMap.prototype) {
      return 'WeakMap';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-dataview.prototype-@@tostringtag)
     * ES6$24.2.4.21 - DataView.prototype[@@toStringTag] should be "DataView":
     * Test: `Object.prototype.toString.call(new DataView(new ArrayBuffer(1)))``
     *  - Edge <=13 === "[object Object]"
     */
    if (dataViewExists && objPrototype === DataView.prototype) {
      return 'DataView';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%mapiteratorprototype%-@@tostringtag)
     * ES6$23.1.5.2.2 - %MapIteratorPrototype%[@@toStringTag] should be "Map Iterator":
     * Test: `Object.prototype.toString.call(new Map().entries())``
     *  - Edge <=13 === "[object Object]"
     */
    if (mapExists && objPrototype === mapIteratorPrototype) {
      return 'Map Iterator';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%setiteratorprototype%-@@tostringtag)
     * ES6$23.2.5.2.2 - %SetIteratorPrototype%[@@toStringTag] should be "Set Iterator":
     * Test: `Object.prototype.toString.call(new Set().entries())``
     *  - Edge <=13 === "[object Object]"
     */
    if (setExists && objPrototype === setIteratorPrototype) {
      return 'Set Iterator';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%arrayiteratorprototype%-@@tostringtag)
     * ES6$22.1.5.2.2 - %ArrayIteratorPrototype%[@@toStringTag] should be "Array Iterator":
     * Test: `Object.prototype.toString.call([][Symbol.iterator]())``
     *  - Edge <=13 === "[object Object]"
     */
    if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
      return 'Array Iterator';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%stringiteratorprototype%-@@tostringtag)
     * ES6$21.1.5.2.2 - %StringIteratorPrototype%[@@toStringTag] should be "String Iterator":
     * Test: `Object.prototype.toString.call(''[Symbol.iterator]())``
     *  - Edge <=13 === "[object Object]"
     */
    if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
      return 'String Iterator';
    }

    /* ! Speed optimisation
    * Pre:
    *   object from null   x 2,424,320 ops/sec ±1.67% (76 runs sampled)
    * Post:
    *   object from null   x 5,838,000 ops/sec ±0.99% (84 runs sampled)
    */
    if (objPrototype === null) {
      return 'Object';
    }
  }

  return Object
    .prototype
    .toString
    .call(obj)
    .slice(toStringLeftSliceLength, toStringRightSliceLength);
};

module.exports.typeDetect = module.exports;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chai = __webpack_require__(1);
var flag = __webpack_require__(0);
var isProxyEnabled = __webpack_require__(5);
var transferFlags = __webpack_require__(3);

/**
 * ### .addProperty(ctx, name, getter)
 *
 * Adds a property to the prototype of an object.
 *
 *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.instanceof(Foo);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addProperty('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.be.foo;
 *
 * @param {Object} ctx object to which the property is added
 * @param {String} name of property to add
 * @param {Function} getter function to be used for name
 * @namespace Utils
 * @name addProperty
 * @api public
 */

module.exports = function addProperty(ctx, name, getter) {
  getter = getter === undefined ? new Function() : getter;

  Object.defineProperty(ctx, name,
    { get: function propertyGetter() {
        // Setting the `ssfi` flag to `propertyGetter` causes this function to
        // be the starting point for removing implementation frames from the
        // stack trace of a failed assertion.
        //
        // However, we only want to use this function as the starting point if
        // the `lockSsfi` flag isn't set and proxy protection is disabled.
        //
        // If the `lockSsfi` flag is set, then either this assertion has been
        // overwritten by another assertion, or this assertion is being invoked
        // from inside of another assertion. In the first case, the `ssfi` flag
        // has already been set by the overwriting assertion. In the second
        // case, the `ssfi` flag has already been set by the outer assertion.
        //
        // If proxy protection is enabled, then the `ssfi` flag has already been
        // set by the proxy getter.
        if (!isProxyEnabled() && !flag(this, 'lockSsfi')) {
          flag(this, 'ssfi', propertyGetter);
        }

        var result = getter.call(this);
        if (result !== undefined)
          return result;

        var newAssertion = new chai.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      }
    , configurable: true
  });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var addLengthGuard = __webpack_require__(6);
var chai = __webpack_require__(1);
var flag = __webpack_require__(0);
var proxify = __webpack_require__(7);
var transferFlags = __webpack_require__(3);

/**
 * ### .addMethod(ctx, name, method)
 *
 * Adds a method to the prototype of an object.
 *
 *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addMethod('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(fooStr).to.be.foo('bar');
 *
 * @param {Object} ctx object to which the method is added
 * @param {String} name of method to add
 * @param {Function} method function to be used for name
 * @namespace Utils
 * @name addMethod
 * @api public
 */

module.exports = function addMethod(ctx, name, method) {
  var methodWrapper = function () {
    // Setting the `ssfi` flag to `methodWrapper` causes this function to be the
    // starting point for removing implementation frames from the stack trace of
    // a failed assertion.
    //
    // However, we only want to use this function as the starting point if the
    // `lockSsfi` flag isn't set.
    //
    // If the `lockSsfi` flag is set, then either this assertion has been
    // overwritten by another assertion, or this assertion is being invoked from
    // inside of another assertion. In the first case, the `ssfi` flag has
    // already been set by the overwriting assertion. In the second case, the
    // `ssfi` flag has already been set by the outer assertion.
    if (!flag(this, 'lockSsfi')) {
      flag(this, 'ssfi', methodWrapper);
    }

    var result = method.apply(this, arguments);
    if (result !== undefined)
      return result;

    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  };

  addLengthGuard(methodWrapper, name, false);
  ctx[name] = proxify(methodWrapper, name);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chai = __webpack_require__(1);
var flag = __webpack_require__(0);
var isProxyEnabled = __webpack_require__(5);
var transferFlags = __webpack_require__(3);

/**
 * ### .overwriteProperty(ctx, name, fn)
 *
 * Overwites an already existing property getter and provides
 * access to previous value. Must return function to use as getter.
 *
 *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
 *       return function () {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.name).to.equal('bar');
 *         } else {
 *           _super.call(this);
 *         }
 *       }
 *     });
 *
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteProperty('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.be.ok;
 *
 * @param {Object} ctx object whose property is to be overwritten
 * @param {String} name of property to overwrite
 * @param {Function} getter function that returns a getter function to be used for name
 * @namespace Utils
 * @name overwriteProperty
 * @api public
 */

module.exports = function overwriteProperty(ctx, name, getter) {
  var _get = Object.getOwnPropertyDescriptor(ctx, name)
    , _super = function () {};

  if (_get && 'function' === typeof _get.get)
    _super = _get.get

  Object.defineProperty(ctx, name,
    { get: function overwritingPropertyGetter() {
        // Setting the `ssfi` flag to `overwritingPropertyGetter` causes this
        // function to be the starting point for removing implementation frames
        // from the stack trace of a failed assertion.
        //
        // However, we only want to use this function as the starting point if
        // the `lockSsfi` flag isn't set and proxy protection is disabled.
        //
        // If the `lockSsfi` flag is set, then either this assertion has been
        // overwritten by another assertion, or this assertion is being invoked
        // from inside of another assertion. In the first case, the `ssfi` flag
        // has already been set by the overwriting assertion. In the second
        // case, the `ssfi` flag has already been set by the outer assertion.
        //
        // If proxy protection is enabled, then the `ssfi` flag has already been
        // set by the proxy getter.
        if (!isProxyEnabled() && !flag(this, 'lockSsfi')) {
          flag(this, 'ssfi', overwritingPropertyGetter);
        }

        // Setting the `lockSsfi` flag to `true` prevents the overwritten
        // assertion from changing the `ssfi` flag. By this point, the `ssfi`
        // flag is already set to the correct starting point for this assertion.
        var origLockSsfi = flag(this, 'lockSsfi');
        flag(this, 'lockSsfi', true);
        var result = getter(_super).call(this);
        flag(this, 'lockSsfi', origLockSsfi);

        if (result !== undefined) {
          return result;
        }

        var newAssertion = new chai.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      }
    , configurable: true
  });
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var addLengthGuard = __webpack_require__(6);
var chai = __webpack_require__(1);
var flag = __webpack_require__(0);
var proxify = __webpack_require__(7);
var transferFlags = __webpack_require__(3);

/**
 * ### .overwriteMethod(ctx, name, fn)
 *
 * Overwites an already existing method and provides
 * access to previous function. Must return function
 * to be used for name.
 *
 *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
 *       return function (str) {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.value).to.equal(str);
 *         } else {
 *           _super.apply(this, arguments);
 *         }
 *       }
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteMethod('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.equal('bar');
 *
 * @param {Object} ctx object whose method is to be overwritten
 * @param {String} name of method to overwrite
 * @param {Function} method function that returns a function to be used for name
 * @namespace Utils
 * @name overwriteMethod
 * @api public
 */

module.exports = function overwriteMethod(ctx, name, method) {
  var _method = ctx[name]
    , _super = function () {
      throw new Error(name + ' is not a function');
    };

  if (_method && 'function' === typeof _method)
    _super = _method;

  var overwritingMethodWrapper = function () {
    // Setting the `ssfi` flag to `overwritingMethodWrapper` causes this
    // function to be the starting point for removing implementation frames from
    // the stack trace of a failed assertion.
    //
    // However, we only want to use this function as the starting point if the
    // `lockSsfi` flag isn't set.
    //
    // If the `lockSsfi` flag is set, then either this assertion has been
    // overwritten by another assertion, or this assertion is being invoked from
    // inside of another assertion. In the first case, the `ssfi` flag has
    // already been set by the overwriting assertion. In the second case, the
    // `ssfi` flag has already been set by the outer assertion.
    if (!flag(this, 'lockSsfi')) {
      flag(this, 'ssfi', overwritingMethodWrapper);
    }

    // Setting the `lockSsfi` flag to `true` prevents the overwritten assertion
    // from changing the `ssfi` flag. By this point, the `ssfi` flag is already
    // set to the correct starting point for this assertion.
    var origLockSsfi = flag(this, 'lockSsfi');
    flag(this, 'lockSsfi', true);
    var result = method(_super).apply(this, arguments);
    flag(this, 'lockSsfi', origLockSsfi);

    if (result !== undefined) {
      return result;
    }

    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  }

  addLengthGuard(overwritingMethodWrapper, name, false);
  ctx[name] = proxify(overwritingMethodWrapper, name);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var addLengthGuard = __webpack_require__(6);
var chai = __webpack_require__(1);
var flag = __webpack_require__(0);
var proxify = __webpack_require__(7);
var transferFlags = __webpack_require__(3);

/*!
 * Module variables
 */

// Check whether `Object.setPrototypeOf` is supported
var canSetPrototype = typeof Object.setPrototypeOf === 'function';

// Without `Object.setPrototypeOf` support, this module will need to add properties to a function.
// However, some of functions' own props are not configurable and should be skipped.
var testFn = function() {};
var excludeNames = Object.getOwnPropertyNames(testFn).filter(function(name) {
  var propDesc = Object.getOwnPropertyDescriptor(testFn, name);

  // Note: PhantomJS 1.x includes `callee` as one of `testFn`'s own properties,
  // but then returns `undefined` as the property descriptor for `callee`. As a
  // workaround, we perform an otherwise unnecessary type-check for `propDesc`,
  // and then filter it out if it's not an object as it should be.
  if (typeof propDesc !== 'object')
    return true;

  return !propDesc.configurable;
});

// Cache `Function` properties
var call  = Function.prototype.call,
    apply = Function.prototype.apply;

/**
 * ### .addChainableMethod(ctx, name, method, chainingBehavior)
 *
 * Adds a method to an object, such that the method can also be chained.
 *
 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
 *
 * The result can then be used as both a method assertion, executing both `method` and
 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
 *
 *     expect(fooStr).to.be.foo('bar');
 *     expect(fooStr).to.be.foo.equal('foo');
 *
 * @param {Object} ctx object to which the method is added
 * @param {String} name of method to add
 * @param {Function} method function to be used for `name`, when called
 * @param {Function} chainingBehavior function to be called every time the property is accessed
 * @namespace Utils
 * @name addChainableMethod
 * @api public
 */

module.exports = function addChainableMethod(ctx, name, method, chainingBehavior) {
  if (typeof chainingBehavior !== 'function') {
    chainingBehavior = function () { };
  }

  var chainableBehavior = {
      method: method
    , chainingBehavior: chainingBehavior
  };

  // save the methods so we can overwrite them later, if we need to.
  if (!ctx.__methods) {
    ctx.__methods = {};
  }
  ctx.__methods[name] = chainableBehavior;

  Object.defineProperty(ctx, name,
    { get: function chainableMethodGetter() {
        chainableBehavior.chainingBehavior.call(this);

        var chainableMethodWrapper = function () {
          // Setting the `ssfi` flag to `chainableMethodWrapper` causes this
          // function to be the starting point for removing implementation
          // frames from the stack trace of a failed assertion.
          //
          // However, we only want to use this function as the starting point if
          // the `lockSsfi` flag isn't set.
          //
          // If the `lockSsfi` flag is set, then this assertion is being
          // invoked from inside of another assertion. In this case, the `ssfi`
          // flag has already been set by the outer assertion.
          //
          // Note that overwriting a chainable method merely replaces the saved
          // methods in `ctx.__methods` instead of completely replacing the
          // overwritten assertion. Therefore, an overwriting assertion won't
          // set the `ssfi` or `lockSsfi` flags.
          if (!flag(this, 'lockSsfi')) {
            flag(this, 'ssfi', chainableMethodWrapper);
          }

          var result = chainableBehavior.method.apply(this, arguments);
          if (result !== undefined) {
            return result;
          }

          var newAssertion = new chai.Assertion();
          transferFlags(this, newAssertion);
          return newAssertion;
        };

        addLengthGuard(chainableMethodWrapper, name, true);

        // Use `Object.setPrototypeOf` if available
        if (canSetPrototype) {
          // Inherit all properties from the object by replacing the `Function` prototype
          var prototype = Object.create(this);
          // Restore the `call` and `apply` methods from `Function`
          prototype.call = call;
          prototype.apply = apply;
          Object.setPrototypeOf(chainableMethodWrapper, prototype);
        }
        // Otherwise, redefine all properties (slow!)
        else {
          var asserterNames = Object.getOwnPropertyNames(ctx);
          asserterNames.forEach(function (asserterName) {
            if (excludeNames.indexOf(asserterName) !== -1) {
              return;
            }

            var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
            Object.defineProperty(chainableMethodWrapper, asserterName, pd);
          });
        }

        transferFlags(this, chainableMethodWrapper);
        return proxify(chainableMethodWrapper);
      }
    , configurable: true
  });
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chai = __webpack_require__(1);
var transferFlags = __webpack_require__(3);

/**
 * ### .overwriteChainableMethod(ctx, name, method, chainingBehavior)
 *
 * Overwites an already existing chainable method
 * and provides access to the previous function or
 * property.  Must return functions to be used for
 * name.
 *
 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'lengthOf',
 *       function (_super) {
 *       }
 *     , function (_super) {
 *       }
 *     );
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.have.lengthOf(3);
 *     expect(myFoo).to.have.lengthOf.above(3);
 *
 * @param {Object} ctx object whose method / property is to be overwritten
 * @param {String} name of method / property to overwrite
 * @param {Function} method function that returns a function to be used for name
 * @param {Function} chainingBehavior function that returns a function to be used for property
 * @namespace Utils
 * @name overwriteChainableMethod
 * @api public
 */

module.exports = function overwriteChainableMethod(ctx, name, method, chainingBehavior) {
  var chainableBehavior = ctx.__methods[name];

  var _chainingBehavior = chainableBehavior.chainingBehavior;
  chainableBehavior.chainingBehavior = function overwritingChainableMethodGetter() {
    var result = chainingBehavior(_chainingBehavior).call(this);
    if (result !== undefined) {
      return result;
    }

    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  };

  var _method = chainableBehavior.method;
  chainableBehavior.method = function overwritingChainableMethodWrapper() {
    var result = method(_method).apply(this, arguments);
    if (result !== undefined) {
      return result;
    }

    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  };
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var inspect = __webpack_require__(4);

/**
 * ### .compareByInspect(mixed, mixed)
 *
 * To be used as a compareFunction with Array.prototype.sort. Compares elements
 * using inspect instead of default behavior of using toString so that Symbols
 * and objects with irregular/missing toString can still be sorted without a
 * TypeError.
 *
 * @param {Mixed} first element to compare
 * @param {Mixed} second element to compare
 * @returns {Number} -1 if 'a' should come before 'b'; otherwise 1 
 * @name compareByInspect
 * @namespace Utils
 * @api public
 */

module.exports = function compareByInspect(a, b) {
  return inspect(a) < inspect(b) ? -1 : 1;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var getOwnEnumerablePropertySymbols = __webpack_require__(15);

/**
 * ### .getOwnEnumerableProperties(object)
 *
 * This allows the retrieval of directly-owned enumerable property names and
 * symbols of an object. This function is necessary because Object.keys only
 * returns enumerable property names, not enumerable property symbols.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getOwnEnumerableProperties
 * @api public
 */

module.exports = function getOwnEnumerableProperties(obj) {
  return Object.keys(obj).concat(getOwnEnumerablePropertySymbols(obj));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* !
 * Chai - checkError utility
 * Copyright(c) 2012-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .checkError
 *
 * Checks that an error conforms to a given set of criteria and/or retrieves information about it.
 *
 * @api public
 */

/**
 * ### .compatibleInstance(thrown, errorLike)
 *
 * Checks if two instances are compatible (strict equal).
 * Returns false if errorLike is not an instance of Error, because instances
 * can only be compatible if they're both error instances.
 *
 * @name compatibleInstance
 * @param {Error} thrown error
 * @param {Error|ErrorConstructor} errorLike object to compare against
 * @namespace Utils
 * @api public
 */

function compatibleInstance(thrown, errorLike) {
  return errorLike instanceof Error && thrown === errorLike;
}

/**
 * ### .compatibleConstructor(thrown, errorLike)
 *
 * Checks if two constructors are compatible.
 * This function can receive either an error constructor or
 * an error instance as the `errorLike` argument.
 * Constructors are compatible if they're the same or if one is
 * an instance of another.
 *
 * @name compatibleConstructor
 * @param {Error} thrown error
 * @param {Error|ErrorConstructor} errorLike object to compare against
 * @namespace Utils
 * @api public
 */

function compatibleConstructor(thrown, errorLike) {
  if (errorLike instanceof Error) {
    // If `errorLike` is an instance of any error we compare their constructors
    return thrown.constructor === errorLike.constructor || thrown instanceof errorLike.constructor;
  } else if (errorLike.prototype instanceof Error || errorLike === Error) {
    // If `errorLike` is a constructor that inherits from Error, we compare `thrown` to `errorLike` directly
    return thrown.constructor === errorLike || thrown instanceof errorLike;
  }

  return false;
}

/**
 * ### .compatibleMessage(thrown, errMatcher)
 *
 * Checks if an error's message is compatible with a matcher (String or RegExp).
 * If the message contains the String or passes the RegExp test,
 * it is considered compatible.
 *
 * @name compatibleMessage
 * @param {Error} thrown error
 * @param {String|RegExp} errMatcher to look for into the message
 * @namespace Utils
 * @api public
 */

function compatibleMessage(thrown, errMatcher) {
  var comparisonString = typeof thrown === 'string' ? thrown : thrown.message;
  if (errMatcher instanceof RegExp) {
    return errMatcher.test(comparisonString);
  } else if (typeof errMatcher === 'string') {
    return comparisonString.indexOf(errMatcher) !== -1; // eslint-disable-line no-magic-numbers
  }

  return false;
}

/**
 * ### .getFunctionName(constructorFn)
 *
 * Returns the name of a function.
 * This also includes a polyfill function if `constructorFn.name` is not defined.
 *
 * @name getFunctionName
 * @param {Function} constructorFn
 * @namespace Utils
 * @api private
 */

var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;
function getFunctionName(constructorFn) {
  var name = '';
  if (typeof constructorFn.name === 'undefined') {
    // Here we run a polyfill if constructorFn.name is not defined
    var match = String(constructorFn).match(functionNameMatch);
    if (match) {
      name = match[1];
    }
  } else {
    name = constructorFn.name;
  }

  return name;
}

/**
 * ### .getConstructorName(errorLike)
 *
 * Gets the constructor name for an Error instance or constructor itself.
 *
 * @name getConstructorName
 * @param {Error|ErrorConstructor} errorLike
 * @namespace Utils
 * @api public
 */

function getConstructorName(errorLike) {
  var constructorName = errorLike;
  if (errorLike instanceof Error) {
    constructorName = getFunctionName(errorLike.constructor);
  } else if (typeof errorLike === 'function') {
    // If `err` is not an instance of Error it is an error constructor itself or another function.
    // If we've got a common function we get its name, otherwise we may need to create a new instance
    // of the error just in case it's a poorly-constructed error. Please see chaijs/chai/issues/45 to know more.
    constructorName = getFunctionName(errorLike).trim() ||
        getFunctionName(new errorLike()); // eslint-disable-line new-cap
  }

  return constructorName;
}

/**
 * ### .getMessage(errorLike)
 *
 * Gets the error message from an error.
 * If `err` is a String itself, we return it.
 * If the error has no message, we return an empty string.
 *
 * @name getMessage
 * @param {Error|String} errorLike
 * @namespace Utils
 * @api public
 */

function getMessage(errorLike) {
  var msg = '';
  if (errorLike && errorLike.message) {
    msg = errorLike.message;
  } else if (typeof errorLike === 'string') {
    msg = errorLike;
  }

  return msg;
}

module.exports = {
  compatibleInstance: compatibleInstance,
  compatibleConstructor: compatibleConstructor,
  compatibleMessage: compatibleMessage,
  getMessage: getMessage,
  getConstructorName: getConstructorName,
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */

/**
 * ### .isNaN(value)
 *
 * Checks if the given value is NaN or not.
 *
 *     utils.isNaN(NaN); // true
 *
 * @param {Value} The value which has to be checked if it is NaN
 * @name isNaN
 * @api private
 */

function isNaN(value) {
  // Refer http://www.ecma-international.org/ecma-262/6.0/#sec-isnan-number
  // section's NOTE.
  return value !== value;
}

// If ECMAScript 6's Number.isNaN is present, prefer that.
module.exports = Number.isNaN || isNaN;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var config = __webpack_require__(2);

module.exports = function (_chai, util) {
  /*!
   * Module dependencies.
   */

  var AssertionError = _chai.AssertionError
    , flag = util.flag;

  /*!
   * Module export.
   */

  _chai.Assertion = Assertion;

  /*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   */

  function Assertion (obj, msg, ssfi, lockSsfi) {
    flag(this, 'ssfi', ssfi || Assertion);
    flag(this, 'lockSsfi', lockSsfi);
    flag(this, 'object', obj);
    flag(this, 'message', msg);

    return util.proxify(this);
  }

  Object.defineProperty(Assertion, 'includeStack', {
    get: function() {
      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
      return config.includeStack;
    },
    set: function(value) {
      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
      config.includeStack = value;
    }
  });

  Object.defineProperty(Assertion, 'showDiff', {
    get: function() {
      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
      return config.showDiff;
    },
    set: function(value) {
      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
      config.showDiff = value;
    }
  });

  Assertion.addProperty = function (name, fn) {
    util.addProperty(this.prototype, name, fn);
  };

  Assertion.addMethod = function (name, fn) {
    util.addMethod(this.prototype, name, fn);
  };

  Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
    util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
  };

  Assertion.overwriteProperty = function (name, fn) {
    util.overwriteProperty(this.prototype, name, fn);
  };

  Assertion.overwriteMethod = function (name, fn) {
    util.overwriteMethod(this.prototype, name, fn);
  };

  Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
    util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
  };

  /**
   * ### .assert(expression, message, negateMessage, expected, actual, showDiff)
   *
   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
   *
   * @name assert
   * @param {Philosophical} expression to be tested
   * @param {String|Function} message or function that returns message to display if expression fails
   * @param {String|Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
   * @param {Mixed} expected value (remember to check for negation)
   * @param {Mixed} actual (optional) will default to `this.obj`
   * @param {Boolean} showDiff (optional) when set to `true`, assert will display a diff in addition to the message if expression fails
   * @api private
   */

  Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
    var ok = util.test(this, arguments);
    if (false !== showDiff) showDiff = true;
    if (undefined === expected && undefined === _actual) showDiff = false;
    if (true !== config.showDiff) showDiff = false;

    if (!ok) {
      msg = util.getMessage(this, arguments);
      var actual = util.getActual(this, arguments);
      throw new AssertionError(msg, {
          actual: actual
        , expected: expected
        , showDiff: showDiff
      }, (config.includeStack) ? this.assert : flag(this, 'ssfi'));
    }
  };

  /*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */

  Object.defineProperty(Assertion.prototype, '_obj',
    { get: function () {
        return flag(this, 'object');
      }
    , set: function (val) {
        flag(this, 'object', val);
      }
  });
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, _) {
  var Assertion = chai.Assertion
    , AssertionError = chai.AssertionError
    , flag = _.flag;

  /**
   * ### Language Chains
   *
   * The following are provided as chainable getters to improve the readability
   * of your assertions.
   *
   * **Chains**
   *
   * - to
   * - be
   * - been
   * - is
   * - that
   * - which
   * - and
   * - has
   * - have
   * - with
   * - at
   * - of
   * - same
   * - but
   * - does
   *
   * @name language chains
   * @namespace BDD
   * @api public
   */

  [ 'to', 'be', 'been'
  , 'is', 'and', 'has', 'have'
  , 'with', 'that', 'which', 'at'
  , 'of', 'same', 'but', 'does' ].forEach(function (chain) {
    Assertion.addProperty(chain);
  });

  /**
   * ### .not
   *
   * Negates all assertions that follow in the chain.
   *
   *     expect(function () {}).to.not.throw();
   *     expect({a: 1}).to.not.have.property('b');
   *     expect([1, 2]).to.be.an('array').that.does.not.include(3);
   *
   * Just because you can negate any assertion with `.not` doesn't mean you
   * should. With great power comes great responsibility. It's often best to
   * assert that the one expected output was produced, rather than asserting
   * that one of countless unexpected outputs wasn't produced. See individual
   * assertions for specific guidance.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.not.equal(1); // Not recommended
   *
   * @name not
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('not', function () {
    flag(this, 'negate', true);
  });

  /**
   * ### .deep
   *
   * Causes all `.equal`, `.include`, `.members`, `.keys`, and `.property`
   * assertions that follow in the chain to use deep equality instead of strict
   * (`===`) equality. See the `deep-eql` project page for info on the deep
   * equality algorithm: https://github.com/chaijs/deep-eql.
   *
   *     // Target object deeply (but not strictly) equals `{a: 1}`
   *     expect({a: 1}).to.deep.equal({a: 1});
   *     expect({a: 1}).to.not.equal({a: 1});
   *
   *     // Target array deeply (but not strictly) includes `{a: 1}`
   *     expect([{a: 1}]).to.deep.include({a: 1});
   *     expect([{a: 1}]).to.not.include({a: 1});
   *
   *     // Target object deeply (but not strictly) includes `x: {a: 1}`
   *     expect({x: {a: 1}}).to.deep.include({x: {a: 1}});
   *     expect({x: {a: 1}}).to.not.include({x: {a: 1}});
   *
   *     // Target array deeply (but not strictly) has member `{a: 1}`
   *     expect([{a: 1}]).to.have.deep.members([{a: 1}]);
   *     expect([{a: 1}]).to.not.have.members([{a: 1}]);
   *
   *     // Target set deeply (but not strictly) has key `{a: 1}`
   *     expect(new Set([{a: 1}])).to.have.deep.keys([{a: 1}]);
   *     expect(new Set([{a: 1}])).to.not.have.keys([{a: 1}]);
   *
   *     // Target object deeply (but not strictly) has property `x: {a: 1}`
   *     expect({x: {a: 1}}).to.have.deep.property('x', {a: 1});
   *     expect({x: {a: 1}}).to.not.have.property('x', {a: 1});
   *
   * @name deep
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('deep', function () {
    flag(this, 'deep', true);
  });

  /**
   * ### .nested
   *
   * Enables dot- and bracket-notation in all `.property` and `.include`
   * assertions that follow in the chain.
   *
   *     expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
   *     expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'});
   *
   * If `.` or `[]` are part of an actual property name, they can be escaped by
   * adding two backslashes before them.
   *
   *     expect({'.a': {'[b]': 'x'}}).to.have.nested.property('\\.a.\\[b\\]');
   *     expect({'.a': {'[b]': 'x'}}).to.nested.include({'\\.a.\\[b\\]': 'x'});
   *
   * `.nested` cannot be combined with `.own`.
   *
   * @name nested
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('nested', function () {
    flag(this, 'nested', true);
  });

  /**
   * ### .own
   *
   * Causes all `.property` and `.include` assertions that follow in the chain
   * to ignore inherited properties.
   *
   *     Object.prototype.b = 2;
   *
   *     expect({a: 1}).to.have.own.property('a');
   *     expect({a: 1}).to.have.property('b').but.not.own.property('b'); 
   *
   *     expect({a: 1}).to.own.include({a: 1});
   *     expect({a: 1}).to.include({b: 2}).but.not.own.include({b: 2});
   *
   * `.own` cannot be combined with `.nested`.
   *
   * @name own
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('own', function () {
    flag(this, 'own', true);
  });

  /**
   * ### .ordered
   *
   * Causes all `.members` assertions that follow in the chain to require that
   * members be in the same order.
   *
   *     expect([1, 2]).to.have.ordered.members([1, 2])
   *       .but.not.have.ordered.members([2, 1]);
   *
   * When `.include` and `.ordered` are combined, the ordering begins at the
   * start of both arrays.
   *
   *     expect([1, 2, 3]).to.include.ordered.members([1, 2])
   *       .but.not.include.ordered.members([2, 3]);
   *
   * @name ordered
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('ordered', function () {
    flag(this, 'ordered', true);
  });

  /**
   * ### .any
   *
   * Causes all `.keys` assertions that follow in the chain to only require that
   * the target have at least one of the given keys. This is the opposite of
   * `.all`, which requires that the target have all of the given keys.
   *
   *     expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
   *
   * See the `.keys` doc for guidance on when to use `.any` or `.all`.
   *
   * @name any
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('any', function () {
    flag(this, 'any', true);
    flag(this, 'all', false);
  });


  /**
   * ### .all
   *
   * Causes all `.keys` assertions that follow in the chain to require that the
   * target have all of the given keys. This is the opposite of `.any`, which
   * only requires that the target have at least one of the given keys.
   *
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
   *
   * Note that `.all` is used by default when neither `.all` nor `.any` are
   * added earlier in the chain. However, it's often best to add `.all` anyway
   * because it improves readability.
   *
   * See the `.keys` doc for guidance on when to use `.any` or `.all`.
   *
   * @name all
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('all', function () {
    flag(this, 'all', true);
    flag(this, 'any', false);
  });

  /**
   * ### .a(type[, msg])
   *
   * Asserts that the target's type is equal to the given string `type`. Types
   * are case insensitive. See the `type-detect` project page for info on the
   * type detection algorithm: https://github.com/chaijs/type-detect.
   *
   *     expect('foo').to.be.a('string');
   *     expect({a: 1}).to.be.an('object');
   *     expect(null).to.be.a('null');
   *     expect(undefined).to.be.an('undefined');
   *     expect(new Error).to.be.an('error');
   *     expect(Promise.resolve()).to.be.a('promise');
   *     expect(new Float32Array).to.be.a('float32array');
   *     expect(Symbol()).to.be.a('symbol');
   *
   * `.a` supports objects that have a custom type set via `Symbol.toStringTag`.
   *
   *     var myObj = {
   *       [Symbol.toStringTag]: 'myCustomType'
   *     };
   *
   *     expect(myObj).to.be.a('myCustomType').but.not.an('object');
   *
   * It's often best to use `.a` to check a target's type before making more
   * assertions on the same target. That way, you avoid unexpected behavior from
   * any assertion that does different things based on the target's type.
   *
   *     expect([1, 2, 3]).to.be.an('array').that.includes(2);
   *     expect([]).to.be.an('array').that.is.empty;
   *
   * Add `.not` earlier in the chain to negate `.a`. However, it's often best to
   * assert that the target is the expected type, rather than asserting that it
   * isn't one of many unexpected types.
   *
   *     expect('foo').to.be.a('string'); // Recommended
   *     expect('foo').to.not.be.an('array'); // Not recommended
   *
   * `.a` accepts an optional `msg` argument which is a custom error message to
   * show when the assertion fails. The message can also be given as the second
   * argument to `expect`.
   *
   *     expect(1).to.be.a('string', 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.a('string');
   *
   * `.a` can also be used as a language chain to improve the readability of
   * your assertions. 
   *
   *     expect({b: 2}).to.have.a.property('b');
   *
   * The alias `.an` can be used interchangeably with `.a`.
   *
   * @name a
   * @alias an
   * @param {String} type
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function an (type, msg) {
    if (msg) flag(this, 'message', msg);
    type = type.toLowerCase();
    var obj = flag(this, 'object')
      , article = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(type.charAt(0)) ? 'an ' : 'a ';

    this.assert(
        type === _.type(obj).toLowerCase()
      , 'expected #{this} to be ' + article + type
      , 'expected #{this} not to be ' + article + type
    );
  }

  Assertion.addChainableMethod('an', an);
  Assertion.addChainableMethod('a', an);

  /**
   * ### .include(val[, msg])
   *
   * When the target is a string, `.include` asserts that the given string `val`
   * is a substring of the target.
   *
   *     expect('foobar').to.include('foo');
   *
   * When the target is an array, `.include` asserts that the given `val` is a
   * member of the target.
   *
   *     expect([1, 2, 3]).to.include(2);
   *
   * When the target is an object, `.include` asserts that the given object
   * `val`'s properties are a subset of the target's properties.
   *
   *     expect({a: 1, b: 2, c: 3}).to.include({a: 1, b: 2});
   *
   * When the target is a Set or WeakSet, `.include` asserts that the given `val` is a
   * member of the target. SameValueZero equality algorithm is used.
   *
   *     expect(new Set([1, 2])).to.include(2);
   *
   * When the target is a Map, `.include` asserts that the given `val` is one of
   * the values of the target. SameValueZero equality algorithm is used.
   *
   *     expect(new Map([['a', 1], ['b', 2]])).to.include(2);
   *
   * Because `.include` does different things based on the target's type, it's
   * important to check the target's type before using `.include`. See the `.a`
   * doc for info on testing a target's type.
   *
   *     expect([1, 2, 3]).to.be.an('array').that.includes(2);
   *
   * By default, strict (`===`) equality is used to compare array members and
   * object properties. Add `.deep` earlier in the chain to use deep equality
   * instead (WeakSet targets are not supported). See the `deep-eql` project
   * page for info on the deep equality algorithm: https://github.com/chaijs/deep-eql.
   *
   *     // Target array deeply (but not strictly) includes `{a: 1}`
   *     expect([{a: 1}]).to.deep.include({a: 1});
   *     expect([{a: 1}]).to.not.include({a: 1});
   *
   *     // Target object deeply (but not strictly) includes `x: {a: 1}`
   *     expect({x: {a: 1}}).to.deep.include({x: {a: 1}});
   *     expect({x: {a: 1}}).to.not.include({x: {a: 1}});
   *
   * By default, all of the target's properties are searched when working with
   * objects. This includes properties that are inherited and/or non-enumerable.
   * Add `.own` earlier in the chain to exclude the target's inherited
   * properties from the search.
   *
   *     Object.prototype.b = 2;
   *
   *     expect({a: 1}).to.own.include({a: 1});
   *     expect({a: 1}).to.include({b: 2}).but.not.own.include({b: 2});
   *
   * Note that a target object is always only searched for `val`'s own
   * enumerable properties.
   *
   * `.deep` and `.own` can be combined.
   *
   *     expect({a: {b: 2}}).to.deep.own.include({a: {b: 2}});
   *
   * Add `.nested` earlier in the chain to enable dot- and bracket-notation when
   * referencing nested properties.
   *
   *     expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'});
   *
   * If `.` or `[]` are part of an actual property name, they can be escaped by
   * adding two backslashes before them.
   *
   *     expect({'.a': {'[b]': 2}}).to.nested.include({'\\.a.\\[b\\]': 2});
   *
   * `.deep` and `.nested` can be combined.
   *
   *     expect({a: {b: [{c: 3}]}}).to.deep.nested.include({'a.b[0]': {c: 3}});
   *
   * `.own` and `.nested` cannot be combined.
   *
   * Add `.not` earlier in the chain to negate `.include`.
   *
   *     expect('foobar').to.not.include('taco');
   *     expect([1, 2, 3]).to.not.include(4);
   * 
   * However, it's dangerous to negate `.include` when the target is an object.
   * The problem is that it creates uncertain expectations by asserting that the
   * target object doesn't have all of `val`'s key/value pairs but may or may
   * not have some of them. It's often best to identify the exact output that's
   * expected, and then write an assertion that only accepts that exact output.
   *
   * When the target object isn't even expected to have `val`'s keys, it's
   * often best to assert exactly that.
   *
   *     expect({c: 3}).to.not.have.any.keys('a', 'b'); // Recommended
   *     expect({c: 3}).to.not.include({a: 1, b: 2}); // Not recommended
   *
   * When the target object is expected to have `val`'s keys, it's often best to
   * assert that each of the properties has its expected value, rather than
   * asserting that each property doesn't have one of many unexpected values.
   *
   *     expect({a: 3, b: 4}).to.include({a: 3, b: 4}); // Recommended
   *     expect({a: 3, b: 4}).to.not.include({a: 1, b: 2}); // Not recommended
   *
   * `.include` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect([1, 2, 3]).to.include(4, 'nooo why fail??');
   *     expect([1, 2, 3], 'nooo why fail??').to.include(4);
   *
   * `.include` can also be used as a language chain, causing all `.members` and
   * `.keys` assertions that follow in the chain to require the target to be a
   * superset of the expected set, rather than an identical set. Note that
   * `.members` ignores duplicates in the subset when `.include` is added.
   *
   *     // Target object's keys are a superset of ['a', 'b'] but not identical
   *     expect({a: 1, b: 2, c: 3}).to.include.all.keys('a', 'b');
   *     expect({a: 1, b: 2, c: 3}).to.not.have.all.keys('a', 'b');
   *
   *     // Target array is a superset of [1, 2] but not identical
   *     expect([1, 2, 3]).to.include.members([1, 2]);
   *     expect([1, 2, 3]).to.not.have.members([1, 2]);
   *
   *     // Duplicates in the subset are ignored
   *     expect([1, 2, 3]).to.include.members([1, 2, 2, 2]);
   *
   * Note that adding `.any` earlier in the chain causes the `.keys` assertion
   * to ignore `.include`.
   *
   *     // Both assertions are identical
   *     expect({a: 1}).to.include.any.keys('a', 'b');
   *     expect({a: 1}).to.have.any.keys('a', 'b');
   *
   * The aliases `.includes`, `.contain`, and `.contains` can be used
   * interchangeably with `.include`.
   *
   * @name include
   * @alias contain
   * @alias includes
   * @alias contains
   * @param {Mixed} val
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function SameValueZero(a, b) {
    return (_.isNaN(a) && _.isNaN(b)) || a === b;
  }

  function includeChainingBehavior () {
    flag(this, 'contains', true);
  }

  function include (val, msg) {
    if (msg) flag(this, 'message', msg);
    
    var obj = flag(this, 'object')
      , objType = _.type(obj).toLowerCase()
      , flagMsg = flag(this, 'message')
      , negate = flag(this, 'negate')
      , ssfi = flag(this, 'ssfi')
      , isDeep = flag(this, 'deep')
      , descriptor = isDeep ? 'deep ' : '';

    flagMsg = flagMsg ? flagMsg + ': ' : '';

    var included = false;

    switch (objType) {
      case 'string':
        included = obj.indexOf(val) !== -1;
        break;

      case 'weakset':
        if (isDeep) {
          throw new AssertionError(
            flagMsg + 'unable to use .deep.include with WeakSet',
            undefined,
            ssfi
          );
        }

        included = obj.has(val);
        break;

      case 'map':
        var isEql = isDeep ? _.eql : SameValueZero;
        obj.forEach(function (item) {
          included = included || isEql(item, val);
        });
        break;

      case 'set':
        if (isDeep) {
          obj.forEach(function (item) {
            included = included || _.eql(item, val);
          });
        } else {
          included = obj.has(val);
        }
        break;

      case 'array':
        if (isDeep) {
          included = obj.some(function (item) {
            return _.eql(item, val);
          })
        } else {
          included = obj.indexOf(val) !== -1;
        }
        break;

      default:
        // This block is for asserting a subset of properties in an object.
        // `_.expectTypes` isn't used here because `.include` should work with
        // objects with a custom `@@toStringTag`.
        if (val !== Object(val)) {
          throw new AssertionError(
            flagMsg + 'object tested must be an array, a map, an object,'
              + ' a set, a string, or a weakset, but ' + objType + ' given',
            undefined,
            ssfi
          );
        }

        var props = Object.keys(val)
          , firstErr = null
          , numErrs = 0;
  
        props.forEach(function (prop) {
          var propAssertion = new Assertion(obj);
          _.transferFlags(this, propAssertion, true);
          flag(propAssertion, 'lockSsfi', true);
  
          if (!negate || props.length === 1) {
            propAssertion.property(prop, val[prop]);
            return;
          }
  
          try {
            propAssertion.property(prop, val[prop]);
          } catch (err) {
            if (!_.checkError.compatibleConstructor(err, AssertionError)) {
              throw err;
            }
            if (firstErr === null) firstErr = err;
            numErrs++;
          }
        }, this);
  
        // When validating .not.include with multiple properties, we only want
        // to throw an assertion error if all of the properties are included,
        // in which case we throw the first property assertion error that we
        // encountered.
        if (negate && props.length > 1 && numErrs === props.length) {
          throw firstErr;
        }
        return;
    }

    // Assert inclusion in collection or substring in a string.
    this.assert(
      included
      , 'expected #{this} to ' + descriptor + 'include ' + _.inspect(val)
      , 'expected #{this} to not ' + descriptor + 'include ' + _.inspect(val));
  }

  Assertion.addChainableMethod('include', include, includeChainingBehavior);
  Assertion.addChainableMethod('contain', include, includeChainingBehavior);
  Assertion.addChainableMethod('contains', include, includeChainingBehavior);
  Assertion.addChainableMethod('includes', include, includeChainingBehavior);

  /**
   * ### .ok
   *
   * Asserts that the target is loosely (`==`) equal to `true`. However, it's
   * often best to assert that the target is strictly (`===`) or deeply equal to
   * its expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.ok; // Not recommended
   *
   *     expect(true).to.be.true; // Recommended
   *     expect(true).to.be.ok; // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.ok`.
   *
   *     expect(0).to.equal(0); // Recommended
   *     expect(0).to.not.be.ok; // Not recommended
   *
   *     expect(false).to.be.false; // Recommended
   *     expect(false).to.not.be.ok; // Not recommended
   *
   *     expect(null).to.be.null; // Recommended
   *     expect(null).to.not.be.ok; // Not recommended
   *
   *     expect(undefined).to.be.undefined; // Recommended
   *     expect(undefined).to.not.be.ok; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(false, 'nooo why fail??').to.be.ok;
   *
   * @name ok
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('ok', function () {
    this.assert(
        flag(this, 'object')
      , 'expected #{this} to be truthy'
      , 'expected #{this} to be falsy');
  });

  /**
   * ### .true
   *
   * Asserts that the target is strictly (`===`) equal to `true`.
   *
   *     expect(true).to.be.true;
   *
   * Add `.not` earlier in the chain to negate `.true`. However, it's often best
   * to assert that the target is equal to its expected value, rather than not
   * equal to `true`.
   *
   *     expect(false).to.be.false; // Recommended
   *     expect(false).to.not.be.true; // Not recommended
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.true; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(false, 'nooo why fail??').to.be.true;
   *
   * @name true
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('true', function () {
    this.assert(
        true === flag(this, 'object')
      , 'expected #{this} to be true'
      , 'expected #{this} to be false'
      , flag(this, 'negate') ? false : true
    );
  });

  /**
   * ### .false
   *
   * Asserts that the target is strictly (`===`) equal to `false`.
   *
   *     expect(false).to.be.false;
   *
   * Add `.not` earlier in the chain to negate `.false`. However, it's often
   * best to assert that the target is equal to its expected value, rather than
   * not equal to `false`.
   *
   *     expect(true).to.be.true; // Recommended
   *     expect(true).to.not.be.false; // Not recommended
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.false; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(true, 'nooo why fail??').to.be.false;
   *
   * @name false
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('false', function () {
    this.assert(
        false === flag(this, 'object')
      , 'expected #{this} to be false'
      , 'expected #{this} to be true'
      , flag(this, 'negate') ? true : false
    );
  });

  /**
   * ### .null
   *
   * Asserts that the target is strictly (`===`) equal to `null`.
   *
   *     expect(null).to.be.null;
   *
   * Add `.not` earlier in the chain to negate `.null`. However, it's often best
   * to assert that the target is equal to its expected value, rather than not
   * equal to `null`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.null; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(42, 'nooo why fail??').to.be.null;
   *
   * @name null
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('null', function () {
    this.assert(
        null === flag(this, 'object')
      , 'expected #{this} to be null'
      , 'expected #{this} not to be null'
    );
  });

  /**
   * ### .undefined
   *
   * Asserts that the target is strictly (`===`) equal to `undefined`.
   *
   *     expect(undefined).to.be.undefined;
   *
   * Add `.not` earlier in the chain to negate `.undefined`. However, it's often
   * best to assert that the target is equal to its expected value, rather than
   * not equal to `undefined`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.undefined; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(42, 'nooo why fail??').to.be.undefined;
   *
   * @name undefined
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('undefined', function () {
    this.assert(
        undefined === flag(this, 'object')
      , 'expected #{this} to be undefined'
      , 'expected #{this} not to be undefined'
    );
  });

  /**
   * ### .NaN
   *
   * Asserts that the target is exactly `NaN`.
   *
   *     expect(NaN).to.be.NaN;
   *
   * Add `.not` earlier in the chain to negate `.NaN`. However, it's often best
   * to assert that the target is equal to its expected value, rather than not
   * equal to `NaN`.
   *
   *     expect('foo').to.equal('foo'); // Recommended
   *     expect('foo').to.not.be.NaN; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(42, 'nooo why fail??').to.be.NaN;
   *
   * @name NaN
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('NaN', function () {
    this.assert(
        _.isNaN(flag(this, 'object'))
        , 'expected #{this} to be NaN'
        , 'expected #{this} not to be NaN'
    );
  });

  /**
   * ### .exist
   *
   * Asserts that the target is not strictly (`===`) equal to either `null` or
   * `undefined`. However, it's often best to assert that the target is equal to
   * its expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.exist; // Not recommended
   *
   *     expect(0).to.equal(0); // Recommended
   *     expect(0).to.exist; // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.exist`.
   *
   *     expect(null).to.be.null; // Recommended
   *     expect(null).to.not.exist; // Not recommended
   *
   *     expect(undefined).to.be.undefined; // Recommended
   *     expect(undefined).to.not.exist; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(null, 'nooo why fail??').to.exist;
   *
   * @name exist
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('exist', function () {
    var val = flag(this, 'object');
    this.assert(
        val !== null && val !== undefined
      , 'expected #{this} to exist'
      , 'expected #{this} to not exist'
    );
  });

  /**
   * ### .empty
   *
   * When the target is a string or array, `.empty` asserts that the target's
   * `length` property is strictly (`===`) equal to `0`.
   *
   *     expect([]).to.be.empty;
   *     expect('').to.be.empty;
   *
   * When the target is a map or set, `.empty` asserts that the target's `size`
   * property is strictly equal to `0`.
   *
   *     expect(new Set()).to.be.empty;
   *     expect(new Map()).to.be.empty;
   *
   * When the target is a non-function object, `.empty` asserts that the target
   * doesn't have any own enumerable properties. Properties with Symbol-based
   * keys are excluded from the count.
   *
   *     expect({}).to.be.empty;
   *
   * Because `.empty` does different things based on the target's type, it's
   * important to check the target's type before using `.empty`. See the `.a`
   * doc for info on testing a target's type.
   *
   *     expect([]).to.be.an('array').that.is.empty;
   *
   * Add `.not` earlier in the chain to negate `.empty`. However, it's often
   * best to assert that the target contains its expected number of values,
   * rather than asserting that it's not empty.
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.not.be.empty; // Not recommended
   *
   *     expect(new Set([1, 2, 3])).to.have.property('size', 3); // Recommended
   *     expect(new Set([1, 2, 3])).to.not.be.empty; // Not recommended
   *
   *     expect(Object.keys({a: 1})).to.have.lengthOf(1); // Recommended
   *     expect({a: 1}).to.not.be.empty; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect([1, 2, 3], 'nooo why fail??').to.be.empty;
   *
   * @name empty
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('empty', function () {
    var val = flag(this, 'object')
      , ssfi = flag(this, 'ssfi')
      , flagMsg = flag(this, 'message')
      , itemsCount;

    flagMsg = flagMsg ? flagMsg + ': ' : '';

    switch (_.type(val).toLowerCase()) {
      case 'array':
      case 'string':
        itemsCount = val.length;
        break;
      case 'map':
      case 'set':
        itemsCount = val.size;
        break;
      case 'weakmap':
      case 'weakset':
        throw new AssertionError(
          flagMsg + '.empty was passed a weak collection',
          undefined,
          ssfi
        );
      case 'function':
        var msg = flagMsg + '.empty was passed a function ' + _.getName(val);
        throw new AssertionError(msg.trim(), undefined, ssfi);
      default:
        if (val !== Object(val)) {
          throw new AssertionError(
            flagMsg + '.empty was passed non-string primitive ' + _.inspect(val),
            undefined,
            ssfi
          );
        }
        itemsCount = Object.keys(val).length;
    }

    this.assert(
        0 === itemsCount
      , 'expected #{this} to be empty'
      , 'expected #{this} not to be empty'
    );
  });

  /**
   * ### .arguments
   *
   * Asserts that the target is an `arguments` object.
   *
   *     function test () {
   *       expect(arguments).to.be.arguments;
   *     }
   *
   *     test();
   *
   * Add `.not` earlier in the chain to negate `.arguments`. However, it's often
   * best to assert which type the target is expected to be, rather than
   * asserting that its not an `arguments` object.
   *
   *     expect('foo').to.be.a('string'); // Recommended
   *     expect('foo').to.not.be.arguments; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({}, 'nooo why fail??').to.be.arguments;
   *
   * The alias `.Arguments` can be used interchangeably with `.arguments`.
   *
   * @name arguments
   * @alias Arguments
   * @namespace BDD
   * @api public
   */

  function checkArguments () {
    var obj = flag(this, 'object')
      , type = _.type(obj);
    this.assert(
        'Arguments' === type
      , 'expected #{this} to be arguments but got ' + type
      , 'expected #{this} to not be arguments'
    );
  }

  Assertion.addProperty('arguments', checkArguments);
  Assertion.addProperty('Arguments', checkArguments);

  /**
   * ### .equal(val[, msg])
   *
   * Asserts that the target is strictly (`===`) equal to the given `val`.
   *
   *     expect(1).to.equal(1);
   *     expect('foo').to.equal('foo');
   * 
   * Add `.deep` earlier in the chain to use deep equality instead. See the
   * `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target object deeply (but not strictly) equals `{a: 1}`
   *     expect({a: 1}).to.deep.equal({a: 1});
   *     expect({a: 1}).to.not.equal({a: 1});
   *
   *     // Target array deeply (but not strictly) equals `[1, 2]`
   *     expect([1, 2]).to.deep.equal([1, 2]);
   *     expect([1, 2]).to.not.equal([1, 2]);
   *
   * Add `.not` earlier in the chain to negate `.equal`. However, it's often
   * best to assert that the target is equal to its expected value, rather than
   * not equal to one of countless unexpected values.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.equal(2); // Not recommended
   *
   * `.equal` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.equal(2, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.equal(2);
   *
   * The aliases `.equals` and `eq` can be used interchangeably with `.equal`.
   *
   * @name equal
   * @alias equals
   * @alias eq
   * @param {Mixed} val
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertEqual (val, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'deep')) {
      return this.eql(val);
    } else {
      this.assert(
          val === obj
        , 'expected #{this} to equal #{exp}'
        , 'expected #{this} to not equal #{exp}'
        , val
        , this._obj
        , true
      );
    }
  }

  Assertion.addMethod('equal', assertEqual);
  Assertion.addMethod('equals', assertEqual);
  Assertion.addMethod('eq', assertEqual);

  /**
   * ### .eql(obj[, msg])
   *
   * Asserts that the target is deeply equal to the given `obj`. See the
   * `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target object is deeply (but not strictly) equal to {a: 1}
   *     expect({a: 1}).to.eql({a: 1}).but.not.equal({a: 1});
   *
   *     // Target array is deeply (but not strictly) equal to [1, 2]
   *     expect([1, 2]).to.eql([1, 2]).but.not.equal([1, 2]);
   *
   * Add `.not` earlier in the chain to negate `.eql`. However, it's often best
   * to assert that the target is deeply equal to its expected value, rather
   * than not deeply equal to one of countless unexpected values.
   *
   *     expect({a: 1}).to.eql({a: 1}); // Recommended
   *     expect({a: 1}).to.not.eql({b: 2}); // Not recommended
   *
   * `.eql` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect({a: 1}).to.eql({b: 2}, 'nooo why fail??');
   *     expect({a: 1}, 'nooo why fail??').to.eql({b: 2});
   *
   * The alias `.eqls` can be used interchangeably with `.eql`.
   *
   * The `.deep.equal` assertion is almost identical to `.eql` but with one
   * difference: `.deep.equal` causes deep equality comparisons to also be used
   * for any other assertions that follow in the chain.
   *
   * @name eql
   * @alias eqls
   * @param {Mixed} obj
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertEql(obj, msg) {
    if (msg) flag(this, 'message', msg);
    this.assert(
        _.eql(obj, flag(this, 'object'))
      , 'expected #{this} to deeply equal #{exp}'
      , 'expected #{this} to not deeply equal #{exp}'
      , obj
      , this._obj
      , true
    );
  }

  Assertion.addMethod('eql', assertEql);
  Assertion.addMethod('eqls', assertEql);

  /**
   * ### .above(n[, msg])
   *
   * Asserts that the target is a number or a date greater than the given number or date `n` respectively.
   * However, it's often best to assert that the target is equal to its expected
   * value.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.be.above(1); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the value of the
   * target's `length` property is greater than the given number `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.above(2); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.above(2); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.above`.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(1).to.not.be.above(2); // Not recommended
   *
   * `.above` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.be.above(2, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.above(2);
   *
   * The aliases `.gt` and `.greaterThan` can be used interchangeably with
   * `.above`.
   *
   * @name above
   * @alias gt
   * @alias greaterThan
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertAbove (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , doLength = flag(this, 'doLength')
      , flagMsg = flag(this, 'message')
      , msgPrefix = ((flagMsg) ? flagMsg + ': ' : '')
      , ssfi = flag(this, 'ssfi')
      , objType = _.type(obj).toLowerCase()
      , nType = _.type(n).toLowerCase()
      , shouldThrow = true;

    if (doLength) {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }
    
    if (!doLength && (objType === 'date' && nType !== 'date')) {
      errorMessage = msgPrefix + 'the argument to above must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to above must be a number';
    } else if (!doLength && (objType !== 'date' && objType !== 'number')) {
      var printObj = (objType === 'string') ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var len = obj.length;
      this.assert(
          len > n
        , 'expected #{this} to have a length above #{exp} but got #{act}'
        , 'expected #{this} to not have a length above #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj > n
        , 'expected #{this} to be above #{exp}'
        , 'expected #{this} to be at most #{exp}'
        , n
      );
    }
  }

  Assertion.addMethod('above', assertAbove);
  Assertion.addMethod('gt', assertAbove);
  Assertion.addMethod('greaterThan', assertAbove);

  /**
   * ### .least(n[, msg])
   *
   * Asserts that the target is a number or a date greater than or equal to the given
   * number or date `n` respectively. However, it's often best to assert that the target is equal to
   * its expected value.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.be.at.least(1); // Not recommended
   *     expect(2).to.be.at.least(2); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the value of the
   * target's `length` property is greater than or equal to the given number
   * `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.at.least(2); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.at.least(2); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.least`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.at.least(2); // Not recommended
   *
   * `.least` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.be.at.least(2, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.at.least(2);
   *
   * The alias `.gte` can be used interchangeably with `.least`.
   *
   * @name least
   * @alias gte
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertLeast (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , doLength = flag(this, 'doLength')
      , flagMsg = flag(this, 'message')
      , msgPrefix = ((flagMsg) ? flagMsg + ': ' : '')
      , ssfi = flag(this, 'ssfi')
      , objType = _.type(obj).toLowerCase()
      , nType = _.type(n).toLowerCase()
      , shouldThrow = true;

    if (doLength) {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && (objType === 'date' && nType !== 'date')) {
      errorMessage = msgPrefix + 'the argument to least must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to least must be a number';
    } else if (!doLength && (objType !== 'date' && objType !== 'number')) {
      var printObj = (objType === 'string') ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var len = obj.length;
      this.assert(
          len >= n
        , 'expected #{this} to have a length at least #{exp} but got #{act}'
        , 'expected #{this} to have a length below #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj >= n
        , 'expected #{this} to be at least #{exp}'
        , 'expected #{this} to be below #{exp}'
        , n
      );
    }
  }

  Assertion.addMethod('least', assertLeast);
  Assertion.addMethod('gte', assertLeast);

  /**
   * ### .below(n[, msg])
   *
   * Asserts that the target is a number or a date less than the given number or date `n` respectively.
   * However, it's often best to assert that the target is equal to its expected
   * value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.below(2); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the value of the
   * target's `length` property is less than the given number `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.below(4); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.length(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.below(4); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.below`.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.not.be.below(1); // Not recommended
   *
   * `.below` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(2).to.be.below(1, 'nooo why fail??');
   *     expect(2, 'nooo why fail??').to.be.below(1);
   *
   * The aliases `.lt` and `.lessThan` can be used interchangeably with
   * `.below`.
   *
   * @name below
   * @alias lt
   * @alias lessThan
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertBelow (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , doLength = flag(this, 'doLength')
      , flagMsg = flag(this, 'message')
      , msgPrefix = ((flagMsg) ? flagMsg + ': ' : '')
      , ssfi = flag(this, 'ssfi')
      , objType = _.type(obj).toLowerCase()
      , nType = _.type(n).toLowerCase()
      , shouldThrow = true;

    if (doLength) {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && (objType === 'date' && nType !== 'date')) {
      errorMessage = msgPrefix + 'the argument to below must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to below must be a number';
    } else if (!doLength && (objType !== 'date' && objType !== 'number')) {
      var printObj = (objType === 'string') ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var len = obj.length;
      this.assert(
          len < n
        , 'expected #{this} to have a length below #{exp} but got #{act}'
        , 'expected #{this} to not have a length below #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj < n
        , 'expected #{this} to be below #{exp}'
        , 'expected #{this} to be at least #{exp}'
        , n
      );
    }
  }

  Assertion.addMethod('below', assertBelow);
  Assertion.addMethod('lt', assertBelow);
  Assertion.addMethod('lessThan', assertBelow);

  /**
   * ### .most(n[, msg])
   *
   * Asserts that the target is a number or a date less than or equal to the given number
   * or date `n` respectively. However, it's often best to assert that the target is equal to its
   * expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.at.most(2); // Not recommended
   *     expect(1).to.be.at.most(1); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the value of the
   * target's `length` property is less than or equal to the given number `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.at.most(4); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.at.most(4); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.most`.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.not.be.at.most(1); // Not recommended
   *
   * `.most` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(2).to.be.at.most(1, 'nooo why fail??');
   *     expect(2, 'nooo why fail??').to.be.at.most(1);
   *
   * The alias `.lte` can be used interchangeably with `.most`.
   *
   * @name most
   * @alias lte
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertMost (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , doLength = flag(this, 'doLength')
      , flagMsg = flag(this, 'message')
      , msgPrefix = ((flagMsg) ? flagMsg + ': ' : '')
      , ssfi = flag(this, 'ssfi')
      , objType = _.type(obj).toLowerCase()
      , nType = _.type(n).toLowerCase()
      , shouldThrow = true;

    if (doLength) {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }
    
    if (!doLength && (objType === 'date' && nType !== 'date')) {
      errorMessage = msgPrefix + 'the argument to most must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to most must be a number';
    } else if (!doLength && (objType !== 'date' && objType !== 'number')) {
      var printObj = (objType === 'string') ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var len = obj.length;
      this.assert(
          len <= n
        , 'expected #{this} to have a length at most #{exp} but got #{act}'
        , 'expected #{this} to have a length above #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj <= n
        , 'expected #{this} to be at most #{exp}'
        , 'expected #{this} to be above #{exp}'
        , n
      );
    }
  }

  Assertion.addMethod('most', assertMost);
  Assertion.addMethod('lte', assertMost);

  /**
   * ### .within(start, finish[, msg])
   *
   * Asserts that the target is a number or a date greater than or equal to the given
   * number or date `start`, and less than or equal to the given number or date `finish` respectively.
   * However, it's often best to assert that the target is equal to its expected
   * value.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.be.within(1, 3); // Not recommended
   *     expect(2).to.be.within(2, 3); // Not recommended
   *     expect(2).to.be.within(1, 2); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the value of the
   * target's `length` property is greater than or equal to the given number
   * `start`, and less than or equal to the given number `finish`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.within(2, 4); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.within(2, 4); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.within`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.within(2, 4); // Not recommended
   *
   * `.within` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(4).to.be.within(1, 3, 'nooo why fail??');
   *     expect(4, 'nooo why fail??').to.be.within(1, 3);
   *
   * @name within
   * @param {Number} start lower bound inclusive
   * @param {Number} finish upper bound inclusive
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('within', function (start, finish, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , doLength = flag(this, 'doLength')
      , flagMsg = flag(this, 'message')
      , msgPrefix = ((flagMsg) ? flagMsg + ': ' : '')
      , ssfi = flag(this, 'ssfi')
      , objType = _.type(obj).toLowerCase()
      , startType = _.type(start).toLowerCase()
      , finishType = _.type(finish).toLowerCase()
      , shouldThrow = true
      , range = (startType === 'date' && finishType === 'date')
          ? start.toUTCString() + '..' + finish.toUTCString()
          : start + '..' + finish;

    if (doLength) {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && (objType === 'date' && (startType !== 'date' || finishType !== 'date'))) {
      errorMessage = msgPrefix + 'the arguments to within must be dates';
    } else if ((startType !== 'number' || finishType !== 'number') && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the arguments to within must be numbers';
    } else if (!doLength && (objType !== 'date' && objType !== 'number')) {
      var printObj = (objType === 'string') ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var len = obj.length;
      this.assert(
          len >= start && len <= finish
        , 'expected #{this} to have a length within ' + range
        , 'expected #{this} to not have a length within ' + range
      );
    } else {
      this.assert(
          obj >= start && obj <= finish
        , 'expected #{this} to be within ' + range
        , 'expected #{this} to not be within ' + range
      );
    }
  });

  /**
   * ### .instanceof(constructor[, msg])
   *
   * Asserts that the target is an instance of the given `constructor`.
   *
   *     function Cat () { }
   *
   *     expect(new Cat()).to.be.an.instanceof(Cat);
   *     expect([1, 2]).to.be.an.instanceof(Array);
   *
   * Add `.not` earlier in the chain to negate `.instanceof`.
   *
   *     expect({a: 1}).to.not.be.an.instanceof(Array);
   *
   * `.instanceof` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(1).to.be.an.instanceof(Array, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.an.instanceof(Array);
   *
   * Due to limitations in ES5, `.instanceof` may not always work as expected
   * when using a transpiler such as Babel or TypeScript. In particular, it may
   * produce unexpected results when subclassing built-in object such as
   * `Array`, `Error`, and `Map`. See your transpiler's docs for details:
   *
   * - ([Babel](https://babeljs.io/docs/usage/caveats/#classes))
   * - ([TypeScript](https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work))
   *
   * The alias `.instanceOf` can be used interchangeably with `.instanceof`.
   *
   * @name instanceof
   * @param {Constructor} constructor
   * @param {String} msg _optional_
   * @alias instanceOf
   * @namespace BDD
   * @api public
   */

  function assertInstanceOf (constructor, msg) {
    if (msg) flag(this, 'message', msg);

    var target = flag(this, 'object')
    var ssfi = flag(this, 'ssfi');
    var flagMsg = flag(this, 'message');

    try {
      var isInstanceOf = target instanceof constructor;
    } catch (err) {
      if (err instanceof TypeError) {
        flagMsg = flagMsg ? flagMsg + ': ' : '';
        throw new AssertionError(
          flagMsg + 'The instanceof assertion needs a constructor but '
            + _.type(constructor) + ' was given.',
          undefined,
          ssfi
        );
      }
      throw err;
    }

    var name = _.getName(constructor);
    if (name === null) {
      name = 'an unnamed constructor';
    }

    this.assert(
        isInstanceOf
      , 'expected #{this} to be an instance of ' + name
      , 'expected #{this} to not be an instance of ' + name
    );
  };

  Assertion.addMethod('instanceof', assertInstanceOf);
  Assertion.addMethod('instanceOf', assertInstanceOf);

  /**
   * ### .property(name[, val[, msg]])
   *
   * Asserts that the target has a property with the given key `name`.
   *
   *     expect({a: 1}).to.have.property('a');
   *
   * When `val` is provided, `.property` also asserts that the property's value
   * is equal to the given `val`.
   *
   *     expect({a: 1}).to.have.property('a', 1);
   *
   * By default, strict (`===`) equality is used. Add `.deep` earlier in the
   * chain to use deep equality instead. See the `deep-eql` project page for
   * info on the deep equality algorithm: https://github.com/chaijs/deep-eql.
   *
   *     // Target object deeply (but not strictly) has property `x: {a: 1}`
   *     expect({x: {a: 1}}).to.have.deep.property('x', {a: 1});
   *     expect({x: {a: 1}}).to.not.have.property('x', {a: 1});
   *
   * The target's enumerable and non-enumerable properties are always included
   * in the search. By default, both own and inherited properties are included.
   * Add `.own` earlier in the chain to exclude inherited properties from the
   * search.
   *
   *     Object.prototype.b = 2;
   *
   *     expect({a: 1}).to.have.own.property('a');
   *     expect({a: 1}).to.have.own.property('a', 1);
   *     expect({a: 1}).to.have.property('b').but.not.own.property('b'); 
   *
   * `.deep` and `.own` can be combined.
   *
   *     expect({x: {a: 1}}).to.have.deep.own.property('x', {a: 1});
   *
   * Add `.nested` earlier in the chain to enable dot- and bracket-notation when
   * referencing nested properties.
   *
   *     expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
   *     expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]', 'y');
   *
   * If `.` or `[]` are part of an actual property name, they can be escaped by
   * adding two backslashes before them.
   *
   *     expect({'.a': {'[b]': 'x'}}).to.have.nested.property('\\.a.\\[b\\]');
   *
   * `.deep` and `.nested` can be combined.
   *
   *     expect({a: {b: [{c: 3}]}})
   *       .to.have.deep.nested.property('a.b[0]', {c: 3});
   *
   * `.own` and `.nested` cannot be combined.
   *
   * Add `.not` earlier in the chain to negate `.property`.
   *
   *     expect({a: 1}).to.not.have.property('b');
   * 
   * However, it's dangerous to negate `.property` when providing `val`. The
   * problem is that it creates uncertain expectations by asserting that the
   * target either doesn't have a property with the given key `name`, or that it
   * does have a property with the given key `name` but its value isn't equal to
   * the given `val`. It's often best to identify the exact output that's
   * expected, and then write an assertion that only accepts that exact output.
   *
   * When the target isn't expected to have a property with the given key
   * `name`, it's often best to assert exactly that.
   *
   *     expect({b: 2}).to.not.have.property('a'); // Recommended
   *     expect({b: 2}).to.not.have.property('a', 1); // Not recommended
   *
   * When the target is expected to have a property with the given key `name`,
   * it's often best to assert that the property has its expected value, rather
   * than asserting that it doesn't have one of many unexpected values.
   *
   *     expect({a: 3}).to.have.property('a', 3); // Recommended
   *     expect({a: 3}).to.not.have.property('a', 1); // Not recommended
   *
   * `.property` changes the target of any assertions that follow in the chain
   * to be the value of the property from the original target object.
   *
   *     expect({a: 1}).to.have.property('a').that.is.a('number');
   *
   * `.property` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing `val`, only use the
   * second form.
   *
   *     // Recommended
   *     expect({a: 1}).to.have.property('a', 2, 'nooo why fail??');
   *     expect({a: 1}, 'nooo why fail??').to.have.property('a', 2);
   *     expect({a: 1}, 'nooo why fail??').to.have.property('b');
   *
   *     // Not recommended
   *     expect({a: 1}).to.have.property('b', undefined, 'nooo why fail??');
   * 
   * The above assertion isn't the same thing as not providing `val`. Instead,
   * it's asserting that the target object has a `b` property that's equal to
   * `undefined`.
   *
   * The assertions `.ownProperty` and `.haveOwnProperty` can be used
   * interchangeably with `.own.property`.
   *
   * @name property
   * @param {String} name
   * @param {Mixed} val (optional)
   * @param {String} msg _optional_
   * @returns value of property for chaining
   * @namespace BDD
   * @api public
   */

  function assertProperty (name, val, msg) {
    if (msg) flag(this, 'message', msg);

    var isNested = flag(this, 'nested')
      , isOwn = flag(this, 'own')
      , flagMsg = flag(this, 'message')
      , obj = flag(this, 'object')
      , ssfi = flag(this, 'ssfi');

    if (isNested && isOwn) {
      flagMsg = flagMsg ? flagMsg + ': ' : '';
      throw new AssertionError(
        flagMsg + 'The "nested" and "own" flags cannot be combined.',
        undefined,
        ssfi
      );
    }

    if (obj === null || obj === undefined) {
      flagMsg = flagMsg ? flagMsg + ': ' : '';
      throw new AssertionError(
        flagMsg + 'Target cannot be null or undefined.',
        undefined,
        ssfi
      );
    }

    var isDeep = flag(this, 'deep')
      , negate = flag(this, 'negate')
      , pathInfo = isNested ? _.getPathInfo(obj, name) : null
      , value = isNested ? pathInfo.value : obj[name];

    var descriptor = '';
    if (isDeep) descriptor += 'deep ';
    if (isOwn) descriptor += 'own ';
    if (isNested) descriptor += 'nested ';
    descriptor += 'property ';

    var hasProperty;
    if (isOwn) hasProperty = Object.prototype.hasOwnProperty.call(obj, name);
    else if (isNested) hasProperty = pathInfo.exists;
    else hasProperty = _.hasProperty(obj, name);

    // When performing a negated assertion for both name and val, merely having
    // a property with the given name isn't enough to cause the assertion to
    // fail. It must both have a property with the given name, and the value of
    // that property must equal the given val. Therefore, skip this assertion in
    // favor of the next.
    if (!negate || arguments.length === 1) {
      this.assert(
          hasProperty
        , 'expected #{this} to have ' + descriptor + _.inspect(name)
        , 'expected #{this} to not have ' + descriptor + _.inspect(name));
    }

    if (arguments.length > 1) {
      this.assert(
          hasProperty && (isDeep ? _.eql(val, value) : val === value)
        , 'expected #{this} to have ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}'
        , 'expected #{this} to not have ' + descriptor + _.inspect(name) + ' of #{act}'
        , val
        , value
      );
    }

    flag(this, 'object', value);
  }

  Assertion.addMethod('property', assertProperty);

  function assertOwnProperty (name, value, msg) {
    flag(this, 'own', true);
    assertProperty.apply(this, arguments);
  }

  Assertion.addMethod('ownProperty', assertOwnProperty);
  Assertion.addMethod('haveOwnProperty', assertOwnProperty);

  /**
   * ### .ownPropertyDescriptor(name[, descriptor[, msg]])
   *
   * Asserts that the target has its own property descriptor with the given key
   * `name`. Enumerable and non-enumerable properties are included in the
   * search.
   *
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a');
   *
   * When `descriptor` is provided, `.ownPropertyDescriptor` also asserts that
   * the property's descriptor is deeply equal to the given `descriptor`. See
   * the `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 1,
   *     });
   *
   * Add `.not` earlier in the chain to negate `.ownPropertyDescriptor`.
   *
   *     expect({a: 1}).to.not.have.ownPropertyDescriptor('b');
   * 
   * However, it's dangerous to negate `.ownPropertyDescriptor` when providing
   * a `descriptor`. The problem is that it creates uncertain expectations by
   * asserting that the target either doesn't have a property descriptor with
   * the given key `name`, or that it does have a property descriptor with the
   * given key `name` but its not deeply equal to the given `descriptor`. It's
   * often best to identify the exact output that's expected, and then write an
   * assertion that only accepts that exact output.
   *
   * When the target isn't expected to have a property descriptor with the given
   * key `name`, it's often best to assert exactly that.
   *
   *     // Recommended
   *     expect({b: 2}).to.not.have.ownPropertyDescriptor('a');
   *
   *     // Not recommended
   *     expect({b: 2}).to.not.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 1,
   *     });
   *
   * When the target is expected to have a property descriptor with the given
   * key `name`, it's often best to assert that the property has its expected
   * descriptor, rather than asserting that it doesn't have one of many
   * unexpected descriptors.
   *
   *     // Recommended
   *     expect({a: 3}).to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 3,
   *     });
   *
   *     // Not recommended
   *     expect({a: 3}).to.not.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 1,
   *     });
   *
   * `.ownPropertyDescriptor` changes the target of any assertions that follow
   * in the chain to be the value of the property descriptor from the original
   * target object.
   *
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a')
   *       .that.has.property('enumerable', true);
   *
   * `.ownPropertyDescriptor` accepts an optional `msg` argument which is a
   * custom error message to show when the assertion fails. The message can also
   * be given as the second argument to `expect`. When not providing
   * `descriptor`, only use the second form.
   *
   *     // Recommended
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 2,
   *     }, 'nooo why fail??');
   *
   *     // Recommended
   *     expect({a: 1}, 'nooo why fail??').to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 2,
   *     });
   * 
   *     // Recommended
   *     expect({a: 1}, 'nooo why fail??').to.have.ownPropertyDescriptor('b');
   *
   *     // Not recommended
   *     expect({a: 1})
   *       .to.have.ownPropertyDescriptor('b', undefined, 'nooo why fail??');
   *
   * The above assertion isn't the same thing as not providing `descriptor`.
   * Instead, it's asserting that the target object has a `b` property
   * descriptor that's deeply equal to `undefined`.
   *
   * The alias `.haveOwnPropertyDescriptor` can be used interchangeably with
   * `.ownPropertyDescriptor`.
   *
   * @name ownPropertyDescriptor
   * @alias haveOwnPropertyDescriptor
   * @param {String} name
   * @param {Object} descriptor _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertOwnPropertyDescriptor (name, descriptor, msg) {
    if (typeof descriptor === 'string') {
      msg = descriptor;
      descriptor = null;
    }
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
    if (actualDescriptor && descriptor) {
      this.assert(
          _.eql(descriptor, actualDescriptor)
        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to match ' + _.inspect(descriptor) + ', got ' + _.inspect(actualDescriptor)
        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to not match ' + _.inspect(descriptor)
        , descriptor
        , actualDescriptor
        , true
      );
    } else {
      this.assert(
          actualDescriptor
        , 'expected #{this} to have an own property descriptor for ' + _.inspect(name)
        , 'expected #{this} to not have an own property descriptor for ' + _.inspect(name)
      );
    }
    flag(this, 'object', actualDescriptor);
  }

  Assertion.addMethod('ownPropertyDescriptor', assertOwnPropertyDescriptor);
  Assertion.addMethod('haveOwnPropertyDescriptor', assertOwnPropertyDescriptor);

  /**
   * ### .lengthOf(n[, msg])
   *
   * Asserts that the target's `length` property is equal to the given number
   * `n`.
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3);
   *     expect('foo').to.have.lengthOf(3);
   *
   * Add `.not` earlier in the chain to negate `.lengthOf`. However, it's often
   * best to assert that the target's `length` property is equal to its expected
   * value, rather than not equal to one of many unexpected values.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.not.have.lengthOf(4); // Not recommended
   *
   * `.lengthOf` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect([1, 2, 3]).to.have.lengthOf(2, 'nooo why fail??');
   *     expect([1, 2, 3], 'nooo why fail??').to.have.lengthOf(2);
   *
   * `.lengthOf` can also be used as a language chain, causing all `.above`,
   * `.below`, `.least`, `.most`, and `.within` assertions that follow in the
   * chain to use the target's `length` property as the target. However, it's
   * often best to assert that the target's `length` property is equal to its
   * expected length, rather than asserting that its `length` property falls
   * within some range of values.
   *
   *     // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf(3);
   *
   *     // Not recommended
   *     expect([1, 2, 3]).to.have.lengthOf.above(2);
   *     expect([1, 2, 3]).to.have.lengthOf.below(4);
   *     expect([1, 2, 3]).to.have.lengthOf.at.least(3);
   *     expect([1, 2, 3]).to.have.lengthOf.at.most(3);
   *     expect([1, 2, 3]).to.have.lengthOf.within(2,4);
   *
   * Due to a compatibility issue, the alias `.length` can't be chained directly
   * off of an uninvoked method such as `.a`. Therefore, `.length` can't be used
   * interchangeably with `.lengthOf` in every situation. It's recommended to
   * always use `.lengthOf` instead of `.length`.
   *
   *     expect([1, 2, 3]).to.have.a.length(3); // incompatible; throws error
   *     expect([1, 2, 3]).to.have.a.lengthOf(3);  // passes as expected
   *
   * @name lengthOf
   * @alias length
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertLengthChain () {
    flag(this, 'doLength', true);
  }

  function assertLength (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    var len = obj.length;

    this.assert(
        len == n
      , 'expected #{this} to have a length of #{exp} but got #{act}'
      , 'expected #{this} to not have a length of #{act}'
      , n
      , len
    );
  }

  Assertion.addChainableMethod('length', assertLength, assertLengthChain);
  Assertion.addChainableMethod('lengthOf', assertLength, assertLengthChain);

  /**
   * ### .match(re[, msg])
   *
   * Asserts that the target matches the given regular expression `re`.
   *
   *     expect('foobar').to.match(/^foo/);
   *
   * Add `.not` earlier in the chain to negate `.match`.
   *
   *     expect('foobar').to.not.match(/taco/);
   *
   * `.match` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect('foobar').to.match(/taco/, 'nooo why fail??');
   *     expect('foobar', 'nooo why fail??').to.match(/taco/);
   *
   * The alias `.matches` can be used interchangeably with `.match`.
   *
   * @name match
   * @alias matches
   * @param {RegExp} re
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */
  function assertMatch(re, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    this.assert(
        re.exec(obj)
      , 'expected #{this} to match ' + re
      , 'expected #{this} not to match ' + re
    );
  }

  Assertion.addMethod('match', assertMatch);
  Assertion.addMethod('matches', assertMatch);

  /**
   * ### .string(str[, msg])
   *
   * Asserts that the target string contains the given substring `str`.
   *
   *     expect('foobar').to.have.string('bar');
   *
   * Add `.not` earlier in the chain to negate `.string`.
   *
   *     expect('foobar').to.not.have.string('taco');
   *
   * `.string` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect('foobar').to.have.string(/taco/, 'nooo why fail??');
   *     expect('foobar', 'nooo why fail??').to.have.string(/taco/);
   *
   * @name string
   * @param {String} str
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('string', function (str, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(obj, flagMsg, ssfi, true).is.a('string');

    this.assert(
        ~obj.indexOf(str)
      , 'expected #{this} to contain ' + _.inspect(str)
      , 'expected #{this} to not contain ' + _.inspect(str)
    );
  });

  /**
   * ### .keys(key1[, key2[, ...]])
   *
   * Asserts that the target object, array, map, or set has the given keys. Only
   * the target's own inherited properties are included in the search. 
   *
   * When the target is an object or array, keys can be provided as one or more
   * string arguments, a single array argument, or a single object argument. In
   * the latter case, only the keys in the given object matter; the values are
   * ignored.
   *
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
   *     expect(['x', 'y']).to.have.all.keys(0, 1);
   *
   *     expect({a: 1, b: 2}).to.have.all.keys(['a', 'b']);
   *     expect(['x', 'y']).to.have.all.keys([0, 1]);
   *
   *     expect({a: 1, b: 2}).to.have.all.keys({a: 4, b: 5}); // ignore 4 and 5
   *     expect(['x', 'y']).to.have.all.keys({0: 4, 1: 5}); // ignore 4 and 5
   *
   * When the target is a map or set, each key must be provided as a separate
   * argument.
   *
   *     expect(new Map([['a', 1], ['b', 2]])).to.have.all.keys('a', 'b');
   *     expect(new Set(['a', 'b'])).to.have.all.keys('a', 'b');
   *
   * Because `.keys` does different things based on the target's type, it's
   * important to check the target's type before using `.keys`. See the `.a` doc
   * for info on testing a target's type.
   *
   *     expect({a: 1, b: 2}).to.be.an('object').that.has.all.keys('a', 'b');
   *
   * By default, strict (`===`) equality is used to compare keys of maps and
   * sets. Add `.deep` earlier in the chain to use deep equality instead. See
   * the `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target set deeply (but not strictly) has key `{a: 1}`
   *     expect(new Set([{a: 1}])).to.have.all.deep.keys([{a: 1}]);
   *     expect(new Set([{a: 1}])).to.not.have.all.keys([{a: 1}]);
   *
   * By default, the target must have all of the given keys and no more. Add
   * `.any` earlier in the chain to only require that the target have at least
   * one of the given keys. Also, add `.not` earlier in the chain to negate
   * `.keys`. It's often best to add `.any` when negating `.keys`, and to use
   * `.all` when asserting `.keys` without negation.
   *
   * When negating `.keys`, `.any` is preferred because `.not.any.keys` asserts
   * exactly what's expected of the output, whereas `.not.all.keys` creates
   * uncertain expectations.
   *
   *     // Recommended; asserts that target doesn't have any of the given keys
   *     expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
   *
   *     // Not recommended; asserts that target doesn't have all of the given
   *     // keys but may or may not have some of them
   *     expect({a: 1, b: 2}).to.not.have.all.keys('c', 'd');
   *
   * When asserting `.keys` without negation, `.all` is preferred because
   * `.all.keys` asserts exactly what's expected of the output, whereas
   * `.any.keys` creates uncertain expectations.
   *
   *     // Recommended; asserts that target has all the given keys
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
   *
   *     // Not recommended; asserts that target has at least one of the given
   *     // keys but may or may not have more of them
   *     expect({a: 1, b: 2}).to.have.any.keys('a', 'b');
   *
   * Note that `.all` is used by default when neither `.all` nor `.any` appear
   * earlier in the chain. However, it's often best to add `.all` anyway because
   * it improves readability.
   *
   *     // Both assertions are identical
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b'); // Recommended
   *     expect({a: 1, b: 2}).to.have.keys('a', 'b'); // Not recommended
   *
   * Add `.include` earlier in the chain to require that the target's keys be a
   * superset of the expected keys, rather than identical sets.
   *
   *     // Target object's keys are a superset of ['a', 'b'] but not identical
   *     expect({a: 1, b: 2, c: 3}).to.include.all.keys('a', 'b');
   *     expect({a: 1, b: 2, c: 3}).to.not.have.all.keys('a', 'b');
   *
   * However, if `.any` and `.include` are combined, only the `.any` takes
   * effect. The `.include` is ignored in this case.
   *
   *     // Both assertions are identical
   *     expect({a: 1}).to.have.any.keys('a', 'b');
   *     expect({a: 1}).to.include.any.keys('a', 'b');
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({a: 1}, 'nooo why fail??').to.have.key('b');
   *
   * The alias `.key` can be used interchangeably with `.keys`.
   *
   * @name keys
   * @alias key
   * @param {...String|Array|Object} keys
   * @namespace BDD
   * @api public
   */

  function assertKeys (keys) {
    var obj = flag(this, 'object')
      , objType = _.type(obj)
      , keysType = _.type(keys)
      , ssfi = flag(this, 'ssfi')
      , isDeep = flag(this, 'deep')
      , str
      , deepStr = ''
      , ok = true
      , flagMsg = flag(this, 'message');

    flagMsg = flagMsg ? flagMsg + ': ' : '';
    var mixedArgsMsg = flagMsg + 'when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments';

    if (objType === 'Map' || objType === 'Set') {
      deepStr = isDeep ? 'deeply ' : '';
      actual = [];

      // Map and Set '.keys' aren't supported in IE 11. Therefore, use .forEach.
      obj.forEach(function (val, key) { actual.push(key) });

      if (keysType !== 'Array') {
        keys = Array.prototype.slice.call(arguments);
      }

    } else {
      actual = _.getOwnEnumerableProperties(obj);

      switch (keysType) {
        case 'Array':
          if (arguments.length > 1) {
            throw new AssertionError(mixedArgsMsg, undefined, ssfi);
          }
          break;
        case 'Object':
          if (arguments.length > 1) {
            throw new AssertionError(mixedArgsMsg, undefined, ssfi);
          }
          keys = Object.keys(keys);
          break;
        default:
          keys = Array.prototype.slice.call(arguments);
      }

      // Only stringify non-Symbols because Symbols would become "Symbol()"
      keys = keys.map(function (val) {
        return typeof val === 'symbol' ? val : String(val);
      });
    }

    if (!keys.length) {
      throw new AssertionError(flagMsg + 'keys required', undefined, ssfi);
    }

    var len = keys.length
      , any = flag(this, 'any')
      , all = flag(this, 'all')
      , expected = keys
      , actual;

    if (!any && !all) {
      all = true;
    }

    // Has any
    if (any) {
      ok = expected.some(function(expectedKey) {
        return actual.some(function(actualKey) {
          if (isDeep) {
            return _.eql(expectedKey, actualKey);
          } else {
            return expectedKey === actualKey;
          }
        });
      });
    }

    // Has all
    if (all) {
      ok = expected.every(function(expectedKey) {
        return actual.some(function(actualKey) {
          if (isDeep) {
            return _.eql(expectedKey, actualKey);
          } else {
            return expectedKey === actualKey;
          }
        });
      });

      if (!flag(this, 'contains')) {
        ok = ok && keys.length == actual.length;
      }
    }

    // Key string
    if (len > 1) {
      keys = keys.map(function(key) {
        return _.inspect(key);
      });
      var last = keys.pop();
      if (all) {
        str = keys.join(', ') + ', and ' + last;
      }
      if (any) {
        str = keys.join(', ') + ', or ' + last;
      }
    } else {
      str = _.inspect(keys[0]);
    }

    // Form
    str = (len > 1 ? 'keys ' : 'key ') + str;

    // Have / include
    str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;

    // Assertion
    this.assert(
        ok
      , 'expected #{this} to ' + deepStr + str
      , 'expected #{this} to not ' + deepStr + str
      , expected.slice(0).sort(_.compareByInspect)
      , actual.sort(_.compareByInspect)
      , true
    );
  }

  Assertion.addMethod('keys', assertKeys);
  Assertion.addMethod('key', assertKeys);

  /**
   * ### .throw([errorLike], [errMsgMatcher], [msg])
   *
   * When no arguments are provided, `.throw` invokes the target function and
   * asserts that an error is thrown.
   * 
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw();
   *
   * When one argument is provided, and it's an error constructor, `.throw`
   * invokes the target function and asserts that an error is thrown that's an
   * instance of that error constructor.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw(TypeError);
   *
   * When one argument is provided, and it's an error instance, `.throw` invokes
   * the target function and asserts that an error is thrown that's strictly
   * (`===`) equal to that error instance.
   *
   *     var err = new TypeError('Illegal salmon!');
   *     var badFn = function () { throw err; };
   *
   *     expect(badFn).to.throw(err);
   *
   * When one argument is provided, and it's a string, `.throw` invokes the
   * target function and asserts that an error is thrown with a message that
   * contains that string.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw('salmon');
   *
   * When one argument is provided, and it's a regular expression, `.throw`
   * invokes the target function and asserts that an error is thrown with a
   * message that matches that regular expression.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw(/salmon/);
   *
   * When two arguments are provided, and the first is an error instance or
   * constructor, and the second is a string or regular expression, `.throw`
   * invokes the function and asserts that an error is thrown that fulfills both
   * conditions as described above.
   *
   *     var err = new TypeError('Illegal salmon!');
   *     var badFn = function () { throw err; };
   *
   *     expect(badFn).to.throw(TypeError, 'salmon');
   *     expect(badFn).to.throw(TypeError, /salmon/);
   *     expect(badFn).to.throw(err, 'salmon');
   *     expect(badFn).to.throw(err, /salmon/);
   *
   * Add `.not` earlier in the chain to negate `.throw`.
   *     
   *     var goodFn = function () {};
   *
   *     expect(goodFn).to.not.throw();
   * 
   * However, it's dangerous to negate `.throw` when providing any arguments.
   * The problem is that it creates uncertain expectations by asserting that the
   * target either doesn't throw an error, or that it throws an error but of a
   * different type than the given type, or that it throws an error of the given
   * type but with a message that doesn't include the given string. It's often
   * best to identify the exact output that's expected, and then write an
   * assertion that only accepts that exact output.
   *
   * When the target isn't expected to throw an error, it's often best to assert
   * exactly that.
   *
   *     var goodFn = function () {};
   *
   *     expect(goodFn).to.not.throw(); // Recommended
   *     expect(goodFn).to.not.throw(ReferenceError, 'x'); // Not recommended
   *
   * When the target is expected to throw an error, it's often best to assert
   * that the error is of its expected type, and has a message that includes an
   * expected string, rather than asserting that it doesn't have one of many
   * unexpected types, and doesn't have a message that includes some string.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw(TypeError, 'salmon'); // Recommended
   *     expect(badFn).to.not.throw(ReferenceError, 'x'); // Not recommended
   *
   * `.throw` changes the target of any assertions that follow in the chain to
   * be the error object that's thrown.
   *
   *     var err = new TypeError('Illegal salmon!');
   *     err.code = 42;
   *     var badFn = function () { throw err; };
   *
   *     expect(badFn).to.throw(TypeError).with.property('code', 42);
   *
   * `.throw` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`. When not providing two arguments, always use
   * the second form.
   *
   *     var goodFn = function () {};
   *
   *     expect(goodFn).to.throw(TypeError, 'x', 'nooo why fail??');
   *     expect(goodFn, 'nooo why fail??').to.throw();
   *
   * Due to limitations in ES5, `.throw` may not always work as expected when
   * using a transpiler such as Babel or TypeScript. In particular, it may
   * produce unexpected results when subclassing the built-in `Error` object and
   * then passing the subclassed constructor to `.throw`. See your transpiler's
   * docs for details:
   *
   * - ([Babel](https://babeljs.io/docs/usage/caveats/#classes))
   * - ([TypeScript](https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work))
   *
   * Beware of some common mistakes when using the `throw` assertion. One common
   * mistake is to accidentally invoke the function yourself instead of letting
   * the `throw` assertion invoke the function for you. For example, when
   * testing if a function named `fn` throws, provide `fn` instead of `fn()` as
   * the target for the assertion.
   *
   *     expect(fn).to.throw();     // Good! Tests `fn` as desired
   *     expect(fn()).to.throw();   // Bad! Tests result of `fn()`, not `fn`
   *
   * If you need to assert that your function `fn` throws when passed certain
   * arguments, then wrap a call to `fn` inside of another function.
   *
   *     expect(function () { fn(42); }).to.throw();  // Function expression
   *     expect(() => fn(42)).to.throw();             // ES6 arrow function
   *
   * Another common mistake is to provide an object method (or any stand-alone
   * function that relies on `this`) as the target of the assertion. Doing so is
   * problematic because the `this` context will be lost when the function is
   * invoked by `.throw`; there's no way for it to know what `this` is supposed
   * to be. There are two ways around this problem. One solution is to wrap the
   * method or function call inside of another function. Another solution is to
   * use `bind`.
   *
   *     expect(function () { cat.meow(); }).to.throw();  // Function expression
   *     expect(() => cat.meow()).to.throw();             // ES6 arrow function
   *     expect(cat.meow.bind(cat)).to.throw();           // Bind
   *
   * Finally, it's worth mentioning that it's a best practice in JavaScript to
   * only throw `Error` and derivatives of `Error` such as `ReferenceError`,
   * `TypeError`, and user-defined objects that extend `Error`. No other type of
   * value will generate a stack trace when initialized. With that said, the
   * `throw` assertion does technically support any type of value being thrown,
   * not just `Error` and its derivatives.
   *
   * The aliases `.throws` and `.Throw` can be used interchangeably with
   * `.throw`.
   *
   * @name throw
   * @alias throws
   * @alias Throw
   * @param {Error|ErrorConstructor} errorLike
   * @param {String|RegExp} errMsgMatcher error message
   * @param {String} msg _optional_
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @returns error for chaining (null if no error)
   * @namespace BDD
   * @api public
   */

  function assertThrows (errorLike, errMsgMatcher, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , ssfi = flag(this, 'ssfi')
      , flagMsg = flag(this, 'message')
      , negate = flag(this, 'negate') || false;
    new Assertion(obj, flagMsg, ssfi, true).is.a('function');

    if (errorLike instanceof RegExp || typeof errorLike === 'string') {
      errMsgMatcher = errorLike;
      errorLike = null;
    }

    var caughtErr;
    try {
      obj();
    } catch (err) {
      caughtErr = err;
    }

    // If we have the negate flag enabled and at least one valid argument it means we do expect an error
    // but we want it to match a given set of criteria
    var everyArgIsUndefined = errorLike === undefined && errMsgMatcher === undefined;

    // If we've got the negate flag enabled and both args, we should only fail if both aren't compatible
    // See Issue #551 and PR #683@GitHub
    var everyArgIsDefined = Boolean(errorLike && errMsgMatcher);
    var errorLikeFail = false;
    var errMsgMatcherFail = false;

    // Checking if error was thrown
    if (everyArgIsUndefined || !everyArgIsUndefined && !negate) {
      // We need this to display results correctly according to their types
      var errorLikeString = 'an error';
      if (errorLike instanceof Error) {
        errorLikeString = '#{exp}';
      } else if (errorLike) {
        errorLikeString = _.checkError.getConstructorName(errorLike);
      }

      this.assert(
          caughtErr
        , 'expected #{this} to throw ' + errorLikeString
        , 'expected #{this} to not throw an error but #{act} was thrown'
        , errorLike && errorLike.toString()
        , (caughtErr instanceof Error ?
            caughtErr.toString() : (typeof caughtErr === 'string' ? caughtErr : caughtErr &&
                                    _.checkError.getConstructorName(caughtErr)))
      );
    }

    if (errorLike && caughtErr) {
      // We should compare instances only if `errorLike` is an instance of `Error`
      if (errorLike instanceof Error) {
        var isCompatibleInstance = _.checkError.compatibleInstance(caughtErr, errorLike);

        if (isCompatibleInstance === negate) {
          // These checks were created to ensure we won't fail too soon when we've got both args and a negate
          // See Issue #551 and PR #683@GitHub
          if (everyArgIsDefined && negate) {
            errorLikeFail = true;
          } else {
            this.assert(
                negate
              , 'expected #{this} to throw #{exp} but #{act} was thrown'
              , 'expected #{this} to not throw #{exp}' + (caughtErr && !negate ? ' but #{act} was thrown' : '')
              , errorLike.toString()
              , caughtErr.toString()
            );
          }
        }
      }

      var isCompatibleConstructor = _.checkError.compatibleConstructor(caughtErr, errorLike);
      if (isCompatibleConstructor === negate) {
        if (everyArgIsDefined && negate) {
            errorLikeFail = true;
        } else {
          this.assert(
              negate
            , 'expected #{this} to throw #{exp} but #{act} was thrown'
            , 'expected #{this} to not throw #{exp}' + (caughtErr ? ' but #{act} was thrown' : '')
            , (errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike))
            , (caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr))
          );
        }
      }
    }

    if (caughtErr && errMsgMatcher !== undefined && errMsgMatcher !== null) {
      // Here we check compatible messages
      var placeholder = 'including';
      if (errMsgMatcher instanceof RegExp) {
        placeholder = 'matching'
      }

      var isCompatibleMessage = _.checkError.compatibleMessage(caughtErr, errMsgMatcher);
      if (isCompatibleMessage === negate) {
        if (everyArgIsDefined && negate) {
            errMsgMatcherFail = true;
        } else {
          this.assert(
            negate
            , 'expected #{this} to throw error ' + placeholder + ' #{exp} but got #{act}'
            , 'expected #{this} to throw error not ' + placeholder + ' #{exp}'
            ,  errMsgMatcher
            ,  _.checkError.getMessage(caughtErr)
          );
        }
      }
    }

    // If both assertions failed and both should've matched we throw an error
    if (errorLikeFail && errMsgMatcherFail) {
      this.assert(
        negate
        , 'expected #{this} to throw #{exp} but #{act} was thrown'
        , 'expected #{this} to not throw #{exp}' + (caughtErr ? ' but #{act} was thrown' : '')
        , (errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike))
        , (caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr))
      );
    }

    flag(this, 'object', caughtErr);
  };

  Assertion.addMethod('throw', assertThrows);
  Assertion.addMethod('throws', assertThrows);
  Assertion.addMethod('Throw', assertThrows);

  /**
   * ### .respondTo(method[, msg])
   *
   * When the target is a non-function object, `.respondTo` asserts that the
   * target has a method with the given name `method`. The method can be own or
   * inherited, and it can be enumerable or non-enumerable.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *
   *     expect(new Cat()).to.respondTo('meow');
   *
   * When the target is a function, `.respondTo` asserts that the target's
   * `prototype` property has a method with the given name `method`. Again, the
   * method can be own or inherited, and it can be enumerable or non-enumerable.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *
   *     expect(Cat).to.respondTo('meow');
   *
   * Add `.itself` earlier in the chain to force `.respondTo` to treat the
   * target as a non-function object, even if it's a function. Thus, it asserts
   * that the target has a method with the given name `method`, rather than
   * asserting that the target's `prototype` property has a method with the
   * given name `method`.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *     Cat.hiss = function () {};
   *
   *     expect(Cat).itself.to.respondTo('hiss').but.not.respondTo('meow');
   *
   * When not adding `.itself`, it's important to check the target's type before
   * using `.respondTo`. See the `.a` doc for info on checking a target's type.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *
   *     expect(new Cat()).to.be.an('object').that.respondsTo('meow');
   *
   * Add `.not` earlier in the chain to negate `.respondTo`.
   *
   *     function Dog () {}
   *     Dog.prototype.bark = function () {};
   *
   *     expect(new Dog()).to.not.respondTo('meow');
   *
   * `.respondTo` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect({}).to.respondTo('meow', 'nooo why fail??');
   *     expect({}, 'nooo why fail??').to.respondTo('meow');
   *
   * The alias `.respondsTo` can be used interchangeably with `.respondTo`.
   *
   * @name respondTo
   * @alias respondsTo
   * @param {String} method
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function respondTo (method, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , itself = flag(this, 'itself')
      , context = ('function' === typeof obj && !itself)
        ? obj.prototype[method]
        : obj[method];

    this.assert(
        'function' === typeof context
      , 'expected #{this} to respond to ' + _.inspect(method)
      , 'expected #{this} to not respond to ' + _.inspect(method)
    );
  }

  Assertion.addMethod('respondTo', respondTo);
  Assertion.addMethod('respondsTo', respondTo);

  /**
   * ### .itself
   *
   * Forces all `.respondTo` assertions that follow in the chain to behave as if
   * the target is a non-function object, even if it's a function. Thus, it
   * causes `.respondTo` to assert that the target has a method with the given
   * name, rather than asserting that the target's `prototype` property has a
   * method with the given name.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *     Cat.hiss = function () {};
   *
   *     expect(Cat).itself.to.respondTo('hiss').but.not.respondTo('meow');
   *
   * @name itself
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('itself', function () {
    flag(this, 'itself', true);
  });

  /**
   * ### .satisfy(matcher[, msg])
   *
   * Invokes the given `matcher` function with the target being passed as the
   * first argument, and asserts that the value returned is truthy.
   *
   *     expect(1).to.satisfy(function(num) {
   *       return num > 0; 
   *     });
   *
   * Add `.not` earlier in the chain to negate `.satisfy`.
   *
   *     expect(1).to.not.satisfy(function(num) {
   *       return num > 2;
   *     });
   *
   * `.satisfy` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(1).to.satisfy(function(num) {
   *       return num > 2;
   *     }, 'nooo why fail??');
   *
   *     expect(1, 'nooo why fail??').to.satisfy(function(num) {
   *       return num > 2;
   *     });
   *
   * The alias `.satisfies` can be used interchangeably with `.satisfy`.
   *
   * @name satisfy
   * @alias satisfies
   * @param {Function} matcher
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function satisfy (matcher, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var result = matcher(obj);
    this.assert(
        result
      , 'expected #{this} to satisfy ' + _.objDisplay(matcher)
      , 'expected #{this} to not satisfy' + _.objDisplay(matcher)
      , flag(this, 'negate') ? false : true
      , result
    );
  }

  Assertion.addMethod('satisfy', satisfy);
  Assertion.addMethod('satisfies', satisfy);

  /**
   * ### .closeTo(expected, delta[, msg])
   *
   * Asserts that the target is a number that's within a given +/- `delta` range
   * of the given number `expected`. However, it's often best to assert that the
   * target is equal to its expected value.
   *
   *     // Recommended
   *     expect(1.5).to.equal(1.5);
   *
   *     // Not recommended
   *     expect(1.5).to.be.closeTo(1, 0.5);
   *     expect(1.5).to.be.closeTo(2, 0.5);
   *     expect(1.5).to.be.closeTo(1, 1);
   *
   * Add `.not` earlier in the chain to negate `.closeTo`.
   *
   *     expect(1.5).to.equal(1.5); // Recommended
   *     expect(1.5).to.not.be.closeTo(3, 1); // Not recommended
   *
   * `.closeTo` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(1.5).to.be.closeTo(3, 1, 'nooo why fail??');
   *     expect(1.5, 'nooo why fail??').to.be.closeTo(3, 1);
   *
   * The alias `.approximately` can be used interchangeably with `.closeTo`.
   *
   * @name closeTo
   * @alias approximately
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function closeTo(expected, delta, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');

    new Assertion(obj, flagMsg, ssfi, true).is.a('number');
    if (typeof expected !== 'number' || typeof delta !== 'number') {
      flagMsg = flagMsg ? flagMsg + ': ' : '';
      throw new AssertionError(
          flagMsg + 'the arguments to closeTo or approximately must be numbers',
          undefined,
          ssfi
      );
    }

    this.assert(
        Math.abs(obj - expected) <= delta
      , 'expected #{this} to be close to ' + expected + ' +/- ' + delta
      , 'expected #{this} not to be close to ' + expected + ' +/- ' + delta
    );
  }

  Assertion.addMethod('closeTo', closeTo);
  Assertion.addMethod('approximately', closeTo);

  // Note: Duplicates are ignored if testing for inclusion instead of sameness.
  function isSubsetOf(subset, superset, cmp, contains, ordered) {
    if (!contains) {
      if (subset.length !== superset.length) return false;
      superset = superset.slice();
    }

    return subset.every(function(elem, idx) {
      if (ordered) return cmp ? cmp(elem, superset[idx]) : elem === superset[idx];

      if (!cmp) {
        var matchIdx = superset.indexOf(elem);
        if (matchIdx === -1) return false;

        // Remove match from superset so not counted twice if duplicate in subset.
        if (!contains) superset.splice(matchIdx, 1);
        return true;
      }

      return superset.some(function(elem2, matchIdx) {
        if (!cmp(elem, elem2)) return false;

        // Remove match from superset so not counted twice if duplicate in subset.
        if (!contains) superset.splice(matchIdx, 1);
        return true;
      });
    });
  }

  /**
   * ### .members(set[, msg])
   *
   * Asserts that the target array has the same members as the given array
   * `set`.
   *
   *     expect([1, 2, 3]).to.have.members([2, 1, 3]);
   *     expect([1, 2, 2]).to.have.members([2, 1, 2]);
   *
   * By default, members are compared using strict (`===`) equality. Add `.deep`
   * earlier in the chain to use deep equality instead. See the `deep-eql`
   * project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target array deeply (but not strictly) has member `{a: 1}`
   *     expect([{a: 1}]).to.have.deep.members([{a: 1}]);
   *     expect([{a: 1}]).to.not.have.members([{a: 1}]);
   *
   * By default, order doesn't matter. Add `.ordered` earlier in the chain to
   * require that members appear in the same order.
   *
   *     expect([1, 2, 3]).to.have.ordered.members([1, 2, 3]);
   *     expect([1, 2, 3]).to.have.members([2, 1, 3])
   *       .but.not.ordered.members([2, 1, 3]);
   *
   * By default, both arrays must be the same size. Add `.include` earlier in
   * the chain to require that the target's members be a superset of the
   * expected members. Note that duplicates are ignored in the subset when
   * `.include` is added.
   *
   *     // Target array is a superset of [1, 2] but not identical
   *     expect([1, 2, 3]).to.include.members([1, 2]);
   *     expect([1, 2, 3]).to.not.have.members([1, 2]);
   *
   *     // Duplicates in the subset are ignored
   *     expect([1, 2, 3]).to.include.members([1, 2, 2, 2]);
   *
   * `.deep`, `.ordered`, and `.include` can all be combined. However, if
   * `.include` and `.ordered` are combined, the ordering begins at the start of
   * both arrays.
   *
   *     expect([{a: 1}, {b: 2}, {c: 3}])
   *       .to.include.deep.ordered.members([{a: 1}, {b: 2}])
   *       .but.not.include.deep.ordered.members([{b: 2}, {c: 3}]);
   *
   * Add `.not` earlier in the chain to negate `.members`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the target array doesn't have all of the same members as
   * the given array `set` but may or may not have some of them. It's often best
   * to identify the exact output that's expected, and then write an assertion
   * that only accepts that exact output.
   *
   *     expect([1, 2]).to.not.include(3).and.not.include(4); // Recommended
   *     expect([1, 2]).to.not.have.members([3, 4]); // Not recommended
   *
   * `.members` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect([1, 2]).to.have.members([1, 2, 3], 'nooo why fail??');
   *     expect([1, 2], 'nooo why fail??').to.have.members([1, 2, 3]);
   *
   * @name members
   * @param {Array} set
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('members', function (subset, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');

    new Assertion(obj, flagMsg, ssfi, true).to.be.an('array');
    new Assertion(subset, flagMsg, ssfi, true).to.be.an('array');

    var contains = flag(this, 'contains');
    var ordered = flag(this, 'ordered');

    var subject, failMsg, failNegateMsg, lengthCheck;

    if (contains) {
      subject = ordered ? 'an ordered superset' : 'a superset';
      failMsg = 'expected #{this} to be ' + subject + ' of #{exp}';
      failNegateMsg = 'expected #{this} to not be ' + subject + ' of #{exp}';
    } else {
      subject = ordered ? 'ordered members' : 'members';
      failMsg = 'expected #{this} to have the same ' + subject + ' as #{exp}';
      failNegateMsg = 'expected #{this} to not have the same ' + subject + ' as #{exp}';
    }

    var cmp = flag(this, 'deep') ? _.eql : undefined;

    this.assert(
        isSubsetOf(subset, obj, cmp, contains, ordered)
      , failMsg
      , failNegateMsg
      , subset
      , obj
      , true
    );
  });

  /**
   * ### .oneOf(list[, msg])
   *
   * Asserts that the target is a member of the given array `list`. However,
   * it's often best to assert that the target is equal to its expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.oneOf([1, 2, 3]); // Not recommended
   *
   * Comparisons are performed using strict (`===`) equality.
   *
   * Add `.not` earlier in the chain to negate `.oneOf`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.oneOf([2, 3, 4]); // Not recommended
   *
   * `.oneOf` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.be.oneOf([2, 3, 4], 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.oneOf([2, 3, 4]);
   *
   * @name oneOf
   * @param {Array<*>} list
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function oneOf (list, msg) {
    if (msg) flag(this, 'message', msg);
    var expected = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(list, flagMsg, ssfi, true).to.be.an('array');

    this.assert(
        list.indexOf(expected) > -1
      , 'expected #{this} to be one of #{exp}'
      , 'expected #{this} to not be one of #{exp}'
      , list
      , expected
    );
  }

  Assertion.addMethod('oneOf', oneOf);


  /**
   * ### .change(subject[, prop[, msg]])
   *
   * When one argument is provided, `.change` asserts that the given function
   * `subject` returns a different value when it's invoked before the target
   * function compared to when it's invoked afterward. However, it's often best
   * to assert that `subject` is equal to its expected value.
   *
   *     var dots = ''
   *       , addDot = function () { dots += '.'; }
   *       , getDots = function () { return dots; };
   *
   *     // Recommended
   *     expect(getDots()).to.equal('');
   *     addDot();
   *     expect(getDots()).to.equal('.');
   *
   *     // Not recommended
   *     expect(addDot).to.change(getDots);
   *
   * When two arguments are provided, `.change` asserts that the value of the
   * given object `subject`'s `prop` property is different before invoking the
   * target function compared to afterward.
   *
   *     var myObj = {dots: ''}
   *       , addDot = function () { myObj.dots += '.'; };
   *
   *     // Recommended
   *     expect(myObj).to.have.property('dots', '');
   *     addDot();
   *     expect(myObj).to.have.property('dots', '.');
   *
   *     // Not recommended
   *     expect(addDot).to.change(myObj, 'dots');
   *
   * Strict (`===`) equality is used to compare before and after values.
   *
   * Add `.not` earlier in the chain to negate `.change`.
   *
   *     var dots = ''
   *       , noop = function () {}
   *       , getDots = function () { return dots; };
   *
   *     expect(noop).to.not.change(getDots);
   *
   *     var myObj = {dots: ''}
   *       , noop = function () {};
   *
   *     expect(noop).to.not.change(myObj, 'dots');
   *
   * `.change` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing two arguments, always
   * use the second form.
   *
   *     var myObj = {dots: ''}
   *       , addDot = function () { myObj.dots += '.'; };
   *
   *     expect(addDot).to.not.change(myObj, 'dots', 'nooo why fail??');
   *
   *     var dots = ''
   *       , addDot = function () { dots += '.'; }
   *       , getDots = function () { return dots; };
   *
   *     expect(addDot, 'nooo why fail??').to.not.change(getDots);
   *
   * `.change` also causes all `.by` assertions that follow in the chain to
   * assert how much a numeric subject was increased or decreased by. However,
   * it's dangerous to use `.change.by`. The problem is that it creates
   * uncertain expectations by asserting that the subject either increases by
   * the given delta, or that it decreases by the given delta. It's often best
   * to identify the exact output that's expected, and then write an assertion
   * that only accepts that exact output.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; }
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   * The alias `.changes` can be used interchangeably with `.change`.
   *
   * @name change
   * @alias changes
   * @param {String} subject
   * @param {String} prop name _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertChanges (subject, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(fn, flagMsg, ssfi, true).is.a('function');

    var initial;
    if (!prop) {
      new Assertion(subject, flagMsg, ssfi, true).is.a('function');
      initial = subject();
    } else {
      new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
      initial = subject[prop];
    }

    fn();

    var final = prop === undefined || prop === null ? subject() : subject[prop];
    var msgObj = prop === undefined || prop === null ? initial : '.' + prop;

    // This gets flagged because of the .by(delta) assertion
    flag(this, 'deltaMsgObj', msgObj);
    flag(this, 'initialDeltaValue', initial);
    flag(this, 'finalDeltaValue', final);
    flag(this, 'deltaBehavior', 'change');
    flag(this, 'realDelta', final !== initial);

    this.assert(
      initial !== final
      , 'expected ' + msgObj + ' to change'
      , 'expected ' + msgObj + ' to not change'
    );
  }

  Assertion.addMethod('change', assertChanges);
  Assertion.addMethod('changes', assertChanges);

  /**
   * ### .increase(subject[, prop[, msg]])
   *
   * When one argument is provided, `.increase` asserts that the given function
   * `subject` returns a greater number when it's invoked after invoking the
   * target function compared to when it's invoked beforehand. `.increase` also
   * causes all `.by` assertions that follow in the chain to assert how much
   * greater of a number is returned. It's often best to assert that the return
   * value increased by the expected amount, rather than asserting it increased
   * by any amount.
   *
   *     var val = 1
   *       , addTwo = function () { val += 2; }
   *       , getVal = function () { return val; };
   *
   *     expect(addTwo).to.increase(getVal).by(2); // Recommended
   *     expect(addTwo).to.increase(getVal); // Not recommended
   *
   * When two arguments are provided, `.increase` asserts that the value of the
   * given object `subject`'s `prop` property is greater after invoking the
   * target function compared to beforehand.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.increase(myObj, 'val'); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.increase`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the subject either decreases, or that it stays the same.
   * It's often best to identify the exact output that's expected, and then
   * write an assertion that only accepts that exact output.
   *
   * When the subject is expected to decrease, it's often best to assert that it
   * decreased by the expected amount.
   *
   *     var myObj = {val: 1}
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.not.increase(myObj, 'val'); // Not recommended
   * 
   * When the subject is expected to stay the same, it's often best to assert
   * exactly that.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.not.change(myObj, 'val'); // Recommended
   *     expect(noop).to.not.increase(myObj, 'val'); // Not recommended
   *
   * `.increase` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing two arguments, always
   * use the second form.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.increase(myObj, 'val', 'nooo why fail??');
   *
   *     var val = 1
   *       , noop = function () {}
   *       , getVal = function () { return val; };
   *
   *     expect(noop, 'nooo why fail??').to.increase(getVal);
   *
   * The alias `.increases` can be used interchangeably with `.increase`.
   *
   * @name increase
   * @alias increases
   * @param {String|Function} subject
   * @param {String} prop name _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertIncreases (subject, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(fn, flagMsg, ssfi, true).is.a('function');

    var initial;
    if (!prop) {
      new Assertion(subject, flagMsg, ssfi, true).is.a('function');
      initial = subject();
    } else {
      new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
      initial = subject[prop];
    }

    // Make sure that the target is a number
    new Assertion(initial, flagMsg, ssfi, true).is.a('number');

    fn();

    var final = prop === undefined || prop === null ? subject() : subject[prop];
    var msgObj = prop === undefined || prop === null ? initial : '.' + prop;

    flag(this, 'deltaMsgObj', msgObj);
    flag(this, 'initialDeltaValue', initial);
    flag(this, 'finalDeltaValue', final);
    flag(this, 'deltaBehavior', 'increase');
    flag(this, 'realDelta', final - initial);

    this.assert(
      final - initial > 0
      , 'expected ' + msgObj + ' to increase'
      , 'expected ' + msgObj + ' to not increase'
    );
  }

  Assertion.addMethod('increase', assertIncreases);
  Assertion.addMethod('increases', assertIncreases);

  /**
   * ### .decrease(subject[, prop[, msg]])
   *
   * When one argument is provided, `.decrease` asserts that the given function
   * `subject` returns a lesser number when it's invoked after invoking the
   * target function compared to when it's invoked beforehand. `.decrease` also
   * causes all `.by` assertions that follow in the chain to assert how much
   * lesser of a number is returned. It's often best to assert that the return
   * value decreased by the expected amount, rather than asserting it decreased
   * by any amount.
   *
   *     var val = 1
   *       , subtractTwo = function () { val -= 2; }
   *       , getVal = function () { return val; };
   *
   *     expect(subtractTwo).to.decrease(getVal).by(2); // Recommended
   *     expect(subtractTwo).to.decrease(getVal); // Not recommended
   *
   * When two arguments are provided, `.decrease` asserts that the value of the
   * given object `subject`'s `prop` property is lesser after invoking the
   * target function compared to beforehand. 
   *
   *     var myObj = {val: 1}
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.decrease(myObj, 'val'); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.decrease`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the subject either increases, or that it stays the same.
   * It's often best to identify the exact output that's expected, and then
   * write an assertion that only accepts that exact output.
   *
   * When the subject is expected to increase, it's often best to assert that it
   * increased by the expected amount.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.not.decrease(myObj, 'val'); // Not recommended
   * 
   * When the subject is expected to stay the same, it's often best to assert
   * exactly that.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.not.change(myObj, 'val'); // Recommended
   *     expect(noop).to.not.decrease(myObj, 'val'); // Not recommended
   *
   * `.decrease` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing two arguments, always
   * use the second form.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.decrease(myObj, 'val', 'nooo why fail??');
   *
   *     var val = 1
   *       , noop = function () {}
   *       , getVal = function () { return val; };
   *
   *     expect(noop, 'nooo why fail??').to.decrease(getVal);
   *
   * The alias `.decreases` can be used interchangeably with `.decrease`.
   *
   * @name decrease
   * @alias decreases
   * @param {String|Function} subject
   * @param {String} prop name _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertDecreases (subject, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(fn, flagMsg, ssfi, true).is.a('function');

    var initial;
    if (!prop) {
      new Assertion(subject, flagMsg, ssfi, true).is.a('function');
      initial = subject();
    } else {
      new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
      initial = subject[prop];
    }

    // Make sure that the target is a number
    new Assertion(initial, flagMsg, ssfi, true).is.a('number');

    fn();

    var final = prop === undefined || prop === null ? subject() : subject[prop];
    var msgObj = prop === undefined || prop === null ? initial : '.' + prop;

    flag(this, 'deltaMsgObj', msgObj);
    flag(this, 'initialDeltaValue', initial);
    flag(this, 'finalDeltaValue', final);
    flag(this, 'deltaBehavior', 'decrease');
    flag(this, 'realDelta', initial - final);

    this.assert(
      final - initial < 0
      , 'expected ' + msgObj + ' to decrease'
      , 'expected ' + msgObj + ' to not decrease'
    );
  }

  Assertion.addMethod('decrease', assertDecreases);
  Assertion.addMethod('decreases', assertDecreases);

  /**
   * ### .by(delta[, msg])
   *
   * When following an `.increase` assertion in the chain, `.by` asserts that
   * the subject of the `.increase` assertion increased by the given `delta`.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2);
   *
   * When following a `.decrease` assertion in the chain, `.by` asserts that the
   * subject of the `.decrease` assertion decreased by the given `delta`.
   *
   *     var myObj = {val: 1}
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2);
   *
   * When following a `.change` assertion in the chain, `.by` asserts that the
   * subject of the `.change` assertion either increased or decreased by the
   * given `delta`. However, it's dangerous to use `.change.by`. The problem is
   * that it creates uncertain expectations. It's often best to identify the
   * exact output that's expected, and then write an assertion that only accepts
   * that exact output.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; }
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.by`. However, it's often best
   * to assert that the subject changed by its expected delta, rather than
   * asserting that it didn't change by one of countless unexpected deltas.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     // Recommended
   *     expect(addTwo).to.increase(myObj, 'val').by(2);
   *
   *     // Not recommended
   *     expect(addTwo).to.increase(myObj, 'val').but.not.by(3);
   *
   * `.by` accepts an optional `msg` argument which is a custom error message to
   * show when the assertion fails. The message can also be given as the second
   * argument to `expect`.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(3, 'nooo why fail??');
   *     expect(addTwo, 'nooo why fail??').to.increase(myObj, 'val').by(3);
   *
   * @name by
   * @param {Number} delta
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertDelta(delta, msg) {
    if (msg) flag(this, 'message', msg);

    var msgObj = flag(this, 'deltaMsgObj');
    var initial = flag(this, 'initialDeltaValue');
    var final = flag(this, 'finalDeltaValue');
    var behavior = flag(this, 'deltaBehavior');
    var realDelta = flag(this, 'realDelta');

    var expression;
    if (behavior === 'change') {
      expression = Math.abs(final - initial) === Math.abs(delta);
    } else {
      expression = realDelta === Math.abs(delta);
    }

    this.assert(
      expression
      , 'expected ' + msgObj + ' to ' + behavior + ' by ' + delta
      , 'expected ' + msgObj + ' to not ' + behavior + ' by ' + delta
    );
  }

  Assertion.addMethod('by', assertDelta);

  /**
   * ### .extensible
   *
   * Asserts that the target is extensible, which means that new properties can
   * be added to it. Primitives are never extensible.
   *
   *     expect({a: 1}).to.be.extensible;
   *
   * Add `.not` earlier in the chain to negate `.extensible`.
   *
   *     var nonExtensibleObject = Object.preventExtensions({})
   *       , sealedObject = Object.seal({})
   *       , frozenObject = Object.freeze({});
   *
   *     expect(nonExtensibleObject).to.not.be.extensible;
   *     expect(sealedObject).to.not.be.extensible;
   *     expect(frozenObject).to.not.be.extensible;
   *     expect(1).to.not.be.extensible;
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(1, 'nooo why fail??').to.be.extensible;
   *
   * @name extensible
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('extensible', function() {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is a primitive, then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return false.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
    // The following provides ES6 behavior for ES5 environments.

    var isExtensible = obj === Object(obj) && Object.isExtensible(obj);

    this.assert(
      isExtensible
      , 'expected #{this} to be extensible'
      , 'expected #{this} to not be extensible'
    );
  });

  /**
   * ### .sealed
   *
   * Asserts that the target is sealed, which means that new properties can't be
   * added to it, and its existing properties can't be reconfigured or deleted.
   * However, it's possible that its existing properties can still be reassigned
   * to different values. Primitives are always sealed.
   *
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.freeze({});
   *
   *     expect(sealedObject).to.be.sealed;
   *     expect(frozenObject).to.be.sealed;
   *     expect(1).to.be.sealed;
   *
   * Add `.not` earlier in the chain to negate `.sealed`.
   *
   *     expect({a: 1}).to.not.be.sealed;
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({a: 1}, 'nooo why fail??').to.be.sealed;
   *
   * @name sealed
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('sealed', function() {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is a primitive, then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a sealed ordinary object, simply return true.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
    // The following provides ES6 behavior for ES5 environments.

    var isSealed = obj === Object(obj) ? Object.isSealed(obj) : true;

    this.assert(
      isSealed
      , 'expected #{this} to be sealed'
      , 'expected #{this} to not be sealed'
    );
  });

  /**
   * ### .frozen
   *
   * Asserts that the target is frozen, which means that new properties can't be
   * added to it, and its existing properties can't be reassigned to different
   * values, reconfigured, or deleted. Primitives are always frozen.
   *
   *     var frozenObject = Object.freeze({});
   *
   *     expect(frozenObject).to.be.frozen;
   *     expect(1).to.be.frozen;
   *
   * Add `.not` earlier in the chain to negate `.frozen`.
   *
   *     expect({a: 1}).to.not.be.frozen;
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({a: 1}, 'nooo why fail??').to.be.frozen;
   *
   * @name frozen
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('frozen', function() {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is a primitive, then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a frozen ordinary object, simply return true.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
    // The following provides ES6 behavior for ES5 environments.

    var isFrozen = obj === Object(obj) ? Object.isFrozen(obj) : true;

    this.assert(
      isFrozen
      , 'expected #{this} to be frozen'
      , 'expected #{this} to not be frozen'
    );
  });

  /**
   * ### .finite
   *
   * Asserts that the target is a number, and isn't `NaN` or positive/negative
   * `Infinity`.
   *
   *     expect(1).to.be.finite;
   *
   * Add `.not` earlier in the chain to negate `.finite`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the subject either isn't a number, or that it's `NaN`, or
   * that it's positive `Infinity`, or that it's negative `Infinity`. It's often
   * best to identify the exact output that's expected, and then write an
   * assertion that only accepts that exact output.
   *
   * When the target isn't expected to be a number, it's often best to assert
   * that it's the expected type, rather than asserting that it isn't one of
   * many unexpected types.
   *
   *     expect('foo').to.be.a('string'); // Recommended
   *     expect('foo').to.not.be.finite; // Not recommended
   *
   * When the target is expected to be `NaN`, it's often best to assert exactly
   * that.
   *
   *     expect(NaN).to.be.NaN; // Recommended
   *     expect(NaN).to.not.be.finite; // Not recommended
   *
   * When the target is expected to be positive infinity, it's often best to
   * assert exactly that.
   *
   *     expect(Infinity).to.equal(Infinity); // Recommended
   *     expect(Infinity).to.not.be.finite; // Not recommended
   *
   * When the target is expected to be negative infinity, it's often best to
   * assert exactly that.
   *
   *     expect(-Infinity).to.equal(-Infinity); // Recommended
   *     expect(-Infinity).to.not.be.finite; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect('foo', 'nooo why fail??').to.be.finite;
   *
   * @name finite
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('finite', function(msg) {
    var obj = flag(this, 'object');

    this.assert(
        typeof obj === "number" && isFinite(obj)
      , 'expected #{this} to be a finite number'
      , 'expected #{this} to not be a finite number'
    );
  });
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, util) {
  chai.expect = function (val, message) {
    return new chai.Assertion(val, message);
  };

  /**
   * ### .fail(actual, expected, [message], [operator])
   *
   * Throw a failure.
   *
   * @name fail
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @param {String} operator
   * @namespace BDD
   * @api public
   */

  chai.expect.fail = function (actual, expected, message, operator) {
    message = message || 'expect.fail()';
    throw new chai.AssertionError(message, {
        actual: actual
      , expected: expected
      , operator: operator
    }, chai.expect.fail);
  };
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, util) {
  var Assertion = chai.Assertion;

  function loadShould () {
    // explicitly define this method as function as to have it's name to include as `ssfi`
    function shouldGetter() {
      if (this instanceof String
          || this instanceof Number
          || this instanceof Boolean
          || typeof Symbol === 'function' && this instanceof Symbol) {
        return new Assertion(this.valueOf(), null, shouldGetter);
      }
      return new Assertion(this, null, shouldGetter);
    }
    function shouldSetter(value) {
      // See https://github.com/chaijs/chai/issues/86: this makes
      // `whatever.should = someValue` actually set `someValue`, which is
      // especially useful for `global.should = require('chai').should()`.
      //
      // Note that we have to use [[DefineProperty]] instead of [[Put]]
      // since otherwise we would trigger this very setter!
      Object.defineProperty(this, 'should', {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    }
    // modify Object.prototype to have `should`
    Object.defineProperty(Object.prototype, 'should', {
      set: shouldSetter
      , get: shouldGetter
      , configurable: true
    });

    var should = {};

    /**
     * ### .fail(actual, expected, [message], [operator])
     *
     * Throw a failure.
     *
     * @name fail
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @param {String} operator
     * @namespace BDD
     * @api public
     */

    should.fail = function (actual, expected, message, operator) {
      message = message || 'should.fail()';
      throw new chai.AssertionError(message, {
          actual: actual
        , expected: expected
        , operator: operator
      }, should.fail);
    };

    /**
     * ### .equal(actual, expected, [message])
     *
     * Asserts non-strict equality (`==`) of `actual` and `expected`.
     *
     *     should.equal(3, '3', '== coerces values to strings');
     *
     * @name equal
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @namespace Should
     * @api public
     */

    should.equal = function (val1, val2, msg) {
      new Assertion(val1, msg).to.equal(val2);
    };

    /**
     * ### .throw(function, [constructor/string/regexp], [string/regexp], [message])
     *
     * Asserts that `function` will throw an error that is an instance of
     * `constructor`, or alternately that it will throw an error with message
     * matching `regexp`.
     *
     *     should.throw(fn, 'function throws a reference error');
     *     should.throw(fn, /function throws a reference error/);
     *     should.throw(fn, ReferenceError);
     *     should.throw(fn, ReferenceError, 'function throws a reference error');
     *     should.throw(fn, ReferenceError, /function throws a reference error/);
     *
     * @name throw
     * @alias Throw
     * @param {Function} function
     * @param {ErrorConstructor} constructor
     * @param {RegExp} regexp
     * @param {String} message
     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
     * @namespace Should
     * @api public
     */

    should.Throw = function (fn, errt, errs, msg) {
      new Assertion(fn, msg).to.Throw(errt, errs);
    };

    /**
     * ### .exist
     *
     * Asserts that the target is neither `null` nor `undefined`.
     *
     *     var foo = 'hi';
     *
     *     should.exist(foo, 'foo exists');
     *
     * @name exist
     * @namespace Should
     * @api public
     */

    should.exist = function (val, msg) {
      new Assertion(val, msg).to.exist;
    }

    // negation
    should.not = {}

    /**
     * ### .not.equal(actual, expected, [message])
     *
     * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
     *
     *     should.not.equal(3, 4, 'these numbers are not equal');
     *
     * @name not.equal
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @namespace Should
     * @api public
     */

    should.not.equal = function (val1, val2, msg) {
      new Assertion(val1, msg).to.not.equal(val2);
    };

    /**
     * ### .throw(function, [constructor/regexp], [message])
     *
     * Asserts that `function` will _not_ throw an error that is an instance of
     * `constructor`, or alternately that it will not throw an error with message
     * matching `regexp`.
     *
     *     should.not.throw(fn, Error, 'function does not throw');
     *
     * @name not.throw
     * @alias not.Throw
     * @param {Function} function
     * @param {ErrorConstructor} constructor
     * @param {RegExp} regexp
     * @param {String} message
     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
     * @namespace Should
     * @api public
     */

    should.not.Throw = function (fn, errt, errs, msg) {
      new Assertion(fn, msg).to.not.Throw(errt, errs);
    };

    /**
     * ### .not.exist
     *
     * Asserts that the target is neither `null` nor `undefined`.
     *
     *     var bar = null;
     *
     *     should.not.exist(bar, 'bar does not exist');
     *
     * @name not.exist
     * @namespace Should
     * @api public
     */

    should.not.exist = function (val, msg) {
      new Assertion(val, msg).to.not.exist;
    }

    should['throw'] = should['Throw'];
    should.not['throw'] = should.not['Throw'];

    return should;
  };

  chai.should = loadShould;
  chai.Should = loadShould;
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */


module.exports = function (chai, util) {

  /*!
   * Chai dependencies.
   */

  var Assertion = chai.Assertion
    , flag = util.flag;

  /*!
   * Module export.
   */

  /**
   * ### assert(expression, message)
   *
   * Write your own test expressions.
   *
   *     assert('foo' !== 'bar', 'foo is not bar');
   *     assert(Array.isArray([]), 'empty arrays are arrays');
   *
   * @param {Mixed} expression to test for truthiness
   * @param {String} message to display on error
   * @name assert
   * @namespace Assert
   * @api public
   */

  var assert = chai.assert = function (express, errmsg) {
    var test = new Assertion(null, null, chai.assert, true);
    test.assert(
        express
      , errmsg
      , '[ negation message unavailable ]'
    );
  };

  /**
   * ### .fail(actual, expected, [message], [operator])
   *
   * Throw a failure. Node.js `assert` module-compatible.
   *
   * @name fail
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @param {String} operator
   * @namespace Assert
   * @api public
   */

  assert.fail = function (actual, expected, message, operator) {
    message = message || 'assert.fail()';
    throw new chai.AssertionError(message, {
        actual: actual
      , expected: expected
      , operator: operator
    }, assert.fail);
  };

  /**
   * ### .isOk(object, [message])
   *
   * Asserts that `object` is truthy.
   *
   *     assert.isOk('everything', 'everything is ok');
   *     assert.isOk(false, 'this will fail');
   *
   * @name isOk
   * @alias ok
   * @param {Mixed} object to test
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isOk = function (val, msg) {
    new Assertion(val, msg, assert.isOk, true).is.ok;
  };

  /**
   * ### .isNotOk(object, [message])
   *
   * Asserts that `object` is falsy.
   *
   *     assert.isNotOk('everything', 'this will fail');
   *     assert.isNotOk(false, 'this will pass');
   *
   * @name isNotOk
   * @alias notOk
   * @param {Mixed} object to test
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotOk = function (val, msg) {
    new Assertion(val, msg, assert.isNotOk, true).is.not.ok;
  };

  /**
   * ### .equal(actual, expected, [message])
   *
   * Asserts non-strict equality (`==`) of `actual` and `expected`.
   *
   *     assert.equal(3, '3', '== coerces values to strings');
   *
   * @name equal
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.equal = function (act, exp, msg) {
    var test = new Assertion(act, msg, assert.equal, true);

    test.assert(
        exp == flag(test, 'object')
      , 'expected #{this} to equal #{exp}'
      , 'expected #{this} to not equal #{act}'
      , exp
      , act
      , true
    );
  };

  /**
   * ### .notEqual(actual, expected, [message])
   *
   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
   *
   *     assert.notEqual(3, 4, 'these numbers are not equal');
   *
   * @name notEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notEqual = function (act, exp, msg) {
    var test = new Assertion(act, msg, assert.notEqual, true);

    test.assert(
        exp != flag(test, 'object')
      , 'expected #{this} to not equal #{exp}'
      , 'expected #{this} to equal #{act}'
      , exp
      , act
      , true
    );
  };

  /**
   * ### .strictEqual(actual, expected, [message])
   *
   * Asserts strict equality (`===`) of `actual` and `expected`.
   *
   *     assert.strictEqual(true, true, 'these booleans are strictly equal');
   *
   * @name strictEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.strictEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.strictEqual, true).to.equal(exp);
  };

  /**
   * ### .notStrictEqual(actual, expected, [message])
   *
   * Asserts strict inequality (`!==`) of `actual` and `expected`.
   *
   *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
   *
   * @name notStrictEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notStrictEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.notStrictEqual, true).to.not.equal(exp);
  };

  /**
   * ### .deepEqual(actual, expected, [message])
   *
   * Asserts that `actual` is deeply equal to `expected`.
   *
   *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
   *
   * @name deepEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @alias deepStrictEqual
   * @namespace Assert
   * @api public
   */

  assert.deepEqual = assert.deepStrictEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.deepEqual, true).to.eql(exp);
  };

  /**
   * ### .notDeepEqual(actual, expected, [message])
   *
   * Assert that `actual` is not deeply equal to `expected`.
   *
   *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
   *
   * @name notDeepEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.notDeepEqual, true).to.not.eql(exp);
  };

   /**
   * ### .isAbove(valueToCheck, valueToBeAbove, [message])
   *
   * Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`.
   *
   *     assert.isAbove(5, 2, '5 is strictly greater than 2');
   *
   * @name isAbove
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeAbove
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isAbove = function (val, abv, msg) {
    new Assertion(val, msg, assert.isAbove, true).to.be.above(abv);
  };

   /**
   * ### .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
   *
   * Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`.
   *
   *     assert.isAtLeast(5, 2, '5 is greater or equal to 2');
   *     assert.isAtLeast(3, 3, '3 is greater or equal to 3');
   *
   * @name isAtLeast
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeAtLeast
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isAtLeast = function (val, atlst, msg) {
    new Assertion(val, msg, assert.isAtLeast, true).to.be.least(atlst);
  };

   /**
   * ### .isBelow(valueToCheck, valueToBeBelow, [message])
   *
   * Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`.
   *
   *     assert.isBelow(3, 6, '3 is strictly less than 6');
   *
   * @name isBelow
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeBelow
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isBelow = function (val, blw, msg) {
    new Assertion(val, msg, assert.isBelow, true).to.be.below(blw);
  };

   /**
   * ### .isAtMost(valueToCheck, valueToBeAtMost, [message])
   *
   * Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`.
   *
   *     assert.isAtMost(3, 6, '3 is less than or equal to 6');
   *     assert.isAtMost(4, 4, '4 is less than or equal to 4');
   *
   * @name isAtMost
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeAtMost
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isAtMost = function (val, atmst, msg) {
    new Assertion(val, msg, assert.isAtMost, true).to.be.most(atmst);
  };

  /**
   * ### .isTrue(value, [message])
   *
   * Asserts that `value` is true.
   *
   *     var teaServed = true;
   *     assert.isTrue(teaServed, 'the tea has been served');
   *
   * @name isTrue
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isTrue = function (val, msg) {
    new Assertion(val, msg, assert.isTrue, true).is['true'];
  };

  /**
   * ### .isNotTrue(value, [message])
   *
   * Asserts that `value` is not true.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotTrue(tea, 'great, time for tea!');
   *
   * @name isNotTrue
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotTrue = function (val, msg) {
    new Assertion(val, msg, assert.isNotTrue, true).to.not.equal(true);
  };

  /**
   * ### .isFalse(value, [message])
   *
   * Asserts that `value` is false.
   *
   *     var teaServed = false;
   *     assert.isFalse(teaServed, 'no tea yet? hmm...');
   *
   * @name isFalse
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isFalse = function (val, msg) {
    new Assertion(val, msg, assert.isFalse, true).is['false'];
  };

  /**
   * ### .isNotFalse(value, [message])
   *
   * Asserts that `value` is not false.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotFalse(tea, 'great, time for tea!');
   *
   * @name isNotFalse
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotFalse = function (val, msg) {
    new Assertion(val, msg, assert.isNotFalse, true).to.not.equal(false);
  };

  /**
   * ### .isNull(value, [message])
   *
   * Asserts that `value` is null.
   *
   *     assert.isNull(err, 'there was no error');
   *
   * @name isNull
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNull = function (val, msg) {
    new Assertion(val, msg, assert.isNull, true).to.equal(null);
  };

  /**
   * ### .isNotNull(value, [message])
   *
   * Asserts that `value` is not null.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotNull(tea, 'great, time for tea!');
   *
   * @name isNotNull
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotNull = function (val, msg) {
    new Assertion(val, msg, assert.isNotNull, true).to.not.equal(null);
  };

  /**
   * ### .isNaN
   *
   * Asserts that value is NaN.
   *
   *     assert.isNaN(NaN, 'NaN is NaN');
   *
   * @name isNaN
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNaN = function (val, msg) {
    new Assertion(val, msg, assert.isNaN, true).to.be.NaN;
  };

  /**
   * ### .isNotNaN
   *
   * Asserts that value is not NaN.
   *
   *     assert.isNotNaN(4, '4 is not NaN');
   *
   * @name isNotNaN
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
  assert.isNotNaN = function (val, msg) {
    new Assertion(val, msg, assert.isNotNaN, true).not.to.be.NaN;
  };

  /**
   * ### .exists
   *
   * Asserts that the target is neither `null` nor `undefined`.
   *
   *     var foo = 'hi';
   *
   *     assert.exists(foo, 'foo is neither `null` nor `undefined`');
   *
   * @name exists
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.exists = function (val, msg) {
    new Assertion(val, msg, assert.exists, true).to.exist;
  };

  /**
   * ### .notExists
   *
   * Asserts that the target is either `null` or `undefined`.
   *
   *     var bar = null
   *       , baz;
   *
   *     assert.notExists(bar);
   *     assert.notExists(baz, 'baz is either null or undefined');
   *
   * @name notExists
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notExists = function (val, msg) {
    new Assertion(val, msg, assert.notExists, true).to.not.exist;
  };

  /**
   * ### .isUndefined(value, [message])
   *
   * Asserts that `value` is `undefined`.
   *
   *     var tea;
   *     assert.isUndefined(tea, 'no tea defined');
   *
   * @name isUndefined
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isUndefined = function (val, msg) {
    new Assertion(val, msg, assert.isUndefined, true).to.equal(undefined);
  };

  /**
   * ### .isDefined(value, [message])
   *
   * Asserts that `value` is not `undefined`.
   *
   *     var tea = 'cup of chai';
   *     assert.isDefined(tea, 'tea has been defined');
   *
   * @name isDefined
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isDefined = function (val, msg) {
    new Assertion(val, msg, assert.isDefined, true).to.not.equal(undefined);
  };

  /**
   * ### .isFunction(value, [message])
   *
   * Asserts that `value` is a function.
   *
   *     function serveTea() { return 'cup of tea'; };
   *     assert.isFunction(serveTea, 'great, we can have tea now');
   *
   * @name isFunction
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isFunction = function (val, msg) {
    new Assertion(val, msg, assert.isFunction, true).to.be.a('function');
  };

  /**
   * ### .isNotFunction(value, [message])
   *
   * Asserts that `value` is _not_ a function.
   *
   *     var serveTea = [ 'heat', 'pour', 'sip' ];
   *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
   *
   * @name isNotFunction
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotFunction = function (val, msg) {
    new Assertion(val, msg, assert.isNotFunction, true).to.not.be.a('function');
  };

  /**
   * ### .isObject(value, [message])
   *
   * Asserts that `value` is an object of type 'Object' (as revealed by `Object.prototype.toString`).
   * _The assertion does not match subclassed objects._
   *
   *     var selection = { name: 'Chai', serve: 'with spices' };
   *     assert.isObject(selection, 'tea selection is an object');
   *
   * @name isObject
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isObject = function (val, msg) {
    new Assertion(val, msg, assert.isObject, true).to.be.a('object');
  };

  /**
   * ### .isNotObject(value, [message])
   *
   * Asserts that `value` is _not_ an object of type 'Object' (as revealed by `Object.prototype.toString`).
   *
   *     var selection = 'chai'
   *     assert.isNotObject(selection, 'tea selection is not an object');
   *     assert.isNotObject(null, 'null is not an object');
   *
   * @name isNotObject
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotObject = function (val, msg) {
    new Assertion(val, msg, assert.isNotObject, true).to.not.be.a('object');
  };

  /**
   * ### .isArray(value, [message])
   *
   * Asserts that `value` is an array.
   *
   *     var menu = [ 'green', 'chai', 'oolong' ];
   *     assert.isArray(menu, 'what kind of tea do we want?');
   *
   * @name isArray
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isArray = function (val, msg) {
    new Assertion(val, msg, assert.isArray, true).to.be.an('array');
  };

  /**
   * ### .isNotArray(value, [message])
   *
   * Asserts that `value` is _not_ an array.
   *
   *     var menu = 'green|chai|oolong';
   *     assert.isNotArray(menu, 'what kind of tea do we want?');
   *
   * @name isNotArray
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotArray = function (val, msg) {
    new Assertion(val, msg, assert.isNotArray, true).to.not.be.an('array');
  };

  /**
   * ### .isString(value, [message])
   *
   * Asserts that `value` is a string.
   *
   *     var teaOrder = 'chai';
   *     assert.isString(teaOrder, 'order placed');
   *
   * @name isString
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isString = function (val, msg) {
    new Assertion(val, msg, assert.isString, true).to.be.a('string');
  };

  /**
   * ### .isNotString(value, [message])
   *
   * Asserts that `value` is _not_ a string.
   *
   *     var teaOrder = 4;
   *     assert.isNotString(teaOrder, 'order placed');
   *
   * @name isNotString
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotString = function (val, msg) {
    new Assertion(val, msg, assert.isNotString, true).to.not.be.a('string');
  };

  /**
   * ### .isNumber(value, [message])
   *
   * Asserts that `value` is a number.
   *
   *     var cups = 2;
   *     assert.isNumber(cups, 'how many cups');
   *
   * @name isNumber
   * @param {Number} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNumber = function (val, msg) {
    new Assertion(val, msg, assert.isNumber, true).to.be.a('number');
  };

  /**
   * ### .isNotNumber(value, [message])
   *
   * Asserts that `value` is _not_ a number.
   *
   *     var cups = '2 cups please';
   *     assert.isNotNumber(cups, 'how many cups');
   *
   * @name isNotNumber
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotNumber = function (val, msg) {
    new Assertion(val, msg, assert.isNotNumber, true).to.not.be.a('number');
  };

   /**
   * ### .isFinite(value, [message])
   *
   * Asserts that `value` is a finite number. Unlike `.isNumber`, this will fail for `NaN` and `Infinity`.
   *
   *     var cups = 2;
   *     assert.isFinite(cups, 'how many cups');
   *
   *     assert.isFinite(NaN); // throws
   *
   * @name isFinite
   * @param {Number} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isFinite = function (val, msg) {
    new Assertion(val, msg, assert.isFinite, true).to.be.finite;
  };

  /**
   * ### .isBoolean(value, [message])
   *
   * Asserts that `value` is a boolean.
   *
   *     var teaReady = true
   *       , teaServed = false;
   *
   *     assert.isBoolean(teaReady, 'is the tea ready');
   *     assert.isBoolean(teaServed, 'has tea been served');
   *
   * @name isBoolean
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isBoolean = function (val, msg) {
    new Assertion(val, msg, assert.isBoolean, true).to.be.a('boolean');
  };

  /**
   * ### .isNotBoolean(value, [message])
   *
   * Asserts that `value` is _not_ a boolean.
   *
   *     var teaReady = 'yep'
   *       , teaServed = 'nope';
   *
   *     assert.isNotBoolean(teaReady, 'is the tea ready');
   *     assert.isNotBoolean(teaServed, 'has tea been served');
   *
   * @name isNotBoolean
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotBoolean = function (val, msg) {
    new Assertion(val, msg, assert.isNotBoolean, true).to.not.be.a('boolean');
  };

  /**
   * ### .typeOf(value, name, [message])
   *
   * Asserts that `value`'s type is `name`, as determined by
   * `Object.prototype.toString`.
   *
   *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
   *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
   *     assert.typeOf('tea', 'string', 'we have a string');
   *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
   *     assert.typeOf(null, 'null', 'we have a null');
   *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
   *
   * @name typeOf
   * @param {Mixed} value
   * @param {String} name
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.typeOf = function (val, type, msg) {
    new Assertion(val, msg, assert.typeOf, true).to.be.a(type);
  };

  /**
   * ### .notTypeOf(value, name, [message])
   *
   * Asserts that `value`'s type is _not_ `name`, as determined by
   * `Object.prototype.toString`.
   *
   *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
   *
   * @name notTypeOf
   * @param {Mixed} value
   * @param {String} typeof name
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notTypeOf = function (val, type, msg) {
    new Assertion(val, msg, assert.notTypeOf, true).to.not.be.a(type);
  };

  /**
   * ### .instanceOf(object, constructor, [message])
   *
   * Asserts that `value` is an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , chai = new Tea('chai');
   *
   *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
   *
   * @name instanceOf
   * @param {Object} object
   * @param {Constructor} constructor
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.instanceOf = function (val, type, msg) {
    new Assertion(val, msg, assert.instanceOf, true).to.be.instanceOf(type);
  };

  /**
   * ### .notInstanceOf(object, constructor, [message])
   *
   * Asserts `value` is not an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , chai = new String('chai');
   *
   *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
   *
   * @name notInstanceOf
   * @param {Object} object
   * @param {Constructor} constructor
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notInstanceOf = function (val, type, msg) {
    new Assertion(val, msg, assert.notInstanceOf, true)
      .to.not.be.instanceOf(type);
  };

  /**
   * ### .include(haystack, needle, [message])
   *
   * Asserts that `haystack` includes `needle`. Can be used to assert the
   * inclusion of a value in an array, a substring in a string, or a subset of
   * properties in an object.
   *
   *     assert.include([1,2,3], 2, 'array contains value');
   *     assert.include('foobar', 'foo', 'string contains substring');
   *     assert.include({ foo: 'bar', hello: 'universe' }, { foo: 'bar' }, 'object contains property');
   *
   * Strict equality (===) is used. When asserting the inclusion of a value in
   * an array, the array is searched for an element that's strictly equal to the
   * given value. When asserting a subset of properties in an object, the object
   * is searched for the given property keys, checking that each one is present
   * and stricty equal to the given property value. For instance:
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.include([obj1, obj2], obj1);
   *     assert.include({foo: obj1, bar: obj2}, {foo: obj1});
   *     assert.include({foo: obj1, bar: obj2}, {foo: obj1, bar: obj2});
   *
   * @name include
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.include = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.include, true).include(inc);
  };

  /**
   * ### .notInclude(haystack, needle, [message])
   *
   * Asserts that `haystack` does not include `needle`. Can be used to assert
   * the absence of a value in an array, a substring in a string, or a subset of
   * properties in an object.
   *
   *     assert.notInclude([1,2,3], 4, 'array doesn't contain value');
   *     assert.notInclude('foobar', 'baz', 'string doesn't contain substring');
   *     assert.notInclude({ foo: 'bar', hello: 'universe' }, { foo: 'baz' }, 'object doesn't contain property');
   *
   * Strict equality (===) is used. When asserting the absence of a value in an
   * array, the array is searched to confirm the absence of an element that's
   * strictly equal to the given value. When asserting a subset of properties in
   * an object, the object is searched to confirm that at least one of the given
   * property keys is either not present or not strictly equal to the given
   * property value. For instance:
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.notInclude([obj1, obj2], {a: 1});
   *     assert.notInclude({foo: obj1, bar: obj2}, {foo: {a: 1}});
   *     assert.notInclude({foo: obj1, bar: obj2}, {foo: obj1, bar: {b: 2}});
   *
   * @name notInclude
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notInclude, true).not.include(inc);
  };

  /**
   * ### .deepInclude(haystack, needle, [message])
   *
   * Asserts that `haystack` includes `needle`. Can be used to assert the
   * inclusion of a value in an array or a subset of properties in an object.
   * Deep equality is used.
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.deepInclude([obj1, obj2], {a: 1});
   *     assert.deepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}});
   *     assert.deepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}, bar: {b: 2}});
   *
   * @name deepInclude
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.deepInclude, true).deep.include(inc);
  };

  /**
   * ### .notDeepInclude(haystack, needle, [message])
   *
   * Asserts that `haystack` does not include `needle`. Can be used to assert
   * the absence of a value in an array or a subset of properties in an object.
   * Deep equality is used.
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.notDeepInclude([obj1, obj2], {a: 9});
   *     assert.notDeepInclude({foo: obj1, bar: obj2}, {foo: {a: 9}});
   *     assert.notDeepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}, bar: {b: 9}});
   *
   * @name notDeepInclude
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notDeepInclude, true).not.deep.include(inc);
  };

  /**
   * ### .nestedInclude(haystack, needle, [message])
   * 
   * Asserts that 'haystack' includes 'needle'. 
   * Can be used to assert the inclusion of a subset of properties in an 
   * object.
   * Enables the use of dot- and bracket-notation for referencing nested 
   * properties.
   * '[]' and '.' in property names can be escaped using double backslashes.
   * 
   *     assert.nestedInclude({'.a': {'b': 'x'}}, {'\\.a.[b]': 'x'});
   *     assert.nestedInclude({'a': {'[b]': 'x'}}, {'a.\\[b\\]': 'x'});
   * 
   * @name nestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public 
   */ 

  assert.nestedInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.nestedInclude, true).nested.include(inc);
  };

  /**
   * ### .notNestedInclude(haystack, needle, [message])
   * 
   * Asserts that 'haystack' does not include 'needle'. 
   * Can be used to assert the absence of a subset of properties in an 
   * object.
   * Enables the use of dot- and bracket-notation for referencing nested 
   * properties. 
   * '[]' and '.' in property names can be escaped using double backslashes.
   * 
   *     assert.notNestedInclude({'.a': {'b': 'x'}}, {'\\.a.b': 'y'});
   *     assert.notNestedInclude({'a': {'[b]': 'x'}}, {'a.\\[b\\]': 'y'});
   * 
   * @name notNestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public 
   */ 

  assert.notNestedInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notNestedInclude, true)
      .not.nested.include(inc);
  };

  /**
   * ### .deepNestedInclude(haystack, needle, [message])
   * 
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the inclusion of a subset of properties in an 
   * object while checking for deep equality.
   * Enables the use of dot- and bracket-notation for referencing nested 
   * properties.
   * '[]' and '.' in property names can be escaped using double backslashes.
   * 
   *     assert.deepNestedInclude({a: {b: [{x: 1}]}}, {'a.b[0]': {x: 1}});
   *     assert.deepNestedInclude({'.a': {'[b]': {x: 1}}}, {'\\.a.\\[b\\]': {x: 1}});
   *    
   * @name deepNestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public 
   */

  assert.deepNestedInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.deepNestedInclude, true)
      .deep.nested.include(inc);
  };

  /**
   * ### .notDeepNestedInclude(haystack, needle, [message])
   * 
   * Asserts that 'haystack' does not include 'needle'.
   * Can be used to assert the absence of a subset of properties in an 
   * object while checking for deep equality.
   * Enables the use of dot- and bracket-notation for referencing nested 
   * properties.
   * '[]' and '.' in property names can be escaped using double backslashes.
   * 
   *     assert.notDeepNestedInclude({a: {b: [{x: 1}]}}, {'a.b[0]': {y: 1}})
   *     assert.notDeepNestedInclude({'.a': {'[b]': {x: 1}}}, {'\\.a.\\[b\\]': {y: 2}});
   *    
   * @name notDeepNestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public 
   */

  assert.notDeepNestedInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.notDeepNestedInclude, true)
      .not.deep.nested.include(inc);
  };

  /**
   * ### .ownInclude(haystack, needle, [message])
   * 
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the inclusion of a subset of properties in an 
   * object while ignoring inherited properties.
   * 
   *     assert.ownInclude({ a: 1 }, { a: 1 });
   * 
   * @name ownInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.ownInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.ownInclude, true).own.include(inc);
  };

  /**
   * ### .notOwnInclude(haystack, needle, [message])
   * 
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the absence of a subset of properties in an 
   * object while ignoring inherited properties.
   * 
   *     Object.prototype.b = 2;
   * 
   *     assert.notOwnInclude({ a: 1 }, { b: 2 });
   * 
   * @name notOwnInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notOwnInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.notOwnInclude, true).not.own.include(inc);
  };

  /**
   * ### .deepOwnInclude(haystack, needle, [message])
   * 
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the inclusion of a subset of properties in an 
   * object while ignoring inherited properties and checking for deep equality.
   * 
   *      assert.deepOwnInclude({a: {b: 2}}, {a: {b: 2}});
   *      
   * @name deepOwnInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepOwnInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.deepOwnInclude, true)
      .deep.own.include(inc);
  };

   /**
   * ### .notDeepOwnInclude(haystack, needle, [message])
   * 
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the absence of a subset of properties in an 
   * object while ignoring inherited properties and checking for deep equality.
   * 
   *      assert.notDeepOwnInclude({a: {b: 2}}, {a: {c: 3}});
   *      
   * @name notDeepOwnInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepOwnInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.notDeepOwnInclude, true)
      .not.deep.own.include(inc);
  };

  /**
   * ### .match(value, regexp, [message])
   *
   * Asserts that `value` matches the regular expression `regexp`.
   *
   *     assert.match('foobar', /^foo/, 'regexp matches');
   *
   * @name match
   * @param {Mixed} value
   * @param {RegExp} regexp
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.match = function (exp, re, msg) {
    new Assertion(exp, msg, assert.match, true).to.match(re);
  };

  /**
   * ### .notMatch(value, regexp, [message])
   *
   * Asserts that `value` does not match the regular expression `regexp`.
   *
   *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
   *
   * @name notMatch
   * @param {Mixed} value
   * @param {RegExp} regexp
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notMatch = function (exp, re, msg) {
    new Assertion(exp, msg, assert.notMatch, true).to.not.match(re);
  };

  /**
   * ### .property(object, property, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property`.
   *
   *     assert.property({ tea: { green: 'matcha' }}, 'tea');
   *     assert.property({ tea: { green: 'matcha' }}, 'toString');
   *
   * @name property
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.property = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.property, true).to.have.property(prop);
  };

  /**
   * ### .notProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a direct or inherited property named
   * by `property`.
   *
   *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
   *
   * @name notProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.notProperty, true)
      .to.not.have.property(prop);
  };

  /**
   * ### .propertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property` with a value given by `value`. Uses a strict equality check
   * (===).
   *
   *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
   *
   * @name propertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.propertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.propertyVal, true)
      .to.have.property(prop, val);
  };

  /**
   * ### .notPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct or inherited property named
   * by `property` with value given by `value`. Uses a strict equality check
   * (===).
   *
   *     assert.notPropertyVal({ tea: 'is good' }, 'tea', 'is bad');
   *     assert.notPropertyVal({ tea: 'is good' }, 'coffee', 'is good');
   *
   * @name notPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notPropertyVal, true)
      .to.not.have.property(prop, val);
  };

  /**
   * ### .deepPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property` with a value given by `value`. Uses a deep equality check.
   *
   *     assert.deepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'matcha' });
   *
   * @name deepPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.deepPropertyVal, true)
      .to.have.deep.property(prop, val);
  };

  /**
   * ### .notDeepPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct or inherited property named
   * by `property` with value given by `value`. Uses a deep equality check.
   *
   *     assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { black: 'matcha' });
   *     assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'oolong' });
   *     assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'coffee', { green: 'matcha' });
   *
   * @name notDeepPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notDeepPropertyVal, true)
      .to.not.have.deep.property(prop, val);
  };

  /**
   * ### .ownProperty(object, property, [message])
   *
   * Asserts that `object` has a direct property named by `property`. Inherited
   * properties aren't checked.
   *
   *     assert.ownProperty({ tea: { green: 'matcha' }}, 'tea');
   *
   * @name ownProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @api public
   */

  assert.ownProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.ownProperty, true)
      .to.have.own.property(prop);
  };

  /**
   * ### .notOwnProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a direct property named by
   * `property`. Inherited properties aren't checked.
   *
   *     assert.notOwnProperty({ tea: { green: 'matcha' }}, 'coffee');
   *     assert.notOwnProperty({}, 'toString');
   *
   * @name notOwnProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @api public
   */

  assert.notOwnProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.notOwnProperty, true)
      .to.not.have.own.property(prop);
  };

  /**
   * ### .ownPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct property named by `property` and a value
   * equal to the provided `value`. Uses a strict equality check (===).
   * Inherited properties aren't checked.
   *
   *     assert.ownPropertyVal({ coffee: 'is good'}, 'coffee', 'is good');
   *
   * @name ownPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.ownPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.ownPropertyVal, true)
      .to.have.own.property(prop, value);
  };

  /**
   * ### .notOwnPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct property named by `property`
   * with a value equal to the provided `value`. Uses a strict equality check
   * (===). Inherited properties aren't checked.
   *
   *     assert.notOwnPropertyVal({ tea: 'is better'}, 'tea', 'is worse');
   *     assert.notOwnPropertyVal({}, 'toString', Object.prototype.toString);
   *
   * @name notOwnPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.notOwnPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.notOwnPropertyVal, true)
      .to.not.have.own.property(prop, value);
  };

  /**
   * ### .deepOwnPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct property named by `property` and a value
   * equal to the provided `value`. Uses a deep equality check. Inherited
   * properties aren't checked.
   *
   *     assert.deepOwnPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'matcha' });
   *
   * @name deepOwnPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.deepOwnPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.deepOwnPropertyVal, true)
      .to.have.deep.own.property(prop, value);
  };

  /**
   * ### .notDeepOwnPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct property named by `property`
   * with a value equal to the provided `value`. Uses a deep equality check.
   * Inherited properties aren't checked.
   *
   *     assert.notDeepOwnPropertyVal({ tea: { green: 'matcha' } }, 'tea', { black: 'matcha' });
   *     assert.notDeepOwnPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'oolong' });
   *     assert.notDeepOwnPropertyVal({ tea: { green: 'matcha' } }, 'coffee', { green: 'matcha' });
   *     assert.notDeepOwnPropertyVal({}, 'toString', Object.prototype.toString);
   *
   * @name notDeepOwnPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.notDeepOwnPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.notDeepOwnPropertyVal, true)
      .to.not.have.deep.own.property(prop, value);
  };

  /**
   * ### .nestedProperty(object, property, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property`, which can be a string using dot- and bracket-notation for
   * nested reference.
   *
   *     assert.nestedProperty({ tea: { green: 'matcha' }}, 'tea.green');
   *
   * @name nestedProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.nestedProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.nestedProperty, true)
      .to.have.nested.property(prop);
  };

  /**
   * ### .notNestedProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property`, which
   * can be a string using dot- and bracket-notation for nested reference. The
   * property cannot exist on the object nor anywhere in its prototype chain.
   *
   *     assert.notNestedProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
   *
   * @name notNestedProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notNestedProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.notNestedProperty, true)
      .to.not.have.nested.property(prop);
  };

  /**
   * ### .nestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property` with value given
   * by `value`. `property` can use dot- and bracket-notation for nested
   * reference. Uses a strict equality check (===).
   *
   *     assert.nestedPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
   *
   * @name nestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.nestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.nestedPropertyVal, true)
      .to.have.nested.property(prop, val);
  };

  /**
   * ### .notNestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property` with
   * value given by `value`. `property` can use dot- and bracket-notation for
   * nested reference. Uses a strict equality check (===).
   *
   *     assert.notNestedPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
   *     assert.notNestedPropertyVal({ tea: { green: 'matcha' }}, 'coffee.green', 'matcha');
   *
   * @name notNestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notNestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notNestedPropertyVal, true)
      .to.not.have.nested.property(prop, val);
  };

  /**
   * ### .deepNestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property` with a value given
   * by `value`. `property` can use dot- and bracket-notation for nested
   * reference. Uses a deep equality check.
   *
   *     assert.deepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yum' });
   *
   * @name deepNestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepNestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.deepNestedPropertyVal, true)
      .to.have.deep.nested.property(prop, val);
  };

  /**
   * ### .notDeepNestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property` with
   * value given by `value`. `property` can use dot- and bracket-notation for
   * nested reference. Uses a deep equality check.
   *
   *     assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { oolong: 'yum' });
   *     assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yuck' });
   *     assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.black', { matcha: 'yum' });
   *
   * @name notDeepNestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepNestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notDeepNestedPropertyVal, true)
      .to.not.have.deep.nested.property(prop, val);
  }

  /**
   * ### .lengthOf(object, length, [message])
   *
   * Asserts that `object` has a `length` property with the expected value.
   *
   *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
   *     assert.lengthOf('foobar', 6, 'string has length of 6');
   *
   * @name lengthOf
   * @param {Mixed} object
   * @param {Number} length
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.lengthOf = function (exp, len, msg) {
    new Assertion(exp, msg, assert.lengthOf, true).to.have.lengthOf(len);
  };

  /**
   * ### .hasAnyKeys(object, [keys], [message])
   *
   * Asserts that `object` has at least one of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'iDontExist', 'baz']);
   *     assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, iDontExist: 99, baz: 1337});
   *     assert.hasAnyKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
   *     assert.hasAnyKeys(new Set([{foo: 'bar'}, 'anotherKey']), [{foo: 'bar'}, 'anotherKey']);
   *
   * @name hasAnyKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.hasAnyKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAnyKeys, true).to.have.any.keys(keys);
  }

  /**
   * ### .hasAllKeys(object, [keys], [message])
   *
   * Asserts that `object` has all and only all of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
   *     assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337]);
   *     assert.hasAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
   *     assert.hasAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'anotherKey']);
   *
   * @name hasAllKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.hasAllKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAllKeys, true).to.have.all.keys(keys);
  }

  /**
   * ### .containsAllKeys(object, [keys], [message])
   *
   * Asserts that `object` has all of the `keys` provided but may have more keys not listed.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'baz']);
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, baz: 1337});
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337});
   *     assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}]);
   *     assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
   *     assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}]);
   *     assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'anotherKey']);
   *
   * @name containsAllKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.containsAllKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.containsAllKeys, true)
      .to.contain.all.keys(keys);
  }

  /**
   * ### .doesNotHaveAnyKeys(object, [keys], [message])
   *
   * Asserts that `object` has none of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, ['one', 'two', 'example']);
   *     assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, {one: 1, two: 2, example: 'foo'});
   *     assert.doesNotHaveAnyKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{one: 'two'}, 'example']);
   *     assert.doesNotHaveAnyKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{one: 'two'}, 'example']);
   *
   * @name doesNotHaveAnyKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.doesNotHaveAnyKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAnyKeys, true)
      .to.not.have.any.keys(keys);
  }

  /**
   * ### .doesNotHaveAllKeys(object, [keys], [message])
   *
   * Asserts that `object` does not have at least one of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.doesNotHaveAllKeys({foo: 1, bar: 2, baz: 3}, ['one', 'two', 'example']);
   *     assert.doesNotHaveAllKeys({foo: 1, bar: 2, baz: 3}, {one: 1, two: 2, example: 'foo'});
   *     assert.doesNotHaveAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{one: 'two'}, 'example']);
   *     assert.doesNotHaveAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{one: 'two'}, 'example']);
   *
   * @name doesNotHaveAllKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.doesNotHaveAllKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAllKeys, true)
      .to.not.have.all.keys(keys);
  }

  /**
   * ### .hasAnyDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` has at least one of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {one: 'one'});
   *     assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), [{one: 'one'}, {two: 'two'}]);
   *     assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
   *     assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {one: 'one'});
   *     assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {three: 'three'}]);
   *     assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
   *
   * @name doesNotHaveAllKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.hasAnyDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAnyDeepKeys, true)
      .to.have.any.deep.keys(keys);
  }

 /**
   * ### .hasAllDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` has all and only all of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.hasAllDeepKeys(new Map([[{one: 'one'}, 'valueOne']]), {one: 'one'});
   *     assert.hasAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
   *     assert.hasAllDeepKeys(new Set([{one: 'one'}]), {one: 'one'});
   *     assert.hasAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
   *
   * @name hasAllDeepKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.hasAllDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAllDeepKeys, true)
      .to.have.all.deep.keys(keys);
  }

 /**
   * ### .containsAllDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` contains all of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.containsAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {one: 'one'});
   *     assert.containsAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
   *     assert.containsAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {one: 'one'});
   *     assert.containsAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
   *
   * @name containsAllDeepKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.containsAllDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.containsAllDeepKeys, true)
      .to.contain.all.deep.keys(keys);
  }

 /**
   * ### .doesNotHaveAnyDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` has none of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.doesNotHaveAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {thisDoesNot: 'exist'});
   *     assert.doesNotHaveAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{twenty: 'twenty'}, {fifty: 'fifty'}]);
   *     assert.doesNotHaveAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {twenty: 'twenty'});
   *     assert.doesNotHaveAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{twenty: 'twenty'}, {fifty: 'fifty'}]);
   *
   * @name doesNotHaveAnyDeepKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.doesNotHaveAnyDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAnyDeepKeys, true)
      .to.not.have.any.deep.keys(keys);
  }

 /**
   * ### .doesNotHaveAllDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` does not have at least one of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.doesNotHaveAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {thisDoesNot: 'exist'});
   *     assert.doesNotHaveAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{twenty: 'twenty'}, {one: 'one'}]);
   *     assert.doesNotHaveAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {twenty: 'twenty'});
   *     assert.doesNotHaveAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {fifty: 'fifty'}]);
   *
   * @name doesNotHaveAllDeepKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.doesNotHaveAllDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAllDeepKeys, true)
      .to.not.have.all.deep.keys(keys);
  }

 /**
   * ### .throws(fn, [errorLike/string/regexp], [string/regexp], [message])
   *
   * If `errorLike` is an `Error` constructor, asserts that `fn` will throw an error that is an
   * instance of `errorLike`.
   * If `errorLike` is an `Error` instance, asserts that the error thrown is the same
   * instance as `errorLike`.
   * If `errMsgMatcher` is provided, it also asserts that the error thrown will have a
   * message matching `errMsgMatcher`.
   *
   *     assert.throws(fn, 'function throws a reference error');
   *     assert.throws(fn, /function throws a reference error/);
   *     assert.throws(fn, ReferenceError);
   *     assert.throws(fn, errorInstance);
   *     assert.throws(fn, ReferenceError, 'Error thrown must be a ReferenceError and have this msg');
   *     assert.throws(fn, errorInstance, 'Error thrown must be the same errorInstance and have this msg');
   *     assert.throws(fn, ReferenceError, /Error thrown must be a ReferenceError and match this/);
   *     assert.throws(fn, errorInstance, /Error thrown must be the same errorInstance and match this/);
   *
   * @name throws
   * @alias throw
   * @alias Throw
   * @param {Function} fn
   * @param {ErrorConstructor|Error} errorLike
   * @param {RegExp|String} errMsgMatcher
   * @param {String} message
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @namespace Assert
   * @api public
   */

  assert.throws = function (fn, errorLike, errMsgMatcher, msg) {
    if ('string' === typeof errorLike || errorLike instanceof RegExp) {
      errMsgMatcher = errorLike;
      errorLike = null;
    }

    var assertErr = new Assertion(fn, msg, assert.throws, true)
      .to.throw(errorLike, errMsgMatcher);
    return flag(assertErr, 'object');
  };

  /**
   * ### .doesNotThrow(fn, [errorLike/string/regexp], [string/regexp], [message])
   *
   * If `errorLike` is an `Error` constructor, asserts that `fn` will _not_ throw an error that is an
   * instance of `errorLike`.
   * If `errorLike` is an `Error` instance, asserts that the error thrown is _not_ the same
   * instance as `errorLike`.
   * If `errMsgMatcher` is provided, it also asserts that the error thrown will _not_ have a
   * message matching `errMsgMatcher`.
   *
   *     assert.doesNotThrow(fn, 'Any Error thrown must not have this message');
   *     assert.doesNotThrow(fn, /Any Error thrown must not match this/);
   *     assert.doesNotThrow(fn, Error);
   *     assert.doesNotThrow(fn, errorInstance);
   *     assert.doesNotThrow(fn, Error, 'Error must not have this message');
   *     assert.doesNotThrow(fn, errorInstance, 'Error must not have this message');
   *     assert.doesNotThrow(fn, Error, /Error must not match this/);
   *     assert.doesNotThrow(fn, errorInstance, /Error must not match this/);
   *
   * @name doesNotThrow
   * @param {Function} fn
   * @param {ErrorConstructor} errorLike
   * @param {RegExp|String} errMsgMatcher
   * @param {String} message
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @namespace Assert
   * @api public
   */

  assert.doesNotThrow = function (fn, errorLike, errMsgMatcher, msg) {
    if ('string' === typeof errorLike || errorLike instanceof RegExp) {
      errMsgMatcher = errorLike;
      errorLike = null;
    }

    new Assertion(fn, msg, assert.doesNotThrow, true)
      .to.not.throw(errorLike, errMsgMatcher);
  };

  /**
   * ### .operator(val1, operator, val2, [message])
   *
   * Compares two values using `operator`.
   *
   *     assert.operator(1, '<', 2, 'everything is ok');
   *     assert.operator(1, '>', 2, 'this will fail');
   *
   * @name operator
   * @param {Mixed} val1
   * @param {String} operator
   * @param {Mixed} val2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.operator = function (val, operator, val2, msg) {
    var ok;
    switch(operator) {
      case '==':
        ok = val == val2;
        break;
      case '===':
        ok = val === val2;
        break;
      case '>':
        ok = val > val2;
        break;
      case '>=':
        ok = val >= val2;
        break;
      case '<':
        ok = val < val2;
        break;
      case '<=':
        ok = val <= val2;
        break;
      case '!=':
        ok = val != val2;
        break;
      case '!==':
        ok = val !== val2;
        break;
      default:
        msg = msg ? msg + ': ' : msg;
        throw new chai.AssertionError(
          msg + 'Invalid operator "' + operator + '"',
          undefined,
          assert.operator
        );
    }
    var test = new Assertion(ok, msg, assert.operator, true);
    test.assert(
        true === flag(test, 'object')
      , 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2)
      , 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2) );
  };

  /**
   * ### .closeTo(actual, expected, delta, [message])
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
   *
   * @name closeTo
   * @param {Number} actual
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.closeTo = function (act, exp, delta, msg) {
    new Assertion(act, msg, assert.closeTo, true).to.be.closeTo(exp, delta);
  };

  /**
   * ### .approximately(actual, expected, delta, [message])
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     assert.approximately(1.5, 1, 0.5, 'numbers are close');
   *
   * @name approximately
   * @param {Number} actual
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.approximately = function (act, exp, delta, msg) {
    new Assertion(act, msg, assert.approximately, true)
      .to.be.approximately(exp, delta);
  };

  /**
   * ### .sameMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in any order. Uses a
   * strict equality check (===).
   *
   *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
   *
   * @name sameMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameMembers, true)
      .to.have.same.members(set2);
  }

  /**
   * ### .notSameMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in any order.
   * Uses a strict equality check (===).
   *
   *     assert.notSameMembers([ 1, 2, 3 ], [ 5, 1, 3 ], 'not same members');
   *
   * @name notSameMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameMembers, true)
      .to.not.have.same.members(set2);
  }

  /**
   * ### .sameDeepMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in any order. Uses a
   * deep equality check.
   *
   *     assert.sameDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [{ b: 2 }, { a: 1 }, { c: 3 }], 'same deep members');
   *
   * @name sameDeepMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameDeepMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameDeepMembers, true)
      .to.have.same.deep.members(set2);
  }

  /**
   * ### .notSameDeepMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in any order.
   * Uses a deep equality check.
   *
   *     assert.notSameDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [{ b: 2 }, { a: 1 }, { f: 5 }], 'not same deep members');
   *
   * @name notSameDeepMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameDeepMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameDeepMembers, true)
      .to.not.have.same.deep.members(set2);
  }

  /**
   * ### .sameOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in the same order.
   * Uses a strict equality check (===).
   *
   *     assert.sameOrderedMembers([ 1, 2, 3 ], [ 1, 2, 3 ], 'same ordered members');
   *
   * @name sameOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameOrderedMembers, true)
      .to.have.same.ordered.members(set2);
  }

  /**
   * ### .notSameOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in the same
   * order. Uses a strict equality check (===).
   *
   *     assert.notSameOrderedMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'not same ordered members');
   *
   * @name notSameOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameOrderedMembers, true)
      .to.not.have.same.ordered.members(set2);
  }

  /**
   * ### .sameDeepOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in the same order.
   * Uses a deep equality check.
   *
   * assert.sameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 }, { c: 3 } ], 'same deep ordered members');
   *
   * @name sameDeepOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameDeepOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameDeepOrderedMembers, true)
      .to.have.same.deep.ordered.members(set2);
  }

  /**
   * ### .notSameDeepOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in the same
   * order. Uses a deep equality check.
   *
   * assert.notSameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 }, { z: 5 } ], 'not same deep ordered members');
   * assert.notSameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 }, { c: 3 } ], 'not same deep ordered members');
   *
   * @name notSameDeepOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameDeepOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameDeepOrderedMembers, true)
      .to.not.have.same.deep.ordered.members(set2);
  }

  /**
   * ### .includeMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in any order. Uses a
   * strict equality check (===). Duplicates are ignored.
   *
   *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1, 2 ], 'include members');
   *
   * @name includeMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeMembers, true)
      .to.include.members(subset);
  }

  /**
   * ### .notIncludeMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in any order. Uses a
   * strict equality check (===). Duplicates are ignored.
   *
   *     assert.notIncludeMembers([ 1, 2, 3 ], [ 5, 1 ], 'not include members');
   *
   * @name notIncludeMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeMembers, true)
      .to.not.include.members(subset);
  }

  /**
   * ### .includeDeepMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in any order. Uses a deep
   * equality check. Duplicates are ignored.
   *
   *     assert.includeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 }, { b: 2 } ], 'include deep members');
   *
   * @name includeDeepMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeDeepMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeDeepMembers, true)
      .to.include.deep.members(subset);
  }

  /**
   * ### .notIncludeDeepMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in any order. Uses a
   * deep equality check. Duplicates are ignored.
   *
   *     assert.notIncludeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { f: 5 } ], 'not include deep members');
   *
   * @name notIncludeDeepMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeDeepMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeDeepMembers, true)
      .to.not.include.deep.members(subset);
  }

  /**
   * ### .includeOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a strict equality
   * check (===).
   *
   *     assert.includeOrderedMembers([ 1, 2, 3 ], [ 1, 2 ], 'include ordered members');
   *
   * @name includeOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeOrderedMembers, true)
      .to.include.ordered.members(subset);
  }

  /**
   * ### .notIncludeOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a strict equality
   * check (===).
   *
   *     assert.notIncludeOrderedMembers([ 1, 2, 3 ], [ 2, 1 ], 'not include ordered members');
   *     assert.notIncludeOrderedMembers([ 1, 2, 3 ], [ 2, 3 ], 'not include ordered members');
   *
   * @name notIncludeOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeOrderedMembers, true)
      .to.not.include.ordered.members(subset);
  }

  /**
   * ### .includeDeepOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a deep equality
   * check.
   *
   *     assert.includeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 } ], 'include deep ordered members');
   *
   * @name includeDeepOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeDeepOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeDeepOrderedMembers, true)
      .to.include.deep.ordered.members(subset);
  }

  /**
   * ### .notIncludeDeepOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a deep equality
   * check.
   *
   *     assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { f: 5 } ], 'not include deep ordered members');
   *     assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 } ], 'not include deep ordered members');
   *     assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { c: 3 } ], 'not include deep ordered members');
   *
   * @name notIncludeDeepOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeDeepOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeDeepOrderedMembers, true)
      .to.not.include.deep.ordered.members(subset);
  }

  /**
   * ### .oneOf(inList, list, [message])
   *
   * Asserts that non-object, non-array value `inList` appears in the flat array `list`.
   *
   *     assert.oneOf(1, [ 2, 1 ], 'Not found in list');
   *
   * @name oneOf
   * @param {*} inList
   * @param {Array<*>} list
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.oneOf = function (inList, list, msg) {
    new Assertion(inList, msg, assert.oneOf, true).to.be.oneOf(list);
  }

  /**
   * ### .changes(function, object, property, [message])
   *
   * Asserts that a function changes the value of a property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 22 };
   *     assert.changes(fn, obj, 'val');
   *
   * @name changes
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.changes = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.changes, true).to.change(obj, prop);
  }

   /**
   * ### .changesBy(function, object, property, delta, [message])
   *
   * Asserts that a function changes the value of a property by an amount (delta).
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val += 2 };
   *     assert.changesBy(fn, obj, 'val', 2);
   *
   * @name changesBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.changesBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.changesBy, true)
      .to.change(obj, prop).by(delta);
  }

   /**
   * ### .doesNotChange(function, object, property, [message])
   *
   * Asserts that a function does not change the value of a property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { console.log('foo'); };
   *     assert.doesNotChange(fn, obj, 'val');
   *
   * @name doesNotChange
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotChange = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotChange, true)
      .to.not.change(obj, prop);
  }

  /**
   * ### .changesButNotBy(function, object, property, delta, [message])
   *
   * Asserts that a function does not change the value of a property or of a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val += 10 };
   *     assert.changesButNotBy(fn, obj, 'val', 5);
   *
   * @name changesButNotBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.changesButNotBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.changesButNotBy, true)
      .to.change(obj, prop).but.not.by(delta);
  }

  /**
   * ### .increases(function, object, property, [message])
   *
   * Asserts that a function increases a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 13 };
   *     assert.increases(fn, obj, 'val');
   *
   * @name increases
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.increases = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.increases, true)
      .to.increase(obj, prop);
  }

  /**
   * ### .increasesBy(function, object, property, delta, [message])
   *
   * Asserts that a function increases a numeric object property or a function's return value by an amount (delta).
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val += 10 };
   *     assert.increasesBy(fn, obj, 'val', 10);
   *
   * @name increasesBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.increasesBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.increasesBy, true)
      .to.increase(obj, prop).by(delta);
  }

  /**
   * ### .doesNotIncrease(function, object, property, [message])
   *
   * Asserts that a function does not increase a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 8 };
   *     assert.doesNotIncrease(fn, obj, 'val');
   *
   * @name doesNotIncrease
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotIncrease = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotIncrease, true)
      .to.not.increase(obj, prop);
  }

  /**
   * ### .increasesButNotBy(function, object, property, [message])
   *
   * Asserts that a function does not increase a numeric object property or function's return value by an amount (delta).
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 15 };
   *     assert.increasesButNotBy(fn, obj, 'val', 10);
   *
   * @name increasesButNotBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.increasesButNotBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.increasesButNotBy, true)
      .to.increase(obj, prop).but.not.by(delta);
  }

  /**
   * ### .decreases(function, object, property, [message])
   *
   * Asserts that a function decreases a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 5 };
   *     assert.decreases(fn, obj, 'val');
   *
   * @name decreases
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.decreases = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.decreases, true)
      .to.decrease(obj, prop);
  }

  /**
   * ### .decreasesBy(function, object, property, delta, [message])
   *
   * Asserts that a function decreases a numeric object property or a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val -= 5 };
   *     assert.decreasesBy(fn, obj, 'val', 5);
   *
   * @name decreasesBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.decreasesBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.decreasesBy, true)
      .to.decrease(obj, prop).by(delta);
  }

  /**
   * ### .doesNotDecrease(function, object, property, [message])
   *
   * Asserts that a function does not decreases a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 15 };
   *     assert.doesNotDecrease(fn, obj, 'val');
   *
   * @name doesNotDecrease
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotDecrease = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotDecrease, true)
      .to.not.decrease(obj, prop);
  }

  /**
   * ### .doesNotDecreaseBy(function, object, property, delta, [message])
   *
   * Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 5 };
   *     assert.doesNotDecreaseBy(fn, obj, 'val', 1);
   *
   * @name doesNotDecrease
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotDecreaseBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotDecreaseBy, true)
      .to.not.decrease(obj, prop).by(delta);
  }

  /**
   * ### .decreasesButNotBy(function, object, property, delta, [message])
   *
   * Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 5 };
   *     assert.decreasesButNotBy(fn, obj, 'val', 1);
   *
   * @name decreasesButNotBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.decreasesButNotBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.decreasesButNotBy, true)
      .to.decrease(obj, prop).but.not.by(delta);
  }

  /*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */

  assert.ifError = function (val) {
    if (val) {
      throw(val);
    }
  };

  /**
   * ### .isExtensible(object)
   *
   * Asserts that `object` is extensible (can have new properties added to it).
   *
   *     assert.isExtensible({});
   *
   * @name isExtensible
   * @alias extensible
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isExtensible = function (obj, msg) {
    new Assertion(obj, msg, assert.isExtensible, true).to.be.extensible;
  };

  /**
   * ### .isNotExtensible(object)
   *
   * Asserts that `object` is _not_ extensible.
   *
   *     var nonExtensibleObject = Object.preventExtensions({});
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.freeze({});
   *
   *     assert.isNotExtensible(nonExtensibleObject);
   *     assert.isNotExtensible(sealedObject);
   *     assert.isNotExtensible(frozenObject);
   *
   * @name isNotExtensible
   * @alias notExtensible
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotExtensible = function (obj, msg) {
    new Assertion(obj, msg, assert.isNotExtensible, true).to.not.be.extensible;
  };

  /**
   * ### .isSealed(object)
   *
   * Asserts that `object` is sealed (cannot have new properties added to it
   * and its existing properties cannot be removed).
   *
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.seal({});
   *
   *     assert.isSealed(sealedObject);
   *     assert.isSealed(frozenObject);
   *
   * @name isSealed
   * @alias sealed
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isSealed = function (obj, msg) {
    new Assertion(obj, msg, assert.isSealed, true).to.be.sealed;
  };

  /**
   * ### .isNotSealed(object)
   *
   * Asserts that `object` is _not_ sealed.
   *
   *     assert.isNotSealed({});
   *
   * @name isNotSealed
   * @alias notSealed
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotSealed = function (obj, msg) {
    new Assertion(obj, msg, assert.isNotSealed, true).to.not.be.sealed;
  };

  /**
   * ### .isFrozen(object)
   *
   * Asserts that `object` is frozen (cannot have new properties added to it
   * and its existing properties cannot be modified).
   *
   *     var frozenObject = Object.freeze({});
   *     assert.frozen(frozenObject);
   *
   * @name isFrozen
   * @alias frozen
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isFrozen = function (obj, msg) {
    new Assertion(obj, msg, assert.isFrozen, true).to.be.frozen;
  };

  /**
   * ### .isNotFrozen(object)
   *
   * Asserts that `object` is _not_ frozen.
   *
   *     assert.isNotFrozen({});
   *
   * @name isNotFrozen
   * @alias notFrozen
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotFrozen = function (obj, msg) {
    new Assertion(obj, msg, assert.isNotFrozen, true).to.not.be.frozen;
  };

  /**
   * ### .isEmpty(target)
   *
   * Asserts that the target does not contain any values.
   * For arrays and strings, it checks the `length` property.
   * For `Map` and `Set` instances, it checks the `size` property.
   * For non-function objects, it gets the count of own
   * enumerable string keys.
   *
   *     assert.isEmpty([]);
   *     assert.isEmpty('');
   *     assert.isEmpty(new Map);
   *     assert.isEmpty({});
   *
   * @name isEmpty
   * @alias empty
   * @param {Object|Array|String|Map|Set} target
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isEmpty = function(val, msg) {
    new Assertion(val, msg, assert.isEmpty, true).to.be.empty;
  };

  /**
   * ### .isNotEmpty(target)
   *
   * Asserts that the target contains values.
   * For arrays and strings, it checks the `length` property.
   * For `Map` and `Set` instances, it checks the `size` property.
   * For non-function objects, it gets the count of own
   * enumerable string keys.
   *
   *     assert.isNotEmpty([1, 2]);
   *     assert.isNotEmpty('34');
   *     assert.isNotEmpty(new Set([5, 6]));
   *     assert.isNotEmpty({ key: 7 });
   *
   * @name isNotEmpty
   * @alias notEmpty
   * @param {Object|Array|String|Map|Set} target
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotEmpty = function(val, msg) {
    new Assertion(val, msg, assert.isNotEmpty, true).to.not.be.empty;
  };

  /*!
   * Aliases.
   */

  (function alias(name, as){
    assert[as] = assert[name];
    return alias;
  })
  ('isOk', 'ok')
  ('isNotOk', 'notOk')
  ('throws', 'throw')
  ('throws', 'Throw')
  ('isExtensible', 'extensible')
  ('isNotExtensible', 'notExtensible')
  ('isSealed', 'sealed')
  ('isNotSealed', 'notSealed')
  ('isFrozen', 'frozen')
  ('isNotFrozen', 'notFrozen')
  ('isEmpty', 'empty')
  ('isNotEmpty', 'notEmpty');
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ACTION = /^\s*(\w+ ?\w*):\s+(.+)/;
var TEXT = /^\s*\[(-?\d+), (-?\d+)\]:\s+(.+)/;
var WINDOW_SIZE = /^\[(-?\d+), (-?\d+)\]$/;
var RECTANGLE = /^\[(-?\d+), (-?\d+), (-?\d+), (-?\d+)\]\s+(.+)$/;
var REPEAT = /^Image\s+\("(.+)"\)\s+\[(-?\d+), (-?\d+)\]\s+Size\s+\((-?\d+), (-?\d+)\)\s+(.+)$/;
var PATH = /^Path \((.+)\)$/;
var VECTOR = /^Vector\(x: (-?\d+), y: (-?\d+)\)$/;
var BEZIER_CURVE = /^BezierCurve\(x0: (-?\d+), y0: (-?\d+), x1: (-?\d+), y1: (-?\d+), cx0: (-?\d+), cy0: (-?\d+), cx1: (-?\d+), cy1: (-?\d+)\)$/;
var SHAPE = /^(rgba?\((:?.+)\)) (Path .+)$/;
var CIRCLE = /^(rgba?\((:?.+)\)) Circle\(x: (-?\d+), y: (-?\d+), r: (-?\d+)\)$/;
var IMAGE = /^Image\s+\("(.+)"\)\s+\(source:\s+\[(-?\d+), (-?\d+), (-?\d+), (-?\d+)\]\)\s+\(destination:\s+\[(-?\d+), (-?\d+), (-?\d+), (-?\d+)\]\)$/;
var CANVAS = /^(Canvas)\s+\(source:\s+\[(-?\d+), (-?\d+), (-?\d+), (-?\d+)\]\)\s+\(destination:\s+\[(-?\d+), (-?\d+), (-?\d+), (-?\d+)\]\)$/;
var GRADIENT = /^\[(-?\d+), (-?\d+), (-?\d+), (-?\d+)\]\s+linear-gradient\(x0: (-?\d+), x1: (-?\d+), y0: (-?\d+), y1: (-?\d+) (.+)\)$/;
var TRANSFORM = /^\((-?\d+), (-?\d+)\) \[(.+)\]$/;

function parsePath(path) {
    var parts = path.match(PATH)[1];
    return parts.split(' > ').map(function (p) {
        var vector = p.match(VECTOR);
        if (vector) {
            return {
                type: 'Vector',
                x: parseInt(vector[1], 10),
                y: parseInt(vector[2], 10)
            };
        } else {
            var bezier = p.match(BEZIER_CURVE);
            return {
                type: 'BezierCurve',
                x0: parseInt(bezier[1], 10),
                y0: parseInt(bezier[2], 10),
                x1: parseInt(bezier[3], 10),
                y1: parseInt(bezier[4], 10),
                cx0: parseInt(bezier[5], 10),
                cy0: parseInt(bezier[6], 10),
                cx1: parseInt(bezier[7], 10),
                cy1: parseInt(bezier[8], 10)
            };
        }
    });
}

function parseRefTest(txt) {
    return txt.split(/\n/g).filter(function (l) {
        return l.length > 0;
    }).map(function (l, i) {
        var parseAction = l.match(ACTION);
        if (!parseAction) {
            var text = l.match(TEXT);
            return {
                action: 'T',
                x: parseInt(text[1], 10),
                y: parseInt(text[2], 10),
                text: text[3],
                line: i + 1
            };
        }
        var args = parseAction[2];

        var data = {
            action: parseAction[1],
            line: i + 1
        };

        switch (data.action) {
            case 'Opacity':
                data.opacity = parseFloat(args);
                break;
            case 'Fill':
                data.color = args;
                break;
            case 'Clip':
                data.path = args.split(' | ').map(function (path) {
                    return parsePath(path);
                });
                break;
            case 'Window':
                var windowSize = args.match(WINDOW_SIZE);
                data.width = parseInt(windowSize[1], 10);
                data.height = parseInt(windowSize[2], 10);
                break;
            case 'Rectangle':
                var rectangle = args.match(RECTANGLE);
                data.x = parseInt(rectangle[1], 10);
                data.y = parseInt(rectangle[2], 10);
                data.width = parseInt(rectangle[3], 10);
                data.height = parseInt(rectangle[4], 10);
                data.color = rectangle[5];
                break;
            case 'Repeat':
                var repeat = args.match(REPEAT);
                data.imageSrc = repeat[1];
                data.x = parseInt(repeat[2], 10);
                data.y = parseInt(repeat[3], 10);
                data.width = parseInt(repeat[4], 10);
                data.height = parseInt(repeat[5], 10);
                data.path = parsePath(repeat[6]);
                break;
            case 'Shape':
                var shape = args.match(SHAPE);
                if (!shape) {
                    var circle = args.match(CIRCLE);
                    data.color = circle[1];
                    data.path = [{
                        type: 'Circle',
                        x: parseInt(circle[2], 10),
                        y: parseInt(circle[3], 10),
                        r: parseInt(circle[4], 10)
                    }];
                } else {
                    data.color = shape[1];
                    data.path = parsePath(shape[3]);
                }
                break;
            case 'Text':
                data.font = args;
                break;
            case 'Draw image':
                var image = args.match(IMAGE) ? args.match(IMAGE) : args.match(CANVAS);
                data.imageSrc = image[1];
                data.sx = parseInt(image[2], 10);
                data.xy = parseInt(image[3], 10);
                data.sw = parseInt(image[4], 10);
                data.sh = parseInt(image[5], 10);
                data.dx = parseInt(image[6], 10);
                data.dy = parseInt(image[7], 10);
                data.dw = parseInt(image[8], 10);
                data.dh = parseInt(image[9], 10);
                break;
            case 'Gradient':
                var gradient = args.match(GRADIENT);
                data.x = parseInt(gradient[1], 10);
                data.y = parseInt(gradient[2], 10);
                data.width = parseInt(gradient[3], 10);
                data.height = parseInt(gradient[4], 10);
                data.x0 = parseInt(gradient[5], 10);
                data.x1 = parseInt(gradient[6], 10);
                data.y0 = parseInt(gradient[7], 10);
                data.y1 = parseInt(gradient[8], 10);
                data.stops = gradient[9];
                break;
            case 'Transform':
                var transform = args.match(TRANSFORM);
                data.x = parseInt(transform[1], 10);
                data.y = parseInt(transform[2], 10);
                data.matrix = transform[3];
                break;
            default:
                console.log(args);
                throw new Error('Unhandled action ' + data.action);
        }

        return data;
    });
}

module.exports = parseRefTest;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports={"/tests/reftests/acid2.html":[{"action":"Window","line":1,"width":800,"height":1496},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":1496,"color":"rgb(255,255,255)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":5,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":6,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":7,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":8,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":9,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":10,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":11,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":12,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":13,"path":[[{"type":"Vector","x":96,"y":130},{"type":"Vector","x":216,"y":130},{"type":"Vector","x":216,"y":142},{"type":"Vector","x":96,"y":142}]]},{"action":"Fill","line":14,"color":"rgb(255,0,0)"},{"action":"Repeat","line":15,"imageSrc":"/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVR42mP4%2F58BAAT%2FAf9jgNErAAAAAElF","x":108,"y":130,"width":1,"height":1,"path":[{"type":"Vector","x":96,"y":130},{"type":"Vector","x":216,"y":130},{"type":"Vector","x":216,"y":142},{"type":"Vector","x":96,"y":142}]},{"action":"Shape","line":16,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":96,"y":130},{"type":"Vector","x":216,"y":130},{"type":"Vector","x":204,"y":130},{"type":"Vector","x":108,"y":130}]},{"action":"Shape","line":17,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":216,"y":130},{"type":"Vector","x":216,"y":142},{"type":"Vector","x":204,"y":142},{"type":"Vector","x":204,"y":130}]},{"action":"Clip","line":18,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":19,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":20,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":21,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":22,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":23,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":24,"path":[[{"type":"Vector","x":96,"y":238},{"type":"Vector","x":216,"y":238},{"type":"Vector","x":216,"y":250},{"type":"Vector","x":96,"y":250}]]},{"action":"Fill","line":25,"color":"rgb(255,255,0)"},{"action":"Repeat","line":26,"imageSrc":"/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAFSDNYfAAAAaklEQVR42u3XQQrAIAwAQeP%2F%2F6wf8CJBJTK9","x":108,"y":238,"width":64,"height":64,"path":[{"type":"Vector","x":108,"y":238},{"type":"Vector","x":172,"y":238},{"type":"Vector","x":172,"y":302},{"type":"Vector","x":108,"y":302}]},{"action":"Shape","line":27,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":96,"y":238},{"type":"Vector","x":216,"y":238},{"type":"Vector","x":204,"y":238},{"type":"Vector","x":108,"y":238}]},{"action":"Shape","line":28,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":216,"y":238},{"type":"Vector","x":216,"y":250},{"type":"Vector","x":204,"y":250},{"type":"Vector","x":204,"y":238}]},{"action":"Clip","line":29,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":30,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":31,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":32,"path":[[{"type":"Vector","x":108,"y":250},{"type":"Vector","x":204,"y":250},{"type":"Vector","x":204,"y":262},{"type":"Vector","x":108,"y":262}]]},{"action":"Fill","line":33,"color":"rgb(255,255,0)"},{"action":"Shape","line":34,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":108,"y":250},{"type":"Vector","x":204,"y":250},{"type":"Vector","x":180,"y":250},{"type":"Vector","x":132,"y":250}]},{"action":"Shape","line":35,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":204,"y":250},{"type":"Vector","x":204,"y":262},{"type":"Vector","x":180,"y":262},{"type":"Vector","x":180,"y":250}]},{"action":"Shape","line":36,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":204,"y":262},{"type":"Vector","x":108,"y":262},{"type":"Vector","x":132,"y":262},{"type":"Vector","x":180,"y":262}]},{"action":"Shape","line":37,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":108,"y":262},{"type":"Vector","x":108,"y":250},{"type":"Vector","x":132,"y":250},{"type":"Vector","x":132,"y":262}]},{"action":"Clip","line":38,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":39,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":40,"path":[[{"type":"Vector","x":132,"y":262},{"type":"Vector","x":180,"y":262},{"type":"Vector","x":180,"y":274},{"type":"Vector","x":132,"y":274}]]},{"action":"Fill","line":41,"color":"rgb(255,0,0)"},{"action":"Clip","line":42,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":43,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":44,"path":[[{"type":"Vector","x":132,"y":262},{"type":"Vector","x":144,"y":262},{"type":"Vector","x":144,"y":274},{"type":"Vector","x":132,"y":274}]]},{"action":"Fill","line":45,"color":"rgb(0,0,0)"},{"action":"Clip","line":46,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":47,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":48,"path":[[{"type":"Vector","x":144,"y":262},{"type":"Vector","x":156,"y":262},{"type":"Vector","x":156,"y":274},{"type":"Vector","x":144,"y":274}]]},{"action":"Fill","line":49,"color":"rgb(0,0,0)"},{"action":"Clip","line":50,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":51,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":52,"path":[[{"type":"Vector","x":156,"y":262},{"type":"Vector","x":168,"y":262},{"type":"Vector","x":168,"y":274},{"type":"Vector","x":156,"y":274}]]},{"action":"Fill","line":53,"color":"rgb(0,0,0)"},{"action":"Clip","line":54,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":55,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":56,"path":[[{"type":"Vector","x":168,"y":262},{"type":"Vector","x":180,"y":262},{"type":"Vector","x":180,"y":274},{"type":"Vector","x":168,"y":274}]]},{"action":"Fill","line":57,"color":"rgb(0,0,0)"},{"action":"Clip","line":58,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":59,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}],[{"type":"Vector","x":48,"y":274},{"type":"Vector","x":788,"y":274},{"type":"Vector","x":788,"y":284},{"type":"Vector","x":48,"y":284}]]},{"action":"Clip","line":60,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}],[{"type":"Vector","x":48,"y":274},{"type":"Vector","x":788,"y":274},{"type":"Vector","x":788,"y":284},{"type":"Vector","x":48,"y":284}]]},{"action":"Clip","line":61,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}],[{"type":"Vector","x":48,"y":274},{"type":"Vector","x":788,"y":274},{"type":"Vector","x":788,"y":284},{"type":"Vector","x":48,"y":284}]]},{"action":"Clip","line":62,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}],[{"type":"Vector","x":48,"y":274},{"type":"Vector","x":788,"y":274},{"type":"Vector","x":788,"y":284},{"type":"Vector","x":48,"y":284}]]},{"action":"Clip","line":63,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}],[{"type":"Vector","x":48,"y":274},{"type":"Vector","x":788,"y":274},{"type":"Vector","x":788,"y":284},{"type":"Vector","x":48,"y":284}]]},{"action":"Clip","line":64,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Shape","line":65,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":72,"y":166},{"type":"Vector","x":240,"y":166},{"type":"Vector","x":228,"y":166},{"type":"Vector","x":84,"y":166}]},{"action":"Shape","line":66,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":240,"y":166},{"type":"Vector","x":240,"y":214},{"type":"Vector","x":228,"y":202},{"type":"Vector","x":228,"y":166}]},{"action":"Shape","line":67,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":240,"y":214},{"type":"Vector","x":72,"y":214},{"type":"Vector","x":84,"y":202},{"type":"Vector","x":228,"y":202}]},{"action":"Clip","line":68,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":69,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":70,"path":[[{"type":"Vector","x":84,"y":166},{"type":"Vector","x":228,"y":166},{"type":"Vector","x":228,"y":214},{"type":"Vector","x":84,"y":214}]]},{"action":"Fill","line":71,"color":"rgb(255,255,0)"},{"action":"Clip","line":72,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":73,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":74,"path":[[{"type":"Vector","x":144,"y":178},{"type":"Vector","x":168,"y":178},{"type":"Vector","x":168,"y":202},{"type":"Vector","x":144,"y":202}]]},{"action":"Fill","line":75,"color":"rgb(255,0,0)"},{"action":"Clip","line":76,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":77,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Shape","line":78,"color":"rgb(255,255,0)","path":[{"type":"Vector","x":144,"y":178},{"type":"Vector","x":168,"y":178},{"type":"Vector","x":156,"y":178},{"type":"Vector","x":156,"y":178}]},{"action":"Shape","line":79,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":168,"y":178},{"type":"Vector","x":168,"y":190},{"type":"Vector","x":156,"y":178},{"type":"Vector","x":156,"y":178}]},{"action":"Shape","line":80,"color":"rgb(255,255,0)","path":[{"type":"Vector","x":168,"y":190},{"type":"Vector","x":144,"y":190},{"type":"Vector","x":156,"y":178},{"type":"Vector","x":156,"y":178}]},{"action":"Clip","line":81,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":82,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Shape","line":83,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":144,"y":190},{"type":"Vector","x":168,"y":190},{"type":"Vector","x":156,"y":202},{"type":"Vector","x":156,"y":202}]},{"action":"Shape","line":84,"color":"rgb(255,255,0)","path":[{"type":"Vector","x":168,"y":190},{"type":"Vector","x":168,"y":202},{"type":"Vector","x":156,"y":202},{"type":"Vector","x":156,"y":202}]},{"action":"Shape","line":85,"color":"rgb(255,255,0)","path":[{"type":"Vector","x":168,"y":202},{"type":"Vector","x":144,"y":202},{"type":"Vector","x":156,"y":202},{"type":"Vector","x":156,"y":202}]},{"action":"Clip","line":86,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":87,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":88,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}],[{"type":"Vector","x":48,"y":274},{"type":"Vector","x":788,"y":274},{"type":"Vector","x":788,"y":284},{"type":"Vector","x":48,"y":284}]]},{"action":"Clip","line":89,"path":[[{"type":"Vector","x":48,"y":429},{"type":"Vector","x":112,"y":429},{"type":"Vector","x":112,"y":493},{"type":"Vector","x":48,"y":493}]]},{"action":"Draw image","line":90,"imageSrc":"/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAFSDNYfAAAAaklEQVR42u3XQQrAIAwAQeP%2F%2F6wf8CJBJTK9","sx":0,"xy":0,"sw":64,"sh":64,"dx":0,"dy":0,"dw":64,"dh":64},{"action":"Clip","line":91,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":92,"path":[[{"type":"Vector","x":132,"y":108},{"type":"Vector","x":180,"y":108},{"type":"Vector","x":180,"y":126},{"type":"Vector","x":132,"y":126}]]},{"action":"Fill","line":93,"color":"rgb(0,0,0)"},{"action":"Shape","line":94,"color":"rgb(255,255,0)","path":[{"type":"Vector","x":132,"y":108},{"type":"Vector","x":180,"y":108},{"type":"Vector","x":180,"y":108},{"type":"Vector","x":132,"y":108}]},{"action":"Clip","line":95,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":96,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":97,"path":[[{"type":"Vector","x":132,"y":144},{"type":"Vector","x":180,"y":144},{"type":"Vector","x":180,"y":157},{"type":"Vector","x":132,"y":157}]]},{"action":"Fill","line":98,"color":"rgb(0,0,0)"},{"action":"Shape","line":99,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":132,"y":144},{"type":"Vector","x":180,"y":144},{"type":"Vector","x":180,"y":144},{"type":"Vector","x":132,"y":144}]},{"action":"Clip","line":100,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":101,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Shape","line":102,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":108,"y":118},{"type":"Vector","x":204,"y":118},{"type":"Vector","x":180,"y":118},{"type":"Vector","x":132,"y":118}]},{"action":"Shape","line":103,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":204,"y":118},{"type":"Vector","x":204,"y":130},{"type":"Vector","x":180,"y":130},{"type":"Vector","x":180,"y":118}]},{"action":"Clip","line":104,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":105,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":106,"path":[[{"type":"Vector","x":132,"y":118},{"type":"Vector","x":180,"y":118},{"type":"Vector","x":180,"y":130},{"type":"Vector","x":132,"y":130}]]},{"action":"Fill","line":107,"color":"rgb(255,255,0)"},{"action":"Clip","line":108,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":109,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":110,"path":[[{"type":"Vector","x":84,"y":142},{"type":"Vector","x":228,"y":142},{"type":"Vector","x":228,"y":166},{"type":"Vector","x":84,"y":166}]]},{"action":"Fill","line":111,"color":"rgb(255,0,0)"},{"action":"Clip","line":112,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":113,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":114,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":115,"path":[[{"type":"Vector","x":84,"y":142},{"type":"Vector","x":228,"y":142},{"type":"Vector","x":228,"y":166},{"type":"Vector","x":84,"y":166}]]},{"action":"Fill","line":116,"color":"rgb(255,0,0)"},{"action":"Shape","line":117,"color":"rgb(255,255,0)","path":[{"type":"Vector","x":84,"y":142},{"type":"Vector","x":228,"y":142},{"type":"Vector","x":228,"y":142},{"type":"Vector","x":108,"y":142}]},{"action":"Clip","line":118,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":119,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":120,"path":[[{"type":"Vector","x":84,"y":142},{"type":"Vector","x":228,"y":142},{"type":"Vector","x":228,"y":166},{"type":"Vector","x":84,"y":166}]]},{"action":"Repeat","line":121,"imageSrc":"/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAABnRSTlMAAAAAAABupgeRAAAABmJLR0QA%2FwD%2F","x":96,"y":142,"width":2,"height":2,"path":[{"type":"Vector","x":84,"y":142},{"type":"Vector","x":228,"y":142},{"type":"Vector","x":228,"y":166},{"type":"Vector","x":84,"y":166}]},{"action":"Shape","line":122,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":84,"y":142},{"type":"Vector","x":228,"y":142},{"type":"Vector","x":216,"y":142},{"type":"Vector","x":96,"y":142}]},{"action":"Shape","line":123,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":228,"y":142},{"type":"Vector","x":228,"y":166},{"type":"Vector","x":216,"y":166},{"type":"Vector","x":216,"y":142}]},{"action":"Clip","line":124,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":125,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":126,"path":[[{"type":"Vector","x":84,"y":214},{"type":"Vector","x":228,"y":214},{"type":"Vector","x":228,"y":238},{"type":"Vector","x":84,"y":238}]]},{"action":"Fill","line":127,"color":"rgb(0,0,0)"},{"action":"Clip","line":128,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":129,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":130,"path":[[{"type":"Vector","x":96,"y":214},{"type":"Vector","x":216,"y":214},{"type":"Vector","x":216,"y":238},{"type":"Vector","x":96,"y":238}]]},{"action":"Fill","line":131,"color":"rgb(0,0,0)"},{"action":"Shape","line":132,"color":"rgb(255,255,0)","path":[{"type":"Vector","x":96,"y":214},{"type":"Vector","x":216,"y":214},{"type":"Vector","x":204,"y":226},{"type":"Vector","x":108,"y":226}]},{"action":"Shape","line":133,"color":"rgb(255,255,0)","path":[{"type":"Vector","x":216,"y":214},{"type":"Vector","x":216,"y":238},{"type":"Vector","x":204,"y":226},{"type":"Vector","x":204,"y":226}]},{"action":"Shape","line":134,"color":"rgb(255,255,0)","path":[{"type":"Vector","x":216,"y":238},{"type":"Vector","x":96,"y":238},{"type":"Vector","x":108,"y":226},{"type":"Vector","x":204,"y":226}]},{"action":"Shape","line":135,"color":"rgb(255,255,0)","path":[{"type":"Vector","x":96,"y":238},{"type":"Vector","x":96,"y":214},{"type":"Vector","x":108,"y":226},{"type":"Vector","x":108,"y":226}]},{"action":"Clip","line":136,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":137,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":138,"path":[[{"type":"Vector","x":108,"y":214},{"type":"Vector","x":204,"y":214},{"type":"Vector","x":204,"y":226},{"type":"Vector","x":108,"y":226}]]},{"action":"Fill","line":139,"color":"rgb(0,0,0)"},{"action":"Clip","line":140,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":141,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Shape","line":142,"color":"rgb(255,255,0)","path":[{"type":"Vector","x":120,"y":214},{"type":"Vector","x":192,"y":214},{"type":"Vector","x":192,"y":226},{"type":"Vector","x":120,"y":226}]},{"action":"Shape","line":143,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":192,"y":214},{"type":"Vector","x":192,"y":238},{"type":"Vector","x":192,"y":226},{"type":"Vector","x":192,"y":226}]},{"action":"Clip","line":144,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]},{"action":"Clip","line":145,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":1496},{"type":"Vector","x":0,"y":1496}]]}],"/tests/reftests/background/clip.html":[{"action":"Window","line":1,"width":800,"height":1568},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":1568,"color":"rgb(255,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":792,"y":8},{"type":"Vector","x":792,"y":1048},{"type":"Vector","x":8,"y":1048}]]},{"action":"Fill","line":5,"color":"rgb(0,255,0)"},{"action":"Clip","line":6,"path":[[{"type":"Vector","x":18,"y":18},{"type":"Vector","x":278,"y":18},{"type":"Vector","x":278,"y":258},{"type":"Vector","x":18,"y":258}]]},{"action":"Repeat","line":7,"imageSrc":"/tests/assets/image.jpg","x":58,"y":28,"width":75,"height":75,"path":[{"type":"Vector","x":18,"y":18},{"type":"Vector","x":278,"y":18},{"type":"Vector","x":278,"y":258},{"type":"Vector","x":18,"y":258}]},{"action":"Clip","line":8,"path":[[{"type":"Vector","x":338,"y":28},{"type":"Vector","x":538,"y":28},{"type":"Vector","x":538,"y":228},{"type":"Vector","x":338,"y":228}]]},{"action":"Repeat","line":9,"imageSrc":"/tests/assets/image.jpg","x":338,"y":28,"width":75,"height":75,"path":[{"type":"Vector","x":298,"y":18},{"type":"Vector","x":558,"y":18},{"type":"Vector","x":558,"y":258},{"type":"Vector","x":298,"y":258}]},{"action":"Clip","line":10,"path":[[{"type":"Vector","x":58,"y":288},{"type":"Vector","x":258,"y":288},{"type":"Vector","x":258,"y":488},{"type":"Vector","x":58,"y":488}]]},{"action":"Repeat","line":11,"imageSrc":"/tests/assets/image.jpg","x":58,"y":288,"width":75,"height":75,"path":[{"type":"Vector","x":18,"y":278},{"type":"Vector","x":278,"y":278},{"type":"Vector","x":278,"y":518},{"type":"Vector","x":18,"y":518}]},{"action":"Clip","line":12,"path":[[{"type":"Vector","x":298,"y":278},{"type":"Vector","x":558,"y":278},{"type":"Vector","x":558,"y":518},{"type":"Vector","x":298,"y":518}]]},{"action":"Repeat","line":13,"imageSrc":"/tests/assets/image.jpg","x":338,"y":288,"width":75,"height":75,"path":[{"type":"Vector","x":298,"y":278},{"type":"Vector","x":558,"y":278},{"type":"Vector","x":558,"y":518},{"type":"Vector","x":298,"y":518}]},{"action":"Clip","line":14,"path":[[{"type":"Vector","x":18,"y":538},{"type":"Vector","x":278,"y":538},{"type":"Vector","x":278,"y":778},{"type":"Vector","x":18,"y":778}]]},{"action":"Repeat","line":15,"imageSrc":"/tests/assets/image.jpg","x":58,"y":548,"width":75,"height":75,"path":[{"type":"Vector","x":58,"y":548},{"type":"Vector","x":133,"y":548},{"type":"Vector","x":133,"y":623},{"type":"Vector","x":58,"y":623}]},{"action":"Clip","line":16,"path":[[{"type":"Vector","x":338,"y":548},{"type":"Vector","x":538,"y":548},{"type":"Vector","x":538,"y":748},{"type":"Vector","x":338,"y":748}]]},{"action":"Repeat","line":17,"imageSrc":"/tests/assets/image.jpg","x":338,"y":548,"width":75,"height":75,"path":[{"type":"Vector","x":338,"y":538},{"type":"Vector","x":413,"y":538},{"type":"Vector","x":413,"y":778},{"type":"Vector","x":338,"y":778}]},{"action":"Clip","line":18,"path":[[{"type":"Vector","x":58,"y":808},{"type":"Vector","x":258,"y":808},{"type":"Vector","x":258,"y":1008},{"type":"Vector","x":58,"y":1008}]]},{"action":"Repeat","line":19,"imageSrc":"/tests/assets/image.jpg","x":58,"y":808,"width":75,"height":75,"path":[{"type":"Vector","x":18,"y":808},{"type":"Vector","x":278,"y":808},{"type":"Vector","x":278,"y":883},{"type":"Vector","x":18,"y":883}]},{"action":"Clip","line":20,"path":[[{"type":"Vector","x":298,"y":798},{"type":"Vector","x":558,"y":798},{"type":"Vector","x":558,"y":1038},{"type":"Vector","x":298,"y":1038}]]},{"action":"Repeat","line":21,"imageSrc":"/tests/assets/image.jpg","x":338,"y":808,"width":75,"height":75,"path":[{"type":"Vector","x":338,"y":808},{"type":"Vector","x":413,"y":808},{"type":"Vector","x":413,"y":883},{"type":"Vector","x":338,"y":883}]},{"action":"Clip","line":22,"path":[[{"type":"Vector","x":18,"y":1058},{"type":"Vector","x":278,"y":1058},{"type":"Vector","x":278,"y":1298},{"type":"Vector","x":18,"y":1298}]]},{"action":"Fill","line":23,"color":"rgb(0,128,0)"},{"action":"Clip","line":24,"path":[[{"type":"Vector","x":338,"y":1068},{"type":"Vector","x":538,"y":1068},{"type":"Vector","x":538,"y":1268},{"type":"Vector","x":338,"y":1268}]]},{"action":"Fill","line":25,"color":"rgb(0,128,0)"},{"action":"Clip","line":26,"path":[[{"type":"Vector","x":58,"y":1328},{"type":"Vector","x":258,"y":1328},{"type":"Vector","x":258,"y":1528},{"type":"Vector","x":58,"y":1528}]]},{"action":"Fill","line":27,"color":"rgb(0,128,0)"},{"action":"Clip","line":28,"path":[[{"type":"Vector","x":298,"y":1318},{"type":"Vector","x":558,"y":1318},{"type":"Vector","x":558,"y":1558},{"type":"Vector","x":298,"y":1558}]]},{"action":"Fill","line":29,"color":"rgb(0,128,0)"}],"/tests/reftests/background/encoded.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgb(255,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":792,"y":8},{"type":"Vector","x":792,"y":8},{"type":"Vector","x":8,"y":8}]]},{"action":"Fill","line":5,"color":"rgb(0,255,0)"},{"action":"Clip","line":6,"path":[[{"type":"Vector","x":18,"y":18},{"type":"Vector","x":220,"y":18},{"type":"Vector","x":220,"y":220},{"type":"Vector","x":18,"y":220}]]},{"action":"Repeat","line":7,"imageSrc":"/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4","x":19,"y":19,"width":75,"height":75,"path":[{"type":"Vector","x":18,"y":18},{"type":"Vector","x":220,"y":18},{"type":"Vector","x":220,"y":220},{"type":"Vector","x":18,"y":220}]},{"action":"Shape","line":8,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":18},{"type":"Vector","x":220,"y":18},{"type":"Vector","x":219,"y":19},{"type":"Vector","x":19,"y":19}]},{"action":"Shape","line":9,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":18},{"type":"Vector","x":220,"y":220},{"type":"Vector","x":219,"y":219},{"type":"Vector","x":219,"y":19}]},{"action":"Shape","line":10,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":220},{"type":"Vector","x":18,"y":220},{"type":"Vector","x":19,"y":219},{"type":"Vector","x":219,"y":219}]},{"action":"Shape","line":11,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":220},{"type":"Vector","x":18,"y":18},{"type":"Vector","x":19,"y":19},{"type":"Vector","x":19,"y":219}]}],"/tests/reftests/background/linear-gradient.html":[{"action":"Window","line":1,"width":820,"height":1828},{"action":"Rectangle","line":2,"x":0,"y":0,"width":820,"height":1828,"color":"rgb(255,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":18,"y":18},{"type":"Vector","x":230,"y":18},{"type":"Vector","x":230,"y":220},{"type":"Vector","x":18,"y":220}]]},{"action":"Gradient","line":5,"x":18,"y":18,"width":212,"height":202,"x0":207,"x1":5,"y0":207,"y1":-5,"stops":"rgb(255,0,0) 0, rgb(0,0,255) 0.34, rgb(186,218,85) 0.67, rgba(0,0,255,0.5) 1"},{"action":"Shape","line":6,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":18},{"type":"Vector","x":230,"y":18},{"type":"Vector","x":229,"y":19},{"type":"Vector","x":19,"y":19}]},{"action":"Shape","line":7,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":230,"y":18},{"type":"Vector","x":230,"y":220},{"type":"Vector","x":229,"y":219},{"type":"Vector","x":229,"y":19}]},{"action":"Shape","line":8,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":230,"y":220},{"type":"Vector","x":18,"y":220},{"type":"Vector","x":19,"y":219},{"type":"Vector","x":229,"y":219}]},{"action":"Shape","line":9,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":220},{"type":"Vector","x":18,"y":18},{"type":"Vector","x":19,"y":19},{"type":"Vector","x":19,"y":219}]},{"action":"Clip","line":10,"path":[[{"type":"Vector","x":250,"y":18},{"type":"Vector","x":462,"y":18},{"type":"Vector","x":462,"y":220},{"type":"Vector","x":250,"y":220}]]},{"action":"Gradient","line":11,"x":250,"y":18,"width":212,"height":202,"x0":106,"x1":106,"y0":202,"y1":0,"stops":"rgb(252,252,252) 0, rgb(232,232,232) 1"},{"action":"Shape","line":12,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":250,"y":18},{"type":"Vector","x":462,"y":18},{"type":"Vector","x":461,"y":19},{"type":"Vector","x":251,"y":19}]},{"action":"Shape","line":13,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":18},{"type":"Vector","x":462,"y":220},{"type":"Vector","x":461,"y":219},{"type":"Vector","x":461,"y":19}]},{"action":"Shape","line":14,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":220},{"type":"Vector","x":250,"y":220},{"type":"Vector","x":251,"y":219},{"type":"Vector","x":461,"y":219}]},{"action":"Shape","line":15,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":250,"y":220},{"type":"Vector","x":250,"y":18},{"type":"Vector","x":251,"y":19},{"type":"Vector","x":251,"y":219}]},{"action":"Clip","line":16,"path":[[{"type":"Vector","x":482,"y":18},{"type":"Vector","x":694,"y":18},{"type":"Vector","x":694,"y":220},{"type":"Vector","x":482,"y":220}]]},{"action":"Gradient","line":17,"x":482,"y":18,"width":212,"height":202,"x0":212,"x1":0,"y0":101,"y1":101,"stops":"rgb(255,0,0) 0, rgb(255,255,0) 0.5, rgb(0,255,0) 1"},{"action":"Shape","line":18,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":482,"y":18},{"type":"Vector","x":694,"y":18},{"type":"Vector","x":693,"y":19},{"type":"Vector","x":483,"y":19}]},{"action":"Shape","line":19,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":18},{"type":"Vector","x":694,"y":220},{"type":"Vector","x":693,"y":219},{"type":"Vector","x":693,"y":19}]},{"action":"Shape","line":20,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":220},{"type":"Vector","x":482,"y":220},{"type":"Vector","x":483,"y":219},{"type":"Vector","x":693,"y":219}]},{"action":"Shape","line":21,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":482,"y":220},{"type":"Vector","x":482,"y":18},{"type":"Vector","x":483,"y":19},{"type":"Vector","x":483,"y":219}]},{"action":"Clip","line":22,"path":[[{"type":"Vector","x":18,"y":240},{"type":"Vector","x":230,"y":240},{"type":"Vector","x":230,"y":442},{"type":"Vector","x":18,"y":442}]]},{"action":"Gradient","line":23,"x":18,"y":240,"width":212,"height":202,"x0":212,"x1":0,"y0":101,"y1":101,"stops":"rgb(206,219,233) 0, rgb(170,197,222) 0.17, rgb(97,153,199) 0.5, rgb(58,132,195) 0.51, rgb(65,154,214) 0.59, rgb(75,184,240) 0.71, rgb(58,139,194) 0.84, rgb(38,85,139) 1"},{"action":"Shape","line":24,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":240},{"type":"Vector","x":230,"y":240},{"type":"Vector","x":229,"y":241},{"type":"Vector","x":19,"y":241}]},{"action":"Shape","line":25,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":230,"y":240},{"type":"Vector","x":230,"y":442},{"type":"Vector","x":229,"y":441},{"type":"Vector","x":229,"y":241}]},{"action":"Shape","line":26,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":230,"y":442},{"type":"Vector","x":18,"y":442},{"type":"Vector","x":19,"y":441},{"type":"Vector","x":229,"y":441}]},{"action":"Shape","line":27,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":442},{"type":"Vector","x":18,"y":240},{"type":"Vector","x":19,"y":241},{"type":"Vector","x":19,"y":441}]},{"action":"Clip","line":28,"path":[[{"type":"Vector","x":250,"y":240},{"type":"Vector","x":462,"y":240},{"type":"Vector","x":462,"y":442},{"type":"Vector","x":250,"y":442}]]},{"action":"Gradient","line":29,"x":250,"y":240,"width":212,"height":202,"x0":106,"x1":106,"y0":202,"y1":0,"stops":"rgb(240,183,161) 0, rgb(140,51,16) 0.5, rgb(117,34,1) 0.51, rgb(191,110,78) 1"},{"action":"Shape","line":30,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":250,"y":240},{"type":"Vector","x":462,"y":240},{"type":"Vector","x":461,"y":241},{"type":"Vector","x":251,"y":241}]},{"action":"Shape","line":31,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":240},{"type":"Vector","x":462,"y":442},{"type":"Vector","x":461,"y":441},{"type":"Vector","x":461,"y":241}]},{"action":"Shape","line":32,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":442},{"type":"Vector","x":250,"y":442},{"type":"Vector","x":251,"y":441},{"type":"Vector","x":461,"y":441}]},{"action":"Shape","line":33,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":250,"y":442},{"type":"Vector","x":250,"y":240},{"type":"Vector","x":251,"y":241},{"type":"Vector","x":251,"y":441}]},{"action":"Clip","line":34,"path":[[{"type":"Vector","x":482,"y":240},{"type":"Vector","x":694,"y":240},{"type":"Vector","x":694,"y":442},{"type":"Vector","x":482,"y":442}]]},{"action":"Gradient","line":35,"x":482,"y":240,"width":212,"height":202,"x0":212,"x1":0,"y0":101,"y1":101,"stops":"rgb(206,219,233) 0, rgb(170,197,222) 0.17, rgb(97,153,199) 0.5, rgb(58,132,195) 0.51, rgb(65,154,214) 0.76, rgb(38,85,139) 1"},{"action":"Shape","line":36,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":482,"y":240},{"type":"Vector","x":694,"y":240},{"type":"Vector","x":693,"y":241},{"type":"Vector","x":483,"y":241}]},{"action":"Shape","line":37,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":240},{"type":"Vector","x":694,"y":442},{"type":"Vector","x":693,"y":441},{"type":"Vector","x":693,"y":241}]},{"action":"Shape","line":38,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":442},{"type":"Vector","x":482,"y":442},{"type":"Vector","x":483,"y":441},{"type":"Vector","x":693,"y":441}]},{"action":"Shape","line":39,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":482,"y":442},{"type":"Vector","x":482,"y":240},{"type":"Vector","x":483,"y":241},{"type":"Vector","x":483,"y":441}]},{"action":"Clip","line":40,"path":[[{"type":"Vector","x":18,"y":462},{"type":"Vector","x":230,"y":462},{"type":"Vector","x":230,"y":664},{"type":"Vector","x":18,"y":664}]]},{"action":"Gradient","line":41,"x":18,"y":462,"width":212,"height":202,"x0":106,"x1":106,"y0":202,"y1":0,"stops":"rgb(204,229,244) 0, rgb(0,38,60) 1"},{"action":"Shape","line":42,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":462},{"type":"Vector","x":230,"y":462},{"type":"Vector","x":229,"y":463},{"type":"Vector","x":19,"y":463}]},{"action":"Shape","line":43,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":230,"y":462},{"type":"Vector","x":230,"y":664},{"type":"Vector","x":229,"y":663},{"type":"Vector","x":229,"y":463}]},{"action":"Shape","line":44,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":230,"y":664},{"type":"Vector","x":18,"y":664},{"type":"Vector","x":19,"y":663},{"type":"Vector","x":229,"y":663}]},{"action":"Shape","line":45,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":664},{"type":"Vector","x":18,"y":462},{"type":"Vector","x":19,"y":463},{"type":"Vector","x":19,"y":663}]},{"action":"Clip","line":46,"path":[[{"type":"Vector","x":250,"y":462},{"type":"Vector","x":462,"y":462},{"type":"Vector","x":462,"y":664},{"type":"Vector","x":250,"y":664}]]},{"action":"Gradient","line":47,"x":250,"y":462,"width":212,"height":202,"x0":5,"x1":207,"y0":207,"y1":-5,"stops":"rgb(255,255,255) 0, rgb(0,38,60) 1"},{"action":"Shape","line":48,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":250,"y":462},{"type":"Vector","x":462,"y":462},{"type":"Vector","x":461,"y":463},{"type":"Vector","x":251,"y":463}]},{"action":"Shape","line":49,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":462},{"type":"Vector","x":462,"y":664},{"type":"Vector","x":461,"y":663},{"type":"Vector","x":461,"y":463}]},{"action":"Shape","line":50,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":664},{"type":"Vector","x":250,"y":664},{"type":"Vector","x":251,"y":663},{"type":"Vector","x":461,"y":663}]},{"action":"Shape","line":51,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":250,"y":664},{"type":"Vector","x":250,"y":462},{"type":"Vector","x":251,"y":463},{"type":"Vector","x":251,"y":663}]},{"action":"Clip","line":52,"path":[[{"type":"Vector","x":482,"y":462},{"type":"Vector","x":694,"y":462},{"type":"Vector","x":694,"y":664},{"type":"Vector","x":482,"y":664}]]},{"action":"Gradient","line":53,"x":482,"y":462,"width":212,"height":202,"x0":5,"x1":207,"y0":207,"y1":-5,"stops":"rgb(0,0,255) 0, rgb(255,0,0) 0.17, rgb(0,128,0) 0.67, rgba(0,0,0,0.5) 1"},{"action":"Shape","line":54,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":482,"y":462},{"type":"Vector","x":694,"y":462},{"type":"Vector","x":693,"y":463},{"type":"Vector","x":483,"y":463}]},{"action":"Shape","line":55,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":462},{"type":"Vector","x":694,"y":664},{"type":"Vector","x":693,"y":663},{"type":"Vector","x":693,"y":463}]},{"action":"Shape","line":56,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":664},{"type":"Vector","x":482,"y":664},{"type":"Vector","x":483,"y":663},{"type":"Vector","x":693,"y":663}]},{"action":"Shape","line":57,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":482,"y":664},{"type":"Vector","x":482,"y":462},{"type":"Vector","x":483,"y":463},{"type":"Vector","x":483,"y":663}]},{"action":"Clip","line":58,"path":[[{"type":"Vector","x":18,"y":684},{"type":"Vector","x":230,"y":684},{"type":"Vector","x":230,"y":886},{"type":"Vector","x":18,"y":886}]]},{"action":"Gradient","line":59,"x":18,"y":684,"width":212,"height":202,"x0":5,"x1":207,"y0":-5,"y1":207,"stops":"rgb(0,0,255) 0, rgb(255,0,0) 0.17, rgb(0,128,0) 0.67, rgba(0,0,0,0.5) 1"},{"action":"Shape","line":60,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":684},{"type":"Vector","x":230,"y":684},{"type":"Vector","x":229,"y":685},{"type":"Vector","x":19,"y":685}]},{"action":"Shape","line":61,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":230,"y":684},{"type":"Vector","x":230,"y":886},{"type":"Vector","x":229,"y":885},{"type":"Vector","x":229,"y":685}]},{"action":"Shape","line":62,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":230,"y":886},{"type":"Vector","x":18,"y":886},{"type":"Vector","x":19,"y":885},{"type":"Vector","x":229,"y":885}]},{"action":"Shape","line":63,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":886},{"type":"Vector","x":18,"y":684},{"type":"Vector","x":19,"y":685},{"type":"Vector","x":19,"y":885}]},{"action":"Clip","line":64,"path":[[{"type":"Vector","x":250,"y":684},{"type":"Vector","x":462,"y":684},{"type":"Vector","x":462,"y":886},{"type":"Vector","x":250,"y":886}]]},{"action":"Gradient","line":65,"x":250,"y":684,"width":212,"height":202,"x0":207,"x1":5,"y0":207,"y1":-5,"stops":"rgb(0,0,255) 0, rgb(255,0,0) 0.17, rgb(0,128,0) 0.67, rgba(0,0,0,0.5) 1"},{"action":"Shape","line":66,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":250,"y":684},{"type":"Vector","x":462,"y":684},{"type":"Vector","x":461,"y":685},{"type":"Vector","x":251,"y":685}]},{"action":"Shape","line":67,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":684},{"type":"Vector","x":462,"y":886},{"type":"Vector","x":461,"y":885},{"type":"Vector","x":461,"y":685}]},{"action":"Shape","line":68,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":886},{"type":"Vector","x":250,"y":886},{"type":"Vector","x":251,"y":885},{"type":"Vector","x":461,"y":885}]},{"action":"Shape","line":69,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":250,"y":886},{"type":"Vector","x":250,"y":684},{"type":"Vector","x":251,"y":685},{"type":"Vector","x":251,"y":885}]},{"action":"Clip","line":70,"path":[[{"type":"Vector","x":482,"y":684},{"type":"Vector","x":694,"y":684},{"type":"Vector","x":694,"y":886},{"type":"Vector","x":482,"y":886}]]},{"action":"Gradient","line":71,"x":482,"y":684,"width":212,"height":202,"x0":207,"x1":5,"y0":-5,"y1":207,"stops":"rgb(0,0,255) 0, rgb(255,0,0) 0.17, rgb(0,128,0) 0.67, rgba(0,0,0,0.5) 1"},{"action":"Shape","line":72,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":482,"y":684},{"type":"Vector","x":694,"y":684},{"type":"Vector","x":693,"y":685},{"type":"Vector","x":483,"y":685}]},{"action":"Shape","line":73,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":684},{"type":"Vector","x":694,"y":886},{"type":"Vector","x":693,"y":885},{"type":"Vector","x":693,"y":685}]},{"action":"Shape","line":74,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":886},{"type":"Vector","x":482,"y":886},{"type":"Vector","x":483,"y":885},{"type":"Vector","x":693,"y":885}]},{"action":"Shape","line":75,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":482,"y":886},{"type":"Vector","x":482,"y":684},{"type":"Vector","x":483,"y":685},{"type":"Vector","x":483,"y":885}]},{"action":"Shape","line":76,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":906},{"type":"Vector","x":782,"y":906},{"type":"Vector","x":781,"y":907},{"type":"Vector","x":19,"y":907}]},{"action":"Shape","line":77,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":782,"y":906},{"type":"Vector","x":782,"y":1152},{"type":"Vector","x":781,"y":1151},{"type":"Vector","x":781,"y":907}]},{"action":"Shape","line":78,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":782,"y":1152},{"type":"Vector","x":18,"y":1152},{"type":"Vector","x":19,"y":1151},{"type":"Vector","x":781,"y":1151}]},{"action":"Shape","line":79,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":1152},{"type":"Vector","x":18,"y":906},{"type":"Vector","x":19,"y":907},{"type":"Vector","x":19,"y":1151}]},{"action":"Clip","line":80,"path":[[{"type":"Vector","x":29,"y":917},{"type":"Vector","x":231,"y":917},{"type":"Vector","x":231,"y":1019},{"type":"Vector","x":29,"y":1019}]]},{"action":"Gradient","line":81,"x":29,"y":917,"width":202,"height":102,"x0":60,"x1":142,"y0":132,"y1":-30,"stops":"rgb(0,0,255) 0, rgb(255,0,0) 0.25, rgb(0,128,0) 0.98, rgba(0,0,0,0.5) 1"},{"action":"Shape","line":82,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":29,"y":917},{"type":"Vector","x":231,"y":917},{"type":"Vector","x":230,"y":918},{"type":"Vector","x":30,"y":918}]},{"action":"Shape","line":83,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":231,"y":917},{"type":"Vector","x":231,"y":1019},{"type":"Vector","x":230,"y":1018},{"type":"Vector","x":230,"y":918}]},{"action":"Shape","line":84,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":231,"y":1019},{"type":"Vector","x":29,"y":1019},{"type":"Vector","x":30,"y":1018},{"type":"Vector","x":230,"y":1018}]},{"action":"Shape","line":85,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":29,"y":1019},{"type":"Vector","x":29,"y":917},{"type":"Vector","x":30,"y":918},{"type":"Vector","x":30,"y":1018}]},{"action":"Clip","line":86,"path":[[{"type":"Vector","x":251,"y":917},{"type":"Vector","x":453,"y":917},{"type":"Vector","x":453,"y":1019},{"type":"Vector","x":251,"y":1019}]]},{"action":"Gradient","line":87,"x":251,"y":917,"width":202,"height":102,"x0":60,"x1":142,"y0":-30,"y1":132,"stops":"rgb(0,0,255) 0, rgb(255,0,0) 0.25, rgb(0,128,0) 0.98, rgba(0,0,0,0.5) 1"},{"action":"Shape","line":88,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":251,"y":917},{"type":"Vector","x":453,"y":917},{"type":"Vector","x":452,"y":918},{"type":"Vector","x":252,"y":918}]},{"action":"Shape","line":89,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":453,"y":917},{"type":"Vector","x":453,"y":1019},{"type":"Vector","x":452,"y":1018},{"type":"Vector","x":452,"y":918}]},{"action":"Shape","line":90,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":453,"y":1019},{"type":"Vector","x":251,"y":1019},{"type":"Vector","x":252,"y":1018},{"type":"Vector","x":452,"y":1018}]},{"action":"Shape","line":91,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":251,"y":1019},{"type":"Vector","x":251,"y":917},{"type":"Vector","x":252,"y":918},{"type":"Vector","x":252,"y":1018}]},{"action":"Clip","line":92,"path":[[{"type":"Vector","x":473,"y":917},{"type":"Vector","x":675,"y":917},{"type":"Vector","x":675,"y":1019},{"type":"Vector","x":473,"y":1019}]]},{"action":"Gradient","line":93,"x":473,"y":917,"width":202,"height":102,"x0":142,"x1":60,"y0":132,"y1":-30,"stops":"rgb(0,0,255) 0, rgb(255,0,0) 0.25, rgb(0,128,0) 0.98, rgba(0,0,0,0.5) 1"},{"action":"Shape","line":94,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":473,"y":917},{"type":"Vector","x":675,"y":917},{"type":"Vector","x":674,"y":918},{"type":"Vector","x":474,"y":918}]},{"action":"Shape","line":95,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":675,"y":917},{"type":"Vector","x":675,"y":1019},{"type":"Vector","x":674,"y":1018},{"type":"Vector","x":674,"y":918}]},{"action":"Shape","line":96,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":675,"y":1019},{"type":"Vector","x":473,"y":1019},{"type":"Vector","x":474,"y":1018},{"type":"Vector","x":674,"y":1018}]},{"action":"Shape","line":97,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":473,"y":1019},{"type":"Vector","x":473,"y":917},{"type":"Vector","x":474,"y":918},{"type":"Vector","x":474,"y":1018}]},{"action":"Clip","line":98,"path":[[{"type":"Vector","x":29,"y":1039},{"type":"Vector","x":231,"y":1039},{"type":"Vector","x":231,"y":1141},{"type":"Vector","x":29,"y":1141}]]},{"action":"Gradient","line":99,"x":29,"y":1039,"width":202,"height":102,"x0":142,"x1":60,"y0":-30,"y1":132,"stops":"rgb(0,0,255) 0, rgb(255,0,0) 0.25, rgb(0,128,0) 0.98, rgba(0,0,0,0.5) 1"},{"action":"Shape","line":100,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":29,"y":1039},{"type":"Vector","x":231,"y":1039},{"type":"Vector","x":230,"y":1040},{"type":"Vector","x":30,"y":1040}]},{"action":"Shape","line":101,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":231,"y":1039},{"type":"Vector","x":231,"y":1141},{"type":"Vector","x":230,"y":1140},{"type":"Vector","x":230,"y":1040}]},{"action":"Shape","line":102,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":231,"y":1141},{"type":"Vector","x":29,"y":1141},{"type":"Vector","x":30,"y":1140},{"type":"Vector","x":230,"y":1140}]},{"action":"Shape","line":103,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":29,"y":1141},{"type":"Vector","x":29,"y":1039},{"type":"Vector","x":30,"y":1040},{"type":"Vector","x":30,"y":1140}]},{"action":"Clip","line":104,"path":[[{"type":"Vector","x":18,"y":1172},{"type":"Vector","x":230,"y":1172},{"type":"Vector","x":230,"y":1374},{"type":"Vector","x":18,"y":1374}]]},{"action":"Gradient","line":105,"x":18,"y":1172,"width":212,"height":202,"x0":5,"x1":207,"y0":-5,"y1":207,"stops":"rgb(255,255,255) 0, rgb(0,0,0) 1"},{"action":"Shape","line":106,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":1172},{"type":"Vector","x":230,"y":1172},{"type":"Vector","x":229,"y":1173},{"type":"Vector","x":19,"y":1173}]},{"action":"Shape","line":107,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":230,"y":1172},{"type":"Vector","x":230,"y":1374},{"type":"Vector","x":229,"y":1373},{"type":"Vector","x":229,"y":1173}]},{"action":"Shape","line":108,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":230,"y":1374},{"type":"Vector","x":18,"y":1374},{"type":"Vector","x":19,"y":1373},{"type":"Vector","x":229,"y":1373}]},{"action":"Shape","line":109,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":1374},{"type":"Vector","x":18,"y":1172},{"type":"Vector","x":19,"y":1173},{"type":"Vector","x":19,"y":1373}]},{"action":"Clip","line":110,"path":[[{"type":"Vector","x":250,"y":1172},{"type":"Vector","x":462,"y":1172},{"type":"Vector","x":462,"y":1374},{"type":"Vector","x":250,"y":1374}]]},{"action":"Gradient","line":111,"x":250,"y":1172,"width":212,"height":202,"x0":156,"x1":56,"y0":-23,"y1":225,"stops":"rgb(255,255,0) 0, rgb(0,0,255) 0.3, rgb(255,0,0) 0.6, rgb(0,0,255) 1"},{"action":"Shape","line":112,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":250,"y":1172},{"type":"Vector","x":462,"y":1172},{"type":"Vector","x":461,"y":1173},{"type":"Vector","x":251,"y":1173}]},{"action":"Shape","line":113,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":1172},{"type":"Vector","x":462,"y":1374},{"type":"Vector","x":461,"y":1373},{"type":"Vector","x":461,"y":1173}]},{"action":"Shape","line":114,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":1374},{"type":"Vector","x":250,"y":1374},{"type":"Vector","x":251,"y":1373},{"type":"Vector","x":461,"y":1373}]},{"action":"Shape","line":115,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":250,"y":1374},{"type":"Vector","x":250,"y":1172},{"type":"Vector","x":251,"y":1173},{"type":"Vector","x":251,"y":1373}]},{"action":"Clip","line":116,"path":[[{"type":"Vector","x":482,"y":1172},{"type":"Vector","x":694,"y":1172},{"type":"Vector","x":694,"y":1374},{"type":"Vector","x":482,"y":1374}]]},{"action":"Gradient","line":117,"x":482,"y":1172,"width":212,"height":202,"x0":106,"x1":106,"y0":202,"y1":0,"stops":"rgb(255,255,0) 0, rgb(255,0,0) 0.6, rgb(0,0,255) 1"},{"action":"Shape","line":118,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":482,"y":1172},{"type":"Vector","x":694,"y":1172},{"type":"Vector","x":693,"y":1173},{"type":"Vector","x":483,"y":1173}]},{"action":"Shape","line":119,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":1172},{"type":"Vector","x":694,"y":1374},{"type":"Vector","x":693,"y":1373},{"type":"Vector","x":693,"y":1173}]},{"action":"Shape","line":120,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":1374},{"type":"Vector","x":482,"y":1374},{"type":"Vector","x":483,"y":1373},{"type":"Vector","x":693,"y":1373}]},{"action":"Shape","line":121,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":482,"y":1374},{"type":"Vector","x":482,"y":1172},{"type":"Vector","x":483,"y":1173},{"type":"Vector","x":483,"y":1373}]},{"action":"Clip","line":122,"path":[[{"type":"Vector","x":18,"y":1394},{"type":"Vector","x":230,"y":1394},{"type":"Vector","x":230,"y":1596},{"type":"Vector","x":18,"y":1596}]]},{"action":"Gradient","line":123,"x":18,"y":1394,"width":212,"height":202,"x0":219,"x1":-7,"y0":92,"y1":110,"stops":"rgb(255,255,0) 0, rgb(255,165,0) 0.3, rgb(255,0,0) 0.6, rgb(0,0,255) 1"},{"action":"Shape","line":124,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":1394},{"type":"Vector","x":230,"y":1394},{"type":"Vector","x":229,"y":1395},{"type":"Vector","x":19,"y":1395}]},{"action":"Shape","line":125,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":230,"y":1394},{"type":"Vector","x":230,"y":1596},{"type":"Vector","x":229,"y":1595},{"type":"Vector","x":229,"y":1395}]},{"action":"Shape","line":126,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":230,"y":1596},{"type":"Vector","x":18,"y":1596},{"type":"Vector","x":19,"y":1595},{"type":"Vector","x":229,"y":1595}]},{"action":"Shape","line":127,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":1596},{"type":"Vector","x":18,"y":1394},{"type":"Vector","x":19,"y":1395},{"type":"Vector","x":19,"y":1595}]},{"action":"Clip","line":128,"path":[[{"type":"Vector","x":18,"y":1616},{"type":"Vector","x":820,"y":1616},{"type":"Vector","x":820,"y":1818},{"type":"Vector","x":18,"y":1818}]]},{"action":"Gradient","line":129,"x":18,"y":1616,"width":802,"height":202,"x0":346,"x1":456,"y0":-96,"y1":298,"stops":"rgb(255,255,0) 0, rgb(255,0,0) 0.6, rgb(0,0,255) 1"},{"action":"Shape","line":130,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":1616},{"type":"Vector","x":820,"y":1616},{"type":"Vector","x":819,"y":1617},{"type":"Vector","x":19,"y":1617}]},{"action":"Shape","line":131,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":820,"y":1616},{"type":"Vector","x":820,"y":1818},{"type":"Vector","x":819,"y":1817},{"type":"Vector","x":819,"y":1617}]},{"action":"Shape","line":132,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":820,"y":1818},{"type":"Vector","x":18,"y":1818},{"type":"Vector","x":19,"y":1817},{"type":"Vector","x":819,"y":1817}]},{"action":"Shape","line":133,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":1818},{"type":"Vector","x":18,"y":1616},{"type":"Vector","x":19,"y":1617},{"type":"Vector","x":19,"y":1817}]}],"/tests/reftests/background/multi.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgb(255,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":792,"y":8},{"type":"Vector","x":792,"y":8},{"type":"Vector","x":8,"y":8}]]},{"action":"Fill","line":5,"color":"rgb(0,255,0)"},{"action":"Clip","line":6,"path":[[{"type":"Vector","x":18,"y":18},{"type":"Vector","x":220,"y":18},{"type":"Vector","x":220,"y":220},{"type":"Vector","x":18,"y":220}]]},{"action":"Repeat","line":7,"imageSrc":"/tests/assets/image2.jpg","x":119,"y":149,"width":75,"height":75,"path":[{"type":"Vector","x":18,"y":148},{"type":"Vector","x":220,"y":148},{"type":"Vector","x":220,"y":223},{"type":"Vector","x":18,"y":223}]},{"action":"Repeat","line":8,"imageSrc":"/tests/assets/image.jpg","x":69,"y":69,"width":75,"height":75,"path":[{"type":"Vector","x":18,"y":68},{"type":"Vector","x":220,"y":68},{"type":"Vector","x":220,"y":143},{"type":"Vector","x":18,"y":143}]},{"action":"Shape","line":9,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":18},{"type":"Vector","x":220,"y":18},{"type":"Vector","x":219,"y":19},{"type":"Vector","x":19,"y":19}]},{"action":"Shape","line":10,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":18},{"type":"Vector","x":220,"y":220},{"type":"Vector","x":219,"y":219},{"type":"Vector","x":219,"y":19}]},{"action":"Shape","line":11,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":220},{"type":"Vector","x":18,"y":220},{"type":"Vector","x":19,"y":219},{"type":"Vector","x":219,"y":219}]},{"action":"Shape","line":12,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":220},{"type":"Vector","x":18,"y":18},{"type":"Vector","x":19,"y":19},{"type":"Vector","x":19,"y":219}]},{"action":"Clip","line":13,"path":[[{"type":"Vector","x":240,"y":18},{"type":"Vector","x":442,"y":18},{"type":"Vector","x":442,"y":220},{"type":"Vector","x":240,"y":220}]]},{"action":"Repeat","line":14,"imageSrc":"/tests/assets/image2.jpg","x":261,"y":-1,"width":75,"height":75,"path":[{"type":"Vector","x":240,"y":-2},{"type":"Vector","x":442,"y":-2},{"type":"Vector","x":442,"y":73},{"type":"Vector","x":240,"y":73}]},{"action":"Repeat","line":15,"imageSrc":"/tests/assets/image.jpg","x":291,"y":69,"width":75,"height":75,"path":[{"type":"Vector","x":240,"y":68},{"type":"Vector","x":442,"y":68},{"type":"Vector","x":442,"y":143},{"type":"Vector","x":240,"y":143}]},{"action":"Shape","line":16,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":240,"y":18},{"type":"Vector","x":442,"y":18},{"type":"Vector","x":441,"y":19},{"type":"Vector","x":241,"y":19}]},{"action":"Shape","line":17,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":442,"y":18},{"type":"Vector","x":442,"y":220},{"type":"Vector","x":441,"y":219},{"type":"Vector","x":441,"y":19}]},{"action":"Shape","line":18,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":442,"y":220},{"type":"Vector","x":240,"y":220},{"type":"Vector","x":241,"y":219},{"type":"Vector","x":441,"y":219}]},{"action":"Shape","line":19,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":240,"y":220},{"type":"Vector","x":240,"y":18},{"type":"Vector","x":241,"y":19},{"type":"Vector","x":241,"y":219}]},{"action":"Clip","line":20,"path":[[{"type":"Vector","x":462,"y":18},{"type":"Vector","x":664,"y":18},{"type":"Vector","x":664,"y":220},{"type":"Vector","x":462,"y":220}]]},{"action":"Repeat","line":21,"imageSrc":"/tests/assets/image2.jpg","x":913,"y":119,"width":75,"height":75,"path":[{"type":"Vector","x":462,"y":118},{"type":"Vector","x":664,"y":118},{"type":"Vector","x":664,"y":193},{"type":"Vector","x":462,"y":193}]},{"action":"Repeat","line":22,"imageSrc":"/tests/assets/image.jpg","x":513,"y":69,"width":75,"height":75,"path":[{"type":"Vector","x":462,"y":68},{"type":"Vector","x":664,"y":68},{"type":"Vector","x":664,"y":143},{"type":"Vector","x":462,"y":143}]},{"action":"Shape","line":23,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":18},{"type":"Vector","x":664,"y":18},{"type":"Vector","x":663,"y":19},{"type":"Vector","x":463,"y":19}]},{"action":"Shape","line":24,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":664,"y":18},{"type":"Vector","x":664,"y":220},{"type":"Vector","x":663,"y":219},{"type":"Vector","x":663,"y":19}]},{"action":"Shape","line":25,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":664,"y":220},{"type":"Vector","x":462,"y":220},{"type":"Vector","x":463,"y":219},{"type":"Vector","x":663,"y":219}]},{"action":"Shape","line":26,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":220},{"type":"Vector","x":462,"y":18},{"type":"Vector","x":463,"y":19},{"type":"Vector","x":463,"y":219}]}],"/tests/reftests/background/position.html":[{"action":"Window","line":1,"width":800,"height":1018},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":1018,"color":"rgb(255,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":792,"y":8},{"type":"Vector","x":792,"y":574},{"type":"Vector","x":8,"y":574}]]},{"action":"Fill","line":5,"color":"rgb(0,255,0)"},{"action":"Clip","line":6,"path":[[{"type":"Vector","x":18,"y":18},{"type":"Vector","x":220,"y":18},{"type":"Vector","x":220,"y":220},{"type":"Vector","x":18,"y":220}]]},{"action":"Repeat","line":7,"imageSrc":"/tests/assets/image.jpg","x":82,"y":82,"width":75,"height":75,"path":[{"type":"Vector","x":18,"y":18},{"type":"Vector","x":220,"y":18},{"type":"Vector","x":220,"y":220},{"type":"Vector","x":18,"y":220}]},{"action":"Shape","line":8,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":18},{"type":"Vector","x":220,"y":18},{"type":"Vector","x":219,"y":19},{"type":"Vector","x":19,"y":19}]},{"action":"Shape","line":9,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":18},{"type":"Vector","x":220,"y":220},{"type":"Vector","x":219,"y":219},{"type":"Vector","x":219,"y":19}]},{"action":"Shape","line":10,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":220},{"type":"Vector","x":18,"y":220},{"type":"Vector","x":19,"y":219},{"type":"Vector","x":219,"y":219}]},{"action":"Shape","line":11,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":220},{"type":"Vector","x":18,"y":18},{"type":"Vector","x":19,"y":19},{"type":"Vector","x":19,"y":219}]},{"action":"Clip","line":12,"path":[[{"type":"Vector","x":240,"y":18},{"type":"Vector","x":442,"y":18},{"type":"Vector","x":442,"y":220},{"type":"Vector","x":240,"y":220}]]},{"action":"Repeat","line":13,"imageSrc":"/tests/assets/image.jpg","x":304,"y":82,"width":75,"height":75,"path":[{"type":"Vector","x":240,"y":82},{"type":"Vector","x":442,"y":82},{"type":"Vector","x":442,"y":157},{"type":"Vector","x":240,"y":157}]},{"action":"Shape","line":14,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":240,"y":18},{"type":"Vector","x":442,"y":18},{"type":"Vector","x":441,"y":19},{"type":"Vector","x":241,"y":19}]},{"action":"Shape","line":15,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":442,"y":18},{"type":"Vector","x":442,"y":220},{"type":"Vector","x":441,"y":219},{"type":"Vector","x":441,"y":19}]},{"action":"Shape","line":16,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":442,"y":220},{"type":"Vector","x":240,"y":220},{"type":"Vector","x":241,"y":219},{"type":"Vector","x":441,"y":219}]},{"action":"Shape","line":17,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":240,"y":220},{"type":"Vector","x":240,"y":18},{"type":"Vector","x":241,"y":19},{"type":"Vector","x":241,"y":219}]},{"action":"Clip","line":18,"path":[[{"type":"Vector","x":462,"y":18},{"type":"Vector","x":664,"y":18},{"type":"Vector","x":664,"y":220},{"type":"Vector","x":462,"y":220}]]},{"action":"Repeat","line":19,"imageSrc":"/tests/assets/image.jpg","x":526,"y":82,"width":75,"height":75,"path":[{"type":"Vector","x":526,"y":18},{"type":"Vector","x":601,"y":18},{"type":"Vector","x":601,"y":220},{"type":"Vector","x":526,"y":220}]},{"action":"Shape","line":20,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":18},{"type":"Vector","x":664,"y":18},{"type":"Vector","x":663,"y":19},{"type":"Vector","x":463,"y":19}]},{"action":"Shape","line":21,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":664,"y":18},{"type":"Vector","x":664,"y":220},{"type":"Vector","x":663,"y":219},{"type":"Vector","x":663,"y":19}]},{"action":"Shape","line":22,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":664,"y":220},{"type":"Vector","x":462,"y":220},{"type":"Vector","x":463,"y":219},{"type":"Vector","x":663,"y":219}]},{"action":"Shape","line":23,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":220},{"type":"Vector","x":462,"y":18},{"type":"Vector","x":463,"y":19},{"type":"Vector","x":463,"y":219}]},{"action":"Clip","line":24,"path":[[{"type":"Vector","x":18,"y":240},{"type":"Vector","x":220,"y":240},{"type":"Vector","x":220,"y":442},{"type":"Vector","x":18,"y":442}]]},{"action":"Repeat","line":25,"imageSrc":"/tests/assets/image.jpg","x":82,"y":304,"width":75,"height":75,"path":[{"type":"Vector","x":82,"y":304},{"type":"Vector","x":157,"y":304},{"type":"Vector","x":157,"y":379},{"type":"Vector","x":82,"y":379}]},{"action":"Shape","line":26,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":240},{"type":"Vector","x":220,"y":240},{"type":"Vector","x":219,"y":241},{"type":"Vector","x":19,"y":241}]},{"action":"Shape","line":27,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":240},{"type":"Vector","x":220,"y":442},{"type":"Vector","x":219,"y":441},{"type":"Vector","x":219,"y":241}]},{"action":"Shape","line":28,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":442},{"type":"Vector","x":18,"y":442},{"type":"Vector","x":19,"y":441},{"type":"Vector","x":219,"y":441}]},{"action":"Shape","line":29,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":442},{"type":"Vector","x":18,"y":240},{"type":"Vector","x":19,"y":241},{"type":"Vector","x":19,"y":441}]},{"action":"Clip","line":30,"path":[[{"type":"Vector","x":18,"y":462},{"type":"Vector","x":120,"y":462},{"type":"Vector","x":120,"y":564},{"type":"Vector","x":18,"y":564}]]},{"action":"Repeat","line":31,"imageSrc":"/tests/assets/image.jpg","x":32,"y":476,"width":75,"height":75,"path":[{"type":"Vector","x":18,"y":462},{"type":"Vector","x":120,"y":462},{"type":"Vector","x":120,"y":564},{"type":"Vector","x":18,"y":564}]},{"action":"Shape","line":32,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":462},{"type":"Vector","x":120,"y":462},{"type":"Vector","x":119,"y":463},{"type":"Vector","x":19,"y":463}]},{"action":"Shape","line":33,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":120,"y":462},{"type":"Vector","x":120,"y":564},{"type":"Vector","x":119,"y":563},{"type":"Vector","x":119,"y":463}]},{"action":"Shape","line":34,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":120,"y":564},{"type":"Vector","x":18,"y":564},{"type":"Vector","x":19,"y":563},{"type":"Vector","x":119,"y":563}]},{"action":"Shape","line":35,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":564},{"type":"Vector","x":18,"y":462},{"type":"Vector","x":19,"y":463},{"type":"Vector","x":19,"y":563}]},{"action":"Clip","line":36,"path":[[{"type":"Vector","x":140,"y":462},{"type":"Vector","x":242,"y":462},{"type":"Vector","x":242,"y":564},{"type":"Vector","x":140,"y":564}]]},{"action":"Repeat","line":37,"imageSrc":"/tests/assets/image.jpg","x":154,"y":476,"width":75,"height":75,"path":[{"type":"Vector","x":140,"y":476},{"type":"Vector","x":242,"y":476},{"type":"Vector","x":242,"y":551},{"type":"Vector","x":140,"y":551}]},{"action":"Shape","line":38,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":140,"y":462},{"type":"Vector","x":242,"y":462},{"type":"Vector","x":241,"y":463},{"type":"Vector","x":141,"y":463}]},{"action":"Shape","line":39,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":242,"y":462},{"type":"Vector","x":242,"y":564},{"type":"Vector","x":241,"y":563},{"type":"Vector","x":241,"y":463}]},{"action":"Shape","line":40,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":242,"y":564},{"type":"Vector","x":140,"y":564},{"type":"Vector","x":141,"y":563},{"type":"Vector","x":241,"y":563}]},{"action":"Shape","line":41,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":140,"y":564},{"type":"Vector","x":140,"y":462},{"type":"Vector","x":141,"y":463},{"type":"Vector","x":141,"y":563}]},{"action":"Clip","line":42,"path":[[{"type":"Vector","x":262,"y":462},{"type":"Vector","x":364,"y":462},{"type":"Vector","x":364,"y":564},{"type":"Vector","x":262,"y":564}]]},{"action":"Repeat","line":43,"imageSrc":"/tests/assets/image.jpg","x":276,"y":476,"width":75,"height":75,"path":[{"type":"Vector","x":276,"y":462},{"type":"Vector","x":351,"y":462},{"type":"Vector","x":351,"y":564},{"type":"Vector","x":276,"y":564}]},{"action":"Shape","line":44,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":262,"y":462},{"type":"Vector","x":364,"y":462},{"type":"Vector","x":363,"y":463},{"type":"Vector","x":263,"y":463}]},{"action":"Shape","line":45,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":364,"y":462},{"type":"Vector","x":364,"y":564},{"type":"Vector","x":363,"y":563},{"type":"Vector","x":363,"y":463}]},{"action":"Shape","line":46,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":364,"y":564},{"type":"Vector","x":262,"y":564},{"type":"Vector","x":263,"y":563},{"type":"Vector","x":363,"y":563}]},{"action":"Shape","line":47,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":262,"y":564},{"type":"Vector","x":262,"y":462},{"type":"Vector","x":263,"y":463},{"type":"Vector","x":263,"y":563}]},{"action":"Clip","line":48,"path":[[{"type":"Vector","x":384,"y":462},{"type":"Vector","x":486,"y":462},{"type":"Vector","x":486,"y":564},{"type":"Vector","x":384,"y":564}]]},{"action":"Repeat","line":49,"imageSrc":"/tests/assets/image.jpg","x":398,"y":476,"width":75,"height":75,"path":[{"type":"Vector","x":398,"y":476},{"type":"Vector","x":473,"y":476},{"type":"Vector","x":473,"y":551},{"type":"Vector","x":398,"y":551}]},{"action":"Shape","line":50,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":384,"y":462},{"type":"Vector","x":486,"y":462},{"type":"Vector","x":485,"y":463},{"type":"Vector","x":385,"y":463}]},{"action":"Shape","line":51,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":486,"y":462},{"type":"Vector","x":486,"y":564},{"type":"Vector","x":485,"y":563},{"type":"Vector","x":485,"y":463}]},{"action":"Shape","line":52,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":486,"y":564},{"type":"Vector","x":384,"y":564},{"type":"Vector","x":385,"y":563},{"type":"Vector","x":485,"y":563}]},{"action":"Shape","line":53,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":384,"y":564},{"type":"Vector","x":384,"y":462},{"type":"Vector","x":385,"y":463},{"type":"Vector","x":385,"y":563}]},{"action":"Clip","line":54,"path":[[{"type":"Vector","x":18,"y":584},{"type":"Vector","x":220,"y":584},{"type":"Vector","x":220,"y":786},{"type":"Vector","x":18,"y":786}]]},{"action":"Repeat","line":55,"imageSrc":"/tests/assets/image.jpg","x":0,"y":610,"width":75,"height":75,"path":[{"type":"Vector","x":18,"y":584},{"type":"Vector","x":220,"y":584},{"type":"Vector","x":220,"y":786},{"type":"Vector","x":18,"y":786}]},{"action":"Shape","line":56,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":584},{"type":"Vector","x":220,"y":584},{"type":"Vector","x":219,"y":585},{"type":"Vector","x":19,"y":585}]},{"action":"Shape","line":57,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":584},{"type":"Vector","x":220,"y":786},{"type":"Vector","x":219,"y":785},{"type":"Vector","x":219,"y":585}]},{"action":"Shape","line":58,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":786},{"type":"Vector","x":18,"y":786},{"type":"Vector","x":19,"y":785},{"type":"Vector","x":219,"y":785}]},{"action":"Shape","line":59,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":786},{"type":"Vector","x":18,"y":584},{"type":"Vector","x":19,"y":585},{"type":"Vector","x":19,"y":785}]},{"action":"Clip","line":60,"path":[[{"type":"Vector","x":240,"y":584},{"type":"Vector","x":442,"y":584},{"type":"Vector","x":442,"y":786},{"type":"Vector","x":240,"y":786}]]},{"action":"Repeat","line":61,"imageSrc":"/tests/assets/image.jpg","x":291,"y":635,"width":75,"height":75,"path":[{"type":"Vector","x":240,"y":635},{"type":"Vector","x":442,"y":635},{"type":"Vector","x":442,"y":710},{"type":"Vector","x":240,"y":710}]},{"action":"Shape","line":62,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":240,"y":584},{"type":"Vector","x":442,"y":584},{"type":"Vector","x":441,"y":585},{"type":"Vector","x":241,"y":585}]},{"action":"Shape","line":63,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":442,"y":584},{"type":"Vector","x":442,"y":786},{"type":"Vector","x":441,"y":785},{"type":"Vector","x":441,"y":585}]},{"action":"Shape","line":64,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":442,"y":786},{"type":"Vector","x":240,"y":786},{"type":"Vector","x":241,"y":785},{"type":"Vector","x":441,"y":785}]},{"action":"Shape","line":65,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":240,"y":786},{"type":"Vector","x":240,"y":584},{"type":"Vector","x":241,"y":585},{"type":"Vector","x":241,"y":785}]},{"action":"Clip","line":66,"path":[[{"type":"Vector","x":462,"y":584},{"type":"Vector","x":664,"y":584},{"type":"Vector","x":664,"y":786},{"type":"Vector","x":462,"y":786}]]},{"action":"Repeat","line":67,"imageSrc":"/tests/assets/image.jpg","x":513,"y":635,"width":75,"height":75,"path":[{"type":"Vector","x":513,"y":584},{"type":"Vector","x":588,"y":584},{"type":"Vector","x":588,"y":786},{"type":"Vector","x":513,"y":786}]},{"action":"Shape","line":68,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":584},{"type":"Vector","x":664,"y":584},{"type":"Vector","x":663,"y":585},{"type":"Vector","x":463,"y":585}]},{"action":"Shape","line":69,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":664,"y":584},{"type":"Vector","x":664,"y":786},{"type":"Vector","x":663,"y":785},{"type":"Vector","x":663,"y":585}]},{"action":"Shape","line":70,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":664,"y":786},{"type":"Vector","x":462,"y":786},{"type":"Vector","x":463,"y":785},{"type":"Vector","x":663,"y":785}]},{"action":"Shape","line":71,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":786},{"type":"Vector","x":462,"y":584},{"type":"Vector","x":463,"y":585},{"type":"Vector","x":463,"y":785}]},{"action":"Clip","line":72,"path":[[{"type":"Vector","x":18,"y":806},{"type":"Vector","x":220,"y":806},{"type":"Vector","x":220,"y":1008},{"type":"Vector","x":18,"y":1008}]]},{"action":"Repeat","line":73,"imageSrc":"/tests/assets/image.jpg","x":69,"y":857,"width":75,"height":75,"path":[{"type":"Vector","x":69,"y":857},{"type":"Vector","x":144,"y":857},{"type":"Vector","x":144,"y":932},{"type":"Vector","x":69,"y":932}]},{"action":"Shape","line":74,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":806},{"type":"Vector","x":220,"y":806},{"type":"Vector","x":219,"y":807},{"type":"Vector","x":19,"y":807}]},{"action":"Shape","line":75,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":806},{"type":"Vector","x":220,"y":1008},{"type":"Vector","x":219,"y":1007},{"type":"Vector","x":219,"y":807}]},{"action":"Shape","line":76,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":1008},{"type":"Vector","x":18,"y":1008},{"type":"Vector","x":19,"y":1007},{"type":"Vector","x":219,"y":1007}]},{"action":"Shape","line":77,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":1008},{"type":"Vector","x":18,"y":806},{"type":"Vector","x":19,"y":807},{"type":"Vector","x":19,"y":1007}]}],"/tests/reftests/background/repeat.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgb(255,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":792,"y":8},{"type":"Vector","x":792,"y":452},{"type":"Vector","x":8,"y":452}]]},{"action":"Fill","line":5,"color":"rgb(0,255,0)"},{"action":"Clip","line":6,"path":[[{"type":"Vector","x":18,"y":18},{"type":"Vector","x":220,"y":18},{"type":"Vector","x":220,"y":220},{"type":"Vector","x":18,"y":220}]]},{"action":"Repeat","line":7,"imageSrc":"/tests/assets/image.jpg","x":19,"y":19,"width":75,"height":75,"path":[{"type":"Vector","x":18,"y":18},{"type":"Vector","x":220,"y":18},{"type":"Vector","x":220,"y":220},{"type":"Vector","x":18,"y":220}]},{"action":"Shape","line":8,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":18},{"type":"Vector","x":220,"y":18},{"type":"Vector","x":219,"y":19},{"type":"Vector","x":19,"y":19}]},{"action":"Shape","line":9,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":18},{"type":"Vector","x":220,"y":220},{"type":"Vector","x":219,"y":219},{"type":"Vector","x":219,"y":19}]},{"action":"Shape","line":10,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":220},{"type":"Vector","x":18,"y":220},{"type":"Vector","x":19,"y":219},{"type":"Vector","x":219,"y":219}]},{"action":"Shape","line":11,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":220},{"type":"Vector","x":18,"y":18},{"type":"Vector","x":19,"y":19},{"type":"Vector","x":19,"y":219}]},{"action":"Clip","line":12,"path":[[{"type":"Vector","x":240,"y":18},{"type":"Vector","x":442,"y":18},{"type":"Vector","x":442,"y":220},{"type":"Vector","x":240,"y":220}]]},{"action":"Repeat","line":13,"imageSrc":"/tests/assets/image.jpg","x":241,"y":19,"width":75,"height":75,"path":[{"type":"Vector","x":240,"y":19},{"type":"Vector","x":442,"y":19},{"type":"Vector","x":442,"y":94},{"type":"Vector","x":240,"y":94}]},{"action":"Shape","line":14,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":240,"y":18},{"type":"Vector","x":442,"y":18},{"type":"Vector","x":441,"y":19},{"type":"Vector","x":241,"y":19}]},{"action":"Shape","line":15,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":442,"y":18},{"type":"Vector","x":442,"y":220},{"type":"Vector","x":441,"y":219},{"type":"Vector","x":441,"y":19}]},{"action":"Shape","line":16,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":442,"y":220},{"type":"Vector","x":240,"y":220},{"type":"Vector","x":241,"y":219},{"type":"Vector","x":441,"y":219}]},{"action":"Shape","line":17,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":240,"y":220},{"type":"Vector","x":240,"y":18},{"type":"Vector","x":241,"y":19},{"type":"Vector","x":241,"y":219}]},{"action":"Clip","line":18,"path":[[{"type":"Vector","x":462,"y":18},{"type":"Vector","x":664,"y":18},{"type":"Vector","x":664,"y":220},{"type":"Vector","x":462,"y":220}]]},{"action":"Repeat","line":19,"imageSrc":"/tests/assets/image.jpg","x":463,"y":19,"width":75,"height":75,"path":[{"type":"Vector","x":463,"y":18},{"type":"Vector","x":538,"y":18},{"type":"Vector","x":538,"y":220},{"type":"Vector","x":463,"y":220}]},{"action":"Shape","line":20,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":18},{"type":"Vector","x":664,"y":18},{"type":"Vector","x":663,"y":19},{"type":"Vector","x":463,"y":19}]},{"action":"Shape","line":21,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":664,"y":18},{"type":"Vector","x":664,"y":220},{"type":"Vector","x":663,"y":219},{"type":"Vector","x":663,"y":19}]},{"action":"Shape","line":22,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":664,"y":220},{"type":"Vector","x":462,"y":220},{"type":"Vector","x":463,"y":219},{"type":"Vector","x":663,"y":219}]},{"action":"Shape","line":23,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":462,"y":220},{"type":"Vector","x":462,"y":18},{"type":"Vector","x":463,"y":19},{"type":"Vector","x":463,"y":219}]},{"action":"Clip","line":24,"path":[[{"type":"Vector","x":18,"y":240},{"type":"Vector","x":220,"y":240},{"type":"Vector","x":220,"y":442},{"type":"Vector","x":18,"y":442}]]},{"action":"Repeat","line":25,"imageSrc":"/tests/assets/image.jpg","x":19,"y":241,"width":75,"height":75,"path":[{"type":"Vector","x":19,"y":241},{"type":"Vector","x":94,"y":241},{"type":"Vector","x":94,"y":316},{"type":"Vector","x":19,"y":316}]},{"action":"Shape","line":26,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":240},{"type":"Vector","x":220,"y":240},{"type":"Vector","x":219,"y":241},{"type":"Vector","x":19,"y":241}]},{"action":"Shape","line":27,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":240},{"type":"Vector","x":220,"y":442},{"type":"Vector","x":219,"y":441},{"type":"Vector","x":219,"y":241}]},{"action":"Shape","line":28,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":220,"y":442},{"type":"Vector","x":18,"y":442},{"type":"Vector","x":19,"y":441},{"type":"Vector","x":219,"y":441}]},{"action":"Shape","line":29,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":442},{"type":"Vector","x":18,"y":240},{"type":"Vector","x":19,"y":241},{"type":"Vector","x":19,"y":441}]},{"action":"Clip","line":30,"path":[[{"type":"Vector","x":18,"y":462},{"type":"Vector","x":120,"y":462},{"type":"Vector","x":120,"y":564},{"type":"Vector","x":18,"y":564}]]},{"action":"Repeat","line":31,"imageSrc":"/tests/assets/image.jpg","x":19,"y":463,"width":75,"height":75,"path":[{"type":"Vector","x":18,"y":462},{"type":"Vector","x":120,"y":462},{"type":"Vector","x":120,"y":564},{"type":"Vector","x":18,"y":564}]},{"action":"Shape","line":32,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":462},{"type":"Vector","x":120,"y":462},{"type":"Vector","x":119,"y":463},{"type":"Vector","x":19,"y":463}]},{"action":"Shape","line":33,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":120,"y":462},{"type":"Vector","x":120,"y":564},{"type":"Vector","x":119,"y":563},{"type":"Vector","x":119,"y":463}]},{"action":"Shape","line":34,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":120,"y":564},{"type":"Vector","x":18,"y":564},{"type":"Vector","x":19,"y":563},{"type":"Vector","x":119,"y":563}]},{"action":"Shape","line":35,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":18,"y":564},{"type":"Vector","x":18,"y":462},{"type":"Vector","x":19,"y":463},{"type":"Vector","x":19,"y":563}]},{"action":"Clip","line":36,"path":[[{"type":"Vector","x":140,"y":462},{"type":"Vector","x":242,"y":462},{"type":"Vector","x":242,"y":564},{"type":"Vector","x":140,"y":564}]]},{"action":"Repeat","line":37,"imageSrc":"/tests/assets/image.jpg","x":141,"y":463,"width":75,"height":75,"path":[{"type":"Vector","x":140,"y":463},{"type":"Vector","x":242,"y":463},{"type":"Vector","x":242,"y":538},{"type":"Vector","x":140,"y":538}]},{"action":"Shape","line":38,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":140,"y":462},{"type":"Vector","x":242,"y":462},{"type":"Vector","x":241,"y":463},{"type":"Vector","x":141,"y":463}]},{"action":"Shape","line":39,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":242,"y":462},{"type":"Vector","x":242,"y":564},{"type":"Vector","x":241,"y":563},{"type":"Vector","x":241,"y":463}]},{"action":"Shape","line":40,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":242,"y":564},{"type":"Vector","x":140,"y":564},{"type":"Vector","x":141,"y":563},{"type":"Vector","x":241,"y":563}]},{"action":"Shape","line":41,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":140,"y":564},{"type":"Vector","x":140,"y":462},{"type":"Vector","x":141,"y":463},{"type":"Vector","x":141,"y":563}]},{"action":"Clip","line":42,"path":[[{"type":"Vector","x":262,"y":462},{"type":"Vector","x":364,"y":462},{"type":"Vector","x":364,"y":564},{"type":"Vector","x":262,"y":564}]]},{"action":"Repeat","line":43,"imageSrc":"/tests/assets/image.jpg","x":263,"y":463,"width":75,"height":75,"path":[{"type":"Vector","x":263,"y":462},{"type":"Vector","x":338,"y":462},{"type":"Vector","x":338,"y":564},{"type":"Vector","x":263,"y":564}]},{"action":"Shape","line":44,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":262,"y":462},{"type":"Vector","x":364,"y":462},{"type":"Vector","x":363,"y":463},{"type":"Vector","x":263,"y":463}]},{"action":"Shape","line":45,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":364,"y":462},{"type":"Vector","x":364,"y":564},{"type":"Vector","x":363,"y":563},{"type":"Vector","x":363,"y":463}]},{"action":"Shape","line":46,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":364,"y":564},{"type":"Vector","x":262,"y":564},{"type":"Vector","x":263,"y":563},{"type":"Vector","x":363,"y":563}]},{"action":"Shape","line":47,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":262,"y":564},{"type":"Vector","x":262,"y":462},{"type":"Vector","x":263,"y":463},{"type":"Vector","x":263,"y":563}]},{"action":"Clip","line":48,"path":[[{"type":"Vector","x":384,"y":462},{"type":"Vector","x":486,"y":462},{"type":"Vector","x":486,"y":564},{"type":"Vector","x":384,"y":564}]]},{"action":"Repeat","line":49,"imageSrc":"/tests/assets/image.jpg","x":385,"y":463,"width":75,"height":75,"path":[{"type":"Vector","x":385,"y":463},{"type":"Vector","x":460,"y":463},{"type":"Vector","x":460,"y":538},{"type":"Vector","x":385,"y":538}]},{"action":"Shape","line":50,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":384,"y":462},{"type":"Vector","x":486,"y":462},{"type":"Vector","x":485,"y":463},{"type":"Vector","x":385,"y":463}]},{"action":"Shape","line":51,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":486,"y":462},{"type":"Vector","x":486,"y":564},{"type":"Vector","x":485,"y":563},{"type":"Vector","x":485,"y":463}]},{"action":"Shape","line":52,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":486,"y":564},{"type":"Vector","x":384,"y":564},{"type":"Vector","x":385,"y":563},{"type":"Vector","x":485,"y":563}]},{"action":"Shape","line":53,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":384,"y":564},{"type":"Vector","x":384,"y":462},{"type":"Vector","x":385,"y":463},{"type":"Vector","x":385,"y":563}]}],"/tests/reftests/background/size.html":[{"action":"Window","line":1,"width":800,"height":1010},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":1010,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":160,"y":8},{"type":"Vector","x":160,"y":210},{"type":"Vector","x":8,"y":210}]]},{"action":"Repeat","line":5,"imageSrc":"/tests/assets/image.jpg","x":67,"y":92,"width":34,"height":34,"path":[{"type":"Vector","x":67,"y":92},{"type":"Vector","x":101,"y":92},{"type":"Vector","x":101,"y":126},{"type":"Vector","x":67,"y":126}]},{"action":"Shape","line":6,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":160,"y":8},{"type":"Vector","x":159,"y":9},{"type":"Vector","x":9,"y":9}]},{"action":"Shape","line":7,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":160,"y":8},{"type":"Vector","x":160,"y":210},{"type":"Vector","x":159,"y":209},{"type":"Vector","x":159,"y":9}]},{"action":"Shape","line":8,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":160,"y":210},{"type":"Vector","x":8,"y":210},{"type":"Vector","x":9,"y":209},{"type":"Vector","x":159,"y":209}]},{"action":"Shape","line":9,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":210},{"type":"Vector","x":8,"y":8},{"type":"Vector","x":9,"y":9},{"type":"Vector","x":9,"y":209}]},{"action":"Clip","line":10,"path":[[{"type":"Vector","x":160,"y":8},{"type":"Vector","x":312,"y":8},{"type":"Vector","x":312,"y":210},{"type":"Vector","x":160,"y":210}]]},{"action":"Repeat","line":11,"imageSrc":"/tests/assets/image.jpg","x":219,"y":92,"width":34,"height":34,"path":[{"type":"Vector","x":219,"y":8},{"type":"Vector","x":253,"y":8},{"type":"Vector","x":253,"y":210},{"type":"Vector","x":219,"y":210}]},{"action":"Shape","line":12,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":160,"y":8},{"type":"Vector","x":312,"y":8},{"type":"Vector","x":311,"y":9},{"type":"Vector","x":161,"y":9}]},{"action":"Shape","line":13,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":312,"y":8},{"type":"Vector","x":312,"y":210},{"type":"Vector","x":311,"y":209},{"type":"Vector","x":311,"y":9}]},{"action":"Shape","line":14,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":312,"y":210},{"type":"Vector","x":160,"y":210},{"type":"Vector","x":161,"y":209},{"type":"Vector","x":311,"y":209}]},{"action":"Shape","line":15,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":160,"y":210},{"type":"Vector","x":160,"y":8},{"type":"Vector","x":161,"y":9},{"type":"Vector","x":161,"y":209}]},{"action":"Clip","line":16,"path":[[{"type":"Vector","x":312,"y":8},{"type":"Vector","x":464,"y":8},{"type":"Vector","x":464,"y":210},{"type":"Vector","x":312,"y":210}]]},{"action":"Repeat","line":17,"imageSrc":"/tests/assets/image.jpg","x":371,"y":92,"width":34,"height":34,"path":[{"type":"Vector","x":312,"y":92},{"type":"Vector","x":464,"y":92},{"type":"Vector","x":464,"y":126},{"type":"Vector","x":312,"y":126}]},{"action":"Shape","line":18,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":312,"y":8},{"type":"Vector","x":464,"y":8},{"type":"Vector","x":463,"y":9},{"type":"Vector","x":313,"y":9}]},{"action":"Shape","line":19,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":464,"y":8},{"type":"Vector","x":464,"y":210},{"type":"Vector","x":463,"y":209},{"type":"Vector","x":463,"y":9}]},{"action":"Shape","line":20,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":464,"y":210},{"type":"Vector","x":312,"y":210},{"type":"Vector","x":313,"y":209},{"type":"Vector","x":463,"y":209}]},{"action":"Shape","line":21,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":312,"y":210},{"type":"Vector","x":312,"y":8},{"type":"Vector","x":313,"y":9},{"type":"Vector","x":313,"y":209}]},{"action":"Clip","line":22,"path":[[{"type":"Vector","x":464,"y":8},{"type":"Vector","x":616,"y":8},{"type":"Vector","x":616,"y":210},{"type":"Vector","x":464,"y":210}]]},{"action":"Repeat","line":23,"imageSrc":"/tests/assets/image.jpg","x":426,"y":-5,"width":228,"height":228,"path":[{"type":"Vector","x":426,"y":-5},{"type":"Vector","x":654,"y":-5},{"type":"Vector","x":654,"y":223},{"type":"Vector","x":426,"y":223}]},{"action":"Shape","line":24,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":464,"y":8},{"type":"Vector","x":616,"y":8},{"type":"Vector","x":615,"y":9},{"type":"Vector","x":465,"y":9}]},{"action":"Shape","line":25,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":616,"y":8},{"type":"Vector","x":616,"y":210},{"type":"Vector","x":615,"y":209},{"type":"Vector","x":615,"y":9}]},{"action":"Shape","line":26,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":616,"y":210},{"type":"Vector","x":464,"y":210},{"type":"Vector","x":465,"y":209},{"type":"Vector","x":615,"y":209}]},{"action":"Shape","line":27,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":464,"y":210},{"type":"Vector","x":464,"y":8},{"type":"Vector","x":465,"y":9},{"type":"Vector","x":465,"y":209}]},{"action":"Clip","line":28,"path":[[{"type":"Vector","x":8,"y":210},{"type":"Vector","x":408,"y":210},{"type":"Vector","x":408,"y":310},{"type":"Vector","x":8,"y":310}]]},{"action":"Repeat","line":29,"imageSrc":"/tests/assets/image.jpg","x":8,"y":60,"width":400,"height":400,"path":[{"type":"Vector","x":8,"y":210},{"type":"Vector","x":408,"y":210},{"type":"Vector","x":408,"y":310},{"type":"Vector","x":8,"y":310}]},{"action":"Clip","line":30,"path":[[{"type":"Vector","x":8,"y":310},{"type":"Vector","x":408,"y":310},{"type":"Vector","x":408,"y":410},{"type":"Vector","x":8,"y":410}]]},{"action":"Repeat","line":31,"imageSrc":"/tests/assets/image.jpg","x":158,"y":310,"width":100,"height":100,"path":[{"type":"Vector","x":8,"y":310},{"type":"Vector","x":408,"y":310},{"type":"Vector","x":408,"y":410},{"type":"Vector","x":8,"y":410}]},{"action":"Clip","line":32,"path":[[{"type":"Vector","x":8,"y":410},{"type":"Vector","x":408,"y":410},{"type":"Vector","x":408,"y":510},{"type":"Vector","x":8,"y":510}]]},{"action":"Repeat","line":33,"imageSrc":"/tests/assets/image.jpg","x":158,"y":410,"width":100,"height":100,"path":[{"type":"Vector","x":8,"y":410},{"type":"Vector","x":408,"y":410},{"type":"Vector","x":408,"y":510},{"type":"Vector","x":8,"y":510}]},{"action":"Clip","line":34,"path":[[{"type":"Vector","x":8,"y":510},{"type":"Vector","x":408,"y":510},{"type":"Vector","x":408,"y":610},{"type":"Vector","x":8,"y":610}]]},{"action":"Repeat","line":35,"imageSrc":"/tests/assets/image.jpg","x":171,"y":523,"width":75,"height":75,"path":[{"type":"Vector","x":8,"y":510},{"type":"Vector","x":408,"y":510},{"type":"Vector","x":408,"y":610},{"type":"Vector","x":8,"y":610}]},{"action":"Clip","line":36,"path":[[{"type":"Vector","x":592,"y":210},{"type":"Vector","x":792,"y":210},{"type":"Vector","x":792,"y":410},{"type":"Vector","x":592,"y":410}]]},{"action":"Repeat","line":37,"imageSrc":"/tests/assets/image.jpg","x":592,"y":210,"width":200,"height":200,"path":[{"type":"Vector","x":592,"y":210},{"type":"Vector","x":792,"y":210},{"type":"Vector","x":792,"y":410},{"type":"Vector","x":592,"y":410}]},{"action":"Clip","line":38,"path":[[{"type":"Vector","x":592,"y":410},{"type":"Vector","x":792,"y":410},{"type":"Vector","x":792,"y":610},{"type":"Vector","x":592,"y":610}]]},{"action":"Repeat","line":39,"imageSrc":"/tests/assets/image.jpg","x":592,"y":410,"width":200,"height":200,"path":[{"type":"Vector","x":592,"y":410},{"type":"Vector","x":792,"y":410},{"type":"Vector","x":792,"y":610},{"type":"Vector","x":592,"y":610}]},{"action":"Clip","line":40,"path":[[{"type":"Vector","x":592,"y":610},{"type":"Vector","x":792,"y":610},{"type":"Vector","x":792,"y":810},{"type":"Vector","x":592,"y":810}]]},{"action":"Repeat","line":41,"imageSrc":"/tests/assets/image.jpg","x":592,"y":610,"width":200,"height":200,"path":[{"type":"Vector","x":592,"y":610},{"type":"Vector","x":792,"y":610},{"type":"Vector","x":792,"y":810},{"type":"Vector","x":592,"y":810}]},{"action":"Clip","line":42,"path":[[{"type":"Vector","x":592,"y":810},{"type":"Vector","x":792,"y":810},{"type":"Vector","x":792,"y":1010},{"type":"Vector","x":592,"y":1010}]]},{"action":"Repeat","line":43,"imageSrc":"/tests/assets/image.jpg","x":655,"y":873,"width":75,"height":75,"path":[{"type":"Vector","x":592,"y":810},{"type":"Vector","x":792,"y":810},{"type":"Vector","x":792,"y":1010},{"type":"Vector","x":592,"y":1010}]}],"/tests/reftests/border/dashed.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgb(58,132,195)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":18,"y":27},{"type":"Vector","x":220,"y":27},{"type":"Vector","x":220,"y":229},{"type":"Vector","x":18,"y":229}]]},{"action":"Fill","line":5,"color":"rgb(111,66,140)"},{"action":"Shape","line":6,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":18,"y":27},{"type":"Vector","x":220,"y":27},{"type":"Vector","x":219,"y":28},{"type":"Vector","x":19,"y":28}]},{"action":"Shape","line":7,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":220,"y":27},{"type":"Vector","x":220,"y":229},{"type":"Vector","x":219,"y":228},{"type":"Vector","x":219,"y":28}]},{"action":"Shape","line":8,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":220,"y":229},{"type":"Vector","x":18,"y":229},{"type":"Vector","x":19,"y":228},{"type":"Vector","x":219,"y":228}]},{"action":"Shape","line":9,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":18,"y":229},{"type":"Vector","x":18,"y":27},{"type":"Vector","x":19,"y":28},{"type":"Vector","x":19,"y":228}]},{"action":"Clip","line":10,"path":[[{"type":"Vector","x":244,"y":25},{"type":"Vector","x":450,"y":25},{"type":"Vector","x":450,"y":231},{"type":"Vector","x":244,"y":231}]]},{"action":"Fill","line":11,"color":"rgb(111,66,140)"},{"action":"Shape","line":12,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":244,"y":25},{"type":"Vector","x":450,"y":25},{"type":"Vector","x":447,"y":28},{"type":"Vector","x":247,"y":28}]},{"action":"Shape","line":13,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":450,"y":25},{"type":"Vector","x":450,"y":231},{"type":"Vector","x":447,"y":228},{"type":"Vector","x":447,"y":28}]},{"action":"Shape","line":14,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":450,"y":231},{"type":"Vector","x":244,"y":231},{"type":"Vector","x":247,"y":228},{"type":"Vector","x":447,"y":228}]},{"action":"Shape","line":15,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":244,"y":231},{"type":"Vector","x":244,"y":25},{"type":"Vector","x":247,"y":28},{"type":"Vector","x":247,"y":228}]},{"action":"Clip","line":16,"path":[[{"type":"Vector","x":474,"y":18},{"type":"Vector","x":694,"y":18},{"type":"Vector","x":694,"y":238},{"type":"Vector","x":474,"y":238}]]},{"action":"Fill","line":17,"color":"rgb(111,66,140)"},{"action":"Shape","line":18,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":474,"y":18},{"type":"Vector","x":694,"y":18},{"type":"Vector","x":684,"y":28},{"type":"Vector","x":484,"y":28}]},{"action":"Shape","line":19,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":18},{"type":"Vector","x":694,"y":238},{"type":"Vector","x":684,"y":228},{"type":"Vector","x":684,"y":28}]},{"action":"Shape","line":20,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":238},{"type":"Vector","x":474,"y":238},{"type":"Vector","x":484,"y":228},{"type":"Vector","x":684,"y":228}]},{"action":"Shape","line":21,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":474,"y":238},{"type":"Vector","x":474,"y":18},{"type":"Vector","x":484,"y":28},{"type":"Vector","x":484,"y":228}]},{"action":"Clip","line":22,"path":[[{"type":"Vector","x":18,"y":258},{"type":"Vector","x":318,"y":258},{"type":"Vector","x":318,"y":558},{"type":"Vector","x":18,"y":558}]]},{"action":"Fill","line":23,"color":"rgb(111,66,140)"},{"action":"Shape","line":24,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":18,"y":258},{"type":"Vector","x":318,"y":258},{"type":"Vector","x":268,"y":308},{"type":"Vector","x":68,"y":308}]},{"action":"Shape","line":25,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":318,"y":258},{"type":"Vector","x":318,"y":558},{"type":"Vector","x":268,"y":508},{"type":"Vector","x":268,"y":308}]},{"action":"Shape","line":26,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":318,"y":558},{"type":"Vector","x":18,"y":558},{"type":"Vector","x":68,"y":508},{"type":"Vector","x":268,"y":508}]},{"action":"Shape","line":27,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":18,"y":558},{"type":"Vector","x":18,"y":258},{"type":"Vector","x":68,"y":308},{"type":"Vector","x":68,"y":508}]}],"/tests/reftests/border/dotted.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgb(58,132,195)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":18,"y":27},{"type":"Vector","x":220,"y":27},{"type":"Vector","x":220,"y":229},{"type":"Vector","x":18,"y":229}]]},{"action":"Fill","line":5,"color":"rgb(111,66,140)"},{"action":"Shape","line":6,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":18,"y":27},{"type":"Vector","x":220,"y":27},{"type":"Vector","x":219,"y":28},{"type":"Vector","x":19,"y":28}]},{"action":"Shape","line":7,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":220,"y":27},{"type":"Vector","x":220,"y":229},{"type":"Vector","x":219,"y":228},{"type":"Vector","x":219,"y":28}]},{"action":"Shape","line":8,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":220,"y":229},{"type":"Vector","x":18,"y":229},{"type":"Vector","x":19,"y":228},{"type":"Vector","x":219,"y":228}]},{"action":"Shape","line":9,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":18,"y":229},{"type":"Vector","x":18,"y":27},{"type":"Vector","x":19,"y":28},{"type":"Vector","x":19,"y":228}]},{"action":"Clip","line":10,"path":[[{"type":"Vector","x":244,"y":25},{"type":"Vector","x":450,"y":25},{"type":"Vector","x":450,"y":231},{"type":"Vector","x":244,"y":231}]]},{"action":"Fill","line":11,"color":"rgb(111,66,140)"},{"action":"Shape","line":12,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":244,"y":25},{"type":"Vector","x":450,"y":25},{"type":"Vector","x":447,"y":28},{"type":"Vector","x":247,"y":28}]},{"action":"Shape","line":13,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":450,"y":25},{"type":"Vector","x":450,"y":231},{"type":"Vector","x":447,"y":228},{"type":"Vector","x":447,"y":28}]},{"action":"Shape","line":14,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":450,"y":231},{"type":"Vector","x":244,"y":231},{"type":"Vector","x":247,"y":228},{"type":"Vector","x":447,"y":228}]},{"action":"Shape","line":15,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":244,"y":231},{"type":"Vector","x":244,"y":25},{"type":"Vector","x":247,"y":28},{"type":"Vector","x":247,"y":228}]},{"action":"Clip","line":16,"path":[[{"type":"Vector","x":474,"y":18},{"type":"Vector","x":694,"y":18},{"type":"Vector","x":694,"y":238},{"type":"Vector","x":474,"y":238}]]},{"action":"Fill","line":17,"color":"rgb(111,66,140)"},{"action":"Shape","line":18,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":474,"y":18},{"type":"Vector","x":694,"y":18},{"type":"Vector","x":684,"y":28},{"type":"Vector","x":484,"y":28}]},{"action":"Shape","line":19,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":18},{"type":"Vector","x":694,"y":238},{"type":"Vector","x":684,"y":228},{"type":"Vector","x":684,"y":28}]},{"action":"Shape","line":20,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":238},{"type":"Vector","x":474,"y":238},{"type":"Vector","x":484,"y":228},{"type":"Vector","x":684,"y":228}]},{"action":"Shape","line":21,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":474,"y":238},{"type":"Vector","x":474,"y":18},{"type":"Vector","x":484,"y":28},{"type":"Vector","x":484,"y":228}]},{"action":"Clip","line":22,"path":[[{"type":"Vector","x":18,"y":258},{"type":"Vector","x":318,"y":258},{"type":"Vector","x":318,"y":558},{"type":"Vector","x":18,"y":558}]]},{"action":"Fill","line":23,"color":"rgb(111,66,140)"},{"action":"Shape","line":24,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":18,"y":258},{"type":"Vector","x":318,"y":258},{"type":"Vector","x":268,"y":308},{"type":"Vector","x":68,"y":308}]},{"action":"Shape","line":25,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":318,"y":258},{"type":"Vector","x":318,"y":558},{"type":"Vector","x":268,"y":508},{"type":"Vector","x":268,"y":308}]},{"action":"Shape","line":26,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":318,"y":558},{"type":"Vector","x":18,"y":558},{"type":"Vector","x":68,"y":508},{"type":"Vector","x":268,"y":508}]},{"action":"Shape","line":27,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":18,"y":558},{"type":"Vector","x":18,"y":258},{"type":"Vector","x":68,"y":308},{"type":"Vector","x":68,"y":508}]}],"/tests/reftests/border/double.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgb(58,132,195)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":18,"y":27},{"type":"Vector","x":220,"y":27},{"type":"Vector","x":220,"y":229},{"type":"Vector","x":18,"y":229}]]},{"action":"Fill","line":5,"color":"rgb(111,66,140)"},{"action":"Shape","line":6,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":18,"y":27},{"type":"Vector","x":220,"y":27},{"type":"Vector","x":219,"y":28},{"type":"Vector","x":19,"y":28}]},{"action":"Shape","line":7,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":220,"y":27},{"type":"Vector","x":220,"y":229},{"type":"Vector","x":219,"y":228},{"type":"Vector","x":219,"y":28}]},{"action":"Shape","line":8,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":220,"y":229},{"type":"Vector","x":18,"y":229},{"type":"Vector","x":19,"y":228},{"type":"Vector","x":219,"y":228}]},{"action":"Shape","line":9,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":18,"y":229},{"type":"Vector","x":18,"y":27},{"type":"Vector","x":19,"y":28},{"type":"Vector","x":19,"y":228}]},{"action":"Clip","line":10,"path":[[{"type":"Vector","x":244,"y":25},{"type":"Vector","x":450,"y":25},{"type":"Vector","x":450,"y":231},{"type":"Vector","x":244,"y":231}]]},{"action":"Fill","line":11,"color":"rgb(111,66,140)"},{"action":"Shape","line":12,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":244,"y":25},{"type":"Vector","x":450,"y":25},{"type":"Vector","x":447,"y":28},{"type":"Vector","x":247,"y":28}]},{"action":"Shape","line":13,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":450,"y":25},{"type":"Vector","x":450,"y":231},{"type":"Vector","x":447,"y":228},{"type":"Vector","x":447,"y":28}]},{"action":"Shape","line":14,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":450,"y":231},{"type":"Vector","x":244,"y":231},{"type":"Vector","x":247,"y":228},{"type":"Vector","x":447,"y":228}]},{"action":"Shape","line":15,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":244,"y":231},{"type":"Vector","x":244,"y":25},{"type":"Vector","x":247,"y":28},{"type":"Vector","x":247,"y":228}]},{"action":"Clip","line":16,"path":[[{"type":"Vector","x":474,"y":18},{"type":"Vector","x":694,"y":18},{"type":"Vector","x":694,"y":238},{"type":"Vector","x":474,"y":238}]]},{"action":"Fill","line":17,"color":"rgb(111,66,140)"},{"action":"Shape","line":18,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":474,"y":18},{"type":"Vector","x":694,"y":18},{"type":"Vector","x":684,"y":28},{"type":"Vector","x":484,"y":28}]},{"action":"Shape","line":19,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":18},{"type":"Vector","x":694,"y":238},{"type":"Vector","x":684,"y":228},{"type":"Vector","x":684,"y":28}]},{"action":"Shape","line":20,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":238},{"type":"Vector","x":474,"y":238},{"type":"Vector","x":484,"y":228},{"type":"Vector","x":684,"y":228}]},{"action":"Shape","line":21,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":474,"y":238},{"type":"Vector","x":474,"y":18},{"type":"Vector","x":484,"y":28},{"type":"Vector","x":484,"y":228}]},{"action":"Clip","line":22,"path":[[{"type":"Vector","x":18,"y":258},{"type":"Vector","x":318,"y":258},{"type":"Vector","x":318,"y":558},{"type":"Vector","x":18,"y":558}]]},{"action":"Fill","line":23,"color":"rgb(111,66,140)"},{"action":"Shape","line":24,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":18,"y":258},{"type":"Vector","x":318,"y":258},{"type":"Vector","x":268,"y":308},{"type":"Vector","x":68,"y":308}]},{"action":"Shape","line":25,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":318,"y":258},{"type":"Vector","x":318,"y":558},{"type":"Vector","x":268,"y":508},{"type":"Vector","x":268,"y":308}]},{"action":"Shape","line":26,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":318,"y":558},{"type":"Vector","x":18,"y":558},{"type":"Vector","x":68,"y":508},{"type":"Vector","x":268,"y":508}]},{"action":"Shape","line":27,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":18,"y":558},{"type":"Vector","x":18,"y":258},{"type":"Vector","x":68,"y":308},{"type":"Vector","x":68,"y":508}]}],"/tests/reftests/border/inset.html":[{"action":"Window","line":1,"width":800,"height":693},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":693,"color":"rgb(58,132,195)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":18,"y":27},{"type":"Vector","x":220,"y":27},{"type":"Vector","x":220,"y":229},{"type":"Vector","x":18,"y":229}]]},{"action":"Fill","line":5,"color":"rgb(111,66,140)"},{"action":"Shape","line":6,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":18,"y":27},{"type":"Vector","x":220,"y":27},{"type":"Vector","x":219,"y":28},{"type":"Vector","x":19,"y":28}]},{"action":"Shape","line":7,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":220,"y":27},{"type":"Vector","x":220,"y":229},{"type":"Vector","x":219,"y":228},{"type":"Vector","x":219,"y":28}]},{"action":"Shape","line":8,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":220,"y":229},{"type":"Vector","x":18,"y":229},{"type":"Vector","x":19,"y":228},{"type":"Vector","x":219,"y":228}]},{"action":"Shape","line":9,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":18,"y":229},{"type":"Vector","x":18,"y":27},{"type":"Vector","x":19,"y":28},{"type":"Vector","x":19,"y":228}]},{"action":"Clip","line":10,"path":[[{"type":"Vector","x":244,"y":25},{"type":"Vector","x":450,"y":25},{"type":"Vector","x":450,"y":231},{"type":"Vector","x":244,"y":231}]]},{"action":"Fill","line":11,"color":"rgb(111,66,140)"},{"action":"Shape","line":12,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":244,"y":25},{"type":"Vector","x":450,"y":25},{"type":"Vector","x":447,"y":28},{"type":"Vector","x":247,"y":28}]},{"action":"Shape","line":13,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":450,"y":25},{"type":"Vector","x":450,"y":231},{"type":"Vector","x":447,"y":228},{"type":"Vector","x":447,"y":28}]},{"action":"Shape","line":14,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":450,"y":231},{"type":"Vector","x":244,"y":231},{"type":"Vector","x":247,"y":228},{"type":"Vector","x":447,"y":228}]},{"action":"Shape","line":15,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":244,"y":231},{"type":"Vector","x":244,"y":25},{"type":"Vector","x":247,"y":28},{"type":"Vector","x":247,"y":228}]},{"action":"Clip","line":16,"path":[[{"type":"Vector","x":474,"y":18},{"type":"Vector","x":694,"y":18},{"type":"Vector","x":694,"y":238},{"type":"Vector","x":474,"y":238}]]},{"action":"Fill","line":17,"color":"rgb(111,66,140)"},{"action":"Shape","line":18,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":474,"y":18},{"type":"Vector","x":694,"y":18},{"type":"Vector","x":684,"y":28},{"type":"Vector","x":484,"y":28}]},{"action":"Shape","line":19,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":18},{"type":"Vector","x":694,"y":238},{"type":"Vector","x":684,"y":228},{"type":"Vector","x":684,"y":28}]},{"action":"Shape","line":20,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":238},{"type":"Vector","x":474,"y":238},{"type":"Vector","x":484,"y":228},{"type":"Vector","x":684,"y":228}]},{"action":"Shape","line":21,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":474,"y":238},{"type":"Vector","x":474,"y":18},{"type":"Vector","x":484,"y":28},{"type":"Vector","x":484,"y":228}]},{"action":"Clip","line":22,"path":[[{"type":"Vector","x":18,"y":258},{"type":"Vector","x":318,"y":258},{"type":"Vector","x":318,"y":558},{"type":"Vector","x":18,"y":558}]]},{"action":"Fill","line":23,"color":"rgb(111,66,140)"},{"action":"Shape","line":24,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":18,"y":258},{"type":"Vector","x":318,"y":258},{"type":"Vector","x":268,"y":308},{"type":"Vector","x":68,"y":308}]},{"action":"Shape","line":25,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":318,"y":258},{"type":"Vector","x":318,"y":558},{"type":"Vector","x":268,"y":508},{"type":"Vector","x":268,"y":308}]},{"action":"Shape","line":26,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":318,"y":558},{"type":"Vector","x":18,"y":558},{"type":"Vector","x":68,"y":508},{"type":"Vector","x":268,"y":508}]},{"action":"Shape","line":27,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":18,"y":558},{"type":"Vector","x":18,"y":258},{"type":"Vector","x":68,"y":308},{"type":"Vector","x":68,"y":508}]},{"action":"Clip","line":28,"path":[[{"type":"Vector","x":342,"y":258},{"type":"Vector","x":642,"y":258},{"type":"Vector","x":642,"y":558},{"type":"Vector","x":342,"y":558}]]},{"action":"Fill","line":29,"color":"rgb(111,66,140)"},{"action":"Shape","line":30,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":342,"y":258},{"type":"Vector","x":642,"y":258},{"type":"Vector","x":592,"y":308},{"type":"Vector","x":392,"y":308}]},{"action":"Shape","line":31,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":642,"y":258},{"type":"Vector","x":642,"y":558},{"type":"Vector","x":592,"y":508},{"type":"Vector","x":592,"y":308}]},{"action":"Shape","line":32,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":642,"y":558},{"type":"Vector","x":342,"y":558},{"type":"Vector","x":392,"y":508},{"type":"Vector","x":592,"y":508}]},{"action":"Shape","line":33,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":342,"y":558},{"type":"Vector","x":342,"y":258},{"type":"Vector","x":392,"y":308},{"type":"Vector","x":392,"y":508}]},{"action":"Clip","line":34,"path":[[{"type":"Vector","x":8,"y":568},{"type":"Vector","x":308,"y":568},{"type":"Vector","x":308,"y":685},{"type":"Vector","x":8,"y":685}]]},{"action":"Fill","line":35,"color":"rgb(255,255,255)"},{"action":"Shape","line":36,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":568},{"type":"Vector","x":308,"y":568},{"type":"Vector","x":258,"y":618},{"type":"Vector","x":58,"y":618}]},{"action":"Shape","line":37,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":308,"y":568},{"type":"Vector","x":308,"y":685},{"type":"Vector","x":258,"y":635},{"type":"Vector","x":258,"y":618}]},{"action":"Shape","line":38,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":308,"y":685},{"type":"Vector","x":8,"y":685},{"type":"Vector","x":58,"y":635},{"type":"Vector","x":258,"y":635}]},{"action":"Shape","line":39,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":685},{"type":"Vector","x":8,"y":568},{"type":"Vector","x":58,"y":618},{"type":"Vector","x":58,"y":635}]}],"/tests/reftests/border/radius.html":[{"action":"Window","line":1,"width":800,"height":996},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":996,"color":"rgb(58,132,195)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"BezierCurve","x0":18,"y0":77,"x1":68,"y1":27,"cx0":18,"cy0":49,"cx1":40,"cy1":27},{"type":"BezierCurve","x0":170,"y0":27,"x1":220,"y1":77,"cx0":198,"cy0":27,"cx1":220,"cy1":49},{"type":"BezierCurve","x0":220,"y0":179,"x1":170,"y1":229,"cx0":220,"cy0":206,"cx1":198,"cy1":229},{"type":"BezierCurve","x0":68,"y0":229,"x1":18,"y1":179,"cx0":40,"cy0":229,"cx1":18,"cy1":206}]]},{"action":"Fill","line":5,"color":"rgb(111,66,140)"},{"action":"Shape","line":6,"color":"rgb(255,0,0)","path":[{"type":"BezierCurve","x0":33,"y0":41,"x1":68,"y1":27,"cx0":42,"cy0":32,"cx1":54,"cy1":27},{"type":"BezierCurve","x0":170,"y0":27,"x1":205,"y1":41,"cx0":184,"cy0":27,"cx1":196,"cy1":32},{"type":"BezierCurve","x0":205,"y0":42,"x1":170,"y1":28,"cx0":196,"cy0":33,"cx1":184,"cy1":28},{"type":"BezierCurve","x0":68,"y0":28,"x1":33,"y1":42,"cx0":54,"cy0":28,"cx1":42,"cy1":33}]},{"action":"Shape","line":7,"color":"rgb(0,128,0)","path":[{"type":"BezierCurve","x0":205,"y0":41,"x1":220,"y1":77,"cx0":214,"cy0":50,"cx1":220,"cy1":63},{"type":"BezierCurve","x0":220,"y0":179,"x1":205,"y1":214,"cx0":220,"cy0":193,"cx1":214,"cy1":205},{"type":"BezierCurve","x0":205,"y0":213,"x1":219,"y1":179,"cx0":214,"cy0":205,"cx1":219,"cy1":192},{"type":"BezierCurve","x0":219,"y0":77,"x1":205,"y1":42,"cx0":219,"cy0":63,"cx1":214,"cy1":51}]},{"action":"Shape","line":8,"color":"rgb(0,0,0)","path":[{"type":"BezierCurve","x0":205,"y0":214,"x1":170,"y1":229,"cx0":196,"cy0":223,"cx1":184,"cy1":229},{"type":"BezierCurve","x0":68,"y0":229,"x1":33,"y1":214,"cx0":54,"cy0":229,"cx1":42,"cy1":223},{"type":"BezierCurve","x0":33,"y0":213,"x1":68,"y1":228,"cx0":42,"cy0":222,"cx1":54,"cy1":228},{"type":"BezierCurve","x0":170,"y0":228,"x1":205,"y1":213,"cx0":184,"cy0":228,"cx1":196,"cy1":222}]},{"action":"Shape","line":9,"color":"rgb(0,181,226)","path":[{"type":"BezierCurve","x0":33,"y0":214,"x1":18,"y1":179,"cx0":24,"cy0":205,"cx1":18,"cy1":193},{"type":"BezierCurve","x0":18,"y0":77,"x1":33,"y1":41,"cx0":18,"cy0":63,"cx1":24,"cy1":50},{"type":"BezierCurve","x0":33,"y0":42,"x1":19,"y1":77,"cx0":24,"cy0":51,"cx1":19,"cy1":63},{"type":"BezierCurve","x0":19,"y0":179,"x1":33,"y1":213,"cx0":19,"cy0":192,"cx1":24,"cy1":205}]},{"action":"Clip","line":10,"path":[[{"type":"BezierCurve","x0":244,"y0":75,"x1":294,"y1":25,"cx0":244,"cy0":47,"cx1":266,"cy1":25},{"type":"BezierCurve","x0":400,"y0":25,"x1":450,"y1":75,"cx0":428,"cy0":25,"cx1":450,"cy1":47},{"type":"BezierCurve","x0":450,"y0":181,"x1":400,"y1":231,"cx0":450,"cy0":208,"cx1":428,"cy1":231},{"type":"BezierCurve","x0":294,"y0":231,"x1":244,"y1":181,"cx0":266,"cy0":231,"cx1":244,"cy1":208}]]},{"action":"Fill","line":11,"color":"rgb(111,66,140)"},{"action":"Shape","line":12,"color":"rgb(255,0,0)","path":[{"type":"BezierCurve","x0":259,"y0":39,"x1":294,"y1":25,"cx0":268,"cy0":30,"cx1":280,"cy1":25},{"type":"BezierCurve","x0":400,"y0":25,"x1":435,"y1":39,"cx0":414,"cy0":25,"cx1":426,"cy1":30},{"type":"BezierCurve","x0":433,"y0":42,"x1":400,"y1":28,"cx0":425,"cy0":33,"cx1":413,"cy1":28},{"type":"BezierCurve","x0":294,"y0":28,"x1":261,"y1":42,"cx0":281,"cy0":28,"cx1":269,"cy1":33}]},{"action":"Shape","line":13,"color":"rgb(0,128,0)","path":[{"type":"BezierCurve","x0":435,"y0":39,"x1":450,"y1":75,"cx0":444,"cy0":48,"cx1":450,"cy1":61},{"type":"BezierCurve","x0":450,"y0":181,"x1":435,"y1":216,"cx0":450,"cy0":195,"cx1":444,"cy1":207},{"type":"BezierCurve","x0":433,"y0":214,"x1":447,"y1":181,"cx0":442,"cy0":206,"cx1":447,"cy1":194},{"type":"BezierCurve","x0":447,"y0":75,"x1":433,"y1":42,"cx0":447,"cy0":62,"cx1":442,"cy1":50}]},{"action":"Shape","line":14,"color":"rgb(0,0,0)","path":[{"type":"BezierCurve","x0":435,"y0":216,"x1":400,"y1":231,"cx0":426,"cy0":225,"cx1":414,"cy1":231},{"type":"BezierCurve","x0":294,"y0":231,"x1":259,"y1":216,"cx0":280,"cy0":231,"cx1":268,"cy1":225},{"type":"BezierCurve","x0":261,"y0":214,"x1":294,"y1":228,"cx0":269,"cy0":223,"cx1":281,"cy1":228},{"type":"BezierCurve","x0":400,"y0":228,"x1":433,"y1":214,"cx0":413,"cy0":228,"cx1":425,"cy1":223}]},{"action":"Shape","line":15,"color":"rgb(0,181,226)","path":[{"type":"BezierCurve","x0":259,"y0":216,"x1":244,"y1":181,"cx0":250,"cy0":207,"cx1":244,"cy1":195},{"type":"BezierCurve","x0":244,"y0":75,"x1":259,"y1":39,"cx0":244,"cy0":61,"cx1":250,"cy1":48},{"type":"BezierCurve","x0":261,"y0":42,"x1":247,"y1":75,"cx0":252,"cy0":50,"cx1":247,"cy1":62},{"type":"BezierCurve","x0":247,"y0":181,"x1":261,"y1":214,"cx0":247,"cy0":194,"cx1":252,"cy1":206}]},{"action":"Clip","line":16,"path":[[{"type":"BezierCurve","x0":474,"y0":68,"x1":524,"y1":18,"cx0":474,"cy0":40,"cx1":496,"cy1":18},{"type":"BezierCurve","x0":644,"y0":18,"x1":694,"y1":68,"cx0":672,"cy0":18,"cx1":694,"cy1":40},{"type":"BezierCurve","x0":694,"y0":188,"x1":644,"y1":238,"cx0":694,"cy0":216,"cx1":672,"cy1":238},{"type":"BezierCurve","x0":524,"y0":238,"x1":474,"y1":188,"cx0":496,"cy0":238,"cx1":474,"cy1":216}]]},{"action":"Fill","line":17,"color":"rgb(111,66,140)"},{"action":"Shape","line":18,"color":"rgb(255,0,0)","path":[{"type":"BezierCurve","x0":489,"y0":33,"x1":524,"y1":18,"cx0":498,"cy0":24,"cx1":510,"cy1":18},{"type":"BezierCurve","x0":644,"y0":18,"x1":679,"y1":33,"cx0":658,"cy0":18,"cx1":670,"cy1":24},{"type":"BezierCurve","x0":672,"y0":40,"x1":644,"y1":28,"cx0":665,"cy0":32,"cx1":655,"cy1":28},{"type":"BezierCurve","x0":524,"y0":28,"x1":496,"y1":40,"cx0":513,"cy0":28,"cx1":503,"cy1":32}]},{"action":"Shape","line":19,"color":"rgb(0,128,0)","path":[{"type":"BezierCurve","x0":679,"y0":33,"x1":694,"y1":68,"cx0":688,"cy0":42,"cx1":694,"cy1":54},{"type":"BezierCurve","x0":694,"y0":188,"x1":679,"y1":223,"cx0":694,"cy0":202,"cx1":688,"cy1":214},{"type":"BezierCurve","x0":672,"y0":216,"x1":684,"y1":188,"cx0":680,"cy0":209,"cx1":684,"cy1":199},{"type":"BezierCurve","x0":684,"y0":68,"x1":672,"y1":40,"cx0":684,"cy0":57,"cx1":680,"cy1":47}]},{"action":"Shape","line":20,"color":"rgb(0,0,0)","path":[{"type":"BezierCurve","x0":679,"y0":223,"x1":644,"y1":238,"cx0":670,"cy0":232,"cx1":658,"cy1":238},{"type":"BezierCurve","x0":524,"y0":238,"x1":489,"y1":223,"cx0":510,"cy0":238,"cx1":498,"cy1":232},{"type":"BezierCurve","x0":496,"y0":216,"x1":524,"y1":228,"cx0":503,"cy0":224,"cx1":513,"cy1":228},{"type":"BezierCurve","x0":644,"y0":228,"x1":672,"y1":216,"cx0":655,"cy0":228,"cx1":665,"cy1":224}]},{"action":"Clip","line":21,"path":[[{"type":"BezierCurve","x0":68,"y0":308,"x1":68,"y1":268,"cx0":68,"cy0":286,"cx1":68,"cy1":268},{"type":"BezierCurve","x0":268,"y0":268,"x1":268,"y1":308,"cx0":268,"cy0":268,"cx1":268,"cy1":286},{"type":"BezierCurve","x0":268,"y0":388,"x1":168,"y1":468,"cx0":268,"cy0":432,"cx1":223,"cy1":468},{"type":"BezierCurve","x0":68,"y0":468,"x1":68,"y1":468,"cx0":68,"cy0":468,"cx1":68,"cy1":468}]]},{"action":"Fill","line":22,"color":"rgb(111,66,140)"},{"action":"Shape","line":23,"color":"rgb(255,0,0)","path":[{"type":"BezierCurve","x0":33,"y0":273,"x1":68,"y1":258,"cx0":42,"cy0":264,"cx1":54,"cy1":258},{"type":"BezierCurve","x0":268,"y0":258,"x1":303,"y1":273,"cx0":282,"cy0":258,"cx1":294,"cy1":264},{"type":"BezierCurve","x0":268,"y0":280,"x1":268,"y1":268,"cx0":268,"cy0":272,"cx1":268,"cy1":268},{"type":"BezierCurve","x0":68,"y0":268,"x1":68,"y1":280,"cx0":68,"cy0":268,"cx1":68,"cy1":272}]},{"action":"Shape","line":24,"color":"rgb(0,128,0)","path":[{"type":"BezierCurve","x0":303,"y0":273,"x1":318,"y1":308,"cx0":312,"cy0":282,"cx1":318,"cy1":294},{"type":"BezierCurve","x0":318,"y0":388,"x1":274,"y1":480,"cx0":318,"cy0":424,"cx1":301,"cy1":456},{"type":"BezierCurve","x0":239,"y0":445,"x1":268,"y1":388,"cx0":257,"cy0":430,"cx1":268,"cy1":410},{"type":"BezierCurve","x0":268,"y0":308,"x1":268,"y1":280,"cx0":268,"cy0":297,"cx1":268,"cy1":287}]},{"action":"Shape","line":25,"color":"rgb(0,0,0)","path":[{"type":"BezierCurve","x0":274,"y0":480,"x1":168,"y1":518,"cx0":247,"cy0":503,"cx1":209,"cy1":518},{"type":"BezierCurve","x0":68,"y0":518,"x1":33,"y1":503,"cx0":54,"cy0":518,"cx1":42,"cy1":512},{"type":"BezierCurve","x0":68,"y0":468,"x1":68,"y1":468,"cx0":68,"cy0":468,"cx1":68,"cy1":468},{"type":"BezierCurve","x0":168,"y0":468,"x1":239,"y1":445,"cx0":196,"cy0":468,"cx1":221,"cy1":459}]},{"action":"Clip","line":26,"path":[[{"type":"BezierCurve","x0":158,"y0":653,"x1":158,"y1":638,"cx0":158,"cy0":645,"cx1":158,"cy1":638},{"type":"BezierCurve","x0":383,"y0":638,"x1":358,"y1":653,"cx0":369,"cy0":638,"cx1":358,"cy1":645},{"type":"BezierCurve","x0":358,"y0":863,"x1":358,"y1":838,"cx0":358,"cy0":849,"cx1":358,"cy1":838},{"type":"BezierCurve","x0":158,"y0":838,"x1":158,"y1":863,"cx0":158,"cy0":838,"cx1":158,"cy1":849}]]},{"action":"Fill","line":27,"color":"rgb(111,66,140)"},{"action":"Shape","line":28,"color":"rgb(255,0,0)","path":[{"type":"BezierCurve","x0":115,"y0":635,"x1":133,"y1":628,"cx0":120,"cy0":631,"cx1":126,"cy1":628},{"type":"BezierCurve","x0":383,"y0":628,"x1":401,"y1":635,"cx0":390,"cy0":628,"cx1":396,"cy1":631},{"type":"BezierCurve","x0":365,"y0":642,"x1":383,"y1":638,"cx0":370,"cy0":640,"cx1":376,"cy1":638},{"type":"BezierCurve","x0":158,"y0":638,"x1":158,"y1":642,"cx0":158,"cy0":638,"cx1":158,"cy1":640}]},{"action":"Shape","line":29,"color":"rgb(0,128,0)","path":[{"type":"BezierCurve","x0":401,"y0":635,"x1":408,"y1":653,"cx0":405,"cy0":640,"cx1":408,"cy1":646},{"type":"BezierCurve","x0":408,"y0":863,"x1":401,"y1":881,"cx0":408,"cy0":870,"cx1":405,"cy1":876},{"type":"BezierCurve","x0":358,"y0":845,"x1":358,"y1":863,"cx0":358,"cy0":850,"cx1":358,"cy1":856},{"type":"BezierCurve","x0":358,"y0":653,"x1":365,"y1":642,"cx0":358,"cy0":649,"cx1":361,"cy1":645}]},{"action":"Shape","line":30,"color":"rgb(0,0,0)","path":[{"type":"BezierCurve","x0":401,"y0":881,"x1":383,"y1":888,"cx0":396,"cy0":885,"cx1":390,"cy1":888},{"type":"BezierCurve","x0":133,"y0":888,"x1":115,"y1":881,"cx0":126,"cy0":888,"cx1":120,"cy1":885},{"type":"BezierCurve","x0":158,"y0":845,"x1":158,"y1":838,"cx0":158,"cy0":841,"cx1":158,"cy1":838},{"type":"BezierCurve","x0":358,"y0":838,"x1":358,"y1":845,"cx0":358,"cy0":838,"cx1":358,"cy1":841}]},{"action":"Clip","line":31,"path":[[{"type":"BezierCurve","x0":522,"y0":738,"x1":623,"y1":637,"cx0":522,"cy0":682,"cx1":567,"cy1":637},{"type":"BezierCurve","x0":623,"y0":637,"x1":724,"y1":738,"cx0":679,"cy0":637,"cx1":724,"cy1":682},{"type":"BezierCurve","x0":724,"y0":738,"x1":623,"y1":839,"cx0":724,"cy0":794,"cx1":679,"cy1":839},{"type":"BezierCurve","x0":623,"y0":839,"x1":522,"y1":738,"cx0":567,"cy0":839,"cx1":522,"cy1":794}]]},{"action":"Fill","line":32,"color":"rgb(111,66,140)"},{"action":"Shape","line":33,"color":"rgb(0,0,0)","path":[{"type":"BezierCurve","x0":552,"y0":666,"x1":623,"y1":637,"cx0":570,"cy0":648,"cx1":595,"cy1":637},{"type":"BezierCurve","x0":623,"y0":637,"x1":695,"y1":666,"cx0":651,"cy0":637,"cx1":676,"cy1":648},{"type":"BezierCurve","x0":694,"y0":667,"x1":623,"y1":638,"cx0":676,"cy0":649,"cx1":651,"cy1":638},{"type":"BezierCurve","x0":623,"y0":638,"x1":552,"y1":667,"cx0":596,"cy0":638,"cx1":571,"cy1":649}]},{"action":"Shape","line":34,"color":"rgb(0,0,0)","path":[{"type":"BezierCurve","x0":695,"y0":666,"x1":724,"y1":738,"cx0":713,"cy0":685,"cx1":724,"cy1":710},{"type":"BezierCurve","x0":724,"y0":738,"x1":695,"y1":810,"cx0":724,"cy0":766,"cx1":713,"cy1":791},{"type":"BezierCurve","x0":694,"y0":809,"x1":723,"y1":738,"cx0":712,"cy0":791,"cx1":723,"cy1":766},{"type":"BezierCurve","x0":723,"y0":738,"x1":694,"y1":667,"cx0":723,"cy0":710,"cx1":712,"cy1":685}]},{"action":"Shape","line":35,"color":"rgb(0,0,0)","path":[{"type":"BezierCurve","x0":695,"y0":810,"x1":623,"y1":839,"cx0":676,"cy0":828,"cx1":651,"cy1":839},{"type":"BezierCurve","x0":623,"y0":839,"x1":552,"y1":810,"cx0":595,"cy0":839,"cx1":570,"cy1":828},{"type":"BezierCurve","x0":552,"y0":809,"x1":623,"y1":838,"cx0":571,"cy0":827,"cx1":596,"cy1":838},{"type":"BezierCurve","x0":623,"y0":838,"x1":694,"y1":809,"cx0":651,"cy0":838,"cx1":676,"cy1":827}]},{"action":"Shape","line":36,"color":"rgb(0,0,0)","path":[{"type":"BezierCurve","x0":552,"y0":810,"x1":522,"y1":738,"cx0":533,"cy0":791,"cx1":522,"cy1":766},{"type":"BezierCurve","x0":522,"y0":738,"x1":552,"y1":666,"cx0":522,"cy0":710,"cx1":533,"cy1":685},{"type":"BezierCurve","x0":552,"y0":667,"x1":523,"y1":738,"cx0":534,"cy0":685,"cx1":523,"cy1":710},{"type":"BezierCurve","x0":523,"y0":738,"x1":552,"y1":809,"cx0":523,"cy0":766,"cx1":534,"cy1":791}]}],"/tests/reftests/border/solid.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgb(58,132,195)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":18,"y":27},{"type":"Vector","x":220,"y":27},{"type":"Vector","x":220,"y":229},{"type":"Vector","x":18,"y":229}]]},{"action":"Fill","line":5,"color":"rgb(111,66,140)"},{"action":"Shape","line":6,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":18,"y":27},{"type":"Vector","x":220,"y":27},{"type":"Vector","x":219,"y":28},{"type":"Vector","x":19,"y":28}]},{"action":"Shape","line":7,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":220,"y":27},{"type":"Vector","x":220,"y":229},{"type":"Vector","x":219,"y":228},{"type":"Vector","x":219,"y":28}]},{"action":"Shape","line":8,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":220,"y":229},{"type":"Vector","x":18,"y":229},{"type":"Vector","x":19,"y":228},{"type":"Vector","x":219,"y":228}]},{"action":"Shape","line":9,"color":"rgb(0,181,226)","path":[{"type":"Vector","x":18,"y":229},{"type":"Vector","x":18,"y":27},{"type":"Vector","x":19,"y":28},{"type":"Vector","x":19,"y":228}]},{"action":"Clip","line":10,"path":[[{"type":"Vector","x":244,"y":25},{"type":"Vector","x":450,"y":25},{"type":"Vector","x":450,"y":231},{"type":"Vector","x":244,"y":231}]]},{"action":"Fill","line":11,"color":"rgb(111,66,140)"},{"action":"Shape","line":12,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":244,"y":25},{"type":"Vector","x":450,"y":25},{"type":"Vector","x":447,"y":28},{"type":"Vector","x":247,"y":28}]},{"action":"Shape","line":13,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":450,"y":25},{"type":"Vector","x":450,"y":231},{"type":"Vector","x":447,"y":228},{"type":"Vector","x":447,"y":28}]},{"action":"Shape","line":14,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":450,"y":231},{"type":"Vector","x":244,"y":231},{"type":"Vector","x":247,"y":228},{"type":"Vector","x":447,"y":228}]},{"action":"Shape","line":15,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":244,"y":231},{"type":"Vector","x":244,"y":25},{"type":"Vector","x":247,"y":28},{"type":"Vector","x":247,"y":228}]},{"action":"Clip","line":16,"path":[[{"type":"Vector","x":474,"y":18},{"type":"Vector","x":694,"y":18},{"type":"Vector","x":694,"y":238},{"type":"Vector","x":474,"y":238}]]},{"action":"Fill","line":17,"color":"rgb(111,66,140)"},{"action":"Shape","line":18,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":474,"y":18},{"type":"Vector","x":694,"y":18},{"type":"Vector","x":684,"y":28},{"type":"Vector","x":484,"y":28}]},{"action":"Shape","line":19,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":18},{"type":"Vector","x":694,"y":238},{"type":"Vector","x":684,"y":228},{"type":"Vector","x":684,"y":28}]},{"action":"Shape","line":20,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":694,"y":238},{"type":"Vector","x":474,"y":238},{"type":"Vector","x":484,"y":228},{"type":"Vector","x":684,"y":228}]},{"action":"Shape","line":21,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":474,"y":238},{"type":"Vector","x":474,"y":18},{"type":"Vector","x":484,"y":28},{"type":"Vector","x":484,"y":228}]},{"action":"Clip","line":22,"path":[[{"type":"Vector","x":18,"y":258},{"type":"Vector","x":318,"y":258},{"type":"Vector","x":318,"y":558},{"type":"Vector","x":18,"y":558}]]},{"action":"Fill","line":23,"color":"rgb(111,66,140)"},{"action":"Shape","line":24,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":18,"y":258},{"type":"Vector","x":318,"y":258},{"type":"Vector","x":268,"y":308},{"type":"Vector","x":68,"y":308}]},{"action":"Shape","line":25,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":318,"y":258},{"type":"Vector","x":318,"y":558},{"type":"Vector","x":268,"y":508},{"type":"Vector","x":268,"y":308}]},{"action":"Shape","line":26,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":318,"y":558},{"type":"Vector","x":18,"y":558},{"type":"Vector","x":68,"y":508},{"type":"Vector","x":268,"y":508}]},{"action":"Shape","line":27,"color":"rgb(0,128,0)","path":[{"type":"Vector","x":18,"y":558},{"type":"Vector","x":18,"y":258},{"type":"Vector","x":68,"y":308},{"type":"Vector","x":68,"y":508}]}],"/tests/reftests/clip.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":792,"y":8},{"type":"Vector","x":792,"y":104},{"type":"Vector","x":8,"y":104}]]},{"action":"Fill","line":5,"color":"rgb(255,0,0)"},{"action":"Shape","line":6,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":792,"y":8},{"type":"Vector","x":787,"y":13},{"type":"Vector","x":13,"y":13}]},{"action":"Shape","line":7,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":792,"y":8},{"type":"Vector","x":792,"y":104},{"type":"Vector","x":787,"y":99},{"type":"Vector","x":787,"y":13}]},{"action":"Shape","line":8,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":792,"y":104},{"type":"Vector","x":8,"y":104},{"type":"Vector","x":13,"y":99},{"type":"Vector","x":787,"y":99}]},{"action":"Shape","line":9,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":8,"y":104},{"type":"Vector","x":8,"y":8},{"type":"Vector","x":13,"y":13},{"type":"Vector","x":13,"y":99}]},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":13,"y":13,"text":"Some","line":11},{"action":"T","x":59,"y":13,"text":"inline","line":12},{"action":"T","x":101,"y":13,"text":"text","line":13},{"action":"Text","line":14,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":302,"y":13,"text":"followed","line":15},{"action":"T","x":365,"y":13,"text":"by","line":16},{"action":"T","x":387,"y":13,"text":"more","line":17},{"action":"T","x":427,"y":13,"text":"inline","line":18},{"action":"T","x":469,"y":13,"text":"text.","line":19},{"action":"Text","line":20,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":13,"y":81,"text":"Then","line":21},{"action":"T","x":54,"y":81,"text":"more","line":22},{"action":"T","x":95,"y":81,"text":"inline","line":23},{"action":"T","x":137,"y":81,"text":"text.","line":24},{"action":"Clip","line":25,"path":[[{"type":"Vector","x":13,"y":47},{"type":"Vector","x":787,"y":47},{"type":"Vector","x":787,"y":65},{"type":"Vector","x":13,"y":65}]]},{"action":"Fill","line":26,"color":"rgb(0,128,0)"},{"action":"Text","line":27,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":13,"y":47,"text":"Then","line":28},{"action":"T","x":54,"y":47,"text":"a","line":29},{"action":"T","x":67,"y":47,"text":"block","line":30},{"action":"T","x":109,"y":47,"text":"level","line":31},{"action":"T","x":147,"y":47,"text":"element.","line":32},{"action":"Text","line":33,"font":"rgb(0,0,255) normal normal 400 16px Arial"},{"action":"T","x":131,"y":13,"text":"followed","line":34},{"action":"T","x":195,"y":13,"text":"by","line":35},{"action":"T","x":216,"y":13,"text":"text","line":36},{"action":"T","x":246,"y":13,"text":"in","line":37},{"action":"T","x":263,"y":13,"text":"span","line":38},{"action":"Clip","line":39,"path":[[{"type":"Vector","x":8,"y":104},{"type":"Vector","x":792,"y":104},{"type":"Vector","x":792,"y":200},{"type":"Vector","x":8,"y":200}]]},{"action":"Fill","line":40,"color":"rgb(255,0,0)"},{"action":"Shape","line":41,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":8,"y":104},{"type":"Vector","x":792,"y":104},{"type":"Vector","x":787,"y":109},{"type":"Vector","x":13,"y":109}]},{"action":"Shape","line":42,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":792,"y":104},{"type":"Vector","x":792,"y":200},{"type":"Vector","x":787,"y":195},{"type":"Vector","x":787,"y":109}]},{"action":"Shape","line":43,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":792,"y":200},{"type":"Vector","x":8,"y":200},{"type":"Vector","x":13,"y":195},{"type":"Vector","x":787,"y":195}]},{"action":"Shape","line":44,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":8,"y":200},{"type":"Vector","x":8,"y":104},{"type":"Vector","x":13,"y":109},{"type":"Vector","x":13,"y":195}]},{"action":"Text","line":45,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":13,"y":109,"text":"Some","line":46},{"action":"T","x":59,"y":109,"text":"inline","line":47},{"action":"T","x":101,"y":109,"text":"text","line":48},{"action":"Text","line":49,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":302,"y":109,"text":"followed","line":50},{"action":"T","x":365,"y":109,"text":"by","line":51},{"action":"T","x":387,"y":109,"text":"more","line":52},{"action":"T","x":427,"y":109,"text":"inline","line":53},{"action":"T","x":469,"y":109,"text":"text.","line":54},{"action":"Text","line":55,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":13,"y":177,"text":"Then","line":56},{"action":"T","x":54,"y":177,"text":"more","line":57},{"action":"T","x":95,"y":177,"text":"inline","line":58},{"action":"T","x":137,"y":177,"text":"text.","line":59},{"action":"Clip","line":60,"path":[[{"type":"Vector","x":13,"y":143},{"type":"Vector","x":787,"y":143},{"type":"Vector","x":787,"y":161},{"type":"Vector","x":13,"y":161}]]},{"action":"Fill","line":61,"color":"rgb(0,128,0)"},{"action":"Text","line":62,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":13,"y":143,"text":"Then","line":63},{"action":"T","x":54,"y":143,"text":"a","line":64},{"action":"T","x":67,"y":143,"text":"block","line":65},{"action":"T","x":109,"y":143,"text":"level","line":66},{"action":"T","x":147,"y":143,"text":"element.","line":67},{"action":"Text","line":68,"font":"rgb(0,0,255) normal normal 400 16px Arial"},{"action":"T","x":131,"y":109,"text":"followed","line":69},{"action":"T","x":195,"y":109,"text":"by","line":70},{"action":"T","x":216,"y":109,"text":"text","line":71},{"action":"T","x":246,"y":109,"text":"in","line":72},{"action":"T","x":263,"y":109,"text":"span","line":73},{"action":"Clip","line":74,"path":[[{"type":"Vector","x":8,"y":200},{"type":"Vector","x":504,"y":200},{"type":"Vector","x":504,"y":296},{"type":"Vector","x":8,"y":296}]]},{"action":"Fill","line":75,"color":"rgb(255,0,0)"},{"action":"Shape","line":76,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":8,"y":200},{"type":"Vector","x":504,"y":200},{"type":"Vector","x":499,"y":205},{"type":"Vector","x":13,"y":205}]},{"action":"Shape","line":77,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":504,"y":200},{"type":"Vector","x":504,"y":296},{"type":"Vector","x":499,"y":291},{"type":"Vector","x":499,"y":205}]},{"action":"Shape","line":78,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":504,"y":296},{"type":"Vector","x":8,"y":296},{"type":"Vector","x":13,"y":291},{"type":"Vector","x":499,"y":291}]},{"action":"Shape","line":79,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":8,"y":296},{"type":"Vector","x":8,"y":200},{"type":"Vector","x":13,"y":205},{"type":"Vector","x":13,"y":291}]},{"action":"Text","line":80,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":13,"y":205,"text":"Some","line":81},{"action":"T","x":59,"y":205,"text":"inline","line":82},{"action":"T","x":101,"y":205,"text":"text","line":83},{"action":"Text","line":84,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":302,"y":205,"text":"followed","line":85},{"action":"T","x":365,"y":205,"text":"by","line":86},{"action":"T","x":387,"y":205,"text":"more","line":87},{"action":"T","x":427,"y":205,"text":"inline","line":88},{"action":"T","x":469,"y":205,"text":"text.","line":89},{"action":"Text","line":90,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":13,"y":273,"text":"Then","line":91},{"action":"T","x":54,"y":273,"text":"more","line":92},{"action":"T","x":95,"y":273,"text":"inline","line":93},{"action":"T","x":137,"y":273,"text":"text.","line":94},{"action":"Clip","line":95,"path":[[{"type":"Vector","x":13,"y":239},{"type":"Vector","x":499,"y":239},{"type":"Vector","x":499,"y":257},{"type":"Vector","x":13,"y":257}]]},{"action":"Fill","line":96,"color":"rgb(0,128,0)"},{"action":"Text","line":97,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":13,"y":239,"text":"Then","line":98},{"action":"T","x":54,"y":239,"text":"a","line":99},{"action":"T","x":67,"y":239,"text":"block","line":100},{"action":"T","x":109,"y":239,"text":"level","line":101},{"action":"T","x":147,"y":239,"text":"element.","line":102},{"action":"Text","line":103,"font":"rgb(0,0,255) normal normal 400 16px Arial"},{"action":"T","x":131,"y":205,"text":"followed","line":104},{"action":"T","x":195,"y":205,"text":"by","line":105},{"action":"T","x":216,"y":205,"text":"text","line":106},{"action":"T","x":246,"y":205,"text":"in","line":107},{"action":"T","x":263,"y":205,"text":"span","line":108},{"action":"Clip","line":109,"path":[[{"type":"Vector","x":500,"y":250},{"type":"Vector","x":800,"y":250},{"type":"Vector","x":800,"y":364},{"type":"Vector","x":500,"y":364}]]},{"action":"Fill","line":110,"color":"rgb(255,0,0)"},{"action":"Shape","line":111,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":500,"y":250},{"type":"Vector","x":800,"y":250},{"type":"Vector","x":795,"y":255},{"type":"Vector","x":505,"y":255}]},{"action":"Shape","line":112,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":800,"y":250},{"type":"Vector","x":800,"y":364},{"type":"Vector","x":795,"y":359},{"type":"Vector","x":795,"y":255}]},{"action":"Shape","line":113,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":800,"y":364},{"type":"Vector","x":500,"y":364},{"type":"Vector","x":505,"y":359},{"type":"Vector","x":795,"y":359}]},{"action":"Shape","line":114,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":500,"y":364},{"type":"Vector","x":500,"y":250},{"type":"Vector","x":505,"y":255},{"type":"Vector","x":505,"y":359}]},{"action":"Text","line":115,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":505,"y":255,"text":"Some","line":116},{"action":"T","x":551,"y":255,"text":"inline","line":117},{"action":"T","x":593,"y":255,"text":"text","line":118},{"action":"Text","line":119,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":505,"y":273,"text":"followed","line":120},{"action":"T","x":568,"y":273,"text":"by","line":121},{"action":"T","x":589,"y":273,"text":"more","line":122},{"action":"T","x":630,"y":273,"text":"inline","line":123},{"action":"T","x":672,"y":273,"text":"text.","line":124},{"action":"Text","line":125,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":505,"y":341,"text":"Then","line":126},{"action":"T","x":546,"y":341,"text":"more","line":127},{"action":"T","x":587,"y":341,"text":"inline","line":128},{"action":"T","x":629,"y":341,"text":"text.","line":129},{"action":"Clip","line":130,"path":[[{"type":"Vector","x":505,"y":307},{"type":"Vector","x":795,"y":307},{"type":"Vector","x":795,"y":325},{"type":"Vector","x":505,"y":325}]]},{"action":"Fill","line":131,"color":"rgb(0,128,0)"},{"action":"Text","line":132,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":505,"y":307,"text":"Then","line":133},{"action":"T","x":546,"y":307,"text":"a","line":134},{"action":"T","x":559,"y":307,"text":"block","line":135},{"action":"T","x":601,"y":307,"text":"level","line":136},{"action":"T","x":639,"y":307,"text":"element.","line":137},{"action":"Text","line":138,"font":"rgb(0,0,255) normal normal 400 16px Arial"},{"action":"T","x":623,"y":255,"text":"followed","line":139},{"action":"T","x":687,"y":255,"text":"by","line":140},{"action":"T","x":708,"y":255,"text":"text","line":141},{"action":"T","x":738,"y":255,"text":"in","line":142},{"action":"T","x":755,"y":255,"text":"span","line":143},{"action":"Clip","line":144,"path":[[{"type":"Vector","x":8,"y":500},{"type":"Vector","x":504,"y":500},{"type":"Vector","x":504,"y":596},{"type":"Vector","x":8,"y":596}]]},{"action":"Fill","line":145,"color":"rgb(255,0,0)"},{"action":"Shape","line":146,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":8,"y":500},{"type":"Vector","x":504,"y":500},{"type":"Vector","x":499,"y":505},{"type":"Vector","x":13,"y":505}]},{"action":"Shape","line":147,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":504,"y":500},{"type":"Vector","x":504,"y":596},{"type":"Vector","x":499,"y":591},{"type":"Vector","x":499,"y":505}]},{"action":"Shape","line":148,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":504,"y":596},{"type":"Vector","x":8,"y":596},{"type":"Vector","x":13,"y":591},{"type":"Vector","x":499,"y":591}]},{"action":"Shape","line":149,"color":"rgb(0,0,255)","path":[{"type":"Vector","x":8,"y":596},{"type":"Vector","x":8,"y":500},{"type":"Vector","x":13,"y":505},{"type":"Vector","x":13,"y":591}]},{"action":"Text","line":150,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":13,"y":505,"text":"Some","line":151},{"action":"T","x":59,"y":505,"text":"inline","line":152},{"action":"T","x":101,"y":505,"text":"text","line":153},{"action":"Text","line":154,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":302,"y":505,"text":"followed","line":155},{"action":"T","x":365,"y":505,"text":"by","line":156},{"action":"T","x":387,"y":505,"text":"more","line":157},{"action":"T","x":427,"y":505,"text":"inline","line":158},{"action":"T","x":469,"y":505,"text":"text.","line":159},{"action":"Text","line":160,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":13,"y":573,"text":"Then","line":161},{"action":"T","x":54,"y":573,"text":"more","line":162},{"action":"T","x":95,"y":573,"text":"inline","line":163},{"action":"T","x":137,"y":573,"text":"text.","line":164},{"action":"Clip","line":165,"path":[[{"type":"Vector","x":13,"y":539},{"type":"Vector","x":499,"y":539},{"type":"Vector","x":499,"y":557},{"type":"Vector","x":13,"y":557}]]},{"action":"Fill","line":166,"color":"rgb(0,128,0)"},{"action":"Text","line":167,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":13,"y":539,"text":"Then","line":168},{"action":"T","x":54,"y":539,"text":"a","line":169},{"action":"T","x":67,"y":539,"text":"block","line":170},{"action":"T","x":109,"y":539,"text":"level","line":171},{"action":"T","x":147,"y":539,"text":"element.","line":172},{"action":"Text","line":173,"font":"rgb(0,0,255) normal normal 400 16px Arial"},{"action":"T","x":131,"y":505,"text":"followed","line":174},{"action":"T","x":195,"y":505,"text":"by","line":175},{"action":"T","x":216,"y":505,"text":"text","line":176},{"action":"T","x":246,"y":505,"text":"in","line":177},{"action":"T","x":263,"y":505,"text":"span","line":178}],"/tests/reftests/crossorigin-iframe.html":[{"action":"Window","line":1,"width":812,"height":824},{"action":"Rectangle","line":2,"x":0,"y":0,"width":812,"height":824,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Shape","line":4,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":812,"y":8},{"type":"Vector","x":810,"y":10},{"type":"Vector","x":10,"y":10}]},{"action":"Shape","line":5,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":812,"y":8},{"type":"Vector","x":812,"y":812},{"type":"Vector","x":810,"y":810},{"type":"Vector","x":810,"y":10}]},{"action":"Shape","line":6,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":812,"y":812},{"type":"Vector","x":8,"y":812},{"type":"Vector","x":10,"y":810},{"type":"Vector","x":810,"y":810}]},{"action":"Shape","line":7,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":812},{"type":"Vector","x":8,"y":8},{"type":"Vector","x":10,"y":10},{"type":"Vector","x":10,"y":810}]}],"/tests/reftests/forms.html":[{"action":"Window","line":1,"width":800,"height":739},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":739,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":21},{"type":"Vector","x":166,"y":21},{"type":"Vector","x":166,"y":49},{"type":"Vector","x":8,"y":49}]]},{"action":"Fill","line":5,"color":"rgb(255,255,255)"},{"action":"Shape","line":6,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":21},{"type":"Vector","x":166,"y":21},{"type":"Vector","x":164,"y":23},{"type":"Vector","x":10,"y":23}]},{"action":"Shape","line":7,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":166,"y":21},{"type":"Vector","x":166,"y":49},{"type":"Vector","x":164,"y":47},{"type":"Vector","x":164,"y":23}]},{"action":"Shape","line":8,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":166,"y":49},{"type":"Vector","x":8,"y":49},{"type":"Vector","x":10,"y":47},{"type":"Vector","x":164,"y":47}]},{"action":"Shape","line":9,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":49},{"type":"Vector","x":8,"y":21},{"type":"Vector","x":10,"y":23},{"type":"Vector","x":10,"y":47}]},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":12,"y":25,"text":"textbox","line":11},{"action":"Clip","line":12,"path":[[{"type":"Vector","x":170,"y":21},{"type":"Vector","x":328,"y":21},{"type":"Vector","x":328,"y":49},{"type":"Vector","x":170,"y":49}]]},{"action":"Fill","line":13,"color":"rgb(255,255,255)"},{"action":"Shape","line":14,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":170,"y":21},{"type":"Vector","x":328,"y":21},{"type":"Vector","x":326,"y":23},{"type":"Vector","x":172,"y":23}]},{"action":"Shape","line":15,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":328,"y":21},{"type":"Vector","x":328,"y":49},{"type":"Vector","x":326,"y":47},{"type":"Vector","x":326,"y":23}]},{"action":"Shape","line":16,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":328,"y":49},{"type":"Vector","x":170,"y":49},{"type":"Vector","x":172,"y":47},{"type":"Vector","x":326,"y":47}]},{"action":"Shape","line":17,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":170,"y":49},{"type":"Vector","x":170,"y":21},{"type":"Vector","x":172,"y":23},{"type":"Vector","x":172,"y":47}]},{"action":"Text","line":18,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":174,"y":25,"text":"•","line":19},{"action":"T","x":179,"y":25,"text":"•","line":20},{"action":"T","x":183,"y":25,"text":"•","line":21},{"action":"T","x":188,"y":25,"text":"•","line":22},{"action":"T","x":193,"y":25,"text":"•","line":23},{"action":"T","x":197,"y":25,"text":"•","line":24},{"action":"T","x":202,"y":25,"text":"•","line":25},{"action":"Clip","line":26,"path":[[{"type":"Vector","x":332,"y":18},{"type":"Vector","x":496,"y":18},{"type":"Vector","x":496,"y":52},{"type":"Vector","x":332,"y":52}]]},{"action":"Fill","line":27,"color":"rgb(255,255,255)"},{"action":"Shape","line":28,"color":"rgb(0,0,128)","path":[{"type":"Vector","x":332,"y":18},{"type":"Vector","x":496,"y":18},{"type":"Vector","x":491,"y":23},{"type":"Vector","x":337,"y":23}]},{"action":"Shape","line":29,"color":"rgb(0,0,128)","path":[{"type":"Vector","x":496,"y":18},{"type":"Vector","x":496,"y":52},{"type":"Vector","x":491,"y":47},{"type":"Vector","x":491,"y":23}]},{"action":"Shape","line":30,"color":"rgb(0,0,128)","path":[{"type":"Vector","x":496,"y":52},{"type":"Vector","x":332,"y":52},{"type":"Vector","x":337,"y":47},{"type":"Vector","x":491,"y":47}]},{"action":"Shape","line":31,"color":"rgb(0,0,128)","path":[{"type":"Vector","x":332,"y":52},{"type":"Vector","x":332,"y":18},{"type":"Vector","x":337,"y":23},{"type":"Vector","x":337,"y":47}]},{"action":"Text","line":32,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":339,"y":25,"text":"textbox","line":33},{"action":"Clip","line":34,"path":[[{"type":"Vector","x":500,"y":8},{"type":"Vector","x":664,"y":8},{"type":"Vector","x":664,"y":62},{"type":"Vector","x":500,"y":62}]]},{"action":"Fill","line":35,"color":"rgb(255,255,255)"},{"action":"Shape","line":36,"color":"rgb(0,0,128)","path":[{"type":"Vector","x":500,"y":8},{"type":"Vector","x":664,"y":8},{"type":"Vector","x":659,"y":13},{"type":"Vector","x":505,"y":13}]},{"action":"Shape","line":37,"color":"rgb(0,0,128)","path":[{"type":"Vector","x":664,"y":8},{"type":"Vector","x":664,"y":62},{"type":"Vector","x":659,"y":57},{"type":"Vector","x":659,"y":13}]},{"action":"Shape","line":38,"color":"rgb(0,0,128)","path":[{"type":"Vector","x":664,"y":62},{"type":"Vector","x":500,"y":62},{"type":"Vector","x":505,"y":57},{"type":"Vector","x":659,"y":57}]},{"action":"Shape","line":39,"color":"rgb(0,0,128)","path":[{"type":"Vector","x":500,"y":62},{"type":"Vector","x":500,"y":8},{"type":"Vector","x":505,"y":13},{"type":"Vector","x":505,"y":57}]},{"action":"Text","line":40,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":507,"y":15,"text":"textbox","line":41},{"action":"Clip","line":42,"path":[[{"type":"Vector","x":8,"y":62},{"type":"Vector","x":188,"y":62},{"type":"Vector","x":188,"y":132},{"type":"Vector","x":8,"y":132}]]},{"action":"Fill","line":43,"color":"rgb(255,255,255)"},{"action":"Shape","line":44,"color":"rgb(0,0,128)","path":[{"type":"Vector","x":8,"y":62},{"type":"Vector","x":188,"y":62},{"type":"Vector","x":183,"y":67},{"type":"Vector","x":13,"y":67}]},{"action":"Shape","line":45,"color":"rgb(0,0,128)","path":[{"type":"Vector","x":188,"y":62},{"type":"Vector","x":188,"y":132},{"type":"Vector","x":183,"y":127},{"type":"Vector","x":183,"y":67}]},{"action":"Shape","line":46,"color":"rgb(0,0,128)","path":[{"type":"Vector","x":188,"y":132},{"type":"Vector","x":8,"y":132},{"type":"Vector","x":13,"y":127},{"type":"Vector","x":183,"y":127}]},{"action":"Shape","line":47,"color":"rgb(0,0,128)","path":[{"type":"Vector","x":8,"y":132},{"type":"Vector","x":8,"y":62},{"type":"Vector","x":13,"y":67},{"type":"Vector","x":13,"y":127}]},{"action":"Text","line":48,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":23,"y":77,"text":"textbox","line":49},{"action":"Clip","line":50,"path":[[{"type":"Vector","x":192,"y":75},{"type":"Vector","x":366,"y":75},{"type":"Vector","x":366,"y":119},{"type":"Vector","x":192,"y":119}]]},{"action":"Fill","line":51,"color":"rgb(255,255,255)"},{"action":"Shape","line":52,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":192,"y":75},{"type":"Vector","x":366,"y":75},{"type":"Vector","x":364,"y":77},{"type":"Vector","x":194,"y":77}]},{"action":"Shape","line":53,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":366,"y":75},{"type":"Vector","x":366,"y":119},{"type":"Vector","x":364,"y":117},{"type":"Vector","x":364,"y":77}]},{"action":"Shape","line":54,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":366,"y":119},{"type":"Vector","x":192,"y":119},{"type":"Vector","x":194,"y":117},{"type":"Vector","x":364,"y":117}]},{"action":"Shape","line":55,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":192,"y":119},{"type":"Vector","x":192,"y":75},{"type":"Vector","x":194,"y":77},{"type":"Vector","x":194,"y":117}]},{"action":"Text","line":56,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":204,"y":87,"text":"textbox","line":57},{"action":"Clip","line":58,"path":[[{"type":"Vector","x":370,"y":75},{"type":"Vector","x":544,"y":75},{"type":"Vector","x":544,"y":119},{"type":"Vector","x":370,"y":119}]]},{"action":"Fill","line":59,"color":"rgb(255,255,255)"},{"action":"Shape","line":60,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":370,"y":75},{"type":"Vector","x":544,"y":75},{"type":"Vector","x":542,"y":77},{"type":"Vector","x":372,"y":77}]},{"action":"Shape","line":61,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":544,"y":75},{"type":"Vector","x":544,"y":119},{"type":"Vector","x":542,"y":117},{"type":"Vector","x":542,"y":77}]},{"action":"Shape","line":62,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":544,"y":119},{"type":"Vector","x":370,"y":119},{"type":"Vector","x":372,"y":117},{"type":"Vector","x":542,"y":117}]},{"action":"Shape","line":63,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":370,"y":119},{"type":"Vector","x":370,"y":75},{"type":"Vector","x":372,"y":77},{"type":"Vector","x":372,"y":117}]},{"action":"Text","line":64,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":489,"y":87,"text":"textbox","line":65},{"action":"Clip","line":66,"path":[[{"type":"Vector","x":548,"y":84},{"type":"Vector","x":698,"y":84},{"type":"Vector","x":698,"y":104},{"type":"Vector","x":548,"y":104}]]},{"action":"Fill","line":67,"color":"rgb(255,255,255)"},{"action":"Shape","line":68,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":548,"y":84},{"type":"Vector","x":698,"y":84},{"type":"Vector","x":696,"y":86},{"type":"Vector","x":550,"y":86}]},{"action":"Shape","line":69,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":698,"y":84},{"type":"Vector","x":698,"y":104},{"type":"Vector","x":696,"y":102},{"type":"Vector","x":696,"y":86}]},{"action":"Shape","line":70,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":698,"y":104},{"type":"Vector","x":548,"y":104},{"type":"Vector","x":550,"y":102},{"type":"Vector","x":696,"y":102}]},{"action":"Shape","line":71,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":548,"y":104},{"type":"Vector","x":548,"y":84},{"type":"Vector","x":550,"y":86},{"type":"Vector","x":550,"y":102}]},{"action":"Text","line":72,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":552,"y":88,"text":"Value","line":73},{"action":"T","x":589,"y":88,"text":"1","line":74},{"action":"Clip","line":75,"path":[[{"type":"Vector","x":8,"y":132},{"type":"Vector","x":158,"y":132},{"type":"Vector","x":158,"y":152},{"type":"Vector","x":8,"y":152}]]},{"action":"Fill","line":76,"color":"rgb(255,255,255)"},{"action":"Shape","line":77,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":8,"y":132},{"type":"Vector","x":158,"y":132},{"type":"Vector","x":156,"y":134},{"type":"Vector","x":10,"y":134}]},{"action":"Shape","line":78,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":158,"y":132},{"type":"Vector","x":158,"y":152},{"type":"Vector","x":156,"y":150},{"type":"Vector","x":156,"y":134}]},{"action":"Shape","line":79,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":158,"y":152},{"type":"Vector","x":8,"y":152},{"type":"Vector","x":10,"y":150},{"type":"Vector","x":156,"y":150}]},{"action":"Shape","line":80,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":8,"y":152},{"type":"Vector","x":8,"y":132},{"type":"Vector","x":10,"y":134},{"type":"Vector","x":10,"y":150}]},{"action":"Clip","line":81,"path":[[{"type":"Vector","x":162,"y":132},{"type":"Vector","x":312,"y":132},{"type":"Vector","x":312,"y":152},{"type":"Vector","x":162,"y":152}]]},{"action":"Fill","line":82,"color":"rgb(255,255,255)"},{"action":"Shape","line":83,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":162,"y":132},{"type":"Vector","x":312,"y":132},{"type":"Vector","x":310,"y":134},{"type":"Vector","x":164,"y":134}]},{"action":"Shape","line":84,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":312,"y":132},{"type":"Vector","x":312,"y":152},{"type":"Vector","x":310,"y":150},{"type":"Vector","x":310,"y":134}]},{"action":"Shape","line":85,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":312,"y":152},{"type":"Vector","x":162,"y":152},{"type":"Vector","x":164,"y":150},{"type":"Vector","x":310,"y":150}]},{"action":"Shape","line":86,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":162,"y":152},{"type":"Vector","x":162,"y":132},{"type":"Vector","x":164,"y":134},{"type":"Vector","x":164,"y":150}]},{"action":"Text","line":87,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":166,"y":136,"text":"2","line":88},{"action":"Clip","line":89,"path":[[{"type":"Vector","x":316,"y":132},{"type":"Vector","x":466,"y":132},{"type":"Vector","x":466,"y":152},{"type":"Vector","x":316,"y":152}]]},{"action":"Fill","line":90,"color":"rgb(255,255,255)"},{"action":"Shape","line":91,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":316,"y":132},{"type":"Vector","x":466,"y":132},{"type":"Vector","x":464,"y":134},{"type":"Vector","x":318,"y":134}]},{"action":"Shape","line":92,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":466,"y":132},{"type":"Vector","x":466,"y":152},{"type":"Vector","x":464,"y":150},{"type":"Vector","x":464,"y":134}]},{"action":"Shape","line":93,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":466,"y":152},{"type":"Vector","x":316,"y":152},{"type":"Vector","x":318,"y":150},{"type":"Vector","x":464,"y":150}]},{"action":"Shape","line":94,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":316,"y":152},{"type":"Vector","x":316,"y":132},{"type":"Vector","x":318,"y":134},{"type":"Vector","x":318,"y":150}]},{"action":"Text","line":95,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":320,"y":136,"text":"Value","line":96},{"action":"T","x":357,"y":136,"text":"2","line":97},{"action":"T","x":368,"y":136,"text":"with","line":98},{"action":"T","x":395,"y":136,"text":"something","line":99},{"action":"T","x":460,"y":136,"text":"else","line":100},{"action":"Clip","line":101,"path":[[{"type":"Vector","x":470,"y":134},{"type":"Vector","x":527,"y":134},{"type":"Vector","x":527,"y":155},{"type":"Vector","x":470,"y":155}]]},{"action":"Fill","line":102,"color":"rgb(221,221,221)"},{"action":"Shape","line":103,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":470,"y":134},{"type":"Vector","x":527,"y":134},{"type":"Vector","x":525,"y":136},{"type":"Vector","x":472,"y":136}]},{"action":"Shape","line":104,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":527,"y":134},{"type":"Vector","x":527,"y":155},{"type":"Vector","x":525,"y":153},{"type":"Vector","x":525,"y":136}]},{"action":"Shape","line":105,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":527,"y":155},{"type":"Vector","x":470,"y":155},{"type":"Vector","x":472,"y":153},{"type":"Vector","x":525,"y":153}]},{"action":"Shape","line":106,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":470,"y":155},{"type":"Vector","x":470,"y":134},{"type":"Vector","x":472,"y":136},{"type":"Vector","x":472,"y":153}]},{"action":"Text","line":107,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":478,"y":137,"text":"Submit","line":108},{"action":"Clip","line":109,"path":[[{"type":"Vector","x":531,"y":134},{"type":"Vector","x":586,"y":134},{"type":"Vector","x":586,"y":155},{"type":"Vector","x":531,"y":155}]]},{"action":"Fill","line":110,"color":"rgb(221,221,221)"},{"action":"Shape","line":111,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":531,"y":134},{"type":"Vector","x":586,"y":134},{"type":"Vector","x":584,"y":136},{"type":"Vector","x":533,"y":136}]},{"action":"Shape","line":112,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":586,"y":134},{"type":"Vector","x":586,"y":155},{"type":"Vector","x":584,"y":153},{"type":"Vector","x":584,"y":136}]},{"action":"Shape","line":113,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":586,"y":155},{"type":"Vector","x":531,"y":155},{"type":"Vector","x":533,"y":153},{"type":"Vector","x":584,"y":153}]},{"action":"Shape","line":114,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":531,"y":155},{"type":"Vector","x":531,"y":134},{"type":"Vector","x":533,"y":136},{"type":"Vector","x":533,"y":153}]},{"action":"Text","line":115,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":539,"y":137,"text":"Button","line":116},{"action":"Clip","line":117,"path":[[{"type":"Vector","x":590,"y":134},{"type":"Vector","x":641,"y":134},{"type":"Vector","x":641,"y":155},{"type":"Vector","x":590,"y":155}]]},{"action":"Fill","line":118,"color":"rgb(221,221,221)"},{"action":"Shape","line":119,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":590,"y":134},{"type":"Vector","x":641,"y":134},{"type":"Vector","x":639,"y":136},{"type":"Vector","x":592,"y":136}]},{"action":"Shape","line":120,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":641,"y":134},{"type":"Vector","x":641,"y":155},{"type":"Vector","x":639,"y":153},{"type":"Vector","x":639,"y":136}]},{"action":"Shape","line":121,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":641,"y":155},{"type":"Vector","x":590,"y":155},{"type":"Vector","x":592,"y":153},{"type":"Vector","x":639,"y":153}]},{"action":"Shape","line":122,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":590,"y":155},{"type":"Vector","x":590,"y":134},{"type":"Vector","x":592,"y":136},{"type":"Vector","x":592,"y":153}]},{"action":"Text","line":123,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":598,"y":137,"text":"Reset","line":124},{"action":"Clip","line":125,"path":[[{"type":"Vector","x":8,"y":170},{"type":"Vector","x":208,"y":170},{"type":"Vector","x":208,"y":191},{"type":"Vector","x":8,"y":191}]]},{"action":"Fill","line":126,"color":"rgb(221,221,221)"},{"action":"Shape","line":127,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":8,"y":170},{"type":"Vector","x":208,"y":170},{"type":"Vector","x":206,"y":172},{"type":"Vector","x":10,"y":172}]},{"action":"Shape","line":128,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":208,"y":170},{"type":"Vector","x":208,"y":191},{"type":"Vector","x":206,"y":189},{"type":"Vector","x":206,"y":172}]},{"action":"Shape","line":129,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":208,"y":191},{"type":"Vector","x":8,"y":191},{"type":"Vector","x":10,"y":189},{"type":"Vector","x":206,"y":189}]},{"action":"Shape","line":130,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":8,"y":191},{"type":"Vector","x":8,"y":170},{"type":"Vector","x":10,"y":172},{"type":"Vector","x":10,"y":189}]},{"action":"Text","line":131,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":87,"y":173,"text":"Submit","line":132},{"action":"Clip","line":133,"path":[[{"type":"Vector","x":212,"y":155},{"type":"Vector","x":412,"y":155},{"type":"Vector","x":412,"y":205},{"type":"Vector","x":212,"y":205}]]},{"action":"Fill","line":134,"color":"rgb(221,221,221)"},{"action":"Shape","line":135,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":212,"y":155},{"type":"Vector","x":412,"y":155},{"type":"Vector","x":410,"y":157},{"type":"Vector","x":214,"y":157}]},{"action":"Shape","line":136,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":412,"y":155},{"type":"Vector","x":412,"y":205},{"type":"Vector","x":410,"y":203},{"type":"Vector","x":410,"y":157}]},{"action":"Shape","line":137,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":412,"y":205},{"type":"Vector","x":212,"y":205},{"type":"Vector","x":214,"y":203},{"type":"Vector","x":410,"y":203}]},{"action":"Shape","line":138,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":212,"y":205},{"type":"Vector","x":212,"y":155},{"type":"Vector","x":214,"y":157},{"type":"Vector","x":214,"y":203}]},{"action":"Text","line":139,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":293,"y":158,"text":"Button","line":140},{"action":"Clip","line":141,"path":[[{"type":"Vector","x":416,"y":155},{"type":"Vector","x":616,"y":155},{"type":"Vector","x":616,"y":205},{"type":"Vector","x":416,"y":205}]]},{"action":"Fill","line":142,"color":"rgb(221,221,221)"},{"action":"Shape","line":143,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":416,"y":155},{"type":"Vector","x":616,"y":155},{"type":"Vector","x":614,"y":157},{"type":"Vector","x":418,"y":157}]},{"action":"Shape","line":144,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":616,"y":155},{"type":"Vector","x":616,"y":205},{"type":"Vector","x":614,"y":203},{"type":"Vector","x":614,"y":157}]},{"action":"Shape","line":145,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":616,"y":205},{"type":"Vector","x":416,"y":205},{"type":"Vector","x":418,"y":203},{"type":"Vector","x":614,"y":203}]},{"action":"Shape","line":146,"color":"rgb(221,221,221)","path":[{"type":"Vector","x":416,"y":205},{"type":"Vector","x":416,"y":155},{"type":"Vector","x":418,"y":157},{"type":"Vector","x":418,"y":203}]},{"action":"Text","line":147,"font":"rgb(0,0,0) normal normal 400 13.3333px Arial"},{"action":"T","x":424,"y":158,"text":"Reset","line":148},{"action":"Clip","line":149,"path":[[{"type":"Vector","x":620,"y":156},{"type":"Vector","x":778,"y":156},{"type":"Vector","x":778,"y":184},{"type":"Vector","x":620,"y":184}]]},{"action":"Fill","line":150,"color":"rgb(255,255,255)"},{"action":"Shape","line":151,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":620,"y":156},{"type":"Vector","x":778,"y":156},{"type":"Vector","x":776,"y":158},{"type":"Vector","x":622,"y":158}]},{"action":"Shape","line":152,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":778,"y":156},{"type":"Vector","x":778,"y":184},{"type":"Vector","x":776,"y":182},{"type":"Vector","x":776,"y":158}]},{"action":"Shape","line":153,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":778,"y":184},{"type":"Vector","x":620,"y":184},{"type":"Vector","x":622,"y":182},{"type":"Vector","x":776,"y":182}]},{"action":"Shape","line":154,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":620,"y":184},{"type":"Vector","x":620,"y":156},{"type":"Vector","x":622,"y":158},{"type":"Vector","x":622,"y":182}]},{"action":"Text","line":155,"font":"rgb(0,0,0) normal normal 400 13.3333px monospace"},{"action":"Clip","line":156,"path":[[{"type":"Vector","x":8,"y":205},{"type":"Vector","x":182,"y":205},{"type":"Vector","x":182,"y":249},{"type":"Vector","x":8,"y":249}]]},{"action":"Fill","line":157,"color":"rgb(255,255,255)"},{"action":"Shape","line":158,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":8,"y":205},{"type":"Vector","x":182,"y":205},{"type":"Vector","x":172,"y":215},{"type":"Vector","x":18,"y":215}]},{"action":"Shape","line":159,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":182,"y":205},{"type":"Vector","x":182,"y":249},{"type":"Vector","x":172,"y":239},{"type":"Vector","x":172,"y":215}]},{"action":"Shape","line":160,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":182,"y":249},{"type":"Vector","x":8,"y":249},{"type":"Vector","x":18,"y":239},{"type":"Vector","x":172,"y":239}]},{"action":"Shape","line":161,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":8,"y":249},{"type":"Vector","x":8,"y":205},{"type":"Vector","x":18,"y":215},{"type":"Vector","x":18,"y":239}]},{"action":"Clip","line":162,"path":[[{"type":"Vector","x":186,"y":221},{"type":"Vector","x":344,"y":221},{"type":"Vector","x":344,"y":249},{"type":"Vector","x":186,"y":249}]]},{"action":"Fill","line":163,"color":"rgb(255,255,255)"},{"action":"Shape","line":164,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":186,"y":221},{"type":"Vector","x":344,"y":221},{"type":"Vector","x":342,"y":223},{"type":"Vector","x":188,"y":223}]},{"action":"Shape","line":165,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":344,"y":221},{"type":"Vector","x":344,"y":249},{"type":"Vector","x":342,"y":247},{"type":"Vector","x":342,"y":223}]},{"action":"Shape","line":166,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":344,"y":249},{"type":"Vector","x":186,"y":249},{"type":"Vector","x":188,"y":247},{"type":"Vector","x":342,"y":247}]},{"action":"Shape","line":167,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":186,"y":249},{"type":"Vector","x":186,"y":221},{"type":"Vector","x":188,"y":223},{"type":"Vector","x":188,"y":247}]},{"action":"Text","line":168,"font":"rgb(0,0,0) normal normal 400 13.3333px monospace"},{"action":"T","x":197,"y":225,"text":"text","line":169},{"action":"Clip","line":170,"path":[[{"type":"Vector","x":348,"y":205},{"type":"Vector","x":522,"y":205},{"type":"Vector","x":522,"y":249},{"type":"Vector","x":348,"y":249}]]},{"action":"Fill","line":171,"color":"rgb(255,255,255)"},{"action":"Shape","line":172,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":348,"y":205},{"type":"Vector","x":522,"y":205},{"type":"Vector","x":512,"y":215},{"type":"Vector","x":358,"y":215}]},{"action":"Shape","line":173,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":522,"y":205},{"type":"Vector","x":522,"y":249},{"type":"Vector","x":512,"y":239},{"type":"Vector","x":512,"y":215}]},{"action":"Shape","line":174,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":522,"y":249},{"type":"Vector","x":348,"y":249},{"type":"Vector","x":358,"y":239},{"type":"Vector","x":512,"y":239}]},{"action":"Shape","line":175,"color":"rgb(169,169,169)","path":[{"type":"Vector","x":348,"y":249},{"type":"Vector","x":348,"y":205},{"type":"Vector","x":358,"y":215},{"type":"Vector","x":358,"y":239}]},{"action":"Text","line":176,"font":"rgb(0,0,0) normal normal 400 13.3333px monospace"},{"action":"T","x":360,"y":217,"text":"text","line":177},{"action":"Clip","line":178,"path":[[{"type":"BezierCurve","x0":537,"y0":239,"x1":542,"y1":234,"cx0":537,"cy0":236,"cx1":539,"cy1":234},{"type":"BezierCurve","x0":542,"y0":234,"x1":548,"y1":239,"cx0":545,"cy0":234,"cx1":548,"cy1":236},{"type":"BezierCurve","x0":548,"y0":239,"x1":542,"y1":245,"cx0":548,"cy0":242,"cx1":545,"cy1":245},{"type":"BezierCurve","x0":542,"y0":245,"x1":537,"y1":239,"cx0":539,"cy0":245,"cx1":537,"cy1":242}]]},{"action":"Fill","line":179,"color":"rgb(222,222,222)"},{"action":"Shape","line":180,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":538,"y0":235,"x1":542,"y1":233,"cx0":539,"cy0":234,"cx1":541,"cy1":233},{"type":"BezierCurve","x0":542,"y0":233,"x1":547,"y1":235,"cx0":544,"cy0":233,"cx1":546,"cy1":234},{"type":"BezierCurve","x0":546,"y0":235,"x1":542,"y1":234,"cx0":545,"cy0":234,"cx1":544,"cy1":234},{"type":"BezierCurve","x0":542,"y0":234,"x1":539,"y1":235,"cx0":541,"cy0":234,"cx1":540,"cy1":234}]},{"action":"Shape","line":181,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":547,"y0":235,"x1":549,"y1":239,"cx0":548,"cy0":236,"cx1":549,"cy1":237},{"type":"BezierCurve","x0":549,"y0":239,"x1":547,"y1":244,"cx0":549,"cy0":241,"cx1":548,"cy1":243},{"type":"BezierCurve","x0":546,"y0":243,"x1":548,"y1":239,"cx0":547,"cy0":242,"cx1":548,"cy1":241},{"type":"BezierCurve","x0":548,"y0":239,"x1":546,"y1":235,"cx0":548,"cy0":238,"cx1":547,"cy1":236}]},{"action":"Shape","line":182,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":547,"y0":244,"x1":542,"y1":246,"cx0":546,"cy0":245,"cx1":544,"cy1":246},{"type":"BezierCurve","x0":542,"y0":246,"x1":538,"y1":244,"cx0":541,"cy0":246,"cx1":539,"cy1":245},{"type":"BezierCurve","x0":539,"y0":243,"x1":542,"y1":245,"cx0":540,"cy0":244,"cx1":541,"cy1":245},{"type":"BezierCurve","x0":542,"y0":245,"x1":546,"y1":243,"cx0":544,"cy0":245,"cx1":545,"cy1":244}]},{"action":"Shape","line":183,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":538,"y0":244,"x1":536,"y1":239,"cx0":537,"cy0":243,"cx1":536,"cy1":241},{"type":"BezierCurve","x0":536,"y0":239,"x1":538,"y1":235,"cx0":536,"cy0":237,"cx1":537,"cy1":236},{"type":"BezierCurve","x0":539,"y0":235,"x1":537,"y1":239,"cx0":538,"cy0":236,"cx1":537,"cy1":238},{"type":"BezierCurve","x0":537,"y0":239,"x1":539,"y1":243,"cx0":537,"cy0":241,"cx1":538,"cy1":242}]},{"action":"Clip","line":184,"path":[[{"type":"BezierCurve","x0":611,"y0":239,"x1":616,"y1":234,"cx0":611,"cy0":236,"cx1":613,"cy1":234},{"type":"BezierCurve","x0":616,"y0":234,"x1":621,"y1":239,"cx0":619,"cy0":234,"cx1":621,"cy1":236},{"type":"BezierCurve","x0":621,"y0":239,"x1":616,"y1":245,"cx0":621,"cy0":242,"cx1":619,"cy1":245},{"type":"BezierCurve","x0":616,"y0":245,"x1":611,"y1":239,"cx0":613,"cy0":245,"cx1":611,"cy1":242}]]},{"action":"Fill","line":185,"color":"rgb(222,222,222)"},{"action":"Shape","line":186,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":611,"y0":235,"x1":616,"y1":233,"cx0":613,"cy0":234,"cx1":614,"cy1":233},{"type":"BezierCurve","x0":616,"y0":233,"x1":621,"y1":235,"cx0":618,"cy0":233,"cx1":619,"cy1":234},{"type":"BezierCurve","x0":620,"y0":235,"x1":616,"y1":234,"cx0":619,"cy0":234,"cx1":617,"cy1":234},{"type":"BezierCurve","x0":616,"y0":234,"x1":612,"y1":235,"cx0":615,"cy0":234,"cx1":613,"cy1":234}]},{"action":"Shape","line":187,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":621,"y0":235,"x1":622,"y1":239,"cx0":622,"cy0":236,"cx1":622,"cy1":237},{"type":"BezierCurve","x0":622,"y0":239,"x1":621,"y1":244,"cx0":622,"cy0":241,"cx1":622,"cy1":243},{"type":"BezierCurve","x0":620,"y0":243,"x1":621,"y1":239,"cx0":621,"cy0":242,"cx1":621,"cy1":241},{"type":"BezierCurve","x0":621,"y0":239,"x1":620,"y1":235,"cx0":621,"cy0":238,"cx1":621,"cy1":236}]},{"action":"Shape","line":188,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":621,"y0":244,"x1":616,"y1":246,"cx0":619,"cy0":245,"cx1":618,"cy1":246},{"type":"BezierCurve","x0":616,"y0":246,"x1":611,"y1":244,"cx0":614,"cy0":246,"cx1":613,"cy1":245},{"type":"BezierCurve","x0":612,"y0":243,"x1":616,"y1":245,"cx0":613,"cy0":244,"cx1":615,"cy1":245},{"type":"BezierCurve","x0":616,"y0":245,"x1":620,"y1":243,"cx0":617,"cy0":245,"cx1":619,"cy1":244}]},{"action":"Shape","line":189,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":611,"y0":244,"x1":610,"y1":239,"cx0":610,"cy0":243,"cx1":610,"cy1":241},{"type":"BezierCurve","x0":610,"y0":239,"x1":611,"y1":235,"cx0":610,"cy0":237,"cx1":610,"cy1":236},{"type":"BezierCurve","x0":612,"y0":235,"x1":611,"y1":239,"cx0":611,"cy0":236,"cx1":611,"cy1":238},{"type":"BezierCurve","x0":611,"y0":239,"x1":612,"y1":243,"cx0":611,"cy0":241,"cx1":611,"cy1":242}]},{"action":"Shape","line":190,"color":"rgb(42,42,42)","path":[{"type":"Circle","x":42,"y":613,"r":236}]},{"action":"Clip","line":191,"path":[[{"type":"BezierCurve","x0":109,"y0":459,"x1":118,"y1":450,"cx0":109,"cy0":454,"cx1":113,"cy1":450},{"type":"BezierCurve","x0":118,"y0":450,"x1":127,"y1":459,"cx0":123,"cy0":450,"cx1":127,"cy1":454},{"type":"BezierCurve","x0":127,"y0":459,"x1":118,"y1":468,"cx0":127,"cy0":464,"cx1":123,"cy1":468},{"type":"BezierCurve","x0":118,"y0":468,"x1":109,"y1":459,"cx0":113,"cy0":468,"cx1":109,"cy1":464}]]},{"action":"Fill","line":192,"color":"rgb(222,222,222)"},{"action":"Shape","line":193,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":111,"y0":452,"x1":118,"y1":449,"cx0":113,"cy0":450,"cx1":115,"cy1":449},{"type":"BezierCurve","x0":118,"y0":449,"x1":125,"y1":452,"cx0":121,"cy0":449,"cx1":123,"cy1":450},{"type":"BezierCurve","x0":124,"y0":453,"x1":118,"y1":450,"cx0":123,"cy0":451,"cx1":120,"cy1":450},{"type":"BezierCurve","x0":118,"y0":450,"x1":112,"y1":453,"cx0":116,"cy0":450,"cx1":113,"cy1":451}]},{"action":"Shape","line":194,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":125,"y0":452,"x1":128,"y1":459,"cx0":127,"cy0":454,"cx1":128,"cy1":456},{"type":"BezierCurve","x0":128,"y0":459,"x1":125,"y1":466,"cx0":128,"cy0":462,"cx1":127,"cy1":464},{"type":"BezierCurve","x0":124,"y0":466,"x1":127,"y1":459,"cx0":126,"cy0":464,"cx1":127,"cy1":462},{"type":"BezierCurve","x0":127,"y0":459,"x1":124,"y1":453,"cx0":127,"cy0":457,"cx1":126,"cy1":454}]},{"action":"Shape","line":195,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":125,"y0":466,"x1":118,"y1":469,"cx0":123,"cy0":468,"cx1":121,"cy1":469},{"type":"BezierCurve","x0":118,"y0":469,"x1":111,"y1":466,"cx0":115,"cy0":469,"cx1":113,"cy1":468},{"type":"BezierCurve","x0":112,"y0":466,"x1":118,"y1":468,"cx0":113,"cy0":467,"cx1":116,"cy1":468},{"type":"BezierCurve","x0":118,"y0":468,"x1":124,"y1":466,"cx0":120,"cy0":468,"cx1":123,"cy1":467}]},{"action":"Shape","line":196,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":111,"y0":466,"x1":108,"y1":459,"cx0":109,"cy0":464,"cx1":108,"cy1":462},{"type":"BezierCurve","x0":108,"y0":459,"x1":111,"y1":452,"cx0":108,"cy0":456,"cx1":109,"cy1":454},{"type":"BezierCurve","x0":112,"y0":453,"x1":109,"y1":459,"cx0":110,"cy0":454,"cx1":109,"cy1":457},{"type":"BezierCurve","x0":109,"y0":459,"x1":112,"y1":466,"cx0":109,"cy0":462,"cx1":110,"cy1":464}]},{"action":"Clip","line":197,"path":[[{"type":"BezierCurve","x0":243,"y0":369,"x1":342,"y1":270,"cx0":243,"cy0":315,"cx1":287,"cy1":270},{"type":"BezierCurve","x0":342,"y0":270,"x1":441,"y1":369,"cx0":397,"cy0":270,"cx1":441,"cy1":315},{"type":"BezierCurve","x0":441,"y0":369,"x1":342,"y1":468,"cx0":441,"cy0":424,"cx1":397,"cy1":468},{"type":"BezierCurve","x0":342,"y0":468,"x1":243,"y1":369,"cx0":287,"cy0":468,"cx1":243,"cy1":424}]]},{"action":"Fill","line":198,"color":"rgb(222,222,222)"},{"action":"Shape","line":199,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":271,"y0":298,"x1":342,"y1":269,"cx0":289,"cy0":280,"cx1":314,"cy1":269},{"type":"BezierCurve","x0":342,"y0":269,"x1":413,"y1":298,"cx0":370,"cy0":269,"cx1":395,"cy1":280},{"type":"BezierCurve","x0":412,"y0":299,"x1":342,"y1":270,"cx0":394,"cy0":281,"cx1":369,"cy1":270},{"type":"BezierCurve","x0":342,"y0":270,"x1":272,"y1":299,"cx0":315,"cy0":270,"cx1":290,"cy1":281}]},{"action":"Shape","line":200,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":413,"y0":298,"x1":442,"y1":369,"cx0":431,"cy0":317,"cx1":442,"cy1":342},{"type":"BezierCurve","x0":442,"y0":369,"x1":413,"y1":440,"cx0":442,"cy0":397,"cx1":431,"cy1":422},{"type":"BezierCurve","x0":412,"y0":439,"x1":441,"y1":369,"cx0":430,"cy0":421,"cx1":441,"cy1":397},{"type":"BezierCurve","x0":441,"y0":369,"x1":412,"y1":299,"cx0":441,"cy0":342,"cx1":430,"cy1":317}]},{"action":"Shape","line":201,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":413,"y0":440,"x1":342,"y1":469,"cx0":395,"cy0":458,"cx1":370,"cy1":469},{"type":"BezierCurve","x0":342,"y0":469,"x1":271,"y1":440,"cx0":314,"cy0":469,"cx1":289,"cy1":458},{"type":"BezierCurve","x0":272,"y0":439,"x1":342,"y1":468,"cx0":290,"cy0":457,"cx1":315,"cy1":468},{"type":"BezierCurve","x0":342,"y0":468,"x1":412,"y1":439,"cx0":369,"cy0":468,"cx1":394,"cy1":457}]},{"action":"Shape","line":202,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":271,"y0":440,"x1":242,"y1":369,"cx0":253,"cy0":422,"cx1":242,"cy1":397},{"type":"BezierCurve","x0":242,"y0":369,"x1":271,"y1":298,"cx0":242,"cy0":342,"cx1":253,"cy1":317},{"type":"BezierCurve","x0":272,"y0":299,"x1":243,"y1":369,"cx0":254,"cy0":317,"cx1":243,"cy1":342},{"type":"BezierCurve","x0":243,"y0":369,"x1":272,"y1":439,"cx0":243,"cy0":397,"cx1":254,"cy1":421}]},{"action":"Clip","line":203,"path":[[{"type":"BezierCurve","x0":467,"y0":369,"x1":566,"y1":270,"cx0":467,"cy0":315,"cx1":511,"cy1":270},{"type":"BezierCurve","x0":566,"y0":270,"x1":665,"y1":369,"cx0":621,"cy0":270,"cx1":665,"cy1":315},{"type":"BezierCurve","x0":665,"y0":369,"x1":566,"y1":468,"cx0":665,"cy0":424,"cx1":621,"cy1":468},{"type":"BezierCurve","x0":566,"y0":468,"x1":467,"y1":369,"cx0":511,"cy0":468,"cx1":467,"cy1":424}]]},{"action":"Fill","line":204,"color":"rgb(222,222,222)"},{"action":"Shape","line":205,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":495,"y0":298,"x1":566,"y1":269,"cx0":513,"cy0":280,"cx1":538,"cy1":269},{"type":"BezierCurve","x0":566,"y0":269,"x1":637,"y1":298,"cx0":594,"cy0":269,"cx1":619,"cy1":280},{"type":"BezierCurve","x0":636,"y0":299,"x1":566,"y1":270,"cx0":618,"cy0":281,"cx1":593,"cy1":270},{"type":"BezierCurve","x0":566,"y0":270,"x1":496,"y1":299,"cx0":539,"cy0":270,"cx1":514,"cy1":281}]},{"action":"Shape","line":206,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":637,"y0":298,"x1":666,"y1":369,"cx0":655,"cy0":317,"cx1":666,"cy1":342},{"type":"BezierCurve","x0":666,"y0":369,"x1":637,"y1":440,"cx0":666,"cy0":397,"cx1":655,"cy1":422},{"type":"BezierCurve","x0":636,"y0":439,"x1":665,"y1":369,"cx0":654,"cy0":421,"cx1":665,"cy1":397},{"type":"BezierCurve","x0":665,"y0":369,"x1":636,"y1":299,"cx0":665,"cy0":342,"cx1":654,"cy1":317}]},{"action":"Shape","line":207,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":637,"y0":440,"x1":566,"y1":469,"cx0":619,"cy0":458,"cx1":594,"cy1":469},{"type":"BezierCurve","x0":566,"y0":469,"x1":495,"y1":440,"cx0":538,"cy0":469,"cx1":513,"cy1":458},{"type":"BezierCurve","x0":496,"y0":439,"x1":566,"y1":468,"cx0":514,"cy0":457,"cx1":539,"cy1":468},{"type":"BezierCurve","x0":566,"y0":468,"x1":636,"y1":439,"cx0":593,"cy0":468,"cx1":618,"cy1":457}]},{"action":"Shape","line":208,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":495,"y0":440,"x1":466,"y1":369,"cx0":477,"cy0":422,"cx1":466,"cy1":397},{"type":"BezierCurve","x0":466,"y0":369,"x1":495,"y1":298,"cx0":466,"cy0":342,"cx1":477,"cy1":317},{"type":"BezierCurve","x0":496,"y0":299,"x1":467,"y1":369,"cx0":478,"cy0":317,"cx1":467,"cy1":342},{"type":"BezierCurve","x0":467,"y0":369,"x1":496,"y1":439,"cx0":467,"cy0":397,"cx1":478,"cy1":421}]},{"action":"Shape","line":209,"color":"rgb(42,42,42)","path":[{"type":"Circle","x":42,"y":516,"r":319}]},{"action":"Clip","line":210,"path":[[{"type":"BezierCurve","x0":691,"y0":456,"x1":693,"y1":454,"cx0":691,"cy0":455,"cx1":692,"cy1":454},{"type":"BezierCurve","x0":700,"y0":454,"x1":702,"y1":456,"cx0":701,"cy0":454,"cx1":702,"cy1":455},{"type":"BezierCurve","x0":702,"y0":463,"x1":700,"y1":465,"cx0":702,"cy0":464,"cx1":701,"cy1":465},{"type":"BezierCurve","x0":693,"y0":465,"x1":691,"y1":463,"cx0":692,"cy0":465,"cx1":691,"cy1":464}]]},{"action":"Fill","line":211,"color":"rgb(222,222,222)"},{"action":"Shape","line":212,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":691,"y0":454,"x1":693,"y1":453,"cx0":691,"cy0":453,"cx1":692,"cy1":453},{"type":"BezierCurve","x0":700,"y0":453,"x1":702,"y1":454,"cx0":701,"cy0":453,"cx1":701,"cy1":453},{"type":"BezierCurve","x0":701,"y0":454,"x1":700,"y1":454,"cx0":701,"cy0":454,"cx1":700,"cy1":454},{"type":"BezierCurve","x0":693,"y0":454,"x1":692,"y1":454,"cx0":692,"cy0":454,"cx1":692,"cy1":454}]},{"action":"Shape","line":213,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":702,"y0":454,"x1":703,"y1":456,"cx0":702,"cy0":454,"cx1":703,"cy1":455},{"type":"BezierCurve","x0":703,"y0":463,"x1":702,"y1":465,"cx0":703,"cy0":463,"cx1":702,"cy1":464},{"type":"BezierCurve","x0":701,"y0":464,"x1":702,"y1":463,"cx0":702,"cy0":464,"cx1":702,"cy1":463},{"type":"BezierCurve","x0":702,"y0":456,"x1":701,"y1":454,"cx0":702,"cy0":455,"cx1":702,"cy1":455}]},{"action":"Shape","line":214,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":702,"y0":465,"x1":700,"y1":466,"cx0":701,"cy0":465,"cx1":701,"cy1":466},{"type":"BezierCurve","x0":693,"y0":466,"x1":691,"y1":465,"cx0":692,"cy0":466,"cx1":691,"cy1":465},{"type":"BezierCurve","x0":692,"y0":464,"x1":693,"y1":465,"cx0":692,"cy0":464,"cx1":692,"cy1":465},{"type":"BezierCurve","x0":700,"y0":465,"x1":701,"y1":464,"cx0":700,"cy0":465,"cx1":701,"cy1":464}]},{"action":"Shape","line":215,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":691,"y0":465,"x1":690,"y1":463,"cx0":690,"cy0":464,"cx1":690,"cy1":463},{"type":"BezierCurve","x0":690,"y0":456,"x1":691,"y1":454,"cx0":690,"cy0":455,"cx1":690,"cy1":454},{"type":"BezierCurve","x0":692,"y0":454,"x1":691,"y1":456,"cx0":691,"cy0":455,"cx1":691,"cy1":455},{"type":"BezierCurve","x0":691,"y0":463,"x1":692,"y1":464,"cx0":691,"cy0":463,"cx1":691,"cy1":464}]},{"action":"Clip","line":216,"path":[[{"type":"BezierCurve","x0":765,"y0":456,"x1":767,"y1":454,"cx0":765,"cy0":455,"cx1":765,"cy1":454},{"type":"BezierCurve","x0":773,"y0":454,"x1":775,"y1":456,"cx0":775,"cy0":454,"cx1":775,"cy1":455},{"type":"BezierCurve","x0":775,"y0":463,"x1":773,"y1":465,"cx0":775,"cy0":464,"cx1":775,"cy1":465},{"type":"BezierCurve","x0":767,"y0":465,"x1":765,"y1":463,"cx0":765,"cy0":465,"cx1":765,"cy1":464}]]},{"action":"Fill","line":217,"color":"rgb(222,222,222)"},{"action":"Shape","line":218,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":764,"y0":454,"x1":767,"y1":453,"cx0":765,"cy0":453,"cx1":766,"cy1":453},{"type":"BezierCurve","x0":773,"y0":453,"x1":776,"y1":454,"cx0":774,"cy0":453,"cx1":775,"cy1":453},{"type":"BezierCurve","x0":775,"y0":454,"x1":773,"y1":454,"cx0":774,"cy0":454,"cx1":774,"cy1":454},{"type":"BezierCurve","x0":767,"y0":454,"x1":765,"y1":454,"cx0":766,"cy0":454,"cx1":766,"cy1":454}]},{"action":"Shape","line":219,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":776,"y0":454,"x1":776,"y1":456,"cx0":776,"cy0":454,"cx1":776,"cy1":455},{"type":"BezierCurve","x0":776,"y0":463,"x1":776,"y1":465,"cx0":776,"cy0":463,"cx1":776,"cy1":464},{"type":"BezierCurve","x0":775,"y0":464,"x1":775,"y1":463,"cx0":775,"cy0":464,"cx1":775,"cy1":463},{"type":"BezierCurve","x0":775,"y0":456,"x1":775,"y1":454,"cx0":775,"cy0":455,"cx1":775,"cy1":455}]},{"action":"Shape","line":220,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":776,"y0":465,"x1":773,"y1":466,"cx0":775,"cy0":465,"cx1":774,"cy1":466},{"type":"BezierCurve","x0":767,"y0":466,"x1":764,"y1":465,"cx0":766,"cy0":466,"cx1":765,"cy1":465},{"type":"BezierCurve","x0":765,"y0":464,"x1":767,"y1":465,"cx0":766,"cy0":464,"cx1":766,"cy1":465},{"type":"BezierCurve","x0":773,"y0":465,"x1":775,"y1":464,"cx0":774,"cy0":465,"cx1":774,"cy1":464}]},{"action":"Shape","line":221,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":764,"y0":465,"x1":764,"y1":463,"cx0":764,"cy0":464,"cx1":764,"cy1":463},{"type":"BezierCurve","x0":764,"y0":456,"x1":764,"y1":454,"cx0":764,"cy0":455,"cx1":764,"cy1":454},{"type":"BezierCurve","x0":765,"y0":454,"x1":765,"y1":456,"cx0":765,"cy0":455,"cx1":765,"cy1":455},{"type":"BezierCurve","x0":765,"y0":463,"x1":765,"y1":464,"cx0":765,"cy0":463,"cx1":765,"cy1":464}]},{"action":"Text","line":222,"font":"rgb(42,42,42) normal normal 400 9.800000190734863px Arial"},{"action":"T","x":766,"y":465,"text":"✔","line":223},{"action":"Clip","line":224,"path":[[{"type":"BezierCurve","x0":183,"y0":672,"x1":185,"y1":670,"cx0":183,"cy0":671,"cx1":183,"cy1":670},{"type":"BezierCurve","x0":199,"y0":670,"x1":201,"y1":672,"cx0":200,"cy0":670,"cx1":201,"cy1":671},{"type":"BezierCurve","x0":201,"y0":686,"x1":199,"y1":688,"cx0":201,"cy0":687,"cx1":200,"cy1":688},{"type":"BezierCurve","x0":185,"y0":688,"x1":183,"y1":686,"cx0":183,"cy0":688,"cx1":183,"cy1":687}]]},{"action":"Fill","line":225,"color":"rgb(222,222,222)"},{"action":"Shape","line":226,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":182,"y0":670,"x1":185,"y1":669,"cx0":183,"cy0":670,"cx1":184,"cy1":669},{"type":"BezierCurve","x0":199,"y0":669,"x1":201,"y1":670,"cx0":199,"cy0":669,"cx1":200,"cy1":670},{"type":"BezierCurve","x0":200,"y0":671,"x1":199,"y1":670,"cx0":200,"cy0":670,"cx1":199,"cy1":670},{"type":"BezierCurve","x0":185,"y0":670,"x1":183,"y1":671,"cx0":184,"cy0":670,"cx1":184,"cy1":670}]},{"action":"Shape","line":227,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":201,"y0":670,"x1":202,"y1":672,"cx0":201,"cy0":671,"cx1":202,"cy1":671},{"type":"BezierCurve","x0":202,"y0":686,"x1":201,"y1":688,"cx0":202,"cy0":687,"cx1":201,"cy1":688},{"type":"BezierCurve","x0":200,"y0":688,"x1":201,"y1":686,"cx0":200,"cy0":687,"cx1":201,"cy1":687},{"type":"BezierCurve","x0":201,"y0":672,"x1":200,"y1":671,"cx0":201,"cy0":672,"cx1":200,"cy1":671}]},{"action":"Shape","line":228,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":201,"y0":688,"x1":199,"y1":689,"cx0":200,"cy0":689,"cx1":199,"cy1":689},{"type":"BezierCurve","x0":185,"y0":689,"x1":182,"y1":688,"cx0":184,"cy0":689,"cx1":183,"cy1":689},{"type":"BezierCurve","x0":183,"y0":688,"x1":185,"y1":688,"cx0":184,"cy0":688,"cx1":184,"cy1":688},{"type":"BezierCurve","x0":199,"y0":688,"x1":200,"y1":688,"cx0":199,"cy0":688,"cx1":200,"cy1":688}]},{"action":"Shape","line":229,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":182,"y0":688,"x1":182,"y1":686,"cx0":182,"cy0":688,"cx1":182,"cy1":687},{"type":"BezierCurve","x0":182,"y0":672,"x1":182,"y1":670,"cx0":182,"cy0":671,"cx1":182,"cy1":671},{"type":"BezierCurve","x0":183,"y0":671,"x1":183,"y1":672,"cx0":183,"cy0":671,"cx1":183,"cy1":672},{"type":"BezierCurve","x0":183,"y0":686,"x1":183,"y1":688,"cx0":183,"cy0":687,"cx1":183,"cy1":687}]},{"action":"Clip","line":230,"path":[[{"type":"BezierCurve","x0":317,"y0":492,"x1":319,"y1":490,"cx0":317,"cy0":491,"cx1":317,"cy1":490},{"type":"BezierCurve","x0":513,"y0":490,"x1":515,"y1":492,"cx0":514,"cy0":490,"cx1":515,"cy1":491},{"type":"BezierCurve","x0":515,"y0":686,"x1":513,"y1":688,"cx0":515,"cy0":687,"cx1":514,"cy1":688},{"type":"BezierCurve","x0":319,"y0":688,"x1":317,"y1":686,"cx0":317,"cy0":688,"cx1":317,"cy1":687}]]},{"action":"Fill","line":231,"color":"rgb(222,222,222)"},{"action":"Shape","line":232,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":316,"y0":490,"x1":319,"y1":489,"cx0":317,"cy0":490,"cx1":318,"cy1":489},{"type":"BezierCurve","x0":513,"y0":489,"x1":515,"y1":490,"cx0":513,"cy0":489,"cx1":514,"cy1":490},{"type":"BezierCurve","x0":514,"y0":491,"x1":513,"y1":490,"cx0":514,"cy0":490,"cx1":513,"cy1":490},{"type":"BezierCurve","x0":319,"y0":490,"x1":317,"y1":491,"cx0":318,"cy0":490,"cx1":318,"cy1":490}]},{"action":"Shape","line":233,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":515,"y0":490,"x1":516,"y1":492,"cx0":515,"cy0":491,"cx1":516,"cy1":491},{"type":"BezierCurve","x0":516,"y0":686,"x1":515,"y1":688,"cx0":516,"cy0":687,"cx1":515,"cy1":688},{"type":"BezierCurve","x0":514,"y0":688,"x1":515,"y1":686,"cx0":514,"cy0":687,"cx1":515,"cy1":687},{"type":"BezierCurve","x0":515,"y0":492,"x1":514,"y1":491,"cx0":515,"cy0":492,"cx1":514,"cy1":491}]},{"action":"Shape","line":234,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":515,"y0":688,"x1":513,"y1":689,"cx0":514,"cy0":689,"cx1":513,"cy1":689},{"type":"BezierCurve","x0":319,"y0":689,"x1":316,"y1":688,"cx0":318,"cy0":689,"cx1":317,"cy1":689},{"type":"BezierCurve","x0":317,"y0":688,"x1":319,"y1":688,"cx0":318,"cy0":688,"cx1":318,"cy1":688},{"type":"BezierCurve","x0":513,"y0":688,"x1":514,"y1":688,"cx0":513,"cy0":688,"cx1":514,"cy1":688}]},{"action":"Shape","line":235,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":316,"y0":688,"x1":316,"y1":686,"cx0":316,"cy0":688,"cx1":316,"cy1":687},{"type":"BezierCurve","x0":316,"y0":492,"x1":316,"y1":490,"cx0":316,"cy0":491,"cx1":316,"cy1":491},{"type":"BezierCurve","x0":317,"y0":491,"x1":317,"y1":492,"cx0":317,"cy0":491,"cx1":317,"cy1":492},{"type":"BezierCurve","x0":317,"y0":686,"x1":317,"y1":688,"cx0":317,"cy0":687,"cx1":317,"cy1":687}]},{"action":"Clip","line":236,"path":[[{"type":"BezierCurve","x0":541,"y0":492,"x1":543,"y1":490,"cx0":541,"cy0":491,"cx1":541,"cy1":490},{"type":"BezierCurve","x0":737,"y0":490,"x1":739,"y1":492,"cx0":738,"cy0":490,"cx1":739,"cy1":491},{"type":"BezierCurve","x0":739,"y0":686,"x1":737,"y1":688,"cx0":739,"cy0":687,"cx1":738,"cy1":688},{"type":"BezierCurve","x0":543,"y0":688,"x1":541,"y1":686,"cx0":541,"cy0":688,"cx1":541,"cy1":687}]]},{"action":"Fill","line":237,"color":"rgb(222,222,222)"},{"action":"Shape","line":238,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":540,"y0":490,"x1":543,"y1":489,"cx0":541,"cy0":490,"cx1":542,"cy1":489},{"type":"BezierCurve","x0":737,"y0":489,"x1":739,"y1":490,"cx0":737,"cy0":489,"cx1":738,"cy1":490},{"type":"BezierCurve","x0":738,"y0":491,"x1":737,"y1":490,"cx0":738,"cy0":490,"cx1":737,"cy1":490},{"type":"BezierCurve","x0":543,"y0":490,"x1":541,"y1":491,"cx0":542,"cy0":490,"cx1":542,"cy1":490}]},{"action":"Shape","line":239,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":739,"y0":490,"x1":740,"y1":492,"cx0":739,"cy0":491,"cx1":740,"cy1":491},{"type":"BezierCurve","x0":740,"y0":686,"x1":739,"y1":688,"cx0":740,"cy0":687,"cx1":739,"cy1":688},{"type":"BezierCurve","x0":738,"y0":688,"x1":739,"y1":686,"cx0":738,"cy0":687,"cx1":739,"cy1":687},{"type":"BezierCurve","x0":739,"y0":492,"x1":738,"y1":491,"cx0":739,"cy0":492,"cx1":738,"cy1":491}]},{"action":"Shape","line":240,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":739,"y0":688,"x1":737,"y1":689,"cx0":738,"cy0":689,"cx1":737,"cy1":689},{"type":"BezierCurve","x0":543,"y0":689,"x1":540,"y1":688,"cx0":542,"cy0":689,"cx1":541,"cy1":689},{"type":"BezierCurve","x0":541,"y0":688,"x1":543,"y1":688,"cx0":542,"cy0":688,"cx1":542,"cy1":688},{"type":"BezierCurve","x0":737,"y0":688,"x1":738,"y1":688,"cx0":737,"cy0":688,"cx1":738,"cy1":688}]},{"action":"Shape","line":241,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":540,"y0":688,"x1":540,"y1":686,"cx0":540,"cy0":688,"cx1":540,"cy1":687},{"type":"BezierCurve","x0":540,"y0":492,"x1":540,"y1":490,"cx0":540,"cy0":491,"cx1":540,"cy1":491},{"type":"BezierCurve","x0":541,"y0":491,"x1":541,"y1":492,"cx0":541,"cy0":491,"cx1":541,"cy1":492},{"type":"BezierCurve","x0":541,"y0":686,"x1":541,"y1":688,"cx0":541,"cy0":687,"cx1":541,"cy1":687}]},{"action":"Text","line":242,"font":"rgb(42,42,42) normal normal 400 197px Arial"},{"action":"T","x":573,"y":688,"text":"✔","line":243},{"action":"Transform","line":244,"x":579,"y":243,"matrix":"3, 0, 0, 3, 0, 0"},{"action":"Clip","line":245,"path":[[{"type":"BezierCurve","x0":574,"y0":239,"x1":579,"y1":234,"cx0":574,"cy0":236,"cx1":576,"cy1":234},{"type":"BezierCurve","x0":579,"y0":234,"x1":585,"y1":239,"cx0":582,"cy0":234,"cx1":585,"cy1":236},{"type":"BezierCurve","x0":585,"y0":239,"x1":579,"y1":245,"cx0":585,"cy0":242,"cx1":582,"cy1":245},{"type":"BezierCurve","x0":579,"y0":245,"x1":574,"y1":239,"cx0":576,"cy0":245,"cx1":574,"cy1":242}]]},{"action":"Fill","line":246,"color":"rgb(222,222,222)"},{"action":"Shape","line":247,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":575,"y0":235,"x1":579,"y1":233,"cx0":576,"cy0":234,"cx1":577,"cy1":233},{"type":"BezierCurve","x0":579,"y0":233,"x1":584,"y1":235,"cx0":581,"cy0":233,"cx1":583,"cy1":234},{"type":"BezierCurve","x0":583,"y0":235,"x1":579,"y1":234,"cx0":582,"cy0":234,"cx1":581,"cy1":234},{"type":"BezierCurve","x0":579,"y0":234,"x1":575,"y1":235,"cx0":578,"cy0":234,"cx1":576,"cy1":234}]},{"action":"Shape","line":248,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":584,"y0":235,"x1":586,"y1":239,"cx0":585,"cy0":236,"cx1":586,"cy1":237},{"type":"BezierCurve","x0":586,"y0":239,"x1":584,"y1":244,"cx0":586,"cy0":241,"cx1":585,"cy1":243},{"type":"BezierCurve","x0":583,"y0":243,"x1":585,"y1":239,"cx0":584,"cy0":242,"cx1":585,"cy1":241},{"type":"BezierCurve","x0":585,"y0":239,"x1":583,"y1":235,"cx0":585,"cy0":238,"cx1":584,"cy1":236}]},{"action":"Shape","line":249,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":584,"y0":244,"x1":579,"y1":246,"cx0":583,"cy0":245,"cx1":581,"cy1":246},{"type":"BezierCurve","x0":579,"y0":246,"x1":575,"y1":244,"cx0":577,"cy0":246,"cx1":576,"cy1":245},{"type":"BezierCurve","x0":575,"y0":243,"x1":579,"y1":245,"cx0":576,"cy0":244,"cx1":578,"cy1":245},{"type":"BezierCurve","x0":579,"y0":245,"x1":583,"y1":243,"cx0":581,"cy0":245,"cx1":582,"cy1":244}]},{"action":"Shape","line":250,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":575,"y0":244,"x1":573,"y1":239,"cx0":574,"cy0":243,"cx1":573,"cy1":241},{"type":"BezierCurve","x0":573,"y0":239,"x1":575,"y1":235,"cx0":573,"cy0":237,"cx1":574,"cy1":236},{"type":"BezierCurve","x0":575,"y0":235,"x1":574,"y1":239,"cx0":574,"cy0":236,"cx1":574,"cy1":238},{"type":"BezierCurve","x0":574,"y0":239,"x1":575,"y1":243,"cx0":574,"cy0":241,"cx1":574,"cy1":242}]},{"action":"Transform","line":251,"x":653,"y":243,"matrix":"3, 0, 0, 3, 0, 0"},{"action":"Clip","line":252,"path":[[{"type":"BezierCurve","x0":647,"y0":239,"x1":653,"y1":234,"cx0":647,"cy0":236,"cx1":650,"cy1":234},{"type":"BezierCurve","x0":653,"y0":234,"x1":658,"y1":239,"cx0":656,"cy0":234,"cx1":658,"cy1":236},{"type":"BezierCurve","x0":658,"y0":239,"x1":653,"y1":245,"cx0":658,"cy0":242,"cx1":656,"cy1":245},{"type":"BezierCurve","x0":653,"y0":245,"x1":647,"y1":239,"cx0":650,"cy0":245,"cx1":647,"cy1":242}]]},{"action":"Fill","line":253,"color":"rgb(222,222,222)"},{"action":"Shape","line":254,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":648,"y0":235,"x1":653,"y1":233,"cx0":649,"cy0":234,"cx1":651,"cy1":233},{"type":"BezierCurve","x0":653,"y0":233,"x1":657,"y1":235,"cx0":655,"cy0":233,"cx1":656,"cy1":234},{"type":"BezierCurve","x0":657,"y0":235,"x1":653,"y1":234,"cx0":656,"cy0":234,"cx1":654,"cy1":234},{"type":"BezierCurve","x0":653,"y0":234,"x1":649,"y1":235,"cx0":651,"cy0":234,"cx1":650,"cy1":234}]},{"action":"Shape","line":255,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":657,"y0":235,"x1":659,"y1":239,"cx0":658,"cy0":236,"cx1":659,"cy1":237},{"type":"BezierCurve","x0":659,"y0":239,"x1":657,"y1":244,"cx0":659,"cy0":241,"cx1":658,"cy1":243},{"type":"BezierCurve","x0":657,"y0":243,"x1":658,"y1":239,"cx0":658,"cy0":242,"cx1":658,"cy1":241},{"type":"BezierCurve","x0":658,"y0":239,"x1":657,"y1":235,"cx0":658,"cy0":238,"cx1":658,"cy1":236}]},{"action":"Shape","line":256,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":657,"y0":244,"x1":653,"y1":246,"cx0":656,"cy0":245,"cx1":655,"cy1":246},{"type":"BezierCurve","x0":653,"y0":246,"x1":648,"y1":244,"cx0":651,"cy0":246,"cx1":649,"cy1":245},{"type":"BezierCurve","x0":649,"y0":243,"x1":653,"y1":245,"cx0":650,"cy0":244,"cx1":651,"cy1":245},{"type":"BezierCurve","x0":653,"y0":245,"x1":657,"y1":243,"cx0":654,"cy0":245,"cx1":656,"cy1":244}]},{"action":"Shape","line":257,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":648,"y0":244,"x1":646,"y1":239,"cx0":647,"cy0":243,"cx1":646,"cy1":241},{"type":"BezierCurve","x0":646,"y0":239,"x1":648,"y1":235,"cx0":646,"cy0":237,"cx1":647,"cy1":236},{"type":"BezierCurve","x0":649,"y0":235,"x1":647,"y1":239,"cx0":648,"cy0":236,"cx1":647,"cy1":238},{"type":"BezierCurve","x0":647,"y0":239,"x1":649,"y1":243,"cx0":647,"cy0":241,"cx1":648,"cy1":242}]},{"action":"Shape","line":258,"color":"rgb(42,42,42)","path":[{"type":"Circle","x":42,"y":650,"r":236}]},{"action":"Transform","line":259,"x":690,"y":243,"matrix":"3, 0, 0, 3, 0, 0"},{"action":"Clip","line":260,"path":[[{"type":"BezierCurve","x0":684,"y0":239,"x1":690,"y1":234,"cx0":684,"cy0":236,"cx1":687,"cy1":234},{"type":"BezierCurve","x0":690,"y0":234,"x1":695,"y1":239,"cx0":693,"cy0":234,"cx1":695,"cy1":236},{"type":"BezierCurve","x0":695,"y0":239,"x1":690,"y1":245,"cx0":695,"cy0":242,"cx1":693,"cy1":245},{"type":"BezierCurve","x0":690,"y0":245,"x1":684,"y1":239,"cx0":687,"cy0":245,"cx1":684,"cy1":242}]]},{"action":"Fill","line":261,"color":"rgb(222,222,222)"},{"action":"Shape","line":262,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":685,"y0":235,"x1":690,"y1":233,"cx0":686,"cy0":234,"cx1":688,"cy1":233},{"type":"BezierCurve","x0":690,"y0":233,"x1":694,"y1":235,"cx0":691,"cy0":233,"cx1":693,"cy1":234},{"type":"BezierCurve","x0":693,"y0":235,"x1":690,"y1":234,"cx0":692,"cy0":234,"cx1":691,"cy1":234},{"type":"BezierCurve","x0":690,"y0":234,"x1":686,"y1":235,"cx0":688,"cy0":234,"cx1":687,"cy1":234}]},{"action":"Shape","line":263,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":694,"y0":235,"x1":696,"y1":239,"cx0":695,"cy0":236,"cx1":696,"cy1":237},{"type":"BezierCurve","x0":696,"y0":239,"x1":694,"y1":244,"cx0":696,"cy0":241,"cx1":695,"cy1":243},{"type":"BezierCurve","x0":693,"y0":243,"x1":695,"y1":239,"cx0":694,"cy0":242,"cx1":695,"cy1":241},{"type":"BezierCurve","x0":695,"y0":239,"x1":693,"y1":235,"cx0":695,"cy0":238,"cx1":694,"cy1":236}]},{"action":"Shape","line":264,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":694,"y0":244,"x1":690,"y1":246,"cx0":693,"cy0":245,"cx1":691,"cy1":246},{"type":"BezierCurve","x0":690,"y0":246,"x1":685,"y1":244,"cx0":688,"cy0":246,"cx1":686,"cy1":245},{"type":"BezierCurve","x0":686,"y0":243,"x1":690,"y1":245,"cx0":687,"cy0":244,"cx1":688,"cy1":245},{"type":"BezierCurve","x0":690,"y0":245,"x1":693,"y1":243,"cx0":691,"cy0":245,"cx1":692,"cy1":244}]},{"action":"Shape","line":265,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":685,"y0":244,"x1":683,"y1":239,"cx0":684,"cy0":243,"cx1":683,"cy1":241},{"type":"BezierCurve","x0":683,"y0":239,"x1":685,"y1":235,"cx0":683,"cy0":237,"cx1":684,"cy1":236},{"type":"BezierCurve","x0":686,"y0":235,"x1":684,"y1":239,"cx0":685,"cy0":236,"cx1":684,"cy1":238},{"type":"BezierCurve","x0":684,"y0":239,"x1":686,"y1":243,"cx0":684,"cy0":241,"cx1":685,"cy1":242}]},{"action":"Transform","line":266,"x":733,"y":463,"matrix":"3, 0, 0, 3, 0, 0"},{"action":"Clip","line":267,"path":[[{"type":"BezierCurve","x0":728,"y0":456,"x1":730,"y1":454,"cx0":728,"cy0":455,"cx1":729,"cy1":454},{"type":"BezierCurve","x0":737,"y0":454,"x1":739,"y1":456,"cx0":738,"cy0":454,"cx1":739,"cy1":455},{"type":"BezierCurve","x0":739,"y0":463,"x1":737,"y1":465,"cx0":739,"cy0":464,"cx1":738,"cy1":465},{"type":"BezierCurve","x0":730,"y0":465,"x1":728,"y1":463,"cx0":729,"cy0":465,"cx1":728,"cy1":464}]]},{"action":"Fill","line":268,"color":"rgb(222,222,222)"},{"action":"Shape","line":269,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":728,"y0":454,"x1":730,"y1":453,"cx0":728,"cy0":453,"cx1":729,"cy1":453},{"type":"BezierCurve","x0":737,"y0":453,"x1":739,"y1":454,"cx0":737,"cy0":453,"cx1":738,"cy1":453},{"type":"BezierCurve","x0":738,"y0":454,"x1":737,"y1":454,"cx0":738,"cy0":454,"cx1":737,"cy1":454},{"type":"BezierCurve","x0":730,"y0":454,"x1":728,"y1":454,"cx0":729,"cy0":454,"cx1":729,"cy1":454}]},{"action":"Shape","line":270,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":739,"y0":454,"x1":740,"y1":456,"cx0":739,"cy0":454,"cx1":740,"cy1":455},{"type":"BezierCurve","x0":740,"y0":463,"x1":739,"y1":465,"cx0":740,"cy0":463,"cx1":739,"cy1":464},{"type":"BezierCurve","x0":738,"y0":464,"x1":739,"y1":463,"cx0":738,"cy0":464,"cx1":739,"cy1":463},{"type":"BezierCurve","x0":739,"y0":456,"x1":738,"y1":454,"cx0":739,"cy0":455,"cx1":738,"cy1":455}]},{"action":"Shape","line":271,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":739,"y0":465,"x1":737,"y1":466,"cx0":738,"cy0":465,"cx1":737,"cy1":466},{"type":"BezierCurve","x0":730,"y0":466,"x1":728,"y1":465,"cx0":729,"cy0":466,"cx1":728,"cy1":465},{"type":"BezierCurve","x0":728,"y0":464,"x1":730,"y1":465,"cx0":729,"cy0":464,"cx1":729,"cy1":465},{"type":"BezierCurve","x0":737,"y0":465,"x1":738,"y1":464,"cx0":737,"cy0":465,"cx1":738,"cy1":464}]},{"action":"Shape","line":272,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":728,"y0":465,"x1":727,"y1":463,"cx0":727,"cy0":464,"cx1":727,"cy1":463},{"type":"BezierCurve","x0":727,"y0":456,"x1":728,"y1":454,"cx0":727,"cy0":455,"cx1":727,"cy1":454},{"type":"BezierCurve","x0":728,"y0":454,"x1":728,"y1":456,"cx0":728,"cy0":455,"cx1":728,"cy1":455},{"type":"BezierCurve","x0":728,"y0":463,"x1":728,"y1":464,"cx0":728,"cy0":463,"cx1":728,"cy1":464}]},{"action":"Transform","line":273,"x":24,"y":683,"matrix":"3, 0, 0, 3, 0, 0"},{"action":"Clip","line":274,"path":[[{"type":"BezierCurve","x0":19,"y0":676,"x1":21,"y1":674,"cx0":19,"cy0":675,"cx1":20,"cy1":674},{"type":"BezierCurve","x0":28,"y0":674,"x1":30,"y1":676,"cx0":29,"cy0":674,"cx1":30,"cy1":675},{"type":"BezierCurve","x0":30,"y0":683,"x1":28,"y1":685,"cx0":30,"cy0":684,"cx1":29,"cy1":685},{"type":"BezierCurve","x0":21,"y0":685,"x1":19,"y1":683,"cx0":20,"cy0":685,"cx1":19,"cy1":684}]]},{"action":"Fill","line":275,"color":"rgb(222,222,222)"},{"action":"Shape","line":276,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":19,"y0":674,"x1":21,"y1":673,"cx0":19,"cy0":673,"cx1":20,"cy1":673},{"type":"BezierCurve","x0":28,"y0":673,"x1":30,"y1":674,"cx0":29,"cy0":673,"cx1":29,"cy1":673},{"type":"BezierCurve","x0":29,"y0":674,"x1":28,"y1":674,"cx0":29,"cy0":674,"cx1":28,"cy1":674},{"type":"BezierCurve","x0":21,"y0":674,"x1":20,"y1":674,"cx0":20,"cy0":674,"cx1":20,"cy1":674}]},{"action":"Shape","line":277,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":30,"y0":674,"x1":31,"y1":676,"cx0":30,"cy0":674,"cx1":31,"cy1":675},{"type":"BezierCurve","x0":31,"y0":683,"x1":30,"y1":685,"cx0":31,"cy0":683,"cx1":30,"cy1":684},{"type":"BezierCurve","x0":29,"y0":684,"x1":30,"y1":683,"cx0":30,"cy0":684,"cx1":30,"cy1":683},{"type":"BezierCurve","x0":30,"y0":676,"x1":29,"y1":674,"cx0":30,"cy0":675,"cx1":30,"cy1":675}]},{"action":"Shape","line":278,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":30,"y0":685,"x1":28,"y1":686,"cx0":29,"cy0":685,"cx1":29,"cy1":686},{"type":"BezierCurve","x0":21,"y0":686,"x1":19,"y1":685,"cx0":20,"cy0":686,"cx1":19,"cy1":685},{"type":"BezierCurve","x0":20,"y0":684,"x1":21,"y1":685,"cx0":20,"cy0":684,"cx1":20,"cy1":685},{"type":"BezierCurve","x0":28,"y0":685,"x1":29,"y1":684,"cx0":28,"cy0":685,"cx1":29,"cy1":684}]},{"action":"Shape","line":279,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":19,"y0":685,"x1":18,"y1":683,"cx0":18,"cy0":684,"cx1":18,"cy1":683},{"type":"BezierCurve","x0":18,"y0":676,"x1":19,"y1":674,"cx0":18,"cy0":675,"cx1":18,"cy1":674},{"type":"BezierCurve","x0":20,"y0":674,"x1":19,"y1":676,"cx0":19,"cy0":675,"cx1":19,"cy1":675},{"type":"BezierCurve","x0":19,"y0":683,"x1":20,"y1":684,"cx0":19,"cy0":683,"cx1":19,"cy1":684}]},{"action":"Text","line":280,"font":"rgb(42,42,42) normal normal 400 9.800000190734863px Arial"},{"action":"T","x":20,"y":685,"text":"✔","line":281},{"action":"Transform","line":282,"x":61,"y":683,"matrix":"3, 0, 0, 3, 0, 0"},{"action":"Clip","line":283,"path":[[{"type":"BezierCurve","x0":56,"y0":676,"x1":58,"y1":674,"cx0":56,"cy0":675,"cx1":57,"cy1":674},{"type":"BezierCurve","x0":65,"y0":674,"x1":67,"y1":676,"cx0":66,"cy0":674,"cx1":67,"cy1":675},{"type":"BezierCurve","x0":67,"y0":683,"x1":65,"y1":685,"cx0":67,"cy0":684,"cx1":66,"cy1":685},{"type":"BezierCurve","x0":58,"y0":685,"x1":56,"y1":683,"cx0":57,"cy0":685,"cx1":56,"cy1":684}]]},{"action":"Fill","line":284,"color":"rgb(222,222,222)"},{"action":"Shape","line":285,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":56,"y0":674,"x1":58,"y1":673,"cx0":56,"cy0":673,"cx1":57,"cy1":673},{"type":"BezierCurve","x0":65,"y0":673,"x1":67,"y1":674,"cx0":65,"cy0":673,"cx1":66,"cy1":673},{"type":"BezierCurve","x0":66,"y0":674,"x1":65,"y1":674,"cx0":66,"cy0":674,"cx1":65,"cy1":674},{"type":"BezierCurve","x0":58,"y0":674,"x1":56,"y1":674,"cx0":57,"cy0":674,"cx1":57,"cy1":674}]},{"action":"Shape","line":286,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":67,"y0":674,"x1":68,"y1":676,"cx0":67,"cy0":674,"cx1":68,"cy1":675},{"type":"BezierCurve","x0":68,"y0":683,"x1":67,"y1":685,"cx0":68,"cy0":683,"cx1":67,"cy1":684},{"type":"BezierCurve","x0":66,"y0":684,"x1":67,"y1":683,"cx0":66,"cy0":684,"cx1":67,"cy1":683},{"type":"BezierCurve","x0":67,"y0":676,"x1":66,"y1":674,"cx0":67,"cy0":675,"cx1":66,"cy1":675}]},{"action":"Shape","line":287,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":67,"y0":685,"x1":65,"y1":686,"cx0":66,"cy0":685,"cx1":65,"cy1":686},{"type":"BezierCurve","x0":58,"y0":686,"x1":56,"y1":685,"cx0":57,"cy0":686,"cx1":56,"cy1":685},{"type":"BezierCurve","x0":56,"y0":684,"x1":58,"y1":685,"cx0":57,"cy0":684,"cx1":57,"cy1":685},{"type":"BezierCurve","x0":65,"y0":685,"x1":66,"y1":684,"cx0":65,"cy0":685,"cx1":66,"cy1":684}]},{"action":"Shape","line":288,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":56,"y0":685,"x1":55,"y1":683,"cx0":55,"cy0":684,"cx1":55,"cy1":683},{"type":"BezierCurve","x0":55,"y0":676,"x1":56,"y1":674,"cx0":55,"cy0":675,"cx1":55,"cy1":674},{"type":"BezierCurve","x0":56,"y0":674,"x1":56,"y1":676,"cx0":56,"cy0":675,"cx1":56,"cy1":675},{"type":"BezierCurve","x0":56,"y0":683,"x1":56,"y1":684,"cx0":56,"cy0":683,"cx1":56,"cy1":684}]},{"action":"Clip","line":289,"path":[[{"type":"BezierCurve","x0":8,"y0":702,"x1":11,"y1":699,"cx0":8,"cy0":701,"cx1":9,"cy1":699},{"type":"BezierCurve","x0":17,"y0":699,"x1":20,"y1":702,"cx0":19,"cy0":699,"cx1":20,"cy1":701},{"type":"BezierCurve","x0":20,"y0":708,"x1":17,"y1":711,"cx0":20,"cy0":710,"cx1":19,"cy1":711},{"type":"BezierCurve","x0":11,"y0":711,"x1":8,"y1":708,"cx0":9,"cy0":711,"cx1":8,"cy1":710}]]},{"action":"Fill","line":290,"color":"rgb(222,222,222)"},{"action":"Shape","line":291,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":9,"y0":700,"x1":11,"y1":699,"cx0":9,"cy0":700,"cx1":10,"cy1":699},{"type":"BezierCurve","x0":17,"y0":699,"x1":19,"y1":700,"cx0":18,"cy0":699,"cx1":19,"cy1":700},{"type":"BezierCurve","x0":18,"y0":701,"x1":17,"y1":700,"cx0":18,"cy0":700,"cx1":18,"cy1":700},{"type":"BezierCurve","x0":11,"y0":700,"x1":10,"y1":701,"cx0":10,"cy0":700,"cx1":10,"cy1":700}]},{"action":"Shape","line":292,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":19,"y0":700,"x1":20,"y1":702,"cx0":20,"cy0":701,"cx1":20,"cy1":701},{"type":"BezierCurve","x0":20,"y0":708,"x1":19,"y1":710,"cx0":20,"cy0":709,"cx1":20,"cy1":710},{"type":"BezierCurve","x0":18,"y0":710,"x1":19,"y1":708,"cx0":19,"cy0":709,"cx1":19,"cy1":709},{"type":"BezierCurve","x0":19,"y0":702,"x1":18,"y1":701,"cx0":19,"cy0":702,"cx1":19,"cy1":701}]},{"action":"Shape","line":293,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":19,"y0":710,"x1":17,"y1":711,"cx0":19,"cy0":711,"cx1":18,"cy1":711},{"type":"BezierCurve","x0":11,"y0":711,"x1":9,"y1":710,"cx0":10,"cy0":711,"cx1":9,"cy1":711},{"type":"BezierCurve","x0":10,"y0":710,"x1":11,"y1":710,"cx0":10,"cy0":710,"cx1":10,"cy1":710},{"type":"BezierCurve","x0":17,"y0":710,"x1":18,"y1":710,"cx0":18,"cy0":710,"cx1":18,"cy1":710}]},{"action":"Shape","line":294,"color":"rgb(165,165,165)","path":[{"type":"BezierCurve","x0":9,"y0":710,"x1":8,"y1":708,"cx0":8,"cy0":710,"cx1":8,"cy1":709},{"type":"BezierCurve","x0":8,"y0":702,"x1":9,"y1":700,"cx0":8,"cy0":701,"cx1":8,"cy1":701},{"type":"BezierCurve","x0":10,"y0":701,"x1":9,"y1":702,"cx0":9,"cy0":701,"cx1":9,"cy1":702},{"type":"BezierCurve","x0":9,"y0":708,"x1":10,"y1":710,"cx0":9,"cy0":709,"cx1":9,"cy1":709}]}],"/tests/reftests/iframe.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Shape","line":4,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":512,"y":8},{"type":"Vector","x":510,"y":10},{"type":"Vector","x":10,"y":10}]},{"action":"Shape","line":5,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":512,"y":8},{"type":"Vector","x":512,"y":512},{"type":"Vector","x":510,"y":510},{"type":"Vector","x":510,"y":10}]},{"action":"Shape","line":6,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":512,"y":512},{"type":"Vector","x":8,"y":512},{"type":"Vector","x":10,"y":510},{"type":"Vector","x":510,"y":510}]},{"action":"Shape","line":7,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":512},{"type":"Vector","x":8,"y":8},{"type":"Vector","x":10,"y":10},{"type":"Vector","x":10,"y":510}]}],"/tests/reftests/images/base.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 700 32px Arial"},{"action":"T","x":8,"y":22,"text":"External","line":5},{"action":"T","x":143,"y":22,"text":"image","line":6},{"action":"Text","line":7,"font":"rgb(0,0,0) normal normal 700 32px Arial"},{"action":"T","x":8,"y":278,"text":"External","line":8},{"action":"T","x":143,"y":278,"text":"image","line":9},{"action":"T","x":244,"y":278,"text":"(using","line":10},{"action":"T","x":350,"y":278,"text":"<base>","line":11},{"action":"T","x":469,"y":278,"text":"href)","line":12},{"action":"Shape","line":13,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":80},{"type":"Vector","x":439,"y":80},{"type":"Vector","x":434,"y":85},{"type":"Vector","x":13,"y":85}]},{"action":"Shape","line":14,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":439,"y":80},{"type":"Vector","x":439,"y":253},{"type":"Vector","x":434,"y":248},{"type":"Vector","x":434,"y":85}]},{"action":"Shape","line":15,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":439,"y":253},{"type":"Vector","x":8,"y":253},{"type":"Vector","x":13,"y":248},{"type":"Vector","x":434,"y":248}]},{"action":"Shape","line":16,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":253},{"type":"Vector","x":8,"y":80},{"type":"Vector","x":13,"y":85},{"type":"Vector","x":13,"y":248}]}],"/tests/reftests/images/canvas.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":708,"y":8},{"type":"Vector","x":708,"y":308},{"type":"Vector","x":8,"y":308}]]},{"action":"Draw image","line":5,"imageSrc":"Canvas","sx":0,"xy":0,"sw":300,"sh":150,"dx":0,"dy":0,"dw":300,"dh":150}],"/tests/reftests/images/cross-origin.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 700 32px Arial"},{"action":"T","x":8,"y":22,"text":"External","line":5},{"action":"T","x":143,"y":22,"text":"image","line":6},{"action":"T","x":244,"y":22,"text":"(CORS)","line":7}],"/tests/reftests/images/empty.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":8,"text":"Image","line":5},{"action":"T","x":57,"y":8,"text":"without","line":6},{"action":"T","x":112,"y":8,"text":"src","line":7},{"action":"T","x":138,"y":8,"text":"attribute,","line":8},{"action":"T","x":204,"y":8,"text":"should","line":9},{"action":"T","x":256,"y":8,"text":"not","line":10},{"action":"T","x":283,"y":8,"text":"crash:","line":11},{"action":"Text","line":12,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":78,"text":"Image","line":13},{"action":"T","x":57,"y":78,"text":"with","line":14},{"action":"T","x":90,"y":78,"text":"broken","line":15},{"action":"T","x":143,"y":78,"text":"src","line":16},{"action":"T","x":169,"y":78,"text":"attribute,","line":17},{"action":"T","x":236,"y":78,"text":"should","line":18},{"action":"T","x":287,"y":78,"text":"not","line":19},{"action":"T","x":314,"y":78,"text":"crash:","line":20},{"action":"Shape","line":21,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":8,"y":26},{"type":"Vector","x":60,"y":26},{"type":"Vector","x":59,"y":27},{"type":"Vector","x":9,"y":27}]},{"action":"Shape","line":22,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":60,"y":26},{"type":"Vector","x":60,"y":78},{"type":"Vector","x":59,"y":77},{"type":"Vector","x":59,"y":27}]},{"action":"Shape","line":23,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":60,"y":78},{"type":"Vector","x":8,"y":78},{"type":"Vector","x":9,"y":77},{"type":"Vector","x":59,"y":77}]},{"action":"Shape","line":24,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":8,"y":78},{"type":"Vector","x":8,"y":26},{"type":"Vector","x":9,"y":27},{"type":"Vector","x":9,"y":77}]},{"action":"Shape","line":25,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":8,"y":96},{"type":"Vector","x":60,"y":96},{"type":"Vector","x":59,"y":97},{"type":"Vector","x":9,"y":97}]},{"action":"Shape","line":26,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":60,"y":96},{"type":"Vector","x":60,"y":148},{"type":"Vector","x":59,"y":147},{"type":"Vector","x":59,"y":97}]},{"action":"Shape","line":27,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":60,"y":148},{"type":"Vector","x":8,"y":148},{"type":"Vector","x":9,"y":147},{"type":"Vector","x":59,"y":147}]},{"action":"Shape","line":28,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":8,"y":148},{"type":"Vector","x":8,"y":96},{"type":"Vector","x":9,"y":97},{"type":"Vector","x":9,"y":147}]},{"action":"Shape","line":29,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":8,"y":148},{"type":"Vector","x":60,"y":148},{"type":"Vector","x":59,"y":149},{"type":"Vector","x":9,"y":149}]},{"action":"Shape","line":30,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":60,"y":148},{"type":"Vector","x":60,"y":200},{"type":"Vector","x":59,"y":199},{"type":"Vector","x":59,"y":149}]},{"action":"Shape","line":31,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":60,"y":200},{"type":"Vector","x":8,"y":200},{"type":"Vector","x":9,"y":199},{"type":"Vector","x":59,"y":199}]},{"action":"Shape","line":32,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":8,"y":200},{"type":"Vector","x":8,"y":148},{"type":"Vector","x":9,"y":149},{"type":"Vector","x":9,"y":199}]}],"/tests/reftests/images/images.html":[{"action":"Window","line":1,"width":800,"height":703},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":703,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":433},{"type":"Vector","x":83,"y":433},{"type":"Vector","x":83,"y":508},{"type":"Vector","x":8,"y":508}]]},{"action":"Draw image","line":5,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Clip","line":6,"path":[[{"type":"Vector","x":87,"y":108},{"type":"Vector","x":137,"y":108},{"type":"Vector","x":137,"y":508},{"type":"Vector","x":87,"y":508}]]},{"action":"Draw image","line":7,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Clip","line":8,"path":[[{"type":"Vector","x":141,"y":8},{"type":"Vector","x":641,"y":8},{"type":"Vector","x":641,"y":508},{"type":"Vector","x":141,"y":508}]]},{"action":"Draw image","line":9,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Clip","line":10,"path":[[{"type":"BezierCurve","x0":645,"y0":458,"x1":695,"y1":408,"cx0":645,"cy0":430,"cx1":667,"cy1":408},{"type":"BezierCurve","x0":695,"y0":408,"x1":745,"y1":458,"cx0":723,"cy0":408,"cx1":745,"cy1":430},{"type":"BezierCurve","x0":745,"y0":458,"x1":695,"y1":508,"cx0":745,"cy0":486,"cx1":723,"cy1":508},{"type":"BezierCurve","x0":695,"y0":508,"x1":645,"y1":458,"cx0":667,"cy0":508,"cx1":645,"cy1":486}]]},{"action":"Draw image","line":11,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Clip","line":12,"path":[[{"type":"Vector","x":8,"y":597},{"type":"Vector","x":508,"y":597},{"type":"Vector","x":508,"y":637},{"type":"Vector","x":8,"y":637}]]},{"action":"Draw image","line":13,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Shape","line":14,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":512,"y":512},{"type":"Vector","x":637,"y":512},{"type":"Vector","x":632,"y":517},{"type":"Vector","x":517,"y":517}]},{"action":"Shape","line":15,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":637,"y":512},{"type":"Vector","x":637,"y":637},{"type":"Vector","x":632,"y":632},{"type":"Vector","x":632,"y":517}]},{"action":"Shape","line":16,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":637,"y":637},{"type":"Vector","x":512,"y":637},{"type":"Vector","x":517,"y":632},{"type":"Vector","x":632,"y":632}]},{"action":"Shape","line":17,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":512,"y":637},{"type":"Vector","x":512,"y":512},{"type":"Vector","x":517,"y":517},{"type":"Vector","x":517,"y":632}]},{"action":"Clip","line":18,"path":[[{"type":"Vector","x":517,"y":517},{"type":"Vector","x":632,"y":517},{"type":"Vector","x":632,"y":632},{"type":"Vector","x":517,"y":632}]]},{"action":"Draw image","line":19,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Shape","line":20,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":641,"y":537},{"type":"Vector","x":716,"y":537},{"type":"Vector","x":716,"y":542},{"type":"Vector","x":641,"y":542}]},{"action":"Clip","line":21,"path":[[{"type":"Vector","x":641,"y":542},{"type":"Vector","x":716,"y":542},{"type":"Vector","x":716,"y":637},{"type":"Vector","x":641,"y":637}]]},{"action":"Draw image","line":22,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Shape","line":23,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":720,"y":562},{"type":"Vector","x":770,"y":562},{"type":"Vector","x":770,"y":567},{"type":"Vector","x":720,"y":567}]},{"action":"Clip","line":24,"path":[[{"type":"Vector","x":720,"y":567},{"type":"Vector","x":770,"y":567},{"type":"Vector","x":770,"y":637},{"type":"Vector","x":720,"y":637}]]},{"action":"Draw image","line":25,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Shape","line":26,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":641},{"type":"Vector","x":58,"y":641},{"type":"Vector","x":58,"y":646},{"type":"Vector","x":8,"y":646}]},{"action":"Clip","line":27,"path":[[{"type":"Vector","x":8,"y":646},{"type":"Vector","x":58,"y":646},{"type":"Vector","x":58,"y":691},{"type":"Vector","x":8,"y":691}]]},{"action":"Draw image","line":28,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Shape","line":29,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":62,"y":689},{"type":"Vector","x":64,"y":689},{"type":"Vector","x":63,"y":690},{"type":"Vector","x":63,"y":690}]},{"action":"Shape","line":30,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":64,"y":689},{"type":"Vector","x":64,"y":691},{"type":"Vector","x":63,"y":690},{"type":"Vector","x":63,"y":690}]},{"action":"Shape","line":31,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":64,"y":691},{"type":"Vector","x":62,"y":691},{"type":"Vector","x":63,"y":690},{"type":"Vector","x":63,"y":690}]},{"action":"Shape","line":32,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":62,"y":691},{"type":"Vector","x":62,"y":689},{"type":"Vector","x":63,"y":690},{"type":"Vector","x":63,"y":690}]},{"action":"Clip","line":33,"path":[[{"type":"Vector","x":63,"y":690},{"type":"Vector","x":63,"y":690},{"type":"Vector","x":63,"y":690},{"type":"Vector","x":63,"y":690}]]},{"action":"Draw image","line":34,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Clip","line":35,"path":[[{"type":"Vector","x":68,"y":691},{"type":"Vector","x":68,"y":691},{"type":"Vector","x":68,"y":691},{"type":"Vector","x":68,"y":691}]]},{"action":"Draw image","line":36,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75}],"/tests/reftests/images/svg/base64.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":8,"text":"Inline","line":5},{"action":"T","x":51,"y":8,"text":"svg","line":6},{"action":"T","x":80,"y":8,"text":"image:","line":7},{"action":"Clip","line":8,"path":[[{"type":"Vector","x":8,"y":26},{"type":"Vector","x":208,"y":26},{"type":"Vector","x":208,"y":226},{"type":"Vector","x":8,"y":226}]]},{"action":"Draw image","line":9,"imageSrc":"/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53","sx":0,"xy":0,"sw":306,"sh":296,"dx":0,"dy":0,"dw":306,"dh":296}],"/tests/reftests/images/svg/external.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":8,"text":"SVG","line":5},{"action":"T","x":46,"y":8,"text":"taints","line":6},{"action":"T","x":89,"y":8,"text":"image:","line":7},{"action":"Clip","line":8,"path":[[{"type":"Vector","x":8,"y":26},{"type":"Vector","x":666,"y":26},{"type":"Vector","x":666,"y":363},{"type":"Vector","x":8,"y":363}]]},{"action":"Draw image","line":9,"imageSrc":"/tests/assets/image.svg","sx":0,"xy":0,"sw":658,"sh":337,"dx":0,"dy":0,"dw":658,"dh":337}],"/tests/reftests/images/svg/inline.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":8,"text":"Inline","line":5},{"action":"T","x":51,"y":8,"text":"svg","line":6},{"action":"T","x":80,"y":8,"text":"image:","line":7}],"/tests/reftests/images/svg/native_only.html":[{"action":"Window","line":1,"width":800,"height":656},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":656,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":666,"y":8},{"type":"Vector","x":666,"y":345},{"type":"Vector","x":8,"y":345}]]},{"action":"Draw image","line":5,"imageSrc":"/tests/assets/image.svg","sx":0,"xy":0,"sw":658,"sh":337,"dx":0,"dy":0,"dw":658,"dh":337},{"action":"Clip","line":6,"path":[[{"type":"Vector","x":523,"y":445},{"type":"Vector","x":723,"y":445},{"type":"Vector","x":723,"y":645},{"type":"Vector","x":523,"y":645}]]},{"action":"Draw image","line":7,"imageSrc":"/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53","sx":0,"xy":0,"sw":306,"sh":296,"dx":0,"dy":0,"dw":306,"dh":296}],"/tests/reftests/images/svg/node.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":8,"text":"SVG","line":5},{"action":"T","x":46,"y":8,"text":"node","line":6},{"action":"T","x":86,"y":8,"text":"image:","line":7}],"/tests/reftests/list/decimal-leading-zero.html":[{"action":"Window","line":1,"width":800,"height":5016},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":5016,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":22,"text":"1","line":5},{"action":"Text","line":6,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":72,"text":"2","line":7},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":122,"text":"3","line":9},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":172,"text":"4","line":11},{"action":"Text","line":12,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":222,"text":"5","line":13},{"action":"Text","line":14,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":272,"text":"6","line":15},{"action":"Text","line":16,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":322,"text":"7","line":17},{"action":"Text","line":18,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":372,"text":"8","line":19},{"action":"Text","line":20,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":422,"text":"9","line":21},{"action":"Text","line":22,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":472,"text":"10","line":23},{"action":"Text","line":24,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":522,"text":"11","line":25},{"action":"Text","line":26,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":572,"text":"12","line":27},{"action":"Text","line":28,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":622,"text":"13","line":29},{"action":"Text","line":30,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":672,"text":"14","line":31},{"action":"Text","line":32,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":722,"text":"15","line":33},{"action":"Text","line":34,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":772,"text":"16","line":35},{"action":"Text","line":36,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":822,"text":"17","line":37},{"action":"Text","line":38,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":872,"text":"18","line":39},{"action":"Text","line":40,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":922,"text":"19","line":41},{"action":"Text","line":42,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":972,"text":"20","line":43},{"action":"Text","line":44,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1022,"text":"21","line":45},{"action":"Text","line":46,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1072,"text":"22","line":47},{"action":"Text","line":48,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1122,"text":"23","line":49},{"action":"Text","line":50,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1172,"text":"24","line":51},{"action":"Text","line":52,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1222,"text":"25","line":53},{"action":"Text","line":54,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1272,"text":"26","line":55},{"action":"Text","line":56,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1322,"text":"27","line":57},{"action":"Text","line":58,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1372,"text":"28","line":59},{"action":"Text","line":60,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1422,"text":"29","line":61},{"action":"Text","line":62,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1472,"text":"30","line":63},{"action":"Text","line":64,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1522,"text":"31","line":65},{"action":"Text","line":66,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1572,"text":"32","line":67},{"action":"Text","line":68,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1622,"text":"33","line":69},{"action":"Text","line":70,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1672,"text":"34","line":71},{"action":"Text","line":72,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1722,"text":"35","line":73},{"action":"Text","line":74,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1772,"text":"36","line":75},{"action":"Text","line":76,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1822,"text":"37","line":77},{"action":"Text","line":78,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1872,"text":"38","line":79},{"action":"Text","line":80,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1922,"text":"39","line":81},{"action":"Text","line":82,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1972,"text":"40","line":83},{"action":"Text","line":84,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2022,"text":"41","line":85},{"action":"Text","line":86,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2072,"text":"42","line":87},{"action":"Text","line":88,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2122,"text":"43","line":89},{"action":"Text","line":90,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2172,"text":"44","line":91},{"action":"Text","line":92,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2222,"text":"45","line":93},{"action":"Text","line":94,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2272,"text":"46","line":95},{"action":"Text","line":96,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2322,"text":"47","line":97},{"action":"Text","line":98,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2372,"text":"48","line":99},{"action":"Text","line":100,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2422,"text":"49","line":101},{"action":"Text","line":102,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2472,"text":"50","line":103},{"action":"Text","line":104,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2522,"text":"51","line":105},{"action":"Text","line":106,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2572,"text":"52","line":107},{"action":"Text","line":108,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2622,"text":"53","line":109},{"action":"Text","line":110,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2672,"text":"54","line":111},{"action":"Text","line":112,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2722,"text":"55","line":113},{"action":"Text","line":114,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2772,"text":"56","line":115},{"action":"Text","line":116,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2822,"text":"57","line":117},{"action":"Text","line":118,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2872,"text":"58","line":119},{"action":"Text","line":120,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2922,"text":"59","line":121},{"action":"Text","line":122,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2972,"text":"60","line":123},{"action":"Text","line":124,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3022,"text":"61","line":125},{"action":"Text","line":126,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3072,"text":"62","line":127},{"action":"Text","line":128,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3122,"text":"63","line":129},{"action":"Text","line":130,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3172,"text":"64","line":131},{"action":"Text","line":132,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3222,"text":"65","line":133},{"action":"Text","line":134,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3272,"text":"66","line":135},{"action":"Text","line":136,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3322,"text":"67","line":137},{"action":"Text","line":138,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3372,"text":"68","line":139},{"action":"Text","line":140,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3422,"text":"69","line":141},{"action":"Text","line":142,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3472,"text":"70","line":143},{"action":"Text","line":144,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3522,"text":"71","line":145},{"action":"Text","line":146,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3572,"text":"72","line":147},{"action":"Text","line":148,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3622,"text":"73","line":149},{"action":"Text","line":150,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3672,"text":"74","line":151},{"action":"Text","line":152,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3722,"text":"75","line":153},{"action":"Text","line":154,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3772,"text":"76","line":155},{"action":"Text","line":156,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3822,"text":"77","line":157},{"action":"Text","line":158,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3872,"text":"78","line":159},{"action":"Text","line":160,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3922,"text":"79","line":161},{"action":"Text","line":162,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3972,"text":"80","line":163},{"action":"Text","line":164,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4022,"text":"81","line":165},{"action":"Text","line":166,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4072,"text":"82","line":167},{"action":"Text","line":168,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4122,"text":"83","line":169},{"action":"Text","line":170,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4172,"text":"84","line":171},{"action":"Text","line":172,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4222,"text":"85","line":173},{"action":"Text","line":174,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4272,"text":"86","line":175},{"action":"Text","line":176,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4322,"text":"87","line":177},{"action":"Text","line":178,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4372,"text":"88","line":179},{"action":"Text","line":180,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4422,"text":"89","line":181},{"action":"Text","line":182,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4472,"text":"90","line":183},{"action":"Text","line":184,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4522,"text":"91","line":185},{"action":"Text","line":186,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4572,"text":"92","line":187},{"action":"Text","line":188,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4622,"text":"93","line":189},{"action":"Text","line":190,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4672,"text":"94","line":191},{"action":"Text","line":192,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4722,"text":"95","line":193},{"action":"Text","line":194,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4772,"text":"96","line":195},{"action":"Text","line":196,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4822,"text":"97","line":197},{"action":"Text","line":198,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4872,"text":"98","line":199},{"action":"Text","line":200,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4922,"text":"99","line":201},{"action":"Text","line":202,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":92,"y":4972,"text":"100","line":203}],"/tests/reftests/list/decimal.html":[{"action":"Window","line":1,"width":800,"height":5016},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":5016,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":22,"text":"1","line":5},{"action":"Text","line":6,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":72,"text":"2","line":7},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":122,"text":"3","line":9},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":172,"text":"4","line":11},{"action":"Text","line":12,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":222,"text":"5","line":13},{"action":"Text","line":14,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":272,"text":"6","line":15},{"action":"Text","line":16,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":322,"text":"7","line":17},{"action":"Text","line":18,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":372,"text":"8","line":19},{"action":"Text","line":20,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":422,"text":"9","line":21},{"action":"Text","line":22,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":472,"text":"10","line":23},{"action":"Text","line":24,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":522,"text":"11","line":25},{"action":"Text","line":26,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":572,"text":"12","line":27},{"action":"Text","line":28,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":622,"text":"13","line":29},{"action":"Text","line":30,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":672,"text":"14","line":31},{"action":"Text","line":32,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":722,"text":"15","line":33},{"action":"Text","line":34,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":772,"text":"16","line":35},{"action":"Text","line":36,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":822,"text":"17","line":37},{"action":"Text","line":38,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":872,"text":"18","line":39},{"action":"Text","line":40,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":922,"text":"19","line":41},{"action":"Text","line":42,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":972,"text":"20","line":43},{"action":"Text","line":44,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1022,"text":"21","line":45},{"action":"Text","line":46,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1072,"text":"22","line":47},{"action":"Text","line":48,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1122,"text":"23","line":49},{"action":"Text","line":50,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1172,"text":"24","line":51},{"action":"Text","line":52,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1222,"text":"25","line":53},{"action":"Text","line":54,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1272,"text":"26","line":55},{"action":"Text","line":56,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1322,"text":"27","line":57},{"action":"Text","line":58,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1372,"text":"28","line":59},{"action":"Text","line":60,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1422,"text":"29","line":61},{"action":"Text","line":62,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1472,"text":"30","line":63},{"action":"Text","line":64,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1522,"text":"31","line":65},{"action":"Text","line":66,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1572,"text":"32","line":67},{"action":"Text","line":68,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1622,"text":"33","line":69},{"action":"Text","line":70,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1672,"text":"34","line":71},{"action":"Text","line":72,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1722,"text":"35","line":73},{"action":"Text","line":74,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1772,"text":"36","line":75},{"action":"Text","line":76,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1822,"text":"37","line":77},{"action":"Text","line":78,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1872,"text":"38","line":79},{"action":"Text","line":80,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1922,"text":"39","line":81},{"action":"Text","line":82,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1972,"text":"40","line":83},{"action":"Text","line":84,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2022,"text":"41","line":85},{"action":"Text","line":86,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2072,"text":"42","line":87},{"action":"Text","line":88,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2122,"text":"43","line":89},{"action":"Text","line":90,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2172,"text":"44","line":91},{"action":"Text","line":92,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2222,"text":"45","line":93},{"action":"Text","line":94,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2272,"text":"46","line":95},{"action":"Text","line":96,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2322,"text":"47","line":97},{"action":"Text","line":98,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2372,"text":"48","line":99},{"action":"Text","line":100,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2422,"text":"49","line":101},{"action":"Text","line":102,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2472,"text":"50","line":103},{"action":"Text","line":104,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2522,"text":"51","line":105},{"action":"Text","line":106,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2572,"text":"52","line":107},{"action":"Text","line":108,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2622,"text":"53","line":109},{"action":"Text","line":110,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2672,"text":"54","line":111},{"action":"Text","line":112,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2722,"text":"55","line":113},{"action":"Text","line":114,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2772,"text":"56","line":115},{"action":"Text","line":116,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2822,"text":"57","line":117},{"action":"Text","line":118,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2872,"text":"58","line":119},{"action":"Text","line":120,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2922,"text":"59","line":121},{"action":"Text","line":122,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2972,"text":"60","line":123},{"action":"Text","line":124,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3022,"text":"61","line":125},{"action":"Text","line":126,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3072,"text":"62","line":127},{"action":"Text","line":128,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3122,"text":"63","line":129},{"action":"Text","line":130,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3172,"text":"64","line":131},{"action":"Text","line":132,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3222,"text":"65","line":133},{"action":"Text","line":134,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3272,"text":"66","line":135},{"action":"Text","line":136,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3322,"text":"67","line":137},{"action":"Text","line":138,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3372,"text":"68","line":139},{"action":"Text","line":140,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3422,"text":"69","line":141},{"action":"Text","line":142,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3472,"text":"70","line":143},{"action":"Text","line":144,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3522,"text":"71","line":145},{"action":"Text","line":146,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3572,"text":"72","line":147},{"action":"Text","line":148,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3622,"text":"73","line":149},{"action":"Text","line":150,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3672,"text":"74","line":151},{"action":"Text","line":152,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3722,"text":"75","line":153},{"action":"Text","line":154,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3772,"text":"76","line":155},{"action":"Text","line":156,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3822,"text":"77","line":157},{"action":"Text","line":158,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3872,"text":"78","line":159},{"action":"Text","line":160,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3922,"text":"79","line":161},{"action":"Text","line":162,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3972,"text":"80","line":163},{"action":"Text","line":164,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4022,"text":"81","line":165},{"action":"Text","line":166,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4072,"text":"82","line":167},{"action":"Text","line":168,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4122,"text":"83","line":169},{"action":"Text","line":170,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4172,"text":"84","line":171},{"action":"Text","line":172,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4222,"text":"85","line":173},{"action":"Text","line":174,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4272,"text":"86","line":175},{"action":"Text","line":176,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4322,"text":"87","line":177},{"action":"Text","line":178,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4372,"text":"88","line":179},{"action":"Text","line":180,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4422,"text":"89","line":181},{"action":"Text","line":182,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4472,"text":"90","line":183},{"action":"Text","line":184,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4522,"text":"91","line":185},{"action":"Text","line":186,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4572,"text":"92","line":187},{"action":"Text","line":188,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4622,"text":"93","line":189},{"action":"Text","line":190,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4672,"text":"94","line":191},{"action":"Text","line":192,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4722,"text":"95","line":193},{"action":"Text","line":194,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4772,"text":"96","line":195},{"action":"Text","line":196,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4822,"text":"97","line":197},{"action":"Text","line":198,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4872,"text":"98","line":199},{"action":"Text","line":200,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":4922,"text":"99","line":201},{"action":"Text","line":202,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":92,"y":4972,"text":"100","line":203}],"/tests/reftests/list/lower-alpha.html":[{"action":"Window","line":1,"width":800,"height":5016},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":5016,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":22,"text":"1","line":5},{"action":"Text","line":6,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":72,"text":"2","line":7},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":69,"y":122,"text":"3","line":9},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":172,"text":"4","line":11},{"action":"Text","line":12,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":222,"text":"5","line":13},{"action":"Text","line":14,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":65,"y":272,"text":"6","line":15},{"action":"Text","line":16,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":322,"text":"7","line":17},{"action":"Text","line":18,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":372,"text":"8","line":19},{"action":"Text","line":20,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":64,"y":422,"text":"9","line":21},{"action":"Text","line":22,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":64,"y":472,"text":"10","line":23},{"action":"Text","line":24,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":69,"y":522,"text":"11","line":25},{"action":"Text","line":26,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":64,"y":572,"text":"12","line":27},{"action":"Text","line":28,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":76,"y":622,"text":"13","line":29},{"action":"Text","line":30,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":672,"text":"14","line":31},{"action":"Text","line":32,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":722,"text":"15","line":33},{"action":"Text","line":34,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":772,"text":"16","line":35},{"action":"Text","line":36,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":822,"text":"17","line":37},{"action":"Text","line":38,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":66,"y":872,"text":"18","line":39},{"action":"Text","line":40,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":69,"y":922,"text":"19","line":41},{"action":"Text","line":42,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":65,"y":972,"text":"20","line":43},{"action":"Text","line":44,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":1022,"text":"21","line":45},{"action":"Text","line":46,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":69,"y":1072,"text":"22","line":47},{"action":"Text","line":48,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":74,"y":1122,"text":"23","line":49},{"action":"Text","line":50,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":69,"y":1172,"text":"24","line":51},{"action":"Text","line":52,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":69,"y":1222,"text":"25","line":53},{"action":"Text","line":54,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":69,"y":1272,"text":"26","line":55},{"action":"Text","line":56,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1322,"text":"27","line":57},{"action":"Text","line":58,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1372,"text":"28","line":59},{"action":"Text","line":60,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":1422,"text":"29","line":61},{"action":"Text","line":62,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1472,"text":"30","line":63},{"action":"Text","line":64,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1522,"text":"31","line":65},{"action":"Text","line":66,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":76,"y":1572,"text":"32","line":67},{"action":"Text","line":68,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1622,"text":"33","line":69},{"action":"Text","line":70,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1672,"text":"34","line":71},{"action":"Text","line":72,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":75,"y":1722,"text":"35","line":73},{"action":"Text","line":74,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":75,"y":1772,"text":"36","line":75},{"action":"Text","line":76,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":1822,"text":"37","line":77},{"action":"Text","line":78,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":75,"y":1872,"text":"38","line":79},{"action":"Text","line":80,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":87,"y":1922,"text":"39","line":81},{"action":"Text","line":82,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":1972,"text":"40","line":83},{"action":"Text","line":84,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2022,"text":"41","line":85},{"action":"Text","line":86,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2072,"text":"42","line":87},{"action":"Text","line":88,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2122,"text":"43","line":89},{"action":"Text","line":90,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":77,"y":2172,"text":"44","line":91},{"action":"Text","line":92,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":2222,"text":"45","line":93},{"action":"Text","line":94,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":76,"y":2272,"text":"46","line":95},{"action":"Text","line":96,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2322,"text":"47","line":97},{"action":"Text","line":98,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":2372,"text":"48","line":99},{"action":"Text","line":100,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":85,"y":2422,"text":"49","line":101},{"action":"Text","line":102,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":2472,"text":"50","line":103},{"action":"Text","line":104,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":2522,"text":"51","line":105},{"action":"Text","line":106,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":2572,"text":"52","line":107},{"action":"Text","line":108,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2622,"text":"53","line":109},{"action":"Text","line":110,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2672,"text":"54","line":111},{"action":"Text","line":112,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":2722,"text":"55","line":113},{"action":"Text","line":114,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2772,"text":"56","line":115},{"action":"Text","line":116,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2822,"text":"57","line":117},{"action":"Text","line":118,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":76,"y":2872,"text":"58","line":119},{"action":"Text","line":120,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2922,"text":"59","line":121},{"action":"Text","line":122,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2972,"text":"60","line":123},{"action":"Text","line":124,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":75,"y":3022,"text":"61","line":125},{"action":"Text","line":126,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":75,"y":3072,"text":"62","line":127},{"action":"Text","line":128,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":3122,"text":"63","line":129},{"action":"Text","line":130,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":75,"y":3172,"text":"64","line":131},{"action":"Text","line":132,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":87,"y":3222,"text":"65","line":133},{"action":"Text","line":134,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3272,"text":"66","line":135},{"action":"Text","line":136,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3322,"text":"67","line":137},{"action":"Text","line":138,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3372,"text":"68","line":139},{"action":"Text","line":140,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3422,"text":"69","line":141},{"action":"Text","line":142,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":77,"y":3472,"text":"70","line":143},{"action":"Text","line":144,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":3522,"text":"71","line":145},{"action":"Text","line":146,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":76,"y":3572,"text":"72","line":147},{"action":"Text","line":148,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":3622,"text":"73","line":149},{"action":"Text","line":150,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":3672,"text":"74","line":151},{"action":"Text","line":152,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":85,"y":3722,"text":"75","line":153},{"action":"Text","line":154,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":3772,"text":"76","line":155},{"action":"Text","line":156,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":3822,"text":"77","line":157},{"action":"Text","line":158,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":3872,"text":"78","line":159},{"action":"Text","line":160,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":3922,"text":"79","line":161},{"action":"Text","line":162,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":3972,"text":"80","line":163},{"action":"Text","line":164,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":79,"y":4022,"text":"81","line":165},{"action":"Text","line":166,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":4072,"text":"82","line":167},{"action":"Text","line":168,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":4122,"text":"83","line":169},{"action":"Text","line":170,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":75,"y":4172,"text":"84","line":171},{"action":"Text","line":172,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":4222,"text":"85","line":173},{"action":"Text","line":174,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":4272,"text":"86","line":175},{"action":"Text","line":176,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":74,"y":4322,"text":"87","line":177},{"action":"Text","line":178,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":74,"y":4372,"text":"88","line":179},{"action":"Text","line":180,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":79,"y":4422,"text":"89","line":181},{"action":"Text","line":182,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":74,"y":4472,"text":"90","line":183},{"action":"Text","line":184,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":86,"y":4522,"text":"91","line":185},{"action":"Text","line":186,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":4572,"text":"92","line":187},{"action":"Text","line":188,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":4622,"text":"93","line":189},{"action":"Text","line":190,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":4672,"text":"94","line":191},{"action":"Text","line":192,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":4722,"text":"95","line":193},{"action":"Text","line":194,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":76,"y":4772,"text":"96","line":195},{"action":"Text","line":196,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":79,"y":4822,"text":"97","line":197},{"action":"Text","line":198,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":75,"y":4872,"text":"98","line":199},{"action":"Text","line":200,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":80,"y":4922,"text":"99","line":201},{"action":"Text","line":202,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":79,"y":4972,"text":"100","line":203}],"/tests/reftests/list/upper-roman.html":[{"action":"Window","line":1,"width":800,"height":5416},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":5416,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":65,"y":22,"text":"1","line":5},{"action":"Text","line":6,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":72,"text":"2","line":7},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":76,"y":122,"text":"3","line":9},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":78,"y":172,"text":"4","line":11},{"action":"Text","line":12,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":72,"y":222,"text":"5","line":13},{"action":"Text","line":14,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":78,"y":272,"text":"6","line":15},{"action":"Text","line":16,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":84,"y":322,"text":"7","line":17},{"action":"Text","line":18,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":89,"y":372,"text":"8","line":19},{"action":"Text","line":20,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":78,"y":422,"text":"9","line":21},{"action":"Text","line":22,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":72,"y":472,"text":"10","line":23},{"action":"Text","line":24,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":78,"y":522,"text":"11","line":25},{"action":"Text","line":26,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":84,"y":572,"text":"12","line":27},{"action":"Text","line":28,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":89,"y":622,"text":"13","line":29},{"action":"Text","line":30,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":91,"y":672,"text":"14","line":31},{"action":"Text","line":32,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":86,"y":722,"text":"15","line":33},{"action":"Text","line":34,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":91,"y":772,"text":"16","line":35},{"action":"Text","line":36,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":97,"y":822,"text":"17","line":37},{"action":"Text","line":38,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":102,"y":872,"text":"18","line":39},{"action":"Text","line":40,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":91,"y":922,"text":"19","line":41},{"action":"Text","line":42,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":86,"y":972,"text":"20","line":43},{"action":"Text","line":44,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":91,"y":1022,"text":"21","line":45},{"action":"Text","line":46,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":97,"y":1072,"text":"22","line":47},{"action":"Text","line":48,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":102,"y":1122,"text":"23","line":49},{"action":"Text","line":50,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":105,"y":1172,"text":"24","line":51},{"action":"Text","line":52,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":99,"y":1222,"text":"25","line":53},{"action":"Text","line":54,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":105,"y":1272,"text":"26","line":55},{"action":"Text","line":56,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":110,"y":1322,"text":"27","line":57},{"action":"Text","line":58,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":116,"y":1372,"text":"28","line":59},{"action":"Text","line":60,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":105,"y":1422,"text":"29","line":61},{"action":"Text","line":62,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":99,"y":1472,"text":"30","line":63},{"action":"Text","line":64,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":105,"y":1522,"text":"31","line":65},{"action":"Text","line":66,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":110,"y":1572,"text":"32","line":67},{"action":"Text","line":68,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":116,"y":1622,"text":"33","line":69},{"action":"Text","line":70,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":118,"y":1672,"text":"34","line":71},{"action":"Text","line":72,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":112,"y":1722,"text":"35","line":73},{"action":"Text","line":74,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":118,"y":1772,"text":"36","line":75},{"action":"Text","line":76,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":124,"y":1822,"text":"37","line":77},{"action":"Text","line":78,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":48,"y":1922,"text":"38","line":79},{"action":"Text","line":80,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":118,"y":1972,"text":"39","line":81},{"action":"Text","line":82,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":84,"y":2022,"text":"40","line":83},{"action":"Text","line":84,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":89,"y":2072,"text":"41","line":85},{"action":"Text","line":86,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":95,"y":2122,"text":"42","line":87},{"action":"Text","line":88,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":100,"y":2172,"text":"43","line":89},{"action":"Text","line":90,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":102,"y":2222,"text":"44","line":91},{"action":"Text","line":92,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":95,"y":2272,"text":"45","line":93},{"action":"Text","line":94,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":101,"y":2322,"text":"46","line":95},{"action":"Text","line":96,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":107,"y":2372,"text":"47","line":97},{"action":"Text","line":98,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":112,"y":2422,"text":"48","line":99},{"action":"Text","line":100,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":102,"y":2472,"text":"49","line":101},{"action":"Text","line":102,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":70,"y":2522,"text":"50","line":103},{"action":"Text","line":104,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":76,"y":2572,"text":"51","line":105},{"action":"Text","line":106,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":81,"y":2622,"text":"52","line":107},{"action":"Text","line":108,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":87,"y":2672,"text":"53","line":109},{"action":"Text","line":110,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":89,"y":2722,"text":"54","line":111},{"action":"Text","line":112,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":82,"y":2772,"text":"55","line":113},{"action":"Text","line":114,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":88,"y":2822,"text":"56","line":115},{"action":"Text","line":116,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":93,"y":2872,"text":"57","line":117},{"action":"Text","line":118,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":99,"y":2922,"text":"58","line":119},{"action":"Text","line":120,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":89,"y":2972,"text":"59","line":121},{"action":"Text","line":122,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":84,"y":3022,"text":"60","line":123},{"action":"Text","line":124,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":89,"y":3072,"text":"61","line":125},{"action":"Text","line":126,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":95,"y":3122,"text":"62","line":127},{"action":"Text","line":128,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":100,"y":3172,"text":"63","line":129},{"action":"Text","line":130,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":102,"y":3222,"text":"64","line":131},{"action":"Text","line":132,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":97,"y":3272,"text":"65","line":133},{"action":"Text","line":134,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":102,"y":3322,"text":"66","line":135},{"action":"Text","line":136,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":108,"y":3372,"text":"67","line":137},{"action":"Text","line":138,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":114,"y":3422,"text":"68","line":139},{"action":"Text","line":140,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":102,"y":3472,"text":"69","line":141},{"action":"Text","line":142,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":97,"y":3522,"text":"70","line":143},{"action":"Text","line":144,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":102,"y":3572,"text":"71","line":145},{"action":"Text","line":146,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":108,"y":3622,"text":"72","line":147},{"action":"Text","line":148,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":114,"y":3672,"text":"73","line":149},{"action":"Text","line":150,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":116,"y":3722,"text":"74","line":151},{"action":"Text","line":152,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":110,"y":3772,"text":"75","line":153},{"action":"Text","line":154,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":116,"y":3822,"text":"76","line":155},{"action":"Text","line":156,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":121,"y":3872,"text":"77","line":157},{"action":"Text","line":158,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":48,"y":3972,"text":"78","line":159},{"action":"Text","line":160,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":116,"y":4022,"text":"79","line":161},{"action":"Text","line":162,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":110,"y":4072,"text":"80","line":163},{"action":"Text","line":164,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":116,"y":4122,"text":"81","line":165},{"action":"Text","line":166,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":121,"y":4172,"text":"82","line":167},{"action":"Text","line":168,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":48,"y":4272,"text":"83","line":169},{"action":"Text","line":170,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":48,"y":4372,"text":"84","line":171},{"action":"Text","line":172,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":124,"y":4422,"text":"85","line":173},{"action":"Text","line":174,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":48,"y":4522,"text":"86","line":175},{"action":"Text","line":176,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":48,"y":4622,"text":"87","line":177},{"action":"Text","line":178,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":48,"y":4722,"text":"88","line":179},{"action":"Text","line":180,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":48,"y":4822,"text":"89","line":181},{"action":"Text","line":182,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":87,"y":4872,"text":"90","line":183},{"action":"Text","line":184,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":92,"y":4922,"text":"91","line":185},{"action":"Text","line":186,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":98,"y":4972,"text":"92","line":187},{"action":"Text","line":188,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":104,"y":5022,"text":"93","line":189},{"action":"Text","line":190,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":106,"y":5072,"text":"94","line":191},{"action":"Text","line":192,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":100,"y":5122,"text":"95","line":193},{"action":"Text","line":194,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":106,"y":5172,"text":"96","line":195},{"action":"Text","line":196,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":111,"y":5222,"text":"97","line":197},{"action":"Text","line":198,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":117,"y":5272,"text":"98","line":199},{"action":"Text","line":200,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":106,"y":5322,"text":"99","line":201},{"action":"Text","line":202,"font":"rgb(0,0,0) normal normal 400 20px Arial"},{"action":"T","x":74,"y":5372,"text":"100","line":203}],"/tests/reftests/overflow/overflow-transform.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Shape","line":4,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":312,"y":8},{"type":"Vector","x":310,"y":10},{"type":"Vector","x":10,"y":10}]},{"action":"Shape","line":5,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":312,"y":8},{"type":"Vector","x":312,"y":312},{"type":"Vector","x":310,"y":310},{"type":"Vector","x":310,"y":10}]},{"action":"Shape","line":6,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":312,"y":312},{"type":"Vector","x":8,"y":312},{"type":"Vector","x":10,"y":310},{"type":"Vector","x":310,"y":310}]},{"action":"Shape","line":7,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":312},{"type":"Vector","x":8,"y":8},{"type":"Vector","x":10,"y":10},{"type":"Vector","x":10,"y":310}]},{"action":"Clip","line":8,"path":[[{"type":"Vector","x":10,"y":10},{"type":"Vector","x":310,"y":10},{"type":"Vector","x":310,"y":310},{"type":"Vector","x":10,"y":310}]]},{"action":"Clip","line":9,"path":[[{"type":"Vector","x":10,"y":10},{"type":"Vector","x":310,"y":10},{"type":"Vector","x":310,"y":310},{"type":"Vector","x":10,"y":310}]]},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":10,"y":26,"text":"Le","line":11},{"action":"T","x":32,"y":26,"text":"Lorem","line":12},{"action":"T","x":82,"y":26,"text":"Ipsum","line":13},{"action":"T","x":130,"y":26,"text":"est","line":14},{"action":"T","x":156,"y":26,"text":"simplement","line":15},{"action":"T","x":242,"y":26,"text":"du","line":16},{"action":"T","x":264,"y":26,"text":"faux","line":17},{"action":"T","x":10,"y":42,"text":"texte","line":18},{"action":"T","x":49,"y":42,"text":"employé","line":19},{"action":"T","x":114,"y":42,"text":"dans","line":20},{"action":"T","x":153,"y":42,"text":"la","line":21},{"action":"T","x":170,"y":42,"text":"composition","line":22},{"action":"T","x":260,"y":42,"text":"et","line":23},{"action":"T","x":278,"y":42,"text":"la","line":24},{"action":"T","x":10,"y":59,"text":"mise","line":25},{"action":"T","x":48,"y":59,"text":"en","line":26},{"action":"T","x":70,"y":59,"text":"page","line":27},{"action":"T","x":110,"y":59,"text":"avant","line":28},{"action":"T","x":154,"y":59,"text":"impression.","line":29},{"action":"T","x":240,"y":59,"text":"Le","line":30},{"action":"T","x":262,"y":59,"text":"Lorem","line":31},{"action":"T","x":10,"y":76,"text":"Ipsum","line":32},{"action":"T","x":58,"y":76,"text":"est","line":33},{"action":"T","x":84,"y":76,"text":"le","line":34},{"action":"T","x":101,"y":76,"text":"faux","line":35},{"action":"T","x":135,"y":76,"text":"texte","line":36},{"action":"T","x":174,"y":76,"text":"standard","line":37},{"action":"T","x":241,"y":76,"text":"de","line":38},{"action":"T","x":10,"y":93,"text":"l'imprimerie","line":39},{"action":"T","x":96,"y":93,"text":"depuis","line":40},{"action":"T","x":147,"y":93,"text":"les","line":41},{"action":"T","x":172,"y":93,"text":"années","line":42},{"action":"T","x":229,"y":93,"text":"1500,","line":43},{"action":"T","x":10,"y":110,"text":"quand","line":44},{"action":"T","x":59,"y":110,"text":"un","line":45},{"action":"T","x":81,"y":110,"text":"peintre","line":46},{"action":"T","x":134,"y":110,"text":"anonyme","line":47},{"action":"T","x":205,"y":110,"text":"assembla","line":48},{"action":"T","x":10,"y":126,"text":"ensemble","line":49},{"action":"T","x":84,"y":126,"text":"des","line":50},{"action":"T","x":114,"y":126,"text":"morceaux","line":51},{"action":"T","x":189,"y":126,"text":"de","line":52},{"action":"T","x":211,"y":126,"text":"texte","line":53},{"action":"T","x":250,"y":126,"text":"pour","line":54},{"action":"T","x":10,"y":143,"text":"réaliser","line":55},{"action":"T","x":67,"y":143,"text":"un","line":56},{"action":"T","x":89,"y":143,"text":"livre","line":57},{"action":"T","x":123,"y":143,"text":"spécimen","line":58},{"action":"T","x":196,"y":143,"text":"de","line":59},{"action":"T","x":218,"y":143,"text":"polices","line":60},{"action":"T","x":272,"y":143,"text":"de","line":61},{"action":"T","x":10,"y":160,"text":"texte.","line":62},{"action":"T","x":54,"y":160,"text":"Il","line":63},{"action":"T","x":66,"y":160,"text":"n'a","line":64},{"action":"T","x":91,"y":160,"text":"pas","line":65},{"action":"T","x":122,"y":160,"text":"fait","line":66},{"action":"T","x":147,"y":160,"text":"que","line":67},{"action":"T","x":178,"y":160,"text":"survivre","line":68},{"action":"T","x":239,"y":160,"text":"cinq","line":69},{"action":"T","x":10,"y":177,"text":"siècles,","line":70},{"action":"T","x":68,"y":177,"text":"mais","line":71},{"action":"T","x":106,"y":177,"text":"s'est","line":72},{"action":"T","x":143,"y":177,"text":"aussi","line":73},{"action":"T","x":185,"y":177,"text":"adapté","line":74},{"action":"T","x":238,"y":177,"text":"à","line":75},{"action":"T","x":251,"y":177,"text":"la","line":76},{"action":"T","x":10,"y":194,"text":"bureautique","line":77},{"action":"T","x":99,"y":194,"text":"informatique,","line":78},{"action":"T","x":196,"y":194,"text":"sans","line":79},{"action":"T","x":234,"y":194,"text":"que","line":80},{"action":"T","x":265,"y":194,"text":"son","line":81},{"action":"T","x":10,"y":210,"text":"contenu","line":82},{"action":"T","x":71,"y":210,"text":"n'en","line":83},{"action":"T","x":106,"y":210,"text":"soit","line":84},{"action":"T","x":135,"y":210,"text":"modifié.","line":85},{"action":"T","x":195,"y":210,"text":"Il","line":86},{"action":"T","x":208,"y":210,"text":"a","line":87},{"action":"T","x":221,"y":210,"text":"été","line":88},{"action":"T","x":10,"y":227,"text":"popularisé","line":89},{"action":"T","x":88,"y":227,"text":"dans","line":90},{"action":"T","x":128,"y":227,"text":"les","line":91},{"action":"T","x":152,"y":227,"text":"années","line":92},{"action":"T","x":209,"y":227,"text":"1960","line":93},{"action":"T","x":249,"y":227,"text":"grâce","line":94},{"action":"T","x":294,"y":227,"text":"à","line":95},{"action":"T","x":10,"y":244,"text":"la","line":96},{"action":"T","x":27,"y":244,"text":"vente","line":97},{"action":"T","x":70,"y":244,"text":"de","line":98},{"action":"T","x":93,"y":244,"text":"feuilles","line":99},{"action":"T","x":147,"y":244,"text":"Letraset","line":100},{"action":"T","x":209,"y":244,"text":"contenant","line":101},{"action":"T","x":284,"y":244,"text":"des","line":102},{"action":"T","x":10,"y":261,"text":"passages","line":103},{"action":"T","x":83,"y":261,"text":"du","line":104},{"action":"T","x":105,"y":261,"text":"Lorem","line":105},{"action":"T","x":155,"y":261,"text":"Ipsum,","line":106},{"action":"T","x":208,"y":261,"text":"et,","line":107},{"action":"T","x":230,"y":261,"text":"plus","line":108},{"action":"T","x":10,"y":278,"text":"récemment,","line":109},{"action":"T","x":99,"y":278,"text":"par","line":110},{"action":"T","x":126,"y":278,"text":"son","line":111},{"action":"T","x":157,"y":278,"text":"inclusion","line":112},{"action":"T","x":224,"y":278,"text":"dans","line":113},{"action":"T","x":262,"y":278,"text":"des","line":114},{"action":"T","x":10,"y":294,"text":"applications","line":115},{"action":"T","x":99,"y":294,"text":"de","line":116},{"action":"T","x":121,"y":294,"text":"mise","line":117},{"action":"T","x":160,"y":294,"text":"en","line":118},{"action":"T","x":182,"y":294,"text":"page","line":119},{"action":"T","x":222,"y":294,"text":"de","line":120},{"action":"T","x":244,"y":294,"text":"texte,","line":121},{"action":"T","x":10,"y":311,"text":"comme","line":122},{"action":"T","x":67,"y":311,"text":"Aldus","line":123},{"action":"T","x":111,"y":311,"text":"PageMaker.","line":124},{"action":"Transform","line":125,"x":91,"y":525,"matrix":"-0.92, -0.39, 0.39, -0.92, 0, 0"},{"action":"Clip","line":126,"path":[[{"type":"Vector","x":10,"y":10},{"type":"Vector","x":310,"y":10},{"type":"Vector","x":310,"y":310},{"type":"Vector","x":10,"y":310}]]},{"action":"Clip","line":127,"path":[[{"type":"Vector","x":-140,"y":215},{"type":"Vector","x":321,"y":215},{"type":"Vector","x":321,"y":835},{"type":"Vector","x":-140,"y":835}]]},{"action":"Fill","line":128,"color":"rgb(255,0,0)"},{"action":"Clip","line":129,"path":[[{"type":"Vector","x":10,"y":10},{"type":"Vector","x":310,"y":10},{"type":"Vector","x":310,"y":310},{"type":"Vector","x":10,"y":310}]]},{"action":"Transform","line":130,"x":268,"y":-94,"matrix":"-0.92, -0.39, 0.39, -0.92, 0, 0"},{"action":"Clip","line":131,"path":[[{"type":"Vector","x":10,"y":10},{"type":"Vector","x":310,"y":10},{"type":"Vector","x":310,"y":310},{"type":"Vector","x":10,"y":310}]]},{"action":"Clip","line":132,"path":[[{"type":"Vector","x":-47,"y":-402},{"type":"Vector","x":582,"y":-402},{"type":"Vector","x":582,"y":215},{"type":"Vector","x":-47,"y":215}]]},{"action":"Fill","line":133,"color":"rgb(255,0,255)"},{"action":"Clip","line":134,"path":[[{"type":"Vector","x":10,"y":10},{"type":"Vector","x":310,"y":10},{"type":"Vector","x":310,"y":310},{"type":"Vector","x":10,"y":310}]]}],"/tests/reftests/overflow/overflow.html":[{"action":"Window","line":1,"width":800,"height":632},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":632,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 700 32px Arial"},{"action":"T","x":8,"y":10,"text":"Overflow:","line":5},{"action":"T","x":164,"y":10,"text":"visible","line":6},{"action":"Clip","line":7,"path":[[{"type":"Vector","x":8,"y":48},{"type":"Vector","x":320,"y":48},{"type":"Vector","x":320,"y":260},{"type":"Vector","x":8,"y":260}]]},{"action":"Fill","line":8,"color":"rgb(204,204,204)"},{"action":"Shape","line":9,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":48},{"type":"Vector","x":320,"y":48},{"type":"Vector","x":314,"y":54},{"type":"Vector","x":14,"y":54}]},{"action":"Shape","line":10,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":320,"y":48},{"type":"Vector","x":320,"y":260},{"type":"Vector","x":314,"y":254},{"type":"Vector","x":314,"y":54}]},{"action":"Shape","line":11,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":320,"y":260},{"type":"Vector","x":8,"y":260},{"type":"Vector","x":14,"y":254},{"type":"Vector","x":314,"y":254}]},{"action":"Shape","line":12,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":260},{"type":"Vector","x":8,"y":48},{"type":"Vector","x":14,"y":54},{"type":"Vector","x":14,"y":254}]},{"action":"Text","line":13,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":14,"y":54,"text":"Lorem","line":14},{"action":"T","x":64,"y":54,"text":"Ipsum","line":15},{"action":"T","x":112,"y":54,"text":"is","line":16},{"action":"T","x":128,"y":54,"text":"simply","line":17},{"action":"T","x":178,"y":54,"text":"dummy","line":18},{"action":"T","x":234,"y":54,"text":"text","line":19},{"action":"T","x":265,"y":54,"text":"of","line":20},{"action":"T","x":282,"y":54,"text":"the","line":21},{"action":"T","x":14,"y":70,"text":"printing","line":22},{"action":"T","x":71,"y":70,"text":"and","line":23},{"action":"T","x":102,"y":70,"text":"typesetting","line":24},{"action":"T","x":184,"y":70,"text":"industry.","line":25},{"action":"T","x":248,"y":70,"text":"Lorem","line":26},{"action":"T","x":14,"y":87,"text":"Ipsum","line":27},{"action":"T","x":62,"y":87,"text":"has","line":28},{"action":"T","x":92,"y":87,"text":"been","line":29},{"action":"T","x":132,"y":87,"text":"the","line":30},{"action":"T","x":159,"y":87,"text":"industry's","line":31},{"action":"T","x":230,"y":87,"text":"standard","line":32},{"action":"T","x":14,"y":104,"text":"dummy","line":33},{"action":"T","x":71,"y":104,"text":"text","line":34},{"action":"T","x":101,"y":104,"text":"ever","line":35},{"action":"T","x":137,"y":104,"text":"since","line":36},{"action":"T","x":178,"y":104,"text":"the","line":37},{"action":"T","x":205,"y":104,"text":"1500s,","line":38},{"action":"T","x":258,"y":104,"text":"when","line":39},{"action":"T","x":14,"y":121,"text":"an","line":40},{"action":"T","x":36,"y":121,"text":"unknown","line":41},{"action":"T","x":105,"y":121,"text":"printer","line":42},{"action":"T","x":154,"y":121,"text":"took","line":43},{"action":"T","x":189,"y":121,"text":"a","line":44},{"action":"T","x":202,"y":121,"text":"galley","line":45},{"action":"T","x":249,"y":121,"text":"of","line":46},{"action":"T","x":267,"y":121,"text":"type","line":47},{"action":"T","x":14,"y":138,"text":"and","line":48},{"action":"T","x":45,"y":138,"text":"scrambled","line":49},{"action":"T","x":123,"y":138,"text":"it","line":50},{"action":"T","x":136,"y":138,"text":"to","line":51},{"action":"T","x":154,"y":138,"text":"make","line":52},{"action":"T","x":197,"y":138,"text":"a","line":53},{"action":"T","x":210,"y":138,"text":"type","line":54},{"action":"T","x":245,"y":138,"text":"specimen","line":55},{"action":"T","x":14,"y":154,"text":"book.","line":56},{"action":"T","x":58,"y":154,"text":"It","line":57},{"action":"T","x":71,"y":154,"text":"has","line":58},{"action":"T","x":101,"y":154,"text":"survived","line":59},{"action":"T","x":165,"y":154,"text":"not","line":60},{"action":"T","x":192,"y":154,"text":"only","line":61},{"action":"T","x":226,"y":154,"text":"five","line":62},{"action":"T","x":14,"y":171,"text":"centuries,","line":63},{"action":"T","x":88,"y":171,"text":"but","line":64},{"action":"T","x":114,"y":171,"text":"also","line":65},{"action":"T","x":148,"y":171,"text":"the","line":66},{"action":"T","x":175,"y":171,"text":"leap","line":67},{"action":"T","x":210,"y":171,"text":"into","line":68},{"action":"T","x":240,"y":171,"text":"electronic","line":69},{"action":"T","x":14,"y":188,"text":"typesetting,","line":70},{"action":"T","x":100,"y":188,"text":"remaining","line":71},{"action":"T","x":175,"y":188,"text":"essentially","line":72},{"action":"T","x":14,"y":205,"text":"unchanged.","line":73},{"action":"T","x":102,"y":205,"text":"It","line":74},{"action":"T","x":116,"y":205,"text":"was","line":75},{"action":"T","x":148,"y":205,"text":"popularised","line":76},{"action":"T","x":236,"y":205,"text":"in","line":77},{"action":"T","x":252,"y":205,"text":"the","line":78},{"action":"T","x":14,"y":222,"text":"1960s","line":79},{"action":"T","x":62,"y":222,"text":"with","line":80},{"action":"T","x":95,"y":222,"text":"the","line":81},{"action":"T","x":122,"y":222,"text":"release","line":82},{"action":"T","x":178,"y":222,"text":"of","line":83},{"action":"T","x":196,"y":222,"text":"Letraset","line":84},{"action":"T","x":258,"y":222,"text":"sheets","line":85},{"action":"T","x":14,"y":238,"text":"containing","line":86},{"action":"T","x":91,"y":238,"text":"Lorem","line":87},{"action":"T","x":141,"y":238,"text":"Ipsum","line":88},{"action":"T","x":189,"y":238,"text":"passages,","line":89},{"action":"T","x":266,"y":238,"text":"and","line":90},{"action":"T","x":14,"y":255,"text":"more","line":91},{"action":"T","x":55,"y":255,"text":"recently","line":92},{"action":"T","x":115,"y":255,"text":"with","line":93},{"action":"T","x":148,"y":255,"text":"desktop","line":94},{"action":"T","x":209,"y":255,"text":"publishing","line":95},{"action":"T","x":14,"y":272,"text":"software","line":96},{"action":"T","x":79,"y":272,"text":"like","line":97},{"action":"Text","line":98,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":245,"y":272,"text":"including","line":99},{"action":"T","x":14,"y":289,"text":"versions","line":100},{"action":"T","x":78,"y":289,"text":"of","line":101},{"action":"T","x":96,"y":289,"text":"Lorem","line":102},{"action":"T","x":146,"y":289,"text":"Ipsum.","line":103},{"action":"Text","line":104,"font":"rgb(0,0,0) normal normal 700 32px Arial"},{"action":"T","x":8,"y":322,"text":"Overflow:","line":105},{"action":"T","x":164,"y":322,"text":"hidden","line":106},{"action":"Clip","line":107,"path":[[{"type":"Vector","x":8,"y":360},{"type":"Vector","x":320,"y":360},{"type":"Vector","x":320,"y":572},{"type":"Vector","x":8,"y":572}]]},{"action":"Fill","line":108,"color":"rgb(204,204,204)"},{"action":"Shape","line":109,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":360},{"type":"Vector","x":320,"y":360},{"type":"Vector","x":314,"y":366},{"type":"Vector","x":14,"y":366}]},{"action":"Shape","line":110,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":320,"y":360},{"type":"Vector","x":320,"y":572},{"type":"Vector","x":314,"y":566},{"type":"Vector","x":314,"y":366}]},{"action":"Shape","line":111,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":320,"y":572},{"type":"Vector","x":8,"y":572},{"type":"Vector","x":14,"y":566},{"type":"Vector","x":314,"y":566}]},{"action":"Shape","line":112,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":572},{"type":"Vector","x":8,"y":360},{"type":"Vector","x":14,"y":366},{"type":"Vector","x":14,"y":566}]},{"action":"Clip","line":113,"path":[[{"type":"Vector","x":14,"y":366},{"type":"Vector","x":314,"y":366},{"type":"Vector","x":314,"y":566},{"type":"Vector","x":14,"y":566}]]},{"action":"Text","line":114,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":14,"y":366,"text":"Lorem","line":115},{"action":"T","x":64,"y":366,"text":"Ipsum","line":116},{"action":"T","x":112,"y":366,"text":"is","line":117},{"action":"T","x":128,"y":366,"text":"simply","line":118},{"action":"T","x":178,"y":366,"text":"dummy","line":119},{"action":"T","x":234,"y":366,"text":"text","line":120},{"action":"T","x":265,"y":366,"text":"of","line":121},{"action":"T","x":282,"y":366,"text":"the","line":122},{"action":"T","x":14,"y":382,"text":"printing","line":123},{"action":"T","x":71,"y":382,"text":"and","line":124},{"action":"T","x":102,"y":382,"text":"typesetting","line":125},{"action":"T","x":184,"y":382,"text":"industry.","line":126},{"action":"T","x":248,"y":382,"text":"Lorem","line":127},{"action":"T","x":14,"y":399,"text":"Ipsum","line":128},{"action":"T","x":62,"y":399,"text":"has","line":129},{"action":"T","x":92,"y":399,"text":"been","line":130},{"action":"T","x":132,"y":399,"text":"the","line":131},{"action":"T","x":159,"y":399,"text":"industry's","line":132},{"action":"T","x":230,"y":399,"text":"standard","line":133},{"action":"T","x":14,"y":416,"text":"dummy","line":134},{"action":"T","x":71,"y":416,"text":"text","line":135},{"action":"T","x":101,"y":416,"text":"ever","line":136},{"action":"T","x":137,"y":416,"text":"since","line":137},{"action":"T","x":178,"y":416,"text":"the","line":138},{"action":"T","x":205,"y":416,"text":"1500s,","line":139},{"action":"T","x":258,"y":416,"text":"when","line":140},{"action":"T","x":14,"y":433,"text":"an","line":141},{"action":"T","x":36,"y":433,"text":"unknown","line":142},{"action":"T","x":105,"y":433,"text":"printer","line":143},{"action":"T","x":154,"y":433,"text":"took","line":144},{"action":"T","x":189,"y":433,"text":"a","line":145},{"action":"T","x":202,"y":433,"text":"galley","line":146},{"action":"T","x":249,"y":433,"text":"of","line":147},{"action":"T","x":267,"y":433,"text":"type","line":148},{"action":"T","x":14,"y":450,"text":"and","line":149},{"action":"T","x":45,"y":450,"text":"scrambled","line":150},{"action":"T","x":123,"y":450,"text":"it","line":151},{"action":"T","x":136,"y":450,"text":"to","line":152},{"action":"T","x":154,"y":450,"text":"make","line":153},{"action":"T","x":197,"y":450,"text":"a","line":154},{"action":"T","x":210,"y":450,"text":"type","line":155},{"action":"T","x":245,"y":450,"text":"specimen","line":156},{"action":"T","x":14,"y":466,"text":"book.","line":157},{"action":"T","x":58,"y":466,"text":"It","line":158},{"action":"T","x":71,"y":466,"text":"has","line":159},{"action":"T","x":101,"y":466,"text":"survived","line":160},{"action":"T","x":165,"y":466,"text":"not","line":161},{"action":"T","x":192,"y":466,"text":"only","line":162},{"action":"T","x":226,"y":466,"text":"five","line":163},{"action":"T","x":14,"y":483,"text":"centuries,","line":164},{"action":"T","x":88,"y":483,"text":"but","line":165},{"action":"T","x":114,"y":483,"text":"also","line":166},{"action":"T","x":148,"y":483,"text":"the","line":167},{"action":"T","x":175,"y":483,"text":"leap","line":168},{"action":"T","x":210,"y":483,"text":"into","line":169},{"action":"T","x":240,"y":483,"text":"electronic","line":170},{"action":"T","x":14,"y":500,"text":"typesetting,","line":171},{"action":"T","x":100,"y":500,"text":"remaining","line":172},{"action":"T","x":175,"y":500,"text":"essentially","line":173},{"action":"T","x":14,"y":517,"text":"unchanged.","line":174},{"action":"T","x":102,"y":517,"text":"It","line":175},{"action":"T","x":116,"y":517,"text":"was","line":176},{"action":"T","x":148,"y":517,"text":"popularised","line":177},{"action":"T","x":236,"y":517,"text":"in","line":178},{"action":"T","x":252,"y":517,"text":"the","line":179},{"action":"T","x":14,"y":534,"text":"1960s","line":180},{"action":"T","x":62,"y":534,"text":"with","line":181},{"action":"T","x":95,"y":534,"text":"the","line":182},{"action":"T","x":122,"y":534,"text":"release","line":183},{"action":"T","x":178,"y":534,"text":"of","line":184},{"action":"Text","line":185,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":14,"y":825,"text":"Letraset","line":186},{"action":"T","x":76,"y":825,"text":"sheets","line":187},{"action":"T","x":128,"y":825,"text":"containing","line":188},{"action":"T","x":205,"y":825,"text":"Lorem","line":189},{"action":"T","x":255,"y":825,"text":"Ipsum","line":190},{"action":"T","x":14,"y":903,"text":"passages,","line":191},{"action":"Text","line":192,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":171,"y":903,"text":"and","line":193},{"action":"T","x":202,"y":903,"text":"more","line":194},{"action":"T","x":243,"y":903,"text":"recently","line":195},{"action":"T","x":14,"y":920,"text":"with","line":196},{"action":"T","x":47,"y":920,"text":"desktop","line":197},{"action":"T","x":107,"y":920,"text":"publishing","line":198},{"action":"T","x":184,"y":920,"text":"software","line":199},{"action":"T","x":249,"y":920,"text":"like","line":200},{"action":"Text","line":201,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":152,"y":937,"text":"including","line":202},{"action":"T","x":220,"y":937,"text":"versions","line":203},{"action":"T","x":284,"y":937,"text":"of","line":204},{"action":"T","x":14,"y":954,"text":"Lorem","line":205},{"action":"T","x":64,"y":954,"text":"Ipsum.","line":206},{"action":"Clip","line":207,"path":[[{"type":"Vector","x":14,"y":366},{"type":"Vector","x":314,"y":366},{"type":"Vector","x":314,"y":566},{"type":"Vector","x":14,"y":566}]]},{"action":"Clip","line":208,"path":[[{"type":"Vector","x":14,"y":551},{"type":"Vector","x":314,"y":551},{"type":"Vector","x":314,"y":766},{"type":"Vector","x":14,"y":766}]]},{"action":"Fill","line":209,"color":"rgb(0,128,0)"},{"action":"Shape","line":210,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":14,"y":551},{"type":"Vector","x":314,"y":551},{"type":"Vector","x":314,"y":561},{"type":"Vector","x":14,"y":561}]},{"action":"Shape","line":211,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":314,"y":551},{"type":"Vector","x":314,"y":766},{"type":"Vector","x":314,"y":761},{"type":"Vector","x":314,"y":561}]},{"action":"Shape","line":212,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":314,"y":766},{"type":"Vector","x":14,"y":766},{"type":"Vector","x":14,"y":761},{"type":"Vector","x":314,"y":761}]},{"action":"Shape","line":213,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":14,"y":766},{"type":"Vector","x":14,"y":551},{"type":"Vector","x":14,"y":561},{"type":"Vector","x":14,"y":761}]},{"action":"Clip","line":214,"path":[[{"type":"Vector","x":14,"y":366},{"type":"Vector","x":314,"y":366},{"type":"Vector","x":314,"y":566},{"type":"Vector","x":14,"y":566}]]},{"action":"Text","line":215,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":14,"y":560,"text":"a","line":216},{"action":"Clip","line":217,"path":[[{"type":"BezierCurve","x0":480,"y0":416,"x1":636,"y1":360,"cx0":480,"cy0":385,"cx1":550,"cy1":360},{"type":"BezierCurve","x0":636,"y0":360,"x1":792,"y1":416,"cx0":722,"cy0":360,"cx1":792,"cy1":385},{"type":"BezierCurve","x0":792,"y0":416,"x1":636,"y1":472,"cx0":792,"cy0":447,"cx1":722,"cy1":472},{"type":"BezierCurve","x0":636,"y0":472,"x1":480,"y1":416,"cx0":550,"cy0":472,"cx1":480,"cy1":447}]]},{"action":"Fill","line":218,"color":"rgb(204,204,204)"},{"action":"Clip","line":219,"path":[[{"type":"BezierCurve","x0":486,"y0":416,"x1":636,"y1":366,"cx0":486,"cy0":388,"cx1":553,"cy1":366},{"type":"BezierCurve","x0":636,"y0":366,"x1":786,"y1":416,"cx0":719,"cy0":366,"cx1":786,"cy1":388},{"type":"BezierCurve","x0":786,"y0":416,"x1":636,"y1":466,"cx0":786,"cy0":444,"cx1":719,"cy1":466},{"type":"BezierCurve","x0":636,"y0":466,"x1":486,"y1":416,"cx0":553,"cy0":466,"cx1":486,"cy1":444}]]},{"action":"Text","line":220,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":486,"y":366,"text":"Lorem","line":221},{"action":"T","x":536,"y":366,"text":"Ipsum","line":222},{"action":"T","x":584,"y":366,"text":"is","line":223},{"action":"T","x":600,"y":366,"text":"simply","line":224},{"action":"T","x":650,"y":366,"text":"dummy","line":225},{"action":"T","x":706,"y":366,"text":"text","line":226},{"action":"T","x":737,"y":366,"text":"of","line":227},{"action":"T","x":754,"y":366,"text":"the","line":228},{"action":"T","x":486,"y":382,"text":"printing","line":229},{"action":"T","x":543,"y":382,"text":"and","line":230},{"action":"T","x":574,"y":382,"text":"typesetting","line":231},{"action":"T","x":656,"y":382,"text":"industry.","line":232},{"action":"T","x":720,"y":382,"text":"Lorem","line":233},{"action":"T","x":486,"y":399,"text":"Ipsum","line":234},{"action":"T","x":534,"y":399,"text":"has","line":235},{"action":"T","x":564,"y":399,"text":"been","line":236},{"action":"T","x":604,"y":399,"text":"the","line":237},{"action":"T","x":631,"y":399,"text":"industry's","line":238},{"action":"T","x":702,"y":399,"text":"standard","line":239},{"action":"T","x":486,"y":416,"text":"dummy","line":240},{"action":"T","x":543,"y":416,"text":"text","line":241},{"action":"T","x":573,"y":416,"text":"ever","line":242},{"action":"T","x":609,"y":416,"text":"since","line":243},{"action":"T","x":650,"y":416,"text":"the","line":244},{"action":"T","x":677,"y":416,"text":"1500s,","line":245},{"action":"T","x":730,"y":416,"text":"when","line":246},{"action":"T","x":486,"y":433,"text":"an","line":247},{"action":"T","x":508,"y":433,"text":"unknown","line":248},{"action":"T","x":577,"y":433,"text":"printer","line":249},{"action":"T","x":626,"y":433,"text":"took","line":250},{"action":"T","x":661,"y":433,"text":"a","line":251},{"action":"T","x":674,"y":433,"text":"galley","line":252},{"action":"T","x":721,"y":433,"text":"of","line":253},{"action":"T","x":739,"y":433,"text":"type","line":254},{"action":"T","x":486,"y":450,"text":"and","line":255},{"action":"T","x":517,"y":450,"text":"scrambled","line":256},{"action":"T","x":595,"y":450,"text":"it","line":257},{"action":"T","x":608,"y":450,"text":"to","line":258},{"action":"T","x":626,"y":450,"text":"make","line":259},{"action":"T","x":669,"y":450,"text":"a","line":260},{"action":"T","x":682,"y":450,"text":"type","line":261},{"action":"T","x":717,"y":450,"text":"specimen","line":262},{"action":"T","x":486,"y":466,"text":"book.","line":263},{"action":"T","x":530,"y":466,"text":"It","line":264},{"action":"T","x":543,"y":466,"text":"has","line":265},{"action":"T","x":573,"y":466,"text":"survived","line":266},{"action":"T","x":637,"y":466,"text":"not","line":267},{"action":"T","x":664,"y":466,"text":"only","line":268},{"action":"T","x":698,"y":466,"text":"five","line":269},{"action":"T","x":486,"y":483,"text":"centuries,","line":270},{"action":"T","x":560,"y":483,"text":"but","line":271},{"action":"T","x":586,"y":483,"text":"also","line":272},{"action":"T","x":620,"y":483,"text":"the","line":273},{"action":"T","x":647,"y":483,"text":"leap","line":274},{"action":"T","x":682,"y":483,"text":"into","line":275},{"action":"T","x":712,"y":483,"text":"electronic","line":276},{"action":"T","x":486,"y":500,"text":"typesetting,","line":277},{"action":"T","x":572,"y":500,"text":"remaining","line":278},{"action":"T","x":647,"y":500,"text":"essentially","line":279},{"action":"T","x":486,"y":517,"text":"unchanged.","line":280},{"action":"T","x":574,"y":517,"text":"It","line":281},{"action":"T","x":588,"y":517,"text":"was","line":282},{"action":"T","x":620,"y":517,"text":"popularised","line":283},{"action":"T","x":708,"y":517,"text":"in","line":284},{"action":"T","x":724,"y":517,"text":"the","line":285},{"action":"T","x":486,"y":534,"text":"1960s","line":286},{"action":"T","x":534,"y":534,"text":"with","line":287},{"action":"T","x":567,"y":534,"text":"the","line":288},{"action":"T","x":594,"y":534,"text":"release","line":289},{"action":"T","x":650,"y":534,"text":"of","line":290},{"action":"Text","line":291,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":486,"y":825,"text":"Letraset","line":292},{"action":"T","x":548,"y":825,"text":"sheets","line":293},{"action":"T","x":600,"y":825,"text":"containing","line":294},{"action":"T","x":677,"y":825,"text":"Lorem","line":295},{"action":"T","x":727,"y":825,"text":"Ipsum","line":296},{"action":"T","x":486,"y":903,"text":"passages,","line":297},{"action":"Text","line":298,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":643,"y":903,"text":"and","line":299},{"action":"T","x":674,"y":903,"text":"more","line":300},{"action":"T","x":715,"y":903,"text":"recently","line":301},{"action":"T","x":486,"y":920,"text":"with","line":302},{"action":"T","x":519,"y":920,"text":"desktop","line":303},{"action":"T","x":579,"y":920,"text":"publishing","line":304},{"action":"T","x":656,"y":920,"text":"software","line":305},{"action":"T","x":721,"y":920,"text":"like","line":306},{"action":"Text","line":307,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":624,"y":937,"text":"including","line":308},{"action":"T","x":692,"y":937,"text":"versions","line":309},{"action":"T","x":756,"y":937,"text":"of","line":310},{"action":"T","x":486,"y":954,"text":"Lorem","line":311},{"action":"T","x":536,"y":954,"text":"Ipsum.","line":312},{"action":"Clip","line":313,"path":[[{"type":"BezierCurve","x0":486,"y0":416,"x1":636,"y1":366,"cx0":486,"cy0":388,"cx1":553,"cy1":366},{"type":"BezierCurve","x0":636,"y0":366,"x1":786,"y1":416,"cx0":719,"cy0":366,"cx1":786,"cy1":388},{"type":"BezierCurve","x0":786,"y0":416,"x1":636,"y1":466,"cx0":786,"cy0":444,"cx1":719,"cy1":466},{"type":"BezierCurve","x0":636,"y0":466,"x1":486,"y1":416,"cx0":553,"cy0":466,"cx1":486,"cy1":444}]]},{"action":"Clip","line":314,"path":[[{"type":"Vector","x":486,"y":551},{"type":"Vector","x":786,"y":551},{"type":"Vector","x":786,"y":766},{"type":"Vector","x":486,"y":766}]]},{"action":"Fill","line":315,"color":"rgb(0,128,0)"},{"action":"Shape","line":316,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":486,"y":551},{"type":"Vector","x":786,"y":551},{"type":"Vector","x":786,"y":561},{"type":"Vector","x":486,"y":561}]},{"action":"Shape","line":317,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":786,"y":551},{"type":"Vector","x":786,"y":766},{"type":"Vector","x":786,"y":761},{"type":"Vector","x":786,"y":561}]},{"action":"Shape","line":318,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":786,"y":766},{"type":"Vector","x":486,"y":766},{"type":"Vector","x":486,"y":761},{"type":"Vector","x":786,"y":761}]},{"action":"Shape","line":319,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":486,"y":766},{"type":"Vector","x":486,"y":551},{"type":"Vector","x":486,"y":561},{"type":"Vector","x":486,"y":761}]},{"action":"Clip","line":320,"path":[[{"type":"BezierCurve","x0":486,"y0":416,"x1":636,"y1":366,"cx0":486,"cy0":388,"cx1":553,"cy1":366},{"type":"BezierCurve","x0":636,"y0":366,"x1":786,"y1":416,"cx0":719,"cy0":366,"cx1":786,"cy1":388},{"type":"BezierCurve","x0":786,"y0":416,"x1":636,"y1":466,"cx0":786,"cy0":444,"cx1":719,"cy1":466},{"type":"BezierCurve","x0":636,"y0":466,"x1":486,"y1":416,"cx0":553,"cy0":466,"cx1":486,"cy1":444}]]},{"action":"Text","line":321,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":486,"y":560,"text":"a","line":322},{"action":"Clip","line":323,"path":[[{"type":"BezierCurve","x0":486,"y0":416,"x1":636,"y1":366,"cx0":486,"cy0":388,"cx1":553,"cy1":366},{"type":"BezierCurve","x0":636,"y0":366,"x1":786,"y1":416,"cx0":719,"cy0":366,"cx1":786,"cy1":388},{"type":"BezierCurve","x0":786,"y0":416,"x1":636,"y1":466,"cx0":786,"cy0":444,"cx1":719,"cy1":466},{"type":"BezierCurve","x0":636,"y0":466,"x1":486,"y1":416,"cx0":553,"cy0":466,"cx1":486,"cy1":444}]]},{"action":"Clip","line":324,"path":[[{"type":"Vector","x":563,"y":843},{"type":"Vector","x":638,"y":843},{"type":"Vector","x":638,"y":918},{"type":"Vector","x":563,"y":918}]]},{"action":"Draw image","line":325,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Clip","line":326,"path":[[{"type":"BezierCurve","x0":486,"y0":416,"x1":636,"y1":366,"cx0":486,"cy0":388,"cx1":553,"cy1":366},{"type":"BezierCurve","x0":636,"y0":366,"x1":786,"y1":416,"cx0":719,"cy0":366,"cx1":786,"cy1":388},{"type":"BezierCurve","x0":786,"y0":416,"x1":636,"y1":466,"cx0":786,"cy0":444,"cx1":719,"cy1":466},{"type":"BezierCurve","x0":636,"y0":466,"x1":486,"y1":416,"cx0":553,"cy0":466,"cx1":486,"cy1":444}]]},{"action":"Text","line":327,"font":"rgb(0,0,0) normal normal 700 16px Arial"},{"action":"T","x":486,"y":937,"text":"Aldus","line":328},{"action":"T","x":535,"y":937,"text":"PageMaker","line":329},{"action":"Text","line":330,"font":"rgb(0,0,0) normal normal 700 16px Arial"},{"action":"T","x":107,"y":272,"text":"Aldus","line":331},{"action":"T","x":156,"y":272,"text":"PageMaker","line":332},{"action":"Clip","line":333,"path":[[{"type":"Vector","x":14,"y":366},{"type":"Vector","x":314,"y":366},{"type":"Vector","x":314,"y":566},{"type":"Vector","x":14,"y":566}]]},{"action":"Clip","line":334,"path":[[{"type":"Vector","x":91,"y":843},{"type":"Vector","x":166,"y":843},{"type":"Vector","x":166,"y":918},{"type":"Vector","x":91,"y":918}]]},{"action":"Draw image","line":335,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Clip","line":336,"path":[[{"type":"Vector","x":14,"y":366},{"type":"Vector","x":314,"y":366},{"type":"Vector","x":314,"y":566},{"type":"Vector","x":14,"y":566}]]},{"action":"Text","line":337,"font":"rgb(0,0,0) normal normal 700 16px Arial"},{"action":"T","x":14,"y":937,"text":"Aldus","line":338},{"action":"T","x":63,"y":937,"text":"PageMaker","line":339},{"action":"Clip","line":340,"path":[[{"type":"BezierCurve","x0":486,"y0":416,"x1":636,"y1":366,"cx0":486,"cy0":388,"cx1":553,"cy1":366},{"type":"BezierCurve","x0":636,"y0":366,"x1":786,"y1":416,"cx0":719,"cy0":366,"cx1":786,"cy1":388},{"type":"BezierCurve","x0":786,"y0":416,"x1":636,"y1":466,"cx0":786,"cy0":444,"cx1":719,"cy1":466},{"type":"BezierCurve","x0":636,"y0":466,"x1":486,"y1":416,"cx0":553,"cy0":466,"cx1":486,"cy1":444}]]},{"action":"Clip","line":341,"path":[[{"type":"Vector","x":486,"y":971},{"type":"Vector","x":798,"y":971},{"type":"Vector","x":798,"y":1183},{"type":"Vector","x":486,"y":1183}]]},{"action":"Fill","line":342,"color":"rgb(204,204,204)"},{"action":"Shape","line":343,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":486,"y":971},{"type":"Vector","x":798,"y":971},{"type":"Vector","x":792,"y":977},{"type":"Vector","x":492,"y":977}]},{"action":"Shape","line":344,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":798,"y":971},{"type":"Vector","x":798,"y":1183},{"type":"Vector","x":792,"y":1177},{"type":"Vector","x":792,"y":977}]},{"action":"Shape","line":345,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":798,"y":1183},{"type":"Vector","x":486,"y":1183},{"type":"Vector","x":492,"y":1177},{"type":"Vector","x":792,"y":1177}]},{"action":"Shape","line":346,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":486,"y":1183},{"type":"Vector","x":486,"y":971},{"type":"Vector","x":492,"y":977},{"type":"Vector","x":492,"y":1177}]},{"action":"Clip","line":347,"path":[[{"type":"BezierCurve","x0":486,"y0":416,"x1":636,"y1":366,"cx0":486,"cy0":388,"cx1":553,"cy1":366},{"type":"BezierCurve","x0":636,"y0":366,"x1":786,"y1":416,"cx0":719,"cy0":366,"cx1":786,"cy1":388},{"type":"BezierCurve","x0":786,"y0":416,"x1":636,"y1":466,"cx0":786,"cy0":444,"cx1":719,"cy1":466},{"type":"BezierCurve","x0":636,"y0":466,"x1":486,"y1":416,"cx0":553,"cy0":466,"cx1":486,"cy1":444}]]},{"action":"Text","line":348,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":492,"y":1027,"text":"Lorem","line":349},{"action":"T","x":542,"y":1027,"text":"Ipsum","line":350},{"action":"T","x":590,"y":1027,"text":"is","line":351},{"action":"T","x":606,"y":1027,"text":"simply","line":352},{"action":"T","x":656,"y":1027,"text":"dummy","line":353},{"action":"T","x":712,"y":1027,"text":"text","line":354},{"action":"T","x":743,"y":1027,"text":"of","line":355},{"action":"T","x":760,"y":1027,"text":"the","line":356},{"action":"T","x":492,"y":1044,"text":"printing","line":357},{"action":"T","x":549,"y":1044,"text":"and","line":358},{"action":"T","x":580,"y":1044,"text":"typesetting","line":359},{"action":"T","x":662,"y":1044,"text":"industry.","line":360},{"action":"T","x":726,"y":1044,"text":"Lorem","line":361},{"action":"T","x":492,"y":1061,"text":"Ipsum","line":362},{"action":"T","x":540,"y":1061,"text":"has","line":363},{"action":"T","x":570,"y":1061,"text":"been","line":364},{"action":"T","x":610,"y":1061,"text":"the","line":365},{"action":"T","x":637,"y":1061,"text":"industry's","line":366},{"action":"T","x":708,"y":1061,"text":"standard","line":367},{"action":"T","x":492,"y":1077,"text":"dummy","line":368},{"action":"T","x":549,"y":1077,"text":"text","line":369},{"action":"T","x":579,"y":1077,"text":"ever","line":370},{"action":"T","x":615,"y":1077,"text":"since","line":371},{"action":"T","x":656,"y":1077,"text":"the","line":372},{"action":"T","x":683,"y":1077,"text":"1500s,","line":373},{"action":"T","x":736,"y":1077,"text":"when","line":374},{"action":"T","x":492,"y":1094,"text":"an","line":375},{"action":"T","x":514,"y":1094,"text":"unknown","line":376},{"action":"T","x":583,"y":1094,"text":"printer","line":377},{"action":"T","x":632,"y":1094,"text":"took","line":378},{"action":"T","x":667,"y":1094,"text":"a","line":379},{"action":"T","x":680,"y":1094,"text":"galley","line":380},{"action":"T","x":727,"y":1094,"text":"of","line":381},{"action":"T","x":745,"y":1094,"text":"type","line":382},{"action":"T","x":492,"y":1111,"text":"and","line":383},{"action":"T","x":523,"y":1111,"text":"scrambled","line":384},{"action":"T","x":601,"y":1111,"text":"it","line":385},{"action":"T","x":614,"y":1111,"text":"to","line":386},{"action":"T","x":632,"y":1111,"text":"make","line":387},{"action":"T","x":675,"y":1111,"text":"a","line":388},{"action":"T","x":688,"y":1111,"text":"type","line":389},{"action":"T","x":723,"y":1111,"text":"specimen","line":390},{"action":"T","x":492,"y":1128,"text":"book.","line":391},{"action":"T","x":536,"y":1128,"text":"It","line":392},{"action":"T","x":549,"y":1128,"text":"has","line":393},{"action":"T","x":579,"y":1128,"text":"survived","line":394},{"action":"T","x":643,"y":1128,"text":"not","line":395},{"action":"T","x":670,"y":1128,"text":"only","line":396},{"action":"T","x":704,"y":1128,"text":"five","line":397},{"action":"T","x":492,"y":1145,"text":"centuries,","line":398},{"action":"T","x":566,"y":1145,"text":"but","line":399},{"action":"T","x":592,"y":1145,"text":"also","line":400},{"action":"T","x":626,"y":1145,"text":"the","line":401},{"action":"T","x":653,"y":1145,"text":"leap","line":402},{"action":"T","x":688,"y":1145,"text":"into","line":403},{"action":"T","x":718,"y":1145,"text":"electronic","line":404},{"action":"T","x":492,"y":1161,"text":"typesetting,","line":405},{"action":"T","x":578,"y":1161,"text":"remaining","line":406},{"action":"T","x":653,"y":1161,"text":"essentially","line":407},{"action":"T","x":492,"y":1178,"text":"unchanged.","line":408},{"action":"T","x":580,"y":1178,"text":"It","line":409},{"action":"T","x":594,"y":1178,"text":"was","line":410},{"action":"T","x":626,"y":1178,"text":"popularised","line":411},{"action":"T","x":714,"y":1178,"text":"in","line":412},{"action":"T","x":730,"y":1178,"text":"the","line":413},{"action":"T","x":492,"y":1195,"text":"1960s","line":414},{"action":"T","x":540,"y":1195,"text":"with","line":415},{"action":"T","x":573,"y":1195,"text":"the","line":416},{"action":"T","x":600,"y":1195,"text":"release","line":417},{"action":"T","x":656,"y":1195,"text":"of","line":418},{"action":"T","x":674,"y":1195,"text":"Letraset","line":419},{"action":"T","x":736,"y":1195,"text":"sheets","line":420},{"action":"T","x":492,"y":1212,"text":"containing","line":421},{"action":"T","x":569,"y":1212,"text":"Lorem","line":422},{"action":"T","x":619,"y":1212,"text":"Ipsum","line":423},{"action":"T","x":667,"y":1212,"text":"passages,","line":424},{"action":"T","x":744,"y":1212,"text":"and","line":425},{"action":"T","x":492,"y":1229,"text":"more","line":426},{"action":"T","x":533,"y":1229,"text":"recently","line":427},{"action":"T","x":593,"y":1229,"text":"with","line":428},{"action":"T","x":626,"y":1229,"text":"desktop","line":429},{"action":"T","x":687,"y":1229,"text":"publishing","line":430},{"action":"T","x":492,"y":1245,"text":"software","line":431},{"action":"T","x":557,"y":1245,"text":"like","line":432},{"action":"Text","line":433,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":723,"y":1245,"text":"including","line":434},{"action":"T","x":492,"y":1262,"text":"versions","line":435},{"action":"T","x":556,"y":1262,"text":"of","line":436},{"action":"T","x":574,"y":1262,"text":"Lorem","line":437},{"action":"T","x":624,"y":1262,"text":"Ipsum.","line":438},{"action":"Clip","line":439,"path":[[{"type":"BezierCurve","x0":486,"y0":416,"x1":636,"y1":366,"cx0":486,"cy0":388,"cx1":553,"cy1":366},{"type":"BezierCurve","x0":636,"y0":366,"x1":786,"y1":416,"cx0":719,"cy0":366,"cx1":786,"cy1":388},{"type":"BezierCurve","x0":786,"y0":416,"x1":636,"y1":466,"cx0":786,"cy0":444,"cx1":719,"cy1":466},{"type":"BezierCurve","x0":636,"y0":466,"x1":486,"y1":416,"cx0":553,"cy0":466,"cx1":486,"cy1":444}]]},{"action":"Text","line":440,"font":"rgb(0,0,0) normal normal 400 16px Arial solid rgb(0,0,0) underline"},{"action":"T","x":492,"y":977,"text":"position:relative","line":441},{"action":"T","x":603,"y":977,"text":" ","line":442},{"action":"T","x":608,"y":977,"text":"within","line":443},{"action":"T","x":648,"y":977,"text":" ","line":444},{"action":"T","x":653,"y":977,"text":"a","line":445},{"action":"T","x":662,"y":977,"text":" ","line":446},{"action":"T","x":666,"y":977,"text":"overflow:hidden","line":447},{"action":"T","x":778,"y":976,"text":" ","line":448},{"action":"T","x":492,"y":993,"text":"element","line":449},{"action":"Clip","line":450,"path":[[{"type":"BezierCurve","x0":486,"y0":416,"x1":636,"y1":366,"cx0":486,"cy0":388,"cx1":553,"cy1":366},{"type":"BezierCurve","x0":636,"y0":366,"x1":786,"y1":416,"cx0":719,"cy0":366,"cx1":786,"cy1":388},{"type":"BezierCurve","x0":786,"y0":416,"x1":636,"y1":466,"cx0":786,"cy0":444,"cx1":719,"cy1":466},{"type":"BezierCurve","x0":636,"y0":466,"x1":486,"y1":416,"cx0":553,"cy0":466,"cx1":486,"cy1":444}]]},{"action":"Text","line":451,"font":"rgb(0,0,0) normal normal 700 16px Arial"},{"action":"T","x":585,"y":1245,"text":"Aldus","line":452},{"action":"T","x":634,"y":1245,"text":"PageMaker","line":453},{"action":"Clip","line":454,"path":[[{"type":"Vector","x":14,"y":366},{"type":"Vector","x":314,"y":366},{"type":"Vector","x":314,"y":566},{"type":"Vector","x":14,"y":566}]]},{"action":"Clip","line":455,"path":[[{"type":"Vector","x":14,"y":971},{"type":"Vector","x":326,"y":971},{"type":"Vector","x":326,"y":1183},{"type":"Vector","x":14,"y":1183}]]},{"action":"Fill","line":456,"color":"rgb(204,204,204)"},{"action":"Shape","line":457,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":14,"y":971},{"type":"Vector","x":326,"y":971},{"type":"Vector","x":320,"y":977},{"type":"Vector","x":20,"y":977}]},{"action":"Shape","line":458,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":326,"y":971},{"type":"Vector","x":326,"y":1183},{"type":"Vector","x":320,"y":1177},{"type":"Vector","x":320,"y":977}]},{"action":"Shape","line":459,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":326,"y":1183},{"type":"Vector","x":14,"y":1183},{"type":"Vector","x":20,"y":1177},{"type":"Vector","x":320,"y":1177}]},{"action":"Shape","line":460,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":14,"y":1183},{"type":"Vector","x":14,"y":971},{"type":"Vector","x":20,"y":977},{"type":"Vector","x":20,"y":1177}]},{"action":"Clip","line":461,"path":[[{"type":"Vector","x":14,"y":366},{"type":"Vector","x":314,"y":366},{"type":"Vector","x":314,"y":566},{"type":"Vector","x":14,"y":566}]]},{"action":"Text","line":462,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":20,"y":1027,"text":"Lorem","line":463},{"action":"T","x":70,"y":1027,"text":"Ipsum","line":464},{"action":"T","x":118,"y":1027,"text":"is","line":465},{"action":"T","x":134,"y":1027,"text":"simply","line":466},{"action":"T","x":184,"y":1027,"text":"dummy","line":467},{"action":"T","x":240,"y":1027,"text":"text","line":468},{"action":"T","x":271,"y":1027,"text":"of","line":469},{"action":"T","x":288,"y":1027,"text":"the","line":470},{"action":"T","x":20,"y":1044,"text":"printing","line":471},{"action":"T","x":77,"y":1044,"text":"and","line":472},{"action":"T","x":108,"y":1044,"text":"typesetting","line":473},{"action":"T","x":190,"y":1044,"text":"industry.","line":474},{"action":"T","x":254,"y":1044,"text":"Lorem","line":475},{"action":"T","x":20,"y":1061,"text":"Ipsum","line":476},{"action":"T","x":68,"y":1061,"text":"has","line":477},{"action":"T","x":98,"y":1061,"text":"been","line":478},{"action":"T","x":138,"y":1061,"text":"the","line":479},{"action":"T","x":165,"y":1061,"text":"industry's","line":480},{"action":"T","x":236,"y":1061,"text":"standard","line":481},{"action":"T","x":20,"y":1077,"text":"dummy","line":482},{"action":"T","x":77,"y":1077,"text":"text","line":483},{"action":"T","x":107,"y":1077,"text":"ever","line":484},{"action":"T","x":143,"y":1077,"text":"since","line":485},{"action":"T","x":184,"y":1077,"text":"the","line":486},{"action":"T","x":211,"y":1077,"text":"1500s,","line":487},{"action":"T","x":264,"y":1077,"text":"when","line":488},{"action":"T","x":20,"y":1094,"text":"an","line":489},{"action":"T","x":42,"y":1094,"text":"unknown","line":490},{"action":"T","x":111,"y":1094,"text":"printer","line":491},{"action":"T","x":160,"y":1094,"text":"took","line":492},{"action":"T","x":195,"y":1094,"text":"a","line":493},{"action":"T","x":208,"y":1094,"text":"galley","line":494},{"action":"T","x":255,"y":1094,"text":"of","line":495},{"action":"T","x":273,"y":1094,"text":"type","line":496},{"action":"T","x":20,"y":1111,"text":"and","line":497},{"action":"T","x":51,"y":1111,"text":"scrambled","line":498},{"action":"T","x":129,"y":1111,"text":"it","line":499},{"action":"T","x":142,"y":1111,"text":"to","line":500},{"action":"T","x":160,"y":1111,"text":"make","line":501},{"action":"T","x":203,"y":1111,"text":"a","line":502},{"action":"T","x":216,"y":1111,"text":"type","line":503},{"action":"T","x":251,"y":1111,"text":"specimen","line":504},{"action":"T","x":20,"y":1128,"text":"book.","line":505},{"action":"T","x":64,"y":1128,"text":"It","line":506},{"action":"T","x":77,"y":1128,"text":"has","line":507},{"action":"T","x":107,"y":1128,"text":"survived","line":508},{"action":"T","x":171,"y":1128,"text":"not","line":509},{"action":"T","x":198,"y":1128,"text":"only","line":510},{"action":"T","x":232,"y":1128,"text":"five","line":511},{"action":"T","x":20,"y":1145,"text":"centuries,","line":512},{"action":"T","x":94,"y":1145,"text":"but","line":513},{"action":"T","x":120,"y":1145,"text":"also","line":514},{"action":"T","x":154,"y":1145,"text":"the","line":515},{"action":"T","x":181,"y":1145,"text":"leap","line":516},{"action":"T","x":216,"y":1145,"text":"into","line":517},{"action":"T","x":246,"y":1145,"text":"electronic","line":518},{"action":"T","x":20,"y":1161,"text":"typesetting,","line":519},{"action":"T","x":106,"y":1161,"text":"remaining","line":520},{"action":"T","x":181,"y":1161,"text":"essentially","line":521},{"action":"T","x":20,"y":1178,"text":"unchanged.","line":522},{"action":"T","x":108,"y":1178,"text":"It","line":523},{"action":"T","x":122,"y":1178,"text":"was","line":524},{"action":"T","x":154,"y":1178,"text":"popularised","line":525},{"action":"T","x":242,"y":1178,"text":"in","line":526},{"action":"T","x":258,"y":1178,"text":"the","line":527},{"action":"T","x":20,"y":1195,"text":"1960s","line":528},{"action":"T","x":68,"y":1195,"text":"with","line":529},{"action":"T","x":101,"y":1195,"text":"the","line":530},{"action":"T","x":128,"y":1195,"text":"release","line":531},{"action":"T","x":184,"y":1195,"text":"of","line":532},{"action":"T","x":202,"y":1195,"text":"Letraset","line":533},{"action":"T","x":264,"y":1195,"text":"sheets","line":534},{"action":"T","x":20,"y":1212,"text":"containing","line":535},{"action":"T","x":97,"y":1212,"text":"Lorem","line":536},{"action":"T","x":147,"y":1212,"text":"Ipsum","line":537},{"action":"T","x":195,"y":1212,"text":"passages,","line":538},{"action":"T","x":272,"y":1212,"text":"and","line":539},{"action":"T","x":20,"y":1229,"text":"more","line":540},{"action":"T","x":61,"y":1229,"text":"recently","line":541},{"action":"T","x":121,"y":1229,"text":"with","line":542},{"action":"T","x":154,"y":1229,"text":"desktop","line":543},{"action":"T","x":215,"y":1229,"text":"publishing","line":544},{"action":"T","x":20,"y":1245,"text":"software","line":545},{"action":"T","x":85,"y":1245,"text":"like","line":546},{"action":"Text","line":547,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":251,"y":1245,"text":"including","line":548},{"action":"T","x":20,"y":1262,"text":"versions","line":549},{"action":"T","x":84,"y":1262,"text":"of","line":550},{"action":"T","x":102,"y":1262,"text":"Lorem","line":551},{"action":"T","x":152,"y":1262,"text":"Ipsum.","line":552},{"action":"Clip","line":553,"path":[[{"type":"Vector","x":14,"y":366},{"type":"Vector","x":314,"y":366},{"type":"Vector","x":314,"y":566},{"type":"Vector","x":14,"y":566}]]},{"action":"Text","line":554,"font":"rgb(0,0,0) normal normal 400 16px Arial solid rgb(0,0,0) underline"},{"action":"T","x":20,"y":977,"text":"position:relative","line":555},{"action":"T","x":131,"y":977,"text":" ","line":556},{"action":"T","x":136,"y":977,"text":"within","line":557},{"action":"T","x":176,"y":977,"text":" ","line":558},{"action":"T","x":181,"y":977,"text":"a","line":559},{"action":"T","x":190,"y":977,"text":" ","line":560},{"action":"T","x":194,"y":977,"text":"overflow:hidden","line":561},{"action":"T","x":306,"y":976,"text":" ","line":562},{"action":"T","x":20,"y":993,"text":"element","line":563},{"action":"Clip","line":564,"path":[[{"type":"Vector","x":14,"y":366},{"type":"Vector","x":314,"y":366},{"type":"Vector","x":314,"y":566},{"type":"Vector","x":14,"y":566}]]},{"action":"Text","line":565,"font":"rgb(0,0,0) normal normal 700 16px Arial"},{"action":"T","x":113,"y":1245,"text":"Aldus","line":566},{"action":"T","x":162,"y":1245,"text":"PageMaker","line":567}],"/tests/reftests/pseudoelements.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":90,"y":8,"text":"Content","line":5},{"action":"T","x":150,"y":8,"text":"1","line":6},{"action":"Text","line":7,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":8,"text":"root","line":8},{"action":"T","x":40,"y":8,"text":"before!","line":9},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":164,"y":8,"text":"after!","line":11},{"action":"Text","line":12,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":286,"y":8,"text":"Content","line":13},{"action":"T","x":347,"y":8,"text":"2","line":14},{"action":"Text","line":15,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":204,"y":8,"text":"root","line":16},{"action":"T","x":236,"y":8,"text":"before!","line":17},{"action":"Text","line":18,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":360,"y":8,"text":"after!","line":19},{"action":"Text","line":20,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":26,"text":"Content","line":21},{"action":"T","x":68,"y":26,"text":"1","line":22},{"action":"Text","line":23,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":82,"y":26,"text":"Content","line":24},{"action":"T","x":142,"y":26,"text":"2","line":25},{"action":"Text","line":26,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":90,"y":105,"text":"Content","line":27},{"action":"T","x":150,"y":105,"text":"1","line":28},{"action":"Text","line":29,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":105,"text":"root","line":30},{"action":"T","x":40,"y":105,"text":"before!","line":31},{"action":"Clip","line":32,"path":[[{"type":"Vector","x":159,"y":44},{"type":"Vector","x":234,"y":44},{"type":"Vector","x":234,"y":119},{"type":"Vector","x":159,"y":119}]]},{"action":"Draw image","line":33,"imageSrc":"/tests/assets/image2.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Text","line":34,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":320,"y":105,"text":"Content","line":35},{"action":"T","x":381,"y":105,"text":"2","line":36},{"action":"Text","line":37,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":239,"y":105,"text":"root","line":38},{"action":"T","x":271,"y":105,"text":"before!","line":39},{"action":"Clip","line":40,"path":[[{"type":"Vector","x":390,"y":44},{"type":"Vector","x":465,"y":44},{"type":"Vector","x":465,"y":119},{"type":"Vector","x":390,"y":119}]]},{"action":"Draw image","line":41,"imageSrc":"/tests/assets/image2.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Text","line":42,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":100,"y":123,"text":"Content","line":43},{"action":"T","x":160,"y":123,"text":"1","line":44},{"action":"Clip","line":45,"path":[[{"type":"Vector","x":8,"y":118},{"type":"Vector","x":100,"y":118},{"type":"Vector","x":100,"y":145},{"type":"Vector","x":8,"y":145}]]},{"action":"Repeat","line":46,"imageSrc":"/tests/assets/image_1.jpg","x":13,"y":123,"width":75,"height":75,"path":[{"type":"Vector","x":8,"y":118},{"type":"Vector","x":100,"y":118},{"type":"Vector","x":100,"y":145},{"type":"Vector","x":8,"y":145}]},{"action":"Shape","line":47,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":8,"y":118},{"type":"Vector","x":100,"y":118},{"type":"Vector","x":95,"y":123},{"type":"Vector","x":13,"y":123}]},{"action":"Shape","line":48,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":100,"y":118},{"type":"Vector","x":100,"y":145},{"type":"Vector","x":95,"y":140},{"type":"Vector","x":95,"y":123}]},{"action":"Shape","line":49,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":100,"y":145},{"type":"Vector","x":8,"y":145},{"type":"Vector","x":13,"y":140},{"type":"Vector","x":95,"y":140}]},{"action":"Shape","line":50,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":8,"y":145},{"type":"Vector","x":8,"y":118},{"type":"Vector","x":13,"y":123},{"type":"Vector","x":13,"y":140}]},{"action":"Text","line":51,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":13,"y":123,"text":"root","line":52},{"action":"T","x":45,"y":123,"text":"before!","line":53},{"action":"Clip","line":54,"path":[[{"type":"Vector","x":169,"y":123},{"type":"Vector","x":210,"y":123},{"type":"Vector","x":210,"y":140},{"type":"Vector","x":169,"y":140}]]},{"action":"Repeat","line":55,"imageSrc":"/tests/assets/image2_1.jpg","x":169,"y":123,"width":75,"height":75,"path":[{"type":"Vector","x":169,"y":123},{"type":"Vector","x":210,"y":123},{"type":"Vector","x":210,"y":140},{"type":"Vector","x":169,"y":140}]},{"action":"Text","line":56,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":174,"y":123,"text":"after!","line":57},{"action":"Text","line":58,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":306,"y":123,"text":"Content","line":59},{"action":"T","x":367,"y":123,"text":"2","line":60},{"action":"Clip","line":61,"path":[[{"type":"Vector","x":215,"y":118},{"type":"Vector","x":306,"y":118},{"type":"Vector","x":306,"y":145},{"type":"Vector","x":215,"y":145}]]},{"action":"Repeat","line":62,"imageSrc":"/tests/assets/image_1.jpg","x":220,"y":123,"width":75,"height":75,"path":[{"type":"Vector","x":215,"y":118},{"type":"Vector","x":306,"y":118},{"type":"Vector","x":306,"y":145},{"type":"Vector","x":215,"y":145}]},{"action":"Shape","line":63,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":215,"y":118},{"type":"Vector","x":306,"y":118},{"type":"Vector","x":301,"y":123},{"type":"Vector","x":220,"y":123}]},{"action":"Shape","line":64,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":306,"y":118},{"type":"Vector","x":306,"y":145},{"type":"Vector","x":301,"y":140},{"type":"Vector","x":301,"y":123}]},{"action":"Shape","line":65,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":306,"y":145},{"type":"Vector","x":215,"y":145},{"type":"Vector","x":220,"y":140},{"type":"Vector","x":301,"y":140}]},{"action":"Shape","line":66,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":215,"y":145},{"type":"Vector","x":215,"y":118},{"type":"Vector","x":220,"y":123},{"type":"Vector","x":220,"y":140}]},{"action":"Text","line":67,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":220,"y":123,"text":"root","line":68},{"action":"T","x":252,"y":123,"text":"before!","line":69},{"action":"Clip","line":70,"path":[[{"type":"Vector","x":376,"y":123},{"type":"Vector","x":417,"y":123},{"type":"Vector","x":417,"y":140},{"type":"Vector","x":376,"y":140}]]},{"action":"Repeat","line":71,"imageSrc":"/tests/assets/image2_1.jpg","x":376,"y":123,"width":75,"height":75,"path":[{"type":"Vector","x":376,"y":123},{"type":"Vector","x":417,"y":123},{"type":"Vector","x":417,"y":140},{"type":"Vector","x":376,"y":140}]},{"action":"Text","line":72,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":380,"y":123,"text":"after!","line":73}],"/tests/reftests/text/child-textnodes.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":8,"text":"Some","line":5},{"action":"T","x":54,"y":8,"text":"inline","line":6},{"action":"T","x":96,"y":8,"text":"text","line":7},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":297,"y":8,"text":"followed","line":9},{"action":"T","x":360,"y":8,"text":"by","line":10},{"action":"T","x":382,"y":8,"text":"more","line":11},{"action":"T","x":422,"y":8,"text":"inline","line":12},{"action":"T","x":464,"y":8,"text":"text.","line":13},{"action":"Text","line":14,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":76,"text":"Then","line":15},{"action":"T","x":49,"y":76,"text":"more","line":16},{"action":"T","x":90,"y":76,"text":"inline","line":17},{"action":"T","x":132,"y":76,"text":"text.","line":18},{"action":"Clip","line":19,"path":[[{"type":"Vector","x":8,"y":42},{"type":"Vector","x":792,"y":42},{"type":"Vector","x":792,"y":60},{"type":"Vector","x":8,"y":60}]]},{"action":"Fill","line":20,"color":"rgb(0,128,0)"},{"action":"Text","line":21,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":42,"text":"Then","line":22},{"action":"T","x":49,"y":42,"text":"a","line":23},{"action":"T","x":62,"y":42,"text":"block","line":24},{"action":"T","x":104,"y":42,"text":"level","line":25},{"action":"T","x":142,"y":42,"text":"element.","line":26},{"action":"Text","line":27,"font":"rgb(0,0,255) normal normal 400 16px Arial"},{"action":"T","x":126,"y":8,"text":"followed","line":28},{"action":"T","x":190,"y":8,"text":"by","line":29},{"action":"T","x":211,"y":8,"text":"text","line":30},{"action":"T","x":241,"y":8,"text":"in","line":31},{"action":"T","x":258,"y":8,"text":"span","line":32}],"/tests/reftests/text/fontawesome.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":61,"text":"Fontawesome","line":5},{"action":"T","x":113,"y":61,"text":"icons","line":6},{"action":"Text","line":7,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":239,"y":61,"text":"fa","line":8},{"action":"T","x":252,"y":61,"text":"-","line":9},{"action":"T","x":258,"y":61,"text":"5x","line":10},{"action":"Text","line":11,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":55,"y":203,"text":"fa","line":12},{"action":"T","x":68,"y":203,"text":"-","line":13},{"action":"T","x":74,"y":203,"text":"twitter","line":14},{"action":"T","x":121,"y":203,"text":"on","line":15},{"action":"T","x":143,"y":203,"text":"fa","line":16},{"action":"T","x":156,"y":203,"text":"-","line":17},{"action":"T","x":162,"y":203,"text":"square","line":18},{"action":"T","x":211,"y":203,"text":"-","line":19},{"action":"T","x":216,"y":203,"text":"o","line":20},{"action":"Text","line":21,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":55,"y":246,"text":"fa","line":22},{"action":"T","x":68,"y":246,"text":"-","line":23},{"action":"T","x":74,"y":246,"text":"flag","line":24},{"action":"T","x":104,"y":246,"text":"on","line":25},{"action":"T","x":126,"y":246,"text":"fa","line":26},{"action":"T","x":140,"y":246,"text":"-","line":27},{"action":"T","x":145,"y":246,"text":"circle","line":28},{"action":"Text","line":29,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":55,"y":289,"text":"fa","line":30},{"action":"T","x":68,"y":289,"text":"-","line":31},{"action":"T","x":74,"y":289,"text":"terminal","line":32},{"action":"T","x":135,"y":289,"text":"on","line":33},{"action":"T","x":157,"y":289,"text":"fa","line":34},{"action":"T","x":171,"y":289,"text":"-","line":35},{"action":"T","x":176,"y":289,"text":"square","line":36},{"action":"Text","line":37,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":55,"y":332,"text":"fa","line":38},{"action":"T","x":68,"y":332,"text":"-","line":39},{"action":"T","x":74,"y":332,"text":"ban","line":40},{"action":"T","x":105,"y":332,"text":"on","line":41},{"action":"T","x":127,"y":332,"text":"fa","line":42},{"action":"T","x":140,"y":332,"text":"-","line":43},{"action":"T","x":146,"y":332,"text":"camera","line":44},{"action":"Text","line":45,"font":"rgb(0,0,0) normal normal 400 80px FontAwesome"},{"action":"T","x":155,"y":7,"text":"","line":46},{"action":"Text","line":47,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":42,"y":104,"text":"List","line":48},{"action":"T","x":71,"y":104,"text":"icons","line":49},{"action":"Text","line":50,"font":"rgb(0,0,0) normal normal 400 16px FontAwesome"},{"action":"T","x":18,"y":106,"text":"","line":51},{"action":"Text","line":52,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":42,"y":122,"text":"can","line":53},{"action":"T","x":73,"y":122,"text":"be","line":54},{"action":"T","x":95,"y":122,"text":"used","line":55},{"action":"Text","line":56,"font":"rgb(0,0,0) normal normal 400 16px FontAwesome"},{"action":"T","x":18,"y":124,"text":"","line":57},{"action":"Text","line":58,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":42,"y":140,"text":"as","line":59},{"action":"T","x":63,"y":140,"text":"bullets","line":60},{"action":"Text","line":61,"font":"rgb(0,0,0) normal normal 400 16px FontAwesome"},{"action":"T","x":18,"y":142,"text":"","line":62},{"action":"Text","line":63,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":42,"y":158,"text":"in","line":64},{"action":"T","x":59,"y":158,"text":"lists","line":65},{"action":"Text","line":66,"font":"rgb(0,0,0) normal normal 400 16px FontAwesome"},{"action":"T","x":18,"y":160,"text":"","line":67},{"action":"Text","line":68,"font":"rgb(0,0,0) normal normal 400 42.6667px FontAwesome"},{"action":"T","x":13,"y":192,"text":"","line":69},{"action":"Text","line":70,"font":"rgb(0,0,0) normal normal 400 21.3333px FontAwesome"},{"action":"T","x":19,"y":202,"text":"","line":71},{"action":"Text","line":72,"font":"rgb(0,0,0) normal normal 400 42.6667px FontAwesome"},{"action":"T","x":11,"y":234,"text":"","line":73},{"action":"Text","line":74,"font":"rgb(255,255,255) normal normal 400 21.3333px FontAwesome"},{"action":"T","x":19,"y":245,"text":"","line":75},{"action":"Text","line":76,"font":"rgb(0,0,0) normal normal 400 42.6667px FontAwesome"},{"action":"T","x":11,"y":277,"text":"","line":77},{"action":"Text","line":78,"font":"rgb(255,255,255) normal normal 400 21.3333px FontAwesome"},{"action":"T","x":19,"y":288,"text":"","line":79},{"action":"Text","line":80,"font":"rgb(0,0,0) normal normal 400 21.3333px FontAwesome"},{"action":"T","x":18,"y":330,"text":"","line":81},{"action":"Text","line":82,"font":"rgb(0,0,0) normal normal 400 42.6667px FontAwesome"},{"action":"T","x":11,"y":320,"text":"","line":83}],"/tests/reftests/text/linethrough.html":[{"action":"Window","line":1,"width":800,"height":2528},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":2528,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Shape","line":4,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":792,"y":8},{"type":"Vector","x":791,"y":9},{"type":"Vector","x":9,"y":9}]},{"action":"Shape","line":5,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":8},{"type":"Vector","x":792,"y":28},{"type":"Vector","x":791,"y":27},{"type":"Vector","x":791,"y":9}]},{"action":"Shape","line":6,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":28},{"type":"Vector","x":8,"y":28},{"type":"Vector","x":9,"y":27},{"type":"Vector","x":791,"y":27}]},{"action":"Shape","line":7,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":28},{"type":"Vector","x":8,"y":8},{"type":"Vector","x":9,"y":9},{"type":"Vector","x":9,"y":27}]},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 400 16px arial solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":9,"text":"Testing","line":9},{"action":"T","x":60,"y":9,"text":" ","line":10},{"action":"T","x":64,"y":9,"text":"texts","line":11},{"action":"Shape","line":12,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":29},{"type":"Vector","x":792,"y":29},{"type":"Vector","x":791,"y":30},{"type":"Vector","x":9,"y":30}]},{"action":"Shape","line":13,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":29},{"type":"Vector","x":792,"y":57},{"type":"Vector","x":791,"y":56},{"type":"Vector","x":791,"y":30}]},{"action":"Shape","line":14,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":57},{"type":"Vector","x":8,"y":57},{"type":"Vector","x":9,"y":56},{"type":"Vector","x":791,"y":56}]},{"action":"Shape","line":15,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":57},{"type":"Vector","x":8,"y":29},{"type":"Vector","x":9,"y":30},{"type":"Vector","x":9,"y":56}]},{"action":"Text","line":16,"font":"rgb(0,0,0) normal normal 400 22px arial solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":31,"text":"Testing","line":17},{"action":"T","x":79,"y":31,"text":" ","line":18},{"action":"T","x":85,"y":31,"text":"texts","line":19},{"action":"Shape","line":20,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":58},{"type":"Vector","x":792,"y":58},{"type":"Vector","x":791,"y":59},{"type":"Vector","x":9,"y":59}]},{"action":"Shape","line":21,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":58},{"type":"Vector","x":792,"y":92},{"type":"Vector","x":791,"y":91},{"type":"Vector","x":791,"y":59}]},{"action":"Shape","line":22,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":92},{"type":"Vector","x":8,"y":92},{"type":"Vector","x":9,"y":91},{"type":"Vector","x":791,"y":91}]},{"action":"Shape","line":23,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":92},{"type":"Vector","x":8,"y":58},{"type":"Vector","x":9,"y":59},{"type":"Vector","x":9,"y":91}]},{"action":"Text","line":24,"font":"rgb(0,0,0) normal normal 400 28px arial solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":59,"text":"Testing","line":25},{"action":"T","x":98,"y":59,"text":" ","line":26},{"action":"T","x":106,"y":59,"text":"texts","line":27},{"action":"Shape","line":28,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":93},{"type":"Vector","x":792,"y":93},{"type":"Vector","x":791,"y":94},{"type":"Vector","x":9,"y":94}]},{"action":"Shape","line":29,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":93},{"type":"Vector","x":792,"y":134},{"type":"Vector","x":791,"y":133},{"type":"Vector","x":791,"y":94}]},{"action":"Shape","line":30,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":134},{"type":"Vector","x":8,"y":134},{"type":"Vector","x":9,"y":133},{"type":"Vector","x":791,"y":133}]},{"action":"Shape","line":31,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":134},{"type":"Vector","x":8,"y":93},{"type":"Vector","x":9,"y":94},{"type":"Vector","x":9,"y":133}]},{"action":"Text","line":32,"font":"rgb(0,0,0) normal normal 400 34px arial solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":94,"text":"Testing","line":33},{"action":"T","x":117,"y":94,"text":" ","line":34},{"action":"T","x":126,"y":94,"text":"texts","line":35},{"action":"Shape","line":36,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":135},{"type":"Vector","x":792,"y":135},{"type":"Vector","x":791,"y":136},{"type":"Vector","x":9,"y":136}]},{"action":"Shape","line":37,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":135},{"type":"Vector","x":792,"y":183},{"type":"Vector","x":791,"y":182},{"type":"Vector","x":791,"y":136}]},{"action":"Shape","line":38,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":183},{"type":"Vector","x":8,"y":183},{"type":"Vector","x":9,"y":182},{"type":"Vector","x":791,"y":182}]},{"action":"Shape","line":39,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":183},{"type":"Vector","x":8,"y":135},{"type":"Vector","x":9,"y":136},{"type":"Vector","x":9,"y":182}]},{"action":"Text","line":40,"font":"rgb(0,0,0) normal normal 400 40px arial solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":136,"text":"Testing","line":41},{"action":"T","x":136,"y":136,"text":" ","line":42},{"action":"T","x":147,"y":136,"text":"texts","line":43},{"action":"Shape","line":44,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":184},{"type":"Vector","x":792,"y":184},{"type":"Vector","x":791,"y":185},{"type":"Vector","x":9,"y":185}]},{"action":"Shape","line":45,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":184},{"type":"Vector","x":792,"y":239},{"type":"Vector","x":791,"y":238},{"type":"Vector","x":791,"y":185}]},{"action":"Shape","line":46,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":239},{"type":"Vector","x":8,"y":239},{"type":"Vector","x":9,"y":238},{"type":"Vector","x":791,"y":238}]},{"action":"Shape","line":47,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":239},{"type":"Vector","x":8,"y":184},{"type":"Vector","x":9,"y":185},{"type":"Vector","x":9,"y":238}]},{"action":"Text","line":48,"font":"rgb(0,0,0) normal normal 400 46px arial solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":186,"text":"Testing","line":49},{"action":"T","x":155,"y":186,"text":" ","line":50},{"action":"T","x":168,"y":186,"text":"texts","line":51},{"action":"Shape","line":52,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":240},{"type":"Vector","x":792,"y":240},{"type":"Vector","x":791,"y":241},{"type":"Vector","x":9,"y":241}]},{"action":"Shape","line":53,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":240},{"type":"Vector","x":792,"y":302},{"type":"Vector","x":791,"y":301},{"type":"Vector","x":791,"y":241}]},{"action":"Shape","line":54,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":302},{"type":"Vector","x":8,"y":302},{"type":"Vector","x":9,"y":301},{"type":"Vector","x":791,"y":301}]},{"action":"Shape","line":55,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":302},{"type":"Vector","x":8,"y":240},{"type":"Vector","x":9,"y":241},{"type":"Vector","x":9,"y":301}]},{"action":"Text","line":56,"font":"rgb(0,0,0) normal normal 400 52px arial solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":242,"text":"Testing","line":57},{"action":"T","x":174,"y":242,"text":" ","line":58},{"action":"T","x":188,"y":242,"text":"texts","line":59},{"action":"Shape","line":60,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":303},{"type":"Vector","x":792,"y":303},{"type":"Vector","x":791,"y":304},{"type":"Vector","x":9,"y":304}]},{"action":"Shape","line":61,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":303},{"type":"Vector","x":792,"y":371},{"type":"Vector","x":791,"y":370},{"type":"Vector","x":791,"y":304}]},{"action":"Shape","line":62,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":371},{"type":"Vector","x":8,"y":371},{"type":"Vector","x":9,"y":370},{"type":"Vector","x":791,"y":370}]},{"action":"Shape","line":63,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":371},{"type":"Vector","x":8,"y":303},{"type":"Vector","x":9,"y":304},{"type":"Vector","x":9,"y":370}]},{"action":"Text","line":64,"font":"rgb(0,0,0) normal normal 400 58px arial solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":305,"text":"Testing","line":65},{"action":"T","x":193,"y":305,"text":" ","line":66},{"action":"T","x":209,"y":305,"text":"texts","line":67},{"action":"Shape","line":68,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":372},{"type":"Vector","x":792,"y":372},{"type":"Vector","x":791,"y":373},{"type":"Vector","x":9,"y":373}]},{"action":"Shape","line":69,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":372},{"type":"Vector","x":792,"y":448},{"type":"Vector","x":791,"y":447},{"type":"Vector","x":791,"y":373}]},{"action":"Shape","line":70,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":448},{"type":"Vector","x":8,"y":448},{"type":"Vector","x":9,"y":447},{"type":"Vector","x":791,"y":447}]},{"action":"Shape","line":71,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":448},{"type":"Vector","x":8,"y":372},{"type":"Vector","x":9,"y":373},{"type":"Vector","x":9,"y":447}]},{"action":"Text","line":72,"font":"rgb(0,0,0) normal normal 400 64px arial solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":374,"text":"Testing","line":73},{"action":"T","x":212,"y":374,"text":" ","line":74},{"action":"T","x":230,"y":374,"text":"texts","line":75},{"action":"Shape","line":76,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":449},{"type":"Vector","x":792,"y":449},{"type":"Vector","x":791,"y":450},{"type":"Vector","x":9,"y":450}]},{"action":"Shape","line":77,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":449},{"type":"Vector","x":792,"y":531},{"type":"Vector","x":791,"y":530},{"type":"Vector","x":791,"y":450}]},{"action":"Shape","line":78,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":531},{"type":"Vector","x":8,"y":531},{"type":"Vector","x":9,"y":530},{"type":"Vector","x":791,"y":530}]},{"action":"Shape","line":79,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":531},{"type":"Vector","x":8,"y":449},{"type":"Vector","x":9,"y":450},{"type":"Vector","x":9,"y":530}]},{"action":"Text","line":80,"font":"rgb(0,0,0) normal normal 400 70px arial solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":451,"text":"Testing","line":81},{"action":"T","x":231,"y":451,"text":" ","line":82},{"action":"T","x":250,"y":451,"text":"texts","line":83},{"action":"Shape","line":84,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":532},{"type":"Vector","x":792,"y":532},{"type":"Vector","x":791,"y":533},{"type":"Vector","x":9,"y":533}]},{"action":"Shape","line":85,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":532},{"type":"Vector","x":792,"y":622},{"type":"Vector","x":791,"y":621},{"type":"Vector","x":791,"y":533}]},{"action":"Shape","line":86,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":622},{"type":"Vector","x":8,"y":622},{"type":"Vector","x":9,"y":621},{"type":"Vector","x":791,"y":621}]},{"action":"Shape","line":87,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":622},{"type":"Vector","x":8,"y":532},{"type":"Vector","x":9,"y":533},{"type":"Vector","x":9,"y":621}]},{"action":"Text","line":88,"font":"rgb(0,0,0) normal normal 400 76px arial solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":535,"text":"Testing","line":89},{"action":"T","x":250,"y":535,"text":" ","line":90},{"action":"T","x":271,"y":535,"text":"texts","line":91},{"action":"Shape","line":92,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":623},{"type":"Vector","x":792,"y":623},{"type":"Vector","x":791,"y":624},{"type":"Vector","x":9,"y":624}]},{"action":"Shape","line":93,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":623},{"type":"Vector","x":792,"y":644},{"type":"Vector","x":791,"y":643},{"type":"Vector","x":791,"y":624}]},{"action":"Shape","line":94,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":644},{"type":"Vector","x":8,"y":644},{"type":"Vector","x":9,"y":643},{"type":"Vector","x":791,"y":643}]},{"action":"Shape","line":95,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":644},{"type":"Vector","x":8,"y":623},{"type":"Vector","x":9,"y":624},{"type":"Vector","x":9,"y":643}]},{"action":"Text","line":96,"font":"rgb(0,0,0) normal normal 400 16px verdana solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":624,"text":"Testing","line":97},{"action":"T","x":66,"y":624,"text":" ","line":98},{"action":"T","x":72,"y":624,"text":"texts","line":99},{"action":"Shape","line":100,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":645},{"type":"Vector","x":792,"y":645},{"type":"Vector","x":791,"y":646},{"type":"Vector","x":9,"y":646}]},{"action":"Shape","line":101,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":645},{"type":"Vector","x":792,"y":674},{"type":"Vector","x":791,"y":673},{"type":"Vector","x":791,"y":646}]},{"action":"Shape","line":102,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":674},{"type":"Vector","x":8,"y":674},{"type":"Vector","x":9,"y":673},{"type":"Vector","x":791,"y":673}]},{"action":"Shape","line":103,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":674},{"type":"Vector","x":8,"y":645},{"type":"Vector","x":9,"y":646},{"type":"Vector","x":9,"y":673}]},{"action":"Text","line":104,"font":"rgb(0,0,0) normal normal 400 22px verdana solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":646,"text":"Testing","line":105},{"action":"T","x":87,"y":646,"text":" ","line":106},{"action":"T","x":95,"y":646,"text":"texts","line":107},{"action":"Shape","line":108,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":675},{"type":"Vector","x":792,"y":675},{"type":"Vector","x":791,"y":676},{"type":"Vector","x":9,"y":676}]},{"action":"Shape","line":109,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":675},{"type":"Vector","x":792,"y":711},{"type":"Vector","x":791,"y":710},{"type":"Vector","x":791,"y":676}]},{"action":"Shape","line":110,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":711},{"type":"Vector","x":8,"y":711},{"type":"Vector","x":9,"y":710},{"type":"Vector","x":791,"y":710}]},{"action":"Shape","line":111,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":711},{"type":"Vector","x":8,"y":675},{"type":"Vector","x":9,"y":676},{"type":"Vector","x":9,"y":710}]},{"action":"Text","line":112,"font":"rgb(0,0,0) normal normal 400 28px verdana solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":676,"text":"Testing","line":113},{"action":"T","x":108,"y":676,"text":" ","line":114},{"action":"T","x":118,"y":676,"text":"texts","line":115},{"action":"Shape","line":116,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":712},{"type":"Vector","x":792,"y":712},{"type":"Vector","x":791,"y":713},{"type":"Vector","x":9,"y":713}]},{"action":"Shape","line":117,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":712},{"type":"Vector","x":792,"y":755},{"type":"Vector","x":791,"y":754},{"type":"Vector","x":791,"y":713}]},{"action":"Shape","line":118,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":755},{"type":"Vector","x":8,"y":755},{"type":"Vector","x":9,"y":754},{"type":"Vector","x":791,"y":754}]},{"action":"Shape","line":119,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":755},{"type":"Vector","x":8,"y":712},{"type":"Vector","x":9,"y":713},{"type":"Vector","x":9,"y":754}]},{"action":"Text","line":120,"font":"rgb(0,0,0) normal normal 400 34px verdana solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":713,"text":"Testing","line":121},{"action":"T","x":130,"y":713,"text":" ","line":122},{"action":"T","x":142,"y":713,"text":"texts","line":123},{"action":"Shape","line":124,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":756},{"type":"Vector","x":792,"y":756},{"type":"Vector","x":791,"y":757},{"type":"Vector","x":9,"y":757}]},{"action":"Shape","line":125,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":756},{"type":"Vector","x":792,"y":807},{"type":"Vector","x":791,"y":806},{"type":"Vector","x":791,"y":757}]},{"action":"Shape","line":126,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":807},{"type":"Vector","x":8,"y":807},{"type":"Vector","x":9,"y":806},{"type":"Vector","x":791,"y":806}]},{"action":"Shape","line":127,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":807},{"type":"Vector","x":8,"y":756},{"type":"Vector","x":9,"y":757},{"type":"Vector","x":9,"y":806}]},{"action":"Text","line":128,"font":"rgb(0,0,0) normal normal 400 40px verdana solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":757,"text":"Testing","line":129},{"action":"T","x":151,"y":757,"text":" ","line":130},{"action":"T","x":165,"y":757,"text":"texts","line":131},{"action":"Shape","line":132,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":808},{"type":"Vector","x":792,"y":808},{"type":"Vector","x":791,"y":809},{"type":"Vector","x":9,"y":809}]},{"action":"Shape","line":133,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":808},{"type":"Vector","x":792,"y":866},{"type":"Vector","x":791,"y":865},{"type":"Vector","x":791,"y":809}]},{"action":"Shape","line":134,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":866},{"type":"Vector","x":8,"y":866},{"type":"Vector","x":9,"y":865},{"type":"Vector","x":791,"y":865}]},{"action":"Shape","line":135,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":866},{"type":"Vector","x":8,"y":808},{"type":"Vector","x":9,"y":809},{"type":"Vector","x":9,"y":865}]},{"action":"Text","line":136,"font":"rgb(0,0,0) normal normal 400 46px verdana solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":809,"text":"Testing","line":137},{"action":"T","x":172,"y":809,"text":" ","line":138},{"action":"T","x":188,"y":809,"text":"texts","line":139},{"action":"Shape","line":140,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":867},{"type":"Vector","x":792,"y":867},{"type":"Vector","x":791,"y":868},{"type":"Vector","x":9,"y":868}]},{"action":"Shape","line":141,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":867},{"type":"Vector","x":792,"y":932},{"type":"Vector","x":791,"y":931},{"type":"Vector","x":791,"y":868}]},{"action":"Shape","line":142,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":932},{"type":"Vector","x":8,"y":932},{"type":"Vector","x":9,"y":931},{"type":"Vector","x":791,"y":931}]},{"action":"Shape","line":143,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":932},{"type":"Vector","x":8,"y":867},{"type":"Vector","x":9,"y":868},{"type":"Vector","x":9,"y":931}]},{"action":"Text","line":144,"font":"rgb(0,0,0) normal normal 400 52px verdana solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":868,"text":"Testing","line":145},{"action":"T","x":194,"y":868,"text":" ","line":146},{"action":"T","x":212,"y":868,"text":"texts","line":147},{"action":"Shape","line":148,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":933},{"type":"Vector","x":792,"y":933},{"type":"Vector","x":791,"y":934},{"type":"Vector","x":9,"y":934}]},{"action":"Shape","line":149,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":933},{"type":"Vector","x":792,"y":1005},{"type":"Vector","x":791,"y":1004},{"type":"Vector","x":791,"y":934}]},{"action":"Shape","line":150,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1005},{"type":"Vector","x":8,"y":1005},{"type":"Vector","x":9,"y":1004},{"type":"Vector","x":791,"y":1004}]},{"action":"Shape","line":151,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1005},{"type":"Vector","x":8,"y":933},{"type":"Vector","x":9,"y":934},{"type":"Vector","x":9,"y":1004}]},{"action":"Text","line":152,"font":"rgb(0,0,0) normal normal 400 58px verdana solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":934,"text":"Testing","line":153},{"action":"T","x":215,"y":934,"text":" ","line":154},{"action":"T","x":235,"y":934,"text":"texts","line":155},{"action":"Shape","line":156,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1006},{"type":"Vector","x":792,"y":1006},{"type":"Vector","x":791,"y":1007},{"type":"Vector","x":9,"y":1007}]},{"action":"Shape","line":157,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1006},{"type":"Vector","x":792,"y":1086},{"type":"Vector","x":791,"y":1085},{"type":"Vector","x":791,"y":1007}]},{"action":"Shape","line":158,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1086},{"type":"Vector","x":8,"y":1086},{"type":"Vector","x":9,"y":1085},{"type":"Vector","x":791,"y":1085}]},{"action":"Shape","line":159,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1086},{"type":"Vector","x":8,"y":1006},{"type":"Vector","x":9,"y":1007},{"type":"Vector","x":9,"y":1085}]},{"action":"Text","line":160,"font":"rgb(0,0,0) normal normal 400 64px verdana solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1007,"text":"Testing","line":161},{"action":"T","x":236,"y":1007,"text":" ","line":162},{"action":"T","x":259,"y":1007,"text":"texts","line":163},{"action":"Shape","line":164,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1087},{"type":"Vector","x":792,"y":1087},{"type":"Vector","x":791,"y":1088},{"type":"Vector","x":9,"y":1088}]},{"action":"Shape","line":165,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1087},{"type":"Vector","x":792,"y":1174},{"type":"Vector","x":791,"y":1173},{"type":"Vector","x":791,"y":1088}]},{"action":"Shape","line":166,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1174},{"type":"Vector","x":8,"y":1174},{"type":"Vector","x":9,"y":1173},{"type":"Vector","x":791,"y":1173}]},{"action":"Shape","line":167,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1174},{"type":"Vector","x":8,"y":1087},{"type":"Vector","x":9,"y":1088},{"type":"Vector","x":9,"y":1173}]},{"action":"Text","line":168,"font":"rgb(0,0,0) normal normal 400 70px verdana solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1088,"text":"Testing","line":169},{"action":"T","x":258,"y":1088,"text":" ","line":170},{"action":"T","x":282,"y":1088,"text":"texts","line":171},{"action":"Shape","line":172,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1175},{"type":"Vector","x":792,"y":1175},{"type":"Vector","x":791,"y":1176},{"type":"Vector","x":9,"y":1176}]},{"action":"Shape","line":173,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1175},{"type":"Vector","x":792,"y":1270},{"type":"Vector","x":791,"y":1269},{"type":"Vector","x":791,"y":1176}]},{"action":"Shape","line":174,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1270},{"type":"Vector","x":8,"y":1270},{"type":"Vector","x":9,"y":1269},{"type":"Vector","x":791,"y":1269}]},{"action":"Shape","line":175,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1270},{"type":"Vector","x":8,"y":1175},{"type":"Vector","x":9,"y":1176},{"type":"Vector","x":9,"y":1269}]},{"action":"Text","line":176,"font":"rgb(0,0,0) normal normal 400 76px verdana solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1177,"text":"Testing","line":177},{"action":"T","x":279,"y":1177,"text":" ","line":178},{"action":"T","x":306,"y":1177,"text":"texts","line":179},{"action":"Shape","line":180,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1271},{"type":"Vector","x":792,"y":1271},{"type":"Vector","x":791,"y":1272},{"type":"Vector","x":9,"y":1272}]},{"action":"Shape","line":181,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1271},{"type":"Vector","x":792,"y":1292},{"type":"Vector","x":791,"y":1291},{"type":"Vector","x":791,"y":1272}]},{"action":"Shape","line":182,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1292},{"type":"Vector","x":8,"y":1292},{"type":"Vector","x":9,"y":1291},{"type":"Vector","x":791,"y":1291}]},{"action":"Shape","line":183,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1292},{"type":"Vector","x":8,"y":1271},{"type":"Vector","x":9,"y":1272},{"type":"Vector","x":9,"y":1291}]},{"action":"Text","line":184,"font":"rgb(0,0,0) normal normal 400 16px tahoma solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1272,"text":"Testing","line":185},{"action":"T","x":61,"y":1272,"text":" ","line":186},{"action":"T","x":66,"y":1272,"text":"texts","line":187},{"action":"Shape","line":188,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1293},{"type":"Vector","x":792,"y":1293},{"type":"Vector","x":791,"y":1294},{"type":"Vector","x":9,"y":1294}]},{"action":"Shape","line":189,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1293},{"type":"Vector","x":792,"y":1321},{"type":"Vector","x":791,"y":1320},{"type":"Vector","x":791,"y":1294}]},{"action":"Shape","line":190,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1321},{"type":"Vector","x":8,"y":1321},{"type":"Vector","x":9,"y":1320},{"type":"Vector","x":791,"y":1320}]},{"action":"Shape","line":191,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1321},{"type":"Vector","x":8,"y":1293},{"type":"Vector","x":9,"y":1294},{"type":"Vector","x":9,"y":1320}]},{"action":"Text","line":192,"font":"rgb(0,0,0) normal normal 400 22px tahoma solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1294,"text":"Testing","line":193},{"action":"T","x":80,"y":1294,"text":" ","line":194},{"action":"T","x":87,"y":1294,"text":"texts","line":195},{"action":"Shape","line":196,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1322},{"type":"Vector","x":792,"y":1322},{"type":"Vector","x":791,"y":1323},{"type":"Vector","x":9,"y":1323}]},{"action":"Shape","line":197,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1322},{"type":"Vector","x":792,"y":1358},{"type":"Vector","x":791,"y":1357},{"type":"Vector","x":791,"y":1323}]},{"action":"Shape","line":198,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1358},{"type":"Vector","x":8,"y":1358},{"type":"Vector","x":9,"y":1357},{"type":"Vector","x":791,"y":1357}]},{"action":"Shape","line":199,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1358},{"type":"Vector","x":8,"y":1322},{"type":"Vector","x":9,"y":1323},{"type":"Vector","x":9,"y":1357}]},{"action":"Text","line":200,"font":"rgb(0,0,0) normal normal 400 28px tahoma solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1324,"text":"Testing","line":201},{"action":"T","x":100,"y":1324,"text":" ","line":202},{"action":"T","x":108,"y":1324,"text":"texts","line":203},{"action":"Shape","line":204,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1359},{"type":"Vector","x":792,"y":1359},{"type":"Vector","x":791,"y":1360},{"type":"Vector","x":9,"y":1360}]},{"action":"Shape","line":205,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1359},{"type":"Vector","x":792,"y":1402},{"type":"Vector","x":791,"y":1401},{"type":"Vector","x":791,"y":1360}]},{"action":"Shape","line":206,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1402},{"type":"Vector","x":8,"y":1402},{"type":"Vector","x":9,"y":1401},{"type":"Vector","x":791,"y":1401}]},{"action":"Shape","line":207,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1402},{"type":"Vector","x":8,"y":1359},{"type":"Vector","x":9,"y":1360},{"type":"Vector","x":9,"y":1401}]},{"action":"Text","line":208,"font":"rgb(0,0,0) normal normal 400 34px tahoma solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1360,"text":"Testing","line":209},{"action":"T","x":119,"y":1360,"text":" ","line":210},{"action":"T","x":130,"y":1360,"text":"texts","line":211},{"action":"Shape","line":212,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1403},{"type":"Vector","x":792,"y":1403},{"type":"Vector","x":791,"y":1404},{"type":"Vector","x":9,"y":1404}]},{"action":"Shape","line":213,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1403},{"type":"Vector","x":792,"y":1454},{"type":"Vector","x":791,"y":1453},{"type":"Vector","x":791,"y":1404}]},{"action":"Shape","line":214,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1454},{"type":"Vector","x":8,"y":1454},{"type":"Vector","x":9,"y":1453},{"type":"Vector","x":791,"y":1453}]},{"action":"Shape","line":215,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1454},{"type":"Vector","x":8,"y":1403},{"type":"Vector","x":9,"y":1404},{"type":"Vector","x":9,"y":1453}]},{"action":"Text","line":216,"font":"rgb(0,0,0) normal normal 400 40px tahoma solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1404,"text":"Testing","line":217},{"action":"T","x":138,"y":1404,"text":" ","line":218},{"action":"T","x":151,"y":1404,"text":"texts","line":219},{"action":"Shape","line":220,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1455},{"type":"Vector","x":792,"y":1455},{"type":"Vector","x":791,"y":1456},{"type":"Vector","x":9,"y":1456}]},{"action":"Shape","line":221,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1455},{"type":"Vector","x":792,"y":1512},{"type":"Vector","x":791,"y":1511},{"type":"Vector","x":791,"y":1456}]},{"action":"Shape","line":222,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1512},{"type":"Vector","x":8,"y":1512},{"type":"Vector","x":9,"y":1511},{"type":"Vector","x":791,"y":1511}]},{"action":"Shape","line":223,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1512},{"type":"Vector","x":8,"y":1455},{"type":"Vector","x":9,"y":1456},{"type":"Vector","x":9,"y":1511}]},{"action":"Text","line":224,"font":"rgb(0,0,0) normal normal 400 46px tahoma solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1456,"text":"Testing","line":225},{"action":"T","x":158,"y":1456,"text":" ","line":226},{"action":"T","x":172,"y":1456,"text":"texts","line":227},{"action":"Shape","line":228,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1513},{"type":"Vector","x":792,"y":1513},{"type":"Vector","x":791,"y":1514},{"type":"Vector","x":9,"y":1514}]},{"action":"Shape","line":229,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1513},{"type":"Vector","x":792,"y":1578},{"type":"Vector","x":791,"y":1577},{"type":"Vector","x":791,"y":1514}]},{"action":"Shape","line":230,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1578},{"type":"Vector","x":8,"y":1578},{"type":"Vector","x":9,"y":1577},{"type":"Vector","x":791,"y":1577}]},{"action":"Shape","line":231,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1578},{"type":"Vector","x":8,"y":1513},{"type":"Vector","x":9,"y":1514},{"type":"Vector","x":9,"y":1577}]},{"action":"Text","line":232,"font":"rgb(0,0,0) normal normal 400 52px tahoma solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1514,"text":"Testing","line":233},{"action":"T","x":177,"y":1514,"text":" ","line":234},{"action":"T","x":193,"y":1514,"text":"texts","line":235},{"action":"Shape","line":236,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1579},{"type":"Vector","x":792,"y":1579},{"type":"Vector","x":791,"y":1580},{"type":"Vector","x":9,"y":1580}]},{"action":"Shape","line":237,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1579},{"type":"Vector","x":792,"y":1651},{"type":"Vector","x":791,"y":1650},{"type":"Vector","x":791,"y":1580}]},{"action":"Shape","line":238,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1651},{"type":"Vector","x":8,"y":1651},{"type":"Vector","x":9,"y":1650},{"type":"Vector","x":791,"y":1650}]},{"action":"Shape","line":239,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1651},{"type":"Vector","x":8,"y":1579},{"type":"Vector","x":9,"y":1580},{"type":"Vector","x":9,"y":1650}]},{"action":"Text","line":240,"font":"rgb(0,0,0) normal normal 400 58px tahoma solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1580,"text":"Testing","line":241},{"action":"T","x":196,"y":1580,"text":" ","line":242},{"action":"T","x":214,"y":1580,"text":"texts","line":243},{"action":"Shape","line":244,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1652},{"type":"Vector","x":792,"y":1652},{"type":"Vector","x":791,"y":1653},{"type":"Vector","x":9,"y":1653}]},{"action":"Shape","line":245,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1652},{"type":"Vector","x":792,"y":1731},{"type":"Vector","x":791,"y":1730},{"type":"Vector","x":791,"y":1653}]},{"action":"Shape","line":246,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1731},{"type":"Vector","x":8,"y":1731},{"type":"Vector","x":9,"y":1730},{"type":"Vector","x":791,"y":1730}]},{"action":"Shape","line":247,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1731},{"type":"Vector","x":8,"y":1652},{"type":"Vector","x":9,"y":1653},{"type":"Vector","x":9,"y":1730}]},{"action":"Text","line":248,"font":"rgb(0,0,0) normal normal 400 64px tahoma solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1653,"text":"Testing","line":249},{"action":"T","x":216,"y":1653,"text":" ","line":250},{"action":"T","x":236,"y":1653,"text":"texts","line":251},{"action":"Shape","line":252,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1732},{"type":"Vector","x":792,"y":1732},{"type":"Vector","x":791,"y":1733},{"type":"Vector","x":9,"y":1733}]},{"action":"Shape","line":253,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1732},{"type":"Vector","x":792,"y":1819},{"type":"Vector","x":791,"y":1818},{"type":"Vector","x":791,"y":1733}]},{"action":"Shape","line":254,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1819},{"type":"Vector","x":8,"y":1819},{"type":"Vector","x":9,"y":1818},{"type":"Vector","x":791,"y":1818}]},{"action":"Shape","line":255,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1819},{"type":"Vector","x":8,"y":1732},{"type":"Vector","x":9,"y":1733},{"type":"Vector","x":9,"y":1818}]},{"action":"Text","line":256,"font":"rgb(0,0,0) normal normal 400 70px tahoma solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1733,"text":"Testing","line":257},{"action":"T","x":235,"y":1733,"text":" ","line":258},{"action":"T","x":257,"y":1733,"text":"texts","line":259},{"action":"Shape","line":260,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1820},{"type":"Vector","x":792,"y":1820},{"type":"Vector","x":791,"y":1821},{"type":"Vector","x":9,"y":1821}]},{"action":"Shape","line":261,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1820},{"type":"Vector","x":792,"y":1913},{"type":"Vector","x":791,"y":1912},{"type":"Vector","x":791,"y":1821}]},{"action":"Shape","line":262,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1913},{"type":"Vector","x":8,"y":1913},{"type":"Vector","x":9,"y":1912},{"type":"Vector","x":791,"y":1912}]},{"action":"Shape","line":263,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1913},{"type":"Vector","x":8,"y":1820},{"type":"Vector","x":9,"y":1821},{"type":"Vector","x":9,"y":1912}]},{"action":"Text","line":264,"font":"rgb(0,0,0) normal normal 400 76px tahoma solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1821,"text":"Testing","line":265},{"action":"T","x":254,"y":1821,"text":" ","line":266},{"action":"T","x":278,"y":1821,"text":"texts","line":267},{"action":"Shape","line":268,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1914},{"type":"Vector","x":792,"y":1914},{"type":"Vector","x":791,"y":1915},{"type":"Vector","x":9,"y":1915}]},{"action":"Shape","line":269,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1914},{"type":"Vector","x":792,"y":1934},{"type":"Vector","x":791,"y":1933},{"type":"Vector","x":791,"y":1915}]},{"action":"Shape","line":270,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1934},{"type":"Vector","x":8,"y":1934},{"type":"Vector","x":9,"y":1933},{"type":"Vector","x":791,"y":1933}]},{"action":"Shape","line":271,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1934},{"type":"Vector","x":8,"y":1914},{"type":"Vector","x":9,"y":1915},{"type":"Vector","x":9,"y":1933}]},{"action":"Text","line":272,"font":"rgb(0,0,0) normal normal 400 16px courier new solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1915,"text":"Testing","line":273},{"action":"T","x":76,"y":1915,"text":" ","line":274},{"action":"T","x":86,"y":1915,"text":"texts","line":275},{"action":"Shape","line":276,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1935},{"type":"Vector","x":792,"y":1935},{"type":"Vector","x":791,"y":1936},{"type":"Vector","x":9,"y":1936}]},{"action":"Shape","line":277,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1935},{"type":"Vector","x":792,"y":1962},{"type":"Vector","x":791,"y":1961},{"type":"Vector","x":791,"y":1936}]},{"action":"Shape","line":278,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1962},{"type":"Vector","x":8,"y":1962},{"type":"Vector","x":9,"y":1961},{"type":"Vector","x":791,"y":1961}]},{"action":"Shape","line":279,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1962},{"type":"Vector","x":8,"y":1935},{"type":"Vector","x":9,"y":1936},{"type":"Vector","x":9,"y":1961}]},{"action":"Text","line":280,"font":"rgb(0,0,0) normal normal 400 22px courier new solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1936,"text":"Testing","line":281},{"action":"T","x":102,"y":1936,"text":" ","line":282},{"action":"T","x":115,"y":1936,"text":"texts","line":283},{"action":"Shape","line":284,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1963},{"type":"Vector","x":792,"y":1963},{"type":"Vector","x":791,"y":1964},{"type":"Vector","x":9,"y":1964}]},{"action":"Shape","line":285,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1963},{"type":"Vector","x":792,"y":1997},{"type":"Vector","x":791,"y":1996},{"type":"Vector","x":791,"y":1964}]},{"action":"Shape","line":286,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1997},{"type":"Vector","x":8,"y":1997},{"type":"Vector","x":9,"y":1996},{"type":"Vector","x":791,"y":1996}]},{"action":"Shape","line":287,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1997},{"type":"Vector","x":8,"y":1963},{"type":"Vector","x":9,"y":1964},{"type":"Vector","x":9,"y":1996}]},{"action":"Text","line":288,"font":"rgb(0,0,0) normal normal 400 28px courier new solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1965,"text":"Testing","line":289},{"action":"T","x":127,"y":1965,"text":" ","line":290},{"action":"T","x":144,"y":1965,"text":"texts","line":291},{"action":"Shape","line":292,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1998},{"type":"Vector","x":792,"y":1998},{"type":"Vector","x":791,"y":1999},{"type":"Vector","x":9,"y":1999}]},{"action":"Shape","line":293,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1998},{"type":"Vector","x":792,"y":2039},{"type":"Vector","x":791,"y":2038},{"type":"Vector","x":791,"y":1999}]},{"action":"Shape","line":294,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2039},{"type":"Vector","x":8,"y":2039},{"type":"Vector","x":9,"y":2038},{"type":"Vector","x":791,"y":2038}]},{"action":"Shape","line":295,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2039},{"type":"Vector","x":8,"y":1998},{"type":"Vector","x":9,"y":1999},{"type":"Vector","x":9,"y":2038}]},{"action":"Text","line":296,"font":"rgb(0,0,0) normal normal 400 34px courier new solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":1999,"text":"Testing","line":297},{"action":"T","x":152,"y":1999,"text":" ","line":298},{"action":"T","x":172,"y":1999,"text":"texts","line":299},{"action":"Shape","line":300,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2040},{"type":"Vector","x":792,"y":2040},{"type":"Vector","x":791,"y":2041},{"type":"Vector","x":9,"y":2041}]},{"action":"Shape","line":301,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2040},{"type":"Vector","x":792,"y":2087},{"type":"Vector","x":791,"y":2086},{"type":"Vector","x":791,"y":2041}]},{"action":"Shape","line":302,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2087},{"type":"Vector","x":8,"y":2087},{"type":"Vector","x":9,"y":2086},{"type":"Vector","x":791,"y":2086}]},{"action":"Shape","line":303,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2087},{"type":"Vector","x":8,"y":2040},{"type":"Vector","x":9,"y":2041},{"type":"Vector","x":9,"y":2086}]},{"action":"Text","line":304,"font":"rgb(0,0,0) normal normal 400 40px courier new solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":2041,"text":"Testing","line":305},{"action":"T","x":177,"y":2041,"text":" ","line":306},{"action":"T","x":201,"y":2041,"text":"texts","line":307},{"action":"Shape","line":308,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2088},{"type":"Vector","x":792,"y":2088},{"type":"Vector","x":791,"y":2089},{"type":"Vector","x":9,"y":2089}]},{"action":"Shape","line":309,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2088},{"type":"Vector","x":792,"y":2142},{"type":"Vector","x":791,"y":2141},{"type":"Vector","x":791,"y":2089}]},{"action":"Shape","line":310,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2142},{"type":"Vector","x":8,"y":2142},{"type":"Vector","x":9,"y":2141},{"type":"Vector","x":791,"y":2141}]},{"action":"Shape","line":311,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2142},{"type":"Vector","x":8,"y":2088},{"type":"Vector","x":9,"y":2089},{"type":"Vector","x":9,"y":2141}]},{"action":"Text","line":312,"font":"rgb(0,0,0) normal normal 400 46px courier new solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":2089,"text":"Testing","line":313},{"action":"T","x":202,"y":2089,"text":" ","line":314},{"action":"T","x":230,"y":2089,"text":"texts","line":315},{"action":"Shape","line":316,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2143},{"type":"Vector","x":792,"y":2143},{"type":"Vector","x":791,"y":2144},{"type":"Vector","x":9,"y":2144}]},{"action":"Shape","line":317,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2143},{"type":"Vector","x":792,"y":2204},{"type":"Vector","x":791,"y":2203},{"type":"Vector","x":791,"y":2144}]},{"action":"Shape","line":318,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2204},{"type":"Vector","x":8,"y":2204},{"type":"Vector","x":9,"y":2203},{"type":"Vector","x":791,"y":2203}]},{"action":"Shape","line":319,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2204},{"type":"Vector","x":8,"y":2143},{"type":"Vector","x":9,"y":2144},{"type":"Vector","x":9,"y":2203}]},{"action":"Text","line":320,"font":"rgb(0,0,0) normal normal 400 52px courier new solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":2145,"text":"Testing","line":321},{"action":"T","x":228,"y":2145,"text":" ","line":322},{"action":"T","x":259,"y":2145,"text":"texts","line":323},{"action":"Shape","line":324,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2205},{"type":"Vector","x":792,"y":2205},{"type":"Vector","x":791,"y":2206},{"type":"Vector","x":9,"y":2206}]},{"action":"Shape","line":325,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2205},{"type":"Vector","x":792,"y":2273},{"type":"Vector","x":791,"y":2272},{"type":"Vector","x":791,"y":2206}]},{"action":"Shape","line":326,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2273},{"type":"Vector","x":8,"y":2273},{"type":"Vector","x":9,"y":2272},{"type":"Vector","x":791,"y":2272}]},{"action":"Shape","line":327,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2273},{"type":"Vector","x":8,"y":2205},{"type":"Vector","x":9,"y":2206},{"type":"Vector","x":9,"y":2272}]},{"action":"Text","line":328,"font":"rgb(0,0,0) normal normal 400 58px courier new solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":2206,"text":"Testing","line":329},{"action":"T","x":253,"y":2206,"text":" ","line":330},{"action":"T","x":288,"y":2206,"text":"texts","line":331},{"action":"Shape","line":332,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2274},{"type":"Vector","x":792,"y":2274},{"type":"Vector","x":791,"y":2275},{"type":"Vector","x":9,"y":2275}]},{"action":"Shape","line":333,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2274},{"type":"Vector","x":792,"y":2349},{"type":"Vector","x":791,"y":2348},{"type":"Vector","x":791,"y":2275}]},{"action":"Shape","line":334,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2349},{"type":"Vector","x":8,"y":2349},{"type":"Vector","x":9,"y":2348},{"type":"Vector","x":791,"y":2348}]},{"action":"Shape","line":335,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2349},{"type":"Vector","x":8,"y":2274},{"type":"Vector","x":9,"y":2275},{"type":"Vector","x":9,"y":2348}]},{"action":"Text","line":336,"font":"rgb(0,0,0) normal normal 400 64px courier new solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":2275,"text":"Testing","line":337},{"action":"T","x":278,"y":2275,"text":" ","line":338},{"action":"T","x":316,"y":2275,"text":"texts","line":339},{"action":"Shape","line":340,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2350},{"type":"Vector","x":792,"y":2350},{"type":"Vector","x":791,"y":2351},{"type":"Vector","x":9,"y":2351}]},{"action":"Shape","line":341,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2350},{"type":"Vector","x":792,"y":2431},{"type":"Vector","x":791,"y":2430},{"type":"Vector","x":791,"y":2351}]},{"action":"Shape","line":342,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2431},{"type":"Vector","x":8,"y":2431},{"type":"Vector","x":9,"y":2430},{"type":"Vector","x":791,"y":2430}]},{"action":"Shape","line":343,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2431},{"type":"Vector","x":8,"y":2350},{"type":"Vector","x":9,"y":2351},{"type":"Vector","x":9,"y":2430}]},{"action":"Text","line":344,"font":"rgb(0,0,0) normal normal 400 70px courier new solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":2351,"text":"Testing","line":345},{"action":"T","x":303,"y":2351,"text":" ","line":346},{"action":"T","x":345,"y":2351,"text":"texts","line":347},{"action":"Shape","line":348,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2432},{"type":"Vector","x":792,"y":2432},{"type":"Vector","x":791,"y":2433},{"type":"Vector","x":9,"y":2433}]},{"action":"Shape","line":349,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2432},{"type":"Vector","x":792,"y":2520},{"type":"Vector","x":791,"y":2519},{"type":"Vector","x":791,"y":2433}]},{"action":"Shape","line":350,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2520},{"type":"Vector","x":8,"y":2520},{"type":"Vector","x":9,"y":2519},{"type":"Vector","x":791,"y":2519}]},{"action":"Shape","line":351,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2520},{"type":"Vector","x":8,"y":2432},{"type":"Vector","x":9,"y":2433},{"type":"Vector","x":9,"y":2519}]},{"action":"Text","line":352,"font":"rgb(0,0,0) normal normal 400 76px courier new solid rgb(0,0,0) line-through"},{"action":"T","x":9,"y":2433,"text":"Testing","line":353},{"action":"T","x":328,"y":2433,"text":" ","line":354},{"action":"T","x":374,"y":2433,"text":"texts","line":355}],"/tests/reftests/text/multiple.html":[{"action":"Window","line":1,"width":800,"height":2528},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":2528,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Shape","line":4,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":792,"y":8},{"type":"Vector","x":791,"y":9},{"type":"Vector","x":9,"y":9}]},{"action":"Shape","line":5,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":8},{"type":"Vector","x":792,"y":28},{"type":"Vector","x":791,"y":27},{"type":"Vector","x":791,"y":9}]},{"action":"Shape","line":6,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":28},{"type":"Vector","x":8,"y":28},{"type":"Vector","x":9,"y":27},{"type":"Vector","x":791,"y":27}]},{"action":"Shape","line":7,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":28},{"type":"Vector","x":8,"y":8},{"type":"Vector","x":9,"y":9},{"type":"Vector","x":9,"y":27}]},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 400 16px arial solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":9,"text":"Testing","line":9},{"action":"T","x":60,"y":9,"text":" ","line":10},{"action":"T","x":64,"y":9,"text":"texts","line":11},{"action":"Shape","line":12,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":29},{"type":"Vector","x":792,"y":29},{"type":"Vector","x":791,"y":30},{"type":"Vector","x":9,"y":30}]},{"action":"Shape","line":13,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":29},{"type":"Vector","x":792,"y":57},{"type":"Vector","x":791,"y":56},{"type":"Vector","x":791,"y":30}]},{"action":"Shape","line":14,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":57},{"type":"Vector","x":8,"y":57},{"type":"Vector","x":9,"y":56},{"type":"Vector","x":791,"y":56}]},{"action":"Shape","line":15,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":57},{"type":"Vector","x":8,"y":29},{"type":"Vector","x":9,"y":30},{"type":"Vector","x":9,"y":56}]},{"action":"Text","line":16,"font":"rgb(0,0,0) normal normal 400 22px arial solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":31,"text":"Testing","line":17},{"action":"T","x":79,"y":31,"text":" ","line":18},{"action":"T","x":85,"y":31,"text":"texts","line":19},{"action":"Shape","line":20,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":58},{"type":"Vector","x":792,"y":58},{"type":"Vector","x":791,"y":59},{"type":"Vector","x":9,"y":59}]},{"action":"Shape","line":21,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":58},{"type":"Vector","x":792,"y":92},{"type":"Vector","x":791,"y":91},{"type":"Vector","x":791,"y":59}]},{"action":"Shape","line":22,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":92},{"type":"Vector","x":8,"y":92},{"type":"Vector","x":9,"y":91},{"type":"Vector","x":791,"y":91}]},{"action":"Shape","line":23,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":92},{"type":"Vector","x":8,"y":58},{"type":"Vector","x":9,"y":59},{"type":"Vector","x":9,"y":91}]},{"action":"Text","line":24,"font":"rgb(0,0,0) normal normal 400 28px arial solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":59,"text":"Testing","line":25},{"action":"T","x":98,"y":59,"text":" ","line":26},{"action":"T","x":106,"y":59,"text":"texts","line":27},{"action":"Shape","line":28,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":93},{"type":"Vector","x":792,"y":93},{"type":"Vector","x":791,"y":94},{"type":"Vector","x":9,"y":94}]},{"action":"Shape","line":29,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":93},{"type":"Vector","x":792,"y":134},{"type":"Vector","x":791,"y":133},{"type":"Vector","x":791,"y":94}]},{"action":"Shape","line":30,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":134},{"type":"Vector","x":8,"y":134},{"type":"Vector","x":9,"y":133},{"type":"Vector","x":791,"y":133}]},{"action":"Shape","line":31,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":134},{"type":"Vector","x":8,"y":93},{"type":"Vector","x":9,"y":94},{"type":"Vector","x":9,"y":133}]},{"action":"Text","line":32,"font":"rgb(0,0,0) normal normal 400 34px arial solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":94,"text":"Testing","line":33},{"action":"T","x":117,"y":94,"text":" ","line":34},{"action":"T","x":126,"y":94,"text":"texts","line":35},{"action":"Shape","line":36,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":135},{"type":"Vector","x":792,"y":135},{"type":"Vector","x":791,"y":136},{"type":"Vector","x":9,"y":136}]},{"action":"Shape","line":37,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":135},{"type":"Vector","x":792,"y":183},{"type":"Vector","x":791,"y":182},{"type":"Vector","x":791,"y":136}]},{"action":"Shape","line":38,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":183},{"type":"Vector","x":8,"y":183},{"type":"Vector","x":9,"y":182},{"type":"Vector","x":791,"y":182}]},{"action":"Shape","line":39,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":183},{"type":"Vector","x":8,"y":135},{"type":"Vector","x":9,"y":136},{"type":"Vector","x":9,"y":182}]},{"action":"Text","line":40,"font":"rgb(0,0,0) normal normal 400 40px arial solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":136,"text":"Testing","line":41},{"action":"T","x":136,"y":136,"text":" ","line":42},{"action":"T","x":147,"y":136,"text":"texts","line":43},{"action":"Shape","line":44,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":184},{"type":"Vector","x":792,"y":184},{"type":"Vector","x":791,"y":185},{"type":"Vector","x":9,"y":185}]},{"action":"Shape","line":45,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":184},{"type":"Vector","x":792,"y":239},{"type":"Vector","x":791,"y":238},{"type":"Vector","x":791,"y":185}]},{"action":"Shape","line":46,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":239},{"type":"Vector","x":8,"y":239},{"type":"Vector","x":9,"y":238},{"type":"Vector","x":791,"y":238}]},{"action":"Shape","line":47,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":239},{"type":"Vector","x":8,"y":184},{"type":"Vector","x":9,"y":185},{"type":"Vector","x":9,"y":238}]},{"action":"Text","line":48,"font":"rgb(0,0,0) normal normal 400 46px arial solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":186,"text":"Testing","line":49},{"action":"T","x":155,"y":186,"text":" ","line":50},{"action":"T","x":168,"y":186,"text":"texts","line":51},{"action":"Shape","line":52,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":240},{"type":"Vector","x":792,"y":240},{"type":"Vector","x":791,"y":241},{"type":"Vector","x":9,"y":241}]},{"action":"Shape","line":53,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":240},{"type":"Vector","x":792,"y":302},{"type":"Vector","x":791,"y":301},{"type":"Vector","x":791,"y":241}]},{"action":"Shape","line":54,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":302},{"type":"Vector","x":8,"y":302},{"type":"Vector","x":9,"y":301},{"type":"Vector","x":791,"y":301}]},{"action":"Shape","line":55,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":302},{"type":"Vector","x":8,"y":240},{"type":"Vector","x":9,"y":241},{"type":"Vector","x":9,"y":301}]},{"action":"Text","line":56,"font":"rgb(0,0,0) normal normal 400 52px arial solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":242,"text":"Testing","line":57},{"action":"T","x":174,"y":242,"text":" ","line":58},{"action":"T","x":188,"y":242,"text":"texts","line":59},{"action":"Shape","line":60,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":303},{"type":"Vector","x":792,"y":303},{"type":"Vector","x":791,"y":304},{"type":"Vector","x":9,"y":304}]},{"action":"Shape","line":61,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":303},{"type":"Vector","x":792,"y":371},{"type":"Vector","x":791,"y":370},{"type":"Vector","x":791,"y":304}]},{"action":"Shape","line":62,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":371},{"type":"Vector","x":8,"y":371},{"type":"Vector","x":9,"y":370},{"type":"Vector","x":791,"y":370}]},{"action":"Shape","line":63,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":371},{"type":"Vector","x":8,"y":303},{"type":"Vector","x":9,"y":304},{"type":"Vector","x":9,"y":370}]},{"action":"Text","line":64,"font":"rgb(0,0,0) normal normal 400 58px arial solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":305,"text":"Testing","line":65},{"action":"T","x":193,"y":305,"text":" ","line":66},{"action":"T","x":209,"y":305,"text":"texts","line":67},{"action":"Shape","line":68,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":372},{"type":"Vector","x":792,"y":372},{"type":"Vector","x":791,"y":373},{"type":"Vector","x":9,"y":373}]},{"action":"Shape","line":69,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":372},{"type":"Vector","x":792,"y":448},{"type":"Vector","x":791,"y":447},{"type":"Vector","x":791,"y":373}]},{"action":"Shape","line":70,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":448},{"type":"Vector","x":8,"y":448},{"type":"Vector","x":9,"y":447},{"type":"Vector","x":791,"y":447}]},{"action":"Shape","line":71,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":448},{"type":"Vector","x":8,"y":372},{"type":"Vector","x":9,"y":373},{"type":"Vector","x":9,"y":447}]},{"action":"Text","line":72,"font":"rgb(0,0,0) normal normal 400 64px arial solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":374,"text":"Testing","line":73},{"action":"T","x":212,"y":374,"text":" ","line":74},{"action":"T","x":230,"y":374,"text":"texts","line":75},{"action":"Shape","line":76,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":449},{"type":"Vector","x":792,"y":449},{"type":"Vector","x":791,"y":450},{"type":"Vector","x":9,"y":450}]},{"action":"Shape","line":77,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":449},{"type":"Vector","x":792,"y":531},{"type":"Vector","x":791,"y":530},{"type":"Vector","x":791,"y":450}]},{"action":"Shape","line":78,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":531},{"type":"Vector","x":8,"y":531},{"type":"Vector","x":9,"y":530},{"type":"Vector","x":791,"y":530}]},{"action":"Shape","line":79,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":531},{"type":"Vector","x":8,"y":449},{"type":"Vector","x":9,"y":450},{"type":"Vector","x":9,"y":530}]},{"action":"Text","line":80,"font":"rgb(0,0,0) normal normal 400 70px arial solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":451,"text":"Testing","line":81},{"action":"T","x":231,"y":451,"text":" ","line":82},{"action":"T","x":250,"y":451,"text":"texts","line":83},{"action":"Shape","line":84,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":532},{"type":"Vector","x":792,"y":532},{"type":"Vector","x":791,"y":533},{"type":"Vector","x":9,"y":533}]},{"action":"Shape","line":85,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":532},{"type":"Vector","x":792,"y":622},{"type":"Vector","x":791,"y":621},{"type":"Vector","x":791,"y":533}]},{"action":"Shape","line":86,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":622},{"type":"Vector","x":8,"y":622},{"type":"Vector","x":9,"y":621},{"type":"Vector","x":791,"y":621}]},{"action":"Shape","line":87,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":622},{"type":"Vector","x":8,"y":532},{"type":"Vector","x":9,"y":533},{"type":"Vector","x":9,"y":621}]},{"action":"Text","line":88,"font":"rgb(0,0,0) normal normal 400 76px arial solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":535,"text":"Testing","line":89},{"action":"T","x":250,"y":535,"text":" ","line":90},{"action":"T","x":271,"y":535,"text":"texts","line":91},{"action":"Shape","line":92,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":623},{"type":"Vector","x":792,"y":623},{"type":"Vector","x":791,"y":624},{"type":"Vector","x":9,"y":624}]},{"action":"Shape","line":93,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":623},{"type":"Vector","x":792,"y":644},{"type":"Vector","x":791,"y":643},{"type":"Vector","x":791,"y":624}]},{"action":"Shape","line":94,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":644},{"type":"Vector","x":8,"y":644},{"type":"Vector","x":9,"y":643},{"type":"Vector","x":791,"y":643}]},{"action":"Shape","line":95,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":644},{"type":"Vector","x":8,"y":623},{"type":"Vector","x":9,"y":624},{"type":"Vector","x":9,"y":643}]},{"action":"Text","line":96,"font":"rgb(0,0,0) normal normal 400 16px verdana solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":624,"text":"Testing","line":97},{"action":"T","x":66,"y":624,"text":" ","line":98},{"action":"T","x":72,"y":624,"text":"texts","line":99},{"action":"Shape","line":100,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":645},{"type":"Vector","x":792,"y":645},{"type":"Vector","x":791,"y":646},{"type":"Vector","x":9,"y":646}]},{"action":"Shape","line":101,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":645},{"type":"Vector","x":792,"y":674},{"type":"Vector","x":791,"y":673},{"type":"Vector","x":791,"y":646}]},{"action":"Shape","line":102,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":674},{"type":"Vector","x":8,"y":674},{"type":"Vector","x":9,"y":673},{"type":"Vector","x":791,"y":673}]},{"action":"Shape","line":103,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":674},{"type":"Vector","x":8,"y":645},{"type":"Vector","x":9,"y":646},{"type":"Vector","x":9,"y":673}]},{"action":"Text","line":104,"font":"rgb(0,0,0) normal normal 400 22px verdana solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":646,"text":"Testing","line":105},{"action":"T","x":87,"y":646,"text":" ","line":106},{"action":"T","x":95,"y":646,"text":"texts","line":107},{"action":"Shape","line":108,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":675},{"type":"Vector","x":792,"y":675},{"type":"Vector","x":791,"y":676},{"type":"Vector","x":9,"y":676}]},{"action":"Shape","line":109,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":675},{"type":"Vector","x":792,"y":711},{"type":"Vector","x":791,"y":710},{"type":"Vector","x":791,"y":676}]},{"action":"Shape","line":110,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":711},{"type":"Vector","x":8,"y":711},{"type":"Vector","x":9,"y":710},{"type":"Vector","x":791,"y":710}]},{"action":"Shape","line":111,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":711},{"type":"Vector","x":8,"y":675},{"type":"Vector","x":9,"y":676},{"type":"Vector","x":9,"y":710}]},{"action":"Text","line":112,"font":"rgb(0,0,0) normal normal 400 28px verdana solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":676,"text":"Testing","line":113},{"action":"T","x":108,"y":676,"text":" ","line":114},{"action":"T","x":118,"y":676,"text":"texts","line":115},{"action":"Shape","line":116,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":712},{"type":"Vector","x":792,"y":712},{"type":"Vector","x":791,"y":713},{"type":"Vector","x":9,"y":713}]},{"action":"Shape","line":117,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":712},{"type":"Vector","x":792,"y":755},{"type":"Vector","x":791,"y":754},{"type":"Vector","x":791,"y":713}]},{"action":"Shape","line":118,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":755},{"type":"Vector","x":8,"y":755},{"type":"Vector","x":9,"y":754},{"type":"Vector","x":791,"y":754}]},{"action":"Shape","line":119,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":755},{"type":"Vector","x":8,"y":712},{"type":"Vector","x":9,"y":713},{"type":"Vector","x":9,"y":754}]},{"action":"Text","line":120,"font":"rgb(0,0,0) normal normal 400 34px verdana solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":713,"text":"Testing","line":121},{"action":"T","x":130,"y":713,"text":" ","line":122},{"action":"T","x":142,"y":713,"text":"texts","line":123},{"action":"Shape","line":124,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":756},{"type":"Vector","x":792,"y":756},{"type":"Vector","x":791,"y":757},{"type":"Vector","x":9,"y":757}]},{"action":"Shape","line":125,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":756},{"type":"Vector","x":792,"y":807},{"type":"Vector","x":791,"y":806},{"type":"Vector","x":791,"y":757}]},{"action":"Shape","line":126,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":807},{"type":"Vector","x":8,"y":807},{"type":"Vector","x":9,"y":806},{"type":"Vector","x":791,"y":806}]},{"action":"Shape","line":127,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":807},{"type":"Vector","x":8,"y":756},{"type":"Vector","x":9,"y":757},{"type":"Vector","x":9,"y":806}]},{"action":"Text","line":128,"font":"rgb(0,0,0) normal normal 400 40px verdana solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":757,"text":"Testing","line":129},{"action":"T","x":151,"y":757,"text":" ","line":130},{"action":"T","x":165,"y":757,"text":"texts","line":131},{"action":"Shape","line":132,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":808},{"type":"Vector","x":792,"y":808},{"type":"Vector","x":791,"y":809},{"type":"Vector","x":9,"y":809}]},{"action":"Shape","line":133,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":808},{"type":"Vector","x":792,"y":866},{"type":"Vector","x":791,"y":865},{"type":"Vector","x":791,"y":809}]},{"action":"Shape","line":134,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":866},{"type":"Vector","x":8,"y":866},{"type":"Vector","x":9,"y":865},{"type":"Vector","x":791,"y":865}]},{"action":"Shape","line":135,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":866},{"type":"Vector","x":8,"y":808},{"type":"Vector","x":9,"y":809},{"type":"Vector","x":9,"y":865}]},{"action":"Text","line":136,"font":"rgb(0,0,0) normal normal 400 46px verdana solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":809,"text":"Testing","line":137},{"action":"T","x":172,"y":809,"text":" ","line":138},{"action":"T","x":188,"y":809,"text":"texts","line":139},{"action":"Shape","line":140,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":867},{"type":"Vector","x":792,"y":867},{"type":"Vector","x":791,"y":868},{"type":"Vector","x":9,"y":868}]},{"action":"Shape","line":141,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":867},{"type":"Vector","x":792,"y":932},{"type":"Vector","x":791,"y":931},{"type":"Vector","x":791,"y":868}]},{"action":"Shape","line":142,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":932},{"type":"Vector","x":8,"y":932},{"type":"Vector","x":9,"y":931},{"type":"Vector","x":791,"y":931}]},{"action":"Shape","line":143,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":932},{"type":"Vector","x":8,"y":867},{"type":"Vector","x":9,"y":868},{"type":"Vector","x":9,"y":931}]},{"action":"Text","line":144,"font":"rgb(0,0,0) normal normal 400 52px verdana solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":868,"text":"Testing","line":145},{"action":"T","x":194,"y":868,"text":" ","line":146},{"action":"T","x":212,"y":868,"text":"texts","line":147},{"action":"Shape","line":148,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":933},{"type":"Vector","x":792,"y":933},{"type":"Vector","x":791,"y":934},{"type":"Vector","x":9,"y":934}]},{"action":"Shape","line":149,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":933},{"type":"Vector","x":792,"y":1005},{"type":"Vector","x":791,"y":1004},{"type":"Vector","x":791,"y":934}]},{"action":"Shape","line":150,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1005},{"type":"Vector","x":8,"y":1005},{"type":"Vector","x":9,"y":1004},{"type":"Vector","x":791,"y":1004}]},{"action":"Shape","line":151,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1005},{"type":"Vector","x":8,"y":933},{"type":"Vector","x":9,"y":934},{"type":"Vector","x":9,"y":1004}]},{"action":"Text","line":152,"font":"rgb(0,0,0) normal normal 400 58px verdana solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":934,"text":"Testing","line":153},{"action":"T","x":215,"y":934,"text":" ","line":154},{"action":"T","x":235,"y":934,"text":"texts","line":155},{"action":"Shape","line":156,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1006},{"type":"Vector","x":792,"y":1006},{"type":"Vector","x":791,"y":1007},{"type":"Vector","x":9,"y":1007}]},{"action":"Shape","line":157,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1006},{"type":"Vector","x":792,"y":1086},{"type":"Vector","x":791,"y":1085},{"type":"Vector","x":791,"y":1007}]},{"action":"Shape","line":158,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1086},{"type":"Vector","x":8,"y":1086},{"type":"Vector","x":9,"y":1085},{"type":"Vector","x":791,"y":1085}]},{"action":"Shape","line":159,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1086},{"type":"Vector","x":8,"y":1006},{"type":"Vector","x":9,"y":1007},{"type":"Vector","x":9,"y":1085}]},{"action":"Text","line":160,"font":"rgb(0,0,0) normal normal 400 64px verdana solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1007,"text":"Testing","line":161},{"action":"T","x":236,"y":1007,"text":" ","line":162},{"action":"T","x":259,"y":1007,"text":"texts","line":163},{"action":"Shape","line":164,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1087},{"type":"Vector","x":792,"y":1087},{"type":"Vector","x":791,"y":1088},{"type":"Vector","x":9,"y":1088}]},{"action":"Shape","line":165,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1087},{"type":"Vector","x":792,"y":1174},{"type":"Vector","x":791,"y":1173},{"type":"Vector","x":791,"y":1088}]},{"action":"Shape","line":166,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1174},{"type":"Vector","x":8,"y":1174},{"type":"Vector","x":9,"y":1173},{"type":"Vector","x":791,"y":1173}]},{"action":"Shape","line":167,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1174},{"type":"Vector","x":8,"y":1087},{"type":"Vector","x":9,"y":1088},{"type":"Vector","x":9,"y":1173}]},{"action":"Text","line":168,"font":"rgb(0,0,0) normal normal 400 70px verdana solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1088,"text":"Testing","line":169},{"action":"T","x":258,"y":1088,"text":" ","line":170},{"action":"T","x":282,"y":1088,"text":"texts","line":171},{"action":"Shape","line":172,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1175},{"type":"Vector","x":792,"y":1175},{"type":"Vector","x":791,"y":1176},{"type":"Vector","x":9,"y":1176}]},{"action":"Shape","line":173,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1175},{"type":"Vector","x":792,"y":1270},{"type":"Vector","x":791,"y":1269},{"type":"Vector","x":791,"y":1176}]},{"action":"Shape","line":174,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1270},{"type":"Vector","x":8,"y":1270},{"type":"Vector","x":9,"y":1269},{"type":"Vector","x":791,"y":1269}]},{"action":"Shape","line":175,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1270},{"type":"Vector","x":8,"y":1175},{"type":"Vector","x":9,"y":1176},{"type":"Vector","x":9,"y":1269}]},{"action":"Text","line":176,"font":"rgb(0,0,0) normal normal 400 76px verdana solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1177,"text":"Testing","line":177},{"action":"T","x":279,"y":1177,"text":" ","line":178},{"action":"T","x":306,"y":1177,"text":"texts","line":179},{"action":"Shape","line":180,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1271},{"type":"Vector","x":792,"y":1271},{"type":"Vector","x":791,"y":1272},{"type":"Vector","x":9,"y":1272}]},{"action":"Shape","line":181,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1271},{"type":"Vector","x":792,"y":1292},{"type":"Vector","x":791,"y":1291},{"type":"Vector","x":791,"y":1272}]},{"action":"Shape","line":182,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1292},{"type":"Vector","x":8,"y":1292},{"type":"Vector","x":9,"y":1291},{"type":"Vector","x":791,"y":1291}]},{"action":"Shape","line":183,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1292},{"type":"Vector","x":8,"y":1271},{"type":"Vector","x":9,"y":1272},{"type":"Vector","x":9,"y":1291}]},{"action":"Text","line":184,"font":"rgb(0,0,0) normal normal 400 16px tahoma solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1272,"text":"Testing","line":185},{"action":"T","x":61,"y":1272,"text":" ","line":186},{"action":"T","x":66,"y":1272,"text":"texts","line":187},{"action":"Shape","line":188,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1293},{"type":"Vector","x":792,"y":1293},{"type":"Vector","x":791,"y":1294},{"type":"Vector","x":9,"y":1294}]},{"action":"Shape","line":189,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1293},{"type":"Vector","x":792,"y":1321},{"type":"Vector","x":791,"y":1320},{"type":"Vector","x":791,"y":1294}]},{"action":"Shape","line":190,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1321},{"type":"Vector","x":8,"y":1321},{"type":"Vector","x":9,"y":1320},{"type":"Vector","x":791,"y":1320}]},{"action":"Shape","line":191,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1321},{"type":"Vector","x":8,"y":1293},{"type":"Vector","x":9,"y":1294},{"type":"Vector","x":9,"y":1320}]},{"action":"Text","line":192,"font":"rgb(0,0,0) normal normal 400 22px tahoma solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1294,"text":"Testing","line":193},{"action":"T","x":80,"y":1294,"text":" ","line":194},{"action":"T","x":87,"y":1294,"text":"texts","line":195},{"action":"Shape","line":196,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1322},{"type":"Vector","x":792,"y":1322},{"type":"Vector","x":791,"y":1323},{"type":"Vector","x":9,"y":1323}]},{"action":"Shape","line":197,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1322},{"type":"Vector","x":792,"y":1358},{"type":"Vector","x":791,"y":1357},{"type":"Vector","x":791,"y":1323}]},{"action":"Shape","line":198,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1358},{"type":"Vector","x":8,"y":1358},{"type":"Vector","x":9,"y":1357},{"type":"Vector","x":791,"y":1357}]},{"action":"Shape","line":199,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1358},{"type":"Vector","x":8,"y":1322},{"type":"Vector","x":9,"y":1323},{"type":"Vector","x":9,"y":1357}]},{"action":"Text","line":200,"font":"rgb(0,0,0) normal normal 400 28px tahoma solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1324,"text":"Testing","line":201},{"action":"T","x":100,"y":1324,"text":" ","line":202},{"action":"T","x":108,"y":1324,"text":"texts","line":203},{"action":"Shape","line":204,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1359},{"type":"Vector","x":792,"y":1359},{"type":"Vector","x":791,"y":1360},{"type":"Vector","x":9,"y":1360}]},{"action":"Shape","line":205,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1359},{"type":"Vector","x":792,"y":1402},{"type":"Vector","x":791,"y":1401},{"type":"Vector","x":791,"y":1360}]},{"action":"Shape","line":206,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1402},{"type":"Vector","x":8,"y":1402},{"type":"Vector","x":9,"y":1401},{"type":"Vector","x":791,"y":1401}]},{"action":"Shape","line":207,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1402},{"type":"Vector","x":8,"y":1359},{"type":"Vector","x":9,"y":1360},{"type":"Vector","x":9,"y":1401}]},{"action":"Text","line":208,"font":"rgb(0,0,0) normal normal 400 34px tahoma solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1360,"text":"Testing","line":209},{"action":"T","x":119,"y":1360,"text":" ","line":210},{"action":"T","x":130,"y":1360,"text":"texts","line":211},{"action":"Shape","line":212,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1403},{"type":"Vector","x":792,"y":1403},{"type":"Vector","x":791,"y":1404},{"type":"Vector","x":9,"y":1404}]},{"action":"Shape","line":213,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1403},{"type":"Vector","x":792,"y":1454},{"type":"Vector","x":791,"y":1453},{"type":"Vector","x":791,"y":1404}]},{"action":"Shape","line":214,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1454},{"type":"Vector","x":8,"y":1454},{"type":"Vector","x":9,"y":1453},{"type":"Vector","x":791,"y":1453}]},{"action":"Shape","line":215,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1454},{"type":"Vector","x":8,"y":1403},{"type":"Vector","x":9,"y":1404},{"type":"Vector","x":9,"y":1453}]},{"action":"Text","line":216,"font":"rgb(0,0,0) normal normal 400 40px tahoma solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1404,"text":"Testing","line":217},{"action":"T","x":138,"y":1404,"text":" ","line":218},{"action":"T","x":151,"y":1404,"text":"texts","line":219},{"action":"Shape","line":220,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1455},{"type":"Vector","x":792,"y":1455},{"type":"Vector","x":791,"y":1456},{"type":"Vector","x":9,"y":1456}]},{"action":"Shape","line":221,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1455},{"type":"Vector","x":792,"y":1512},{"type":"Vector","x":791,"y":1511},{"type":"Vector","x":791,"y":1456}]},{"action":"Shape","line":222,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1512},{"type":"Vector","x":8,"y":1512},{"type":"Vector","x":9,"y":1511},{"type":"Vector","x":791,"y":1511}]},{"action":"Shape","line":223,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1512},{"type":"Vector","x":8,"y":1455},{"type":"Vector","x":9,"y":1456},{"type":"Vector","x":9,"y":1511}]},{"action":"Text","line":224,"font":"rgb(0,0,0) normal normal 400 46px tahoma solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1456,"text":"Testing","line":225},{"action":"T","x":158,"y":1456,"text":" ","line":226},{"action":"T","x":172,"y":1456,"text":"texts","line":227},{"action":"Shape","line":228,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1513},{"type":"Vector","x":792,"y":1513},{"type":"Vector","x":791,"y":1514},{"type":"Vector","x":9,"y":1514}]},{"action":"Shape","line":229,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1513},{"type":"Vector","x":792,"y":1578},{"type":"Vector","x":791,"y":1577},{"type":"Vector","x":791,"y":1514}]},{"action":"Shape","line":230,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1578},{"type":"Vector","x":8,"y":1578},{"type":"Vector","x":9,"y":1577},{"type":"Vector","x":791,"y":1577}]},{"action":"Shape","line":231,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1578},{"type":"Vector","x":8,"y":1513},{"type":"Vector","x":9,"y":1514},{"type":"Vector","x":9,"y":1577}]},{"action":"Text","line":232,"font":"rgb(0,0,0) normal normal 400 52px tahoma solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1514,"text":"Testing","line":233},{"action":"T","x":177,"y":1514,"text":" ","line":234},{"action":"T","x":193,"y":1514,"text":"texts","line":235},{"action":"Shape","line":236,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1579},{"type":"Vector","x":792,"y":1579},{"type":"Vector","x":791,"y":1580},{"type":"Vector","x":9,"y":1580}]},{"action":"Shape","line":237,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1579},{"type":"Vector","x":792,"y":1651},{"type":"Vector","x":791,"y":1650},{"type":"Vector","x":791,"y":1580}]},{"action":"Shape","line":238,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1651},{"type":"Vector","x":8,"y":1651},{"type":"Vector","x":9,"y":1650},{"type":"Vector","x":791,"y":1650}]},{"action":"Shape","line":239,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1651},{"type":"Vector","x":8,"y":1579},{"type":"Vector","x":9,"y":1580},{"type":"Vector","x":9,"y":1650}]},{"action":"Text","line":240,"font":"rgb(0,0,0) normal normal 400 58px tahoma solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1580,"text":"Testing","line":241},{"action":"T","x":196,"y":1580,"text":" ","line":242},{"action":"T","x":214,"y":1580,"text":"texts","line":243},{"action":"Shape","line":244,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1652},{"type":"Vector","x":792,"y":1652},{"type":"Vector","x":791,"y":1653},{"type":"Vector","x":9,"y":1653}]},{"action":"Shape","line":245,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1652},{"type":"Vector","x":792,"y":1731},{"type":"Vector","x":791,"y":1730},{"type":"Vector","x":791,"y":1653}]},{"action":"Shape","line":246,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1731},{"type":"Vector","x":8,"y":1731},{"type":"Vector","x":9,"y":1730},{"type":"Vector","x":791,"y":1730}]},{"action":"Shape","line":247,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1731},{"type":"Vector","x":8,"y":1652},{"type":"Vector","x":9,"y":1653},{"type":"Vector","x":9,"y":1730}]},{"action":"Text","line":248,"font":"rgb(0,0,0) normal normal 400 64px tahoma solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1653,"text":"Testing","line":249},{"action":"T","x":216,"y":1653,"text":" ","line":250},{"action":"T","x":236,"y":1653,"text":"texts","line":251},{"action":"Shape","line":252,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1732},{"type":"Vector","x":792,"y":1732},{"type":"Vector","x":791,"y":1733},{"type":"Vector","x":9,"y":1733}]},{"action":"Shape","line":253,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1732},{"type":"Vector","x":792,"y":1819},{"type":"Vector","x":791,"y":1818},{"type":"Vector","x":791,"y":1733}]},{"action":"Shape","line":254,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1819},{"type":"Vector","x":8,"y":1819},{"type":"Vector","x":9,"y":1818},{"type":"Vector","x":791,"y":1818}]},{"action":"Shape","line":255,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1819},{"type":"Vector","x":8,"y":1732},{"type":"Vector","x":9,"y":1733},{"type":"Vector","x":9,"y":1818}]},{"action":"Text","line":256,"font":"rgb(0,0,0) normal normal 400 70px tahoma solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1733,"text":"Testing","line":257},{"action":"T","x":235,"y":1733,"text":" ","line":258},{"action":"T","x":257,"y":1733,"text":"texts","line":259},{"action":"Shape","line":260,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1820},{"type":"Vector","x":792,"y":1820},{"type":"Vector","x":791,"y":1821},{"type":"Vector","x":9,"y":1821}]},{"action":"Shape","line":261,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1820},{"type":"Vector","x":792,"y":1913},{"type":"Vector","x":791,"y":1912},{"type":"Vector","x":791,"y":1821}]},{"action":"Shape","line":262,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1913},{"type":"Vector","x":8,"y":1913},{"type":"Vector","x":9,"y":1912},{"type":"Vector","x":791,"y":1912}]},{"action":"Shape","line":263,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1913},{"type":"Vector","x":8,"y":1820},{"type":"Vector","x":9,"y":1821},{"type":"Vector","x":9,"y":1912}]},{"action":"Text","line":264,"font":"rgb(0,0,0) normal normal 400 76px tahoma solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1821,"text":"Testing","line":265},{"action":"T","x":254,"y":1821,"text":" ","line":266},{"action":"T","x":278,"y":1821,"text":"texts","line":267},{"action":"Shape","line":268,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1914},{"type":"Vector","x":792,"y":1914},{"type":"Vector","x":791,"y":1915},{"type":"Vector","x":9,"y":1915}]},{"action":"Shape","line":269,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1914},{"type":"Vector","x":792,"y":1934},{"type":"Vector","x":791,"y":1933},{"type":"Vector","x":791,"y":1915}]},{"action":"Shape","line":270,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1934},{"type":"Vector","x":8,"y":1934},{"type":"Vector","x":9,"y":1933},{"type":"Vector","x":791,"y":1933}]},{"action":"Shape","line":271,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1934},{"type":"Vector","x":8,"y":1914},{"type":"Vector","x":9,"y":1915},{"type":"Vector","x":9,"y":1933}]},{"action":"Text","line":272,"font":"rgb(0,0,0) normal normal 400 16px courier new solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1915,"text":"Testing","line":273},{"action":"T","x":76,"y":1915,"text":" ","line":274},{"action":"T","x":86,"y":1915,"text":"texts","line":275},{"action":"Shape","line":276,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1935},{"type":"Vector","x":792,"y":1935},{"type":"Vector","x":791,"y":1936},{"type":"Vector","x":9,"y":1936}]},{"action":"Shape","line":277,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1935},{"type":"Vector","x":792,"y":1962},{"type":"Vector","x":791,"y":1961},{"type":"Vector","x":791,"y":1936}]},{"action":"Shape","line":278,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1962},{"type":"Vector","x":8,"y":1962},{"type":"Vector","x":9,"y":1961},{"type":"Vector","x":791,"y":1961}]},{"action":"Shape","line":279,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1962},{"type":"Vector","x":8,"y":1935},{"type":"Vector","x":9,"y":1936},{"type":"Vector","x":9,"y":1961}]},{"action":"Text","line":280,"font":"rgb(0,0,0) normal normal 400 22px courier new solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1936,"text":"Testing","line":281},{"action":"T","x":102,"y":1936,"text":" ","line":282},{"action":"T","x":115,"y":1936,"text":"texts","line":283},{"action":"Shape","line":284,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1963},{"type":"Vector","x":792,"y":1963},{"type":"Vector","x":791,"y":1964},{"type":"Vector","x":9,"y":1964}]},{"action":"Shape","line":285,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1963},{"type":"Vector","x":792,"y":1997},{"type":"Vector","x":791,"y":1996},{"type":"Vector","x":791,"y":1964}]},{"action":"Shape","line":286,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1997},{"type":"Vector","x":8,"y":1997},{"type":"Vector","x":9,"y":1996},{"type":"Vector","x":791,"y":1996}]},{"action":"Shape","line":287,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1997},{"type":"Vector","x":8,"y":1963},{"type":"Vector","x":9,"y":1964},{"type":"Vector","x":9,"y":1996}]},{"action":"Text","line":288,"font":"rgb(0,0,0) normal normal 400 28px courier new solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1965,"text":"Testing","line":289},{"action":"T","x":127,"y":1965,"text":" ","line":290},{"action":"T","x":144,"y":1965,"text":"texts","line":291},{"action":"Shape","line":292,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":1998},{"type":"Vector","x":792,"y":1998},{"type":"Vector","x":791,"y":1999},{"type":"Vector","x":9,"y":1999}]},{"action":"Shape","line":293,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":1998},{"type":"Vector","x":792,"y":2039},{"type":"Vector","x":791,"y":2038},{"type":"Vector","x":791,"y":1999}]},{"action":"Shape","line":294,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2039},{"type":"Vector","x":8,"y":2039},{"type":"Vector","x":9,"y":2038},{"type":"Vector","x":791,"y":2038}]},{"action":"Shape","line":295,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2039},{"type":"Vector","x":8,"y":1998},{"type":"Vector","x":9,"y":1999},{"type":"Vector","x":9,"y":2038}]},{"action":"Text","line":296,"font":"rgb(0,0,0) normal normal 400 34px courier new solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":1999,"text":"Testing","line":297},{"action":"T","x":152,"y":1999,"text":" ","line":298},{"action":"T","x":172,"y":1999,"text":"texts","line":299},{"action":"Shape","line":300,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2040},{"type":"Vector","x":792,"y":2040},{"type":"Vector","x":791,"y":2041},{"type":"Vector","x":9,"y":2041}]},{"action":"Shape","line":301,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2040},{"type":"Vector","x":792,"y":2087},{"type":"Vector","x":791,"y":2086},{"type":"Vector","x":791,"y":2041}]},{"action":"Shape","line":302,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2087},{"type":"Vector","x":8,"y":2087},{"type":"Vector","x":9,"y":2086},{"type":"Vector","x":791,"y":2086}]},{"action":"Shape","line":303,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2087},{"type":"Vector","x":8,"y":2040},{"type":"Vector","x":9,"y":2041},{"type":"Vector","x":9,"y":2086}]},{"action":"Text","line":304,"font":"rgb(0,0,0) normal normal 400 40px courier new solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":2041,"text":"Testing","line":305},{"action":"T","x":177,"y":2041,"text":" ","line":306},{"action":"T","x":201,"y":2041,"text":"texts","line":307},{"action":"Shape","line":308,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2088},{"type":"Vector","x":792,"y":2088},{"type":"Vector","x":791,"y":2089},{"type":"Vector","x":9,"y":2089}]},{"action":"Shape","line":309,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2088},{"type":"Vector","x":792,"y":2142},{"type":"Vector","x":791,"y":2141},{"type":"Vector","x":791,"y":2089}]},{"action":"Shape","line":310,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2142},{"type":"Vector","x":8,"y":2142},{"type":"Vector","x":9,"y":2141},{"type":"Vector","x":791,"y":2141}]},{"action":"Shape","line":311,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2142},{"type":"Vector","x":8,"y":2088},{"type":"Vector","x":9,"y":2089},{"type":"Vector","x":9,"y":2141}]},{"action":"Text","line":312,"font":"rgb(0,0,0) normal normal 400 46px courier new solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":2089,"text":"Testing","line":313},{"action":"T","x":202,"y":2089,"text":" ","line":314},{"action":"T","x":230,"y":2089,"text":"texts","line":315},{"action":"Shape","line":316,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2143},{"type":"Vector","x":792,"y":2143},{"type":"Vector","x":791,"y":2144},{"type":"Vector","x":9,"y":2144}]},{"action":"Shape","line":317,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2143},{"type":"Vector","x":792,"y":2204},{"type":"Vector","x":791,"y":2203},{"type":"Vector","x":791,"y":2144}]},{"action":"Shape","line":318,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2204},{"type":"Vector","x":8,"y":2204},{"type":"Vector","x":9,"y":2203},{"type":"Vector","x":791,"y":2203}]},{"action":"Shape","line":319,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2204},{"type":"Vector","x":8,"y":2143},{"type":"Vector","x":9,"y":2144},{"type":"Vector","x":9,"y":2203}]},{"action":"Text","line":320,"font":"rgb(0,0,0) normal normal 400 52px courier new solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":2145,"text":"Testing","line":321},{"action":"T","x":228,"y":2145,"text":" ","line":322},{"action":"T","x":259,"y":2145,"text":"texts","line":323},{"action":"Shape","line":324,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2205},{"type":"Vector","x":792,"y":2205},{"type":"Vector","x":791,"y":2206},{"type":"Vector","x":9,"y":2206}]},{"action":"Shape","line":325,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2205},{"type":"Vector","x":792,"y":2273},{"type":"Vector","x":791,"y":2272},{"type":"Vector","x":791,"y":2206}]},{"action":"Shape","line":326,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2273},{"type":"Vector","x":8,"y":2273},{"type":"Vector","x":9,"y":2272},{"type":"Vector","x":791,"y":2272}]},{"action":"Shape","line":327,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2273},{"type":"Vector","x":8,"y":2205},{"type":"Vector","x":9,"y":2206},{"type":"Vector","x":9,"y":2272}]},{"action":"Text","line":328,"font":"rgb(0,0,0) normal normal 400 58px courier new solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":2206,"text":"Testing","line":329},{"action":"T","x":253,"y":2206,"text":" ","line":330},{"action":"T","x":288,"y":2206,"text":"texts","line":331},{"action":"Shape","line":332,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2274},{"type":"Vector","x":792,"y":2274},{"type":"Vector","x":791,"y":2275},{"type":"Vector","x":9,"y":2275}]},{"action":"Shape","line":333,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2274},{"type":"Vector","x":792,"y":2349},{"type":"Vector","x":791,"y":2348},{"type":"Vector","x":791,"y":2275}]},{"action":"Shape","line":334,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2349},{"type":"Vector","x":8,"y":2349},{"type":"Vector","x":9,"y":2348},{"type":"Vector","x":791,"y":2348}]},{"action":"Shape","line":335,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2349},{"type":"Vector","x":8,"y":2274},{"type":"Vector","x":9,"y":2275},{"type":"Vector","x":9,"y":2348}]},{"action":"Text","line":336,"font":"rgb(0,0,0) normal normal 400 64px courier new solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":2275,"text":"Testing","line":337},{"action":"T","x":278,"y":2275,"text":" ","line":338},{"action":"T","x":316,"y":2275,"text":"texts","line":339},{"action":"Shape","line":340,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2350},{"type":"Vector","x":792,"y":2350},{"type":"Vector","x":791,"y":2351},{"type":"Vector","x":9,"y":2351}]},{"action":"Shape","line":341,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2350},{"type":"Vector","x":792,"y":2431},{"type":"Vector","x":791,"y":2430},{"type":"Vector","x":791,"y":2351}]},{"action":"Shape","line":342,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2431},{"type":"Vector","x":8,"y":2431},{"type":"Vector","x":9,"y":2430},{"type":"Vector","x":791,"y":2430}]},{"action":"Shape","line":343,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2431},{"type":"Vector","x":8,"y":2350},{"type":"Vector","x":9,"y":2351},{"type":"Vector","x":9,"y":2430}]},{"action":"Text","line":344,"font":"rgb(0,0,0) normal normal 400 70px courier new solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":2351,"text":"Testing","line":345},{"action":"T","x":303,"y":2351,"text":" ","line":346},{"action":"T","x":345,"y":2351,"text":"texts","line":347},{"action":"Shape","line":348,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2432},{"type":"Vector","x":792,"y":2432},{"type":"Vector","x":791,"y":2433},{"type":"Vector","x":9,"y":2433}]},{"action":"Shape","line":349,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2432},{"type":"Vector","x":792,"y":2520},{"type":"Vector","x":791,"y":2519},{"type":"Vector","x":791,"y":2433}]},{"action":"Shape","line":350,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":2520},{"type":"Vector","x":8,"y":2520},{"type":"Vector","x":9,"y":2519},{"type":"Vector","x":791,"y":2519}]},{"action":"Shape","line":351,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":2520},{"type":"Vector","x":8,"y":2432},{"type":"Vector","x":9,"y":2433},{"type":"Vector","x":9,"y":2519}]},{"action":"Text","line":352,"font":"rgb(0,0,0) normal normal 400 76px courier new solid rgb(255,0,0) underline, overline, line-through"},{"action":"T","x":9,"y":2433,"text":"Testing","line":353},{"action":"T","x":328,"y":2433,"text":" ","line":354},{"action":"T","x":374,"y":2433,"text":"texts","line":355}],"/tests/reftests/text/shadow.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":8,"text":"Some","line":5},{"action":"T","x":54,"y":8,"text":"text","line":6},{"action":"Text","line":7,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":292,"y":8,"text":"followed","line":8},{"action":"T","x":355,"y":8,"text":"by","line":9},{"action":"T","x":376,"y":8,"text":"more","line":10},{"action":"T","x":417,"y":8,"text":"text","line":11},{"action":"T","x":447,"y":8,"text":"without","line":12},{"action":"T","x":502,"y":8,"text":"shadow.","line":13},{"action":"Text","line":14,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":704,"y":8,"text":"and","line":15},{"action":"T","x":736,"y":8,"text":"some","line":16},{"action":"T","x":8,"y":26,"text":"more","line":17},{"action":"T","x":49,"y":26,"text":"text","line":18},{"action":"T","x":79,"y":26,"text":"without","line":19},{"action":"T","x":134,"y":26,"text":"shadow","line":20},{"action":"Text","line":21,"font":"rgb(255,255,255) normal normal 400 24px Georgia Shadows: (rgb(0,0,0) 1px 1px 2px, rgb(0,0,255) 0px 0px 24px)"},{"action":"T","x":8,"y":178,"text":"Sed","line":22},{"action":"T","x":53,"y":178,"text":"ut","line":23},{"action":"T","x":80,"y":178,"text":"perspiciatis","line":24},{"action":"T","x":208,"y":178,"text":"unde","line":25},{"action":"T","x":268,"y":178,"text":"omnis","line":26},{"action":"T","x":339,"y":178,"text":"iste","line":27},{"action":"T","x":382,"y":178,"text":"natus","line":28},{"action":"T","x":446,"y":178,"text":"error","line":29},{"action":"T","x":506,"y":178,"text":"sit","line":30},{"action":"T","x":538,"y":178,"text":"voluptatem","line":31},{"action":"T","x":8,"y":206,"text":"accusantium","line":32},{"action":"T","x":148,"y":206,"text":"doloremque","line":33},{"action":"T","x":282,"y":206,"text":"laudantium,","line":34},{"action":"T","x":418,"y":206,"text":"totam","line":35},{"action":"T","x":486,"y":206,"text":"rem","line":36},{"action":"T","x":534,"y":206,"text":"aperiam,","line":37},{"action":"T","x":634,"y":206,"text":"eaque","line":38},{"action":"T","x":702,"y":206,"text":"ipsa","line":39},{"action":"T","x":8,"y":233,"text":"quae","line":40},{"action":"T","x":65,"y":233,"text":"ab","line":41},{"action":"T","x":96,"y":233,"text":"illo","line":42},{"action":"T","x":136,"y":233,"text":"inventore.","line":43},{"action":"Text","line":44,"font":"rgb(0,0,0) normal normal 400 16px Arial Shadows: (rgb(0,0,0) 0px -2px 0px)"},{"action":"T","x":8,"y":284,"text":"Sed","line":45},{"action":"T","x":41,"y":284,"text":"ut","line":46},{"action":"T","x":59,"y":284,"text":"perspiciatis","line":47},{"action":"T","x":143,"y":284,"text":"unde","line":48},{"action":"T","x":183,"y":284,"text":"omnis","line":49},{"action":"T","x":230,"y":284,"text":"iste","line":50},{"action":"T","x":260,"y":284,"text":"natus","line":51},{"action":"T","x":303,"y":284,"text":"error","line":52},{"action":"T","x":342,"y":284,"text":"sit","line":53},{"action":"T","x":362,"y":284,"text":"voluptatem","line":54},{"action":"T","x":445,"y":284,"text":"accusantium","line":55},{"action":"T","x":539,"y":284,"text":"doloremque","line":56},{"action":"T","x":628,"y":284,"text":"laudantium,","line":57},{"action":"T","x":715,"y":284,"text":"totam","line":58},{"action":"T","x":760,"y":284,"text":"rem","line":59},{"action":"T","x":8,"y":302,"text":"aperiam,","line":60},{"action":"T","x":75,"y":302,"text":"eaque","line":61},{"action":"T","x":124,"y":302,"text":"ipsa","line":62},{"action":"T","x":158,"y":302,"text":"quae","line":63},{"action":"T","x":198,"y":302,"text":"ab","line":64},{"action":"T","x":220,"y":302,"text":"illo","line":65},{"action":"T","x":244,"y":302,"text":"inventore.","line":66},{"action":"Text","line":67,"font":"rgb(0,0,0) normal normal 400 16px Arial Shadows: (rgb(136,136,136) 1px 1px 3px)"},{"action":"T","x":84,"y":8,"text":"followed","line":68},{"action":"T","x":148,"y":8,"text":"by","line":69},{"action":"T","x":169,"y":8,"text":"text","line":70},{"action":"T","x":199,"y":8,"text":"with","line":71},{"action":"T","x":232,"y":8,"text":"shadow","line":72},{"action":"Text","line":73,"font":"rgb(0,0,0) normal normal 700 16px Arial Shadows: (rgb(0,0,0) 1px 1px 2px, rgb(0,0,255) 0px 0px 16px)"},{"action":"T","x":566,"y":8,"text":"Multi","line":74},{"action":"T","x":607,"y":8,"text":"text","line":75},{"action":"T","x":640,"y":8,"text":"shadow","line":76},{"action":"Text","line":77,"font":"rgba(0,0,0,0) normal normal 400 48px Arial Shadows: (rgb(0,0,255) 0px 0px 5px, rgb(255,0,0) 2px 2px 0px)"},{"action":"T","x":8,"y":45,"text":"testing","line":78},{"action":"T","x":163,"y":45,"text":"with","line":79},{"action":"T","x":262,"y":45,"text":"transparent","line":80},{"action":"Text","line":81,"font":"rgba(0,255,0,0.5) normal normal 700 48px Arial Shadows: (rgb(0,0,255) 0px 0px 5px, rgb(255,0,0) 2px 2px 0px) solid rgba(0,255,0,0.5) underline"},{"action":"T","x":518,"y":45,"text":"testing","line":82},{"action":"T","x":675,"y":45,"text":" ","line":83},{"action":"T","x":688,"y":45,"text":"with","line":84},{"action":"T","x":784,"y":45,"text":" ","line":85},{"action":"T","x":8,"y":100,"text":"low","line":86},{"action":"T","x":88,"y":100,"text":" ","line":87},{"action":"T","x":101,"y":100,"text":"opacity","line":88}],"/tests/reftests/text/text.html":[{"action":"Window","line":1,"width":800,"height":1046},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":1046,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 700 36px Arial"},{"action":"T","x":8,"y":20,"text":"<h1>","line":5},{"action":"T","x":102,"y":20,"text":"text","line":6},{"action":"T","x":166,"y":20,"text":"-","line":7},{"action":"T","x":178,"y":20,"text":"decoration","line":8},{"action":"Text","line":9,"font":"rgb(0,0,0) normal normal 700 24px Arial"},{"action":"T","x":8,"y":722,"text":"<h2>","line":10},{"action":"T","x":71,"y":722,"text":"text","line":11},{"action":"T","x":113,"y":722,"text":"-","line":12},{"action":"T","x":121,"y":722,"text":"transform","line":13},{"action":"Text","line":14,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":48,"y":768,"text":"text","line":15},{"action":"T","x":74,"y":768,"text":"-","line":16},{"action":"T","x":79,"y":768,"text":"transform:none;","line":17},{"action":"Text","line":18,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":48,"y":786,"text":"Text","line":19},{"action":"T","x":77,"y":786,"text":"-","line":20},{"action":"T","x":83,"y":786,"text":"Transform:","line":21},{"action":"T","x":164,"y":786,"text":"Capitalize;","line":22},{"action":"T","x":243,"y":786,"text":"(Including","line":23},{"action":"T","x":317,"y":786,"text":"Foreign","line":24},{"action":"T","x":376,"y":786,"text":"Characters","line":25},{"action":"T","x":458,"y":786,"text":"Such","line":26},{"action":"T","x":499,"y":786,"text":"As","line":27},{"action":"T","x":522,"y":786,"text":"Öaäå)","line":28},{"action":"Text","line":29,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":48,"y":804,"text":"TEXT","line":30},{"action":"T","x":88,"y":804,"text":"-","line":31},{"action":"T","x":93,"y":804,"text":"TRANSFORM:UPPERCASE;","line":32},{"action":"Text","line":33,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":48,"y":822,"text":"text","line":34},{"action":"T","x":74,"y":822,"text":"-","line":35},{"action":"T","x":79,"y":822,"text":"transform:lowercase;","line":36},{"action":"Text","line":37,"font":"rgb(0,0,0) normal normal 700 16px Arial"},{"action":"T","x":8,"y":855,"text":"<h3>","line":38},{"action":"T","x":50,"y":855,"text":"misc","line":39},{"action":"T","x":91,"y":855,"text":"text","line":40},{"action":"T","x":124,"y":855,"text":"alignments","line":41},{"action":"Text","line":42,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":48,"y":888,"text":"word","line":43},{"action":"T","x":83,"y":888,"text":"-","line":44},{"action":"T","x":88,"y":888,"text":"spacing:5px;","line":45},{"action":"T","x":187,"y":888,"text":"(as","line":46},{"action":"T","x":219,"y":888,"text":"each","line":47},{"action":"T","x":263,"y":888,"text":"letter","line":48},{"action":"T","x":308,"y":888,"text":"is","line":49},{"action":"T","x":329,"y":888,"text":"rendered","line":50},{"action":"T","x":403,"y":888,"text":"individually,","line":51},{"action":"T","x":494,"y":888,"text":"the","line":52},{"action":"T","x":525,"y":888,"text":"bounds","line":53},{"action":"T","x":587,"y":888,"text":"will","line":54},{"action":"T","x":619,"y":888,"text":"always","line":55},{"action":"T","x":677,"y":888,"text":"be","line":56},{"action":"T","x":704,"y":888,"text":"correct)","line":57},{"action":"Text","line":58,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":48,"y":914,"text":"line","line":59},{"action":"T","x":73,"y":914,"text":"-","line":60},{"action":"T","x":78,"y":914,"text":"height:35px;","line":61},{"action":"Text","line":62,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":48,"y":949,"text":"(same","line":63},{"action":"T","x":97,"y":949,"text":"goes","line":64},{"action":"T","x":136,"y":949,"text":"for","line":65},{"action":"T","x":159,"y":949,"text":"line","line":66},{"action":"T","x":184,"y":949,"text":"-","line":67},{"action":"T","x":189,"y":949,"text":"height)","line":68},{"action":"Text","line":69,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":48,"y":975,"text":"l","line":70},{"action":"T","x":56,"y":975,"text":"e","line":71},{"action":"T","x":70,"y":975,"text":"t","line":72},{"action":"T","x":80,"y":975,"text":"t","line":73},{"action":"T","x":89,"y":975,"text":"e","line":74},{"action":"T","x":103,"y":975,"text":"r","line":75},{"action":"T","x":114,"y":975,"text":"-","line":76},{"action":"T","x":124,"y":975,"text":"s","line":77},{"action":"T","x":137,"y":975,"text":"p","line":78},{"action":"T","x":151,"y":975,"text":"a","line":79},{"action":"T","x":165,"y":975,"text":"c","line":80},{"action":"T","x":178,"y":975,"text":"i","line":81},{"action":"T","x":186,"y":975,"text":"n","line":82},{"action":"T","x":200,"y":975,"text":"g","line":83},{"action":"T","x":214,"y":975,"text":":","line":84},{"action":"T","x":224,"y":975,"text":"5","line":85},{"action":"T","x":237,"y":975,"text":"p","line":86},{"action":"T","x":251,"y":975,"text":"x","line":87},{"action":"T","x":264,"y":975,"text":";","line":88},{"action":"Text","line":89,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":153,"y":993,"text":"text","line":90},{"action":"T","x":179,"y":993,"text":"-","line":91},{"action":"T","x":184,"y":993,"text":"align:right;width:300px;","line":92},{"action":"Text","line":93,"font":"rgb(0,0,0) normal small-caps 400 16px Arial"},{"action":"T","x":48,"y":1011,"text":"font","line":94},{"action":"T","x":84,"y":1011,"text":"-","line":95},{"action":"T","x":89,"y":1011,"text":"variant:small","line":96},{"action":"T","x":194,"y":1011,"text":"-","line":97},{"action":"T","x":200,"y":1011,"text":"caps;","line":98},{"action":"Text","line":99,"font":"rgb(0,0,0) normal normal 700 24px Arial"},{"action":"T","x":8,"y":99,"text":"Arial","line":100},{"action":"Text","line":101,"font":"rgb(0,0,0) normal normal 400 14px Arial"},{"action":"T","x":48,"y":140,"text":"text","line":102},{"action":"T","x":70,"y":140,"text":"-","line":103},{"action":"T","x":75,"y":140,"text":"decoration:none;","line":104},{"action":"Text","line":105,"font":"rgb(0,0,0) normal normal 400 14px Arial solid rgb(0,0,0) underline"},{"action":"T","x":48,"y":148,"text":"text","line":106},{"action":"T","x":70,"y":148,"text":"-","line":107},{"action":"T","x":75,"y":148,"text":"decoration:underline;","line":108},{"action":"Text","line":109,"font":"rgb(0,0,0) normal normal 400 14px Arial solid rgb(0,0,0) overline"},{"action":"T","x":48,"y":156,"text":"text","line":110},{"action":"T","x":70,"y":156,"text":"-","line":111},{"action":"T","x":75,"y":156,"text":"decoration:overline;","line":112},{"action":"Text","line":113,"font":"rgb(0,0,0) normal normal 400 14px Arial solid rgb(0,0,0) line-through"},{"action":"T","x":48,"y":164,"text":"text","line":114},{"action":"T","x":70,"y":164,"text":"-","line":115},{"action":"T","x":75,"y":164,"text":"decoration:line","line":116},{"action":"T","x":166,"y":164,"text":"-","line":117},{"action":"T","x":171,"y":164,"text":"through;","line":118},{"action":"Text","line":119,"font":"rgb(0,0,0) normal normal 400 18px Arial"},{"action":"T","x":48,"y":192,"text":"text","line":120},{"action":"T","x":77,"y":192,"text":"-","line":121},{"action":"T","x":83,"y":192,"text":"decoration:none;","line":122},{"action":"Text","line":123,"font":"rgb(0,0,0) normal normal 400 18px Arial solid rgb(0,0,0) underline"},{"action":"T","x":48,"y":208,"text":"text","line":124},{"action":"T","x":77,"y":208,"text":"-","line":125},{"action":"T","x":83,"y":208,"text":"decoration:underline;","line":126},{"action":"Text","line":127,"font":"rgb(0,0,0) normal normal 400 18px Arial solid rgb(0,0,0) overline"},{"action":"T","x":48,"y":224,"text":"text","line":128},{"action":"T","x":77,"y":224,"text":"-","line":129},{"action":"T","x":83,"y":224,"text":"decoration:overline;","line":130},{"action":"Text","line":131,"font":"rgb(0,0,0) normal normal 400 18px Arial solid rgb(0,0,0) line-through"},{"action":"T","x":48,"y":240,"text":"text","line":132},{"action":"T","x":77,"y":240,"text":"-","line":133},{"action":"T","x":83,"y":240,"text":"decoration:line","line":134},{"action":"T","x":200,"y":240,"text":"-","line":135},{"action":"T","x":206,"y":240,"text":"through;","line":136},{"action":"Text","line":137,"font":"rgb(0,0,0) normal normal 400 24px Arial"},{"action":"T","x":48,"y":280,"text":"text","line":138},{"action":"T","x":87,"y":280,"text":"-","line":139},{"action":"T","x":95,"y":280,"text":"decoration:none;","line":140},{"action":"Text","line":141,"font":"rgb(0,0,0) normal normal 400 24px Arial solid rgb(0,0,0) underline"},{"action":"T","x":48,"y":304,"text":"text","line":142},{"action":"T","x":87,"y":304,"text":"-","line":143},{"action":"T","x":95,"y":304,"text":"decoration:underline;","line":144},{"action":"Text","line":145,"font":"rgb(0,0,0) normal normal 400 24px Arial solid rgb(0,0,0) overline"},{"action":"T","x":48,"y":328,"text":"text","line":146},{"action":"T","x":87,"y":328,"text":"-","line":147},{"action":"T","x":95,"y":328,"text":"decoration:overline;","line":148},{"action":"Text","line":149,"font":"rgb(0,0,0) normal normal 400 24px Arial solid rgb(0,0,0) line-through"},{"action":"T","x":48,"y":352,"text":"text","line":150},{"action":"T","x":87,"y":352,"text":"-","line":151},{"action":"T","x":95,"y":352,"text":"decoration:line","line":152},{"action":"T","x":251,"y":352,"text":"-","line":153},{"action":"T","x":259,"y":352,"text":"through;","line":154},{"action":"Text","line":155,"font":"rgb(0,0,0) normal normal 700 24px Verdana"},{"action":"T","x":347,"y":97,"text":"Verdana","line":156},{"action":"Text","line":157,"font":"rgb(0,0,0) normal normal 400 14px Verdana"},{"action":"T","x":387,"y":140,"text":"text","line":158},{"action":"T","x":414,"y":140,"text":"-","line":159},{"action":"T","x":420,"y":140,"text":"decoration:none;","line":160},{"action":"Text","line":161,"font":"rgb(0,0,0) normal normal 400 14px Verdana solid rgb(0,0,0) underline"},{"action":"T","x":387,"y":148,"text":"text","line":162},{"action":"T","x":414,"y":148,"text":"-","line":163},{"action":"T","x":420,"y":148,"text":"decoration:underline;","line":164},{"action":"Text","line":165,"font":"rgb(0,0,0) normal normal 400 14px Verdana solid rgb(0,0,0) overline"},{"action":"T","x":387,"y":156,"text":"text","line":166},{"action":"T","x":414,"y":156,"text":"-","line":167},{"action":"T","x":420,"y":156,"text":"decoration:overline;","line":168},{"action":"Text","line":169,"font":"rgb(0,0,0) normal normal 400 14px Verdana solid rgb(0,0,0) line-through"},{"action":"T","x":387,"y":164,"text":"text","line":170},{"action":"T","x":414,"y":164,"text":"-","line":171},{"action":"T","x":420,"y":164,"text":"decoration:line","line":172},{"action":"T","x":526,"y":164,"text":"-","line":173},{"action":"T","x":532,"y":164,"text":"through;","line":174},{"action":"Text","line":175,"font":"rgb(0,0,0) normal normal 400 18px Verdana"},{"action":"T","x":387,"y":191,"text":"text","line":176},{"action":"T","x":422,"y":191,"text":"-","line":177},{"action":"T","x":430,"y":191,"text":"decoration:none;","line":178},{"action":"Text","line":179,"font":"rgb(0,0,0) normal normal 400 18px Verdana solid rgb(0,0,0) underline"},{"action":"T","x":387,"y":207,"text":"text","line":180},{"action":"T","x":422,"y":207,"text":"-","line":181},{"action":"T","x":430,"y":207,"text":"decoration:underline;","line":182},{"action":"Text","line":183,"font":"rgb(0,0,0) normal normal 400 18px Verdana solid rgb(0,0,0) overline"},{"action":"T","x":387,"y":223,"text":"text","line":184},{"action":"T","x":422,"y":223,"text":"-","line":185},{"action":"T","x":430,"y":223,"text":"decoration:overline;","line":186},{"action":"Text","line":187,"font":"rgb(0,0,0) normal normal 400 18px Verdana solid rgb(0,0,0) line-through"},{"action":"T","x":387,"y":239,"text":"text","line":188},{"action":"T","x":422,"y":239,"text":"-","line":189},{"action":"T","x":430,"y":239,"text":"decoration:line","line":190},{"action":"T","x":565,"y":239,"text":"-","line":191},{"action":"T","x":573,"y":239,"text":"through;","line":192},{"action":"Text","line":193,"font":"rgb(0,0,0) normal normal 400 24px Verdana"},{"action":"T","x":387,"y":279,"text":"text","line":194},{"action":"T","x":434,"y":279,"text":"-","line":195},{"action":"T","x":445,"y":279,"text":"decoration:none;","line":196},{"action":"Text","line":197,"font":"rgb(0,0,0) normal normal 400 24px Verdana solid rgb(0,0,0) underline"},{"action":"T","x":387,"y":303,"text":"text","line":198},{"action":"T","x":434,"y":303,"text":"-","line":199},{"action":"T","x":445,"y":303,"text":"decoration:underline;","line":200},{"action":"Text","line":201,"font":"rgb(0,0,0) normal normal 400 24px Verdana solid rgb(0,0,0) overline"},{"action":"T","x":387,"y":327,"text":"text","line":202},{"action":"T","x":434,"y":327,"text":"-","line":203},{"action":"T","x":445,"y":327,"text":"decoration:overline;","line":204},{"action":"Text","line":205,"font":"rgb(0,0,0) normal normal 400 24px Verdana solid rgb(0,0,0) line-through"},{"action":"T","x":387,"y":351,"text":"text","line":206},{"action":"T","x":434,"y":351,"text":"-","line":207},{"action":"T","x":445,"y":351,"text":"decoration:line","line":208},{"action":"T","x":624,"y":351,"text":"-","line":209},{"action":"T","x":636,"y":351,"text":"through;","line":210},{"action":"Text","line":211,"font":"rgb(0,0,0) normal normal 700 24px Tahoma"},{"action":"T","x":8,"y":420,"text":"Tahoma","line":212},{"action":"Text","line":213,"font":"rgb(0,0,0) normal normal 400 14px Tahoma"},{"action":"T","x":48,"y":462,"text":"text","line":214},{"action":"T","x":72,"y":462,"text":"-","line":215},{"action":"T","x":77,"y":462,"text":"decoration:none;","line":216},{"action":"Text","line":217,"font":"rgb(0,0,0) normal normal 400 14px Tahoma solid rgb(0,0,0) underline"},{"action":"T","x":48,"y":470,"text":"text","line":218},{"action":"T","x":72,"y":470,"text":"-","line":219},{"action":"T","x":77,"y":470,"text":"decoration:underline;","line":220},{"action":"Text","line":221,"font":"rgb(0,0,0) normal normal 400 14px Tahoma solid rgb(0,0,0) overline"},{"action":"T","x":48,"y":478,"text":"text","line":222},{"action":"T","x":72,"y":478,"text":"-","line":223},{"action":"T","x":77,"y":478,"text":"decoration:overline;","line":224},{"action":"Text","line":225,"font":"rgb(0,0,0) normal normal 400 14px Tahoma solid rgb(0,0,0) line-through"},{"action":"T","x":48,"y":486,"text":"text","line":226},{"action":"T","x":72,"y":486,"text":"-","line":227},{"action":"T","x":77,"y":486,"text":"decoration:line","line":228},{"action":"T","x":168,"y":486,"text":"-","line":229},{"action":"T","x":173,"y":486,"text":"through;","line":230},{"action":"Text","line":231,"font":"rgb(0,0,0) normal normal 400 18px Tahoma"},{"action":"T","x":48,"y":513,"text":"text","line":232},{"action":"T","x":78,"y":513,"text":"-","line":233},{"action":"T","x":85,"y":513,"text":"decoration:none;","line":234},{"action":"Text","line":235,"font":"rgb(0,0,0) normal normal 400 18px Tahoma solid rgb(0,0,0) underline"},{"action":"T","x":48,"y":529,"text":"text","line":236},{"action":"T","x":78,"y":529,"text":"-","line":237},{"action":"T","x":85,"y":529,"text":"decoration:underline;","line":238},{"action":"Text","line":239,"font":"rgb(0,0,0) normal normal 400 18px Tahoma solid rgb(0,0,0) overline"},{"action":"T","x":48,"y":545,"text":"text","line":240},{"action":"T","x":78,"y":545,"text":"-","line":241},{"action":"T","x":85,"y":545,"text":"decoration:overline;","line":242},{"action":"Text","line":243,"font":"rgb(0,0,0) normal normal 400 18px Tahoma solid rgb(0,0,0) line-through"},{"action":"T","x":48,"y":561,"text":"text","line":244},{"action":"T","x":78,"y":561,"text":"-","line":245},{"action":"T","x":85,"y":561,"text":"decoration:line","line":246},{"action":"T","x":202,"y":561,"text":"-","line":247},{"action":"T","x":209,"y":561,"text":"through;","line":248},{"action":"Text","line":249,"font":"rgb(0,0,0) normal normal 400 24px Tahoma"},{"action":"T","x":48,"y":602,"text":"text","line":250},{"action":"T","x":88,"y":602,"text":"-","line":251},{"action":"T","x":97,"y":602,"text":"decoration:none;","line":252},{"action":"Text","line":253,"font":"rgb(0,0,0) normal normal 400 24px Tahoma solid rgb(0,0,0) underline"},{"action":"T","x":48,"y":626,"text":"text","line":254},{"action":"T","x":88,"y":626,"text":"-","line":255},{"action":"T","x":97,"y":626,"text":"decoration:underline;","line":256},{"action":"Text","line":257,"font":"rgb(0,0,0) normal normal 400 24px Tahoma solid rgb(0,0,0) overline"},{"action":"T","x":48,"y":650,"text":"text","line":258},{"action":"T","x":88,"y":650,"text":"-","line":259},{"action":"T","x":97,"y":650,"text":"decoration:overline;","line":260},{"action":"Text","line":261,"font":"rgb(0,0,0) normal normal 400 24px Tahoma solid rgb(0,0,0) line-through"},{"action":"T","x":48,"y":674,"text":"text","line":262},{"action":"T","x":88,"y":674,"text":"-","line":263},{"action":"T","x":97,"y":674,"text":"decoration:line","line":264},{"action":"T","x":254,"y":674,"text":"-","line":265},{"action":"T","x":263,"y":674,"text":"through;","line":266}],"/tests/reftests/text/underline-lineheight.html":[{"action":"Window","line":1,"width":800,"height":1834},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":1834,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 16px arial solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":19,"text":"Testing","line":5},{"action":"T","x":59,"y":19,"text":" ","line":6},{"action":"T","x":63,"y":19,"text":"texts","line":7},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 400 22px arial solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":57,"text":"Testing","line":9},{"action":"T","x":78,"y":57,"text":" ","line":10},{"action":"T","x":84,"y":57,"text":"texts","line":11},{"action":"Text","line":12,"font":"rgb(0,0,0) normal normal 400 28px arial solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":94,"text":"Testing","line":13},{"action":"T","x":97,"y":94,"text":" ","line":14},{"action":"T","x":104,"y":94,"text":"texts","line":15},{"action":"Text","line":16,"font":"rgb(0,0,0) normal normal 400 34px arial solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":132,"text":"Testing","line":17},{"action":"T","x":116,"y":132,"text":" ","line":18},{"action":"T","x":125,"y":132,"text":"texts","line":19},{"action":"Text","line":20,"font":"rgb(0,0,0) normal normal 400 40px arial solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":170,"text":"Testing","line":21},{"action":"T","x":135,"y":170,"text":" ","line":22},{"action":"T","x":146,"y":170,"text":"texts","line":23},{"action":"Text","line":24,"font":"rgb(0,0,0) normal normal 400 46px arial solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":207,"text":"Testing","line":25},{"action":"T","x":154,"y":207,"text":" ","line":26},{"action":"T","x":166,"y":207,"text":"texts","line":27},{"action":"Text","line":28,"font":"rgb(0,0,0) normal normal 400 52px arial solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":245,"text":"Testing","line":29},{"action":"T","x":173,"y":245,"text":" ","line":30},{"action":"T","x":187,"y":245,"text":"texts","line":31},{"action":"Text","line":32,"font":"rgb(0,0,0) normal normal 400 58px arial solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":283,"text":"Testing","line":33},{"action":"T","x":192,"y":283,"text":" ","line":34},{"action":"T","x":208,"y":283,"text":"texts","line":35},{"action":"Text","line":36,"font":"rgb(0,0,0) normal normal 400 64px arial solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":320,"text":"Testing","line":37},{"action":"T","x":211,"y":320,"text":" ","line":38},{"action":"T","x":228,"y":320,"text":"texts","line":39},{"action":"Text","line":40,"font":"rgb(0,0,0) normal normal 400 70px arial solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":358,"text":"Testing","line":41},{"action":"T","x":230,"y":358,"text":" ","line":42},{"action":"T","x":249,"y":358,"text":"texts","line":43},{"action":"Text","line":44,"font":"rgb(0,0,0) normal normal 400 76px arial solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":396,"text":"Testing","line":45},{"action":"T","x":249,"y":396,"text":" ","line":46},{"action":"T","x":270,"y":396,"text":"texts","line":47},{"action":"Text","line":48,"font":"rgb(0,0,0) normal normal 400 16px verdana solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":469,"text":"Testing","line":49},{"action":"T","x":65,"y":469,"text":" ","line":50},{"action":"T","x":70,"y":469,"text":"texts","line":51},{"action":"Text","line":52,"font":"rgb(0,0,0) normal normal 400 22px verdana solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":506,"text":"Testing","line":53},{"action":"T","x":86,"y":506,"text":" ","line":54},{"action":"T","x":94,"y":506,"text":"texts","line":55},{"action":"Text","line":56,"font":"rgb(0,0,0) normal normal 400 28px verdana solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":544,"text":"Testing","line":57},{"action":"T","x":107,"y":544,"text":" ","line":58},{"action":"T","x":117,"y":544,"text":"texts","line":59},{"action":"Text","line":60,"font":"rgb(0,0,0) normal normal 400 34px verdana solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":581,"text":"Testing","line":61},{"action":"T","x":129,"y":581,"text":" ","line":62},{"action":"T","x":141,"y":581,"text":"texts","line":63},{"action":"Text","line":64,"font":"rgb(0,0,0) normal normal 400 40px verdana solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":619,"text":"Testing","line":65},{"action":"T","x":150,"y":619,"text":" ","line":66},{"action":"T","x":164,"y":619,"text":"texts","line":67},{"action":"Text","line":68,"font":"rgb(0,0,0) normal normal 400 46px verdana solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":656,"text":"Testing","line":69},{"action":"T","x":171,"y":656,"text":" ","line":70},{"action":"T","x":188,"y":656,"text":"texts","line":71},{"action":"Text","line":72,"font":"rgb(0,0,0) normal normal 400 52px verdana solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":693,"text":"Testing","line":73},{"action":"T","x":192,"y":693,"text":" ","line":74},{"action":"T","x":211,"y":693,"text":"texts","line":75},{"action":"Text","line":76,"font":"rgb(0,0,0) normal normal 400 58px verdana solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":731,"text":"Testing","line":77},{"action":"T","x":214,"y":731,"text":" ","line":78},{"action":"T","x":234,"y":731,"text":"texts","line":79},{"action":"Text","line":80,"font":"rgb(0,0,0) normal normal 400 64px verdana solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":768,"text":"Testing","line":81},{"action":"T","x":235,"y":768,"text":" ","line":82},{"action":"T","x":258,"y":768,"text":"texts","line":83},{"action":"Text","line":84,"font":"rgb(0,0,0) normal normal 400 70px verdana solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":805,"text":"Testing","line":85},{"action":"T","x":256,"y":805,"text":" ","line":86},{"action":"T","x":281,"y":805,"text":"texts","line":87},{"action":"Text","line":88,"font":"rgb(0,0,0) normal normal 400 76px verdana solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":843,"text":"Testing","line":89},{"action":"T","x":278,"y":843,"text":" ","line":90},{"action":"T","x":304,"y":843,"text":"texts","line":91},{"action":"Text","line":92,"font":"rgb(0,0,0) normal normal 400 16px tahoma solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":920,"text":"Testing","line":93},{"action":"T","x":60,"y":920,"text":" ","line":94},{"action":"T","x":65,"y":920,"text":"texts","line":95},{"action":"Text","line":96,"font":"rgb(0,0,0) normal normal 400 22px tahoma solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":958,"text":"Testing","line":97},{"action":"T","x":79,"y":958,"text":" ","line":98},{"action":"T","x":86,"y":958,"text":"texts","line":99},{"action":"Text","line":100,"font":"rgb(0,0,0) normal normal 400 28px tahoma solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":995,"text":"Testing","line":101},{"action":"T","x":98,"y":995,"text":" ","line":102},{"action":"T","x":107,"y":995,"text":"texts","line":103},{"action":"Text","line":104,"font":"rgb(0,0,0) normal normal 400 34px tahoma solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1032,"text":"Testing","line":105},{"action":"T","x":118,"y":1032,"text":" ","line":106},{"action":"T","x":128,"y":1032,"text":"texts","line":107},{"action":"Text","line":108,"font":"rgb(0,0,0) normal normal 400 40px tahoma solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1070,"text":"Testing","line":109},{"action":"T","x":137,"y":1070,"text":" ","line":110},{"action":"T","x":150,"y":1070,"text":"texts","line":111},{"action":"Text","line":112,"font":"rgb(0,0,0) normal normal 400 46px tahoma solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1107,"text":"Testing","line":113},{"action":"T","x":156,"y":1107,"text":" ","line":114},{"action":"T","x":171,"y":1107,"text":"texts","line":115},{"action":"Text","line":116,"font":"rgb(0,0,0) normal normal 400 52px tahoma solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1144,"text":"Testing","line":117},{"action":"T","x":176,"y":1144,"text":" ","line":118},{"action":"T","x":192,"y":1144,"text":"texts","line":119},{"action":"Text","line":120,"font":"rgb(0,0,0) normal normal 400 58px tahoma solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1182,"text":"Testing","line":121},{"action":"T","x":195,"y":1182,"text":" ","line":122},{"action":"T","x":214,"y":1182,"text":"texts","line":123},{"action":"Text","line":124,"font":"rgb(0,0,0) normal normal 400 64px tahoma solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1219,"text":"Testing","line":125},{"action":"T","x":215,"y":1219,"text":" ","line":126},{"action":"T","x":235,"y":1219,"text":"texts","line":127},{"action":"Text","line":128,"font":"rgb(0,0,0) normal normal 400 70px tahoma solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1257,"text":"Testing","line":129},{"action":"T","x":234,"y":1257,"text":" ","line":130},{"action":"T","x":256,"y":1257,"text":"texts","line":131},{"action":"Text","line":132,"font":"rgb(0,0,0) normal normal 400 76px tahoma solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1294,"text":"Testing","line":133},{"action":"T","x":254,"y":1294,"text":" ","line":134},{"action":"T","x":277,"y":1294,"text":"texts","line":135},{"action":"Text","line":136,"font":"rgb(0,0,0) normal normal 400 16px courier new solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1372,"text":"Testing","line":137},{"action":"T","x":75,"y":1372,"text":" ","line":138},{"action":"T","x":85,"y":1372,"text":"texts","line":139},{"action":"Text","line":140,"font":"rgb(0,0,0) normal normal 400 22px courier new solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1409,"text":"Testing","line":141},{"action":"T","x":100,"y":1409,"text":" ","line":142},{"action":"T","x":114,"y":1409,"text":"texts","line":143},{"action":"Text","line":144,"font":"rgb(0,0,0) normal normal 400 28px courier new solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1447,"text":"Testing","line":145},{"action":"T","x":126,"y":1447,"text":" ","line":146},{"action":"T","x":142,"y":1447,"text":"texts","line":147},{"action":"Text","line":148,"font":"rgb(0,0,0) normal normal 400 34px courier new solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1484,"text":"Testing","line":149},{"action":"T","x":151,"y":1484,"text":" ","line":150},{"action":"T","x":171,"y":1484,"text":"texts","line":151},{"action":"Text","line":152,"font":"rgb(0,0,0) normal normal 400 40px courier new solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1522,"text":"Testing","line":153},{"action":"T","x":176,"y":1522,"text":" ","line":154},{"action":"T","x":200,"y":1522,"text":"texts","line":155},{"action":"Text","line":156,"font":"rgb(0,0,0) normal normal 400 46px courier new solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1560,"text":"Testing","line":157},{"action":"T","x":201,"y":1560,"text":" ","line":158},{"action":"T","x":229,"y":1560,"text":"texts","line":159},{"action":"Text","line":160,"font":"rgb(0,0,0) normal normal 400 52px courier new solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1597,"text":"Testing","line":161},{"action":"T","x":226,"y":1597,"text":" ","line":162},{"action":"T","x":258,"y":1597,"text":"texts","line":163},{"action":"Text","line":164,"font":"rgb(0,0,0) normal normal 400 58px courier new solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1635,"text":"Testing","line":165},{"action":"T","x":252,"y":1635,"text":" ","line":166},{"action":"T","x":286,"y":1635,"text":"texts","line":167},{"action":"Text","line":168,"font":"rgb(0,0,0) normal normal 400 64px courier new solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1673,"text":"Testing","line":169},{"action":"T","x":277,"y":1673,"text":" ","line":170},{"action":"T","x":315,"y":1673,"text":"texts","line":171},{"action":"Text","line":172,"font":"rgb(0,0,0) normal normal 400 70px courier new solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1710,"text":"Testing","line":173},{"action":"T","x":302,"y":1710,"text":" ","line":174},{"action":"T","x":344,"y":1710,"text":"texts","line":175},{"action":"Text","line":176,"font":"rgb(0,0,0) normal normal 400 76px courier new solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":1748,"text":"Testing","line":177},{"action":"T","x":327,"y":1748,"text":" ","line":178},{"action":"T","x":373,"y":1748,"text":"texts","line":179}],"/tests/reftests/text/underline.html":[{"action":"Window","line":1,"width":800,"height":647},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":647,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 22px arial solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":6,"text":"Testing","line":5},{"action":"T","x":78,"y":6,"text":" ","line":6},{"action":"T","x":84,"y":6,"text":"texts","line":7},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 400 28px arial solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":29,"text":"Testing","line":9},{"action":"T","x":97,"y":29,"text":" ","line":10},{"action":"T","x":104,"y":29,"text":"texts","line":11},{"action":"Text","line":12,"font":"rgb(0,0,0) normal normal 400 40px arial solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":58,"text":"Testing","line":13},{"action":"T","x":135,"y":58,"text":" ","line":14},{"action":"T","x":146,"y":58,"text":"texts","line":15},{"action":"Text","line":16,"font":"rgb(0,0,0) normal normal 400 64px arial solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":97,"text":"Testing","line":17},{"action":"T","x":211,"y":97,"text":" ","line":18},{"action":"T","x":228,"y":97,"text":"texts","line":19},{"action":"Text","line":20,"font":"rgb(0,0,0) normal normal 400 22px verdana solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":164,"text":"Testing","line":21},{"action":"T","x":86,"y":164,"text":" ","line":22},{"action":"T","x":94,"y":164,"text":"texts","line":23},{"action":"Text","line":24,"font":"rgb(0,0,0) normal normal 400 28px verdana solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":186,"text":"Testing","line":25},{"action":"T","x":107,"y":186,"text":" ","line":26},{"action":"T","x":117,"y":186,"text":"texts","line":27},{"action":"Text","line":28,"font":"rgb(0,0,0) normal normal 400 40px verdana solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":214,"text":"Testing","line":29},{"action":"T","x":150,"y":214,"text":" ","line":30},{"action":"T","x":164,"y":214,"text":"texts","line":31},{"action":"Text","line":32,"font":"rgb(0,0,0) normal normal 400 64px verdana solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":252,"text":"Testing","line":33},{"action":"T","x":235,"y":252,"text":" ","line":34},{"action":"T","x":258,"y":252,"text":"texts","line":35},{"action":"Text","line":36,"font":"rgb(0,0,0) normal normal 400 22px tahoma solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":322,"text":"Testing","line":37},{"action":"T","x":79,"y":322,"text":" ","line":38},{"action":"T","x":86,"y":322,"text":"texts","line":39},{"action":"Text","line":40,"font":"rgb(0,0,0) normal normal 400 28px tahoma solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":344,"text":"Testing","line":41},{"action":"T","x":98,"y":344,"text":" ","line":42},{"action":"T","x":107,"y":344,"text":"texts","line":43},{"action":"Text","line":44,"font":"rgb(0,0,0) normal normal 400 40px tahoma solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":372,"text":"Testing","line":45},{"action":"T","x":137,"y":372,"text":" ","line":46},{"action":"T","x":150,"y":372,"text":"texts","line":47},{"action":"Text","line":48,"font":"rgb(0,0,0) normal normal 400 64px tahoma solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":410,"text":"Testing","line":49},{"action":"T","x":215,"y":410,"text":" ","line":50},{"action":"T","x":235,"y":410,"text":"texts","line":51},{"action":"Text","line":52,"font":"rgb(0,0,0) normal normal 400 22px courier new solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":480,"text":"Testing","line":53},{"action":"T","x":100,"y":480,"text":" ","line":54},{"action":"T","x":114,"y":480,"text":"texts","line":55},{"action":"Text","line":56,"font":"rgb(0,0,0) normal normal 400 28px courier new solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":503,"text":"Testing","line":57},{"action":"T","x":126,"y":503,"text":" ","line":58},{"action":"T","x":142,"y":503,"text":"texts","line":59},{"action":"Text","line":60,"font":"rgb(0,0,0) normal normal 400 40px courier new solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":531,"text":"Testing","line":61},{"action":"T","x":176,"y":531,"text":" ","line":62},{"action":"T","x":200,"y":531,"text":"texts","line":63},{"action":"Text","line":64,"font":"rgb(0,0,0) normal normal 400 64px courier new solid rgb(0,0,0) underline"},{"action":"T","x":8,"y":571,"text":"Testing","line":65},{"action":"T","x":277,"y":571,"text":" ","line":66},{"action":"T","x":315,"y":571,"text":"texts","line":67}],"/tests/reftests/transform/nested.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":108},{"type":"Vector","x":708,"y":108},{"type":"Vector","x":708,"y":156},{"type":"Vector","x":8,"y":156}]]},{"action":"Fill","line":5,"color":"rgb(205,92,92)"},{"action":"Text","line":6,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":123,"text":"First","line":7},{"action":"T","x":44,"y":123,"text":"level","line":8},{"action":"T","x":81,"y":123,"text":"content","line":9},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":620,"y":123,"text":",","line":11},{"action":"T","x":630,"y":123,"text":"ending","line":12},{"action":"T","x":682,"y":123,"text":"first","line":13},{"action":"Clip","line":14,"path":[[{"type":"Vector","x":8,"y":156},{"type":"Vector","x":116,"y":156},{"type":"Vector","x":116,"y":174},{"type":"Vector","x":8,"y":174}]]},{"action":"Fill","line":15,"color":"rgb(188,143,143)"},{"action":"Text","line":16,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":156,"text":"something","line":17},{"action":"T","x":86,"y":156,"text":"else","line":18},{"action":"Transform","line":19,"x":379,"y":132,"matrix":"0.99, 0.13, -0.13, 0.99, 0, 0"},{"action":"Clip","line":20,"path":[[{"type":"Vector","x":138,"y":108},{"type":"Vector","x":621,"y":108},{"type":"Vector","x":621,"y":156},{"type":"Vector","x":138,"y":156}]]},{"action":"Fill","line":21,"color":"rgb(143,188,143)"},{"action":"Shape","line":22,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":138,"y":108},{"type":"Vector","x":621,"y":108},{"type":"Vector","x":606,"y":123},{"type":"Vector","x":153,"y":123}]},{"action":"Shape","line":23,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":621,"y":108},{"type":"Vector","x":621,"y":156},{"type":"Vector","x":606,"y":141},{"type":"Vector","x":606,"y":123}]},{"action":"Shape","line":24,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":621,"y":156},{"type":"Vector","x":138,"y":156},{"type":"Vector","x":153,"y":141},{"type":"Vector","x":606,"y":141}]},{"action":"Shape","line":25,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":138,"y":156},{"type":"Vector","x":138,"y":108},{"type":"Vector","x":153,"y":123},{"type":"Vector","x":153,"y":141}]},{"action":"Text","line":26,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":153,"y":123,"text":"with","line":27},{"action":"T","x":186,"y":123,"text":"second","line":28},{"action":"T","x":242,"y":123,"text":"level","line":29},{"action":"T","x":279,"y":123,"text":"content","line":30},{"action":"Text","line":31,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":493,"y":123,"text":",","line":32},{"action":"T","x":501,"y":123,"text":"ending","line":33},{"action":"T","x":554,"y":123,"text":"second","line":34},{"action":"Transform","line":35,"x":414,"y":132,"matrix":"0.33, -0.94, 0.94, 0.33, 0, 0"},{"action":"Clip","line":36,"path":[[{"type":"Vector","x":336,"y":123},{"type":"Vector","x":493,"y":123},{"type":"Vector","x":493,"y":141},{"type":"Vector","x":336,"y":141}]]},{"action":"Fill","line":37,"color":"rgb(95,158,160)"},{"action":"Text","line":38,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":336,"y":123,"text":"and","line":39},{"action":"T","x":367,"y":123,"text":"third","line":40},{"action":"T","x":403,"y":123,"text":"level","line":41},{"action":"T","x":440,"y":123,"text":"content","line":42}],"/tests/reftests/transform/rotate.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Transform","line":4,"x":208,"y":110,"matrix":"0.71, -0.71, 0.71, 0.71, 0, 0"},{"action":"Clip","line":5,"path":[[{"type":"Vector","x":108,"y":8},{"type":"Vector","x":308,"y":8},{"type":"Vector","x":308,"y":208},{"type":"Vector","x":108,"y":208}]]},{"action":"Draw image","line":6,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Transform","line":7,"x":667,"y":110,"matrix":"0, 1, -1, 0, 0, 0"},{"action":"Clip","line":8,"path":[[{"type":"Vector","x":642,"y":8},{"type":"Vector","x":692,"y":8},{"type":"Vector","x":692,"y":208},{"type":"Vector","x":642,"y":208}]]},{"action":"Draw image","line":9,"imageSrc":"/tests/assets/image2.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Transform","line":10,"x":158,"y":360,"matrix":"0.71, 0.71, -0.71, 0.71, 0, 0"},{"action":"Clip","line":11,"path":[[{"type":"Vector","x":108,"y":258},{"type":"Vector","x":208,"y":258},{"type":"Vector","x":208,"y":458},{"type":"Vector","x":108,"y":458}]]},{"action":"Draw image","line":12,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75}],"/tests/reftests/transform/translate.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":108},{"type":"Vector","x":758,"y":108},{"type":"Vector","x":758,"y":206},{"type":"Vector","x":8,"y":206}]]},{"action":"Fill","line":5,"color":"rgb(205,92,92)"},{"action":"Text","line":6,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":18,"y":148,"text":"First","line":7},{"action":"T","x":54,"y":148,"text":"level","line":8},{"action":"T","x":91,"y":148,"text":"content","line":9},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":660,"y":148,"text":",","line":11},{"action":"T","x":670,"y":148,"text":"ending","line":12},{"action":"T","x":722,"y":148,"text":"first","line":13},{"action":"Transform","line":14,"x":404,"y":157,"matrix":"1, 0, 0, 1, 125, 0"},{"action":"Clip","line":15,"path":[[{"type":"Vector","x":148,"y":118},{"type":"Vector","x":661,"y":118},{"type":"Vector","x":661,"y":196},{"type":"Vector","x":148,"y":196}]]},{"action":"Fill","line":16,"color":"rgb(143,188,143)"},{"action":"Shape","line":17,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":148,"y":118},{"type":"Vector","x":661,"y":118},{"type":"Vector","x":651,"y":128},{"type":"Vector","x":158,"y":128}]},{"action":"Shape","line":18,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":661,"y":118},{"type":"Vector","x":661,"y":196},{"type":"Vector","x":651,"y":186},{"type":"Vector","x":651,"y":128}]},{"action":"Shape","line":19,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":661,"y":196},{"type":"Vector","x":148,"y":196},{"type":"Vector","x":158,"y":186},{"type":"Vector","x":651,"y":186}]},{"action":"Shape","line":20,"color":"rgb(255,0,0)","path":[{"type":"Vector","x":148,"y":196},{"type":"Vector","x":148,"y":118},{"type":"Vector","x":158,"y":128},{"type":"Vector","x":158,"y":186}]},{"action":"Text","line":21,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":168,"y":148,"text":"with","line":22},{"action":"T","x":201,"y":148,"text":"second","line":23},{"action":"T","x":257,"y":148,"text":"level","line":24},{"action":"T","x":294,"y":148,"text":"content","line":25},{"action":"Text","line":26,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":527,"y":148,"text":",","line":27},{"action":"T","x":537,"y":148,"text":"ending","line":28},{"action":"T","x":589,"y":148,"text":"second","line":29},{"action":"Transform","line":30,"x":451,"y":188,"matrix":"1, 0, 0, 1, 100, -25"},{"action":"Clip","line":31,"path":[[{"type":"Vector","x":351,"y":138},{"type":"Vector","x":528,"y":138},{"type":"Vector","x":528,"y":176},{"type":"Vector","x":351,"y":176}]]},{"action":"Fill","line":32,"color":"rgb(95,158,160)"},{"action":"Text","line":33,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":361,"y":148,"text":"and","line":34},{"action":"T","x":392,"y":148,"text":"third","line":35},{"action":"T","x":428,"y":148,"text":"level","line":36},{"action":"T","x":465,"y":148,"text":"content","line":37}],"/tests/reftests/visibility.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Shape","line":4,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":792,"y":8},{"type":"Vector","x":790,"y":10},{"type":"Vector","x":10,"y":10}]},{"action":"Shape","line":5,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":8},{"type":"Vector","x":792,"y":158},{"type":"Vector","x":790,"y":156},{"type":"Vector","x":790,"y":10}]},{"action":"Shape","line":6,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":792,"y":158},{"type":"Vector","x":8,"y":158},{"type":"Vector","x":10,"y":156},{"type":"Vector","x":790,"y":156}]},{"action":"Shape","line":7,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":8,"y":158},{"type":"Vector","x":8,"y":8},{"type":"Vector","x":10,"y":10},{"type":"Vector","x":10,"y":156}]},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 700 32px Arial"},{"action":"T","x":10,"y":32,"text":"Display:none","line":9},{"action":"T","x":220,"y":32,"text":"and","line":10},{"action":"T","x":286,"y":32,"text":"visible:hidden","line":11},{"action":"T","x":510,"y":32,"text":"tests","line":12},{"action":"Shape","line":13,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":10,"y":90},{"type":"Vector","x":790,"y":90},{"type":"Vector","x":788,"y":92},{"type":"Vector","x":12,"y":92}]},{"action":"Shape","line":14,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":790,"y":90},{"type":"Vector","x":790,"y":112},{"type":"Vector","x":788,"y":110},{"type":"Vector","x":788,"y":92}]},{"action":"Shape","line":15,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":790,"y":112},{"type":"Vector","x":10,"y":112},{"type":"Vector","x":12,"y":110},{"type":"Vector","x":788,"y":110}]},{"action":"Shape","line":16,"color":"rgb(0,0,0)","path":[{"type":"Vector","x":10,"y":112},{"type":"Vector","x":10,"y":90},{"type":"Vector","x":12,"y":92},{"type":"Vector","x":12,"y":110}]},{"action":"Text","line":17,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":12,"y":92,"text":"This","line":18},{"action":"T","x":47,"y":92,"text":"should","line":19},{"action":"T","x":98,"y":92,"text":"be","line":20},{"action":"T","x":120,"y":92,"text":"visible","line":21}],"/tests/reftests/zindex/z-index1.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":8,"y":22,"text":"No","line":5},{"action":"T","x":27,"y":22,"text":"z","line":6},{"action":"T","x":33,"y":22,"text":"-","line":7},{"action":"T","x":37,"y":22,"text":"indexed","line":8},{"action":"T","x":82,"y":22,"text":"content","line":9},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":8,"y":213,"text":"Some","line":11},{"action":"T","x":43,"y":213,"text":"more","line":12},{"action":"T","x":73,"y":213,"text":"non","line":13},{"action":"T","x":93,"y":213,"text":"-","line":14},{"action":"T","x":97,"y":213,"text":"zindexed","line":15},{"action":"T","x":149,"y":213,"text":"content","line":16},{"action":"Clip","line":17,"path":[[{"type":"Vector","x":8,"y":35},{"type":"Vector","x":792,"y":35},{"type":"Vector","x":792,"y":117},{"type":"Vector","x":8,"y":117}]]},{"action":"Fill","line":18,"color":"rgb(204,255,204)"},{"action":"Shape","line":19,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":35},{"type":"Vector","x":792,"y":35},{"type":"Vector","x":791,"y":36},{"type":"Vector","x":9,"y":36}]},{"action":"Shape","line":20,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":792,"y":35},{"type":"Vector","x":792,"y":117},{"type":"Vector","x":791,"y":116},{"type":"Vector","x":791,"y":36}]},{"action":"Shape","line":21,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":792,"y":117},{"type":"Vector","x":8,"y":117},{"type":"Vector","x":9,"y":116},{"type":"Vector","x":791,"y":116}]},{"action":"Shape","line":22,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":117},{"type":"Vector","x":8,"y":35},{"type":"Vector","x":9,"y":36},{"type":"Vector","x":9,"y":116}]},{"action":"Text","line":23,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":14,"y":64,"text":"position:","line":24},{"action":"T","x":62,"y":64,"text":"relative;","line":25},{"action":"Text","line":26,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":14,"y":50,"text":"DIV","line":27},{"action":"T","x":37,"y":50,"text":"#1","line":28},{"action":"Clip","line":29,"path":[[{"type":"Vector","x":8,"y":131},{"type":"Vector","x":792,"y":131},{"type":"Vector","x":792,"y":213},{"type":"Vector","x":8,"y":213}]]},{"action":"Fill","line":30,"color":"rgb(204,255,204)"},{"action":"Shape","line":31,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":131},{"type":"Vector","x":792,"y":131},{"type":"Vector","x":791,"y":132},{"type":"Vector","x":9,"y":132}]},{"action":"Shape","line":32,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":792,"y":131},{"type":"Vector","x":792,"y":213},{"type":"Vector","x":791,"y":212},{"type":"Vector","x":791,"y":132}]},{"action":"Shape","line":33,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":792,"y":213},{"type":"Vector","x":8,"y":213},{"type":"Vector","x":9,"y":212},{"type":"Vector","x":791,"y":212}]},{"action":"Shape","line":34,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":213},{"type":"Vector","x":8,"y":131},{"type":"Vector","x":9,"y":132},{"type":"Vector","x":9,"y":212}]},{"action":"Text","line":35,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":14,"y":159,"text":"position:","line":36},{"action":"T","x":62,"y":159,"text":"relative;","line":37},{"action":"Text","line":38,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":14,"y":146,"text":"DIV","line":39},{"action":"T","x":37,"y":146,"text":"#3","line":40},{"action":"Opacity","line":41,"opacity":0.8},{"action":"Clip","line":42,"path":[[{"type":"Vector","x":179,"y":56},{"type":"Vector","x":331,"y":56},{"type":"Vector","x":331,"y":258},{"type":"Vector","x":179,"y":258}]]},{"action":"Fill","line":43,"color":"rgb(255,221,221)"},{"action":"Shape","line":44,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":179,"y":56},{"type":"Vector","x":331,"y":56},{"type":"Vector","x":330,"y":57},{"type":"Vector","x":180,"y":57}]},{"action":"Shape","line":45,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":331,"y":56},{"type":"Vector","x":331,"y":258},{"type":"Vector","x":330,"y":257},{"type":"Vector","x":330,"y":57}]},{"action":"Shape","line":46,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":331,"y":258},{"type":"Vector","x":179,"y":258},{"type":"Vector","x":180,"y":257},{"type":"Vector","x":330,"y":257}]},{"action":"Shape","line":47,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":179,"y":258},{"type":"Vector","x":179,"y":56},{"type":"Vector","x":180,"y":57},{"type":"Vector","x":180,"y":257}]},{"action":"Text","line":48,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":205,"y":85,"text":"position:","line":49},{"action":"T","x":253,"y":85,"text":"absolute;","line":50},{"action":"Text","line":51,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":227,"y":98,"text":"z","line":52},{"action":"T","x":233,"y":98,"text":"-","line":53},{"action":"T","x":237,"y":98,"text":"index:","line":54},{"action":"T","x":273,"y":98,"text":"1;","line":55},{"action":"Text","line":56,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":235,"y":71,"text":"DIV","line":57},{"action":"T","x":258,"y":71,"text":"#2","line":58},{"action":"Clip","line":59,"path":[[{"type":"Vector","x":59,"y":197},{"type":"Vector","x":271,"y":197},{"type":"Vector","x":271,"y":269},{"type":"Vector","x":59,"y":269}]]},{"action":"Fill","line":60,"color":"rgb(221,221,255)"},{"action":"Shape","line":61,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":59,"y":197},{"type":"Vector","x":271,"y":197},{"type":"Vector","x":270,"y":198},{"type":"Vector","x":60,"y":198}]},{"action":"Shape","line":62,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":271,"y":197},{"type":"Vector","x":271,"y":269},{"type":"Vector","x":270,"y":268},{"type":"Vector","x":270,"y":198}]},{"action":"Shape","line":63,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":271,"y":269},{"type":"Vector","x":59,"y":269},{"type":"Vector","x":60,"y":268},{"type":"Vector","x":270,"y":268}]},{"action":"Shape","line":64,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":59,"y":269},{"type":"Vector","x":59,"y":197},{"type":"Vector","x":60,"y":198},{"type":"Vector","x":60,"y":268}]},{"action":"Text","line":65,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":70,"y":225,"text":"position:","line":66},{"action":"T","x":118,"y":225,"text":"absolute;","line":67},{"action":"Text","line":68,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":70,"y":239,"text":"z","line":69},{"action":"T","x":76,"y":239,"text":"-","line":70},{"action":"T","x":80,"y":239,"text":"index:","line":71},{"action":"T","x":115,"y":239,"text":"2;","line":72},{"action":"Text","line":73,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":70,"y":212,"text":"DIV","line":74},{"action":"T","x":93,"y":212,"text":"#4","line":75}],"/tests/reftests/zindex/z-index10.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Opacity","line":4,"opacity":0.7},{"action":"Clip","line":5,"path":[[{"type":"Vector","x":20,"y":292},{"type":"Vector","x":780,"y":292},{"type":"Vector","x":780,"y":374},{"type":"Vector","x":20,"y":374}]]},{"action":"Fill","line":6,"color":"rgb(204,255,204)"},{"action":"Shape","line":7,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":20,"y":292},{"type":"Vector","x":780,"y":292},{"type":"Vector","x":779,"y":293},{"type":"Vector","x":21,"y":293}]},{"action":"Shape","line":8,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":780,"y":292},{"type":"Vector","x":780,"y":374},{"type":"Vector","x":779,"y":373},{"type":"Vector","x":779,"y":293}]},{"action":"Shape","line":9,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":780,"y":374},{"type":"Vector","x":20,"y":374},{"type":"Vector","x":21,"y":373},{"type":"Vector","x":779,"y":373}]},{"action":"Shape","line":10,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":20,"y":374},{"type":"Vector","x":20,"y":292},{"type":"Vector","x":21,"y":293},{"type":"Vector","x":21,"y":373}]},{"action":"Text","line":11,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":31,"y":306,"text":"Division","line":12},{"action":"T","x":81,"y":306,"text":"Element","line":13},{"action":"T","x":131,"y":306,"text":"#2","line":14},{"action":"Text","line":15,"font":"rgb(0,0,0) normal normal 400 12px monospace"},{"action":"T","x":31,"y":326,"text":"position:","line":16},{"action":"T","x":97,"y":326,"text":"relative;","line":17},{"action":"Text","line":18,"font":"rgb(0,0,0) normal normal 400 12px monospace"},{"action":"T","x":31,"y":346,"text":"z","line":19},{"action":"T","x":37,"y":346,"text":"-","line":20},{"action":"T","x":44,"y":346,"text":"index:","line":21},{"action":"T","x":90,"y":346,"text":"2;","line":22},{"action":"Opacity","line":23,"opacity":1},{"action":"Clip","line":24,"path":[[{"type":"Vector","x":180,"y":40},{"type":"Vector","x":552,"y":40},{"type":"Vector","x":552,"y":356},{"type":"Vector","x":180,"y":356}]]},{"action":"Fill","line":25,"color":"rgb(255,221,221)"},{"action":"Shape","line":26,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":180,"y":40},{"type":"Vector","x":552,"y":40},{"type":"Vector","x":551,"y":41},{"type":"Vector","x":181,"y":41}]},{"action":"Shape","line":27,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":552,"y":40},{"type":"Vector","x":552,"y":356},{"type":"Vector","x":551,"y":355},{"type":"Vector","x":551,"y":41}]},{"action":"Shape","line":28,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":552,"y":356},{"type":"Vector","x":180,"y":356},{"type":"Vector","x":181,"y":355},{"type":"Vector","x":551,"y":355}]},{"action":"Shape","line":29,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":180,"y":356},{"type":"Vector","x":180,"y":40},{"type":"Vector","x":181,"y":41},{"type":"Vector","x":181,"y":355}]},{"action":"Text","line":30,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":201,"y":191,"text":"Division","line":31},{"action":"T","x":251,"y":191,"text":"Element","line":32},{"action":"T","x":301,"y":191,"text":"#3","line":33},{"action":"Text","line":34,"font":"rgb(0,0,0) normal normal 400 12px monospace"},{"action":"T","x":201,"y":211,"text":"position:","line":35},{"action":"T","x":267,"y":211,"text":"absolute;","line":36},{"action":"Text","line":37,"font":"rgb(0,0,0) normal normal 400 12px monospace"},{"action":"T","x":201,"y":231,"text":"z","line":38},{"action":"T","x":207,"y":231,"text":"-","line":39},{"action":"T","x":214,"y":231,"text":"index:","line":40},{"action":"T","x":260,"y":231,"text":"4;","line":41},{"action":"Opacity","line":42,"opacity":0.7},{"action":"Clip","line":43,"path":[[{"type":"Vector","x":201,"y":263},{"type":"Vector","x":531,"y":263},{"type":"Vector","x":531,"y":335},{"type":"Vector","x":201,"y":335}]]},{"action":"Fill","line":44,"color":"rgb(255,255,204)"},{"action":"Shape","line":45,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":201,"y":263},{"type":"Vector","x":531,"y":263},{"type":"Vector","x":530,"y":264},{"type":"Vector","x":202,"y":264}]},{"action":"Shape","line":46,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":531,"y":263},{"type":"Vector","x":531,"y":335},{"type":"Vector","x":530,"y":334},{"type":"Vector","x":530,"y":264}]},{"action":"Shape","line":47,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":531,"y":335},{"type":"Vector","x":201,"y":335},{"type":"Vector","x":202,"y":334},{"type":"Vector","x":530,"y":334}]},{"action":"Shape","line":48,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":201,"y":335},{"type":"Vector","x":201,"y":263},{"type":"Vector","x":202,"y":264},{"type":"Vector","x":202,"y":334}]},{"action":"Text","line":49,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":212,"y":272,"text":"Division","line":50},{"action":"T","x":262,"y":272,"text":"Element","line":51},{"action":"T","x":312,"y":272,"text":"#5","line":52},{"action":"Text","line":53,"font":"rgb(0,0,0) normal normal 400 12px monospace"},{"action":"T","x":212,"y":292,"text":"position:","line":54},{"action":"T","x":278,"y":292,"text":"relative;","line":55},{"action":"Text","line":56,"font":"rgb(0,0,0) normal normal 400 12px monospace"},{"action":"T","x":212,"y":312,"text":"z","line":57},{"action":"T","x":218,"y":312,"text":"-","line":58},{"action":"T","x":225,"y":312,"text":"index:","line":59},{"action":"T","x":271,"y":312,"text":"1;","line":60},{"action":"Clip","line":61,"path":[[{"type":"Vector","x":361,"y":61},{"type":"Vector","x":513,"y":61},{"type":"Vector","x":513,"y":313},{"type":"Vector","x":361,"y":313}]]},{"action":"Fill","line":62,"color":"rgb(221,221,255)"},{"action":"Shape","line":63,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":361,"y":61},{"type":"Vector","x":513,"y":61},{"type":"Vector","x":512,"y":62},{"type":"Vector","x":362,"y":62}]},{"action":"Shape","line":64,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":513,"y":61},{"type":"Vector","x":513,"y":313},{"type":"Vector","x":512,"y":312},{"type":"Vector","x":512,"y":62}]},{"action":"Shape","line":65,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":513,"y":313},{"type":"Vector","x":361,"y":313},{"type":"Vector","x":362,"y":312},{"type":"Vector","x":512,"y":312}]},{"action":"Shape","line":66,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":361,"y":313},{"type":"Vector","x":361,"y":61},{"type":"Vector","x":362,"y":62},{"type":"Vector","x":362,"y":312}]},{"action":"Text","line":67,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":380,"y":190,"text":"Division","line":68},{"action":"T","x":430,"y":190,"text":"Element","line":69},{"action":"T","x":480,"y":190,"text":"#6","line":70},{"action":"Text","line":71,"font":"rgb(0,0,0) normal normal 400 12px monospace"},{"action":"T","x":374,"y":210,"text":"position:","line":72},{"action":"T","x":440,"y":210,"text":"absolute;","line":73},{"action":"Text","line":74,"font":"rgb(0,0,0) normal normal 400 12px monospace"},{"action":"T","x":401,"y":230,"text":"z","line":75},{"action":"T","x":407,"y":230,"text":"-","line":76},{"action":"T","x":414,"y":230,"text":"index:","line":77},{"action":"T","x":460,"y":230,"text":"3;","line":78},{"action":"Clip","line":79,"path":[[{"type":"Vector","x":201,"y":81},{"type":"Vector","x":531,"y":81},{"type":"Vector","x":531,"y":173},{"type":"Vector","x":201,"y":173}]]},{"action":"Fill","line":80,"color":"rgb(255,255,204)"},{"action":"Shape","line":81,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":201,"y":81},{"type":"Vector","x":531,"y":81},{"type":"Vector","x":530,"y":82},{"type":"Vector","x":202,"y":82}]},{"action":"Shape","line":82,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":531,"y":81},{"type":"Vector","x":531,"y":173},{"type":"Vector","x":530,"y":172},{"type":"Vector","x":530,"y":82}]},{"action":"Shape","line":83,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":531,"y":173},{"type":"Vector","x":201,"y":173},{"type":"Vector","x":202,"y":172},{"type":"Vector","x":530,"y":172}]},{"action":"Shape","line":84,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":201,"y":173},{"type":"Vector","x":201,"y":81},{"type":"Vector","x":202,"y":82},{"type":"Vector","x":202,"y":172}]},{"action":"Text","line":85,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":212,"y":110,"text":"Division","line":86},{"action":"T","x":262,"y":110,"text":"Element","line":87},{"action":"T","x":312,"y":110,"text":"#4","line":88},{"action":"Text","line":89,"font":"rgb(0,0,0) normal normal 400 12px monospace"},{"action":"T","x":212,"y":130,"text":"position:","line":90},{"action":"T","x":278,"y":130,"text":"relative;","line":91},{"action":"Text","line":92,"font":"rgb(0,0,0) normal normal 400 12px monospace"},{"action":"T","x":212,"y":150,"text":"z","line":93},{"action":"T","x":218,"y":150,"text":"-","line":94},{"action":"T","x":225,"y":150,"text":"index:","line":95},{"action":"T","x":271,"y":150,"text":"6;","line":96},{"action":"Clip","line":97,"path":[[{"type":"Vector","x":20,"y":20},{"type":"Vector","x":780,"y":20},{"type":"Vector","x":780,"y":102},{"type":"Vector","x":20,"y":102}]]},{"action":"Fill","line":98,"color":"rgb(204,255,204)"},{"action":"Shape","line":99,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":20,"y":20},{"type":"Vector","x":780,"y":20},{"type":"Vector","x":779,"y":21},{"type":"Vector","x":21,"y":21}]},{"action":"Shape","line":100,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":780,"y":20},{"type":"Vector","x":780,"y":102},{"type":"Vector","x":779,"y":101},{"type":"Vector","x":779,"y":21}]},{"action":"Shape","line":101,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":780,"y":102},{"type":"Vector","x":20,"y":102},{"type":"Vector","x":21,"y":101},{"type":"Vector","x":779,"y":101}]},{"action":"Shape","line":102,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":20,"y":102},{"type":"Vector","x":20,"y":20},{"type":"Vector","x":21,"y":21},{"type":"Vector","x":21,"y":101}]},{"action":"Text","line":103,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":31,"y":34,"text":"Division","line":104},{"action":"T","x":81,"y":34,"text":"Element","line":105},{"action":"T","x":131,"y":34,"text":"#1","line":106},{"action":"Text","line":107,"font":"rgb(0,0,0) normal normal 400 12px monospace"},{"action":"T","x":31,"y":54,"text":"position:","line":108},{"action":"T","x":97,"y":54,"text":"relative;","line":109},{"action":"Text","line":110,"font":"rgb(0,0,0) normal normal 400 12px monospace"},{"action":"T","x":31,"y":74,"text":"z","line":111},{"action":"T","x":37,"y":74,"text":"-","line":112},{"action":"T","x":44,"y":74,"text":"index:","line":113},{"action":"T","x":90,"y":74,"text":"5;","line":114}],"/tests/reftests/zindex/z-index11.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":28,"y":28},{"type":"Vector","x":772,"y":28},{"type":"Vector","x":772,"y":245},{"type":"Vector","x":28,"y":245}]]},{"action":"Fill","line":5,"color":"rgb(155,255,248)"},{"action":"Text","line":6,"font":"rgb(0,0,0) normal normal 700 24px Arial"},{"action":"T","x":38,"y":50,"text":"Div","line":7},{"action":"T","x":82,"y":50,"text":"Element","line":8},{"action":"T","x":182,"y":50,"text":"#1","line":9},{"action":"Clip","line":10,"path":[[{"type":"Vector","x":38,"y":110},{"type":"Vector","x":321,"y":110},{"type":"Vector","x":321,"y":235},{"type":"Vector","x":38,"y":235}]]},{"action":"Fill","line":11,"color":"rgb(124,182,89)"},{"action":"Text","line":12,"font":"rgb(0,0,0) normal normal 700 24px Arial"},{"action":"T","x":38,"y":123,"text":"Div","line":13},{"action":"T","x":82,"y":123,"text":"Element","line":14},{"action":"T","x":182,"y":123,"text":"#2","line":15},{"action":"Text","line":16,"font":"rgb(0,0,0) normal normal 700 24px Arial"},{"action":"T","x":38,"y":175,"text":"Div","line":17},{"action":"T","x":82,"y":175,"text":"Element","line":18},{"action":"T","x":182,"y":175,"text":"#3","line":19},{"action":"Text","line":20,"font":"rgb(0,0,0) normal normal 400 12px monospace"},{"action":"T","x":38,"y":217,"text":"float:","line":21},{"action":"T","x":84,"y":217,"text":"left;","line":22},{"action":"Text","line":23,"font":"rgb(0,0,0) normal normal 400 12px monospace"},{"action":"T","x":38,"y":93,"text":"position:","line":24},{"action":"T","x":104,"y":93,"text":"relative;","line":25},{"action":"Text","line":26,"font":"rgb(0,0,0) normal normal 400 12px monospace"},{"action":"T","x":209,"y":165,"text":"position:","line":27},{"action":"T","x":275,"y":165,"text":"static;","line":28}],"/tests/reftests/zindex/z-index12.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":28,"y":28},{"type":"Vector","x":199,"y":28},{"type":"Vector","x":199,"y":80},{"type":"Vector","x":28,"y":80}]]},{"action":"Fill","line":5,"color":"rgb(124,182,89)"},{"action":"Clip","line":6,"path":[[{"type":"Vector","x":28,"y":28},{"type":"Vector","x":199,"y":28},{"type":"Vector","x":199,"y":80},{"type":"Vector","x":28,"y":80}]]},{"action":"Fill","line":7,"color":"rgb(182,159,26)"},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 700 24px Arial"},{"action":"T","x":28,"y":40,"text":"Div","line":9},{"action":"T","x":72,"y":40,"text":"Element","line":10},{"action":"T","x":172,"y":40,"text":"#3","line":11},{"action":"Text","line":12,"font":"rgb(0,0,0) normal normal 700 24px Arial"},{"action":"T","x":28,"y":40,"text":"Div","line":13},{"action":"T","x":72,"y":40,"text":"Element","line":14},{"action":"T","x":172,"y":40,"text":"#2","line":15}],"/tests/reftests/zindex/z-index13.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":208,"y":8},{"type":"Vector","x":208,"y":208},{"type":"Vector","x":8,"y":208}]]},{"action":"Fill","line":5,"color":"rgb(0,255,255)"},{"action":"Clip","line":6,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":108,"y":8},{"type":"Vector","x":108,"y":108},{"type":"Vector","x":8,"y":108}]]},{"action":"Fill","line":7,"color":"rgb(0,128,0)"},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":8,"text":"outer","line":9}],"/tests/reftests/zindex/z-index14.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgb(0,128,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":18},{"type":"Vector","x":0,"y":18}]]},{"action":"Fill","line":5,"color":"rgb(0,128,0)"},{"action":"Clip","line":6,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":200,"y":0},{"type":"Vector","x":200,"y":200},{"type":"Vector","x":0,"y":200}]]},{"action":"Fill","line":7,"color":"rgb(0,255,255)"},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":0,"y":0,"text":"body","line":9}],"/tests/reftests/zindex/z-index15.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgb(128,128,128)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":200,"y":0},{"type":"Vector","x":200,"y":200},{"type":"Vector","x":0,"y":200}]]},{"action":"Fill","line":5,"color":"rgb(0,255,255)"},{"action":"Clip","line":6,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":18},{"type":"Vector","x":0,"y":18}]]},{"action":"Fill","line":7,"color":"rgb(0,128,0)"},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":0,"y":0,"text":"body","line":9}],"/tests/reftests/zindex/z-index16.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Text","line":4,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":16,"text":"This","line":5},{"action":"T","x":43,"y":16,"text":"text","line":6},{"action":"T","x":73,"y":16,"text":"will","line":7},{"action":"T","x":100,"y":16,"text":"be","line":8},{"action":"T","x":122,"y":16,"text":"beneath","line":9},{"action":"T","x":184,"y":16,"text":"everything.","line":10},{"action":"Clip","line":11,"path":[[{"type":"Vector","x":192,"y":192},{"type":"Vector","x":480,"y":192},{"type":"Vector","x":480,"y":480},{"type":"Vector","x":192,"y":480}]]},{"action":"Draw image","line":12,"imageSrc":"/tests/assets/image.jpg","sx":0,"xy":0,"sw":75,"sh":75,"dx":0,"dy":0,"dw":75,"dh":75},{"action":"Text","line":13,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":192,"y":192,"text":"This","line":14},{"action":"T","x":227,"y":192,"text":"text","line":15},{"action":"T","x":257,"y":192,"text":"will","line":16},{"action":"T","x":284,"y":192,"text":"underlay","line":17},{"action":"T","x":349,"y":192,"text":"text1,","line":18},{"action":"T","x":393,"y":192,"text":"but","line":19},{"action":"T","x":420,"y":192,"text":"overlay","line":20},{"action":"T","x":192,"y":210,"text":"the","line":21},{"action":"T","x":219,"y":210,"text":"butterfly","line":22},{"action":"T","x":280,"y":210,"text":"image","line":23},{"action":"Text","line":24,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":192,"y":192,"text":"This","line":25},{"action":"T","x":227,"y":192,"text":"text","line":26},{"action":"T","x":257,"y":192,"text":"will","line":27},{"action":"T","x":284,"y":192,"text":"overlay","line":28},{"action":"T","x":340,"y":192,"text":"the","line":29},{"action":"T","x":366,"y":192,"text":"butterfly","line":30},{"action":"T","x":428,"y":192,"text":"image.","line":31}],"/tests/reftests/zindex/z-index17.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgb(238,130,238)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":792,"y":8},{"type":"Vector","x":792,"y":8},{"type":"Vector","x":8,"y":8}]]},{"action":"Fill","line":5,"color":"rgb(238,130,238)"},{"action":"Clip","line":6,"path":[[{"type":"Vector","x":0,"y":0},{"type":"Vector","x":800,"y":0},{"type":"Vector","x":800,"y":100},{"type":"Vector","x":0,"y":100}]]},{"action":"Fill","line":7,"color":"rgb(85,107,47)"},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":0,"y":0,"text":"fixed","line":9},{"action":"T","x":38,"y":0,"text":"z","line":10},{"action":"T","x":46,"y":0,"text":"-","line":11},{"action":"T","x":52,"y":0,"text":"index","line":12},{"action":"T","x":94,"y":0,"text":"10","line":13}],"/tests/reftests/zindex/z-index18.html":[{"action":"Window","line":1,"width":864,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":864,"height":600,"color":"rgb(238,130,238)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":792,"y":8},{"type":"Vector","x":792,"y":308},{"type":"Vector","x":8,"y":308}]]},{"action":"Fill","line":5,"color":"rgb(238,130,238)"},{"action":"Clip","line":6,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":808,"y":8},{"type":"Vector","x":808,"y":308},{"type":"Vector","x":8,"y":308}]]},{"action":"Fill","line":7,"color":"rgb(0,128,0)"},{"action":"Text","line":8,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":8,"text":"a","line":9},{"action":"Clip","line":10,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":808,"y":8},{"type":"Vector","x":808,"y":308},{"type":"Vector","x":8,"y":308}]]},{"action":"Fill","line":11,"color":"rgb(0,128,0)"},{"action":"Text","line":12,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":8,"y":8,"text":"b","line":13},{"action":"Text","line":14,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":24,"y":18,"text":"c","line":15},{"action":"Text","line":16,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":24,"y":18,"text":"d","line":17},{"action":"Text","line":18,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":24,"y":18,"text":"e","line":19},{"action":"Clip","line":20,"path":[[{"type":"Vector","x":24,"y":18},{"type":"Vector","x":824,"y":18},{"type":"Vector","x":824,"y":318},{"type":"Vector","x":24,"y":318}]]},{"action":"Fill","line":21,"color":"rgb(255,0,0)"},{"action":"Text","line":22,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":24,"y":18,"text":"f","line":23},{"action":"Clip","line":24,"path":[[{"type":"Vector","x":24,"y":18},{"type":"Vector","x":424,"y":18},{"type":"Vector","x":424,"y":318},{"type":"Vector","x":24,"y":318}]]},{"action":"Fill","line":25,"color":"rgb(0,0,255)"},{"action":"Text","line":26,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":24,"y":18,"text":"g","line":27},{"action":"Clip","line":28,"path":[[{"type":"Vector","x":24,"y":18},{"type":"Vector","x":224,"y":18},{"type":"Vector","x":224,"y":218},{"type":"Vector","x":24,"y":218}]]},{"action":"Fill","line":29,"color":"rgb(255,165,0)"},{"action":"Text","line":30,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":24,"y":18,"text":"h","line":31},{"action":"Clip","line":32,"path":[[{"type":"Vector","x":-24,"y":18},{"type":"Vector","x":776,"y":18},{"type":"Vector","x":776,"y":118},{"type":"Vector","x":-24,"y":118}]]},{"action":"Fill","line":33,"color":"rgb(128,0,128)"},{"action":"Text","line":34,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":-24,"y":18,"text":"i","line":35},{"action":"Clip","line":36,"path":[[{"type":"Vector","x":24,"y":68},{"type":"Vector","x":824,"y":68},{"type":"Vector","x":824,"y":168},{"type":"Vector","x":24,"y":168}]]},{"action":"Fill","line":37,"color":"rgb(255,192,203)"},{"action":"Text","line":38,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":24,"y":68,"text":"j","line":39},{"action":"Clip","line":40,"path":[[{"type":"Vector","x":64,"y":98},{"type":"Vector","x":864,"y":98},{"type":"Vector","x":864,"y":198},{"type":"Vector","x":64,"y":198}]]},{"action":"Fill","line":41,"color":"rgb(0,0,128)"},{"action":"Text","line":42,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":64,"y":98,"text":"k","line":43},{"action":"Clip","line":44,"path":[[{"type":"Vector","x":24,"y":18},{"type":"Vector","x":124,"y":18},{"type":"Vector","x":124,"y":118},{"type":"Vector","x":24,"y":118}]]},{"action":"Fill","line":45,"color":"rgb(165,42,42)"},{"action":"Text","line":46,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":24,"y":18,"text":"l","line":47}],"/tests/reftests/zindex/z-index2.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":257},{"type":"Vector","x":792,"y":257},{"type":"Vector","x":792,"y":299},{"type":"Vector","x":8,"y":299}]]},{"action":"Fill","line":5,"color":"rgb(221,221,255)"},{"action":"Shape","line":6,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":8,"y":257},{"type":"Vector","x":792,"y":257},{"type":"Vector","x":791,"y":258},{"type":"Vector","x":9,"y":258}]},{"action":"Shape","line":7,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":792,"y":257},{"type":"Vector","x":792,"y":299},{"type":"Vector","x":791,"y":298},{"type":"Vector","x":791,"y":258}]},{"action":"Shape","line":8,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":792,"y":299},{"type":"Vector","x":8,"y":299},{"type":"Vector","x":9,"y":298},{"type":"Vector","x":791,"y":298}]},{"action":"Shape","line":9,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":8,"y":299},{"type":"Vector","x":8,"y":257},{"type":"Vector","x":9,"y":258},{"type":"Vector","x":9,"y":298}]},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":19,"y":271,"text":"DIV","line":11},{"action":"T","x":42,"y":271,"text":"#6","line":12},{"action":"Text","line":13,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":19,"y":285,"text":"position:static;","line":14},{"action":"Clip","line":15,"path":[[{"type":"Vector","x":8,"y":27},{"type":"Vector","x":792,"y":27},{"type":"Vector","x":792,"y":109},{"type":"Vector","x":8,"y":109}]]},{"action":"Fill","line":16,"color":"rgb(204,255,204)"},{"action":"Shape","line":17,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":27},{"type":"Vector","x":792,"y":27},{"type":"Vector","x":791,"y":28},{"type":"Vector","x":9,"y":28}]},{"action":"Shape","line":18,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":792,"y":27},{"type":"Vector","x":792,"y":109},{"type":"Vector","x":791,"y":108},{"type":"Vector","x":791,"y":28}]},{"action":"Shape","line":19,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":792,"y":109},{"type":"Vector","x":8,"y":109},{"type":"Vector","x":9,"y":108},{"type":"Vector","x":791,"y":108}]},{"action":"Shape","line":20,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":109},{"type":"Vector","x":8,"y":27},{"type":"Vector","x":9,"y":28},{"type":"Vector","x":9,"y":108}]},{"action":"Text","line":21,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":14,"y":55,"text":"position:","line":22},{"action":"T","x":62,"y":55,"text":"relative;","line":23},{"action":"Text","line":24,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":14,"y":42,"text":"DIV","line":25},{"action":"T","x":37,"y":42,"text":"#1","line":26},{"action":"Clip","line":27,"path":[[{"type":"Vector","x":8,"y":220},{"type":"Vector","x":792,"y":220},{"type":"Vector","x":792,"y":272},{"type":"Vector","x":8,"y":272}]]},{"action":"Fill","line":28,"color":"rgb(204,255,204)"},{"action":"Shape","line":29,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":220},{"type":"Vector","x":792,"y":220},{"type":"Vector","x":791,"y":221},{"type":"Vector","x":9,"y":221}]},{"action":"Shape","line":30,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":792,"y":220},{"type":"Vector","x":792,"y":272},{"type":"Vector","x":791,"y":271},{"type":"Vector","x":791,"y":221}]},{"action":"Shape","line":31,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":792,"y":272},{"type":"Vector","x":8,"y":272},{"type":"Vector","x":9,"y":271},{"type":"Vector","x":791,"y":271}]},{"action":"Shape","line":32,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":272},{"type":"Vector","x":8,"y":220},{"type":"Vector","x":9,"y":221},{"type":"Vector","x":9,"y":271}]},{"action":"Text","line":33,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":14,"y":234,"text":"DIV","line":34},{"action":"T","x":37,"y":234,"text":"#5","line":35},{"action":"Text","line":36,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":14,"y":248,"text":"position:relative;","line":37},{"action":"Clip","line":38,"path":[[{"type":"Vector","x":8,"y":128},{"type":"Vector","x":792,"y":128},{"type":"Vector","x":792,"y":210},{"type":"Vector","x":8,"y":210}]]},{"action":"Fill","line":39,"color":"rgb(204,255,204)"},{"action":"Shape","line":40,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":128},{"type":"Vector","x":792,"y":128},{"type":"Vector","x":791,"y":129},{"type":"Vector","x":9,"y":129}]},{"action":"Shape","line":41,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":792,"y":128},{"type":"Vector","x":792,"y":210},{"type":"Vector","x":791,"y":209},{"type":"Vector","x":791,"y":129}]},{"action":"Shape","line":42,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":792,"y":210},{"type":"Vector","x":8,"y":210},{"type":"Vector","x":9,"y":209},{"type":"Vector","x":791,"y":209}]},{"action":"Shape","line":43,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":210},{"type":"Vector","x":8,"y":128},{"type":"Vector","x":9,"y":129},{"type":"Vector","x":9,"y":209}]},{"action":"Text","line":44,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":14,"y":156,"text":"position:","line":45},{"action":"T","x":62,"y":156,"text":"relative;","line":46},{"action":"Text","line":47,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":14,"y":170,"text":"z","line":48},{"action":"T","x":20,"y":170,"text":"-","line":49},{"action":"T","x":24,"y":170,"text":"index:","line":50},{"action":"T","x":59,"y":170,"text":"1;","line":51},{"action":"Text","line":52,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":14,"y":142,"text":"DIV","line":53},{"action":"T","x":37,"y":142,"text":"#3","line":54},{"action":"Opacity","line":55,"opacity":0.8},{"action":"Clip","line":56,"path":[[{"type":"Vector","x":59,"y":194},{"type":"Vector","x":271,"y":194},{"type":"Vector","x":271,"y":266},{"type":"Vector","x":59,"y":266}]]},{"action":"Fill","line":57,"color":"rgb(221,221,255)"},{"action":"Shape","line":58,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":59,"y":194},{"type":"Vector","x":271,"y":194},{"type":"Vector","x":270,"y":195},{"type":"Vector","x":60,"y":195}]},{"action":"Shape","line":59,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":271,"y":194},{"type":"Vector","x":271,"y":266},{"type":"Vector","x":270,"y":265},{"type":"Vector","x":270,"y":195}]},{"action":"Shape","line":60,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":271,"y":266},{"type":"Vector","x":59,"y":266},{"type":"Vector","x":60,"y":265},{"type":"Vector","x":270,"y":265}]},{"action":"Shape","line":61,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":59,"y":266},{"type":"Vector","x":59,"y":194},{"type":"Vector","x":60,"y":195},{"type":"Vector","x":60,"y":265}]},{"action":"Text","line":62,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":70,"y":222,"text":"position:","line":63},{"action":"T","x":118,"y":222,"text":"absolute;","line":64},{"action":"Text","line":65,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":70,"y":236,"text":"z","line":66},{"action":"T","x":76,"y":236,"text":"-","line":67},{"action":"T","x":80,"y":236,"text":"index:","line":68},{"action":"T","x":115,"y":236,"text":"10;","line":69},{"action":"Text","line":70,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":70,"y":208,"text":"DIV","line":71},{"action":"T","x":93,"y":208,"text":"#4","line":72},{"action":"Clip","line":73,"path":[[{"type":"Vector","x":179,"y":48},{"type":"Vector","x":331,"y":48},{"type":"Vector","x":331,"y":250},{"type":"Vector","x":179,"y":250}]]},{"action":"Fill","line":74,"color":"rgb(255,221,221)"},{"action":"Shape","line":75,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":179,"y":48},{"type":"Vector","x":331,"y":48},{"type":"Vector","x":330,"y":49},{"type":"Vector","x":180,"y":49}]},{"action":"Shape","line":76,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":331,"y":48},{"type":"Vector","x":331,"y":250},{"type":"Vector","x":330,"y":249},{"type":"Vector","x":330,"y":49}]},{"action":"Shape","line":77,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":331,"y":250},{"type":"Vector","x":179,"y":250},{"type":"Vector","x":180,"y":249},{"type":"Vector","x":330,"y":249}]},{"action":"Shape","line":78,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":179,"y":250},{"type":"Vector","x":179,"y":48},{"type":"Vector","x":180,"y":49},{"type":"Vector","x":180,"y":249}]},{"action":"Text","line":79,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":205,"y":76,"text":"position:","line":80},{"action":"T","x":253,"y":76,"text":"absolute;","line":81},{"action":"Text","line":82,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":227,"y":90,"text":"z","line":83},{"action":"T","x":233,"y":90,"text":"-","line":84},{"action":"T","x":237,"y":90,"text":"index:","line":85},{"action":"T","x":273,"y":90,"text":"2;","line":86},{"action":"Text","line":87,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":235,"y":63,"text":"DIV","line":88},{"action":"T","x":258,"y":63,"text":"#2","line":89}],"/tests/reftests/zindex/z-index3.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":101},{"type":"Vector","x":267,"y":101},{"type":"Vector","x":267,"y":175},{"type":"Vector","x":8,"y":175}]]},{"action":"Fill","line":5,"color":"rgb(204,255,204)"},{"action":"Shape","line":6,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":101},{"type":"Vector","x":267,"y":101},{"type":"Vector","x":265,"y":103},{"type":"Vector","x":10,"y":103}]},{"action":"Shape","line":7,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":101},{"type":"Vector","x":267,"y":175},{"type":"Vector","x":265,"y":173},{"type":"Vector","x":265,"y":103}]},{"action":"Shape","line":8,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":175},{"type":"Vector","x":8,"y":175},{"type":"Vector","x":10,"y":173},{"type":"Vector","x":265,"y":173}]},{"action":"Shape","line":9,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":175},{"type":"Vector","x":8,"y":101},{"type":"Vector","x":10,"y":103},{"type":"Vector","x":10,"y":173}]},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":15,"y":103,"text":"LEVEL","line":11},{"action":"T","x":57,"y":103,"text":"#1","line":12},{"action":"Clip","line":13,"path":[[{"type":"Vector","x":8,"y":27},{"type":"Vector","x":267,"y":27},{"type":"Vector","x":267,"y":101},{"type":"Vector","x":8,"y":101}]]},{"action":"Fill","line":14,"color":"rgb(204,255,204)"},{"action":"Shape","line":15,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":27},{"type":"Vector","x":267,"y":27},{"type":"Vector","x":265,"y":29},{"type":"Vector","x":10,"y":29}]},{"action":"Shape","line":16,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":27},{"type":"Vector","x":267,"y":101},{"type":"Vector","x":265,"y":99},{"type":"Vector","x":265,"y":29}]},{"action":"Shape","line":17,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":101},{"type":"Vector","x":8,"y":101},{"type":"Vector","x":10,"y":99},{"type":"Vector","x":265,"y":99}]},{"action":"Shape","line":18,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":101},{"type":"Vector","x":8,"y":27},{"type":"Vector","x":10,"y":29},{"type":"Vector","x":10,"y":99}]},{"action":"Text","line":19,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":15,"y":29,"text":"LEVEL","line":20},{"action":"T","x":57,"y":29,"text":"#1","line":21},{"action":"Clip","line":22,"path":[[{"type":"Vector","x":8,"y":175},{"type":"Vector","x":267,"y":175},{"type":"Vector","x":267,"y":249},{"type":"Vector","x":8,"y":249}]]},{"action":"Fill","line":23,"color":"rgb(204,255,204)"},{"action":"Shape","line":24,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":175},{"type":"Vector","x":267,"y":175},{"type":"Vector","x":265,"y":177},{"type":"Vector","x":10,"y":177}]},{"action":"Shape","line":25,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":175},{"type":"Vector","x":267,"y":249},{"type":"Vector","x":265,"y":247},{"type":"Vector","x":265,"y":177}]},{"action":"Shape","line":26,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":249},{"type":"Vector","x":8,"y":249},{"type":"Vector","x":10,"y":247},{"type":"Vector","x":265,"y":247}]},{"action":"Shape","line":27,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":249},{"type":"Vector","x":8,"y":175},{"type":"Vector","x":10,"y":177},{"type":"Vector","x":10,"y":247}]},{"action":"Text","line":28,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":15,"y":177,"text":"LEVEL","line":29},{"action":"T","x":57,"y":177,"text":"#1","line":30},{"action":"Clip","line":31,"path":[[{"type":"Vector","x":8,"y":249},{"type":"Vector","x":267,"y":249},{"type":"Vector","x":267,"y":323},{"type":"Vector","x":8,"y":323}]]},{"action":"Fill","line":32,"color":"rgb(204,255,204)"},{"action":"Shape","line":33,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":249},{"type":"Vector","x":267,"y":249},{"type":"Vector","x":265,"y":251},{"type":"Vector","x":10,"y":251}]},{"action":"Shape","line":34,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":249},{"type":"Vector","x":267,"y":323},{"type":"Vector","x":265,"y":321},{"type":"Vector","x":265,"y":251}]},{"action":"Shape","line":35,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":323},{"type":"Vector","x":8,"y":323},{"type":"Vector","x":10,"y":321},{"type":"Vector","x":265,"y":321}]},{"action":"Shape","line":36,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":323},{"type":"Vector","x":8,"y":249},{"type":"Vector","x":10,"y":251},{"type":"Vector","x":10,"y":321}]},{"action":"Text","line":37,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":15,"y":251,"text":"LEVEL","line":38},{"action":"T","x":57,"y":251,"text":"#1","line":39},{"action":"Opacity","line":40,"opacity":0.9},{"action":"Clip","line":41,"path":[[{"type":"Vector","x":85,"y":59},{"type":"Vector","x":294,"y":59},{"type":"Vector","x":294,"y":123},{"type":"Vector","x":85,"y":123}]]},{"action":"Fill","line":42,"color":"rgb(255,221,221)"},{"action":"Shape","line":43,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":85,"y":59},{"type":"Vector","x":294,"y":59},{"type":"Vector","x":292,"y":61},{"type":"Vector","x":87,"y":61}]},{"action":"Shape","line":44,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":294,"y":59},{"type":"Vector","x":294,"y":123},{"type":"Vector","x":292,"y":121},{"type":"Vector","x":292,"y":61}]},{"action":"Shape","line":45,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":294,"y":123},{"type":"Vector","x":85,"y":123},{"type":"Vector","x":87,"y":121},{"type":"Vector","x":292,"y":121}]},{"action":"Shape","line":46,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":85,"y":123},{"type":"Vector","x":85,"y":59},{"type":"Vector","x":87,"y":61},{"type":"Vector","x":87,"y":121}]},{"action":"Text","line":47,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":92,"y":88,"text":"z","line":48},{"action":"T","x":98,"y":88,"text":"-","line":49},{"action":"T","x":102,"y":88,"text":"index:","line":50},{"action":"T","x":137,"y":88,"text":"1;","line":51},{"action":"Text","line":52,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":92,"y":74,"text":"LEVEL","line":53},{"action":"T","x":134,"y":74,"text":"#2","line":54},{"action":"Clip","line":55,"path":[[{"type":"Vector","x":197,"y":81},{"type":"Vector","x":306,"y":81},{"type":"Vector","x":306,"y":98},{"type":"Vector","x":197,"y":98}]]},{"action":"Fill","line":56,"color":"rgb(221,221,255)"},{"action":"Shape","line":57,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":81},{"type":"Vector","x":306,"y":81},{"type":"Vector","x":304,"y":83},{"type":"Vector","x":199,"y":83}]},{"action":"Shape","line":58,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":81},{"type":"Vector","x":306,"y":98},{"type":"Vector","x":304,"y":96},{"type":"Vector","x":304,"y":83}]},{"action":"Shape","line":59,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":98},{"type":"Vector","x":197,"y":98},{"type":"Vector","x":199,"y":96},{"type":"Vector","x":304,"y":96}]},{"action":"Shape","line":60,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":98},{"type":"Vector","x":197,"y":81},{"type":"Vector","x":199,"y":83},{"type":"Vector","x":199,"y":96}]},{"action":"Text","line":61,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":204,"y":83,"text":"LEVEL","line":62},{"action":"T","x":246,"y":83,"text":"#3","line":63},{"action":"Clip","line":64,"path":[[{"type":"Vector","x":197,"y":98},{"type":"Vector","x":306,"y":98},{"type":"Vector","x":306,"y":116},{"type":"Vector","x":197,"y":116}]]},{"action":"Fill","line":65,"color":"rgb(221,221,255)"},{"action":"Shape","line":66,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":98},{"type":"Vector","x":306,"y":98},{"type":"Vector","x":304,"y":100},{"type":"Vector","x":199,"y":100}]},{"action":"Shape","line":67,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":98},{"type":"Vector","x":306,"y":116},{"type":"Vector","x":304,"y":114},{"type":"Vector","x":304,"y":100}]},{"action":"Shape","line":68,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":116},{"type":"Vector","x":197,"y":116},{"type":"Vector","x":199,"y":114},{"type":"Vector","x":304,"y":114}]},{"action":"Shape","line":69,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":116},{"type":"Vector","x":197,"y":98},{"type":"Vector","x":199,"y":100},{"type":"Vector","x":199,"y":114}]},{"action":"Text","line":70,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":204,"y":100,"text":"LEVEL","line":71},{"action":"T","x":246,"y":100,"text":"#3","line":72},{"action":"Clip","line":73,"path":[[{"type":"Vector","x":197,"y":116},{"type":"Vector","x":306,"y":116},{"type":"Vector","x":306,"y":134},{"type":"Vector","x":197,"y":134}]]},{"action":"Fill","line":74,"color":"rgb(221,221,255)"},{"action":"Shape","line":75,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":116},{"type":"Vector","x":306,"y":116},{"type":"Vector","x":304,"y":118},{"type":"Vector","x":199,"y":118}]},{"action":"Shape","line":76,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":116},{"type":"Vector","x":306,"y":134},{"type":"Vector","x":304,"y":132},{"type":"Vector","x":304,"y":118}]},{"action":"Shape","line":77,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":134},{"type":"Vector","x":197,"y":134},{"type":"Vector","x":199,"y":132},{"type":"Vector","x":304,"y":132}]},{"action":"Shape","line":78,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":134},{"type":"Vector","x":197,"y":116},{"type":"Vector","x":199,"y":118},{"type":"Vector","x":199,"y":132}]},{"action":"Text","line":79,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":204,"y":118,"text":"LEVEL","line":80},{"action":"T","x":246,"y":118,"text":"#3","line":81},{"action":"Clip","line":82,"path":[[{"type":"Vector","x":197,"y":134},{"type":"Vector","x":306,"y":134},{"type":"Vector","x":306,"y":151},{"type":"Vector","x":197,"y":151}]]},{"action":"Fill","line":83,"color":"rgb(221,221,255)"},{"action":"Shape","line":84,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":134},{"type":"Vector","x":306,"y":134},{"type":"Vector","x":304,"y":136},{"type":"Vector","x":199,"y":136}]},{"action":"Shape","line":85,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":134},{"type":"Vector","x":306,"y":151},{"type":"Vector","x":304,"y":149},{"type":"Vector","x":304,"y":136}]},{"action":"Shape","line":86,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":151},{"type":"Vector","x":197,"y":151},{"type":"Vector","x":199,"y":149},{"type":"Vector","x":304,"y":149}]},{"action":"Shape","line":87,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":151},{"type":"Vector","x":197,"y":134},{"type":"Vector","x":199,"y":136},{"type":"Vector","x":199,"y":149}]},{"action":"Text","line":88,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":204,"y":136,"text":"LEVEL","line":89},{"action":"T","x":246,"y":136,"text":"#3","line":90},{"action":"Clip","line":91,"path":[[{"type":"Vector","x":197,"y":151},{"type":"Vector","x":306,"y":151},{"type":"Vector","x":306,"y":169},{"type":"Vector","x":197,"y":169}]]},{"action":"Fill","line":92,"color":"rgb(221,221,255)"},{"action":"Shape","line":93,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":151},{"type":"Vector","x":306,"y":151},{"type":"Vector","x":304,"y":153},{"type":"Vector","x":199,"y":153}]},{"action":"Shape","line":94,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":151},{"type":"Vector","x":306,"y":169},{"type":"Vector","x":304,"y":167},{"type":"Vector","x":304,"y":153}]},{"action":"Shape","line":95,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":169},{"type":"Vector","x":197,"y":169},{"type":"Vector","x":199,"y":167},{"type":"Vector","x":304,"y":167}]},{"action":"Shape","line":96,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":169},{"type":"Vector","x":197,"y":151},{"type":"Vector","x":199,"y":153},{"type":"Vector","x":199,"y":167}]},{"action":"Text","line":97,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":204,"y":153,"text":"LEVEL","line":98},{"action":"T","x":246,"y":153,"text":"#3","line":99},{"action":"Clip","line":100,"path":[[{"type":"Vector","x":197,"y":169},{"type":"Vector","x":306,"y":169},{"type":"Vector","x":306,"y":186},{"type":"Vector","x":197,"y":186}]]},{"action":"Fill","line":101,"color":"rgb(221,221,255)"},{"action":"Shape","line":102,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":169},{"type":"Vector","x":306,"y":169},{"type":"Vector","x":304,"y":171},{"type":"Vector","x":199,"y":171}]},{"action":"Shape","line":103,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":169},{"type":"Vector","x":306,"y":186},{"type":"Vector","x":304,"y":184},{"type":"Vector","x":304,"y":171}]},{"action":"Shape","line":104,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":186},{"type":"Vector","x":197,"y":186},{"type":"Vector","x":199,"y":184},{"type":"Vector","x":304,"y":184}]},{"action":"Shape","line":105,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":186},{"type":"Vector","x":197,"y":169},{"type":"Vector","x":199,"y":171},{"type":"Vector","x":199,"y":184}]},{"action":"Text","line":106,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":204,"y":171,"text":"LEVEL","line":107},{"action":"T","x":246,"y":171,"text":"#3","line":108},{"action":"Clip","line":109,"path":[[{"type":"Vector","x":197,"y":186},{"type":"Vector","x":306,"y":186},{"type":"Vector","x":306,"y":204},{"type":"Vector","x":197,"y":204}]]},{"action":"Fill","line":110,"color":"rgb(221,221,255)"},{"action":"Shape","line":111,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":186},{"type":"Vector","x":306,"y":186},{"type":"Vector","x":304,"y":188},{"type":"Vector","x":199,"y":188}]},{"action":"Shape","line":112,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":186},{"type":"Vector","x":306,"y":204},{"type":"Vector","x":304,"y":202},{"type":"Vector","x":304,"y":188}]},{"action":"Shape","line":113,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":204},{"type":"Vector","x":197,"y":204},{"type":"Vector","x":199,"y":202},{"type":"Vector","x":304,"y":202}]},{"action":"Shape","line":114,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":204},{"type":"Vector","x":197,"y":186},{"type":"Vector","x":199,"y":188},{"type":"Vector","x":199,"y":202}]},{"action":"Text","line":115,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":204,"y":188,"text":"LEVEL","line":116},{"action":"T","x":246,"y":188,"text":"#3","line":117},{"action":"Clip","line":118,"path":[[{"type":"Vector","x":197,"y":204},{"type":"Vector","x":306,"y":204},{"type":"Vector","x":306,"y":222},{"type":"Vector","x":197,"y":222}]]},{"action":"Fill","line":119,"color":"rgb(221,221,255)"},{"action":"Shape","line":120,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":204},{"type":"Vector","x":306,"y":204},{"type":"Vector","x":304,"y":206},{"type":"Vector","x":199,"y":206}]},{"action":"Shape","line":121,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":204},{"type":"Vector","x":306,"y":222},{"type":"Vector","x":304,"y":220},{"type":"Vector","x":304,"y":206}]},{"action":"Shape","line":122,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":222},{"type":"Vector","x":197,"y":222},{"type":"Vector","x":199,"y":220},{"type":"Vector","x":304,"y":220}]},{"action":"Shape","line":123,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":222},{"type":"Vector","x":197,"y":204},{"type":"Vector","x":199,"y":206},{"type":"Vector","x":199,"y":220}]},{"action":"Text","line":124,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":204,"y":206,"text":"LEVEL","line":125},{"action":"T","x":246,"y":206,"text":"#3","line":126},{"action":"Clip","line":127,"path":[[{"type":"Vector","x":197,"y":222},{"type":"Vector","x":306,"y":222},{"type":"Vector","x":306,"y":239},{"type":"Vector","x":197,"y":239}]]},{"action":"Fill","line":128,"color":"rgb(221,221,255)"},{"action":"Shape","line":129,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":222},{"type":"Vector","x":306,"y":222},{"type":"Vector","x":304,"y":224},{"type":"Vector","x":199,"y":224}]},{"action":"Shape","line":130,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":222},{"type":"Vector","x":306,"y":239},{"type":"Vector","x":304,"y":237},{"type":"Vector","x":304,"y":224}]},{"action":"Shape","line":131,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":239},{"type":"Vector","x":197,"y":239},{"type":"Vector","x":199,"y":237},{"type":"Vector","x":304,"y":237}]},{"action":"Shape","line":132,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":239},{"type":"Vector","x":197,"y":222},{"type":"Vector","x":199,"y":224},{"type":"Vector","x":199,"y":237}]},{"action":"Text","line":133,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":204,"y":224,"text":"LEVEL","line":134},{"action":"T","x":246,"y":224,"text":"#3","line":135},{"action":"Clip","line":136,"path":[[{"type":"Vector","x":197,"y":239},{"type":"Vector","x":306,"y":239},{"type":"Vector","x":306,"y":257},{"type":"Vector","x":197,"y":257}]]},{"action":"Fill","line":137,"color":"rgb(221,221,255)"},{"action":"Shape","line":138,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":239},{"type":"Vector","x":306,"y":239},{"type":"Vector","x":304,"y":241},{"type":"Vector","x":199,"y":241}]},{"action":"Shape","line":139,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":239},{"type":"Vector","x":306,"y":257},{"type":"Vector","x":304,"y":255},{"type":"Vector","x":304,"y":241}]},{"action":"Shape","line":140,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":257},{"type":"Vector","x":197,"y":257},{"type":"Vector","x":199,"y":255},{"type":"Vector","x":304,"y":255}]},{"action":"Shape","line":141,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":257},{"type":"Vector","x":197,"y":239},{"type":"Vector","x":199,"y":241},{"type":"Vector","x":199,"y":255}]},{"action":"Text","line":142,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":204,"y":241,"text":"LEVEL","line":143},{"action":"T","x":246,"y":241,"text":"#3","line":144},{"action":"Clip","line":145,"path":[[{"type":"Vector","x":197,"y":257},{"type":"Vector","x":306,"y":257},{"type":"Vector","x":306,"y":274},{"type":"Vector","x":197,"y":274}]]},{"action":"Fill","line":146,"color":"rgb(221,221,255)"},{"action":"Shape","line":147,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":257},{"type":"Vector","x":306,"y":257},{"type":"Vector","x":304,"y":259},{"type":"Vector","x":199,"y":259}]},{"action":"Shape","line":148,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":257},{"type":"Vector","x":306,"y":274},{"type":"Vector","x":304,"y":272},{"type":"Vector","x":304,"y":259}]},{"action":"Shape","line":149,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":306,"y":274},{"type":"Vector","x":197,"y":274},{"type":"Vector","x":199,"y":272},{"type":"Vector","x":304,"y":272}]},{"action":"Shape","line":150,"color":"rgb(0,0,153)","path":[{"type":"Vector","x":197,"y":274},{"type":"Vector","x":197,"y":257},{"type":"Vector","x":199,"y":259},{"type":"Vector","x":199,"y":272}]},{"action":"Text","line":151,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":204,"y":259,"text":"LEVEL","line":152},{"action":"T","x":246,"y":259,"text":"#3","line":153},{"action":"Clip","line":154,"path":[[{"type":"Vector","x":85,"y":123},{"type":"Vector","x":294,"y":123},{"type":"Vector","x":294,"y":187},{"type":"Vector","x":85,"y":187}]]},{"action":"Fill","line":155,"color":"rgb(255,221,221)"},{"action":"Shape","line":156,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":85,"y":123},{"type":"Vector","x":294,"y":123},{"type":"Vector","x":292,"y":125},{"type":"Vector","x":87,"y":125}]},{"action":"Shape","line":157,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":294,"y":123},{"type":"Vector","x":294,"y":187},{"type":"Vector","x":292,"y":185},{"type":"Vector","x":292,"y":125}]},{"action":"Shape","line":158,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":294,"y":187},{"type":"Vector","x":85,"y":187},{"type":"Vector","x":87,"y":185},{"type":"Vector","x":292,"y":185}]},{"action":"Shape","line":159,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":85,"y":187},{"type":"Vector","x":85,"y":123},{"type":"Vector","x":87,"y":125},{"type":"Vector","x":87,"y":185}]},{"action":"Text","line":160,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":92,"y":152,"text":"z","line":161},{"action":"T","x":98,"y":152,"text":"-","line":162},{"action":"T","x":102,"y":152,"text":"index:","line":163},{"action":"T","x":137,"y":152,"text":"1;","line":164},{"action":"Text","line":165,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":92,"y":138,"text":"LEVEL","line":166},{"action":"T","x":134,"y":138,"text":"#2","line":167}],"/tests/reftests/zindex/z-index4.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":0},{"type":"Vector","x":258,"y":0},{"type":"Vector","x":258,"y":600},{"type":"Vector","x":8,"y":600}]]},{"action":"Fill","line":5,"color":"rgb(255,221,221)"},{"action":"Clip","line":6,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":267,"y":8},{"type":"Vector","x":267,"y":82},{"type":"Vector","x":8,"y":82}]]},{"action":"Fill","line":7,"color":"rgb(204,255,204)"},{"action":"Shape","line":8,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":267,"y":8},{"type":"Vector","x":265,"y":10},{"type":"Vector","x":10,"y":10}]},{"action":"Shape","line":9,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":8},{"type":"Vector","x":267,"y":82},{"type":"Vector","x":265,"y":80},{"type":"Vector","x":265,"y":10}]},{"action":"Shape","line":10,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":82},{"type":"Vector","x":8,"y":82},{"type":"Vector","x":10,"y":80},{"type":"Vector","x":265,"y":80}]},{"action":"Shape","line":11,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":82},{"type":"Vector","x":8,"y":8},{"type":"Vector","x":10,"y":10},{"type":"Vector","x":10,"y":80}]},{"action":"Text","line":12,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":15,"y":10,"text":"LEVEL","line":13},{"action":"T","x":69,"y":10,"text":"#1","line":14},{"action":"Clip","line":15,"path":[[{"type":"Vector","x":8,"y":82},{"type":"Vector","x":267,"y":82},{"type":"Vector","x":267,"y":156},{"type":"Vector","x":8,"y":156}]]},{"action":"Fill","line":16,"color":"rgb(204,255,204)"},{"action":"Shape","line":17,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":82},{"type":"Vector","x":267,"y":82},{"type":"Vector","x":265,"y":84},{"type":"Vector","x":10,"y":84}]},{"action":"Shape","line":18,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":82},{"type":"Vector","x":267,"y":156},{"type":"Vector","x":265,"y":154},{"type":"Vector","x":265,"y":84}]},{"action":"Shape","line":19,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":156},{"type":"Vector","x":8,"y":156},{"type":"Vector","x":10,"y":154},{"type":"Vector","x":265,"y":154}]},{"action":"Shape","line":20,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":156},{"type":"Vector","x":8,"y":82},{"type":"Vector","x":10,"y":84},{"type":"Vector","x":10,"y":154}]},{"action":"Text","line":21,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":15,"y":84,"text":"LEVEL","line":22},{"action":"T","x":69,"y":84,"text":"#1","line":23}],"/tests/reftests/zindex/z-index5.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":267,"y":8},{"type":"Vector","x":267,"y":82},{"type":"Vector","x":8,"y":82}]]},{"action":"Fill","line":5,"color":"rgb(204,255,204)"},{"action":"Shape","line":6,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":8},{"type":"Vector","x":267,"y":8},{"type":"Vector","x":265,"y":10},{"type":"Vector","x":10,"y":10}]},{"action":"Shape","line":7,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":8},{"type":"Vector","x":267,"y":82},{"type":"Vector","x":265,"y":80},{"type":"Vector","x":265,"y":10}]},{"action":"Shape","line":8,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":82},{"type":"Vector","x":8,"y":82},{"type":"Vector","x":10,"y":80},{"type":"Vector","x":265,"y":80}]},{"action":"Shape","line":9,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":82},{"type":"Vector","x":8,"y":8},{"type":"Vector","x":10,"y":10},{"type":"Vector","x":10,"y":80}]},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":15,"y":10,"text":"LEVEL","line":11},{"action":"T","x":69,"y":10,"text":"#1","line":12},{"action":"Clip","line":13,"path":[[{"type":"Vector","x":8,"y":0},{"type":"Vector","x":258,"y":0},{"type":"Vector","x":258,"y":600},{"type":"Vector","x":8,"y":600}]]},{"action":"Fill","line":14,"color":"rgb(255,221,221)"},{"action":"Clip","line":15,"path":[[{"type":"Vector","x":8,"y":82},{"type":"Vector","x":267,"y":82},{"type":"Vector","x":267,"y":156},{"type":"Vector","x":8,"y":156}]]},{"action":"Fill","line":16,"color":"rgb(204,255,204)"},{"action":"Shape","line":17,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":82},{"type":"Vector","x":267,"y":82},{"type":"Vector","x":265,"y":84},{"type":"Vector","x":10,"y":84}]},{"action":"Shape","line":18,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":82},{"type":"Vector","x":267,"y":156},{"type":"Vector","x":265,"y":154},{"type":"Vector","x":265,"y":84}]},{"action":"Shape","line":19,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":156},{"type":"Vector","x":8,"y":156},{"type":"Vector","x":10,"y":154},{"type":"Vector","x":265,"y":154}]},{"action":"Shape","line":20,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":156},{"type":"Vector","x":8,"y":82},{"type":"Vector","x":10,"y":84},{"type":"Vector","x":10,"y":154}]},{"action":"Text","line":21,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":15,"y":84,"text":"LEVEL","line":22},{"action":"T","x":69,"y":84,"text":"#1","line":23}],"/tests/reftests/zindex/z-index6.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":28,"y":113},{"type":"Vector","x":287,"y":113},{"type":"Vector","x":287,"y":187},{"type":"Vector","x":28,"y":187}]]},{"action":"Fill","line":5,"color":"rgb(255,221,221)"},{"action":"Shape","line":6,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":28,"y":113},{"type":"Vector","x":287,"y":113},{"type":"Vector","x":285,"y":115},{"type":"Vector","x":30,"y":115}]},{"action":"Shape","line":7,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":287,"y":113},{"type":"Vector","x":287,"y":187},{"type":"Vector","x":285,"y":185},{"type":"Vector","x":285,"y":115}]},{"action":"Shape","line":8,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":287,"y":187},{"type":"Vector","x":28,"y":187},{"type":"Vector","x":30,"y":185},{"type":"Vector","x":285,"y":185}]},{"action":"Shape","line":9,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":28,"y":187},{"type":"Vector","x":28,"y":113},{"type":"Vector","x":30,"y":115},{"type":"Vector","x":30,"y":185}]},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":35,"y":115,"text":"z","line":11},{"action":"T","x":43,"y":115,"text":"-","line":12},{"action":"T","x":48,"y":115,"text":"index:0","line":13},{"action":"Clip","line":14,"path":[[{"type":"Vector","x":8,"y":82},{"type":"Vector","x":267,"y":82},{"type":"Vector","x":267,"y":156},{"type":"Vector","x":8,"y":156}]]},{"action":"Fill","line":15,"color":"rgb(204,255,204)"},{"action":"Shape","line":16,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":82},{"type":"Vector","x":267,"y":82},{"type":"Vector","x":265,"y":84},{"type":"Vector","x":10,"y":84}]},{"action":"Shape","line":17,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":82},{"type":"Vector","x":267,"y":156},{"type":"Vector","x":265,"y":154},{"type":"Vector","x":265,"y":84}]},{"action":"Shape","line":18,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":156},{"type":"Vector","x":8,"y":156},{"type":"Vector","x":10,"y":154},{"type":"Vector","x":265,"y":154}]},{"action":"Shape","line":19,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":156},{"type":"Vector","x":8,"y":82},{"type":"Vector","x":10,"y":84},{"type":"Vector","x":10,"y":154}]},{"action":"Text","line":20,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":15,"y":84,"text":"default","line":21},{"action":"T","x":68,"y":84,"text":"z","line":22},{"action":"T","x":76,"y":84,"text":"-","line":23},{"action":"T","x":81,"y":84,"text":"index","line":24},{"action":"Clip","line":25,"path":[[{"type":"Vector","x":8,"y":156},{"type":"Vector","x":267,"y":156},{"type":"Vector","x":267,"y":230},{"type":"Vector","x":8,"y":230}]]},{"action":"Fill","line":26,"color":"rgb(204,255,204)"},{"action":"Shape","line":27,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":156},{"type":"Vector","x":267,"y":156},{"type":"Vector","x":265,"y":158},{"type":"Vector","x":10,"y":158}]},{"action":"Shape","line":28,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":156},{"type":"Vector","x":267,"y":230},{"type":"Vector","x":265,"y":228},{"type":"Vector","x":265,"y":158}]},{"action":"Shape","line":29,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":267,"y":230},{"type":"Vector","x":8,"y":230},{"type":"Vector","x":10,"y":228},{"type":"Vector","x":265,"y":228}]},{"action":"Shape","line":30,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":8,"y":230},{"type":"Vector","x":8,"y":156},{"type":"Vector","x":10,"y":158},{"type":"Vector","x":10,"y":228}]},{"action":"Text","line":31,"font":"rgb(0,0,0) normal normal 400 16px Arial"},{"action":"T","x":15,"y":158,"text":"z","line":32},{"action":"T","x":23,"y":158,"text":"-","line":33},{"action":"T","x":28,"y":158,"text":"index:1","line":34}],"/tests/reftests/zindex/z-index7.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":58,"y":250},{"type":"Vector","x":742,"y":250},{"type":"Vector","x":742,"y":322},{"type":"Vector","x":58,"y":322}]]},{"action":"Fill","line":5,"color":"rgb(255,255,204)"},{"action":"Shape","line":6,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":58,"y":250},{"type":"Vector","x":742,"y":250},{"type":"Vector","x":741,"y":251},{"type":"Vector","x":59,"y":251}]},{"action":"Shape","line":7,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":742,"y":250},{"type":"Vector","x":742,"y":322},{"type":"Vector","x":741,"y":321},{"type":"Vector","x":741,"y":251}]},{"action":"Shape","line":8,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":742,"y":322},{"type":"Vector","x":58,"y":322},{"type":"Vector","x":59,"y":321},{"type":"Vector","x":741,"y":321}]},{"action":"Shape","line":9,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":58,"y":322},{"type":"Vector","x":58,"y":250},{"type":"Vector","x":59,"y":251},{"type":"Vector","x":59,"y":321}]},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":363,"y":278,"text":"no","line":11},{"action":"T","x":380,"y":278,"text":"positioning","line":12},{"action":"Text","line":13,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":380,"y":264,"text":"DIV","line":14},{"action":"T","x":403,"y":264,"text":"#5","line":15},{"action":"Opacity","line":16,"opacity":0.7},{"action":"Clip","line":17,"path":[[{"type":"Vector","x":10,"y":10},{"type":"Vector","x":162,"y":10},{"type":"Vector","x":162,"y":362},{"type":"Vector","x":10,"y":362}]]},{"action":"Fill","line":18,"color":"rgb(255,221,221)"},{"action":"Shape","line":19,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":10,"y":10},{"type":"Vector","x":162,"y":10},{"type":"Vector","x":161,"y":11},{"type":"Vector","x":11,"y":11}]},{"action":"Shape","line":20,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":162,"y":10},{"type":"Vector","x":162,"y":362},{"type":"Vector","x":161,"y":361},{"type":"Vector","x":161,"y":11}]},{"action":"Shape","line":21,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":162,"y":362},{"type":"Vector","x":10,"y":362},{"type":"Vector","x":11,"y":361},{"type":"Vector","x":161,"y":361}]},{"action":"Shape","line":22,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":10,"y":362},{"type":"Vector","x":10,"y":10},{"type":"Vector","x":11,"y":11},{"type":"Vector","x":11,"y":361}]},{"action":"Text","line":23,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":38,"y":38,"text":"position:","line":24},{"action":"T","x":86,"y":38,"text":"absolute;","line":25},{"action":"Text","line":26,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":66,"y":25,"text":"DIV","line":27},{"action":"T","x":89,"y":25,"text":"#1","line":28},{"action":"Clip","line":29,"path":[[{"type":"Vector","x":58,"y":76},{"type":"Vector","x":742,"y":76},{"type":"Vector","x":742,"y":178},{"type":"Vector","x":58,"y":178}]]},{"action":"Fill","line":30,"color":"rgb(204,255,204)"},{"action":"Shape","line":31,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":58,"y":76},{"type":"Vector","x":742,"y":76},{"type":"Vector","x":741,"y":77},{"type":"Vector","x":59,"y":77}]},{"action":"Shape","line":32,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":742,"y":76},{"type":"Vector","x":742,"y":178},{"type":"Vector","x":741,"y":177},{"type":"Vector","x":741,"y":77}]},{"action":"Shape","line":33,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":742,"y":178},{"type":"Vector","x":58,"y":178},{"type":"Vector","x":59,"y":177},{"type":"Vector","x":741,"y":177}]},{"action":"Shape","line":34,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":58,"y":178},{"type":"Vector","x":58,"y":76},{"type":"Vector","x":59,"y":77},{"type":"Vector","x":59,"y":177}]},{"action":"Text","line":35,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":355,"y":104,"text":"position:","line":36},{"action":"T","x":403,"y":104,"text":"relative;","line":37},{"action":"Text","line":38,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":380,"y":90,"text":"DIV","line":39},{"action":"T","x":403,"y":90,"text":"#2","line":40},{"action":"Clip","line":41,"path":[[{"type":"Vector","x":78,"y":163},{"type":"Vector","x":762,"y":163},{"type":"Vector","x":762,"y":265},{"type":"Vector","x":78,"y":265}]]},{"action":"Fill","line":42,"color":"rgb(204,255,204)"},{"action":"Shape","line":43,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":78,"y":163},{"type":"Vector","x":762,"y":163},{"type":"Vector","x":761,"y":164},{"type":"Vector","x":79,"y":164}]},{"action":"Shape","line":44,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":762,"y":163},{"type":"Vector","x":762,"y":265},{"type":"Vector","x":761,"y":264},{"type":"Vector","x":761,"y":164}]},{"action":"Shape","line":45,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":762,"y":265},{"type":"Vector","x":78,"y":265},{"type":"Vector","x":79,"y":264},{"type":"Vector","x":761,"y":264}]},{"action":"Shape","line":46,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":78,"y":265},{"type":"Vector","x":78,"y":163},{"type":"Vector","x":79,"y":164},{"type":"Vector","x":79,"y":264}]},{"action":"Text","line":47,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":375,"y":191,"text":"position:","line":48},{"action":"T","x":423,"y":191,"text":"relative;","line":49},{"action":"Text","line":50,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":400,"y":177,"text":"DIV","line":51},{"action":"T","x":423,"y":177,"text":"#3","line":52},{"action":"Clip","line":53,"path":[[{"type":"Vector","x":638,"y":10},{"type":"Vector","x":790,"y":10},{"type":"Vector","x":790,"y":362},{"type":"Vector","x":638,"y":362}]]},{"action":"Fill","line":54,"color":"rgb(255,221,221)"},{"action":"Shape","line":55,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":638,"y":10},{"type":"Vector","x":790,"y":10},{"type":"Vector","x":789,"y":11},{"type":"Vector","x":639,"y":11}]},{"action":"Shape","line":56,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":790,"y":10},{"type":"Vector","x":790,"y":362},{"type":"Vector","x":789,"y":361},{"type":"Vector","x":789,"y":11}]},{"action":"Shape","line":57,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":790,"y":362},{"type":"Vector","x":638,"y":362},{"type":"Vector","x":639,"y":361},{"type":"Vector","x":789,"y":361}]},{"action":"Shape","line":58,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":638,"y":362},{"type":"Vector","x":638,"y":10},{"type":"Vector","x":639,"y":11},{"type":"Vector","x":639,"y":361}]},{"action":"Text","line":59,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":666,"y":38,"text":"position:","line":60},{"action":"T","x":714,"y":38,"text":"absolute;","line":61},{"action":"Text","line":62,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":694,"y":25,"text":"DIV","line":63},{"action":"T","x":717,"y":25,"text":"#4","line":64}],"/tests/reftests/zindex/z-index8.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Clip","line":4,"path":[[{"type":"Vector","x":18,"y":64},{"type":"Vector","x":782,"y":64},{"type":"Vector","x":782,"y":166},{"type":"Vector","x":18,"y":166}]]},{"action":"Fill","line":5,"color":"rgb(255,255,204)"},{"action":"Shape","line":6,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":18,"y":64},{"type":"Vector","x":782,"y":64},{"type":"Vector","x":781,"y":65},{"type":"Vector","x":19,"y":65}]},{"action":"Shape","line":7,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":782,"y":64},{"type":"Vector","x":782,"y":166},{"type":"Vector","x":781,"y":165},{"type":"Vector","x":781,"y":65}]},{"action":"Shape","line":8,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":782,"y":166},{"type":"Vector","x":18,"y":166},{"type":"Vector","x":19,"y":165},{"type":"Vector","x":781,"y":165}]},{"action":"Shape","line":9,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":18,"y":166},{"type":"Vector","x":18,"y":64},{"type":"Vector","x":19,"y":65},{"type":"Vector","x":19,"y":165}]},{"action":"Text","line":10,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":190,"y":93,"text":"no","line":11},{"action":"T","x":207,"y":93,"text":"positioning","line":12},{"action":"Text","line":13,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":190,"y":79,"text":"DIV","line":14},{"action":"T","x":213,"y":79,"text":"#4","line":15},{"action":"Opacity","line":16,"opacity":0.7},{"action":"Clip","line":17,"path":[[{"type":"Vector","x":508,"y":10},{"type":"Vector","x":660,"y":10},{"type":"Vector","x":660,"y":212},{"type":"Vector","x":508,"y":212}]]},{"action":"Fill","line":18,"color":"rgb(255,221,221)"},{"action":"Shape","line":19,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":508,"y":10},{"type":"Vector","x":660,"y":10},{"type":"Vector","x":659,"y":11},{"type":"Vector","x":509,"y":11}]},{"action":"Shape","line":20,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":660,"y":10},{"type":"Vector","x":660,"y":212},{"type":"Vector","x":659,"y":211},{"type":"Vector","x":659,"y":11}]},{"action":"Shape","line":21,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":660,"y":212},{"type":"Vector","x":508,"y":212},{"type":"Vector","x":509,"y":211},{"type":"Vector","x":659,"y":211}]},{"action":"Shape","line":22,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":508,"y":212},{"type":"Vector","x":508,"y":10},{"type":"Vector","x":509,"y":11},{"type":"Vector","x":509,"y":211}]},{"action":"Text","line":23,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":536,"y":38,"text":"position:","line":24},{"action":"T","x":584,"y":38,"text":"absolute;","line":25},{"action":"Text","line":26,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":564,"y":25,"text":"DIV","line":27},{"action":"T","x":587,"y":25,"text":"#1","line":28},{"action":"Clip","line":29,"path":[[{"type":"Vector","x":28,"y":46},{"type":"Vector","x":180,"y":46},{"type":"Vector","x":180,"y":248},{"type":"Vector","x":28,"y":248}]]},{"action":"Fill","line":30,"color":"rgb(204,255,204)"},{"action":"Shape","line":31,"color":"rgb(0,153,0)","path":[{"type":"Vector","x":28,"y":46},{"type":"Vector","x":180,"y":46},{"type":"Vector","x":179,"y":47},{"type":"Vector","x":29,"y":47}]},{"action":"Shape","line":32,"color":"rgb(0,153,0)","path":[{"type":"Vector","x":180,"y":46},{"type":"Vector","x":180,"y":248},{"type":"Vector","x":179,"y":247},{"type":"Vector","x":179,"y":47}]},{"action":"Shape","line":33,"color":"rgb(0,153,0)","path":[{"type":"Vector","x":180,"y":248},{"type":"Vector","x":28,"y":248},{"type":"Vector","x":29,"y":247},{"type":"Vector","x":179,"y":247}]},{"action":"Shape","line":34,"color":"rgb(0,153,0)","path":[{"type":"Vector","x":28,"y":248},{"type":"Vector","x":28,"y":46},{"type":"Vector","x":29,"y":47},{"type":"Vector","x":29,"y":247}]},{"action":"Text","line":35,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":80,"y":74,"text":"float:","line":36},{"action":"T","x":109,"y":74,"text":"left;","line":37},{"action":"Text","line":38,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":84,"y":60,"text":"DIV","line":39},{"action":"T","x":107,"y":60,"text":"#2","line":40},{"action":"Clip","line":41,"path":[[{"type":"Vector","x":620,"y":46},{"type":"Vector","x":772,"y":46},{"type":"Vector","x":772,"y":248},{"type":"Vector","x":620,"y":248}]]},{"action":"Fill","line":42,"color":"rgb(204,255,204)"},{"action":"Shape","line":43,"color":"rgb(0,153,0)","path":[{"type":"Vector","x":620,"y":46},{"type":"Vector","x":772,"y":46},{"type":"Vector","x":771,"y":47},{"type":"Vector","x":621,"y":47}]},{"action":"Shape","line":44,"color":"rgb(0,153,0)","path":[{"type":"Vector","x":772,"y":46},{"type":"Vector","x":772,"y":248},{"type":"Vector","x":771,"y":247},{"type":"Vector","x":771,"y":47}]},{"action":"Shape","line":45,"color":"rgb(0,153,0)","path":[{"type":"Vector","x":772,"y":248},{"type":"Vector","x":620,"y":248},{"type":"Vector","x":621,"y":247},{"type":"Vector","x":771,"y":247}]},{"action":"Shape","line":46,"color":"rgb(0,153,0)","path":[{"type":"Vector","x":620,"y":248},{"type":"Vector","x":620,"y":46},{"type":"Vector","x":621,"y":47},{"type":"Vector","x":621,"y":247}]},{"action":"Text","line":47,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":668,"y":74,"text":"float:","line":48},{"action":"T","x":697,"y":74,"text":"right;","line":49},{"action":"Text","line":50,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":676,"y":60,"text":"DIV","line":51},{"action":"T","x":699,"y":60,"text":"#3","line":52},{"action":"Clip","line":53,"path":[[{"type":"Vector","x":100,"y":130},{"type":"Vector","x":252,"y":130},{"type":"Vector","x":252,"y":232},{"type":"Vector","x":100,"y":232}]]},{"action":"Fill","line":54,"color":"rgb(255,221,221)"},{"action":"Shape","line":55,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":100,"y":130},{"type":"Vector","x":252,"y":130},{"type":"Vector","x":251,"y":131},{"type":"Vector","x":101,"y":131}]},{"action":"Shape","line":56,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":252,"y":130},{"type":"Vector","x":252,"y":232},{"type":"Vector","x":251,"y":231},{"type":"Vector","x":251,"y":131}]},{"action":"Shape","line":57,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":252,"y":232},{"type":"Vector","x":100,"y":232},{"type":"Vector","x":101,"y":231},{"type":"Vector","x":251,"y":231}]},{"action":"Shape","line":58,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":100,"y":232},{"type":"Vector","x":100,"y":130},{"type":"Vector","x":101,"y":131},{"type":"Vector","x":101,"y":231}]},{"action":"Text","line":59,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":128,"y":158,"text":"position:","line":60},{"action":"T","x":176,"y":158,"text":"absolute;","line":61},{"action":"Text","line":62,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":156,"y":145,"text":"DIV","line":63},{"action":"T","x":179,"y":145,"text":"#5","line":64}],"/tests/reftests/zindex/z-index9.html":[{"action":"Window","line":1,"width":800,"height":600},{"action":"Rectangle","line":2,"x":0,"y":0,"width":800,"height":600,"color":"rgba(0,0,0,0)"},{"action":"Opacity","line":3,"opacity":1},{"action":"Opacity","line":4,"opacity":0.7},{"action":"Clip","line":5,"path":[[{"type":"Vector","x":58,"y":250},{"type":"Vector","x":742,"y":250},{"type":"Vector","x":742,"y":322},{"type":"Vector","x":58,"y":322}]]},{"action":"Fill","line":6,"color":"rgb(255,255,204)"},{"action":"Shape","line":7,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":58,"y":250},{"type":"Vector","x":742,"y":250},{"type":"Vector","x":741,"y":251},{"type":"Vector","x":59,"y":251}]},{"action":"Shape","line":8,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":742,"y":250},{"type":"Vector","x":742,"y":322},{"type":"Vector","x":741,"y":321},{"type":"Vector","x":741,"y":251}]},{"action":"Shape","line":9,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":742,"y":322},{"type":"Vector","x":58,"y":322},{"type":"Vector","x":59,"y":321},{"type":"Vector","x":741,"y":321}]},{"action":"Shape","line":10,"color":"rgb(153,153,102)","path":[{"type":"Vector","x":58,"y":322},{"type":"Vector","x":58,"y":250},{"type":"Vector","x":59,"y":251},{"type":"Vector","x":59,"y":321}]},{"action":"Text","line":11,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":361,"y":278,"text":"no","line":12},{"action":"T","x":378,"y":278,"text":"positioning","line":13},{"action":"Text","line":14,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":372,"y":292,"text":"z","line":15},{"action":"T","x":378,"y":292,"text":"-","line":16},{"action":"T","x":382,"y":292,"text":"index:","line":17},{"action":"T","x":418,"y":292,"text":"8;","line":18},{"action":"Text","line":19,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":380,"y":264,"text":"DIV","line":20},{"action":"T","x":403,"y":264,"text":"#5","line":21},{"action":"Clip","line":22,"path":[[{"type":"Vector","x":638,"y":10},{"type":"Vector","x":790,"y":10},{"type":"Vector","x":790,"y":362},{"type":"Vector","x":638,"y":362}]]},{"action":"Fill","line":23,"color":"rgb(255,221,221)"},{"action":"Shape","line":24,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":638,"y":10},{"type":"Vector","x":790,"y":10},{"type":"Vector","x":789,"y":11},{"type":"Vector","x":639,"y":11}]},{"action":"Shape","line":25,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":790,"y":10},{"type":"Vector","x":790,"y":362},{"type":"Vector","x":789,"y":361},{"type":"Vector","x":789,"y":11}]},{"action":"Shape","line":26,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":790,"y":362},{"type":"Vector","x":638,"y":362},{"type":"Vector","x":639,"y":361},{"type":"Vector","x":789,"y":361}]},{"action":"Shape","line":27,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":638,"y":362},{"type":"Vector","x":638,"y":10},{"type":"Vector","x":639,"y":11},{"type":"Vector","x":639,"y":361}]},{"action":"Text","line":28,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":664,"y":38,"text":"position:","line":29},{"action":"T","x":712,"y":38,"text":"absolute;","line":30},{"action":"Text","line":31,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":686,"y":52,"text":"z","line":32},{"action":"T","x":692,"y":52,"text":"-","line":33},{"action":"T","x":696,"y":52,"text":"index:","line":34},{"action":"T","x":732,"y":52,"text":"1;","line":35},{"action":"Text","line":36,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":694,"y":25,"text":"DIV","line":37},{"action":"T","x":717,"y":25,"text":"#4","line":38},{"action":"Clip","line":39,"path":[[{"type":"Vector","x":78,"y":163},{"type":"Vector","x":762,"y":163},{"type":"Vector","x":762,"y":265},{"type":"Vector","x":78,"y":265}]]},{"action":"Fill","line":40,"color":"rgb(204,255,204)"},{"action":"Shape","line":41,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":78,"y":163},{"type":"Vector","x":762,"y":163},{"type":"Vector","x":761,"y":164},{"type":"Vector","x":79,"y":164}]},{"action":"Shape","line":42,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":762,"y":163},{"type":"Vector","x":762,"y":265},{"type":"Vector","x":761,"y":264},{"type":"Vector","x":761,"y":164}]},{"action":"Shape","line":43,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":762,"y":265},{"type":"Vector","x":78,"y":265},{"type":"Vector","x":79,"y":264},{"type":"Vector","x":761,"y":264}]},{"action":"Shape","line":44,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":78,"y":265},{"type":"Vector","x":78,"y":163},{"type":"Vector","x":79,"y":164},{"type":"Vector","x":79,"y":264}]},{"action":"Text","line":45,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":373,"y":191,"text":"position:","line":46},{"action":"T","x":421,"y":191,"text":"relative;","line":47},{"action":"Text","line":48,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":392,"y":205,"text":"z","line":49},{"action":"T","x":398,"y":205,"text":"-","line":50},{"action":"T","x":402,"y":205,"text":"index:","line":51},{"action":"T","x":438,"y":205,"text":"2;","line":52},{"action":"Text","line":53,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":400,"y":177,"text":"DIV","line":54},{"action":"T","x":423,"y":177,"text":"#3","line":55},{"action":"Clip","line":56,"path":[[{"type":"Vector","x":58,"y":76},{"type":"Vector","x":742,"y":76},{"type":"Vector","x":742,"y":178},{"type":"Vector","x":58,"y":178}]]},{"action":"Fill","line":57,"color":"rgb(204,255,204)"},{"action":"Shape","line":58,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":58,"y":76},{"type":"Vector","x":742,"y":76},{"type":"Vector","x":741,"y":77},{"type":"Vector","x":59,"y":77}]},{"action":"Shape","line":59,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":742,"y":76},{"type":"Vector","x":742,"y":178},{"type":"Vector","x":741,"y":177},{"type":"Vector","x":741,"y":77}]},{"action":"Shape","line":60,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":742,"y":178},{"type":"Vector","x":58,"y":178},{"type":"Vector","x":59,"y":177},{"type":"Vector","x":741,"y":177}]},{"action":"Shape","line":61,"color":"rgb(102,153,102)","path":[{"type":"Vector","x":58,"y":178},{"type":"Vector","x":58,"y":76},{"type":"Vector","x":59,"y":77},{"type":"Vector","x":59,"y":177}]},{"action":"Text","line":62,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":353,"y":104,"text":"position:","line":63},{"action":"T","x":401,"y":104,"text":"relative;","line":64},{"action":"Text","line":65,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":372,"y":118,"text":"z","line":66},{"action":"T","x":378,"y":118,"text":"-","line":67},{"action":"T","x":382,"y":118,"text":"index:","line":68},{"action":"T","x":418,"y":118,"text":"3;","line":69},{"action":"Text","line":70,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":380,"y":90,"text":"DIV","line":71},{"action":"T","x":403,"y":90,"text":"#2","line":72},{"action":"Clip","line":73,"path":[[{"type":"Vector","x":10,"y":10},{"type":"Vector","x":162,"y":10},{"type":"Vector","x":162,"y":362},{"type":"Vector","x":10,"y":362}]]},{"action":"Fill","line":74,"color":"rgb(255,221,221)"},{"action":"Shape","line":75,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":10,"y":10},{"type":"Vector","x":162,"y":10},{"type":"Vector","x":161,"y":11},{"type":"Vector","x":11,"y":11}]},{"action":"Shape","line":76,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":162,"y":10},{"type":"Vector","x":162,"y":362},{"type":"Vector","x":161,"y":361},{"type":"Vector","x":161,"y":11}]},{"action":"Shape","line":77,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":162,"y":362},{"type":"Vector","x":10,"y":362},{"type":"Vector","x":11,"y":361},{"type":"Vector","x":161,"y":361}]},{"action":"Shape","line":78,"color":"rgb(153,0,0)","path":[{"type":"Vector","x":10,"y":362},{"type":"Vector","x":10,"y":10},{"type":"Vector","x":11,"y":11},{"type":"Vector","x":11,"y":361}]},{"action":"Text","line":79,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":36,"y":38,"text":"position:","line":80},{"action":"T","x":84,"y":38,"text":"absolute;","line":81},{"action":"Text","line":82,"font":"rgb(0,0,0) normal normal 400 12px Arial"},{"action":"T","x":58,"y":52,"text":"z","line":83},{"action":"T","x":64,"y":52,"text":"-","line":84},{"action":"T","x":68,"y":52,"text":"index:","line":85},{"action":"T","x":104,"y":52,"text":"5;","line":86},{"action":"Text","line":87,"font":"rgb(0,0,0) normal normal 700 12px Arial"},{"action":"T","x":66,"y":25,"text":"DIV","line":88},{"action":"T","x":89,"y":25,"text":"#1","line":89}]};

/***/ })
/******/ ]);
});