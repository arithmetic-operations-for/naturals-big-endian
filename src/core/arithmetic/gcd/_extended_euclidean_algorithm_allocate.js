import assert from 'assert';

import {_alloc, _zeros} from '../../array/index.js';

/**
 * M >= n >= 0
 * m >= 1
 */
export function _extended_euclidean_algorithm_allocate(m, n) {
	assert(n >= 0);
	assert(m >= 1);
	assert(m >= n);

	const R0 = _alloc(m);
	const R1 = _alloc(n);

	// S_0 = 1
	const S0 = _zeros(Math.max(1, n));
	S0[S0.length - 1] = 1;

	// T_0 = 0
	const T0 = _zeros(m);

	// S_1 = 0
	const S1 = _zeros(n);

	// T_1 = 1
	const T1 = _zeros(m);
	T1[T1.length - 1] = 1;

	const Q = _zeros(m);
	const X = _zeros(2 * m);

	return [R0, R1, S0, T0, S1, T1, Q, X];
}
