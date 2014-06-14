


var bdiv_t = function(mov, lt, sub){

	/**
	 * Computes quotient and remainder of two big endian arrays.
	 * <p>
	 * Computes quotient and remainder of two big endian arrays
	 * using long division algorithm (the one teached in
	 * european primary schools).
	 *
	 * @param a dividend
	 * @param ai a left
	 * @param aj a right
	 * @param b divisor
	 * @param bi b left
	 * @param bj b right
	 * @param q quotient, must be 0 initialized
	 * @param qi q left
	 * @param qj q right
	 * @param r remainder
	 * @param ri r left
	 * @param rj r right
	 */

	var div = function(a, ai, aj, b, bi, bj, q, qi, qj, r, ri, rj){
		var k, t = ri + 1;

		// copy dividend in remainder
		mov(a, ai, aj, r, ri);

		do {

			// trim leading zeros
			//     - maybe could try to put this procedure inside the sub loop
			while (ri < rj && r[ri] === 0) ++ri;

			// search for a remainder block interval
			// greater than the divisor
			//     - maybe could try binary search on the lt function
			//     for another implementation
			k = ri + 1;
			while (k <= rj && lt(r, ri, k, b, bi, bj)) ++k;

			// remainder smaller than divisor --> end
			if (k > rj) break;

			// divide current block interval by quotient
			do{

				// increment quotient block corresponding
				// to current ls block of remainder interval
				++q[qi + k - t];

				// subtract divisor from current remainder
				// block interval
				sub(r, ri, k, b, bi, bj, r, ri, k);

			} while(!lt(r, ri, k, b, bi, bj));


		} while(k <= rj);

	};

	return div;

};

exports.bdiv_t = bdiv_t;