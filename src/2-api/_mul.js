import { _schoolbook_mul , _karatsuba } from '../1-new' ;
import { THRESHOLD_MUL_TOOM22 } from '../1-new' ;

/**
 * |A| >= |B|, |C| >= |A| + |B|.
 */

export function _mul ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	const m = aj - ai ;
	const n = bj - bi ;

	//if ( m === n ) {

		//if ( a === b && ai === bi ) return _sqr( r , a , ai , aj , c , ci , cj ) ;

		//return _mul_n( r , a , ai , aj , b , bi , bj , c , ci , cj ) ;

	//}

	if ( n < THRESHOLD_MUL_TOOM22 ) {
		return _schoolbook_mul( r , a , ai , aj , b , bi , bj , c , ci , cj ) ;
	}

	return _karatsuba( r , a , ai , aj , b , bi , bj , c , ci , cj ) ;


}
