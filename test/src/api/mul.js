import test from 'ava' ;
import { parse , _zeros , mul , stringify } from '../../../src' ;


function macro ( t , A , B , C ) {

	const r = 10 ;
	const a = parse( 10 , r , A ) ;
	const b = parse( 10 , r , B ) ;
	const c = _zeros( a.length + b.length ) ;

	mul( r , a , 0 , a.length , b , 0 , b.length , c , 0 , c.length ) ;

	const result = stringify( r , 10 , c , 0 , c.length ) ;

	t.is( C, result ) ;

}

macro.title = (providedTitle, A , B , C) => providedTitle || `mul(${A},${B}) = ${C}`;


test( macro , '0' , '9223239263' , '0' ) ;
test( macro , '1' , '1' , '1' ) ;
test( macro , '47' , '124' , '5828' ) ;
test( macro , '999' , '1' , '999' ) ;
test( macro , '1234567890' , '9876543210' , '12193263111263526900' ) ;
test( macro ,
	'783947893749873947398479387498374983794837948' ,
	'783947893749873947398479387498374983794837948' ,
	'614574300114863651719572431453540650301628339851759553910063055039260739276277131580850704'
) ;

test( macro , '41635564802587630124971701498526931600520671849926893478847011' , '11' , '457991212828463931374688716483796247605727390349195828267317121' ) ;
test( macro , '11', '41635564802587630124971701498526931600520671849926893478847011' , '457991212828463931374688716483796247605727390349195828267317121' ) ;


function boundaries ( t , a , ai , aj , b , bi , bj , C ) {

	const r = 10 ;
	const c = _zeros( aj - ai + bj - bi ) ;

	mul( r , a , ai , aj , b , bi , bj , c , 0 , c.length ) ;

	const result = stringify( r , 10 , c , 0 , c.length ) ;

	t.is( C , result ) ;

}

boundaries.title = (providedTitle, a , ai , aj , b , bi , bj , C) => providedTitle || `mul(${a.join('')}[${ai}:${aj}],${b.join('')}[${bi}:${bj}]) = ${C}`;


test( boundaries , [1,2] , 0 , 1 , [1,2,3] , 0 , 1 , '1' ) ;
test( boundaries , [1,2] , 0 , 1 , [1,2,3] , 0 , 2 , '12' ) ;
test( boundaries , [1,2] , 0 , 1 , [1,2,3] , 0 , 3 , '123' ) ;
test( boundaries , [1,2] , 0 , 1 , [1,2,3] , 1 , 2 , '2' ) ;
test( boundaries , [1,2] , 0 , 1 , [1,2,3] , 1 , 3 , '23' ) ;
test( boundaries , [1,2] , 0 , 1 , [1,2,3] , 2 , 3 , '3' ) ;
test( boundaries , [1,2] , 0 , 2 , [1,2,3] , 0 , 1 , '12' ) ;
test( boundaries , [1,2] , 0 , 2 , [1,2,3] , 0 , 2 , '144' ) ;
test( boundaries , [1,2] , 0 , 2 , [1,2,3] , 0 , 3 , '1476' ) ;
test( boundaries , [1,2] , 0 , 2 , [1,2,3] , 1 , 2 , '24' ) ;
test( boundaries , [1,2] , 0 , 2 , [1,2,3] , 1 , 3 , '276' ) ;
test( boundaries , [1,2] , 0 , 2 , [1,2,3] , 2 , 3 , '36' ) ;
test( boundaries , [1,2] , 1 , 2 , [1,2,3] , 0 , 1 , '2' ) ;
test( boundaries , [1,2] , 1 , 2 , [1,2,3] , 0 , 2 , '24' ) ;
test( boundaries , [1,2] , 1 , 2 , [1,2,3] , 0 , 3 , '246' ) ;
test( boundaries , [1,2] , 1 , 2 , [1,2,3] , 1 , 2 , '4' ) ;
test( boundaries , [1,2] , 1 , 2 , [1,2,3] , 1 , 3 , '46' ) ;
test( boundaries , [1,2] , 1 , 2 , [1,2,3] , 2 , 3 , '6' ) ;

