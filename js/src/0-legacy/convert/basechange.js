

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