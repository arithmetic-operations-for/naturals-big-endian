import assert from 'assert';

import convert_keep_zeros from '../../core/convert/convert_keep_zeros.js';
import trim_natural from '../../core/convert/trim_natural.js';

/**
 * Converts the input number A represented in base f to a number B represented
 * in base t. If A is 0 the output is B = [0], otherwise all leading zeros are
 * trimmed.
 *
 * @param {number} f the base to convert from
 * @param {number} t the base to convert to
 * @param {number[]} a the origin array
 * @param {number} ai start offset in the origin array
 * @param {number} aj end offset in the origin array
 *
 * @return {number[]} The result of the conversion.
 */
export default function convert(f, t, a, ai, aj) {
	assert(f >= 2);
	assert(t >= 2);
	assert(ai >= 0);
	assert(aj <= a.length);
	assert(aj - ai >= 0);

	const b = convert_keep_zeros(f, t, a, ai, aj);

	return trim_natural(b, 0, b.length);
}
