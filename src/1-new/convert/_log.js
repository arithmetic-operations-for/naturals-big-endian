
export function _log ( x , y ) {

	let z = 0 ;

	while ( x >= y ) {
		if ( x % y ) break ;
		x /= y ;
		++z ;
	}

	return [ z , x ] ;

}
