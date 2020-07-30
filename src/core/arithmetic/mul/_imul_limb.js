import assert from 'assert' ;

/**
 * Multiply b by x where x is a single limb.
 *
 * Also works when x === r (by accident, needed for extensive test of
 * _convert_dc). In that case we check that r*(r-1) <= 2^53 - 1.
 * Maximum possible value for this to work is r = 94906266.
 *
 * TODO define constant. Reuse elsewhere?
 */
export function _imul_limb ( r , x , b , bi , bj ) {

	assert(r >= 2);
	assert(r <= 94906266);
	assert(0 <= x && x <= r);
	assert(0 <= bi && bj <= b.length);

	let C = 0 ;

	while ( --bj >= bi ) {

		const t = b[bj] * x + C ;

		b[bj] = t % r ;

		C = (t / r) | 0 ;

	}

}
