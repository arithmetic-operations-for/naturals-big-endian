import assert from 'assert';

/**
 *
 * @param {Number} ar the base to convert from
 * @param {Number} z if br is the base to convert to then log(br) = z log(ar)
 * @param {Array} a the origin array
 * @param {Number} ai start offset in the origin array
 * @param {Number} aj end offset in the origin array
 * @param {Array} b the destination array
 * @param {Number} bi start offset in the destination array
 * @param {Number} bj end offset in the destination array
 */

export default function _convert_to_larger_fast(ar, z, a, ai, aj, b, bi, bj) {
	assert(ar >= 2);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(aj - ai >= 0);
	assert(bj - bi >= 0);

	let i;
	let t;

	const m = aj - ai;
	const n = bj - bi;

	// Number of parts of first
	// destination block if incomplete
	const r = m % z;

	// Number of complete blocks in destination
	const q = (m / z) | 0;

	// Total number of blocks in destination
	// (complete ones + first if incomplete)
	const w = q + !!r;

	if (n >= w) {
		// If destination can contain more than
		// what is available in source then
		// compute the effective write start
		// in destination and set i to the correct
		// offset according to the size
		// (in source blocks) of the
		// first destination block if incomplete
		bi = bj - w;
		i = (z - r) % z;
	} else {
		// If source contains more than what
		// destination can handle set the effective
		// read start in source and set i to 0 because
		// all blocks will be complete
		ai = aj - n * z;
		i = 0;
	}

	for (; ai < aj && bi < bj; ++bi) {
		t = 0;
		for (; i < z; ++i) {
			t *= ar; // Aggregate source blocks
			t += a[ai]; // Using simple
			++ai; // Multiply + add
		}

		b[bi] = t; // Set block in destination
		i = 0;
	}
}
