import assert from 'assert';

/**
 * Compares two big endian arrays.
 *
 * Input:
 *   - |A| = |B|
 *
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 *
 * @return {Number} 1 if a > b; 0 if a = b; -1 otherwise.
 */

export function _cmp_n(a, ai, aj, b, bi) {
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0);
	assert(b.length - bi >= aj - ai);

	for (; ai < aj; ++ai, ++bi) {
		if (a[ai] > b[bi]) return 1;
		if (a[ai] < b[bi]) return -1;
	}

	return 0;
}
