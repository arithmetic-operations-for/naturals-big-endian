'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iadd = iadd;

var _arithmetic = require('../core/arithmetic');

/**
 * Adds a big endian array to another ___in-place___.
 * Wraps on overflow. Works with any combination of array sizes.
 *
 * @param {Number} r base (radix)
 * @param {Array} a first operand (modified in-place)
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 * @param {Number} bj b right
 */
function iadd(r, a, ai, aj, b, bi, bj) {

  var m = aj - ai;

  return (0, _arithmetic._IADD)(r, a, ai, aj, b, Math.max(bi, bj - m), bj);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaWFkZC5qcyJdLCJuYW1lcyI6WyJpYWRkIiwiciIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJtIiwiTWF0aCIsIm1heCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFjZ0JBLEksR0FBQUEsSTs7QUFkaEI7O0FBRUE7Ozs7Ozs7Ozs7OztBQVlPLFNBQVNBLElBQVQsQ0FBZ0JDLENBQWhCLEVBQW9CQyxDQUFwQixFQUF3QkMsRUFBeEIsRUFBNkJDLEVBQTdCLEVBQWtDQyxDQUFsQyxFQUFzQ0MsRUFBdEMsRUFBMkNDLEVBQTNDLEVBQWdEOztBQUV0RCxNQUFNQyxJQUFJSixLQUFLRCxFQUFmOztBQUVBLFNBQU8sdUJBQU9GLENBQVAsRUFBV0MsQ0FBWCxFQUFlQyxFQUFmLEVBQW9CQyxFQUFwQixFQUF5QkMsQ0FBekIsRUFBNkJJLEtBQUtDLEdBQUwsQ0FBVUosRUFBVixFQUFlQyxLQUFLQyxDQUFwQixDQUE3QixFQUF1REQsRUFBdkQsQ0FBUDtBQUVBIiwiZmlsZSI6ImlhZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfSUFERCB9IGZyb20gJy4uL2NvcmUvYXJpdGhtZXRpYycgO1xuXG4vKipcbiAqIEFkZHMgYSBiaWcgZW5kaWFuIGFycmF5IHRvIGFub3RoZXIgX19faW4tcGxhY2VfX18uXG4gKiBXcmFwcyBvbiBvdmVyZmxvdy4gV29ya3Mgd2l0aCBhbnkgY29tYmluYXRpb24gb2YgYXJyYXkgc2l6ZXMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgYmFzZSAocmFkaXgpXG4gKiBAcGFyYW0ge0FycmF5fSBhIGZpcnN0IG9wZXJhbmQgKG1vZGlmaWVkIGluLXBsYWNlKVxuICogQHBhcmFtIHtOdW1iZXJ9IGFpIGEgbGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIGEgcmlnaHRcbiAqIEBwYXJhbSB7QXJyYXl9IGIgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaSBiIGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaiBiIHJpZ2h0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpYWRkICggciAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogKSB7XG5cblx0Y29uc3QgbSA9IGFqIC0gYWkgO1xuXG5cdHJldHVybiBfSUFERCggciAsIGEgLCBhaSAsIGFqICwgYiAsIE1hdGgubWF4KCBiaSAsIGJqIC0gbSApICwgYmogKSA7XG5cbn1cbiJdfQ==