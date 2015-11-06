
const stringify_keep_zeros = function ( f , t , a , ai , aj ) {

	if ( t > 36 ) throw 't > 36 not implemented' ;

	const b = convert_keep_zeros( f , t , a , ai , aj ) ;

	return _to_string( b ) ;

} ;

exports.stringify_keep_zeros = stringify_keep_zeros ;
