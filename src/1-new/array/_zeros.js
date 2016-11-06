
export function _zeros ( n ) {

	const a = _alloc( n ) ;

	_reset( a , 0 , n ) ;

	return a ;

}
