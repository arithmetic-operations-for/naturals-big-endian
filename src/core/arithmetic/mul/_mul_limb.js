import assert from 'assert' ;

/**
 * Compute x * b where x is a single limb.
 * 0 <= x <= r-1
 * No restriction on operand sizes.
 */

export function _mul_limb ( r , x , b , bi , bj , c , ci , cj ) {

	assert(r >= 2);
	assert(0 <= x && x <= r-1);
	assert(0 <= bi && bj <= b.length);
	assert(0 <= ci && cj <= c.length);

	let C = 0 ;

	while ( true ) {

		--bj ;
		--cj ;

		if ( bj < bi ) {
			if ( cj >= ci ) c[cj] = C ;
			return ;
		}

		if ( cj < ci ) return ;

		const t = b[bj] * x + C ;

		c[cj] = t % r ;

		C = (t / r) | 0 ;

	}

}
