import test from 'ava' ;
import * as integer from "../../../../../src/index.js" ;

function macro ( t , dividend , divisor , quotient , remainder ) {

	const B = 10 ;

	const D = integer.parse( B , B , dividend ) ;
	const d = integer.parse( B , B , divisor ) ;
	const q = integer._zeros( D.length ) ;

	integer._idivmod_slow( B , D , 0 , D.length , d , 0 , d.length , q , 0 ) ;

	t.deepEqual(
		integer.stringify( B , B , q , 0 , q.length ) , quotient ,
		dividend + ' / ' + divisor + ' = ' + quotient
	) ;

	t.deepEqual(
		integer.stringify( B , B , D , 0 , D.length ) , remainder ,
		dividend + ' % ' + divisor + ' = ' + remainder
	) ;

}

macro.title = (_, dividend , divisor , quotient , remainder) =>
	`integer._idivmod_slow: ${divisor} = ${quotient} * ${divisor} + ${remainder}` ;

test( macro, '7' , '10' , '0' , '7' ) ;
test( macro, '10' , '7' , '1' , '3' ) ;
test( macro, '7' , '7' , '1' , '0' ) ;
test( macro, '4' , '2' , '2' , '0' ) ;
test( macro, '15' , '3' , '5' , '0' ) ;
test( macro, '16' , '3' , '5' , '1' ) ;

test( macro, '89' , '7' , '12' , '5' ) ;
test( macro, '789' , '77' , '10' , '19' ) ;

test( macro, '120' , '39' , '3' , '3' ) ;
test( macro, '250' , '59' , '4' , '14' ) ;
test( macro, '500' , '59' , '8' , '28' ) ;

test( macro, '400' , '59' , '6' , '46' ) ;

test( macro, '421' , '23' , '18' , '7' ) ;
test( macro, '23' , '421' , '0' , '23' ) ;

test( macro, '3611' , '12' , '300' , '11' ) ;
test( macro, '3899' , '300' , '12' , '299' ) ;

test( macro, '1' , '9999999999999' , '0' , '1' ) ;
test( macro, '9999999999999' , '1' , '9999999999999' , '0' ) ;

test( macro, '9999999999999' , '7777777777777' , '1' , '2222222222222' ) ;

test( macro, '9999999999999' , '777777777777' , '12' , '666666666675' ) ;
