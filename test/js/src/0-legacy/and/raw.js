var util = require('util');

var fmt = util.format;


var check = function(Ctor){

	var name = fmt("integer.and<%s, %s>", Ctor.name);
	console.log(name);

	test(name, function(){

		var f = 2;
		var r = Math.pow(2, Ctor.BYTES_PER_ELEMENT * 8);

		for (var k = 0; k < TEST.length; ++k) {
			var test = TEST[k];

			var as = test[0];
			var a = new Ctor( integer.parse_keep_zeros( f , r , as ) ) ;
			var ai = 0 ;
			var aj = a.length ;
			var c = new Ctor(aj);


			var bs = test[1];
			var b = new Ctor( integer.parse_keep_zeros( f , r , bs ) ) ;
			var bi = 0;
			var bj = b.length;

			integer.and(a, ai, b, bi, c, ai, aj);

			var ds = test[2];
			var d = new Ctor( integer.parse_keep_zeros( f , r , ds ) ) ;
			var di = 0;
			var dj = d.length;

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

for (var c = 0; c < CTOR.length; ++c)
	check(CTOR[c]);
