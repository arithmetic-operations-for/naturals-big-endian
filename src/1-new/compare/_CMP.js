
/**
 * Compares two big endian arrays, |a| >= |b|
 *
 * @param {array} a first operand
 * @param {int} ai a left
 * @param {int} aj a right
 * @param {array} b second operand
 * @param {int} bi b left
 * @param {int} bj b right
 *
 * @return {int} 1 if a > b; 0 if a = b; -1 otherwise.
 */

export function _CMP (a, ai, aj, b, bi, bj){

	var tmp = aj - bj + bi;

	for (; ai < tmp; ++ai)
		if (a[ai] > 0) return 1;

	// same size aj - ai === bj - bi
	for (; ai < aj; ++ai, ++bi) {
		if (a[ai] > b[bi]) return  1;
		if (a[ai] < b[bi]) return -1;
	}

	return 0;
}
