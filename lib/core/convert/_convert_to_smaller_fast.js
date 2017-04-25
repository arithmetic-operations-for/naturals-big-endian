"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._convert_to_smaller_fast = _convert_to_smaller_fast;

/**
 *
 * @param {Number} br the base to convert to
 * @param {Number} z if ar is the base to convert to then log(ar) = z log(br)
 * @param {Array} a the origin array
 * @param {Number} ai start offset in the origin array
 * @param {Number} aj end offset in the origin array
 * @param {Array} b the destination array
 * @param {Number} bi start offset in the destination array
 * @param {Number} bj end offset in the destination array
 */

function _convert_to_smaller_fast(br, z, a, ai, aj, b, bi, bj) {

	var m, n, q, r, i, w, t;

	m = bj - bi;
	n = aj - ai;

	// number of parts of first
	// destination block if incomplete
	r = m % z;

	// number of complete blocks in destination
	q = (m - r) / z;

	// total number of blocks in destination
	// (complete ones + first if incomplete)
	w = q + !!r;

	if (n >= w) {
		// if source contains more than what
		// destination can handle set the effective
		// read start in source and set i to the correct
		// offset according to the size
		// (in destination blocks) of the
		// first source block if incomplete
		ai = aj - w;
		i = (z - r) % z;
	} else {
		// if destination can contain more than
		// what is available in source then
		// compute the effective write start
		// in destination and set i to 0 because
		// all blocks will be complete
		bi = bj - n * z;
		i = 0;
	}

	for (; ai < aj && bi < bj; ++ai) {
		q = a[ai];
		t = bi + z - 1 - i;
		bi += z - i;
		for (; i < z; ++i) {
			r = q % br; // unpack source blocks
			q = (q - r) / br; // using simple
			b[t] = r; // modulo + quotient
			--t;
		}
		i = 0;
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvX2NvbnZlcnRfdG9fc21hbGxlcl9mYXN0LmpzIl0sIm5hbWVzIjpbIl9jb252ZXJ0X3RvX3NtYWxsZXJfZmFzdCIsImJyIiwieiIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJtIiwibiIsInEiLCJyIiwiaSIsInciLCJ0Il0sIm1hcHBpbmdzIjoiOzs7OztRQWFnQkEsd0IsR0FBQUEsd0I7O0FBWmhCOzs7Ozs7Ozs7Ozs7QUFZTyxTQUFTQSx3QkFBVCxDQUFvQ0MsRUFBcEMsRUFBeUNDLENBQXpDLEVBQTZDQyxDQUE3QyxFQUFpREMsRUFBakQsRUFBc0RDLEVBQXRELEVBQTJEQyxDQUEzRCxFQUErREMsRUFBL0QsRUFBb0VDLEVBQXBFLEVBQXlFOztBQUUvRSxLQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0JDLENBQXRCOztBQUVBTixLQUFJRCxLQUFLRCxFQUFUO0FBQ0FHLEtBQUlMLEtBQUtELEVBQVQ7O0FBRUE7QUFDQTtBQUNBUSxLQUFJSCxJQUFJUCxDQUFSOztBQUVBO0FBQ0FTLEtBQUksQ0FBQ0YsSUFBSUcsQ0FBTCxJQUFVVixDQUFkOztBQUVBO0FBQ0E7QUFDQVksS0FBSUgsSUFBSSxDQUFDLENBQUNDLENBQVY7O0FBR0EsS0FBSUYsS0FBS0ksQ0FBVCxFQUFZO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FWLE9BQUtDLEtBQUtTLENBQVY7QUFDQUQsTUFBSSxDQUFDWCxJQUFJVSxDQUFMLElBQVVWLENBQWQ7QUFDQSxFQVRELE1BVUs7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FLLE9BQUtDLEtBQUtFLElBQUlSLENBQWQ7QUFDQVcsTUFBSSxDQUFKO0FBQ0E7O0FBRUQsUUFBT1QsS0FBS0MsRUFBTCxJQUFXRSxLQUFLQyxFQUF2QixFQUEyQixFQUFFSixFQUE3QixFQUFpQztBQUNoQ08sTUFBSVIsRUFBRUMsRUFBRixDQUFKO0FBQ0FXLE1BQUlSLEtBQUtMLENBQUwsR0FBUyxDQUFULEdBQWFXLENBQWpCO0FBQ0FOLFFBQU1MLElBQUlXLENBQVY7QUFDQSxTQUFPQSxJQUFJWCxDQUFYLEVBQWMsRUFBRVcsQ0FBaEIsRUFBbUI7QUFDbEJELE9BQUlELElBQUlWLEVBQVIsQ0FEa0IsQ0FDQztBQUNuQlUsT0FBSSxDQUFDQSxJQUFJQyxDQUFMLElBQVVYLEVBQWQsQ0FGa0IsQ0FFQztBQUNuQkssS0FBRVMsQ0FBRixJQUFPSCxDQUFQLENBSGtCLENBR0M7QUFDbkIsS0FBRUcsQ0FBRjtBQUNBO0FBQ0RGLE1BQUksQ0FBSjtBQUNBO0FBRUQiLCJmaWxlIjoiX2NvbnZlcnRfdG9fc21hbGxlcl9mYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gYnIgdGhlIGJhc2UgdG8gY29udmVydCB0b1xuICogQHBhcmFtIHtOdW1iZXJ9IHogaWYgYXIgaXMgdGhlIGJhc2UgdG8gY29udmVydCB0byB0aGVuIGxvZyhhcikgPSB6IGxvZyhicilcbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGFpIHN0YXJ0IG9mZnNldCBpbiB0aGUgb3JpZ2luIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYWogZW5kIG9mZnNldCBpbiB0aGUgb3JpZ2luIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBiIHRoZSBkZXN0aW5hdGlvbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGJpIHN0YXJ0IG9mZnNldCBpbiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaiBlbmQgb2Zmc2V0IGluIHRoZSBkZXN0aW5hdGlvbiBhcnJheVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBfY29udmVydF90b19zbWFsbGVyX2Zhc3QgKCBiciAsIHogLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkge1xuXG5cdHZhciBtLCBuLCBxLCByLCBpLCB3LCB0O1xuXG5cdG0gPSBiaiAtIGJpO1xuXHRuID0gYWogLSBhaTtcblxuXHQvLyBudW1iZXIgb2YgcGFydHMgb2YgZmlyc3Rcblx0Ly8gZGVzdGluYXRpb24gYmxvY2sgaWYgaW5jb21wbGV0ZVxuXHRyID0gbSAlIHo7XG5cblx0Ly8gbnVtYmVyIG9mIGNvbXBsZXRlIGJsb2NrcyBpbiBkZXN0aW5hdGlvblxuXHRxID0gKG0gLSByKSAvIHo7XG5cblx0Ly8gdG90YWwgbnVtYmVyIG9mIGJsb2NrcyBpbiBkZXN0aW5hdGlvblxuXHQvLyAoY29tcGxldGUgb25lcyArIGZpcnN0IGlmIGluY29tcGxldGUpXG5cdHcgPSBxICsgISFyO1xuXG5cblx0aWYgKG4gPj0gdykge1xuXHRcdC8vIGlmIHNvdXJjZSBjb250YWlucyBtb3JlIHRoYW4gd2hhdFxuXHRcdC8vIGRlc3RpbmF0aW9uIGNhbiBoYW5kbGUgc2V0IHRoZSBlZmZlY3RpdmVcblx0XHQvLyByZWFkIHN0YXJ0IGluIHNvdXJjZSBhbmQgc2V0IGkgdG8gdGhlIGNvcnJlY3Rcblx0XHQvLyBvZmZzZXQgYWNjb3JkaW5nIHRvIHRoZSBzaXplXG5cdFx0Ly8gKGluIGRlc3RpbmF0aW9uIGJsb2Nrcykgb2YgdGhlXG5cdFx0Ly8gZmlyc3Qgc291cmNlIGJsb2NrIGlmIGluY29tcGxldGVcblx0XHRhaSA9IGFqIC0gdztcblx0XHRpID0gKHogLSByKSAlIHo7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gaWYgZGVzdGluYXRpb24gY2FuIGNvbnRhaW4gbW9yZSB0aGFuXG5cdFx0Ly8gd2hhdCBpcyBhdmFpbGFibGUgaW4gc291cmNlIHRoZW5cblx0XHQvLyBjb21wdXRlIHRoZSBlZmZlY3RpdmUgd3JpdGUgc3RhcnRcblx0XHQvLyBpbiBkZXN0aW5hdGlvbiBhbmQgc2V0IGkgdG8gMCBiZWNhdXNlXG5cdFx0Ly8gYWxsIGJsb2NrcyB3aWxsIGJlIGNvbXBsZXRlXG5cdFx0YmkgPSBiaiAtIG4gKiB6O1xuXHRcdGkgPSAwO1xuXHR9XG5cblx0Zm9yICg7IGFpIDwgYWogJiYgYmkgPCBiajsgKythaSkge1xuXHRcdHEgPSBhW2FpXTtcblx0XHR0ID0gYmkgKyB6IC0gMSAtIGk7XG5cdFx0YmkgKz0geiAtIGk7XG5cdFx0Zm9yICg7IGkgPCB6OyArK2kpIHtcblx0XHRcdHIgPSBxICUgYnI7ICAgICAgICAvLyB1bnBhY2sgc291cmNlIGJsb2Nrc1xuXHRcdFx0cSA9IChxIC0gcikgLyBicjsgIC8vIHVzaW5nIHNpbXBsZVxuXHRcdFx0Ylt0XSA9IHI7ICAgICAgICAgIC8vIG1vZHVsbyArIHF1b3RpZW50XG5cdFx0XHQtLXQ7XG5cdFx0fVxuXHRcdGkgPSAwO1xuXHR9XG5cbn1cbiJdfQ==