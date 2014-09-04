(function(exports, undefined){

	'use strict';


/* js/src/abs */
/* js/src/abs/abs.js */
/**
 * COMPUTE THE ABSOLUTE VALUE OF NUMBER n
 */

// exports.abs = function abs() {};


/* js/src/add */
/* js/src/add/add.js */

/**
 * @param {int} r base (radix)
 */


exports.badd_t = function badd_t (r) {


	/**
	 * Adds two big endian arrays, k >= i >= j
	 * wraps
	 *
	 * @param {array} a first operand
	 * @param {int} i0 a left
	 * @param {int} i1 a right
	 * @param {array} b second operand
	 * @param {int} j0 b left
	 * @param {int} j1 b right
	 * @param {array} c result, must be 0 initialized
	 * @param {int} k0 c left
	 * @param {int} k1 c right
	 */

	return function(a, i0, i1, b, j0, j1, c, k0, k1){
		var t, C = 0;

		while(--j1 >= j0){
			--i1; --k1;
			t = a[i1] + b[j1] + C;
			c[k1] = t % r;
			C = t / r >= 1;
		}

		while(--i1 >= i0){
			--k1;
			t = a[i1] + C;
			c[k1] = t % r;
			C = t / r >= 1;
		}

		if(--k1 >= k0){
			c[k1] = +C;
		}

	};

};


/**
 * @param {int} r base (radix)
 */

var ladd_t = exports.ladd_t = function(r){

	/**
	 * Adds two little endian arrays, k >= i >= j
	 * wraps
	 *
	 * @param {array} a first operand
	 * @param {int} i0 a left
	 * @param {int} i1 a right
	 * @param {array} b second operand
	 * @param {int} j0 b left
	 * @param {int} j1 b right
	 * @param {array} c result, must be 0 initialized
	 * @param {int} k0 c left
	 * @param {int} k1 c right
	 */

	return function(a, i0, i1, b, j0, j1, c, k0, k1){
		var t, C = 0;

		while(j0 < j1){
			t = a[i0] + b[j0] + C;
			c[k0] = t % r;
			C = t / r >= 1;
			++i0; ++j0; ++k0;
		}

		while(i0 < i1){
			t = a[i0] + C;
			c[k0] = t % r;
			C = t / r >= 1;
			++i0; ++k0;
		}

		if(k0 < k1){
			c[k0] = +C;
		}

	};
};
/* js/src/and */
/* js/src/and/and.js */

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

		var ct = c0 + b1 - b0;

		while (c0 < ct) c[c0++] = a[a0++] & b[b0++];

		if (b[b0 - 1] < _r) while (c0 < c1) c[c0++] = 0;
		else                while (c0 < c1) c[c0++] = a[a0++];


	};

};


exports.and = and;
exports.land_t = land_t;
exports.band_t = band_t;
/* js/src/cmp */
/* js/src/cmp/cmp.js */

var bcmp_t = function(){


	/**
	 * Compares two big endian arrays, |a| >= |b|
	 *
	 * @param {array} a first operand
	 * @param {int} ai a left
	 * @param {int} aj a right
	 * @param {array} b second operand
	 * @param {int} bi b left
	 * @param {int} bj b right
	 *
	 * @return {int} 1 if a > b; 0 if a = b; -1 otherwise.
	 */

	return function(a, ai, aj, b, bi, bj){

		var tmp = aj - bj + bi;

		for (; ai < tmp; ++ai)
			if (a[ai] > 0) return 1;


		// same size aj - ai === bj - bi
		for (; ai < aj; ++ai, ++bi) {
			if (a[ai] > b[bi]) return  1;
			if (a[ai] < b[bi]) return -1;
		}

		return 0;
	};

};

var lcmp_t = function(){

	/**
	 * Compares two little endian arrays, |a| >= |b|
	 *
	 * @param {array} a first operand
	 * @param {int} ai a left
	 * @param {int} aj a right
	 * @param {array} b second operand
	 * @param {int} bi b left
	 * @param {int} bj b right
	 *
	 * @return {int} 1 if a > b; 0 if a = b; -1 otherwise.
	 */

	return function(a, ai, aj, b, bi, bj){

		var tmp = ai + bj - bi;

		--aj; --bj;

		for (; aj >= tmp; --aj)
			if (a[aj] > 0) return 1;


		// same size aj - ai === bj - bi
		for (; aj >= ai; --aj, --bj) {
			if (a[aj] > b[bj]) return  1;
			if (a[aj] < b[bj]) return -1;
		}

		return 0;
	};
};

