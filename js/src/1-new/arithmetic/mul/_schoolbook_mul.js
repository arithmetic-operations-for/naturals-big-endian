
/**
 * Computes the product of two big endian arrays using schoolbook
 * multiplication. |C| >= |A|+|B|.
 */

const _schoolbook_mul = function ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	const m = aj - ai ;
	const n = bj - bi ;
	--aj ;
	--bj ;
	--cj ;

	for ( let i = 0 ; i < m ; ++i ) {

		let q = 0 ;

		for ( let j = 0 ; j < n ; ++j ) {

			const t = c[cj-i-j] + q + a[aj-i] * b[bj-j] ;
			const s = t % r ;
			c[cj-i-j] = s ;
			q = ( t - s ) / r ;

		}

		c[cj-i-n] = q ;

	}

} ;

exports._schoolbook_mul = _schoolbook_mul ;
