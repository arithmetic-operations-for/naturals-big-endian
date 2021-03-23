import parse_keep_zeros from '../../core/convert/parse_keep_zeros.js';
import trim_natural from '../../core/convert/trim_natural.js';

/**
 * Converts a string representation in base f to a limb array in base t.
 *
 * @param {number} f radix of the representation
 * @param {number} t radix of the limb array
 * @param {string} string the input representation
 *
 * @return {number[]} the resulting limb array
 */
export default function parse(f, t, string) {
	const b = parse_keep_zeros(f, t, string);

	return trim_natural(b, 0, b.length);
}
