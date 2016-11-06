
/**
 * Divides a big endian number by a single limb number and returns only the
 * remainder. Can only work with limbs of size at most sqrt( 2^53 ).
 */

export function _mod_limb ( r , z , a , ai , aj ) {

	let x = 0 ;

	while ( ai < aj ) {

		x *= r ;
		x += a[ai] ;
		x %= z ;
		++ai ;

	}

	return x ;

}
