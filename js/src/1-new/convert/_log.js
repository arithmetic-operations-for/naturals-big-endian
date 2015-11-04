
const _log = function ( x , y ) {

	let z = 0 ;

	while ( x >= y ) {
		if ( x % y ) break ;
		x /= y ;
		++z ;
	}

	return [ z , x ] ;

} ;

exports._log = _log ;
