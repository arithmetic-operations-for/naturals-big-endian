import _copy from '../array/_copy.js';

import _convert_to_larger from './_convert_to_larger.js';
import _convert_to_smaller from './_convert_to_smaller.js';

/**
 *
 * Dispatcher for the various base conversion implementations.
 * The decision is based on the relation f <= t.
 *
 * @param {number} f the base to convert from
 * @param {number} t the base to convert to
 * @param {number[]} a the origin array
 * @param {number} ai start offset in the origin array
 * @param {number} aj end offset in the origin array
 * @param {number[]} b the destination array
 * @param {number} bi start offset in the destination array
 * @param {number} bj end offset in the destination array
 */

export default function _convert(f, t, a, ai, aj, b, bi, bj) {
	if (f > t) return _convert_to_smaller(f, t, a, ai, aj, b, bi, bj);
	if (f < t) return _convert_to_larger(f, t, a, ai, aj, b, bi, bj);
	return _copy(a, ai, aj, b, bi);
}
