import _int from './_int.js';

/**
 * Converts a string representation to a limb array representation without
 * radix conversion.
 *
 * @param {string} string input string
 *
 * @return {number[]} output limb array
 */
export default function _from_string(string) {
	const n = string.length;

	const a = [];

	for (let k = 0; k < n; ++k) a.push(_int(string[k]));

	return a;
}
