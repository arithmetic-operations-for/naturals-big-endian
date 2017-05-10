import { _zeros , _copy } from '../../array' ;
import { _mul_limb } from '../mul' ;
import { _idivmod_schoolbook_large_divisor , _div_limb_with_prefix } from '.' ;

/**
 * Computes q <- a / b and a <- a % b.
 * No leading zeros allowed.
 * q has length at least aj - ai
 *
 * @param {Number} r The radix.
 * @param {Array} a Dividend / Remainder.
 * @param {Number} ai
 * @param {Number} aj
 * @param {Array} b Divisor.
 * @param {Number} bi
 * @param {Number} bj
 * @param {Array} q Quotient.
 * @param {Number} qi
 */
export function _idivmod_schoolbook ( r , a , ai , aj , b , bi , bj , q , qi ) {

	const _r = Math.ceil( r / 2 ) ;
	const x = b[bi] ;

	if ( x < _r ) {

		// we need x to be >= _r so we multiply b by ceil( _r / x )
		// this gives us <= ( 1 + _r / x ) b < r^(bj-bi)
		// (this can be implemented faster using bit shifts if r = 2^k )
		const z = Math.ceil( _r / x ) ;
		const m = aj - ai + 1 ;
		const n = bj - bi ;

		const _a = _zeros( m ) ;
		_mul_limb( r , z , a , ai , aj , _a , 0 , m ) ;

		const _b = _zeros( n ) ;
		_mul_limb( r , z , b , bi , bj , _b , 0 , n ) ;

		const _q = _zeros( m ) ;
		_idivmod_schoolbook_large_divisor( r , _a , 0 , m , _b , 0 , n , _q , 0 ) ;
		_div_limb_with_prefix( r , _a[0] , z , _a , 1 , m , a , ai ) ;
		_copy( _q , 1 , m , q , qi ) ;

	}

	else _idivmod_schoolbook_large_divisor( r , a , ai , aj , b , bi , bj , q , qi ) ;

}
