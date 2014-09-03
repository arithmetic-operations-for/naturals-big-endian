


var bjoin_t = function(ar, z) {

	var join = function(a, ai, aj, b, bi, bj) {

		var m, n, q, r, i, w, t;

		m = aj - ai;
		n = bj - bi;

		// number of parts of first
		// destination block if incomplete
		r = m % z;

		// number of complete blocks in destination
		q = (m - r) / z;

		// total number of blocks in destination
		// (complete ones + first if incomplete)
		w = q + !!r;


		if (n >= w) {
			// if destination can contain more than
			// what is available in source then
			// compute the effective write start
			// in destination and set i to the correct
			// offset according to the size
			// (in source blocks) of the
			// first destination block if incomplete
			bi = bj - w;
			i = (z - r) % z;
		}
		else {
			// if source contains more than what
			// destination can handle set the effective
			// read start in source and set i to 0 because
			// all blocks will be complete
			ai = aj - n * z;
			i = 0;
		}

		for (; ai < aj && bi < bj; ++bi) {
			t = 0;
			for (; i < z; ++i) {
				t *= ar;     // aggregate source blocks
				t += a[ai];  // using simple
				++ai;        // multiply + add
			}
			b[bi] = t;  // set block in destination
			i = 0;
		}

	};

	return join;

};

exports.bjoin_t = bjoin_t;