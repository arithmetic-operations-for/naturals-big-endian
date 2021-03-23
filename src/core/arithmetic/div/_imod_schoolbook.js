import assert from 'assert';

import _zeros from '../../array/_zeros.js';
import _mul_limb from '../mul/_mul_limb.js';
import _imod_schoolbook_large_divisor from './_imod_schoolbook_large_divisor.js';
import _div_limb_with_prefix from './_div_limb_with_prefix.js';

/**
 * Divides a big endian number by another big endian number and writes the
 * remainder to the dividend array.
 *
 * Computes a <- a % b.
 * No leading zeros allowed.
 *
 * @param {Number} r The radix.
 * @param {Array} a Dividend / Remainder.
 * @param {Number} ai
 * @param {Number} aj
 * @param {Array} b Divisor.
 * @param {Number} bi
 * @param {Number} bj
 */
export default function _imod_schoolbook(r, a, ai, aj, b, bi, bj) {
	assert(r >= 2);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(aj - ai <= 0 || a[ai] !== 0); // No leading zero
	assert(bj - bi >= 1 && b[bi] !== 0); // No leading zero

	const _r = Math.ceil(r / 2);
	const x = b[bi];

	if (x < _r) {
		// We need x to be >= _r so we multiply b by ceil( _r / x )
		// this gives us <= ( 1 + _r / x ) b < r^(bj-bi)
		// (this can be implemented faster using bit shifts if r = 2^k )
		const z = Math.ceil(_r / x);
		const m = aj - ai + 1;
		const n = bj - bi;

		const _a = _zeros(m);
		_mul_limb(r, z, a, ai, aj, _a, 0, m);

		const _b = _zeros(n);
		_mul_limb(r, z, b, bi, bj, _b, 0, n);

		_imod_schoolbook_large_divisor(r, _a, 0, m, _b, 0, n);
		_div_limb_with_prefix(r, _a[0], z, _a, 1, m, a, ai);
	} else _imod_schoolbook_large_divisor(r, a, ai, aj, b, bi, bj);
}
