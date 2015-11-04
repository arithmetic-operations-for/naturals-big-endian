

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