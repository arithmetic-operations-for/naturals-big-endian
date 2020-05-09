import test from 'ava' ;

import {
	_convert_to_larger_fast,
	_convert_to_smaller_fast,
	_log,
	_zeros,
} from '../../../../src' ;

function macro_larger ( t , f , _t , a , e ) {

	const [ z , x ] = _log( _t , f ) ;

	t.is(1, x);

	const b = _zeros(e.length)

	_convert_to_larger_fast( f , z , a , 0 , a.length , b , 0 , b.length ) ;

	t.deepEqual(e, b);

}

macro_larger.title = ( providedTitle , f , t , a , e ) => `_convert_to_larger_fast(${f}, ${t}, ${JSON.stringify(a)}) <${e.length}>` ;

function macro_smaller ( t , f , _t , a , e ) {

	const [ z , x ] = _log( f , _t ) ;

	t.is(1, x);

	const b = _zeros(e.length)

	_convert_to_smaller_fast( _t , z , a , 0 , a.length , b , 0 , b.length ) ;

	t.deepEqual(e, b);

}

macro_smaller.title = ( providedTitle , f , t , a , e ) => `_convert_to_smaller_fast(${f}, ${t}, ${JSON.stringify(a)}) <${e.length}>` ;

test( macro_larger , 16 , 256 , [ ] , [ ] ) ;
test( macro_larger , 16 , 256 , [ 15 ] , [ ] ) ;
test( macro_larger , 16 , 256 , [ 15 ] , [ 15 ] ) ;
test( macro_larger , 16 , 256 , [ 15 , 15 ] , [ 255 ] ) ;
test( macro_larger , 16 , 256 , [ 15 , 15 , 15 ] , [ 255 ] ) ;
test( macro_larger , 16 , 256 , [ 15 , 15 , 15 ] , [ 15 , 255 ] ) ;
test( macro_larger , 16 , 256 , [ 15 , 15 , 15 , 15 ] , [ 255 ] ) ;
test( macro_larger , 16 , 256 , [ 15 , 15 , 15 , 15 ] , [ 255 , 255 ] ) ;

test( macro_smaller , 256 , 16 ,  [ ] , [ ] ) ;
test( macro_smaller , 256 , 16 ,  [ 255 ] , [ ] ) ;
test( macro_smaller , 256 , 16 ,  [ 255 ] , [ 15 ] ) ;
test( macro_smaller , 256 , 16 ,  [ 255 ] , [ 15 , 15 ] ) ;
test( macro_smaller , 256 , 16 ,  [ 255 , 255 ] , [ 15 , 15 ] ) ;
test( macro_smaller , 256 , 16 ,  [ 255 , 255 ] , [ 15 , 15 , 15 ] ) ;
test( macro_smaller , 256 , 16 ,  [ 255 , 255 ] , [ 15 , 15 , 15 , 15 ] ) ;
