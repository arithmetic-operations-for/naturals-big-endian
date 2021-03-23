import {_alloc} from './_alloc.js';
import {_reset} from './_reset.js';

import assert from 'assert';

export function _zeros(n) {
	assert(n >= 0);

	const a = _alloc(n);

	_reset(a, 0, n);

	return a;
}
