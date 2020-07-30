import assert from 'assert' ;

export function _trim_positive ( a , ai , aj ) {

	assert(0 <= ai && aj <= a.length);

	while ( ai < aj && a[ai] === 0 ) ++ai ;

	return ai ;

}
