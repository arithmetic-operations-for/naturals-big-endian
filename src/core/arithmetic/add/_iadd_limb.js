import assert from 'assert' ;

/**
 * Adds single limb to a big endian array.
 * Wraps on overflow.
 *
 * Input:
 *   - |A| >= 1.
 *
 * @param {Number} r base (radix)
 * @param {Number} x limb to add
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 */

export function _iadd_limb ( r , x , a , ai , aj ) {

	assert(r >= 2);
	assert(0 <= x && x <= r - 1);
	assert(0 <= ai && aj <= a.length);
	assert(aj - ai >= 1);

	let T = a[--aj] + x ;
	a[aj] = T % r ;

	while ( T >= r && --aj >= ai ) {
		T = a[aj] + 1 ;
		a[aj] = T % r ;
	}

}
