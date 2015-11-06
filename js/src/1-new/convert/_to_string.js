
const _to_string = function ( b ) {

	const n = b.length ;

	const data = [ ] ;

	for ( let k = 0 ; k < n ; ++k ) data.push( _chr( b[k] ) ) ;

	return data.join( '' ) ;

} ;

exports._to_string = _to_string ;
