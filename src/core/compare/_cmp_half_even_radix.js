import assert from 'assert';

import jz from '../../api/compare/jz.js';

export default function _cmp_half_even_radix(_r, a, ai, aj) {
	assert(_r >= 1);
	assert(ai >= 0 && aj <= a.length);

	if (ai >= aj || a[ai] < _r) return -1;
	if (a[ai] > _r) return 1;
	return jz(a, ai + 1, aj) ? 0 : 1;
}
