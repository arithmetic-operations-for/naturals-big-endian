
var bmul_t = function(r){

	/**
	 * Computes product of two big endian arrays.
	 * <p>
	 * Computes product of two big endian arrays
	 * using long multiplication algorithm (the one teached in
	 * european primary schools)
	 */

	var mul = function(a, ai, aj, b, bi, bj, c, ci, cj){
		var ak, ck = --cj, ct, t, u, v, w;

		while (bj --> bi && ck >= ci) {
			for (ak = aj, w = 0; ak --> ai && ck >= ci; --ck) {
				t = b[bj] * a[ak];
				u = t % r;
				v = c[ck] + u;

				c[ck] = v % r;

				for (ct = ck - 1; v >= r && ct >= ci; --ct) {
					v = c[ct] + 1;
					c[ct] = v % r;
				}

				v = c[ck] + w;

				c[ck] = v;

				for (ct = ck - 1; v >= r && ct >= ci; --ct) {
					v = c[ct] + 1;
					c[ct] = v % r;
				}

				w = (t - u) / r;
			}
			ck = --cj;
		}
	};

	return mul;

};


exports.bmul_t = bmul_t;