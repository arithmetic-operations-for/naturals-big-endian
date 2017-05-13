"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._IADD = _IADD;
/**
 * Adds a big endian array to another.
 * Wraps on overflow. |A| >= |B|.
 *
 * @param {Number} r base (radix)
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 * @param {Number} bj b right
 */

function _IADD(r, a, ai, aj, b, bi, bj) {

  var C = 0;

  while (--bj >= bi) {
    var T = a[--aj] + b[bj] + C;
    a[aj] = T % r;
    C = T >= r;
  }

  while (--aj >= ai) {
    var _T = a[aj] + C;
    a[aj] = _T % r;
    C = _T >= r;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvYWRkL19JQURELmpzIl0sIm5hbWVzIjpbIl9JQUREIiwiciIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJDIiwiVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFhZ0JBLEssR0FBQUEsSztBQWJoQjs7Ozs7Ozs7Ozs7OztBQWFPLFNBQVNBLEtBQVQsQ0FBaUJDLENBQWpCLEVBQXFCQyxDQUFyQixFQUF5QkMsRUFBekIsRUFBOEJDLEVBQTlCLEVBQW1DQyxDQUFuQyxFQUF1Q0MsRUFBdkMsRUFBNENDLEVBQTVDLEVBQWlEOztBQUV2RCxNQUFJQyxJQUFJLENBQVI7O0FBRUEsU0FBUSxFQUFFRCxFQUFGLElBQVFELEVBQWhCLEVBQXFCO0FBQ3BCLFFBQU1HLElBQUlQLEVBQUUsRUFBRUUsRUFBSixJQUFVQyxFQUFFRSxFQUFGLENBQVYsR0FBa0JDLENBQTVCO0FBQ0FOLE1BQUVFLEVBQUYsSUFBUUssSUFBSVIsQ0FBWjtBQUNBTyxRQUFJQyxLQUFLUixDQUFUO0FBQ0E7O0FBRUQsU0FBUSxFQUFFRyxFQUFGLElBQVFELEVBQWhCLEVBQXFCO0FBQ3BCLFFBQU1NLEtBQUlQLEVBQUVFLEVBQUYsSUFBUUksQ0FBbEI7QUFDQU4sTUFBRUUsRUFBRixJQUFRSyxLQUFJUixDQUFaO0FBQ0FPLFFBQUlDLE1BQUtSLENBQVQ7QUFDQTtBQUVEIiwiZmlsZSI6Il9JQURELmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBZGRzIGEgYmlnIGVuZGlhbiBhcnJheSB0byBhbm90aGVyLlxuICogV3JhcHMgb24gb3ZlcmZsb3cuIHxBfCA+PSB8QnwuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgYmFzZSAocmFkaXgpXG4gKiBAcGFyYW0ge0FycmF5fSBhIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaSBhIGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaiBhIHJpZ2h0XG4gKiBAcGFyYW0ge0FycmF5fSBiIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gYmkgYiBsZWZ0XG4gKiBAcGFyYW0ge051bWJlcn0gYmogYiByaWdodFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBfSUFERCAoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkge1xuXG5cdGxldCBDID0gMCA7XG5cblx0d2hpbGUgKCAtLWJqID49IGJpICkge1xuXHRcdGNvbnN0IFQgPSBhWy0tYWpdICsgYltial0gKyBDIDtcblx0XHRhW2FqXSA9IFQgJSByIDtcblx0XHRDID0gVCA+PSByIDtcblx0fVxuXG5cdHdoaWxlICggLS1haiA+PSBhaSApIHtcblx0XHRjb25zdCBUID0gYVthal0gKyBDIDtcblx0XHRhW2FqXSA9IFQgJSByIDtcblx0XHRDID0gVCA+PSByIDtcblx0fVxuXG59XG4iXX0=