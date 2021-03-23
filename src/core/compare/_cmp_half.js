import assert from 'assert';

import _cmp_half_even_radix from './_cmp_half_even_radix.js';
import _cmp_half_odd_radix from './_cmp_half_odd_radix.js';

/**
 * Compares a number A with size n = |A| to R = (r^n)/2.
 * When n=0, R=1/2, hence result is -1.
 *
 * @param {Number} r the base
 * @param {array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 *
 * @return {Number} result 1 if A > R; 0 if a = R; -1 otherwise.
 */

export default function _cmp_half(r, a, ai, aj) {
	assert(r >= 2);

	const _r = Math.floor(r / 2) | 0;

	if (r % 2 === 0) return _cmp_half_even_radix(_r, a, ai, aj);
	return _cmp_half_odd_radix(_r, a, ai, aj);
}
