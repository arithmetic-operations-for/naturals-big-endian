import { _idivmod } from '../../../api'
import { _zeros } from '../../array'
import { _trim_positive } from '../../convert'

/**
 * Euclidean algorithm. Computes the gcd of the two input numbers A and B,
 * A >= B. Input arrays are modified ___in-place___.
 *
 * Input
 * -----
 *
 *   - A >= B
 *   - No leading zeros
 *
 * @param {Number} r The radix.
 * @param {Array} a The first input number A.
 * @param {Number} ai Left of A.
 * @param {Number} aj Right of A.
 * @param {Array} b The second input number B.
 * @param {Number} bi Left of B.
 * @param {Number} bj Right of B.
 * @returns {Array} The array containing the gcd of A and B (one of A and B).
 * Return as [ d , di , dj ], where d is the array and di and dj are its left
 * and right bounds.
 */
export function _euclidean_algorithm_loop ( r , a , ai , aj , b , bi , bj  ) {

	// TODO use _imod when implemented
	const _j = aj - ai ;
	const _ = _zeros(_j) ;

	while ( true ) {

		if ( bi === bj ) return [ a , ai , aj ] ;

		_idivmod( r , a , ai , aj , b , bi , bj , _ , _j - (aj - ai) , _j ) ;

		ai = _trim_positive( a , aj - (bj - bi) , aj ) ;

		if ( ai === aj ) return [ b , bi , bj ] ;

		_idivmod( r , b , bi , bj , a , ai , aj , _ , _j - (bj - bi) , _j ) ;

		bi = _trim_positive( b , bj - (aj - ai) , bj ) ;

	}

}
