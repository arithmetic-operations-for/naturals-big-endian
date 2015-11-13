
var integer = integerbigendian ;

test( 'integer._CMP_n' , function ( assert ) {
	console.log( 'integer._CMP_n' ) ;
	assert.ok( integer._CMP_n( [ 1 , 2 ] , 0 , 2 , [ 1 , 2 ] , 0 ) === 0 ) ;
	assert.ok( integer._CMP_n( [ 1 , 2 ] , 0 , 2 , [ 1 , 1 ] , 0 ) > 0 ) ;
	assert.ok( integer._CMP_n( [ 1 , 2 ] , 0 , 2 , [ 2 , 2 ] , 0 ) < 0 ) ;

} ) ;
