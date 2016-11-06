

/**
 *
 * @param {Number} f the base to convert from
 * @param {Number} t the base to convert to
 * @param {Array} a the origin array
 * @param {Number} ai start offset in the origin array
 * @param {Number} aj end offset in the origin array
 * @param {Array} b the destination array
 * @param {Number} bi start offset in the destination array
 * @param {Number} bj end offset in the destination array
 */

export function _convert_to_larger ( f , t , a , ai , aj , b , bi , bj ) {

	const [ z , x ] = _log( t , f ) ;

	if ( x === 1 ) return _convert_to_larger_fast( f , z , a , ai , aj , b , bi , bj ) ;

	return _convert_slow( f , t , a , ai , aj , b , bi , bj ) ;

}
