
var bcmp_t = function(){


	/**
	 * Compares two big endian arrays, |a| >= |b|
	 *
	 * @param a first operand
	 * @param ai a left
	 * @param aj a right
	 * @param b second operand
	 * @param bi b left
	 * @param bj b right
	 *
	 * @return 1 if a > b; 0 if a = b; -1 otherwise.
	 */

	return function(a, ai, aj, b, bi, bj){

		var tmp = aj - bj + bi;

		for (; ai < tmp; ++ai)
			if (a[ai] > 0) return 1;


		// same size aj - ai === bj - bi
		for (; ai < aj; ++ai, ++bi) {
			if (a[ai] > b[bi]) return  1;
			if (a[ai] < b[bi]) return -1;
		}

		return 0;
	};

};

var lcmp_t = function(){

	/**
	 * Compares two little endian arrays, |a| >= |b|
	 *
	 * @param a first operand
	 * @param ai a left
	 * @param aj a right
	 * @param b second operand
	 * @param bi b left
	 * @param bj b right
	 *
	 * @return 1 if a > b; 0 if a = b; -1 otherwise.
	 */

	return function(a, ai, aj, b, bi, bj){

		var tmp = ai + bj - bi;

		--aj; --bj;

		for (; aj >= tmp; --aj)
			if (a[aj] > 0) return 1;


		// same size aj - ai === bj - bi
		for (; aj >= ai; --aj, --bj) {
			if (a[aj] > b[bj]) return  1;
			if (a[aj] < b[bj]) return -1;
		}

		return 0;
	};
};

exports.bcmp_t = bcmp_t;
exports.lcmp_t = lcmp_t;