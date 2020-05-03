import { convert_keep_zeros } from '../../core/convert/convert_keep_zeros' ;
import { trim_natural } from '../../core/convert/trim_natural' ;

export function convert ( f , t , a , ai , aj ) {

	const b = convert_keep_zeros( f , t , a , ai , aj ) ;

	return trim_natural( b , 0 , b.length ) ;

}
