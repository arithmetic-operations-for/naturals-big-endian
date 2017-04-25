'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._div_limb = _div_limb;

var _ = require('.');

/**
 *
 * Divides a big endian number by a single limb number.
 * Can only work with limbs of size at most sqrt( 2^53 ).
 *
 * r <= x
 */

function _div_limb(r, z, a, ai, aj, q, qi) {

  (0, _._div_limb_partial)(r, 0, z, a, ai, aj, q, qi);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZGl2L19kaXZfbGltYi5qcyJdLCJuYW1lcyI6WyJfZGl2X2xpbWIiLCJyIiwieiIsImEiLCJhaSIsImFqIiwicSIsInFpIl0sIm1hcHBpbmdzIjoiOzs7OztRQVVnQkEsUyxHQUFBQSxTOztBQVZoQjs7QUFFQTs7Ozs7Ozs7QUFRTyxTQUFTQSxTQUFULENBQXFCQyxDQUFyQixFQUF5QkMsQ0FBekIsRUFBNkJDLENBQTdCLEVBQWlDQyxFQUFqQyxFQUFzQ0MsRUFBdEMsRUFBMkNDLENBQTNDLEVBQStDQyxFQUEvQyxFQUFvRDs7QUFFMUQsMkJBQW1CTixDQUFuQixFQUF1QixDQUF2QixFQUEyQkMsQ0FBM0IsRUFBK0JDLENBQS9CLEVBQW1DQyxFQUFuQyxFQUF3Q0MsRUFBeEMsRUFBNkNDLENBQTdDLEVBQWlEQyxFQUFqRDtBQUVBIiwiZmlsZSI6Il9kaXZfbGltYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kaXZfbGltYl9wYXJ0aWFsIH0gZnJvbSAnLicgO1xuXG4vKipcbiAqXG4gKiBEaXZpZGVzIGEgYmlnIGVuZGlhbiBudW1iZXIgYnkgYSBzaW5nbGUgbGltYiBudW1iZXIuXG4gKiBDYW4gb25seSB3b3JrIHdpdGggbGltYnMgb2Ygc2l6ZSBhdCBtb3N0IHNxcnQoIDJeNTMgKS5cbiAqXG4gKiByIDw9IHhcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX2Rpdl9saW1iICggciAsIHogLCBhICwgYWkgLCBhaiAsIHEgLCBxaSApIHtcblxuXHRfZGl2X2xpbWJfcGFydGlhbCggciAsIDAgLCB6ICwgYSAsIGFpICwgYWogLCBxICwgcWkgKSA7XG5cbn1cbiJdfQ==