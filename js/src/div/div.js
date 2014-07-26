


var bdiv_t = function(mov, lt, sub){

	/**
	 * Computes quotient and remainder of two big endian arrays.
	 * <p>
	 * Computes quotient and remainder of two big endian arrays
	 * using long division algorithm (the one teached in
	 * european primary schools).
	 * 
	 * @param {array} a dividend
	 * @param {int} ai a left
	 * @param {int} aj a right
	 * @param {array} b divisor
	 * @param {int} bi b left
	 * @param {int} bj b right
	 * @param {array} q quotient, must be 0 initialized
	 * @param {int} qi q left
	 * @param {int} qj q right
	 * @param {array} r remainder
	 * @param {int} ri r left
	 * @param {int} rj r right
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