import { _int } from './_int' ;

export function _from_string ( string ) {

	const n = string.length ;

	const a = [ ] ;

	for ( let k = 0 ; k < n ; ++k ) a.push( _int( string[k] ) ) ;

	return a ;

}
