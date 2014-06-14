

var util = require('util');
var fmt = util.format;



var check = function(Ctor, cmp, iter){
	var name = fmt("alu.cmp<%s, %s, %s>", Ctor.name, cmp[0], iter[0]);

	cmp = cmp[1];
	iter = iter[1];

	var f = 16;
	var r = Math.pow(2, Ctor.BYTES_PER_ELEMENT * 8);
	var parse = alu.parse_t(r, f, iter);

	console.log(name);
	test(name, function(){


		for (var k = 0; k < TEST.length; ++k) {
			var test = TEST[k];

			var as = test[0];
			var ai = 0;
			var aj = Math.ceil(as.length / Ctor.BYTES_PER_ELEMENT);
			var a = new Ctor(aj);
			parse(as, 0, as.length, a, ai, aj);


			var bs = test[1];
			var bi = 0;
			var bj = Math.ceil(bs.length / Ctor.BYTES_PER_ELEMENT);
			var b = new Ctor(bj);
			parse(bs, 0, bs.length, b, bi, bj);

			// console.log(a, b);
			// expect(0);
			var actual = cmp(a, ai, aj, b, bi, bj);
			var expected = test[2];

			deepEqual(actual, expected, fmt("cmp('%s','%s') === %d", as, bs, expected));
		}

	});
};



var TEST = [
	['0123456789', '9876543210', -1],
	['0000000000', '9876543210', -1],
	['9876543209', '9876543210', -1],
	['0123456788', '0123456789', -1],
	['0123456780', '0123456789', -1],
	['0000000000', '0000000007', -1],
	['4545464646', '9989748488', -1],
	['4747474747', '4848484848', -1],
	['1541548548', '1541548549', -1],

	['0000000000', '0000000000', 0],
	['0000000001', '0000000001', 0],
	['0123456789', '0123456789', 0],
	['1213245874', '1213245874', 0],
	['4548848484', '4548848484', 0],
	['6465664848', '6465664848', 0],
	['7887878787', '7887878787', 0],
	['9824564878', '9824564878', 0],
	['9876543210', '9876543210', 0],

	['9876543210', '0123456789', 1],
	['9876543210', '0000000000', 1],
	['9876543210', '9876543209', 1],
	['0123456789', '0123456788', 1],
	['0123456789', '0123456780', 1],
	['0000000007', '0000000000', 1],
	['9989748488', '4545464646', 1],
	['4848484848', '4747474747', 1],
	['1541548549', '1541548548', 1],
];


var algo = require('algo');

var TRAITS = [
	Uint8Array,
	Uint16Array,
	Uint32Array,
];

var ENDIANESS = [
	[['alu.bcmp_t', alu.bcmp_t()], ['algo.biter', algo.biter]],
	[['alu.lcmp_t', alu.lcmp_t()], ['algo.fiter', algo.fiter]],
];

for (var j = 0; j < ENDIANESS.length; ++j)
for (var i = 0; i < TRAITS.length; ++i)
	check(TRAITS[i], ENDIANESS[j][0], ENDIANESS[j][1]);