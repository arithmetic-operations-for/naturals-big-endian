
/**
 * Algorithm 3.4 Divide-and-conquer division (3 by 2)
 * ==================================================
 *
 * Input
 * -----
 *  Two nonnegative integers A and B,
 *  such that A < β^n B and β^n /2 ≤ B < β^{2n}.
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
const _dc_div_32 = function ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	// 1. Let A = A_2 β^{2n} + A_1 β^n + A_0 and
	//    B = B_1 β^{n} + B_0,
	//    with 0 ≤ A_i < β^n and 0 ≤ B_i < β^n.

	const n = bj - bi ;
	const k = m >>> 1 ;

	// 2. If A_2 < B_1, compute Q = floor( ( A_2 β^n + A_1 ) / B ) with
	//    remainder R_1 using algorithm 3.3;

	if ( _lt( a , ai , ai + n , b , bi , bi + n ) ) {
		_dc_div_21( r , a , ai , aj - n , b , bi , bi + n , c , ci + n , cj ) ;
	}

	//    otherwise let Q = β^n - 1, and R_1 = ( A_2 - B_1 ) β^n + A_1 + B_1

	else {
		_fill( c , cj - n , cj , r - 1 ) ;
		_iadd( r , a , ai , aj - n , b , bi , bi + n  ) ;
		_isub( r , a , ai , ai + n , b , bi , bi + n  ) ;
	}

	// 3. R <- R_1 ^n + A_4 - Q*B_0

	const zi = 0 ;
	const zj = n << 1 ;
	const z = _zeros( zj ) ;
	_mul( r , c , cj - n , cj , b , bi + n , bj , z , zi , zj ) ;
	_isub( r , a , ai , aj , z , zi , zj ) ;

	// 4. if R < 0 , R <- R + B and Q <- Q - 1

	if ( !_jz( a , ai , ai + n ) ) {
		_iadd( r , a , ai , aj , b , bi , bj ) ;
		_decrement( r , c , cj - n , cj ) ;

		// 5. if R < 0 , R <- R + B and Q <- Q - 1

		if ( !_jz( a , ai , ai + n ) ) {
			_iadd( r , a , ai , aj , b , bi , bj ) ;
			_decrement( r , c , cj - n , cj ) ;
		}

	}

	// 6. Return Q and R

} ;

exports._dc_div_32 = _dc_div_32 ;
