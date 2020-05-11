
export function _build ( base , number , data , n ) {

	let q = number ;
	const d = base ;

	while ( q >= d ) {
		data[--n] = q % d ;
		q = ( q / d ) | 0 ;
	}

	data[--n] = q ;

	return n ;

}
