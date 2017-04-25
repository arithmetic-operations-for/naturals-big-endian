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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvYWRkL19hZGQuanMiXSwibmFtZXMiOlsiX2FkZCIsInIiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIiwiYyIsImNpIiwiY2oiLCJNYXRoIiwibWF4IiwiayIsIm0iLCJuIl0sIm1hcHBpbmdzIjoiOzs7OztRQW1CZ0JBLEksR0FBQUEsSTs7QUFuQmhCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCTyxTQUFTQSxJQUFULENBQWdCQyxDQUFoQixFQUFvQkMsQ0FBcEIsRUFBd0JDLEVBQXhCLEVBQTZCQyxFQUE3QixFQUFrQ0MsQ0FBbEMsRUFBc0NDLEVBQXRDLEVBQTJDQyxFQUEzQyxFQUFnREMsQ0FBaEQsRUFBb0RDLEVBQXBELEVBQXlEQyxFQUF6RCxFQUE4RDs7QUFFcEVELE9BQUtFLEtBQUtDLEdBQUwsQ0FBVSxDQUFWLEVBQWNILEVBQWQsQ0FBTDtBQUNBLE1BQU1JLElBQUlILEtBQUtELEVBQWY7O0FBRUFOLE9BQUtRLEtBQUtDLEdBQUwsQ0FBVSxDQUFWLEVBQWNULEVBQWQsRUFBbUJDLEtBQUtTLENBQXhCLENBQUw7QUFDQVAsT0FBS0ssS0FBS0MsR0FBTCxDQUFVLENBQVYsRUFBY04sRUFBZCxFQUFtQkMsS0FBS00sQ0FBeEIsQ0FBTDtBQUNBLE1BQU1DLElBQUlWLEtBQUtELEVBQWY7QUFDQSxNQUFNWSxJQUFJUixLQUFLRCxFQUFmOztBQUVBLFNBQU9RLElBQUlDLENBQUosR0FDTixZQUFNZCxDQUFOLEVBQVVJLENBQVYsRUFBY0MsRUFBZCxFQUFtQkMsRUFBbkIsRUFBd0JMLENBQXhCLEVBQTRCQyxFQUE1QixFQUFpQ0MsRUFBakMsRUFBc0NJLENBQXRDLEVBQTBDQyxFQUExQyxFQUErQ0MsRUFBL0MsQ0FETSxHQUVOLFlBQU1ULENBQU4sRUFBVUMsQ0FBVixFQUFjQyxFQUFkLEVBQW1CQyxFQUFuQixFQUF3QkMsQ0FBeEIsRUFBNEJDLEVBQTVCLEVBQWlDQyxFQUFqQyxFQUFzQ0MsQ0FBdEMsRUFBMENDLEVBQTFDLEVBQStDQyxFQUEvQyxDQUZEO0FBSUEiLCJmaWxlIjoiX2FkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9BREQgfSBmcm9tICcuJyA7XG5cbi8qKlxuICogQWRkcyB0d28gYmlnIGVuZGlhbiBhcnJheXMgYW5kIHB1dHMgcmVzdWx0IGluIGEgZGVzdGluYXRpb24gYXJyYXkuXG4gKiBXcmFwcyBvbiBvdmVyZmxvdy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gciBiYXNlIChyYWRpeClcbiAqIEBwYXJhbSB7QXJyYXl9IGEgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFpIGEgbGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIGEgcmlnaHRcbiAqIEBwYXJhbSB7QXJyYXl9IGIgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaSBiIGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaiBiIHJpZ2h0XG4gKiBAcGFyYW0ge0FycmF5fSBjIHJlc3VsdCwgbXVzdCBiZSAwIGluaXRpYWxpemVkXG4gKiBAcGFyYW0ge051bWJlcn0gY2kgYyBsZWZ0XG4gKiBAcGFyYW0ge051bWJlcn0gY2ogYyByaWdodFxuICpcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX2FkZCAoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICwgYyAsIGNpICwgY2ogKSB7XG5cblx0Y2kgPSBNYXRoLm1heCggMCAsIGNpICk7XG5cdGNvbnN0IGsgPSBjaiAtIGNpO1xuXG5cdGFpID0gTWF0aC5tYXgoIDAgLCBhaSAsIGFqIC0gayApIDtcblx0YmkgPSBNYXRoLm1heCggMCAsIGJpICwgYmogLSBrICkgO1xuXHRjb25zdCBtID0gYWogLSBhaTtcblx0Y29uc3QgbiA9IGJqIC0gYmk7XG5cblx0cmV0dXJuIG0gPCBuID9cblx0XHRfQUREKCByICwgYiAsIGJpICwgYmogLCBhICwgYWkgLCBhaiAsIGMgLCBjaSAsIGNqICkgOlxuXHRcdF9BREQoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICwgYyAsIGNpICwgY2ogKSA7XG5cbn1cbiJdfQ==