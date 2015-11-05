
test( 'parse' , function ( assert ) {

	assert.throws( integer.parse.bind( null , 16 , 16 , '!00b0C0def' ) , /invalid/ ) ;
	assert.throws( integer.parse.bind( null , 37 , 37 , '!' ) , /not implemented/ ) ;

	assert.deepEqual( integer.parse( 2 , 2 , '0' ) , [ 0 ] ) ;
	assert.deepEqual( integer.parse( 2 , 2 , '1' ) , [ 1 ] ) ;
	assert.deepEqual( integer.parse( 2 , 2 , '10' ) , [ 1 , 0 ] ) ;
	assert.deepEqual( integer.parse( 2 , 2 , '11' ) , [ 1 , 1 ] ) ;

	assert.deepEqual( integer.parse( 2 , 2 , '1001010111' ) , [ 1 , 0 , 0 , 1 , 0 , 1 , 0 , 1 , 1 , 1 ] ) ;

	assert.deepEqual( integer.parse( 16 , 16 , '0' ) , [ 0 ] ) ;
	assert.deepEqual( integer.parse( 16 , 16 , 'a' ) , [ 10 ] ) ;
	assert.deepEqual( integer.parse( 16 , 16 , 'A0' ) , [ 10 , 0 ] ) ;
	assert.deepEqual( integer.parse( 16 , 16 , 'a1' ) , [ 10 , 1 ] ) ;

	assert.deepEqual( integer.parse( 16 , 16 , 'a00b0C0def' ) , [ 10 , 0 , 0 , 11 , 0 , 12 , 0 , 13 , 14 , 15 ] ) ;

	assert.deepEqual( integer.parse( 2 , 16 , '11' ) , [ 3 ] ) ;
	assert.deepEqual( integer.parse( 16 , 2 , '3' ) , [ 0 , 0 , 1 , 1 ] ) ;

	assert.deepEqual( integer.parse( 2 , 16 , '10001' ) , [ 1 , 1 ] ) ;
	assert.deepEqual( integer.parse( 16 , 2 , '11' ) , [ 0 , 0 , 0 , 1 , 0 , 0 , 0 , 1 ] ) ;

	assert.deepEqual( integer.parse( 2 , 10 , '11' ) , [ 3 ] ) ;
	assert.deepEqual( integer.parse( 10 , 2 , '3' ) , [ 0 , 0 , 1 , 1 ] ) ;

	assert.deepEqual( integer.parse( 10 , 16 , '256' ) , [ 1 , 0 , 0 ] ) ;
	assert.deepEqual( integer.parse( 16 , 10 , '100' ) , [ 0 , 2 , 5 , 6 ] ) ;

	assert.deepEqual( integer.parse( 10 , 16 , '255' ) , [ 0 , 15 , 15 ] ) ;
	assert.deepEqual( integer.parse( 16 , 10 , 'ff' ) , [ 2 , 5 , 5 ] ) ;

	assert.deepEqual( integer.parse( 16 , 100 , 'ff' ) , [ 2 , 55 ] ) ;
	assert.deepEqual( integer.parse( 16 , 1000 , 'ff' ) , [ 255 ] ) ;
	assert.deepEqual( integer.parse( 16 , 10000 , 'ff' ) , [ 255 ] ) ;

	assert.deepEqual( integer.parse( 16 , 100 , 'fedcba9876543210' ) , [ 18 , 36 , 47 , 58 , 54 , 44 , 93 , 06 , 47 , 20 ] ) ;
	assert.deepEqual(
		integer.parse( 36 , 10000 , '1234567890azertyuiopqsdfghjklmwxcvbn' ) ,
		[ 0,312,6485,6500,0280,6599,6167,8564,7451,522,8125,564,4362,6409,4355]
	) ;

} ) ;
