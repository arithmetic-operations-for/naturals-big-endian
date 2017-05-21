import { _ADD } from '../core/arithmetic' ;

/**
 * Adds two big endian arrays and puts result in a destination array.
 * Wraps on overflow. Works with any combination of array sizes.
 *
 * @param {Number} r base (radix)
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 * @param {Number} bj b right
 * @param {Array} c result, must be 0 initialized
 * @param {Number} ci c left
 * @param {Number} cj c right
 *
 */

export function add ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	ci = Math.max( 0 , ci );
	const k = cj - ci;

	ai = Math.max( 0 , ai , aj - k ) ;
	bi = Math.max( 0 , bi , bj - k ) ;
	const m = aj - ai;
	const n = bj - bi;

	return m < n ?
		_ADD( r , b , bi , bj , a , ai , aj , c , ci , cj ) :
		_ADD( r , a , ai , aj , b , bi , bj , c , ci , cj ) ;

}
