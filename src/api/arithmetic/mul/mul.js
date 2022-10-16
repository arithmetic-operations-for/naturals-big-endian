import assert from 'assert';
import _mul from '../../../core/arithmetic/mul/_mul.js';

/**
 *  Multiplies two big endian arrays and puts result in a destination array.
 *
 *  Constraints:
 *  - C is zero initialized,
 *  - |A| >= 0,
 *  - |B| >= 0,
 *  - |C| >= |A| + |B|.
 *
 * @param {Number} r base (radix)
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 * @param {Number} bj b right
 * @param {Array} c result, must be 0 initialized and be able to contain result
 * @param {Number} ci c left
 * @param {Number} cj c right
 *
 */
export default function mul(r, a, ai, aj, b, bi, bj, c, ci, cj) {
	assert(r >= 2);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(ci >= 0 && cj <= c.length);
	assert(aj - ai >= 0);
	assert(bj - bi >= 0);
	assert(cj - ci >= aj - ai + (bj - bi));

	// TODO Truncate input if output is too small (see api/add)?

	return aj - ai >= bj - bi
		? _mul(r, a, ai, aj, b, bi, bj, c, ci, cj)
		: _mul(r, b, bi, bj, a, ai, aj, c, ci, cj);
}
