
const parse = function ( f , t , string ) {

	const b = parse_keep_zeros( f , t , string ) ;

	return trim_natural( b , 0 , b.length ) ;

} ;

exports.parse = parse ;
