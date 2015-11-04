

var algo = require("aureooms-js-algo");
var util = require("util");
var fmt = util.format;
var randint = algo.randint;


var runtest = function(name, n, mul53_t, hb, lb, r, calloc){

	console.log(fmt("%s %d", name, r));

	test(name, function(){

		var i, x, y, z, a, b, c, d, v, w;

		var mul53 = mul53_t(r);

		for (i = 0; i < n; ++i) {
			x = randint(0, r);
			y = randint(0, r);
			z = x * y;

			// 0 BLOCK

			a = calloc(1);
			b = calloc(1);

			a[0] = x;
			b[0] = y;

			c = calloc(2);
			d = calloc(2);
			mul53(a, 0, 1, b, 0, 1, c, 0, 0);
			deepEqual(c, d, "c zero check 1");

			c = calloc(2);
			d = calloc(2);
			mul53(a, 0, 0, b, 0, 1, c, 0, 2);
			deepEqual(c, d, "c zero check 2");

			c = calloc(2);
			d = calloc(2);
			mul53(a, 0, 1, b, 1, 1, c, 0, 2);
			deepEqual(c, d, "c zero check 3");


			// 1 BLOCK

			a = calloc(1);
			b = calloc(1);
			c = calloc(2);

			a[0] = x;
			b[0] = y;
			mul53(a, 0, 1, b, 0, 1, c, 0, 1);
			v = c[0];
			mul53(a, 0, 1, b, 0, 1, c, 1, 2);
			w = c[1];

			deepEqual(v, w, "index independence check");
			deepEqual(v, z % r, fmt("(%d * %d) %% %d = %d", x, y, r, z));


			// 2 BLOCKS

			a = calloc(1);
			b = calloc(1);
			c = calloc(2);

			a[0] = x;
			b[0] = y;
			mul53(a, 0, 1, b, 0, 1, c, 0, 2);
			v = c[hb] * r + c[lb];

			deepEqual(v, z, fmt("%d * %d = %d", x, y, z));

		}

	});


};



var n = 10;
var R = function(range){ return 2 + randint(0, range - 2)};
var Rlen = 5;
var MUL53 = [integer.lmul53_t, integer.bmul53_t];
var HB = [1, 0];
var LB = [0, 1];
var NAME = ["integer.lmul53_t", "integer.bmul53_t"];
var ALLOC = [
	function(n){ return new Uint16Array(n); }
];
var RANGE = [
	Math.pow(2, Uint16Array.BYTES_PER_ELEMENT * 8)
];
var i, j, k;

for (i = 0; i < MUL53.length; ++i)
for (j = 0; j < ALLOC.length; ++j)
for (k = 0; k < Rlen; ++k)
runtest(NAME[i], n, MUL53[i], HB[i], LB[i], R(RANGE[j]), ALLOC[j]);