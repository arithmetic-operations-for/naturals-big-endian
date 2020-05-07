import test from 'ava' ;

import { parse , stringify , _zeros , _sub } from '../../../../../src' ;

test( '_sub' , function ( assert ) {

	function t ( C , B , A ) {

		var r = 10 ;
		var a = parse( 10 , r , A ) ;
		var b = parse( 10 , r , B ) ;
		var c = _zeros( Math.max( a.length , b.length ) + 1 ) ;
		_sub( r , a , 0 , a.length , b , 0 , b.length , c , 0 , c.length ) ;

		assert.deepEqual( stringify( r , 10 , c , 0 , c.length ) , C , A + ' - ' + B + ' = ' + C ) ;

	}

	t( '1' , '1' , '2' ) ;
	t( '47' , '124' , '171' ) ;
	t( '999' , '1' , '1000' ) ;
	t( '1234567890' , '9876543210' , '11111111100' ) ;

	var a = [ 0 ] ;
	var b = [ 1 ] ;
	var c = [ 0 , 0 , 0 ] ;

	_sub( 10 , a , 0 , 1 , b , 0 , 1 , c , 0 , 3 ) ;

	assert.deepEqual( c , [ 9 , 9 , 9 ] , 'wraping' ) ;

} ) ;
