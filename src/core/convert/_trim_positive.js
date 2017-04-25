
export function _trim_positive ( a , ai , aj ) {

	while ( a[ai] === 0 && ai < aj ) ++ai ;

	return ai ;

}
