import test from 'ava' ;
import * as integer from '../../../../src' ;

test( 'translate' , function ( assert ) {

	assert.throws( integer.translate.bind( null , 16 , 16 , '!00b0C0def' ) , { message: /invalid/ } ) ;
	assert.throws( integer.translate.bind( null , 37 , 36 , '!' ) , { message: /not implemented/ } ) ;
	assert.throws( integer.translate.bind( null , 36 , 37 , 'z' ) , { message: /not implemented/ } ) ;

	assert.deepEqual( integer.translate( 2 , 2 , '0' ) , '0' ) ;
	assert.deepEqual( integer.translate( 2 , 2 , '1' ) , '1' ) ;
	assert.deepEqual( integer.translate( 2 , 2 , '10' ) , '10' ) ;
	assert.deepEqual( integer.translate( 2 , 2 , '11' ) , '11' ) ;

	assert.deepEqual( integer.translate( 2 , 2 , '1001010111' ) , '1001010111' ) ;

	assert.deepEqual( integer.translate( 16 , 16 , '0' ) , '0' ) ;
	assert.deepEqual( integer.translate( 16 , 16 , 'a' ) , 'a' ) ;
	assert.deepEqual( integer.translate( 16 , 16 , 'A0' ) , 'a0' ) ;
	assert.deepEqual( integer.translate( 16 , 16 , 'a1' ) , 'a1' ) ;

	assert.deepEqual( integer.translate( 16 , 16 , 'a00b0C0def' ) , 'a00b0c0def' ) ;

	assert.deepEqual( integer.translate( 2 , 16 , '11' ) , '3' ) ;
	assert.deepEqual( integer.translate( 16 , 2 , '3' ) , '11' ) ;

	assert.deepEqual( integer.translate( 2 , 16 , '10001' ) , '11' ) ;
	assert.deepEqual( integer.translate( 16 , 2 , '11' ) , '10001' ) ;

	assert.deepEqual( integer.translate( 2 , 10 , '11' ) , '3' ) ;
	assert.deepEqual( integer.translate( 10 , 2 , '3' ) , '11' ) ;

	assert.deepEqual( integer.translate( 10 , 16 , '256' ) , '100' ) ;
	assert.deepEqual( integer.translate( 16 , 10 , '100' ) , '256' ) ;

	assert.deepEqual( integer.translate( 10 , 16 , '255' ) , 'ff' ) ;
	assert.deepEqual( integer.translate( 16 , 10 , 'ff' ) , '255' ) ;

	assert.deepEqual( integer.translate( 16 , 10 , 'fedcba9876543210' ) , '18364758544493064720' ) ;

	assert.deepEqual(
		integer.translate( 36 , 10 , '1234567890azertyuiopqsdfghjklmwxcvbn' ) ,
		'3126485650002806599616785647451052281250564436264094355'
	) ;

} ) ;
