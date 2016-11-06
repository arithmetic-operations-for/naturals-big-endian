'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _imul_limb = require('./_imul_limb');

Object.keys(_imul_limb).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _imul_limb[key];
    }
  });
});

var _karatsuba = require('./_karatsuba');

Object.keys(_karatsuba).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _karatsuba[key];
    }
  });
});

var _mul_limb = require('./_mul_limb');

Object.keys(_mul_limb).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mul_limb[key];
    }
  });
});

var _schoolbook_mul = require('./_schoolbook_mul');

Object.keys(_schoolbook_mul).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _schoolbook_mul[key];
    }
  });
});

var _toom = require('./_toom22');

Object.keys(_toom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toom[key];
    }
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL211bC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vX2ltdWxfbGltYicgO1xuZXhwb3J0ICogZnJvbSAnLi9fa2FyYXRzdWJhJyA7XG5leHBvcnQgKiBmcm9tICcuL19tdWxfbGltYicgO1xuZXhwb3J0ICogZnJvbSAnLi9fc2Nob29sYm9va19tdWwnIDtcbmV4cG9ydCAqIGZyb20gJy4vX3Rvb20yMicgO1xuIl19