
/**
 *
 * Divides a big endian number by a single limb number.
 * Can only work with limbs of size at most sqrt( 2^53 ).
 *
 * r <= x
 */

export function _div_limb ( r , z , a , ai , aj , q , qi ) {

	_div_limb_partial( r , 0 , z , a , ai , aj , q , qi ) ;

}
