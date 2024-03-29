import assert from 'assert';

import jz from '../../../api/compare/jz.js';
import _alloc from '../../array/_alloc.js';
import _copy from '../../array/_copy.js';
import _reset from '../../array/_reset.js';
import _mul from '../mul/_mul.js';

/**
 * Computes <code>pow(a,x) = a^x</code> using exponentiation by squaring.
 * Writes result to output array.
 *
 * /!\ |A| >= 1, |C| >= 1, |C| >= |A| * x, |C| = 000...0
 *
 * @param {Number} r The base to work with.
 * @param {Number} x The power to raise <code>a</code> to.
 * @param {Array} a The base array.
 * @param {Number} ai <code>a</code> left.
 * @param {Number} aj <code>b</code> right.
 * @param {Array} c The output array.
 * @param {Number} ci <code>a</code> left.
 * @param {Number} cj <code>b</code> right.
 */
export default function _pow_double(r, x, a, ai, aj, c, ci, cj) {
	assert(r >= 2);
	assert(x >= 0);
	assert(ai >= 0 && aj <= a.length);
	assert(ci >= 0 && cj <= c.length);
	assert(aj - ai >= 1);
	assert(cj - ci >= 1);
	assert(cj - ci >= (aj - ai) * x);
	assert(jz(c, ci, cj));

	c[cj - 1] = 1;

	if (x === 0) return;

	const n = aj - ai;

	_copy(a, ai, aj, c, cj - n);

	if (x === 1) return;

	const xbits = [];

	do {
		xbits.push(x & 1);
		x >>= 1;
	} while (x !== 1);

	const d = _alloc(cj - ci);
	let _n = n;

	do {
		const _m = _n;
		_n <<= 1;
		_reset(d, 0, _n);
		_mul(r, c, cj - _m, cj, c, cj - _m, cj, d, 0, _n); // TODO use squaring function here
		if (xbits.pop() === 0) _copy(d, 0, _n, c, cj - _n);
		else {
			const _o = _n + n;
			_reset(c, cj - _o, cj);
			_mul(r, d, 0, _n, a, ai, aj, c, cj - _o, cj); // Largest must be put first
			_n = _o;
		}
	} while (xbits.length > 0);
}
