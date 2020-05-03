import { _idivmod_limb , _idivmod_schoolbook , _idivmod_dc } from '../../../core/arithmetic/div' ;
import { THRESHOLD_DIV_DC } from '../../../core/thresholds' ;

/**
 * Computes the quotient and remainder of two numbers. Uses the most
 * appropriate algorithms depending on the size of the operands. The remainder
 * is written to the dividend array. There are a few assumptions made on the
 * input.
 *
 * Input
 * -----
 *  - No leading zeros in D.
 *  - |D| = |Q|
 *  - Q is zero initialized.
 *
 * @param {Number} r The base to work with.
 * @param {Array} D Dividend / Remainder array (remainder computed in-place).
 * @param {Number} Di Left of dividend.
 * @param {Number} Dj Right of dividend.
 * @param {Array} d Divisor array.
 * @param {Number} di Left of divisor.
 * @param {Number} dj Right of divisor.
 * @param {Array} Q Quotient array (zero initialized).
 * @param {Number} Qi Left of quotient.
 * @param {Number} Qj Right of quotient.
 */
export function _idivmod ( r , D , Di , Dj , d , di , dj , Q , Qi , Qj ) {

	const dn = dj - di ;

	if ( dn === 1 ) {
		return _idivmod_limb( r , d[di] , D , Di , Dj , Q , Qi ) ;
	}

	else if ( dn < THRESHOLD_DIV_DC ) {
		return _idivmod_schoolbook( r , D , Di , Dj , d , di , dj , Q , Qi ) ;
	}

	else {
		return _idivmod_dc( r , D , Di , Dj , d , di , dj , Q , Qi , Qj ) ;
	}

}
