import assert from 'assert';

import {_cmp_n} from './_cmp_n.js';

/**
 * Compares two big endian arrays.
 *
 * Input:
 *   - |A| >= |B| >= 0
 *
 * @param {array} a first operand
 * @param {int} ai a left
 * @param {int} aj a right
 * @param {array} b second operand
 * @param {int} bi b left
 * @param {int} bj b right
 *
 * @return {int} result 1 if a > b; 0 if a = b; -1 otherwise.
 */

export function _cmp(a, ai, aj, b, bi, bj) {
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(aj - ai >= bj - bi);
	assert(bj - bi >= 0);

	const tmp = aj - bj + bi;

	for (; ai < tmp; ++ai) if (a[ai] > 0) return 1;

	assert(aj - ai === bj - bi);
	return _cmp_n(a, ai, aj, b, bi);
}
