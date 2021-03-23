import { _iadd } from "../../../core/arithmetic/add/index.js" ;

/**
 * Adds a big endian array to another ___in-place___.
 * Wraps on overflow. Works with any combination of array sizes.
 *
 * @param {Number} r base (radix)
 * @param {Array} a first operand (modified in-place)
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 * @param {Number} bj b right
 */
export function iadd ( r , a , ai , aj , b , bi , bj ) {

	const m = aj - ai ;

	return _iadd( r , a , ai , aj , b , Math.max( bi , bj - m ) , bj ) ;

}
