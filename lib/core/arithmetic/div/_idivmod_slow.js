'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._idivmod_slow = _idivmod_slow;

var _ = require('..');

var _2 = require('../..');

/**
 * Computes quotient and remainder of two big endian arrays.
 * <p>
 * Computes quotient and remainder of two big endian arrays
 * using long division algorithm (the one teached in
 * european primary schools).
 *
 * /!\ This algorithm modifies its first operand.
 *
 * HYP : q is at least as large as r
 *       b is not zero
 *
 * @param {int} x the radix
 * @param {array} r dividend and remainder
 * @param {int} ri r left
 * @param {int} rj r right
 * @param {array} b divisor
 * @param {int} bi b left
 * @param {int} bj b right
 * @param {array} q quotient, must be 0 initialized
 * @param {int} qi q left
 */

// /!\ There are implicit hypotheses
//     made on the size of the operands.
//     Should clarify.

function _idivmod_slow(x, r, ri, rj, b, bi, bj, q, qi) {

	var k,
	    t = ri + 1;

	do {

		// trim leading zeros
		// TODO maybe could try to put this procedure inside the _sub loop
		// TODO or assume that the number is trimed at the begining
		//      and put this statement at the end of the main loop
		while (ri < rj && r[ri] === 0) {
			++ri;
		} // search for a remainder block interval
		// greater than the divisor
		// TODO maybe could try binary search on the _lt function
		//      for another implementation
		k = ri + 1;
		while (k <= rj && (0, _2._lt)(r, ri, k, b, bi, bj)) {
			++k;
		} // remainder smaller than divisor --> end
		if (k > rj) break;

		// divide current block interval by quotient
		do {

			// increment quotient block corresponding
			// to current ls block of remainder interval
			++q[qi + k - t];

			// subtract divisor from current remainder
			// block interval
			(0, _._sub)(x, r, ri, k, b, bi, bj, r, ri, k);
		} while (!(0, _2._lt)(r, ri, k, b, bi, bj));
	} while (true);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZGl2L19pZGl2bW9kX3Nsb3cuanMiXSwibmFtZXMiOlsiX2lkaXZtb2Rfc2xvdyIsIngiLCJyIiwicmkiLCJyaiIsImIiLCJiaSIsImJqIiwicSIsInFpIiwiayIsInQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBOEJnQkEsYSxHQUFBQSxhOztBQTlCaEI7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTQSxhQUFULENBQXlCQyxDQUF6QixFQUE2QkMsQ0FBN0IsRUFBaUNDLEVBQWpDLEVBQXNDQyxFQUF0QyxFQUEyQ0MsQ0FBM0MsRUFBK0NDLEVBQS9DLEVBQW9EQyxFQUFwRCxFQUF5REMsQ0FBekQsRUFBNkRDLEVBQTdELEVBQWtFOztBQUV4RSxLQUFJQyxDQUFKO0FBQUEsS0FBT0MsSUFBSVIsS0FBSyxDQUFoQjs7QUFFQSxJQUFHOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBT0EsS0FBS0MsRUFBTCxJQUFXRixFQUFFQyxFQUFGLE1BQVUsQ0FBNUI7QUFBK0IsS0FBRUEsRUFBRjtBQUEvQixHQU5FLENBUUY7QUFDQTtBQUNBO0FBQ0E7QUFDQU8sTUFBSVAsS0FBSyxDQUFUO0FBQ0EsU0FBT08sS0FBS04sRUFBTCxJQUFXLFlBQUlGLENBQUosRUFBT0MsRUFBUCxFQUFXTyxDQUFYLEVBQWNMLENBQWQsRUFBaUJDLEVBQWpCLEVBQXFCQyxFQUFyQixDQUFsQjtBQUE0QyxLQUFFRyxDQUFGO0FBQTVDLEdBYkUsQ0FlRjtBQUNBLE1BQUlBLElBQUlOLEVBQVIsRUFBWTs7QUFFWjtBQUNBLEtBQUU7O0FBRUQ7QUFDQTtBQUNBLEtBQUVJLEVBQUVDLEtBQUtDLENBQUwsR0FBU0MsQ0FBWCxDQUFGOztBQUVBO0FBQ0E7QUFDQSxlQUFLVixDQUFMLEVBQVFDLENBQVIsRUFBV0MsRUFBWCxFQUFlTyxDQUFmLEVBQWtCTCxDQUFsQixFQUFxQkMsRUFBckIsRUFBeUJDLEVBQXpCLEVBQTZCTCxDQUE3QixFQUFnQ0MsRUFBaEMsRUFBb0NPLENBQXBDO0FBRUEsR0FWRCxRQVVRLENBQUMsWUFBSVIsQ0FBSixFQUFPQyxFQUFQLEVBQVdPLENBQVgsRUFBY0wsQ0FBZCxFQUFpQkMsRUFBakIsRUFBcUJDLEVBQXJCLENBVlQ7QUFhQSxFQWhDRCxRQWdDUSxJQWhDUjtBQWtDQSIsImZpbGUiOiJfaWRpdm1vZF9zbG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX3N1YiB9IGZyb20gJy4uJyA7XG5pbXBvcnQgeyBfbHQgfSBmcm9tICcuLi8uLicgO1xuXG4vKipcbiAqIENvbXB1dGVzIHF1b3RpZW50IGFuZCByZW1haW5kZXIgb2YgdHdvIGJpZyBlbmRpYW4gYXJyYXlzLlxuICogPHA+XG4gKiBDb21wdXRlcyBxdW90aWVudCBhbmQgcmVtYWluZGVyIG9mIHR3byBiaWcgZW5kaWFuIGFycmF5c1xuICogdXNpbmcgbG9uZyBkaXZpc2lvbiBhbGdvcml0aG0gKHRoZSBvbmUgdGVhY2hlZCBpblxuICogZXVyb3BlYW4gcHJpbWFyeSBzY2hvb2xzKS5cbiAqXG4gKiAvIVxcIFRoaXMgYWxnb3JpdGhtIG1vZGlmaWVzIGl0cyBmaXJzdCBvcGVyYW5kLlxuICpcbiAqIEhZUCA6IHEgaXMgYXQgbGVhc3QgYXMgbGFyZ2UgYXMgclxuICogICAgICAgYiBpcyBub3QgemVyb1xuICpcbiAqIEBwYXJhbSB7aW50fSB4IHRoZSByYWRpeFxuICogQHBhcmFtIHthcnJheX0gciBkaXZpZGVuZCBhbmQgcmVtYWluZGVyXG4gKiBAcGFyYW0ge2ludH0gcmkgciBsZWZ0XG4gKiBAcGFyYW0ge2ludH0gcmogciByaWdodFxuICogQHBhcmFtIHthcnJheX0gYiBkaXZpc29yXG4gKiBAcGFyYW0ge2ludH0gYmkgYiBsZWZ0XG4gKiBAcGFyYW0ge2ludH0gYmogYiByaWdodFxuICogQHBhcmFtIHthcnJheX0gcSBxdW90aWVudCwgbXVzdCBiZSAwIGluaXRpYWxpemVkXG4gKiBAcGFyYW0ge2ludH0gcWkgcSBsZWZ0XG4gKi9cblxuLy8gLyFcXCBUaGVyZSBhcmUgaW1wbGljaXQgaHlwb3RoZXNlc1xuLy8gICAgIG1hZGUgb24gdGhlIHNpemUgb2YgdGhlIG9wZXJhbmRzLlxuLy8gICAgIFNob3VsZCBjbGFyaWZ5LlxuXG5leHBvcnQgZnVuY3Rpb24gX2lkaXZtb2Rfc2xvdyAoIHggLCByICwgcmkgLCByaiAsIGIgLCBiaSAsIGJqICwgcSAsIHFpICkge1xuXG5cdHZhciBrLCB0ID0gcmkgKyAxO1xuXG5cdGRvIHtcblxuXHRcdC8vIHRyaW0gbGVhZGluZyB6ZXJvc1xuXHRcdC8vIFRPRE8gbWF5YmUgY291bGQgdHJ5IHRvIHB1dCB0aGlzIHByb2NlZHVyZSBpbnNpZGUgdGhlIF9zdWIgbG9vcFxuXHRcdC8vIFRPRE8gb3IgYXNzdW1lIHRoYXQgdGhlIG51bWJlciBpcyB0cmltZWQgYXQgdGhlIGJlZ2luaW5nXG5cdFx0Ly8gICAgICBhbmQgcHV0IHRoaXMgc3RhdGVtZW50IGF0IHRoZSBlbmQgb2YgdGhlIG1haW4gbG9vcFxuXHRcdHdoaWxlIChyaSA8IHJqICYmIHJbcmldID09PSAwKSArK3JpO1xuXG5cdFx0Ly8gc2VhcmNoIGZvciBhIHJlbWFpbmRlciBibG9jayBpbnRlcnZhbFxuXHRcdC8vIGdyZWF0ZXIgdGhhbiB0aGUgZGl2aXNvclxuXHRcdC8vIFRPRE8gbWF5YmUgY291bGQgdHJ5IGJpbmFyeSBzZWFyY2ggb24gdGhlIF9sdCBmdW5jdGlvblxuXHRcdC8vICAgICAgZm9yIGFub3RoZXIgaW1wbGVtZW50YXRpb25cblx0XHRrID0gcmkgKyAxO1xuXHRcdHdoaWxlIChrIDw9IHJqICYmIF9sdChyLCByaSwgaywgYiwgYmksIGJqKSkgKytrO1xuXG5cdFx0Ly8gcmVtYWluZGVyIHNtYWxsZXIgdGhhbiBkaXZpc29yIC0tPiBlbmRcblx0XHRpZiAoayA+IHJqKSBicmVhaztcblxuXHRcdC8vIGRpdmlkZSBjdXJyZW50IGJsb2NrIGludGVydmFsIGJ5IHF1b3RpZW50XG5cdFx0ZG97XG5cblx0XHRcdC8vIGluY3JlbWVudCBxdW90aWVudCBibG9jayBjb3JyZXNwb25kaW5nXG5cdFx0XHQvLyB0byBjdXJyZW50IGxzIGJsb2NrIG9mIHJlbWFpbmRlciBpbnRlcnZhbFxuXHRcdFx0KytxW3FpICsgayAtIHRdO1xuXG5cdFx0XHQvLyBzdWJ0cmFjdCBkaXZpc29yIGZyb20gY3VycmVudCByZW1haW5kZXJcblx0XHRcdC8vIGJsb2NrIGludGVydmFsXG5cdFx0XHRfc3ViKHgsIHIsIHJpLCBrLCBiLCBiaSwgYmosIHIsIHJpLCBrKTtcblxuXHRcdH0gd2hpbGUoIV9sdChyLCByaSwgaywgYiwgYmksIGJqKSk7XG5cblxuXHR9IHdoaWxlKHRydWUpO1xuXG59XG4iXX0=