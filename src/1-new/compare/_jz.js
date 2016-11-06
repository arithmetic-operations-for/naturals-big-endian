
/**
 * Returns true if number is 0.
 *
 * @param {array} a first operand
 * @param {int} ai a left
 * @param {int} aj a right
 */

export function _jz ( a , ai , aj ) {

	for ( ; ai < aj ; ++ai ) if ( a[ai] !== 0 ) return false ;

	return true ;

}
