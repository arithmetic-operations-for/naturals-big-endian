import { _build , _alloc , _zeros ,_reset , _copy } from "../array/index.js" ;
import { _iadd } from "../arithmetic/add/index.js" ;
import { _mul } from "../arithmetic/mul/index.js" ;
import { _pow_double } from "../arithmetic/pow/index.js" ;
import { mul } from "../../api/arithmetic/mul/index.js"
import { _convert_slow } from "./_convert_slow.js" ;
import { _trim_positive } from "./_trim_positive.js" ;

import assert from 'assert' ;

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
 * @param {Number} size_small_block the size of a small block
 * @param {Number} f the base to convert from
 * @param {Number} t the base to convert to
 * @param {Array} a the origin array
 * @param {Number} ai start offset in the origin array
 * @param {Number} aj end offset in the origin array
 * @param {Array} b the destination array
 * @param {Number} bi start offset in the destination array
 * @param {Number} bj end offset in the destination array
 */

export function _convert_dc ( size_small_block , f , t , a , ai , aj , b , bi , bj ) {

	assert(f >= 2);
	assert(t >= 2);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);

	const n = aj - ai ;
	const m = bj - bi ;

	// How many limbs of output needed per limb of input.
	const logratio = Math.log( f ) / Math.log( t ) ;
	assert(m >= logratio * n);

	// Compute block sizes.
	const size_small_block_converted = Math.ceil(logratio * size_small_block) | 0 ;
	const full_small_blocks = n / size_small_block | 0 ;
	assert(full_small_blocks >= 2) ;
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
		_convert_slow( f , t , a , ai , _ai , tmp1 , 1 , _ti ) ;
	}

	// Convert full small blocks
	while ( _ai < aj ) {
		_convert_slow( f , t , a , _ai , _ai + size_small_block , tmp1 , _ti + 1 , _ti + 1 + size_small_block_converted) ;
		_ai += size_small_block ;
		_ti += 1 + size_small_block_converted ;
	}

	// NOW ALL SMALL BLOCKS ARE CONVERTED, LET US ADD THEM UP

	// k holds the current number of blocks
	let k = full_small_blocks + ( size_first_small_block > 0 ? 1 : 0 ) ;

	// x holds f^size_small_block
	let x2 = _zeros(m) ;
	let xi = _build( t , f , x2 , m ) ;
	const _m = size_small_block*(m-xi) ;
	let _x = _zeros(_m) ;
	_pow_double (t, size_small_block, x2, xi, m, _x, 0, _m) ; // Compute f^size_small_block
	const _xi = _trim_positive(_x, 0, _m) ;
	let x1 = _zeros(m) ;
	xi = m - (_m - _xi) ;
	_copy(_x, _xi, _m, x1, xi);
	xi = _trim_positive(x1, 0, m) ;

	// size_block_converted
	let sbc = size_small_block_converted ;

	//size_first_block_converted
	let sfbc = size_first_small_block_converted > 0 ? size_first_small_block_converted : size_small_block_converted ;

	while ( k !== 2 ) {
		assert(k > 2);

		_reset(tmp2, 0, size_memory);

		let extra = k & 1 ;
		let pairs = k >> 1 ;

		// Merge first two pairs.
		// NB: the first block is the only one that can be partially empty.
		if ( extra === 0 ) {
			const _tj = 1 + sfbc ;
			const _tk = 1 + _tj + sbc ;
			mul( t , x1 , xi , m , tmp1 , 1 , _tj , tmp2 , 0 , _tk - 1 ) ;
			_iadd( t , tmp2 , 1 , _tk - 1 , tmp1 , 1 + _tj , _tk ) ; // TODO cannot overflow ?
			sfbc += sbc ;
		}
		else {
			_copy(tmp1, 1, sfbc + 1, tmp2, 1);
		}

		let _ti = sfbc + 2 - extra;

		for ( let i = 2 - extra ; i < pairs + 1 ; ++i ) {
			// C = A f^l + B
			const _tj = _ti + 1 + sbc ;
			const _tk = _tj + 1 + sbc ;
			mul( t , x1 , xi , m , tmp1 , 1 + _ti , _tj , tmp2 , _ti - i + 1 , _tk - i ) ;
			_iadd( t , tmp2 , _ti - i + 2 , _tk - i , tmp1 , 1 + _tj , _tk ) ;
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

	// Only one pair left to merge. Merge directly into output.
	_reset(tmp2, 0, m+1);
	// Needed to correct overestimated value for sfbc
	const offset = _trim_positive(tmp1, 1, 1 + sfbc);
	mul( t , x1 , xi , m , tmp1 , offset , 1 + sfbc , tmp2 , 0 , m+1 ) ;
	_iadd( t , tmp2 , 1 , m+1 , tmp1 , 2 + sfbc , 2 + sfbc + sbc ) ;
	_copy(tmp2, 1, m+1, b, 0);

}
