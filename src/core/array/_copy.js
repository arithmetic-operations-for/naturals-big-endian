import assert from 'assert' ;

export function _copy ( a , ai , aj , b , bi ) {

	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0);
	assert(bi + (aj-ai) <= b.length);

	for ( ; ai < aj ; ++ai, ++bi ) b[bi] = a[ai] ;
	//while ( ai < aj ) b[++bi] = a[++ai] ;

}
