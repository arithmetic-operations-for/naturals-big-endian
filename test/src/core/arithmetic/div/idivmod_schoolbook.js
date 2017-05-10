import test from 'ava' ;
import * as integer from '../../../../../src' ;

test( 'integer._idivmod_schoolbook' , function ( assert ) {

var t = function ( dividend , divisor , quotient , remainder ) {

	var B = 10 ;

	var D = integer.parse( 10 , B , dividend ) ;
	var d = integer.parse( 10 , B , divisor ) ;
	var q = integer._zeros( D.length ) ;

	integer._idivmod_schoolbook( B , D , 0 , D.length , d , 0 , d.length , q , 0 ) ;

	assert.deepEqual(
		integer.stringify( B , 10 , q , 0 , q.length ) , quotient ,
		dividend + ' / ' + divisor + ' = ' + quotient
	) ;

	assert.deepEqual(
		integer.stringify( B , 10 , D , 0 , D.length ) , remainder ,
		dividend + ' % ' + divisor + ' = ' + remainder
	) ;

} ;


t( '7' , '10' , '0' , '7' ) ;
t( '10' , '7' , '1' , '3' ) ;
t( '7' , '7' , '1' , '0' ) ;
t( '4' , '2' , '2' , '0' ) ;
t( '15' , '3' , '5' , '0' ) ;
t( '16' , '3' , '5' , '1' ) ;

t( '89' , '7' , '12' , '5' ) ;
t( '789' , '77' , '10' , '19' ) ;

t( '120' , '39' , '3' , '3' ) ;
t( '250' , '59' , '4' , '14' ) ;
t( '500' , '59' , '8' , '28' ) ;

t( '400' , '59' , '6' , '46' ) ;

t( '421' , '23' , '18' , '7' ) ;
t( '23' , '421' , '0' , '23' ) ;

t( '3611' , '12' , '300' , '11' ) ;
t( '3899' , '300' , '12' , '299' ) ;

t( '1' , '9999999999999' , '0' , '1' ) ;
t( '9999999999999' , '1' , '9999999999999' , '0' ) ;

t( '9999999999999' , '7777777777777' , '1' , '2222222222222' ) ;

t( '9999999999999' , '777777777777' , '12' , '666666666675' ) ;


} ) ;
