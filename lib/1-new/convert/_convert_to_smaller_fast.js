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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb252ZXJ0L19jb252ZXJ0X3RvX3NtYWxsZXJfZmFzdC5qcyJdLCJuYW1lcyI6WyJfY29udmVydF90b19zbWFsbGVyX2Zhc3QiLCJiciIsInoiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIiwibSIsIm4iLCJxIiwiciIsImkiLCJ3IiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFhZ0JBLHdCLEdBQUFBLHdCOztBQVpoQjs7Ozs7Ozs7Ozs7O0FBWU8sU0FBU0Esd0JBQVQsQ0FBb0NDLEVBQXBDLEVBQXlDQyxDQUF6QyxFQUE2Q0MsQ0FBN0MsRUFBaURDLEVBQWpELEVBQXNEQyxFQUF0RCxFQUEyREMsQ0FBM0QsRUFBK0RDLEVBQS9ELEVBQW9FQyxFQUFwRSxFQUF5RTs7QUFFL0UsS0FBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCQyxDQUF0Qjs7QUFFQU4sS0FBSUQsS0FBS0QsRUFBVDtBQUNBRyxLQUFJTCxLQUFLRCxFQUFUOztBQUVBO0FBQ0E7QUFDQVEsS0FBSUgsSUFBSVAsQ0FBUjs7QUFFQTtBQUNBUyxLQUFJLENBQUNGLElBQUlHLENBQUwsSUFBVVYsQ0FBZDs7QUFFQTtBQUNBO0FBQ0FZLEtBQUlILElBQUksQ0FBQyxDQUFDQyxDQUFWOztBQUdBLEtBQUlGLEtBQUtJLENBQVQsRUFBWTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBVixPQUFLQyxLQUFLUyxDQUFWO0FBQ0FELE1BQUksQ0FBQ1gsSUFBSVUsQ0FBTCxJQUFVVixDQUFkO0FBQ0EsRUFURCxNQVVLO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBSyxPQUFLQyxLQUFLRSxJQUFJUixDQUFkO0FBQ0FXLE1BQUksQ0FBSjtBQUNBOztBQUVELFFBQU9ULEtBQUtDLEVBQUwsSUFBV0UsS0FBS0MsRUFBdkIsRUFBMkIsRUFBRUosRUFBN0IsRUFBaUM7QUFDaENPLE1BQUlSLEVBQUVDLEVBQUYsQ0FBSjtBQUNBVyxNQUFJUixLQUFLTCxDQUFMLEdBQVMsQ0FBVCxHQUFhVyxDQUFqQjtBQUNBTixRQUFNTCxJQUFJVyxDQUFWO0FBQ0EsU0FBT0EsSUFBSVgsQ0FBWCxFQUFjLEVBQUVXLENBQWhCLEVBQW1CO0FBQ2xCRCxPQUFJRCxJQUFJVixFQUFSLENBRGtCLENBQ0M7QUFDbkJVLE9BQUksQ0FBQ0EsSUFBSUMsQ0FBTCxJQUFVWCxFQUFkLENBRmtCLENBRUM7QUFDbkJLLEtBQUVTLENBQUYsSUFBT0gsQ0FBUCxDQUhrQixDQUdDO0FBQ25CLEtBQUVHLENBQUY7QUFDQTtBQUNERixNQUFJLENBQUo7QUFDQTtBQUVEIiwiZmlsZSI6Il9jb252ZXJ0X3RvX3NtYWxsZXJfZmFzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGJyIHRoZSBiYXNlIHRvIGNvbnZlcnQgdG9cbiAqIEBwYXJhbSB7TnVtYmVyfSB6IGlmIGFyIGlzIHRoZSBiYXNlIHRvIGNvbnZlcnQgdG8gdGhlbiBsb2coYXIpID0geiBsb2coYnIpXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaSBzdGFydCBvZmZzZXQgaW4gdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIGVuZCBvZmZzZXQgaW4gdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gYiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaSBzdGFydCBvZmZzZXQgaW4gdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYmogZW5kIG9mZnNldCBpbiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnZlcnRfdG9fc21hbGxlcl9mYXN0ICggYnIgLCB6ICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIHtcblxuXHR2YXIgbSwgbiwgcSwgciwgaSwgdywgdDtcblxuXHRtID0gYmogLSBiaTtcblx0biA9IGFqIC0gYWk7XG5cblx0Ly8gbnVtYmVyIG9mIHBhcnRzIG9mIGZpcnN0XG5cdC8vIGRlc3RpbmF0aW9uIGJsb2NrIGlmIGluY29tcGxldGVcblx0ciA9IG0gJSB6O1xuXG5cdC8vIG51bWJlciBvZiBjb21wbGV0ZSBibG9ja3MgaW4gZGVzdGluYXRpb25cblx0cSA9IChtIC0gcikgLyB6O1xuXG5cdC8vIHRvdGFsIG51bWJlciBvZiBibG9ja3MgaW4gZGVzdGluYXRpb25cblx0Ly8gKGNvbXBsZXRlIG9uZXMgKyBmaXJzdCBpZiBpbmNvbXBsZXRlKVxuXHR3ID0gcSArICEhcjtcblxuXG5cdGlmIChuID49IHcpIHtcblx0XHQvLyBpZiBzb3VyY2UgY29udGFpbnMgbW9yZSB0aGFuIHdoYXRcblx0XHQvLyBkZXN0aW5hdGlvbiBjYW4gaGFuZGxlIHNldCB0aGUgZWZmZWN0aXZlXG5cdFx0Ly8gcmVhZCBzdGFydCBpbiBzb3VyY2UgYW5kIHNldCBpIHRvIHRoZSBjb3JyZWN0XG5cdFx0Ly8gb2Zmc2V0IGFjY29yZGluZyB0byB0aGUgc2l6ZVxuXHRcdC8vIChpbiBkZXN0aW5hdGlvbiBibG9ja3MpIG9mIHRoZVxuXHRcdC8vIGZpcnN0IHNvdXJjZSBibG9jayBpZiBpbmNvbXBsZXRlXG5cdFx0YWkgPSBhaiAtIHc7XG5cdFx0aSA9ICh6IC0gcikgJSB6O1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIGlmIGRlc3RpbmF0aW9uIGNhbiBjb250YWluIG1vcmUgdGhhblxuXHRcdC8vIHdoYXQgaXMgYXZhaWxhYmxlIGluIHNvdXJjZSB0aGVuXG5cdFx0Ly8gY29tcHV0ZSB0aGUgZWZmZWN0aXZlIHdyaXRlIHN0YXJ0XG5cdFx0Ly8gaW4gZGVzdGluYXRpb24gYW5kIHNldCBpIHRvIDAgYmVjYXVzZVxuXHRcdC8vIGFsbCBibG9ja3Mgd2lsbCBiZSBjb21wbGV0ZVxuXHRcdGJpID0gYmogLSBuICogejtcblx0XHRpID0gMDtcblx0fVxuXG5cdGZvciAoOyBhaSA8IGFqICYmIGJpIDwgYmo7ICsrYWkpIHtcblx0XHRxID0gYVthaV07XG5cdFx0dCA9IGJpICsgeiAtIDEgLSBpO1xuXHRcdGJpICs9IHogLSBpO1xuXHRcdGZvciAoOyBpIDwgejsgKytpKSB7XG5cdFx0XHRyID0gcSAlIGJyOyAgICAgICAgLy8gdW5wYWNrIHNvdXJjZSBibG9ja3Ncblx0XHRcdHEgPSAocSAtIHIpIC8gYnI7ICAvLyB1c2luZyBzaW1wbGVcblx0XHRcdGJbdF0gPSByOyAgICAgICAgICAvLyBtb2R1bG8gKyBxdW90aWVudFxuXHRcdFx0LS10O1xuXHRcdH1cblx0XHRpID0gMDtcblx0fVxuXG59XG4iXX0=