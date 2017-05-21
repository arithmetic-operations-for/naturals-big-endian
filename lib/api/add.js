'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;

var _arithmetic = require('../core/arithmetic');

/**
 * Adds two big endian arrays and puts result in a destination array.
 * Wraps on overflow. Works with any combination of array sizes.
 *
 * @param {Number} r base (radix)
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 * @param {Number} bj b right
 * @param {Array} c result, must be 0 initialized
 * @param {Number} ci c left
 * @param {Number} cj c right
 *
 */

function add(r, a, ai, aj, b, bi, bj, c, ci, cj) {

  ci = Math.max(0, ci);
  var k = cj - ci;

  ai = Math.max(0, ai, aj - k);
  bi = Math.max(0, bi, bj - k);
  var m = aj - ai;
  var n = bj - bi;

  return m < n ? (0, _arithmetic._ADD)(r, b, bi, bj, a, ai, aj, c, ci, cj) : (0, _arithmetic._ADD)(r, a, ai, aj, b, bi, bj, c, ci, cj);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvYWRkLmpzIl0sIm5hbWVzIjpbImFkZCIsInIiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIiwiYyIsImNpIiwiY2oiLCJNYXRoIiwibWF4IiwiayIsIm0iLCJuIl0sIm1hcHBpbmdzIjoiOzs7OztRQW1CZ0JBLEcsR0FBQUEsRzs7QUFuQmhCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCTyxTQUFTQSxHQUFULENBQWVDLENBQWYsRUFBbUJDLENBQW5CLEVBQXVCQyxFQUF2QixFQUE0QkMsRUFBNUIsRUFBaUNDLENBQWpDLEVBQXFDQyxFQUFyQyxFQUEwQ0MsRUFBMUMsRUFBK0NDLENBQS9DLEVBQW1EQyxFQUFuRCxFQUF3REMsRUFBeEQsRUFBNkQ7O0FBRW5FRCxPQUFLRSxLQUFLQyxHQUFMLENBQVUsQ0FBVixFQUFjSCxFQUFkLENBQUw7QUFDQSxNQUFNSSxJQUFJSCxLQUFLRCxFQUFmOztBQUVBTixPQUFLUSxLQUFLQyxHQUFMLENBQVUsQ0FBVixFQUFjVCxFQUFkLEVBQW1CQyxLQUFLUyxDQUF4QixDQUFMO0FBQ0FQLE9BQUtLLEtBQUtDLEdBQUwsQ0FBVSxDQUFWLEVBQWNOLEVBQWQsRUFBbUJDLEtBQUtNLENBQXhCLENBQUw7QUFDQSxNQUFNQyxJQUFJVixLQUFLRCxFQUFmO0FBQ0EsTUFBTVksSUFBSVIsS0FBS0QsRUFBZjs7QUFFQSxTQUFPUSxJQUFJQyxDQUFKLEdBQ04sc0JBQU1kLENBQU4sRUFBVUksQ0FBVixFQUFjQyxFQUFkLEVBQW1CQyxFQUFuQixFQUF3QkwsQ0FBeEIsRUFBNEJDLEVBQTVCLEVBQWlDQyxFQUFqQyxFQUFzQ0ksQ0FBdEMsRUFBMENDLEVBQTFDLEVBQStDQyxFQUEvQyxDQURNLEdBRU4sc0JBQU1ULENBQU4sRUFBVUMsQ0FBVixFQUFjQyxFQUFkLEVBQW1CQyxFQUFuQixFQUF3QkMsQ0FBeEIsRUFBNEJDLEVBQTVCLEVBQWlDQyxFQUFqQyxFQUFzQ0MsQ0FBdEMsRUFBMENDLEVBQTFDLEVBQStDQyxFQUEvQyxDQUZEO0FBSUEiLCJmaWxlIjoiYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX0FERCB9IGZyb20gJy4uL2NvcmUvYXJpdGhtZXRpYycgO1xuXG4vKipcbiAqIEFkZHMgdHdvIGJpZyBlbmRpYW4gYXJyYXlzIGFuZCBwdXRzIHJlc3VsdCBpbiBhIGRlc3RpbmF0aW9uIGFycmF5LlxuICogV3JhcHMgb24gb3ZlcmZsb3cuIFdvcmtzIHdpdGggYW55IGNvbWJpbmF0aW9uIG9mIGFycmF5IHNpemVzLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSByIGJhc2UgKHJhZGl4KVxuICogQHBhcmFtIHtBcnJheX0gYSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gYWkgYSBsZWZ0XG4gKiBAcGFyYW0ge051bWJlcn0gYWogYSByaWdodFxuICogQHBhcmFtIHtBcnJheX0gYiBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGJpIGIgbGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IGJqIGIgcmlnaHRcbiAqIEBwYXJhbSB7QXJyYXl9IGMgcmVzdWx0LCBtdXN0IGJlIDAgaW5pdGlhbGl6ZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBjaSBjIGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBjaiBjIHJpZ2h0XG4gKlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQgKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiAsIGMgLCBjaSAsIGNqICkge1xuXG5cdGNpID0gTWF0aC5tYXgoIDAgLCBjaSApO1xuXHRjb25zdCBrID0gY2ogLSBjaTtcblxuXHRhaSA9IE1hdGgubWF4KCAwICwgYWkgLCBhaiAtIGsgKSA7XG5cdGJpID0gTWF0aC5tYXgoIDAgLCBiaSAsIGJqIC0gayApIDtcblx0Y29uc3QgbSA9IGFqIC0gYWk7XG5cdGNvbnN0IG4gPSBiaiAtIGJpO1xuXG5cdHJldHVybiBtIDwgbiA/XG5cdFx0X0FERCggciAsIGIgLCBiaSAsIGJqICwgYSAsIGFpICwgYWogLCBjICwgY2kgLCBjaiApIDpcblx0XHRfQUREKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiAsIGMgLCBjaSAsIGNqICkgO1xuXG59XG4iXX0=