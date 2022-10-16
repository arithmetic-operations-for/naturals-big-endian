import assert from 'assert';
import _fill from './_fill.js';

/**
 * Fill the input limb array with zeros.
 *
 * @param {number[]} a input limb array
 * @param {number} ai
 * @param {number} aj
 */
export default function _reset(a, ai, aj) {
	assert(ai >= 0);
	assert(aj <= a.length);
	assert(aj - ai >= 0);

	_fill(a, ai, aj, 0);
}
