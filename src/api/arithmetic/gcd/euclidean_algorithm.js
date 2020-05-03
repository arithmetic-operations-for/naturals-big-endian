
import { _trim_positive } from '../../../core/convert' ;
import { _alloc } from '../../../core/array' ;
import { _copy } from '../../../core/array' ;
import { _cmp_n } from '../../../core/compare' ;
import { _euclidean_algorithm_loop } from '../../../core/arithmetic/gcd' ;

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
 * @returns {Array} The array containing the gcd of A and B (one of A and B).
 * Return as [ d , di , dj ], where d is the array and di and dj are its left
 * and right bounds.
 */
export function euclidean_algorithm ( r , a , ai , aj , b , bi , bj ) {


	const _ai = _trim_positive(a, ai, aj);
	const _bi = _trim_positive(b, bi, bj);
	const m = aj - _ai ;
	const n = bj - _bi ;

	const R0 = _alloc(m);
	_copy(a, _ai, aj, R0, 0);
	const R1 = _alloc(n);
	_copy(b, _bi, bj, R1, 0);

	return m > n || ( m === n && _cmp_n(R0 , 0 , m , R1 , 0) >= 0 ) ?
		_euclidean_algorithm_loop( r , R0 , 0 , m , R1 , 0 , n ) :
		_euclidean_algorithm_loop( r , R1 , 0 , n , R0 , 0 , m ) ;

}
