

/**
 * Placeholder implementation.
 */
export function _iadd ( r , a , ai , aj , b , bi , bj ) {

	const m = aj - ai ;

	return _IADD( r , a , ai , aj , b , Math.max( bi , bj - m ) , bj ) ;

}
