
/**
 * Subtracts 1 from a big endian array.
 *
 * @param {Number} r radix
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 */
const _decrement =  function ( r , a , ai , aj ) {

	while ( --aj >= ai ) {

		if ( a[aj] > 0 ) {
			--a[aj] ;
			return ;
		}

		a[aj] = r - 1 ;

	}

} ;

exports._decrement = _decrement ;
