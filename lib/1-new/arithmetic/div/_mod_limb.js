"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._mod_limb = _mod_limb;

/**
 * Divides a big endian number by a single limb number and returns only the
 * remainder. Can only work with limbs of size at most sqrt( 2^53 ).
 */

function _mod_limb(r, z, a, ai, aj) {

	var x = 0;

	while (ai < aj) {

		x *= r;
		x += a[ai];
		x %= z;
		++ai;
	}

	return x;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2Rpdi9fbW9kX2xpbWIuanMiXSwibmFtZXMiOlsiX21vZF9saW1iIiwiciIsInoiLCJhIiwiYWkiLCJhaiIsIngiXSwibWFwcGluZ3MiOiI7Ozs7O1FBTWdCQSxTLEdBQUFBLFM7O0FBTGhCOzs7OztBQUtPLFNBQVNBLFNBQVQsQ0FBcUJDLENBQXJCLEVBQXlCQyxDQUF6QixFQUE2QkMsQ0FBN0IsRUFBaUNDLEVBQWpDLEVBQXNDQyxFQUF0QyxFQUEyQzs7QUFFakQsS0FBSUMsSUFBSSxDQUFSOztBQUVBLFFBQVFGLEtBQUtDLEVBQWIsRUFBa0I7O0FBRWpCQyxPQUFLTCxDQUFMO0FBQ0FLLE9BQUtILEVBQUVDLEVBQUYsQ0FBTDtBQUNBRSxPQUFLSixDQUFMO0FBQ0EsSUFBRUUsRUFBRjtBQUVBOztBQUVELFFBQU9FLENBQVA7QUFFQSIsImZpbGUiOiJfbW9kX2xpbWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRGl2aWRlcyBhIGJpZyBlbmRpYW4gbnVtYmVyIGJ5IGEgc2luZ2xlIGxpbWIgbnVtYmVyIGFuZCByZXR1cm5zIG9ubHkgdGhlXG4gKiByZW1haW5kZXIuIENhbiBvbmx5IHdvcmsgd2l0aCBsaW1icyBvZiBzaXplIGF0IG1vc3Qgc3FydCggMl41MyApLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBfbW9kX2xpbWIgKCByICwgeiAsIGEgLCBhaSAsIGFqICkge1xuXG5cdGxldCB4ID0gMCA7XG5cblx0d2hpbGUgKCBhaSA8IGFqICkge1xuXG5cdFx0eCAqPSByIDtcblx0XHR4ICs9IGFbYWldIDtcblx0XHR4ICU9IHogO1xuXHRcdCsrYWkgO1xuXG5cdH1cblxuXHRyZXR1cm4geCA7XG5cbn1cbiJdfQ==