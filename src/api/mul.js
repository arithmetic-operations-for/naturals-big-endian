import { _mul } from '../core/arithmetic' ;

/**
 *  - C is zero initialized,
 *  - |A| >= 0,
 *  - |B| >= 0,
 *  - |C| >= |A| + |B|.
 */

export function mul ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	// TODO Truncate input if output is too small (see api/add)?

	return aj - ai >= bj - bi ?
		_mul( r , a , ai , aj , b , bi , bj , c , ci , cj ) :
		_mul( r , b , bi , bj , a , ai , aj , c , ci , cj ) ;

}
