
var bmul_t = function(r){

	/**
	 * Computes product of two big endian arrays.
	 * <p>
	 * Computes product of two big endian arrays
	 * using long multiplication algorithm (the one teached in
	 * european primary schools)
	 */

	var mul = function(a, ai, aj, b, bi, bj, c, ci, cj){
		var ak, ck = --cj, ct, t, u, v;

		while (bj --> bi) {
			for (ak = aj; ak --> ai;) {
				t = b[bj] * a[ak];
				u = t % r;
				v = c[ck] + u;

				c[ck] = v % r;

				for (ct = ck - 1; v >= r && ct >= ci; --ct) {
					v = c[ct] + 1;
					c[ct] = v % r;
				}

				c[--ck] += (t - u) / r;

				for (ct = ck - 1; v >= r && ct >= ci; --ct) {
					v = c[ct] + 1;
					c[ct] = v % r;
				}
			}
			ck = --cj;
		}
	};

};


exports.bmul_t = bmul_t;