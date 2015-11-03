
const stringify = function ( f , t , a , ai , aj ) {

	if ( t > 36 ) throw 't > 36 not implemented' ;

	const b = convert( f , t , a , ai , aj ) ;
	const n = b.length ;

	const data = [ ] ;

	for ( let k = 0 ; k < n ; ++k ) data.push( _chr( b[k] ) ) ;

	return data.join( '' ) ;

} ;

exports.stringify = stringify ;
