import assert from 'assert';

import {_cmp_n, _cmp_half} from '../../compare/index.js';
import {_isub} from '../sub/index.js';
import {_imod_schoolbook_subroutine_do} from './_imod_schoolbook_subroutine_do.js';

/**
 * Input
 * -----
 *  - Two integers A and B such that 0 <= A < β^(n+1) and (β^n)/2 <= B < β^n.
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
export function _imod_schoolbook_subroutine(r, a, ai, aj, b, bi, bj) {
	assert(r >= 2);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(aj - ai === bj - bi + 1); // |A| = |B| + 1
	assert(_cmp_half(r, b, bi, bj) >= 0); // (β^n)/2 <= B < β^n

	// If A ≥ B*β, compute the remainder r of ( A − B*β ) / B
	// and return it.
	// Note that then A − B*β < B*β since A < 2 B*β because of the
	// preconditions above. Hence the preconditions hold for
	// _imod_schoolbook_subroutine_do.
	if (_cmp_n(a, ai, aj - 1, b, bi) >= 0) {
		_isub(r, a, ai, aj - 1, b, bi, bj);
	}

	_imod_schoolbook_subroutine_do(r, a, ai, aj, b, bi, bj);
}
