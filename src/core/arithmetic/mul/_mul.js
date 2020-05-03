import { _mul_limb } from './_mul_limb' ;
import { _schoolbook_mul } from './_schoolbook_mul' ;
import { _karatsuba } from './_karatsuba' ;
import { THRESHOLD_MUL_TOOM22 } from '../../thresholds' ;

/**
 * C is zero initialized
 * |A| >= |B| >= 1, |C| >= |A| + |B|.
 * TODO use schoolbook mul if n = O(log m)
 */

export function _mul ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	//const m = aj - ai ;
	const n = bj - bi ;

	// TODO then |B| = 1 and could be faster
	//if ( m === 1 ) return _mul_limb( r , a[ai] , b , bi , bj , c , ci , cj ) ;

	if ( n === 1 ) return _mul_limb( r , b[bi] , a , ai , aj , c , ci , cj ) ;

	//if ( m === n ) {

		//if ( a === b && ai === bi ) return _sqr( r , a , ai , aj , c , ci , cj ) ;

		//return _mul_n( r , a , ai , aj , b , bi , bj , c , ci , cj ) ;

	//}

	if ( n < THRESHOLD_MUL_TOOM22 ) {
		return _schoolbook_mul( r , a , ai , aj , b , bi , bj , c , ci , cj ) ;
	}

	return _karatsuba( r , a , ai , aj , b , bi , bj , c , ci , cj ) ;


}
