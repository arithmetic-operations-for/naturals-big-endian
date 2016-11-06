import { convert_keep_zeros , trim_natural } from '.' ;

export function convert ( f , t , a , ai , aj ) {

	const b = convert_keep_zeros( f , t , a , ai , aj ) ;

	return trim_natural( b , 0 , b.length ) ;

}
