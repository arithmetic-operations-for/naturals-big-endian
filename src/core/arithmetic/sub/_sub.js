import assert from 'assert';

/**
 * Subtracts two big endian arrays, |C| >= |A| >= |B|.
 * Wraps.
 *
 * @param {int} r base (radix)
 * @param {array} a first operand
 * @param {int} ai a left
 * @param {int} aj a right
 * @param {array} b second operand
 * @param {int} bi b left
 * @param {int} bj b right
 * @param {array} c result, must be 0 initialized
 * @param {int} ci c left
 * @param {int} cj c right
 */

export default function _sub(r, a, ai, aj, b, bi, bj, c, ci, cj) {
	assert(r >= 2);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(ci >= 0 && cj <= c.length);
	assert(cj - ci >= aj - ai);
	assert(aj - ai >= bj - bi);

	let T;
	let C = 0;

	while (--bj >= bi) {
		--aj;
		--cj;
		T = C;
		C = (a[aj] < b[bj] + T) | 0;
		c[cj] = a[aj] - b[bj] + (C * r - T);
	}

	while (--aj >= ai) {
		--cj;
		T = C;
		C = (a[aj] < T) | 0;
		c[cj] = a[aj] + (C * r - T);
	}

	if (C) {
		while (--cj >= ci) {
			c[cj] = r - 1;
		}
	}
}
