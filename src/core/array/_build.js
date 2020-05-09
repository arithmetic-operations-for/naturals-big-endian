
export function _build ( base , number , data , n ) {

	let q = number ;
	const d = base ;

	while ( q >= d ) {
		const r = q % d ;
		data[--n] = r ;
		q = ( q - r ) / d ;
	}

	data[--n] = q ;

	return n ;

}
