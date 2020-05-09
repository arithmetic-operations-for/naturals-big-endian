import { _convert_to_smaller_slow } from './_convert_to_smaller_slow' ;
import { _convert_to_larger_slow } from './_convert_to_larger_slow' ;

/**
 *
 * f != t
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

export function _convert_slow ( f , t , a , ai , aj , b , bi , bj ) {

	if ( f > t ) return _convert_to_smaller_slow( f , t , a , ai , aj , b , bi , bj ) ;
	else return _convert_to_larger_slow( f , t , a , ai , aj , b , bi , bj ) ;

}
