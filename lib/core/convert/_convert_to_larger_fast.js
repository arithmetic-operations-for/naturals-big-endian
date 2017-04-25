"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._convert_to_larger_fast = _convert_to_larger_fast;


/**
 *
 * @param {Number} ar the base to convert from
 * @param {Number} z if br is the base to convert to then log(br) = z log(ar)
 * @param {Array} a the origin array
 * @param {Number} ai start offset in the origin array
 * @param {Number} aj end offset in the origin array
 * @param {Array} b the destination array
 * @param {Number} bi start offset in the destination array
 * @param {Number} bj end offset in the destination array
 */

function _convert_to_larger_fast(ar, z, a, ai, aj, b, bi, bj) {

	var m, n, q, r, i, w, t;

	m = aj - ai;
	n = bj - bi;

	// number of parts of first
	// destination block if incomplete
	r = m % z;

	// number of complete blocks in destination
	q = (m - r) / z;

	// total number of blocks in destination
	// (complete ones + first if incomplete)
	w = q + !!r;

	if (n >= w) {
		// if destination can contain more than
		// what is available in source then
		// compute the effective write start
		// in destination and set i to the correct
		// offset according to the size
		// (in source blocks) of the
		// first destination block if incomplete
		bi = bj - w;
		i = (z - r) % z;
	} else {
		// if source contains more than what
		// destination can handle set the effective
		// read start in source and set i to 0 because
		// all blocks will be complete
		ai = aj - n * z;
		i = 0;
	}

	for (; ai < aj && bi < bj; ++bi) {
		t = 0;
		for (; i < z; ++i) {
			t *= ar; // aggregate source blocks
			t += a[ai]; // using simple
			++ai; // multiply + add
		}
		b[bi] = t; // set block in destination
		i = 0;
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvX2NvbnZlcnRfdG9fbGFyZ2VyX2Zhc3QuanMiXSwibmFtZXMiOlsiX2NvbnZlcnRfdG9fbGFyZ2VyX2Zhc3QiLCJhciIsInoiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIiwibSIsIm4iLCJxIiwiciIsImkiLCJ3IiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFjZ0JBLHVCLEdBQUFBLHVCOzs7QUFaaEI7Ozs7Ozs7Ozs7OztBQVlPLFNBQVNBLHVCQUFULENBQW1DQyxFQUFuQyxFQUF3Q0MsQ0FBeEMsRUFBNENDLENBQTVDLEVBQWdEQyxFQUFoRCxFQUFxREMsRUFBckQsRUFBMERDLENBQTFELEVBQThEQyxFQUE5RCxFQUFtRUMsRUFBbkUsRUFBd0U7O0FBRTlFLEtBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQkMsQ0FBdEI7O0FBRUFOLEtBQUlKLEtBQUtELEVBQVQ7QUFDQU0sS0FBSUYsS0FBS0QsRUFBVDs7QUFFQTtBQUNBO0FBQ0FLLEtBQUlILElBQUlQLENBQVI7O0FBRUE7QUFDQVMsS0FBSSxDQUFDRixJQUFJRyxDQUFMLElBQVVWLENBQWQ7O0FBRUE7QUFDQTtBQUNBWSxLQUFJSCxJQUFJLENBQUMsQ0FBQ0MsQ0FBVjs7QUFHQSxLQUFJRixLQUFLSSxDQUFULEVBQVk7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBUCxPQUFLQyxLQUFLTSxDQUFWO0FBQ0FELE1BQUksQ0FBQ1gsSUFBSVUsQ0FBTCxJQUFVVixDQUFkO0FBQ0EsRUFWRCxNQVdLO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQUUsT0FBS0MsS0FBS0ssSUFBSVIsQ0FBZDtBQUNBVyxNQUFJLENBQUo7QUFDQTs7QUFFRCxRQUFPVCxLQUFLQyxFQUFMLElBQVdFLEtBQUtDLEVBQXZCLEVBQTJCLEVBQUVELEVBQTdCLEVBQWlDO0FBQ2hDUSxNQUFJLENBQUo7QUFDQSxTQUFPRixJQUFJWCxDQUFYLEVBQWMsRUFBRVcsQ0FBaEIsRUFBbUI7QUFDbEJFLFFBQUtkLEVBQUwsQ0FEa0IsQ0FDTDtBQUNiYyxRQUFLWixFQUFFQyxFQUFGLENBQUwsQ0FGa0IsQ0FFTDtBQUNiLEtBQUVBLEVBQUYsQ0FIa0IsQ0FHTDtBQUNiO0FBQ0RFLElBQUVDLEVBQUYsSUFBUVEsQ0FBUixDQVBnQyxDQU9wQjtBQUNaRixNQUFJLENBQUo7QUFDQTtBQUVEIiwiZmlsZSI6Il9jb252ZXJ0X3RvX2xhcmdlcl9mYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBhciB0aGUgYmFzZSB0byBjb252ZXJ0IGZyb21cbiAqIEBwYXJhbSB7TnVtYmVyfSB6IGlmIGJyIGlzIHRoZSBiYXNlIHRvIGNvbnZlcnQgdG8gdGhlbiBsb2coYnIpID0geiBsb2coYXIpXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaSBzdGFydCBvZmZzZXQgaW4gdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIGVuZCBvZmZzZXQgaW4gdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gYiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaSBzdGFydCBvZmZzZXQgaW4gdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYmogZW5kIG9mZnNldCBpbiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnZlcnRfdG9fbGFyZ2VyX2Zhc3QgKCBhciAsIHogLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkge1xuXG5cdHZhciBtLCBuLCBxLCByLCBpLCB3LCB0O1xuXG5cdG0gPSBhaiAtIGFpO1xuXHRuID0gYmogLSBiaTtcblxuXHQvLyBudW1iZXIgb2YgcGFydHMgb2YgZmlyc3Rcblx0Ly8gZGVzdGluYXRpb24gYmxvY2sgaWYgaW5jb21wbGV0ZVxuXHRyID0gbSAlIHo7XG5cblx0Ly8gbnVtYmVyIG9mIGNvbXBsZXRlIGJsb2NrcyBpbiBkZXN0aW5hdGlvblxuXHRxID0gKG0gLSByKSAvIHo7XG5cblx0Ly8gdG90YWwgbnVtYmVyIG9mIGJsb2NrcyBpbiBkZXN0aW5hdGlvblxuXHQvLyAoY29tcGxldGUgb25lcyArIGZpcnN0IGlmIGluY29tcGxldGUpXG5cdHcgPSBxICsgISFyO1xuXG5cblx0aWYgKG4gPj0gdykge1xuXHRcdC8vIGlmIGRlc3RpbmF0aW9uIGNhbiBjb250YWluIG1vcmUgdGhhblxuXHRcdC8vIHdoYXQgaXMgYXZhaWxhYmxlIGluIHNvdXJjZSB0aGVuXG5cdFx0Ly8gY29tcHV0ZSB0aGUgZWZmZWN0aXZlIHdyaXRlIHN0YXJ0XG5cdFx0Ly8gaW4gZGVzdGluYXRpb24gYW5kIHNldCBpIHRvIHRoZSBjb3JyZWN0XG5cdFx0Ly8gb2Zmc2V0IGFjY29yZGluZyB0byB0aGUgc2l6ZVxuXHRcdC8vIChpbiBzb3VyY2UgYmxvY2tzKSBvZiB0aGVcblx0XHQvLyBmaXJzdCBkZXN0aW5hdGlvbiBibG9jayBpZiBpbmNvbXBsZXRlXG5cdFx0YmkgPSBiaiAtIHc7XG5cdFx0aSA9ICh6IC0gcikgJSB6O1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIGlmIHNvdXJjZSBjb250YWlucyBtb3JlIHRoYW4gd2hhdFxuXHRcdC8vIGRlc3RpbmF0aW9uIGNhbiBoYW5kbGUgc2V0IHRoZSBlZmZlY3RpdmVcblx0XHQvLyByZWFkIHN0YXJ0IGluIHNvdXJjZSBhbmQgc2V0IGkgdG8gMCBiZWNhdXNlXG5cdFx0Ly8gYWxsIGJsb2NrcyB3aWxsIGJlIGNvbXBsZXRlXG5cdFx0YWkgPSBhaiAtIG4gKiB6O1xuXHRcdGkgPSAwO1xuXHR9XG5cblx0Zm9yICg7IGFpIDwgYWogJiYgYmkgPCBiajsgKytiaSkge1xuXHRcdHQgPSAwO1xuXHRcdGZvciAoOyBpIDwgejsgKytpKSB7XG5cdFx0XHR0ICo9IGFyOyAgICAgLy8gYWdncmVnYXRlIHNvdXJjZSBibG9ja3Ncblx0XHRcdHQgKz0gYVthaV07ICAvLyB1c2luZyBzaW1wbGVcblx0XHRcdCsrYWk7ICAgICAgICAvLyBtdWx0aXBseSArIGFkZFxuXHRcdH1cblx0XHRiW2JpXSA9IHQ7ICAvLyBzZXQgYmxvY2sgaW4gZGVzdGluYXRpb25cblx0XHRpID0gMDtcblx0fVxuXG59XG4iXX0=