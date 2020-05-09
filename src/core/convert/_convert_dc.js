import { _build , _alloc , _zeros ,_reset , _copy } from '../array' ;
import { _iadd } from '../arithmetic/add' ;
import { _mul } from '../arithmetic/mul' ;
import { _pow_double } from '../arithmetic/pow' ;
import { mul } from '../../api/arithmetic/mul'
import { THRESHOLD_CONVERT_DC } from '../thresholds/conversion' ;
import { _convert } from './_convert' ;
import { _trim_positive } from './_trim_positive' ;

/**
 *
 * O(M(N) log N) where M(N) is multiplication time complexity.
 *
 *   - bj - bi >= log_t(f) * ( aj - ai ) ;
 *
 * Roughly, split number A into two halves A0 * f^l + A1. Convert A0 to B0 and
 * A1 to B1 recursively. Then multiply B0 by f^l in base t and finally add B1.
 *
 * This implementation is not recursive. It is iterative, and will call a
 * simpler subroutine for the base case.
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

//const dbg = (...args) => console.debug(...args) ;
//const str = x => x.join('').replace(/0/g, '_') ;
const str = x => '...' ;
const dbg = () => undefined ;

export function _convert_dc ( f , t , a , ai , aj , b , bi , bj ) {

	dbg({
		fn: '_convert_dc',
		f,
		t,
		a: str(a.slice(ai,aj)),
		b: str(b.slice(bi,bj)),
	}) ;

	const n = aj - ai ;
	const m = bj - bi ;

	// How many limbs of output needed per limb of input.
	const logratio = Math.log( f ) / Math.log( t ) ;

	// Compute block sizes.
	const size_small_block = THRESHOLD_CONVERT_DC >> 1 ;
	const size_small_block_converted = Math.ceil(logratio * size_small_block) | 0 ;
	const full_small_blocks = n / size_small_block | 0 ;
	// assert full_small_blocks >= 2.
	const size_first_small_block = n % size_small_block ;
	const size_first_small_block_converted = Math.ceil(logratio * size_first_small_block) | 0 ;

	// Memory can never exceed this since we rounded up and merging rounds
	// created less and less of these lost fractional limbs.
	// Need to add + 1 everywhere because when f and t have some common power,
	// that representation will need one extra bit. Since multiplication
	// algorithms cannot handle bounds gracefully in that case (they will
	// overwrite the left most block with a zero) we need to add some padding.
	// If you look at the mul/_mul calls, they will have 0-based indexing
	// whereas _iadd calls are 1-based.
	// Actually could exploit that to replace multiplication by shifting.
	let _ti = size_first_small_block_converted ? 1 + size_first_small_block_converted : 0 ;
	const size_memory = _ti + full_small_blocks * (1 + size_small_block_converted) ;
	let tmp1 = _zeros(size_memory) ;
	let tmp2 = _alloc(size_memory) ;

	let _ai = ai + size_first_small_block ;

	// Convert first small block
	if ( size_first_small_block > 0 ) {
		_convert( f , t , a , ai , _ai , tmp1 , 1 , _ti ) ;
		if (tmp1[-1] !== undefined) {
			dbg({
				where: 'convert first small block',
				tmp1,
				_ti,
			}) ;
		}
	}

	// Convert full small blocks
	while ( _ai < aj ) {
		_convert( f , t , a , _ai , _ai + size_small_block , tmp1 , _ti + 1 , _ti + 1 + size_small_block_converted) ;
		if (tmp1[-1] !== undefined) {
			dbg({
				where: `convert block`,
				_ai,
				aj,
				_ti,
				size_small_block_converted,
				tmp1,
			}) ;
		}
		_ai += size_small_block ;
		_ti += 1 + size_small_block_converted ;
	}

	dbg({
		full_small_blocks,
		size_first_small_block,
		size_small_block,
		size_first_small_block_converted,
		size_small_block_converted,
		tmp1: str(tmp1),
	}) ;

	// NOW ALL SMALL BLOCKS ARE CONVERTED, LET US ADD THEM UP

	// k holds the current number of blocks
	let k = full_small_blocks + ( size_first_small_block > 0 ? 1 : 0 ) ;

	let l = size_small_block ;
	// x holds f^l
	let x2 = _zeros(m) ;
	let xi = _build( t , f , x2 , m ) ;
	const _m = l*(m-xi) ;
	let _x = _zeros(_m) ;
	_pow_double (t, l, x2, xi, m, _x, 0, _m) ; // Compute f^l
	const _xi = _trim_positive(_x, 0, _m) ;
	let x1 = _zeros(m) ;
	xi = m - (_m - _xi) ;
	_copy(_x, _xi, _m, x1, xi);
	dbg({
		tmp1: str(tmp1),
		x1: str(x1),
		x1,
		x2,
	})
	dbg({xi});
	xi = _trim_positive(x1, 0, m) ;
	dbg({xi});

	// size_block_converted
	let sbc = size_small_block_converted ;

	//size_first_block_converted
	let sfbc = size_first_small_block_converted > 0 ? size_first_small_block_converted : size_small_block_converted ;

	while ( k !== 2 ) {

		_reset(tmp2, 0, size_memory);

		let extra = k & 1 ;
		let pairs = k >> 1 ;

		dbg({k, extra, pairs, size_memory, sfbc, sbc, xi}) ;
		dbg({
			tmp1: str(tmp1),
			x1: str(x1),
		})

		// Merge first two pairs.
		// NB: the first block is the only one that can be partially empty.
		if ( extra === 0 ) {
			const _tj = 1 + sfbc ;
			const _tk = 1 + _tj + sbc ;
		dbg({
			i: 'extra',
			tmp2: str(tmp2),
		})
			mul( t , x1 , xi , m , tmp1 , 1 , _tj , tmp2 , 0 , _tk - 1 ) ;
		if (tmp1[-1] !== undefined) {
			dbg({
				where: `mul`,
				tmp2,
			}) ;
		}
		dbg({
			i: 'extra',
			mul: str(tmp1.slice(1, _tj)),
			x1: str(x1),
			tmp2: str(tmp2),
		})
			_iadd( t , tmp2 , 1 , _tk - 1 , tmp1 , 1 + _tj , _tk ) ; // TODO cannot overflow ?
		if (tmp1[-1] !== undefined) {
			dbg({
				where: `add`,
				tmp2,
			}) ;
		}
		dbg({
			i: 'extra',
			add: str(tmp1.slice(1+_tj, _tk)),
			tmp2: str(tmp2),
		})
			sfbc += sbc ;
		}
		else {
			_copy(tmp1, 1, sfbc + 1, tmp2, 1);
		}

		dbg({
			i: 'between',
			tmp1: str(tmp1),
			tmp2: str(tmp2),
			x1: str(x1),
		})

		let _ti = sfbc + 2 - extra;

		for ( let i = 2 - extra ; i < pairs + 1 ; ++i ) {
			// C = A f^l + B
			const _tj = _ti + 1 + sbc ;
			const _tk = _tj + 1 + sbc ;
			dbg({
				i,
				pairs,
				extra,
				sfbc,
				sbc,
				_ti,
				_tj,
				_tk,
				size_memory,
				tmp2: str(tmp2),
			})
			mul( t , x1 , xi , m , tmp1 , 1 + _ti , _tj , tmp2 , _ti - i + 1 , _tk - i ) ;
		if (tmp1[-1] !== undefined) {
			dbg({
				where: `mul`,
				tmp2,
			}) ;
		}
			dbg({
				i,
				mul: str(tmp1.slice(1 + _ti, _tj)),
				x1: str(x1),
				tmp2: str(tmp2),
			})
			_iadd( t , tmp2 , _ti - i + 2 , _tk - i , tmp1 , 1 + _tj , _tk ) ;
		if (tmp1[-1] !== undefined) {
			dbg({
				where: `add`,
				tmp2,
			}) ;
		}
			dbg({
				i,
				add: str(tmp1.slice(1+_tj, _tk)),
				tmp2: str(tmp2),
			})
			_ti = _tk;
		}

		// Update f^l to f^2l
		let _xi = m - 2 * (m - xi) ;
		_reset(x2, _xi, m);
		_mul( t , x1 , xi , m , x1 , xi , m , x2 , _xi , m ) ; // TODO use squaring function here
		xi = _trim_positive(x2, _xi, m) ;


		// Swap variables
		const x3 = x1 ;
		x1 = x2 ;
		x2 = x3 ;

		// Swap variables
		const tmp3 = tmp1 ;
		tmp1 = tmp2 ;
		tmp2 = tmp3 ;

		k = pairs + extra ;

		sbc <<= 1 ;

	}

	dbg({
		i: 'end',
		k,
		sfbc,
		sbc,
		size_memory,
		tmp1: str(tmp1),
		tmp1,
		x1: str(x1),
		b: str(b.slice(bi,bj)),
	})
	// Only one pair left to merge. Merge directly into output.
	_reset(tmp2, 0, m+1);
	mul( t , x1 , xi , m , tmp1 , 1 , 1 + sfbc , tmp2 , 0 , m+1 ) ;
	_iadd( t , tmp2 , 1 , m+1 , tmp1 , 2 + sfbc , 2 + sfbc + sbc ) ;
	_copy(tmp2, 1, m+1, b, 0);
	dbg({
		_a: str(a.slice(ai,aj)),
		a,
		_tmp1: str(tmp1),
		tmp1,
		_x1: str(x1),
		x1,
		_x2: str(x2),
		x2,
		_b: str(b.slice(bi,bj)),
		b,
	})

}
