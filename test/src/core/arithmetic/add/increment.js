import test from 'ava' ;
import { _increment } from '../../../../../src' ;

test( '_increment' , t => {

	const a = [ 0 , 9 , 9 ] ;
	_increment( 10 , a , 0 , 3 ) ;
	t.deepEqual( a , [ 1 , 0 , 0 ] , 'increment' ) ;

	const b = [ 9 , 9 , 9 ] ;
	_increment( 10 , b , 0 , 3 ) ;
	t.deepEqual( b , [ 0 , 0 , 0 ] , 'increment wraping' ) ;

	t.true( b[-1] === undefined ) ;

} ) ;
