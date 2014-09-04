
/**
 * @param {int} r base (radix)
 */


var bsub_t = function(r){

	/**
	 * Subtracts two big endian arrays, k >= i >= j
	 * wraps
	 *
	 * @param {array} a first operand
	 * @param {int} ai a left
	 * @param {int} aj a right
	 * @param {array} b second operand
	 * @param {int} bi b left
	 * @param {int} bj b right
	 * @param {array} c result, must be 0 initialized
	 * @param {int} ci c left
	 * @param {int} cj c right
	 */

	return function(a, ai, aj, b, bi, bj, c, ci, cj){
		var T, C = 0;

		while(--bj >= bi){
			--aj; --cj;
			T = C;
			C = a[aj] < b[bj] + T;
			c[cj] = a[aj] - b[bj] + (C*r - T);
		}

		while(--aj >= ai){
			--cj;
			T = C;
			C = a[aj] < T;
			c[cj] = a[aj] + (C*r - T);
		}

		if(C){
			while(--cj >= ci){
				c[cj] = r - 1;
			}
		}

	};
};
/**
 * @param {int} r base (radix)
 */


var lsub_t = function(r){

	/**
	 * Subtracts two little endian arrays, k >= i >= j
	 * wraps
	 *
	 * @param {array} a first operand
	 * @param {int} ai a left
	 * @param {int} aj a right
	 * @param {array} b second operand
	 * @param {int} bi b left
	 * @param {int} bj b right
	 * @param {array} c result, must be 0 initialized
	 * @param {int} ci c left
	 * @param {int} cj c right
	 */

	return function(a, ai, aj, b, bi, bj, c, ci, cj){
		var T, C = 0;

		while(bi < bj){
			T = C;
			C = a[ai] < b[bi] + T;
			c[ci] = a[ai] - b[bi] + (C*r - T);
			++ai; ++bi; ++ci;
		}

		while(ai < aj){
			T = C;
			C = a[ai] < T;
			c[ci] = a[ai] + (C*r - T);
			++ai; ++ci;
		}

		if(C){
			while(ci < cj){
				c[ci] = r - 1;
				++ci;
			}
		}

	};
};


exports.bsub_t = bsub_t;
exports.lsub_t = lsub_t;
