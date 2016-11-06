
/**
 * Computes q <- a / b and a <- a % b.
 * No leading zeros allowed.
 * q has length at least qi + aj - ai
 */
export function schoolbook_div ( r , a , ai , aj , b , bi , bj , q , qi ) {

	const _r = Math.ceil( r / 2 ) ;
	const x = b[bi] ;

	if ( x < _r ) {

		// we need x to be >= _r so we multiply b by ceil( _r / x )
		// this gives us <= ( 1 + _r / x ) b < r^(bj-bi)
		// (this can be implemented faster using bit shifts if r = 2^k )
		const z = Math.ceil( _r / x ) ;
		const m = aj - ai + 1 ;
		const n = bj - bi ;

		const _a = _zeros( m ) ;
		_mul_limb( r , z , a , ai , aj , _a , 0 , m ) ;

		const _b = _zeros( n ) ;
		_mul_limb( r , z , b , bi , bj , _b , 0 , n ) ;

		const _q = _zeros( m ) ;

		_schoolbook_div( r , _a , 0 , m , _b , 0 , n , _q , 0 ) ;
		_div_limb_partial_fast( r , _a[0] , z , _a , 1 , m , a , ai ) ;
		_copy( _q , 1 , m , q , qi ) ;
		return ;

	}

	return _schoolbook_div( r , a , ai , aj , b , bi , bj , q , qi ) ;

}
