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
		/* js/src/0-legacy/arithmetic/add */
		/* js/src/0-legacy/arithmetic/add/add.js */

		/**
   * @param {int} r base (radix)
   */

		exports.badd_t = function badd_t(r) {

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

			return function (a, i0, i1, b, j0, j1, c, k0, k1) {
				var t,
				    C = 0;

				while (--j1 >= j0) {
					--i1;--k1;
					t = a[i1] + b[j1] + C;
					c[k1] = t % r;
					C = t / r >= 1;
				}

				while (--i1 >= i0) {
					--k1;
					t = a[i1] + C;
					c[k1] = t % r;
					C = t / r >= 1;
				}

				if (--k1 >= k0) {
					c[k1] = +C;
				}
			};
		};

		/**
   * @param {int} r base (radix)
   */

		var ladd_t = exports.ladd_t = function (r) {

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

			return function (a, i0, i1, b, j0, j1, c, k0, k1) {
				var t,
				    C = 0;

				while (j0 < j1) {
					t = a[i0] + b[j0] + C;
					c[k0] = t % r;
					C = t / r >= 1;
					++i0;++j0;++k0;
				}

				while (i0 < i1) {
					t = a[i0] + C;
					c[k0] = t % r;
					C = t / r >= 1;
					++i0;++k0;
				}

				if (k0 < k1) {
					c[k0] = +C;
				}
			};
		};
		/* js/src/0-legacy/arithmetic/div */
		/* js/src/0-legacy/arithmetic/div/dcdiv.js */

		// https://gmplib.org/manual/Divide-and-Conquer-Division.html

		/* js/src/0-legacy/arithmetic/div/div.js */

		var bdiv_t = function bdiv_t(lt, sub) {

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

			var div = function div(r, ri, rj, b, bi, bj, q, qi) {
				var k,
				    t = ri + 1;

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
					do {

						// increment quotient block corresponding
						// to current ls block of remainder interval
						++q[qi + k - t];

						// subtract divisor from current remainder
						// block interval
						sub(r, ri, k, b, bi, bj, r, ri, k);
					} while (!lt(r, ri, k, b, bi, bj));
				} while (true);
			};

			return div;
		};

		exports.bdiv_t = bdiv_t;
		/* js/src/0-legacy/arithmetic/div/fourierdiv.js */

		// http://en.wikipedia.org/wiki/Fourier_division

		/* js/src/0-legacy/arithmetic/div/knuthd.js */

		// http://books.google.be/books?id=VicPJYM0I5QC&pg=PA184&lpg=PA184&dq=knuth+algorithm+d&source=bl&ots=2n-NJWuw1o&sig=47hDkFG780BqE2mmi9OMPqbK4Fs&hl=en&sa=X&ei=_ioMVKbKFMawOZT_gaAH&ved=0CDkQ6AEwAw#v=onepage&q=knuth%20algorithm%20d&f=false

		/* js/src/0-legacy/arithmetic/mul */
		/* js/src/0-legacy/arithmetic/mul/karatsuba.js */
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
   *
   * This algorithm is a generalization of the Toom-Cook algorithm, when m = n = 2.
   *
   * For further reference, see
   *  - http://en.wikipedia.org/wiki/Karatsuba_algorithm
   *  - http://en.wikipedia.org/wiki/Toom–Cook_multiplication
   */

		var bkaratsuba_t = function bkaratsuba_t(add, sub, mul, calloc, mov, r, wrap) {

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

			var karatsuba = function karatsuba(a, ai, aj, b, bi, bj, c, ci, cj) {

				var z0, z2, t1, t2, t3, n, I, N, N_, i_, j_, i, j, k;

				i = aj - ai;
				j = bj - bi;
				k = cj - ci;

				// EMPTY CASE
				if (i <= 0 || j <= 0 || k <= 0) return;

				// BASE CASE i = j = 1
				if (i === 1) {

					z0 = a[ai] * b[bi];
					c[cj - 1] = z0 % r;

					if (k > 1) {
						c[cj - 2] = (z0 - c[cj - 1]) / r;
					}
				}

				// RECURSION
				else {
						n = Math.ceil(i / 2);
						I = i + j;
						N = 2 * n;
						N_ = I - N;
						i_ = aj - n;
						j_ = Math.max(bi, bj - n);

						t1 = calloc(n + 1); // + 1 to handle addition overflows
						t2 = calloc(n + 1); // and guarantee reducing k for the
						t3 = calloc(N + 1); // recursive calls
						z2 = calloc(N_);
						z0 = calloc(N);

						// RECURSIVE CALLS
						mul(a, ai, i_, b, bi, j_, z2, 0, N_); // z2 = a1.b1
						mul(a, i_, aj, b, j_, bj, z0, 0, N); // z0 = a0.b0
						add(a, i_, aj, a, ai, i_, t1, 0, n + 1); // (a0 + a1)
						add(b, bi, j_, b, j_, bj, t2, 0, n + 1); // (b1 + b0)
						mul(t1, 1, n + 1, t2, 1, n + 1, t3, 1, N + 1); // (a0 + a1)(b1 + b0)

						// BUILD OUTPUT
						mov(z2, 0, N_, c, cj - I); // + z2 . r^{2n}
						mov(z0, 0, N, c, cj - N); // + z0

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
						sub(c, ci, cj - n, z2, 0, N_, c, ci, cj - n); // - z2 . r^{n}
						sub(c, ci, cj - n, z0, 0, N, c, ci, cj - n); // - z1 . r^{n}
					}
			};

			if (wrap !== undefined) karatsuba = wrap(karatsuba);
			if (mul === undefined) mul = karatsuba;

			return karatsuba;
		};

		exports.bkaratsuba_t = bkaratsuba_t;
		/* js/src/0-legacy/arithmetic/mul/mul.js */

		var bmul_t = function bmul_t(r) {

			/**
    * Computes product of two big endian arrays.
    * <p>
    * Computes product of two big endian arrays
    * using long multiplication algorithm (the one teached in
    * european primary schools)
    */

			var mul = function mul(a, ai, aj, b, bi, bj, c, ci, cj) {
				var ak,
				    ck = --cj,
				    ct,
				    t,
				    u,
				    v,
				    w,
				    y,
				    z;

				while (bj-- > bi && ck >= ci) {
					for (ak = aj, w = 0; ak-- > ai && ck >= ci; --ck) {
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

		/**
   * /!\ BLOCK MULTIPLICATION RESULT MUST HOLD IN THE JAVASCRIPT NUMBER TYPE (DOUBLE i.e. 53 bits)
   *
   * little endian 1 block multiplication
   *
   */

		var lmul53_t = function lmul53_t(r) {

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

			var mul = function mul(a, ai, aj, b, bi, bj, c, ci, cj) {

				var v;

				// EMPTY CASE
				if (aj <= ai || bj <= bi || cj <= ci) return;

				v = a[ai] * b[bi];
				c[ci] = v % r;

				if (cj > ci + 1) {
					c[ci + 1] = (v - c[ci]) / r;
				}
			};

			return mul;
		};

		exports.lmul53_t = lmul53_t;
		/* js/src/0-legacy/arithmetic/mul/toomcook.js */

		// http://en.wikipedia.org/wiki/Toom–Cook_multiplication

		/* js/src/0-legacy/arithmetic/sub */
		/* js/src/0-legacy/arithmetic/sub/sub.js */

		/**
   * @param {int} r base (radix)
   */

		var bsub_t = function bsub_t(r) {

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

			return function (a, ai, aj, b, bi, bj, c, ci, cj) {
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
		};
		/**
   * @param {int} r base (radix)
   */

		var lsub_t = function lsub_t(r) {

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

			return function (a, ai, aj, b, bi, bj, c, ci, cj) {
				var T,
				    C = 0;

				while (bi < bj) {
					T = C;
					C = a[ai] < b[bi] + T;
					c[ci] = a[ai] - b[bi] + (C * r - T);
					++ai;++bi;++ci;
				}

				while (ai < aj) {
					T = C;
					C = a[ai] < T;
					c[ci] = a[ai] + (C * r - T);
					++ai;++ci;
				}

				if (C) {
					while (ci < cj) {
						c[ci] = r - 1;
						++ci;
					}
				}
			};
		};

		exports.bsub_t = bsub_t;
		exports.lsub_t = lsub_t;

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

		/**
   * LITTLE ENDIAN BINARY and APPLIED ON a AND b
   *
   * Meaningful only when r is a power of 2.
   *
   * |a| >= |b| > 0
   *
   * treats b as if it was represented with the same number of blocks as a
   */

		var land_t = function land_t(r) {

			var _r = r / 2;

			return function (a, a0, a1, b, b0, b1, c, c0, c1) {

				var ct = c0 + b1 - b0;

				while (c0 < ct) c[c0++] = a[a0++] & b[b0++];

				if (b[b0 - 1] < _r) while (c0 < c1) c[c0++] = 0;else while (c0 < c1) c[c0++] = a[a0++];
			};
		};

		exports.and = and;
		exports.land_t = land_t;
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
		/* js/src/0-legacy/compare */
		/* js/src/0-legacy/compare/cmp.js */

		var bcmp_t = function bcmp_t() {

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

			return function (a, ai, aj, b, bi, bj) {

				var tmp = aj - bj + bi;

				for (; ai < tmp; ++ai) if (a[ai] > 0) return 1;

				// same size aj - ai === bj - bi
				for (; ai < aj; ++ai, ++bi) {
					if (a[ai] > b[bi]) return 1;
					if (a[ai] < b[bi]) return -1;
				}

				return 0;
			};
		};

		var lcmp_t = function lcmp_t() {

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

			return function (a, ai, aj, b, bi, bj) {

				var tmp = ai + bj - bi;

				--aj;--bj;

				for (; aj >= tmp; --aj) if (a[aj] > 0) return 1;

				// same size aj - ai === bj - bi
				for (; aj >= ai; --aj, --bj) {
					if (a[aj] > b[bj]) return 1;
					if (a[aj] < b[bj]) return -1;
				}

				return 0;
			};
		};

		exports.bcmp_t = bcmp_t;
		exports.lcmp_t = lcmp_t;
		/* js/src/0-legacy/compare/eq.js */

		/**
   * Wrapper for a comparison operator that returns true iff
   * _a_ is equal to _b_.
   */

		var eq_t = function eq_t(cmp) {
			return function (a, ai, aj, b, bi, bj) {
				return cmp(a, ai, aj, b, bi, bj) === 0;
			};
		};

		exports.eq_t = eq_t;
		/* js/src/0-legacy/compare/ge.js */

		/**
   * Wrapper for a comparison operator that returns true iff
   * _a_ is greater or equal to _b_.
   */

		var ge_t = function ge_t(cmp) {
			return function (a, ai, aj, b, bi, bj) {
				return cmp(a, ai, aj, b, bi, bj) >= 0;
			};
		};

		exports.ge_t = ge_t;
		/* js/src/0-legacy/compare/gt.js */

		/**
   * Wrapper for a comparison operator that returns true iff
   * _a_ is greater than _b_.
   */

		var gt_t = function gt_t(cmp) {
			return function (a, ai, aj, b, bi, bj) {
				return cmp(a, ai, aj, b, bi, bj) > 0;
			};
		};

		exports.gt_t = gt_t;
		/* js/src/0-legacy/compare/le.js */

		/**
   * Wrapper for a comparison operator that returns true iff
   * _a_ is less or equal to _b_.
   */

		var le_t = function le_t(cmp) {
			return function (a, ai, aj, b, bi, bj) {
				return cmp(a, ai, aj, b, bi, bj) <= 0;
			};
		};

		exports.le_t = le_t;
		/* js/src/0-legacy/compare/lt.js */

		/**
   * Wrapper for a comparison operator that returns true iff
   * _a_ is less than _b_.
   */

		var lt_t = function lt_t(cmp) {
			return function (a, ai, aj, b, bi, bj) {
				return cmp(a, ai, aj, b, bi, bj) < 0;
			};
		};

		exports.lt_t = lt_t;
		/* js/src/0-legacy/compare/ne.js */

		/**
   * Wrapper for a comparison operator that returns true iff
   * _a_ is not equal to _b_.
   */

		var ne_t = function ne_t(cmp) {
			return function (a, ai, aj, b, bi, bj) {
				return cmp(a, ai, aj, b, bi, bj) !== 0;
			};
		};

		exports.ne_t = ne_t;
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
		/* js/src/0-legacy/others/wrap */
		/* js/src/0-legacy/others/wrap/wrapbin.js */
		/**
   * Wrapper for binary operator.
   * Ensures
   *
   *     i >= j
   *     i0, j0, k0 >= 0
   *
   */

		var wrapbin = function wrapbin(fn) {

			return function (a, i0, i1, b, j0, j1, c, k0, k1) {

				var i, j, k;

				k0 = Math.max(0, k0);
				k = k1 - k0;

				i0 = Math.max(0, i0, i1 - k);
				j0 = Math.max(0, j0, j1 - k);
				i = i1 - i0;
				j = j1 - j0;

				if (i < j) return fn(b, j0, j1, a, i0, i1, c, k0, k1);else return fn(a, i0, i1, b, j0, j1, c, k0, k1);
			};
		};

		exports.wrapbin = wrapbin;

		/* js/src/0-legacy/others/wrap/wrapcmp.js */

		var wrapcmp = function wrapcmp(cmp) {

			return function (a, ai, aj, b, bi, bj) {

				if (aj - ai + bi - bj < 0) {
					return -cmp(b, bi, bj, a, ai, aj);
				} else {
					return cmp(a, ai, aj, b, bi, bj);
				}
			};
		};

		exports.wrapcmp = wrapcmp;
		/* js/src/0-legacy/others/wrap/wrapmov.js */

		var wrapmov = function wrapmov(fn) {
			return function (a, i, j, b, k) {

				if (i < 0) {
					k -= i;
					i = 0;
				}
				if (k < 0) {
					i -= k;
					k = 0;
				}
				return fn(a, i, j, b, k);
			};
		};

		exports.wrapmov = wrapmov;
		/* js/src/0-legacy/parse */
		/* js/src/0-legacy/parse/parse.js */

		/**
   * Function template for number parsing.
   * Endianess provided by the iterator function
   * iterator function must be reverse ordered
   *
   * @param {int} f from radix
   * @param {int} t to radix
   * @param {function} iter iterator function
   */

		var parse_t = function parse_t(t, f, iter) {

			if (t >= f) {

				if (f > 36) throw 'f > 36 not implemented';

				var z = 0,
				    log = t;
				while (log >= f) {
					if (log % f) break;
					log /= f;
					++z;
				}

				if (log !== 1) throw 'log(f) does not divide log(t) not implemented';

				// immediate log(t) divides log(f)
				return function (s, si, sj, a, ai, aj) {
					var len = sj - si,
					    k = sj - z,
					    n = Math.ceil(len / z);
					var block = function block(i) {
						a[i] = parseInt(s.slice(Math.max(0, k), k + z), f);
						k -= z;
					};

					iter(aj - n, aj, block);
				};
			} else throw 'f > t not implemented';
		};

		exports.parse_t = parse_t;
		/* js/src/0-legacy/stringify */
		/* js/src/0-legacy/stringify/stringify.js */

		/**
   * Function template for number stringification.
   * Endianess provided by the iterator function
   *
   * @param {int} f from radix
   * @param {int} t to radix
   * @param {function} iter iterator function
   */

		var stringify_t = function stringify_t(f, t, iter, zfill_t) {

			if (t <= f) {

				if (t > 36) throw 't > 36 not implemented';

				var z = 0;
				while (f >= t) {
					if (f % t) break;
					f /= t;
					++z;
				}

				if (f !== 1) throw 'log(t) does not divide log(f) not implemented';

				var zfill = zfill_t(z);

				return function (a, i0, i1) {
					var s = [];
					iter(i0, i1, function (i) {
						s.push(zfill(Number(+a[i]).toString(t)));
					});
					return s.join('');
				};
			} else throw 't > f not implemented';
		};

		exports.stringify_t = stringify_t;
		/* js/src/1-new */
		/* js/src/1-new/arithmetic */
		/* js/src/1-new/arithmetic/div */
		/* js/src/1-new/arithmetic/div/_div.js */

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

		var _div = function _div(x, r, ri, rj, b, bi, bj, q, qi) {

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

		exports._div = _div;

		/* js/src/1-new/arithmetic/sub */
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

			var data = new Array(n);

			for (var i = 0; i < n; ++i) {
				data[i] = 0;
			}return data;
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

			while (true) {

				var q = _alloc(qj - qi);

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

		/* js/src/1-new/convert/convert.js */

		var convert = function convert(f, t, a, ai, aj) {

			var bi = 0;
			var bj = Math.ceil(Math.log(f) / Math.log(t) * (aj - ai));
			var b = _alloc(bj - bi);

			_convert(f, t, a, ai, aj, b, bi, bj);

			return b;
		};

		exports.convert = convert;

		/* js/src/1-new/convert/parse.js */

		var parse = function parse(f, t, string) {

			if (f > 36) throw 'f > 36 not implemented';

			var n = string.length;

			var a = [];

			for (var k = 0; k < n; ++k) {
				a.push(_int(string[k]));
			}return convert(f, t, a, 0, n);
		};

		exports.parse = parse;

		/* js/src/1-new/convert/stringify.js */

		var stringify = function stringify(f, t, a, ai, aj) {

			if (t > 36) throw 't > 36 not implemented';

			var b = convert(f, t, a, ai, aj);
			var n = b.length;

			var data = [];

			for (var k = 0; k < n; ++k) {
				data.push(_chr(b[k]));
			}return data.join('');
		};

		exports.stringify = stringify;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-integer", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["integer"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-integer");
})();