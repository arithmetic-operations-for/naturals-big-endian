import { _from_string } from './_from_string' ;
import { convert_keep_zeros } from './convert_keep_zeros' ;

export function parse_keep_zeros ( f , t , string ) {

	if ( f > 36 ) throw new Error('f > 36 not implemented') ;

	const a = _from_string(string) ;

	return convert_keep_zeros( f , t , a , 0 , a.length ) ;

}
