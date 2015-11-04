
const _build = function ( base , number ) {

	const data = [ ] ;

	let q = number ;
	const d = base ;

	while ( q >= d ) {
		const r = q % d ;
		data.push( r ) ;
		q = ( q - r ) / d ;
	}

	data.push( q ) ;

	return data.reverse( ) ;

} ;

exports._build = _build ;
