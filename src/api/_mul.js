import { _mul_limb , _schoolbook_mul , _karatsuba } from '../core' ;
import { THRESHOLD_MUL_TOOM22 } from '../core' ;

/**
 * |A| >= |B|, |C| >= |A| + |B|.
 */

export function _mul ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	const m = aj - ai ;
	const n = bj - bi ;

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
