import { _CMP } from '.' ;

export function _cmp ( a , ai , aj , b , bi , bj ) {

	if ( aj - ai < bj - bi )
		return -_CMP( b , bi , bj , a , ai , aj ) ;
	else
		return  _CMP( a , ai , aj , b , bi , bj ) ;

}
