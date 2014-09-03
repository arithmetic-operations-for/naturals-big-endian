

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