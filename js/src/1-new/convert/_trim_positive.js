
const _trim_positive = function ( a , ai , aj ) {

	while ( a[ai] === 0 && ai < aj ) ++ai ;

	return ai ;

} ;

exports._trim_positive = _trim_positive ;
