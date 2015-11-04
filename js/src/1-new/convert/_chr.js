
const _chr = function ( x ) {

	if ( x < 10 ) return String.fromCharCode( 48 + x ) ;
	return String.fromCharCode( 87 + x ) ;

} ;

exports._chr = _chr ;
