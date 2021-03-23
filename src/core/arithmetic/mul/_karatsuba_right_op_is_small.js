import _zeros from '../../array/_zeros.js';
import _iadd from '../add/_iadd.js';
import _mul from './_mul.js';

import assert from 'assert';

/**
 *
 * Multiply two big endian arrays using karatsuba algorithm,
 * WHEN THE SECOND OPERAND IS SMALL.
 * |A| >= |B| >= 1, |C| >= |A| + |B|, |A| >= 2, Math.ceil(|A|/2) >= |B|.
 *
 * /!\ BLOCK MULTIPLICATION RESULT MUST HOLD IN THE JAVASCRIPT NUMBER TYPE
 *     (DOUBLE i.e. 53 bits)
 *
 * EXPLANATION
 * ###########
 *
 * We consider the numbers a and b0. a has size N = 2n, and b0 has size n.
 *
 * We divide a into its lower and upper parts.
 *
 * a = a1 r^{n} + a0 (1)
 *
 * We express the product of a and b0 using these.
 *
 * a b0 = (a1 r^{n} + a0) b0 (3)
 *      = a1 b0 r^{n} + a0 b0 (4)
 *
 * This gives us 2 multiplications with operands of size n.
 *
 * @param {Number} r base (radix)
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 * @param {Number} bj b right
 * @param {Array} c result, must be 0 initialized
 * @param {Number} ci c left
 * @param {Number} cj c right
 */

export default function _karatsuba_right_op_is_small(
	r,
	a,
	ai,
	aj,
	b,
	bi,
	bj,
	c,
	ci,
	cj,
) {
	assert(r >= 2);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(ci >= 0 && cj <= c.length);
	assert(aj - ai >= 2);
	assert(bj - bi >= 1);
	assert(aj - ai >= bj - bi);
	assert(cj - ci >= aj - ai + (bj - bi));

	const i = aj - ai;
	const j = bj - bi;

	const n = Math.ceil(i / 2);

	assert(j <= n);

	const N = n + j;
	const N_ = i - n + j;
	const i_ = aj - n;

	const z = _zeros(N_); // Need tmp variable since _mul overwrites

	// RECURSIVE CALLS
	_mul(r, a, i_, aj, b, bi, bj, c, cj - N, cj); // C += a0.b0
	_mul(r, a, ai, i_, b, bi, bj, z, 0, N_); // Z = a1.b0

	_iadd(r, c, ci, cj - n, z, 0, N_); // C += a1.b0 . r^{n}
}
