

/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is not equal to _b_.
 */

var ne_t = function(cmp){
	return function (a, ai, aj, b, bi, bj) {
		return cmp(a, ai, aj, b, bi, bj) !== 0;
	};
};

exports.ne_t = ne_t;