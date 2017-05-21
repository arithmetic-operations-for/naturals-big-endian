import { _zeros , _copy } from '../../array' ;
import { mul } from '../../../api' ;

/**
 * Computes <code>pow(a,x) = a^x</code> using exponentiation by squaring.
 * Writes result to output array.
 *
 * /!\ |C| >= |A| * x , |C| = 000...0
 *
 * @param {Number} radix The base to work with.
 * @param {Number} x The power to raise <code>a</code> to.
 * @param {Array} a The base array.
 * @param {Number} ai <code>a</code> left.
 * @param {Number} aj <code>b</code> right.
 * @param {Array} c The output array.
 * @param {Number} ci <code>a</code> left.
 * @param {Number} cj <code>b</code> right.
 */
export function _powd (r, x, a, ai, aj, c, ci, cj) {

	if ( x === 0 ) {
		c[cj-1] = 1;
	}

	else if ( x === 1 ) {
		_copy( a , ai , aj , c , cj - ( aj - ai ) ) ;
	}

	else if ( x & 1 ) {

		const p = x - 1 ;
		const n = (aj - ai) * p;
		const u = _zeros(n);

		_powd(r, p, a, ai, aj, u, 0, n);
		mul(r, u, 0, n, a, ai, aj, c, ci, cj); // largest must be put first
	}

	else {

		const p = x / 2 | 0 ;
		const n = (aj - ai) * p;
		const u = _zeros(n);

		_powd(r, p, a, ai, aj, u, 0, n);
		mul(r, u, 0, n, u, 0, n, c, ci, cj);

	}

}
