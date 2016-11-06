
/**
 * Divides a big endian number by a single limb number.
 * Can only work with limbs of size at most sqrt( 2^53 ).
 * Allows to start with a partial quotient.
 *
 * Does not update the remainder.
 */

export function _div_limb_partial_fast ( r , x , z , a , ai , aj , q , qi ) {

	while ( ai < aj ) {

		x *= r ; x += a[ai] ;

		q[qi] = x / z | 0 ;
		x %= z ;

		++qi ; ++ai ;

	}

}
