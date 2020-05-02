import test from 'ava' ;
import { range } from '@aureooms/js-itertools' ;
import { randint } from '@aureooms/js-random' ;

import { parse , _zeros , mul , stringify } from '../../../src' ;

function macro ( t , r , A , B ) {

	DONE.add(macro.title(null, r, A, B)) ;

	const C = A * B ;

	const a = parse( r , r , A.toString(r) ) ;
	const b = parse( r , r , B.toString(r) ) ;
	const c = _zeros( a.length + b.length ) ;

	mul( r , a , 0 , a.length , b , 0 , b.length , c , 0 , c.length ) ;

	//t.is( C.toString(r), c.join(''));
	const result = stringify( r , r , c , 0 , c.length ) ;

	t.is( C.toString(r), result ) ;

}

macro.title = (providedTitle, r, A , B) => providedTitle || `mul(${r},${A},${B}) = ${A*B} <random>`;

const N = 20000 ;
const MIN_RADIX = 2 ;
const MAX_RADIX = 36 ;
const MIN = 0 ;
const MAX = Math.pow(2,Math.floor(Math.log(Math.sqrt(Math.pow(2,53))))) ;
const DONE = new Set();

test( macro , 2 , 236498 , 196086 ) ;
test( macro , 2 , 237731 , 234914 ) ;
test( macro , 2 , 242475 , 221659 ) ;
test( macro , 2 , 247796 , 204437 ) ;
test( macro , 2 ,  87996 , 226805 ) ;
test( macro , 2 , 240042 , 191854 ) ;
test( macro , 3 ,  58072 ,  38617 ) ;
test( macro , 3 ,  51224 ,  54163 ) ;

for ( const i of range(N) ) {
	while ( true ) {
		const r = randint(MIN_RADIX, MAX_RADIX + 1);
		const A = randint(MIN, MAX + 1);
		const B = randint(MIN, MAX + 1);
		if (!DONE.has(macro.title(null, r, A, B))) {
			test( macro , r , A , B ) ;
			break ;
		}
	}
}
