import assert from 'assert';

/**
 * Returns true if and only if input number A is 0.
 *
 * Returns true if aj <= ai.
 * O(|A|) time in the worst case.
 * O(1) time if A has no leading zero.
 *
 * @param {number[]} a first operand
 * @param {number} ai a left
 * @param {number} aj a right
 * @return {boolean} true if and only if input number is 0.
 */

export default function jz(a, ai, aj) {
	assert(ai >= 0 && aj <= a.length);

	for (; ai < aj; ++ai) if (a[ai] !== 0) return false;

	return true;
}
