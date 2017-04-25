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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZGl2L19zY2hvb2xib29rX2Rpdi5qcyJdLCJuYW1lcyI6WyJfc2Nob29sYm9va19kaXYiLCJyIiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsInEiLCJxaSIsIm0iLCJuIiwiX2FqIiwiYWsiXSwibWFwcGluZ3MiOiI7Ozs7O1FBbUJnQkEsZSxHQUFBQSxlOztBQW5CaEI7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY08sU0FBU0EsZUFBVCxDQUEyQkMsQ0FBM0IsRUFBK0JDLENBQS9CLEVBQW1DQyxFQUFuQyxFQUF3Q0MsRUFBeEMsRUFBNkNDLENBQTdDLEVBQWlEQyxFQUFqRCxFQUFzREMsRUFBdEQsRUFBMkRDLENBQTNELEVBQStEQyxFQUEvRCxFQUFvRTs7QUFFMUUsS0FBTUMsSUFBSU4sS0FBS0QsRUFBZjtBQUNBLEtBQU1RLElBQUlKLEtBQUtELEVBQWY7O0FBRUE7QUFDQSxLQUFLSSxJQUFJQyxDQUFULEVBQWE7O0FBRWIsS0FBS0QsTUFBTUMsQ0FBWCxFQUFlOztBQUVkO0FBQ0EsTUFBSyxrQkFBS1QsQ0FBTCxFQUFTQyxFQUFULEVBQWNDLEVBQWQsRUFBbUJDLENBQW5CLEVBQXVCQyxFQUF2QixFQUE0QkMsRUFBNUIsQ0FBTCxFQUF3Qzs7QUFFeEM7QUFDQSxJQUFFQyxFQUFFQyxLQUFHQyxDQUFILEdBQUssQ0FBUCxDQUFGO0FBQ0EsZUFBT1QsQ0FBUCxFQUFXQyxDQUFYLEVBQWVDLEVBQWYsRUFBb0JDLEVBQXBCLEVBQXlCQyxDQUF6QixFQUE2QkMsRUFBN0IsRUFBa0NDLEVBQWxDO0FBQ0E7QUFFQTs7QUFFRDtBQUNBO0FBQ0EsS0FBS0csTUFBTUMsSUFBSSxDQUFmLEVBQW1CLE9BQU8sbUNBQTRCVixDQUE1QixFQUFnQ0MsQ0FBaEMsRUFBb0NDLEVBQXBDLEVBQXlDQyxFQUF6QyxFQUE4Q0MsQ0FBOUMsRUFBa0RDLEVBQWxELEVBQXVEQyxFQUF2RCxFQUE0REMsQ0FBNUQsRUFBZ0VDLEVBQWhFLENBQVA7O0FBR25CO0FBQ0EsS0FBTUcsTUFBTVQsS0FBS1EsQ0FBTCxHQUFTLENBQXJCOztBQUVBO0FBQ0Esb0NBQTRCVixDQUE1QixFQUFnQ0MsQ0FBaEMsRUFBb0NDLEVBQXBDLEVBQXlDUyxHQUF6QyxFQUErQ1AsQ0FBL0MsRUFBbURDLEVBQW5ELEVBQXdEQyxFQUF4RCxFQUE2REMsQ0FBN0QsRUFBaUVDLEVBQWpFOztBQUVBO0FBQ0EsS0FBTUksS0FBSyw2QkFBZ0JYLENBQWhCLEVBQW9CQyxFQUFwQixFQUF5QlMsR0FBekIsQ0FBWDtBQUNBWixpQkFBaUJDLENBQWpCLEVBQXFCQyxDQUFyQixFQUF5QlcsRUFBekIsRUFBOEJULEVBQTlCLEVBQW1DQyxDQUFuQyxFQUF1Q0MsRUFBdkMsRUFBNENDLEVBQTVDLEVBQWlEQyxDQUFqRCxFQUFxREMsS0FBS0ksRUFBTCxHQUFVVixFQUEvRDs7QUFFQTtBQUVBIiwiZmlsZSI6Il9zY2hvb2xib29rX2Rpdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF90cmltX3Bvc2l0aXZlIH0gZnJvbSAnLi4vLi4vY29udmVydCcgO1xuaW1wb3J0IHsgX2x0IH0gZnJvbSAnLi4vLi4vY29tcGFyZScgO1xuaW1wb3J0IHsgX2lzdWIgfSBmcm9tICcuLicgO1xuaW1wb3J0IHsgX3NjaG9vbGJvb2tfZGl2X3N1YnJvdXRpbmUgfSBmcm9tICcuJyA7XG5cbi8qKlxuICpcbiAqIElucHV0XG4gKiAtLS0tLVxuICpcbiAqICBUd28gaW50ZWdlcnMgQSBhbmQgQiBzdWNoIHRoYXQgcl4obS0xKSA8PSBBIDwgcl5tIGFuZCAocl5uKS8yIDw9IEIgPCByXihuKS5cbiAqXG4gKiBPdXRwdXRcbiAqIC0tLS0tXG4gKlxuICogIFRoZSBxdW90aWVudCBmbG9vciggQS9CICkgYW5kIHRoZSByZW1haW5kZXIgQSBtb2QgQi5cbiAqXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9zY2hvb2xib29rX2RpdiAoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICwgcSAsIHFpICkge1xuXG5cdGNvbnN0IG0gPSBhaiAtIGFpIDtcblx0Y29uc3QgbiA9IGJqIC0gYmkgO1xuXG5cdC8vIElmIG0gPCBuLCByZXR1cm4gdGhlIHF1b3RpZW50IDAgYW5kIHRoZSByZW1haW5kZXIgQS5cblx0aWYgKCBtIDwgbiApIHJldHVybiA7XG5cblx0aWYgKCBtID09PSBuICkge1xuXG5cdFx0Ly8gSWYgbSA9IG4sIHRoZW4gaWYgQSA8IEIsIHJldHVybiB0aGUgcXVvdGllbnQgMCBhbmQgdGhlIHJlbWFpbmRlciBBO1xuXHRcdGlmICggX2x0KCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkgKSByZXR1cm4gO1xuXG5cdFx0Ly8gaWYgQSDiiaUgQiwgcmV0dXJuIHRoZSBxdW90aWVudCAxIGFuZCB0aGUgcmVtYWluZGVyIEEgLSBCLlxuXHRcdCsrcVtxaSttLTFdIDtcblx0XHRfaXN1YiggciAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogKSA7XG5cdFx0cmV0dXJuIDtcblxuXHR9XG5cblx0Ly8gSWYgbSA9IG4gKyAxLCBjb21wdXRlIHRoZSBxdW90aWVudCBhbmQgcmVtYWluZGVyIG9mIEEvQlxuXHQvLyB1c2luZyBhbGdvcml0aG0gMy4xIGFuZCByZXR1cm4gdGhlbS5cblx0aWYgKCBtID09PSBuICsgMSApIHJldHVybiBfc2Nob29sYm9va19kaXZfc3Vicm91dGluZSggciAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogLCBxICwgcWkgKSA7XG5cblxuXHQvLyA0LiBBJyA8LSBBL86yXnttLW4tMX0gYW5kIHMgPC0gQSBtb2QgzrJee20tbi0xfVxuXHRjb25zdCBfYWogPSBhaSArIG4gKyAxIDtcblxuXHQvLyA1LiBDb21wdXRlIHRoZSBxdW90aWVudCBxJyBhbmQgdGhlIHJlbWFpbmRlciByJyBvZiBBJy9CIHVzaW5nIGFsZ29yaXRobSAzLjEuXG5cdF9zY2hvb2xib29rX2Rpdl9zdWJyb3V0aW5lKCByICwgYSAsIGFpICwgX2FqICwgYiAsIGJpICwgYmogLCBxICwgcWkgKSA7XG5cblx0Ly8gNi4gQ29tcHV0ZSB0aGUgcXVvdGllbnQgcSBhbmQgcmVtYWluZGVyIHIgb2YoIM6yXnttLW4tMX0gcicgKyBzICkgLyBCIHJlY3Vyc2l2ZWx5LlxuXHRjb25zdCBhayA9IF90cmltX3Bvc2l0aXZlKCBhICwgYWkgLCBfYWogKSA7XG5cdF9zY2hvb2xib29rX2RpdiggciAsIGEgLCBhayAsIGFqICwgYiAsIGJpICwgYmogLCBxICwgcWkgKyBhayAtIGFpICkgO1xuXG5cdC8vIDcuIFJldHVybiB0aGUgcXVvdGllbnQgUSA9IM6yXnttLW4tMX0gcScgKyBxIGFuZCByZW1haW5kZXIgUiA9IHJcblxufVxuIl19