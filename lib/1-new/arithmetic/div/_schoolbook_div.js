'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._schoolbook_div = _schoolbook_div;

var _convert = require('../../convert');

var _compare = require('../../compare');

var _ = require('..');

var _2 = require('.');

/**
 *
 * Input
 * -----
 *
 *  Two integers A and B such that r^(m-1) <= A < r^m and (r^n)/2 <= B < r^(n).
 *
 * Output
 * -----
 *
 *  The quotient floor( A/B ) and the remainder A mod B.
 *
 */

function _schoolbook_div(r, a, ai, aj, b, bi, bj, q, qi) {

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
	if (m === n + 1) return (0, _2._schoolbook_div_subroutine)(r, a, ai, aj, b, bi, bj, q, qi);

	// 4. A' <- A/β^{m-n-1} and s <- A mod β^{m-n-1}
	var _aj = ai + n + 1;

	// 5. Compute the quotient q' and the remainder r' of A'/B using algorithm 3.1.
	(0, _2._schoolbook_div_subroutine)(r, a, ai, _aj, b, bi, bj, q, qi);

	// 6. Compute the quotient q and remainder r of( β^{m-n-1} r' + s ) / B recursively.
	var ak = (0, _convert._trim_positive)(a, ai, _aj);
	_schoolbook_div(r, a, ak, aj, b, bi, bj, q, qi + ak - ai);

	// 7. Return the quotient Q = β^{m-n-1} q' + q and remainder R = r
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2Rpdi9fc2Nob29sYm9va19kaXYuanMiXSwibmFtZXMiOlsiX3NjaG9vbGJvb2tfZGl2IiwiciIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJxIiwicWkiLCJtIiwibiIsIl9haiIsImFrIl0sIm1hcHBpbmdzIjoiOzs7OztRQW1CZ0JBLGUsR0FBQUEsZTs7QUFuQmhCOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQWNPLFNBQVNBLGVBQVQsQ0FBMkJDLENBQTNCLEVBQStCQyxDQUEvQixFQUFtQ0MsRUFBbkMsRUFBd0NDLEVBQXhDLEVBQTZDQyxDQUE3QyxFQUFpREMsRUFBakQsRUFBc0RDLEVBQXRELEVBQTJEQyxDQUEzRCxFQUErREMsRUFBL0QsRUFBb0U7O0FBRTFFLEtBQU1DLElBQUlOLEtBQUtELEVBQWY7QUFDQSxLQUFNUSxJQUFJSixLQUFLRCxFQUFmOztBQUVBO0FBQ0EsS0FBS0ksSUFBSUMsQ0FBVCxFQUFhOztBQUViLEtBQUtELE1BQU1DLENBQVgsRUFBZTs7QUFFZDtBQUNBLE1BQUssa0JBQUtULENBQUwsRUFBU0MsRUFBVCxFQUFjQyxFQUFkLEVBQW1CQyxDQUFuQixFQUF1QkMsRUFBdkIsRUFBNEJDLEVBQTVCLENBQUwsRUFBd0M7O0FBRXhDO0FBQ0EsSUFBRUMsRUFBRUMsS0FBR0MsQ0FBSCxHQUFLLENBQVAsQ0FBRjtBQUNBLGVBQU9ULENBQVAsRUFBV0MsQ0FBWCxFQUFlQyxFQUFmLEVBQW9CQyxFQUFwQixFQUF5QkMsQ0FBekIsRUFBNkJDLEVBQTdCLEVBQWtDQyxFQUFsQztBQUNBO0FBRUE7O0FBRUQ7QUFDQTtBQUNBLEtBQUtHLE1BQU1DLElBQUksQ0FBZixFQUFtQixPQUFPLG1DQUE0QlYsQ0FBNUIsRUFBZ0NDLENBQWhDLEVBQW9DQyxFQUFwQyxFQUF5Q0MsRUFBekMsRUFBOENDLENBQTlDLEVBQWtEQyxFQUFsRCxFQUF1REMsRUFBdkQsRUFBNERDLENBQTVELEVBQWdFQyxFQUFoRSxDQUFQOztBQUduQjtBQUNBLEtBQU1HLE1BQU1ULEtBQUtRLENBQUwsR0FBUyxDQUFyQjs7QUFFQTtBQUNBLG9DQUE0QlYsQ0FBNUIsRUFBZ0NDLENBQWhDLEVBQW9DQyxFQUFwQyxFQUF5Q1MsR0FBekMsRUFBK0NQLENBQS9DLEVBQW1EQyxFQUFuRCxFQUF3REMsRUFBeEQsRUFBNkRDLENBQTdELEVBQWlFQyxFQUFqRTs7QUFFQTtBQUNBLEtBQU1JLEtBQUssNkJBQWdCWCxDQUFoQixFQUFvQkMsRUFBcEIsRUFBeUJTLEdBQXpCLENBQVg7QUFDQVosaUJBQWlCQyxDQUFqQixFQUFxQkMsQ0FBckIsRUFBeUJXLEVBQXpCLEVBQThCVCxFQUE5QixFQUFtQ0MsQ0FBbkMsRUFBdUNDLEVBQXZDLEVBQTRDQyxFQUE1QyxFQUFpREMsQ0FBakQsRUFBcURDLEtBQUtJLEVBQUwsR0FBVVYsRUFBL0Q7O0FBRUE7QUFFQSIsImZpbGUiOiJfc2Nob29sYm9va19kaXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfdHJpbV9wb3NpdGl2ZSB9IGZyb20gJy4uLy4uL2NvbnZlcnQnIDtcbmltcG9ydCB7IF9sdCB9IGZyb20gJy4uLy4uL2NvbXBhcmUnIDtcbmltcG9ydCB7IF9pc3ViIH0gZnJvbSAnLi4nIDtcbmltcG9ydCB7IF9zY2hvb2xib29rX2Rpdl9zdWJyb3V0aW5lIH0gZnJvbSAnLicgO1xuXG4vKipcbiAqXG4gKiBJbnB1dFxuICogLS0tLS1cbiAqXG4gKiAgVHdvIGludGVnZXJzIEEgYW5kIEIgc3VjaCB0aGF0IHJeKG0tMSkgPD0gQSA8IHJebSBhbmQgKHJebikvMiA8PSBCIDwgcl4obikuXG4gKlxuICogT3V0cHV0XG4gKiAtLS0tLVxuICpcbiAqICBUaGUgcXVvdGllbnQgZmxvb3IoIEEvQiApIGFuZCB0aGUgcmVtYWluZGVyIEEgbW9kIEIuXG4gKlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBfc2Nob29sYm9va19kaXYgKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiAsIHEgLCBxaSApIHtcblxuXHRjb25zdCBtID0gYWogLSBhaSA7XG5cdGNvbnN0IG4gPSBiaiAtIGJpIDtcblxuXHQvLyBJZiBtIDwgbiwgcmV0dXJuIHRoZSBxdW90aWVudCAwIGFuZCB0aGUgcmVtYWluZGVyIEEuXG5cdGlmICggbSA8IG4gKSByZXR1cm4gO1xuXG5cdGlmICggbSA9PT0gbiApIHtcblxuXHRcdC8vIElmIG0gPSBuLCB0aGVuIGlmIEEgPCBCLCByZXR1cm4gdGhlIHF1b3RpZW50IDAgYW5kIHRoZSByZW1haW5kZXIgQTtcblx0XHRpZiAoIF9sdCggYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApICkgcmV0dXJuIDtcblxuXHRcdC8vIGlmIEEg4omlIEIsIHJldHVybiB0aGUgcXVvdGllbnQgMSBhbmQgdGhlIHJlbWFpbmRlciBBIC0gQi5cblx0XHQrK3FbcWkrbS0xXSA7XG5cdFx0X2lzdWIoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkgO1xuXHRcdHJldHVybiA7XG5cblx0fVxuXG5cdC8vIElmIG0gPSBuICsgMSwgY29tcHV0ZSB0aGUgcXVvdGllbnQgYW5kIHJlbWFpbmRlciBvZiBBL0Jcblx0Ly8gdXNpbmcgYWxnb3JpdGhtIDMuMSBhbmQgcmV0dXJuIHRoZW0uXG5cdGlmICggbSA9PT0gbiArIDEgKSByZXR1cm4gX3NjaG9vbGJvb2tfZGl2X3N1YnJvdXRpbmUoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICwgcSAsIHFpICkgO1xuXG5cblx0Ly8gNC4gQScgPC0gQS/Osl57bS1uLTF9IGFuZCBzIDwtIEEgbW9kIM6yXnttLW4tMX1cblx0Y29uc3QgX2FqID0gYWkgKyBuICsgMSA7XG5cblx0Ly8gNS4gQ29tcHV0ZSB0aGUgcXVvdGllbnQgcScgYW5kIHRoZSByZW1haW5kZXIgcicgb2YgQScvQiB1c2luZyBhbGdvcml0aG0gMy4xLlxuXHRfc2Nob29sYm9va19kaXZfc3Vicm91dGluZSggciAsIGEgLCBhaSAsIF9haiAsIGIgLCBiaSAsIGJqICwgcSAsIHFpICkgO1xuXG5cdC8vIDYuIENvbXB1dGUgdGhlIHF1b3RpZW50IHEgYW5kIHJlbWFpbmRlciByIG9mKCDOsl57bS1uLTF9IHInICsgcyApIC8gQiByZWN1cnNpdmVseS5cblx0Y29uc3QgYWsgPSBfdHJpbV9wb3NpdGl2ZSggYSAsIGFpICwgX2FqICkgO1xuXHRfc2Nob29sYm9va19kaXYoIHIgLCBhICwgYWsgLCBhaiAsIGIgLCBiaSAsIGJqICwgcSAsIHFpICsgYWsgLSBhaSApIDtcblxuXHQvLyA3LiBSZXR1cm4gdGhlIHF1b3RpZW50IFEgPSDOsl57bS1uLTF9IHEnICsgcSBhbmQgcmVtYWluZGVyIFIgPSByXG5cbn1cbiJdfQ==