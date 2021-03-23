/**
 * Converts a limb to a character representation. This only works if the limb
 * is at most 35.
 *
 * @param {number} x The input limb.
 *
 * @return {string} The corresponding character representation.
 */
export default function _chr(x) {
	if (x < 10) return String.fromCharCode(48 + x);
	return String.fromCharCode(87 + x);
}
