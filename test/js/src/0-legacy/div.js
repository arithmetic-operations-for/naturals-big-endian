
var util = require('util');
var fmt = util.format;
var integer = integerbigendian ;


var check = function(Ctor, cmp, div, sub){
	var name = fmt("integer.div<%s, %s, %s, %s>", Ctor.name, div[0], sub[0], cmp[0]);
	console.log(name);

	cmp = cmp[1];
	div = div[1];
	sub = sub[1];

	var f = 16;
	var r = Math.pow(2, Ctor.BYTES_PER_ELEMENT * 8);

	sub = sub(r);
	div = div(integer._lt, sub);

	test(name, function(assert){


		for (var k = 0; k < TEST.length; ++k) {
			var test = TEST[k];

			var as = test[0] ;
			var a = new Ctor( integer.parse( f , r , as ) ) ;
			var ai = 0 ;
			var aj = a.length ;
			var q = new Ctor(aj) ;


			var bs = test[1] ;
			var b = new Ctor( integer.parse( f , r , bs ) ) ;
			var bi = 0 ;
			var bj = b.length ;

			div(a, ai, aj, b, bi, bj, q, ai);
			var qactual = parseInt(integer.stringify(r , f , q, ai, aj), f);
			var qexpected = parseInt(test[2], f);
			var ractual = parseInt(integer.stringify(r , f , a, ai, aj), f);
			var rexpected = parseInt(test[3], f);

			var a10 = parseInt(as, f);
			var b10 = parseInt(bs, f);

			deepEqual(qactual, qexpected, fmt("%d / %d === %d", a10, b10, qexpected));
			deepEqual(ractual, rexpected, fmt("%d % %d === %d", a10, b10, rexpected));
		}



	});

};

var TEST = [
	['0010', '4', '0004', '0000'],
	['0100', '10', '0010', '0000'],
	['0200', '20', '0010', '0000'],
	['0400', '10', '0040', '0000'],
	['fe01', 'ff', '00ff', '0000'],
	['fe0100', 'ff', '00ff00', '000000'],
	['27acdc40', '64c8', '000064c8', '00000000'],
	['27acdc3f', '64c8', '000064c7', '000064c7'],
	['27acdc41', '64c8', '000064c8', '00000001'],
	['27ad4108', '64c8', '000064c9', '00000000'],
	['27ad4107', '64c8', '000064c8', '000064c7'],

];

var TRAITS = [
	Uint8Array,
	Uint16Array,
	Uint32Array,
];

var ENDIANESS = [
	[
		['integer._cmp', integer._cmp],
		['integer.bdiv_t', integer.bdiv_t],
		['integer.bsub_t', integer.bsub_t],
	]
];

for (var j = 0; j < ENDIANESS.length; ++j)
for (var i = 0; i < TRAITS.length; ++i)
	check.apply(null, [TRAITS[i]].concat(ENDIANESS[j]));
