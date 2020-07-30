import assert from 'assert' ;

/**
 * Divides a big endian number by a single limb number and writes the
 * remainder to the dividend array.
 * Only works with limbs of size at most sqrt( 2^53 ).
 *
 * @param {Number} r The radix of D.
 * @param {Number} d The divisor >= 1.
 * @param {Array} D The dividend.
 * @param {Number} Di Left of D.
 * @param {Number} Dj Right of D.
 */
export function _imod_limb ( r , d , D , Di , Dj ) {

	assert(r >= 2);
	assert(1 <= d && d <= r - 1);
	assert(Di >= 0 && Dj <= D.length);
	assert(Dj - Di >= 1);

	let R = 0 ;

	while ( Di < Dj ) {

		R *= r ;
		R += D[Di] ;
		R %= d ;
		D[Di] = 0;
		++Di ;

	}

	D[Dj-1] = R ;

}
