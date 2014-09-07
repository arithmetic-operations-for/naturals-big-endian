

var util = require('util');
var fmt = util.format;



var check = function(Ctor, cmp, iter, transform){
	var name = fmt("integer.cmp<%s, %s, %s>", Ctor.name, cmp[0], iter[0]);

	cmp = cmp[1];
	iter = iter[1];

	var f = 16;
	var r = Math.pow(2, Ctor.BYTES_PER_ELEMENT * 8);
	var parse = integer.parse_t(r, f, iter);

	console.log(name);
	test(name, function(){


		for (var k = 0; k < TEST.length; ++k) {
			var test = TEST[k];

			var as = test[0];
			var ai = 0;
			var aj = Math.ceil(as.length * Math.log(f) / Math.log(r));
			var a = new Ctor(aj);
			parse(as, 0, as.length, a, ai, aj);


			var bs = test[1];
			var bi = 0;
			var bj = Math.ceil(bs.length * Math.log(f) / Math.log(r));
			var b = new Ctor(bj);
			parse(bs, 0, bs.length, b, bi, bj);

			var actual = cmp(a, ai, aj, b, bi, bj);
			var expected = transform(test[2], 0);

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

	['00123456789', '9876543210', -1],
	['00000000000', '9876543210', -1],
	['09876543209', '9876543210', -1],
	['00123456788', '0123456789', -1],
	['00123456780', '0123456789', -1],
	['00000000000', '0000000007', -1],
	['04545464646', '9989748488', -1],
	['04747474747', '4848484848', -1],
	['01541548548', '1541548549', -1],

	['00000000000', '0000000000', 0],
	['00000000001', '0000000001', 0],
	['00123456789', '0123456789', 0],
	['01213245874', '1213245874', 0],
	['04548848484', '4548848484', 0],
	['06465664848', '6465664848', 0],
	['07887878787', '7887878787', 0],
	['09824564878', '9824564878', 0],
	['09876543210', '9876543210', 0],

	['09876543210', '0123456789', 1],
	['09876543210', '0000000000', 1],
	['09876543210', '9876543209', 1],
	['00123456789', '0123456788', 1],
	['00123456789', '0123456780', 1],
	['00000000007', '0000000000', 1],
	['09989748488', '4545464646', 1],
	['04848484848', '4747474747', 1],
	['01541548549', '1541548548', 1],

	['10123456789', '9876543210', 1],
	['10000000000', '9876543210', 1],
	['19876543209', '9876543210', 1],
	['10123456788', '0123456789', 1],
	['10123456780', '0123456789', 1],
	['10000000000', '0000000007', 1],
	['14545464646', '9989748488', 1],
	['14747474747', '4848484848', 1],
	['11541548548', '1541548549', 1],

	['10000000000', '0000000000', 1],
	['10000000001', '0000000001', 1],
	['10123456789', '0123456789', 1],
	['11213245874', '1213245874', 1],
	['14548848484', '4548848484', 1],
	['16465664848', '6465664848', 1],
	['17887878787', '7887878787', 1],
	['19824564878', '9824564878', 1],
	['19876543210', '9876543210', 1],

	['19876543210', '0123456789', 1],
	['19876543210', '0000000000', 1],
	['19876543210', '9876543209', 1],
	['10123456789', '0123456788', 1],
	['10123456789', '0123456780', 1],
	['10000000007', '0000000000', 1],
	['19989748488', '4545464646', 1],
	['14848484848', '4747474747', 1],
	['11541548549', '1541548548', 1],
];


var algo = require('aureooms-js-algo');

var TRAITS = [
	Uint8Array,
	Uint16Array,
	Uint32Array,
];


var bcmp = integer.bcmp_t();
var lcmp = integer.lcmp_t();
var dummy = function(x){ return x; };

var ENDIANESS = [
	[['integer.bcmp_t', bcmp], ['algo.biter', algo.biter], dummy],
	[['integer.lcmp_t', lcmp], ['algo.fiter', algo.fiter], dummy],
	[['integer.eq<bcmp_t>', integer.eq_t(bcmp)], ['algo.biter', algo.biter], algo.eq],
	[['integer.eq<lcmp_t>', integer.eq_t(lcmp)], ['algo.fiter', algo.fiter], algo.eq],
	[['integer.ge<bcmp_t>', integer.ge_t(bcmp)], ['algo.biter', algo.biter], algo.ge],
	[['integer.ge<lcmp_t>', integer.ge_t(lcmp)], ['algo.fiter', algo.fiter], algo.ge],
	[['integer.gt<bcmp_t>', integer.gt_t(bcmp)], ['algo.biter', algo.biter], algo.gt],
	[['integer.gt<lcmp_t>', integer.gt_t(lcmp)], ['algo.fiter', algo.fiter], algo.gt],
	[['integer.le<bcmp_t>', integer.le_t(bcmp)], ['algo.biter', algo.biter], algo.le],
	[['integer.le<lcmp_t>', integer.le_t(lcmp)], ['algo.fiter', algo.fiter], algo.le],
	[['integer.lt<bcmp_t>', integer.lt_t(bcmp)], ['algo.biter', algo.biter], algo.lt],
	[['integer.lt<lcmp_t>', integer.lt_t(lcmp)], ['algo.fiter', algo.fiter], algo.lt],
	[['integer.ne<bcmp_t>', integer.ne_t(bcmp)], ['algo.biter', algo.biter], algo.ne],
	[['integer.ne<lcmp_t>', integer.ne_t(lcmp)], ['algo.fiter', algo.fiter], algo.ne],
];

for (var j = 0; j < ENDIANESS.length; ++j)
for (var i = 0; i < TRAITS.length; ++i)
	check(TRAITS[i], ENDIANESS[j][0], ENDIANESS[j][1], ENDIANESS[j][2]);