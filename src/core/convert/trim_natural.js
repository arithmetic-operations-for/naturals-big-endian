import _alloc from '../array/_alloc.js';
import _copy from '../array/_copy.js';
import _trim_positive from './_trim_positive.js';

/**
 * Trim a limb array so that it is either [0] or does not start with any
 * leading zeros. Return a newly allocated array and does not modify the input.
 *
 * @param {number[]} a The input limb array.
 * @param {number} ai
 * @param {number} aj
 *
 * @return {number[]} The input but trimmed.
 */
export default function trim_natural(a, ai, aj) {
	const x = _trim_positive(a, ai, aj);

	if (x >= aj) return [0];

	const b = _alloc(aj - x);

	_copy(a, x, aj, b, 0);

	return b;
}
