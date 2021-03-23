import assert from 'assert';

import {jz} from '../../api/compare/index.js';

/**
 * Compares a number A with size n = |A| to R = (r^n)/2.
 * When n=0, R=1/2, hence result is -1.
 *
 * @param {int} r the base
 * @param {array} a first operand
 * @param {int} ai a left
 * @param {int} aj a right
 *
 * @return {int} result 1 if A > R; 0 if a = R; -1 otherwise.
 */

export function _cmp_half(r, a, ai, aj) {
	assert(r >= 2);

	const _r = Math.floor(r / 2) | 0;

	if (r % 2 === 0) return _cmp_half_even_radix(_r, a, ai, aj);
	return _cmp_half_odd_radix(_r, a, ai, aj);
}

export function _cmp_half_even_radix(_r, a, ai, aj) {
	assert(_r >= 1);
	assert(ai >= 0 && aj <= a.length);

	if (ai >= aj || a[ai] < _r) return -1;
	if (a[ai] > _r) return 1;
	return jz(a, ai + 1, aj) ? 0 : 1;
}

export function _cmp_half_odd_radix(_r, a, ai, aj) {
	assert(_r >= 1);
	assert(ai >= 0 && aj <= a.length);

	for (; ai < aj; ++ai) {
		if (a[ai] > _r) return 1;
		if (a[ai] < _r) return -1;
	}

	return -1;
}
