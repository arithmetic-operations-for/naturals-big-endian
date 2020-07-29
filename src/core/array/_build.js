import assert from 'assert' ;

export function _build ( base , number , data , n ) {

	assert(typeof base === 'number') ;
	assert(typeof number === 'number') ;
	assert(n <= data.length);

	let q = number ;
	const d = base ;

	while ( q >= d ) {
		data[--n] = q % d ;
		q = ( q / d ) | 0 ;
	}

	data[--n] = q ;

	assert(n >= 0);
	return n ;

}
