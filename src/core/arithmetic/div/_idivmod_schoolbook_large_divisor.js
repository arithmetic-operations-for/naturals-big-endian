import { _trim_positive } from '../../convert' ;
import { lt } from '../../../api/compare' ;
import { _isub } from '..' ;
import { _idivmod_schoolbook_subroutine } from '.' ;

/**
 * Input
 * -----
 *  - Two integers A and B such that r^(m-1) <= A < r^m and (r^n)/2 <= B < r^(n).
 *  - No leading zeros
 *
 * Output
 * -----
 *  The quotient floor( A/B ) and the remainder A mod B.
 *
 * @param {Number} r The radix.
 * @param {Array} a Dividend.
 * @param {Number} ai Left of dividend.
 * @param {Number} aj Right of dividend.
 * @param {Array} b Divisor.
 * @param {Number} bi Left of divisor.
 * @param {Number} bj Right of divisor.
 * @param {Array} q Quotient.
 * @param {Number} qi Left of quotient.
 */
export function _idivmod_schoolbook_large_divisor ( r , a , ai , aj , b , bi , bj , q , qi ) {

	const m = aj - ai ;
	const n = bj - bi ;

	// If m < n, return the quotient 0 and the remainder A.
	if ( m < n ) return ;

	if ( m === n ) {

		// If m = n, then if A < B, return the quotient 0 and the remainder A;
		if ( lt( a , ai , aj , b , bi , bj ) ) return ;

		// if A ≥ B, return the quotient 1 and the remainder A - B.
		++q[qi+m-1] ;
		_isub( r , a , ai , aj , b , bi , bj ) ;
		return ;

	}

	// If m = n + 1, compute the quotient and remainder of A/B
	// using algorithm 3.1 and return them.
	if ( m === n + 1 ) return _idivmod_schoolbook_subroutine( r , a , ai , aj , b , bi , bj , q , qi ) ;


	// 4. A' <- A/β^{m-n-1} and s <- A mod β^{m-n-1}
	const _aj = ai + n + 1 ;

	// 5. Compute the quotient q' and the remainder r' of A'/B using algorithm 3.1.
	_idivmod_schoolbook_subroutine( r , a , ai , _aj , b , bi , bj , q , qi ) ;

	// 6. Compute the quotient q and remainder r of( β^{m-n-1} r' + s ) / B recursively.
	const ak = _trim_positive( a , ai , _aj ) ;
	_idivmod_schoolbook_large_divisor( r , a , ak , aj , b , bi , bj , q , qi + ak - ai ) ;

	// 7. Return the quotient Q = β^{m-n-1} q' + q and remainder R = r

}
