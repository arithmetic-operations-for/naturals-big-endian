import { _build , _alloc , _reset , _copy } from '../array' ;
import { _idivmod } from '../../api/arithmetic/div' ;
import { jz } from '../../api/compare/jz' ;

/**
 *
 * O(N^2). However the constants are very large and depend on t/f when t > f.
 * See _convert_to_smaller_slow and _convert_to_larger_slow for implementations
 * with better constants.
 *
 * @param {Number} f the base to convert from
 * @param {Number} t the base to convert to
 * @param {Array} a the origin array
 * @param {Number} ai start offset in the origin array
 * @param {Number} aj end offset in the origin array
 * @param {Array} b the destination array
 * @param {Number} bi start offset in the destination array
 * @param {Number} bj end offset in the destination array
 */

export function _convert_ultra_slow ( f , t , a , ai , aj , b , bi , bj ) {

	const d = _build( f , t ) ;
	const n = d.length ;
	const m = aj - ai ;
	const q = _alloc( m ) ;
	const r = _alloc( m ) ;        // NOTE that this copy is unnecessary when
	_copy( a , ai , aj , r , 0 ) ; // called from parse since we can discard it.

	while ( true ) {

		_reset( q , 0 , m ) ;

		_idivmod( f , r , 0 , m , d , 0 , n , q , 0 , m ) ;

		--bj ;
		let x = 0 ;

		for ( let k = 0 ; k < m ; ++k ) {
			x *= f ;
			x += r[k] ;
		}

		b[bj] = x ;

		if ( jz( q , 0 , m ) ) return ;

		_copy( q , 0 , m , r , 0 ) ;

	}

}
