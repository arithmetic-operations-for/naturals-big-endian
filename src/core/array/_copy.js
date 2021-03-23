import assert from 'assert';

/**
 * Copy a limb array into another limb array.
 *
 * @param {number[]} a The copied limb array.
 * @param {number} ai
 * @param {number} aj
 * @param {number[]} b The destination limb array.
 * @param {number} bi
 */
export default function _copy(a, ai, aj, b, bi) {
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0);
	assert(b.length - bi >= aj - ai);

	for (; ai < aj; ++ai, ++bi) b[bi] = a[ai];
	// While ( ai < aj ) b[++bi] = a[++ai] ;
}
