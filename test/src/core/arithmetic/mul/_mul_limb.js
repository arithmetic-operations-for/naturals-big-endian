import test from 'ava' ;
import * as integer from '../../../src' ;

test( 'integer._mul_limb' , function ( assert ) {

	var r = 10 ;
	var x = 2 ;
	var a = [ 2 , 5 , 6 ] ;
	var b = [ -1 , 0 , 0 ] ;
	integer._mul_limb( r , x , a , 0 , 3 , b , 1 , 3 ) ;

	assert.deepEqual( b , [ -1 , 1 , 2 ] ) ;

	r = 10 ;
	x = 2 ;
	a = [ 5 , 1 , 2 ] ;
	b = [ 0 , 0 , 0 ] ;
	integer._mul_limb( r , x , a , 0 , 3 , b , 0 , 3 ) ;

	assert.deepEqual( b , [ 0 , 2 , 4 ] ) ;

	r = 10 ;
	x = 2 ;
	a = [ 5 , 1 , 2 ] ;
	b = [ 0 , 0 , 0 , 0 ] ;
	integer._mul_limb( r , x , a , 0 , 3 , b , 0 , 4 ) ;

	assert.deepEqual( b , [ 1 , 0 , 2 , 4 ] ) ;

} ) ;
