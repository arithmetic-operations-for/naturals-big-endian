import assert from 'assert' ;

import { _idivmod_limb , _idivmod_schoolbook , _idivmod_dc } from "../../../core/arithmetic/div/index.js" ;
import { THRESHOLD_DIV_DC } from "../../../core/thresholds/index.js" ;
import { jz } from "../../compare/index.js" ;

/**
 * Computes the quotient and remainder of two numbers. Uses the most
 * appropriate algorithm depending on the size of the operands. The remainder
 * is written to the dividend array. There are a few assumptions made on the
 * input.
 *
 * Input
 * -----
 *  - |d| >= 1
 *  - |D| = |Q| >= 1
 *  - No leading zeros in D or d.
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

	assert(r >= 2);

	assert(0 <= Di && Dj <= D.length);
	assert(0 <= di && dj <= d.length);
	assert(0 <= Qi && Qj <= Q.length);

	assert(dj - di >= 1);
	assert(Dj - Di === Qj - Qi);
	assert(Qj - Qi >= 1);

	assert(D[Di] !== 0);
	assert(d[di] !== 0);
	assert(jz(Q, Qi, Qj));

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