exports.bcmp_t = bcmp_t;
exports.lcmp_t = lcmp_t;
/* js/src/cmp/eq.js */


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is equal to _b_.
 */

var eq_t = function(cmp){
	return function (a, ai, aj, b, bi, bj) {
		return cmp(a, ai, aj, b, bi, bj) === 0;
	};
};

exports.eq_t = eq_t;
/* js/src/cmp/ge.js */


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is greater or equal to _b_.
 */

var ge_t = function(cmp){
	return function (a, ai, aj, b, bi, bj) {
		return cmp(a, ai, aj, b, bi, bj) >= 0;
	};
};

exports.ge_t = ge_t;
/* js/src/cmp/gt.js */


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is greater than _b_.
 */

var gt_t = function(cmp){
	return function (a, ai, aj, b, bi, bj) {
		return cmp(a, ai, aj, b, bi, bj) > 0;
	};
};

exports.gt_t = gt_t;
/* js/src/cmp/le.js */


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is less or equal to _b_.
 */

var le_t = function(cmp){
	return function (a, ai, aj, b, bi, bj) {
		return cmp(a, ai, aj, b, bi, bj) <= 0;
	};
};

exports.le_t = le_t;
/* js/src/cmp/lt.js */


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is less than _b_.
 */

var lt_t = function(cmp){
	return function (a, ai, aj, b, bi, bj) {
		return cmp(a, ai, aj, b, bi, bj) < 0;
	};
};

exports.lt_t = lt_t;
/* js/src/cmp/ne.js */


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is not equal to _b_.
 */

var ne_t = function(cmp){
	return function (a, ai, aj, b, bi, bj) {
		return cmp(a, ai, aj, b, bi, bj) !== 0;
	};
};

exports.ne_t = ne_t;
/* js/src/convert */
/* js/src/convert/basechange.js */


var bbasechange_t = function(ar, br, calloc, mov){

	var basechange = function(a, ai, aj, b, bi, bj){

		var m, n, d, q, z, r, ri, f, t, tmp, w;

		f = ar;
		t = br;

		if (f > t) {
			d = calloc(1);
			d[0] = br;
			z = 1;
		}
		else {
			z = 0;

			while (t > 1) {
				t /= f;
				++z;
			}

			z += (t === 1);

			d = calloc(z);

			t = br;

			w = z;

			while (t > 0) {
				tmp = t % f;
				d[--w] = tmp;
				t = (t - tmp) / f;
			}
		}

		m = aj - ai;
		n = bj - bi;

		q = calloc(m);
		r = calloc(m);
		mov(a, ai, aj, r, 0);


		ri = 0;
		--bj;

		while (!lt(r, 0, m, d, 0, z)) {
			div(r, 0, m, d, 0, z, q, 0);
			for (w = 1; w <= z; ++w) {
				b[bj] *= ar;
				b[bj] += r[m - w];
			}
			mov(q, 0, m, r, 0);
			--bj;
		}

		for (w = 1; w <= z; ++w) {
			b[bj] *= ar;
			b[bj] += r[m - w];
		}


	};

	return basechange;

};


exports.bbasechange_t = bbasechange_t;
/* js/src/convert/convert.js */


var bconvert_t = function(ar, br, bjoin_t, bsplit_t) {

	var f, t, z;

	f = ar;
	t = br;
	z = 0;

	if (br <= ar) {

		while (f >= t) {
			if (f % t) break;
			f /= t;
			++z;
		}

		if (f === 1) {
			return bsplit_t(br, z);
		}

		else {
			// TODO
			throw 'f >= t + log(t) does not divide log(f) not implemented';
		}
	}

	else {

		while (t >= f) {
			if (t % f) break;
			t /= f;
			++z;
		}

		if (t === 1) {
			return bjoin_t(ar, z);
		}

		else {
			// TODO
			throw 't > f + log(f) does not divide log(t) not implemented';
		}
	}
}

exports.bconvert_t = bconvert_t;
/* js/src/convert/join.js */



