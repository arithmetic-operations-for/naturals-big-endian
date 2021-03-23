import { _mul_limb } from "./_mul_limb.js" ;
import { _schoolbook_mul } from "./_schoolbook_mul.js" ;
import { _karatsuba } from "./_karatsuba.js" ;
import { THRESHOLD_MUL_TOOM22 } from "../../thresholds/index.js" ;

import assert from 'assert' ;

/**
 * C is zero initialized
 * |A| >= |B| >= 0, |C| >= |A| + |B|.
 * TODO use schoolbook mul if n = O(log m)
 */

export function _mul ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	assert(r >= 2);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(ci >= 0 && cj <= c.length);
	assert(bj - bi >= 0);
	assert(aj - ai >= bj - bi);
	assert(cj - ci >= (aj - ai) + (bj - bi));
	assert(THRESHOLD_MUL_TOOM22 >= 1);

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
