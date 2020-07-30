import assert from 'assert' ;

export function _copy ( a , ai , aj , b , bi ) {

	assert(0 <= ai && aj <= a.length);
	assert(bi >= 0);
	assert(b.length - bi >= aj - ai);

	for ( ; ai < aj ; ++ai, ++bi ) b[bi] = a[ai] ;
	//while ( ai < aj ) b[++bi] = a[++ai] ;

}
