import assert from 'assert' ;

import { jz } from '../../../api/compare' ;
import { _zeros , _copy } from '../../array' ;
import { _mul } from '../mul' ;

/**
 * Computes <code>pow(a,x) = a^x</code> using exponentiation by squaring.
 * Writes result to output array.
 *
 * /!\ |A| >= 1, |C| >= 1, |C| >= |A| * x, |C| = 000...0
 *
 * @param {Number} r The base to work with.
 * @param {Number} x The power to raise <code>a</code> to.
 * @param {Array} a The base array.
 * @param {Number} ai <code>a</code> left.
 * @param {Number} aj <code>b</code> right.
 * @param {Array} c The output array.
 * @param {Number} ci <code>a</code> left.
 * @param {Number} cj <code>b</code> right.
 */
export function _pow_double_recursive (r, x, a, ai, aj, c, ci, cj) {

	assert(r >= 2);
	assert(x >= 0);
	assert(0 <= ai && aj <= a.length);
	assert(0 <= ci && cj <= c.length);
	assert(aj - ai >= 1);
	assert(cj - ci >= 1);
	assert(cj - ci >= (aj - ai) * x);
	assert(jz(c, ci, cj));

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

		_pow_double_recursive(r, p, a, ai, aj, u, 0, n);
		_mul(r, u, 0, n, a, ai, aj, c, ci, cj); // largest must be put first
	}

	else {

		const p = x / 2 | 0 ;
		const n = (aj - ai) * p;
		const u = _zeros(n);

		_pow_double_recursive(r, p, a, ai, aj, u, 0, n);
		_mul(r, u, 0, n, u, 0, n, c, ci, cj); // TODO use squaring function here

	}

}
