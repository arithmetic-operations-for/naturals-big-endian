import assert from 'assert' ;

import { _zeros , _copy } from '../../array' ;
import { _mul_limb } from '../mul' ;
import { _idivmod_schoolbook_large_divisor } from './_idivmod_schoolbook_large_divisor' ;
import { _div_limb_with_prefix } from './_div_limb_with_prefix' ;

import { jz } from '../../../api/compare/jz' ;

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

	assert(r >= 2);
	assert(0 <= ai && aj <= a.length);
	assert(0 <= bi && bj <= b.length);
	assert(0 <= qi);
	assert(q.length - qi >= aj - ai);
	assert(aj - ai <= 0 || a[ai] !== 0); // no leading zero
	assert(bj - bi >= 1 && b[bi] !== 0); // no leading zero
	//assert(jz(q, qi, qi + aj - ai)); // NOT TRUE BECAUSE OF PATH: euclidean_algorithm > _imod

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
