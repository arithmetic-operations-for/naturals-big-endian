var algo = require('algo');
var util = require('util');

var fmt = util.format;


var check = function(Ctor, iter){

	var name = fmt("alu.and<%s, %s>", Ctor.name, iter[0]);
	console.log(name);

	iter = iter[1];

	test(name, function(){

		var and = alu.and;

		var f = 2;
		var r = Math.pow(2, Ctor.BYTES_PER_ELEMENT * 8);
		var parse = alu.parse_t(r, f, iter);

		for (var k = 0; k < TEST.length; ++k) {
			var test = TEST[k];

			var as = test[0];
			var ai = 0;
			var aj = Math.ceil(as.length * Math.log(f) / Math.log(r));
			var a = new Ctor(aj);
			var c = new Ctor(aj);
			parse(as, 0, as.length, a, ai, aj);


			var bs = test[1];
			var bi = 0;
			var bj = Math.ceil(bs.length * Math.log(f) / Math.log(r));
			var b = new Ctor(bj);
			parse(bs, 0, bs.length, b, bi, bj);

			and(a, ai, b, bi, c, ai, aj);

			var ds = test[2];
			var di = 0;
			var dj = Math.ceil(ds.length * Math.log(f) / Math.log(r));
			var d = new Ctor(dj);
			parse(ds, 0, ds.length, d, di, dj);

			deepEqual(c, d, fmt("and('%s','%s') === '%s'", as, bs, ds));
		}


	});


	var TEST = [
		['0000000000000000', '0000000000000000', '0000000000000000'],
		['0000000000000000', '1111111111111111', '0000000000000000'],
		['1111111111111111', '0000000000000000', '0000000000000000'],
		['1111111111111111', '1111111111111111', '1111111111111111'],
		['0000000000000111', '0000000000000111', '0000000000000111'],
		['0000111111110000', '0101010101010101', '0000010101010000'],
		['0001111111100000', '0101010101010101', '0001010101000000'],
	];

};



var CTOR = [
	Uint8Array,
	Uint16Array,
	Uint32Array,
];

var ENDIANESS = [
	['algo.biter', algo.biter],
	['algo.fiter', algo.fiter],
];



for (var e = 0; e < ENDIANESS.length; ++e)
for (var c = 0; c < CTOR.length; ++c)
	check(CTOR[c], ENDIANESS[e]);
