import { _trim_positive } from '../../../core/convert' ;
import { _cmp_n } from '../../../core/compare' ;
import { _extended_euclidean_algorithm } from '.' ;

/**
 * No constraints on the input.
 *
 * @param {Number} r The radix.
 * @param {Array} a First input number <code>a>b</code>.
 * @param {Number} ai <code>a</code> left bound.
 * @param {Number} aj <code>a</code> right bound.
 * @param {Array} b Second input number <code>b<a</code>.
 * @param {Number} bi <code>b</code> left bound.
 * @param {Number} bj <code>b</code> right bound.
 */

export function extended_euclidean_algorithm ( r, a, ai, aj, b, bi, bj ) {

	const _ai = _trim_positive(a, ai, aj);
	const _bi = _trim_positive(b, bi, bj);
	const m = aj - _ai ;
	const n = bj - _bi ;

	if ( m > n || ( m === n && _cmp_n(a, _ai, aj, b, _bi) >= 0 ) )
		return _extended_euclidean_algorithm( r , a , _ai , aj , b , _bi , bj ) ;

	const [ R0 , T0 , S0 , T1 , S1 , steps ] =
		_extended_euclidean_algorithm( r , b , _bi , bj , a , _ai , aj ) ;

	return [ R0 , S0 , T0 , S1 , T1 , steps + 1 ] ;

}
