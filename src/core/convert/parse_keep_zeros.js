import _from_string from './_from_string.js';
import convert_keep_zeros from './convert_keep_zeros.js';

/**
 * Converts a string representation in base f to a limb array in base t keeping
 * all leading zeros resulting from the conversion process.
 *
 * @param {number} f radix of the representation
 * @param {number} t radix of the limb array
 * @param {string} string the input representation
 *
 * @return {number[]} the resulting limb array
 */
export default function parse_keep_zeros(f, t, string) {
	if (f > 36) throw new Error('f > 36 not implemented');

	const a = _from_string(string);

	return convert_keep_zeros(f, t, a, 0, a.length);
}