var bjoin_t = function(ar, z) {

	var join = function(a, ai, aj, b, bi, bj) {

		var m, n, q, r, i, w, t;

		m = aj - ai;
		n = bj - bi;

		// number of parts of first
		// destination block if incomplete
		r = m % z;

		// number of complete blocks in destination
		q = (m - r) / z;

		// total number of blocks in destination
		// (complete ones + first if incomplete)
		w = q + !!r;


		if (n >= w) {
			// if destination can contain more than
			// what is available in source then
			// compute the effective write start
			// in destination and set i to the correct
			// offset according to the size
			// (in source blocks) of the
			// first destination block if incomplete
			bi = bj - w;
			i = (z - r) % z;
		}
		else {
			// if source contains more than what
			// destination can handle set the effective
			// read start in source and set i to 0 because
			// all blocks will be complete
			ai = aj - n * z;
			i = 0;
		}

		for (; ai < aj && bi < bj; ++bi) {
			t = 0;
			for (; i < z; ++i) {
				t *= ar;     // aggregate source blocks
				t += a[ai];  // using simple
				++ai;        // multiply + add
			}
			b[bi] = t;  // set block in destination
			i = 0;
		}

	};

	return join;

};

exports.bjoin_t = bjoin_t;
/* js/src/convert/split.js */



var bsplit_t = function(br, z) {

	var split = function(a, ai, aj, b, bi, bj) {

		var m, n, q, r, i, w, t;

		m = bj - bi;
		n = aj - ai;

		// number of parts of first
		// destination block if incomplete
		r = m % z;

		// number of complete blocks in destination
		q = (m - r) / z;

		// total number of blocks in destination
		// (complete ones + first if incomplete)
		w = q + !!r;


		if (n >= w) {
			// if source contains more than what
			// destination can handle set the effective
			// read start in source and set i to the correct
			// offset according to the size
			// (in destination blocks) of the
			// first source block if incomplete
			ai = aj - w;
			i = (z - r) % z;
		}
		else {
			// if destination can contain more than
			// what is available in source then
			// compute the effective write start
			// in destination and set i to 0 because
			// all blocks will be complete
			bi = bj - n * z;
			i = 0;
		}

		for (; ai < aj && bi < bj; ++ai) {
			q = a[ai];
			t = bi + z - 1 - i;
			bi += z - i;
			for (; i < z; ++i) {
				r = q % br;        // unpack source blocks
				q = (q - r) / br;  // using simple
				b[t] = r;          // modulo + quotient
				--t;
			}
			i = 0;
		}

	};

	return split;

};

exports.bsplit_t = bsplit_t;
/* js/src/div */
/* js/src/div/div.js */



var bdiv_t = function(lt, sub){

	/**
	 * Computes quotient and remainder of two big endian arrays.
	 * <p>
	 * Computes quotient and remainder of two big endian arrays
	 * using long division algorithm (the one teached in
	 * european primary schools).
	 *
	 * /!\ This algorithm modifies its first operand.
	 *
	 * HYP : q is at least as large as r
	 *       b is not zero
	 *
	 * @param {array} r dividend and remainder
	 * @param {int} ri r left
	 * @param {int} rj r right
	 * @param {array} b divisor
	 * @param {int} bi b left
	 * @param {int} bj b right
	 * @param {array} q quotient, must be 0 initialized
	 * @param {int} qi q left
	 */

	// /!\ There are implicit hypotheses
	//     made on the size of the operands.
	//     Should clarify.

	var div = function(r, ri, rj, b, bi, bj, q, qi){
		var k, t = ri + 1;

		do {

			// trim leading zeros
			//     - maybe could try to put this procedure inside the sub loop
			//     - or assume that the number is trimed at the begining
			//       and put this statement at the end of the main loop
			while (ri < rj && r[ri] === 0) ++ri;

			// search for a remainder block interval
			// greater than the divisor
			//     - maybe could try binary search on the lt function
			//     for another implementation
			k = ri + 1;
			while (k <= rj && lt(r, ri, k, b, bi, bj)) ++k;

			// remainder smaller than divisor --> end
			if (k > rj) break;

			// divide current block interval by quotient
			do{

				// increment quotient block corresponding
				// to current ls block of remainder interval
				++q[qi + k - t];

				// subtract divisor from current remainder
				// block interval
				sub(r, ri, k, b, bi, bj, r, ri, k);

			} while(!lt(r, ri, k, b, bi, bj));


		} while(true);

	};

	return div;

};

