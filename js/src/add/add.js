
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


/**
 * @param {int} r base (radix)
 */

var ladd_t = exports.ladd_t = function(r){

	/**
	 * Adds two little endian arrays, k >= i >= j
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

		while(j0 < j1){
			t = a[i0] + b[j0] + C;
			c[k0] = t % r;
			C = t / r >= 1;
			++i0; ++j0; ++k0;
		}

		while(i0 < i1){
			t = a[i0] + C;
			c[k0] = t % r;
			C = t / r >= 1;
			++i0; ++k0;
		}

		if(k0 < k1){
			c[k0] = +C;
		}

	};
};