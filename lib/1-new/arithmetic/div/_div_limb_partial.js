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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2Rpdi9fZGl2X2xpbWJfcGFydGlhbC5qcyJdLCJuYW1lcyI6WyJfZGl2X2xpbWJfcGFydGlhbCIsInIiLCJ4IiwieiIsImEiLCJhaSIsImFqIiwicSIsInFpIl0sIm1hcHBpbmdzIjoiOzs7OztRQVFnQkEsaUIsR0FBQUEsaUI7O0FBUGhCOzs7Ozs7O0FBT08sU0FBU0EsaUJBQVQsQ0FBNkJDLENBQTdCLEVBQWlDQyxDQUFqQyxFQUFxQ0MsQ0FBckMsRUFBeUNDLENBQXpDLEVBQTZDQyxFQUE3QyxFQUFrREMsRUFBbEQsRUFBdURDLENBQXZELEVBQTJEQyxFQUEzRCxFQUFnRTs7QUFFdEUsUUFBUUgsS0FBS0MsRUFBYixFQUFrQjs7QUFFakJKLE9BQUtELENBQUwsQ0FBU0MsS0FBS0UsRUFBRUMsRUFBRixDQUFMOztBQUVURSxJQUFFQyxFQUFGLElBQVFOLElBQUlDLENBQUosR0FBUSxDQUFoQjtBQUNBRCxPQUFLQyxDQUFMO0FBQ0FDLElBQUVDLEVBQUYsSUFBUSxDQUFSOztBQUVBLElBQUVHLEVBQUYsQ0FBTyxFQUFFSCxFQUFGO0FBRVA7O0FBRURELEdBQUVFLEtBQUcsQ0FBTCxJQUFVSixDQUFWO0FBRUEiLCJmaWxlIjoiX2Rpdl9saW1iX3BhcnRpYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRGl2aWRlcyBhIGJpZyBlbmRpYW4gbnVtYmVyIGJ5IGEgc2luZ2xlIGxpbWIgbnVtYmVyLlxuICogQ2FuIG9ubHkgd29yayB3aXRoIGxpbWJzIG9mIHNpemUgYXQgbW9zdCBzcXJ0KCAyXjUzICkuXG4gKiBBbGxvd3MgdG8gc3RhcnQgd2l0aCBhIHBhcnRpYWwgcXVvdGllbnQuXG4gKlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBfZGl2X2xpbWJfcGFydGlhbCAoIHIgLCB4ICwgeiAsIGEgLCBhaSAsIGFqICwgcSAsIHFpICkge1xuXG5cdHdoaWxlICggYWkgPCBhaiApIHtcblxuXHRcdHggKj0gciA7IHggKz0gYVthaV0gO1xuXG5cdFx0cVtxaV0gPSB4IC8geiB8IDAgO1xuXHRcdHggJT0geiA7XG5cdFx0YVthaV0gPSAwIDtcblxuXHRcdCsrcWkgOyArK2FpIDtcblxuXHR9XG5cblx0YVthai0xXSA9IHggO1xuXG59XG4iXX0=