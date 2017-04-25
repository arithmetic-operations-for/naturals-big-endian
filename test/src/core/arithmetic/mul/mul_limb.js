import test from 'ava' ;
import { _mul_limb } from '../../../../../src' ;

test( '_mul_limb' , t => {

	let r = 10 ;
	let x = 2 ;
	let a = [ 2 , 5 , 6 ] ;
	let b = [ -1 , 0 , 0 ] ;
	_mul_limb( r , x , a , 0 , 3 , b , 1 , 3 ) ;

	t.deepEqual( b , [ -1 , 1 , 2 ] ) ;

	r = 10 ;
	x = 2 ;
	a = [ 5 , 1 , 2 ] ;
	b = [ 0 , 0 , 0 ] ;
	_mul_limb( r , x , a , 0 , 3 , b , 0 , 3 ) ;

	t.deepEqual( b , [ 0 , 2 , 4 ] ) ;

	r = 10 ;
	x = 2 ;
	a = [ 5 , 1 , 2 ] ;
	b = [ 0 , 0 , 0 , 0 ] ;
	_mul_limb( r , x , a , 0 , 3 , b , 0 , 4 ) ;

	t.deepEqual( b , [ 1 , 0 , 2 , 4 ] ) ;

} ) ;
