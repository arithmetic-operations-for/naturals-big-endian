"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._isub = _isub;

/**
 * Subtracts B from A, |A| >= |B|.
 * Wraps.
 *
 * @param {int} r base (radix)
 * @param {array} a first operand
 * @param {int} ai a left
 * @param {int} aj a right
 * @param {array} b second operand
 * @param {int} bi b left
 * @param {int} bj b right
 */

function _isub(r, a, ai, aj, b, bi, bj) {

	var C = 0;

	while (--bj >= bi) {
		--aj;
		var T = C;
		C = a[aj] < b[bj] + T;
		a[aj] = a[aj] - b[bj] + (C * r - T);
	}

	while (C && --aj >= ai) {
		var _T = C;
		C = a[aj] < _T;
		a[aj] += C * r - _T;
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL3N1Yi9faXN1Yi5qcyJdLCJuYW1lcyI6WyJfaXN1YiIsInIiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIiwiQyIsIlQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBY2dCQSxLLEdBQUFBLEs7O0FBYmhCOzs7Ozs7Ozs7Ozs7O0FBYU8sU0FBU0EsS0FBVCxDQUFpQkMsQ0FBakIsRUFBcUJDLENBQXJCLEVBQXlCQyxFQUF6QixFQUE4QkMsRUFBOUIsRUFBbUNDLENBQW5DLEVBQXVDQyxFQUF2QyxFQUE0Q0MsRUFBNUMsRUFBaUQ7O0FBRXZELEtBQUlDLElBQUksQ0FBUjs7QUFFQSxRQUFRLEVBQUVELEVBQUYsSUFBUUQsRUFBaEIsRUFBcUI7QUFDcEIsSUFBRUYsRUFBRjtBQUNBLE1BQU1LLElBQUlELENBQVY7QUFDQUEsTUFBSU4sRUFBRUUsRUFBRixJQUFRQyxFQUFFRSxFQUFGLElBQVFFLENBQXBCO0FBQ0FQLElBQUVFLEVBQUYsSUFBUUYsRUFBRUUsRUFBRixJQUFRQyxFQUFFRSxFQUFGLENBQVIsSUFBaUJDLElBQUVQLENBQUYsR0FBTVEsQ0FBdkIsQ0FBUjtBQUNBOztBQUVELFFBQVFELEtBQUssRUFBRUosRUFBRixJQUFRRCxFQUFyQixFQUEwQjtBQUN6QixNQUFNTSxLQUFJRCxDQUFWO0FBQ0FBLE1BQUlOLEVBQUVFLEVBQUYsSUFBUUssRUFBWjtBQUNBUCxJQUFFRSxFQUFGLEtBQVdJLElBQUVQLENBQUYsR0FBTVEsRUFBakI7QUFDQTtBQUVEIiwiZmlsZSI6Il9pc3ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFN1YnRyYWN0cyBCIGZyb20gQSwgfEF8ID49IHxCfC5cbiAqIFdyYXBzLlxuICpcbiAqIEBwYXJhbSB7aW50fSByIGJhc2UgKHJhZGl4KVxuICogQHBhcmFtIHthcnJheX0gYSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge2ludH0gYWkgYSBsZWZ0XG4gKiBAcGFyYW0ge2ludH0gYWogYSByaWdodFxuICogQHBhcmFtIHthcnJheX0gYiBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtpbnR9IGJpIGIgbGVmdFxuICogQHBhcmFtIHtpbnR9IGJqIGIgcmlnaHRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX2lzdWIgKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIHtcblxuXHRsZXQgQyA9IDAgO1xuXG5cdHdoaWxlICggLS1iaiA+PSBiaSApIHtcblx0XHQtLWFqIDtcblx0XHRjb25zdCBUID0gQyA7XG5cdFx0QyA9IGFbYWpdIDwgYltial0gKyBUIDtcblx0XHRhW2FqXSA9IGFbYWpdIC0gYltial0gKyAoQypyIC0gVCkgO1xuXHR9XG5cblx0d2hpbGUgKCBDICYmIC0tYWogPj0gYWkgKSB7XG5cdFx0Y29uc3QgVCA9IEMgO1xuXHRcdEMgPSBhW2FqXSA8IFQgO1xuXHRcdGFbYWpdICs9ICggQypyIC0gVCApIDtcblx0fVxuXG59XG4iXX0=