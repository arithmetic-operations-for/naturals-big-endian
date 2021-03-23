import {_idivmod_limb_with_prefix} from './_idivmod_limb_with_prefix.js';

/**
 * Divides a big endian number by a single limb number.
 * Can only work with limbs of size at most sqrt( 2^53 ).
 *
 * @param {Number} r The radix.
 * @param {Number} d The divisor.
 * @param {Array} D The dividend.
 * @param {Number} Di Left of dividend.
 * @param {Number} Dj Right of dividend.
 * @param {Array} Q The quotient.
 * @param {Number} Qi Left of quotient.
 */
export function _idivmod_limb(r, d, D, Di, Dj, Q, Qi) {
	// Simply prefix the dividend with 0
	return _idivmod_limb_with_prefix(r, 0, d, D, Di, Dj, Q, Qi);
}
