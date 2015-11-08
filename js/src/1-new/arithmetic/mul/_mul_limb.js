/**
 * Compute x * b where x is a single limb.
 */

const _mul_limb = function ( r , x , b , bi , bj , c , ci , cj ) {

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
		const u = t % r ;

		c[cj] = u ;

		C = (t - u) / r ;

	}

} ;

exports._mul_limb = _mul_limb ;
