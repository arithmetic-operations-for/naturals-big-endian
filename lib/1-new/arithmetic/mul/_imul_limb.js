"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._imul_limb = _imul_limb;
/**
 * Multiply b by x where x is a single limb.
 */

function _imul_limb(r, x, b, bi, bj) {

	var C = 0;

	while (--bj >= bi) {

		var t = b[bj] * x + C;
		var u = t % r;

		b[bj] = u;

		C = (t - u) / r;
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL211bC9faW11bF9saW1iLmpzIl0sIm5hbWVzIjpbIl9pbXVsX2xpbWIiLCJyIiwieCIsImIiLCJiaSIsImJqIiwiQyIsInQiLCJ1Il0sIm1hcHBpbmdzIjoiOzs7OztRQUlnQkEsVSxHQUFBQSxVO0FBSmhCOzs7O0FBSU8sU0FBU0EsVUFBVCxDQUFzQkMsQ0FBdEIsRUFBMEJDLENBQTFCLEVBQThCQyxDQUE5QixFQUFrQ0MsRUFBbEMsRUFBdUNDLEVBQXZDLEVBQTRDOztBQUVsRCxLQUFJQyxJQUFJLENBQVI7O0FBRUEsUUFBUSxFQUFFRCxFQUFGLElBQVFELEVBQWhCLEVBQXFCOztBQUVwQixNQUFNRyxJQUFJSixFQUFFRSxFQUFGLElBQVFILENBQVIsR0FBWUksQ0FBdEI7QUFDQSxNQUFNRSxJQUFJRCxJQUFJTixDQUFkOztBQUVBRSxJQUFFRSxFQUFGLElBQVFHLENBQVI7O0FBRUFGLE1BQUksQ0FBQ0MsSUFBSUMsQ0FBTCxJQUFVUCxDQUFkO0FBRUE7QUFFRCIsImZpbGUiOiJfaW11bF9saW1iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNdWx0aXBseSBiIGJ5IHggd2hlcmUgeCBpcyBhIHNpbmdsZSBsaW1iLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBfaW11bF9saW1iICggciAsIHggLCBiICwgYmkgLCBiaiApIHtcblxuXHRsZXQgQyA9IDAgO1xuXG5cdHdoaWxlICggLS1iaiA+PSBiaSApIHtcblxuXHRcdGNvbnN0IHQgPSBiW2JqXSAqIHggKyBDIDtcblx0XHRjb25zdCB1ID0gdCAlIHIgO1xuXG5cdFx0Yltial0gPSB1IDtcblxuXHRcdEMgPSAodCAtIHUpIC8gciA7XG5cblx0fVxuXG59XG4iXX0=