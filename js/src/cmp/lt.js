

/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is less than _b_.
 */

var lt_t = function(cmp){
	return function (a, ai, aj, b, bi, bj) {
		return cmp(a, ai, aj, b, bi, bj) < 0;
	};
};

exports.lt_t = lt_t;