import assert from 'assert' ;

import { THRESHOLD_DIV_DC } from '../../thresholds' ;
import { _idivmod_dc_32 } from './_idivmod_dc_32' ;
import { _idivmod_schoolbook_large_divisor } from './_idivmod_schoolbook_large_divisor' ;

import { _cmp_half } from '../../compare' ;

/**
 * Algorithm 3.3 Divide-and-conquer division (2 by 1)
 * ==================================================
 *
 * Input
 * -----
 *  Two nonnegative integers A and B,
 *  such that A < β^n B and β^n / 2 ≤ B < β^n.
 *  n must be even if n >= THRESHOLD_DIV_DC.
 *
 *                    -----------                 -----
 *                   |  :  |  :  |               |  :  |
 *                    -----------                 -----
 *
 * Output
 * ------
 *  The quotient floor( A/B ) and the remainder A mod B.
 *
 * Complexity
 * ----------
 *  T(n) = 2T'(n/2) + K
 *
 */
export function _idivmod_dc_21 ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	assert(THRESHOLD_DIV_DC >= 2);
	assert(r >= 2);
	assert(0 <= ai && aj <= a.length);
	assert(0 <= bi && bj <= b.length);
	assert(0 <= ci && cj <= c.length);
	assert(cj - ci === aj - ai);
	assert(aj - ai === 2 * (bj - bi));
	assert(_cmp_half(r, b, bi, bj) >= 0);

	if ( bj - bi < THRESHOLD_DIV_DC ) {
		return _idivmod_schoolbook_large_divisor( r , a , ai , aj , b , bi , bj , c , ci ) ;
	}

	assert((bj - bi) % 2 === 0);

	// 1. Let A = A_3 β^{3n/2} + A_2 β^n + A_1 β^{n/2} + A_0 and
	//    B = B_1 β^{n/2} + B_0,
	//    with 0 ≤ A_i < β^{n/2} and 0 ≤ B_i < β^{n/2}.

	const m = aj - ai ;
	const k = m >>> 2 ;

	// 2. Compute the high half Q_1 of the quotient as
	//    Q_1 = ( A_3 β^n + A_2 β^{n/2} + A_1 ) / B
	//    with remainder R_1 using algorithm 3.4.

	_idivmod_dc_32( r , a , ai , aj - k , b , bi , bj , c , ci , cj - k ) ;

	// 3. Compute the low half Q_0 of the quotient as
	//    Q_0 = ( R_1 β^{n/2} + A_0 ) / B
	//    with remainder R_0 using algorithm 3.4.

	_idivmod_dc_32( r , a , ai + k , aj , b , bi , bj , c , ci + k , cj ) ;

	// 4. Return the quotient Q = Q_1 β^{n/2} + Q_0 and the remainder R = R_0 .

}
