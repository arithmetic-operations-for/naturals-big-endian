import { convert_keep_zeros , _to_string } from '.' ;

export function stringify_keep_zeros ( f , t , a , ai , aj ) {

	if ( t > 36 ) throw 't > 36 not implemented' ;

	const b = convert_keep_zeros( f , t , a , ai , aj ) ;

	return _to_string( b ) ;

}
