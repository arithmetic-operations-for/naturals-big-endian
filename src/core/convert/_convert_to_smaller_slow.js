import { _alloc , _reset , _copy } from '../array' ;
import { _idivmod_limb } from '../arithmetic/div' ;
import { _trim_positive } from './_trim_positive' ;

/**
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

export function _convert_to_smaller_slow ( f , t , a , ai , aj , b , bi , bj ) {

	const m = aj - ai ;
	const q = _alloc( m ) ;
	const r = _alloc( m ) ;        // NOTE that this copy is unnecessary when
	_copy( a , ai , aj , r , 0 ) ; // called from parse since we can discard it.

	let i = 0 ;

	while ( true ) {

		_reset( q , i , m ) ;

		_idivmod_limb ( f , t , r , i , m , q , i ) ;

		--bj ;

		b[bj] = r[m-1] ;

		i = _trim_positive(q, i, m);
		if ( i === m ) return ;

		_copy( q , i , m , r , i ) ;

	}

}
