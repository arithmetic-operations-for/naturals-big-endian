import _zeros from '../array/_zeros.js';
import _convert from './_convert.js';

/**
 * Converts the input number A represented in base f to a number B represented
 * in base t. All leading zeros resulting from the conversion are kept.
 *
 * @param {number} f the base to convert from
 * @param {number} t the base to convert to
 * @param {number[]} a the origin array
 * @param {number} ai start offset in the origin array
 * @param {number} aj end offset in the origin array
 *
 * @return {number[]} The resulting limb array.
 */
export default function convert_keep_zeros(f, t, a, ai, aj) {
	const bi = 0;
	const bj = Math.ceil((Math.log(f) / Math.log(t)) * (aj - ai));
	const b = _zeros(bj - bi);

	_convert(f, t, a, ai, aj, b, bi, bj);

	return b;
}
