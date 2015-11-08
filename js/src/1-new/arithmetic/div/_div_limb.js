
/**
 *
 * Divides a big endian number by a single limb number.
 * Can only work with limbs of size at most sqrt( 2^53 ).
 *
 */

const _div_limb = function ( r , z , a , ai , aj , q , qi ) {

	_div_limb_partial( r , 0 , z , a , ai , aj , q , qi ) ;

} ;

exports._div_limb = _div_limb ;
