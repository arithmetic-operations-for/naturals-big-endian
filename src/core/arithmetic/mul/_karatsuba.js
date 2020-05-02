import { add , iadd } from '../../../api' ;
import { _mul } from '.' ;
import { _isub } from '..' ;
import { _zeros , _copy } from '../..' ;

/**
 *
 * Multiply two big endian arrays using karatsuba algorithm,
 * |A| >= |B| > 0, |C| >= 2 * |A|, |A| > 1.
 *
 * /!\ BLOCK MULTIPLICATION RESULT MUST HOLD IN THE JAVASCRIPT NUMBER TYPE
 *     (DOUBLE i.e. 53 bits)
 *
 * EXPLANATION
 * ###########
 *
 * We consider the numbers a and b, both of size N = 2n.
 *
 * We divide a and b into their lower and upper parts.
 *
 * a = a1 r^{n} + a0 (1)
 * b = b1 r^{n} + b0 (2)
 *
 * We express the product of a and b using their lower and upper parts.
 *
 * a b = (a1 r^{n} + a0) (b1 r^{n} + b0) (3)
 *     = a1 b1 r^{2n} + (a1 b0 + a0 b1) r^{n} + a0 b0 (4)
 *
 * This gives us 4 multiplications with operands of size n.
 * Using a simple trick, we can reduce this computation to 3 multiplications.
 *
 * We give the 3 terms of (4) the names z0, z1 and z2.
 *
 * z2 = a1 b1
 * z1 = a1 b0 + a0 b1
 * z0 = a0 b0
 *
 * a b  = z2 r^{2n} + z1 r^{n} + z0
 *
 * We then express z1 using z0, z2 and one additional multiplication.
 *
 * (a1 + a0)(b1 + b0) = a1 b1 + a0 b0 + (a1 b0 + a0 b1)
 *                    = z2 + z0 + z1
 *
 * z1 = (a1 + a0)(b1 + b0) - z2 - z0
 *
 * AN ANOTHER WAY AROUND (not used here)
 *
 * (a1 - a0)(b1 - b0) = (a1 b1 + a0 b0) - (a1 b0 + a0 b1)
 * (a0 - a1)(b1 - b0) = (a1 b0 + a0 b1) - (a1 b1 + a0 b0)
 * a b = (r^{2n} + r^{n})a1 b1 + r^{n}(a0 - a1)(b1 - b0) + (r^{n} + 1)a0 b0
 *
 * This algorithm is a specific case of the Toom-Cook algorithm, when m = n =
 * 2.
 *
 * For further reference, see
 *  - http://en.wikipedia.org/wiki/Karatsuba_algorithm
 *  - http://en.wikipedia.org/wiki/Toom–Cook_multiplication
 *
 * @param {Number} r base (radix)
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 * @param {Number} bj b right
 * @param {Array} c result, must be 0 initialized
 * @param {Number} ci c left
 * @param {Number} cj c right
 */

export function _karatsuba ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	const i = aj - ai ;
	const j = bj - bi ;
	const k = cj - ci ;

	const n  = Math.ceil( i / 2 ) ;
	const I  = i + j ;
	const N  = 2 * n ;
	const N_ = I - N ;
	const i_ = aj - n ;
	const j_ = Math.max( bi , bj - n ) ;

	const t1 = _zeros( n + 1 ) ; // + 1 to handle addition overflows
	const t2 = _zeros( n + 1 ) ; // and guarantee reducing k for the
	const t3 = _zeros( N + 2 ) ; // recursive calls
	const z2 = _zeros( N_ ) ;
	const z0 = _zeros( N ) ;

	// RECURSIVE CALLS
	_mul( r , a , ai , i_ , b , bi , j_ , z2 , 0 , N_ ) ;           // z2 = a1.b1
	_mul( r , a , i_ , aj , b , j_ , bj , z0 , 0 , N ) ;            // z0 = a0.b0
	add( r , a , ai , i_ , a , i_ , aj , t1 , 0 , n + 1 ) ;         // (a0 + a1)
	add( r , b , bi , j_ , b , j_ , bj , t2 , 0 , n + 1 ) ;         // (b1 + b0)
	_mul( r , t1 , 1 , n + 1 , t2 , 1 , n + 1 , t3 , 2 , N + 2 ) ;  // (a0 + a1)(b1 + b0)

	// BUILD OUTPUT
	_copy( z2 , 0 , N_ , c , cj - I ) ; // + z2 . r^{2n}
	_copy( z0 , 0 , N  , c , cj - N ) ; // + z0

	// overflow on t1, add t2 . r^{n}
	if ( t1[0] ) iadd( r , t3 , 0 , n + 2 , t2 , 0 , n + 1 ) ;

	// overflow on t2, add t1 . r^{n} (except t1[0])
	if ( t2[0] ) iadd( r , t3 , 0 , n + 2 , t1 , 1 , n + 1 ) ;

	iadd( r , c , ci , cj - n , t3 , 0 , N + 2 ) ; // + (a0 + a1)(b1 + b0) . r^{n}
	_isub( r , c , ci , cj - n , z2 , 0 , N_ ) ;   // - z2 . r^{n}
	_isub( r , c , ci , cj - n , z0 , 0 , N ) ;    // - z1 . r^{n}

}
