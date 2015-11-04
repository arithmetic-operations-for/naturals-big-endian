



test("integer.bconvert_t", function(){

	console.log("integer.bconvert_t");

	var bjoin, bsplit, bjoin_t, bsplit_t;

	bjoin_t = integer.bjoin_t;
	bsplit_t = integer.bsplit_t;

	bjoin = integer.bconvert_t(10, 1000, bjoin_t, bsplit_t);
	bsplit = integer.bconvert_t(1000, 10, bjoin_t, bsplit_t);

	throws(function(){
		integer.bconvert_t(222, 100, bjoin_t, bsplit_t);
	}, /not implemented/, "f >= t + log(t) does not divide log(f)");

	throws(function(){
		integer.bconvert_t(100, 222, bjoin_t, bsplit_t);
	}, /not implemented/, "t > f + log(f) does not divide log(t)");

	throws(function(){
		integer.bconvert_t(1000, 100, bjoin_t, bsplit_t);
	}, /not implemented/, "f >= t + log(t) does not divide log(f)");

	throws(function(){
		integer.bconvert_t(100, 1000, bjoin_t, bsplit_t);
	}, /not implemented/, "t > f + log(f) does not divide log(t)");

	var a, b, c;

	a = [1, 2, 3, 4, 5, 6, 7, 8];
	b = [0, 0, 0, 0, 0, 0];
	c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


	bjoin(a, 0, 8, b, 0, 6);

	deepEqual(a, [1, 2, 3, 4, 5, 6, 7, 8], "1. source unchanged");
	deepEqual(b, [0, 0, 0, 12, 345, 678] , "1. destination correct");


	bsplit(b, 0, 6, c, 0, 20)

	deepEqual(b, [0, 0, 0, 12, 345, 678] , "2. source unchanged");
	deepEqual(c, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8], "2. destination correct");


	bjoin(c, 0, 20, b, 0, 6)

	deepEqual(c, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8], "3. source unchanged");
	deepEqual(b, [0, 0, 0, 12, 345, 678] , "3. destination correct");


	bjoin(c, 0, 20, b, 0, 3)

	deepEqual(c, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8], "4. source unchanged");
	deepEqual(b, [12, 345, 678, 12, 345, 678] , "4. destination correct");


	bsplit(b, 0, 6, a, 0, 8)

	deepEqual(b, [12, 345, 678, 12, 345, 678] , "5. source unchanged");
	deepEqual(a, [1, 2, 3, 4, 5, 6, 7, 8], "5. destination correct");


});