/*istanbul ignore next*/"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * @method serialize
 * @param {Object}
 * @param {String}
 */
var serialize = function serialize(obj, prefix) {
  var str = [];

  for (var prop in obj) {
    var key = prefix ? prefix + "[" + prop + "]" : prop,
        value = obj[prop];

    str.push( /*istanbul ignore next*/(typeof value === "undefined" ? "undefined" : _typeof(value)) == "object" ? serialize(value, key) : encodeURIComponent(key) + "=" + encodeURIComponent(value));
  }

  return str.join("&");
};

/*istanbul ignore next*/exports.default = serialize;