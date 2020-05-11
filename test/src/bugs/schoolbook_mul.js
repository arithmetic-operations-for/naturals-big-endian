import test from 'ava' ;

import {
	_zeros ,
	_schoolbook_mul ,
} from '../../../src' ;

test( '_schoolbook_mul handles overflows' , t => {

	const MAX_BASE = Math.floor(Math.pow(2,53/2)) | 0 ;

	const a = [ MAX_BASE - 1 , MAX_BASE - 1 , MAX_BASE - 1 , MAX_BASE - 1 ] ;
	const c = _zeros(2*a.length);
	_schoolbook_mul(MAX_BASE, a, 0, a.length, a, 0, a.length, c, 0, c.length) ;

	const expected = [ MAX_BASE - 1 , MAX_BASE - 1 , MAX_BASE - 1 , MAX_BASE - 2 , 0 , 0 , 0 , 1 ] ;

	t.deepEqual(expected, c);

} ) ;
