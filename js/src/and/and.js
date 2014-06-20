
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

var and = function (a, a0, b, b0, c, c0, c1) {

	while (c0 < c1) c[c0++] = a[a0++] & b[b0++];

};


/**
 * BIG ENDIAN BINARY and APPLIED ON a AND b
 *
 * Meaningful only when r is a power of 2.
 *
 * |a| >= |b| > 0
 *
 * treats b as if it was represented with the same number of blocks as a
 */

var band_t = function(r){

	var _r = r / 2;

	return function (a, a0, a1, b, b0, b1, c, c0, c1) {

		var at = a1 - b1 + b0;
		var ct = c0 + at - a0;

		if (b[b0] < _r) while (c0 < ct) c[c0++] = 0;
		else            while (c0 < ct) c[c0++] = a[a0++];

		while (c0 < c1) c[c0++] = a[at++] & b[b0++];

	};

};




/**
 * LITTLE ENDIAN BINARY and APPLIED ON a AND b
 *
 * Meaningful only when r is a power of 2.
 *
 * |a| >= |b| > 0
 *
 * treats b as if it was represented with the same number of blocks as a
 */

var land_t = function(r){

	var _r = r / 2;

	return function (a, a0, a1, b, b0, b1, c, c0, c1) {

		var at = a0 + b1 - b0;
		var ct = c1 - at + a0;

		while (c0 < ct) c[c0++] = a[a0++] & b[b0++];

		if (b[b1 - 1] < _r) while (c0 < c1) c[c0++] = 0;
		else                while (c0 < c1) c[c0++] = a[a0++];


	};

};


exports.and = and;
exports.land_t = land_t;
exports.band_t = band_t;