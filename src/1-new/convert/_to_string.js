
export function _to_string ( b ) {

	const n = b.length ;

	const data = [ ] ;

	for ( let k = 0 ; k < n ; ++k ) data.push( _chr( b[k] ) ) ;

	return data.join( '' ) ;

}
