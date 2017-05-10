
/**
 * Divides a big endian number by a single limb number and returns only the
 * remainder. Can only work with limbs of size at most sqrt( 2^53 ).
 *
 * @param {Number} r The radix of D.
 * @param {Number} d The divisor.
 * @param {Array} D The dividend (NOT modified).
 * @param {Number} Di Left of D.
 * @param {Number} Dj Right of D.
 * @returns {Number} The remainder D % d.
 */
export function _mod_limb ( r , d , D , Di , Dj ) {

	let R = 0 ;

	while ( Di < Dj ) {

		R *= r ;
		R += D[Di] ;
		R %= d ;
		++Di ;

	}

	return R ;

}
