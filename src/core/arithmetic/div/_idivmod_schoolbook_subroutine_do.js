import { _zeros } from '../../array' ;
import { gt } from '../../../api/compare' ;
import { _isub } from '../sub' ;
import { _mul_limb } from '../mul' ;

/**
 * Input
 * -----
 *  - Two integers A and B such that 0 <= A < (r^(n+1))/2 and (r^n)/2 <= B < r^n.
 *    (Hence A < B * β)
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
export function _idivmod_schoolbook_subroutine_do ( r , a , ai , aj , b , bi , bj , q , qi ) {

	const m = aj - ai ;

	// Since A < B*β, then A/B < β
	// q <- min [ ( β a_0 + a_1 ) / b_0 , β - 1 ]
	let _q = Math.min( r - 1 , Math.floor( ( a[ai] * r + a[ai+1] ) / b[bi] ) ) ;

	// fix _q
	const T = _zeros( m ) ;
	_mul_limb( r , _q , b , bi , bj , T , 0 , m ) ;

	if ( gt( T , 0 , m , a , ai , aj ) ) {
		--_q ;
		_isub( r , T , 0 , m , b , bi , bj ) ;

		if ( gt( T , 0 , m , a , ai , aj ) ) {
			--_q ;
			_isub( r , T , 0 , m , b , bi , bj ) ;
		}

	}

	q[qi + m - 1] += _q ;

	_isub( r , a , ai , aj , T , 0 , m ) ;

}
