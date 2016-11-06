
export function parse ( f , t , string ) {

	const b = parse_keep_zeros( f , t , string ) ;

	return trim_natural( b , 0 , b.length ) ;

}
