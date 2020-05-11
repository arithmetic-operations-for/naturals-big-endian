
/**
 * Computes the product of two big endian arrays using schoolbook
 * multiplication. |C| >= |A|+|B|.
 *
 * TODO Can this be optimized if we know that |A| >= |B|?
 * Probably better to do many small passes rather than few large passes ?!
 * This is what this implementation achieves, although it returns correct
 * results even when |A| < |B|.
 */

export function _schoolbook_mul ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	const m = aj - ai ;
	const n = bj - bi ;
	--aj ;
	--bj ;
	--cj ;

	for ( let i = 0 ; i < m ; ++i ) {

		let q = 0 ;

		for ( let j = 0 ; j < n ; ++j ) {

			const t = c[cj-i-j] + q + a[aj-i] * b[bj-j] ;
			c[cj-i-j] = t % r ;
			q = ( t / r ) | 0 ;

		}

		c[cj-i-n] = q ;

	}

}
