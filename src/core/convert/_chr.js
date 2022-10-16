import assert from 'assert';

/**
 * Converts a limb to a character representation. This only works if the limb
 * is at most 35.
 *
 * @param {number} x The input limb.
 *
 * @return {string} The corresponding character representation.
 */
export default function _chr(x) {
	assert(x >= 0);
	assert(x < 36);
	// eslint-disable-next-line unicorn/prefer-code-point
	if (x < 10) return String.fromCharCode(48 + x);
	// eslint-disable-next-line unicorn/prefer-code-point
	return String.fromCharCode(87 + x);
}
