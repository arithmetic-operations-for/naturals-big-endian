
export function _int ( x ) {

	if ( x >= '0' && x <= '9' ) return x.charCodeAt( 0 ) - 48 ;
	if ( x >= 'A' && x <= 'Z' ) return x.charCodeAt( 0 ) - 55 ;
	if ( x >= 'a' && x <= 'z' ) return x.charCodeAt( 0 ) - 87 ;

	throw 'invalid literal for _int: ' + x ;

}
