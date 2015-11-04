var algo = require('aureooms-js-algo');


test('integer.parse', function(assert){

	console.log('integer.parse');

	var a, s;

	var fparse8_2  = integer.parse_t(Math.pow(2, 8), 2, algo.biter);
	var fparse8_4  = integer.parse_t(Math.pow(2, 8), 4, algo.biter);
	var fparse8_16 = integer.parse_t(Math.pow(2, 8), 16, algo.biter);

	var fparse16_2  = integer.parse_t(Math.pow(2, 16), 2, algo.biter);
	var fparse16_4  = integer.parse_t(Math.pow(2, 16), 4, algo.biter);
	var fparse16_16 = integer.parse_t(Math.pow(2, 16), 16, algo.biter);

	var fparse32_2  = integer.parse_t(Math.pow(2, 32), 2, algo.biter);
	var fparse32_4  = integer.parse_t(Math.pow(2, 32), 4, algo.biter);
	var fparse32_16 = integer.parse_t(Math.pow(2, 32), 16, algo.biter);

	var fparse10   = integer.parse_t(10, 10, algo.biter);
	var fparse100  = integer.parse_t(100, 10, algo.biter);
	var fparse1000 = integer.parse_t(1000, 10, algo.biter);


	var bparse8_2  = integer.parse_t(Math.pow(2, 8), 2, algo.fiter);
	var bparse8_4  = integer.parse_t(Math.pow(2, 8), 4, algo.fiter);
	var bparse8_16 = integer.parse_t(Math.pow(2, 8), 16, algo.fiter);

	var bparse16_2  = integer.parse_t(Math.pow(2, 16), 2, algo.fiter);
	var bparse16_4  = integer.parse_t(Math.pow(2, 16), 4, algo.fiter);
	var bparse16_16 = integer.parse_t(Math.pow(2, 16), 16, algo.fiter);

	var bparse32_2  = integer.parse_t(Math.pow(2, 32), 2, algo.fiter);
	var bparse32_4  = integer.parse_t(Math.pow(2, 32), 4, algo.fiter);
	var bparse32_16 = integer.parse_t(Math.pow(2, 32), 16, algo.fiter);

	var bparse10   = integer.parse_t(10, 10, algo.fiter);
	var bparse100  = integer.parse_t(100, 10, algo.fiter);
	var bparse1000 = integer.parse_t(1000, 10, algo.fiter);


	a = new Uint32Array(3);
	s = '000000010000001000000011';
	fparse8_2(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([1, 2, 3]), '8_2');
	a = new Uint32Array(3);
	s = '000100020003';
	fparse8_4(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([1, 2, 3]), '8_4');
	a = new Uint32Array(3);
	s = '010203';
	fparse8_16(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([1, 2, 3]), '8_16');

	a = new Uint32Array(3);
	s = '000000000000000100000000000000100000000000000011';
	fparse16_2(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([1, 2, 3]), '16_2');
	a = new Uint32Array(3);
	s = '000000010000000200000003';
	fparse16_4(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([1, 2, 3]), '16_4');
	a = new Uint32Array(3);
	s = '000100020003';
	fparse16_16(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([1, 2, 3]), '16_16');

	a = new Uint32Array(3);
	s = '10000000000000000000000000000001000000000000000000000000000000011';
	fparse32_2(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([1, 2, 3]), '32_2');
	a = new Uint32Array(3);
	s = '100000000000000020000000000000003';
	fparse32_4(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([1, 2, 3]), '32_4');
	a = new Uint32Array(3);
	s = '10000000200000003';
	fparse32_16(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([1, 2, 3]), '32_16');

	a = new Uint32Array(3);
	s = '100';
	fparse10(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([1, 0, 0]), '10');
	a = new Uint32Array(3);
	s = '212020';
	fparse100(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([21, 20, 20]), '100');
	a = new Uint32Array(3);
	s = '1000000';
	fparse1000(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([1, 0, 0]), '1000');
	a = new Uint32Array(3);
	s = '021020320';
	fparse1000(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([21, 20, 320]), '1000');






	a = new Uint32Array(3);
	s = '000000010000001000000011';
	bparse8_2(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([3, 2, 1]), '8_2');
	a = new Uint32Array(3);
	s = '000100020003';
	bparse8_4(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([3, 2, 1]), '8_4');
	a = new Uint32Array(3);
	s = '010203';
	bparse8_16(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([3, 2, 1]), '8_16');

	a = new Uint32Array(3);
	s = '000000000000000100000000000000100000000000000011';
	bparse16_2(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([3, 2, 1]), '16_2');
	a = new Uint32Array(3);
	s = '000000010000000200000003';
	bparse16_4(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([3, 2, 1]), '16_4');
	a = new Uint32Array(3);
	s = '0100020003';
	bparse16_16(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([3, 2, 1]), '16_16');

	a = new Uint32Array(3);
	s = '10000000000000000000000000000001000000000000000000000000000000011';
	bparse32_2(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([3, 2, 1]), '32_2');
	a = new Uint32Array(3);
	s = '000000000000000100000000000000020000000000000003';
	bparse32_4(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([3, 2, 1]), '32_4');
	a = new Uint32Array(3);
	s = '000000010000000200000003';
	bparse32_16(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([3, 2, 1]), '32_16');

	a = new Uint32Array(3);
	s = '100';
	bparse10(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([0, 0, 1]), '10');
	a = new Uint32Array(3);
	s = '212020';
	bparse100(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([20, 20, 21]), '100');
	a = new Uint32Array(3);
	s = '1000000';
	bparse1000(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([0, 0, 1]), '1000');
	a = new Uint32Array(3);
	s = '21020320';
	bparse1000(s, 0, s.length, a, 0, 3);
	deepEqual(a, new Uint32Array([320, 20, 21]), '1000');


	throws(function(){
		integer.parse_t(Math.pow(2, 32), 8, algo.biter);
	}, /not implemented/, 'log(f) does not divide log(t)');

	throws(function(){
		integer.parse_t(36, 4, algo.biter);
	}, /not implemented/, 'log(f) does not divide log(t)');

	throws(function(){
		integer.parse_t(12, 14, algo.biter);
	}, /not implemented/, 'f > t');

	throws(function(){
		integer.parse_t(37*37, 37, algo.biter);
	}, /not implemented/, 'f > 36');

});