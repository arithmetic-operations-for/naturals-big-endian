
/**
 * |A| = |C|
 */
const _div = function ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

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

} ;

exports._div = _div ;
