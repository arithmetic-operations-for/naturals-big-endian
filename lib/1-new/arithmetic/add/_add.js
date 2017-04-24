'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._add = _add;

var _ = require('.');

/**
 * Adds two big endian arrays and puts result in a destination array.
 * Wraps on overflow.
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

function _add(r, a, ai, aj, b, bi, bj, c, ci, cj) {

  ci = Math.max(0, ci);
  var k = cj - ci;

  ai = Math.max(0, ai, aj - k);
  bi = Math.max(0, bi, bj - k);
  var m = aj - ai;
  var n = bj - bi;

  return m < n ? (0, _._ADD)(r, b, bi, bj, a, ai, aj, c, ci, cj) : (0, _._ADD)(r, a, ai, aj, b, bi, bj, c, ci, cj);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2FkZC9fYWRkLmpzIl0sIm5hbWVzIjpbIl9hZGQiLCJyIiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsImMiLCJjaSIsImNqIiwiTWF0aCIsIm1heCIsImsiLCJtIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFtQmdCQSxJLEdBQUFBLEk7O0FBbkJoQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQk8sU0FBU0EsSUFBVCxDQUFnQkMsQ0FBaEIsRUFBb0JDLENBQXBCLEVBQXdCQyxFQUF4QixFQUE2QkMsRUFBN0IsRUFBa0NDLENBQWxDLEVBQXNDQyxFQUF0QyxFQUEyQ0MsRUFBM0MsRUFBZ0RDLENBQWhELEVBQW9EQyxFQUFwRCxFQUF5REMsRUFBekQsRUFBOEQ7O0FBRXBFRCxPQUFLRSxLQUFLQyxHQUFMLENBQVUsQ0FBVixFQUFjSCxFQUFkLENBQUw7QUFDQSxNQUFNSSxJQUFJSCxLQUFLRCxFQUFmOztBQUVBTixPQUFLUSxLQUFLQyxHQUFMLENBQVUsQ0FBVixFQUFjVCxFQUFkLEVBQW1CQyxLQUFLUyxDQUF4QixDQUFMO0FBQ0FQLE9BQUtLLEtBQUtDLEdBQUwsQ0FBVSxDQUFWLEVBQWNOLEVBQWQsRUFBbUJDLEtBQUtNLENBQXhCLENBQUw7QUFDQSxNQUFNQyxJQUFJVixLQUFLRCxFQUFmO0FBQ0EsTUFBTVksSUFBSVIsS0FBS0QsRUFBZjs7QUFFQSxTQUFPUSxJQUFJQyxDQUFKLEdBQ04sWUFBTWQsQ0FBTixFQUFVSSxDQUFWLEVBQWNDLEVBQWQsRUFBbUJDLEVBQW5CLEVBQXdCTCxDQUF4QixFQUE0QkMsRUFBNUIsRUFBaUNDLEVBQWpDLEVBQXNDSSxDQUF0QyxFQUEwQ0MsRUFBMUMsRUFBK0NDLEVBQS9DLENBRE0sR0FFTixZQUFNVCxDQUFOLEVBQVVDLENBQVYsRUFBY0MsRUFBZCxFQUFtQkMsRUFBbkIsRUFBd0JDLENBQXhCLEVBQTRCQyxFQUE1QixFQUFpQ0MsRUFBakMsRUFBc0NDLENBQXRDLEVBQTBDQyxFQUExQyxFQUErQ0MsRUFBL0MsQ0FGRDtBQUlBIiwiZmlsZSI6Il9hZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfQUREIH0gZnJvbSAnLicgO1xuXG4vKipcbiAqIEFkZHMgdHdvIGJpZyBlbmRpYW4gYXJyYXlzIGFuZCBwdXRzIHJlc3VsdCBpbiBhIGRlc3RpbmF0aW9uIGFycmF5LlxuICogV3JhcHMgb24gb3ZlcmZsb3cuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgYmFzZSAocmFkaXgpXG4gKiBAcGFyYW0ge0FycmF5fSBhIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaSBhIGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaiBhIHJpZ2h0XG4gKiBAcGFyYW0ge0FycmF5fSBiIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gYmkgYiBsZWZ0XG4gKiBAcGFyYW0ge051bWJlcn0gYmogYiByaWdodFxuICogQHBhcmFtIHtBcnJheX0gYyByZXN1bHQsIG11c3QgYmUgMCBpbml0aWFsaXplZFxuICogQHBhcmFtIHtOdW1iZXJ9IGNpIGMgbGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IGNqIGMgcmlnaHRcbiAqXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9hZGQgKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiAsIGMgLCBjaSAsIGNqICkge1xuXG5cdGNpID0gTWF0aC5tYXgoIDAgLCBjaSApO1xuXHRjb25zdCBrID0gY2ogLSBjaTtcblxuXHRhaSA9IE1hdGgubWF4KCAwICwgYWkgLCBhaiAtIGsgKSA7XG5cdGJpID0gTWF0aC5tYXgoIDAgLCBiaSAsIGJqIC0gayApIDtcblx0Y29uc3QgbSA9IGFqIC0gYWk7XG5cdGNvbnN0IG4gPSBiaiAtIGJpO1xuXG5cdHJldHVybiBtIDwgbiA/XG5cdFx0X0FERCggciAsIGIgLCBiaSAsIGJqICwgYSAsIGFpICwgYWogLCBjICwgY2kgLCBjaiApIDpcblx0XHRfQUREKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiAsIGMgLCBjaSAsIGNqICkgO1xuXG59XG4iXX0=