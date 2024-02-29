import assert from 'assert';

import _idivmod_dc from '../../../core/arithmetic/div/_idivmod_dc.js';
import _imod_limb from '../../../core/arithmetic/div/_imod_limb.js';
import _imod_schoolbook from '../../../core/arithmetic/div/_imod_schoolbook.js';
import _reset from '../../../core/array/_reset.js';
import THRESHOLD_DIV_DC from '../../../core/thresholds/THRESHOLD_DIV_DC.js';

/**
 * Computes the remainder of two numbers. Uses the most
 * appropriate algorithm depending on the size of the operands. The remainder
 * is written to the dividend array. There are a few assumptions made on the
 * input.
 *
 * Input
 * -----
 *  - |d| >= 1
 *  - |D| = |_| >= 1
 *  - No leading zeros in D or d.
 *
 * @param {Number} r The base to work with.
 * @param {Array} D Dividend / Remainder array (remainder computed in-place).
 * @param {Number} Di Left of dividend.
 * @param {Number} Dj Right of dividend.
 * @param {Array} d Divisor array.
 * @param {Number} di Left of divisor.
 * @param {Number} dj Right of divisor.
 * @param {Array} _ Additional memory array.
 * @param {Number} _i Left of memory.
 * @param {Number} _j Right of memory.
 */
export default function _imod(r, D, Di, Dj, d, di, dj, _, _i, _j) {
	assert(r >= 2);

	assert(Di >= 0 && Dj <= D.length);
	assert(di >= 0 && dj <= d.length);
	assert(_i >= 0 && _j <= _.length);

	assert(dj - di >= 1);
	assert(Dj - Di === _j - _i);
	assert(_j - _i >= 1);

	assert(D[Di] !== 0);
	assert(d[di] !== 0);

	const dn = dj - di;

	if (dn === 1) {
		return _imod_limb(r, d[di], D, Di, Dj);
	}

	if (dn < THRESHOLD_DIV_DC) {
		return _imod_schoolbook(r, D, Di, Dj, d, di, dj);
	}

	_reset(_, _i, _j);
	return _idivmod_dc(r, D, Di, Dj, d, di, dj, _, _i, _j);
}
