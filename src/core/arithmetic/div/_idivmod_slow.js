import assert from 'assert';

import _sub from '../sub/_sub.js';
import lt from '../../../api/compare/lt.js';
import jz from '../../../api/compare/jz.js';

/**
 * Computes quotient and remainder of two big endian arrays.
 * <p>
 * Computes quotient and remainder of two big endian arrays
 * using long division algorithm (the one teached in
 * european primary schools).
 *
 * /!\ This algorithm modifies its first operand.
 *
 * HYP : q is at least as large as r
 *       b is not zero
 *
 * @param {Number} x the radix
 * @param {array} r dividend and remainder
 * @param {Number} ri r left
 * @param {Number} rj r right
 * @param {array} b divisor
 * @param {Number} bi b left
 * @param {Number} bj b right
 * @param {array} q quotient, must be 0 initialized
 * @param {Number} qi q left
 */

// /!\ There are implicit hypotheses
//     made on the size of the operands.
//     Should clarify.

export default function _idivmod_slow(x, r, ri, rj, b, bi, bj, q, qi) {
	assert(x >= 2);
	assert(ri >= 0 && rj <= r.length);
	assert(bi >= 0 && bj <= b.length);
	assert(qi >= 0);
	assert(q.length - qi >= rj - ri);
	assert(!jz(b, bi, bj));
	assert(jz(q, qi, qi + rj - ri));

	let k;
	const t = ri + 1;

	do {
		// Trim leading zeros
		// TODO maybe could try to put this procedure inside the _sub loop
		// TODO or assume that the number is trimed at the begining
		//      and put this statement at the end of the main loop
		while (ri < rj && r[ri] === 0) ++ri;

		// Search for a remainder block interval
		// greater than the divisor
		// TODO maybe could try binary search on the lt function
		//      for another implementation
		k = ri + 1;
		while (k <= rj && lt(r, ri, k, b, bi, bj)) ++k;

		// Remainder smaller than divisor --> end
		if (k > rj) break;

		// Divide current block interval by quotient
		do {
			// Increment quotient block corresponding
			// to current ls block of remainder interval
			++q[qi + k - t];

			// Subtract divisor from current remainder
			// block interval
			_sub(x, r, ri, k, b, bi, bj, r, ri, k);
		} while (!lt(r, ri, k, b, bi, bj));
	} while (true);
}
