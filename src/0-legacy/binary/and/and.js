
/**
 *
 * BINARY and APPLIED ON a AND b
 *
 * Meaningful only when r is a power of 2.
 *
 * |a| = |b| = |c| > 0
 *
 *
 */

export function and (a, a0, b, b0, c, c0, c1) {

	while (c0 < c1) c[c0++] = a[a0++] & b[b0++];

}


/**
 * BIG ENDIAN BINARY and APPLIED ON a AND b
 *
 * Meaningful only when r is a power of 2.
 *
 * |a| >= |b| > 0
 *
 * treats b as if it was represented with the same number of blocks as a
 */

export function band_t (r){

	var _r = r / 2;

	return function (a, a0, a1, b, b0, b1, c, c0, c1) {

		var at = a1 - b1 + b0;
		var ct = c0 + at - a0;

		if (b[b0] < _r) while (c0 < ct) c[c0++] = 0;
		else            while (c0 < ct) c[c0++] = a[a0++];

		while (c0 < c1) c[c0++] = a[at++] & b[b0++];

	};

}
