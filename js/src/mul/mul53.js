/**
 * /!\ BLOCK MULTIPLICATION RESULT MUST HOLD IN THE JAVASCRIPT NUMBER TYPE (DOUBLE i.e. 53 bits)
 *
 * big endian 1 block multiplication
 * 
 */

var bmul53_t = function(r){

	/**
	 * Multiply two blocks, result is put in a 1 or 2 blocks big endian array.
	 * i <= 1, j <= 1, k <= 2
	 * 
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

	var mul = function(a, ai, aj, b, bi, bj, c, ci, cj){

		var v, i, j, k;

		i = aj - ai;
		j = bj - bi;
		k = cj - ci;

		// EMPTY CASE
		if (i <= 0 || j <= 0 || k <= 0) return;

		v = a[ai] * b[bi];
		c[cj-1] = v % r;

		if (k > 1) {
			c[cj-2] = (v - c[cj-1]) / r;
		}

	};

	return mul;

};


exports.bmul53_t = bmul53_t;