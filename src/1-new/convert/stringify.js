import { convert , _to_string } from '.' ;

export function stringify ( f , t , a , ai , aj ) {

	if ( t > 36 ) throw 't > 36 not implemented' ;

	const b = convert( f , t , a , ai , aj ) ;

	return _to_string( b ) ;

}
