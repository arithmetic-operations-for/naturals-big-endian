import { _copy } from '../../array' ;

import {
	_extended_euclidean_algorithm_allocate ,
	_extended_euclidean_algorithm_loop ,
} from '.' ;

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

	const [ R0 , R1 , S0 , T0 , S1 , T1 , Q , X ]  = _extended_euclidean_algorithm_allocate(aj-ai,bj-bi) ;

	_copy(a, ai, aj, R0, 0);
	_copy(b, bi, bj, R1, 0);

	const [ Ri , S0i , T0i , S1i , T1i , steps ] = _extended_euclidean_algorithm_loop ( r , R0 , R1 , S0 , T0 , S1 , T1 , Q , X ) ;

	return steps % 2 === 1 ?
		[ R0 , Ri , S0 , S0i , T0 , T0i , S1 , S1i , T1 , T1i , steps ] :
		[ R1 , Ri , S1 , S1i , T1 , T1i , S0 , S0i , T0 , T0i , steps ] ;

}
