import assert from 'assert' ;

import { _trim_positive } from "../../convert/_trim_positive.js" ;
import { lt } from "../../../api/compare/lt.js" ;
import { _validate } from "../../array/_validate.js" ;
import { _isub } from "../sub/index.js" ;
import { _idivmod_schoolbook_subroutine } from "./_idivmod_schoolbook_subroutine.js" ;

import { _cmp_half } from "../../compare/index.js" ;

/**
 * Input
 * -----
 *  - Two integers A and B such that r^(m-1) <= A < r^m and (r^n)/2 <= B < r^(n).
 *  - No leading zeros (ONLY IN B?)
 *  - Q is initialized with some limbs.
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

	assert(r >= 2);
	assert(0 <= ai && aj <= a.length);
	assert(0 <= bi && bj <= b.length);
	assert(0 <= qi);
	assert(q.length - qi >= aj - ai);
	//assert(aj - ai <= 0 || a[ai] !== 0); // no leading zero NOT TRUE ?
	assert(_cmp_half(r, b, bi, bj) >= 0); // (r^n)/2 <= B < r^n (+ no leading zero)
	assert(_validate(r, q, qi, qi + aj - ai));

	while ( true ) { // non-recursive

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
	//_idivmod_schoolbook_large_divisor( r , a , ak , aj , b , bi , bj , q , qi + ak - ai ) ;
	qi += ak - ai; // non recursive because some implementation
	ai = ak;       // do not have tail-call optimization ?

	// 7. Return the quotient Q = β^{m-n-1} q' + q and remainder R = r
	}

}
