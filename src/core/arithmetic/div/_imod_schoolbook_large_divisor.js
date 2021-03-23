import assert from 'assert';

import {_trim_positive} from '../../convert/_trim_positive.js';
import {lt} from '../../../api/compare/lt.js';
import {_isub} from '../sub/index.js';
import {_imod_schoolbook_subroutine} from './_imod_schoolbook_subroutine.js';

import {_cmp_half} from '../../compare/index.js';

/**
 * Input
 * -----
 *  - Two integers A and B such that r^(m-1) <= A < r^m and (r^n)/2 <= B < r^(n).
 *  - No leading zeros (ONLY IN B?)
 *
 * Output
 * -----
 *  The remainder A mod B.
 *
 * @param {Number} r The radix.
 * @param {Array} a Dividend.
 * @param {Number} ai Left of dividend.
 * @param {Number} aj Right of dividend.
 * @param {Array} b Divisor.
 * @param {Number} bi Left of divisor.
 * @param {Number} bj Right of divisor.
 */
export function _imod_schoolbook_large_divisor(r, a, ai, aj, b, bi, bj) {
	assert(r >= 2);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	// Assert(aj - ai <= 0 || a[ai] !== 0); // no leading zero NOT TRUE ?
	assert(_cmp_half(r, b, bi, bj) >= 0); // (r^n)/2 <= B < r^n (+ no leading zero)

	while (true) {
		// Non-recursive

		const m = aj - ai;
		const n = bj - bi;

		// If m < n, return the remainder A.
		if (m < n) return;

		if (m === n) {
			// If m = n, then if A < B, return the remainder A;
			if (lt(a, ai, aj, b, bi, bj)) return;

			// If A ≥ B, return the remainder A - B.
			_isub(r, a, ai, aj, b, bi, bj);
			return;
		}

		// If m = n + 1, compute the remainder of A/B
		// using algorithm 3.1 and return them.
		if (m === n + 1)
			return _imod_schoolbook_subroutine(r, a, ai, aj, b, bi, bj);

		// 4. A' <- A/β^{m-n-1} and s <- A mod β^{m-n-1}
		const _aj = ai + n + 1;

		// 5. Compute the remainder r' of A'/B using algorithm 3.1.
		_imod_schoolbook_subroutine(r, a, ai, _aj, b, bi, bj);

		// 6. Compute the remainder r of( β^{m-n-1} r' + s ) / B recursively.
		const ak = _trim_positive(a, ai, _aj);
		// _imod_schoolbook_large_divisor( r , a , ak , aj , b , bi , bj ) ;
		// non recursive because some implementation
		ai = ak; // Do not have tail-call optimization ?

		// 7. Return the remainder R = r
	}
}
