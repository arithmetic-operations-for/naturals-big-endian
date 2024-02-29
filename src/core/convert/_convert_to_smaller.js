import assert from 'assert';

import THRESHOLD_CONVERT_DC from '../thresholds/THRESHOLD_CONVERT_DC.js';

import _convert_dc from './_convert_dc.js';
import _convert_to_smaller_fast from './_convert_to_smaller_fast.js';
import _convert_to_smaller_slow from './_convert_to_smaller_slow.js';
import _log from './_log.js';

/**
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

export default function _convert_to_smaller(f, t, a, ai, aj, b, bi, bj) {
	assert(f >= 2);
	assert(t >= 2);
	assert(f > t);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(aj - ai >= 0);
	assert(bj - bi >= 0);

	const [z, x] = _log(f, t);

	if (x === 1) return _convert_to_smaller_fast(t, z, a, ai, aj, b, bi, bj);

	if (aj - ai >= THRESHOLD_CONVERT_DC) {
		// TODO use better size_small_block to avoid degenerated small blocks
		// that slow down the execution
		return _convert_dc(THRESHOLD_CONVERT_DC >> 1, f, t, a, ai, aj, b, bi, bj);
	}

	return _convert_to_smaller_slow(f, t, a, ai, aj, b, bi, bj);
}
