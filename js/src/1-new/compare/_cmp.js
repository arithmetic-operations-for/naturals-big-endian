


const _cmp = function ( a , ai , aj , b , bi , bj ) {

	if ( aj - ai < bj - bi )
		return -_CMP( b , bi , bj , a , ai , aj ) ;
	else
		return  _CMP( a , ai , aj , b , bi , bj ) ;

} ;

exports._cmp = _cmp ;
