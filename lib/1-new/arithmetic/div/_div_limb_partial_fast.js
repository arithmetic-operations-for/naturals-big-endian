"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._div_limb_partial_fast = _div_limb_partial_fast;

/**
 * Divides a big endian number by a single limb number.
 * Can only work with limbs of size at most sqrt( 2^53 ).
 * Allows to start with a partial quotient.
 *
 * Does not update the remainder.
 */

function _div_limb_partial_fast(r, x, z, a, ai, aj, q, qi) {

  while (ai < aj) {

    x *= r;x += a[ai];

    q[qi] = x / z | 0;
    x %= z;

    ++qi;++ai;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2Rpdi9fZGl2X2xpbWJfcGFydGlhbF9mYXN0LmpzIl0sIm5hbWVzIjpbIl9kaXZfbGltYl9wYXJ0aWFsX2Zhc3QiLCJyIiwieCIsInoiLCJhIiwiYWkiLCJhaiIsInEiLCJxaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTZ0JBLHNCLEdBQUFBLHNCOztBQVJoQjs7Ozs7Ozs7QUFRTyxTQUFTQSxzQkFBVCxDQUFrQ0MsQ0FBbEMsRUFBc0NDLENBQXRDLEVBQTBDQyxDQUExQyxFQUE4Q0MsQ0FBOUMsRUFBa0RDLEVBQWxELEVBQXVEQyxFQUF2RCxFQUE0REMsQ0FBNUQsRUFBZ0VDLEVBQWhFLEVBQXFFOztBQUUzRSxTQUFRSCxLQUFLQyxFQUFiLEVBQWtCOztBQUVqQkosU0FBS0QsQ0FBTCxDQUFTQyxLQUFLRSxFQUFFQyxFQUFGLENBQUw7O0FBRVRFLE1BQUVDLEVBQUYsSUFBUU4sSUFBSUMsQ0FBSixHQUFRLENBQWhCO0FBQ0FELFNBQUtDLENBQUw7O0FBRUEsTUFBRUssRUFBRixDQUFPLEVBQUVILEVBQUY7QUFFUDtBQUVEIiwiZmlsZSI6Il9kaXZfbGltYl9wYXJ0aWFsX2Zhc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRGl2aWRlcyBhIGJpZyBlbmRpYW4gbnVtYmVyIGJ5IGEgc2luZ2xlIGxpbWIgbnVtYmVyLlxuICogQ2FuIG9ubHkgd29yayB3aXRoIGxpbWJzIG9mIHNpemUgYXQgbW9zdCBzcXJ0KCAyXjUzICkuXG4gKiBBbGxvd3MgdG8gc3RhcnQgd2l0aCBhIHBhcnRpYWwgcXVvdGllbnQuXG4gKlxuICogRG9lcyBub3QgdXBkYXRlIHRoZSByZW1haW5kZXIuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9kaXZfbGltYl9wYXJ0aWFsX2Zhc3QgKCByICwgeCAsIHogLCBhICwgYWkgLCBhaiAsIHEgLCBxaSApIHtcblxuXHR3aGlsZSAoIGFpIDwgYWogKSB7XG5cblx0XHR4ICo9IHIgOyB4ICs9IGFbYWldIDtcblxuXHRcdHFbcWldID0geCAvIHogfCAwIDtcblx0XHR4ICU9IHogO1xuXG5cdFx0KytxaSA7ICsrYWkgO1xuXG5cdH1cblxufVxuIl19