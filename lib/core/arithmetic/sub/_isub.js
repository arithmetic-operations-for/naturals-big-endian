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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvc3ViL19pc3ViLmpzIl0sIm5hbWVzIjpbIl9pc3ViIiwiciIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJDIiwiVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFjZ0JBLEssR0FBQUEsSzs7QUFiaEI7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFTQSxLQUFULENBQWlCQyxDQUFqQixFQUFxQkMsQ0FBckIsRUFBeUJDLEVBQXpCLEVBQThCQyxFQUE5QixFQUFtQ0MsQ0FBbkMsRUFBdUNDLEVBQXZDLEVBQTRDQyxFQUE1QyxFQUFpRDs7QUFFdkQsS0FBSUMsSUFBSSxDQUFSOztBQUVBLFFBQVEsRUFBRUQsRUFBRixJQUFRRCxFQUFoQixFQUFxQjtBQUNwQixJQUFFRixFQUFGO0FBQ0EsTUFBTUssSUFBSUQsQ0FBVjtBQUNBQSxNQUFJTixFQUFFRSxFQUFGLElBQVFDLEVBQUVFLEVBQUYsSUFBUUUsQ0FBcEI7QUFDQVAsSUFBRUUsRUFBRixJQUFRRixFQUFFRSxFQUFGLElBQVFDLEVBQUVFLEVBQUYsQ0FBUixJQUFpQkMsSUFBRVAsQ0FBRixHQUFNUSxDQUF2QixDQUFSO0FBQ0E7O0FBRUQsUUFBUUQsS0FBSyxFQUFFSixFQUFGLElBQVFELEVBQXJCLEVBQTBCO0FBQ3pCLE1BQU1NLEtBQUlELENBQVY7QUFDQUEsTUFBSU4sRUFBRUUsRUFBRixJQUFRSyxFQUFaO0FBQ0FQLElBQUVFLEVBQUYsS0FBV0ksSUFBRVAsQ0FBRixHQUFNUSxFQUFqQjtBQUNBO0FBRUQiLCJmaWxlIjoiX2lzdWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogU3VidHJhY3RzIEIgZnJvbSBBLCB8QXwgPj0gfEJ8LlxuICogV3JhcHMuXG4gKlxuICogQHBhcmFtIHtpbnR9IHIgYmFzZSAocmFkaXgpXG4gKiBAcGFyYW0ge2FycmF5fSBhIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7aW50fSBhaSBhIGxlZnRcbiAqIEBwYXJhbSB7aW50fSBhaiBhIHJpZ2h0XG4gKiBAcGFyYW0ge2FycmF5fSBiIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge2ludH0gYmkgYiBsZWZ0XG4gKiBAcGFyYW0ge2ludH0gYmogYiByaWdodFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBfaXN1YiAoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkge1xuXG5cdGxldCBDID0gMCA7XG5cblx0d2hpbGUgKCAtLWJqID49IGJpICkge1xuXHRcdC0tYWogO1xuXHRcdGNvbnN0IFQgPSBDIDtcblx0XHRDID0gYVthal0gPCBiW2JqXSArIFQgO1xuXHRcdGFbYWpdID0gYVthal0gLSBiW2JqXSArIChDKnIgLSBUKSA7XG5cdH1cblxuXHR3aGlsZSAoIEMgJiYgLS1haiA+PSBhaSApIHtcblx0XHRjb25zdCBUID0gQyA7XG5cdFx0QyA9IGFbYWpdIDwgVCA7XG5cdFx0YVthal0gKz0gKCBDKnIgLSBUICkgO1xuXHR9XG5cbn1cbiJdfQ==