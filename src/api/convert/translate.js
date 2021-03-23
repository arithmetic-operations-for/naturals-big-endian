import parse from './parse.js';
import stringify from './stringify.js';

/**
 * Converts a string representation in base f to a string representation in
 * base t.
 *
 * @param {number} f radix of the input
 * @param {number} t radix of the output
 * @param {string} string the input representation
 *
 * @return {string} the output representation
 */
export default function translate(f, t, string) {
	const a = parse(f, t, string);
	return stringify(t, t, a, 0, a.length);
}
