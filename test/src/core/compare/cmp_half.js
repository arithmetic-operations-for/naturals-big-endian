import test from 'ava' ;
import { _cmp_half } from '../../../../src' ;

function macro ( t , r , a , ai , aj , expected ) {
	const result = _cmp_half(r, a, ai, aj);
	t.is(expected, result);
}

macro.title = (title, r, a, ai, aj, expected) =>
	`${title || ''} _cmp_half(${r}, ${JSON.stringify(a)}, ${ai}, ${aj}) === ${expected}` ;

test(macro, 2, [1, 0, 0], 0, 3,  0) ;

test(macro, 2, [1, 1, 0], 0, 3,  1) ;
test(macro, 2, [1, 1, 0], 1, 3,  0) ;
test(macro, 2, [1, 1, 0], 2, 3, -1) ;
test(macro, 2, [1, 1, 0], 3, 3, -1) ;

test(macro, 2, [1, 1, 0], 0, 2,  1) ;
test(macro, 2, [1, 1, 0], 1, 2,  0) ;
test(macro, 2, [1, 1, 0], 2, 2, -1) ;
test(macro, 2, [1, 1, 0], 3, 2, -1) ;

test(macro, 2, [1, 1, 0], 0, 1,  0) ;
test(macro, 2, [1, 1, 0], 1, 1, -1) ;
test(macro, 2, [1, 1, 0], 2, 1, -1) ;
test(macro, 2, [1, 1, 0], 3, 1, -1) ;

test(macro, 2, [1, 1, 0], 0, 0, -1) ;
test(macro, 2, [1, 1, 0], 1, 0, -1) ;
test(macro, 2, [1, 1, 0], 2, 0, -1) ;
test(macro, 2, [1, 1, 0], 3, 0, -1) ;

test(macro, 3, [1, 0, 0], 0, 3, -1) ;

test(macro, 3, [1, 1, 0], 0, 3, -1) ;
test(macro, 3, [1, 1, 0], 1, 3, -1) ;
test(macro, 3, [1, 1, 0], 2, 3, -1) ;
test(macro, 3, [1, 1, 0], 3, 3, -1) ;

test(macro, 3, [1, 1, 0], 0, 2, -1) ;
test(macro, 3, [1, 1, 0], 1, 2, -1) ;
test(macro, 3, [1, 1, 0], 2, 2, -1) ;
test(macro, 3, [1, 1, 0], 3, 2, -1) ;

test(macro, 3, [1, 1, 0], 0, 1, -1) ;
test(macro, 3, [1, 1, 0], 1, 1, -1) ;
test(macro, 3, [1, 1, 0], 2, 1, -1) ;
test(macro, 3, [1, 1, 0], 3, 1, -1) ;

test(macro, 3, [1, 1, 0], 0, 0, -1) ;
test(macro, 3, [1, 1, 0], 1, 0, -1) ;
test(macro, 3, [1, 1, 0], 2, 0, -1) ;
test(macro, 3, [1, 1, 0], 3, 0, -1) ;

test(macro, 3, [1, 1, 2], 0, 3,  1) ;
test(macro, 3, [1, 1, 2], 1, 3,  1) ;
test(macro, 3, [1, 1, 2], 2, 3,  1) ;
test(macro, 3, [1, 1, 2], 3, 3, -1) ;

test(macro, 3, [1, 1, 1], 0, 3, -1) ;
test(macro, 3, [1, 2, 2], 0, 3,  1) ;
test(macro, 3, [2, 2, 2], 0, 3,  1) ;

test(macro, 5, [2, 2, 2], 0, 3, -1) ;
test(macro, 5, [2, 2, 3], 0, 3, 1) ;
