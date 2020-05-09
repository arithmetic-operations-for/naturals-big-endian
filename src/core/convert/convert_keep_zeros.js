import { _zeros, _copy } from '../array' ;
import { _convert } from './_convert' ;
import { _convert_dc } from './_convert_dc' ;
import { THRESHOLD_CONVERT_DC } from '../thresholds/conversion' ;

export function convert_keep_zeros ( f , t , a , ai , aj ) {

	const bi = 0 ;
	const bj = Math.ceil( Math.log( f ) / Math.log( t ) * ( aj - ai ) ) ;
	const b = _zeros( bj - bi ) ;

	if ( f === t ) {
		_copy( a , ai , aj , b , bi ) ;
	}
	else if ( aj - ai >= THRESHOLD_CONVERT_DC ) {
		_convert_dc( f , t , a , ai , aj , b , bi , bj ) ;
	}
	else {
		_convert( f , t , a , ai , aj , b , bi , bj ) ;
	}

	return b ;

}
