


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