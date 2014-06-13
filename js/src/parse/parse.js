
/**
 * Function template for number parsing.
 * Endianess provided by the iterator function
 * iterator function must be reverse ordered
 * 
 * @param {int} f from radix
 * @param {int} t to radix
 * @param {function} iter iterator function
 */


var parse_t = function(t, f, iter){

	if(t >= f){

		if(f > 36) throw 'f > 36 not implemented';

		var z = 0, log = t;
		while(log >= f){
			if (log % f) break;
			log /= f;
			++z;
		}

		if (log !== 1) throw 'log(f) does not divide log(t) not implemented';

		// immediate log(t) divides log(f)
		return function(s, si, sj, a, ai, aj){
			var len = sj - si, k = sj - z, n = Math.ceil(len / z);
			var block = function(i){
				a[i] = parseInt(s.slice(Math.max(0, k), k + z), f);
				k -= z;
			};

			iter(aj - n, aj, block);

		};

	}
	else throw 'f > t not implemented';


};


exports.parse_t = parse_t;