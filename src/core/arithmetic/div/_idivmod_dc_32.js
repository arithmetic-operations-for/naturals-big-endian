import assert from 'assert' ;

import { _zeros , _fill } from '../../array' ;
import { _isub } from '../sub' ;
import { _mul } from '../mul' ;
import { lt } from '../../../api/compare' ;
import { iadd , decrement } from '../../../api/arithmetic' ;
import { _idivmod_dc_21 } from './_idivmod_dc_21' ;

import { _cmp_half } from '../../compare' ;

/**
 * Algorithm 3.4 Divide-and-conquer division (3 by 2)
 * ==================================================
 *
 * Input
 * -----
 *  Two nonnegative integers A and B,
 *  such that A < β^n B and β^{2n} / 2 ≤ B < β^{2n}.
 *  n must be even.
 *
 *                    --------                 -----
 *                   |  |  |  |               |  |  |
 *                    --------                 -----
 *
 * Output
 * ------
 *  The quotient floor( A/B ) and the remainder A mod B.
 *
 * Complexity
 * ----------
 *  T'(n) ≤ T(n) + M(n) + Ln
 *
 */
export function _idivmod_dc_32 ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	assert(r >= 2);
	assert(0 <= ai && aj <= a.length);
	assert(0 <= bi && bj <= b.length);
	assert(0 <= ci && cj <= c.length);
	assert(cj - ci === aj - ai);
	assert(2 * (aj - ai) === 3 * (bj - bi)); // implies bj - bi even
	assert(_cmp_half(r, b, bi, bj) >= 0);

	// 1. Let A = A_2 β^{2n} + A_1 β^n + A_0 and
	//    B = B_1 β^{n} + B_0,
	//    with 0 ≤ A_i < β^n and 0 ≤ B_i < β^n.

	const k = bj - bi ;
	const n = k >>> 1 ;

	// 2. If A_2 < B_1, compute Q = floor( ( A_2 β^n + A_1 ) / B_1 ) with
	//    remainder R_1 using algorithm 3.3;

	if ( lt( a , ai , ai + n , b , bi , bi + n ) ) {
		_idivmod_dc_21( r , a , ai , aj - n , b , bi , bi + n , c , ci + n , cj ) ;
	}

	//    otherwise let Q = β^n - 1, and R_1 = ( A_2 - B_1 ) β^n + A_1 + B_1
	//    (note in this case that A_2 = B_1)

	else {
		_fill( c , cj - n , cj , r - 1 ) ;
		iadd( r , a , ai , aj - n , b , bi , bi + n  ) ;
		_isub( r , a , ai , ai + n , b , bi , bi + n  ) ;
	}

	// 3. R <- R_1 β^n + A_0 - Q*B_0

	const zi = 0 ;
	const zj = n << 1 ;
	const z = _zeros( zj ) ;
	_mul( r , c , cj - n , cj , b , bi + n , bj , z , zi , zj ) ;
	_isub( r , a , ai , aj , z , zi , zj ) ; // TODO optimize when A_2 = B_1

	// 4. if R < 0 , R <- R + B and Q <- Q - 1

	if ( a[ai] === 0 ) return ;
	iadd( r , a , ai , aj , b , bi , bj ) ;
	decrement( r , c , cj - n , cj ) ;

	// 5. if R < 0 , R <- R + B and Q <- Q - 1

	if ( a[ai] === 0 ) return ;
	iadd( r , a , ai , aj , b , bi , bj ) ;
	decrement( r , c , cj - n , cj ) ;

	// 6. Return Q and R

}
