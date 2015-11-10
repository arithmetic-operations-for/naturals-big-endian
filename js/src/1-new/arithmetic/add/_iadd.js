

/**
 * Placeholder implementation.
 */
const _iadd = function ( r , a , ai , aj , b , bi , bj ) {

	const m = aj - ai ;

	return _IADD( r , a , ai , aj , b , Math.max( bi , bj - m ) , bj ) ;

} ;

exports._iadd = _iadd ;
