import {_fill} from './_fill.js';

import assert from 'assert';

export function _reset(a, ai, aj) {
	assert(ai >= 0);
	assert(aj <= a.length);
	assert(aj - ai >= 0);

	_fill(a, ai, aj, 0);
}
