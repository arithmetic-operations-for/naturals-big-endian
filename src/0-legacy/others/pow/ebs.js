/**
 * Computes pow(a, b) using exponentiation by squaring.
 *
 * *could add an additional base case for b = 1*
 *
 */

export function __ebs__ (alloc, iszero, setone, iseven, div2, minus1) {

	var ebs = function (a, ai, aj, b, bi, bj, c, ci, cj) {

		var t, u, m, n;

		if ( iszero(b, bi, bj) ) {
			setone(c, ci, cj);
		}
		else if ( iseven(b, bi, bj) ) {
			m = bj - bi;
			t = alloc(m);
			t = div2(b, bi, bj, t, 0, m);

			n = cj - ci;
			u = alloc(n);

			ebs(a, ai, aj, t, 0, m, u, 0, n);

			mul(u, 0, n, u, 0, n, c, ci, cj);
		}
		else{
			m = bj - bi;
			t = alloc(m);
			t = minus1(b, bi, bj, t, 0, m);

			n = cj - ci;
			u = alloc(n);

			ebs(a, ai, aj, t, 0, m, u, 0, n);

			mul(a, ai, aj, u, 0, n, c, ci, cj);
		}
	};
}
