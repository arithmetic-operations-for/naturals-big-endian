'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/0-legacy */
		/* js/src/0-legacy/abs */
		/* js/src/0-legacy/abs/abs.js */
		/**
   * COMPUTE THE ABSOLUTE VALUE OF NUMBER n
   */

		// exports.abs = function abs() {};

		/* js/src/0-legacy/arithmetic */
		/* js/src/0-legacy/arithmetic/div */
		/* js/src/0-legacy/arithmetic/div/dcdiv.js */

		// https://gmplib.org/manual/Divide-and-Conquer-Division.html

		/* js/src/0-legacy/arithmetic/div/fourierdiv.js */

		// http://en.wikipedia.org/wiki/Fourier_division

		/* js/src/0-legacy/arithmetic/div/knuthd.js */

		// http://books.google.be/books?id=VicPJYM0I5QC&pg=PA184&lpg=PA184&dq=knuth+algorithm+d&source=bl&ots=2n-NJWuw1o&sig=47hDkFG780BqE2mmi9OMPqbK4Fs&hl=en&sa=X&ei=_ioMVKbKFMawOZT_gaAH&ved=0CDkQ6AEwAw#v=onepage&q=knuth%20algorithm%20d&f=false

		/* js/src/0-legacy/arithmetic/mul */
		/* js/src/0-legacy/arithmetic/mul/mul53.js */
		/**
   * /!\ BLOCK MULTIPLICATION RESULT MUST HOLD IN THE JAVASCRIPT NUMBER TYPE (DOUBLE i.e. 53 bits)
   *
   * big endian 1 block multiplication
   *
   */

		var bmul53_t = function bmul53_t(r) {

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

			var mul = function mul(a, ai, aj, b, bi, bj, c, ci, cj) {

				var v;

				// EMPTY CASE
				if (aj <= ai || bj <= bi || cj <= ci) return;

				v = a[ai] * b[bi];
				c[cj - 1] = v % r;

				if (cj > ci + 1) {
					c[cj - 2] = (v - c[cj - 1]) / r;
				}
			};

			return mul;
		};

		exports.bmul53_t = bmul53_t;

		/* js/src/0-legacy/arithmetic/mul/toomcook.js */

		// http://en.wikipedia.org/wiki/Toom–Cook_multiplication

		/* js/src/0-legacy/binary */
		/* js/src/0-legacy/binary/and */
		/* js/src/0-legacy/binary/and/and.js */

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

		var and = function and(a, a0, b, b0, c, c0, c1) {

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

		var band_t = function band_t(r) {

			var _r = r / 2;

			return function (a, a0, a1, b, b0, b1, c, c0, c1) {

				var at = a1 - b1 + b0;
				var ct = c0 + at - a0;

				if (b[b0] < _r) while (c0 < ct) c[c0++] = 0;else while (c0 < ct) c[c0++] = a[a0++];

				while (c0 < c1) c[c0++] = a[at++] & b[b0++];
			};
		};

		exports.and = and;
		exports.band_t = band_t;

		/* js/src/0-legacy/binary/not */
		/* js/src/0-legacy/binary/not/not.js */
		/**
   * BINARY not APPLIED ON a
   */
		/* js/src/0-legacy/binary/or */
		/* js/src/0-legacy/binary/or/or.js */
		/**
   * BINARY or APPLIED ON a AND b
   */
		/* js/src/0-legacy/binary/xor */
		/* js/src/0-legacy/binary/xor/xor.js */
		/**
   * BINARY xor APPLIED ON a AND b
   */
		/* js/src/0-legacy/others */
		/* js/src/0-legacy/others/gcd */
		/* js/src/0-legacy/others/gcd/gcd.js */
		/**
   * COMPUTE THE GREATEST COMMON DIVISOR OF a AND b
   */
		/* js/src/0-legacy/others/lcm */
		/* js/src/0-legacy/others/lcm/lcm.js */
		/**
   * COMPUTE THE LEAST COMMON MULTIPLE OF a AND b
   */
		/* js/src/0-legacy/others/log */
		/* js/src/0-legacy/others/log/log.js */

		/**
   * FOR A NUMBER n COMPUTE THE GREATEST k SUCH THAT 2^k < n
   */
		/* js/src/0-legacy/others/mod */
		/* js/src/0-legacy/others/mod/mod.js */

		/**
   * COMPUTE MODULUS (a % b)
   */
		/* js/src/0-legacy/others/mod/montgomery.js */

		/**
   * COMPUTE MODULUS USING MONTGOMERY REDUCTION : http://en.wikipedia.org/wiki/Montgomery_reduction
   */
		/* js/src/0-legacy/others/mpow */
		/* js/src/0-legacy/others/mpow/mpow.js */
		/**
   * MODULAR EXPONENTIATION : http://en.wikipedia.org/wiki/Modular_exponentiation
   */
		/* js/src/0-legacy/others/neg */
		/* js/src/0-legacy/others/neg/neg.js */
		/**
   * COMPUTE THE NEGATIVE VALUE OF NUMBER n
   */
		/* js/src/0-legacy/others/pow */
		/* js/src/0-legacy/others/pow/ebs.js */
		/**
   * Computes pow(a, b) using exponentiation by squaring.
   *
   * *could add an additional base case for b = 1*
   *
   */

		var __ebs__ = function __ebs__(alloc, iszero, setone, iseven, div2, minus1) {

			var ebs = function ebs(a, ai, aj, b, bi, bj, c, ci, cj) {

				var t, u, m, n;

				if (iszero(b, bi, bj)) {
					setone(c, ci, cj);
				} else if (iseven(b, bi, bj)) {
					m = bj - bi;
					t = alloc(m);
					t = div2(b, bi, bj, t, 0, m);

					n = cj - ci;
					u = alloc(n);

					ebs(a, ai, aj, t, 0, m, u, 0, n);

					mul(u, 0, n, u, 0, n, c, ci, cj);
				} else {
					m = bj - bi;
					t = alloc(m);
					t = minus1(b, bi, bj, t, 0, m);

					n = cj - ci;
					u = alloc(n);

					ebs(a, ai, aj, t, 0, m, u, 0, n);

					mul(a, ai, aj, u, 0, n, c, ci, cj);
				}
			};
		};

		/* js/src/0-legacy/others/pow/pow.js */
		/**
   * Computes pow(a, b) using naive exponentiation.
   *
   */

		var __pow__ = function __pow__(alloc, isnotzero, setone, iseven, div2, minus1) {

			var pow = function pow(a, ai, aj, b, bi, bj, c, ci, cj) {

				var t, m;

				setone(c, ci, cj);

				while (isnotzero(b, bi, bj)) {

					mul(c, ci, cj, a, ai, aj, c, ci, cj);

					minus1(b, bi, bj, b, bi, bj);
				}
			};
		};

		/* js/src/0-legacy/others/sha */
		/* js/src/0-legacy/others/sha/sha.js */
		/**
   * ARITHMETIC SHIFT
   */
		/* js/src/0-legacy/others/shl */
		/* js/src/0-legacy/others/shl/shl.js */
		/**
   * LOGICAL SHIFT
   */
		/* js/src/1-new */
		/* js/src/1-new/arithmetic */
		/* js/src/1-new/arithmetic/add */
		/* js/src/1-new/arithmetic/add/_ADD.js */
		/**
   * Adds two big endian arrays and puts result in a destination array.
   * Wraps on overflow. |C| >= |A| >= |B|.
   *
   * @param {Number} r base (radix)
   * @param {Array} a first operand
   * @param {Number} ai a left
   * @param {Number} aj a right
   * @param {Array} b second operand
   * @param {Number} bi b left
   * @param {Number} bj b right
   * @param {Array} c result, must be 0 initialized
   * @param {Number} ci c left
   * @param {Number} cj c right
   */

		var _ADD = function _ADD(r, a, ai, aj, b, bi, bj, c, ci, cj) {

			var C = 0;

			while (--bj >= bi) {
				var t = a[--aj] + b[bj] + C;
				c[--cj] = t % r;
				C = t >= r;
			}

			while (--aj >= ai) {
				var t = a[aj] + C;
				c[--cj] = t % r;
				C = t >= r;
			}

			if (--cj >= ci) c[cj] = +C;
		};

		exports._ADD = _ADD;

		/* js/src/1-new/arithmetic/add/_IADD.js */
		/**
   * Adds a big endian array to another.
   * Wraps on overflow. |A| >= |B|.
   *
   * @param {Number} r base (radix)
   * @param {Array} a first operand
   * @param {Number} ai a left
   * @param {Number} aj a right
   * @param {Array} b second operand
   * @param {Number} bi b left
   * @param {Number} bj b right
   */

		var _IADD = function _IADD(r, a, ai, aj, b, bi, bj) {

			var C = 0;

			while (--bj >= bi) {
				var t = a[--aj] + b[bj] + C;
				a[aj] = t % r;
				C = t >= r;
			}

			while (--aj >= ai) {
				var t = a[aj] + C;
				a[aj] = t % r;
				C = t >= r;
			}
		};

		exports._IADD = _IADD;

		/* js/src/1-new/arithmetic/add/_add.js */
		/**
   * Adds two big endian arrays and puts result in a destination array.
   * Wraps on overflow.
   *
   * @param {Number} r base (radix)
   * @param {Array} a first operand
   * @param {Number} ai a left
   * @param {Number} aj a right
   * @param {Array} b second operand
   * @param {Number} bi b left
   * @param {Number} bj b right
   * @param {Array} c result, must be 0 initialized
   * @param {Number} ci c left
   * @param {Number} cj c right
  
   */

		var _add = function _add(r, a, ai, aj, b, bi, bj, c, ci, cj) {

			ci = Math.max(0, ci);
			var k = cj - ci;

			ai = Math.max(0, ai, aj - k);
			bi = Math.max(0, bi, bj - k);
			var m = aj - ai;
			var n = bj - bi;

			return m < n ? _ADD(r, b, bi, bj, a, ai, aj, c, ci, cj) : _ADD(r, a, ai, aj, b, bi, bj, c, ci, cj);
		};

		exports._add = _add;

		/* js/src/1-new/arithmetic/add/_iadd.js */

		/**
   * Placeholder implementation.
   */
		var _iadd = function _iadd(r, a, ai, aj, b, bi, bj) {

			var m = aj - ai;

			return _IADD(r, a, ai, aj, b, Math.max(bi, bj - m), bj);
		};

		exports._iadd = _iadd;

		/* js/src/1-new/arithmetic/add/_increment.js */

		/**
   * Adds 1 to a big endian array.
   *
   * @param {Number} r radix
   * @param {Array} a first operand
   * @param {Number} ai a left
   * @param {Number} aj a right
   */
		var _increment = function _increment(r, a, ai, aj) {

			var _r = r - 1;

			while (--aj >= ai) {

				if (a[aj] < _r) {
					++a[aj];
					return;
				}

				a[aj] = 0;
			}
		};

		exports._increment = _increment;

		/* js/src/1-new/arithmetic/div */
		/* js/src/1-new/arithmetic/div/_div_limb.js */

		/**
   *
   * Divides a big endian number by a single limb number.
   * Can only work with limbs of size at most sqrt( 2^53 ).
   *
   */

		var _div_limb = function _div_limb(r, z, a, ai, aj, q, qi) {

			_div_limb_partial(r, 0, z, a, ai, aj, q, qi);
		};

		exports._div_limb = _div_limb;

		/* js/src/1-new/arithmetic/div/_div_limb_partial.js */

		/**
   * Divides a big endian number by a single limb number.
   * Can only work with limbs of size at most sqrt( 2^53 ).
   * Allows to start with a partial quotient.
   */

		var _div_limb_partial = function _div_limb_partial(r, x, z, a, ai, aj, q, qi) {

			while (ai < aj) {

				x *= r;x += a[ai];

				q[qi] = x / z | 0;
				x %= z;

				++qi;++ai;
			}

			a[aj - 1] = x;
		};

		exports._div_limb_partial = _div_limb_partial;

		/* js/src/1-new/arithmetic/div/_schoolbook_div.js */

		/**
   *
   * Input
   * -----
   *
   *  Two integers A and B such that r^(m-1) <= A < r^m and (r^n)/2 <= B < r^(n).
   *
   * Output
   * -----
   *
   *  The quotient floor( A/B ) and the remainder A mod B.
   *
   */

		var _schoolbook_div = function _schoolbook_div(r, a, ai, aj, b, bi, bj, q, qi) {

			var m = aj - ai;
			var n = bj - bi;

			// If m < n, return the quotient 0 and the remainder A.
			if (m < n) return;

			if (m === n) {

				// If m = n, then if A < B, return the quotient 0 and the remainder A;
				if (_lt(a, ai, aj, b, bi, bj)) return;

				// if A ≥ B, return the quotient 1 and the remainder A - B.
				q[qi + m - 1] = 1;
				_isub(r, a, ai, aj, b, bi, bj);
				return;
			}

			// If m = n + 1, compute the quotient and remainder of A/B
			// using algorithm 3.1 and return them.
			if (m === n + 1) return _schoolbook_div_subroutine(r, a, ai, aj, b, bi, bj, q, qi);

			// 4. A' <- A/β^{m-n-1} and s <- A mod β^{m-n-1}
			var _aj = ai + n + 1;

			// 5. Compute the quotient q' and the remainder r' of A'/B using algorithm 3.1.
			_schoolbook_div_subroutine(r, a, ai, _aj, b, bi, bj, q, qi);

			// 6. Compute the quotient q and remainder r of( β^{m-n-1} r' + s ) / B recursively.
			var ak = _trim_positive(a, ai, _aj);
			_schoolbook_div(r, a, ak, aj, b, bi, bj, q, qi + ak - ai);

			// 7. Return the quotient Q = β^{m-n-1} q' + q and remainder R = r
		};

		exports._schoolbook_div = _schoolbook_div;

		/* js/src/1-new/arithmetic/div/_schoolbook_div_subroutine.js */
		/**
   *
   * Input
   * -----
   *
   *  Two integers A and B such that 0 <= A < r^n+1 and (r^n)/2 <= B < r^(n).
   *
   * Output
   * -----
   *
   *  The quotient floor( A/B ) and the remainder A mod B.
   *
   * @param {Number} r radix
   * @param {Array} a dividend
   * @param {Number} ai
   * @param {Number} aj
   * @param {Array} b divisor (aj - ai = bj - bi + 1)
   * @param {Number} bi
   * @param {Number} bj
   * @param {Array} q quotient (length is at least qi + aj - ai)
   * @param {Number} qi
   *
   */

		var _schoolbook_div_subroutine = function _schoolbook_div_subroutine(r, a, ai, aj, b, bi, bj, q, qi) {

			var m = aj - ai;

			// If A ≥ B*β, compute the quotient q and remainder r of ( A − B*β ) / B
			// recursively, and return β + q and r.
			if (_ge(a, ai, aj - 1, b, bi, bj)) {
				_isub(r, a, ai, aj - 1, b, bi, bj);
				_schoolbook_div_subroutine(r, a, ai, aj, b, bi, bj, q, qi);
				_increment(r, q, qi, qi + m - 1);
				return;
			}

			// If A < B*β, then A/B < β
			// q <- min [ ( β a_0 + a_1 ) / b_0 , β - 1 ]
			var _q = Math.min(r - 1, Math.floor((a[ai] * r + a[ai + 1]) / b[bi]));

			// fix _q
			var T = _zeros(m);
			_mul_limb(r, _q, b, bi, bj, T, 0, m);

			if (_gt(T, 0, m, a, ai, aj)) {
				--_q;
				_isub(r, T, 0, m, b, bi, bj);

				if (_gt(T, 0, m, a, ai, aj)) {
					--_q;
					_isub(r, T, 0, m, b, bi, bj);
				}
			}

			q[qi + m - 1] = _q;

			_isub(r, a, ai, aj, T, 0, m);
		};

		exports._schoolbook_div_subroutine = _schoolbook_div_subroutine;

		/* js/src/1-new/arithmetic/div/schoolbook_div.js */

		/**
   * Computes q <- a / b and a <- a % b.
   * No leading zeros allowed.
   * q has length at least qi + aj - ai
   */
		var schoolbook_div = function schoolbook_div(r, a, ai, aj, b, bi, bj, q, qi) {

			var _r = Math.ceil(r / 2);
			var x = b[bi];

			if (x < _r) {

				// we need x to be >= _r so we multiply b by ceil( _r / x )
				// this gives us <= ( 1 + _r / x ) b < r^(bj-bi)
				// (this can be implemented faster using bit shifts if r = 2^k )
				var z = Math.ceil(_r / x);
				var m = aj - ai + 1;
				var n = bj - bi;

				var _a = _zeros(m);
				_mul_limb(r, z, a, ai, aj, _a, 0, m);

				var _b = _zeros(n);
				_mul_limb(r, z, b, bi, bj, _b, 0, n);

				var _q = _zeros(m);

				_schoolbook_div(r, _a, 0, m, _b, 0, n, _q, 0);
				_div_limb_partial(r, _a[0], z, _a, 1, m, a, ai);
				_copy(_q, 1, m, q, qi);
				return;
			}

			return _schoolbook_div(r, a, ai, aj, b, bi, bj, q, qi);
		};

		exports.schoolbook_div = schoolbook_div;

		/* js/src/1-new/arithmetic/div/slow_div.js */

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
   * @param {int} x the radix
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

		var slow_div = function slow_div(x, r, ri, rj, b, bi, bj, q, qi) {

			var k,
			    t = ri + 1;

			do {

				// trim leading zeros
				//     - maybe could try to put this procedure inside the _sub loop
				//     - or assume that the number is trimed at the begining
				//       and put this statement at the end of the main loop
				while (ri < rj && r[ri] === 0) ++ri;

				// search for a remainder block interval
				// greater than the divisor
				//     - maybe could try binary search on the _lt function
				//     for another implementation
				k = ri + 1;
				while (k <= rj && _lt(r, ri, k, b, bi, bj)) ++k;

				// remainder smaller than divisor --> end
				if (k > rj) break;

				// divide current block interval by quotient
				do {

					// increment quotient block corresponding
					// to current ls block of remainder interval
					++q[qi + k - t];

					// subtract divisor from current remainder
					// block interval
					_sub(x, r, ri, k, b, bi, bj, r, ri, k);
				} while (!_lt(r, ri, k, b, bi, bj));
			} while (true);
		};

		exports.slow_div = slow_div;

		/* js/src/1-new/arithmetic/mul */
		/* js/src/1-new/arithmetic/mul/_karatsuba.js */
		/**
   *
   * Multiply two big endian arrays using karatsuba algorithm,
   * |A| >= |B| > 0, |C| >= 2 * |A|, |A| > 1.
   *
   * /!\ BLOCK MULTIPLICATION RESULT MUST HOLD IN THE JAVASCRIPT NUMBER TYPE
   *     (DOUBLE i.e. 53 bits)
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
   *
   * This algorithm is a specific case of the Toom-Cook algorithm, when m = n =
   * 2.
   *
   * For further reference, see
   *  - http://en.wikipedia.org/wiki/Karatsuba_algorithm
   *  - http://en.wikipedia.org/wiki/Toom–Cook_multiplication
   *
   * @param {Number} r base (radix)
   * @param {Array} a first operand
   * @param {Number} ai a left
   * @param {Number} aj a right
   * @param {Array} b second operand
   * @param {Number} bi b left
   * @param {Number} bj b right
   * @param {Array} c result, must be 0 initialized
   * @param {Number} ci c left
   * @param {Number} cj c right
   */

		var _karatsuba = function _karatsuba(r, a, ai, aj, b, bi, bj, c, ci, cj) {

			var i = aj - ai;
			var j = bj - bi;
			var k = cj - ci;

			var n = Math.ceil(i / 2);
			var I = i + j;
			var N = 2 * n;
			var N_ = I - N;
			var i_ = aj - n;
			var j_ = Math.max(bi, bj - n);

			var t1 = _zeros(n + 1); // + 1 to handle addition overflows
			var t2 = _zeros(n + 1); // and guarantee reducing k for the
			var t3 = _zeros(N + 1); // recursive calls
			var z2 = _zeros(N_);
			var z0 = _zeros(N);

			// RECURSIVE CALLS
			_mul(r, a, ai, i_, b, bi, j_, z2, 0, N_); // z2 = a1.b1
			_mul(r, a, i_, aj, b, j_, bj, z0, 0, N); // z0 = a0.b0
			_add(r, a, ai, i_, a, i_, aj, t1, 0, n + 1); // (a0 + a1)
			_add(r, b, bi, j_, b, j_, bj, t2, 0, n + 1); // (b1 + b0)
			_mul(r, t1, 1, n + 1, t2, 1, n + 1, t3, 1, N + 1); // (a0 + a1)(b1 + b0)

			// BUILD OUTPUT
			_copy(z2, 0, N_, c, cj - I); // + z2 . r^{2n}
			_copy(z0, 0, N, c, cj - N); // + z0

			// overflow on t1, add t2 . r^{n}
			if (t1[0]) _iadd(r, t3, 0, n + 1, t2, 0, n + 1);

			// overflow on t2, add t1 . r^{n} (except t1[0])
			if (t2[0]) _iadd(r, t3, 0, n + 1, t1, 1, n + 1);

			_iadd(r, c, ci, cj - n, t3, 0, N + 1); // + (a0 + a1)(b1 + b0) . r^{n}
			_isub(r, c, ci, cj - n, z2, 0, N_); // - z2 . r^{n}
			_isub(r, c, ci, cj - n, z0, 0, N); // - z1 . r^{n}
		};

		exports._karatsuba = _karatsuba;

		/* js/src/1-new/arithmetic/mul/_mul_limb.js */
		/**
   * Compute x * b where x is a single limb.
   */

		var _mul_limb = function _mul_limb(r, x, b, bi, bj, c, ci, cj) {

			var C = 0;

			while (true) {

				--bj;
				--cj;

				if (bj < bi) {
					if (cj >= ci) c[cj] = C;
					return;
				}

				if (cj < ci) return;

				var t = b[bj] * x + C;
				var u = t % r;

				c[cj] = u;

				C = (t - u) / r;
			}
		};

		exports._mul_limb = _mul_limb;

		/* js/src/1-new/arithmetic/mul/_schoolbook_mul.js */

		/**
   * Computes the product of two big endian arrays using schoolbook
   * multiplication. |C| >= |A|+|B|.
   */

		var _schoolbook_mul = function _schoolbook_mul(r, a, ai, aj, b, bi, bj, c, ci, cj) {

			var m = aj - ai;
			var n = bj - bi;
			--aj;
			--bj;
			--cj;

			for (var i = 0; i < m; ++i) {

				var q = 0;

				for (var j = 0; j < n; ++j) {

					var t = c[cj - i - j] + q + a[aj - i] * b[bj - j];
					var s = t % r;
					c[cj - i - j] = s;
					q = (t - s) / r;
				}

				c[cj - i - n] = q;
			}
		};

		exports._schoolbook_mul = _schoolbook_mul;

		/* js/src/1-new/arithmetic/mul/_toom22.js */

		var _toom22 = _karatsuba;
		exports._toom22 = _toom22;

		/* js/src/1-new/arithmetic/sub */
		/* js/src/1-new/arithmetic/sub/_isub.js */

		/**
   * Subtracts B from A, |A| >= |B|.
   * Wraps.
   *
   * @param {int} r base (radix)
   * @param {array} a first operand
   * @param {int} ai a left
   * @param {int} aj a right
   * @param {array} b second operand
   * @param {int} bi b left
   * @param {int} bj b right
   */

		var _isub = function _isub(r, a, ai, aj, b, bi, bj) {

			var C = 0;

			while (--bj >= bi) {
				--aj;
				var T = C;
				C = a[aj] < b[bj] + T;
				a[aj] = a[aj] - b[bj] + (C * r - T);
			}

			while (C && --aj >= ai) {
				var T = C;
				C = a[aj] < T;
				a[aj] += C * r - T;
			}
		};

		exports._isub = _isub;

		/* js/src/1-new/arithmetic/sub/_sub.js */

		/**
   * Subtracts two big endian arrays, k >= i >= j
   * wraps
   *
   * @param {int} r base (radix)
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

		var _sub = function _sub(r, a, ai, aj, b, bi, bj, c, ci, cj) {
			var T,
			    C = 0;

			while (--bj >= bi) {
				--aj;--cj;
				T = C;
				C = a[aj] < b[bj] + T;
				c[cj] = a[aj] - b[bj] + (C * r - T);
			}

			while (--aj >= ai) {
				--cj;
				T = C;
				C = a[aj] < T;
				c[cj] = a[aj] + (C * r - T);
			}

			if (C) {
				while (--cj >= ci) {
					c[cj] = r - 1;
				}
			}
		};

		exports._sub = _sub;

		/* js/src/1-new/compare */
		/* js/src/1-new/compare/_CMP.js */

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

		var _CMP = function _CMP(a, ai, aj, b, bi, bj) {

			var tmp = aj - bj + bi;

			for (; ai < tmp; ++ai) if (a[ai] > 0) return 1;

			// same size aj - ai === bj - bi
			for (; ai < aj; ++ai, ++bi) {
				if (a[ai] > b[bi]) return 1;
				if (a[ai] < b[bi]) return -1;
			}

			return 0;
		};

		exports._CMP = _CMP;

		/* js/src/1-new/compare/_cmp.js */

		var _cmp = function _cmp(a, ai, aj, b, bi, bj) {

			if (aj - ai < bj - bi) return -_CMP(b, bi, bj, a, ai, aj);else return _CMP(a, ai, aj, b, bi, bj);
		};

		exports._cmp = _cmp;

		/* js/src/1-new/compare/_eq.js */

		var _eq = function _eq(a, ai, aj, b, bi, bj) {
			return _cmp(a, ai, aj, b, bi, bj) === 0;
		};

		exports._eq = _eq;

		/* js/src/1-new/compare/_ge.js */

		var _ge = function _ge(a, ai, aj, b, bi, bj) {
			return _cmp(a, ai, aj, b, bi, bj) >= 0;
		};

		exports._ge = _ge;

		/* js/src/1-new/compare/_gt.js */

		var _gt = function _gt(a, ai, aj, b, bi, bj) {
			return _cmp(a, ai, aj, b, bi, bj) > 0;
		};

		exports._gt = _gt;

		/* js/src/1-new/compare/_jz.js */

		/**
   * Returns true if number is 0.
   *
   * @param {array} a first operand
   * @param {int} ai a left
   * @param {int} aj a right
   */

		var _jz = function _jz(a, ai, aj) {

			for (; ai < aj; ++ai) if (a[ai] !== 0) return false;

			return true;
		};

		exports._jz = _jz;

		/* js/src/1-new/compare/_le.js */

		var _le = function _le(a, ai, aj, b, bi, bj) {
			return _cmp(a, ai, aj, b, bi, bj) <= 0;
		};

		exports._le = _le;

		/* js/src/1-new/compare/_lt.js */

		var _lt = function _lt(a, ai, aj, b, bi, bj) {
			return _cmp(a, ai, aj, b, bi, bj) < 0;
		};

		exports._lt = _lt;

		/* js/src/1-new/compare/_ne.js */

		var _ne = function _ne(a, ai, aj, b, bi, bj) {
			return _cmp(a, ai, aj, b, bi, bj) !== 0;
		};

		exports._ne = _ne;

		/* js/src/1-new/convert */
		/* js/src/1-new/convert/_alloc.js */

		var _alloc = function _alloc(n) {

			return new Array(n);
		};

		exports._alloc = _alloc;

		/* js/src/1-new/convert/_build.js */

		var _build = function _build(base, number) {

			var data = [];

			var q = number;
			var d = base;

			while (q >= d) {
				var r = q % d;
				data.push(r);
				q = (q - r) / d;
			}

			data.push(q);

			return data.reverse();
		};

		exports._build = _build;

		/* js/src/1-new/convert/_chr.js */

		var _chr = function _chr(x) {

			if (x < 10) return String.fromCharCode(48 + x);
			return String.fromCharCode(87 + x);
		};

		exports._chr = _chr;

		/* js/src/1-new/convert/_convert.js */

		/**
   *
   * @param {Number} f the base to convert from
   * @param {Number} t the base to convert to
   * @param {Array} a the origin array
   * @param {Number} ai start offset in the origin array
   * @param {Number} aj end offset in the origin array
   * @param {Array} b the destination array
   * @param {Number} bi start offset in the destination array
   * @param {Number} bj end offset in the destination array
   */

		var _convert = function _convert(f, t, a, ai, aj, b, bi, bj) {

			if (f > t) return _convert_to_smaller(f, t, a, ai, aj, b, bi, bj);
			if (f < t) return _convert_to_larger(f, t, a, ai, aj, b, bi, bj);
			return _copy(a, ai, aj, b, bi);
		};

		exports._convert = _convert;

		/* js/src/1-new/convert/_convert_slow.js */

		/**
   *
   * @param {Number} f the base to convert from
   * @param {Number} t the base to convert to
   * @param {Array} a the origin array
   * @param {Number} ai start offset in the origin array
   * @param {Number} aj end offset in the origin array
   * @param {Array} b the destination array
   * @param {Number} bi start offset in the destination array
   * @param {Number} bj end offset in the destination array
   */

		var _convert_slow = function _convert_slow(f, t, a, ai, aj, b, bi, bj) {

			var d = _build(f, t);
			var di = 0;
			var dj = d.length;
			var qi = 0;
			var qj = aj - ai;
			var q = _alloc(qj - qi);

			while (true) {

				_reset(q, qi, qj);

				_div(f, a, ai, aj, d, di, dj, q, qi);

				--bj;
				var x = 0;

				for (var k = ai; k < aj; ++k) {
					x *= f;
					x += a[k];
				}

				b[bj] = x;

				if (_jz(q, qi, qj)) return;

				_copy(q, qi, qj, a, ai);
			}
		};

		exports._convert_slow = _convert_slow;

		/* js/src/1-new/convert/_convert_to_larger.js */

		/**
   *
   * @param {Number} f the base to convert from
   * @param {Number} t the base to convert to
   * @param {Array} a the origin array
   * @param {Number} ai start offset in the origin array
   * @param {Number} aj end offset in the origin array
   * @param {Array} b the destination array
   * @param {Number} bi start offset in the destination array
   * @param {Number} bj end offset in the destination array
   */

		var _convert_to_larger = function _convert_to_larger(f, t, a, ai, aj, b, bi, bj) {
			var _log2 = _log(t, f);

			var _log22 = _slicedToArray(_log2, 2);

			var z = _log22[0];
			var x = _log22[1];

			if (x === 1) return _convert_to_larger_fast(f, z, a, ai, aj, b, bi, bj);

			return _convert_slow(f, t, a, ai, aj, b, bi, bj);
		};

		exports._convert_to_larger = _convert_to_larger;

		/* js/src/1-new/convert/_convert_to_larger_fast.js */

		/**
   *
   * @param {Number} ar the base to convert from
   * @param {Number} z if br is the base to convert to then log(br) = z log(ar)
   * @param {Array} a the origin array
   * @param {Number} ai start offset in the origin array
   * @param {Number} aj end offset in the origin array
   * @param {Array} b the destination array
   * @param {Number} bi start offset in the destination array
   * @param {Number} bj end offset in the destination array
   */

		var _convert_to_larger_fast = function _convert_to_larger_fast(ar, z, a, ai, aj, b, bi, bj) {

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
			} else {
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
					t *= ar; // aggregate source blocks
					t += a[ai]; // using simple
					++ai; // multiply + add
				}
				b[bi] = t; // set block in destination
				i = 0;
			}
		};

		exports._convert_to_larger_fast = _convert_to_larger_fast;

		/* js/src/1-new/convert/_convert_to_smaller.js */

		/**
   *
   * @param {Number} f the base to convert from
   * @param {Number} t the base to convert to
   * @param {Array} a the origin array
   * @param {Number} ai start offset in the origin array
   * @param {Number} aj end offset in the origin array
   * @param {Array} b the destination array
   * @param {Number} bi start offset in the destination array
   * @param {Number} bj end offset in the destination array
   */

		var _convert_to_smaller = function _convert_to_smaller(f, t, a, ai, aj, b, bi, bj) {
			var _log3 = _log(f, t);

			var _log32 = _slicedToArray(_log3, 2);

			var z = _log32[0];
			var x = _log32[1];

			if (x === 1) return _convert_to_smaller_fast(t, z, a, ai, aj, b, bi, bj);

			return _convert_slow(f, t, a, ai, aj, b, bi, bj);
		};

		exports._convert_to_smaller = _convert_to_smaller;

		/* js/src/1-new/convert/_convert_to_smaller_fast.js */

		/**
   *
   * @param {Number} br the base to convert to
   * @param {Number} z if ar is the base to convert to then log(ar) = z log(br)
   * @param {Array} a the origin array
   * @param {Number} ai start offset in the origin array
   * @param {Number} aj end offset in the origin array
   * @param {Array} b the destination array
   * @param {Number} bi start offset in the destination array
   * @param {Number} bj end offset in the destination array
   */

		var _convert_to_smaller_fast = function _convert_to_smaller_fast(br, z, a, ai, aj, b, bi, bj) {

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
			} else {
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
					r = q % br; // unpack source blocks
					q = (q - r) / br; // using simple
					b[t] = r; // modulo + quotient
					--t;
				}
				i = 0;
			}
		};

		exports._convert_to_smaller_fast = _convert_to_smaller_fast;

		/* js/src/1-new/convert/_copy.js */

		var _copy = function _copy(a, ai, aj, b, bi) {

			for (; ai < aj; ++ai, ++bi) b[bi] = a[ai];
		};

		exports._copy = _copy;

		/* js/src/1-new/convert/_fill.js */

		var _fill = function _fill(a, ai, aj, v) {

			for (var i = ai; i < aj; ++i) {
				a[i] = v;
			}
		};

		exports._fill = _fill;

		/* js/src/1-new/convert/_int.js */

		var _int = function _int(x) {

			if (x >= '0' && x <= '9') return x.charCodeAt(0) - 48;
			if (x >= 'A' && x <= 'Z') return x.charCodeAt(0) - 55;
			if (x >= 'a' && x <= 'z') return x.charCodeAt(0) - 87;

			throw 'invalid literal for _int: ' + x;
		};

		exports._int = _int;

		/* js/src/1-new/convert/_log.js */

		var _log = function _log(x, y) {

			var z = 0;

			while (x >= y) {
				if (x % y) break;
				x /= y;
				++z;
			}

			return [z, x];
		};

		exports._log = _log;

		/* js/src/1-new/convert/_reset.js */

		var _reset = function _reset(a, ai, aj) {

			_fill(a, ai, aj, 0);
		};

		exports._reset = _reset;

		/* js/src/1-new/convert/_to_string.js */

		var _to_string = function _to_string(b) {

			var n = b.length;

			var data = [];

			for (var k = 0; k < n; ++k) {
				data.push(_chr(b[k]));
			}return data.join('');
		};

		exports._to_string = _to_string;

		/* js/src/1-new/convert/_trim_positive.js */

		var _trim_positive = function _trim_positive(a, ai, aj) {

			while (a[ai] === 0 && ai < aj) ++ai;

			return ai;
		};

		exports._trim_positive = _trim_positive;

		/* js/src/1-new/convert/_zeros.js */

		var _zeros = function _zeros(n) {

			var a = _alloc(n);

			_reset(a, 0, n);

			return a;
		};

		exports._zeros = _zeros;

		/* js/src/1-new/convert/convert.js */

		var convert = function convert(f, t, a, ai, aj) {

			var b = convert_keep_zeros(f, t, a, ai, aj);

			return trim_natural(b, 0, b.length);
		};

		exports.convert = convert;

		/* js/src/1-new/convert/convert_keep_zeros.js */

		var convert_keep_zeros = function convert_keep_zeros(f, t, a, ai, aj) {

			var bi = 0;
			var bj = Math.ceil(Math.log(f) / Math.log(t) * (aj - ai));
			var b = _zeros(bj - bi);

			_convert(f, t, a, ai, aj, b, bi, bj);

			return b;
		};

		exports.convert_keep_zeros = convert_keep_zeros;

		/* js/src/1-new/convert/parse.js */

		var parse = function parse(f, t, string) {

			var b = parse_keep_zeros(f, t, string);

			return trim_natural(b, 0, b.length);
		};

		exports.parse = parse;

		/* js/src/1-new/convert/parse_keep_zeros.js */

		var parse_keep_zeros = function parse_keep_zeros(f, t, string) {

			if (f > 36) throw 'f > 36 not implemented';

			var n = string.length;

			var a = [];

			for (var k = 0; k < n; ++k) {
				a.push(_int(string[k]));
			}return convert_keep_zeros(f, t, a, 0, n);
		};

		exports.parse_keep_zeros = parse_keep_zeros;

		/* js/src/1-new/convert/stringify.js */

		var stringify = function stringify(f, t, a, ai, aj) {

			if (t > 36) throw 't > 36 not implemented';

			var b = convert(f, t, a, ai, aj);

			return _to_string(b);
		};

		exports.stringify = stringify;

		/* js/src/1-new/convert/stringify_keep_zeros.js */

		var stringify_keep_zeros = function stringify_keep_zeros(f, t, a, ai, aj) {

			if (t > 36) throw 't > 36 not implemented';

			var b = convert_keep_zeros(f, t, a, ai, aj);

			return _to_string(b);
		};

		exports.stringify_keep_zeros = stringify_keep_zeros;

		/* js/src/1-new/convert/translate.js */

		var translate = function translate(f, t, string) {

			var a = parse(f, t, string);
			return stringify(t, t, a, 0, a.length);
		};

		exports.translate = translate;

		/* js/src/1-new/convert/trim_natural.js */

		var trim_natural = function trim_natural(a, ai, aj) {

			var x = _trim_positive(a, ai, aj);

			if (x >= aj) return [0];

			var b = _alloc(aj - x);

			_copy(a, x, aj, b, 0);

			return b;
		};

		exports.trim_natural = trim_natural;

		/* js/src/1-new/thresholds */
		/* js/src/1-new/thresholds/multiplication.js */

		var THRESHOLD_MUL_TOOM22 = 22;

		/* js/src/2-api */
		/* js/src/2-api/_div.js */
		var _div = schoolbook_div;
		exports._div = _div;

		/* js/src/2-api/_mul.js */

		/**
   * |A| >= |B|, |C| >= |A| + |B|.
   */

		var _mul = function _mul(r, a, ai, aj, b, bi, bj, c, ci, cj) {

			var m = aj - ai;
			var n = bj - bi;

			//if ( m === n ) {

			//if ( a === b && ai === bi ) return _sqr( r , a , ai , aj , c , ci , cj ) ;

			//return _mul_n( r , a , ai , aj , b , bi , bj , c , ci , cj ) ;

			//}

			if (n < THRESHOLD_MUL_TOOM22) {
				return _schoolbook_mul(r, a, ai, aj, b, bi, bj, c, ci, cj);
			}

			return _karatsuba(r, a, ai, aj, b, bi, bj, c, ci, cj);
		};

		exports._mul = _mul;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-integer-big-endian", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["integerbigendian"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-integer-big-endian");
})();