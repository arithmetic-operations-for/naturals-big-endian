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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb252ZXJ0L19jb252ZXJ0X3RvX2xhcmdlcl9mYXN0LmpzIl0sIm5hbWVzIjpbIl9jb252ZXJ0X3RvX2xhcmdlcl9mYXN0IiwiYXIiLCJ6IiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsIm0iLCJuIiwicSIsInIiLCJpIiwidyIsInQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBY2dCQSx1QixHQUFBQSx1Qjs7O0FBWmhCOzs7Ozs7Ozs7Ozs7QUFZTyxTQUFTQSx1QkFBVCxDQUFtQ0MsRUFBbkMsRUFBd0NDLENBQXhDLEVBQTRDQyxDQUE1QyxFQUFnREMsRUFBaEQsRUFBcURDLEVBQXJELEVBQTBEQyxDQUExRCxFQUE4REMsRUFBOUQsRUFBbUVDLEVBQW5FLEVBQXdFOztBQUU5RSxLQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0JDLENBQXRCOztBQUVBTixLQUFJSixLQUFLRCxFQUFUO0FBQ0FNLEtBQUlGLEtBQUtELEVBQVQ7O0FBRUE7QUFDQTtBQUNBSyxLQUFJSCxJQUFJUCxDQUFSOztBQUVBO0FBQ0FTLEtBQUksQ0FBQ0YsSUFBSUcsQ0FBTCxJQUFVVixDQUFkOztBQUVBO0FBQ0E7QUFDQVksS0FBSUgsSUFBSSxDQUFDLENBQUNDLENBQVY7O0FBR0EsS0FBSUYsS0FBS0ksQ0FBVCxFQUFZO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVAsT0FBS0MsS0FBS00sQ0FBVjtBQUNBRCxNQUFJLENBQUNYLElBQUlVLENBQUwsSUFBVVYsQ0FBZDtBQUNBLEVBVkQsTUFXSztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0FFLE9BQUtDLEtBQUtLLElBQUlSLENBQWQ7QUFDQVcsTUFBSSxDQUFKO0FBQ0E7O0FBRUQsUUFBT1QsS0FBS0MsRUFBTCxJQUFXRSxLQUFLQyxFQUF2QixFQUEyQixFQUFFRCxFQUE3QixFQUFpQztBQUNoQ1EsTUFBSSxDQUFKO0FBQ0EsU0FBT0YsSUFBSVgsQ0FBWCxFQUFjLEVBQUVXLENBQWhCLEVBQW1CO0FBQ2xCRSxRQUFLZCxFQUFMLENBRGtCLENBQ0w7QUFDYmMsUUFBS1osRUFBRUMsRUFBRixDQUFMLENBRmtCLENBRUw7QUFDYixLQUFFQSxFQUFGLENBSGtCLENBR0w7QUFDYjtBQUNERSxJQUFFQyxFQUFGLElBQVFRLENBQVIsQ0FQZ0MsQ0FPcEI7QUFDWkYsTUFBSSxDQUFKO0FBQ0E7QUFFRCIsImZpbGUiOiJfY29udmVydF90b19sYXJnZXJfZmFzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gYXIgdGhlIGJhc2UgdG8gY29udmVydCBmcm9tXG4gKiBAcGFyYW0ge051bWJlcn0geiBpZiBiciBpcyB0aGUgYmFzZSB0byBjb252ZXJ0IHRvIHRoZW4gbG9nKGJyKSA9IHogbG9nKGFyKVxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgb3JpZ2luIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYWkgc3RhcnQgb2Zmc2V0IGluIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaiBlbmQgb2Zmc2V0IGluIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGIgdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYmkgc3RhcnQgb2Zmc2V0IGluIHRoZSBkZXN0aW5hdGlvbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGJqIGVuZCBvZmZzZXQgaW4gdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb252ZXJ0X3RvX2xhcmdlcl9mYXN0ICggYXIgLCB6ICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIHtcblxuXHR2YXIgbSwgbiwgcSwgciwgaSwgdywgdDtcblxuXHRtID0gYWogLSBhaTtcblx0biA9IGJqIC0gYmk7XG5cblx0Ly8gbnVtYmVyIG9mIHBhcnRzIG9mIGZpcnN0XG5cdC8vIGRlc3RpbmF0aW9uIGJsb2NrIGlmIGluY29tcGxldGVcblx0ciA9IG0gJSB6O1xuXG5cdC8vIG51bWJlciBvZiBjb21wbGV0ZSBibG9ja3MgaW4gZGVzdGluYXRpb25cblx0cSA9IChtIC0gcikgLyB6O1xuXG5cdC8vIHRvdGFsIG51bWJlciBvZiBibG9ja3MgaW4gZGVzdGluYXRpb25cblx0Ly8gKGNvbXBsZXRlIG9uZXMgKyBmaXJzdCBpZiBpbmNvbXBsZXRlKVxuXHR3ID0gcSArICEhcjtcblxuXG5cdGlmIChuID49IHcpIHtcblx0XHQvLyBpZiBkZXN0aW5hdGlvbiBjYW4gY29udGFpbiBtb3JlIHRoYW5cblx0XHQvLyB3aGF0IGlzIGF2YWlsYWJsZSBpbiBzb3VyY2UgdGhlblxuXHRcdC8vIGNvbXB1dGUgdGhlIGVmZmVjdGl2ZSB3cml0ZSBzdGFydFxuXHRcdC8vIGluIGRlc3RpbmF0aW9uIGFuZCBzZXQgaSB0byB0aGUgY29ycmVjdFxuXHRcdC8vIG9mZnNldCBhY2NvcmRpbmcgdG8gdGhlIHNpemVcblx0XHQvLyAoaW4gc291cmNlIGJsb2Nrcykgb2YgdGhlXG5cdFx0Ly8gZmlyc3QgZGVzdGluYXRpb24gYmxvY2sgaWYgaW5jb21wbGV0ZVxuXHRcdGJpID0gYmogLSB3O1xuXHRcdGkgPSAoeiAtIHIpICUgejtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBpZiBzb3VyY2UgY29udGFpbnMgbW9yZSB0aGFuIHdoYXRcblx0XHQvLyBkZXN0aW5hdGlvbiBjYW4gaGFuZGxlIHNldCB0aGUgZWZmZWN0aXZlXG5cdFx0Ly8gcmVhZCBzdGFydCBpbiBzb3VyY2UgYW5kIHNldCBpIHRvIDAgYmVjYXVzZVxuXHRcdC8vIGFsbCBibG9ja3Mgd2lsbCBiZSBjb21wbGV0ZVxuXHRcdGFpID0gYWogLSBuICogejtcblx0XHRpID0gMDtcblx0fVxuXG5cdGZvciAoOyBhaSA8IGFqICYmIGJpIDwgYmo7ICsrYmkpIHtcblx0XHR0ID0gMDtcblx0XHRmb3IgKDsgaSA8IHo7ICsraSkge1xuXHRcdFx0dCAqPSBhcjsgICAgIC8vIGFnZ3JlZ2F0ZSBzb3VyY2UgYmxvY2tzXG5cdFx0XHR0ICs9IGFbYWldOyAgLy8gdXNpbmcgc2ltcGxlXG5cdFx0XHQrK2FpOyAgICAgICAgLy8gbXVsdGlwbHkgKyBhZGRcblx0XHR9XG5cdFx0YltiaV0gPSB0OyAgLy8gc2V0IGJsb2NrIGluIGRlc3RpbmF0aW9uXG5cdFx0aSA9IDA7XG5cdH1cblxufVxuIl19