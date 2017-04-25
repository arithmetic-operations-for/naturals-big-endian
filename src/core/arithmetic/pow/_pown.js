import { _zeros } from '../../array' ;
import { _mul } from '../../../api' ;

/**
 * Computes pow(a, b) using exponentiation by squaring.
 *
 */

export function _pown (r, x, a, ai, aj, c, ci, cj) {

	if ( x === 0 ) {
		c[cj-1] = 1;
	}

	else if ( x & 1 ) {

		const n = cj - ci;
		const u = _zeros(n);

		_pown(r, x - 1, a, ai, aj, u, 0, n);
		_mul(r, a, ai, aj, u, 0, n, c, ci, cj);
	}

	else {

		const n = cj - ci;
		const u = _zeros(n);

		_pown(r, x / 2, a, ai, aj, u, 0, n);
		_mul(r, u, 0, n, u, 0, n, c, ci, cj);

	}

}
