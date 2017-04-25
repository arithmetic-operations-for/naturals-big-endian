import { _build , _alloc , _reset , _copy } from '../array' ;
import { _div } from '../../api' ;
import { _jz } from '../compare' ;

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

export function _convert_slow ( f , t , a , ai , aj , b , bi , bj ) {

	const d = _build( f , t ) ;
	const di = 0 ;
	const dj = d.length ;
	const qi = 0 ;
	const qj = aj - ai ;
	const q = _alloc( qj - qi ) ;

	while ( true ) {

		_reset( q , qi , qj ) ;

		_div( f , a , ai , aj , d , di , dj , q , qi , qj ) ;

		--bj ;
		let x = 0 ;

		for ( let k = ai ; k < aj ; ++k ) {
			x *= f ;
			x += a[k] ;
		}

		b[bj] = x ;

		if ( _jz( q , qi , qj ) ) return ;

		_copy( q , qi , qj , a , ai ) ;

	}

}
