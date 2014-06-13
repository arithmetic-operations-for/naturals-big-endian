var algo = require('algo');


test('alu.stringify', function(assert){

	var zfill_t = function(n){
		return algo.zfill_t(n, function(c, n){
			return algo.lfill_t(c, n, algo.strmul);
		});
	};

	var fstringify8_2  = alu.stringify_t(Math.pow(2, 8), 2, algo.fiter, zfill_t);
	var fstringify8_4  = alu.stringify_t(Math.pow(2, 8), 4, algo.fiter, zfill_t);
	var fstringify8_16 = alu.stringify_t(Math.pow(2, 8), 16, algo.fiter, zfill_t);

	var fstringify16_2  = alu.stringify_t(Math.pow(2, 16), 2, algo.fiter, zfill_t);
	var fstringify16_4  = alu.stringify_t(Math.pow(2, 16), 4, algo.fiter, zfill_t);
	var fstringify16_16 = alu.stringify_t(Math.pow(2, 16), 16, algo.fiter, zfill_t);

	var fstringify32_2  = alu.stringify_t(Math.pow(2, 32), 2, algo.fiter, zfill_t);
	var fstringify32_4  = alu.stringify_t(Math.pow(2, 32), 4, algo.fiter, zfill_t);
	var fstringify32_16 = alu.stringify_t(Math.pow(2, 32), 16, algo.fiter, zfill_t);

	var fstringify10   = alu.stringify_t(10, 10, algo.fiter, zfill_t);
	var fstringify100  = alu.stringify_t(100, 10, algo.fiter, zfill_t);
	var fstringify1000 = alu.stringify_t(1000, 10, algo.fiter, zfill_t);

	var bstringify8_2  = alu.stringify_t(Math.pow(2, 8), 2, algo.biter, zfill_t);
	var bstringify8_4  = alu.stringify_t(Math.pow(2, 8), 4, algo.biter, zfill_t);
	var bstringify8_16 = alu.stringify_t(Math.pow(2, 8), 16, algo.biter, zfill_t);

	var bstringify16_2  = alu.stringify_t(Math.pow(2, 16), 2, algo.biter, zfill_t);
	var bstringify16_4  = alu.stringify_t(Math.pow(2, 16), 4, algo.biter, zfill_t);
	var bstringify16_16 = alu.stringify_t(Math.pow(2, 16), 16, algo.biter, zfill_t);

	var bstringify32_2  = alu.stringify_t(Math.pow(2, 32), 2, algo.biter, zfill_t);
	var bstringify32_4  = alu.stringify_t(Math.pow(2, 32), 4, algo.biter, zfill_t);
	var bstringify32_16 = alu.stringify_t(Math.pow(2, 32), 16, algo.biter, zfill_t);

	var bstringify10   = alu.stringify_t(10, 10, algo.biter, zfill_t);
	var bstringify100  = alu.stringify_t(100, 10, algo.biter, zfill_t);
	var bstringify1000 = alu.stringify_t(1000, 10, algo.biter, zfill_t);




	deepEqual(fstringify8_2([1, 2, 3], 0, 3), '000000010000001000000011', '8_2');
	deepEqual(fstringify8_4([1, 2, 3], 0, 3), '000100020003', '8_4');
	deepEqual(fstringify8_16([1, 2, 3], 0, 3), '010203', '8_16');

	deepEqual(fstringify16_2([1, 2, 3], 0, 3), '000000000000000100000000000000100000000000000011', '16_2');
	deepEqual(fstringify16_4([1, 2, 3], 0, 3), '000000010000000200000003', '16_4');
	deepEqual(fstringify16_16([1, 2, 3], 0, 3), '000100020003', '16_16');

	deepEqual(fstringify32_2([1, 2, 3], 0, 3), '000000000000000000000000000000010000000000000000000000000000001000000000000000000000000000000011', '32_2');
	deepEqual(fstringify32_4([1, 2, 3], 0, 3), '000000000000000100000000000000020000000000000003', '32_4');
	deepEqual(fstringify32_16([1, 2, 3], 0, 3), '000000010000000200000003', '32_16');

	deepEqual(fstringify10(['1', '0', '0'], 0, 3), '100', '10');
	deepEqual(fstringify100(['21', '20', '20'], 0, 3), '212020', '100');
	deepEqual(fstringify1000(['1', '0', '0'], 0, 3), '001000000', '1000');
	deepEqual(fstringify1000(['21', '20', '320'], 0, 3), '021020320', '1000');



	deepEqual(bstringify8_2([3, 2, 1], 0, 3), '000000010000001000000011', '8_2');
	deepEqual(bstringify8_4([3, 2, 1], 0, 3), '000100020003', '8_4');
	deepEqual(bstringify8_16([3, 2, 1], 0, 3), '010203', '8_16');

	deepEqual(bstringify16_2([3, 2, 1], 0, 3), '000000000000000100000000000000100000000000000011', '16_2');
	deepEqual(bstringify16_4([3, 2, 1], 0, 3), '000000010000000200000003', '16_4');
	deepEqual(bstringify16_16([3, 2, 1], 0, 3), '000100020003', '16_16');

	deepEqual(bstringify32_2([3, 2, 1], 0, 3), '000000000000000000000000000000010000000000000000000000000000001000000000000000000000000000000011', '32_2');
	deepEqual(bstringify32_4([3, 2, 1], 0, 3), '000000000000000100000000000000020000000000000003', '32_4');
	deepEqual(bstringify32_16([3, 2, 1], 0, 3), '000000010000000200000003', '32_16');

	deepEqual(bstringify10(['0', '0', '1'], 0, 3), '100', '10');
	deepEqual(bstringify100(['20', '20', '21'], 0, 3), '212020', '100');
	deepEqual(bstringify1000(['0', '0', '1'], 0, 3), '001000000', '1000');
	deepEqual(bstringify1000(['320', '20', '21'], 0, 3), '021020320', '1000');

	throws(function(){
		alu.stringify_t(Math.pow(2, 32), 8, algo.biter, zfill_t);
	}, /not implemented/, 'log(t) does not divide log(f)');

	throws(function(){
		alu.stringify_t(36, 4, algo.biter, zfill_t);
	}, /not implemented/, 'log(t) does not divide log(f)');

	throws(function(){
		alu.stringify_t(12, 14, algo.biter, zfill_t);
	}, /not implemented/, 't > f');

	throws(function(){
		alu.stringify_t(37*37, 37, algo.biter, zfill_t);
	}, /not implemented/, 't > 36');

});