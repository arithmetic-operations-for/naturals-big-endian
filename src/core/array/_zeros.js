import { _alloc } from './_alloc' ;
import { _reset } from './_reset' ;

export function _zeros ( n ) {

	const a = _alloc( n ) ;

	_reset( a , 0 , n ) ;

	return a ;

}
