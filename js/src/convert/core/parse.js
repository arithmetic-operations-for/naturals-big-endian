
const parse = function ( f , t , string ) {

	if ( f > 36 ) throw 'f > 36 not implemented' ;

	const n = string.length ;

	const a = [ ] ;

	for ( let k = 0 ; k < n ; ++k ) a.push( _int( string[k] ) ) ;

	return convert( f , t , a , 0 , n ) ;

} ;

exports.parse = parse ;
