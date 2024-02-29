import _to_string from '../../core/convert/_to_string.js';

import convert from './convert.js';

/**
 * Converts a limb array in base f to a string representation in base t.
 *
 * @param {number} f radix of the limb array
 * @param {number} t radix of the representation
 * @param {number[]} a the input limb array
 * @param {number} ai left bound of the input
 * @param {number} aj non-inclusive right bound of the input
 *
 * @return {string} the resulting representation
 */
export default function stringify(f, t, a, ai, aj) {
	if (t > 36) throw new Error('t > 36 not implemented');

	const b = convert(f, t, a, ai, aj);

	return _to_string(b);
}
