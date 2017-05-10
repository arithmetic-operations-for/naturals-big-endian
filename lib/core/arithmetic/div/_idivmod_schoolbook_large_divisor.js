'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._idivmod_schoolbook_large_divisor = _idivmod_schoolbook_large_divisor;

var _convert = require('../../convert');

var _compare = require('../../compare');

var _ = require('..');

var _2 = require('.');

/**
 * Input
 * -----
 *  - Two integers A and B such that r^(m-1) <= A < r^m and (r^n)/2 <= B < r^(n).
 *  - No leading zeros
 *
 * Output
 * -----
 *  The quotient floor( A/B ) and the remainder A mod B.
 *
 * @param {Number} r The radix.
 * @param {Array} a Dividend.
 * @param {Number} ai Left of dividend.
 * @param {Number} aj Right of dividend.
 * @param {Array} b Divisor.
 * @param {Number} bi Left of divisor.
 * @param {Number} bj Right of divisor.
 * @param {Array} q Quotient.
 * @param {Number} qi Left of quotient.
 */
function _idivmod_schoolbook_large_divisor(r, a, ai, aj, b, bi, bj, q, qi) {

	var m = aj - ai;
	var n = bj - bi;

	// If m < n, return the quotient 0 and the remainder A.
	if (m < n) return;

	if (m === n) {

		// If m = n, then if A < B, return the quotient 0 and the remainder A;
		if ((0, _compare._lt)(a, ai, aj, b, bi, bj)) return;

		// if A ≥ B, return the quotient 1 and the remainder A - B.
		++q[qi + m - 1];
		(0, _._isub)(r, a, ai, aj, b, bi, bj);
		return;
	}

	// If m = n + 1, compute the quotient and remainder of A/B
	// using algorithm 3.1 and return them.
	if (m === n + 1) return (0, _2._idivmod_schoolbook_subroutine)(r, a, ai, aj, b, bi, bj, q, qi);

	// 4. A' <- A/β^{m-n-1} and s <- A mod β^{m-n-1}
	var _aj = ai + n + 1;

	// 5. Compute the quotient q' and the remainder r' of A'/B using algorithm 3.1.
	(0, _2._idivmod_schoolbook_subroutine)(r, a, ai, _aj, b, bi, bj, q, qi);

	// 6. Compute the quotient q and remainder r of( β^{m-n-1} r' + s ) / B recursively.
	var ak = (0, _convert._trim_positive)(a, ai, _aj);
	_idivmod_schoolbook_large_divisor(r, a, ak, aj, b, bi, bj, q, qi + ak - ai);

	// 7. Return the quotient Q = β^{m-n-1} q' + q and remainder R = r
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZGl2L19pZGl2bW9kX3NjaG9vbGJvb2tfbGFyZ2VfZGl2aXNvci5qcyJdLCJuYW1lcyI6WyJfaWRpdm1vZF9zY2hvb2xib29rX2xhcmdlX2Rpdmlzb3IiLCJyIiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsInEiLCJxaSIsIm0iLCJuIiwiX2FqIiwiYWsiXSwibWFwcGluZ3MiOiI7Ozs7O1FBeUJnQkEsaUMsR0FBQUEsaUM7O0FBekJoQjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQk8sU0FBU0EsaUNBQVQsQ0FBNkNDLENBQTdDLEVBQWlEQyxDQUFqRCxFQUFxREMsRUFBckQsRUFBMERDLEVBQTFELEVBQStEQyxDQUEvRCxFQUFtRUMsRUFBbkUsRUFBd0VDLEVBQXhFLEVBQTZFQyxDQUE3RSxFQUFpRkMsRUFBakYsRUFBc0Y7O0FBRTVGLEtBQU1DLElBQUlOLEtBQUtELEVBQWY7QUFDQSxLQUFNUSxJQUFJSixLQUFLRCxFQUFmOztBQUVBO0FBQ0EsS0FBS0ksSUFBSUMsQ0FBVCxFQUFhOztBQUViLEtBQUtELE1BQU1DLENBQVgsRUFBZTs7QUFFZDtBQUNBLE1BQUssa0JBQUtULENBQUwsRUFBU0MsRUFBVCxFQUFjQyxFQUFkLEVBQW1CQyxDQUFuQixFQUF1QkMsRUFBdkIsRUFBNEJDLEVBQTVCLENBQUwsRUFBd0M7O0FBRXhDO0FBQ0EsSUFBRUMsRUFBRUMsS0FBR0MsQ0FBSCxHQUFLLENBQVAsQ0FBRjtBQUNBLGVBQU9ULENBQVAsRUFBV0MsQ0FBWCxFQUFlQyxFQUFmLEVBQW9CQyxFQUFwQixFQUF5QkMsQ0FBekIsRUFBNkJDLEVBQTdCLEVBQWtDQyxFQUFsQztBQUNBO0FBRUE7O0FBRUQ7QUFDQTtBQUNBLEtBQUtHLE1BQU1DLElBQUksQ0FBZixFQUFtQixPQUFPLHVDQUFnQ1YsQ0FBaEMsRUFBb0NDLENBQXBDLEVBQXdDQyxFQUF4QyxFQUE2Q0MsRUFBN0MsRUFBa0RDLENBQWxELEVBQXNEQyxFQUF0RCxFQUEyREMsRUFBM0QsRUFBZ0VDLENBQWhFLEVBQW9FQyxFQUFwRSxDQUFQOztBQUduQjtBQUNBLEtBQU1HLE1BQU1ULEtBQUtRLENBQUwsR0FBUyxDQUFyQjs7QUFFQTtBQUNBLHdDQUFnQ1YsQ0FBaEMsRUFBb0NDLENBQXBDLEVBQXdDQyxFQUF4QyxFQUE2Q1MsR0FBN0MsRUFBbURQLENBQW5ELEVBQXVEQyxFQUF2RCxFQUE0REMsRUFBNUQsRUFBaUVDLENBQWpFLEVBQXFFQyxFQUFyRTs7QUFFQTtBQUNBLEtBQU1JLEtBQUssNkJBQWdCWCxDQUFoQixFQUFvQkMsRUFBcEIsRUFBeUJTLEdBQXpCLENBQVg7QUFDQVosbUNBQW1DQyxDQUFuQyxFQUF1Q0MsQ0FBdkMsRUFBMkNXLEVBQTNDLEVBQWdEVCxFQUFoRCxFQUFxREMsQ0FBckQsRUFBeURDLEVBQXpELEVBQThEQyxFQUE5RCxFQUFtRUMsQ0FBbkUsRUFBdUVDLEtBQUtJLEVBQUwsR0FBVVYsRUFBakY7O0FBRUE7QUFFQSIsImZpbGUiOiJfaWRpdm1vZF9zY2hvb2xib29rX2xhcmdlX2Rpdmlzb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfdHJpbV9wb3NpdGl2ZSB9IGZyb20gJy4uLy4uL2NvbnZlcnQnIDtcbmltcG9ydCB7IF9sdCB9IGZyb20gJy4uLy4uL2NvbXBhcmUnIDtcbmltcG9ydCB7IF9pc3ViIH0gZnJvbSAnLi4nIDtcbmltcG9ydCB7IF9pZGl2bW9kX3NjaG9vbGJvb2tfc3Vicm91dGluZSB9IGZyb20gJy4nIDtcblxuLyoqXG4gKiBJbnB1dFxuICogLS0tLS1cbiAqICAtIFR3byBpbnRlZ2VycyBBIGFuZCBCIHN1Y2ggdGhhdCByXihtLTEpIDw9IEEgPCByXm0gYW5kIChyXm4pLzIgPD0gQiA8IHJeKG4pLlxuICogIC0gTm8gbGVhZGluZyB6ZXJvc1xuICpcbiAqIE91dHB1dFxuICogLS0tLS1cbiAqICBUaGUgcXVvdGllbnQgZmxvb3IoIEEvQiApIGFuZCB0aGUgcmVtYWluZGVyIEEgbW9kIEIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgVGhlIHJhZGl4LlxuICogQHBhcmFtIHtBcnJheX0gYSBEaXZpZGVuZC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBhaSBMZWZ0IG9mIGRpdmlkZW5kLlxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIFJpZ2h0IG9mIGRpdmlkZW5kLlxuICogQHBhcmFtIHtBcnJheX0gYiBEaXZpc29yLlxuICogQHBhcmFtIHtOdW1iZXJ9IGJpIExlZnQgb2YgZGl2aXNvci5cbiAqIEBwYXJhbSB7TnVtYmVyfSBiaiBSaWdodCBvZiBkaXZpc29yLlxuICogQHBhcmFtIHtBcnJheX0gcSBRdW90aWVudC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBxaSBMZWZ0IG9mIHF1b3RpZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gX2lkaXZtb2Rfc2Nob29sYm9va19sYXJnZV9kaXZpc29yICggciAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogLCBxICwgcWkgKSB7XG5cblx0Y29uc3QgbSA9IGFqIC0gYWkgO1xuXHRjb25zdCBuID0gYmogLSBiaSA7XG5cblx0Ly8gSWYgbSA8IG4sIHJldHVybiB0aGUgcXVvdGllbnQgMCBhbmQgdGhlIHJlbWFpbmRlciBBLlxuXHRpZiAoIG0gPCBuICkgcmV0dXJuIDtcblxuXHRpZiAoIG0gPT09IG4gKSB7XG5cblx0XHQvLyBJZiBtID0gbiwgdGhlbiBpZiBBIDwgQiwgcmV0dXJuIHRoZSBxdW90aWVudCAwIGFuZCB0aGUgcmVtYWluZGVyIEE7XG5cdFx0aWYgKCBfbHQoIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogKSApIHJldHVybiA7XG5cblx0XHQvLyBpZiBBIOKJpSBCLCByZXR1cm4gdGhlIHF1b3RpZW50IDEgYW5kIHRoZSByZW1haW5kZXIgQSAtIEIuXG5cdFx0KytxW3FpK20tMV0gO1xuXHRcdF9pc3ViKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIDtcblx0XHRyZXR1cm4gO1xuXG5cdH1cblxuXHQvLyBJZiBtID0gbiArIDEsIGNvbXB1dGUgdGhlIHF1b3RpZW50IGFuZCByZW1haW5kZXIgb2YgQS9CXG5cdC8vIHVzaW5nIGFsZ29yaXRobSAzLjEgYW5kIHJldHVybiB0aGVtLlxuXHRpZiAoIG0gPT09IG4gKyAxICkgcmV0dXJuIF9pZGl2bW9kX3NjaG9vbGJvb2tfc3Vicm91dGluZSggciAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogLCBxICwgcWkgKSA7XG5cblxuXHQvLyA0LiBBJyA8LSBBL86yXnttLW4tMX0gYW5kIHMgPC0gQSBtb2QgzrJee20tbi0xfVxuXHRjb25zdCBfYWogPSBhaSArIG4gKyAxIDtcblxuXHQvLyA1LiBDb21wdXRlIHRoZSBxdW90aWVudCBxJyBhbmQgdGhlIHJlbWFpbmRlciByJyBvZiBBJy9CIHVzaW5nIGFsZ29yaXRobSAzLjEuXG5cdF9pZGl2bW9kX3NjaG9vbGJvb2tfc3Vicm91dGluZSggciAsIGEgLCBhaSAsIF9haiAsIGIgLCBiaSAsIGJqICwgcSAsIHFpICkgO1xuXG5cdC8vIDYuIENvbXB1dGUgdGhlIHF1b3RpZW50IHEgYW5kIHJlbWFpbmRlciByIG9mKCDOsl57bS1uLTF9IHInICsgcyApIC8gQiByZWN1cnNpdmVseS5cblx0Y29uc3QgYWsgPSBfdHJpbV9wb3NpdGl2ZSggYSAsIGFpICwgX2FqICkgO1xuXHRfaWRpdm1vZF9zY2hvb2xib29rX2xhcmdlX2Rpdmlzb3IoIHIgLCBhICwgYWsgLCBhaiAsIGIgLCBiaSAsIGJqICwgcSAsIHFpICsgYWsgLSBhaSApIDtcblxuXHQvLyA3LiBSZXR1cm4gdGhlIHF1b3RpZW50IFEgPSDOsl57bS1uLTF9IHEnICsgcSBhbmQgcmVtYWluZGVyIFIgPSByXG5cbn1cbiJdfQ==