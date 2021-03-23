import assert from 'assert';

/**
 * Allocate a new limb array.
 *
 * @param {number} n The size of the array to allocate.
 *
 * @return {number[]} The new limb array.
 */
export default function _alloc(n) {
	assert(n >= 0);

	return new Array(n);
}