exports.bdiv_t = bdiv_t;
/* js/src/gcd */
/* js/src/gcd/gcd.js */
/**
 * COMPUTE THE GREATEST COMMON DIVISOR OF a AND b
 */
/* js/src/lcm */
/* js/src/lcm/lcm.js */
/**
 * COMPUTE THE LEAST COMMON MULTIPLE OF a AND b
 */
/* js/src/log */
/* js/src/log/log.js */

/**
 * FOR A NUMBER n COMPUTE THE GREATEST k SUCH THAT 2^k < n
 */
/* js/src/mod */
/* js/src/mod/mod.js */

/**
 * COMPUTE MODULUS (a % b)
 */
/* js/src/mod/montgomery.js */

/**
 * COMPUTE MODULUS USING MONTGOMERY REDUCTION : http://en.wikipedia.org/wiki/Montgomery_reduction
 */
/* js/src/mpow */
/* js/src/mpow/mpow.js */
/**
 * MODULAR EXPONENTIATION : http://en.wikipedia.org/wiki/Modular_exponentiation
 */
/* js/src/mul */
/* js/src/mul/karatsuba.js */
/**
 * /!\ BLOCK MULTIPLICATION RESULT MUST HOLD IN THE JAVASCRIPT NUMBER TYPE (DOUBLE i.e. 53 bits)
 *
 *
 * @param {function} add addition algorithm
 * @param {function} sub subtraction algorithm
 * @param {function} mul multiplication algorithm
 * @param {function} copy copy algorithm
 * @param {function} calloc array allocator
 * @param {uint} r base (radix)
 *
 *
 * EXPLANATION
 * ###########
 *
 * We consider the numbers a and b, both of size N = 2n.
 *
 * We divide a and b into their lower and upper parts.
 *
 * a = a1 r^{n} + a0 (1)
 * b = b1 r^{n} + b0 (2)
 *
 * We express the product of a and b using their lower and upper parts.
 *
 * a b = (a1 r^{n} + a0) (b1 r^{n} + b0) (3)
 *     = a1 b1 r^{2n} + (a1 b0 + a0 b1) r^{n} + a0 b0 (4)
 *
 * This gives us 4 multiplications with operands of size n.
 * Using a simple trick, we can reduce this computation to 3 multiplications.
 *
 * We give the 3 terms of (4) the names z0, z1 and z2.
 *
 * z2 = a1 b1
 * z1 = a1 b0 + a0 b1
 * z0 = a0 b0
 *
 * a b  = z2 r^{2n} + z1 r^{n} + z0
 *
 * We then express z1 using z0, z2 and one additional multiplication.
 *
 * (a1 + a0)(b1 + b0) = a1 b1 + a0 b0 + (a1 b0 + a0 b1)
 *                    = z2 + z0 + z1
 *
 * z1 = (a1 + a0)(b1 + b0) - z2 - z0
 *
 * AN ANOTHER WAY AROUND (not used here)
 *
 * (a1 - a0)(b1 - b0) = (a1 b1 + a0 b0) - (a1 b0 + a0 b1)
 * (a0 - a1)(b1 - b0) = (a1 b0 + a0 b1) - (a1 b1 + a0 b0)
 * a b = (r^{2n} + r^{n})a1 b1 + r^{n}(a0 - a1)(b1 - b0) + (r^{n} + 1)a0 b0
 */

