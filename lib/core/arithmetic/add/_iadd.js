'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._iadd = _iadd;

var _ = require('.');

/**
 * Adds a big endian array to another ___in-place___.
 * Wraps on overflow.
 *
 * @param {Number} r base (radix)
 * @param {Array} a first operand (modified in-place)
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 * @param {Number} bj b right
 */
function _iadd(r, a, ai, aj, b, bi, bj) {

  var m = aj - ai;

  return (0, _._IADD)(r, a, ai, aj, b, Math.max(bi, bj - m), bj);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvYWRkL19pYWRkLmpzIl0sIm5hbWVzIjpbIl9pYWRkIiwiciIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJtIiwiTWF0aCIsIm1heCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFjZ0JBLEssR0FBQUEsSzs7QUFkaEI7O0FBRUE7Ozs7Ozs7Ozs7OztBQVlPLFNBQVNBLEtBQVQsQ0FBaUJDLENBQWpCLEVBQXFCQyxDQUFyQixFQUF5QkMsRUFBekIsRUFBOEJDLEVBQTlCLEVBQW1DQyxDQUFuQyxFQUF1Q0MsRUFBdkMsRUFBNENDLEVBQTVDLEVBQWlEOztBQUV2RCxNQUFNQyxJQUFJSixLQUFLRCxFQUFmOztBQUVBLFNBQU8sYUFBT0YsQ0FBUCxFQUFXQyxDQUFYLEVBQWVDLEVBQWYsRUFBb0JDLEVBQXBCLEVBQXlCQyxDQUF6QixFQUE2QkksS0FBS0MsR0FBTCxDQUFVSixFQUFWLEVBQWVDLEtBQUtDLENBQXBCLENBQTdCLEVBQXVERCxFQUF2RCxDQUFQO0FBRUEiLCJmaWxlIjoiX2lhZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfSUFERCB9IGZyb20gJy4nIDtcblxuLyoqXG4gKiBBZGRzIGEgYmlnIGVuZGlhbiBhcnJheSB0byBhbm90aGVyIF9fX2luLXBsYWNlX19fLlxuICogV3JhcHMgb24gb3ZlcmZsb3cuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgYmFzZSAocmFkaXgpXG4gKiBAcGFyYW0ge0FycmF5fSBhIGZpcnN0IG9wZXJhbmQgKG1vZGlmaWVkIGluLXBsYWNlKVxuICogQHBhcmFtIHtOdW1iZXJ9IGFpIGEgbGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIGEgcmlnaHRcbiAqIEBwYXJhbSB7QXJyYXl9IGIgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaSBiIGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaiBiIHJpZ2h0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfaWFkZCAoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkge1xuXG5cdGNvbnN0IG0gPSBhaiAtIGFpIDtcblxuXHRyZXR1cm4gX0lBREQoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBNYXRoLm1heCggYmkgLCBiaiAtIG0gKSAsIGJqICkgO1xuXG59XG4iXX0=