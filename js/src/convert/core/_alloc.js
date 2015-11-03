
const _alloc = function ( n ) {

	const data = new Array( n ) ;

	for ( let i = 0 ; i < n ; ++i ) data[i] = 0 ;

	return data ;

} ;

exports._alloc = _alloc ;