var bkaratsuba_t = function(add, sub, mul, calloc, mov, r, wrap){

	/**
	 * Multiply two big endian arrays using karatsuba algorithm,
	 * i >= j, k >= 2 * i
	 *
	 *
	 * @param {array} a first operand
	 * @param {int} ai a left
	 * @param {int} aj a right
	 * @param {array} b second operand
	 * @param {int} bi b left
	 * @param {int} bj b right
	 * @param {array} c result, must be 0 initialized
	 * @param {int} ci c left
	 * @param {int} cj c right
	 */

	var karatsuba = function(a, ai, aj, b, bi, bj, c, ci, cj){

		var z0, z2, t1, t2, t3, n, I, N, N_, i_, j_, i, j, k;

		i = aj - ai;
		j = bj - bi;
		k = cj - ci;

		// EMPTY CASE
		if (i <= 0 || j <= 0 || k <= 0) return;

		// BASE CASE i = j = 1
		if (i === 1) {

			z0 = a[ai] * b[bi];
			c[cj-1] = z0 % r;

			if (k > 1) {
				c[cj-2] = (z0 - c[cj-1]) / r;
			}

		}

		// RECURSION
		else{
			n  = Math.ceil(i / 2);
			I  = i + j;
			N  = 2 * n;
			N_ = I - N;
			i_ = aj - n;
			j_ = Math.max(bi, bj - n);

			t1 = calloc(n + 1); // + 1 to handle addition overflows
			t2 = calloc(n + 1); // and guarantee reducing k for the
			t3 = calloc(N + 1); // recursive calls
			z2 = calloc(N_);
			z0 = calloc(N);

		// RECURSIVE CALLS
			mul(a, ai, i_, b, bi, j_, z2, 0, N_);            // z2 = a1.b1
			mul(a, i_, aj, b, j_, bj, z0, 0, N);             // z0 = a0.b0
			add(a, i_, aj, a, ai, i_, t1, 0, n + 1);         // (a0 + a1)
			add(b, bi, j_, b, j_, bj, t2, 0, n + 1);         // (b1 + b0)
			mul(t1, 1, n + 1, t2, 1, n + 1, t3, 1, N + 1);   // (a0 + a1)(b1 + b0)

		// BUILD OUTPUT
			mov(z2, 0, N_, c, cj - I);                       // + z2 . r^{2n}
			mov(z0, 0, N , c, cj - N);                       // + z0

			if (t1[0]) {
				// overflow on t1, add t2 . r^{n}
				add(t3, 0, N + 1 - n, t2, 1, n + 1, t3, 0, N + 1 - n);
			}

			if (t2[0]) {
				// overflow on t2, add t1 . r^{n}
				add(t3, 0, N + 1 - n, t1, 1, n + 1, t3, 0, N + 1 - n);
			}

			if (t1[0] && t2[0]) {
				// overflow on t1 and t2, add 1 . r^{n+1}
				add(t3, 0, N - n, t1, 0, 1, t3, 0, N - n);
			}

			add(c, ci, cj - n, t3, 0, N + 1, c, ci, cj - n); // + (a0 + a1)(b1 + b0) . r^{n}
			sub(c, ci, cj - n, z2, 0, N_, c, ci, cj - n);    // - z2 . r^{n}
			sub(c, ci, cj - n, z0, 0, N, c, ci, cj - n);     // - z1 . r^{n}
		}

	};

	if (wrap !== undefined) karatsuba = wrap(karatsuba);
	if (mul === undefined) mul = karatsuba;

	return karatsuba;

};


exports.bkaratsuba_t = bkaratsuba_t;
/* js/src/mul/mul.js */

var bmul_t = function(r){

	/**
	 * Computes product of two big endian arrays.
	 * <p>
	 * Computes product of two big endian arrays
	 * using long multiplication algorithm (the one teached in
	 * european primary schools)
	 */

	var mul = function(a, ai, aj, b, bi, bj, c, ci, cj){
		var ak, ck = --cj, ct, t, u, v, w, y, z;

		while (bj --> bi && ck >= ci) {
			for (ak = aj, w = 0; ak --> ai && ck >= ci; --ck) {
				t = b[bj] * a[ak];
				u = t % r;
				v = c[ck] + u + w;

				y = v % r;

				c[ck] = y;

				z = (v - y) / r;

				for (ct = ck - 1; z > 0 && ct >= ci; --ct) {
					v = c[ct] + z;
					y = v % r;
					c[ct] = y;
					z = (v - y) / r;
				}

				w = (t - u) / r;
			}
			ck = --cj;
		}
	};

	return mul;

};


exports.bmul_t = bmul_t;
/* js/src/mul/mul53.js */
/**
 * /!\ BLOCK MULTIPLICATION RESULT MUST HOLD IN THE JAVASCRIPT NUMBER TYPE (DOUBLE i.e. 53 bits)
 *
 * big endian 1 block multiplication
 *
 */

