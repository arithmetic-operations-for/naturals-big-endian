var integer = integerbigendian ;

test( 'integer._schoolbook_mul' , function ( assert ) {

	console.log( 'integer._schoolbook_mul' ) ;

	function t ( A , B , C ) {

		var r = 10 ;
		var a = integer.parse( 10 , r , A ) ;
		var b = integer.parse( 10 , r , B ) ;
		var c = integer._zeros( a.length + b.length ) ;
		integer._schoolbook_mul( r , a , 0 , a.length , b , 0 , b.length , c , 0 , c.length ) ;

		assert.deepEqual( integer.stringify( r , 10 , c , 0 , c.length ) , C , A + ' * ' + B + ' = ' + C ) ;

	}

	t( '0' , '9223239263' , '0' ) ;
	t( '1' , '1' , '1' ) ;
	t( '47' , '124' , '5828' ) ;
	t( '999' , '1' , '999' ) ;
	t( '1234567890' , '9876543210' , '12193263111263526900' ) ;

} ) ;
