
const parse_keep_zeros = function ( f , t , string ) {

	if ( f > 36 ) throw 'f > 36 not implemented' ;

	const n = string.length ;

	const a = [ ] ;

	for ( let k = 0 ; k < n ; ++k ) a.push( _int( string[k] ) ) ;

	return convert_keep_zeros( f , t , a , 0 , n ) ;

} ;

exports.parse_keep_zeros = parse_keep_zeros ;
