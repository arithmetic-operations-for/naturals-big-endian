import _cmp from '../../core/compare/_cmp.js';

/**
 * Compares two big endian arrays with little constraints on the operands.
 *
 * Input:
 *   - |A| >= 0
 *   - |B| >= 0
 *
 * @param {number[]} a first operand
 * @param {number} ai a left
 * @param {number} aj a right
 * @param {number[]} b second operand
 * @param {number} bi b left
 * @param {number} bj b right
 *
 * @return {number} result 1 if a > b; 0 if a = b; -1 otherwise.
 */

export default function cmp(a, ai, aj, b, bi, bj) {
	if (aj - ai < bj - bi) return -_cmp(b, bi, bj, a, ai, aj);
	return _cmp(a, ai, aj, b, bi, bj);
}
