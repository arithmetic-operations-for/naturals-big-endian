/**
 * Divides a big endian number by a single limb number.
 * Can only work with limbs of size at most sqrt( 2^53 ).
 * Allows to prefix the dividend with an intermediate remainder.
 *
 * Does not update the remainder.
 *
 * Input
 * -----
 *  - |Q| = |D|
 *
 * @param {Number} r The radix.
 * @param {Number} tmp Intermediate remainder (MUST be <code>< d</code>).
 * @param {Number} d The divisor.
 * @param {Array} D The dividend (NOT modified).
 * @param {Number} Di Left of dividend.
 * @param {Number} Dj Right of dividend.
 * @param {Array} Q The quotient.
 * @param {Number} Qi Left of quotient.
 */
export function _div_limb_with_prefix ( r , tmp , d , D , Di , Dj , Q , Qi ) {

	while ( Di < Dj ) {

		tmp *= r ; tmp += D[Di] ;

		Q[Qi] = tmp / d | 0 ;
		tmp %= d ;

		++Qi ; ++Di ;

	}

}
