import assert from 'assert';

/**
 * Compute x * b where x is a single limb.
 * 0 <= x <= r-1
 * No restriction on operand sizes.
 */

export default function _mul_limb(r, x, b, bi, bj, c, ci, cj) {
	assert(r >= 2);
	assert(x >= 0 && x <= r - 1);
	assert(bi >= 0 && bj <= b.length);
	assert(ci >= 0 && cj <= c.length);

	let C = 0;

	while (true) {
		--bj;
		--cj;

		if (bj < bi) {
			if (cj >= ci) c[cj] = C;
			return;
		}

		if (cj < ci) return;

		const t = b[bj] * x + C;

		c[cj] = t % r;

		C = (t / r) | 0;
	}
}
