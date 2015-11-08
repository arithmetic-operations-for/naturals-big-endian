var integer = integerbigendian ;

test( 'integer._add' , function ( assert ) {

	console.log( 'integer._add' ) ;

	function t ( A , B , C ) {

		var r = 10 ;
		var a = integer.parse( 10 , r , A ) ;
		var b = integer.parse( 10 , r , B ) ;
		var c = integer._zeros( Math.max( a.length , b.length ) + 1 ) ;
		integer._add( r , a , 0 , a.length , b , 0 , b.length , c , 0 , c.length ) ;

		assert.deepEqual( integer.stringify( r , 10 , c , 0 , c.length ) , C , A + ' + ' + B + ' = ' + C ) ;

	}

	t( '1' , '1' , '2' ) ;
	t( '47' , '124' , '171' ) ;
	t( '999' , '1' , '1000' ) ;
	t( '1234567890' , '9876543210' , '11111111100' ) ;

} ) ;
