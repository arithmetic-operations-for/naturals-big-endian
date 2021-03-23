import {_copy} from '../array/index.js';
import {_convert_to_smaller} from './_convert_to_smaller.js';
import {_convert_to_larger} from './_convert_to_larger.js';

/**
 *
 * Dispatcher for the various base conversion implementations.
 * The decision is based on the relation f <= t.
 *
 * @param {Number} f the base to convert from
 * @param {Number} t the base to convert to
 * @param {Array} a the origin array
 * @param {Number} ai start offset in the origin array
 * @param {Number} aj end offset in the origin array
 * @param {Array} b the destination array
 * @param {Number} bi start offset in the destination array
 * @param {Number} bj end offset in the destination array
 */

export function _convert(f, t, a, ai, aj, b, bi, bj) {
	if (f > t) return _convert_to_smaller(f, t, a, ai, aj, b, bi, bj);
	if (f < t) return _convert_to_larger(f, t, a, ai, aj, b, bi, bj);
	return _copy(a, ai, aj, b, bi);
}
