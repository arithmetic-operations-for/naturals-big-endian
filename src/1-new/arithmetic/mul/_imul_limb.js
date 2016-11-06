/**
 * Multiply b by x where x is a single limb.
 */

export function _imul_limb ( r , x , b , bi , bj ) {

	let C = 0 ;

	while ( --bj >= bi ) {

		const t = b[bj] * x + C ;
		const u = t % r ;

		b[bj] = u ;

		C = (t - u) / r ;

	}

}
