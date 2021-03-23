import assert from 'assert';

/**
 * Adds a big endian array to another.
 * Wraps on overflow. |A| >= |B|.
 *
 * @param {Number} r base (radix)
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 * @param {Number} bj b right
 */

export default function _iadd(r, a, ai, aj, b, bi, bj) {
	assert(r >= 2);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(aj - ai >= bj - bi);

	let C = 0;

	while (--bj >= bi) {
		const T = a[--aj] + b[bj] + C;
		a[aj] = T % r;
		C = (T >= r) | 0;
	}

	if (C !== 0) {
		while (--aj >= ai && a[aj] === r - 1) a[aj] = 0;
		if (aj >= ai) ++a[aj];
	}
}
