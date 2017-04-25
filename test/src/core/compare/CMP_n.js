import test from 'ava' ;
import { _CMP_n } from '../../../../src' ;

test( '_CMP_n' , t => {
	t.true( _CMP_n( [ 1 , 2 ] , 0 , 2 , [ 1 , 2 ] , 0 ) === 0 ) ;
	t.true( _CMP_n( [ 1 , 2 ] , 0 , 2 , [ 1 , 1 ] , 0 )  >  0 ) ;
	t.true( _CMP_n( [ 1 , 2 ] , 0 , 2 , [ 2 , 2 ] , 0 )  <  0 ) ;
} ) ;
