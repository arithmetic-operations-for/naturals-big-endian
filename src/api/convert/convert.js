import { convert_keep_zeros } from "../../core/convert/convert_keep_zeros.js" ;
import { trim_natural } from "../../core/convert/trim_natural.js" ;

import assert from 'assert' ;

export function convert ( f , t , a , ai , aj ) {

	assert(f >= 2);
	assert(t >= 2);
	assert(ai >= 0);
	assert(aj <= a.length);
	assert(aj - ai >= 0);

	const b = convert_keep_zeros( f , t , a , ai , aj ) ;

	return trim_natural( b , 0 , b.length ) ;

}
