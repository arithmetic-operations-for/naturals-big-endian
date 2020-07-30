import assert from 'assert' ;

/**
 * Subtracts 1 from a big endian array.
 *
 * Wraps on underflow. Hence, does nothing if aj <= ai.
 *
 * O(|A|) time in the worst case.
 * O(1) amortized time over any number of successive operations starting with A = O(1).
 * O(1) amortized time over O(|A|) successive operations starting with any A.
 *
 * @param {Number} r radix
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 */
export function decrement ( r , a , ai , aj ) {

	assert(r >= 2);
	assert(0 <= ai && aj <= a.length);

	while ( --aj >= ai ) {

		if ( a[aj] > 0 ) {
			--a[aj] ;
			return ;
		}

		a[aj] = r - 1 ;

	}

}
