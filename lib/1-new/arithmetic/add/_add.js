"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._add = _add;
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

 */

function _add(r, a, ai, aj, b, bi, bj, c, ci, cj) {

  ci = Math.max(0, ci);
  var k = cj - ci;

  ai = Math.max(0, ai, aj - k);
  bi = Math.max(0, bi, bj - k);
  var m = aj - ai;
  var n = bj - bi;

  return m < n ? _ADD(r, b, bi, bj, a, ai, aj, c, ci, cj) : _ADD(r, a, ai, aj, b, bi, bj, c, ci, cj);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2FkZC9fYWRkLmpzIl0sIm5hbWVzIjpbIl9hZGQiLCJyIiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsImMiLCJjaSIsImNqIiwiTWF0aCIsIm1heCIsImsiLCJtIiwibiIsIl9BREQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBaUJnQkEsSSxHQUFBQSxJO0FBakJoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQk8sU0FBU0EsSUFBVCxDQUFnQkMsQ0FBaEIsRUFBb0JDLENBQXBCLEVBQXdCQyxFQUF4QixFQUE2QkMsRUFBN0IsRUFBa0NDLENBQWxDLEVBQXNDQyxFQUF0QyxFQUEyQ0MsRUFBM0MsRUFBZ0RDLENBQWhELEVBQW9EQyxFQUFwRCxFQUF5REMsRUFBekQsRUFBOEQ7O0FBRXBFRCxPQUFLRSxLQUFLQyxHQUFMLENBQVUsQ0FBVixFQUFjSCxFQUFkLENBQUw7QUFDQSxNQUFNSSxJQUFJSCxLQUFLRCxFQUFmOztBQUVBTixPQUFLUSxLQUFLQyxHQUFMLENBQVUsQ0FBVixFQUFjVCxFQUFkLEVBQW1CQyxLQUFLUyxDQUF4QixDQUFMO0FBQ0FQLE9BQUtLLEtBQUtDLEdBQUwsQ0FBVSxDQUFWLEVBQWNOLEVBQWQsRUFBbUJDLEtBQUtNLENBQXhCLENBQUw7QUFDQSxNQUFNQyxJQUFJVixLQUFLRCxFQUFmO0FBQ0EsTUFBTVksSUFBSVIsS0FBS0QsRUFBZjs7QUFFQSxTQUFPUSxJQUFJQyxDQUFKLEdBQ05DLEtBQU1mLENBQU4sRUFBVUksQ0FBVixFQUFjQyxFQUFkLEVBQW1CQyxFQUFuQixFQUF3QkwsQ0FBeEIsRUFBNEJDLEVBQTVCLEVBQWlDQyxFQUFqQyxFQUFzQ0ksQ0FBdEMsRUFBMENDLEVBQTFDLEVBQStDQyxFQUEvQyxDQURNLEdBRU5NLEtBQU1mLENBQU4sRUFBVUMsQ0FBVixFQUFjQyxFQUFkLEVBQW1CQyxFQUFuQixFQUF3QkMsQ0FBeEIsRUFBNEJDLEVBQTVCLEVBQWlDQyxFQUFqQyxFQUFzQ0MsQ0FBdEMsRUFBMENDLEVBQTFDLEVBQStDQyxFQUEvQyxDQUZEO0FBSUEiLCJmaWxlIjoiX2FkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQWRkcyB0d28gYmlnIGVuZGlhbiBhcnJheXMgYW5kIHB1dHMgcmVzdWx0IGluIGEgZGVzdGluYXRpb24gYXJyYXkuXG4gKiBXcmFwcyBvbiBvdmVyZmxvdy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gciBiYXNlIChyYWRpeClcbiAqIEBwYXJhbSB7QXJyYXl9IGEgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFpIGEgbGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIGEgcmlnaHRcbiAqIEBwYXJhbSB7QXJyYXl9IGIgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaSBiIGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaiBiIHJpZ2h0XG4gKiBAcGFyYW0ge0FycmF5fSBjIHJlc3VsdCwgbXVzdCBiZSAwIGluaXRpYWxpemVkXG4gKiBAcGFyYW0ge051bWJlcn0gY2kgYyBsZWZ0XG4gKiBAcGFyYW0ge051bWJlcn0gY2ogYyByaWdodFxuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9hZGQgKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiAsIGMgLCBjaSAsIGNqICkge1xuXG5cdGNpID0gTWF0aC5tYXgoIDAgLCBjaSApO1xuXHRjb25zdCBrID0gY2ogLSBjaTtcblxuXHRhaSA9IE1hdGgubWF4KCAwICwgYWkgLCBhaiAtIGsgKSA7XG5cdGJpID0gTWF0aC5tYXgoIDAgLCBiaSAsIGJqIC0gayApIDtcblx0Y29uc3QgbSA9IGFqIC0gYWk7XG5cdGNvbnN0IG4gPSBiaiAtIGJpO1xuXG5cdHJldHVybiBtIDwgbiA/XG5cdFx0X0FERCggciAsIGIgLCBiaSAsIGJqICwgYSAsIGFpICwgYWogLCBjICwgY2kgLCBjaiApIDpcblx0XHRfQUREKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiAsIGMgLCBjaSAsIGNqICkgO1xuXG59XG4iXX0=