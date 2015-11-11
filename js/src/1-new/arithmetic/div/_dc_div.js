

/**
 * Input
 * -----
 *  - No leading zeros
 *  - |A| = |C|
 *
 */
const _dc_div = function ( X , a , ai , aj , b , bi , bj , c , ci , cj ) {

	// [BZ98] Fast Recursive Division

	const r = aj - ai ;
	const s = bj - bi ;

	// shift to get n = 2^k for some k
	let _m = 1 ;
	let _k = 0 ;

	while ( _m  < s ) {
		_m <<= 1 ;
		++_k ;
	}

	const m = _m ;
	const k = _k ;
	const n = m ;

	const shift = n - s ;

	const w = r + shift + 1 ;
	const t = Math.ceil( w / n ) ;
	const _ai = 0 ;
	const _aj = t * n ;         // + 1 because of
	const _a = _zeros( _aj ) ;  // potential normalization overflow
	const _ak = aj - shift - r ;
	_copy( a , ai , aj , _a , T ) ;

	const _bi = 0 ;
	const _bj = n ;
	const _b = _zeros( n ) ;
	_copy( b , bi , bj , _b , 0 ) ;

	const x = _b[_bi] ;
	const _X = X / 2 ;

	if ( x < _X ) {

		// normalize
		const z = Math.ceil( _r / x ) ;
		_mul_limb( X , z , _a , _ai , _aj ) ;
		_mul_limb( X , z , _b , _bi , _bj ) ;

	}

	const _cj = ( t - 1 ) * n ;
	const _c = _zeros( _cj ) ;

	for ( let i = 0 ; i < _aj - n ; i += n ) {

		_dc_div_21( X , _a , i , i + ( n << 1 ) , _b , _bi , _bj , _c , i , i + n ) ;

	}

	_copy( _c , _cj - r , _cj , c , ci ) ;

	const j = _mod_limb( X , z , _a , _ai , _ak ) ;
	_div_limb_partial( X , j , z , _a , _ak , _aj - shift , a , ai , aj ) ;

} ;

exports._dc_div = _dc_div ;
