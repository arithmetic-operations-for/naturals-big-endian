"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._increment = _increment;

/**
 * Adds 1 to a big endian array.
 *
 * @param {Number} r radix
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 */
function _increment(r, a, ai, aj) {

	var _r = r - 1;

	while (--aj >= ai) {

		if (a[aj] < _r) {
			++a[aj];
			return;
		}

		a[aj] = 0;
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2FkZC9faW5jcmVtZW50LmpzIl0sIm5hbWVzIjpbIl9pbmNyZW1lbnQiLCJyIiwiYSIsImFpIiwiYWoiLCJfciJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTZ0JBLFUsR0FBQUEsVTs7QUFSaEI7Ozs7Ozs7O0FBUU8sU0FBU0EsVUFBVCxDQUFzQkMsQ0FBdEIsRUFBMEJDLENBQTFCLEVBQThCQyxFQUE5QixFQUFtQ0MsRUFBbkMsRUFBd0M7O0FBRTlDLEtBQU1DLEtBQUtKLElBQUksQ0FBZjs7QUFFQSxRQUFRLEVBQUVHLEVBQUYsSUFBUUQsRUFBaEIsRUFBcUI7O0FBRXBCLE1BQUtELEVBQUVFLEVBQUYsSUFBUUMsRUFBYixFQUFrQjtBQUNqQixLQUFFSCxFQUFFRSxFQUFGLENBQUY7QUFDQTtBQUNBOztBQUVERixJQUFFRSxFQUFGLElBQVEsQ0FBUjtBQUVBO0FBRUQiLCJmaWxlIjoiX2luY3JlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBBZGRzIDEgdG8gYSBiaWcgZW5kaWFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSByIHJhZGl4XG4gKiBAcGFyYW0ge0FycmF5fSBhIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaSBhIGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaiBhIHJpZ2h0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfaW5jcmVtZW50ICggciAsIGEgLCBhaSAsIGFqICkge1xuXG5cdGNvbnN0IF9yID0gciAtIDEgO1xuXG5cdHdoaWxlICggLS1haiA+PSBhaSApIHtcblxuXHRcdGlmICggYVthal0gPCBfciApIHtcblx0XHRcdCsrYVthal0gO1xuXHRcdFx0cmV0dXJuIDtcblx0XHR9XG5cblx0XHRhW2FqXSA9IDAgO1xuXG5cdH1cblxufVxuIl19