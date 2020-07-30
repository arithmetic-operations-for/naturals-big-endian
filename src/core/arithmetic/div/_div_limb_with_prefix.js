import assert from 'assert' ;

/**
 * Divides a big endian number by a single limb number.
 * Can only work with limbs of size at most sqrt( 2^53 ).
 * Allows to prefix the dividend with an intermediate remainder.
 *
 * Does not update the remainder.
 *
 * Input
 * -----
 *  - 0 <= tmp <= d - 1
 *  - 1 <= d <= r - 1
 *  - |Q| = |D|
 *
 * @param {Number} r The radix.
 * @param {Number} tmp Intermediate remainder (MUST be <code>< d</code>).
 * @param {Number} d The divisor >= 1.
 * @param {Array} D The dividend (NOT modified).
 * @param {Number} Di Left of dividend.
 * @param {Number} Dj Right of dividend.
 * @param {Array} Q The quotient.
 * @param {Number} Qi Left of quotient.
 */
export function _div_limb_with_prefix ( r , tmp , d , D , Di , Dj , Q , Qi ) {

	assert(r >= 2);
	assert(1 <= d && d <= r - 1);
	assert(0 <= tmp && tmp <= d - 1);
	assert(0 <= Di && Dj <= D.length);
	assert(0 <= Qi);
	assert(Dj - Di <= Q.length - Qi);

	while ( Di < Dj ) {

		tmp *= r ; tmp += D[Di] ;

		Q[Qi] = tmp / d | 0 ;
		tmp %= d ;

		++Qi ; ++Di ;

	}

}
