import assert from 'assert';

import {_zeros, _copy} from '../../array/index.js';
import {_cmp_n} from '../../compare/index.js';
import {_imul_limb} from '../mul/index.js';
import {_idivmod_dc_21} from './_idivmod_dc_21.js';
import {_div_limb_with_prefix} from './_div_limb_with_prefix.js';
import {_mod_limb} from './_mod_limb.js';

import {jz} from '../../../api/compare/index.js';

/**
 * Input
 * -----
 *  - No leading zeros
 *  - |A| = |C|
 *  - C must be zero-initialized.
 *
 * References
 * ----------
 *   - https://gmplib.org/manual/Divide-and-Conquer-Division.html
 *
 * @param {Number} X The radix.
 * @param {Array} a Dividend / Remainder.
 * @param {Number} ai
 * @param {Number} aj
 * @param {Array} b Divisor.
 * @param {Number} bi
 * @param {Number} bj
 * @param {Array} c Quotient.
 * @param {Number} ci
 * @param {Number} cj
 */
export function _idivmod_dc(X, a, ai, aj, b, bi, bj, c, ci, cj) {
	assert(X >= 2);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(ci >= 0 && cj <= c.length);
	assert(aj - ai <= 0 || a[ai] !== 0);
	assert(bj - bi >= 1);
	assert(b[bi] !== 0);
	assert(cj - ci === aj - ai);

	assert(jz(c, ci, cj));

	// [BZ98] Fast Recursive Division

	const r = aj - ai;
	const s = bj - bi;

	// NB: this is the only case where c needs to be zero-initialized.
	if (r < s || (r === s && _cmp_n(a, ai, aj, b, bi) < 0)) return;

	// Shift to get n = 2^k for some k
	let _n = 1;

	while (_n < s) _n <<= 1;

	const n = _n;

	const shift = n - s;

	const x = b[bi];
	const _X = X / 2;
	const _normalize = x < _X;
	const z = Math.ceil(_X / x);

	const w = r + shift + (_normalize || a[ai] >= _X);
	const t = Math.ceil(w / n);
	const _ai = 0;
	const _aj = t * n; // + 1 if
	const _a = _zeros(_aj); // Potential normalization overflow
	const _ak = _aj - shift - r; // Or if A potentially bigger than B
	_copy(a, ai, aj, _a, _ak);

	const _bi = 0;
	const _bj = n;
	const _b = _zeros(n);
	_copy(b, bi, bj, _b, 0);

	if (_normalize) {
		_imul_limb(X, z, _a, _ai, _aj);
		_imul_limb(X, z, _b, _bi, _bj);
	}

	const _cj = _aj;
	const _c = _zeros(_cj);

	for (let i = 0; i < _aj - n; i += n) {
		_idivmod_dc_21(X, _a, i, i + (n << 1), _b, _bi, _bj, _c, i, i + (n << 1));
	}

	if (_normalize) {
		const p = _mod_limb(X, z, _a, _ai, _ak);
		_div_limb_with_prefix(X, p, z, _a, _ak, _aj - shift, a, ai, aj);
	} else {
		_copy(_a, _ak, _aj - shift, a, ai, aj);
	}

	// C is completely overwritten here
	_copy(_c, _cj - r, _cj, c, ci);
}
