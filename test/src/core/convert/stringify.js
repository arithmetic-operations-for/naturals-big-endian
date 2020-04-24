import test from 'ava' ;
import * as integer from '../../../../src' ;

test( 'stringify' , function ( assert ) {

	assert.throws( integer.stringify.bind( null , 37 , 37 , [0] , 0 , 1 ) , { message: /not implemented/ } ) ;

	assert.deepEqual( integer.stringify( 2 , 2 , [ 0 ] , 0 , 1 ) , '0' ) ;
	assert.deepEqual( integer.stringify( 2 , 2 , [ 1 ] , 0 , 1 ) , '1' ) ;
	assert.deepEqual( integer.stringify( 2 , 2 , [ 1 , 0 ] , 0 , 2 ) , '10' ) ;
	assert.deepEqual( integer.stringify( 2 , 2 , [ 1 , 1 ] , 0 , 2 ) , '11' ) ;

	assert.deepEqual( integer.stringify( 2 , 2 , [ 1 , 0 , 0 , 1 , 0 , 1 , 0 , 1 , 1 , 1 ] , 0 , 10 ) , '1001010111' ) ;

	assert.deepEqual( integer.stringify( 16 , 16 , [ 0 ] , 0 , 1 ) , '0' ) ;
	assert.deepEqual( integer.stringify( 16 , 16 , [ 10 ] , 0 , 1 ) , 'a' ) ;
	assert.deepEqual( integer.stringify( 16 , 16 , [ 10 , 0 ] , 0 , 2 ) , 'a0' ) ;
	assert.deepEqual( integer.stringify( 16 , 16 , [ 10 , 1 ] , 0 , 2 ) , 'a1' ) ;

	assert.deepEqual( integer.stringify( 16 , 16 , [ 10 , 0 , 0 , 11 , 0 , 12 , 0 , 13 , 14 , 15 ] , 0 , 10 ) , 'a00b0c0def' ) ;

	assert.deepEqual( integer.stringify( 16 , 2 , [ 3 ] , 0 , 1 ) , '11' ) ;
	assert.deepEqual( integer.stringify( 2 , 16 , [ 0 , 0 , 1 , 1 ] , 0 , 4 ) , '3' ) ;

	assert.deepEqual( integer.stringify( 16 , 2 , [ 1 , 1 ] , 0 , 2 ) , '10001' ) ;
	assert.deepEqual( integer.stringify( 2 , 16 , [ 0 , 0 , 0 , 1 , 0 , 0 , 0 , 1 ] , 0 , 8 ) , '11' ) ;

	assert.deepEqual( integer.stringify( 10 , 2 , [ 3 ] , 0 , 1 ) , '11' ) ;
	assert.deepEqual( integer.stringify( 2 , 10 , [ 0 , 0 , 1 , 1 ] , 1 , 4 ) , '3' ) ;

	assert.deepEqual( integer.stringify( 16 , 10 , [ 1 , 0 , 0 ] , 0 , 3 ) , '256' ) ;
	assert.deepEqual( integer.stringify( 10 , 16 , [ 0 , 2 , 5 , 6 ] , 1 , 4 ) , '100' ) ;

	assert.deepEqual( integer.stringify( 16 , 10 , [ 0 , 15 , 15 ] , 1 , 3 ) , '255' ) ;
	assert.deepEqual( integer.stringify( 10 , 16 , [ 2 , 5 , 5 ] , 0 , 3 ) , 'ff' ) ;

	assert.deepEqual( integer.stringify( 100 , 16 , [ 2 , 55 ] , 0 , 2 ) , 'ff' ) ;
	assert.deepEqual( integer.stringify( 1000 , 16 , [ 255 ] , 0 , 1 ) , 'ff' ) ;
	assert.deepEqual( integer.stringify( 10000 , 16 , [ 255 ] , 0 , 1 ) , 'ff' ) ;

	assert.deepEqual( integer.stringify( 100 , 16 , [ 18 , 36 , 47 , 58 , 54 , 44 , 93 , 6 , 47 , 20 ] , 0 , 10 ) , 'fedcba9876543210' ) ;

	assert.deepEqual(
		integer.stringify( 10000 , 36 ,
		[ 0,312,6485,6500,280,6599,6167,8564,7451,522,8125,564,4362,6409,4355] , 0 , 15
	) , '1234567890azertyuiopqsdfghjklmwxcvbn' ) ;

	assert.deepEqual(
		integer.stringify( 10 , 36 ,
		[ 3,1,2,6,4,8,5,6,5,0,0,0,2,8,0,6,5,9,9,6,1,6,7,8,5,6,4,7,4,5,1,0,5,2,2,8,1,2,5,0,5,6,4,4,3,6,2,6,4,0,9,4,3,5,5] , 0 , 55
	) , '1234567890azertyuiopqsdfghjklmwxcvbn' ) ;

	assert.deepEqual( integer.stringify( 10000 , 36 , [ 55 , 3415 ] , 0 , 2 ) , 'bv0n' ) ;

} ) ;
