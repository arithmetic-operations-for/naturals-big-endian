/**
 * Adds single limb to a big endian array.
 * Wraps on overflow. |A| >= 1.
 *
 * @param {Number} r base (radix)
 * @param {Number} x limb to add
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 */

export function _iadd_limb ( r , x , a , ai , aj ) {

	let T = a[--aj] + x ;
	a[aj] = T % r ;

	while ( T >= r && --aj >= ai ) {
		T = a[aj] + 1 ;
		a[aj] = T % r ;
	}

}
