import {_mul} from '../../../core/arithmetic/mul/_mul.js';

import assert from 'assert';

/**
 *  - C is zero initialized,
 *  - |A| >= 0,
 *  - |B| >= 0,
 *  - |C| >= |A| + |B|.
 */

export function mul(r, a, ai, aj, b, bi, bj, c, ci, cj) {
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
