import assert from 'assert' ;

import { _copy } from "../../array/index.js" ;
import { ge } from "../../../api/compare/index.js" ;

import { _extended_euclidean_algorithm_allocate } from "./_extended_euclidean_algorithm_allocate.js";
import { _extended_euclidean_algorithm_loop } from "./_extended_euclidean_algorithm_loop.js";

/**
 * Precondition:
 *   - A >= B
 *   - No leading zeroes.
 *
 * @param {Number} r The radix.
 * @param {Array} a First input number <code>a>b</code>.
 * @param {Number} ai <code>a</code> left bound.
 * @param {Number} aj <code>a</code> right bound.
 * @param {Array} b Second input number <code>b<a</code>.
 * @param {Number} bi <code>b</code> left bound.
 * @param {Number} bj <code>b</code> right bound.
 */

export function _extended_euclidean_algorithm ( r , a , ai , aj , b , bi , bj ) {

	assert(r >= 2);
	assert(0 <= ai && aj <= a.length);
	assert(0 <= bi && bj <= b.length);
	assert(aj - ai <= 0 || a[ai] !== 0);
	assert(bj - bi <= 0 || b[bi] !== 0);
	assert(ge(a, ai, aj, b, bi, bj));

	const [ R0 , R1 , S0 , T0 , S1 , T1 , Q , X ]  = _extended_euclidean_algorithm_allocate(aj-ai,bj-bi) ;

	_copy(a, ai, aj, R0, 0);
	_copy(b, bi, bj, R1, 0);

	const [ Ri , S0i , T0i , S1i , T1i , steps ] = _extended_euclidean_algorithm_loop ( r , R0 , R1 , S0 , T0 , S1 , T1 , Q , X ) ;

	return steps % 2 === 1 ?
		[ R0 , Ri , S0 , S0i , T0 , T0i , S1 , S1i , T1 , T1i , steps ] :
		[ R1 , Ri , S1 , S1i , T1 , T1i , S0 , S0i , T0 , T0i , steps ] ;

}
