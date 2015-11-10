
const _zeros = function ( n ) {

	const a = _alloc( n ) ;

	_reset( a , 0 , n ) ;

	return a ;

} ;

exports._zeros = _zeros ;
