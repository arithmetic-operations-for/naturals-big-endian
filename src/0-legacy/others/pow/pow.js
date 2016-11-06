/**
 * Computes pow(a, b) using naive exponentiation.
 *
 */

export function __pow__ (alloc, isnotzero, setone, iseven, div2, minus1) {

	var pow = function (a, ai, aj, b, bi, bj, c, ci, cj) {

		var t, m;

		setone(c, ci, cj);

		while (isnotzero(b, bi, bj)) {

			mul(c, ci, cj, a, ai, aj, c, ci, cj);

			minus1(b, bi, bj, b, bi, bj);
		}

	};
}
