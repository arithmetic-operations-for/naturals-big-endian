import { _div_limb , schoolbook_div , _dc_div } from '../core' ;
import { THRESHOLD_DIV_DC } from '../core' ;

/**
 * Computes the quotient and remainder of two numbers. Uses the most
 * appropriate algorithms depending on the size of the operands. The remainder
 * is written to the dividend array. There are a few assumptions made on the
 * input.
 *
 * Input
 * -----
 *  - No leading zeros
 *  - |A| = |C|
 *
 * @param {Number} r The base to work with.
 * @param {Array} a Dividend / Remainder array.
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b Divisor array.
 * @param {Number} bi b left
 * @param {Number} bj b right
 * @param {Array} c Quotient array.
 * @param {Number} ci c left
 * @param {Number} cj c right
 */
export function _div ( r , a , ai , aj , b , bi , bj , c , ci , cj ) {

	const n = bj - bi ;

	if ( n === 1 ) {
		return _div_limb( r , b[bi] , a , ai , aj , c , ci ) ;
	}

	else if ( n < THRESHOLD_DIV_DC ) {
		return schoolbook_div( r , a , ai , aj , b , bi , bj , c , ci ) ;
	}

	else {
		return _dc_div( r , a , ai , aj , b , bi , bj , c , ci , cj ) ;
	}

}
