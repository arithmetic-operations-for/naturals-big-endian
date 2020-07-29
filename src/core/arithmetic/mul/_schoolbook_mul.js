import assert from 'assert' ;

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

	assert(r >= 2);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(ci >= 0 && cj <= c.length);
	assert(cj - ci >= (aj - ai) + (bj - bi));

	const m = aj - ai ;
	const n = bj - bi ;
	--aj ;
	--bj ;
	--cj ;

	for ( let i = 0 ; i < m ; ++i ) {

		let q = 0 ;

		for ( let j = 0 ; j < n ; ++j ) {

			// t will never exceed (r-1) * (r+1) = r^2 - 1
			// We must have r^2 - 1 <= 2^53 - 1
			// Hence r <= 2^{53/2} = 94906265.62425156.
			// Hence r <= 94906265.
			const t = c[cj-i-j] + q + a[aj-i] * b[bj-j] ;
			c[cj-i-j] = t % r ;
			q = ( t / r ) | 0 ; // Will never exceed r-1

		}

		c[cj-i-n] = q ;

	}

}
