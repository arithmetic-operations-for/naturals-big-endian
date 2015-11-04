
const convert = function ( f , t , a , ai , aj ) {

	const bi = 0 ;
	const bj = Math.ceil( Math.log( f ) / Math.log( t ) * ( aj - ai ) ) ;
	const b = _alloc( bj - bi ) ;

	_convert( f , t , a , ai , aj , b , bi , bj ) ;

	return b ;

} ;

exports.convert = convert ;
