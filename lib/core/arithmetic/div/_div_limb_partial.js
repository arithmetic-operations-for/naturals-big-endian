"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._div_limb_partial = _div_limb_partial;

/**
 * Divides a big endian number by a single limb number.
 * Can only work with limbs of size at most sqrt( 2^53 ).
 * Allows to start with a partial quotient.
 *
 */

function _div_limb_partial(r, x, z, a, ai, aj, q, qi) {

	while (ai < aj) {

		x *= r;x += a[ai];

		q[qi] = x / z | 0;
		x %= z;
		a[ai] = 0;

		++qi;++ai;
	}

	a[aj - 1] = x;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZGl2L19kaXZfbGltYl9wYXJ0aWFsLmpzIl0sIm5hbWVzIjpbIl9kaXZfbGltYl9wYXJ0aWFsIiwiciIsIngiLCJ6IiwiYSIsImFpIiwiYWoiLCJxIiwicWkiXSwibWFwcGluZ3MiOiI7Ozs7O1FBUWdCQSxpQixHQUFBQSxpQjs7QUFQaEI7Ozs7Ozs7QUFPTyxTQUFTQSxpQkFBVCxDQUE2QkMsQ0FBN0IsRUFBaUNDLENBQWpDLEVBQXFDQyxDQUFyQyxFQUF5Q0MsQ0FBekMsRUFBNkNDLEVBQTdDLEVBQWtEQyxFQUFsRCxFQUF1REMsQ0FBdkQsRUFBMkRDLEVBQTNELEVBQWdFOztBQUV0RSxRQUFRSCxLQUFLQyxFQUFiLEVBQWtCOztBQUVqQkosT0FBS0QsQ0FBTCxDQUFTQyxLQUFLRSxFQUFFQyxFQUFGLENBQUw7O0FBRVRFLElBQUVDLEVBQUYsSUFBUU4sSUFBSUMsQ0FBSixHQUFRLENBQWhCO0FBQ0FELE9BQUtDLENBQUw7QUFDQUMsSUFBRUMsRUFBRixJQUFRLENBQVI7O0FBRUEsSUFBRUcsRUFBRixDQUFPLEVBQUVILEVBQUY7QUFFUDs7QUFFREQsR0FBRUUsS0FBRyxDQUFMLElBQVVKLENBQVY7QUFFQSIsImZpbGUiOiJfZGl2X2xpbWJfcGFydGlhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBEaXZpZGVzIGEgYmlnIGVuZGlhbiBudW1iZXIgYnkgYSBzaW5nbGUgbGltYiBudW1iZXIuXG4gKiBDYW4gb25seSB3b3JrIHdpdGggbGltYnMgb2Ygc2l6ZSBhdCBtb3N0IHNxcnQoIDJeNTMgKS5cbiAqIEFsbG93cyB0byBzdGFydCB3aXRoIGEgcGFydGlhbCBxdW90aWVudC5cbiAqXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9kaXZfbGltYl9wYXJ0aWFsICggciAsIHggLCB6ICwgYSAsIGFpICwgYWogLCBxICwgcWkgKSB7XG5cblx0d2hpbGUgKCBhaSA8IGFqICkge1xuXG5cdFx0eCAqPSByIDsgeCArPSBhW2FpXSA7XG5cblx0XHRxW3FpXSA9IHggLyB6IHwgMCA7XG5cdFx0eCAlPSB6IDtcblx0XHRhW2FpXSA9IDAgO1xuXG5cdFx0KytxaSA7ICsrYWkgO1xuXG5cdH1cblxuXHRhW2FqLTFdID0geCA7XG5cbn1cbiJdfQ==