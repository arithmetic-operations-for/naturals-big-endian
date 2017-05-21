import { _mul_limb , _schoolbook_mul , _karatsuba } from '../core/arithmetic' ;
import { THRESHOLD_MUL_TOOM22 } from '../core/thresholds' ;

/**
 * |A| >= |B| >= 1, |C| >= |A| + |B|.
 * TODO check whether this condition is actually needed
 *      if it is then fix @aureooms/js-integer
 *      otherwise document properly and fix conditions
 * TODO use schoolbook mul if n = O(log m)
 */

export function mul ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	const m = aj - ai ;
	const n = bj - bi ;

	// TODO then |B| = 1 and could be faster
	if ( m === 1 ) return _mul_limb( r , a[0] , b , bi , bj , c , ci , cj ) ;

	if ( n === 1 ) return _mul_limb( r , b[0] , a , ai , aj , c , ci , cj ) ;

	//if ( m === n ) {

		//if ( a === b && ai === bi ) return _sqr( r , a , ai , aj , c , ci , cj ) ;

		//return _mul_n( r , a , ai , aj , b , bi , bj , c , ci , cj ) ;

	//}

	if ( n < THRESHOLD_MUL_TOOM22 ) {
		return _schoolbook_mul( r , a , ai , aj , b , bi , bj , c , ci , cj ) ;
	}

	return _karatsuba( r , a , ai , aj , b , bi , bj , c , ci , cj ) ;


}
