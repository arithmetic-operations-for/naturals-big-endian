
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