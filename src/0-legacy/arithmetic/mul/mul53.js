/**
 * /!\ BLOCK MULTIPLICATION RESULT MUST HOLD IN THE JAVASCRIPT NUMBER TYPE (DOUBLE i.e. 53 bits)
 *
 * big endian 1 block multiplication
 *
 */

export function bmul53_t ( r ) {

	/**
	 * Multiply two blocks, result is put in a 1 or 2 blocks big endian array.
	 * aj - ai <= 1, bj - bi <= 1, cj - ci <= 2
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

		var v;

		// EMPTY CASE
		if (aj <= ai || bj <= bi || cj <= ci) return;

		v = a[ai] * b[bi];
		c[cj-1] = v % r;

		if (cj > ci + 1) {
			c[cj-2] = (v - c[cj-1]) / r;
		}

	};

	return mul;

}
