


var bdiv_t = function(mov, lt, leq, sub, r){

	/**
	 * Computes quotient and remainder of two big endian arrays.
	 * <p>
	 * Computes quotient and remainder of two big endian arrays
	 * using long division algorithm (the one teached in
	 * european primary schools)
	 *
	 * @param a dividend
	 * @param ai a left
	 * @param aj a right
	 * @param b divisor
	 * @param bi b left
	 * @param bj b right
	 * @param c quotient, must be 0 initialized
	 * @param ci c left
	 * @param cj c right
	 * @param d remainder
	 * @param di d left
	 * @param dj d right
	 */

	var div = function(a, ai, aj, b, bi, bj, c, ci, cj, d, di, dj){
		var k, t = di;

		// copy dividend in remainder
		mov(a, ai, aj, d, di);

		do {
			// search for a remainder block interval
			// greater than the divisor
			//     - maybe could try binary search on the lt function
			//     for another implementation
			k = di + 1;
			while (k <= dj && lt(a, di, k, b, bi, bj)) ++k;

			// remainder smaller than divisor --> end
			if (k > dj) break;

			// divide current block interval by quotient
			do{

				// increment quotient block corresponding
				// to current ls block of remainder interval
				++c[ci + k - t];

				// subtract divisor from current remainder
				// block interval
				sub(d, di, k, b, bi, bj, d, di, k);

			} while(leq(b, bi, bj, d, di, k));

			// trim leading zeros
			//     - maybe could try to put this procedure inside the sub loop
			//     - maybe could trim zeros before entering main loop
			while (di < k && d[di] === 0) ++di;


		} while(k <= dj);

	};

	return div;

};

exports.bdiv_t = bdiv_t;