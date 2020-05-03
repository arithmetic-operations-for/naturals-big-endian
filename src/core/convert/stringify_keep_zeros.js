import { convert_keep_zeros } from './convert_keep_zeros' ;
import { _to_string } from './_to_string' ;

export function stringify_keep_zeros ( f , t , a , ai , aj ) {

	if ( t > 36 ) throw new Error('t > 36 not implemented') ;

	const b = convert_keep_zeros( f , t , a , ai , aj ) ;

	return _to_string( b ) ;

}