var bmul53_t = function(r){

	/**
	 * Multiply two blocks, result is put in a 1 or 2 blocks big endian array.
	 * aj - ai <= 1, bj - bi <= 1, cj - ci <= 2
	 *
	 *
	 * @param {array} a first operand
	 * @param {int} ai a left
	 * @param {int} aj a right
	 * @param {array} b second operand
	 * @param {int} bi b left
	 * @param {int} bj b right
	 * @param {array} c result, must be 0 initialized
	 * @param {int} ci c left
	 * @param {int} cj c right
	 */

	var mul = function(a, ai, aj, b, bi, bj, c, ci, cj){

		var v;

		// EMPTY CASE
		if (aj <= ai || bj <= bi || cj <= ci) return;

		v = a[ai] * b[bi];
		c[cj-1] = v % r;

		if (cj > ci + 1) {
			c[cj-2] = (v - c[cj-1]) / r;
		}

	};

	return mul;

};


exports.bmul53_t = bmul53_t;


/**
 * /!\ BLOCK MULTIPLICATION RESULT MUST HOLD IN THE JAVASCRIPT NUMBER TYPE (DOUBLE i.e. 53 bits)
 *
 * little endian 1 block multiplication
 *
 */

var lmul53_t = function(r){

	/**
	 * Multiply two blocks, result is put in a 1 or 2 blocks little endian array.
	 * aj - ai <= 1, bj - bi <= 1, cj - ci <= 2
	 *
	 *
	 * @param {array} a first operand
	 * @param {int} ai a left
	 * @param {int} aj a right
	 * @param {array} b second operand
	 * @param {int} bi b left
	 * @param {int} bj b right
	 * @param {array} c result, must be 0 initialized
	 * @param {int} ci c left
	 * @param {int} cj c right
	 */

	var mul = function(a, ai, aj, b, bi, bj, c, ci, cj){

		var v;

		// EMPTY CASE
		if (aj <= ai || bj <= bi || cj <= ci) return;

		v = a[ai] * b[bi];
		c[ci] = v % r;

		if (cj > ci + 1) {
			c[ci+1] = (v - c[ci]) / r;
		}

	};

	return mul;

};


exports.lmul53_t = lmul53_t;
/* js/src/neg */
/* js/src/neg/neg.js */
/**
 * COMPUTE THE NEGATIVE VALUE OF NUMBER n
 */
/* js/src/not */
/* js/src/not/not.js */
/**
 * BINARY not APPLIED ON a
 */
/* js/src/or */
/* js/src/or/or.js */
/**
 * BINARY or APPLIED ON a AND b
 */
/* js/src/parse */
/* js/src/parse/parse.js */

/**
 * Function template for number parsing.
 * Endianess provided by the iterator function
 * iterator function must be reverse ordered
 *
 * @param {int} f from radix
 * @param {int} t to radix
 * @param {function} iter iterator function
 */


var parse_t = function(t, f, iter){

	if(t >= f){

		if(f > 36) throw 'f > 36 not implemented';

		var z = 0, log = t;
		while(log >= f){
			if (log % f) break;
			log /= f;
			++z;
		}

		if (log !== 1) throw 'log(f) does not divide log(t) not implemented';

		// immediate log(t) divides log(f)
		return function(s, si, sj, a, ai, aj){
			var len = sj - si, k = sj - z, n = Math.ceil(len / z);
			var block = function(i){
				a[i] = parseInt(s.slice(Math.max(0, k), k + z), f);
				k -= z;
			};

			iter(aj - n, aj, block);

		};

	}
	else throw 'f > t not implemented';


};


exports.parse_t = parse_t;
/* js/src/pow */
/* js/src/pow/pow.js */
/**
 * COMPUTES a^b
 */
/* js/src/sha */
/* js/src/sha/sha.js */
/**
 * ARITHMETIC SHIFT
 */
/* js/src/shl */
/* js/src/shl/shl.js */
/**
 * LOGICAL SHIFT
 */
/* js/src/stringify */
/* js/src/stringify/stringify.js */

/**
 * Function template for number stringification.
 * Endianess provided by the iterator function
 *
 * @param {int} f from radix
 * @param {int} t to radix
 * @param {function} iter iterator function
 */


var stringify_t = function(f, t, iter, zfill_t){

	if(t <= f){

		if(t > 36) throw 't > 36 not implemented';

		var z = 0;
		while(f >= t){
			if(f % t) break;
			f /= t;
			++z;
		}

		if(f !== 1) throw 'log(t) does not divide log(f) not implemented';

		var zfill = zfill_t(z);

		return function(a, i0, i1){
			var s = [];
			iter(i0, i1, function(i){
				s.push(zfill(Number(+a[i]).toString(t)));
			});
			return s.join('');
		};

	}
	else throw 't > f not implemented';

};

