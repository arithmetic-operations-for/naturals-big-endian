
/**
 *
 * @param {Number} br the base to convert to
 * @param {Number} z if ar is the base to convert to then log(ar) = z log(br)
 * @param {Array} a the origin array
 * @param {Number} ai start offset in the origin array
 * @param {Number} aj end offset in the origin array
 * @param {Array} b the destination array
 * @param {Number} bi start offset in the destination array
 * @param {Number} bj end offset in the destination array
 */

export function _convert_to_smaller_fast ( br , z , a , ai , aj , b , bi , bj ) {

	var m, n, q, r, i, w, t;

	m = bj - bi;
	n = aj - ai;

	// number of parts of first
	// destination block if incomplete
	r = m % z;

	// number of complete blocks in destination
	q = (m - r) / z;

	// total number of blocks in destination
	// (complete ones + first if incomplete)
	w = q + !!r;


	if (n >= w) {
		// if source contains more than what
		// destination can handle set the effective
		// read start in source and set i to the correct
		// offset according to the size
		// (in destination blocks) of the
		// first source block if incomplete
		ai = aj - w;
		i = (z - r) % z;
	}
	else {
		// if destination can contain more than
		// what is available in source then
		// compute the effective write start
		// in destination and set i to 0 because
		// all blocks will be complete
		bi = bj - n * z;
		i = 0;
	}

	for (; ai < aj && bi < bj; ++ai) {
		q = a[ai];
		t = bi + z - 1 - i;
		bi += z - i;
		for (; i < z; ++i) {
			r = q % br;        // unpack source blocks
			q = (q - r) / br;  // using simple
			b[t] = r;          // modulo + quotient
			--t;
		}
		i = 0;
	}

}
