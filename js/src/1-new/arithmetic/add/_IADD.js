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

const _IADD = function ( r , a , ai , aj , b , bi , bj ) {

	let C = 0 ;

	while ( --bj >= bi ) {
		const t = a[--aj] + b[bj] + C ;
		a[aj] = t % r ;
		C = t >= r ;
	}

	while ( --aj >= ai ) {
		const t = a[aj] + C ;
		a[aj] = t % r ;
		C = t >= r ;
	}

} ;

exports._IADD = _IADD ;
