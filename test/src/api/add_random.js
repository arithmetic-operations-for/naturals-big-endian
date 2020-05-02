import test from 'ava' ;
import { range } from '@aureooms/js-itertools' ;
import { randint } from '@aureooms/js-random' ;

import { parse , _zeros , add , stringify } from '../../../src' ;

function macro ( t , r , A , B ) {

	DONE.add(macro.title(null, r, A, B)) ;

	const C = A + B ;

	const a = parse( r , r , A.toString(r) ) ;
	const b = parse( r , r , B.toString(r) ) ;
	const c = _zeros( Math.max( a.length , b.length ) + 1 ) ;

	add( r , a , 0 , a.length , b , 0 , b.length , c , 0 , c.length ) ;

	const result = stringify( r , r , c , 0 , c.length ) ;

	t.is( C.toString(r), result ) ;

}

macro.title = (providedTitle, r, A , B) => providedTitle || `add(${r},${A},${B}) = ${A+B} <random>`;

const N = 20000 ;
const MIN_RADIX = 2 ;
const MAX_RADIX = 36 ;
const MIN = 0 ;
const MAX = Math.pow(2,53) - 1 ;
const DONE = new Set();

for ( const i of range(N) ) {
	while ( true ) {
		const r = randint(MIN_RADIX, MAX_RADIX + 1);
		let A = randint(MIN, MAX + 1);
		let B = randint(MIN, MAX - A + 1);
		if (randint(0,2)) [A,B] = [B,A] ;
		if (!DONE.has(macro.title(null, r, A, B))) {
			test( macro , r , A , B ) ;
			break ;
		}
	}
}
