import assert from 'assert';

/**
 * Fill the input limb array with a fixed value.
 *
 * @param {number[]} a input limb array
 * @param {number} ai
 * @param {number} aj
 * @param {number} v the value used to fill the input array
 */
export default function _fill(a, ai, aj, v) {
	assert(ai >= 0);
	assert(aj <= a.length);
	assert(aj - ai >= 0);
	assert(typeof v === 'number');

	for (let i = ai; i < aj; ++i) a[i] = v;
}
