import assert from 'assert';

/**
 * Compute the new inclusive left bound of a limb array by skipping all
 * leading zeros.
 *
 * @param {number[]} a The input limb array.
 * @param {number} ai
 * @param {number} aj
 *
 * @return {number} The new inclusive left bound of the input.
 */
export default function _trim_positive(a, ai, aj) {
	assert(ai >= 0 && aj <= a.length);

	while (ai < aj && a[ai] === 0) ++ai;

	return ai;
}
