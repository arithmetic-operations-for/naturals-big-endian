
/**
 * Subtracts 1 from a big endian array.
 *
 * @param {Number} r radix
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 */
export function decrement ( r , a , ai , aj ) {

	while ( --aj >= ai ) {

		if ( a[aj] > 0 ) {
			--a[aj] ;
			return ;
		}

		a[aj] = r - 1 ;

	}

}
