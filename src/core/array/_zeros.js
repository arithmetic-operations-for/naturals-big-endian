import assert from 'assert';

import _alloc from './_alloc.js';
import _reset from './_reset.js';

/**
 * Allocate a new limb array filled with zeros.
 *
 * @param {number} n The size of the allocated array.
 *
 * @return {number[]} The newly allocated array.
 */
export default function _zeros(n) {
	assert(n >= 0);

	const a = _alloc(n);

	_reset(a, 0, n);

	return a;
}
