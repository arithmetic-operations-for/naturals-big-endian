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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZGl2L19kaXZfbGltYl9wYXJ0aWFsX2Zhc3QuanMiXSwibmFtZXMiOlsiX2Rpdl9saW1iX3BhcnRpYWxfZmFzdCIsInIiLCJ4IiwieiIsImEiLCJhaSIsImFqIiwicSIsInFpIl0sIm1hcHBpbmdzIjoiOzs7OztRQVNnQkEsc0IsR0FBQUEsc0I7O0FBUmhCOzs7Ozs7OztBQVFPLFNBQVNBLHNCQUFULENBQWtDQyxDQUFsQyxFQUFzQ0MsQ0FBdEMsRUFBMENDLENBQTFDLEVBQThDQyxDQUE5QyxFQUFrREMsRUFBbEQsRUFBdURDLEVBQXZELEVBQTREQyxDQUE1RCxFQUFnRUMsRUFBaEUsRUFBcUU7O0FBRTNFLFNBQVFILEtBQUtDLEVBQWIsRUFBa0I7O0FBRWpCSixTQUFLRCxDQUFMLENBQVNDLEtBQUtFLEVBQUVDLEVBQUYsQ0FBTDs7QUFFVEUsTUFBRUMsRUFBRixJQUFRTixJQUFJQyxDQUFKLEdBQVEsQ0FBaEI7QUFDQUQsU0FBS0MsQ0FBTDs7QUFFQSxNQUFFSyxFQUFGLENBQU8sRUFBRUgsRUFBRjtBQUVQO0FBRUQiLCJmaWxlIjoiX2Rpdl9saW1iX3BhcnRpYWxfZmFzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBEaXZpZGVzIGEgYmlnIGVuZGlhbiBudW1iZXIgYnkgYSBzaW5nbGUgbGltYiBudW1iZXIuXG4gKiBDYW4gb25seSB3b3JrIHdpdGggbGltYnMgb2Ygc2l6ZSBhdCBtb3N0IHNxcnQoIDJeNTMgKS5cbiAqIEFsbG93cyB0byBzdGFydCB3aXRoIGEgcGFydGlhbCBxdW90aWVudC5cbiAqXG4gKiBEb2VzIG5vdCB1cGRhdGUgdGhlIHJlbWFpbmRlci5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX2Rpdl9saW1iX3BhcnRpYWxfZmFzdCAoIHIgLCB4ICwgeiAsIGEgLCBhaSAsIGFqICwgcSAsIHFpICkge1xuXG5cdHdoaWxlICggYWkgPCBhaiApIHtcblxuXHRcdHggKj0gciA7IHggKz0gYVthaV0gO1xuXG5cdFx0cVtxaV0gPSB4IC8geiB8IDAgO1xuXHRcdHggJT0geiA7XG5cblx0XHQrK3FpIDsgKythaSA7XG5cblx0fVxuXG59XG4iXX0=