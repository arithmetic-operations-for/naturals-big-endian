import assert from 'assert' ;

export function _trim_positive ( a , ai , aj ) {

	assert( ai >= 0 ) ;
	assert( aj <= a.length ) ;

	while ( a[ai] === 0 && ai < aj ) ++ai ;

	return ai ;

}
