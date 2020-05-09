import test from 'ava' ;
import { XorShift128Plus } from 'xorshift.js' ;

import {
	parse,
	stringify,
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
test( macro_larger , 16 , 256 , [ 15 , 15 , 15 ] , [ 0 , 15 , 255 ] ) ;
test( macro_larger , 16 , 256 , [ 15 , 15 , 15 , 15 ] , [ 255 ] ) ;
test( macro_larger , 16 , 256 , [ 15 , 15 , 15 , 15 ] , [ 255 , 255 ] ) ;

test( macro_smaller , 256 , 16 ,  [ ] , [ ] ) ;
test( macro_smaller , 256 , 16 ,  [ 255 ] , [ ] ) ;
test( macro_smaller , 256 , 16 ,  [ 255 ] , [ 15 ] ) ;
test( macro_smaller , 256 , 16 ,  [ 255 ] , [ 15 , 15 ] ) ;
test( macro_smaller , 256 , 16 ,  [ 255 , 255 ] , [ 15 , 15 ] ) ;
test( macro_smaller , 256 , 16 ,  [ 255 , 255 ] , [ 15 , 15 , 15 ] ) ;
test( macro_smaller , 256 , 16 ,  [ 255 , 255 ] , [ 15 , 15 , 15 , 15 ] ) ;
test( macro_smaller , 256 , 16 ,  [ 255 , 255 ] , [ 0 , 15 , 15 , 15 , 15 ] ) ;

function macro_convert ( t , f , _t , e ) {
	const a = parse(f, _t, e) ;
	const s = stringify(_t, f, a, 0, a.length) ;
	t.is(e, s);
}

macro_convert.title = ( _ , f , _t , s ) => `convert ${f} ${_t} ${s.slice(0,40)+'...'}` ;

const seed = '1';
const prng = new XorShift128Plus(seed);
const _b8192 = prng.randomBytes(8192).toString('hex').replace(/^0*/, '');
test( macro_convert , 16 , 94906266 , _b8192 ) ;
