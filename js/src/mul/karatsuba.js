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