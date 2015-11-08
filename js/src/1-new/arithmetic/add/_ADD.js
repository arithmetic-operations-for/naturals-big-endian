/**
 * Adds two big endian arrays and puts result in a destination array.
 * Wraps on overflow. |C| >= |A| >= |B|.
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
 */

const _ADD = function ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	let C = 0 ;

	while ( --bj >= bi ) {
		const t = a[--aj] + b[bj] + C ;
		c[--cj] = t % r ;
		C = t >= r ;
	}

	while ( --aj >= ai ) {
		const t = a[aj] + C ;
		c[--cj] = t % r ;
		C = t >= r ;
	}

	if ( --cj >= ci ) c[cj] = +C ;

} ;

exports._ADD = _ADD ;
