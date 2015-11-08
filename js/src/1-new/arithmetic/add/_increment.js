
/**
 * Adds 1 to a big endian array.
 *
 * @param {Number} r radix
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 */
const _increment =  function ( r , a , ai , aj ) {

	const _r = r - 1 ;

	while ( --aj >= ai ) {

		if ( a[aj] < _r ) {
			++a[aj] ;
			return ;
		}

		a[aj] = 0 ;

	}

} ;

exports._increment = _increment ;
