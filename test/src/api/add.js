import test from 'ava' ;
import { parse , _zeros , add , stringify } from '../../../src' ;

function macro ( t , A , B , C ) {

	const r = 10 ;
	const a = parse( 10 , r , A ) ;
	const b = parse( 10 , r , B ) ;
	const c = _zeros( Math.max( a.length , b.length ) + 1 ) ;
	add( r , a , 0 , a.length , b , 0 , b.length , c , 0 , c.length ) ;

	const result = stringify( r , 10 , c , 0 , c.length ) ;

	t.is( result , C ) ;

}

macro.title = ( title , A , B , C ) => `${title || ''} ${A} + ${B} = ${C}`.trim() ;

test( macro , '1' , '1' , '2' ) ;
test( macro , '47' , '124' , '171' ) ;
test( macro , '999' , '1' , '1000' ) ;
test( macro , '1234567890' , '9876543210' , '11111111100' ) ;

test( 'add wraps' , t => {

	const c = [ 'x' , 7 , 3 , 3 , 'x' ] ;

	add( 10 , [ 9 , 9 , 9 ] , 0 , 3 , [ 1 ] , 0 , 1 , c , 1 , 4 ) ;

	t.deepEqual([ 'x' , 0 , 0 , 0 , 'x' ] , c ) ;

}) ;
