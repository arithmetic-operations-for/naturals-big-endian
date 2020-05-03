import { _copy } from '../../../core/array/_copy' ;
import { _idivmod } from './_idivmod' ;

/**
 * Computes the quotient and remainder of two numbers. Uses the most
 * appropriate algorithms depending on the size of the operands. The remainder
 * is written to the dividend array. There are a few assumptions made on the
 * input.
 *
 * Input
 * -----
 *  - No leading zeros in D or Q.
 *  - |D| = |Q| = |R|
 *
 * @param {Number} r The base to work with.
 * @param {Array} D Dividend array.
 * @param {Number} Di Left of dividend.
 * @param {Number} Dj Right of dividend.
 * @param {Array} d Divisor array.
 * @param {Number} di Left of divisor.
 * @param {Number} dj Right of divisor.
 * @param {Array} Q Quotient array.
 * @param {Number} Qi Left of quotient.
 * @param {Number} Qj Right of quotient.
 * @param {Array} R Remainder array.
 * @param {Number} Ri Left of remainder.
 * @param {Number} Rj Right of remainder.
 */
export function _divmod ( r , D , Di , Dj , d , di , dj , Q , Qi , Qj , R , Ri , Rj ) {

	_copy( D , Di , Dj , R , Rj - (Dj - Di) ) ;

	_idivmod( r , R , Ri , Rj , d , di , dj , Q , Qi , Qj ) ;

}
