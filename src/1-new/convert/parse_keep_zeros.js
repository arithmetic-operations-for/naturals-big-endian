import { _int , convert_keep_zeros } from '.' ;

export function parse_keep_zeros ( f , t , string ) {

	if ( f > 36 ) throw 'f > 36 not implemented' ;

	const n = string.length ;

	const a = [ ] ;

	for ( let k = 0 ; k < n ; ++k ) a.push( _int( string[k] ) ) ;

	return convert_keep_zeros( f , t , a , 0 , n ) ;

}
