"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._schoolbook_div = _schoolbook_div;


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
		if (_lt(a, ai, aj, b, bi, bj)) return;

		// if A ≥ B, return the quotient 1 and the remainder A - B.
		++q[qi + m - 1];
		_isub(r, a, ai, aj, b, bi, bj);
		return;
	}

	// If m = n + 1, compute the quotient and remainder of A/B
	// using algorithm 3.1 and return them.
	if (m === n + 1) return _schoolbook_div_subroutine(r, a, ai, aj, b, bi, bj, q, qi);

	// 4. A' <- A/β^{m-n-1} and s <- A mod β^{m-n-1}
	var _aj = ai + n + 1;

	// 5. Compute the quotient q' and the remainder r' of A'/B using algorithm 3.1.
	_schoolbook_div_subroutine(r, a, ai, _aj, b, bi, bj, q, qi);

	// 6. Compute the quotient q and remainder r of( β^{m-n-1} r' + s ) / B recursively.
	var ak = _trim_positive(a, ai, _aj);
	_schoolbook_div(r, a, ak, aj, b, bi, bj, q, qi + ak - ai);

	// 7. Return the quotient Q = β^{m-n-1} q' + q and remainder R = r
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2Rpdi9fc2Nob29sYm9va19kaXYuanMiXSwibmFtZXMiOlsiX3NjaG9vbGJvb2tfZGl2IiwiciIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJxIiwicWkiLCJtIiwibiIsIl9sdCIsIl9pc3ViIiwiX3NjaG9vbGJvb2tfZGl2X3N1YnJvdXRpbmUiLCJfYWoiLCJhayIsIl90cmltX3Bvc2l0aXZlIl0sIm1hcHBpbmdzIjoiOzs7OztRQWdCZ0JBLGUsR0FBQUEsZTs7O0FBZGhCOzs7Ozs7Ozs7Ozs7OztBQWNPLFNBQVNBLGVBQVQsQ0FBMkJDLENBQTNCLEVBQStCQyxDQUEvQixFQUFtQ0MsRUFBbkMsRUFBd0NDLEVBQXhDLEVBQTZDQyxDQUE3QyxFQUFpREMsRUFBakQsRUFBc0RDLEVBQXRELEVBQTJEQyxDQUEzRCxFQUErREMsRUFBL0QsRUFBb0U7O0FBRTFFLEtBQU1DLElBQUlOLEtBQUtELEVBQWY7QUFDQSxLQUFNUSxJQUFJSixLQUFLRCxFQUFmOztBQUVBO0FBQ0EsS0FBS0ksSUFBSUMsQ0FBVCxFQUFhOztBQUViLEtBQUtELE1BQU1DLENBQVgsRUFBZTs7QUFFZDtBQUNBLE1BQUtDLElBQUtWLENBQUwsRUFBU0MsRUFBVCxFQUFjQyxFQUFkLEVBQW1CQyxDQUFuQixFQUF1QkMsRUFBdkIsRUFBNEJDLEVBQTVCLENBQUwsRUFBd0M7O0FBRXhDO0FBQ0EsSUFBRUMsRUFBRUMsS0FBR0MsQ0FBSCxHQUFLLENBQVAsQ0FBRjtBQUNBRyxRQUFPWixDQUFQLEVBQVdDLENBQVgsRUFBZUMsRUFBZixFQUFvQkMsRUFBcEIsRUFBeUJDLENBQXpCLEVBQTZCQyxFQUE3QixFQUFrQ0MsRUFBbEM7QUFDQTtBQUVBOztBQUVEO0FBQ0E7QUFDQSxLQUFLRyxNQUFNQyxJQUFJLENBQWYsRUFBbUIsT0FBT0csMkJBQTRCYixDQUE1QixFQUFnQ0MsQ0FBaEMsRUFBb0NDLEVBQXBDLEVBQXlDQyxFQUF6QyxFQUE4Q0MsQ0FBOUMsRUFBa0RDLEVBQWxELEVBQXVEQyxFQUF2RCxFQUE0REMsQ0FBNUQsRUFBZ0VDLEVBQWhFLENBQVA7O0FBR25CO0FBQ0EsS0FBTU0sTUFBTVosS0FBS1EsQ0FBTCxHQUFTLENBQXJCOztBQUVBO0FBQ0FHLDRCQUE0QmIsQ0FBNUIsRUFBZ0NDLENBQWhDLEVBQW9DQyxFQUFwQyxFQUF5Q1ksR0FBekMsRUFBK0NWLENBQS9DLEVBQW1EQyxFQUFuRCxFQUF3REMsRUFBeEQsRUFBNkRDLENBQTdELEVBQWlFQyxFQUFqRTs7QUFFQTtBQUNBLEtBQU1PLEtBQUtDLGVBQWdCZixDQUFoQixFQUFvQkMsRUFBcEIsRUFBeUJZLEdBQXpCLENBQVg7QUFDQWYsaUJBQWlCQyxDQUFqQixFQUFxQkMsQ0FBckIsRUFBeUJjLEVBQXpCLEVBQThCWixFQUE5QixFQUFtQ0MsQ0FBbkMsRUFBdUNDLEVBQXZDLEVBQTRDQyxFQUE1QyxFQUFpREMsQ0FBakQsRUFBcURDLEtBQUtPLEVBQUwsR0FBVWIsRUFBL0Q7O0FBRUE7QUFFQSIsImZpbGUiOiJfc2Nob29sYm9va19kaXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyoqXG4gKlxuICogSW5wdXRcbiAqIC0tLS0tXG4gKlxuICogIFR3byBpbnRlZ2VycyBBIGFuZCBCIHN1Y2ggdGhhdCByXihtLTEpIDw9IEEgPCByXm0gYW5kIChyXm4pLzIgPD0gQiA8IHJeKG4pLlxuICpcbiAqIE91dHB1dFxuICogLS0tLS1cbiAqXG4gKiAgVGhlIHF1b3RpZW50IGZsb29yKCBBL0IgKSBhbmQgdGhlIHJlbWFpbmRlciBBIG1vZCBCLlxuICpcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX3NjaG9vbGJvb2tfZGl2ICggciAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogLCBxICwgcWkgKSB7XG5cblx0Y29uc3QgbSA9IGFqIC0gYWkgO1xuXHRjb25zdCBuID0gYmogLSBiaSA7XG5cblx0Ly8gSWYgbSA8IG4sIHJldHVybiB0aGUgcXVvdGllbnQgMCBhbmQgdGhlIHJlbWFpbmRlciBBLlxuXHRpZiAoIG0gPCBuICkgcmV0dXJuIDtcblxuXHRpZiAoIG0gPT09IG4gKSB7XG5cblx0XHQvLyBJZiBtID0gbiwgdGhlbiBpZiBBIDwgQiwgcmV0dXJuIHRoZSBxdW90aWVudCAwIGFuZCB0aGUgcmVtYWluZGVyIEE7XG5cdFx0aWYgKCBfbHQoIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogKSApIHJldHVybiA7XG5cblx0XHQvLyBpZiBBIOKJpSBCLCByZXR1cm4gdGhlIHF1b3RpZW50IDEgYW5kIHRoZSByZW1haW5kZXIgQSAtIEIuXG5cdFx0KytxW3FpK20tMV0gO1xuXHRcdF9pc3ViKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIDtcblx0XHRyZXR1cm4gO1xuXG5cdH1cblxuXHQvLyBJZiBtID0gbiArIDEsIGNvbXB1dGUgdGhlIHF1b3RpZW50IGFuZCByZW1haW5kZXIgb2YgQS9CXG5cdC8vIHVzaW5nIGFsZ29yaXRobSAzLjEgYW5kIHJldHVybiB0aGVtLlxuXHRpZiAoIG0gPT09IG4gKyAxICkgcmV0dXJuIF9zY2hvb2xib29rX2Rpdl9zdWJyb3V0aW5lKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiAsIHEgLCBxaSApIDtcblxuXG5cdC8vIDQuIEEnIDwtIEEvzrJee20tbi0xfSBhbmQgcyA8LSBBIG1vZCDOsl57bS1uLTF9XG5cdGNvbnN0IF9haiA9IGFpICsgbiArIDEgO1xuXG5cdC8vIDUuIENvbXB1dGUgdGhlIHF1b3RpZW50IHEnIGFuZCB0aGUgcmVtYWluZGVyIHInIG9mIEEnL0IgdXNpbmcgYWxnb3JpdGhtIDMuMS5cblx0X3NjaG9vbGJvb2tfZGl2X3N1YnJvdXRpbmUoIHIgLCBhICwgYWkgLCBfYWogLCBiICwgYmkgLCBiaiAsIHEgLCBxaSApIDtcblxuXHQvLyA2LiBDb21wdXRlIHRoZSBxdW90aWVudCBxIGFuZCByZW1haW5kZXIgciBvZiggzrJee20tbi0xfSByJyArIHMgKSAvIEIgcmVjdXJzaXZlbHkuXG5cdGNvbnN0IGFrID0gX3RyaW1fcG9zaXRpdmUoIGEgLCBhaSAsIF9haiApIDtcblx0X3NjaG9vbGJvb2tfZGl2KCByICwgYSAsIGFrICwgYWogLCBiICwgYmkgLCBiaiAsIHEgLCBxaSArIGFrIC0gYWkgKSA7XG5cblx0Ly8gNy4gUmV0dXJuIHRoZSBxdW90aWVudCBRID0gzrJee20tbi0xfSBxJyArIHEgYW5kIHJlbWFpbmRlciBSID0gclxuXG59XG4iXX0=