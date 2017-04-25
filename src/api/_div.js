import { _div_limb , schoolbook_div , _dc_div } from '../core' ;
import { THRESHOLD_DIV_DC } from '../core' ;
/**
 * |A| = |C|
 */
export function _div ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	const n = bj - bi ;

	if ( n === 1 ) {
		return _div_limb( r , b[bi] , a , ai , aj , c , ci ) ;
	}

	else if ( n < THRESHOLD_DIV_DC ) {
		return schoolbook_div( r , a , ai , aj , b , bi , bj , c , ci ) ;
	}

	else {
		return _dc_div( r , a , ai , aj , b , bi , bj , c , ci , cj ) ;
	}

}
