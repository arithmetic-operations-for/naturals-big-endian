import { _alloc , _copy } from "../array/index.js" ;
import { _idivmod_limb } from "../arithmetic/div/index.js" ;
import { _trim_positive } from "./_trim_positive.js" ;

import assert from 'assert' ;

/**
 *
 * O(N^2). f > t.
 *
 * |A| >= 1
 * |B| is large enough to hold the result
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

	assert(f >= t);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(aj - ai >= 1);
	assert(bj - bi >= aj - ai);

	let batch = 1;
	let shift = t;
	for (; shift * t <= f; shift *= t, ++batch) ;

	const m = aj - ai ;
	let q = _alloc( m ) ;
	let r = _alloc( m ) ;          // NOTE that this copy is unnecessary when
	_copy( a , ai , aj , r , 0 ) ; // called from parse since we can discard it.

	let i = 0 ;

	while ( true ) {

		_idivmod_limb ( f , shift , r , i , m , q , i ) ;

		const end = Math.max(bi, bj - batch) ;
		let block = r[m-1];

		do {
			b[--bj] = block % t ;
			block = (block / t) | 0 ;
		} while ( bj > end ) ;

		i = _trim_positive(q, i, m);
		if ( i === m ) return ;

		//_copy( q , i , m , r , i ) ;
		const tmp = q;
		q = r;
		r = tmp;

	}

}
