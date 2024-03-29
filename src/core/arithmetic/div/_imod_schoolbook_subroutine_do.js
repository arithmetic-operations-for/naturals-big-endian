import assert from 'assert';

import gt from '../../../api/compare/gt.js';
import _zeros from '../../array/_zeros.js';
import _cmp_half from '../../compare/_cmp_half.js';
import _mul_limb from '../mul/_mul_limb.js';
import _isub from '../sub/_isub.js';

/**
 * Input
 * -----
 *  - Two integers A and B such that 0 <= A < B * β and (β^n)/2 <= B < β^n.
 *    (Hence B >= 1).
 *  - |A| = |B| + 1
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
export default function _imod_schoolbook_subroutine_do(
	r,
	a,
	ai,
	aj,
	b,
	bi,
	bj,
) {
	assert(r >= 2);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(aj - ai === bj - bi + 1); // |a| = |b| + 1
	assert(_cmp_half(r, b, bi, bj) >= 0); // (r^n)/2 <= B < r^n
	assert(gt(b, bi, bj, a, ai, aj - 1)); // A < B * β

	const m = aj - ai;

	// Since A < B*β, then A/B < β
	// q <- min [ ( β a_0 + a_1 ) / b_0 , β - 1 ]
	const _q = Math.min(r - 1, Math.floor((a[ai] * r + a[ai + 1]) / b[bi]));

	// Fix _q
	const T = _zeros(m);
	_mul_limb(r, _q, b, bi, bj, T, 0, m);

	if (gt(T, 0, m, a, ai, aj)) {
		// --_q ;
		_isub(r, T, 0, m, b, bi, bj);

		if (gt(T, 0, m, a, ai, aj)) {
			// --_q ;
			_isub(r, T, 0, m, b, bi, bj);
		}
	}

	_isub(r, a, ai, aj, T, 0, m);
}
