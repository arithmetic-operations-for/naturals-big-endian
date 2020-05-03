/**
 * Adds a big endian array to another.
 * Wraps on overflow. |A| >= |B|.
 *
 * @param {Number} r base (radix)
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 * @param {Number} bj b right
 */

export function _iadd ( r , a , ai , aj , b , bi , bj ) {

	let C = 0 ;

	while ( --bj >= bi ) {
		const T = a[--aj] + b[bj] + C ;
		a[aj] = T % r ;
		C = T >= r ;
	}

	while ( --aj >= ai ) {
		const T = a[aj] + C ;
		a[aj] = T % r ;
		C = T >= r ;
	}

}
