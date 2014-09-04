

var wrapmov = function(fn){
	return function(a, i, j, b, k){

		if(i < 0){
			k -= i;
			i = 0;
		}
		if(k < 0){
			i -= k;
			k = 0;
		}
		return fn(a, i, j, b, k);

	};
};

exports.wrapmov = wrapmov;