import { _cmp_n } from '../../compare' ;
import { increment } from '../../../api/arithmetic/add/increment' ;
import { _isub } from '../sub' ;
import { _idivmod_schoolbook_subroutine_do } from './_idivmod_schoolbook_subroutine_do' ;

/**
 * Input
 * -----
 *  - Two integers A and B such that 0 <= A < r^(n+1) and (r^n)/2 <= B < r^n.
 *  - |a| = |b| + 1
 *  - |q| = |a|
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
export function _idivmod_schoolbook_subroutine ( r , a , ai , aj , b , bi , bj , q , qi ) {

	// If A ≥ B*β, compute the quotient q and remainder r of ( A − B*β ) / B
	// and return β + q and r.
	// Note that then A − B*β < B*β since A < 2 B*β because of the
	// preconditions above. Hence the preconditions hold for
	// _idivmod_schoolbook_subroutine_do.
	if ( _cmp_n( a , ai , aj - 1 , b , bi ) >= 0 ) {
		_isub( r , a , ai , aj - 1 , b , bi , bj ) ;
		_idivmod_schoolbook_subroutine_do( r , a , ai , aj , b , bi , bj , q , qi ) ;
		increment( r , q , qi , qi + aj - ai - 1 ) ;
	}
	else {
		_idivmod_schoolbook_subroutine_do( r , a , ai , aj , b , bi , bj , q , qi ) ;
	}

}