exports.stringify_t = stringify_t;
/* js/src/sub */
/* js/src/sub/sub.js */

/**
 * @param {int} r base (radix)
 */


var bsub_t = function(r){

	/**
	 * Subtracts two big endian arrays, k >= i >= j
	 * wraps
	 *
	 * @param {array} a first operand
	 * @param {int} ai a left
	 * @param {int} aj a right
	 * @param {array} b second operand
	 * @param {int} bi b left
	 * @param {int} bj b right
	 * @param {array} c result, must be 0 initialized
	 * @param {int} ci c left
	 * @param {int} cj c right
	 */

	return function(a, ai, aj, b, bi, bj, c, ci, cj){
		var T, C = 0;

		while(--bj >= bi){
			--aj; --cj;
			T = C;
			C = a[aj] < b[bj] + T;
			c[cj] = a[aj] - b[bj] + (C*r - T);
		}

		while(--aj >= ai){
			--cj;
			T = C;
			C = a[aj] < T;
			c[cj] = a[aj] + (C*r - T);
		}

		if(C){
			while(--cj >= ci){
				c[cj] = r - 1;
			}
		}

	};
};
/**
 * @param {int} r base (radix)
 */


var lsub_t = function(r){

	/**
	 * Subtracts two little endian arrays, k >= i >= j
	 * wraps
	 *
	 * @param {array} a first operand
	 * @param {int} ai a left
	 * @param {int} aj a right
	 * @param {array} b second operand
	 * @param {int} bi b left
	 * @param {int} bj b right
	 * @param {array} c result, must be 0 initialized
	 * @param {int} ci c left
	 * @param {int} cj c right
	 */

	return function(a, ai, aj, b, bi, bj, c, ci, cj){
		var T, C = 0;

		while(bi < bj){
			T = C;
			C = a[ai] < b[bi] + T;
			c[ci] = a[ai] - b[bi] + (C*r - T);
			++ai; ++bi; ++ci;
		}

		while(ai < aj){
			T = C;
			C = a[ai] < T;
			c[ci] = a[ai] + (C*r - T);
			++ai; ++ci;
		}

		if(C){
			while(ci < cj){
				c[ci] = r - 1;
				++ci;
			}
		}

	};
};


exports.bsub_t = bsub_t;
exports.lsub_t = lsub_t;

/* js/src/wrap */
/* js/src/wrap/wrapbin.js */
/**
 * Wrapper for binary operator.
 * Ensures
 *
 *     i >= j
 *     i0, j0, k0 >= 0
 *
 */

var wrapbin = function(fn){

	return function(a, i0, i1, b, j0, j1, c, k0, k1){

		var i, j, k;

		k0 = Math.max(0, k0);
		k = k1 - k0;

		i0 = Math.max(0, i0, i1 - k);
		j0 = Math.max(0, j0, j1 - k);
		i = i1 - i0;
		j = j1 - j0;

		if(i < j)
		return fn(b, j0, j1, a, i0, i1, c, k0, k1);

		else
		return fn(a, i0, i1, b, j0, j1, c, k0, k1);
	};
};

exports.wrapbin = wrapbin;

/* js/src/wrap/wrapcmp.js */



var wrapcmp = function(cmp) {


	return function(a, ai, aj, b, bi, bj){

		if (aj - ai + bi - bj < 0) {
			return - cmp(b, bi, bj, a, ai, aj);
		}
		else {
			return cmp(a, ai, aj, b, bi, bj);
		}

	};

};

exports.wrapcmp = wrapcmp;
/* js/src/wrap/wrapmov.js */


var wrapmov = function(fn){
	return function(a, i, j, b, k){

		if(i < 0){
			k -= i;
			i = 0;
		}
		if(k < 0){
			i -= k;
			k = 0;
		}
		return fn(a, i, j, b, k);

	};
};

exports.wrapmov = wrapmov;
/* js/src/xor */
/* js/src/xor/xor.js */
/**
 * BINARY xor APPLIED ON a AND b
 */
})(typeof exports === 'undefined' ? this['alu'] = {} : exports);
