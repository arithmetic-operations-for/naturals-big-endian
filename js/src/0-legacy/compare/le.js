

/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is less or equal to _b_.
 */

var le_t = function(cmp){
	return function (a, ai, aj, b, bi, bj) {
		return cmp(a, ai, aj, b, bi, bj) <= 0;
	};
};

exports.le_t = le_t;