
/**
 * Divides a big endian number by a single limb number and returns only the
 * remainder. Can only work with limbs of size at most sqrt( 2^53 ).
 */

const _mod_limb = function ( r , z , a , ai , aj ) {

	let x = 0 ;

	while ( ai < aj ) {

		x *= r ;
		x += a[ai] ;
		x %= z ;
		++ai ;

	}

	return x ;

} ;

exports._mod_limb = _mod_limb ;
