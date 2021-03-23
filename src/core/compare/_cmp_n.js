import assert from 'assert';

/**
 * Compares two big endian arrays.
 *
 * Input:
 *   - |A| = |B|
 *
 * @param {number[]} a first operand
 * @param {number} ai a left
 * @param {number} aj a right
 * @param {number[]} b second operand
 * @param {number} bi b left
 *
 * @return {number} 1 if a > b; 0 if a = b; -1 otherwise.
 */

export default function _cmp_n(a, ai, aj, b, bi) {
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0);
	assert(b.length - bi >= aj - ai);

	for (; ai < aj; ++ai, ++bi) {
		if (a[ai] > b[bi]) return 1;
		if (a[ai] < b[bi]) return -1;
	}

	return 0;
}
