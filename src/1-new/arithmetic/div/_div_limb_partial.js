
/**
 * Divides a big endian number by a single limb number.
 * Can only work with limbs of size at most sqrt( 2^53 ).
 * Allows to start with a partial quotient.
 *
 */

export function _div_limb_partial ( r , x , z , a , ai , aj , q , qi ) {

	while ( ai < aj ) {

		x *= r ; x += a[ai] ;

		q[qi] = x / z | 0 ;
		x %= z ;
		a[ai] = 0 ;

		++qi ; ++ai ;

	}

	a[aj-1] = x ;

}
