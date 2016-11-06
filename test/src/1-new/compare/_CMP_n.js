import test from 'ava' ;
import * as integer from '../../../src' ;

test( 'integer._CMP_n' , function ( assert ) {
	assert.true( integer._CMP_n( [ 1 , 2 ] , 0 , 2 , [ 1 , 2 ] , 0 ) === 0 ) ;
	assert.true( integer._CMP_n( [ 1 , 2 ] , 0 , 2 , [ 1 , 1 ] , 0 ) > 0 ) ;
	assert.true( integer._CMP_n( [ 1 , 2 ] , 0 , 2 , [ 2 , 2 ] , 0 ) < 0 ) ;
} ) ;