test( boundaries , [1,2] , 0 , 0 , [1,2,3] , 0 , 0 , '0')
test( boundaries , [1,2] , 0 , 0 , [1,2,3] , 1 , 1 , '0')
test( boundaries , [1,2] , 0 , 0 , [1,2,3] , 2 , 2 , '0')
test( boundaries , [1,2] , 0 , 0 , [1,2,3] , 3 , 3 , '0')

test( boundaries , [1,2] , 1 , 1 , [1,2,3] , 0 , 0 , '0')
test( boundaries , [1,2] , 1 , 1 , [1,2,3] , 1 , 1 , '0')
test( boundaries , [1,2] , 1 , 1 , [1,2,3] , 2 , 2 , '0')
test( boundaries , [1,2] , 1 , 1 , [1,2,3] , 3 , 3 , '0')

test( boundaries , [1,2] , 2 , 2 , [1,2,3] , 0 , 0 , '0')
test( boundaries , [1,2] , 2 , 2 , [1,2,3] , 1 , 1 , '0')
test( boundaries , [1,2] , 2 , 2 , [1,2,3] , 2 , 2 , '0')
test( boundaries , [1,2] , 2 , 2 , [1,2,3] , 3 , 3 , '0')

test( boundaries , [1,2] , 0 , 0 , [1,2,3] , 0 , 1 , '0')
test( boundaries , [1,2] , 0 , 0 , [1,2,3] , 0 , 2 , '0')
test( boundaries , [1,2] , 0 , 0 , [1,2,3] , 0 , 3 , '0')
test( boundaries , [1,2] , 0 , 0 , [1,2,3] , 1 , 2 , '0')
test( boundaries , [1,2] , 0 , 0 , [1,2,3] , 1 , 3 , '0')
test( boundaries , [1,2] , 0 , 0 , [1,2,3] , 2 , 3 , '0')

test( boundaries , [1,2] , 1 , 1 , [1,2,3] , 0 , 1 , '0')
test( boundaries , [1,2] , 1 , 1 , [1,2,3] , 0 , 2 , '0')
test( boundaries , [1,2] , 1 , 1 , [1,2,3] , 0 , 3 , '0')
test( boundaries , [1,2] , 1 , 1 , [1,2,3] , 1 , 2 , '0')
test( boundaries , [1,2] , 1 , 1 , [1,2,3] , 1 , 3 , '0')
test( boundaries , [1,2] , 1 , 1 , [1,2,3] , 2 , 3 , '0')

test( boundaries , [1,2] , 2 , 2 , [1,2,3] , 0 , 1 , '0')
test( boundaries , [1,2] , 2 , 2 , [1,2,3] , 0 , 2 , '0')
test( boundaries , [1,2] , 2 , 2 , [1,2,3] , 0 , 3 , '0')
test( boundaries , [1,2] , 2 , 2 , [1,2,3] , 1 , 2 , '0')
test( boundaries , [1,2] , 2 , 2 , [1,2,3] , 1 , 3 , '0')
test( boundaries , [1,2] , 2 , 2 , [1,2,3] , 2 , 3 , '0')

test( boundaries , [1,2] , 0 , 1 , [1,2,3] , 0 , 0 , '0')
test( boundaries , [1,2] , 0 , 2 , [1,2,3] , 0 , 0 , '0')
test( boundaries , [1,2] , 1 , 2 , [1,2,3] , 0 , 0 , '0')

test( boundaries , [1,2] , 0 , 1 , [1,2,3] , 1 , 1 , '0')
test( boundaries , [1,2] , 0 , 2 , [1,2,3] , 1 , 1 , '0')
test( boundaries , [1,2] , 1 , 2 , [1,2,3] , 1 , 1 , '0')

test( boundaries , [1,2] , 0 , 1 , [1,2,3] , 2 , 2 , '0')
test( boundaries , [1,2] , 0 , 2 , [1,2,3] , 2 , 2 , '0')
test( boundaries , [1,2] , 1 , 2 , [1,2,3] , 2 , 2 , '0')

test( boundaries , [1,2] , 0 , 1 , [1,2,3] , 3 , 3 , '0')
test( boundaries , [1,2] , 0 , 2 , [1,2,3] , 3 , 3 , '0')
test( boundaries , [1,2] , 1 , 2 , [1,2,3] , 3 , 3 , '0')
