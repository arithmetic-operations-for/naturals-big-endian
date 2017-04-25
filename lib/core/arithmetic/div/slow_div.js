'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.slow_div = slow_div;

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

function slow_div(x, r, ri, rj, b, bi, bj, q, qi) {

	var k,
	    t = ri + 1;

	do {

		// trim leading zeros
		//     - maybe could try to put this procedure inside the _sub loop
		//     - or assume that the number is trimed at the begining
		//       and put this statement at the end of the main loop
		while (ri < rj && r[ri] === 0) {
			++ri;
		} // search for a remainder block interval
		// greater than the divisor
		//     - maybe could try binary search on the _lt function
		//     for another implementation
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZGl2L3Nsb3dfZGl2LmpzIl0sIm5hbWVzIjpbInNsb3dfZGl2IiwieCIsInIiLCJyaSIsInJqIiwiYiIsImJpIiwiYmoiLCJxIiwicWkiLCJrIiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUE4QmdCQSxRLEdBQUFBLFE7O0FBOUJoQjs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBOztBQUVPLFNBQVNBLFFBQVQsQ0FBb0JDLENBQXBCLEVBQXdCQyxDQUF4QixFQUE0QkMsRUFBNUIsRUFBaUNDLEVBQWpDLEVBQXNDQyxDQUF0QyxFQUEwQ0MsRUFBMUMsRUFBK0NDLEVBQS9DLEVBQW9EQyxDQUFwRCxFQUF3REMsRUFBeEQsRUFBNkQ7O0FBRW5FLEtBQUlDLENBQUo7QUFBQSxLQUFPQyxJQUFJUixLQUFLLENBQWhCOztBQUVBLElBQUc7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFPQSxLQUFLQyxFQUFMLElBQVdGLEVBQUVDLEVBQUYsTUFBVSxDQUE1QjtBQUErQixLQUFFQSxFQUFGO0FBQS9CLEdBTkUsQ0FRRjtBQUNBO0FBQ0E7QUFDQTtBQUNBTyxNQUFJUCxLQUFLLENBQVQ7QUFDQSxTQUFPTyxLQUFLTixFQUFMLElBQVcsWUFBSUYsQ0FBSixFQUFPQyxFQUFQLEVBQVdPLENBQVgsRUFBY0wsQ0FBZCxFQUFpQkMsRUFBakIsRUFBcUJDLEVBQXJCLENBQWxCO0FBQTRDLEtBQUVHLENBQUY7QUFBNUMsR0FiRSxDQWVGO0FBQ0EsTUFBSUEsSUFBSU4sRUFBUixFQUFZOztBQUVaO0FBQ0EsS0FBRTs7QUFFRDtBQUNBO0FBQ0EsS0FBRUksRUFBRUMsS0FBS0MsQ0FBTCxHQUFTQyxDQUFYLENBQUY7O0FBRUE7QUFDQTtBQUNBLGVBQUtWLENBQUwsRUFBUUMsQ0FBUixFQUFXQyxFQUFYLEVBQWVPLENBQWYsRUFBa0JMLENBQWxCLEVBQXFCQyxFQUFyQixFQUF5QkMsRUFBekIsRUFBNkJMLENBQTdCLEVBQWdDQyxFQUFoQyxFQUFvQ08sQ0FBcEM7QUFFQSxHQVZELFFBVVEsQ0FBQyxZQUFJUixDQUFKLEVBQU9DLEVBQVAsRUFBV08sQ0FBWCxFQUFjTCxDQUFkLEVBQWlCQyxFQUFqQixFQUFxQkMsRUFBckIsQ0FWVDtBQWFBLEVBaENELFFBZ0NRLElBaENSO0FBa0NBIiwiZmlsZSI6InNsb3dfZGl2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX3N1YiB9IGZyb20gJy4uJyA7XG5pbXBvcnQgeyBfbHQgfSBmcm9tICcuLi8uLicgO1xuXG4vKipcbiAqIENvbXB1dGVzIHF1b3RpZW50IGFuZCByZW1haW5kZXIgb2YgdHdvIGJpZyBlbmRpYW4gYXJyYXlzLlxuICogPHA+XG4gKiBDb21wdXRlcyBxdW90aWVudCBhbmQgcmVtYWluZGVyIG9mIHR3byBiaWcgZW5kaWFuIGFycmF5c1xuICogdXNpbmcgbG9uZyBkaXZpc2lvbiBhbGdvcml0aG0gKHRoZSBvbmUgdGVhY2hlZCBpblxuICogZXVyb3BlYW4gcHJpbWFyeSBzY2hvb2xzKS5cbiAqXG4gKiAvIVxcIFRoaXMgYWxnb3JpdGhtIG1vZGlmaWVzIGl0cyBmaXJzdCBvcGVyYW5kLlxuICpcbiAqIEhZUCA6IHEgaXMgYXQgbGVhc3QgYXMgbGFyZ2UgYXMgclxuICogICAgICAgYiBpcyBub3QgemVyb1xuICpcbiAqIEBwYXJhbSB7aW50fSB4IHRoZSByYWRpeFxuICogQHBhcmFtIHthcnJheX0gciBkaXZpZGVuZCBhbmQgcmVtYWluZGVyXG4gKiBAcGFyYW0ge2ludH0gcmkgciBsZWZ0XG4gKiBAcGFyYW0ge2ludH0gcmogciByaWdodFxuICogQHBhcmFtIHthcnJheX0gYiBkaXZpc29yXG4gKiBAcGFyYW0ge2ludH0gYmkgYiBsZWZ0XG4gKiBAcGFyYW0ge2ludH0gYmogYiByaWdodFxuICogQHBhcmFtIHthcnJheX0gcSBxdW90aWVudCwgbXVzdCBiZSAwIGluaXRpYWxpemVkXG4gKiBAcGFyYW0ge2ludH0gcWkgcSBsZWZ0XG4gKi9cblxuLy8gLyFcXCBUaGVyZSBhcmUgaW1wbGljaXQgaHlwb3RoZXNlc1xuLy8gICAgIG1hZGUgb24gdGhlIHNpemUgb2YgdGhlIG9wZXJhbmRzLlxuLy8gICAgIFNob3VsZCBjbGFyaWZ5LlxuXG5leHBvcnQgZnVuY3Rpb24gc2xvd19kaXYgKCB4ICwgciAsIHJpICwgcmogLCBiICwgYmkgLCBiaiAsIHEgLCBxaSApIHtcblxuXHR2YXIgaywgdCA9IHJpICsgMTtcblxuXHRkbyB7XG5cblx0XHQvLyB0cmltIGxlYWRpbmcgemVyb3Ncblx0XHQvLyAgICAgLSBtYXliZSBjb3VsZCB0cnkgdG8gcHV0IHRoaXMgcHJvY2VkdXJlIGluc2lkZSB0aGUgX3N1YiBsb29wXG5cdFx0Ly8gICAgIC0gb3IgYXNzdW1lIHRoYXQgdGhlIG51bWJlciBpcyB0cmltZWQgYXQgdGhlIGJlZ2luaW5nXG5cdFx0Ly8gICAgICAgYW5kIHB1dCB0aGlzIHN0YXRlbWVudCBhdCB0aGUgZW5kIG9mIHRoZSBtYWluIGxvb3Bcblx0XHR3aGlsZSAocmkgPCByaiAmJiByW3JpXSA9PT0gMCkgKytyaTtcblxuXHRcdC8vIHNlYXJjaCBmb3IgYSByZW1haW5kZXIgYmxvY2sgaW50ZXJ2YWxcblx0XHQvLyBncmVhdGVyIHRoYW4gdGhlIGRpdmlzb3Jcblx0XHQvLyAgICAgLSBtYXliZSBjb3VsZCB0cnkgYmluYXJ5IHNlYXJjaCBvbiB0aGUgX2x0IGZ1bmN0aW9uXG5cdFx0Ly8gICAgIGZvciBhbm90aGVyIGltcGxlbWVudGF0aW9uXG5cdFx0ayA9IHJpICsgMTtcblx0XHR3aGlsZSAoayA8PSByaiAmJiBfbHQociwgcmksIGssIGIsIGJpLCBiaikpICsraztcblxuXHRcdC8vIHJlbWFpbmRlciBzbWFsbGVyIHRoYW4gZGl2aXNvciAtLT4gZW5kXG5cdFx0aWYgKGsgPiByaikgYnJlYWs7XG5cblx0XHQvLyBkaXZpZGUgY3VycmVudCBibG9jayBpbnRlcnZhbCBieSBxdW90aWVudFxuXHRcdGRve1xuXG5cdFx0XHQvLyBpbmNyZW1lbnQgcXVvdGllbnQgYmxvY2sgY29ycmVzcG9uZGluZ1xuXHRcdFx0Ly8gdG8gY3VycmVudCBscyBibG9jayBvZiByZW1haW5kZXIgaW50ZXJ2YWxcblx0XHRcdCsrcVtxaSArIGsgLSB0XTtcblxuXHRcdFx0Ly8gc3VidHJhY3QgZGl2aXNvciBmcm9tIGN1cnJlbnQgcmVtYWluZGVyXG5cdFx0XHQvLyBibG9jayBpbnRlcnZhbFxuXHRcdFx0X3N1Yih4LCByLCByaSwgaywgYiwgYmksIGJqLCByLCByaSwgayk7XG5cblx0XHR9IHdoaWxlKCFfbHQociwgcmksIGssIGIsIGJpLCBiaikpO1xuXG5cblx0fSB3aGlsZSh0cnVlKTtcblxufVxuIl19