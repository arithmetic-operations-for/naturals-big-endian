import test from 'ava' ;
import { parse , _zeros , _schoolbook_mul , stringify } from '../../../../../src' ;

function macro ( t , A , B , C ) {

	const r = 10 ;
	const a = parse( 10 , r , A ) ;
	const b = parse( 10 , r , B ) ;
	const c = _zeros( a.length + b.length ) ;

	_schoolbook_mul( r , a , 0 , a.length , b , 0 , b.length , c , 0 , c.length ) ;

	const result = stringify( r , 10 , c , 0 , c.length ) ;

	t.is( result , C ) ;

}

macro.title = ( title , A , B , C ) => `${title || ''} ${A} * ${B} = ${C}`.trim();

test( macro , '0' , '9223239263' , '0' ) ;
test( macro , '1' , '1' , '1' ) ;
test( macro , '47' , '124' , '5828' ) ;
test( macro , '999' , '1' , '999' ) ;
test( macro , '1234567890' , '9876543210' , '12193263111263526900' ) ;
