(function(exports, undefined){

	'use strict';


/* js/src/abs */
/* js/src/abs/abs.js */
/**
 * COMPUTE THE ABSOLUTE VALUE OF NUMBER n
 */
/* js/src/add */
/* js/src/add/add.js */

/**
 * @param r base (radix)
 */


var badd_t = function(r){


	/**
	 * Adds two big endian arrays, k >= i >= j
	 * wraps
	 *
	 * @param a first operand
	 * @param i0 a left
	 * @param i1 a right
	 * @param b second operand
	 * @param j0 b left
	 * @param j1 b right
	 * @param c result, must be 0 initialized
	 * @param k0 c left
	 * @param k1 c right
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
 * @param r base (radix)
 */

var ladd_t = function(r){

	/**
	 * Adds two little endian arrays, k >= i >= j
	 * wraps
	 *
	 * @param a first operand
	 * @param i0 a left
	 * @param i1 a right
	 * @param b second operand
	 * @param j0 b left
	 * @param j1 b right
	 * @param c result, must be 0 initialized
	 * @param k0 c left
	 * @param k1 c right
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

exports.badd_t = badd_t;
exports.ladd_t = ladd_t;
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
	 * @param a first operand
	 * @param ai a left
	 * @param aj a right
	 * @param b second operand
	 * @param bi b left
	 * @param bj b right
	 *
	 * @return 1 if a > b; 0 if a = b; -1 otherwise.
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
	 * @param a first operand
	 * @param ai a left
	 * @param aj a right
	 * @param b second operand
	 * @param bi b left
	 * @param bj b right
	 *
	 * @return 1 if a > b; 0 if a = b; -1 otherwise.
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
/* js/src/div */
/* js/src/div/div.js */



var bdiv_t = function(mov, lt, sub){

	/**
	 * Computes quotient and remainder of two big endian arrays.
	 * <p>
	 * Computes quotient and remainder of two big endian arrays
	 * using long division algorithm (the one teached in
	 * european primary schools).
	 *
	 * @param a dividend
	 * @param ai a left
	 * @param aj a right
	 * @param b divisor
	 * @param bi b left
	 * @param bj b right
	 * @param q quotient, must be 0 initialized
	 * @param qi q left
	 * @param qj q right
	 * @param r remainder
	 * @param ri r left
	 * @param rj r right
	 */

	var div = function(a, ai, aj, b, bi, bj, q, qi, qj, r, ri, rj){
		var k, t = ri + 1;

		// copy dividend in remainder
		mov(a, ai, aj, r, ri);

		do {

			// trim leading zeros
			//     - maybe could try to put this procedure inside the sub loop
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


		} while(k <= rj);

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
 * @param {prototype} num array ctor
 * @param {uint} r base (radix)
 *
 *
 * EXPLANATION
 * ###########
 *
 * a.b = (a1.r^{n} + a0).(b1.r^{n} + b0)
 *     = a1.b1.r^{2n} + (a1.b0 + a0.b1).r^{n} + a0.b0
 *     = z2.r^{2n} + z1.r^{n} + z0
 *
 * z2 = a1.b1
 * z1 = a1.b0 + a0.b1
 * z0 = a0.b0
 *
 * (a1 + a0)(b1 + b0) = a1.b1 + a0.b0 + (a1.b0 + a0.b1)
 *                    = z2 + z0 + z1
 *
 * z1 = (a1 + a0)(b1 + b0) - z2 - z0
 *
 * AN ANOTHER WAY AROUND (not used here)
 *
 * (a1 - a0)(b1 - b0) = a1.b1 + a0.b0 - (a1.b0 + a0.b1)
 * (a0 - a1)(b1 - b0) = (a1.b0 + a0.b1) - a1.b1 + a0.b0
 * a.b = (r^{2n} + r^{n})a1.b1 + r^{n}(a0 - a1)(b1 - b0) + (r^{n} + 1)a0.b0,
 */

var bkaratsuba_t = function(add, sub, mul, num, mov, r, wrap){

	/**
	 * Multiply two big endian arrays using karatsuba algorithm,
	 * i >= j, k >= 2 * i
	 *
	 *
	 * @param a first operand
	 * @param i0 a left
	 * @param i1 a right
	 * @param b second operand
	 * @param j0 b left
	 * @param j1 b right
	 * @param c result, must be 0 initialized
	 * @param k0 c left
	 * @param k1 c right
	 */

	var karatsuba = function(a, i0, i1, b, j0, j1, c, k0, k1){

		var z0, z2, t1, t2, t3, p, I, P, P_, i_, j_;

		var i = i1 - i0,
		j = j1 - j0,
		k = k1 - k0;

		// EMPTY CASE
		if(i <= 0 || j <= 0 || k <= 0) return;

		// BASE CASE i = j = 1
		if(i === 1){
			z0 = a[i0] * b[j0];
			c[k1-1] = z0 % r;

			if(k > 1)
				c[k1-2] = (z0 - c[k1-1]) / r;

		}

		// RECURSION
		else{
			p = Math.ceil(i / 2);
			I = i + j;
			P = 2 * p;
			P_ = I - P;
			i_ = i1 - p;
			j_ = Math.max(j0, j1 - p);

			t1 = new num(p+1); // + 1 to handle addition overflows
			t2 = new num(p+1); // and guarantee reducing k for the
			t3 = new num(P+1); // recursive calls
			z2 = new num(P_);
			z0 = new num(P);

		// RECURSIVE CALLS
			mul(a, i0, i_, b, j0, j_, z2, 0, P_);            // z2 = a1.b1
			mul(a, i_, i1, b, j_, j1, z0, 0, P);             // z0 = a0.b0
			add(a, i_, i1, a, i0, i_, t1, 0, p + 1);         // (a0 + a1)
			add(b, j0, j_, b, j_, j1, t2, 0, p + 1);         // (b1 + b0)
			mul(t1, 1, p + 1, t2, 1, p + 1, t3, 1, P + 1);   // (a0 + a1)(b1 + b0)

		// BUILD OUTPUT
			mov(z2, 0, P_, c, k1 - I);                       // + z2 . r^{2n}
			mov(z0, 0, P , c, k1 - P);                       // + z0
			if(t1[0])                                        // overflow on t1, add t2 . r^{p}
			add(t3, 0, P + 1 - p, t2, 1, p + 1, t3, 0, P + 1 - p);
			if(t2[0])                                        // overflow on t2, add t1 . r^{p}
			add(t3, 0, P + 1 - p, t1, 1, p + 1, t3, 0, P + 1 - p);
			if(t1[0] && t2[0])                               // overflow on t1 and t2, add 1 . r^{p+1}
			add(t3, 0, P - p, t1, 0, 1, t3, 0, P - p);
			add(c, k0, k1 - p, t3, 0, P + 1, c, k0, k1 - p); // + (a0 + a1)(b1 + b0) . r^{n}
			sub(c, k0, k1 - p, z2, 0, P_, c, k0, k1 - p);    // - z2 . r^{n}
			sub(c, k0, k1 - p, z0, 0, P, c, k0, k1 - p);     // - z1 . r^{n}
		}

	};

	if(wrap !== undefined) karatsuba = wrap(karatsuba);
	if(mul === undefined) mul = karatsuba;

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
 * @param r base (radix)
 */


var bsub_t = function(r){

	/**
	 * Subtracts two big endian arrays, k >= i >= j
	 * wraps
	 *
	 * @param a first operand
	 * @param i0 a left
	 * @param i1 a right
	 * @param b second operand
	 * @param j0 b left
	 * @param j1 b right
	 * @param c result, must be 0 initialized
	 * @param k0 c left
	 * @param k1 c right
	 */

	return function(a, i0, i1, b, j0, j1, c, k0, k1){
		var T, C = 0;

		while(--j1 >= j0){
			--i1; --k1;
			T = C;
			C = a[i1] < b[j1] + T;
			c[k1] = a[i1] - b[j1] + (C*r - T);
		}

		while(--i1 >= i0){
			--k1;
			T = C;
			C = a[i1] < T;
			c[k1] = a[i1] + (C*r - T);
		}

		if(C){
			while(--k1 >= k0){
				c[k1] = r - 1;
			}
		}

	};
};
/**
 * @param r base (radix)
 */


var lsub_t = function(r){

	/**
	 * Subtracts two little endian arrays, k >= i >= j
	 * wraps
	 *
	 * @param a first operand
	 * @param i0 a left
	 * @param i1 a right
	 * @param b second operand
	 * @param j0 b left
	 * @param j1 b right
	 * @param c result, must be 0 initialized
	 * @param k0 c left
	 * @param k1 c right
	 */

	return function(a, i0, i1, b, j0, j1, c, k0, k1){
		var T, C = 0;

		while(j0 < j1){
			T = C;
			C = a[i0] < b[j0] + T;
			c[k0] = a[i0] - b[j0] + (C*r - T);
			++i0; ++j0; ++k0;
		}

		while(i0 < i1){
			T = C;
			C = a[i0] < T;
			c[k0] = a[i0] + (C*r - T);
			++i0; ++k0;
		}

		if(C){
			while(k0 < k1){
				c[k0] = r - 1;
				++k0;
			}
		}

	};
};


exports.bsub_t = bsub_t;
exports.lsub_t = lsub_t;

/* js/src/wrap */
/* js/src/wrap/wrap.js */
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


exports.wrapbin = wrapbin;
exports.wrapmov = wrapmov;

/* js/src/xor */
/* js/src/xor/xor.js */
/**
 * BINARY xor APPLIED ON a AND b
 */
})(typeof exports === 'undefined' ? this['alu'] = {} : exports);
