
/**
 * @param {int} r base (radix)
 */


exports.badd_t = function badd_t (r) {


	/**
	 * Adds two big endian arrays, k >= i >= j
	 * wraps
	 *
	 * @param {array} a first operand
	 * @param {int} i0 a left
	 * @param {int} i1 a right
	 * @param {array} b second operand
	 * @param {int} j0 b left
	 * @param {int} j1 b right
	 * @param {array} c result, must be 0 initialized
	 * @param {int} k0 c left
	 * @param {int} k1 c right
	 */

	return function(a, i0, i1, b, j0, j1, c, k0, k1){
		var t, C = 0;

		while(--j1 >= j0){
			--i1; --k1;
			t = a[i1] + b[j1] + C;
			c[k1] = t % r;
			C = t / r >= 1;
		}

		while(--i1 >= i0){
			--k1;
			t = a[i1] + C;
			c[k1] = t % r;
			C = t / r >= 1;
		}

		if(--k1 >= k0){
			c[k1] = +C;
		}

	};

};
