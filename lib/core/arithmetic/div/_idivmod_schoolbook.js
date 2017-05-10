'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._idivmod_schoolbook = _idivmod_schoolbook;

var _array = require('../../array');

var _mul = require('../mul');

var _ = require('.');

/**
 * Computes q <- a / b and a <- a % b.
 * No leading zeros allowed.
 * q has length at least aj - ai
 *
 * @param {Number} r The radix.
 * @param {Array} a Dividend / Remainder.
 * @param {Number} ai
 * @param {Number} aj
 * @param {Array} b Divisor.
 * @param {Number} bi
 * @param {Number} bj
 * @param {Array} q Quotient.
 * @param {Number} qi
 */
function _idivmod_schoolbook(r, a, ai, aj, b, bi, bj, q, qi) {

	var _r = Math.ceil(r / 2);
	var x = b[bi];

	if (x < _r) {

		// we need x to be >= _r so we multiply b by ceil( _r / x )
		// this gives us <= ( 1 + _r / x ) b < r^(bj-bi)
		// (this can be implemented faster using bit shifts if r = 2^k )
		var z = Math.ceil(_r / x);
		var m = aj - ai + 1;
		var n = bj - bi;

		var _a = (0, _array._zeros)(m);
		(0, _mul._mul_limb)(r, z, a, ai, aj, _a, 0, m);

		var _b = (0, _array._zeros)(n);
		(0, _mul._mul_limb)(r, z, b, bi, bj, _b, 0, n);

		var _q = (0, _array._zeros)(m);
		(0, _._idivmod_schoolbook_large_divisor)(r, _a, 0, m, _b, 0, n, _q, 0);
		(0, _._div_limb_with_prefix)(r, _a[0], z, _a, 1, m, a, ai);
		(0, _array._copy)(_q, 1, m, q, qi);
	} else (0, _._idivmod_schoolbook_large_divisor)(r, a, ai, aj, b, bi, bj, q, qi);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZGl2L19pZGl2bW9kX3NjaG9vbGJvb2suanMiXSwibmFtZXMiOlsiX2lkaXZtb2Rfc2Nob29sYm9vayIsInIiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIiwicSIsInFpIiwiX3IiLCJNYXRoIiwiY2VpbCIsIngiLCJ6IiwibSIsIm4iLCJfYSIsIl9iIiwiX3EiXSwibWFwcGluZ3MiOiI7Ozs7O1FBbUJnQkEsbUIsR0FBQUEsbUI7O0FBbkJoQjs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FBZU8sU0FBU0EsbUJBQVQsQ0FBK0JDLENBQS9CLEVBQW1DQyxDQUFuQyxFQUF1Q0MsRUFBdkMsRUFBNENDLEVBQTVDLEVBQWlEQyxDQUFqRCxFQUFxREMsRUFBckQsRUFBMERDLEVBQTFELEVBQStEQyxDQUEvRCxFQUFtRUMsRUFBbkUsRUFBd0U7O0FBRTlFLEtBQU1DLEtBQUtDLEtBQUtDLElBQUwsQ0FBV1gsSUFBSSxDQUFmLENBQVg7QUFDQSxLQUFNWSxJQUFJUixFQUFFQyxFQUFGLENBQVY7O0FBRUEsS0FBS08sSUFBSUgsRUFBVCxFQUFjOztBQUViO0FBQ0E7QUFDQTtBQUNBLE1BQU1JLElBQUlILEtBQUtDLElBQUwsQ0FBV0YsS0FBS0csQ0FBaEIsQ0FBVjtBQUNBLE1BQU1FLElBQUlYLEtBQUtELEVBQUwsR0FBVSxDQUFwQjtBQUNBLE1BQU1hLElBQUlULEtBQUtELEVBQWY7O0FBRUEsTUFBTVcsS0FBSyxtQkFBUUYsQ0FBUixDQUFYO0FBQ0Esc0JBQVdkLENBQVgsRUFBZWEsQ0FBZixFQUFtQlosQ0FBbkIsRUFBdUJDLEVBQXZCLEVBQTRCQyxFQUE1QixFQUFpQ2EsRUFBakMsRUFBc0MsQ0FBdEMsRUFBMENGLENBQTFDOztBQUVBLE1BQU1HLEtBQUssbUJBQVFGLENBQVIsQ0FBWDtBQUNBLHNCQUFXZixDQUFYLEVBQWVhLENBQWYsRUFBbUJULENBQW5CLEVBQXVCQyxFQUF2QixFQUE0QkMsRUFBNUIsRUFBaUNXLEVBQWpDLEVBQXNDLENBQXRDLEVBQTBDRixDQUExQzs7QUFFQSxNQUFNRyxLQUFLLG1CQUFRSixDQUFSLENBQVg7QUFDQSwyQ0FBbUNkLENBQW5DLEVBQXVDZ0IsRUFBdkMsRUFBNEMsQ0FBNUMsRUFBZ0RGLENBQWhELEVBQW9ERyxFQUFwRCxFQUF5RCxDQUF6RCxFQUE2REYsQ0FBN0QsRUFBaUVHLEVBQWpFLEVBQXNFLENBQXRFO0FBQ0EsK0JBQXVCbEIsQ0FBdkIsRUFBMkJnQixHQUFHLENBQUgsQ0FBM0IsRUFBbUNILENBQW5DLEVBQXVDRyxFQUF2QyxFQUE0QyxDQUE1QyxFQUFnREYsQ0FBaEQsRUFBb0RiLENBQXBELEVBQXdEQyxFQUF4RDtBQUNBLG9CQUFPZ0IsRUFBUCxFQUFZLENBQVosRUFBZ0JKLENBQWhCLEVBQW9CUCxDQUFwQixFQUF3QkMsRUFBeEI7QUFFQSxFQXBCRCxNQXNCSyx5Q0FBbUNSLENBQW5DLEVBQXVDQyxDQUF2QyxFQUEyQ0MsRUFBM0MsRUFBZ0RDLEVBQWhELEVBQXFEQyxDQUFyRCxFQUF5REMsRUFBekQsRUFBOERDLEVBQTlELEVBQW1FQyxDQUFuRSxFQUF1RUMsRUFBdkU7QUFFTCIsImZpbGUiOiJfaWRpdm1vZF9zY2hvb2xib29rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX3plcm9zICwgX2NvcHkgfSBmcm9tICcuLi8uLi9hcnJheScgO1xuaW1wb3J0IHsgX211bF9saW1iIH0gZnJvbSAnLi4vbXVsJyA7XG5pbXBvcnQgeyBfaWRpdm1vZF9zY2hvb2xib29rX2xhcmdlX2Rpdmlzb3IgLCBfZGl2X2xpbWJfd2l0aF9wcmVmaXggfSBmcm9tICcuJyA7XG5cbi8qKlxuICogQ29tcHV0ZXMgcSA8LSBhIC8gYiBhbmQgYSA8LSBhICUgYi5cbiAqIE5vIGxlYWRpbmcgemVyb3MgYWxsb3dlZC5cbiAqIHEgaGFzIGxlbmd0aCBhdCBsZWFzdCBhaiAtIGFpXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgVGhlIHJhZGl4LlxuICogQHBhcmFtIHtBcnJheX0gYSBEaXZpZGVuZCAvIFJlbWFpbmRlci5cbiAqIEBwYXJhbSB7TnVtYmVyfSBhaVxuICogQHBhcmFtIHtOdW1iZXJ9IGFqXG4gKiBAcGFyYW0ge0FycmF5fSBiIERpdmlzb3IuXG4gKiBAcGFyYW0ge051bWJlcn0gYmlcbiAqIEBwYXJhbSB7TnVtYmVyfSBialxuICogQHBhcmFtIHtBcnJheX0gcSBRdW90aWVudC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBxaVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2lkaXZtb2Rfc2Nob29sYm9vayAoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICwgcSAsIHFpICkge1xuXG5cdGNvbnN0IF9yID0gTWF0aC5jZWlsKCByIC8gMiApIDtcblx0Y29uc3QgeCA9IGJbYmldIDtcblxuXHRpZiAoIHggPCBfciApIHtcblxuXHRcdC8vIHdlIG5lZWQgeCB0byBiZSA+PSBfciBzbyB3ZSBtdWx0aXBseSBiIGJ5IGNlaWwoIF9yIC8geCApXG5cdFx0Ly8gdGhpcyBnaXZlcyB1cyA8PSAoIDEgKyBfciAvIHggKSBiIDwgcl4oYmotYmkpXG5cdFx0Ly8gKHRoaXMgY2FuIGJlIGltcGxlbWVudGVkIGZhc3RlciB1c2luZyBiaXQgc2hpZnRzIGlmIHIgPSAyXmsgKVxuXHRcdGNvbnN0IHogPSBNYXRoLmNlaWwoIF9yIC8geCApIDtcblx0XHRjb25zdCBtID0gYWogLSBhaSArIDEgO1xuXHRcdGNvbnN0IG4gPSBiaiAtIGJpIDtcblxuXHRcdGNvbnN0IF9hID0gX3plcm9zKCBtICkgO1xuXHRcdF9tdWxfbGltYiggciAsIHogLCBhICwgYWkgLCBhaiAsIF9hICwgMCAsIG0gKSA7XG5cblx0XHRjb25zdCBfYiA9IF96ZXJvcyggbiApIDtcblx0XHRfbXVsX2xpbWIoIHIgLCB6ICwgYiAsIGJpICwgYmogLCBfYiAsIDAgLCBuICkgO1xuXG5cdFx0Y29uc3QgX3EgPSBfemVyb3MoIG0gKSA7XG5cdFx0X2lkaXZtb2Rfc2Nob29sYm9va19sYXJnZV9kaXZpc29yKCByICwgX2EgLCAwICwgbSAsIF9iICwgMCAsIG4gLCBfcSAsIDAgKSA7XG5cdFx0X2Rpdl9saW1iX3dpdGhfcHJlZml4KCByICwgX2FbMF0gLCB6ICwgX2EgLCAxICwgbSAsIGEgLCBhaSApIDtcblx0XHRfY29weSggX3EgLCAxICwgbSAsIHEgLCBxaSApIDtcblxuXHR9XG5cblx0ZWxzZSBfaWRpdm1vZF9zY2hvb2xib29rX2xhcmdlX2Rpdmlzb3IoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICwgcSAsIHFpICkgO1xuXG59XG4iXX0=